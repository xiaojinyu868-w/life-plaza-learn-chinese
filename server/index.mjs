#!/usr/bin/env node
/**
 * Life Plaza API (node:http, no framework), mounted at /life/api behind nginx.
 *
 *   GET  /life/api/health
 *   POST /life/api/visit   { space, lang, avatar, identity, note }      → { id, plan }      (one LLM call)
 *   GET  /life/api/visit/:id                                            → { id, plan, extras } (extras: what the life
 *                                                                          prepared for this visitor after planning)
 *   POST /life/api/chat    { visit, text, history }                     → { reply }
 *   POST /life/api/chat/stream { visit, text, history, voice }          → server-sent events: delta / line / done
 *                                                                          (both chats take { space, lang, avatar,
 *                                                                          identity, note, life } instead of a visit
 *                                                                          whose plan isn't written yet)
 *   POST /life/api/bridge  { space, lang, journey }                     → { line }          (a host's word about the
 *                                                                          lives walked before his; "" for none)
 *   POST /life/api/ending  { lang, life, journey }                      → { line }          (the guide's last word,
 *                                                                          once every life is walked)
 *   POST /life/api/back    { lang, life, journey }                      → { line }          (her word for when they
 *                                                                          come back another day; "" for none)
 *   POST /life/api/melies/direct { visit, beat, happened }              → { line, quick, lead, farewell }  (between beats)
 *   POST /life/api/melies/say    { visit, text, happened }              → { option, fit, line, title, key } (their own trick)
 *   POST /life/api/tts     { text, role, lang }                         → audio/mpeg        (cached)
 *   POST /life/api/shot    { visit, choices? }                          → { id, status }    (async image job; choices =
 *                                                                          what the visitor did in the life's own act)
 *   GET  /life/api/shot/:id                                             → { status, image, title, … }
 *   GET  /life/api/wall?space=melies                                    → recent shots (the drying line)
 *   GET  /life/api/media/:file                                          → a generated still
 *   WS   /life/api/asr/stream                                           ← mic audio, → words as they are said
 *
 * Env: PORT (8790), LIFE_DATA_DIR (./data), DASHSCOPE_API_KEY, LUMINA_API_KEY, LIFE_SHOTS_PER_DAY (400).
 */
import http from "node:http";
import { randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chat, chatStream, QUICK } from "./lib/llm.mjs";
import { createTts } from "./lib/tts.mjs";
import { transcribe } from "./lib/asr.mjs";
import { attachAsrStream } from "./lib/asr-stream.mjs";
import { editImage, generateImage, MODELS } from "./lib/gateway.mjs";
import { AVATARS, careOf, clean, cleanLife, journeyBrief } from "./spaces/cast.mjs";
import * as melies from "./spaces/melies.mjs";
import * as vangogh from "./spaces/vangogh.mjs";
import * as lishizhen from "./spaces/lishizhen.mjs";
import * as xiyou from "./spaces/xiyou.mjs";
import * as guide from "./spaces/guide.mjs";
import * as call from "./spaces/call.mjs";
import * as bridge from "./spaces/bridge.mjs";
import { reviewLines, reviewPlan } from "./spaces/review.mjs";
import { createFlash } from "./flash/index.mjs";
import { learnNow, learnOf, withLearn } from "./learn/context.mjs";
import { createLearnApi } from "./learn/api.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 8790);
const DATA = path.resolve(process.env.LIFE_DATA_DIR || path.join(HERE, "..", "data"));
const POSES = path.join(HERE, "assets", "poses");
const SHOTS_PER_DAY = Number(process.env.LIFE_SHOTS_PER_DAY || 400);
const SPACES = { melies, vangogh, lishizhen, xiyou };
/** Lives that can be walked into (the guide only suggests these). */
// The lives the guide may send a visitor to (the plaza's lives.js `open` flags must agree).
const OPEN = (process.env.LIFE_OPEN || "melies,vangogh,lishizhen,xiyou").split(",").map((s) => s.trim()).filter((id) => SPACES[id]);
for (const d of ["visits", "shots", "tts"]) await mkdir(path.join(DATA, d), { recursive: true });
// Lanterns on the empty lot: one line each about the visitor's own life.
const NOTES = path.join(DATA, "notes.json");
const notes = await readFile(NOTES, "utf8").then((t) => JSON.parse(t)).catch(() => []);
const publicNote = (n) => ({ id: n.id, text: n.text, identity: n.identity, avatar: n.avatar, created: n.created });
const tts = createTts({ cacheDir: path.join(DATA, "tts") });
const log = (...a) => console.log(new Date().toISOString(), ...a);

// ---- small helpers -------------------------------------------------------------------------------------------
const id = (n = 9) => randomBytes(n).toString("base64url");
const send = (res, status, body, headers = {}) => {
  const json = typeof body === "object" && !Buffer.isBuffer(body);
  res.writeHead(status, { "Content-Type": json ? "application/json; charset=utf-8" : "application/octet-stream", "Cache-Control": "no-store", ...headers });
  res.end(json ? JSON.stringify(body) : body);
};
const readBody = (req, limit = 64 * 1024) => new Promise((resolve, reject) => {
  let size = 0; const chunks = [];
  req.on("data", (c) => { size += c.length; if (size > limit) { reject(Object.assign(new Error("body too large"), { status: 413 })); req.destroy(); } else chunks.push(c); });
  req.on("end", () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString("utf8")) : {}); } catch { reject(Object.assign(new Error("bad json"), { status: 400 })); } });
  req.on("error", reject);
});
const ipOf = (req) => String(req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();
// A learner's page may be in English, but what the hosts say to them is Chinese at their level.
const langOf = (v) => (learnNow() ? "zh" : String(v || "").toLowerCase().startsWith("en") ? "en" : "zh");

/** Sliding one-hour windows per ip and action. */
const windows = new Map();
const LIMITS = { visit: 100, chat: 300, tts: 1500, shot: 20, note: 10, asr: 400, perf: 720 };
/** A request body as raw bytes (an audio clip). */
const readRaw = (req, limit) => new Promise((resolve, reject) => {
  let size = 0; const chunks = [];
  req.on("data", (c) => { size += c.length; if (size > limit) { reject(Object.assign(new Error("clip too long"), { status: 413 })); req.destroy(); } else chunks.push(c); });
  req.on("end", () => resolve(Buffer.concat(chunks)));
  req.on("error", reject);
});
function allow(ip, action) {
  const k = `${action}:${ip}`, now = Date.now();
  const list = (windows.get(k) || []).filter((t) => now - t < 3600_000);
  if (list.length >= LIMITS[action]) { windows.set(k, list); return false; }
  list.push(now); windows.set(k, list); return true;
}
let day = new Date().toISOString().slice(0, 10), shotsToday = 0;
const takeShotBudget = () => { const d = new Date().toISOString().slice(0, 10); if (d !== day) { day = d; shotsToday = 0; } if (shotsToday >= SHOTS_PER_DAY) return false; shotsToday += 1; return true; };

/** What the visitor did in a life's own act, as plain bounded data (it ends up in a prompt). */
function saneChoices(c, depth = 0) {
  if (c == null || depth > 4) return null;
  if (typeof c === "string") return clean(c, 300);
  if (typeof c === "number") return Number.isFinite(c) ? c : null;
  if (typeof c === "boolean") return c;
  if (Array.isArray(c)) return c.slice(0, 24).map((x) => saneChoices(x, depth + 1));
  if (typeof c === "object") {
    const o = {};
    for (const [k, x] of Object.entries(c).slice(0, 24)) if (/^[\w-]{1,40}$/.test(k)) o[k] = saneChoices(x, depth + 1);
    return o;
  }
  return null;
}

/**
 * What a life may use for one visit beyond its plan: the models, the visitor's likeness reference, a place to keep a
 * generated picture, and a way to leave something on the visit for the client (GET /visit/:id → extras).
 */
const spaceKit = (v) => ({
  chat, chatStream, QUICK, generateImage, editImage, MODELS, log,
  /** What the visitor and the host said to each other in this life (heardTalk), for the gift. */
  talk: () => talks.get(v.id)?.turns || [],
  avatarPose: AVATARS[v.avatar] ? path.join(POSES, AVATARS[v.avatar].pose) : null,
  budget: takeShotBudget,
  async saveMedia(bytes, ext = "jpg") {
    const file = `${id()}.${ext === "png" ? "png" : "jpg"}`;
    await writeFile(path.join(DATA, "shots", file), bytes);
    return `media/${file}`;
  },
  async setExtra(key, value) {
    v.extras = { ...(v.extras || {}), [key]: value };
    await saveVisit(v);
  },
  flash: (o = {}) => flash.forVisit(v, o),
});

// ---- visits --------------------------------------------------------------------------------------------------
const visits = new Map();
/**
 * The last turns of talk in each visit (what the browser sends with every /chat), so the gift can be written with
 * what was said in the room. In memory only, never written to disk; let go of after a day.
 */
const talks = new Map();
function heardTalk(v, b, text, reply) {
  if (!v?.id || !reply) return;
  const before = (Array.isArray(b.history) ? b.history : []).slice(-8).map((h) => ({ role: h?.role === "me" ? "me" : "you", text: clean(h?.text, 400) })).filter((h) => h.text);
  talks.delete(v.id);
  talks.set(v.id, { at: Date.now(), turns: [...before, { role: "you", text }, { role: "me", text: reply }].slice(-10) });
  for (const [k, t] of talks) { if (talks.size <= 2000 && Date.now() - t.at < 86_400_000) break; talks.delete(k); }
}
async function loadVisit(vid) {
  if (visits.has(vid)) return visits.get(vid);
  if (!/^[\w-]{8,24}$/.test(vid)) return null;
  try { const v = JSON.parse(await readFile(path.join(DATA, "visits", `${vid}.json`), "utf8")); visits.set(vid, v); return v; } catch { return null; }
}
const saveVisit = (v) => writeFile(path.join(DATA, "visits", `${v.id}.json`), JSON.stringify(v));

// The same visitor asking for the same life twice (the plaza plans every life ahead; walking in asks again, perhaps
// before the first is done) gets the one plan: an answer still being written is waited for, not written again.
const planning = new Map();
async function createVisit(body) {
  const key = JSON.stringify([body.space, langOf(body.lang), learnNow()?.level || 0, body.avatar, clean(body.identity, 40), clean(body.note, 200), cleanLife(body.life)]);
  const known = planning.get(key);
  if (known && Date.now() - known.at < 30 * 60_000) return known.visit;
  const visit = makeVisit(body).catch((e) => { planning.delete(key); throw e; });
  planning.set(key, { at: Date.now(), visit });
  if (planning.size > 500) planning.delete(planning.keys().next().value);
  return visit;
}
async function makeVisit(body) {
  const space = SPACES[body.space] ? body.space : "melies";
  const lang = langOf(body.lang);
  const avatar = AVATARS[body.avatar] ? body.avatar : "v2";
  const identity = clean(body.identity, 40), note = clean(body.note, 200), life = cleanLife(body.life);
  const mod = SPACES[space];
  const t0 = Date.now();
  let plan, model = null;
  try {
    const r = await chat(mod.planMessages({ lang, avatar, identity, note, life }), { json: true, maxTokens: 1400, temperature: 0.9 });
    plan = mod.sanePlan(r.data, lang, { life, note, identity }); model = r.model;
  } catch (e) {
    log("plan failed", e.message);
    plan = mod.sanePlan({}, lang, { life, note, identity });
  }
  // Read once more before it is kept: what the host will say of them, against what they said (review.mjs).
  // A learner's plan skips the second reading: with the level rules its prompt ran past the 20 s it is given, every time.
  const read = model && !learnNow() ? await reviewPlan(mod, plan, { chat, lang, life, look: AVATARS[avatar][lang === "en" ? "en" : "zh"] }) : { plan, notes: [] };
  plan = read.plan;
  if (read.notes.length || read.error) log(`visit ${space} read again ${read.ms || 0}ms ${read.model || "-"}: ${read.error || read.notes.map((n) => `${n.id} ${n.problem}`).join(", ")}`);
  const v = { id: id(), space, lang, avatar, identity, note, life, plan, model, extras: {}, created: new Date().toISOString(), planMs: Date.now() - t0, ...(read.notes.length ? { review: read.notes } : {}) };
  visits.set(v.id, v);
  await saveVisit(v);
  log(`visit ${v.id} ${space} ${lang} ${avatar} "${identity}" plan ${v.planMs}ms ${model || "fallback"}`);
  // A life may start preparing things for this visitor now (a prop painted for them, a page drawn), kept as extras.
  if (mod.afterPlan) Promise.resolve().then(() => mod.afterPlan(v, spaceKit(v))).catch((e) => log(`afterPlan ${space} ${v.id} failed: ${e.message}`));
  return v;
}

// ---- talking with a host -------------------------------------------------------------------------------------
/** Whoever is talking, before their visit has a plan (writing one takes a while; talk doesn't need it). */
const visitorOf = (b) => (SPACES[b.space] ? { space: b.space, lang: langOf(b.lang), avatar: AVATARS[b.avatar] ? b.avatar : "v2", identity: clean(b.identity, 40), note: clean(b.note, 200), life: cleanLife(b.life) } : null);

/** Told to whoever speaks a turn of talk (a host, the guide on the plaza): words only, a few short sentences. */
const SAY = {
  zh: "\n\n此刻是当面说话：只写说出口的话——不写动作、神态和旁白，不用括号、星号或任何标记。最多三句，加起来不超过六十个字。别提他的穿着打扮，除非他问起。",
  en: "\n\nYou are speaking face to face: write only the words you say aloud — no actions, expressions or narration, no brackets, asterisks or markup. At most three sentences, under fifty words in all. Don't mention their clothes unless they ask.",
};
/** A host's turn: SAY, then two things the visitor might ask next. */
const SPOKEN = {
  zh: `${SAY.zh}说完另起一行写「|||」，再写两句他接下来可能问你的话（每句不超过十二个字，用他的口吻），用「|」隔开。`,
  en: `${SAY.en} Then a new line with "|||", then two short things they might ask you next (at most eight words each, in their voice), split by "|".`,
};
/** The lives the visitor walked before this one (b.journey, from the front end), for a host to know in his talk. */
const WALKED = {
  zh: (lines) => `\n\n他走进你这儿之前，在广场上走过这几段（你和这几位主人是广场上的邻居，除了这些，你不知道他们的事）：\n${lines}\n他问起、或者说到这些，就自然地接上；别的时候不必提。`,
  en: (lines) => `\n\nBefore walking in here they walked through these lives on the plaza (you and these hosts are neighbours on the plaza; beyond this you know nothing of them):\n${lines}\nIf they ask about it or speak of it, take it up naturally; otherwise there's no need to bring it up.`,
};
const chatTurn = (v, b, text) => {
  const msgs = SPACES[v.space].chatMessages({ lang: v.lang, avatar: v.avatar, identity: v.identity, note: v.note, life: v.life, history: Array.isArray(b.history) ? b.history : [], text, plan: v.plan || null });
  const walked = journeyBrief(v.lang, b.journey, v.space);
  msgs[0] = { ...msgs[0], content: `${msgs[0].content}${walked ? WALKED[v.lang](walked) : ""}${SPOKEN[v.lang]}` };
  return msgs;
};

/**
 * The part of a reply said aloud, as far as it has come: up to the "|||", without the stage directions (*…*, (…),
 * （…）, […]) a model sometimes writes anyway. An aside still open is held back until it closes, and so is a trailing
 * "|" that may be the start of the "|||". An English sentence run into the next ("small.That") gets its space back.
 */
function aloud(raw, lang) {
  let s = String(raw || "");
  const cut = s.indexOf("|||");
  s = cut >= 0 ? s.slice(0, cut) : s.replace(/\|{1,2}$/, "");
  s = s.replace(/\*[^*]*\*|（[^）]*）|\([^)]*\)|\[[^\]]*\]|【[^】]*】/g, " ").replace(/[*（(【\[][\s\S]*$/, "");
  s = s.replace(/\s+/g, " ");
  if (lang !== "en") s = s.replace(/ ?([，。！？、；：…「」“”]) ?/g, "$1");
  else s = s.replace(/([a-z][.!?])(?=[A-Z])/g, "$1 ");
  return s.replace(/^[\s,，。、]+/, "");
}
/** What the visitor might ask next, from after the "|||". */
const nextAsks = (raw, lang) => {
  const cut = String(raw || "").indexOf("|||");
  if (cut < 0) return [];
  const max = lang === "en" ? 48 : 16;
  return String(raw).slice(cut + 3).split(/[|｜\n]/).map((s) => clean(s.replace(/^[\s\d.、:：\-*·"「『“]+|["」』”]+$/g, ""), 80))
    .filter((s) => [...s].length >= 2 && [...s].length <= max).slice(0, 2);
};
/**
 * Where the first whole sentence of `rest` ends (0: none yet). A sentence is whole once something follows its stop (a
 * stop at the very end may still grow into "……" or "！？"); one too short to say alone runs on into the next; a long one
 * with no stop in sight is cut after a comma.
 */
function lineEnd(rest, final, lang) {
  const short = lang === "en" ? 8 : 4, long = lang === "en" ? 150 : 42;
  const stops = /[。！？!?…]+["”」』’）)]*|\.["”’)]*(?=\s)/g;
  let m;
  while ((m = stops.exec(rest))) {
    const end = m.index + m[0].length;
    if (end >= rest.length) break;
    if ([...rest.slice(0, end).trim()].length >= short) return end;
  }
  if (final) return rest.trim() ? rest.length : 0;
  if ([...rest].length > long) {
    const comma = Math.max(...["，", "；", "：", ", ", "; "].map((c) => rest.lastIndexOf(c)));
    if (comma > short) return comma + 1;
  }
  return 0;
}
const MAX_LINES = 5;
/**
 * A turn of talk, not a speech: once he has said three sentences, or a sentence ends past TURN characters, he stops
 * there — a model that runs on past "at most three sentences" is let go (the two things to ask next are still read).
 * A trailing "……" is a pause, not an end: the thought it holds is let finish.
 */
const TURN = { zh: 70, en: 300 };
const SENTENCE_END = /[。！？!?]["”」』’）)]*$|(?<!\.)\.["”’)]*$/;
const turnDone = (said, whole, lang, most = 3) => whole >= most || [...said].length >= TURN[lang];
/**
 * Where the turn ends in `text` (a reply as far as it has come; `final`: nothing more is coming), or -1 not yet:
 * after `most` sentences, or the first sentence ending past TURN.
 */
function turnEnd(text, final, lang, most = 3) {
  let said = 0, whole = 0, end;
  while ((end = lineEnd(text.slice(said), final, lang)) > 0) {
    said += end;
    if (SENTENCE_END.test(text.slice(0, said).trim()) && turnDone(text.slice(0, said), (whole += 1), lang, most)) return said;
  }
  return -1;
}
/**
 * The gate's turn is a sentence taking in what they said, then her one question — the answers offered below it are for
 * that question. Cut like any turn of talk, it keeps the question: after its first two sentences, of what follows
 * (`rest`, all of it come) only the last sentence is said if it asks, else the next one if the turn has room for it.
 */
function gateRest(rest, said, lang) {
  const pieces = [];
  for (let at = 0, end; (end = lineEnd(rest.slice(at), true, lang)) > 0; at += end) if (rest.slice(at, at + end).trim()) pieces.push(rest.slice(at, at + end));
  if (!pieces.length) return "";
  if (/[？?]["”」』’）)]*\s*$/.test(pieces.at(-1))) return pieces.at(-1);
  return [...said].length + [...pieces[0]].length <= TURN[lang] ? pieces[0] : "";
}
const gateSaid = (text, lang) => { const head = turnEnd(text, true, lang, 2); return head < 0 ? text : `${text.slice(0, head)}${gateRest(text.slice(head), text.slice(0, head), lang)}`.trim(); };
/** The part of a whole reply he says, cut where the stream would have stopped (the /chat answer). */
function turnOf(text, lang) {
  const end = turnEnd(text, true, lang);
  return (end < 0 ? text : text.slice(0, end)).trim();
}
/**
 * A reply that carries the helpline (CARE_LINE: they spoke of not wanting to live) is never cut: the gate's care is said
 * whole, as it was written.
 */
const HOTLINE = /12356|116 123|\b988\b/;
/** The guide's answer on the plaza, said aloud: stage directions out, a turn of talk long (never her care). */
const guideSaid = (raw, lang) => { const said = aloud(raw, lang); return HOTLINE.test(said) ? said : turnOf(said, lang); };

// ---- shots ---------------------------------------------------------------------------------------------------
const shots = new Map();
const shotFile = (sid) => path.join(DATA, "shots", `${sid}.json`);
async function loadShot(sid) {
  if (shots.has(sid)) return shots.get(sid);
  if (!/^[\w-]{8,24}$/.test(sid)) return null;
  try { return JSON.parse(await readFile(shotFile(sid), "utf8")); } catch { return null; }
}
async function runShot(s, v) {
  const mod = SPACES[v.space];
  const prompt = mod.shotPrompt({
    scene: v.plan.shot.scene || v.plan.shot.trick || v.plan.shot.title, avatar: v.avatar,
    choices: s.choices || null, plan: v.plan, life: v.life, identity: v.identity, lang: v.lang,
  });
  const pose = path.join(POSES, AVATARS[v.avatar].pose);
  const ratio = mod.SHOT_RATIO || "16:9";
  // The picture is painted from the visitor's figure and the life's own reference pictures (mod.SHOT_REFS: the host as
  // he looks), unless the life chooses its pictures itself or paints from words alone (mod.shotImages → files, or []).
  const refs = (mod.shotImages ? mod.shotImages({ visit: v, choices: s.choices || null }) : [pose, ...(mod.SHOT_REFS || [])]).filter((f) => existsSync(f));
  const paint = (model, timeoutMs) => (refs.length ? editImage({ prompt, images: refs, model, ratio, timeoutMs }) : generateImage({ prompt, model, ratio, timeoutMs }));
  const t0 = Date.now();
  // Words that grow from what the visitor did (a letter about the colours they chose…), written while the picture is.
  const words = mod.shotExtras ? Promise.resolve().then(() => mod.shotExtras({ shot: s, visit: v, kit: spaceKit(v) })).catch((e) => { log(`shot ${s.id} extras failed: ${e.message}`); return null; }) : null;
  try {
    let png;
    // A life may ask for a quicker painter first (mod.SHOT_MODEL, waited for mod.SHOT_MODEL_MS); the usual one takes over
    // if it fails.
    const quick = mod.SHOT_MODEL && (refs.length || mod.shotImages) ? await paint(mod.SHOT_MODEL, mod.SHOT_MODEL_MS || 60_000).catch((e) => { log(`shot ${s.id} ${mod.SHOT_MODEL} failed (${e.message.slice(0, 80)})`); return null; }) : null;
    try {
      png = quick || (await paint(MODELS.quality, refs.length ? 110_000 : 180_000));
    } catch (e) {
      log(`shot ${s.id} edit failed (${e.message.slice(0, 80)}), plain generation`);
      png = await generateImage({ prompt, model: MODELS.quality, ratio, timeoutMs: 180_000 });
    }
    let bytes = png, ext = "png";
    // Never enlarged: a painter's 1K picture blown up to 1600 loses its brushwork to the blur.
    try { const sharp = (await import("sharp")).default; bytes = await sharp(png).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 88 }).toBuffer(); ext = "jpg"; } catch { /* keep png */ }
    const file = `${s.id}.${ext}`;
    await writeFile(path.join(DATA, "shots", file), bytes);
    const extra = words ? await words : null;
    if (extra && typeof extra === "object") Object.assign(s, extra);
    Object.assign(s, { status: "done", image: `media/${file}`, ms: Date.now() - t0 });
  } catch (e) {
    log(`shot ${s.id} failed: ${e.message}`);
    Object.assign(s, { status: "failed", error: "the film did not develop" });
  }
  await writeFile(shotFile(s.id), JSON.stringify(s));
}

async function wall(space, limit = 24) {
  const files = (await readdir(path.join(DATA, "shots"))).filter((f) => f.endsWith(".json"));
  const items = [];
  for (const f of files) { try { const s = JSON.parse(await readFile(path.join(DATA, "shots", f), "utf8")); if (s.status === "done" && s.space === space) items.push(s); } catch { /* skip */ } }
  items.sort((a, b) => (a.created < b.created ? 1 : -1));
  return items.slice(0, limit).map((s) => ({ id: s.id, image: s.image, title: s.title, identity: s.identity, created: s.created }));
}

// ---- routes --------------------------------------------------------------------------------------------------
const flash = await createFlash({ dataDir: DATA, log, loadVisit, saveVisit, spaces: SPACES });
const learnApi = createLearnApi({ chat, QUICK, log });
async function handle(req, res) {
  const url = new URL(req.url, "http://x");
  const p = url.pathname.replace(/^\/life\/api/, "") || "/";
  const ip = ipOf(req);
  try {
    if (p.startsWith("/learn/")) return await learnApi.route(req, res, p, url, { ip, readBody, send, allow });
    if (await flash.route(req, res, p, { ip, readBody, send })) return;
    if (req.method === "GET" && p === "/health") return send(res, 200, { ok: true, shotsToday, day });
    if (req.method === "POST" && p === "/visit") {
      if (!allow(ip, "visit")) return send(res, 429, { error: "slow down" });
      const v = await createVisit(await readBody(req));
      return send(res, 200, { id: v.id, plan: v.plan });
    }
    if (req.method === "POST" && p === "/guide") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang);
      try {
        const t0 = Date.now();
        const r = await chat(guide.guideMessages({ lang, identity: b.identity, note: b.note, life: b.life, open: OPEN }), { json: true, maxTokens: 620, temperature: 0.8, timeoutMs: 25_000, models: QUICK });
        const g = guide.saneGuide(r.data, lang, OPEN, b.life);
        log(`guide passport ${r.model} ${r.ms}ms (${Date.now() - t0}ms) first ${g.suggest || "-"}${r.data?.suggest && r.data.suggest !== g.suggest ? ` (wrote ${String(r.data.suggest).slice(0, 12)})` : ""}${g.why ? "" : r.data?.why ? ` why left out: "${clean(r.data.why, 80)}"` : ""}`);
        return send(res, 200, g);
      } catch (e) { log("guide failed", e.message); return send(res, 200, guide.saneGuide({}, lang, OPEN)); }
    }
    // A host's word about where the visitor has been (the lives walked before his, and what they made there), said as
    // he welcomes them: a quick voice, one line; "" when there is nothing to say, or nothing worth saying.
    if (req.method === "POST" && p === "/bridge") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang), space = SPACES[b.space] ? b.space : "";
      const msgs = space ? bridge.bridgeMessages({ lang, space, journey: b.journey, persona: SPACES[space].persona, life: b.life || null }) : null;
      if (!msgs) return send(res, 200, { line: "" });
      const t0 = Date.now();
      try {
        const r = await chat(msgs, { maxTokens: 120, temperature: 0.8, timeoutMs: 8000, models: QUICK });
        let line = bridge.saneBridge(r.text, lang, { space, journey: b.journey });
        // Asked for ahead (as his door becomes the next stop): there is time to read it once more.
        if (line && b.life) {
          const rv = await reviewLines({ chat, lang, life: b.life, journey: b.journey, here: space, lines: [{ id: "bridge", text: line }], timeoutMs: 6000 });
          if (rv.fixes.has("bridge")) line = bridge.saneBridge(rv.fixes.get("bridge"), lang, { space, journey: b.journey });
        }
        log(`bridge ${space} ${r.model} ${r.ms}ms (${Date.now() - t0}ms) "${line.slice(0, 40)}"${line ? "" : ` left out: "${clean(r.text, 60)}"`}`);
        return send(res, 200, { line });
      } catch (e) { log("bridge failed", e.message); return send(res, 200, { line: "" }); }
    }
    // The guide's last word when every life is walked (before her plain goodbye): their night at the gate in their
    // own words, beside what they carried out of the lives.
    if (req.method === "POST" && p === "/ending") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang);
      const msgs = guide.endingMessages({ lang, life: b.life, journey: b.journey });
      if (!msgs) return send(res, 200, { line: guide.saneEnding("", lang, { life: b.life, journey: b.journey }) });
      const t0 = Date.now();
      try {
        // Asked for as they come back to the plaza from the last life, well before it is said (the court of small
        // things comes first): the surest hand writes it, and it is read once more — within the page's 14 s.
        const r = await chat(msgs, { maxTokens: 200, temperature: 0.7, timeoutMs: 6000, models: guide.LAST_WORD_MODELS(QUICK) });
        let line = guide.saneEnding(r.text, lang, { life: b.life, journey: b.journey });
        if (line) {
          const rv = await reviewLines({ chat, lang, life: b.life, journey: b.journey, lines: [{ id: "ending", text: line }], timeoutMs: Math.max(2500, 12_500 - (Date.now() - t0)) });
          if (rv.fixes.has("ending")) line = guide.saneEnding(rv.fixes.get("ending"), lang, { life: b.life, journey: b.journey });
        }
        log(`ending ${r.model} ${r.ms}ms (${Date.now() - t0}ms) "${line.slice(0, 40)}"${clean(r.text, 400) === line ? "" : ` (wrote "${clean(r.text, 60)}")`}`);
        return send(res, 200, { line });
      } catch (e) { log("ending failed", e.message); return send(res, 200, { line: guide.saneEnding("", lang, { life: b.life, journey: b.journey }) }); }
    }
    // Her word for when they come back another day, written now (the plaza keeps it), so coming back waits on nothing.
    if (req.method === "POST" && p === "/back") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang);
      const msgs = guide.backMessages({ lang, life: b.life, journey: b.journey });
      if (!msgs) return send(res, 200, { line: guide.saneBack("", lang, { life: b.life, journey: b.journey }) });
      try {
        const r = await chat(msgs, { maxTokens: 160, temperature: 0.7, timeoutMs: 9000, models: guide.LAST_WORD_MODELS(QUICK) });
        let line = guide.saneBack(r.text, lang, { life: b.life, journey: b.journey });
        const rv = await reviewLines({ chat, lang, life: b.life, journey: b.journey, lines: [{ id: "back", text: line }], timeoutMs: 6000 });
        if (rv.fixes.has("back")) line = guide.saneBack(rv.fixes.get("back"), lang, { life: b.life, journey: b.journey });
        log(`back ${r.model} ${r.ms}ms "${line.slice(0, 40)}"`);
        return send(res, 200, { line });
      } catch (e) { log("back failed", e.message); return send(res, 200, { line: guide.saneBack("", lang, { life: b.life, journey: b.journey }) }); }
    }
    // The gate's listening turn, streamed (server-sent events): `delta` pieces of the spoken reply as they are said,
    // then `done` with the whole reply and the answers the visitor might give. Not buffered by the proxy.
    if (req.method === "POST" && p === "/guide/talk") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang);
      res.writeHead(200, { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache, no-transform", Connection: "keep-alive", "X-Accel-Buffering": "no" });
      const event = (name, data) => res.write(`event: ${name}\ndata: ${JSON.stringify(data)}\n\n`);
      let full = "", sent = 0, closed = false, head = -1, ended = false;
      req.on("close", () => { closed = true; });
      // Only the spoken part goes out as it comes; a trailing "|" is held back until it's clear it isn't the "|||".
      // A turn of talk long (gateSaid): past its first two sentences the rest waits for the end, then only her question
      // (or one more sentence) follows. Her care is said whole.
      const care = careOf(cleanLife(b.life));
      const flush = (final = false) => {
        if (ended) return;
        const cut = full.indexOf("|||"), whole = final || cut >= 0;
        const upto = cut >= 0 ? cut : full.length - (full.endsWith("||") ? 2 : full.endsWith("|") ? 1 : 0);
        const spoken = full.slice(0, upto);
        if (care || HOTLINE.test(spoken)) head = Infinity;
        else if (head < 0) head = turnEnd(spoken, whole, lang, 2);
        const to = head >= 0 ? Math.min(upto, head) : upto;
        if (to > sent && !closed) { event("delta", { t: full.slice(sent, to) }); sent = to; }
        if (whole && Number.isFinite(head) && head >= 0) {
          const last = gateRest(spoken.slice(head), spoken.slice(0, head), lang);
          if (last && !closed) event("delta", { t: last });
          ended = true;
        }
      };
      const t0 = Date.now();
      try {
        const r = await chatStream(guide.talkMessages({ lang, life: b.life, close: !!b.close }), { maxTokens: 260, temperature: 0.85, onDelta: (piece) => { full += piece; flush(); } });
        full = r.text; flush(true);
        const out = guide.splitTalk(r.text, lang, b.life);
        if (!out.care && !HOTLINE.test(out.reply)) out.reply = gateSaid(out.reply, lang);
        log(`guide talk ${r.model} ${Date.now() - t0}ms "${out.reply.slice(0, 40)}"`);
        if (!closed) event("done", out);
      } catch (e) {
        log("guide talk failed", e.message);
        if (!closed) event("done", guide.splitTalk("", lang, b.life));
      }
      res.end();
      return;
    }
    // Her notes after each answer at the gate: who they are, their details in their own words, wish, mood.
    if (req.method === "POST" && p === "/guide/extract") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang);
      try {
        const r = await chat(guide.extractMessages({ lang, life: b.life }), { json: true, maxTokens: 360, temperature: 0.2, timeoutMs: 9000, models: QUICK, learn: false });
        log(`guide notes ${r.model} ${r.ms}ms`);
        return send(res, 200, guide.saneExtract(r.data, b.life, lang));
      } catch (e) { log("guide notes failed", e.message); return send(res, 200, guide.saneExtract({}, b.life, lang)); }
    }
    // The gate as a call (docs/gate-call.md §7): her turn on the line, streamed — `delta` pieces of what she says as
    // they come, then `done` { line, ask, done, care, chips }. A quick voice; the words that put the show down, or both
    // pages of bubbles skipped, need none.
    if (req.method === "POST" && p === "/guide/call") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const turn = call.callTurn({ lang: langOf(b.lang), picks: b.picks, turns: b.turns, text: b.text });
      res.writeHead(200, { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache, no-transform", Connection: "keep-alive", "X-Accel-Buffering": "no" });
      const event = (name, data) => res.write(`event: ${name}\ndata: ${JSON.stringify(data)}\n\n`);
      let closed = false, sent = "", full = "", out;
      req.on("close", () => { closed = true; });
      // What is on screen only grows; past her length it waits for the end (the line as kept comes in `done`).
      const flush = () => {
        const now = call.streamCut(full, turn.lang);
        if (closed || now.length <= sent.length || !now.startsWith(sent) || [...sent].length > turn.cap) return;
        event("delta", { t: now.slice(sent.length) }); sent = now;
      };
      const t0 = Date.now();
      if (!turn.messages) out = call.saneCall("", turn);
      else {
        try {
          const r = await chatStream(turn.messages, { models: QUICK, maxTokens: 240, temperature: 0.85, onDelta: (piece) => { full += piece; flush(); } });
          full = r.text; flush();
          out = call.saneCall(r.text, turn);
          log(`guide call ${turn.stage} ${r.model} ${Date.now() - t0}ms${out.care ? " care" : out.ask ? " ask" : out.done ? " done" : ""} "${out.line.slice(0, 48)}"`);
        } catch (e) { log("guide call failed", e.message); out = call.saneCall("", turn); }
      }
      if (!closed) { if (!sent) event("delta", { t: out.line }); event("done", out); }
      res.end();
      return;
    }
    // The passport and its first stop, written while they choose a face (docs/gate-call.md §5): the quick step. When
    // no model answers, `failed`: the gate writes it with her quick voice instead (/guide).
    if (req.method === "POST" && p === "/guide/portrait") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang);
      const msgs = call.portraitMessages({ lang, life: b.life, avatar: AVATARS[b.avatar]?.[lang] || "", open: OPEN });
      if (!msgs) return send(res, 200, call.plainPassport(lang, OPEN));
      const t0 = Date.now();
      try {
        const r = await chat(msgs, { models: call.FAST, json: true, maxTokens: 900, temperature: 0.7, timeoutMs: 16_000 });
        const g = call.sanePortrait(r.data, { lang, life: b.life, open: OPEN });
        log(`guide portrait ${r.model} ${r.ms}ms (${Date.now() - t0}ms) first ${g.suggest} "${g.title}" why "${g.why.slice(0, 40)}"${r.data?.why ? ` (wrote "${clean(r.data.why, 60)}")` : ""}`);
        return send(res, 200, g);
      } catch (e) { log("guide portrait failed", e.message); return send(res, 200, { ...call.sanePortrait({}, { lang, life: b.life, open: OPEN }), failed: true }); }
    }
    // The whole reading of them, for every host they will meet (docs/ai-native.md §3.2): the deep step, written in the
    // background once the call is over; "" when there is nothing to read, or no model answered.
    if (req.method === "POST" && p === "/guide/reading") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang);
      const msgs = call.readingMessages({ lang, life: b.life, open: OPEN });
      if (!msgs) return send(res, 200, { portrait: "" });
      const t0 = Date.now();
      try {
        const r = await chat(msgs, { models: call.DEEP, maxTokens: 1400, temperature: 0.7, timeoutMs: 70_000 });
        const portrait = call.saneReading(r.text, lang);
        log(`guide reading ${r.model} ${r.ms}ms (${Date.now() - t0}ms) ${[...portrait].length} chars`);
        return send(res, 200, { portrait });
      } catch (e) { log("guide reading failed", e.message); return send(res, 200, { portrait: "" }); }
    }
    if (req.method === "POST" && p === "/guide/chat") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang), text = clean(b.text, 300);
      if (!text) return send(res, 400, { error: "empty" });
      try {
        const msgs = guide.guideChatMessages({ lang, identity: b.identity, note: b.note, life: b.life, history: Array.isArray(b.history) ? b.history : [], text, open: OPEN, seen: Array.isArray(b.seen) ? b.seen.map(String).slice(0, 12) : undefined, next: typeof b.next === "string" ? b.next.slice(0, 24) : "", why: typeof b.why === "string" ? b.why : "", journey: Array.isArray(b.journey) ? b.journey : null });
        msgs[0] = { ...msgs[0], content: `${msgs[0].content}${SAY[lang]}` };
        const r = await chat(msgs, { maxTokens: 220, temperature: 0.8, timeoutMs: 25_000, models: QUICK });
        return send(res, 200, { reply: clean(guideSaid(r.text, lang), 400) || (lang === "en" ? "Let's walk a little, and I'll tell you on the way." : "我们先走走，边走边说吧。") });
      } catch (e) { log("guide chat failed", e.message); return send(res, 200, { reply: lang === "en" ? "Let's walk a little, and I'll tell you on the way." : "我们先走走，边走边说吧。" }); }
    }
    if (req.method === "POST" && p === "/perf") {
      const b = allow(ip, "perf") ? await readBody(req, 4096).catch(() => ({})) : null;
      const n = (v) => (Number.isFinite(+v) ? +v : null);
      const t = b?.touch && typeof b.touch === "object" ? b.touch : {};
      if (b) log(`perf ${clean(b.space, 12)} fps=${n(b.fps)} p90=${n(b.p90)}ms worst=${n(b.worst)}ms slow=${n(b.slow)}% ratio=${n(b.ratio)}${b.capped ? " capped" : ""} low=${!!b.low} ao=${!!b.ao} bloom=${!!b.bloom} ${n(b.w)}x${n(b.h)}@${n(b.dpr)} screen=${n(b.sw)}x${n(b.sh)} sy=${n(b.sy)} vt=${n(b.vt)} vh=${n(b.vh)} touch=${n(t.world)}/${n(t.other)}${t.last ? ` last=${clean(t.last, 40)}` : ""} gpu=${clean(b.gpu, 40)} ip=${ip.slice(-6)} ${clean(b.ua, 140)}`);
      res.writeHead(204); res.end(); return;
    }
    if (req.method === "POST" && p === "/asr") {
      if (!allow(ip, "asr")) return send(res, 429, { error: "slow down" });
      const mime = String(req.headers["content-type"] || "audio/webm").split(";")[0].trim().toLowerCase();
      if (!/^(audio|video)\/[\w.+-]+$/.test(mime)) return send(res, 415, { error: "not audio" });
      const bytes = await readRaw(req, 4 * 1024 * 1024);
      if (bytes.length < 600) return send(res, 400, { error: "too short" });
      const lang = langOf(url.searchParams.get("lang"));
      const t0 = Date.now();
      const text = await transcribe(bytes, { mime: mime.startsWith("video/") ? mime.replace("video/", "audio/") : mime, lang });
      log(`asr ${bytes.length}B ${mime} ${Date.now() - t0}ms "${text.slice(0, 30)}"`);
      return send(res, 200, { text: clean(text, 300) });
    }
    if (req.method === "GET" && p === "/notes") return send(res, 200, { items: notes.filter((n) => !n.pending).slice(-48).reverse().map(publicNote) });
    if (req.method === "POST" && p === "/notes") {
      if (!allow(ip, "note")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const lang = langOf(b.lang), text = clean(b.text, 120);
      if ([...text].length < 2) return send(res, 400, { error: lang === "en" ? "Write a little more?" : "再多写几个字？" });
      let ok = null;
      try { const r = await chat(guide.moderationMessages(text), { json: true, maxTokens: 30, temperature: 0, timeoutMs: 12_000, models: ["claude-haiku-4-5", "deepseek-v4.1-flash"], learn: false }); ok = r.data?.ok === true; } catch (e) { log("moderation failed", e.message); }
      if (ok === false) return send(res, 422, { error: lang === "en" ? "This one can't go on the wall — maybe say it another way?" : "这句话不太适合挂在广场上，换个说法？" });
      const n = { id: id(), text, identity: clean(b.identity, 40), avatar: AVATARS[b.avatar] ? b.avatar : "", lang, created: new Date().toISOString(), pending: ok !== true };
      notes.push(n);
      if (notes.length > 600) notes.splice(0, notes.length - 600);
      await writeFile(NOTES, JSON.stringify(notes));
      log(`note ${n.id} ${n.pending ? "pending" : "public"} "${text.slice(0, 40)}"`);
      return send(res, 200, { item: publicNote(n) });
    }
    if (req.method === "POST" && p === "/chat") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const v = (await loadVisit(String(b.visit || ""))) || visitorOf(b);
      if (!v) return send(res, 404, { error: "no such visit" });
      const text = clean(b.text, 400);
      if (!text) return send(res, 400, { error: "empty" });
      const r = await chat(chatTurn(v, b, text), { maxTokens: 260, temperature: 0.85, timeoutMs: 30_000, models: QUICK });
      const reply = clean(turnOf(aloud(r.text, v.lang), v.lang), 600);
      heardTalk(v, b, text, reply);
      return send(res, 200, { reply, chips: nextAsks(r.text, v.lang), model: r.model });
    }
    // A host answering as he thinks (server-sent events, as /guide/talk): `delta` pieces of what he says as they come,
    // `line` for each whole sentence the moment it is whole — its speech is started here, so the visitor's /tts for it
    // finds it made or on the way — then `done` with the whole reply and two things the visitor might ask next.
    if (req.method === "POST" && p === "/chat/stream") {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const v = (await loadVisit(String(b.visit || ""))) || visitorOf(b);
      if (!v) return send(res, 404, { error: "no such visit" });
      const text = clean(b.text, 400);
      if (!text) return send(res, 400, { error: "empty" });
      const lang = v.lang, ahead = b.voice !== false;
      res.writeHead(200, { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache, no-transform", Connection: "keep-alive", "X-Accel-Buffering": "no" });
      let raw = "", sent = "", said = 0, lines = 0, whole = 0, enough = false, grace = 0, over = false, first = 0;
      const t0 = Date.now();
      const event = (name, data) => { if (!over && !res.writableEnded && !res.destroyed) res.write(`event: ${name}\ndata: ${JSON.stringify(data)}\n\n`); };
      res.on("close", () => { over = true; });
      const flush = (final) => {
        const now = aloud(raw, lang)[final ? "trim" : "trimEnd"]();
        if (now.length <= sent.length) { if (!final) return; } else {
          if (now.startsWith(sent) && !enough) event("delta", { t: now.slice(sent.length) });
          sent = now;
        }
        let end;
        while (lines < MAX_LINES && !enough && (end = lineEnd(sent.slice(said), final, lang)) > 0) {
          const t = clean(sent.slice(said, said + end), 300);
          said += end;
          if (!t) continue;
          lines += 1;
          if (!first) first = Date.now() - t0;
          event("line", { t });
          if (ahead) tts.speak({ text: t, role: v.space, lang }).catch(() => {});
          if (SENTENCE_END.test(t) && turnDone(sent.slice(0, said), (whole += 1), lang)) enough = true;
        }
      };
      const finish = (extra = {}) => {
        clearTimeout(grace);
        if (over) return;
        const reply = clean(sent.slice(0, said) || sent, 600);
        heardTalk(v, b, text, reply);
        event("done", { reply, chips: nextAsks(raw, lang), ...extra, ...(reply ? {} : { error: true }) });
        over = true;
        res.end();
        log(`chat stream ${v.space} ${extra.model || "-"} first line ${first || "-"}ms ${Date.now() - t0}ms ${lines} lines "${reply.slice(0, 40)}"`);
      };
      try {
        const r = await chatStream(chatTurn(v, b, text), {
          models: QUICK, maxTokens: 260, temperature: 0.85,
          onDelta: (piece) => {
            if (over) return;
            raw += piece; flush(false);
            // A reply that runs on is let go after a few sentences: a turn of talk, not a speech. Once his turn is said
            // (TURN), the rest of the reply is read a little longer only for the two things to ask next.
            if (lines >= MAX_LINES) finish({ model: "cut" });
            else if (enough && !grace) grace = setTimeout(() => finish({ model: "cut" }), 4000);
          },
        });
        if (!over) { raw = r.text; flush(true); finish({ model: r.model }); }
      } catch (e) {
        log("chat stream failed", e.message);
        if (!over) { flush(true); finish(sent ? {} : { error: true }); }
      }
      return;
    }
    // Méliès' room, as it goes: the director between beats, and the trick a visitor says themselves (melies.mjs).
    if (req.method === "POST" && (p === "/melies/direct" || p === "/melies/say")) {
      if (!allow(ip, "chat")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const v = await loadVisit(String(b.visit || ""));
      if (!v || v.space !== "melies") return send(res, 404, { error: "no such visit" });
      const o = { visit: v, happened: b.happened, talk: talks.get(v.id)?.turns || [], chat, log };
      return send(res, 200, p === "/melies/say" ? await melies.sayOne({ ...o, text: b.text }) : await melies.direct({ ...o, beat: String(b.beat || "") }));
    }
    if (req.method === "POST" && p === "/tts") {
      if (!allow(ip, "tts")) return send(res, 429, { error: "slow down" });
      const b = await readBody(req);
      const text = clean(b.text, 300);
      if (!text) return send(res, 400, { error: "empty" });
      // A learner's English page still has English lines of its own; those are spoken as English.
      const lang = learnNow() ? (/[\u3400-\u9fff]/.test(text) ? "zh" : "en") : langOf(b.lang);
      const out = await tts.speak({ text, role: b.role === "guide" || SPACES[b.role] ? b.role : "melies", lang });
      return send(res, 200, out.bytes, { "Content-Type": "audio/mpeg", "Cache-Control": "public, max-age=31536000, immutable" });
    }
    if (req.method === "POST" && p === "/shot") {
      const b = await readBody(req);
      const v = await loadVisit(String(b.visit || ""));
      if (!v) return send(res, 404, { error: "no such visit" });
      let choices = b.choices && typeof b.choices === "object" ? saneChoices(b.choices) : null;
      if (choices && JSON.stringify(choices).length > 6000) choices = null;
      // One gift per visit, unless the visitor did their part again and chose differently.
      if (v.shot) { const s = await loadShot(v.shot); if (s && s.status !== "failed" && JSON.stringify(s.choices ?? null) === JSON.stringify(choices)) return send(res, 200, s); }
      if (!allow(ip, "shot") || !takeShotBudget()) return send(res, 429, { error: "the darkroom is busy" });
      const { title, dedication, trick, herbs, method } = v.plan.shot;
      const s = { id: id(), visit: v.id, space: v.space, status: "developing", title, dedication, trick, herbs, method, pulse: v.plan.pulse, choices, identity: v.identity, avatar: v.avatar, lang: v.lang, created: new Date().toISOString() };
      shots.set(s.id, s); v.shot = s.id; await saveVisit(v); await writeFile(shotFile(s.id), JSON.stringify(s));
      runShot(s, v).catch((e) => log("shot crash", e.message));
      return send(res, 200, s);
    }
    let m;
    if (req.method === "GET" && (m = p.match(/^\/visit\/([\w-]{8,24})$/))) {
      const v = await loadVisit(m[1]);
      // Asked from inside the life: the visitor has walked in (an afterPlan may wait for this before it paints).
      if (v && !v.entered) v.entered = Date.now();
      return v ? send(res, 200, { id: v.id, plan: v.plan, extras: v.extras || {} }) : send(res, 404, { error: "no such visit" });
    }
    if (req.method === "GET" && (m = p.match(/^\/shot\/([\w-]{8,24})$/))) {
      const s = await loadShot(m[1]);
      return s ? send(res, 200, s) : send(res, 404, { error: "no such shot" });
    }
    if (req.method === "GET" && p === "/wall") return send(res, 200, { items: await wall(SPACES[url.searchParams.get("space")] ? url.searchParams.get("space") : "melies") });
    if (req.method === "GET" && (m = p.match(/^\/media\/([\w-]{8,24}\.(?:jpg|png))$/))) {
      const bytes = await readFile(path.join(DATA, "shots", m[1])).catch(() => null);
      if (!bytes) return send(res, 404, { error: "missing" });
      return send(res, 200, bytes, { "Content-Type": m[1].endsWith(".png") ? "image/png" : "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" });
    }
    send(res, 404, { error: "not found" });
  } catch (e) {
    log(`${req.method} ${p} error: ${e.message}`);
    send(res, e.status || 500, { error: e.status ? e.message : "server error" });
  }
}
const server = http.createServer((req, res) => withLearn(learnOf(req), () => handle(req, res)));
// Words as they are spoken: the microphone's audio relayed to real-time recognition (WebSocket).
await attachAsrStream(server, { path: "/life/api/asr/stream", log, allow: (ip) => allow(ip, "asr") });
server.listen(PORT, "127.0.0.1", () => log(`life-plaza api on 127.0.0.1:${PORT}, data ${DATA}`));
