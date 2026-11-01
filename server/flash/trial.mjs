/**
 * The running half of a piece's acceptance: a headless phone (390×844, touch) plays the composed piece inside the same
 * sandboxed iframe the visitor's player uses, and checks that it loads without errors, is not blank, answers touch
 * (on screen or with a sound), makes sound at all, and survives a few seconds of fingers everywhere. Its last frame
 * is the piece's cover.
 *
 * Needs Playwright and a Chrome/Chromium (present on a dev machine; production may not have them: the trial is then
 * skipped and the player's own rehearsal — a hidden first run waiting for "ready" — is the only guard).
 * LIFE_FLASH_TRIAL = auto (default) | off. One browser at a time; it is closed after every run.
 */
import os from "node:os";

const PHONE_UA = "Mozilla/5.0 (Linux; Android 15; PKG110) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36";
const W = 390, H = 844;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let queue = Promise.resolve();
let playwright;

async function loadPlaywright() {
  if (playwright !== undefined) return playwright;
  if ((process.env.LIFE_FLASH_TRIAL || "auto") === "off") return (playwright = null);
  try { playwright = await import("playwright"); } catch { playwright = null; }
  return playwright;
}

export async function trialAvailable() { return !!(await loadPlaywright()); }

/** A bare page holding the piece in the player's own iframe (sandbox="allow-scripts", srcdoc), collecting its messages. */
export const HARNESS = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;height:100%;background:#000;overflow:hidden}iframe{position:fixed;inset:0;width:100%;height:100%;border:0;display:block}</style></head><body><iframe id="f" sandbox="allow-scripts"></iframe><script>window.__msgs=[];addEventListener("message",function(e){if(e.data&&e.data.lpFlash===1){var m=Object.assign({},e.data);if(m.result&&m.result.image)m.result.image=m.result.image.length;m.t=performance.now();window.__msgs.push(m);}});</script></body></html>`;

/** Mean share of pixels that changed between two same-sized screenshots (and around a point, if given). */
async function difference(sharp, a, b, at) {
  const [ra, rb] = await Promise.all([a, b].map((x) => sharp(x).removeAlpha().resize(W, H, { fit: "fill" }).raw().toBuffer()));
  let changed = 0, near = 0, nearN = 0;
  const px = ra.length / 3;
  for (let i = 0; i < px; i += 1) {
    const d = Math.max(Math.abs(ra[i * 3] - rb[i * 3]), Math.abs(ra[i * 3 + 1] - rb[i * 3 + 1]), Math.abs(ra[i * 3 + 2] - rb[i * 3 + 2]));
    const hit = d > 14;
    if (hit) changed += 1;
    if (at) {
      const x = i % W, y = Math.floor(i / W);
      if (Math.abs(x - at.x) < 90 && Math.abs(y - at.y) < 90) { nearN += 1; if (hit) near += 1; }
    }
  }
  return { all: changed / px, near: nearN ? near / nearN : 0 };
}

/** Is a screenshot one flat colour? */
async function flatness(sharp, png) {
  const s = await sharp(png).removeAlpha().stats();
  return Math.max(...s.channels.map((c) => c.stdev));
}

/** Wait for enough free memory before starting a browser on a shared machine. */
async function roomForBrowser(log) {
  for (let i = 0; i < 12; i += 1) {
    if (os.freemem() > 1.6 * 1024 ** 3) return;
    if (i === 0) log?.(`flash trial waiting for memory (${(os.freemem() / 1024 ** 3).toFixed(1)} GB free)`);
    await sleep(5000);
  }
}

/** The windows a piece may see before the player's frame is laid out, smallest first, then the phone's. */
export const SMALL_WINDOWS = Object.freeze([[0, 0], [300, 150], [1280, 120], [120, 90], [W, H]]);

/**
 * The piece in the windows an iframe has before it is laid out (0×0, 300×150, a strip, a stamp), then grown to the
 * phone: nothing may throw, and the piece must still answer (a layout loop that only ends in a big window hangs it).
 * Returns the problems as sentences for the model.
 */
async function smallWindows(context, doc) {
  const page = await context.newPage();
  const out = [];
  const within = (p, ms) => Promise.race([p.then(() => true).catch(() => true), sleep(ms).then(() => false)]);
  try {
    await page.setContent(HARNESS, { waitUntil: "load" });
    // Laid out at 0×0 first (a frame), so the piece's first script already sees the empty window.
    await page.evaluate((d) => new Promise((done) => {
      const f = document.getElementById("f");
      f.style.cssText = "position:fixed;left:0;top:0;right:auto;bottom:auto;width:0;height:0;border:0;display:block";
      void f.getBoundingClientRect();
      requestAnimationFrame(() => requestAnimationFrame(() => { f.srcdoc = d; done(); }));
    }), doc);
    for (const [w, h] of SMALL_WINDOWS) {
      const resized = await within(page.evaluate(([fw, fh]) => { const f = document.getElementById("f"); f.style.width = `${fw}px`; f.style.height = `${fh}px`; }, [w, h]), 3000);
      await sleep(w === W ? 900 : 650);
      const frame = page.frames().find((f) => f !== page.mainFrame());
      const alive = resized && frame ? await within(frame.evaluate(() => 1), 3000) : false;
      if (!alive) { out.push(`in a ${w}×${h} window the piece stopped answering — a layout or drawing loop that only ends once the window is big enough? clamp every size to at least 1 and never loop on the window's size`); break; }
    }
    const msgs = await Promise.race([page.evaluate(() => window.__msgs.filter((m) => m.type === "error").map((m) => m.message)), sleep(3000).then(() => [])]);
    for (const m of [...new Set(msgs)].slice(0, 4)) out.push(`while the window was tiny (it starts at 0×0, then 300×150, 1280×120 and 120×90 before the phone's size): ${m}`);
  } catch (e) {
    out.push(`the small-window run broke: ${String(e.message || e).slice(0, 160)}`);
  } finally {
    await Promise.race([page.close().catch(() => {}), sleep(3000)]);
  }
  return out;
}

/**
 * Play a composed piece. `lineOffset` = lines the composer added before the piece's own (to map errors back).
 * Returns { ok, skipped, errors: [sentence], warnings, checks, stats, cover (jpeg bytes | null), ms }.
 */
export function trial(doc, opts = {}) {
  const run = queue.then(() => trialNow(doc, opts));
  queue = run.catch(() => {});
  return run;
}

/** What a curious finger does with the piece's own hint, by what the hint says (as scripts/flash-play.mjs does). */
const ACTS = [[/按住|长按|hold|press/i, "hold"], [/摇|转|crank|turn|wind/i, "crank"], [/擦|涂|抹|画|rub|paint|wipe|brush/i, "rub"], [/拖|拉|划|滑|移|放|送|铺|倒|drag|pull|swipe|slide|lay|place|put|drop|pour|carry|bring|move/i, "drag"]];

/**
 * Play on the way a visitor would, after the restless fingers: follow the piece's own hint (hold, crank, rub, drag or
 * tap, by its words), else try what a curious finger tries (its buttons, the middle, a hold, a drag, a rub, around).
 * Contract 8: whatever happens, a piece reaches LP.done inside two minutes. Returns { done, seconds, stuck }.
 */
async function playToEnd(frame, { msgs, tap, path, hold, ms }) {
  const t0 = Date.now();
  let idle = 0, at = { words: [], hint: "" };
  const look = () => frame.evaluate(() => {
    const layer = document.querySelector("div[data-lp]"), hints = [], words = [];
    if (layer) for (const el of layer.children) {
      const r = el.getBoundingClientRect();
      if (Number(getComputedStyle(el).opacity) < 0.2) continue;
      if (el.querySelector("i")) hints.push({ x: r.left + r.width / 2, y: r.top + r.height / 2, label: el.textContent.trim() });
      else if (el.textContent.trim()) words.push(el.textContent.trim().slice(0, 40));
    }
    const buttons = [...document.querySelectorAll("button, [role=button], .btn, [onclick]")].filter((b) => !b.closest("[data-lp]")).map((b) => b.getBoundingClientRect()).filter((r) => r.width > 8 && r.height > 8 && r.top > 0 && r.bottom < innerHeight).map((r) => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 }));
    return { hints, words, buttons };
  }).catch(() => ({ hints: [], words: [], buttons: [] }));
  const circle = (x, y, r) => Array.from({ length: 96 }, (_, i) => [x + r * Math.cos((i / 32) * Math.PI * 2), y + r * Math.sin((i / 32) * Math.PI * 2)]);
  const rub = (x, y) => Array.from({ length: 36 }, (_, i) => [Math.max(10, Math.min(W - 10, x + Math.sin(i * 0.9) * 90)), Math.max(60, Math.min(H - 10, y + i * 4 - 70))]);
  while (Date.now() - t0 < ms) {
    if ((await msgs()).some((m) => m.type === "done")) return { done: true, seconds: Math.round((Date.now() - t0) / 1000) };
    const s = await look();
    if (s.words.length) at.words = s.words;
    const h = s.hints[0];
    if (h) {
      at.hint = h.label;
      const act = ACTS.find(([re]) => re.test(h.label))?.[1] || "tap";
      if (act === "hold") await hold(h.x, h.y, 2200);
      else if (act === "crank") await path(circle(h.x, h.y, 50), 2400);
      else if (act === "rub") await path(rub(h.x, h.y), 1800);
      else if (act === "drag") await path(Array.from({ length: 24 }, (_, i) => [h.x, Math.max(40, h.y - i * 12)]), 900);
      else await tap(h.x, h.y);
      idle = 0;
    } else {
      const k = idle++ % 6;
      if (k === 0 && s.buttons.length) await tap(s.buttons[0].x, s.buttons[0].y);
      else if (k === 1) await tap(W / 2, H * 0.55);
      else if (k === 2) await hold(W / 2, H * 0.5, 1800);
      else if (k === 3) await path(Array.from({ length: 24 }, (_, i) => [W / 2, H * 0.8 - i * 18]), 900);
      else if (k === 4) await path(rub(W / 2, H * 0.45), 1600);
      else for (const [x, y] of [[0.3, 0.4], [0.7, 0.6], [0.5, 0.3]]) { await tap(W * x, H * y); await sleep(250); }
    }
    await sleep(650);
  }
  return { done: false, seconds: Math.round(ms / 1000), stuck: at };
}

async function trialNow(doc, { lineOffset = 0, monkeyMs = 9000, playMs = 120_000, timeoutMs = 75_000 + playMs, log, keepShots = null } = {}) {
  const pw = await loadPlaywright();
  if (!pw) return { ok: true, skipped: true, errors: [], warnings: ["no headless browser here; the player's rehearsal guards it"], checks: {}, stats: null, cover: null, ms: 0 };
  const sharp = (await import("sharp")).default;
  const t0 = Date.now();
  await roomForBrowser(log);
  const args = ["--autoplay-policy=no-user-gesture-required", "--ignore-gpu-blocklist", "--enable-gpu"];
  if (process.platform === "win32") args.push("--use-angle=d3d11");
  // A browser of its own that can be killed: a piece stuck in a loop hangs its renderer, and a hung renderer never
  // lets Browser.close() finish (the job would wait forever).
  let server;
  try { server = await pw.chromium.launchServer({ channel: "chrome", headless: true, args }); } catch { server = await pw.chromium.launchServer({ headless: true, args }); }
  const browser = await pw.chromium.connect(server.wsEndpoint());
  const lines = String(doc).split("\n");
  const errors = [], warnings = [], checks = {};
  const browserNotes = [];
  let stats = null, cover = null;
  const located = (msg) => {
    const m = /\(line (\d+):(\d+)\)/.exec(msg);
    if (!m) return msg;
    const n = Number(m[1]);
    const code = (lines[n - 1] || "").trim().slice(0, 140);
    return msg.replace(m[0], `(line ${Math.max(1, n - lineOffset)} of your file${code ? `: \`${code}\`` : ""})`);
  };
  const work = (async () => {
    const context = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: PHONE_UA, locale: "zh-CN" });
    const tiny = await smallWindows(context, doc);
    checks.smallWindows = tiny.length === 0;
    for (const e of tiny) errors.push(located(e));
    if (tiny.some((e) => /stopped answering/.test(e))) return;
    const page = await context.newPage();
    page.on("console", (m) => { if (m.type() === "error" && /Refused to|Content Security Policy|net::ERR/i.test(m.text())) browserNotes.push(m.text().slice(0, 240)); });
    await page.setContent(HARNESS, { waitUntil: "load" });
    await page.evaluate((d) => { document.getElementById("f").srcdoc = d; }, doc);
    const msgs = () => page.evaluate(() => window.__msgs.slice());
    let ready = null;
    for (let i = 0; i < 40 && !ready; i += 1) { await sleep(200); ready = (await msgs()).find((m) => m.type === "ready") || null; }
    checks.ready = !!ready;
    if (!ready) errors.push("the page never finished loading (no load event within 8 seconds) — something blocks or throws at start");
    const frame = page.frames().find((f) => f !== page.mainFrame());
    const shot = () => page.screenshot({ type: "png" });
    await sleep(900);
    const a = await shot();
    await sleep(500);
    const a2 = await shot();
    const flat = await flatness(sharp, a2);
    checks.flat = Math.round(flat * 10) / 10;
    if (flat < 1) errors.push("after loading the screen is one flat colour — nothing is drawn (check the canvas size, drawing code and colours)");
    const cdp = await context.newCDPSession(page);
    const touch = (type, x, y) => cdp.send("Input.dispatchTouchEvent", { type, touchPoints: type === "touchEnd" ? [] : [{ x, y, radiusX: 6, radiusY: 6, force: 1, id: 1 }] });
    const tap = async (x, y) => { await touch("touchStart", x, y); await sleep(70); await touch("touchEnd", x, y); };
    const drag = async (x1, y1, x2, y2, ms = 420) => { await touch("touchStart", x1, y1); const n = Math.max(6, Math.round(ms / 30)); for (let i = 1; i <= n; i += 1) { await touch("touchMove", x1 + ((x2 - x1) * i) / n, y1 + ((y2 - y1) * i) / n); await sleep(ms / n); } await touch("touchEnd", x2, y2); };
    const hold = async (x, y, ms = 900) => { await touch("touchStart", x, y); const n = Math.round(ms / 100); for (let i = 0; i < n; i += 1) { await sleep(100); await touch("touchMove", x + Math.sin(i) * 1.5, y + Math.cos(i) * 1.5); } await touch("touchEnd", x, y); };
    const at = { x: W / 2, y: H * 0.55 };
    await tap(at.x, at.y);
    await sleep(160);
    const b = await shot();
    const ambient = await difference(sharp, a, a2);
    const answer = await difference(sharp, a2, b, at);
    await hold(W / 2, H * 0.6, 1000);
    await drag(W / 2, H * 0.75, W / 2, H * 0.3);
    await drag(W * 0.2, H * 0.5, W * 0.8, H * 0.5);
    for (const [x, y] of [[0.3, 0.35], [0.7, 0.35], [0.5, 0.5], [0.3, 0.7], [0.7, 0.7]]) { await tap(W * x, H * y); await sleep(160); }
    await sleep(400);
    stats = frame ? await frame.evaluate(() => window.__lpStats && JSON.parse(JSON.stringify(window.__lpStats))).catch(() => null) : null;
    checks.ambient = Math.round(ambient.all * 1000) / 1000;
    checks.answer = Math.round(answer.all * 1000) / 1000;
    checks.answerNear = Math.round(answer.near * 1000) / 1000;
    checks.touchSounds = stats?.touchSounds ?? 0;
    const seen = answer.all - ambient.all > 0.003 || answer.near - ambient.all > 0.03;
    checks.responds = seen || (stats?.touchSounds ?? 0) > 0;
    if (!checks.responds) errors.push("a tap in the middle of the screen changed nothing and made no sound — every touch must answer at once (light, motion and a sound), wherever the finger lands on the main stage");
    checks.sounds = stats?.sounds ?? 0;
    if (stats && !stats.sounds) errors.push("nothing made a sound after a dozen touches — answer touches with LP.sound (or your own Web Audio)");
    // A few seconds of fingers everywhere, as a restless visitor would.
    const rnd = (() => { let s = 7; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; })();
    const until = Date.now() + monkeyMs;
    while (Date.now() < until) {
      const r = rnd(), x = 20 + rnd() * (W - 40), y = H * 0.08 + rnd() * H * 0.88;
      if (r < 0.55) await tap(x, y); else if (r < 0.8) await drag(x, y, 20 + rnd() * (W - 40), H * 0.08 + rnd() * H * 0.88, 300); else await hold(x, y, 500 + rnd() * 700);
      await sleep(120 + rnd() * 260);
      if ((await msgs()).some((m) => m.type === "done")) { await sleep(1500); break; }
    }
    // Then on to the end, the way a visitor follows it (only for a piece that has not failed already).
    if (playMs > 0 && frame && !errors.length && !(await msgs()).some((m) => m.type === "done")) {
      const path = async (pts, ms) => { await touch("touchStart", ...pts[0]); for (const [x, y] of pts.slice(1)) { await touch("touchMove", x, y); await sleep(ms / pts.length); } await touch("touchEnd", ...pts.at(-1)); };
      const played = await playToEnd(frame, { msgs, tap, path, hold, ms: playMs });
      checks.playedTo = played.done ? played.seconds : `stuck after ${played.seconds}s`;
      if (!played.done) {
        const where = [played.stuck?.words?.length ? `the words on screen were "${played.stuck.words.join(" / ").slice(0, 120)}"` : "", played.stuck?.hint ? `the hint said "${played.stuck.hint}"` : ""].filter(Boolean).join(" and ");
        errors.push(`after ${played.seconds} more seconds of play that followed your own hints, the piece never reached LP.done${where ? ` (${where})` : ""} — that beat waits for something the visitor may never do. Find the beat that shows those words and give it a timer: if nothing has moved it on for 15 s, show LP.hint; 20 s later complete it for them, exactly as if they had done it (and do the same for every later beat), so the whole piece always ends within two minutes`);
      } else await sleep(1800);
    }
    await sleep(600);
    const last = await shot();
    if (keepShots) keepShots({ a: a2, b, last });
    const end = (await msgs());
    const done = end.find((m) => m.type === "done");
    checks.done = done ? (done.result?.line || true) : false;
    stats = frame ? await frame.evaluate(() => window.__lpStats && JSON.parse(JSON.stringify(window.__lpStats))).catch(() => stats) : stats;
    const page2 = frame ? await frame.evaluate(() => {
      const small = [];
      for (const el of document.querySelectorAll("body *")) {
        if (el.closest("[data-lp]")) continue;
        const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
        if (!own) continue;
        const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
        if (r.width < 1 || r.height < 1 || cs.visibility === "hidden" || Number(cs.opacity) === 0) continue;
        if (parseFloat(cs.fontSize) < 12) small.push(`${el.tagName.toLowerCase()} ${parseFloat(cs.fontSize)}px "${el.textContent.trim().slice(0, 20)}"`);
      }
      return { small: small.slice(0, 5), sw: document.documentElement.scrollWidth, iw: innerWidth };
    }).catch(() => null) : null;
    if (page2?.small?.length) warnings.push(`text smaller than 12px: ${page2.small.join("; ")}`);
    if (page2 && page2.sw > page2.iw + 4) warnings.push(`content is ${page2.sw}px wide on a ${page2.iw}px screen`);
    if (await flatness(sharp, last) < 1) errors.push("after a few seconds of play the screen went blank (one flat colour)");
    cover = await sharp(last).resize(540).jpeg({ quality: 82 }).toBuffer();
    for (const m of end.filter((x) => x.type === "error")) errors.push(`while playing: ${located(m.message)}`);
    for (const n of browserNotes) errors.push(`the browser refused something: ${n}`);
  })();
  let timer = 0;
  try {
    await Promise.race([work, new Promise((_, no) => { timer = setTimeout(() => no(new Error("trial timed out")), timeoutMs); })]);
  } catch (e) {
    errors.push(`the trial run could not finish: ${String(e.message || e).slice(0, 200)}`);
  } finally {
    clearTimeout(timer);
    const closed = await Promise.race([browser.close().then(() => server.close()).then(() => true, () => false), sleep(6000).then(() => false)]);
    if (!closed) await server.kill().catch(() => {});
  }
  const unique = [...new Set(errors)].slice(0, 12);
  return { ok: unique.length === 0, skipped: false, errors: unique, warnings, checks, stats, cover, ms: Date.now() - t0 };
}
