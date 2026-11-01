/**
 * The learning branch's own endpoints, under /life/api/learn/ (the page calls /life-learn/api/learn/…):
 *
 *   GET  /learn/meta                        → { attribution, source, counts, kg }
 *   POST /learn/annotate  { text, level? }  → { level, tokens: [{ t, zh, py, lv, over, mean }], stats }   local, instant
 *   POST /learn/translate { text }          → { en }                                                  a quick model, cached
 *   GET  /learn/word?w=…&level=…            → { hanzi, pinyin, level, meaning, example, chain }        the HSK data
 *   GET  /learn/graph?w=…&level=…           → { source, confusables, collocations, errors, corpus }   see LEARN_KG
 *   POST /learn/feedback  { text, level? }  → { suggestions: [{ wrong, right, sentence, pinyin, why }] }  two at most
 *
 * The knowledge graph and the learner corpus (语合中心 / 北语) are not connected yet. LEARN_KG=mock (the default) answers
 * /learn/graph with what a quick model writes for the word — `source: "mock"` in the JSON, not shown on the page —;
 * LEARN_KG=off leaves the section out. When their APIs open, this is the one function to point at them (graphOf).
 */
import { ATTRIBUTION, SOURCE_URL, annotate, bandOf, chainOf, counts, entryOf, levelOf, pinyinOf, saneLevel, shortMeaning } from "./hsk.mjs";
import { learnNow } from "./context.mjs";

const KG = String(process.env.LEARN_KG || "mock").toLowerCase();
const CJK = /[\u3400-\u9fff]/;

function lru(max) {
  const m = new Map();
  return {
    get(k) { if (!m.has(k)) return undefined; const v = m.get(k); m.delete(k); m.set(k, v); return v; },
    set(k, v) { m.set(k, v); if (m.size > max) m.delete(m.keys().next().value); return v; },
  };
}

export const pinyinLine = (s) => annotate(s).tokens.map((t) => (t.zh ? t.py : t.t.trim())).filter(Boolean).join(" ").replace(/\s+([，。！？、；：,.!?;:])/g, "$1");

export function createLearnApi({ chat, QUICK, log }) {
  const translations = lru(3000), meanings = lru(3000), graphs = lru(1500), pending = new Map();
  const once = (key, fn) => {
    if (pending.has(key)) return pending.get(key);
    const p = fn().finally(() => pending.delete(key));
    pending.set(key, p);
    return p;
  };
  const levelFrom = (v) => saneLevel(v) || learnNow()?.level || 3;
  const ask = (system, user, o) => chat([{ role: "system", content: system }, { role: "user", content: user }], { models: QUICK, temperature: 0.2, timeoutMs: 12_000, learn: false, ...o });

  async function translate(text) {
    const hit = translations.get(text);
    if (hit) return hit;
    return once(`t:${text}`, async () => {
      const r = await ask("Translate the Chinese into natural, simple English for a learner of Chinese. Keep names as they are. Reply with the English only.", text, { maxTokens: 220 });
      const en = r.text.trim();
      return translations.set(text, /^["“][^"“”]*["”]$/.test(en) ? en.slice(1, -1).trim() : en);
    });
  }

  /** Words the syllabus doesn't have (names, rare words). */
  async function meaningOf(word) {
    const hit = meanings.get(word);
    if (hit !== undefined) return hit;
    return once(`m:${word}`, async () => {
      const r = await ask('For a learner of Chinese: the English meaning of this Chinese word, at most 6 words; for a name, say who or what it is. JSON only: {"meaning": "..."}', word, { maxTokens: 60, json: true, temperature: 0.1 });
      return meanings.set(word, String(r.data?.meaning || "").slice(0, 60));
    });
  }

  /** MOCK — stands in for the knowledge graph and the learner corpus until their APIs are open (LEARN_KG). */
  async function graphOf(word, level) {
    if (KG === "off") return null;
    const key = `${word}:${bandOf(level)}`;
    const hit = graphs.get(key);
    if (hit) return hit;
    return once(`g:${key}`, async () => {
      const system = `你在给一个 HSK ${bandOf(level)} 级的中文学习者查一个词，像「国际中文教育知识图谱」和「中介语语料库」那样给出结果。只输出 JSON：{"confusables":[{"word":"容易和它混的词","pinyin":"带声调的拼音","diff":"one short English sentence on the difference"}],"collocations":["常见搭配"],"errors":[{"wrong":"学习者常写错的句子","right":"改对的句子","note":"one short English sentence"}],"corpus":[{"zh":"学习者写过的句子，可以有错","tag":"偏误或正确","note":"one short English sentence"}]}。易混词最多 2 个，搭配最多 3 个，偏误最多 2 条，语料最多 2 条，中文都用这一级看得懂的词；没有合适的就给空数组。`;
      const r = await ask(system, word, { maxTokens: 520, json: true, temperature: 0.3, timeoutMs: 15_000 });
      const d = r.data || {};
      const take = (v, n) => (Array.isArray(v) ? v.slice(0, n) : []);
      return graphs.set(key, {
        source: "mock",
        confusables: take(d.confusables, 2).map((c) => ({ word: String(c?.word || "").slice(0, 8), pinyin: String(c?.pinyin || "").slice(0, 30), diff: String(c?.diff || "").slice(0, 160) })).filter((c) => c.word && c.word !== word),
        collocations: take(d.collocations, 3).map((c) => String(c || "").slice(0, 16)).filter(Boolean),
        errors: take(d.errors, 2).map((e) => ({ wrong: String(e?.wrong || "").slice(0, 40), right: String(e?.right || "").slice(0, 40), note: String(e?.note || "").slice(0, 160) })).filter((e) => e.wrong && e.right && e.wrong !== e.right),
        corpus: take(d.corpus, 2).map((c) => ({ zh: String(c?.zh || "").slice(0, 60), tag: String(c?.tag || "").includes("偏误") ? "偏误" : "正确", note: String(c?.note || "").slice(0, 160) })).filter((c) => c.zh),
      });
    });
  }

  async function feedback(text, level, ui) {
    const why = ui === "en" ? "one short, simple English sentence" : "一句简单的中文";
    const system = `你是一位耐心的中文老师，学习者是 HSK ${bandOf(level)} 级。看他写的这句中文，只找真正的错误：错字、用错的词、少了或多了的词、语序。最多两处，没有错就返回空数组。不挑风格，不改成更难的说法：改法要离他原来的句子最近，用他这一级会的词。只输出 JSON：{"suggestions":[{"wrong":"原句里错的那一小段","right":"改对的那一小段","sentence":"整句改对以后","why":"${why}"}]}。如果他写的不是中文，返回空数组。`;
    const r = await ask(system, text, { maxTokens: 320, json: true, temperature: 0.1 });
    const list = Array.isArray(r.data?.suggestions) ? r.data.suggestions.slice(0, 2) : [];
    return list
      .map((s) => {
        const sentence = String(s?.sentence || "").slice(0, 120), right = String(s?.right || "").slice(0, 30);
        return { wrong: String(s?.wrong || "").slice(0, 30), right, sentence, pinyin: pinyinLine(sentence), rightPinyin: pinyinLine(right), why: String(s?.why || "").slice(0, 180) };
      })
      .filter((s) => s.right && s.sentence && s.right !== s.wrong && s.sentence !== text);
  }

  async function route(req, res, p, url, { ip, readBody, send, allow }) {
    if (!allow(ip, "tts")) return send(res, 429, { error: "slow down" });
    if (req.method === "GET" && p === "/learn/meta") return send(res, 200, { attribution: ATTRIBUTION, source: SOURCE_URL, counts, kg: KG });
    if (req.method === "POST" && p === "/learn/annotate") {
      const b = await readBody(req);
      const level = levelFrom(b.level);
      return send(res, 200, { level, ...annotate(String(b.text || ""), level) });
    }
    if (req.method === "POST" && p === "/learn/translate") {
      const text = String((await readBody(req)).text || "").trim().slice(0, 400);
      if (!text) return send(res, 400, { error: "empty" });
      try { return send(res, 200, { en: await translate(text) }); } catch (e) { log("learn translate failed", e.message); return send(res, 200, { en: "" }); }
    }
    if (req.method === "GET" && (p === "/learn/word" || p === "/learn/graph")) {
      const w = String(url.searchParams.get("w") || "").trim().slice(0, 12);
      if (!w || !CJK.test(w)) return send(res, 400, { error: "not a Chinese word" });
      const level = levelFrom(url.searchParams.get("level"));
      if (p === "/learn/graph") {
        try { return send(res, 200, (await graphOf(w, level)) || { source: "off" }); } catch (e) { log("learn graph failed", e.message); return send(res, 200, { source: "error" }); }
      }
      const e = entryOf(w);
      const meaning = e ? e.meaning : await meaningOf(w).catch(() => "");
      const lv = e?.level ?? levelOf(w);
      return send(res, 200, { hanzi: w, pinyin: e?.pinyin || pinyinOf(w), level: lv, band: lv ? bandOf(lv) : null, meaning, short: shortMeaning(meaning), example: e?.example || null, chain: chainOf(w, level) });
    }
    if (req.method === "POST" && p === "/learn/feedback") {
      const b = await readBody(req);
      const text = String(b.text || "").trim().slice(0, 200);
      if (!text || !CJK.test(text)) return send(res, 200, { suggestions: [] });
      try { return send(res, 200, { suggestions: await feedback(text, levelFrom(b.level), learnNow()?.ui || "en") }); } catch (e) { log("learn feedback failed", e.message); return send(res, 200, { suggestions: [] }); }
    }
    return send(res, 404, { error: "not found" });
  }

  return { route };
}
