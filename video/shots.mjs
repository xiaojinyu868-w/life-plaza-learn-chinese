// Stills of the learner's layer for the film: the level gate, captions over real lines the hosts said in testing, two
// word cards, a second try. The plaza itself is kept from loading (no GPU here); the layer runs against the live API.
// Usage: CHROMIUM=/path/to/chrome-headless-shell node video/shots.mjs [outDir]
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const out = process.argv[2] || new URL("build/ui", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
mkdirSync(out, { recursive: true });
const BASE = process.env.LEARN_URL || "http://127.0.0.1:8080/life-learn/";
const LINES = [
  ["guide", "引路人", "Anna，画画和喝茶都在护照上了。第一站，去有黄色小屋的地方。"],
  ["vg-tpr", "梵高", "请你把窗户打开。"],
  ["vg-window", "梵高", "你把窗户打开了。光进来了，这就是我从巴黎来这里找的东西。"],
  ["vg-tci", "梵高", "我也喜欢黄色。你看，床和椅子都是黄色的。你喜欢黄色还是红色？"],
  ["vg-grammar", "梵高", "把门打开，是我请人去开门。门打开了，是门已经开了。"],
  ["melies", "梅里爱", "Bonjour，Anna。我也喜欢拍照。你想去中国拍照吗？"],
  ["lishizhen", "李时珍", "我号脉几十年，见过很多睡不着的人。今晚用热水洗洗脚，早点上床睡觉吧。"],
  ["xiyou", "孙悟空", process.env.XIYOU_LINE || "师父，我在山下五百年了。你想去中国旅游吗？"],
];
const CARDS = [["vg-tci", "黄色"], ["vg-window", "窗户"]];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined, args: ["--disable-gpu"] });
const block = (page) => page.route("**/assets/index-*.js", (r) => r.abort());

// The gate, as a learner first sees it.
{
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await block(page);
  await page.goto(BASE, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".ll-gate");
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${out}/gate.png` });
  await page.close();
}

const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });
await block(page);
await page.goto(`${BASE}?level=2`, { waitUntil: "domcontentloaded" });
await page.waitForSelector(".ll-pill");
await page.addStyleTag({ content: "html,body{background:transparent!important}#boot{display:none!important}" });
await page.locator(".ll-pill").screenshot({ path: `${out}/pill.png`, omitBackground: true });
await page.evaluate(() => {
  const s = document.createElement("div");
  s.id = "subtitle";
  s.style.cssText = "position:fixed;left:-9999px;top:0";
  s.innerHTML = '<div class="sub-who"></div><div class="sub-text"><span class="sub-on"></span><span class="sub-off"></span></div>';
  document.body.append(s);
});

async function say(who, text) {
  await page.evaluate(([w, t]) => {
    document.querySelector("#subtitle .sub-who").textContent = w;
    document.querySelector("#subtitle .sub-on").textContent = t;
  }, [who, text]);
  await page.waitForFunction((t) => {
    const line = document.querySelector(".ll-cap-line");
    if (!line || line.querySelectorAll("ruby").length < 2) return false;
    const base = [...line.childNodes].map((n) => (n.nodeName === "RUBY" ? n.firstChild.textContent : n.textContent)).join("");
    return base === t;
  }, text, { timeout: 20000 });
  await page.waitForFunction(() => (document.querySelector(".ll-cap-en")?.textContent || "").length > 4, null, { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(300);
}

const shots = {};
for (const [id, who, text] of LINES) {
  await say(who, text);
  await page.locator(".ll-cap").screenshot({ path: `${out}/cap-${id}.png`, omitBackground: true });
  shots[id] = await page.evaluate(() => document.querySelector(".ll-cap-en")?.textContent || "");
  for (const [lineId, word] of CARDS.filter(([l]) => l === id)) {
    await page.evaluate((w) => [...document.querySelectorAll(".ll-cap-line ruby")].find((r) => r.firstChild.textContent === w)?.click(), word);
    await page.waitForSelector(".ll-card .ll-card-py", { timeout: 20000 });
    await page.waitForFunction(() => !document.querySelector(".ll-card .ll-graph .ll-wait"), null, { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(300);
    await page.locator(".ll-card").screenshot({ path: `${out}/card-${word === "黄色" ? "huangse" : "chuanghu"}.png`, omitBackground: true });
    await page.click(".ll-card-close");
  }
}

// A second try: what a learner typed, the fix, then typed again.
await page.evaluate(() => fetch("/life-learn/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ visit: "film", text: "这个东西太好吃，我很喜欢吃麻辣烫的。" }) }).catch(() => {}));
await page.waitForSelector(".ll-fix", { timeout: 30000 });
await page.waitForTimeout(300);
await page.locator(".ll-fix").screenshot({ path: `${out}/fix.png`, omitBackground: true });
const target = await page.evaluate(() => document.querySelector(".ll-fix input")?.closest(".ll-fix")?.querySelector(".ll-now")?.textContent);
await page.fill(".ll-fix input", "这个东西太好吃了，我很喜欢吃麻辣烫。");
await page.click('.ll-fix button[type="submit"]');
await page.waitForTimeout(500);
await page.locator(".ll-fix").screenshot({ path: `${out}/fix-done.png`, omitBackground: true }).catch(() => {});

console.log(JSON.stringify({ out, english: shots, fixFirst: target }, null, 2));
await browser.close();
