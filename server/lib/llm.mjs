/**
 * Chat completions, OpenAI-compatible, with a fallback chain: a model that errors or times out hands the same request
 * to the next one. Two providers: the Lumina gateway (LiteLLM behind it: Claude, DeepSeek) and Alibaba Bailian
 * (DashScope, models named `ds:…`), which answers from inside China in half a second — what a spoken reply needs.
 */
import { gatewayKey } from "./gateway.mjs";
import { learnNow } from "../learn/context.mjs";
import { GUIDE_MARK, guideRules, levelRules } from "../learn/rules.mjs";

/** In learning mode, the learner-level rules go after the call's own system prompt (`learn: false` opts a call out). */
function withLevel(messages, learn) {
  if (!learn) return messages;
  const i = messages.findIndex((m) => m.role === "system");
  const guide = i >= 0 && typeof messages[i].content === "string" && messages[i].content.includes(GUIDE_MARK);
  const rules = guide ? `${levelRules(learn.level)}\n\n${guideRules(learn.level)}` : levelRules(learn.level);
  if (i < 0) return [{ role: "system", content: rules }, ...messages];
  if (typeof messages[i].content !== "string") return [...messages.slice(0, i + 1), { role: "system", content: rules }, ...messages.slice(i + 1)];
  return messages.map((m, k) => (k === i ? { ...m, content: `${m.content}\n\n${rules}` } : m));
}

const BASE = (process.env.LUMINA_BASE_URL || "https://lumina.tripo3d.com").replace(/\/+$/, "");
const BAILIAN = "https://dashscope.aliyuncs.com/compatible-mode/v1";
export const CHAIN = Object.freeze((process.env.LIFE_LLM_CHAIN || "claude-sonnet-4-6,ds:qwen3.8-max,claude-haiku-4-5,deepseek-v4.1-flash").split(",").map((s) => s.trim()).filter(Boolean));
/** For a reply the visitor waits on: the quickest good voices first. */
export const QUICK = Object.freeze((process.env.LIFE_LLM_QUICK || "ds:qwen3.8-max,ds:deepseek-v4.1-flash,claude-haiku-4-5,ds:qwen3.8-flash").split(",").map((s) => s.trim()).filter(Boolean));
/** A room's director and what a visitor asks of its stage, between beats: the cheapest quick voices, Bailian first. */
export const DIRECT = Object.freeze((process.env.LIFE_LLM_DIRECT || "ds:deepseek-v4.1-flash,deepseek-v4.1-flash,claude-haiku-4-5").split(",").map((s) => s.trim()).filter(Boolean));
/**
 * The visitor's reading at the gate. `fast` writes the passport and the first stop while they pick a face (about 9 s
 * on the gateway, measured 2026-10-08); `deep` writes the reading every life reads, while they walk in (Opus 5.5:
 * about 28 s, by far the best reading of the models on the key; there is no Sonnet 5.x on it yet).
 */
const listOf = (s) => Object.freeze(s.split(",").map((x) => x.trim()).filter(Boolean));
export const READ = Object.freeze({
  fast: listOf(process.env.LIFE_READ_FAST || "claude-sonnet-4-6,gpt-6-sol"),
  deep: listOf(process.env.LIFE_READ_DEEP || "claude-opus-5-5,claude-sonnet-4-6"),
});

/** Where a model is asked, and how (Bailian's thinking models answer at once with thinking off). */
function route(model, body) {
  if (model.startsWith("ds:")) {
    // GLM-5.3 always thinks and refuses thinking off: it is asked to think little instead (it answers as quickly).
    const think = /^ZHIPU\/GLM-5\.3/i.test(model.slice(3)) ? { reasoning_effort: "low" } : { enable_thinking: false };
    return { url: `${BAILIAN}/chat/completions`, key: (process.env.DASHSCOPE_API_KEY || "").trim(), body: { ...body, model: model.slice(3), ...think } };
  }
  // DeepSeek V4 on the gateway thinks unless told not to, and its thinking eats a short reply's whole budget.
  const think = /^deepseek-v4/i.test(model) ? { enable_thinking: false } : {};
  return { url: `${BASE}/v1/chat/completions`, key: gatewayKey(), body: { ...body, model, ...think } };
}

/** What the gateway (LiteLLM) says a call cost, in US dollars, or null. */
export const costOf = (headers) => { const v = Number(headers?.get?.("x-litellm-response-cost")); return Number.isFinite(v) && v > 0 ? v : null; };

export async function chat(messages, { models = CHAIN, maxTokens = 900, temperature = 0.85, timeoutMs = 45_000, json = false, learn = true } = {}) {
  if (learn) messages = withLevel(messages, learnNow());
  let last = null;
  for (const model of models) {
    const t0 = Date.now();
    try {
      const to = route(model, { messages, max_tokens: maxTokens, temperature });
      if (!to.key) throw new Error(`${model}: no key`);
      const r = await fetch(to.url, {
        method: "POST",
        headers: { Authorization: `Bearer ${to.key}`, "Content-Type": "application/json" },
        body: JSON.stringify(to.body),
        signal: AbortSignal.timeout(timeoutMs),
      });
      const j = await r.json().catch(() => ({}));
      const text = j.choices?.[0]?.message?.content;
      if (!r.ok || !text) throw new Error(`${model} HTTP ${r.status} ${JSON.stringify(j.error || j).slice(0, 160)}`);
      const out = { text: String(text).trim(), model, ms: Date.now() - t0, usage: j.usage || null, cost: costOf(r.headers) };
      if (json) out.data = parseJson(out.text);
      return out;
    } catch (e) { last = e; }
  }
  throw last || new Error("no model answered");
}

/**
 * The same, streamed: `onDelta(text)` hears each piece as it arrives (the visitor reads the reply as it is spoken,
 * not after a silence). A model that fails before saying anything hands over to the next; one that fails midway
 * keeps what it said. Resolves with the whole text.
 */
export async function chatStream(messages, { models = QUICK, maxTokens = 400, temperature = 0.85, timeoutMs = 30_000, firstTokenMs = 6000, onDelta = () => {}, usage: wantUsage = false, learn = true } = {}) {
  if (learn) messages = withLevel(messages, learnNow());
  let last = null;
  for (const model of models) {
    const t0 = Date.now();
    let said = "", usage = null, stop = null;
    const ctl = new AbortController();
    const all = setTimeout(() => ctl.abort(), timeoutMs);
    const slow = setTimeout(() => { if (!said) ctl.abort(); }, firstTokenMs);
    try {
      const to = route(model, { messages, max_tokens: maxTokens, temperature, stream: true, ...(wantUsage && !model.startsWith("ds:") ? { stream_options: { include_usage: true } } : {}) });
      if (!to.key) throw new Error(`${model}: no key`);
      const r = await fetch(to.url, {
        method: "POST",
        headers: { Authorization: `Bearer ${to.key}`, "Content-Type": "application/json" },
        body: JSON.stringify(to.body),
        signal: ctl.signal,
      });
      if (!r.ok || !r.body) throw new Error(`${model} HTTP ${r.status} ${(await r.text().catch(() => "")).slice(0, 160)}`);
      const reader = r.body.getReader(), dec = new TextDecoder();
      let buf = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let nl;
        while ((nl = buf.indexOf("\n")) >= 0) {
          const line = buf.slice(0, nl).trim(); buf = buf.slice(nl + 1);
          if (!line.startsWith("data:")) continue;
          const data = line.slice(5).trim();
          if (data === "[DONE]") continue;
          let piece = "";
          try {
            const j = JSON.parse(data);
            piece = j.choices?.[0]?.delta?.content || "";
            if (j.usage) usage = j.usage;
            if (j.choices?.[0]?.finish_reason) stop = j.choices[0].finish_reason;
          } catch { /* a keep-alive */ }
          if (piece) { said += piece; onDelta(piece); }
        }
      }
      if (!said) throw new Error(`${model} said nothing`);
      return { text: said.trim(), model, ms: Date.now() - t0, usage, stop };
    } catch (e) {
      last = e;
      if (said) return { text: said.trim(), model, ms: Date.now() - t0, cut: true, usage, stop };
    } finally { clearTimeout(all); clearTimeout(slow); }
  }
  throw last || new Error("no model answered");
}

/** The first {...} block of a reply (models sometimes wrap JSON in prose or a code fence). */
export function parseJson(text) {
  const s = String(text);
  const start = s.indexOf("{"), end = s.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("reply has no JSON object");
  return JSON.parse(s.slice(start, end + 1));
}
