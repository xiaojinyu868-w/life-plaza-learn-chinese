/**
 * Speech through DashScope qwen-audio-3.1-tts-flash (SpeechSynthesizer, SSE stream of base64 mp3 chunks).
 * Every line is cached on disk by a hash of model + voice + instruction + language + text: a repeat is instant.
 * Env: DASHSCOPE_API_KEY (Beijing region).
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const MODEL = process.env.LIFE_TTS_MODEL || "qwen-audio-3.1-tts-flash";
const BASE = "https://dashscope.aliyuncs.com/api/v1/services/audio/tts/SpeechSynthesizer";

export const VOICES = Object.freeze({
  melies: {
    voice: { zh: process.env.LIFE_VOICE_MELIES || "longsanshu_v3.1", en: process.env.LIFE_VOICE_MELIES_EN || "longsanshu_v3.1" },
    instruction: {
      zh: "一位七十岁的法国老魔术师、电影先驱，在自己的摄影棚里给客人讲故事：声音温暖、略带沙哑，慈祥又幽默，有一点舞台腔，语速舒缓，讲到动情处放轻。",
      en: "A seventy-year-old French magician and film pioneer telling a guest stories in his own studio: warm, slightly husky, kind and playful, a touch theatrical, unhurried, with a gentle French accent; softer at the tender moments.",
    },
  },
  vangogh: {
    voice: { zh: process.env.LIFE_VOICE_VANGOGH || "xunanchuan_v3.1", en: process.env.LIFE_VOICE_VANGOGH_EN || "xunanchuan_v3.1" },
    instruction: {
      zh: "一位三十五岁的荷兰画家，在自己小小的卧室里和客人说话：声音真诚、温暖、有一点沙哑，说到颜色时急切又兴奋，说到孤独时轻下来，带一点害羞。",
      en: "A thirty-five-year-old Dutch painter talking to a guest in his small bedroom: sincere, warm, a little husky, eager and excited about colour, quieter and a little shy about loneliness, with a soft Dutch accent.",
    },
  },
  lishizhen: {
    voice: { zh: process.env.LIFE_VOICE_LISHIZHEN || "longanzhi_v3.1", en: process.env.LIFE_VOICE_LISHIZHEN_EN || "longanzhi_v3.1" },
    instruction: {
      zh: "一位七十多岁的明代老医生，在自己的药铺里和客人说话：声音沉稳、慈和、不疾不徐，带一点冷幽默，讲到草木时细致而笃定。",
      en: "A Chinese physician in his seventies talking to a guest in his herbal shop: calm, kind and unhurried, with a dry humour, precise and sure when he speaks of plants.",
    },
  },
  xiyou: {
    voice: { zh: process.env.LIFE_VOICE_XIYOU || "longjielidou_v3.1", en: process.env.LIFE_VOICE_XIYOU_EN || "longjielidou_v3.1" },
    instruction: {
      zh: "孙悟空，书里的齐天大圣，在五行山下和来人说话：声音明亮、机灵，语速快，带着猴儿的顽皮和得意，笑意藏在话里；说到压在山下的五百年，忽然放轻、放慢。",
      en: "Sun Wukong, the Monkey King out of the book, talking to a visitor at the foot of the mountain: bright, quick and cheeky, a grin in every line; when he speaks of the five hundred years under the mountain he slows down and goes quiet.",
    },
  },
  guide: {
    voice: { zh: process.env.LIFE_VOICE_GUIDE || "longanhuan_v3.1", en: process.env.LIFE_VOICE_GUIDE_EN || "longanhuan_v3.1" },
    instruction: {
      zh: "一位做了二十年夜间电台的女主持人，在门口和人说话：声音放低、暖，像贴着耳朵说，语速慢，句尾轻轻收住；平平常常，不煽情。",
      en: "A woman who did late-night radio for twenty years, talking to someone at the gate: low and warm, close to the ear, slow, the ends of sentences let down gently; plain, never sentimental.",
    },
  },
});

let lastStart = 0;
const pace = async () => { const wait = lastStart + 340 - Date.now(); if (wait > 0) await new Promise((r) => setTimeout(r, wait)); lastStart = Date.now(); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/** `retry`: worth another try — DashScope only busy (429, a throttled stream) or briefly at fault (5xx, a cut stream). */
const fault = (message, retry) => Object.assign(new Error(message), { retry });
const BUSY_CODE = /Throttl|RateQuota|LimitExceeded|ServiceUnavailable|InternalError|SystemError/i;

/**
 * `retry`: the waits before each further try when DashScope was only busy or briefly at fault (a line is tried at most
 * retry.length + 1 times). `atOnce`: syntheses in flight at a time, across every visitor — a burst of new lines waits
 * its turn here instead of meeting DashScope's 429.
 */
export function createTts({ cacheDir, key = process.env.DASHSCOPE_API_KEY, retry = [400, 1200], atOnce = 4 }) {
  const inflight = new Map();
  let running = 0;
  const waiting = [];
  const take = () => (running < atOnce ? ((running += 1), Promise.resolve()) : new Promise((r) => waiting.push(r)));
  const give = () => { const next = waiting.shift(); if (next) next(); else running -= 1; };

  async function synth({ text, voice, instruction, lang }) {
    if (!key) throw new Error("DASHSCOPE_API_KEY is not set");
    await pace();
    let r;
    try {
      r = await fetch(BASE, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "X-DashScope-SSE": "enable" },
        body: JSON.stringify({ model: MODEL, input: { text, voice, format: "mp3", sample_rate: 24000, language_hints: [lang], instruction } }),
        signal: AbortSignal.timeout(25_000),
      });
    } catch (e) { throw fault(`TTS ${e.name === "TimeoutError" ? "timed out" : `unreachable: ${e.message}`}`, e.name !== "TimeoutError"); }
    if (!r.ok) throw fault(`TTS HTTP ${r.status} ${(await r.text().catch(() => "")).slice(0, 200)}`, r.status === 429 || r.status >= 500);
    const chunks = [];
    let done = false;
    const raw = await r.text();
    for (const line of raw.split("\n")) {
      const l = line.trim();
      if (!l.startsWith("data:")) continue;
      let ev; try { ev = JSON.parse(l.slice(5)); } catch { continue; }
      if (ev.code) throw fault(`TTS ${ev.code}: ${String(ev.message || "").slice(0, 200)}`, BUSY_CODE.test(ev.code));
      const data = ev.output?.audio?.data;
      if (data) chunks.push(Buffer.from(data, "base64"));
      if (ev.output?.finish_reason === "stop") done = true;
    }
    const bytes = Buffer.concat(chunks);
    if (!done || bytes.length < 512) throw fault("TTS stream ended early", true);
    return bytes;
  }

  /** One line, tried again after a short wait when DashScope was only busy or briefly at fault. */
  async function synthesize(spec) {
    for (let i = 0; ; i += 1) {
      await take();
      try { return await synth(spec); } catch (e) { if (!e.retry || i >= retry.length) throw e; } finally { give(); }
      await sleep(retry[i]);
    }
  }

  return {
    /** mp3 bytes for one line in one voice; cached. */
    async speak({ text, role = "melies", lang = "zh" }) {
      const v = VOICES[role] || VOICES.melies;
      const l = lang === "en" ? "en" : "zh";
      const spec = { text: String(text).slice(0, 300), voice: v.voice[l], instruction: v.instruction[l], lang: l };
      const hash = createHash("sha256").update(JSON.stringify({ MODEL, ...spec })).digest("hex").slice(0, 32);
      const file = path.join(cacheDir, `${hash}.mp3`);
      try { return { bytes: await readFile(file), hash, cached: true }; } catch { /* not cached */ }
      if (inflight.has(hash)) return inflight.get(hash);
      const job = (async () => {
        const bytes = await synthesize(spec);
        await mkdir(cacheDir, { recursive: true });
        await writeFile(file, bytes);
        return { bytes, hash, cached: false };
      })().finally(() => inflight.delete(hash));
      inflight.set(hash, job);
      return job;
    },
  };
}
