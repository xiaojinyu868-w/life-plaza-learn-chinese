/**
 * Lumina AI Gateway (GPT Image 2.5): text → image and image(s) + text → image.
 *
 *   LUMINA_BASE_URL   default https://lumina.tripo3d.com
 *   LUMINA_API_KEY    (falls back to TRIPO_API_KEY, then CODEX_API_KEY — the gateway's own key names)
 */
import { readFile } from "node:fs/promises";
import path from "node:path";

const BASE = (process.env.LUMINA_BASE_URL || "https://lumina.tripo3d.com").replace(/\/+$/, "");
export const MODELS = Object.freeze({ quality: "gpt-image-2.5-sunburst", fast: "gpt-image-2.5-flare" });
const RATIOS = new Set(["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3"]);

export const gatewayKey = () => (process.env.LUMINA_API_KEY || process.env.TRIPO_API_KEY || process.env.CODEX_API_KEY || "").trim();

function check(json, status) {
  if (json?.error) throw Object.assign(new Error(`gateway: ${JSON.stringify(json.error).slice(0, 300)}`), { status: status || 502 });
  const b64 = json?.data?.[0]?.b64_json;
  if (!b64) throw Object.assign(new Error(`gateway: unexpected response ${JSON.stringify(json).slice(0, 200)}`), { status: 502 });
  return Buffer.from(b64, "base64");
}

async function post(url, init, timeoutMs) {
  const key = gatewayKey();
  if (!key) throw Object.assign(new Error("gateway: no key (LUMINA_API_KEY / TRIPO_API_KEY / CODEX_API_KEY)"), { status: 503 });
  const res = await fetch(url, { ...init, headers: { ...(init.headers || {}), Authorization: `Bearer ${key}` }, signal: AbortSignal.timeout(timeoutMs) });
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch { throw Object.assign(new Error(`gateway HTTP ${res.status}: ${text.slice(0, 200)}`), { status: res.status || 502 }); }
  if (!res.ok && !json?.data) throw Object.assign(new Error(`gateway HTTP ${res.status}: ${JSON.stringify(json).slice(0, 300)}`), { status: res.status });
  return check(json, res.status);
}

/** Text → PNG bytes. */
export async function generateImage({ prompt, model = MODELS.quality, ratio = "1:1", size = "2K", timeoutMs = 240_000 }) {
  if (!RATIOS.has(ratio)) throw new Error(`bad ratio ${ratio}`);
  const body = JSON.stringify({ model, prompt, n: 1, ratio, extra_body: { image_size: size } });
  return post(`${BASE}/v1/images/generations`, { method: "POST", headers: { "Content-Type": "application/json" }, body }, timeoutMs);
}

/** Reference image(s) + text → PNG bytes. `images` are paths or { bytes, name }. */
export async function editImage({ prompt, images, model = MODELS.quality, ratio = "1:1", timeoutMs = 240_000 }) {
  if (!RATIOS.has(ratio)) throw new Error(`bad ratio ${ratio}`);
  const form = new FormData();
  form.append("model", model);
  form.append("prompt", prompt);
  form.append("n", "1");
  form.append("ratio", ratio);
  for (const image of [images].flat()) {
    const item = typeof image === "string" ? { bytes: await readFile(image), name: path.basename(image) } : image;
    form.append("image", new Blob([item.bytes], { type: item.type || "image/png" }), item.name || "image.png");
  }
  return post(`${BASE}/v1/images/edits`, { method: "POST", body: form }, timeoutMs);
}

/** Retry transient failures (rate limits, 5xx, timeouts) with backoff. */
export async function withRetry(fn, { tries = 3, baseMs = 4000, log = () => {} } = {}) {
  let last;
  for (let i = 0; i < tries; i += 1) {
    try { return await fn(); } catch (error) {
      last = error;
      const status = Number(error.status) || 0;
      const transient = !status || status === 429 || status >= 500 || error.name === "TimeoutError";
      if (!transient || i === tries - 1) break;
      log(`retry ${i + 1}/${tries - 1} after ${error.message.slice(0, 120)}`);
      await new Promise((r) => setTimeout(r, baseMs * (i + 1)));
    }
  }
  throw last;
}
