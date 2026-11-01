/**
 * Flash pieces over HTTP: made in the background, polled until ready, played by the client in a sandboxed iframe.
 *
 *   POST /life/api/flash          { visit, token? } | { space, life, lang, identity, note, token? }, intent?  → the job
 *   GET  /life/api/flash/:id                                                                → the job (no HTML)
 *   GET  /life/api/flash/:id/html                                                           → the composed piece
 *                                                                          (text/plain + CSP sandbox: it is only
 *                                                                          ever run inside a sandboxed iframe)
 *   GET  /life/api/flash/:id/cover                                                          → its last frame (jpeg)
 *   POST /life/api/flash/:id/report { ok, errors }  → the player's rehearsal saw it break: it is withdrawn
 *
 * One piece a visitor (docs/flash.md §1): the plaza asks for it once they are back from their first life, and whoever
 * asks again — the same visit, another life's visit, a reload — gets the same job. A visitor is known by their
 * browser's token and by what they told the gate (each life plans a visit of its own, so a visit id alone would make
 * four). A piece that failed may be asked for again, LIFE_FLASH_PER_VISITOR attempts a day in all.
 *
 * Guards: LIFE_FLASH_PER_DAY pieces a day for the whole site (counted from the jobs on disk, so a restart doesn't
 * reset it), LIFE_FLASH_CONCURRENCY made at once, at most LIFE_FLASH_QUEUE waiting (past that the workshop says it is
 * busy rather than keep someone waiting half an hour), LIFE_FLASH_PER_IP_HOUR new pieces an hour from one address,
 * and nothing for a visitor the gate is caring for (they spoke of not wanting to live). A job a restart interrupts is
 * queued again if it is less than half an hour old.
 *
 * Env: LIFE_FLASH_MODELS / LIFE_FLASH_BUILD_MODELS (make.mjs), LIFE_FLASH_TRIAL (auto | off), LIFE_FLASH_POLISH
 * (off by default: the minute a redraw costs isn't spent; auto: redraw only a piece a Claude model didn't write | on),
 * LIFE_FLASH_REFERENCE (on | off: a finished example from another life shown as the bar for craft).
 */
import { randomBytes, createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { careOf, clean, cleanLife } from "../spaces/cast.mjs";
import { fieldOf } from "./fields.mjs";
import { visitorOf } from "./prompt.mjs";
import { MAKERS, makePiece, polishMode, referenceFor } from "./make.mjs";

const num = (v, fallback, min = 0) => (v == null || v === "" || !Number.isFinite(Number(v)) ? fallback : Math.max(min, Number(v)));
const PER_DAY = num(process.env.LIFE_FLASH_PER_DAY, 150);
const CONCURRENCY = num(process.env.LIFE_FLASH_CONCURRENCY, 2, 1);
const QUEUE_MAX = num(process.env.LIFE_FLASH_QUEUE, 8);
const PER_IP_HOUR = num(process.env.LIFE_FLASH_PER_IP_HOUR, 6, 1);
const PER_VISITOR = num(process.env.LIFE_FLASH_PER_VISITOR, 2, 1);
const POLISH = polishMode(process.env.LIFE_FLASH_POLISH ?? "off");
const LIVE = String(process.env.LIFE_FLASH_LIVE || "off").toLowerCase() === "on";
const REFERENCE = String(process.env.LIFE_FLASH_REFERENCE || "on").toLowerCase() !== "off";
/** A queued job whose visitor hasn't looked for it in this long is not made (they have gone). */
const ABANDONED_MS = 30 * 60_000;
/** How long each stage usually takes (ms), learned as pieces are made; the visitor's progress line follows these. */
const typical = { queued: 15_000, thinking: 65_000, making: 130_000, trying: 100_000, mending: 30_000, polishing: 170_000 };
const STAGE_OF_CALL = { concept: "thinking", build: "making", repair: "mending", polish: "polishing" };
const EXPECTED_CHARS = 32_000;

const newId = () => randomBytes(9).toString("base64url");
const langOf = (v) => (String(v || "").toLowerCase().startsWith("en") ? "en" : "zh");
const today = () => new Date().toISOString().slice(0, 10);

/**
 * The keys a visitor is known by, whichever life the piece is asked from: their browser's token, and what they told
 * the gate (who they are, their story and answers, their details). Empty words name nobody, so they give no key.
 */
export function visitorKeys(visitor, token = "") {
  const keys = [];
  const t = String(token || "").replace(/[^\w-]/g, "").slice(0, 40);
  if (t.length >= 8) keys.push(`t:${t}`);
  const m = visitor?.me || {};
  const said = [m.story, ...(visitor?.turns || []).map((x) => x.a)].filter(Boolean).join("|");
  if ([...said].length >= 6) keys.push(`c:${createHash("sha1").update(JSON.stringify([m.who || "", said, m.details || []])).digest("base64url").slice(0, 20)}`);
  return keys;
}

export async function createFlash({ dataDir, log = () => {}, loadVisit = async () => null, saveVisit = async () => {}, spaces = {}, making = LIVE }) {
  const DIR = path.join(dataDir, "flash");
  await mkdir(DIR, { recursive: true });
  const jobs = new Map();
  /** The request's own key (a visit and intent, or a visitor's words in a life) → job id. */
  const byKey = new Map();
  /** A visitor key (visitorKeys) → their latest job id; and the days of each of their attempts. */
  const byWho = new Map();
  const tries = new Map();
  const waiting = [];
  /** Jobs this process is making or has queued (one left "making" on disk by a restart is not coming). */
  const live = new Set();
  let running = 0;
  let day = today(), madeToday = 0;
  const hits = new Map();

  const file = (id, ext) => path.join(DIR, `${id}.${ext}`);
  // One write at a time per job, each of the job as it is when its turn comes (two at once are refused on Windows and
  // may interleave elsewhere).
  const saving = new Map();
  const persist = (j) => {
    const next = (saving.get(j.id) || Promise.resolve()).then(() => writeFile(file(j.id, "json"), JSON.stringify(j))).catch((e) => log(`flash save ${j.id} failed: ${e.message}`));
    saving.set(j.id, next);
    next.then(() => { if (saving.get(j.id) === next) saving.delete(j.id); });
    return next;
  };
  async function load(id) {
    if (jobs.has(id)) return jobs.get(id);
    if (!/^[\w-]{8,24}$/.test(id)) return null;
    try { const j = JSON.parse(await readFile(file(id, "json"), "utf8")); jobs.set(id, j); return j; } catch { return null; }
  }
  const remember = (j) => {
    if (j.key) byKey.set(j.key, j.id);
    for (const k of j.keys || []) {
      const was = byWho.get(k), prev = was && jobs.get(was);
      if (!prev || String(prev.created) <= String(j.created)) byWho.set(k, j.id);
      tries.set(k, [...(tries.get(k) || []), String(j.created || "").slice(0, 10)]);
    }
  };
  const triesOf = (keys) => Math.max(0, ...keys.map((k) => (tries.get(k) || []).filter((d) => d === today()).length));

  /** The job as the client sees it: where it is, how far along, what it will be — never the prompt or the code. */
  function view(j) {
    let progress = 1, eta = 0, late = false;
    if (j.status === "making") {
      // Along the stages still to come, at their usual length: spent / (spent + what is left), never going back.
      const now = Date.now(), spent = Math.max(0, now - (j.stageAt || now));
      const order = ["queued", "thinking", "making", "trying", ...(POLISH === "on" || j.stage === "polishing" ? ["polishing"] : [])];
      const at = Math.max(0, order.indexOf(j.stage === "mending" ? "trying" : j.stage));
      const before = Object.values(j.took || {}).reduce((s, v) => s + v, 0);
      const piece = order.slice(1).reduce((s, st) => s + typical[st], 0);
      let here = Math.max(typical[j.stage] || 30_000, spent * 1.12);
      if (j.stage === "queued" && j.place > 1) here += ((j.place - 1) / CONCURRENCY) * piece;
      if (j.stage === "making" && j.chars) here = Math.max(spent * 1.05, Math.min(here, spent / Math.max(0.08, Math.min(0.98, j.chars / EXPECTED_CHARS))));
      const rest = order.slice(at + 1).reduce((s, st) => s + typical[st], 0);
      progress = Math.min(0.99, Math.max(j.shown || 0.02, (before + spent) / (before + here + rest)));
      j.shown = progress;
      eta = Math.round(Math.max(4000, here - spent + rest) / 1000);
      late = j.stage !== "queued" && spent > (typical[j.stage] || 30_000) * 1.5;
    }
    return {
      id: j.id, status: j.status, stage: j.stage, progress: Math.round(progress * 1000) / 1000, eta, late,
      title: j.concept?.title || "", line: j.concept?.line || "", palette: j.concept?.palette || [], dark: !!j.concept?.dark,
      steps: j.concept?.steps || [], minutes: j.concept?.minutes || null,
      host: j.host, who: j.who, lang: j.lang, created: j.created, ms: j.ms || null,
      html: j.status === "ready" ? `flash/${j.id}/html` : null, cover: j.status === "ready" && j.hasCover ? `flash/${j.id}/cover` : null,
    };
  }

  const stage = (j, s, info = {}) => {
    if (s !== j.stage) { if (j.stage && j.stageAt) j.took = { ...(j.took || {}), [j.stage]: (j.took?.[j.stage] || 0) + Date.now() - j.stageAt }; j.stage = s; j.stageAt = Date.now(); }
    if (info.concept) j.concept = info.concept;
    if (info.chars) j.chars = info.chars;
    if (!info.chars || Date.now() - (j.savedAt || 0) > 5000) { j.savedAt = Date.now(); persist(j); j.onChange?.(view(j)); }
  };

  async function run(j) {
    running += 1;
    live.add(j.id);
    try {
      const field = fieldOf(j.space, j.lang, spaces[j.space]);
      const example = REFERENCE || POLISH !== "off" ? await referenceFor(j.space) : null;
      const r = await makePiece({ lang: j.lang, field, visitor: j.visitor, intent: j.intent, plan: j.plan, reference: REFERENCE ? example : null, polishReference: example, polish: POLISH, onStage: (s, info) => stage(j, s, info), log });
      stage(j, r.ok ? "ready" : "failed");
      if (r.concept) j.concept = r.concept;
      Object.assign(j, { status: r.ok ? "ready" : "failed", ms: r.ms, model: r.model, builtBy: r.builtBy, cost: r.cost, polished: r.polished, calls: r.calls, attempts: r.attempts, history: r.history, warnings: r.warnings, checks: r.checks, trialSkipped: r.trialSkipped, bytes: r.bytes, errors: r.ok ? [] : r.errors });
      if (r.ok) {
        await writeFile(file(j.id, "html"), r.doc);
        await writeFile(file(j.id, "raw.html"), r.html);
        if (r.cover) { await writeFile(file(j.id, "jpg"), r.cover); j.hasCover = true; }
        for (const c of r.calls) { const k = STAGE_OF_CALL[c.stage]; if (!c.error && k) typical[k] = Math.round(typical[k] * 0.7 + c.ms * 0.3); }
        if (j.took?.trying) typical.trying = Math.round(typical.trying * 0.7 + (j.took.trying / (r.attempts || 1)) * 0.3);
      }
      log(`flash ${j.id} ${j.status} ${j.space} ${j.lang} ${r.builtBy || r.model || "-"} ${Math.round(r.ms / 1000)}s $${r.cost ?? "?"} attempts=${r.attempts || 0}${r.polished ? " polished" : ""}${r.ok ? "" : ` :: ${(r.errors || []).join(" | ").slice(0, 200)}`}`);
    } catch (e) {
      Object.assign(j, { status: "failed", stage: "failed", errors: [String(e.message || e).slice(0, 300)] });
      log(`flash ${j.id} crashed: ${e.message}`);
    } finally {
      delete j.visitor; delete j.plan;
      await persist(j);
      j.onChange?.(view(j));
      running -= 1;
      live.delete(j.id);
      next();
    }
  }
  function next() {
    while (running < CONCURRENCY && waiting.length) {
      const j = waiting.shift();
      // Queued so long that its visitor has stopped looking for it: they have gone, and so does the job.
      if (Date.now() - (j.seen || Date.parse(j.created) || Date.now()) > ABANDONED_MS) {
        Object.assign(j, { status: "failed", stage: "failed", errors: ["abandoned in the queue"] });
        live.delete(j.id); madeToday = Math.max(0, madeToday - 1); persist(j);
        log(`flash ${j.id} abandoned in the queue`);
        continue;
      }
      run(j);
    }
    waiting.forEach((j, i) => { j.place = i + 1; });
  }
  const takeBudget = () => { const d = today(); if (d !== day) { day = d; madeToday = 0; } if (madeToday >= PER_DAY) return false; madeToday += 1; return true; };
  const enqueue = (j) => { jobs.set(j.id, j); live.add(j.id); waiting.push(j); next(); };

  // What is on disk: every visitor's piece is found again, today's pieces count against the day, and a job a restart
  // cut short is made again if its visitor may still be here (its visitor and plan are kept until it is done).
  for (const f of (await readdir(DIR).catch(() => [])).filter((x) => /^[\w-]{8,24}\.json$/.test(x))) {
    const j = await load(f.slice(0, -5));
    if (!j) continue;
    remember(j);
    if (String(j.created || "").slice(0, 10) === day) madeToday += 1;
    if (j.status !== "making") continue;
    if (j.visitor && Date.now() - Date.parse(j.created) < 30 * 60_000) {
      Object.assign(j, { stage: "queued", stageAt: Date.now(), took: {}, chars: 0, shown: 0, requeued: (j.requeued || 0) + 1 });
      Object.defineProperty(j, "onChange", { value: null, writable: true, enumerable: false });
      await persist(j);
      enqueue(j);
      log(`flash ${j.id} queued again after a restart`);
    } else {
      Object.assign(j, { status: "failed", stage: "failed", errors: ["interrupted"] });
      delete j.visitor; delete j.plan;
      await persist(j);
    }
  }

  /** The request in the terms the jobs are kept by. */
  function describe({ visit: v = null, space, lang, life, identity, note, intent = "", token = "" }) {
    const s = v ? v.space : clean(space, 24);
    const lg = langOf(v ? v.lang : lang);
    const visitor = visitorOf(v ? v.life : life, { identity: v ? v.identity : identity, note: v ? v.note : note });
    const want = clean(intent, 300);
    const key = v ? `visit:${v.id}:${want}` : `life:${createHash("sha1").update(JSON.stringify([s, lg, visitor, want])).digest("base64url").slice(0, 20)}`;
    return { v, s, lg, visitor, want, key, keys: visitorKeys(visitor, token), care: careOf(cleanLife(v ? v.life : life)) };
  }
  /** This visitor's piece, if they have one that is ready or on its way (else their latest, which failed, or null). */
  async function find(d) {
    let failed = null;
    for (const id of [byKey.get(d.key), ...d.keys.map((k) => byWho.get(k))]) {
      const j = id && (await load(id));
      if (!j) continue;
      if (j.status === "making" && !live.has(j.id)) { Object.assign(j, { status: "failed", stage: "failed", errors: ["interrupted"] }); await persist(j); }
      if (j.status !== "failed") return { job: j, live: true };
      if (!failed || String(failed.created) < String(j.created)) failed = j;
    }
    return failed ? { job: failed, live: false } : null;
  }

  /**
   * Start (or find) a piece. `visit` (a stored visit) supplies space, lang, life and the host's plan; without one,
   * pass { space, lang, life, identity, note }. `token` is the visitor's browser's. `onChange(view)` hears every stage.
   * Returns the job's view, or { error: "care" | "visitor" | "queue" | "day" } when none will be made.
   */
  async function start(o = {}) {
    const d = describe(o);
    const known = await find(d);
    if (known?.live) { if (o.onChange) known.job.onChange = o.onChange; known.job.seen = Date.now(); return view(known.job); }
    if (d.care) return { error: "care" };
    if (triesOf([d.key, ...d.keys]) >= PER_VISITOR) return known ? view(known.job) : { error: "visitor" };
    if (waiting.length >= QUEUE_MAX && running >= CONCURRENCY) return { error: "queue" };
    if (!takeBudget()) return { error: "day" };
    const field = fieldOf(d.s, d.lg, spaces[d.s]);
    const j = {
      id: newId(), key: d.key, keys: [d.key, ...d.keys], status: "making", stage: "queued", stageAt: Date.now(), created: new Date().toISOString(), seen: Date.now(),
      space: field.id, lang: d.lg, intent: d.want, visit: d.v?.id || null,
      host: { id: field.id, name: field.name, place: field.place }, who: d.visitor.me.who,
      visitor: d.visitor, plan: d.v?.plan || null, models: MAKERS,
    };
    Object.defineProperty(j, "onChange", { value: o.onChange || null, writable: true, enumerable: false });
    remember(j);
    await persist(j);
    enqueue(j);
    log(`flash ${j.id} queued ${j.space} ${d.lg} "${d.visitor.me.who}" (${running} running, ${waiting.length} waiting, ${madeToday}/${PER_DAY} today)`);
    return view(j);
  }

  /** For a life's afterPlan (or the plaza): start the visit's piece and keep its state in the visit's extras as `flash`. */
  async function forVisit(v, { intent = "", token = "" } = {}) {
    const keep = (f) => { v.extras = { ...(v.extras || {}), flash: { id: f.id, status: f.status, stage: f.stage, title: f.title } }; return saveVisit(v); };
    const f = await start({ visit: v, intent, token, onChange: (f2) => { keep(f2).catch(() => {}); } });
    if (!f.error) await keep(f);
    return f;
  }

  const allowed = (ip) => {
    const now = Date.now(), list = (hits.get(ip) || []).filter((t) => now - t < 3600_000);
    if (list.length >= PER_IP_HOUR) { hits.set(ip, list); return false; }
    list.push(now); hits.set(ip, list); return true;
  };

  /** Handle /flash… routes; resolves true when the request was one of them. */
  async function route(req, res, p, { ip = "", readBody, send }) {
    if (!p.startsWith("/flash")) return false;
    let m;
    if (req.method === "POST" && p === "/flash") {
      // Pieces aren't made live for now (the product owner's call, 10/7: the quality isn't there yet); the court shows
      // the finished ones. LIFE_FLASH_LIVE=on makes them again.
      if (!making) { send(res, 403, { error: "not made live now", why: "off" }); return true; }
      const b = await readBody(req);
      const v = b.visit ? await loadVisit(String(b.visit)) : null;
      if (b.visit && !v) { send(res, 404, { error: "no such visit" }); return true; }
      if (!v && !b.life && !b.note && !b.identity) { send(res, 400, { error: "nothing to make it from" }); return true; }
      const ask = v ? { visit: v, intent: b.intent, token: b.token } : { space: b.space, lang: b.lang, life: b.life, identity: b.identity, note: b.note, intent: b.intent, token: b.token };
      // Asking again for the piece one already has costs nothing, and isn't counted against the address.
      const known = await find(describe(ask));
      if (known?.live) { known.job.seen = Date.now(); send(res, 200, { ...view(known.job), place: known.job.place || 0 }); return true; }
      if (!allowed(ip)) { send(res, 429, { error: "slow down", why: "ip" }); return true; }
      const f = v ? await forVisit(v, { intent: b.intent, token: b.token }) : await start(ask);
      if (f.error) send(res, f.error === "care" ? 403 : 429, { error: f.error === "care" ? "not this time" : "the workshop is busy today", why: f.error });
      else send(res, 200, f);
      return true;
    }
    if (req.method === "GET" && (m = p.match(/^\/flash\/([\w-]{8,24})$/))) {
      const j = await load(m[1]);
      if (j && j.status === "making" && !live.has(j.id)) { Object.assign(j, { status: "failed", stage: "failed", errors: ["interrupted"] }); await persist(j); }
      if (j) j.seen = Date.now();
      send(res, j ? 200 : 404, j ? { ...view(j), place: j.place || 0 } : { error: "no such piece" });
      return true;
    }
    if (req.method === "GET" && (m = p.match(/^\/flash\/([\w-]{8,24})\/html$/))) {
      const j = await load(m[1]);
      const doc = j?.status === "ready" ? await readFile(file(j.id, "html"), "utf8").catch(() => null) : null;
      if (!doc) { send(res, 404, { error: "not ready" }); return true; }
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8", "Content-Security-Policy": "sandbox", "X-Content-Type-Options": "nosniff", "Cache-Control": "private, max-age=3600" });
      res.end(doc);
      return true;
    }
    if (req.method === "GET" && (m = p.match(/^\/flash\/([\w-]{8,24})\/cover$/))) {
      const bytes = await readFile(file(m[1], "jpg")).catch(() => null);
      if (!bytes) { send(res, 404, { error: "no cover" }); return true; }
      res.writeHead(200, { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" });
      res.end(bytes);
      return true;
    }
    if (req.method === "POST" && (m = p.match(/^\/flash\/([\w-]{8,24})\/report$/))) {
      const b = await readBody(req, 8192).catch(() => ({}));
      const j = await load(m[1]);
      if (j && b && b.ok === false && j.status === "ready") {
        j.status = "failed"; j.stage = "failed";
        j.errors = (Array.isArray(b.errors) ? b.errors : []).map((e) => clean(e, 300)).slice(0, 6);
        j.withdrawn = new Date().toISOString();
        await persist(j);
        log(`flash ${j.id} withdrawn by a player: ${j.errors.join(" | ").slice(0, 200)}`);
      }
      res.writeHead(204); res.end();
      return true;
    }
    return false;
  }

  return { route, start, forVisit, load, view, limits: { PER_DAY, CONCURRENCY, QUEUE_MAX, PER_IP_HOUR, PER_VISITOR, POLISH, REFERENCE } };
}
