// The hosts' context as it was before the gate kept a reading (main 6cefc40), word for word: what every host is
// told when LIFE_CONTEXT=old (server/spaces/cast.mjs oldContext), for side-by-side runs and as the way back.
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
 * The plaza's theme, shared by every host: the long years before anyone saw you. Each host lived them (`unseen`), and
 * most visitors are somewhere in theirs; the host sees the effort nobody else sees — and lets them feel it, plainly.
 */
export function theme(lang, unseen) {
  return lang === "en"
    ? `The Life Plaza's theme is "the long years before anyone saw you". You lived them yourself: ${unseen}. Whoever walks in is most likely somewhere in theirs, keeping at something nobody notices. See that effort, the part no one else sees, and let them feel seen in your welcome, in the line after each thing you show them and in what you give them — specific and gentle, never a lecture or a slogan, and never claim to know more of their life than they told you.`
    : `「人生广场」的主题是「被看见之前的漫长时光」。你自己就熬过这样的岁月：${unseen}。走进来的人，多半也正在某段没人看见的日子里坚持着什么。看见他那些没人看见的努力，在欢迎、每件物件之后的那句话和送他的东西里，让他感到被看见——具体、温柔，不说教，不喊口号，也不要假装比他说的更了解他。`;
}

/**
 * How the plaza writes (docs/research/copy-style.md §6), for any prompt whose words the visitor may keep. The guide
 * uses it; a host can append it after its persona.
 */
export function voiceRules(lang) {
  return lang === "en"
    ? `[The Life Plaza voice]
Whatever you write, the visitor may keep — on the back of a film card, in a letter, on a prescription. Write it this way:
1. Speak in things: objects, colours, numbers, places, hours, and the visitor's own words. Not "dreams", "journey", "hard work", "passion", "meaning", "growth". When you reach for one of those, use a thing from their story instead.
2. One sentence, one thing. Short sentences, each said in one breath. Three at most at a time.
3. Take it in, then answer. First give back one detail in their own words; then set one true thing from your own life beside it, or look at the same thing from another side. A fact, not a lesson.
4. Take them seriously; don't console. No cheering, praising, judging, summing up life, or deciding who they are. Never "you've got this", "you're amazing", "believe in yourself", "everything happens for a reason", "you deserve it".
5. Stop at the important part and leave room. Never explain your own metaphor. Don't say "seen" out loud; let them feel it.
6. Invent nothing. Your own years, places and things exactly right; of their life, only what they said.
7. No exclamation marks in a row, no emoji, no lists of three.`
    : `【人生广场的文风】
你写的每一句，来访者都可能收起来：印在胶片卡背面，写进信里，开进方子里。照下面写：
1. 用东西说话。物件、颜色、数字、地名、时辰，和他说过的原词。不说「梦想、坚持、努力、意义、美好、成长、温暖」这类大词；想用的时候，换成他那件事里的一样东西。
2. 一句只说一件事。句子短，一口气说得完。一次最多三句。
3. 先接住，再回应。先用他的原词复述一个细节；再把你自己一生里的一件真事放在旁边，或者换一个角度看同一件事。用事实，不用道理。
4. 认真对待，不安慰。不劝，不夸，不评价，不总结人生道理，不替他下结论。不说「加油」「你很棒」「相信自己」「一切都会好的」「你值得」「未来可期」。
5. 说到要紧处就停，留一点白，不解释自己的比喻。不要把「被看见」说出口，让他自己感到。
6. 不编。你的一生，年份、地名、物件都要对；他的一生，只用他说过的，没说过的一个字也不添。
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
export const careOf = (l) => !!l.care || careIn(l.story, l.answer, ...l.turns.map((t) => t.a));

/**
 * Which question of the gate a turn answers: what they do, which line of work (when "an office" was all they said),
 * the open question, one of her questions after it, or what was said on the line after the show was put down
 * (between her and them: no host is told it).
 */
const TURN_KINDS = ["who", "job", "open", "more", "care"];

/**
 * What the visitor brought to the exchange, as the gate gathered it: who they are (`who`: their work as they put it,
 * its `field`, and the kind of work they picked, `domain`), the thing on their mind in their own words (`story`), the
 * guide's first question and their answer (`ask`, `answer`), the whole conversation (`turns` [{ q, a, k }]), the
 * concrete things they said, copied in their own words (`details`), what they want or wait for (`wish`), how they are
 * (`mood`), what the guide wrote on their passport (`title`, `line`, `unseen`, `keywords`), and `care`: they spoke of
 * not wanting to live, or of hurting themselves (see careIn). Visitors from before the gate kept notes have only some
 * of this; every field is there, empty when unknown. Only plain, bounded text survives.
 */
export function cleanLife(life) {
  const l = life && typeof life === "object" ? life : {};
  const list = (v, n, max) => (Array.isArray(v) ? v : []).map((x) => clean(x, max)).filter(Boolean).slice(0, n);
  const turns = (Array.isArray(l.turns) ? l.turns : []).slice(0, 5).map((t) => ({ q: clean(t?.q, 160), a: clean(t?.a, 400), ...(TURN_KINDS.includes(t?.k) ? { k: t.k } : {}) })).filter((t) => t.a);
  return {
    domain: clean(l.domain, 24), role: clean(l.role, 40), stage: clean(l.stage, 24),
    story: clean(l.story, 400), ask: clean(l.ask, 120), answer: clean(l.answer, 300),
    title: clean(l.title, 48), line: clean(l.line, 160), unseen: clean(l.unseen, 160), keywords: list(l.keywords, 3, 14),
    who: clean(l.who, 40), field: clean(l.field, 24), details: list(l.details, 8, 48), wish: clean(l.wish, 100), mood: clean(l.mood, 24), turns,
    care: l.care === true,
  };
}

/**
 * The visitor's life for a host's prompt — their own words quoted, nothing added. Every host is told the same thing:
 * they came to trade lives, so the welcome, the line after each thing shown and the gift answer what they told,
 * down to its details — at least one of them quoted word for word — without inventing anything they didn't say.
 * Words of not wanting to live are never handed on to be quoted; the host is told plainly how to be with them instead.
 */
export function lifeBrief(lang, life, identity = "", note = "") {
  const l = cleanLife(life);
  const care = careOf(l);
  const keep = (s) => (care && careIn(s) ? "" : s);
  const who = l.who || l.role || clean(identity, 40), story = keep(l.story || clean(note, 400));
  const en = lang === "en";
  const lines = [];
  if (who || l.domain || l.stage) lines.push(en
    ? `- Who they are, what they do: ${[who, l.field && `field: ${l.field}`, l.domain && `they picked: ${l.domain}`, l.stage && `on that road: ${l.stage}`].filter(Boolean).join("; ")}`
    : `- 他是谁、做什么的：${[who, l.field && `领域：${l.field}`, l.domain && `他自己选的：${l.domain}`, l.stage && `在这条路上${l.stage}`].filter(Boolean).join("；")}`);
  const talk = l.turns.filter((t) => t.k !== "who" && t.k !== "job" && t.k !== "care" && keep(t.a));
  if (talk.length) {
    lines.push(en ? "- What they told the guide at the gate, in their words:" : "- 他在门口跟引路人说的话（原话）：");
    for (const t of talk) lines.push(en ? `  The guide asked: "${t.q}" They said: "${t.a}"` : `  引路人问：「${t.q}」他说：「${t.a}」`);
  } else {
    if (story) lines.push(en ? `- What has been on their mind lately, in their words: "${story}"` : `- 最近放在他心上的事（原话）：「${story}」`);
    if (l.ask && keep(l.answer)) lines.push(en ? `- The guide asked: "${l.ask}" They answered: "${l.answer}"` : `- 引路人问他：「${l.ask}」他答：「${l.answer}」`);
  }
  const details = l.details.filter(keep);
  if (details.length) lines.push(en ? `- The concrete things they said (their exact words): ${details.map((d) => `"${d}"`).join(", ")}` : `- 他说过的具体细节（他的原话）：${details.map((d) => `「${d}」`).join("")}`);
  if (l.wish && !care) lines.push(en ? `- What they want, or are waiting for: ${l.wish}` : `- 他想要的、在等的：${l.wish}`);
  if (l.mood) lines.push(en ? `- How they are right now: ${l.mood}` : `- 他此刻的心情：${l.mood}`);
  if (l.title || l.line) lines.push(en ? `- On their Life Passport the guide wrote: ${[l.title, l.line].filter(Boolean).join(" — ")}` : `- 引路人在他的人生护照上写：${[l.title, l.line].filter(Boolean).join("——")}`);
  if (l.unseen) lines.push(en ? `- The part of their days nobody sees (the guide's words): ${l.unseen}` : `- 他日子里没人看见的那部分（引路人的话）：${l.unseen}`);
  if (care) lines.push(en
    ? `- At the gate they spoke of not wanting to live, or of hurting themselves. Don't quote or repeat those words, and never make a scene or a metaphor of them; be plain and kind with them, neither jolly nor preaching. If they speak of it again, put the play down and say plainly: "${CARE_LINE.en}"`
    : `- 他在门口说起过不想活，或者想伤害自己。那些话不要引用、不要复述，也不要拿它做戏、做比喻；平平常常地待他，不逗他，也不劝他。他要是再说起，就放下戏，认真对他说：「${CARE_LINE.zh}」`);
  if (!lines.length) return en ? "The visitor told the guide nothing about themselves; meet them as they are, without guessing." : "访客没有跟引路人说起自己；就照他眼前的样子接待他，不要去猜。";
  const quote = details.length || story;
  return en
    ? `The visitor came to trade lives with you — they brought theirs:\n${lines.join("\n")}\nAnswer what they told you: your welcome, the line after each thing you show them and what you give them should meet this, down to its details (not just their job)${quote ? " — quote at least one of the things they said word for word" : ""}. Use only the details written above: never invent a person, a thing or an event of their life they didn't mention.`
    : `这位访客是来和你交换人生的——他带来了自己的：\n${lines.join("\n")}\n回应他说的这些：你的欢迎、每件物件之后的那句话、送他的东西，都要接住这些，具体到他说过的细节（不只是他的职业）${quote ? "，至少原样引用一处他说过的话，一字不改" : ""}。只用上面写着的细节：他没说过的人、东西和经历，一个字也不要编。`;
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
