// Opens a life on the live copy with software WebGL (no GPU on this server) and keeps screenshots as it comes up.
// Usage: CHROMIUM=/path/to/chrome node test/room.mjs [life] [level] [outPrefix] [seconds]
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const [life = "vangogh", level = "3", out = "/tmp/ll/room", secs = "120"] = process.argv.slice(2);
const url = `${process.env.LEARN_URL || "http://127.0.0.1:8080/life-learn/"}?go=${life}&level=${level}`;
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM || undefined,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--enable-webgl", "--autoplay-policy=no-user-gesture-required"],
});
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
const errors = [];
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message.slice(0, 160)}`));
page.on("console", (m) => { if (m.type() === "error") errors.push(`console: ${m.text().slice(0, 160)}`); });
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
const t0 = Date.now();
let n = 0;
while (Date.now() - t0 < Number(secs) * 1000) {
  await page.waitForTimeout(15000);
  n += 1;
  await page.screenshot({ path: `${out}-${String(n).padStart(2, "0")}.png` }).catch((e) => errors.push(`shot: ${e.message.slice(0, 80)}`));
  const state = await page.evaluate(() => ({
    boot: document.getElementById("boot")?.className || "",
    sub: document.getElementById("subtitle")?.innerText?.replace(/\s+/g, " ").slice(0, 120) || "",
    cap: document.querySelector(".ll-cap-line")?.textContent?.slice(0, 80) || "",
    lp: Boolean(window.__lp),
  })).catch((e) => ({ err: e.message.slice(0, 80) }));
  console.log(`${Math.round((Date.now() - t0) / 1000)}s`, JSON.stringify(state));
}
console.log(JSON.stringify({ errors: [...new Set(errors)].slice(0, 10) }, null, 2));
await browser.close();
