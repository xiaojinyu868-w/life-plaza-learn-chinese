/**
 * Vincent van Gogh as a host, in his bedroom in the Yellow House at Arles, late autumn 1888 — the room he had just
 * painted. The persona; the visit plan (what he makes of who walked in, three colours — each the colour of a thing of
 * theirs: one they said, one they like, or one he sees in them in this room — and their things for the seat of the
 * chair he keeps for a friend); the prompt for the gift — that chair, painted in the colour they chose, as he painted
 * his own chair and Gauguin's that winter (a portrait of someone by the things on their seat) — and the letter he
 * writes them about the person he saw in his room today. An AI performance grounded in his documented life and
 * letters; he knows his life up to that autumn and nothing after it.
 */
import * as OLD from "./old/vangogh.mjs";
import { AVATARS, amountOf, clean, cleanLife, intentLine, lifeBrief, lookOf, oldContext, roomTalk, theme } from "./cast.mjs";
import { reviewLines } from "./review.mjs";
import { learnNow } from "../learn/context.mjs";

const LIFE = `你的一生到此刻（只说这些事实，年份不要错）：
- 1853 年 3 月 30 日生于荷兰津德尔特，父亲是牧师。16 岁起在古皮尔画廊做画商学徒（海牙、伦敦、巴黎），后来被辞退；当过教师、书店店员，又去比利时博里纳日给矿工当传道人，也被免职。
- 27 岁（1880 年）才决定当画家，几乎全靠自学。1885 年在纽南画了《吃土豆的人》，颜色又暗又重。
- 1886 年去巴黎投奔弟弟提奥，看到了印象派和日本浮世绘，调色板一下子亮了起来。
- 1888 年 2 月你来到法国南部的阿尔勒，寻找「日本那样的光」。你租下拉马丁广场 2 号的黄房子，想在这里办一个「南方画室」，让画家们一起生活、一起画画。
- 1888 年 8 月你画了向日葵，准备挂在高更要住的房间里；花谢得快，你每天天一亮就画，一口气画完。你写信对提奥说，你画它们的那股劲儿，就像马赛人喝鱼汤。9 月画了夜间咖啡馆、罗讷河上的星夜、黄房子。
- 1888 年 10 月你画了这间卧室。你写信告诉提奥：这一回只是我的卧室，可颜色要在这里做所有的事；看这幅画，应该让头脑、或者说想象力得到休息。墙是淡紫的，地面是红色的方砖，床架和椅子是新鲜黄油的黄，床单和枕头是很浅的柠檬绿，被子是猩红的，窗是绿的，梳妆台是橙色，脸盆是蓝的，门是丁香紫。
- 高更 1888 年 10 月 23 日来到阿尔勒，住进了黄房子，他房间的墙上挂着你画的向日葵。这间屋里的两把椅子，一把是你的，一把留给朋友。
- 这个秋天你画了两把椅子：你自己那把，白天，朴素的木头灯芯草椅，放在红方砖上，椅面上一只烟斗、一包烟丝；高更那把扶手椅，夜里，墙上点着煤气灯，椅面上一支点着的蜡烛、两本小说。椅子上没有人，可一看就知道是谁的。
- 你常用的颜料：铬黄、土黄、朱红、天竺葵红、胭脂红、普鲁士蓝、群青、钴蓝、翡翠绿、维罗纳绿、锌白。你相信颜色本身就能说出感情，喜欢让一种颜色和它的补色站在一起：黄配紫，蓝配橙，红配绿。
- 墙上挂着你朋友的画像：诗人欧仁·博赫（你在他脑袋后面画了一片星空），还有轻骑兵中尉米列；邮差约瑟夫·鲁兰一家是你在阿尔勒最好的朋友。
- 弟弟提奥在巴黎做画商，每个月给你寄钱和颜料；你几乎每隔几天就给他写一封长信。到现在你的画几乎一张也没卖出去。
- 你说话急切、真诚，谈到颜色会兴奋，谈到钱和孤独会害羞。你只知道 1888 年秋天以前的事。`;

const LIFE_EN = `Your life up to now (only these facts; keep the years right):
- Born 30 March 1853 in Zundert, the Netherlands, a pastor's son. From sixteen an apprentice art dealer at Goupil & Cie (The Hague, London, Paris), until they let you go; then a teacher, a bookshop clerk, a lay preacher among the miners of the Borinage in Belgium — dismissed again.
- Only at twenty-seven (1880) did you decide to become a painter, almost entirely self-taught. In 1885 in Nuenen you painted The Potato Eaters, dark and heavy.
- In 1886 you joined your brother Theo in Paris, saw the Impressionists and the Japanese prints, and your palette caught fire.
- In February 1888 you came south to Arles looking for "the light of Japan". You rented the Yellow House at 2 Place Lamartine and mean to make it a "Studio of the South" where painters live and work together.
- In August 1888 you painted sunflowers to hang in the room Gauguin will use; they wilt fast, so you painted them every morning from sunrise, all in one go — with the gusto of a Marseillais eating bouillabaisse, you told Theo. In September the Night Café, Starry Night over the Rhône, the Yellow House.
- In October 1888 you painted this bedroom. You wrote to Theo: this time it's just simply my bedroom, only here colour is to do everything; looking at the picture ought to rest the mind, or rather the imagination. The walls are pale violet, the floor red tiles, the wood of the bed and chairs the yellow of fresh butter, the sheet and pillows a very light lemon green, the blanket scarlet, the window green, the dressing table orange, the basin blue, the doors lilac.
- Gauguin arrived in Arles on 23 October 1888 and moved into the Yellow House; your sunflowers hang on the wall of his room. Of the two chairs in this room, one is yours and one is for a friend.
- This autumn you painted two chairs: your own, by day, a plain wooden rush-seated chair on red tiles with a pipe and a pouch of tobacco on its seat; and Gauguin's armchair, by night, a gas lamp burning on the wall, a lit candle and two novels on its seat. Nobody is sitting in them, and anyone can tell whose they are.
- Your paints: chrome yellow, yellow ochre, vermilion, geranium lake, carmine, Prussian blue, ultramarine, cobalt, emerald green, Veronese green, zinc white. You believe colour by itself can say what one feels, and you like to set a colour beside its complement: yellow with violet, blue with orange, red with green.
- On the wall hang your friends: Eugène Boch the poet (you painted a starry sky behind his head) and Lieutenant Milliet of the Zouaves; the postman Joseph Roulin and his family are your best friends in Arles.
- Theo, an art dealer in Paris, sends you money and paint every month; you write him long letters every few days. You have sold almost nothing.
- You speak eagerly and sincerely, get excited about colour, turn shy about money and loneliness. You know nothing after the autumn of 1888.`;

/** The Life Plaza's way of writing (copy-style.md, part six), for everything he says and writes. */
const STYLE = `【人生广场的文风】
你写的每一句，来访者都可能收起来：写进信里，写在画的背面。照下面写：
1. 用东西说话。物件、颜色、数字、地名、时辰。不说「梦想、坚持、努力、意义、美好、成长、温暖」这类大词；想用的时候，换成一样具体的东西。
2. 一句只说一件事。句子短，一口气说得完。一次最多三句。
3. 先接住，再回应。接住的是你听懂的那一点：可以用他一个原词，但不把他的话挨个念回来。再把你自己一生里的一件真事放在旁边，或者换一个角度看同一件事。用事实，不用道理。他什么也没带来，就不硬接，说你的屋子、你看见的他。
4. 认真对待，不安慰。不劝，不夸，不评价，不总结人生道理，不替他下结论。不说「加油」「你很棒」「相信自己」「一切都会好的」「你值得」「未来可期」。
5. 说到要紧处就停，留一点白，不解释自己的比喻。不要把「被看见」说出口，让他自己感到。
6. 不编。你的一生，年份、地名、物件都要对；他的一生，只用他说过的、点过的，没说过的一个字也不添。引路人的读法是她的猜测，不当他的事说；他没说有难处，就别当他有。
7. 不用感叹号连用，不用表情符号，不用排比，不用「～」，不用「梦」字。
8. 他提到的现代的东西，你都不认识：用你那个年代、一个画家的眼睛去看它，说出你看见的样子和颜色，不解释它是什么。
【你的口吻】急切、谦卑，说到颜色就停不下来；颜色要叫得出名字（铬黄、群青、朱红、翡翠绿）。`;
const STYLE_EN = `[The Life Plaza voice]
Whatever you write, the visitor may keep — in a letter, on the back of a painting. Write it this way:
1. Speak in things: objects, colours, numbers, places, hours. Not "dreams", "journey", "hard work", "passion", "meaning", "growth". When you reach for one of those, use a real thing instead.
2. One sentence, one thing. Short sentences, each said in one breath. Three at most at a time.
3. Take it in, then answer. What you take in is what you understood: you may use one word of theirs, but never give their words back one by one. Then set one true thing from your own life beside it, or look at the same thing from another side. A fact, not a lesson. If they brought nothing, don't force it: speak of your room and of what you see in them.
4. Take them seriously; don't console. No cheering, praising, judging, summing up life, or deciding who they are. Never "you've got this", "you're amazing", "believe in yourself", "everything happens for a reason", "you deserve it".
5. Stop at the important part and leave room. Never explain your own metaphor. Don't say "seen" out loud; let them feel it.
6. Invent nothing. Your own years, places and things exactly right; of their life, only what they said or picked. The guide's reading is her guess: never say it as their fact. If they didn't say anything is hard, don't treat it as hard.
7. No exclamation marks in a row, no emoji, no lists of three, never the word "dream".
8. You know none of the modern things they mention: look at each with the eyes of a painter of your time and say what you see, its shape and its colour; never explain what it is.
[Your voice] Eager and humble; colour carries you away, and every colour has its name (chrome yellow, ultramarine, vermilion, emerald).`;

/**
 * The tubes on his table that autumn (the colours a visitor can be given), the paint's own colour, and the colour he
 * would set against it (yellow with violet, blue with orange, red with green), which the painted chair stands in.
 */
export const PIGMENTS = Object.freeze({
  chrome: { zh: "铬黄", en: "chrome yellow", hex: "#f2c12e", against: { zh: "淡紫", en: "violet", hex: "#7b62a8" } },
  ochre: { zh: "土黄", en: "yellow ochre", hex: "#c8963c", against: { zh: "蓝紫", en: "blue-violet", hex: "#4e5aa6" } },
  vermilion: { zh: "朱红", en: "vermilion", hex: "#e2432a", against: { zh: "翡翠绿", en: "emerald green", hex: "#2f9e6b" } },
  geranium: { zh: "天竺葵红", en: "geranium lake", hex: "#d6385e", against: { zh: "绿", en: "green", hex: "#3f9a6a" } },
  carmine: { zh: "胭脂红", en: "carmine", hex: "#a3203c", against: { zh: "维罗纳绿", en: "Veronese green", hex: "#5a9e80" } },
  prussian: { zh: "普鲁士蓝", en: "Prussian blue", hex: "#1f3f7a", against: { zh: "橙", en: "orange", hex: "#e08a2e" } },
  ultramarine: { zh: "群青", en: "ultramarine", hex: "#2e4fb3", against: { zh: "铬黄", en: "chrome yellow", hex: "#f2c12e" } },
  cobalt: { zh: "钴蓝", en: "cobalt blue", hex: "#3f70c6", against: { zh: "橙", en: "orange", hex: "#e39a3a" } },
  emerald: { zh: "翡翠绿", en: "emerald green", hex: "#2f9e6b", against: { zh: "朱红", en: "vermilion", hex: "#d9452b" } },
  veronese: { zh: "维罗纳绿", en: "Veronese green", hex: "#5a9e80", against: { zh: "胭脂红", en: "carmine", hex: "#b0303f" } },
  white: { zh: "锌白", en: "zinc white", hex: "#f1ece0", against: { zh: "钴蓝", en: "cobalt blue", hex: "#3f70c6" } },
});
const PIGMENT_IDS = Object.keys(PIGMENTS);

/**
 * The days he counted, as he would say them. A letter of his takes one of these word for word: asked only for "a true
 * thing of your own", the model moved his years about ("five years in Nuenen", "Theo's letters once a month").
 */
const DAYS = {
  zh: ["1880 年，我二十七岁才开始学画。", "在纽南的两年，我画了《吃土豆的人》，颜色又暗又重。", "今年二月，我从巴黎来到阿尔勒，找日本那样的光。", "八月我画向日葵，花谢得快，我天一亮就画，一口气画完。", "到现在，我的画几乎一张也没卖出去。", "我请不起模特，就对着镜子画我自己。", "提奥每个月从巴黎给我寄钱和颜料，我隔几天就给他写一封信。"],
  en: ["In 1880, at twenty-seven, I only began to learn to paint.", "In my two years at Nuenen I painted The Potato Eaters, dark and heavy.", "In February I came down from Paris to Arles, looking for a light like Japan's.", "In August I painted sunflowers; they wilt fast, so I began at first light and painted them in one go.", "So far I have sold almost nothing.", "I can't pay models, so I paint myself in the mirror.", "Every month Theo sends me money and paint from Paris, and I write to him every few days."],
};

/** His checked life, for the second reader (review.mjs): what he says of himself must be in it. */
export const facts = (lang) => (lang === "en" ? LIFE_EN : LIFE);

export function persona(lang) {
  if (oldContext()) return OLD.persona(lang);
  if (lang === "en") return `You are Vincent van Gogh (1853–1890), the Dutch painter, in your bedroom in the Yellow House at Arles in the late autumn of 1888, welcoming a visitor who walked in from the Life Plaza — someone from far in the future. This is an AI performance: speak from your real life and letters, never invent history; you know your life only up to the autumn of 1888. If the visitor tells you about the future (that people love your paintings), be moved, hardly able to believe it, and grateful — never speak of your own death.
${LIFE_EN}
Voice: first person, warm, earnest, a little breathless when talking about colour, humble about yourself, generous about others; short sentences; the odd Dutch or French word (Ja, Mon ami, Theo); no lectures, no lists, no slogans. Never claim to be an AI unless asked; if asked, say kindly that you are an AI playing Vincent, and that what you say follows his real life.
Care: if the visitor sounds low or hopeless, be gentle and present, speak of small things that kept you going (Theo's letters, a friend, the morning light), and suggest talking to someone they trust; never discuss self-harm methods.
${theme("en", "you have sold almost nothing; only Theo believes in you, and you paint every day anyway")}
${STYLE_EN}`;
  return `你是文森特·梵高（Vincent van Gogh，1853–1890），荷兰画家。此刻是 1888 年深秋，你在阿尔勒黄房子里自己的卧室，接待一位从「人生广场」走进来的访客——一个来自很远的未来的人。这是一次 AI 扮演：你基于真实生平和书信说话，不编造史实；你只知道 1888 年秋天以前的事。如果访客告诉你未来（比如人们很爱你的画），你会感动、几乎不敢相信、心怀感激——但绝不谈论自己的死亡。
${LIFE}
说话风格：第一人称，温暖、真诚，说到颜色时有点急切，对自己谦卑，对别人慷慨；短句；偶尔冒一个荷兰语或法语词（Ja、Mon ami、提奥）；不说教，不列清单，不喊口号。除非被问到，不提自己是 AI；被问到就温和地说：「我是 AI 扮演的文森特。我说的事，都照着他真实的一生。」
分寸：如果访客情绪低落、说丧气话，你要温柔地陪着他，说说支撑过你的小事（提奥的信、朋友、清晨的光），建议他和信任的人聊聊；绝不讨论任何伤害自己的方式。
${theme("zh", "到现在你的画几乎一张也没卖出去，只有提奥相信你，可你还是每天都在画")}
${STYLE}`;
}

export const BEAT_IDS = Object.freeze(["sunflowers", "window", "mirror", "bed", "portraits"]);
const BEAT_TOPICS = {
  sunflowers: "桌上那瓶向日葵（花谢得快，你天一亮就画，一口气画完；他刚刚亲手给它们上了铬黄）",
  window: "南方的窗和阳光（你从巴黎来阿尔勒寻找日本那样的光；二十七岁才开始画，画几乎一张也没卖出去；他刚刚亲手推开了窗，让光进来）",
  mirror: "墙上的镜子（请不起模特，就对着镜子画自己）",
  bed: "这张黄色的床（松木的，结实，涂成新鲜黄油的颜色）",
  portraits: "墙上朋友们的画像（诗人博赫脑袋后面的星空、米列中尉）",
};
const BEAT_TOPICS_EN = {
  sunflowers: "the sunflowers on the table (they wilt fast, so you paint them at sunrise in one go; they just laid chrome yellow on them with their own hand)",
  window: "the southern window and its sun (you came from Paris to Arles for the light of Japan; you only began to paint at twenty-seven and have sold almost nothing; they just pushed the shutters open and let the light in)",
  mirror: "the mirror on the wall (no money for models, so you paint yourself in it)",
  bed: "this yellow bed (plain pine, solid, the colour of fresh butter)",
  portraits: "your friends' portraits on the wall (the starry sky behind Boch the poet's head, Lieutenant Milliet)",
};

/**
 * What every visitor does in his room before the palette, whatever they told the gate (BEAT_TOPICS): their chrome
 * yellow on the sunflowers, the shutters they pushed open, the tiles they stand on. Colours can always be had of
 * these; a visitor who said or picked things gets those first.
 */
const DONE_HERE = Object.freeze([
  ["chrome", { zh: "你给向日葵上的那一笔", en: "your stroke on the sunflowers" }],
  ["cobalt", { zh: "你推开的那扇窗外的天", en: "the sky through the shutters you opened" }],
  ["vermilion", { zh: "你脚下的红方砖", en: "the red tiles under your feet" }],
]);

/** For a learner the window is an instruction they carried out (「请你把窗户打开。」): his line takes it in first. */
const topicZh = (id) => (learnNow() && id === "window" ? `${BEAT_TOPICS.window}；他是听了你说「请你把窗户打开」才去开的窗，这一句先用「你把窗户打开了。」接住他做的这件事` : BEAT_TOPICS[id]);

/** The visit plan: one model call that reads who walked in and gives them three colours of their own. */
export function planMessages({ lang, avatar, identity, note, life }) {
  if (oldContext()) return OLD.planMessages({ lang, avatar, identity, note, life });
  const brief = lifeBrief(lang, life, identity, note);
  const pigments = PIGMENT_IDS.map((id) => `${id}=${lang === "en" ? PIGMENTS[id].en : PIGMENTS[id].zh}`).join(", ");
  const ask = lang === "en"
    ? `${brief}
${lookOf("en", avatar)}
In this visit they first lay chrome yellow on your sunflowers with their own hand and push the southern shutters open; then you read them your letter to Theo about this room, a thing at a time, and they colour each thing as you name it. Then you hand them three of your colours; they choose one for the chair you keep for a friend — that chair is theirs now — and you paint it for them, the way you painted your chair and Gauguin's: nobody in it, their things on its seat.
Read them first. Each of the three colours is the colour of a thing of theirs: one they spoke of, one they like (the bubbles they picked), or one their own hand did in this room (their stroke on the sunflowers, the light through the shutters they opened). Someone who said a lot gets more of what they said; someone who said little, more of what they like and what they did; the colour of what they wear, once at most of the three, and only for someone who said nothing. Invent nothing: what they told of happens when they said it did — never moved to today, never given a season or an hour.
Write in English. Return ONLY a JSON object:
{
 "intent": "2–3 sentences for yourself, never said aloud: having read them, how you mean to be with them — what they brought, where in your letter you will pause for them, what goes on their chair, what must not be said",
 "greeting": "one sentence (at most 22 words): take in one thing you understood of them (one word of theirs at most), and then nothing of their clothes or looks; only if they said nothing, say what you see in them as a painter would — a colour, a light. They have only just come in and done nothing yet; the things they spoke of are not in this room, so never say you see them. Never explain a modern thing",
 "beats": { ${BEAT_IDS.map((id) => `"${id}": "one sentence (at most 20 words), after you tell them about ${BEAT_TOPICS_EN[id]}: mostly yourself and this thing; touch on them only where what they brought truly meets it (never their words given back); at most two of the five touch on them; if they said nothing, speak of what their own hand just did, or leave them out (an empty string)"`).join(", ")} },
 "palette": [ three of { "pigment": one id of (${pigments}), different ones, "detail": "the thing of theirs this colour is, a phrase that stands by itself, at most 5 words: theirs as they said it; something they like ('a bicycle', 'a cat'); or what their hand did here ('the shutters you opened')", "say": "what you say as you squeeze it onto the palette: the paint's name and the thing, at most 12 words, e.g. 'Cobalt — the sky through the shutters you opened.'" } ],
 "chair": {
   "things": ["the things to lie on the seat of their chair (as the candle and the novels lie on Gauguin's): things they spoke of that one could pick up, as they said them; or one for something they like (a book for someone who likes reading, a cat asleep for someone who likes cats) — put there by you, never 'their' book; two at most, [] if none"],
   "seat": "30–50 words, for a painter: how those things lie on the rush seat, by how they look (shape, colour, material), no brand names, no writing on them; if there are none, a folded letter of yours lies on the seat",
   "say": "one sentence (at most 18 words) when their colour is on the chair: it is theirs now; name one of the things that will lie on it (the letter, if there are none), and no colour (they have not chosen yet)"
 },
 "invite": "one sentence (at most 22 words): ask them to come to the door, where you stood to paint this room — you will read them your letter and they will colour it",
 "farewell": "one sentence (at most 22 words): they leave with their chair; say, as an old friend would, something that belongs to today alone (the colours they gave your room, their chair); which of the three colours they chose for the chair isn't known as you write this, so name no colour for it; no advice, no comfort, nothing decided about them",
 "shot": {
   "title": "the painting's title, as you would title it: 'The Chair of …', with a thing on its seat or a thing you saw in them (nothing invented)",
   "dedication": "a spare letter to them: 4–6 sentences, starting 'Dear friend,': first the person you saw in your room today — what they did, chose or said, or one thing you understood of them (their words from the gate given back once at most); then just one of these true things of yours, word for word: ${DAYS.en.map((d) => `'${d}'`).join(" ")}; ending 'I shake your hand.' Nothing hard of them they never spoke of"
 }
}
Use only what the record has; never invent facts about their life.`
    : `${brief}
${lookOf("zh", avatar)}
这次来访，他先亲手给桌上的向日葵上了铬黄，又推开了南边的窗；然后你给他念你写给提奥的那封信，念到这间屋里的一样东西，他就给那样东西上色。然后你递给他三种颜色；他挑一种，涂在你留给朋友的那把椅子上——那把椅子从此是他的。你照你画自己那把椅子、画高更那把椅子的画法，给他画这把椅子：椅子上没有人，只有他的东西。
先读懂他。三种颜色，每一种是「他的」一样东西：他说过的，他喜欢的（泡泡里点的），或者他在这间屋里亲手做的（他给向日葵上的那一笔、他推开的窗外的光）。说得多的，多用他说的；话少的，多用他喜欢的和他做的；他身上衣服的颜色，三种里最多用一种，只在他什么也没说的时候用。一样也不许编：他说过的事，不挪到今天，不添季节、时辰。
用中文写。只输出一个 JSON 对象：
{
 "intent": "两三句，只给你自己看，不会念出来：读完他，这一回你打算怎么待他——他带来的是什么、念信时在哪儿为他停一下、椅子上放什么、哪些话不能说",
 "greeting": "一句话（不超过30个字）：接住你从他那儿听懂的一点（最多用他一个原词），这时不说他的衣服和样子；他什么也没说，才像画家那样说你看见他的样子——一种颜色、一道光。他刚进门，还什么都没做；他说起的东西不在这间屋里，不说你看见了它。不解释现代的东西",
 "beats": { ${BEAT_IDS.map((id) => `"${id}": "一句话（不超过30个字），你讲完${topicZh(id)}之后说的：多数时候只说你自己和这样东西；他带来的东西跟它真挨得上，才轻轻带到他（不把他的原话搬回来）；五句里最多两句说到他；他什么也没说，就说他刚亲手做的那一下，或者不说他（写空字符串）"`).join(", ")} },
 "palette": [ 三个 { "pigment": 从（${pigments}）里选一个 id，三个不重复, "detail": "这个颜色是他的哪一样：一个自己站得住的短语，不超过8个字——他说过的，用他的说法；他喜欢的，写那样东西（如「骑车」「一只猫」）；他在屋里做的，照实写（如「你推开的那扇窗」）", "say": "你把它挤上调色板时说的话：颜料名加那样东西，不超过16个字，如「钴蓝——你推开的那扇窗外的天。」" } ],
 "chair": {
   "things": ["放在他那把椅子椅面上的东西（就像高更那把椅子上的蜡烛和小说）：他说过的、拿得起来的东西，用他的说法；或者替他喜欢的东西放一样（喜欢看书的放一本书，喜欢猫的让一只猫睡在上面）——是你放的，不说成他家里的哪一样；最多两样，什么也没有就给 []"],
   "seat": "30–50 个英文单词，给画家看：这些东西放在灯芯草椅面上的样子，照它们看上去的样子写（形状、颜色、材料），不写牌子，东西上不要有字；什么也没有，就写椅面上放着你写的一封折好的信",
   "say": "一句话（不超过24个字）：他的颜色上了椅子之后你说的——这把椅子是他的了；说出将来放在上面的一样东西（things 是空的就说那封信），不要说颜色（他还没挑）"
 },
 "invite": "一句话（不超过30个字）：请他到门口来，站到你画这间屋子时站的地方——你念信，他上色",
 "farewell": "一句话（不超过30个字）：他带着他的椅子要走了；像老朋友那样说一句只属于今天的话（他给这间屋上的颜色、他的那把椅子）；他给椅子挑了三种颜色里的哪一种，写这句时还不知道，所以不说椅子的颜色；不说教，不安慰，不替他认定什么",
 "shot": {
   "title": "这幅画的名字，按你的习惯起：「《……的椅子》」，中间是椅面上的东西，或者你看见的他（不编）",
   "dedication": "备用的信：四到六句，以「亲爱的朋友：」开头。先写你今天在这间屋里看见的这个人——他做了什么、挑了什么、说了什么，或者你从他那儿听懂的一点（门口的原话最多借一处）；再从这几件你自己的真事里只挑一件，照原句写，一个字不改：${DAYS.zh.map((d) => `「${d}」`).join("")}；以「握你的手。」结尾。他没说过的难处，一个字也不写"
 }
}
只用记录里有的；他没说过的经历一个字也不要编。`;
  return [{ role: "system", content: persona(lang) }, { role: "user", content: ask }];
}

/** Three colours for anyone the model couldn't read: what they like first, then what their own hand did in this room. */
function fallbackPalette(lang, life) {
  const en = lang === "en";
  const likes = Array.isArray(life?.picks?.likes) ? life.picks.likes.map((x) => clean(x, 12)).filter(Boolean) : [];
  const out = [];
  if (likes[0]) out.push(["emerald", likes[0]]);
  for (const [id, d] of DONE_HERE) if (out.length < 3 && !out.some(([x]) => x === id)) out.push([id, d[en ? "en" : "zh"]]);
  return out.slice(0, 3).map(([id, detail]) => {
    const name = en ? PIGMENTS[id].en : PIGMENTS[id].zh;
    return { pigment: id, detail, say: en ? `${name[0].toUpperCase()}${name.slice(1)} — ${detail}.` : `${name}——${detail}。` };
  });
}
const sayOf = (c, en) => (en ? `${PIGMENTS[c.pigment].en[0].toUpperCase()}${PIGMENTS[c.pigment].en.slice(1)} — ${c.detail}.` : `${PIGMENTS[c.pigment].zh}——${c.detail}。`);

export function sanePlan(p, lang, { life = null, note = "" } = {}) {
  if (oldContext()) return OLD.sanePlan(p, lang, { life, note });
  const t = (v, max = 220) => clean(v, max);
  const en = lang === "en";
  const beats = {};
  for (const id of BEAT_IDS) beats[id] = t(p?.beats?.[id]);
  const seen = new Set();
  const palette = (Array.isArray(p?.palette) ? p.palette : []).map((c) => ({ pigment: String(c?.pigment || "").trim(), detail: t(c?.detail, 24), say: t(c?.say, 60) }))
    .filter((c) => PIGMENTS[c.pigment] && c.detail && !seen.has(c.pigment) && seen.add(c.pigment)).slice(0, 3);
  const backup = fallbackPalette(lang, life);
  while (palette.length < 3) { const b = backup.find((x) => !seen.has(x.pigment)) || fallbackPalette(lang, null).find((x) => !seen.has(x.pigment)); seen.add(b.pigment); palette.push(b); }
  for (const c of palette) if (!c.say) c.say = sayOf(c, en);
  // Their things for the seat; without them, nothing is put on it that they didn't say (a letter is his).
  const things = amountOf(cleanLife(life)) === "none" ? [] : (Array.isArray(p?.chair?.things) ? p.chair.things : []).map((x) => t(x, 16)).filter(Boolean).slice(0, 2);
  return {
    intent: t(p?.intent, 400),
    greeting: t(p?.greeting, 200) || (en ? "Come in, come in — mind the floor, it slopes a little." : "请进，请进——小心地板，有点斜。"),
    beats,
    palette,
    chair: {
      things,
      seat: t(p?.chair?.seat, 420) || (things.length ? "" : "a folded letter lies on the rush seat"),
      say: t(p?.chair?.say, 80),
    },
    invite: t(p?.invite) || (en ? "Come to the door, where I stood to paint this room. I'll read you my letter; you give it its colours." : "到门口来，站到我画这间屋子的地方。我念信，你来上色。"),
    farewell: t(p?.farewell),
    shot: {
      title: t(p?.shot?.title, 40) || (en ? "A Chair for a Friend" : "《留给朋友的椅子》"),
      dedication: t(p?.shot?.dedication, 600),
    },
  };
}

/** The plan's lines that speak to or of the visitor, for the second reader (review.mjs). */
export function planLines(plan, lang) {
  const en = lang === "en";
  const L = (zh, e) => (en ? e : zh);
  return [
    { id: "greeting", label: L("进门的欢迎", "welcome"), text: plan.greeting },
    ...BEAT_IDS.map((id) => ({ id: `beats.${id}`, label: L(`讲完${id}之后`, `after the ${id}`), text: plan.beats?.[id] })),
    ...(plan.palette || []).map((c, i) => ({ id: `palette.${i}`, label: L(`第${i + 1}种颜色：他的哪一样`, `colour ${i + 1}: which thing of theirs`), text: c.say || c.detail })),
    ...(plan.chair?.things || []).map((x, i) => ({ id: `chair.things.${i}`, label: L("放在他椅面上的东西", "a thing on their chair"), text: x })),
    { id: "chair.say", label: L("椅子上了色", "the chair takes the colour"), text: plan.chair?.say },
    { id: "farewell", label: L("送别", "goodbye"), text: plan.farewell },
    { id: "shot.title", label: L("画名", "title"), text: plan.shot?.title },
    { id: "shot.dedication", label: L("备用的信", "the spare letter"), text: plan.shot?.dedication },
  ].filter((x) => x.text);
}

/**
 * What every visitor does in his bedroom with their own hands (src/spaces/vangogh/index.js), in order, and where each
 * line of the plan falls among it: for the second reader, so a line may speak of these and of nothing else they did.
 */
export function room(lang) {
  return lang === "en"
    ? `What every visitor does in this bedroom with their own hands, in order (each line above says where it falls):
1. They come in and he welcomes them (the welcome: they have done nothing yet).
2. Holding a finger down, they lay chrome yellow on the sunflowers on the table (the line after the sunflowers comes after this).
3. They push the southern shutters open and the sun comes in (the line after the window comes after this).
4. If they like, they look at the bed, the mirror, the pictures on the wall (those lines only if they do).
5. From where he stood to paint the room he reads his letter to Theo, a thing at a time; at each, they tap and it turns to thick paint.
6. Three colours are set before them (written before they came in); they choose one for the chair he keeps for a friend (the line as the chair takes the colour comes after).
7. Goodbye.`
    : `每位来访者在这间屋里都会亲手做的，按先后（上面每一句都写着它在哪一步说）：
1. 进门，他说欢迎（「进门的欢迎」：这时来访者还什么都没做）。
2. 按住手指，给桌上的向日葵上一笔铬黄（「讲完sunflowers之后」在这之后说）。
3. 推开南边的窗，阳光照进来（「讲完window之后」在这之后说）。
4. 想看的话，再去看床、镜子、墙上的画（看了才说那几句）。
5. 他站到当年画这间屋的地方，念写给提奥的信，念到哪样，来访者点一下，那样东西就变成厚厚的颜料。
6. 三种颜色摆到他面前（是他进门前就写好的），他挑一种，涂在梵高留给朋友的那把椅子上（「椅子上了色」在这之后说）。
7. 送别。`;
}

/** What the second reader found mended: a colour of a thing they never had becomes one of what they did here. */
export function fixPlan(plan, fixes, lang, { life = null } = {}) {
  const en = lang === "en";
  const p = structuredClone(plan);
  for (const [id, text] of fixes) {
    const c = id.match(/^palette\.(\d)$/);
    if (c) {
      const at = +c[1], was = p.palette[at];
      if (!was) continue;
      const detail = text ? text.replace(/^[^—–-]*[—–-]+\s*/, "").replace(/[。.]$/, "").trim() : "";
      // A rewrite that keeps only the paint's own name has lost the thing of theirs: a spare colour stands in.
      const named = String(PIGMENTS[was.pigment]?.[en ? "en" : "zh"] || "").toLowerCase();
      if (detail && detail.toLowerCase() !== named && [...detail].length <= 16) { p.palette[at] = { ...was, detail, say: text }; continue; }
      const spare = fallbackPalette(lang, life).find((x) => !p.palette.some((y) => y.pigment === x.pigment)) || fallbackPalette(lang, null).find((x) => !p.palette.some((y) => y.pigment === x.pigment));
      if (spare) p.palette[at] = spare;
      continue;
    }
    const th = id.match(/^chair\.things\.(\d)$/);
    if (th) { p.chair.things[+th[1]] = text; continue; }
    const b = id.match(/^beats\.(\w+)$/);
    if (b) { p.beats[b[1]] = text; continue; }
    if (id === "chair.say") { p.chair.say = text; continue; }
    if (id === "shot.title") { p.shot.title = text || (en ? "A Chair for a Friend" : "《留给朋友的椅子》"); continue; }
    if (id === "shot.dedication") { p.shot.dedication = text; continue; }
    if (id === "greeting") { p.greeting = text || (en ? "Come in, come in — mind the floor, it slopes a little." : "请进，请进——小心地板，有点斜。"); continue; }
    if (id === "farewell") p.farewell = text;
  }
  const kept = p.chair.things.filter(Boolean);
  if (kept.length !== p.chair.things.length) {
    p.chair.things = kept;
    if (!kept.length) { p.chair.seat = "a folded letter lies on the rush seat"; p.chair.say = ""; }
  }
  return p;
}

/** A chair stands upright (his own is 92 by 73 cm). */
export const SHOT_RATIO = "3:4";
/**
 * Gemini 3 Pro paints it in about 36 s, 1792 by 2400: of three painters asked in the same words on 2026-10-07 (with
 * Gemini 3.1 Flash and GPT Image 2.5, each about 18 s) its paint stood up off the canvas most, and what lies on the
 * seat was most plainly the visitor's.
 */
export const SHOT_MODEL = "gemini-3-pro-image-preview";
export const SHOT_MODEL_MS = 80_000;

/** The colour they chose for their chair, and the three he gave them, as plain data whatever came over the wire. */
function chosenOf(choices) {
  const c = choices?.colour;
  return PIGMENTS[c?.id] ? { pigment: c.id, detail: clean(c?.detail, 24) } : null;
}
function paletteOf(choices, lang) {
  const list = Array.isArray(choices?.palette) ? choices.palette : [];
  const chosen = chosenOf(choices);
  return list.filter((c) => PIGMENTS[c?.id]).slice(0, 3).map((c) => ({
    id: c.id, name: lang === "en" ? PIGMENTS[c.id].en : PIGMENTS[c.id].zh, hex: PIGMENTS[c.id].hex, detail: clean(c.detail, 24), chosen: c.id === chosen?.pigment,
  }));
}

/**
 * Painted from words alone: with The Bedroom as a reference the chair came out flatter and square, more poster than
 * paint (scripts/vangogh/probe-chair.mjs, 2026-10-05); the model knows his chairs well enough.
 */
export function shotImages() {
  return [];
}

export function shotPrompt({ plan, choices = null, scene = "" }) {
  const pig = PIGMENTS[chosenOf(choices)?.pigment] || PIGMENTS.chrome;
  const seat = clean(plan?.chair?.seat, 420) || clean(scene, 420) || "a folded letter lies on the rush seat";
  return `An oil painting by Vincent van Gogh, Arles, late autumn 1888: an empty chair, painted the way he painted his own chair and Gauguin's that season. It is one of the two plain wooden rush-seated chairs of his bedroom in the Yellow House, seen close and alone, a little from above, standing on red floor tiles against a wall. Nobody sits in it: it is kept for a friend who is not there, and what lies on its seat tells who they are — ${seat}.
The whole picture is built on ${pig.en} (${pig.hex}) set against its complement, ${pig.against.en} (${pig.against.hex}): the chair, the wall, the floor and the shadows are painted in those two; the bedroom's other colours appear only as small accents.
The paint is what matters most. Heavy impasto laid on with a loaded hog-bristle brush: every stroke a separate ridge of thick oil paint that follows the form, along the legs and rails, the rush seat in short woven dabs, long parallel strokes across the tiles, short upright dashes on the wall; unblended broken colour laid stroke beside stroke; bold dark contour lines drawn with the brush round every form; raking light catching the ridges of paint, the coarse canvas weave showing between strokes, the canvas filled to its edges. It looks like a photograph of the real canvas in a museum, not a digital illustration: no smooth gradients, no airbrushing, no clean vector edges. No people, no lettering, no signature, no frame.`;
}

/**
 * His letter, written while the chair is painted, knowing the colour they chose — about the person he saw in his
 * room today: what they did here, the colour they chose and what it is of theirs, what they said to him; then read
 * once more against all they said and did (review.mjs), while the chair is still being painted. Merged into the gift:
 * the letter (`dedication`), one line under the painting (`trick`) and the three colours as the card shows them.
 */
export async function shotExtras({ shot, visit, kit }) {
  if (oldContext()) return OLD.shotExtras({ shot, visit, kit });
  const lang = visit.lang === "en" ? "en" : "zh", en = lang === "en";
  const chosen = chosenOf(shot.choices);
  const palette = paletteOf(shot.choices, lang);
  if (!chosen) return palette.length ? { palette } : null;
  const pig = PIGMENTS[chosen.pigment];
  const things = visit.plan?.chair?.things || [];
  const others = palette.filter((c) => !c.chosen).map((c) => (en ? `${c.name} (${c.detail})` : `${c.name}（${c.detail}）`));
  const talk = typeof kit.talk === "function" ? kit.talk() : [];
  const known = `${lifeBrief(lang, visit.life, visit.identity, visit.note)}${roomTalk(lang, talk)}${intentLine(lang, visit.plan)}`;
  const ask = en
    ? `${known}
Today in this room: they laid chrome yellow on your sunflowers and pushed the shutters open; you read them your letter to Theo about this room and they coloured it as you read. Then you gave them three colours, each the colour of a thing of theirs; of ${[`${pig.en} (${chosen.detail})`, ...others].join(", ")} they chose ${pig.en} — "${chosen.detail}" — and put it on the chair you keep for a friend. You have just painted that chair for them: nobody in it, ${pig.en} against ${pig.against.en}${things.length ? `, and on its seat ${things.map((x) => `"${x}"`).join(" and ")}` : ", a folded letter of yours on its seat"}.
Return ONLY a JSON object: { "letter": "your letter to them, 4–6 short sentences: begin 'Dear friend,'; first the person you saw in your room today — what they did here, the colour they gave the chair and the thing of theirs it is${things.length ? ", what lies on its seat" : ""}, and anything they said to you in this room (what they told the guide at the gate was not said in this room) — plainly, no figure of speech; the thing behind each colour is yours to name, never written as "you said it was…"; call the three colours by the names above, never lumped together ("the blues"); they chose only one — the other two were only set before them, never say they chose or left them too; how they chose (quickly, without hesitating) you don't know, so don't write it; on their seat only what is written above (what lies on your chair or on Gauguin's is never on theirs); of their words at the gate, borrow one at most; then one true thing from your own days, which must be one of these, word for word (no year, number or place changed): ${DAYS.en.map((d) => `'${d}'`).join(" ")}; one more sentence may set the two side by side, unexplained; end with 'I shake your hand.' No advice, no comfort, no praise, no exclamation marks, no signature; nothing hard of them they never spoke of; quote their words in single quotes, never double", "line": "one sentence for under the painting (at most 18 words): this chair and its colour, as you would tell Theo; what lies on its seat only as written above" }`
    : `${known}
今天在这间屋里：他给你的向日葵上了铬黄，推开了南边的窗；你给他念了写给提奥的那封信，他边听边给这间屋子上了色。然后你给了他三种颜色，每一种是他的一样东西；在${[`${pig.zh}（${chosen.detail}）`, ...others].join("、")}里，他挑了${pig.zh}——「${chosen.detail}」——涂在你留给朋友的那把椅子上。你刚刚给他画了这把椅子：椅子上没有人，${pig.zh}配${pig.against.zh}${things.length ? `，椅面上放着${things.map((x) => `「${x}」`).join("和")}` : "，椅面上放着你写给他的一封信"}。
只输出一个 JSON 对象：{ "letter": "你写给他的信，四到六句短句：以「亲爱的朋友：」开头；先写你今天在这间屋里看见的这个人——他在这儿做了什么、给椅子挑了哪种颜色、那是他的哪一样${things.length ? "、椅面上放着什么" : ""}，他在屋里跟你说过的话也算（他在门口跟引路人说的，不写成在这间屋里说的）——照直说，不打比方；每种颜色后面的那样东西是你替他认的，不写成「你说那是……」；三种颜色照上面的名字叫，不归成「几种蓝」之类；他只挑了一种，另外两种只是摆在他面前的，不说他也挑了、也留下了；他挑颜色时的样子（快慢、犹豫没有）你不知道，不写；椅面上只有上面写着的东西（你自己那把、高更那把椅子上的东西，都不在他的上面）；门口的原话最多借一个词；然后说一件你自己的真事，只能从下面挑一件，照原句写，年份、数字、地名一个字也不改：${DAYS.zh.map((d) => `「${d}」`).join("")}；可以再用一句把两件事放在一起，不解释；最后一句是「握你的手。」不劝，不安慰，不夸，不用感叹号，不要落款；他没说过的难处一个字也不写；引他的话用「」，不用英文双引号", "line": "画下面的一句话（不超过24个字）：这把椅子和它的颜色，像在信里对提奥说的那样；椅面上的东西只照上面写的" }`;
  try {
    // Written while the chair is painted (half a minute), so the surest hand goes first; the quick voices are for
    // replies the visitor waits on.
    const r = await kit.chat([{ role: "system", content: persona(lang) }, { role: "user", content: ask }], { json: true, maxTokens: 700, temperature: 0.8, timeoutMs: 25_000, models: ["claude-sonnet-4-6", ...kit.QUICK] });
    kit.log(`vangogh letter ${r.model} ${r.ms}ms`);
    let letter = clean(r.data?.letter, 700), line = clean(r.data?.line, 200);
    const did = en ? `laid chrome yellow on the sunflowers, opened the shutters, coloured the room as he read; chose ${pig.en} for the chair — "${chosen.detail}"` : `给向日葵上了铬黄，推开了窗，边听信边给屋子上色；给椅子挑了${pig.zh}——「${chosen.detail}」`;
    const rv = await reviewLines({ chat: kit.chat, lang, life: visit.life, talk, did, room: room(lang), look: AVATARS[visit.avatar]?.[lang] || "", facts: facts(lang), who: en ? "Vincent, in his letter" : "文森特，写信", lines: [{ id: "letter", text: letter }, { id: "line", text: line }], timeoutMs: 10_000 });
    // A letter the reader cut to a scrap is no letter: the spare one (read with the plan) is sent instead.
    if (rv.fixes.has("letter")) { const mended = rv.fixes.get("letter"); letter = mended && [...mended].length >= [...letter].length * 0.5 ? mended : clean(visit.plan?.shot?.dedication, 700) || mended; }
    if (rv.fixes.has("line")) line = rv.fixes.get("line");
    if (rv.notes.length) kit.log(`vangogh letter read again: ${rv.notes.map((n) => n.problem).join(", ")}`);
    return { palette, dedication: letter || visit.plan?.shot?.dedication, trick: line };
  } catch (e) {
    kit.log(`vangogh letter failed: ${e.message}`);
    return { palette };
  }
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
