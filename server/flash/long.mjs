/**
 * One long completion over plain node:https, for pieces that take longer than five minutes to write.
 *
 * The gateway buffers Claude's answers (no byte, not even the headers, until the whole answer is written), and
 * Node's fetch gives up waiting for headers after 300 s — so a long piece from Opus failed as "fetch failed" whatever
 * timeout was asked for. Same endpoint, key and body as server/lib/llm.mjs; only the transport differs.
 */
import https from "node:https";
import { gatewayKey } from "../lib/gateway.mjs";

const BASE = (process.env.LUMINA_BASE_URL || "https://lumina.tripo3d.com").replace(/\/+$/, "");

export function longChat(messages, { model, maxTokens = 30_000, temperature = 0.8, timeoutMs = 600_000 } = {}) {
  const key = gatewayKey();
  if (!key) return Promise.reject(new Error(`${model}: no key`));
  const body = JSON.stringify({ model, messages, max_tokens: maxTokens, temperature });
  const t0 = Date.now();
  return new Promise((resolve, reject) => {
    const req = https.request(`${BASE}/v1/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) },
      timeout: timeoutMs,
    }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        let j = {};
        try { j = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { /* not json */ }
        const text = j.choices?.[0]?.message?.content;
        if (res.statusCode >= 300 || !text) { reject(new Error(`${model} HTTP ${res.statusCode} ${JSON.stringify(j.error || j).slice(0, 160)}`)); return; }
        const cost = Number(res.headers["x-litellm-response-cost"]);
        resolve({ text: String(text).trim(), model, ms: Date.now() - t0, usage: j.usage || null, stop: j.choices?.[0]?.finish_reason || null, cost: Number.isFinite(cost) && cost > 0 ? cost : null });
      });
      res.on("error", reject);
    });
    req.on("timeout", () => req.destroy(new Error(`${model} timed out after ${Math.round(timeoutMs / 1000)}s`)));
    req.on("error", reject);
    req.end(body);
  });
}
