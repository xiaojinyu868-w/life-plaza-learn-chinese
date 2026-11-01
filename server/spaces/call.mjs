/**
 * The gate as a phone call (docs/gate-call.md). The visitor rings in to her booth and she speaks first. They tap a few
 * bubbles (what they do these days, what they like) and may say a line or two, aloud or typed. She takes in what she
 * hears — never reading their tags back to them — asks at most once, only after something they raised themselves, and
 * closes. While they choose a face she writes their Life Passport and its first stop (FAST); the reading every host is
 * given is written in the background (DEEP). Someone who speaks of not wanting to live is asked nothing more: the show
 * is put down and the gate's care (guide.mjs careTalk, cast.mjs CARE_LINE) takes over, word for word.
 */
import { CARE_LINE, careIn, clean, voiceRules } from "./cast.mjs";
import { DAYS, LIVES, fitsNow, sentencesOf, upTo } from "./guide.mjs";
import { READ } from "../lib/llm.mjs";

/** The passport and its first stop, written while they choose a face; the whole reading, in the background (llm.mjs READ). */
export const FAST = READ.fast;
export const DEEP = READ.deep;

const HER = {
  zh: "你是「人生广场」门口的引路人。广场浮在云上，来访者可以走进几位曾经很久没被人看见的人的一段日子。来这儿之前，你在电台做了二十年夜间节目：半夜有陌生人打进来，你听他们说话。现在你还是接电话，只是换了个地方。这儿的规矩只有一条：拿你的一段日子，换他们的一段；哪一段都行，平常的也算。此刻是一通电话：他在线那头，你在你的小亭子里。你说话像当年夜里的节目：声音低，不急，平平常常，偶尔一点玩笑；你听过太多夜晚，不大惊小怪。不说「我懂你」，不说教，不给建议，不安慰，不夸人，不用感叹号和表情符号。",
  en: "You are the guide at the gate of the Life Plaza, a plaza above the clouds where visitors walk into a stretch of the days of people who once went a long time unseen. Before this you did late-night radio for twenty years: strangers rang in after midnight and you listened. You still take calls — just from here now. The one rule here: a stretch of your days for a stretch of theirs — any stretch will do, ordinary ones too. This is a phone call: they are on the line, you are in your little booth. You talk the way you did on air at night: low, unhurried, plain, now and then a little humour; you have heard too many nights to be startled by anything. You never say \"I understand\", never lecture, advise, console or praise, and never use exclamation marks or emoji. You don't know whether they are a man or a woman: never he, she, a man or a woman for them — \"you\", or \"someone\".",
};

const NOT_SAY = /^(不想说|rather not say)$/i;
/** What they chose on the two pages of bubbles, in the order tapped; `own`, what they said under "other". */
export function cleanPicks(v) {
  const o = v && typeof v === "object" ? v : {};
  const list = (x, n) => [...new Set((Array.isArray(x) ? x : []).map((s) => clean(s, 24)).filter((s) => s && !careIn(s)))].slice(0, n);
  return { now: list(o.now, 3), likes: list(o.likes, 10), own: clean(o.own, 120) };
}
export const hasPicks = (p) => p.now.some((s) => !NOT_SAY.test(s)) || p.likes.length > 0 || !!p.own;

const KINDS = ["picks", "open", "more", "care"];
/** The call as it went: her line (`q`) and what they said after it (`a`); `k` is which of the call's turns it was. */
export function cleanTurns(v) {
  return (Array.isArray(v) ? v : []).slice(-8).map((t) => ({ q: clean(t?.q, 240), a: clean(t?.a, 400), ...(KINDS.includes(t?.k) ? { k: t.k } : {}) })).filter((t) => t.a);
}

function picksLines(p, en) {
  const lines = [];
  if (p.now.length) lines.push(en ? `- These days: ${p.now.join(" → ")}` : `- 现在：${p.now.join(" → ")}`);
  if (p.likes.length) lines.push(en ? `- Likes: ${p.likes.join(", ")}` : `- 平常喜欢：${p.likes.join("、")}`);
  if (p.own) lines.push(en ? `- In their own words, under "other": "${p.own}"` : `- 在「其他」里他自己说的：「${p.own}」`);
  return lines.join("\n");
}
const talkOf = (t) => t.filter((x) => x.k === "open" || x.k === "more" || !x.k);
function talkLines(t, en) {
  return talkOf(t).map((x) => [x.q && (en ? `You: "${x.q}"` : `你：「${x.q}」`), en ? `Them: "${x.a}"` : `他：「${x.a}」`].filter(Boolean).join("\n")).join("\n");
}
/** Everything they gave at the gate, for a writer: the bubbles (and the sentence made of them), then the call. */
function heard(p, t, en) {
  const lines = [];
  const sentence = t.find((x) => x.k === "picks")?.a;
  if (p.now.length || p.likes.length || p.own) {
    lines.push(en ? "What they tapped on the bubbles (as they are):" : "他在泡泡上点的（原样）：", picksLines(p, en));
    if (sentence) lines.push(en ? `Put together, as if they had said it: "${sentence}"` : `连成一句，像他自己说的：「${sentence}」`);
  } else lines.push(en ? "They skipped the bubbles." : "泡泡他都跳过了。");
  const talk = talkLines(t, en);
  lines.push(talk ? `${en ? "What was said on the line (their own words):" : "电话里说的（他的原话）："}\n${talk}` : en ? "They said nothing on the line." : "电话里他什么也没说。");
  return lines.join("\n");
}

// ---- her turn on the line ---------------------------------------------------------------------------------------

/** Which turn of the call this is: after the bubbles, after the first thing they said, or after her one question. */
function stageOf(t) {
  const last = t.at(-1);
  if (!last) return "open";
  if (last.k === "picks") return "picks";
  return last.k === "more" || talkOf(t).length >= 2 ? "more" : "open";
}
/** How long she may go on (characters), by turn. */
const CAP = { picks: { zh: 44, en: 210 }, open: { zh: 62, en: 270 }, more: { zh: 52, en: 230 } };
const CLOSE = { zh: "好，我记下了。", en: "All right. I've got it down." };
const CLOSED = { zh: /记下了/, en: /\b(got it down|noted|written (it|that) down)\b/i };
/** When no model answers: a few warm words that pretend to nothing. */
const FALLBACK = {
  picks: { zh: "嗯，我都记下了。", en: "Mm. I've got all that." },
  open: { zh: "嗯，这一句我替你记下了。", en: "Mm. I've written that one down for you." },
  more: { zh: "嗯。", en: "Mm." },
  none: { zh: "不点也行。", en: "That's fine too." },
  unsaid: { zh: "不说也行。", en: "No need to say." },
};
/** A question that assumes what they never said (an evening worth telling, a thing at hand, a worry), or asks why. */
const PRESUME = {
  zh: /最近的一个晚上|那个晚上|手边|心事|难处|难过|压力|累不累|辛苦|孤单|孤独|烦恼|为什么|为啥|感觉怎么样|什么感受|心情怎么样/,
  en: /\bwithin reach\b|\bon your mind\b|\bwhy\b|\bhow (did|does|do) (that|it|you) feel\b|\bstress|\blonely\b|\bstruggl|\bworr(y|ied)\b/i,
};
const HOTLINE = /12356|116 123|\b988\b/;
/** Whether a sentence asks (a model now and then ends a question with a full stop). */
const asks = (s, en) => {
  const t = String(s).trim();
  if (/[？?]["”」』’）)]*$/.test(t)) return true;
  return en ? /^["“]?(did|do|does|is|are|was|were|what|where|which|who|whose|how|when|can|could|would|will|have|has)\b/i.test(t) : /(吗|(?<!没)什么呢?|哪[儿里个些一]|几[点天个回次号]|谁|怎么样?|多少|是不是|有没有)[」”]?[。.]?$/.test(t);
};
/** A question with its question mark. */
const asked = (s, en) => { const t = String(s).trim(); return /[？?]["”」』’）)]*$/.test(t) ? t : t.replace(/[。.]*(["”」』’）)]*)$/, `${en ? "?" : "？"}$1`); };

/**
 * Chinese marks set as she says them, one character at a time (so what is already on screen never changes): stops for
 * exclamation marks, 「」 for quotes.
 */
function zhMarks(s) {
  let open = false;
  return [...String(s)].map((c) => {
    if (c === "！" || c === "!") return "。";
    if (c === "“") return "「";
    if (c === "”") return "」";
    if (c === "\"") { open = !open; return open ? "「" : "」"; }
    return c;
  }).join("");
}
/** What she says aloud, as far as it has come: up to the "|||", without stage directions or a trailing "|". */
function spoken(raw, lang) {
  let s = String(raw || "");
  const cut = s.indexOf("|||");
  s = cut >= 0 ? s.slice(0, cut) : s.replace(/\|{1,2}\s*$/, "");
  s = s.replace(/\*[^*]*\*|（[^）]*）|\([^)]*\)|\[[^\]]*\]|【[^】]*】/g, " ").replace(/[*（(【[][\s\S]*$/, "");
  s = s.replace(/\s+/g, " ").replace(/^[\s,，。、]+/, "");
  if (lang === "en") return s.replace(/!+/g, ".").replace(/([a-z][.?])(?=[A-Z])/g, "$1 ");
  return zhMarks(s).replace(/ ?([，。？、；：…「」]) ?/g, "$1");
}

function callMessages(lang, p, t, stage) {
  const en = lang === "en";
  const said = t.at(-1)?.a || "";
  const care = en
    ? `\nIf anything they tapped or said speaks of not wanting to live, of wanting to die or of hurting themselves — or anything near it (everyone would be better off without them, they'd like to disappear) — do none of the above: put the show down, ask nothing, and say only: "${CARE_LINE.en}" Then a new line with only "|||CARE".`
    : `\n如果他点的或说的里面有不想活、想死、想伤害自己的意思，或者相近的念头（觉得没有他大家会更好、想消失），上面这些都不做：节目先放下，什么也别问，只认真说：「${CARE_LINE.zh}」然后另起一行，只写「|||CARE」。`;
  let task;
  if (stage === "picks") {
    task = en
      ? `They have just tapped these bubbles (as they are):
${picksLines(p, en)}
Put together, as if they had said it: "${said}"

Now it's your turn: one or two sentences that take in what they tapped.
1. Don't read their tags back, and don't go through them one by one. Say one thing you hear in them: put together, what kind of day they make, what kind of hands and eyes — through one concrete thing, one picture. A little of what twenty years of night calls taught you, or a little humour, is welcome.
2. Hear only what they tapped; add nothing. Never assume they are tired, busy, struggling or lonely, or that something is on their mind — and no words like "tired", "escape", "unwind", "recharge", "switch off", "healing": they decide there is something in their days to get away from. Don't judge, don't sum them up ("you're the kind of person who…", "you must…"). Where you're guessing, say so lightly ("sounds like", "I'd guess" — not every time).
3. If they tapped little, say little. If they chose "Rather not say", leave that page alone.
4. Ask nothing and don't invite them to say more: the show does that next.
5. At most 30 words in all.
Examples (other visitors' — learn the measure, not the words):
They tapped: these days at university → a master's; likes sleeping, games → console.
✗ You're doing a master's and you like sleeping and games. (tags read back)
✗ A master's must be hard — make sure you rest. (deciding it's hard, and advice)
✗ Papers by day, games to unwind — someone who knows how to give themselves a way out. (deciding they need to escape, and a verdict)
✓ Thesis by day, a controller by night. Sleep first on the list — noted.
They tapped: these days retired → flowers and vegetables; likes food → cooking.
✓ You grow it and you cook it: from the soil to the pot without passing through anyone else's hands.
Then a new line with only "|||".`
      : `他刚在泡泡上点了这些（原样）：
${picksLines(p, en)}
连成一句，像他自己说的：「${said}」

现在轮到你，只说一到两句，接住他点的：
1. 不把他点的念回来，也不挨个复述。说一句你从这几样里听出来的东西：它们放在一起，像什么样的一天、什么样的手和眼睛——用一样具体的东西、一个画面说出来。可以带一点你做夜间节目听来的见识，或者一点玩笑。
2. 只从他点的里面听，不添他没点的事。不认定他累、忙、难、孤单，不认定他心里有事，也不用「累」「辛苦」「出口」「逃」「松绑」「放松」「治愈」「喘口气」这类词——它们替他认定了日子里有要躲的东西。不评价他，不下结论（不说「你是一个……的人」「你一定……」）。拿不准的，用「听着像」「我猜」轻轻带过（不必句句这样开头）。
3. 他点得少，你就说得少；他点了「不想说」，那一页就别碰。
4. 不提问，也不请他多说——那一句节目会接着说。
5. 一共不超过40个字。
例（是别的来访者的，只学分寸，不抄字）：
他点的是：现在 在上学 → 读研；平常喜欢 睡觉、游戏 → 主机。
✗ 你在读研，喜欢睡觉和打游戏。（把标签念回来）
✗ 读研很辛苦吧，记得多休息。（替他认定难处，还说教）
✗ 白天埋头论文，晚上靠游戏放松，一个懂得给自己留出口的人。（替他认定要躲，还下结论）
✓ 白天对着论文，晚上握着手柄。睡觉排第一，我记住了。
他点的是：现在 退休了 → 养花种菜；平常喜欢 吃 → 下厨。
✓ 菜是自己种的，饭是自己做的，从地里到锅里，不过别人的手。
说完另起一行，只写「|||」。`;
  } else {
    const before = [hasPicks(p) ? (en ? `They tapped on the bubbles first:\n${picksLines(p, en)}` : `他先在泡泡上点了：\n${picksLines(p, en)}`) : "", talkOf(t).length > 1 ? `${en ? "What was said on the line so far (their own words):" : "你们刚才在电话里说的（他的原话）："}\n${talkLines(t.slice(0, -1), en)}` : ""].filter(Boolean).join("\n");
    const asked = t.at(-1)?.q || "";
    task = stage === "open"
      ? en
        ? `${before}
${asked ? `You said: "${asked}"\n` : ""}They have just said: "${said}"

Now it's your turn:
1. First, one sentence that takes in what they just said. You may use one of their words, but above all say one thing you hear in it — a concrete thing or a picture. Only what they said, nothing added; no judging, no consoling, no advice; never assume they are tired, struggling or lonely.
2. Then it's for you to decide:
   - If there is one thing in it worth asking after (a thing, a person, a moment), ask one short question about it — only one, only about what they raised themselves, easy to answer in a breath, ending with a question mark. Never "why", never "how did that feel", never yes-or-no, nothing they didn't bring up (not "one evening lately", not "what's within reach", not "what's on your mind"). Then a new line with "|||ASK", then one or two short replies they might give (at most 6 words each, in their voice, true to what they said), split by "|".
   - If they said something like "nothing much", "all good", "just looking", or have said all they want to: take it in briefly, no picture forced, nothing asked (e.g. "Nothing much is a stretch of days too.", "All good, then good."), and end with "${CLOSE.en}" Then a new line with only "|||DONE".
3. At most 45 words before the "|||".`
        : `${before}
${asked ? `你刚才说：「${asked}」\n` : ""}他刚说：「${said}」

现在轮到你：
1. 先用一句话接住他刚说的：可以用他的一个词，但更要说出一句你听出来的东西，一样具体的东西或一个画面。只用他说的，不添他没说的；不评判，不安慰，不给建议，不认定他累、难、孤单。
2. 然后由你决定：
   - 他说的里面有一样值得多问一句的（一件事、一个人、一样东西、一个时候），就顺着它问一个短问题：只问一个，只问他自己提起的，一口气答得上来，用「？」结尾。不问「为什么」「感觉怎么样」，不问是或否，不问他没提起的事（不问「最近的一个晚上」「你手边有什么」「有什么心事」）。问完另起一行，写「|||ASK」，再写一到两个他可能回你的短话（每个不超过10个字，用他的口吻，贴着他说的），用「|」隔开。
   - 他说的是「没什么」「挺好的」「就这样」「随便看看」这类，或者话已经说完了：短短接住就好，不硬找画面，不追问（如「没什么，也是一段日子。」「挺好的，那就是好。」），最后一句是「${CLOSE.zh}」然后另起一行，只写「|||DONE」。
3. 「|||」之前不超过50个字。`
      : en
        ? `${before}
You asked: "${asked}" They answered: "${said}"

Now it's your turn, and the last thing you say at the gate: ask nothing more. In one or two sentences take in what they just said — you may use one of their words, but above all say one thing you hear in it. Only what they said, nothing added; no judging, no consoling, no advice; never assume there is something else on their mind, or that they are tired or struggling, or that they did it in spite of anything. End with "${CLOSE.en}" Then a new line with only "|||DONE".
Example (another visitor's — learn the measure): you asked "Is your kit packed?" They said "Nearly."
✗ Nearly — though some part of you hasn't quite landed yet. (deciding something is on their mind)
✓ Nearly. Then all that's left is the door.
At most 40 words before the "|||".`
        : `${before}
你刚才问他：「${asked}」他答：「${said}」

现在轮到你，这是你在门口的最后一句：什么也别再问。用一两句接住他刚说的——可以用他的一个词，但更要说出一句你听出来的东西。只用他说的，不添；不评判，不安慰，不给建议，不认定他心里还有别的事、累或者难。最后一句是「${CLOSE.zh}」然后另起一行，只写「|||DONE」。
例（别的来访者的，只学分寸）：你问「装备收拾好了吗？」他答「差不多了」。
✗ 差不多了，就是心里还有一小块没落地。（替他认定心里有事）
✓ 差不多了，那就只差出门那一下。
「|||」之前不超过45个字。`;
  }
  return [{ role: "system", content: `${HER[en ? "en" : "zh"]}\n\n${task}${care}` }, { role: "user", content: said || (en ? "(nothing)" : "（没说什么）") }];
}

/**
 * Her turn on the line, as the request asks for it: which turn it is, what they just said, and the messages for a
 * quick voice — none when the turn needs no model (the words that put the show down, or both pages skipped).
 */
export function callTurn({ lang, picks, turns, text }) {
  const en = lang === "en";
  const p = cleanPicks(picks), t = cleanTurns(turns);
  const said = clean(text, 400);
  if (said && t.at(-1)?.a !== said) t.push({ q: "", a: said, k: talkOf(t).length ? "more" : "open" });
  const stage = stageOf(t);
  const base = { lang, stage, picks: p, text: t.at(-1)?.a || "", turns: t, cap: CAP[stage][en ? "en" : "zh"] };
  if (careIn(base.text, p.own, ...t.map((x) => x.a))) return { ...base, care: true, messages: null };
  if (stage === "picks" && !hasPicks(p)) return { ...base, messages: null };
  return { ...base, messages: callMessages(lang, p, t, stage) };
}

/** What may be shown of her turn so far (the server streams it as it grows). */
export const streamCut = (raw, lang) => spoken(raw, lang);

/**
 * Her turn as it is said: `line`; `ask`, whether it ends on her one question; `done`, the call is over (faces next);
 * `care`, the show is put down (CARE_LINE, as written); `chips`, a reply or two they might give to her question.
 */
export function saneCall(raw, { lang, stage = "open", picks = null, turns = [], text = "", care = false, cap = 60 } = {}) {
  const en = lang === "en", k = en ? "en" : "zh";
  const tail = String(raw || "").split("|||")[1] || "";
  const mark = (tail.match(/^\s*(ASK|DONE|CARE)\b/i)?.[1] || "").toUpperCase();
  const said = spoken(raw, lang);
  if (care || mark === "CARE" || HOTLINE.test(said)) return { line: CARE_LINE[k], ask: false, done: false, care: true, chips: [] };
  const join = (list) => list.join("").replace(/\s+/g, " ").trim();
  const parts = sentencesOf(upTo(said, cap, en), en).filter((s) => s.trim());
  if (stage === "picks") {
    const p = picks ? cleanPicks(picks) : null;
    const line = join(parts.filter((s) => !asks(s, en))) || (p && !hasPicks(p) ? (p.now.some((s) => NOT_SAY.test(s)) ? FALLBACK.unsaid[k] : FALLBACK.none[k]) : FALLBACK.picks[k]);
    return { line, ask: false, done: false, care: false, chips: [] };
  }
  const found = parts.findIndex((s) => asks(s, en));
  const q = found >= 0 ? found : mark === "ASK" ? parts.length - 1 : -1;
  if (stage === "open" && q >= 0 && !PRESUME[k].test(parts[q])) {
    const chips = mark === "ASK" ? [...new Set(tail.replace(/^\s*ASK\b/i, "").split(/[|｜\n]/).map((s) => clean(s.replace(/^[\s\d.、:：\-*·"「『“]+|["」』”。.]+$/g, ""), 60)))]
      .filter((s) => [...s].length >= 1 && [...s].length <= (en ? 40 : 12) && !careIn(s)).slice(0, 2) : [];
    return { line: join([...parts.slice(0, q), asked(parts[q], en)]), ask: true, done: false, care: false, chips };
  }
  let line = join(parts.filter((s) => !asks(s, en)));
  if (!line) line = stage === "more" && text ? FALLBACK.more[k] : FALLBACK.open[k];
  if (!CLOSED[k].test(line)) line = `${line}${en ? " " : ""}${CLOSE[k]}`;
  return { line, ask: false, done: true, care: false, chips: [] };
}

// ---- what she writes: the passport, its first stop, the reading -------------------------------------------------

/** Each host as a sentence names him, to tell whether a reason speaks of the life it is for. */
const HOST = Object.freeze({ melies: /梅里爱|M[ée]li[èe]s/i, vangogh: /梵高|文森特|Van Gogh|Vincent/i, lishizhen: /李时珍|Li Shizhen/i, xiyou: /孙悟空|悟空|大圣|Wukong|Monkey King/i });
const NAME = Object.freeze({ melies: ["梅里爱", "Méliès"], vangogh: ["梵高", "Van Gogh"], lishizhen: ["李时珍", "Li Shizhen"], xiyou: ["悟空", "Wukong"] });
/** The one of his true things (DAYS) that can stand alone as a reason, when hers can't be kept. */
const PLAIN_DAY = Object.freeze({ melies: [0, 0], vangogh: [2, 2], lishizhen: [3, 3], xiyou: [2, 3] });
const SAYS_SEEN = /被(人)?看见|\b(be|being|been|get|gets|got|feel|feels|felt) seen\b/i;
const SAYS_DREAM = /梦|\bdream/i;
const unsaid = (s, en) => sentencesOf(s, en).filter((x) => !SAYS_SEEN.test(x) && !SAYS_DREAM.test(x)).join("").trim();

/** At most `max` characters, Latin words kept whole. */
function clip(s, max) {
  const chars = [...String(s || "").trim()];
  if (chars.length <= max) return chars.join("");
  const cut = chars.slice(0, max).join(""), at = cut.lastIndexOf(" ");
  return (/[\u4e00-\u9fff]/.test(cut) || at < max / 2 ? cut : cut.slice(0, at)).trim();
}
/** How much of `a` is found in `b` (0…1): its pairs of characters, or in English its words of three letters or more. */
function near(a, b, en) {
  if (en) {
    const words = String(a).toLowerCase().match(/[a-z0-9']{3,}/g) || [];
    const theirs = new Set(String(b).toLowerCase().match(/[a-z0-9']{3,}/g) || []);
    return words.length ? words.filter((w) => theirs.has(w)).length / words.length : 0;
  }
  const strip = (s) => String(s).replace(/[\s\p{P}\p{S}]+/gu, "");
  const x = strip(a), y = strip(b);
  if (!x) return 0;
  if (x.length === 1) return y.includes(x) ? 1 : 0;
  const pairs = [...x].slice(0, -1).map((c, i) => c + x[i + 1]);
  return pairs.filter((pr) => y.includes(pr)).length / pairs.length;
}
/** All they gave, as one text: what a passport may carry of theirs is checked against it. */
const sourceOf = (p, t) => [...p.now, ...p.likes, p.own, ...t.map((x) => x.a)].filter(Boolean).join("\n");
/** A word that is no thing of theirs ("挺好的"), kept off the passport's list of what she wrote down. */
const FILLER = /^(没什么|没啥|挺好的?|还好|一般|就这样|随便看看|不想说|nothing much|all good|fine|just looking( around)?|rather not say)[。.!！]?$/i;
/** The frame around their words in a reason ("你说……", "you tapped…"): not counted as theirs. */
const FRAME = { zh: /你说的?|你点了?|你选了?|你|平常|喜欢|现在|在|的|了|说|还|也|都/g, en: /\b(you|said|told|tapped|chose|mentioned|me|that|like|likes|these|days|usually)\b/gi };

/** The lives open on the plaza, each with its own work, whose work sits nearest it, and the true things he may say. */
function livesFor(lang, open) {
  const en = lang === "en";
  return open.filter((id) => LIVES[id] && DAYS[id]).map((id) => {
    const who = String(LIVES[id][en ? "en" : "zh"]).split(en ? " — " : "——")[0];
    return en
      ? `- ${id}: ${who}. ${fitsNow()[id]?.en || ""}. True things of his days you may say: ${DAYS[id].en.map((d) => `"${d}"`).join("; ")}.`
      : `- ${id}：${who}。${fitsNow()[id]?.zh || ""}。可以拿来说的他的真事：${DAYS[id].zh.map((d) => `「${d}」`).join("")}。`;
  }).join("\n");
}
/** What they like can bring them near a host too (a hint for her, not a table: she chooses). */
function likesHint(lang, open) {
  const en = lang === "en";
  const near = {
    melies: ["喜欢看电影、自己拍东西的，离梅里爱近", "people who love films or shoot their own are near Méliès"],
    vangogh: ["画画、看展、拍照的，离梵高近", "people who draw, go to exhibitions or take photographs are near Van Gogh"],
    lishizhen: ["花草、种菜、下厨、爱吃的，离李时珍近", "people who grow plants or vegetables, cook or love food are near Li Shizhen"],
    xiyou: ["爱到处走、旅行、打游戏的，离悟空近", "people who wander, travel or play games are near Wukong"],
  };
  const list = open.filter((id) => near[id]).map((id) => near[id][en ? 1 : 0]);
  return list.length ? (en ? `What they like counts too: ${list.join("; ")}. A hint, not a rule — you judge.` : `他喜欢的东西也算：${list.join("；")}。只是参考，由你判断。`) : "";
}

/** The passport for someone who gave nothing: a gentle name, and the room that is best for just looking. */
export function plainPassport(lang, open = ["melies"]) {
  const en = lang === "en";
  const suggest = open.includes("melies") ? "melies" : open[0] || "melies";
  return {
    portrait: en ? "They tapped nothing and said little: just looking around, it seems. Don't press; let them walk through lightly." : "他什么也没点，也没多说，像是来随便看看的。别往深里问，让他轻轻松松走一趟。",
    who: "",
    title: en ? "Someone just looking around" : "来随便看看的人",
    line: en ? "You didn't say much, so I haven't written much." : "你没多说，我也就不多写。",
    keywords: [], details: [], suggest,
    why: suggest === "melies" ? (en ? `Just looking? Then Méliès first — ${DAYS.melies.en[0]}.` : `随便看看，就先去梅里爱那儿——${DAYS.melies.zh[0]}。`) : plainWhy(suggest, lang),
  };
}
/** A reason that is only his true thing, plainly (when hers couldn't be kept). */
function plainWhy(id, lang) {
  const en = lang === "en", day = DAYS[id]?.[en ? "en" : "zh"]?.[PLAIN_DAY[id]?.[en ? 1 : 0] ?? 0];
  if (!day) return "";
  return en ? `${day.replace(/^he\b/i, NAME[id][1])}.` : `${day.replace(/^他/, NAME[id][0])}。`;
}

/** Their passport, its first stop and a short first reading, written while they choose a face. */
export function portraitMessages({ lang, life, avatar = "", open = ["melies"] }) {
  const en = lang === "en";
  const p = cleanPicks(life?.picks), t = cleanTurns(life?.turns);
  if (!hasPicks(p) && !talkOf(t).length) return null;
  const ids = open.join("|");
  const sys = en
    ? `${HER.en}
They rang in a moment ago. Now they are choosing a face, and you write their Life Passport and choose their first stop. What they gave you:
${heard(p, t, en)}

The lives open on the plaza:
${livesFor(lang, open)}

Choose the first stop yourself: read all they gave you, then choose the host one of whose true things sits nearest it. What they do counts most (code, mending, making → the man who turned a projector into a camera; drawing, design, writing → the painter; doctors, nurses, carers, people facing exams → the physician; one hurdle after another, out on the road → Wukong). ${likesHint(lang, open)} Someone who gave you almost nothing goes to Méliès: there is a show the moment you walk in. Go only by what they gave; never assume they have troubles.
Wherever you write of them, say "you" — never "he" or "she". Reply with ONLY a JSON object:
{"who": "who they are, in a few words, from what they tapped and said (e.g. 'someone who writes code', 'a master's student', 'retired'); if they chose 'Rather not say' and said nothing else, 'Just looking around'",
 "title": "a name for them on their passport, at most 6 words, naming them (what they do, the days they live), not a thing or a place they mentioned; concrete, never flattering and never teasing (e.g. 'The runner who comes home to old films'); everything in it something they tapped or said — no hour, place or person added (they never said midnight: not 'gaming till midnight'); no he, she, his or her",
 "line": "one sentence, at most 18 words, to 'you': a picture you hear in what they gave — not their tags read back; the things in it only what they gave, no act or thing added; never that they are tired, struggling or lonely; no moral, never 'seen'; no he, she, his or her",
 "keywords": ["three things of their days, one to three words each, only what they tapped or said, in their words; fewer if they gave fewer"],
 "details": ["the concrete things they said or tapped that a host might use later, in their words, at most 8, most telling first; 'nothing much' or 'all good' is not a thing"],
 "portrait": "two or three short sentences for the hosts who will meet them: what they brought (in their words), how they talk, whether they want to talk more; mark anything read between the lines as a reading ('sounds like', 'it seems'); leave out what you aren't sure of",
 "suggest": "${ids}",
 "why": "one sentence, said aloud as you hand them the passport and tell them where to go first: first one thing of theirs, the shortest piece, only as they gave it ('You said you like old films', 'You tapped writing code'); then ' — '; then, beginning with that host's name, one of the true things listed under him above, which you may only shorten, never change (no new act, thing, place or year); then stop. Set the two side by side and say no more: never explain the likeness, never 'he'd understand' or 'you're alike', never 'seen', no lesson, never 'dream'. What meets is something in the days themselves (the same craft, the same wait, the same patience, the same bustle), never the same word turning up on both sides (✗ 'You said the noodle place by the station — Méliès kept a toy stall at Montparnasse station for years': only the word 'station' meets). Match the weight: if what they gave is light (a thing they like, an ordinary day), choose a true thing of his that is not heavy either — never set their light thing beside his hardship ('you like sleep' beside 'five hundred years under a mountain, no friend came'); at most 28 words (e.g. 'You said three in the morning in the stockroom — Li Shizhen knew every drawer, one medicine to each, all his life.')"}`
    : `${HER.zh}
他刚打进来跟你通了一会儿电话。现在他在挑一张脸，你给他写人生护照，定第一站。他给你的：
${heard(p, t, en)}

广场上开放的几段人生：
${livesFor(lang, open)}

第一站由你来定：读完他给的，挑一位主人——那个人有一件真事，和他给你的东西挨得最近。他做的事最要紧（写代码、修东西、自己动手的，找自己改装过摄影机的梅里爱；画画、设计、写东西的，找梵高；医生护士、照顾人的、在备考的，找李时珍；一关一关往前闯的、在外面跑的，找悟空）。${likesHint(lang, open)}什么都没给你的，就去梅里爱那儿：一进门就有戏看。只看他给了什么，不认定他有难处。
写到他的地方都用「你」，不用「他」「她」。只输出一个 JSON 对象：
{"who": "他是谁，几个字，从他点的和说的里来（如「写代码的人」「读研的学生」「退休的老人」「在家带孩子的人」）；他点了「不想说」又没说别的，就写「来随便看看的人」",
 "title": "护照上给他的称呼，不超过12个字，说的是他这个人（他做的事、他过的日子），不是他提到的某样东西或某个地方；具体，不恭维，也不打趣他（如「跑完步看老电影的人」）；里面的每一样都得是他点过或说过的，不添时辰、地方、人（他没说凌晨，就不写「打到凌晨」）",
 "line": "一句话，不超过30个字：你从他给的东西里听出来的一个画面——不是把他点的挨个念一遍；画面里的东西只用他给的，不添他没说的动作和东西；不认定他累、难、孤单；不讲道理，不说「看见」",
 "keywords": ["他日子里的三样东西，每样二到四个字，只取他点的或说的，用他的说法（如「写代码」「跑步」「老电影」）；不到三样就写几样"],
 "details": ["他说过或点过的、后面可能用得上的具体东西，用他的原词或他点的词，最多8条，要紧的在前；「没什么」「挺好的」这样的话不算东西"],
 "portrait": "两三句短读法，写给后面要接待他的几位主人：他带来了什么（用他的说法），话多话少，想不想多聊；话里读出来的东西标明「听着像」「像是」，拿不准的就不写",
 "suggest": "${ids}",
 "why": "一句话，是你把护照递给他、告诉他先去哪时说出口的：前半句是他给的一样东西，只取最短的一截，照他给的样子（如「你说平常喜欢看老电影」「你点了写代码」）；接着「——」；后半句以那位主人的名字起头，说上面列在他名下的一件真事，只许缩短，不许改成别的事（不新添动作、东西、地方、年份）；说完就停。两件放在一起就好：不解释像在哪，不说「他会懂」「你们很像」，不说「看见」，不讲道理，不写「梦」字。相通的是日子里的那一点（同一种手艺、同一种等、同一种耐心、同一种热闹），不是两边碰巧有同一个词（✗「你说车站边上有家面馆——梅里爱在蒙帕纳斯车站守了很多年玩具糖果摊」只是碰到同一个「车站」）。分量要相当：他给的是轻松平常的事（一样喜好、一个平常的日子），就挑那位主人一件同样不沉的真事，别把他的轻松事放在主人的苦难旁边（「喜欢睡觉」旁边不放「压了五百年，没人来看」）；不超过40个字（如「你说凌晨三点在库房——李时珍一个抽屉一味药，认了一辈子。」）"}`;
  const face = avatar ? (en ? `\n(The face they chose: ${avatar}.)` : `\n（他挑的脸：${avatar}。）`) : "";
  return [{ role: "system", content: `${sys}\n${voiceRules(lang)}` }, { role: "user", content: `${en ? "Write their passport." : "给他写护照。"}${face}` }];
}

/** Her reason for the first stop, kept true: their half only as they gave it, his half one of his true things. */
function whyOf(raw, { lang, suggest, source }) {
  const en = lang === "en";
  const why = upTo(unsaid(clean(en ? raw : zhMarks(raw), 240), en), en ? 170 : 46, en).trim();
  const host = HOST[suggest];
  const at = host ? why.search(host) : -1;
  if (!why || at < 0 || Object.entries(HOST).some(([id, re]) => id !== suggest && re.test(why))) return "";
  const his = why.slice(at).replace(host, "");
  if (Math.max(...DAYS[suggest][en ? "en" : "zh"].map((d) => near(his, d, en))) < 0.75) return "";
  const theirs = why.slice(0, at);
  for (const m of theirs.matchAll(en ? /["“]([^"”]{2,80})["”]/g : /「([^」]{2,30})」/g)) if (near(m[1], source, en) < 0.8) return "";
  const own = theirs.replace(FRAME[en ? "en" : "zh"], " ").replace(/[\s\p{P}\p{S}]+/gu, en ? " " : "").trim();
  if (own && near(own, source, en) < 0.5) return "";
  // Two days set side by side because a word turns up in both (their station, his station) are not set side by side.
  if (echoes(own, his, en)) return "";
  return why;
}

/** Whether two halves share a word of substance: a pair of characters (Chinese), or a word of four letters or more. */
const COMMON = new Set(["一个", "一天", "很多", "自己", "没有", "一直", "时候", "他的", "一样", "每天", "一辈", "辈子"]);
const WORDS_OFF = new Set("that this with from they them their there have were what when your into just like only some years every".split(" "));
function echoes(a, b, en) {
  if (en) { const mine = new Set((String(a).toLowerCase().match(/[a-z']{4,}/g) || []).filter((w) => !WORDS_OFF.has(w))); return (String(b).toLowerCase().match(/[a-z']{4,}/g) || []).some((w) => mine.has(w)); }
  const strip = (s) => String(s).replace(/[^\u4e00-\u9fff]+/g, " ");
  const pairs = (s) => strip(s).split(" ").flatMap((run) => [...run].slice(0, -1).map((c, i) => c + run[i + 1]));
  const mine = new Set(pairs(a).filter((p) => !COMMON.has(p)));
  return pairs(b).some((p) => mine.has(p));
}

/** The passport as written, kept to the copy style: their things only, the first stop open, the reason true. */
export function sanePortrait(x, { lang, life = null, open = ["melies"] } = {}) {
  const en = lang === "en";
  const p = cleanPicks(life?.picks), t = cleanTurns(life?.turns);
  if (!hasPicks(p) && !talkOf(t).length) return plainPassport(lang, open);
  const source = sourceOf(p, t);
  const theirs = (v, n, max) => [...new Set((Array.isArray(v) ? v : []).map((s) => clip(clean(s, 200).replace(/^["「『“]|["」』”]$/g, ""), max)).filter((s) => s && !careIn(s) && !FILLER.test(s) && near(s, source, en) >= 0.5))].slice(0, n);
  const suggest = open.includes(x?.suggest) ? x.suggest : open.includes("melies") ? "melies" : open[0] || "melies";
  const who = clip(clean(x?.who, 80), en ? 32 : 12) || clip(clean(life?.who, 60), en ? 32 : 12) || (en ? "Someone who rang in" : "打进来的人");
  // To "you" only: a passport that says he or she has guessed who they are.
  const say = (s, max) => { const v = clean(upTo(unsaid(clean(en ? s : zhMarks(s), 300), en), max, en), max + 20); return (en ? /\b(he|she|his|her|him|hers)\b/i : /[他她]/).test(v) || careIn(v) ? "" : v; };
  const why = whyOf(x?.why, { lang, suggest, source });
  return {
    portrait: careIn(x?.portrait) ? "" : clean(x?.portrait, en ? 600 : 240),
    who: careIn(who) ? (en ? "Someone who rang in" : "打进来的人") : who,
    title: clip(say(x?.title, en ? 48 : 16), en ? 48 : 16) || who,
    line: say(x?.line, en ? 140 : 32),
    keywords: theirs(x?.keywords, 3, en ? 24 : 8),
    details: theirs(x?.details, 8, en ? 48 : 16),
    suggest,
    why: why || plainWhy(suggest, lang),
  };
}

/** The whole reading of them, for every host who will meet them (docs/ai-native.md §3.2): written once the call is over. */
export function readingMessages({ lang, life, open = ["melies"] }) {
  const en = lang === "en";
  const p = cleanPicks(life?.picks), t = cleanTurns(life?.turns);
  if (life?.care || !hasPicks(p) && !talkOf(t).length) return null;
  const sys = en
    ? `${HER.en}
Here is the whole of a call that just came in to you: the bubbles they tapped and what they said, as they are.
${heard(p, t, en)}

Write your reading of them. They will never see it: it is for the hosts who will meet them next — Méliès, Van Gogh, Li Shizhen, Wukong each read it before they welcome them, to decide how to meet them: what to show them, how far to go, what to offer them.
How to write it:
- Plain prose, one paragraph or a few; no headings, no lists, no fields to fill. The more they gave, the longer (at most 220 words); if they only tapped a few bubbles, two or three sentences.
- First what they brought, in their own terms: what they tapped, what they said — a thing, a person, a mood, or only "all good".
- Then how they talk: a lot or a little, straight or round about, open to a joke or not, wanting to talk more or not.
- What is there but not said may be written, each time marked as a reading ("sounds like", "I'd guess"); if unsure, leave it out; for someone who said little, leave this out. Never read "all good" as "not good really"; never assume they are tired, struggling, lonely or troubled.
- Last, where they might meet one of the hosts — only against these checked true things; if nothing fits, say nothing:
${livesFor(lang, open)}
- Nothing of their age, sex or looks (you don't know); invent no person, thing or event; no labels, no praise.
Reply with only the reading.`
    : `${HER.zh}
下面是刚才打进来的这通电话的全部：他点的泡泡、他说的话，都是原样。
${heard(p, t, en)}

写一段你对他的读法。这段话他看不到，是写给后面几位主人的：梅里爱、梵高、李时珍、悟空接待他之前都会读它，用来决定怎么接待他——给他看什么、说到哪一步、怎么出选项。
怎么写：
- 自然的话，一段或两三段，不分条，不加标题，没有要填的栏。他给得多就写长一点（最多三百字），只点了几个泡泡就两三句。
- 先写他带来了什么，用他自己的说法：点了什么，说了什么——可能是一件事、一个人、一种心情，也可能只是「挺好的」。
- 再写他说话的样子：话多话少，绕不绕，开不开得起玩笑，想不想多聊。
- 话里有、他没明说的东西可以写，每一处都标明是读法（「听着像」「我猜」）；拿不准就不写；话少的人这一段就空着。不要把「挺好的」读成「其实不好」，不认定他累、难、孤单、心里有事。
- 最后写他和几位主人可能相通的地方，只对照下面这些核过的真事；没有就不硬凑：
${livesFor(lang, open)}
- 不写他的年龄、性别、长相（不知道）；不编他没说的人、东西和事；不给他贴标签，不夸他。
只输出这段读法。`;
  return [{ role: "system", content: sys }, { role: "user", content: en ? "Write the reading." : "写读法。" }];
}

/** The reading as kept: plain prose (no headings or list marks), bounded, never the words that put the show down. */
export function saneReading(text, lang) {
  const en = lang === "en";
  const plain = String(text || "").replace(/^\s{0,3}#+\s*/gm, "").replace(/^\s*[-*•]\s+/gm, "").replace(/\*\*?([^*]+)\*\*?/g, "$1");
  const s = clean(plain, en ? 1800 : 720);
  return careIn(s) ? "" : s;
}
