/*
 * Life Plaza · Learn — the learner's layer over the plaza (capture.meetmind.online/life-learn/).
 *
 * Runs before the plaza: asks the learner's HSK level (or takes ?level= from a teacher's link), sends it with every
 * API call (X-Learn-Level, X-Learn-UI) so the hosts speak Chinese at that level, then boots the plaza. While it runs:
 * a caption over whatever a host or the guide says (pinyin over each word, words above the level marked, English
 * below), a card for any word (HSK data, the vocabulary chain, mix-ups, the learner corpus), and a second try when
 * what the learner typed has a mistake (one or two fixes with pinyin; they type it again themselves).
 *
 * Difficulty control uses the HSK 3.0 syllabus data by Gushi — https://gushichinese.com/hsk-3.0/downloads — CC BY-SA 4.0.
 */
(() => {
  const MAIN = document.currentScript?.dataset.main;
  const API = "/life-learn/api";
  const KEY = "lifelearn.level";
  const VIEW_KEY = "lifelearn.view";
  const LANG_KEY = "lifeplaza.lang";
  const CJK = /[\u3400-\u9fff]/;
  const SOURCE = "https://gushichinese.com/hsk-3.0/downloads";

  const LEVELS = [
    { lv: 1, name: "HSK 1", note: "Just starting · 300 words · English page" },
    { lv: 2, name: "HSK 2", note: "Simple everyday talk · 500 words · English page" },
    { lv: 3, name: "HSK 3", note: "Everyday topics · 1,000 words · English page" },
    { lv: 4, name: "HSK 4", note: "日常交流 · 2,000 词 · 中文界面" },
    { lv: 5, name: "HSK 5", note: "3,600 词 · 中文界面" },
    { lv: 6, name: "HSK 6", note: "5,400 词 · 中文界面" },
    { lv: 7, name: "HSK 7–9", note: "高级 · 中文界面" },
  ];

  const parseLevel = (v) => {
    if (v == null) return null;
    const s = String(v).trim().toLowerCase();
    if (s === "native" || s === "0") return 0;
    const n = parseInt(s, 10);
    return n >= 1 && n <= 9 ? n : null;
  };
  const store = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const load = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const band = (lv) => (lv >= 7 ? "7–9" : String(lv));
  const uiLang = () => (load(LANG_KEY) || document.documentElement.lang || "zh").startsWith("en") ? "en" : "zh";
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const guard = (el) => {
    for (const t of ["pointerdown", "pointerup", "mousedown", "touchstart", "wheel", "click", "dblclick"]) el.addEventListener(t, (e) => e.stopPropagation());
    for (const t of ["keydown", "keyup", "keypress"]) el.addEventListener(t, (e) => e.stopPropagation());
    return el;
  };

  let level = null;
  const fromUrl = parseLevel(new URLSearchParams(location.search).get("level"));
  if (fromUrl !== null) choose(fromUrl, false);
  else level = parseLevel(load(KEY));

  function choose(lv, reload) {
    level = lv;
    store(KEY, String(lv));
    if (lv) store(LANG_KEY, lv <= 3 ? "en" : "zh");
    if (reload) return location.reload();
    // The way-in screen was worded before the level was known (index.html); word it again for an English page.
    if (lv && lv <= 3 && document.getElementById("boot-title")) {
      document.documentElement.lang = "en";
      document.getElementById("boot-sub").textContent = "人 生 广 场";
      document.getElementById("boot-title").textContent = "Life Plaza";
      document.getElementById("boot-hint").textContent = "The plaza's lamps are coming on, one by one.";
    }
  }

  // ---- the gate: which level ---------------------------------------------------------------------------------
  function showGate(onPick) {
    const el = guard(document.createElement("div"));
    el.className = "ll-gate";
    el.innerHTML = `<div class="ll-gate-card">
      <h1>人生广场 · 学中文<small>Life Plaza · Learn Chinese</small></h1>
      <p class="ll-lead">Walk into other people's lives and learn Chinese from the people who lived them. Pick your level — they will speak just right for you.<br>走进别人的人生，跟他们学中文。先选你的中文水平，他们会照你的水平说话。</p>
      <div class="ll-levels">${LEVELS.map((l) => `<button type="button" class="ll-level" data-lv="${l.lv}"><b>${l.name}</b><span>${esc(l.note)}</span></button>`).join("")}
        <button type="button" class="ll-level ll-native" data-lv="0"><b>我说中文 · I speak Chinese</b><span>The original plaza, no learning layer · 原版人生广场</span></button>
      </div>
      <div class="ll-gate-foot">Level control uses the <a href="${SOURCE}" target="_blank" rel="noopener">HSK 3.0 syllabus data by Gushi</a>, CC BY-SA 4.0.<br>A teacher can send a link with the level in it: <code>?level=2</code></div>
    </div>`;
    el.addEventListener("click", (e) => {
      const b = e.target.closest?.("[data-lv]");
      if (!b) return;
      onPick(parseInt(b.dataset.lv, 10));
      el.remove();
    });
    document.body.append(el);
  }

  // ---- every call to the plaza carries the level -------------------------------------------------------------
  let lastSaid = "";
  const SAYS = /\/api\/(chat|chat\/stream|guide\/call|guide\/chat|melies\/say)(\?|$)/;
  function installFetch() {
    const orig = window.fetch.bind(window);
    window.fetch = function (input, init) {
      try {
        const url = typeof input === "string" ? input : input instanceof URL ? input.href : input?.url || "";
        if (level && url.includes(`${API}/`)) {
          init = { ...(init || {}) };
          const h = new Headers(init.headers || (input instanceof Request ? input.headers : undefined));
          h.set("X-Learn-Level", String(level));
          h.set("X-Learn-UI", uiLang());
          init.headers = h;
          if (SAYS.test(url) && typeof init.body === "string") heard(init.body);
        }
      } catch {}
      return orig(input, init);
    };
  }
  async function api(path, body) {
    const r = await fetch(`${API}${path}`, body ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : {});
    if (!r.ok) throw new Error(`${path} ${r.status}`);
    return r.json();
  }

  // ---- hearing it again --------------------------------------------------------------------------------------
  const ROLES = [[/梵高|文森特|Vincent|Gogh/i, "vangogh"], [/李时珍|Li Shizhen/i, "lishizhen"], [/悟空|大圣|Wukong|Monkey/i, "xiyou"], [/梅里爱|M[ée]li[èe]s/i, "melies"]];
  const roleOf = (who) => ROLES.find(([re]) => re.test(who || ""))?.[1] || "guide";
  let audio = null;
  async function speak(text, role = "guide") {
    try {
      const r = await fetch(`${API}/tts`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, role, lang: "zh" }) });
      if (!r.ok) return;
      const url = URL.createObjectURL(await r.blob());
      audio?.pause();
      audio = new Audio(url);
      audio.onended = () => URL.revokeObjectURL(url);
      audio.play().catch(() => {});
    } catch {}
  }

  // ---- the caption: pinyin over each word, English below -----------------------------------------------------
  const view = (() => {
    const saved = (() => { try { return JSON.parse(load(VIEW_KEY) || "null"); } catch { return null; } })();
    return saved || { py: true, en: true, min: false };
  })();
  let cap, capWho, capLine, capEn, current = "", currentWho = "", seenAt = 0, ticket = 0;

  function buildCaption() {
    if (level >= 4 && !load(VIEW_KEY)) { view.en = false; if (level >= 7) view.py = false; }
    cap = guard(document.createElement("div"));
    cap.className = "ll-cap ll-hidden";
    cap.innerHTML = `<div class="ll-cap-top"><span class="ll-cap-who"></span><span class="ll-cap-lv">HSK ${band(level)}</span>
      <span class="ll-cap-tools"><button type="button" data-t="say" title="Hear it again · 再听一遍">🔊</button><button type="button" data-t="py" title="Pinyin · 拼音">拼音</button><button type="button" data-t="en" title="English">EN</button><button type="button" data-t="min" title="Hide · 收起">—</button></span></div>
      <div class="ll-cap-line" lang="zh"></div><div class="ll-cap-en"></div>`;
    capWho = cap.querySelector(".ll-cap-who");
    capLine = cap.querySelector(".ll-cap-line");
    capEn = cap.querySelector(".ll-cap-en");
    cap.querySelector(".ll-cap-tools").addEventListener("click", (e) => {
      const t = e.target.closest?.("button")?.dataset.t;
      if (t === "say") return current && speak(current, roleOf(currentWho));
      if (t === "py") view.py = !view.py;
      if (t === "en") view.en = !view.en;
      if (t === "min") view.min = !view.min;
      store(VIEW_KEY, JSON.stringify(view));
      paintView();
    });
    document.body.append(cap);
    paintView();
  }
  function paintView() {
    cap.classList.toggle("ll-nopy", !view.py);
    cap.classList.toggle("ll-min", view.min);
    capEn.classList.toggle("ll-off", !view.en);
    for (const [t, on] of [["py", view.py], ["en", view.en], ["min", view.min]]) cap.querySelector(`[data-t="${t}"]`).setAttribute("aria-pressed", String(on));
  }

  const visible = (el) => {
    if (!el || !el.isConnected || !el.getClientRects().length) return false;
    const s = getComputedStyle(el);
    return s.visibility !== "hidden" && s.display !== "none" && Number(s.opacity) > 0.05;
  };
  const lastVisible = (sel) => {
    const all = [...document.querySelectorAll(sel)].reverse();
    const el = all.find((x) => visible(x) && CJK.test(x.textContent || ""));
    return el ? { text: el.textContent.trim(), who: "" } : null;
  };
  /** Where the plaza shows a line someone says: a room's subtitle, the guide at the gate, the plaza, Méliès' stage. */
  const SOURCES = [
    () => {
      const s = document.getElementById("subtitle");
      if (!visible(s)) return null;
      const text = `${s.querySelector(".sub-on")?.textContent || ""}${s.querySelector(".sub-off")?.textContent || ""}`.trim();
      return { text, who: s.querySelector(".sub-who")?.textContent?.trim() || "" };
    },
    () => lastVisible(".gx-line"),
    () => lastVisible(".cl-text"),
    () => lastVisible(".bubble-say span"),
    () => lastVisible(".mf-say span"),
    () => lastVisible(".gp-say span"),
    () => lastVisible(".pp-line"),
  ];
  function tick() {
    let found = null;
    for (const s of SOURCES) {
      try { const r = s(); if (r && CJK.test(r.text)) { found = r; break; } } catch {}
    }
    if (found) {
      seenAt = Date.now();
      cap.classList.remove("ll-fade");
      if (found.text !== current) showLine(found.text, found.who);
    } else if (current && Date.now() - seenAt > 8000) cap.classList.add("ll-fade");
  }

  async function showLine(text, who) {
    const mine = ++ticket;
    current = text;
    currentWho = who;
    cap.classList.remove("ll-hidden");
    capWho.textContent = who || "";
    capLine.textContent = text;
    capEn.textContent = "";
    const [a, t] = await Promise.allSettled([api("/learn/annotate", { text, level }), api("/learn/translate", { text })]);
    if (mine !== ticket) return;
    if (a.status === "fulfilled") paintTokens(a.value.tokens);
    if (t.status === "fulfilled") capEn.textContent = t.value.en || "";
  }
  function paintTokens(tokens) {
    capLine.textContent = "";
    for (const t of tokens) {
      if (!t.zh) {
        const sp = document.createElement("span");
        sp.className = "ll-plain";
        sp.textContent = t.t;
        capLine.append(sp);
        continue;
      }
      const r = document.createElement("ruby");
      r.append(document.createTextNode(t.t));
      const rt = document.createElement("rt");
      rt.textContent = t.py;
      r.append(rt);
      if (t.name) r.classList.add("ll-name");
      else if (t.over) r.classList.add("ll-new");
      if (t.mean) r.title = t.mean;
      r.addEventListener("click", (e) => { e.stopPropagation(); openWord(t.t); });
      capLine.append(r);
    }
  }

  // ---- a word's card -----------------------------------------------------------------------------------------
  let card = null, cardWord = "";
  function closeCard() { card?.remove(); card = null; cardWord = ""; }
  function badge(lv) {
    if (!lv) return `<span class="ll-badge ll-up">beyond HSK · 超纲</span>`;
    return lv > level ? `<span class="ll-badge ll-up">HSK ${band(lv)} · new</span>` : `<span class="ll-badge">HSK ${band(lv)}</span>`;
  }
  async function openWord(w) {
    if (cardWord === w && card) return;
    closeCard();
    cardWord = w;
    card = guard(document.createElement("div"));
    card.className = "ll-card";
    card.setAttribute("lang", "zh");
    card.innerHTML = `<div class="ll-card-head"><div><div class="ll-card-hz">${esc(w)}</div></div><button type="button" class="ll-card-close" aria-label="Close">×</button></div><div class="ll-wait">…</div>`;
    card.querySelector(".ll-card-close").onclick = closeCard;
    document.body.append(card);
    let d;
    try { d = await api(`/learn/word?w=${encodeURIComponent(w)}&level=${level}`); } catch { if (cardWord === w) card.querySelector(".ll-wait").textContent = "—"; return; }
    if (cardWord !== w || !card) return;
    const ex = d.example;
    card.innerHTML = `<div class="ll-card-head"><div>
        <div class="ll-card-hz">${esc(d.hanzi)}${badge(d.level)}</div>
        <div class="ll-card-py">${esc(d.pinyin)} <button type="button" class="ll-mini" data-say="${esc(d.hanzi)}">🔊</button></div>
      </div><button type="button" class="ll-card-close" aria-label="Close">×</button></div>
      <p class="ll-card-mean" lang="en">${esc(d.short || d.meaning || "")}</p>
      ${ex ? `<div class="ll-sec"><h4>Example · 例句</h4><div class="ll-ex-zh">${esc(ex.zh)} <button type="button" class="ll-mini" data-say="${esc(ex.zh)}">🔊</button></div><div class="ll-ex-py">${esc(ex.pinyin)}</div><div class="ll-ex-en" lang="en">${esc(ex.en)}</div></div>` : ""}
      ${d.chain?.length ? `<div class="ll-sec"><h4>Word chain · 词汇链 — learn these next</h4><div class="ll-chips">${d.chain.map((c) => `<button type="button" class="ll-chip" data-word="${esc(c.hanzi)}"><b>${esc(c.hanzi)}</b><em>${band(c.level)}</em><small>${esc(c.pinyin)} · ${esc(c.meaning)}</small></button>`).join("")}</div></div>` : ""}
      <div class="ll-sec ll-graph"><div class="ll-wait">…</div></div>`;
    card.querySelector(".ll-card-close").onclick = closeCard;
    card.addEventListener("click", (e) => {
      const say = e.target.closest?.("[data-say]");
      if (say) return speak(say.dataset.say, "guide");
      const next = e.target.closest?.("[data-word]");
      if (next) openWord(next.dataset.word);
    });
    let g = null;
    try { g = await api(`/learn/graph?w=${encodeURIComponent(w)}&level=${level}`); } catch {}
    if (cardWord !== w || !card) return;
    const box = card.querySelector(".ll-graph");
    if (!g || !["mock", "api"].includes(g.source)) { box.remove(); return; }
    const parts = [];
    if (g.confusables?.length) parts.push(`<h4>Easy to mix up · 易混词</h4><ul class="ll-list">${g.confusables.map((c) => `<li><span class="ll-zh">${esc(c.word)}</span> <span class="ll-ex-py">${esc(c.pinyin)}</span><small lang="en">${esc(c.diff)}</small></li>`).join("")}</ul>`);
    if (g.collocations?.length) parts.push(`<h4>Goes with · 常见搭配</h4><div class="ll-chips">${g.collocations.map((c) => `<span class="ll-chip"><b>${esc(c)}</b></span>`).join("")}</div>`);
    if (g.errors?.length) parts.push(`<h4 style="margin-top:10px">Common mistakes · 常见偏误</h4><ul class="ll-list">${g.errors.map((x) => `<li><span class="ll-zh ll-bad">${esc(x.wrong)}</span> → <span class="ll-zh ll-good">${esc(x.right)}</span><small lang="en">${esc(x.note)}</small></li>`).join("")}</ul>`);
    if (g.corpus?.length) parts.push(`<h4 style="margin-top:10px">From learners' writing · 语料</h4><ul class="ll-list">${g.corpus.map((x) => `<li><span class="ll-tag${x.tag === "偏误" ? " ll-err" : ""}">${esc(x.tag)}</span><span class="ll-zh">${esc(x.zh)}</span><small lang="en">${esc(x.note)}</small></li>`).join("")}</ul>`);
    if (!parts.length) { box.remove(); return; }
    box.innerHTML = parts.join("");
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCard(); });

  // ---- a second try: what the learner typed, one or two fixes, typed again ----------------------------------
  let fix = null;
  const norm = (s) => String(s || "").replace(/[\s，。！？、；：,.!?;:"'“”‘’…—-]/g, "");
  function heard(body) {
    let text = "";
    try { text = String(JSON.parse(body).text || "").trim(); } catch { return; }
    if (!text || !CJK.test(text) || text === lastSaid || [...text].length < 3) return;
    lastSaid = text;
    api("/learn/feedback", { text, level }).then((d) => { if (d.suggestions?.length && text === lastSaid) showFix(text, d.suggestions); }).catch(() => {});
  }
  function showFix(text, list) {
    fix?.remove();
    const target = list[list.length - 1].sentence;
    let was = esc(text);
    for (const s of list) if (s.wrong && text.includes(s.wrong)) was = was.replace(esc(s.wrong), `<mark>${esc(s.wrong)}</mark>`);
    fix = guard(document.createElement("div"));
    fix.className = "ll-fix";
    fix.setAttribute("lang", "zh");
    fix.innerHTML = `<h4>Try once more · 再写一次</h4><div class="ll-was">${was}</div>
      ${list.map((s) => `<div class="ll-now">${esc(s.right)} <small class="ll-now-py">${esc(s.rightPinyin || "")}</small></div><div class="ll-why" lang="${uiLang()}">${esc(s.why)}</div>`).join("")}
      <form><input type="text" autocomplete="off" placeholder="Type the whole sentence again · 再写一遍" /><button type="submit">OK</button><button type="button" class="ll-skip">Skip</button></form>`;
    const input = fix.querySelector("input");
    fix.querySelector(".ll-skip").onclick = () => { fix?.remove(); fix = null; };
    fix.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      if (norm(input.value) === norm(target)) {
        fix.classList.add("ll-done");
        fix.innerHTML = `<div class="ll-ok">很好！That's right. ✓</div><div class="ll-was">${esc(target)}</div>`;
        speak(target, "guide");
        const done = fix;
        setTimeout(() => { done.remove(); if (fix === done) fix = null; }, 2600);
      } else {
        input.value = "";
        input.placeholder = `${target}`;
        input.focus();
      }
    });
    document.body.append(fix);
  }

  // ---- the level pill ------------------------------------------------------------------------------------------
  function buildPill() {
    const b = guard(document.createElement("button"));
    b.type = "button";
    b.className = "ll-pill";
    b.innerHTML = `HSK ${band(level)} <i>学中文 · change</i>`;
    b.onclick = () => showGate((lv) => choose(lv, true));
    document.body.append(b);
  }

  // ---- boot ----------------------------------------------------------------------------------------------------
  function boot() {
    installFetch();
    if (level) {
      buildPill();
      buildCaption();
      setInterval(tick, 350);
    }
    if (MAIN) import(MAIN).catch((e) => console.error("[life-learn] the plaza failed to load", e));
  }
  const start = () => (level === null ? showGate((lv) => { choose(lv, false); boot(); }) : boot());
  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start, { once: true });
})();
