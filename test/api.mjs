// Learning mode through the API, one call at a time: the guide's first stop, every life's plan, a chat turn in each,
// the last words. Prints each line with how much of it is above the learner's level (HSK 3.0, local data).
// Usage: node test/api.mjs [level] [base]
const level = Number(process.argv[2] || 3);
const BASE = process.argv[3] || "http://127.0.0.1:8794/life/api";
const H = { "Content-Type": "application/json", "X-Learn-Level": String(level), "X-Learn-UI": level <= 3 ? "en" : "zh" };

async function call(path, body) {
  const t0 = Date.now();
  const r = await fetch(`${BASE}${path}`, { method: "POST", headers: H, body: JSON.stringify(body) });
  const text = await r.text();
  let data = null;
  try { data = JSON.parse(text); } catch { data = text; }
  return { ok: r.ok, status: r.status, ms: Date.now() - t0, data };
}
async function stats(line) {
  const r = await fetch(`${BASE}/learn/annotate`, { method: "POST", headers: H, body: JSON.stringify({ text: line, level }) });
  return (await r.json()).stats;
}
async function show(label, line) {
  if (!line) return console.log(`  ${label}: (empty)`);
  const s = await stats(line);
  console.log(`  ${label} [${s.over}/${s.words}] ${line}${s.overWords.length ? `   超纲: ${s.overWords.join("、")}` : ""}`);
}

const visitor = { avatar: "v1", identity: "Anna", note: "I want to travel in China. 我喜欢画画，也喜欢喝茶。", lang: "en" };

console.log(`== HSK ${level}: the guide's first stop`);
const g = await call("/guide", { ...visitor });
console.log(`  ${g.status} ${g.ms}ms suggest=${g.data?.suggest}`);
await show("why", g.data?.why);

for (const space of ["vangogh", "lishizhen", "xiyou", "melies"]) {
  console.log(`== ${space}`);
  const v = await call("/visit", { ...visitor, space });
  console.log(`  plan ${v.status} ${v.ms}ms`);
  const p = v.data?.plan || {};
  await show("greeting", p.greeting);
  for (const [k, line] of Object.entries(p.beats || {}).slice(0, 2)) await show(`beat.${k}`, line);
  await show("farewell", p.farewell);
  const ask = { vangogh: "我喜欢黄色。", lishizhen: "我最近很累，睡不好。", xiyou: "你好！你为什么在山下面？", melies: "我喜欢拍照。" }[space];
  const c = await call("/chat", { visit: v.data?.id, text: ask, history: [] });
  console.log(`  chat ${c.status} ${c.ms}ms model=${c.data?.model} — learner: ${ask}`);
  await show("reply", c.data?.reply);
}

console.log("== last words");
const journey = [{ space: "vangogh", title: "留给朋友的椅子" }, { space: "xiyou", title: "通关文牒" }];
const e = await call("/ending", { ...visitor, life: { you: "Anna" }, journey });
console.log(`  ending ${e.status} ${e.ms}ms`);
await show("ending", e.data?.line);
const b = await call("/back", { ...visitor, life: { you: "Anna" }, journey });
console.log(`  back ${b.status} ${b.ms}ms`);
await show("back", b.data?.line);
