/**
 * Speech to text while it is spoken: a WebSocket relay between the visitor's microphone and DashScope's real-time
 * recognition (the duplex "inference" protocol: run-task, binary audio, finish-task), so the words come up as they
 * are said and the key never leaves the server.
 *
 *   browser → { type: "start", lang, context: { you, her } }, then 16 kHz mono PCM16 frames, then { type: "stop" }
 *   browser ← { type: "ready", model } · { type: "text", text, final } (everything heard so far) ·
 *             { type: "limit" } · { type: "done", text } · { type: "error", code }
 *
 * Models are tried in order until one starts (a model the account can't use hands over to the next, with the audio
 * heard so far replayed). Env: DASHSCOPE_API_KEY, LIFE_ASR_STREAM_MODELS, LIFE_ASR_WS_URL (e.g. a workspace's own
 * wss://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/api-ws/v1/inference).
 */
import { randomUUID } from "node:crypto";

const UPSTREAM = process.env.LIFE_ASR_WS_URL || "wss://dashscope.aliyuncs.com/api-ws/v1/inference";
export const STREAM_MODELS = Object.freeze((process.env.LIFE_ASR_STREAM_MODELS || "qwen-audio-3.1-asr-flash-streaming,fun-asr-realtime,paraformer-realtime-v2").split(",").map((s) => s.trim()).filter(Boolean));
const RATE = 16000;
const MAX_MS = 75_000;
const MAX_BYTES = (MAX_MS / 1000) * RATE * 2;
const START_MS = 6000;
const FINISH_MS = 4000;

/** Recognition parameters per model family (each names its pause threshold differently). */
const params = (model, lang) => ({
  format: "pcm", sample_rate: RATE, language_hints: [lang],
  ...(model.startsWith("qwen-audio-3.1") ? { vad_model: "near_meeting_16k" } : { max_sentence_silence: 800 }),
});
/** What was just asked (and answered before it) helps the Qwen models hear names and things said again. */
const withContext = (model, ctx) => {
  if (!model.startsWith("qwen-audio") || !ctx?.her || !ctx?.you) return {};
  return { context: [{ role: "user", content: [{ type: "input_text", text: ctx.you.slice(0, 200) }] }, { role: "assistant", content: [{ type: "text", text: ctx.her.slice(0, 190) }] }] };
};

/**
 * Upgrade requests on `path` become relays; anything else asking to upgrade is turned away. Resolves false (and
 * turns the path away too) when the ws package isn't installed — the browser then sends whole clips to /asr.
 */
export async function attachAsrStream(server, { path = "/life/api/asr/stream", log = () => {}, allow = () => true } = {}) {
  let WS = null;
  try { WS = await import("ws"); } catch (e) { log(`asr stream off: ${e.message}`); }
  const wss = WS ? new WS.WebSocketServer({ noServer: true, maxPayload: 256 * 1024, perMessageDeflate: false }) : null;
  server.on("upgrade", (req, socket, head) => {
    const url = new URL(req.url, "http://x");
    const ip = String(req.headers["x-real-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();
    const refuse = (status) => { socket.end(`HTTP/1.1 ${status}\r\nConnection: close\r\nContent-Length: 0\r\n\r\n`); };
    socket.on("error", () => socket.destroy());
    if (url.pathname !== path) return refuse("404 Not Found");
    if (!wss || !process.env.DASHSCOPE_API_KEY) return refuse("503 Service Unavailable");
    if (!allow(ip)) return refuse("429 Too Many Requests");
    wss.handleUpgrade(req, socket, head, (client) => relay(client, { WS, log, ip }));
  });
  return !!wss;
}

function relay(client, { WS, log, ip }) {
  const key = (process.env.DASHSCOPE_API_KEY || "").trim();
  const t0 = Date.now();
  const audio = [];
  let bytes = 0, lang = "zh", ctx = null, started = false, ready = false, stopping = false, ended = false;
  let up = null, task = "", attempt = 0, model = "", firstAt = 0, finals = [], partial = "";
  let startTimer = 0, finishTimer = 0;
  const limit = setTimeout(() => stop("limit"), MAX_MS);
  const send = (m) => { if (client.readyState === 1) client.send(JSON.stringify(m)); };
  const upSend = (d) => { try { if (up?.readyState === 1) up.send(d); } catch { /* closing */ } };
  const heard = () => [...finals, partial].filter(Boolean).join(lang === "en" ? " " : "").trim();
  const drop = (sock) => { if (!sock) return; sock.removeAllListeners(); sock.on("error", () => {}); try { sock.terminate(); } catch { /* gone */ } };

  const end = (why) => {
    if (ended) return;
    ended = true;
    clearTimeout(limit); clearTimeout(startTimer); clearTimeout(finishTimer);
    const text = heard();
    log(`asr stream ${model || "-"} ${why} first ${firstAt ? `${firstAt - t0}ms` : "-"} total ${Date.now() - t0}ms ${bytes}B "${text.slice(0, 30)}" ip ${ip.slice(-6)}`);
    if (why === "done" || why === "finish-timeout") send({ type: "done", text });
    drop(up);
    if (client.readyState === 1) client.close(1000);
  };
  const fail = (code) => { if (ended) return; send({ type: "error", code }); end(`failed ${code}`); };

  function runTask() {
    model = STREAM_MODELS[attempt];
    task = randomUUID().replace(/-/g, "");
    upSend(JSON.stringify({
      header: { action: "run-task", task_id: task, streaming: "duplex" },
      payload: { task_group: "audio", task: "asr", function: "recognition", model, parameters: params(model, lang), input: withContext(model, ctx) },
    }));
    clearTimeout(startTimer);
    startTimer = setTimeout(() => fail("start-timeout"), START_MS);
  }
  const finishTask = () => {
    upSend(JSON.stringify({ header: { action: "finish-task", task_id: task, streaming: "duplex" }, payload: { input: {} } }));
    clearTimeout(finishTimer);
    finishTimer = setTimeout(() => end("finish-timeout"), FINISH_MS);
  };

  function open() {
    ready = false; finals = []; partial = "";
    up = new WS.WebSocket(UPSTREAM, { headers: { Authorization: `Bearer ${key}`, "user-agent": "life-plaza" }, handshakeTimeout: START_MS, perMessageDeflate: false });
    up.on("open", runTask);
    up.on("unexpected-response", (_req, res) => fail(`http-${res.statusCode}`));
    up.on("error", (e) => fail(`upstream-${String(e.code || e.message).slice(0, 40)}`));
    up.on("close", () => { if (!ended) (stopping && ready ? end("done") : fail("upstream-closed")); });
    up.on("message", (data, binary) => {
      if (binary || ended) return;
      let m;
      try { m = JSON.parse(String(data)); } catch { return; }
      if (m.header?.task_id && m.header.task_id !== task) return;
      const ev = m.header?.event;
      if (ev === "task-started") {
        clearTimeout(startTimer);
        ready = true;
        send({ type: "ready", model });
        for (const b of audio) upSend(b);
        if (stopping) finishTask();
      } else if (ev === "result-generated") {
        const s = m.payload?.output?.sentence;
        if (!s || s.heartbeat) return;
        const text = String(s.text || "").trim();
        if (s.sentence_end) { if (text) finals.push(text); partial = ""; } else partial = text;
        if (text && !firstAt) firstAt = Date.now();
        send({ type: "text", text: heard(), final: !!s.sentence_end });
      } else if (ev === "task-finished") {
        end("done");
      } else if (ev === "task-failed") {
        const code = String(m.header?.error_code || "task-failed");
        // A model this account can't use (or that won't take these parameters) hands over, with the audio replayed.
        if (!firstAt && attempt + 1 < STREAM_MODELS.length && !/Arrearage|InvalidApiKey|Throttling/i.test(code)) {
          log(`asr stream ${model} failed (${code}: ${String(m.header?.error_message || "").slice(0, 80)}), trying ${STREAM_MODELS[attempt + 1]}`);
          attempt += 1;
          drop(up);
          open();
        } else fail(code);
      }
    });
  }

  function stop(why = "stop") {
    if (stopping || ended) return;
    stopping = true;
    if (why === "limit") send({ type: "limit" });
    if (!up) end("done");
    else if (ready) finishTask();
    else { clearTimeout(finishTimer); finishTimer = setTimeout(() => end("finish-timeout"), START_MS + FINISH_MS); }
  }

  client.on("message", (data, binary) => {
    if (ended) return;
    if (binary) {
      if (stopping || bytes + data.length > MAX_BYTES) return;
      bytes += data.length;
      const b = Buffer.from(data);
      audio.push(b);
      if (!started) { started = true; open(); } else if (ready) upSend(b);
      return;
    }
    let m;
    try { m = JSON.parse(String(data)); } catch { return; }
    if (m.type === "start" && !started) {
      // The learning branch: whatever language the page is in, the visitor is practising Chinese.
      lang = "zh";
      ctx = m.context && typeof m.context === "object" ? { you: String(m.context.you || ""), her: String(m.context.her || "") } : null;
      started = true;
      open();
    } else if (m.type === "stop") stop();
    else if (m.type === "cancel") end("cancelled");
  });
  client.on("close", () => end(stopping ? "done" : "client-closed"));
  client.on("error", () => end("client-error"));
}
