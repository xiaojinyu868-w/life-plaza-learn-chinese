// Local stand-in for deploy/nginx-life-learn.conf: serves www/ under /life-learn/, forwards /life-learn/api/ (and the
// speech-recognition WebSocket) to the API at /life/api/, and starts the API itself unless API_EXTERNAL=1.
// Usage: node --env-file=.env scripts/dev.mjs   → http://127.0.0.1:8080/life-learn/?level=3
import { spawn } from "node:child_process";
import { createReadStream, statSync } from "node:fs";
import http from "node:http";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WWW = path.join(ROOT, "www");
const WEB_PORT = Number(process.env.WEB_PORT || 8080);
const API_PORT = Number(process.env.PORT || 8794);
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".srt": "text/plain; charset=utf-8",
  ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".glb": "model/gltf-binary", ".spz": "application/octet-stream",
  ".mp4": "video/mp4", ".mp3": "audio/mpeg", ".woff2": "font/woff2",
};

if (process.env.API_EXTERNAL !== "1") {
  const api = spawn(process.execPath, [path.join(ROOT, "server", "index.mjs")], {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, PORT: String(API_PORT), LIFE_DATA_DIR: process.env.LIFE_DATA_DIR || path.join(ROOT, "data") },
  });
  api.on("exit", (code) => { console.error(`API exited (${code})`); process.exit(code ?? 1); });
  process.on("SIGINT", () => { api.kill(); process.exit(0); });
}

const toApi = (url) => url.replace(/^\/life-learn\/api\//, "/life/api/");

function proxy(req, res) {
  const up = http.request(
    { host: "127.0.0.1", port: API_PORT, method: req.method, path: toApi(req.url), headers: { ...req.headers, host: `127.0.0.1:${API_PORT}`, "x-real-ip": req.socket.remoteAddress } },
    (r) => { res.writeHead(r.statusCode, r.headers); r.pipe(res); },
  );
  up.on("error", () => { if (!res.headersSent) res.writeHead(502); res.end("API not reachable"); });
  req.pipe(up);
}

function file(req, res) {
  const url = new URL(req.url, "http://x");
  let rel = decodeURIComponent(url.pathname);
  if (rel === "/" || rel === "/life-learn") { res.writeHead(302, { Location: "/life-learn/" }); return res.end(); }
  let abs = path.join(WWW, path.normalize(rel).replace(/^([/\\])+/, ""));
  if (!abs.startsWith(WWW)) { res.writeHead(403); return res.end(); }
  let st = null;
  try { st = statSync(abs); if (st.isDirectory()) { abs = path.join(abs, "index.html"); st = statSync(abs); } } catch { st = null; }
  if (!st && rel.startsWith("/life-learn/") && !path.extname(rel)) {
    abs = path.join(WWW, "life-learn", "index.html");
    try { st = statSync(abs); } catch { st = null; }
  }
  if (!st) { res.writeHead(404); return res.end("Not found"); }
  const type = TYPES[path.extname(abs).toLowerCase()] || "application/octet-stream";
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || "");
  if (range) {
    const start = range[1] ? Number(range[1]) : Math.max(0, st.size - Number(range[2]));
    const end = range[1] && range[2] ? Math.min(Number(range[2]), st.size - 1) : st.size - 1;
    res.writeHead(206, { "Content-Type": type, "Content-Range": `bytes ${start}-${end}/${st.size}`, "Content-Length": end - start + 1, "Accept-Ranges": "bytes" });
    return createReadStream(abs, { start, end }).pipe(res);
  }
  res.writeHead(200, { "Content-Type": type, "Content-Length": st.size, "Accept-Ranges": "bytes", "Cache-Control": "no-cache" });
  if (req.method === "HEAD") return res.end();
  createReadStream(abs).pipe(res);
}

const server = http.createServer((req, res) => (req.url.startsWith("/life-learn/api/") ? proxy(req, res) : file(req, res)));

server.on("upgrade", (req, socket, head) => {
  if (!req.url.startsWith("/life-learn/api/")) return socket.destroy();
  const up = net.connect(API_PORT, "127.0.0.1", () => {
    const lines = [`${req.method} ${toApi(req.url)} HTTP/1.1`];
    for (let i = 0; i < req.rawHeaders.length; i += 2) lines.push(`${req.rawHeaders[i]}: ${req.rawHeaders[i + 1]}`);
    up.write(lines.join("\r\n") + "\r\n\r\n");
    if (head?.length) up.write(head);
    up.pipe(socket).pipe(up);
  });
  up.on("error", () => socket.destroy());
  socket.on("error", () => up.destroy());
});

server.listen(WEB_PORT, "127.0.0.1", () => console.log(`Life Plaza · Learn Chinese → http://127.0.0.1:${WEB_PORT}/life-learn/?level=3`));
