/**
 * Speech to text through DashScope qwen3-asr-flash: one short clip (what the visitor said while holding the button),
 * sent inline as base64. Env: DASHSCOPE_API_KEY (Beijing region), LIFE_ASR_MODEL.
 */
const MODEL = process.env.LIFE_ASR_MODEL || "qwen3-asr-flash";
const BASE = "https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation";

export async function transcribe(bytes, { mime = "audio/webm", lang = "zh", key = process.env.DASHSCOPE_API_KEY } = {}) {
  if (!key) throw Object.assign(new Error("DASHSCOPE_API_KEY is not set"), { status: 503 });
  const r = await fetch(BASE, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      input: { messages: [{ role: "system", content: [{ text: "" }] }, { role: "user", content: [{ audio: `data:${mime};base64,${bytes.toString("base64")}` }] }] },
      parameters: { asr_options: { language: lang === "en" ? "en" : "zh", enable_itn: true } },
    }),
    signal: AbortSignal.timeout(20_000),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw Object.assign(new Error(`ASR HTTP ${r.status} ${JSON.stringify(j).slice(0, 200)}`), { status: 502 });
  return (j.output?.choices?.[0]?.message?.content || []).map((c) => c.text || "").join("").trim();
}
