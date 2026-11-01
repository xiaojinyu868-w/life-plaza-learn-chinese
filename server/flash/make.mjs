/**
 * Making one piece, start to finish, with no HTTP and no storage: concept → piece → static check → trial run → (one
 * repair with the errors fed back → check again) → a composed document, or a refusal. Used by the API's jobs and by
 * the batch scripts alike.
 *
 * Never returns a broken piece: `ok: false` means nothing should be shown.
 */
import { chat, chatStream, parseJson } from "../lib/llm.mjs";
import { longChat } from "./long.mjs";
import { compose, sdkScript, splitPiece } from "./sdk.mjs";
import { staticCheck } from "./check.mjs";
import { trial } from "./trial.mjs";
import { SEGMENT, applyEdits, buildMessages, conceptMessages, craftedBuildMessages, polishMessages, repairMessages, saneConcept } from "./prompt.mjs";
import { readFile } from "node:fs/promises";

/** The hand-finished example a life's pieces are held to: always another life's, so its craft is learned, never its content. */
const REFERENCE_FOR = Object.freeze({ lishizhen: "exam", melies: "market", vangogh: "rider", xiyou: "mother" });
export const referenceFor = (space) => readFile(new URL(`./examples/${REFERENCE_FOR[space] || "market"}.html`, import.meta.url), "utf8").catch(() => null);

const listOf = (v, fallback) => Object.freeze(String(v || fallback).split(",").map((s) => s.trim()).filter(Boolean));
/**
 * The models that think of the piece; a model that fails hands the stage to the one after it. Bailian's own (10/7,
 * docs/flash.md 6.3): DeepSeek v4.1 flash makes a whole piece in about a minute and streams; GLM-5.3 Flash behind it.
 * The gateway's Claude and GPT chains (claude-opus-5-5, claude-sonnet-4-6, gpt-6-sol) can be set here instead.
 */
export const MAKERS = listOf(process.env.LIFE_FLASH_MODELS, "ds:deepseek-v4.1-flash,ds:ZHIPU/GLM-5.3-Flash");
/**
 * The models that write it (and mend it). Of the gateway's: Sonnet 4.6 writes a whole file inside its 180 s; GPT-6
 * streams and always finishes; Opus 5.5 can't write a file before the cut at all, and the Claude models that do stream
 * (claude-opus-5, claude-opus-4-8) think for more than four minutes before the first word (docs/flash.md 6.2).
 */
export const BUILDERS = listOf(process.env.LIFE_FLASH_BUILD_MODELS, "ds:deepseek-v4.1-flash,ds:ZHIPU/GLM-5.3-Flash");
/**
 * Models the gateway answers all at once and cuts at 180 s (measured 10 月 6 日: headers only when the whole answer is
 * written). Everything else streams.
 */
const BUFFERED = new Set(listOf(process.env.LIFE_FLASH_BUFFERED, "claude-opus-5-5,claude-sonnet-4-6,claude-haiku-4-5"));
export const buffered = (model) => BUFFERED.has(model);
/** A buffered answer has to be written inside 180 s: Opus 5.5 writes about 40 tokens a second, Sonnet 4.6 about 60. */
const budgetOf = (model) => (!buffered(model) ? 40 : /^claude-opus/.test(model) ? 16 : 22);
const buildTokens = (model) => (!buffered(model) ? 30_000 : /^claude-opus/.test(model) ? 6000 : 9000);
/** US dollars per million tokens in / out, read off the gateway's own cost header (10 月 6 日), for streams it doesn't price. */
const PRICE = Object.freeze({ "claude-opus-5-5": [10, 50], "claude-opus-5": [5, 25], "claude-sonnet-4-6": [3, 15], "gpt-6-sol": [4, 25] });
const costOf = (model, usage) => {
  const p = PRICE[model];
  if (!p || !usage) return null;
  return Math.round(((usage.prompt_tokens || 0) * p[0] + (usage.completion_tokens || 0) * p[1]) / 1e3) / 1e3;
};
/** Polish: on | off | auto (only a piece whose file a Claude model didn't write: its drawing is the plain one). */
export const polishMode = (v) => { const s = String(v ?? "auto").toLowerCase(); return s === "on" || s === "off" ? s : "auto"; };

const PRODUCT = Object.freeze({ ink: "#23303a", paper: "#fffaf1", cream: "#fbf6ec", sea: "#cfe3ee", gold: "#e8b45c", coral: "#ef8f78" });
const charsOf = (messages) => messages.reduce((n, m) => n + String(m.content || "").length, 0);
/** What the calls of one piece cost (those the gateway or the price table could price), in US dollars. */
const totalCost = (calls) => Math.round(calls.reduce((s, c) => s + (c.cost || 0), 0) * 1000) / 1000;

/** What the SDK carries for one piece. */
export function sdkConfig({ lang, field, visitor, concept }) {
  const m = visitor?.me || {};
  return {
    lang,
    me: { who: m.who || "", story: m.story || "", details: m.details || [], wish: m.wish || "", mood: m.mood || "", title: m.title || "", line: m.line || "", unseen: m.unseen || "" },
    host: { id: field.id, name: field.name, place: field.place },
    theme: { ...PRODUCT, palette: concept?.palette || [] },
    key: concept?.key ?? field.key ?? 0,
    dark: !!concept?.dark,
  };
}

/**
 * A long file from a model the gateway cuts at 180 s: written in parts of `partTokens`, each part ending on SEGMENT's
 * marker (or cut by the token limit) and the next one carrying on from the last character.
 */
async function segmentedChat(messages, { model, lang = "zh", partTokens = 3000, parts = 6, temperature = 0.8, onDelta }) {
  let text = "", cost = 0;
  const usage = { prompt_tokens: 0, completion_tokens: 0 }, times = [];
  for (let i = 0; i < parts; i += 1) {
    const ask = i === 0
      ? [...messages.slice(0, -1), { ...messages.at(-1), content: `${messages.at(-1).content}\n\n${SEGMENT.first(lang)}` }]
      : [...messages, { role: "assistant", content: text }, { role: "user", content: SEGMENT.next(lang) }];
    const t0 = Date.now();
    const r = await longChat(ask, { model, maxTokens: partTokens, temperature, timeoutMs: 178_000 });
    times.push(Date.now() - t0);
    usage.prompt_tokens += r.usage?.prompt_tokens || 0; usage.completion_tokens += r.usage?.completion_tokens || 0;
    cost += r.cost || 0;
    const more = r.text.includes(SEGMENT.marker);
    const part = r.text.replace(/^```(?:html)?[ \t]*\n?/i, "").replace(/\n?```\s*$/i, "").replace(SEGMENT.marker, "");
    text += part;
    onDelta?.(part);
    if (/<\/html>/i.test(part) || (!more && r.stop !== "length")) break;
  }
  return { text: text.trim(), usage, cost: cost || null, stop: /<\/html>/i.test(text) ? "stop" : "length", parts: times };
}

/** Lines the composer puts before the piece's own (so a trial error points at the model's line). */
const offsetOf = (cfg) => (sdkScript(cfg).match(/\n/g) || []).length;

async function accept(html, cfg, { log, trialOpts }) {
  const st = staticCheck(html);
  if (!st.ok) return { ok: false, stage: "static", errors: st.errors, warnings: st.warnings, bytes: st.bytes };
  const doc = compose(html, cfg);
  const tr = await trial(doc, { lineOffset: offsetOf(cfg), log, ...trialOpts });
  return { ok: tr.ok, stage: "trial", errors: tr.errors, warnings: [...st.warnings, ...tr.warnings], bytes: st.bytes, doc, trial: tr };
}

/**
 * Make a piece. `onStage(stage, info)` hears "thinking" | "making" | "trying" | "mending" | "polishing" as they start, plus
 * { concept } once the concept is known and { chars } while the piece streams in.
 * Returns { ok, doc, html, concept, cover, model, calls: [{ stage, model, ms, charsIn, charsOut }], errors, warnings,
 * checks, attempts, ms }.
 */
export async function makePiece({ lang = "zh", field, visitor, intent = "", plan = null, models = MAKERS, buildModels = null, onStage = () => {}, log = () => {}, trialOpts = {}, skipConcept = false, reference = null, polish = false, polishModels = null, polishReference = reference, segmented = false, budgetKB = null } = {}) {
  const t0 = Date.now();
  const calls = [];
  const chains = { concept: [...models], build: [...(buildModels || (models === MAKERS ? BUILDERS : models))] };
  /** `ask` is the messages, or a function of the model that will answer them. */
  const call = async (stage, which, ask, opts) => {
    let last = null;
    while (chains[which].length) {
      const model = chains[which][0], c0 = Date.now();
      const messages = typeof ask === "function" ? ask(model) : ask;
      const maxTokens = typeof opts.maxTokens === "function" ? opts.maxTokens(model) : opts.maxTokens;
      // A buffered model is cut at 180 s whatever is asked; a streaming Claude with no word after two minutes is still
      // thinking (claude-opus-5 thinks for minutes before it writes): the next model takes over.
      const timeoutMs = buffered(model) ? Math.min(opts.timeoutMs, 178_000) : opts.timeoutMs;
      const firstTokenMs = /^claude-/.test(model) ? Math.min(timeoutMs, 120_000) : timeoutMs;
      opts.onTry?.(model);
      try {
        const r = opts.stream && buffered(model)
          ? (segmented
            ? await segmentedChat(messages, { model, lang, temperature: opts.temperature, onDelta: opts.onDelta })
            : await longChat(messages, { model, maxTokens, temperature: opts.temperature, timeoutMs }))
          : opts.stream
            ? await chatStream(messages, { models: [model], maxTokens, temperature: opts.temperature, timeoutMs, firstTokenMs, onDelta: opts.onDelta, usage: true, learn: false })
            : await chat(messages, { models: [model], maxTokens, temperature: opts.temperature, timeoutMs, learn: false });
        const cost = r.cost ?? costOf(model, r.usage) ?? undefined;
        if (r.cut || r.stop === "length") throw Object.assign(new Error(`${model} stopped midway`), { cost });
        calls.push({ stage, model, ms: Date.now() - c0, charsIn: charsOf(messages), charsOut: r.text.length, usage: r.usage || undefined, cost, parts: r.parts || undefined });
        return { ...r, model };
      } catch (e) {
        calls.push({ stage, model, ms: Date.now() - c0, charsIn: charsOf(messages), charsOut: 0, error: String(e.message).slice(0, 160), cost: e.cost });
        log(`flash ${stage} ${model} failed: ${String(e.message).slice(0, 160)}`);
        last = e;
        chains[which] = chains[which].slice(1);
      }
    }
    throw last || new Error("no maker answered");
  };

  let concept = null, rawConcept = null;
  if (!skipConcept) {
    onStage("thinking", {});
    try {
      const r = await call("concept", "concept", conceptMessages({ lang, field, visitor, intent, plan }), { maxTokens: 2600, temperature: 0.9, timeoutMs: 200_000 });
      rawConcept = parseJson(r.text);
      concept = saneConcept(rawConcept, lang);
      onStage("thinking", { concept });
    } catch (e) {
      log(`flash concept unreadable, building without one: ${String(e.message).slice(0, 120)}`);
    }
  }

  onStage("making", {});
  let build = null, chars = 0, answer, builtBy = null;
  const writeAsk = (model) => (build = (reference ? craftedBuildMessages : buildMessages)({ lang, field, visitor, intent, plan, concept: rawConcept, budgetKB: budgetKB || (segmented ? 40 : budgetOf(model)), reference }));
  try {
    const r = await call("build", "build", writeAsk, { stream: true, maxTokens: buildTokens, temperature: 0.8, timeoutMs: 560_000, onTry: () => { chars = 0; }, onDelta: (piece) => { chars += piece.length; onStage("making", { chars }); } });
    answer = r.text; builtBy = r.model;
  } catch (e) {
    return { ok: false, errors: [`no piece: ${e.message}`], concept, calls, cost: totalCost(calls), ms: Date.now() - t0 };
  }
  let { meta, html } = splitPiece(answer);
  // What the visitor has already been shown stays; how the piece actually plays (dark, key, length) is the piece's.
  const shown = concept ? { title: concept.title, line: concept.line, palette: concept.palette, steps: concept.steps } : {};
  concept = saneConcept({ ...(rawConcept || {}), ...(meta || {}), ...shown }, lang);
  let cfg = sdkConfig({ lang, field, visitor, concept });

  onStage("trying", {});
  let verdict = await accept(html, cfg, { log, trialOpts });
  let attempts = 1;
  const history = [{ attempt: 1, stage: verdict.stage, errors: verdict.errors, checks: verdict.trial?.checks || null }];
  if (!verdict.ok) {
    log(`flash check failed (${verdict.stage}): ${verdict.errors.join(" | ").slice(0, 300)}`);
    onStage("mending", { errors: verdict.errors.length });
    try {
      const r = await call("repair", "build", repairMessages(build, answer, verdict.errors, lang), { stream: true, maxTokens: buildTokens, temperature: 0.4, timeoutMs: 480_000 });
      const edited = applyEdits(html, r.text);
      if (edited) html = edited;
      else {
        const again = splitPiece(r.text);
        if (/<html|<body|<script/i.test(again.html)) { html = again.html; if (again.meta) meta = again.meta; }
      }
      cfg = sdkConfig({ lang, field, visitor, concept });
      onStage("trying", {});
      verdict = await accept(html, cfg, { log, trialOpts });
      attempts = 2;
      history.push({ attempt: 2, stage: verdict.stage, errors: verdict.errors, checks: verdict.trial?.checks || null, edits: !!edited });
    } catch (e) {
      history.push({ attempt: 2, errors: [`repair failed: ${e.message}`] });
    }
  }
  // The polish pass only ever replaces a piece that already plays with one that also passes; otherwise the first stays.
  // Without the headless trial a redraw could only be checked statically, so it is not attempted.
  let polished = false;
  const wantPolish = polish === "auto" ? !/^claude-/.test(builtBy || "") : polish === true || polish === "on";
  if (verdict.ok && wantPolish && polishReference && verdict.trial && !verdict.trial.skipped) {
    onStage("polishing", {});
    chains.polish = [...(polishModels || chains.build)];
    try {
      const r = await call("polish", "polish", (model) => polishMessages({ lang, field, visitor, intent, plan, html, reference: polishReference, budgetKB: budgetOf(model) }), { stream: true, maxTokens: buildTokens, temperature: 0.6, timeoutMs: 560_000 });
      const again = splitPiece(r.text);
      if (/<html|<body|<script/i.test(again.html)) {
        const v2 = await accept(again.html, cfg, { log, trialOpts });
        history.push({ attempt: "polish", stage: v2.stage, errors: v2.errors, checks: v2.trial?.checks || null, bytes: v2.bytes });
        if (v2.ok) { verdict = v2; html = again.html; polished = true; }
        else log(`flash polish refused (${v2.stage}): ${v2.errors.join(" | ").slice(0, 200)}`);
      }
    } catch (e) {
      history.push({ attempt: "polish", errors: [`polish failed: ${e.message}`] });
    }
  }
  const ms = Date.now() - t0;
  const base = { concept, rawConcept, html, model: calls.filter((c) => !c.error).at(-1)?.model || null, builtBy, calls, cost: totalCost(calls), attempts, history, ms, polished, warnings: verdict.warnings || [], checks: verdict.trial?.checks || null, trialSkipped: !!verdict.trial?.skipped, bytes: verdict.bytes, cfg };
  if (!verdict.ok) return { ok: false, errors: verdict.errors, ...base };
  return { ok: true, doc: verdict.doc, cover: verdict.trial?.cover || null, errors: [], ...base };
}
