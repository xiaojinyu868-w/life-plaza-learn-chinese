/**
 * The static half of a piece's acceptance: what can be read off the file before it runs. Errors go back to the model
 * as they are written here (plain sentences it can act on); warnings are kept on the record only.
 */
import vm from "node:vm";

export const LIMITS = Object.freeze({ maxBytes: 150_000, minBytes: 1800 });

/** Forbidden: the network, other windows, navigation, storage the sandbox refuses, modal dialogs. */
const BANNED = [
  [/\bfetch\s*\(/, "uses fetch() — the piece runs with no network; draw, write or synthesize everything in the file"],
  [/\bXMLHttpRequest\b/, "uses XMLHttpRequest — there is no network"],
  [/\bnew\s+WebSocket\b|\bEventSource\b/, "opens a socket or event stream — there is no network"],
  [/\bsendBeacon\b|\bimportScripts\b|\bnavigator\.serviceWorker\b/, "reaches for the network or a service worker"],
  [/\bimport\s*\(/, "uses dynamic import() — nothing can be loaded; keep all code inline"],
  [/^\s*import\s[^;]*?from\s*["']|^\s*import\s*["']/m, "imports a module — nothing can be loaded; keep all code inline in classic <script> tags"],
  [/<script\b[^>]*\bsrc\s*=/i, "loads a <script src> — keep all code inline"],
  [/<link\b[^>]*\bhref\s*=\s*["']?(?:https?:)?\/\//i, "links an external stylesheet or font — use the fonts in LP.font"],
  [/@import\b/i, "uses CSS @import — nothing can be loaded"],
  [/url\(\s*["']?(?:https?:)?\/\//i, "uses a network url() in CSS — draw it or use a data: URL"],
  [/\b(?:src|href|poster)\s*=\s*["'](?:https?:)?\/\//i, "points an element at the network — draw it or use a data: URL"],
  [/<iframe\b|<object\b|<embed\b/i, "embeds another document — everything lives in this one page"],
  [/\b(?:top|parent)\s*\.\s*(?:location|document)\b/, "reaches into the parent page"],
  [/\blocation\s*\.\s*(?:href\s*=|assign\s*\(|replace\s*\(|reload\s*\()|\blocation\s*=\s*["'`]/, "navigates the page"],
  [/\bdocument\.cookie\b|\bindexedDB\b|\bcaches\s*\./, "uses cookies, IndexedDB or caches — the sandbox refuses them"],
  [/(?<![\w$.])(?:window\.)?(?:alert|confirm|prompt)\s*\(\s*["'`]/, "uses alert/confirm/prompt — the sandbox blocks dialogs; show text in the page"],
  [/<form\b/i, "uses a <form> — the sandbox blocks submitting; use buttons and pointer events"],
  [/\bnavigator\.(?:mediaDevices|geolocation|clipboard)\b/, "asks for the camera, microphone, location or clipboard"],
];

const EMOJI = /\p{Extended_Pictographic}/u;
/** Characters that read as emoji even without the presentation selector (arrows, stars and hearts are fine as text). */
const EMOJI_SAFE = /[\u2190-\u21ff\u2600-\u2605\u2610-\u2612\u2661\u2665\u2666\u2660\u2663\u266a-\u266f\u2713\u2714\u2715-\u2717\u00a9\u00ae\u2122\u203c\u2049]/u;

/** The inline scripts of a document, with their type. */
export function scriptsOf(html) {
  const out = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1] || "";
    const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1] || "").toLowerCase();
    if (type && !/^(?:module|text\/javascript|application\/javascript)$/.test(type)) continue;
    if (/\bdata-lp\b/.test(attrs)) continue;
    out.push({ type: type || "classic", code: m[2] });
  }
  return out;
}

/** Does a script compile? (Top-level await is tried inside an async wrapper.) */
function syntaxError(code) {
  try { new vm.Script(code, { filename: "piece.js" }); return null; } catch (e) {
    if (/await is only valid|Cannot use import statement|Unexpected reserved word/.test(e.message)) {
      try { new vm.Script(`(async () => {\n${code}\n})`, { filename: "piece.js" }); return null; } catch (e2) { return e2; }
    }
    return e;
  }
}

/** The line of `code` where a SyntaxError points, for the model to find it. */
function where(e, code) {
  const m = /piece\.js:(\d+)/.exec(String(e.stack || ""));
  if (!m) return "";
  const n = Number(m[1]);
  const line = code.split("\n")[n - 1] || "";
  return ` near script line ${n}: \`${line.trim().slice(0, 120)}\``;
}

/** Visible words: text nodes plus string literals (roughly — enough to catch emoji and shouting). */
const wordsOf = (html) => {
  const text = html.replace(/<script\b[\s\S]*?<\/script>/gi, " ").replace(/<style\b[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ");
  const literals = (html.match(/(["'`])(?:(?!\1)[^\\\n]|\\.){1,400}\1/g) || []).join(" ");
  return `${text} ${literals}`;
};

/**
 * Check a piece (the HTML as the model wrote it, before compose).
 * Returns { ok, errors: [sentence], warnings: [sentence], bytes }.
 */
export function staticCheck(html, { maxBytes = LIMITS.maxBytes, minBytes = LIMITS.minBytes } = {}) {
  const errors = [], warnings = [];
  const doc = String(html || "");
  const bytes = Buffer.byteLength(doc, "utf8");
  if (bytes > maxBytes) errors.push(`the file is ${Math.round(bytes / 1000)} KB; it must stay under ${Math.round(maxBytes / 1000)} KB — draw procedurally instead of embedding data, and cut repetition`);
  if (bytes < minBytes) errors.push("the file is almost empty — it must be a complete HTML document");
  if (!/<body[\s>]/i.test(doc) && !/<canvas|<svg|<div/i.test(doc)) errors.push("there is no document body to show");
  const scripts = scriptsOf(doc);
  if (!scripts.length) errors.push("there is no inline <script>; the piece needs code to respond to touch and to call LP.done()");
  for (const [re, why] of BANNED) if (re.test(doc)) errors.push(`the piece ${why}`);
  const code = scripts.map((s) => s.code).join("\n;\n");
  if (!/\bLP\s*\.\s*done\s*\(/.test(code)) errors.push("the piece never calls LP.done({ line }) — it must end by calling it once, after its reveal");
  if (!/pointerdown|pointerup|pointermove|touchstart|touchend|touchmove|["']click["']|onclick/i.test(doc)) errors.push("the piece never listens for touch (pointer events) — it must be played with the fingers");
  for (const s of scripts) {
    const e = syntaxError(s.code);
    if (e) errors.push(`a <script> does not compile: ${e.message}${where(e, s.code)}`);
  }
  if (/\blocalStorage\b|\bsessionStorage\b/.test(code)) warnings.push("uses web storage (an in-memory stand-in is provided)");
  if (/\brequire\s*\(\s*["']/.test(code)) errors.push("uses require() — this is a browser page with no modules");
  const words = wordsOf(doc);
  const emoji = [...words].filter((ch) => EMOJI.test(ch) && !EMOJI_SAFE.test(ch));
  if (emoji.length) errors.push(`uses emoji (${[...new Set(emoji)].slice(0, 6).join(" ")}) — draw shapes instead and keep words plain`);
  if (/[!！]{2,}/.test(words)) warnings.push("stacks exclamation marks");
  if (/\bconsole\.log\b/.test(code)) warnings.push("leaves console.log calls");
  return { ok: errors.length === 0, errors: [...new Set(errors)], warnings, bytes };
}
