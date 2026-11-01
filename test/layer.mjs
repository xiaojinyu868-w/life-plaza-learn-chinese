// The learner's layer on the live copy: the level gate, then a host's line as a pinyin caption, then a word's card.
// No GPU here, so the plaza's 3D world does not start; the line is put into the page's own subtitle element instead.
// Usage: CHROMIUM=/path/to/chrome-headless-shell node test/layer.mjs [outDir]
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const URL_ = process.env.LEARN_URL || "http://127.0.0.1:8080/life-learn/";
const out = process.argv[2] || "/tmp/life-learn-test";
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined, args: ["--disable-gpu"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 760 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message.slice(0, 160)));
// NO_PLAZA=1 keeps the plaza itself from loading, to test the layer alone (the plaza needs a GPU to start).
if (process.env.NO_PLAZA) await page.route("**/assets/index-*.js", (r) => r.abort());
page.on("console", (m) => { if (m.type() === "error") errors.push(`console: ${m.text().slice(0, 160)}`); });

await page.goto(URL_, { waitUntil: "domcontentloaded" });
await page.waitForSelector(".ll-gate", { timeout: 15000 });
await page.screenshot({ path: `${out}-1-gate.png` });

await page.click('.ll-level[data-lv="3"]');
await page.waitForTimeout(4000);
const lang = await page.evaluate(() => localStorage.getItem("lifeplaza.lang"));

await page.evaluate(() => {
  const s = document.createElement("div");
  s.id = "subtitle";
  s.style.cssText = "position:fixed;left:50%;bottom:40px;transform:translateX(-50%);background:#0008;color:#fff;padding:10px 16px;border-radius:12px;font:18px sans-serif;z-index:5";
  s.innerHTML = '<div class="sub-who">梵高</div><div class="sub-text"><span class="sub-on">你把窗户打开了。</span><span class="sub-off">这个光，就是我二月从巴黎来这里找的。</span></div>';
  document.body.append(s);
});
await page.waitForFunction(() => document.querySelectorAll(".ll-cap-line ruby").length > 3, null, { timeout: 15000 });
await page.waitForFunction(() => (document.querySelector(".ll-cap-en")?.textContent || "").length > 5, null, { timeout: 20000 }).catch(() => {});
await page.screenshot({ path: `${out}-2-caption.png` });

const words = await page.evaluate(() => [...document.querySelectorAll(".ll-cap-line ruby")].map((r) => `${r.firstChild.textContent}/${r.querySelector("rt").textContent}${r.classList.contains("ll-new") ? "*" : ""}${r.classList.contains("ll-name") ? "@" : ""}`));
const en = await page.evaluate(() => document.querySelector(".ll-cap-en")?.textContent);

await page.evaluate(() => [...document.querySelectorAll(".ll-cap-line ruby")].find((r) => r.firstChild.textContent === "窗户")?.click());
await page.waitForSelector(".ll-card .ll-card-py", { timeout: 15000 });
await page.waitForFunction(() => !document.querySelector(".ll-card .ll-graph .ll-wait"), null, { timeout: 25000 }).catch(() => {});
await page.screenshot({ path: `${out}-3-card.png` });
const card = await page.evaluate(() => document.querySelector(".ll-card")?.innerText.replace(/\s+/g, " ").slice(0, 600));

console.log(JSON.stringify({ lang, words, en, card, errors: errors.slice(0, 6) }, null, 2));
await browser.close();
