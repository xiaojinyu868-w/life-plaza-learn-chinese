import * as OLD from "./old/cast.mjs";

/**
 * LIFE_CONTEXT=old: every host, the guide on the plaza and her last word are told about the visitor as they were
 * before the gate kept a reading (server/spaces/old/, word for word) — for side-by-side runs, and as the way back.
 * Read at each call, so a process can run both.
 */
export const oldContext = () => /^old$/i.test(String(process.env.LIFE_CONTEXT || "").trim());

/**
 * The visitor avatars (Tripo characters v1…v8) as words: what the planner and the image model are told about who
 * walked in. `pose` is the clean A-pose render the shot uses as its likeness reference.
 */
export const AVATARS = Object.freeze({
  v1: { pose: "v1.png", zh: "穿奶油色西装的年轻女生", en: "a young East Asian woman with long wavy dark hair, in a cream blazer and cream trousers" },
  v2: { pose: "v2.png", zh: "穿藏青连帽衫的年轻男生", en: "a young East Asian man with short tousled black hair, in a navy hoodie and dark cargo trousers" },
  v3: { pose: "v3.png", zh: "穿奶白卫衣和格子短裙的女大学生", en: "a young East Asian woman with long dark hair tied up, in a cream hoodie, a grey pleated skirt and white socks" },
  v4: { pose: "v4.png", zh: "穿明黄色外套的年轻男生", en: "a young East Asian man with short black hair, in a bright yellow rider's jacket and dark cargo trousers" },
  v5: { pose: "v5.png", zh: "穿浅蓝刷手服的年轻女生", en: "a young East Asian woman with her dark hair in a low bun, in pale blue scrubs with a stethoscope around her neck" },
  v6: { pose: "v6.png", zh: "穿白色厨师服的年轻男生", en: "a young East Asian man in a white chef jacket, a tall white chef hat and a dark apron" },
  v7: { pose: "v7.png", zh: "戴眼镜、穿粉色针织开衫的年轻女生", en: "a young East Asian woman with glasses and long dark hair, in a pink knit cardigan and a long beige skirt" },
  v8: { pose: "v8.png", zh: "穿亚麻衬衫的年轻男生", en: "a young East Asian man with neat black hair, in a linen overshirt, a white tee and olive trousers" },
});

/**
 * How the visitor looks, for a host's prompt: the face and clothes they picked at the gate — what he can see, never a
 * sign of their trade or of how they live.
 */
export function lookOf(lang, avatar) {
  const a = AVATARS[avatar] || AVATARS.v2;
  return lang === "en"
    ? `They look like ${a.en} — the face and clothes they picked at the gate, not their trade and no sign of how they live: you may name a colour you see, once at most in this visit; never guess from it what they do.`
    : `他的样子：${a.zh}——这是他在门口挑的一张脸、一身衣服，不是他的职业，也不说明他过什么日子：可以照实说一种你看见的颜色，这一趟最多一处；不凭它猜他是做什么的。`;
}

/**
 * The plaza's theme, shared by every host: the long years before anyone saw you. Each host lived them (`unseen`); the
 * visitor may be in such a stretch or not, and is never told they are: a host who hears one knows it from inside, and
 * one who doesn't lets them see his.
 */
export function theme(lang, unseen) {
  if (oldContext()) return OLD.theme(lang, unseen);
  return lang === "en"
    ? `The Life Plaza is about "the long years before anyone saw you". That is your own story: ${unseen}. Whoever walks in may not be in such a stretch at all — they may be carrying something, or their days may be going well and they have only come to look. Don't decide which for them. If they bring a stretch of days nobody sees, you know it, because you lived one; if they don't, let them see yours, and make something with their own hands to take away. Never say the theme out loud; no lectures, no slogans, and never claim to know more of their life than they told you.`
    : `「人生广场」讲的是「被看见之前的漫长时光」。这是你自己的事：${unseen}。走进来的人，未必也在这样一段日子里：他可能正熬着什么，也可能日子过得挺好，只是来看看。别替他认定。他要是带来了一段没人看见的日子，你认得它，因为你熬过；他没有，就让他看看你的那一段，亲手做一样东西带走。主题不说破，不说教，不喊口号，也不要假装比他说的更了解他。`;
}

/**
 * How the plaza writes (docs/research/copy-style.md §6), for any prompt whose words the visitor may keep. The guide
 * uses it; a host can append it after its persona. Taking a visitor in is saying what was understood, not giving their
 * words back (docs/ai-native.md §2.5).
 */
export function voiceRules(lang) {
  if (oldContext()) return OLD.voiceRules(lang);
  return lang === "en"
    ? `[The Life Plaza voice]
Whatever you write, the visitor may keep — on the back of a film card, in a letter, on a prescription. Write it this way:
1. Speak in things: objects, colours, numbers, places, hours. Not "dreams", "journey", "hard work", "passion", "meaning", "growth". When you reach for one of those, use a real thing instead.
2. One sentence, one thing. Short sentences, each said in one breath. Three at most at a time.
3. Take it in, then answer. What you take in is what you understood: you may use one word of theirs, but never give their words back one by one. Then set one true thing from your own life beside it, or look at the same thing from another side. A fact, not a lesson. If they brought nothing, don't force it: speak of your room and your things.
4. Take them seriously; don't console. No cheering, praising, judging, summing up life, or deciding who they are. Never "you've got this", "you're amazing", "believe in yourself", "everything happens for a reason", "you deserve it".
5. Stop at the important part and leave room. Never explain your own metaphor. Don't say "seen" out loud; let them feel it.
6. Invent nothing. Your own years, places and things exactly right; of their life, only what they said or picked, not a word added. The guide's reading is her guess: never say it as their fact. If they didn't say anything is hard, don't treat it as hard.
7. No exclamation marks in a row, no emoji, no lists of three.`
    : `【人生广场的文风】
你写的每一句，来访者都可能收起来：印在胶片卡背面，写进信里，开进方子里。照下面写：
1. 用东西说话。物件、颜色、数字、地名、时辰。不说「梦想、坚持、努力、意义、美好、成长、温暖」这类大词；想用的时候，换成一样具体的东西。
2. 一句只说一件事。句子短，一口气说得完。一次最多三句。
3. 先接住，再回应。接住的是你听懂的那一点：可以用他一个原词，但不把他的话挨个念回来。再把你自己一生里的一件真事放在旁边，或者换一个角度看同一件事。用事实，不用道理。他什么也没带来，就不硬接，说你的屋子、你的东西。
4. 认真对待，不安慰。不劝，不夸，不评价，不总结人生道理，不替他下结论。不说「加油」「你很棒」「相信自己」「一切都会好的」「你值得」「未来可期」。
5. 说到要紧处就停，留一点白，不解释自己的比喻。不要把「被看见」说出口，让他自己感到。
6. 不编。你的一生，年份、地名、物件都要对；他的一生，只用他说过的、点过的，没说过的一个字也不添。引路人的读法是她的猜测，不当他的事说；他没说有难处，就别当他有。
7. 不用感叹号连用，不用表情符号，不用排比，不用「～」。`;
}

/** Keep visitor text short and plain before it goes into a prompt. */
export function clean(text, max = 160) {
  return String(text || "").replace(/[\u0000-\u001f<>`{}]/g, " ").replace(/\s+/g, " ").trim().slice(0, max).trim();
}

/** Chinese is quoted in 「」 (copy-style §4.11): a model's "…" or “…” in a Chinese line is set right. */
export const zhQuotes = (s) => String(s || "").replace(/"([^"]{1,60})"/g, "「$1」").replace(/“([^”]{1,60})”/g, "「$1」");

/**
 * Words of not wanting to live or of hurting oneself (src/landing/landing.js keeps the same list). Wherever they are
 * said the show is put down: nothing quotes them back, and whoever speaks next says one thing plainly, with a real
 * number to call (docs/research/copy-style.md §4.10). Figures of speech stay out ("想死你了", "跳楼价", "自杀式复习");
 * what the list misses, the models are asked to notice.
 */
const CARE_WORDS = [
  /不想活(?![成得在出])|活不下去|活着(真|也|都)?没(有)?(意思|意义|盼头)|想死(?![你您他她它我])|寻死|自杀(?!式)|轻生|自尽|自残|(想|要|会|忍不住)(去)?伤害自己|了结(自己的?)?生命|了结自己(?!的)|结束(自己的?)?生命|死了算了|不如死了|割腕|跳楼(?!价|大?甩卖|大?促销)|上吊|再也不想醒|不想再醒/,
  /\bkill myself\b|\bsuicid(e|al)\b|\bend(ing)? my (own )?life\b|\b(to|gonna|wanna) end it all\b|\b(want|wanna|wanted) to die\b|\b(don'?t|do not|no longer) want to (live|be alive)\b|\bno reason to (live|go on)\b|\bbetter off (dead|without me)\b|\bself[- ]?harm|\b(want|wanted|going|gonna|trying|tried) to (hurt|harm) myself\b|\bharming myself\b/i,
];
export const careIn = (...texts) => texts.some((t) => CARE_WORDS.some((r) => r.test(String(t || ""))));
/** What is said to them then, word for word as the copy style has it. */
export const CARE_LINE = Object.freeze({
  zh: "这件事我想认真对你说：请现在就去找一个你信得过的人。也可以打 12356 心理援助热线，会有人接。",
  en: "I want to say this plainly: please reach out to someone you trust, now. In the US you can call or text 988; in the UK and Ireland, Samaritans are on 116 123.",
});
/** Whether a visitor's life (from cleanLife) carries those words, or the gate's notes said so. */
export const careOf = (l) => !!l.care || careIn(l.story, l.answer, l.picks?.own, ...l.turns.map((t) => t.a));

/**
 * Which question of the gate a turn answers: what they do, which line of work (when "an office" was all they said),
 * the open question, one of her questions after it, what was said on the line after the show was put down (between
 * her and them: no host is told it), or the sentence the bubbles they picked were strung into (docs/gate-call.md §6;
 * not their words — `picks` says what they picked).
 */
const TURN_KINDS = ["who", "job", "open", "more", "care", "picks"];

/**
 * What the visitor brought to the exchange, as the gate gathered it: who they are (`who`: their work as they put it,
 * its `field`, and the kind of work they picked, `domain`), the thing on their mind in their own words (`story`), the
 * guide's first question and their answer (`ask`, `answer`), the whole conversation (`turns` [{ q, a, k }]), the
 * concrete things they said, copied in their own words (`details`), what they want or wait for (`wish`), how they are
 * (`mood`), what the guide wrote on their passport (`title`, `line`, `unseen`, `keywords`), the bubbles they picked
 * (`picks` { now, likes, own }: what they are doing now, what they like, what they wrote under "other"), the guide's
 * reading of them in her own words (`portrait`, docs/ai-native.md §3.2), and `care`: they spoke of not wanting to
 * live, or of hurting themselves (see careIn). Visitors from older gates have only some of this; every field is there,
 * empty when unknown. Only plain, bounded text survives.
 */
export function cleanLife(life) {
  const l = life && typeof life === "object" ? life : {};
  const list = (v, n, max) => (Array.isArray(v) ? v : []).map((x) => clean(x, max)).filter(Boolean).slice(0, n);
  const p = l.picks && typeof l.picks === "object" ? l.picks : {};
  const turns = (Array.isArray(l.turns) ? l.turns : []).slice(0, 8).map((t) => ({ q: clean(t?.q, 160), a: clean(t?.a, 400), ...(TURN_KINDS.includes(t?.k) ? { k: t.k } : {}) })).filter((t) => t.a);
  return {
    domain: clean(l.domain, 24), role: clean(l.role, 40), stage: clean(l.stage, 24),
    story: clean(l.story, 400), ask: clean(l.ask, 120), answer: clean(l.answer, 300),
    title: clean(l.title, 48), line: clean(l.line, 160), unseen: clean(l.unseen, 160), keywords: list(l.keywords, 3, 14),
    who: clean(l.who, 40), field: clean(l.field, 24), details: list(l.details, 8, 48), wish: clean(l.wish, 100), mood: clean(l.mood, 24), turns,
    picks: { now: list(p.now, 4, 16), likes: list(p.likes, 10, 16), own: clean(p.own, 120) },
    portrait: clean(l.portrait, 1600),
    care: l.care === true,
  };
}

/** Their own words at the gate: the answers that are talk (not "what do you do", not the picks' sentence, not care). */
export const talkOf = (l) => l.turns.filter((t) => !["who", "job", "care", "picks"].includes(t.k));

/**
 * How much they brought: "none" (not a word, not a bubble), "little" (a bubble or two, a few words, "fine"), "some",
 * or "much" (a long stretch at once). A host who was told little says little of them.
 */
export function amountOf(l, extra = "") {
  const words = [...talkOf(l).map((t) => t.a), l.picks.own, ...(talkOf(l).length ? [] : [l.story, l.answer]), extra].filter(Boolean).join("");
  const latin = /^[\x00-\x7f]*$/.test(words);
  const n = [...words.replace(/[\s\p{P}\p{S}]+/gu, "")].length;
  if (!n && !l.picks.now.length && !l.picks.likes.length && !l.who) return "none";
  if (n <= (latin ? 40 : 14)) return "little";
  return n >= (latin ? 480 : 160) ? "much" : "some";
}

/**
 * A test for a few words being theirs as they said or picked them (punctuation, spaces and case aside): what is
 * pasted up as their own words is never anything else. Words of not wanting to live are never theirs to paste up.
 */
export function theirWords(l) {
  const flat = (s) => String(s || "").toLowerCase().replace(/[\s\p{P}\p{S}]+/gu, "");
  const said = talkOf(l).map((t) => t.a);
  const all = [...said, ...(said.length ? [] : [l.story, l.answer]), l.picks.own, ...l.picks.now, ...l.picks.likes]
    .filter((s) => s && !careIn(s)).map(flat).join("|");
  return (w) => { const f = flat(w); return !!f && !careIn(w) && all.includes(f); };
}

/** The bubbles they picked, as a line of the record ("" for none). */
export function picksLine(picks, en) {
  const q = (xs) => xs.map((x) => (en ? `"${x}"` : `「${x}」`)).join(en ? ", " : "");
  const parts = [
    picks?.now?.length && (en ? `right now: ${q(picks.now)}` : `他现在：${q(picks.now)}`),
    picks?.likes?.length && (en ? `they like: ${q(picks.likes)}` : `平常喜欢：${q(picks.likes)}`),
    picks?.own && (en ? `under "other" they wrote: "${picks.own}"` : `在「其他」里他自己写了：「${picks.own}」`),
  ].filter(Boolean);
  return parts.length ? (en ? `- The bubbles they picked: ${parts.join("; ")}` : `- 泡泡里他点的：${parts.join("；")}`) : "";
}

/**
 * The visitor's life for a host's prompt: the record (their words at the gate, the bubbles they picked) and the
 * guide's reading of them when there is one — then how to be with them: take in what was understood, never give
 * their words or their bubbles back one by one; presume nothing (no hardship they didn't speak of); say little of
 * someone who said little; never say the reading's guesses as their facts; give what they like a real place, as the
 * host's own offering; invent nothing. Words of not wanting to live are never handed on; the host is told plainly how
 * to be with them instead.
 */
export function lifeBrief(lang, life, identity = "", note = "") {
  if (oldContext()) return OLD.lifeBrief(lang, life, identity, note);
  const l = cleanLife(life);
  const en = lang === "en";
  const care = careOf(l);
  const keep = (s) => (care && careIn(s) ? "" : s);
  const who = l.who || l.role || clean(identity, 40);
  const lines = [];
  if (who || l.domain || l.stage) lines.push(en
    ? `- Who they are, what they do: ${[who, l.field && `field: ${l.field}`, l.domain && `they picked: ${l.domain}`, l.stage && `on that road: ${l.stage}`].filter(Boolean).join("; ")}`
    : `- 他是谁、做什么的：${[who, l.field && `领域：${l.field}`, l.domain && `他自己选的：${l.domain}`, l.stage && `在这条路上${l.stage}`].filter(Boolean).join("；")}`);
  const picked = keep(picksLine(l.picks, en));
  if (picked) lines.push(picked);
  const talk = talkOf(l).filter((t) => keep(t.a));
  const story = talk.length ? "" : keep(l.story || clean(note, 400));
  if (talk.length) {
    lines.push(en ? "- What they said at the gate, in their own words (the guide's lines are hers, not theirs):" : "- 他在门口说的话（原话；引路人的话是她说的，不是他的）：");
    for (const t of talk) lines.push(en ? `  ${t.q ? `The guide: "${t.q}" ` : ""}They: "${t.a}"` : `  ${t.q ? `引路人：「${t.q}」` : ""}他：「${t.a}」`);
  } else {
    if (story) lines.push(en ? `- What they told the guide, in their words: "${story}"` : `- 他跟引路人说的（原话）：「${story}」`);
    if (l.ask && keep(l.answer)) lines.push(en ? `- The guide asked: "${l.ask}" They answered: "${l.answer}"` : `- 引路人问他：「${l.ask}」他答：「${l.answer}」`);
    const details = l.details.filter(keep);
    if (details.length) lines.push(en ? `- Things they mentioned (their words): ${details.map((d) => `"${d}"`).join(", ")}` : `- 他说过的东西（原话）：${details.map((d) => `「${d}」`).join("")}`);
  }
  const portrait = keep(l.portrait);
  if (portrait) lines.push(en ? `- The guide's reading of them (her sense of them after listening, not their words; its guesses are never to be said as their facts): ${portrait}` : `- 引路人对他的读法（她听完写下的感觉，不是他说的话；里面的猜测不能当成他的事说出口）：${portrait}`);
  if (care) lines.push(en
    ? `- At the gate they spoke of not wanting to live, or of hurting themselves. Don't quote or repeat those words, and never make a scene or a metaphor of them; be plain and kind with them, neither jolly nor preaching. If they speak of it again, put the play down and say plainly: "${CARE_LINE.en}"`
    : `- 他在门口说起过不想活，或者想伤害自己。那些话不要引用、不要复述，也不要拿它做戏、做比喻；平平常常地待他，不逗他，也不劝他。他要是再说起，就放下戏，认真对他说：「${CARE_LINE.zh}」`);
  const amount = amountOf(l, story);
  if (!lines.length || amount === "none") return en
    ? `The visitor said nothing at the gate and picked no bubbles (or walked straight in). That is a way of coming too: don't ask, don't guess at anything on their mind; welcome them lightly as they are, and let your room, your own things and what they do with their own hands carry this stretch. Of their life, invent not a word.${care ? `\n${lines.at(-1)}` : ""}`
    : `这位访客在门口什么也没说，泡泡也没点（或者直接走了进来）。这也是一种来法：别追问，别猜他有什么心事，就照他眼前的样子轻松地接待他；让你的屋子、你自己的东西和他亲手做的那一下撑起这一段。他的一生，一个字也不编。${care ? `\n${lines.at(-1)}` : ""}`;
  const light = amount === "little";
  const how = en
    ? [
      "How to be with them (this matters more than any detail above):",
      light
        ? "1. They said only a little (or only picked a bubble or two). Then go lightly: say little of them, let them look at your things and do the thing with their hands; ask nothing, read nothing into it, don't fill in their words for them; say none of the reading's guesses."
        : `1. Understand them; take them in; don't parrot. First work out what they brought — a thing that happened, a person, a mood, a joke, or just "fine" — then answer it with your own life. You may use one word of theirs, but never hand their words or their bubbles back one by one: what you say aloud is what you understood. So no "you like…", "you said…", "you've just…", and never their story told again in their words (they said "ate it on the bus": not "you ate it on the bus before you came in").${amount === "much" ? " They said a great deal: take in the one or two things that matter most, and leave the rest." : ""}`,
      "2. Presume nothing. If they didn't say they are tired, afraid, struggling, holding on or waiting, don't say it for them; days that go well are days too. If they joke, take the joke.",
      ...(light ? [] : ["3. The reading is only for deciding how to be with them: what to show them, how far to go, what to offer them to choose. Its guesses are never said as their facts; if you must, say it as your own sense of them (\"the way I hear it…\"), once at most in this whole visit."]),
      `${light ? 3 : 4}. Give what they like a real place: in your welcome, in what you offer them to choose, in what you give them. It is something you bring them, never something of theirs at home or at hand (they picked "cats": you may say "I'll paint you a cat", never "your cat").`,
      `${light ? 4 : 5}. Never invent a person, a thing or an event of their life they didn't say or pick. What they told you happened when and as they told it: don't move it to today or tonight, and add no hour, season, weather, sky (a moon, stars) or number they didn't give; when and how they came here today, you don't know. The things they spoke of are not here with you: never say you see them (what you paint or make for them is another matter). How they do things here (quickly, without hesitating) you don't write; only what they did. Who they are (man or woman, someone's father or mother, their trade) only as they said it, never decided for them.`,
    ].join("\n")
    : [
      "怎么待他（比上面任何一处细节都要紧）：",
      light
        ? "1. 他只说了一点（或者只点了一两个泡泡）。那就轻轻的：少说他，多让他看你的东西、动手做那件事；不追问，不硬读，不替他把话说满；读法里的猜测一句也不说出口。"
        : `1. 读懂他，接住他，不复读。先想明白他带来的是什么——一件事、一个人、一种心情、一句玩笑，或者只是「挺好的」——再用你自己的一生去接。可以用他一个原词，但不要把他的原话、他点的泡泡挨个念回来；说出口的，是你听懂的那一点。所以不说「你喜欢……」「你说……」「你刚……」，也不把他讲的那件事照他的话再讲一遍（他说「在公交上吃完了」，你就别说「在公交上吃完了才进来」）。${amount === "much" ? "他说了很多：只接住最要紧的一两样，别的先放着。" : ""}`,
      "2. 不预设。他没说累、怕、难、在熬、在等，就别替他说；日子过得好，也是一段日子。他开玩笑，你就接玩笑。",
      ...(light ? [] : ["3. 读法只用来决定怎么待他：给他看什么、说到哪一步、让他挑什么。里面的猜测不能当成他的事说出口；真要说，就说成你自己的感觉（「我听着……」），这一趟里最多一处。"]),
      `${light ? 3 : 4}. 他喜欢的东西要有分量：欢迎他的话、让他挑的东西、送他的东西里，可以有它。那是你拿来给他的，不要说成他家里、他手边的哪一样（他点了「猫狗」，你可以说「我给你画一只猫」，不能说「你家那只猫」）。`,
      `${light ? 4 : 5}. 他没说过、没点过的人、事、东西，一个字也不编。他说过的事，就照他说的那个时候、那个样子：不挪到今天、今晚，不添他没给的时辰、季节、天气、天色（那时有没有月亮、星星）、数字；他是什么时候、怎么来到这儿的，你不知道。他说起的东西不在你这儿，不说你看见了它（你替他画的、做的不算）。他在你这儿做事时的样子（快慢、犹豫没有）你不写，只说他做了什么。他是谁（男女、父母子女、做哪一行），只照他自己说的，不替他定。`,
    ].join("\n");
  return en
    ? `The visitor came to trade a stretch of days with you. What the gate kept of them (a record — not blanks for you to fill one by one):\n${lines.join("\n")}\n${how}`
    : `这位访客是来和你交换一段日子的。门口记下的他（是记录，不是要你一处处去填的空）：\n${lines.join("\n")}\n${how}`;
}

/**
 * What the visitor and the host said to each other in this room (their last turns, kept by the server while the visit
 * lasts), for the gift: what they said here counts as much as what they said at the gate. Words of not wanting to
 * live are left out, and the host is told how to be with them instead.
 */
export function roomTalk(lang, talk) {
  const en = lang === "en";
  const turns = (Array.isArray(talk) ? talk : []).filter((x) => x && typeof x.text === "string" && x.text.trim()).slice(-8);
  const care = turns.some((x) => x.role === "you" && careIn(x.text));
  const kept = turns.filter((x) => !careIn(x.text));
  if (!kept.some((x) => x.role === "you") && !care) return "";
  const lines = kept.map((x) => (x.role === "you" ? (en ? `  They: "${clean(x.text, 300)}"` : `  他：「${clean(x.text, 300)}」`) : (en ? `  You: "${clean(x.text, 200)}"` : `  你：「${clean(x.text, 200)}」`)));
  const head = lines.length ? (en ? `\nWhat you and they said in this room (what they said here counts as much as what they said at the gate):\n${lines.join("\n")}` : `\n你们在这间屋里说过的话（他在屋里说的，和门口说的一样算数）：\n${lines.join("\n")}`) : "";
  return `${head}${care ? (en ? `\nIn this room they spoke of not wanting to live, or of hurting themselves: none of it goes into what you give them; be plain and kind, and give them this, word for word: "${CARE_LINE.en}"` : `\n他在屋里说起过不想活，或者想伤害自己：那些话一个字也不要写进给他的东西；平平常常地待他，把这句话照原样给他：「${CARE_LINE.zh}」`) : ""}`;
}

/** The host's own intent for this visit, written with the plan: for his talk and the gift, never said aloud. */
export function intentLine(lang, plan) {
  const s = clean(plan?.intent, 400);
  if (!s) return "";
  return lang === "en" ? `\nHow you meant to be with them in this visit (for you alone; never say it): ${s}` : `\n你进门前给这一段定的打算（只给你自己看，不要念出来）：${s}`;
}

/**
 * Each life as the others speak of it: the room, what a visitor carries out of it (`gift`, for a list; `made`, for a
 * prompt), and how a sentence names its host or the things made there (to tell which lives a line speaks of).
 */
export const LIFE_OUT = Object.freeze({
  melies: { host: /梅里爱|M[ée]li[èe]s/i, kind: /戏法|片子|电影|胶片|摄影|玻璃|\bfilms?\b|\bmovie|\bcamera|\btrick|\bconjur|\bglass\b/i, room: ["梅里爱的玻璃摄影棚", "Méliès' glass studio"], gift: ["一部戏法片", "a trick film"], said: ["他跟梅里爱说想要的镜头", "the shot they asked Méliès for"] },
  vangogh: { host: /梵高|文森特|Van Gogh|Vincent/i, kind: /画|信|椅子|颜料|颜色|\bpaint|\bletter|\bchair|\bcanvas|\bcolou?r/i, room: ["梵高在阿尔勒的卧室", "Van Gogh's bedroom in Arles"], gift: ["一幅画", "a painting"], made: ["梵高给他画的一幅画，和一封信", "a painting Van Gogh made for them, and a letter"] },
  lishizhen: { host: /李时珍|Li Shizhen/i, kind: /方子|药|脉|郎中|医生|大夫|戥子|\bprescription|\bherb|\bpulse|\bdoctor|\bphysician|\bapothecary|\bsteelyard|\bweigh/i, room: ["李时珍的药铺", "Li Shizhen's herbal shop"], gift: ["一张方子", "a prescription"], made: ["李时珍给他开的一张方子", "a prescription Li Shizhen wrote for them"] },
  xiyou: { host: /悟空|大圣|猴|Wukong|Monkey/i, kind: /文牒|通关|难簿|一难|\btravel pass|\bordeal|\bregister|\bpilgrim/i, room: ["五行山下", "the Five Elements Mountain"], gift: ["一张通关文牒", "a travel pass"], made: ["悟空给他的一张通关文牒", "a travel pass from Wukong"] },
});
const STOP = new Set("about after again also became become been before being came come every first from have here into just like made make minute more much only said some still than that their them then there these they this those under very were what when where which while will with would your".split(" "));
/** The words of what was made in a life that a line may carry: three characters running (Chinese), or a longer word. */
function madeWords(x) {
  const text = [x.title, x.did, x.said].filter(Boolean).join(" ");
  const runs = text.match(/[\u3400-\u9fff]{3,}/g) || [];
  const grams = runs.flatMap((r) => [...r].slice(0, -2).map((c, i) => r.slice(i, i + 3)));
  const words = (text.toLowerCase().match(/[a-z]{5,}/g) || []).filter((w) => !STOP.has(w));
  return [...new Set([...grams, ...words])];
}
/**
 * Whether a line speaks of a life walked (`x`, from cleanJourney): its host, the kind of thing made there, or the words
 * of what was made (its name, what they did).
 */
export const speaksOf = (line, x) => {
  const o = LIFE_OUT[x?.id];
  if (!o) return false;
  if (o.host.test(line) || o.kind.test(line)) return true;
  const low = String(line).toLowerCase();
  return madeWords(x).some((w) => low.includes(w));
};

/**
 * The lives a visitor walked through, as the front end keeps them beside each entry stamp (src/spaces/plaza/lives.js
 * journey()): in the order walked, each once, with what they made there — the gift's name (`title`), what they did
 * (`did`), a line of theirs (`said`) — plain and bounded. `here` (the life they are in now) is left out.
 */
export function cleanJourney(list, here = "") {
  const out = [];
  for (const x of Array.isArray(list) ? list.slice(0, 8) : []) {
    const id = String(x?.id || "");
    if (!LIFE_OUT[id] || id === here || out.some((y) => y.id === id)) continue;
    const e = { id, title: clean(x?.title, 80), did: clean(x?.did, 160), said: clean(x?.said, 80) };
    // Words of not wanting to live are never handed on (they could only have come from what the visitor said).
    for (const k of ["title", "did", "said"]) if (careIn(e[k])) e[k] = "";
    out.push(e);
  }
  return out;
}

/** Where the visitor has been before, for a prompt: a line per life walked, what they made there in its own words. */
export function journeyBrief(lang, list, here = "") {
  const en = lang === "en", k = en ? 1 : 0;
  return cleanJourney(list, here).map((x) => {
    const o = LIFE_OUT[x.id];
    const made = [
      x.title && (en ? `took away ${(o.made || o.gift)[1]}, called ${x.title}` : `带走了${(o.made || o.gift)[0]}，叫${x.title}`),
      x.did && (en ? `what they did there: ${x.did}` : `他在那儿做的：${x.did}`),
      x.said && (en ? `${o.said?.[1] || "a line of theirs there"}: "${x.said}"` : `${o.said?.[0] || "他在那儿说的一句话"}：「${x.said}」`),
    ].filter(Boolean);
    return `- ${o.room[k]}${en ? ": " : "："}${made.length ? made.join(en ? "; " : "；") : en ? "walked in and looked round; made nothing there" : "进去走了走，没带东西出来"}`;
  }).join("\n");
}
