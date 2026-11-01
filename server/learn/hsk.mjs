/**
 * What a learner at an HSK 3.0 level knows: the syllabus data by Gushi (https://gushichinese.com/hsk-3.0/downloads,
 * CC BY-SA 4.0) — 11,000 words, 3,088 characters and 428 grammar points by level. A segmenter (longest match over the
 * word list), pinyin (the list's own, checked by hand, for its words; pinyin-pro for anything else), and the words a
 * word leads to (the vocabulary chain: the nearest neighbours by shared characters, at or just above the level).
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { pinyin } = require("pinyin-pro");

const DATA = JSON.parse(readFileSync(new URL("../../hsk/hsk-3.0-complete.json", import.meta.url), "utf8"));
export const ATTRIBUTION = DATA.attribution;
export const SOURCE_URL = DATA.page;

const CJK = /[\u3400-\u9fff]/;
const words = new Map();
for (const w of DATA.words) {
  const known = words.get(w.hanzi);
  if (!known) words.set(w.hanzi, { ...w, alt: [] });
  else known.alt.push(w);
}
const chars = new Map(DATA.characters.map((c) => [c.hanzi, c]));
/** Names in the four lives and at the gate: whole words to the segmenter, never "above the level". */
const NAMES = new Set(["梵高", "文森特", "提奥", "高更", "阿尔勒", "巴黎", "荷兰", "伦敦", "梅里爱", "乔治", "卢米埃尔", "蒙帕纳斯", "李时珍", "本草纲目", "孙悟空", "悟空", "唐僧", "西游记", "五行山", "齐天大圣", "吴承恩", "老君", "人生广场", "黄房子", "博赫", "米列", "鲁兰"]);
const MAXLEN = Math.max(...[...words.keys(), ...NAMES].map((k) => [...k].length));
const grammar = DATA.grammar;

/** 1–9; the syllabus tests 7, 8 and 9 as one band. */
export const saneLevel = (v) => {
  const n = Math.round(Number(v));
  return Number.isFinite(n) && n >= 1 && n <= 9 ? n : null;
};
export const bandOf = (level) => (level >= 7 ? "7–9" : String(level));
export const shortMeaning = (m) => String(m || "").split(";")[0].trim().slice(0, 60);

export function levelOf(word) {
  const e = words.get(word);
  if (e) return e.level;
  if ([...word].length === 1 && chars.has(word)) return chars.get(word).level;
  return null;
}

export function entryOf(word) {
  const e = words.get(word) || ([...word].length === 1 ? chars.get(word) : null);
  if (!e) return null;
  return {
    hanzi: e.hanzi,
    pinyin: e.pinyin,
    level: e.level,
    meaning: e.meaning,
    example: e.exampleChinese ? { zh: e.exampleChinese, pinyin: e.examplePinyin, en: e.exampleEnglish } : null,
  };
}

/** Longest match over the word list; Chinese that matches nothing falls to single characters; other text stays whole. */
export function segment(text) {
  const s = [...String(text || "")];
  const out = [];
  let i = 0;
  while (i < s.length) {
    if (!CJK.test(s[i])) {
      let j = i;
      while (j < s.length && !CJK.test(s[j])) j++;
      out.push(s.slice(i, j).join(""));
      i = j;
      continue;
    }
    let len = Math.min(MAXLEN, s.length - i);
    while (len > 1 && !words.has(s.slice(i, i + len).join("")) && !NAMES.has(s.slice(i, i + len).join(""))) len--;
    out.push(s.slice(i, i + len).join(""));
    i += len;
  }
  return out;
}

/** Each token of a line with its pinyin and level; `over` marks Chinese the learner's level doesn't reach yet. */
export function annotate(text, level = 9) {
  const s = String(text || "").slice(0, 600);
  const perChar = pinyin(s, { type: "all" });
  const tokens = [];
  let at = 0;
  for (const t of segment(s)) {
    const n = [...t].length;
    const zh = CJK.test(t);
    let py = "";
    if (zh) {
      const e = words.get(t);
      // The list gives every reading of a polyphone ("dū, dōu"); over a line, the reading in context.
      py = e && !/[,，]/.test(e.pinyin) ? e.pinyin : perChar.slice(at, at + n).map((c) => c.pinyin).join("");
    }
    const lv = zh ? levelOf(t) : null;
    const name = zh && NAMES.has(t) && !words.has(t);
    tokens.push({ t, zh, py, lv, name, over: zh && !name && (lv == null || lv > level), mean: zh && words.get(t) ? shortMeaning(words.get(t).meaning) : "" });
    at += n;
  }
  const zhTokens = tokens.filter((x) => x.zh);
  const over = zhTokens.filter((x) => x.over);
  return { tokens, stats: { words: zhTokens.length, over: over.length, ratio: zhTokens.length ? over.length / zhTokens.length : 0, overWords: [...new Set(over.map((x) => x.t))] } };
}

/** Pinyin for any Chinese word (the list's own when it has it). */
export const pinyinOf = (word) => words.get(word)?.pinyin || pinyin(String(word || ""), { type: "array" }).join("");

/**
 * The vocabulary chain: words that share a character with this one, nearest the learner's level first — the same
 * level, then the next one up, then the levels below, then further up.
 */
export function chainOf(word, level = 3, n = 6) {
  const cs = new Set([...String(word || "")].filter((c) => CJK.test(c)));
  if (!cs.size) return [];
  const score = (e) => {
    const d = e.level - level;
    return d === 0 ? 0 : d === 1 ? 1 : d < 0 ? 2 - d * 0.1 : 3 + d;
  };
  const found = [];
  for (const e of words.values()) {
    if (e.hanzi === word || [...e.hanzi].length > 4) continue;
    if ([...e.hanzi].some((c) => cs.has(c))) found.push(e);
  }
  return found
    .sort((a, b) => score(a) - score(b) || [...a.hanzi].length - [...b.hanzi].length)
    .slice(0, n)
    .map((e) => ({ hanzi: e.hanzi, pinyin: e.pinyin, level: e.level, meaning: shortMeaning(e.meaning) }));
}

/** Every word of levels 1..level, for a prompt. */
export const wordsUpTo = (level) => DATA.words.filter((w) => w.level <= level).map((w) => w.hanzi);
/** The syllabus's grammar points of levels 1..level (7–9 are one file, tagged 7). */
export const grammarUpTo = (level) => grammar.filter((g) => g.level <= level);
export const grammarAt = (level) => grammar.filter((g) => (level >= 7 ? g.level >= 7 : g.level === level));
export const counts = DATA.counts;
