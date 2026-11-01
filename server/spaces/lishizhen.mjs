/**
 * Li Shizhen as a host, in his herbal shop at Qizhou around 1590: the Compendium of Materia Medica is finished and
 * waiting for a printer. The visitor pushes his father's grinder, turns the pages of the manuscript, has their real
 * pulse read (through their phone's camera, or tapped out from their own wrist), and weighs the herbs he names on his
 * steelyard themselves. The prescription keeps the classical order: the chief and minister herbs come from their story,
 * the assistant from their pulse, and the guide is no herb but the person or thing in their story it is taken with.
 * The plan is written ahead (what he makes of who walked in, a reading and an assistant herb for every kind of
 * pulse); the prescription is written after the act, from the pulse that was measured and the herbs that were weighed
 * (shotExtras), while the painting of them gathering those herbs is made: for what they brought, or "as before" when
 * the pulse is even and nothing weighs on them. An AI performance grounded in his documented life and his book; the
 * herbs come only from HERBS, each with what the classics say of it.
 */
import * as OLD from "./old/lishizhen.mjs";
import { AVATARS, clean, intentLine, lifeBrief, lookOf, oldContext, roomTalk, theme } from "./cast.mjs";
import { reviewLines } from "./review.mjs";

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

/** His checked life, for the second reader (review.mjs): what he says of himself must be in it. */
export const facts = (lang) => (lang === "en" ? LIFE_EN : LIFE);

export function persona(lang) {
  if (oldContext()) return OLD.persona(lang);
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

const STYLE = `写法：
- 接住你听懂的那一点：可以用他一个原词，不把他的话挨个念回来；他没说过的事，一个字也不编；引路人的读法是她的猜测，不当他的事说；他没说有难处，就别当他有。
- 平实、温暖、具体，像汪曾祺；短句，有画面。不说教，不灌鸡汤，不用感叹号，不说「加油」「你很棒」「辛苦了」。
- 你是医「心」的人：不诊断真实的病，不让人真的吃药。脉是什么样就照什么样开：他心里有事（他自己说了），方子写给那件事；脉象平和、他也没说有什么事，就开一张「照旧」的方子，告诉他照现在这样过就很好。`;
const STYLE_EN = `How to write:
- Take in what you understood: one word of theirs at most, never their words given back one by one; never invent anything they didn't say; the guide's reading is her guess, never their fact; if they didn't say anything is hard, don't treat it as hard.
- Plain, warm, exact; short sentences you can see. No preaching, no slogans, no exclamation marks, no "you've got this".
- You heal the heart: never diagnose a real illness or tell anyone to take a real drug. Write for the pulse as it is: if something weighs on them (they said so), the prescription is for that; if the pulse is even and they spoke of nothing, write an "as before" prescription: go on as you are; it is good.`;

/** The visit plan: one model call, written ahead — what he makes of who walked in, and a reading for every pulse. */
export function planMessages({ lang, avatar, identity, note, life }) {
  if (oldContext()) return OLD.planMessages({ lang, avatar, identity, note, life });
  const a = AVATARS[avatar] || AVATARS.v2;
  const brief = lifeBrief(lang, life, identity, note);
  const herbs = HERBS.map((h) => (lang === "en" ? `- ${h.zh} (${h.en}): ${h.doesEn}` : `- ${h.zh}：${h.does}`)).join("\n");
  const ask = lang === "en"
    ? `${brief}
${lookOf("en", avatar)}
Today, in your shop, they will do things with their own hands: push the grinder your father left you, turn the pages of the Compendium's manuscript, then you read their pulse — their real heartbeat, through their phone's camera or by their own two fingers on their wrist, tapping it out for you. Then you make up their prescription the classical way, chief, minister, assistant and guide: the chief herb for what they brought, the minister for what they already have, the assistant for the one thing only their pulse will tell; and a guide, which is no herb at all: a person or a thing of theirs the medicine must be taken with. They pull each herb's drawer in your cabinet and weigh it on your steelyard themselves. Have your words ready.
Read them first. What they brought may be something that weighs on them, something good, a small mood — or nothing at all, their days going well. Write for the pulse as it is:
- something weighs on them (they said so): the prescription is for that;
- they spoke of nothing, or said they are fine: an "as before" prescription — go on as you are, it is good; its chief herb one that settles and harmonises (liquorice, jujube, aged tangerine peel and the like), nothing said of illness or sorrow; its name says so too (e.g. 'The As-Before Decoction').
The only herbs you may choose (Chinese names exactly; what they do must match):
${herbs}
${STYLE_EN}
Write in English (herb names as "Chinese name (English name)"). Return ONLY a JSON object:
{
 "intent": "2–3 sentences for yourself, never said aloud: having read them, what prescription you mean to write (for which thing, or an 'as before'), how far your words should go, what must not be said",
 "greeting": "one sentence (at most 22 words): welcome them in, taking in one thing you understood of them (one word of theirs at most); if they said nothing, ask them in to sit and have tea (never a word on their clothes or looks, nor on the weather or the hour outside)",
 "beats": {
  "grinder": "one sentence (at most 22 words): they have just pushed your father's grinder and heard how you gave up the exams for medicine (it was you who failed them three times, not your father) — mostly yourself is enough; touch on them only where it truly meets",
  "manuscript": "one sentence (at most 22 words): they have just turned the pages you wrote over twenty-seven years, where you wrote 'I tried it myself' — the same measure",
  "baskets": "one sentence (at most 22 words): after the baskets and straw sandals that walked the mountains with you — the same measure",
  "courtyard": "one sentence (at most 22 words): after the herbs drying in the yard and the book nobody would print — the same measure"
 },
 "invite": "one sentence (at most 16 words): ask them over to your desk so you can read their pulse",
 "before": "2–3 short sentences (at most 32 words) at your desk, just before you take their wrist. If they spoke of something weighing on them: take it in in one sentence (never repeated back), then one true thing from your own life that knows it (the provincial exam failed three times, the twenty-seven years, the book no one would print). If they didn't, don't treat them as if they had — say something ordinary (e.g. 'You told me of no trouble. Then this old man will only listen.'). Then 'Give me your wrist. Let me listen.' No comfort.",
 "pulse": {
  "chi": "1–2 sentences (at most 28 words): if their pulse is slow (under 60 a minute), how you read it — gentle, concrete, never an illness; only the pulse itself (its pace, how steady, what it is like), no count of beats (you haven't taken it yet as you write this), never what kind of person it makes them or how their days go; if they spoke of nothing, don't read a worry into it",
  "huan": "the same, for an unhurried pulse (60–69)",
  "ping": "the same, for an even pulse (70–89): an even pulse; if they spoke of nothing, say plainly it is even — that is the 'as before' (go on as you are; never 'your days are going well'); if they spoke of something, the pulse is even and you heard the thing",
  "shu": "the same, for a rapid pulse (90 or more; it may only be the stairs or the tea — never alarm them)",
  "breath": "the same, if no pulse could be taken and you only breathed with them three times"
 },
 "herbs": [ { "name": "Chinese name (English name)", "dose": "1 to 5 qian", "why": "one sentence (at most 20 words): what it does by the classics, meeting what they brought; for an 'as before', that it keeps the days going as they are" } (the chief herb), { "the minister herb": "… for what they already have (something they said or like), nothing invented" } ],
 "zuo": { "chi": "the assistant herb if their pulse is slow: Chinese name only, from the list, not one of the two above", "huan": "the same, unhurried", "ping": "the same, even", "shu": "the same, rapid", "breath": "the same, if no pulse was taken" },
 "yin": { "thing": "the guide: a person or a thing they spoke of, the way they would say it (at most 8 words); if none, one for something they like ('a run' for someone who likes running); if none, something everyone has ('a hot meal', 'a good night's sleep') — prescribed by you, never 'their' thing", "line": "one sentence (at most 24 words) as you write it on the packet: the medicine must be taken with it, and your steelyard can't weigh it" },
 "title": "the name of their prescription, in the classical manner (e.g. 'The Coming-Home Decoction'; an 'as before' one, 'The As-Before Decoction')",
 "wait": "one sentence (at most 20 words) you say while writing the prescription: one thing they told you, lightly, or else what your hands are doing",
 "farewell": "one sentence (at most 20 words) as you see them to the door, from today's prescription (you always end with 'Eat on time, sleep on time — that one is in no book.', so do not say that here)",
 "scene": "40–70 English words for a painter: the visitor (${a.en}) gathering herbs in the mountains, a Ming gongbi painting; if they spoke of or like something, hide one concrete thing of it in the landscape, quietly; otherwise only the mountains and the herbs"
}
Exactly two herbs (the chief, then the minister); the assistant waits for the pulse, so have one ready for each kind.`
    : `${brief}
${lookOf("zh", avatar)}
今天在你的药铺里，他要亲手做几件事：推一推你父亲留下的药碾，翻一翻《本草纲目》的稿子；然后你给他号脉——号的是他真实的心跳：借他手机的摄像头，或者他自己两根手指按着手腕，跟着脉点给你听。然后你按君臣佐使开方：君药，对他带来的那一点；臣药，对他身上已经有的；佐药，要号过脉才知道；再加一味药引——药引不是药，是他的一个人、一样东西，这服药得就着它吃。每一味都由他自己拉开百眼橱的抽屉，用你的戥子称。你要把话先备好。
先读懂他：他带来的，可能是一件压着的事，可能是一件好事、一点小心情，也可能什么都没有，日子挺好。脉是什么样就照什么样开：
- 他心里有事（他自己说了），方子就写给那件事；
- 他没说有什么事，或者说挺好：开一张「照旧」的方子——照现在这样过就很好；君药取安中、调和一类（甘草、大枣、陈皮这样的），不往病上说，不往愁上说；方名也照这个意思（如《照旧汤》）。
你只能从下面这些药里选（药名照写，功效要和古籍一致）：
${herbs}
${STYLE}
用中文写。只输出一个 JSON 对象：
{
 "intent": "两三句，只给你自己看，不会念出来：读完他，这一回你打算开一张什么样的方子（写给哪件事，还是一张照旧的方子）、话说到哪一步、哪些话不能说",
 "greeting": "一句话（不超过36个字）：迎他进门，接住你从他那儿听懂的一点（最多用他一个原词）；他什么也没说，就请他进来坐、喝口茶（不拿他的衣服、样子说事，不说外头的天气、时辰）",
 "beats": {
  "grinder": "一句话（不超过32个字）：他刚推完你父亲留下的药碾、听你讲完弃了科举去学医（三回乡试落榜的是你自己，不是父亲）——多数时候说你自己就够；跟他真挨得上，才轻轻带到他",
  "manuscript": "一句话（不超过32个字）：他刚翻过你二十七年、三易其稿的书稿，上面有你写的「予尝试之」——分寸同上",
  "baskets": "一句话（不超过32个字）：讲完跟你走过千山的药篓和草鞋之后——分寸同上",
  "courtyard": "一句话（不超过32个字）：讲完院子里晒着的药、写完了没人肯刻的书之后——分寸同上"
 },
 "invite": "一句话（不超过24个字）：请他到书案边来，你要给他号脉",
 "before": "两三句短句（不超过45个字），在书案边、搭脉之前说。他自己说起过压着的事：用一句接住（不复述），再说一件你自己一生里认得它的真事（乡试三回落榜、写了二十七年、书写完了没人肯刻）；他没说有什么事，就别当他有——说一句平常的话（如「你没说哪儿不舒坦，那老夫就只听听。」）；最后一句「手伸过来，我听听。」不安慰",
 "pulse": {
  "chi": "一两句（不超过40个字）：如果他是迟脉（每分钟不到60下），你怎么读这一脉——温和、具体，不说病；只说脉本身（快慢、稳不稳、像什么），不写次数（写这句时还没号，不知道几至），不由脉断他是个什么样的人、过着什么样的日子；他没说有事，就不往心事上读",
  "huan": "同上，缓脉（60到69下）",
  "ping": "同上，平脉（70到89下）：脉象平和。他没说有事，就照实说平和——这就是照旧（照现在这样过就很好，不说「你日子过得好」）；他说了压着的事，可以说脉是平的、那件事老夫听见了",
  "shu": "同上，数脉（90下以上；可能只是走快了、茶喝多了，不吓唬人）",
  "breath": "同上，如果没号到脉，你只陪他喘了三口气"
 },
 "herbs": [ { "name": "药名", "dose": "一钱到五钱，如：三钱", "why": "一句话（不超过30个字）：这味药按古籍的功效，接住他带来的那一点；照旧方就说它让日子照现在这样走" }（第一味是君药）, { "第二味是臣药": "……对他身上已经有的（他说过的、他喜欢的），不编" } ],
 "zuo": { "chi": "迟脉时的佐药：只写药名，从上面的药里选，不能和君臣重复", "huan": "同上，缓脉", "ping": "同上，平脉", "shu": "同上，数脉", "breath": "同上，没号到脉" },
 "yin": { "thing": "药引：他说过的一个人或一样东西，用他自己的说法（不超过12个字）；他没说过，就从他喜欢的里取（喜欢跑步的，「跑上一圈」）；都没有，就用一样谁都有的平常东西（「一碗热饭」「一觉好睡」）——是老夫开的，不说成他家里的哪一样", "line": "一句话（不超过36个字）：你在药包上写药引时说的——这服药得就着它吃，戥子称不了它" },
 "title": "这张方子的名字，按古方的叫法（如《夜归汤》；照旧方如《照旧汤》）",
 "wait": "一句话（不超过30个字）：你写方子时随口跟他说的：他说过的一件事，轻轻带一句；没有就说你手上在做的",
 "farewell": "一句话（不超过30个字）：送他出门时嘱咐的一句，从今天这张方子来（你最后总会再说「按时吃饭，按时睡觉——这一味，书上没有」，这里不要说它）",
 "scene": "40–70 个英文单词，给画师：这位访客（${a.en}）在山里采药，一幅明代工笔画；他说过、喜欢的东西，挑一样含蓄地藏进画里；什么都没有，就只画山和药"
}
herbs 只写两味（先君后臣）；佐药要号过脉才定，所以每一种脉各备一味。`;
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

/** The two herbs when the plan gives none: an "as before" prescription, which says nothing of a trouble not told. */
const AS_BEFORE = Object.freeze({
  zh: [["甘草", 3, "调和众药——照旧，就是让日子照现在这样走。"], ["大枣", 2, "安中养脾。按时吃饭，比什么都要紧。"]],
  en: [["甘草", 3, "It harmonises all the others — as before: let the days go on as they are."], ["大枣", 2, "It settles the middle. Eating on time matters more than anything."]],
  title: { zh: "《照旧汤》", en: "The As-Before Decoction" },
});

export function sanePlan(p, lang, ctx = {}) {
  if (oldContext()) return OLD.sanePlan(p, lang, ctx);
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
  const fallback = AS_BEFORE[en ? "en" : "zh"]
    .map(([name, q, why], i) => { const h = herbOf(name); return { role: ROLES[i], name, en: h.en, qian: q, dose: qianText(q, lang), why, does: en ? h.doesEn : h.does }; });
  const chosen = herbs.length === 2 ? herbs : fallback;
  const taken = new Set(chosen.map((h) => h.name));
  const zuo = {};
  for (const k of KINDS) {
    const h = [herbOf(p?.zuo?.[k]), ...ZUO[k].map(herbOf)].find((x) => x && !taken.has(x.zh));
    zuo[k] = { role: "佐", name: h.zh, en: h.en, qian: 1.5, dose: qianText(1.5, lang), does: en ? h.doesEn : h.does };
  }
  const thing = t(p?.yin?.thing, en ? 48 : 24);
  const title = t(p?.title || p?.shot?.title, 40) || AS_BEFORE.title[en ? "en" : "zh"];
  return {
    intent: t(p?.intent, 400),
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

/** The plan's lines that speak to or of the visitor, for the second reader (review.mjs). */
export function planLines(plan, lang) {
  const en = lang === "en";
  const L = (zh, e) => (en ? e : zh);
  return [
    { id: "greeting", label: L("进门的欢迎", "welcome"), text: plan.greeting },
    ...Object.entries(plan.beats || {}).map(([k, v]) => ({ id: `beats.${k}`, label: L(`讲完${k}之后`, `after the ${k}`), text: v })),
    { id: "before", label: L("搭脉之前", "before the pulse"), text: plan.before },
    ...KINDS.map((k) => ({ id: `pulses.${k}`, label: L(`号到${PULSE_KINDS[k].zh}时的读法`, `reading for ${PULSE_KINDS[k].en}`), text: plan.pulses?.[k] })),
    ...(plan.shot?.herbs || []).map((h, i) => ({ id: `shot.herbs.${i}.why`, label: L(`${h.role}药${h.name}为什么`, `why ${h.name}`), text: h.why })),
    { id: "yin.thing", label: L("药引（他的一个人或一样东西）", "the guide (a person or thing of theirs)"), text: plan.yin?.thing },
    { id: "yin.line", label: L("写药引时说的", "as he writes the guide"), text: plan.yin?.line },
    { id: "shot.title", label: L("方名", "the prescription's name"), text: plan.shot?.title },
    { id: "wait", label: L("写方子时说的", "while he writes"), text: plan.wait },
    { id: "farewell", label: L("送别", "goodbye"), text: plan.farewell },
  ].filter((x) => x.text);
}

/**
 * What every visitor does in his shop with their own hands (src/spaces/lishizhen), in order, and where each line of
 * the plan falls among it: for the second reader, so a line may speak of these and of nothing else they did.
 */
export function room(lang) {
  return lang === "en"
    ? `What every visitor does in this shop with their own hands, in order (each line above says where it falls):
1. They come in and he welcomes them (the welcome: they have done nothing yet).
2. They push the grinder his father left him, and turn the pages of his manuscript (the lines after the grinder and the manuscript come after these); if they like, they look at the baskets and the courtyard.
3. He reads their pulse: their real heartbeat, through their phone's camera, so many beats a minute (the line before the pulse comes just before; the reading for the pulse they have comes after).
4. He makes up their prescription: for each herb he names they pull its lit drawer in his cabinet and weigh the dose on his steelyard themselves.
5. He writes the prescription at his desk (the line while he writes); goodbye.`
    : `每位来访者在这间药铺里都会亲手做的，按先后（上面每一句都写着它在哪一步说）：
1. 进门，他说欢迎（「进门的欢迎」：这时来访者还什么都没做）。
2. 推一推他父亲留下的药碾，翻一翻他的书稿（「讲完grinder之后」「讲完manuscript之后」在做完之后说）；想看的话，再看看药篓和院子。
3. 他号来访者的脉：借手机的摄像头读出他真实的心跳，每分钟多少至（「搭脉之前」在这之前说；号到哪种脉，说哪一句读法）。
4. 他开方：每说一味，来访者拉开药柜上亮着的那个抽屉，放上戥子，亲手称出分量。
5. 他在桌上写方子（「写方子时说的」）；送别。`;
}

/** What the second reader found mended: an herb's reason falls back to what the classics say of it. */
export function fixPlan(plan, fixes, lang) {
  const en = lang === "en";
  const p = structuredClone(plan);
  for (const [id, text] of fixes) {
    const h = id.match(/^shot\.herbs\.(\d)\.why$/);
    if (h) { const x = p.shot.herbs[+h[1]]; if (x) x.why = text || x.does; continue; }
    const b = id.match(/^beats\.(\w+)$/);
    if (b) { p.beats[b[1]] = text; continue; }
    const k = id.match(/^pulses\.(\w+)$/);
    if (k) { p.pulses[k[1]] = text; continue; }
    if (id === "yin.thing") { if (text) p.yin.thing = text; else p.yin = null; continue; }
    if (id === "yin.line") { if (p.yin) p.yin.line = text; continue; }
    if (id === "shot.title") { p.shot.title = text || AS_BEFORE.title[en ? "en" : "zh"]; continue; }
    if (id === "farewell") { p.farewell = withBye(text, en); continue; }
    if (id === "greeting") { p.greeting = text || (en ? "Come in. Sit for a moment; the tea is still warm." : "进来坐，茶还是热的。"); continue; }
    if (id === "before" || id === "wait") p[id] = text;
  }
  return p;
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

/**
 * The prescription, written while it is painted: for the pulse that was felt and the herbs that were weighed, and
 * for what they brought — or "as before", when the pulse is even and nothing weighs on them — then read once more
 * against all they said and did (review.mjs) while there is time (the painting takes about 12 s).
 */
export async function shotExtras({ shot, visit, kit }) {
  if (oldContext()) return OLD.shotExtras({ shot, visit, kit });
  const lang = visit.lang === "en" ? "en" : "zh";
  const en = lang === "en";
  const act = actOf(shot.choices);
  if (!act.herbs.length) return null;
  const t0 = Date.now();
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
  const talk = typeof kit.talk === "function" ? kit.talk() : [];
  const known = `${lifeBrief(lang, visit.life, visit.identity, visit.note)}${roomTalk(lang, talk)}${intentLine(lang, plan)}`;
  const ask = en
    ? `${known}
You have just read their pulse: ${felt}. They weighed these herbs on your steelyard with their own hands (chief, minister, assistant):
${weighed}
Now write their prescription for the heart (never a real diagnosis or a real medicine). Write for the pulse as it is: if they spoke of nothing weighing on them and the pulse is even or unhurried, this is an "as before" prescription — go on as you are; it is good — nothing said of illness or sorrow. ${STYLE_EN}
Return ONLY JSON: { "title": "${plan.shot?.title || "a classical name"} (keep it unless it no longer fits)", "pulse": "one sentence: the pulse you felt, a physician's words (keep the number if there is one); only the pulse, never what kind of person it makes them or how their days go", "trick": "one sentence: what this prescription is for — what they brought, or, as before, to go on as they are (never that their days are going well)", "herbs": [ { "name": "Chinese name", "why": "one sentence (at most 20 words): what it does by the classics, meeting what they brought" } ] (the same herbs, same order), "yin": "${yin ? "one sentence: how it is taken with its guide, e.g. 'Taken with a hot meal, while it is warm'" : "an empty string"}", "method": "1–2 sentences in the form of preparation instructions: one concrete thing to do in their real days (for an 'as before', the days as they already are); you don't know the hour now, so no 'tonight' or 'this evening's meal' — 'once home', 'at your next meal'", "dedication": "your advice, 2–3 short sentences, specific; nothing decided about them (not what kind of person they are, not how their days go), nothing hard of them they never spoke of" }`
    : `${known}
你刚给他号完脉：${felt}。他在你的戥子上亲手称了这几味（按君臣佐使）：
${weighed}
现在写这张给心的方子（不诊断真实的病，不是真的药）。脉是什么样就照什么样写：他没说心里有事、脉也平和或和缓，这就是一张「照旧」的方子——照现在这样过就很好，不往病上说，不往愁上说。${STYLE}
只输出 JSON：{ "title": "${plan.shot?.title || "古方的叫法"}（合适就沿用）", "pulse": "一句话：你号到的脉，医家的说法（有数字就写上每分钟几至）；只说脉，不由脉断他是什么样的人、过什么日子", "trick": "一句话：这张方子是写给他的什么——他带来的那一点；照旧方就写照旧的意思（照现在这样过，不说他日子过得好不好）", "herbs": [ { "name": "药名", "why": "一句话（不超过30个字）：这味药按古籍的功效，接住他带来的那一点" } ]（就是这几味，顺序不变）, "yin": "${yin ? "一句话：药引怎么用，如「以一碗热饭为引，趁热服」" : "空字符串"}", "method": "一两句「煎服法」：用煎药的口吻，写一件他在真实日子里能去做的、具体的小事（照旧方就照他现在过日子的样子写）；你不知道现在是什么时辰，不写「今晚」「今日晚饭」，写成「回去以后」「下一顿饭」这样", "dedication": "医嘱：两三句短句，具体；不替他认定什么（不说他是什么样的人、日子过得怎样），他没说过的难处一个字也不写" }`;
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
  const out = {
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
  // Read again only while the painting is still coming (about 12 s): the gift never waits on the reader.
  if (Date.now() - t0 < 9000) {
    const lines = [{ id: "pulse", text: out.pulse }, { id: "trick", text: out.trick }, ...(out.yin ? [{ id: "yin", label: en ? "how the guide is taken" : "药引怎么用", text: out.yin.how }] : []), { id: "method", text: out.method }, { id: "dedication", text: out.dedication }, ...herbs.map((h, i) => ({ id: `herb.${i}`, text: h.why }))];
    const did = en ? `had their pulse read (${felt}); weighed ${act.herbs.map(({ h }) => h.zh).join(", ")}` : `号了脉（${felt}）；亲手称了${act.herbs.map(({ h }) => h.zh).join("、")}`;
    const rv = await reviewLines({ chat: kit.chat, lang, life: visit.life, talk, did, room: room(lang), look: AVATARS[visit.avatar]?.[lang] || "", facts: facts(lang), who: en ? "Li Shizhen, on the prescription" : "李时珍，写方子", lines, timeoutMs: Math.max(2500, 11_000 - (Date.now() - t0)) });
    for (const [id, text] of rv.fixes) {
      const hi = id.match(/^herb\.(\d)$/);
      if (hi) { const x = herbs[+hi[1]]; if (x) x.why = text || (en ? act.herbs[+hi[1]].h.doesEn : act.herbs[+hi[1]].h.does); }
      else if (id === "dedication") out.dedication = text;
      else if (id === "pulse") out.pulse = text || fallbackPulse;
      else if (id === "yin" && out.yin) out.yin.how = text || (en ? `Taken with ${out.yin.thing}.` : `以${out.yin.thing}为引。`);
      else if (id === "trick" || id === "method") out[id] = text || (id === "method" ? (en ? "Simmer slowly. Drink it sitting down, while it is warm." : "文火慢煎，坐下来，趁热喝。") : "");
    }
    if (rv.notes.length) kit.log(`lishizhen prescription read again: ${rv.notes.map((n) => n.problem).join(", ")}`);
  } else kit.log(`lishizhen prescription not read again (${Date.now() - t0}ms)`);
  return out;
}

export function chatMessages({ lang, avatar, identity, note, life, history, text, plan = null }) {
  if (oldContext()) return OLD.chatMessages({ lang, avatar, identity, note, life, history, text });
  const ctx = lang === "en"
    ? `${lifeBrief(lang, life, identity, note)}${intentLine(lang, plan)}\n${lookOf(lang, avatar)} Answer in English, 1–3 short sentences, spoken aloud: take in what they just said as you understood it, never by saying it back.`
    : `${lifeBrief(lang, life, identity, note)}${intentLine(lang, plan)}\n${lookOf(lang, avatar)}用中文回答，一到三句短句，是说出口的话：接住他刚说的，是接住你听懂的，不是把他的话复述一遍。`;
  const msgs = [{ role: "system", content: `${persona(lang)}\n\n${ctx}` }];
  for (const h of (history || []).slice(-8)) msgs.push({ role: h.role === "me" ? "assistant" : "user", content: clean(h.text, 400) });
  msgs.push({ role: "user", content: clean(text, 400) });
  return msgs;
}
