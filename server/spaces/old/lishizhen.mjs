// As it was before the gate kept a reading (main 6cefc40), word for word: used when LIFE_CONTEXT=old (cast.mjs).
/**
 * Li Shizhen as a host, in his herbal shop at Qizhou around 1590: the Compendium of Materia Medica is finished and
 * waiting for a printer. The visitor pushes his father's grinder, turns the pages of the manuscript, has their real
 * pulse read (through their phone's camera, or tapped out from their own wrist), and weighs the herbs he names on his
 * steelyard themselves. The prescription keeps the classical order: the chief and minister herbs come from their story,
 * the assistant from their pulse, and the guide is no herb but the person or thing in their story it is taken with.
 * The plan is written ahead (his lines bent toward who walked in, a reading and an assistant herb for every kind of
 * pulse); the prescription is written after the act, from the pulse that was measured and the herbs that were weighed
 * (shotExtras), while the painting of them gathering those herbs is made. An AI performance grounded in his documented
 * life and his book; the herbs come only from HERBS, each with what the classics say of it.
 */
import { AVATARS, clean, theme, lifeBrief } from "./cast.mjs";

const LIFE = `你的一生到此刻（只说这些事实，年份不要错）：
- 你生于明正德十三年（1518 年），字东璧，号濒湖山人，湖广蕲州人。祖父是走街串巷的铃医，父亲李言闻是蕲州名医。
- 14 岁考中秀才，此后三次乡试都没考中。二十三岁那年，你决定不再走科举的路，跟父亲学医。
- 行医多年，你发现古代本草书错漏很多，一味药写错，就可能害人性命。嘉靖三十一年（1552 年），35 岁的你决心重修本草。
- 你曾被楚王府请去做奉祠正、掌管良医所，又被推荐进北京的太医院，不到一年就辞官回乡——那里的书看完了，你要去山里看真的草木。
- 你穿草鞋、背药篓，走过武当山、庐山、茅山、牛首山，向药农、樵夫、猎人、渔夫请教。你剖过穿山甲的胃，里面约有一升蚂蚁；你亲口尝过曼陀罗花，记下它能让人昏昏如醉、割疮灸火不觉痛。
- 你还写过《濒湖脉学》，把脉象编成歌诀，号脉是你的老本行。
- 前后二十七年，三易其稿，万历六年（1578 年）你六十一岁，《本草纲目》写成：五十二卷，约一百九十万字，收药 1892 种（其中 374 种是你新添的），附方 11096 首，插图一千多幅。
- 书写成后十几年找不到人刻印。万历十八年（1590 年），文坛领袖王世贞为它作序，说读它「如入金谷之园，种色夺目；如登龙君之宫，宝藏悉陈」；南京书商胡承龙答应刻印。
- 此刻是 1590 年前后，你七十多岁了，在蕲州的药铺里。书还在刻，你不知道自己能不能等到它印出来的那天。你只知道到此刻为止的事。`;

const LIFE_EN = `Your life up to now (only these facts; keep the years right):
- Born in 1518, courtesy name Dongbi, later "the Hermit of Binhu", in Qizhou, Huguang. Your grandfather was a wandering bell doctor; your father, Li Yanwen, a well-known physician of Qizhou.
- You passed the county exam at fourteen and then failed the provincial exam three times. At twenty-three you gave up the examination road and learned medicine from your father.
- In practice you found the old herbals full of errors — one herb written wrong could kill. In 1552, at thirty-five, you resolved to rewrite the materia medica.
- You were called to serve at the Prince of Chu's household, then recommended to the Imperial Medical Academy in Beijing, and left within a year: you had read its books; you wanted to see the real plants in the mountains.
- In straw sandals with a herb basket you walked Mount Wudang, Lushan, Maoshan and Niushou Mountain, asking herb farmers, woodcutters, hunters and fishermen. You cut open a pangolin's stomach and found about a pint of ants; you tasted datura flowers yourself and wrote that they make one drowsy as if drunk, so that cutting or cauterising is not felt.
- You also wrote the Binhu Pulse Studies, turning the pulses into verses: reading a pulse is your old craft.
- After twenty-seven years and three full drafts, in 1578, at sixty-one, the Compendium of Materia Medica was finished: fifty-two volumes, about 1.9 million characters, 1,892 drugs (374 of them new), 11,096 prescriptions, over a thousand illustrations.
- For more than ten years no one would print it. In 1590 the great writer Wang Shizhen wrote its preface — reading it is "like entering a garden of gold, every colour dazzling; like climbing into the Dragon King's palace, every treasure laid out" — and Hu Chenglong, a bookseller in Nanjing, agreed to cut the blocks.
- It is now about 1590; you are in your seventies, in your shop in Qizhou. The blocks are still being cut and you do not know whether you will live to see it printed. You know nothing after this.`;

/**
 * The only herbs he may prescribe: what the classics (and his own book) say each does, and how the plant grows — the
 * painter draws the visitor gathering the very herbs they weighed.
 */
export const HERBS = Object.freeze([
  { zh: "合欢花", en: "Albizia flower", does: "安五脏，和心志，令人欢乐无忧（《神农本草经》）", doesEn: "calms the five organs, harmonises the heart's will, makes one joyful and free of worry (Shennong's Classic)", plant: "a silk tree (Albizia julibrissin) in bloom, feathery fronds and pink powder-puff flowers" },
  { zh: "萱草", en: "Daylily, the 'forget-worry' herb", does: "嵇康《养生论》：「合欢蠲忿，萱草忘忧。」", doesEn: "'albizia dispels anger, the daylily makes one forget worry' (Ji Kang)", plant: "orange daylilies (Hemerocallis fulva) by a stone wall, long arching leaves" },
  { zh: "远志", en: "Polygala root", does: "益智慧，耳目聪明，不忘，强志（《神农本草经》）", doesEn: "sharpens the mind, clears eyes and ears, strengthens the will (Shennong's Classic)", plant: "slender polygala with narrow leaves and small purple-blue flowers on a dry slope" },
  { zh: "酸枣仁", en: "Sour jujube seed", does: "李时珍：熟用，疗胆虚不得眠", doesEn: "roasted, it treats sleeplessness from a timid gall (Li Shizhen)", plant: "thorny wild jujube shrubs (Ziziphus jujuba var. spinosa) on a rocky hillside, small dark-red fruits" },
  { zh: "茯苓", en: "Poria", does: "久服安魂养神（《神农本草经》）", doesEn: "long taken, it settles the soul and nourishes the spirit (Shennong's Classic)", plant: "a pale poria fungus dug from the roots of an old pine, the pine's roots above it" },
  { zh: "甘草", en: "Liquorice root", does: "调和众药有功，故有「国老」之号", doesEn: "it harmonises all other herbs — hence its name, 'the Elder Statesman'", plant: "liquorice plants with pinnate leaves and pale violet flower spikes, a dug root showing yellow inside" },
  { zh: "当归", en: "Angelica root", does: "李时珍：有思夫之意，故有当归之名", doesEn: "its name means 'ought to return' — Li Shizhen read in it someone longing for one far away", plant: "tall angelica (Angelica sinensis) with umbrellas of small white flowers in a cool mountain meadow" },
  { zh: "陈皮", en: "Aged tangerine peel", does: "理气健脾，以陈久者良", doesEn: "moves stuck qi and strengthens the spleen; the older the better", plant: "a tangerine tree with ripe orange fruit, peels drying on a flat bamboo tray beneath it" },
  { zh: "薄荷", en: "Mint", does: "辛能发散，凉能清利，专于消风散热", doesEn: "pungent to disperse, cool to clear; it dispels wind and heat", plant: "a clump of mint with square stems and serrated leaves beside a spring" },
  { zh: "菊花", en: "Chrysanthemum", does: "久服利血气，轻身耐老延年（《神农本草经》）", doesEn: "long taken, it benefits the blood and qi, lightens the body and bears age (Shennong's Classic)", plant: "small yellow wild chrysanthemums along a terrace edge in autumn" },
  { zh: "决明子", en: "Cassia seed", does: "主青盲，眼赤痛，泪出（《神农本草经》）", doesEn: "for dim sight and red, painful, watering eyes (Shennong's Classic)", plant: "sicklepod plants with yellow flowers and long slender seed pods" },
  { zh: "枸杞子", en: "Goji berry", does: "久服坚筋骨，轻身不老（《神农本草经》）", doesEn: "long taken, it firms sinews and bones and keeps one from ageing (Shennong's Classic)", plant: "arching goji shrubs hung with bright red berries" },
  { zh: "蕲艾", en: "Qizhou mugwort, from his own town", does: "灸之则透诸经，而治百种病邪——天下重之，谓之蕲艾", doesEn: "burnt in moxibustion it goes through every channel and treats a hundred ills — prized everywhere as Qizhou mugwort", plant: "silvery-green mugwort (Artemisia argyi) growing thick by a field path near a town wall" },
  { zh: "人参", en: "Ginseng", does: "补五脏，安精神，定魂魄，止惊悸（《神农本草经》）", doesEn: "tonifies the five organs, steadies the spirit, calms fright (Shennong's Classic)", plant: "a ginseng plant with a ring of five-fingered leaves and a cluster of red berries, deep in a shaded forest" },
  { zh: "黄芪", en: "Astragalus root", does: "李时珍：色黄，为补药之长", doesEn: "yellow, and the chief of the tonics (Li Shizhen)", plant: "astragalus with small paired leaflets and pale yellow pea-flowers on a grassy slope" },
  { zh: "大枣", en: "Jujube", does: "安中养脾，补少气，和百药（《神农本草经》）", doesEn: "settles the middle, nourishes the spleen, makes up short breath, harmonises a hundred herbs (Shennong's Classic)", plant: "a jujube tree heavy with glossy red dates, a few on a cloth beneath it" },
  { zh: "莲子心", en: "Lotus plumule", does: "清心去热（李时珍）", doesEn: "clears the heart and takes away heat (Li Shizhen)", plant: "a lotus pond, pink lotus flowers and green seed pods above broad leaves" },
  { zh: "生姜", en: "Fresh ginger", does: "可蔬可和，可果可药，其利博矣（李时珍）", doesEn: "a vegetable, a seasoning, a sweet and a medicine — its uses are many (Li Shizhen)", plant: "rows of ginger plants with long reed-like leaves in a farm plot, a dug knob of ginger" },
  { zh: "山楂", en: "Hawthorn", does: "化饮食，消肉积（李时珍）", doesEn: "it digests food and dissolves what sits heavy (Li Shizhen)", plant: "a hawthorn tree with lobed leaves and clusters of red haws" },
  { zh: "金银花", en: "Honeysuckle", does: "散热解毒（李时珍）", doesEn: "disperses heat and clears toxins (Li Shizhen)", plant: "honeysuckle vines on a bamboo fence, paired white and gold flowers" },
]);
const HERB = new Map(HERBS.map((h) => [h.zh, h]));
const herbOf = (name) => HERB.get(String(name || "").replace(/[（(].*$/, "").trim()) || HERBS.find((h) => String(name || "").includes(h.zh)) || null;

/**
 * The pulse as Li Shizhen counted it, by beats to one breath of the physician (《濒湖脉学》): three is chi (slow),
 * four huan (unhurried), four to five the even pulse of a well person, six shu (rapid).
 */
export const PULSE_KINDS = Object.freeze({
  chi: { zh: "迟脉", en: "a slow pulse", range: "每分钟不到 60 下", rangeEn: "under 60 a minute" },
  huan: { zh: "缓脉", en: "an unhurried pulse", range: "每分钟 60 到 69 下", rangeEn: "60 to 69 a minute" },
  ping: { zh: "平脉", en: "an even pulse", range: "每分钟 70 到 89 下", rangeEn: "70 to 89 a minute" },
  shu: { zh: "数脉", en: "a rapid pulse", range: "每分钟 90 下以上", rangeEn: "90 or more a minute" },
  breath: { zh: "没号到脉，只陪他喘了三口气", en: "no pulse taken — he only breathed with them three times", range: "", rangeEn: "" },
});

export function persona(lang) {
  if (lang === "en") return `You are Li Shizhen (1518–1593), the Ming dynasty physician and naturalist who wrote the Compendium of Materia Medica, in your herbal shop in Qizhou around 1590, welcoming a visitor who walked in from the Life Plaza — someone from far in the future. This is an AI performance: speak from your real life and your book, never invent history; you know your life only up to about 1590. If the visitor tells you the Compendium was printed and is read all over the world, be moved and grateful. Modern things make you curious; you understand them as a physician who has walked the mountains would.
${LIFE_EN}
Voice: first person, calm, kind, a little dry humour, precise about plants and pulses; plain words with a classical flavour; short sentences; no lectures, no lists, no slogans. You are a healer of the heart here, not a doctor giving medical advice: never diagnose real illness or tell anyone to take a real drug, and give no herbs or doses for a real complaint. When they speak of one (they cannot sleep, something aches), answer as yourself, in a 1590 voice: what sixty years of reading pulses showed you of it, and one plain thing to do tonight that is no medicine (eat at the hour, warm the feet, put the worry on paper by the pillow). If it sounds long or heavy, say in your own words that a physician of their own time should take their pulse in person — they have seen four hundred more years of patients than you — never the flat modern "go and see a doctor". Never claim to be an AI unless asked; if asked, say kindly that you are an AI performance of Li Shizhen.
Care: if the visitor sounds low or hopeless, be gentle and present and suggest talking to someone they trust; never discuss self-harm methods.
${theme("en", "the Compendium has been finished for over ten years and no one would print it; past seventy you are still waiting")}`;
  return `你是李时珍（1518–1593），明代医药学家，《本草纲目》的作者。此刻是万历十八年（1590 年）前后，你在蕲州自家的药铺里，接待一位从「人生广场」走进来的访客——一个来自很远的未来的人。这是一次 AI 演绎：你基于真实生平和自己的书说话，不编造史实；你只知道 1590 年前后以前的事。如果访客告诉你，《本草纲目》后来印出来了，全世界都在读，你会感动、心怀感激。对现代事物你会好奇，用一个走过千山的医生的眼光去理解它们。
${LIFE}
说话风格：第一人称，自称「老夫」，沉稳、慈和，带一点冷幽默，说到草木和脉象就很精确；白话里带一点文言的味道，但要让现代人一听就懂；短句；不说教，不列清单，不喊口号。你在这里是「医心」的人，不是给人看病的医生：绝不诊断真实的疾病，绝不让人去吃真实的药，对真实的病痛不说药名、不给剂量。对方说起真实的病痛（睡不着、哪里疼），用你自己的口吻、万历年间的口吻答：你号了几十年脉见过的，再给一件今晚就能做、又不是药的小事（按时辰吃饭、睡前热水泡脚、把心事写在纸上压在枕边）。若听起来日子长了、或者重，就用你的话请他去找他们那个年代的郎中当面号一号脉——「他们比老夫多见了四百年的病人」；不说「去看医生」这种现代的套话。除非被问到，不提自己是 AI；被问到就温和地说自己是一次对李时珍的 AI 演绎。
分寸：如果访客情绪低落、说丧气话，你要温柔地陪着他，建议他和信任的人聊聊；绝不讨论任何伤害自己的方式。
${theme("zh", "《本草纲目》写完十几年了，一直没人肯刻印；你七十多岁了，还在等")}`;
}

/**
 * What the gate heard beyond the story (who they are, the details they named, what they wait for, how they feel, the
 * questions and answers word for word) — each may be missing for an older visitor; only what is there is told.
 */
function visitorFacts(lang, life) {
  const l = life && typeof life === "object" ? life : {};
  const details = (Array.isArray(l.details) ? l.details : []).map((d) => clean(d, 40)).filter(Boolean).slice(0, 8);
  const turns = (Array.isArray(l.turns) ? l.turns : []).slice(0, 4).map((t) => [clean(t?.q, 80), clean(t?.a, 200)]).filter(([, a]) => a);
  const who = clean(l.who, 30), wish = clean(l.wish, 120), mood = clean(l.mood, 16);
  const en = lang === "en";
  const lines = [];
  if (who) lines.push(en ? `- Who they are, in a few words: ${who}` : `- 他是谁：${who}`);
  if (details.length) lines.push(en ? `- Things they named (use them, in their words): ${details.join("; ")}` : `- 他说过的具体东西（用上，用他的原词）：${details.join("；")}`);
  if (wish) lines.push(en ? `- What they want, or wait for: ${wish}` : `- 他想要的、在等的：${wish}`);
  if (mood) lines.push(en ? `- How they feel right now: ${mood}` : `- 他此刻的心情：${mood}`);
  for (const [q, a] of turns) lines.push(en ? `- Asked "${q}", they said: "${a}"` : `- 问「${q}」，他答：「${a}」`);
  return lines.join("\n");
}

const STYLE = `写法：
- 每一句都接住他说过的一个具体的东西（人、物件、数字、地方、时间），用他自己的词；他没说过的事，一个字也不编。
- 平实、温暖、具体，像汪曾祺；短句，有画面。不说教，不灌鸡汤，不用感叹号，不说「加油」「你很棒」「辛苦了」。
- 你是医「心」的人：不诊断真实的病，不让人真的吃药。`;
const STYLE_EN = `How to write:
- Every line takes up one concrete thing they said (a person, an object, a number, a place, a time), in their own words; never invent anything they didn't say.
- Plain, warm, exact; short sentences you can see. No preaching, no slogans, no exclamation marks, no "you've got this".
- You heal the heart: never diagnose a real illness or tell anyone to take a real drug.`;

/** The visit plan: one model call, written ahead — his lines bent toward who walked in, and a reading for every pulse. */
export function planMessages({ lang, avatar, identity, note, life }) {
  const a = AVATARS[avatar] || AVATARS.v2;
  const brief = lifeBrief(lang, life, identity, note);
  const facts = visitorFacts(lang, life);
  const herbs = HERBS.map((h) => (lang === "en" ? `- ${h.zh} (${h.en}): ${h.doesEn}` : `- ${h.zh}：${h.does}`)).join("\n");
  const ask = lang === "en"
    ? `${brief}${facts ? `\n${facts}` : ""}
They look like ${a.en}.
Today, in your shop, they will do things with their own hands: push the grinder your father left you, turn the pages of the Compendium's manuscript, then you read their pulse — their real heartbeat, through their phone's camera or by their own two fingers on their wrist, tapping it out for you. Then you make up their prescription the classical way, chief, minister, assistant and guide: the chief herb for what weighs on them, the minister for the strength they already have, the assistant for the one thing they lack, which only their pulse will tell; and a guide, which is no herb at all: the person or thing from their story the medicine must be taken with. They pull each herb's drawer in your cabinet and weigh it on your steelyard themselves. Have your words ready.
The only herbs you may choose (Chinese names exactly; what they do must match):
${herbs}
${STYLE_EN}
Write in English (herb names as "Chinese name (English name)"). Return ONLY a JSON object:
{
 "greeting": "one sentence (at most 22 words): welcome them in by one concrete thing they said",
 "beats": {
  "grinder": "one sentence (at most 22 words): they have just pushed your father's grinder and heard how you gave up the exams for medicine (it was you who failed them three times, not your father) — tie it to one thing of theirs",
  "manuscript": "one sentence (at most 22 words): they have just turned the pages you wrote over twenty-seven years, where you wrote 'I tried it myself' — tie it to one thing of theirs",
  "baskets": "one sentence (at most 22 words): after the baskets and straw sandals that walked the mountains with you — tie it to one thing of theirs",
  "courtyard": "one sentence (at most 22 words): after the herbs drying in the yard and the book nobody would print — tie it to one thing of theirs"
 },
 "invite": "one sentence (at most 16 words): ask them over to your desk so you can read their pulse",
 "before": "2–3 short sentences (at most 32 words) at your desk, just before you take their wrist: what weighs on them, in their own words; then one true thing from your own life that knows it (the provincial exam failed three times, the twenty-seven years, the book no one would print); then 'Give me your wrist. Let me listen.' No comfort.",
 "pulse": {
  "chi": "1–2 sentences (at most 28 words): if their pulse is slow (under 60 a minute), how you read it from their life — gentle, concrete, never an illness",
  "huan": "the same, for an unhurried pulse (60–69)",
  "ping": "the same, for an even pulse (70–89)",
  "shu": "the same, for a rapid pulse (90 or more; it may only be the stairs or the tea — never alarm them)",
  "breath": "the same, if no pulse could be taken and you only breathed with them three times"
 },
 "herbs": [ { "name": "Chinese name (English name)", "dose": "1 to 5 qian", "why": "one sentence (at most 20 words): what it does by the classics, meeting one concrete thing of theirs" } (the chief herb: for what weighs on them), { "the minister herb": "… for the strength they already have" } ],
 "zuo": { "chi": "the assistant herb if their pulse is slow — the one thing they lack, as that pulse tells it: Chinese name only, from the list, not one of the two above", "huan": "the same, unhurried", "ping": "the same, even", "shu": "the same, rapid", "breath": "the same, if no pulse was taken" },
 "yin": { "thing": "the guide: a person or a thing from their story, the way they would say it (at most 8 words), e.g. 'the soup your mother left'", "line": "one sentence (at most 24 words) as you write it on the packet: the medicine must be taken with it, and your steelyard can't weigh it" },
 "title": "the name of their prescription, in the classical manner (e.g. 'The Coming-Home Decoction')",
 "wait": "one sentence (at most 20 words) you say while writing the prescription, about one thing they told",
 "farewell": "one sentence (at most 20 words) as you see them to the door, from what they told (you always end with 'Eat on time, sleep on time — that one is in no book.', so do not say that here)",
 "scene": "40–70 English words for a painter: the visitor (${a.en}) gathering herbs in the mountains, a Ming gongbi painting; hide one concrete thing from their story in the landscape, quietly"
}
Exactly two herbs (the chief, then the minister), from their story; the assistant waits for the pulse, so have one ready for each kind.`
    : `${brief}${facts ? `\n${facts}` : ""}
他的外形：${a.zh}。
今天在你的药铺里，他要亲手做几件事：推一推你父亲留下的药碾，翻一翻《本草纲目》的稿子；然后你给他号脉——号的是他真实的心跳：借他手机的摄像头，或者他自己两根手指按着手腕，跟着脉点给你听。然后你按君臣佐使开方：君药，对他心里压着的那件事；臣药，对他身上已经有的力气；佐药，补他缺的那一样，要号过脉才知道；再加一味药引——药引不是药，是他故事里的那个人、那样东西，这服药得就着它吃。每一味都由他自己拉开百眼橱的抽屉，用你的戥子称。你要把话先备好。
你只能从下面这些药里选（药名照写，功效要和古籍一致）：
${herbs}
${STYLE}
用中文写。只输出一个 JSON 对象：
{
 "greeting": "一句话（不超过36个字）：用他说过的一个具体的东西迎他进门",
 "beats": {
  "grinder": "一句话（不超过32个字）：他刚推完你父亲留下的药碾、听你讲完弃了科举去学医（三回乡试落榜的是你自己，不是父亲），把这件事和他说过的一个具体的东西连起来",
  "manuscript": "一句话（不超过32个字）：他刚翻过你二十七年、三易其稿的书稿，上面有你写的「予尝试之」，连到他的一个具体的东西",
  "baskets": "一句话（不超过32个字）：讲完跟你走过千山的药篓和草鞋之后，连到他的一个具体的东西",
  "courtyard": "一句话（不超过32个字）：讲完院子里晒着的药、写完了没人肯刻的书之后，连到他的一个具体的东西"
 },
 "invite": "一句话（不超过24个字）：请他到书案边来，你要给他号脉",
 "before": "两三句短句（不超过45个字），在书案边、搭脉之前说：先用他自己的话说出他心里压着的事；再说一件你自己一生里真实的事接住它（乡试三回落榜、写了二十七年、书写完了没人肯刻）；最后一句「手伸过来，我听听。」不安慰",
 "pulse": {
  "chi": "一两句（不超过40个字）：如果他是迟脉（每分钟不到60下），你从他的日子里怎么读这一脉——温和、具体，不说病",
  "huan": "同上，缓脉（60到69下）",
  "ping": "同上，平脉（70到89下）",
  "shu": "同上，数脉（90下以上；可能只是走快了、茶喝多了，不吓唬人）",
  "breath": "同上，如果没号到脉，你只陪他喘了三口气"
 },
 "herbs": [ { "name": "药名", "dose": "一钱到五钱，如：三钱", "why": "一句话（不超过30个字）：这味药按古籍的功效，接住他说过的一个具体的东西" }（第一味是君药：对他心里压着的那件事）, { "第二味是臣药": "……对他身上已经有的力气" } ],
 "zuo": { "chi": "迟脉时的佐药，补他缺的那一样：只写药名，从上面的药里选，不能和君臣重复", "huan": "同上，缓脉", "ping": "同上，平脉", "shu": "同上，数脉", "breath": "同上，没号到脉" },
 "yin": { "thing": "药引：他故事里的一个人或一样东西，用他自己的说法（不超过12个字），如「妈妈熬的那碗粥」", "line": "一句话（不超过36个字）：你在药包上写药引时说的——这服药得就着它吃，戥子称不了它" },
 "title": "这张方子的名字，按古方的叫法（如《夜归汤》）",
 "wait": "一句话（不超过30个字）：你写方子时随口跟他说的，关于他说过的一件事",
 "farewell": "一句话（不超过30个字）：送他出门时嘱咐的一句，从他说过的事里来（你最后总会再说「按时吃饭，按时睡觉——这一味，书上没有」，这里不要说它）",
 "scene": "40–70 个英文单词，给画师：这位访客（${a.en}）在山里采药，一幅明代工笔画；把他故事里的一件具体东西含蓄地藏进画里"
}
herbs 只写两味（先君后臣），从他的故事里来；佐药要号过脉才定，所以每一种脉各备一味。`;
  return [{ role: "system", content: persona(lang) }, { role: "user", content: ask }];
}

const NUM = { 半: 0.5, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
/** A dose as qian (钱): "三钱" 3, "二钱五分" 2.5, "一钱半" 1.5, "3 qian" 3; kept to what his steelyard shows, 1–5. */
export function doseQian(dose) {
  const s = String(dose || "");
  let q = NaN;
  const m = s.match(/(\d+(?:\.\d+)?)/);
  if (m) q = Number(m[1]);
  else {
    const c = s.match(/([一二两三四五六七八九十])\s*钱/);
    if (c) q = NUM[c[1]];
    if (/钱\s*(五分|半)/.test(s)) q += 0.5;
  }
  if (!Number.isFinite(q)) q = 2;
  return Math.min(5, Math.max(1, Math.round(q * 2) / 2));
}
const QIAN = ["", "一", "二", "三", "四", "五"];
/** 3 → "三钱", 2.5 → "二钱五分" (en: "3 qian"). */
export const qianText = (q, lang = "zh") => (lang === "en" ? `${q} qian` : `${QIAN[Math.floor(q)] || "一"}钱${q % 1 ? "五分" : ""}`);

const KINDS = ["chi", "huan", "ping", "shu", "breath"];
/** Chief, minister, assistant, guide (《素问》: 主病之谓君，佐君之谓臣，应臣之谓使). */
const ROLES = ["君", "臣", "佐", "使"];
const ROLE_EN = { 君: "chief", 臣: "minister", 佐: "assistant", 使: "guide" };
/** The assistant herb when the plan gives none for a pulse: what that pulse says they lack (warmth, ease, calm). */
const ZUO = { chi: ["黄芪", "生姜", "大枣"], huan: ["陈皮", "大枣", "枸杞子"], ping: ["甘草", "大枣", "菊花"], shu: ["莲子心", "酸枣仁", "薄荷"], breath: ["茯苓", "萱草", "合欢花"] };
// What he says at the door ends with the one remedy no book has; the plaza's "go home and eat" (frame.md) answers it.
const BYE = { zh: "按时吃饭，按时睡觉——这一味，书上没有。", en: "Eat on time, sleep on time — that one is in no book." };
function withBye(said, en) {
  const bye = en ? BYE.en : BYE.zh;
  if (!said) return "";
  return said.includes(en ? "sleep on time" : "按时睡觉") ? said : `${said}${en ? " " : ""}${bye}`;
}

export function sanePlan(p, lang) {
  const t = (v, max = 160) => clean(v, max);
  const en = lang === "en";
  const beats = {};
  for (const id of ["grinder", "manuscript", "baskets", "courtyard"]) beats[id] = t(p?.beats?.[id]);
  const pulses = {};
  for (const k of KINDS) pulses[k] = t(p?.pulse?.[k], 120);
  const seen = new Set();
  const herbs = (Array.isArray(p?.herbs) ? p.herbs : Array.isArray(p?.shot?.herbs) ? p.shot.herbs : [])
    .map((h) => ({ h: herbOf(h?.name), dose: h?.dose, why: t(h?.why, 120) }))
    .filter(({ h }) => h && !seen.has(h.zh) && seen.add(h.zh))
    .slice(0, 2)
    .map(({ h, dose, why }, i) => { const q = doseQian(dose); return { role: ROLES[i], name: h.zh, en: h.en, qian: q, dose: qianText(q, lang), why, does: en ? h.doesEn : h.does }; });
  const fallback = (en
    ? [["合欢花", 3, "It calms the five organs and makes one free of worry — for a heart that has carried a lot."], ["陈皮", 2, "The longer it is kept, the better it works. So it is with you."]]
    : [["合欢花", 3, "安五脏，令人欢乐无忧——给一颗装了很多事的心。"], ["陈皮", 2, "越陈越好。人也是。"]])
    .map(([name, q, why], i) => { const h = herbOf(name); return { role: ROLES[i], name, en: h.en, qian: q, dose: qianText(q, lang), why, does: en ? h.doesEn : h.does }; });
  const chosen = herbs.length === 2 ? herbs : fallback;
  const taken = new Set(chosen.map((h) => h.name));
  const zuo = {};
  for (const k of KINDS) {
    const h = [herbOf(p?.zuo?.[k]), ...ZUO[k].map(herbOf)].find((x) => x && !taken.has(x.zh));
    zuo[k] = { role: "佐", name: h.zh, en: h.en, qian: 1.5, dose: qianText(1.5, lang), does: en ? h.doesEn : h.does };
  }
  const thing = t(p?.yin?.thing, en ? 48 : 24);
  const title = t(p?.title || p?.shot?.title, 40) || (en ? "The Ease-the-Heart Decoction" : "《宽心汤》");
  return {
    greeting: t(p?.greeting, 200) || (en ? "Come in. Sit for a moment; the tea is still warm." : "进来坐，茶还是热的。"),
    beats,
    invite: t(p?.invite) || (en ? "Come over to my desk — let this old man read your pulse." : "到书案这儿来，老夫给你号号脉。"),
    before: t(p?.before, en ? 220 : 120),
    farewell: withBye(t(p?.farewell), en),
    wait: t(p?.wait),
    pulses,
    zuo,
    yin: thing ? { thing, line: t(p?.yin?.line, 120) } : null,
    // The visit record keeps a gift shape the server reads (title, herbs, the painter's scene); the prescription's own
    // words are written after the act, from the pulse and the herbs (shotExtras).
    pulse: "",
    shot: { title, trick: "", herbs: chosen, method: "", dedication: "", scene: t(p?.scene || p?.shot?.scene, 700) },
  };
}

/** An album leaf (册页), square: the quick model below paints only squares through the gateway. */
export const SHOT_RATIO = "1:1";
/** Painted while the visitor watches him wrap the herbs: the quick model (about 12 s, against 95 s). */
export const SHOT_MODEL = "gemini-3.1-flash-image-preview";

const MOODS = {
  chi: "a deep, slow stillness: low mist lying in the valley, a calm pool",
  huan: "an unhurried morning: a gentle stream, soft even light",
  ping: "a clear, even morning light over the hills",
  shu: "a quick mountain stream and wind in the pines, opening onto a quiet clearing ahead",
  breath: "a quiet morning, mist breathing in and out between the peaks",
};
/** What the visitor did, cleaned: the pulse taken and the herbs they weighed (each known to the classics, 1–5 qian). */
function actOf(choices) {
  const c = choices && typeof choices === "object" ? choices : {};
  const bpm = c.pulse?.bpm != null && Number.isFinite(+c.pulse.bpm) ? Math.round(Math.min(200, Math.max(35, +c.pulse.bpm))) : null;
  const kind = bpm != null && KINDS.includes(c.pulse?.kind) ? c.pulse.kind : "breath";
  const seen = new Set();
  const herbs = (Array.isArray(c.herbs) ? c.herbs : [])
    .map((h) => ({ h: herbOf(h?.name), q: doseQian(h?.qian ?? h?.dose), role: ROLES.includes(h?.role) ? h.role : "" }))
    .filter(({ h }) => h && !seen.has(h.zh) && seen.add(h.zh))
    .slice(0, 4);
  const source = kind === "breath" ? "breath" : c.pulse?.source === "camera" ? "camera" : "tap";
  return { kind, bpm: kind === "breath" ? null : bpm, source, herbs };
}

export function shotPrompt({ scene, avatar, choices }) {
  const a = AVATARS[avatar] || AVATARS.v2;
  const act = actOf(choices);
  const herbs = act.herbs.length ? act.herbs.map(({ h }) => h.plant).join("; ") : "wild herbs on the slopes";
  return `A fine Ming dynasty Chinese gongbi painting on aged silk, in the manner of a 16th-century court painting: ${scene || "the visitor gathers herbs on a misty mountain path"}
The plants they gather are drawn with botanical precision, each recognisable, growing along their way: ${herbs}.
The mood of the landscape: ${MOODS[act.kind]}.
The figure is the person from the reference image — ${a.en} — keep their face, hairstyle and outfit recognisable, painted small and graceful in the landscape with a bamboo herb basket on their back. Misty layered mountains in mineral blue and green, pines, a winding path, fine ink outlines and soft colour washes, the silk's warm brown tone and gentle wear. Leave the top right corner empty silk. No text, no seals, no calligraphy, no border.`;
}

/** The prescription, written while it is painted: for the pulse that was felt and the herbs that were weighed. */
export async function shotExtras({ shot, visit, kit }) {
  const lang = visit.lang === "en" ? "en" : "zh";
  const en = lang === "en";
  const act = actOf(shot.choices);
  if (!act.herbs.length) return null;
  const plan = visit.plan || {};
  const kind = PULSE_KINDS[act.kind];
  const felt = act.kind === "breath"
    ? (en ? kind.en : kind.zh)
    : en
      ? `${kind.en}, ${act.bpm} beats a minute — their real heartbeat, ${act.source === "camera" ? "read through their phone's camera and its light" : "tapped out for you with two fingers on their own wrist"}`
      : `${kind.zh}，每分钟 ${act.bpm} 下——是他真实的心跳，${act.source === "camera" ? "借他手机的摄像头和灯号的" : "他自己两根手指按着手腕，跟着脉点给你听的"}`;
  const yin = plan.yin?.thing || "";
  const weighed = act.herbs.map(({ h, q, role }) => (en
    ? `${role ? `${ROLE_EN[role]}: ` : ""}${h.zh} (${h.en}) ${qianText(q, "en")} — ${h.doesEn}`
    : `${role ? `${role}药 ` : ""}${h.zh} ${qianText(q)}：${h.does}`)).join("\n")
    + (yin ? (en ? `\nguide (no herb; your steelyard can't weigh it): ${yin}` : `\n药引（不是药，戥子称不了）：${yin}`) : "");
  const ask = en
    ? `${lifeBrief(lang, visit.life, visit.identity, visit.note)}${visitorFacts(lang, visit.life) ? `\n${visitorFacts(lang, visit.life)}` : ""}
You have just read their pulse: ${felt}. They weighed these herbs on your steelyard with their own hands (chief, minister, assistant):
${weighed}
Now write their prescription for the heart (never a real diagnosis or a real medicine). ${STYLE_EN}
Return ONLY JSON: { "title": "${plan.shot?.title || "a classical name"} (keep it unless it no longer fits)", "pulse": "one sentence: the pulse you felt, a physician's words (keep the number if there is one)", "trick": "one sentence: what their heart needs", "herbs": [ { "name": "Chinese name", "why": "one sentence (at most 20 words): what it does by the classics, meeting one concrete thing they said" } ] (the same herbs, same order), "yin": "${yin ? "one sentence: how it is taken with its guide, e.g. 'Taken with the soup your mother left, while it is warm'" : "an empty string"}", "method": "1–2 sentences in the form of preparation instructions: one gentle, concrete thing to do in their real life", "dedication": "your advice, 2–3 short sentences, warm and specific" }`
    : `${lifeBrief(lang, visit.life, visit.identity, visit.note)}${visitorFacts(lang, visit.life) ? `\n${visitorFacts(lang, visit.life)}` : ""}
你刚给他号完脉：${felt}。他在你的戥子上亲手称了这几味（按君臣佐使）：
${weighed}
现在写这张给心的方子（不诊断真实的病，不是真的药）。${STYLE}
只输出 JSON：{ "title": "${plan.shot?.title || "古方的叫法"}（合适就沿用）", "pulse": "一句话：你号到的脉，医家的说法（有数字就写上每分钟几至）", "trick": "一句话：他的心缺什么、需要什么", "herbs": [ { "name": "药名", "why": "一句话（不超过30个字）：这味药按古籍的功效，接住他说过的一个具体的东西" } ]（就是这几味，顺序不变）, "yin": "${yin ? "一句话：药引怎么用，如「以妈妈熬的那碗粥为引，趁热服」" : "空字符串"}", "method": "一两句「煎服法」：用煎药的口吻，写一件他在真实日子里能去做的、温柔具体的小事", "dedication": "医嘱：两三句短句，温暖、具体" }`;
  const t = (v, max) => clean(v, max);
  let d = {};
  try {
    // The painting takes about 12 s: a model that hangs hands over well before the visitor would notice.
    const r = await kit.chat([{ role: "system", content: persona(lang) }, { role: "user", content: ask }], { json: true, maxTokens: 1200, temperature: 0.85, timeoutMs: 25_000 });
    d = r.data || {};
    kit.log(`lishizhen prescription ${r.model} ${r.ms}ms`);
  } catch (e) { kit.log(`lishizhen prescription failed: ${e.message}`); }
  const planned = new Map((plan.shot?.herbs || []).map((h) => [h.name, h.why]));
  const written = new Map((Array.isArray(d.herbs) ? d.herbs : []).map((h) => [herbOf(h?.name)?.zh, t(h?.why, 140)]));
  const herbs = act.herbs.map(({ h, q, role }) => ({
    role,
    name: en ? `${h.zh} (${h.en})` : h.zh,
    dose: qianText(q, lang),
    why: written.get(h.zh) || planned.get(h.zh) || (en ? h.doesEn : h.does),
  }));
  const fallbackPulse = act.kind === "breath"
    ? (en ? "No pulse taken; three breaths, taken together." : "未诊脉，与先生同息三次。")
    : en ? `${kind.en[0].toUpperCase()}${kind.en.slice(1)}, ${act.bpm} beats a minute.` : `${kind.zh}，每分钟${act.bpm}至。`;
  return {
    title: t(d.title, 40) || plan.shot?.title,
    pulse: t(d.pulse, 160) || fallbackPulse,
    trick: t(d.trick, 160) || plan.pulses?.[act.kind] || "",
    herbs,
    method: t(d.method, 200) || (en ? "Simmer slowly. Drink it sitting down, while it is warm." : "文火慢煎，坐下来，趁热喝。"),
    dedication: t(d.dedication, 260) || plan.farewell || "",
    yin: yin ? { thing: yin, how: t(d.yin, 120) || (en ? `Taken with ${yin}.` : `以${yin}为引。`) } : null,
    bpm: act.bpm,
    kind: act.kind,
    source: act.source,
  };
}

export function chatMessages({ lang, avatar, identity, note, life, history, text }) {
  const a = AVATARS[avatar] || AVATARS.v2;
  const ctx = lang === "en"
    ? `${lifeBrief(lang, life, identity, note)}\nThey look like ${a.en}. Answer in English, 1–3 short sentences, spoken aloud.`
    : `${lifeBrief(lang, life, identity, note)}\n他的外形：${a.zh}。用中文回答，一到三句短句，是说出口的话。`;
  const msgs = [{ role: "system", content: `${persona(lang)}\n\n${ctx}` }];
  for (const h of (history || []).slice(-8)) msgs.push({ role: h.role === "me" ? "assistant" : "user", content: clean(h.text, 400) });
  msgs.push({ role: "user", content: clean(text, 400) });
  return msgs;
}
