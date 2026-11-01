// As it was before the gate kept a reading (main 6cefc40), word for word: used when LIFE_CONTEXT=old (cast.mjs).
/**
 * Vincent van Gogh as a host, in his bedroom in the Yellow House at Arles, late autumn 1888 — the room he had just
 * painted. The persona; the visit plan (his lines bent toward who walked in, three colours he reads in what they told
 * the guide — each the colour of a thing they said — and two of their things for the seat of the chair he keeps for a
 * friend); the prompt for the gift — that chair, painted in the colour they chose, as he painted his own chair and
 * Gauguin's that winter (a portrait of someone by the things on their seat) — and the letter he writes them. An AI
 * performance grounded in his documented life and letters; he knows his life up to that autumn and nothing after it.
 */
import { AVATARS, clean, theme, lifeBrief } from "./cast.mjs";

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
1. 用东西说话。物件、颜色、数字、地名、时辰，和他说过的原词。不说「梦想、坚持、努力、意义、美好、成长、温暖」这类大词；想用的时候，换成他那件事里的一样东西。
2. 一句只说一件事。句子短，一口气说得完。一次最多三句。
3. 先接住，再回应。先用他的原词复述一个细节；再把你自己一生里的一件真事放在旁边，或者换一个角度看同一件事。用事实，不用道理。
4. 认真对待，不安慰。不劝，不夸，不评价，不总结人生道理，不替他下结论。不说「加油」「你很棒」「相信自己」「一切都会好的」「你值得」「未来可期」。
5. 说到要紧处就停，留一点白，不解释自己的比喻。不要把「被看见」说出口，让他自己感到。
6. 不编。你的一生，年份、地名、物件都要对；他的一生，只用他说过的，没说过的一个字也不添。
7. 不用感叹号连用，不用表情符号，不用排比，不用「～」，不用「梦」字。
8. 他提到的现代的东西，你都不认识：用你那个年代、一个画家的眼睛去看它，说出你看见的样子和颜色，不解释它是什么。
【你的口吻】急切、谦卑，说到颜色就停不下来；颜色要叫得出名字（铬黄、群青、朱红、翡翠绿）。`;
const STYLE_EN = `[The Life Plaza voice]
Whatever you write, the visitor may keep — in a letter, on the back of a painting. Write it this way:
1. Speak in things: objects, colours, numbers, places, hours, and the visitor's own words. Not "dreams", "journey", "hard work", "passion", "meaning", "growth". When you reach for one of those, use a thing from their story instead.
2. One sentence, one thing. Short sentences, each said in one breath. Three at most at a time.
3. Take it in, then answer. First give back one detail in their own words; then set one true thing from your own life beside it, or look at the same thing from another side. A fact, not a lesson.
4. Take them seriously; don't console. No cheering, praising, judging, summing up life, or deciding who they are. Never "you've got this", "you're amazing", "believe in yourself", "everything happens for a reason", "you deserve it".
5. Stop at the important part and leave room. Never explain your own metaphor. Don't say "seen" out loud; let them feel it.
6. Invent nothing. Your own years, places and things exactly right; of their life, only what they said.
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

export function persona(lang) {
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

/** The concrete things the visitor said (phrases of their own story), for the palette and the chair. */
function detailsOf(life, note) {
  const l = life && typeof life === "object" ? life : {};
  const listed = (Array.isArray(l.details) ? l.details : []).map((d) => clean(d, 24)).filter(Boolean).slice(0, 8);
  if (listed.length) return listed;
  return [l.story, l.answer, note].map((s) => clean(s, 200)).filter(Boolean)
    .flatMap((s) => s.split(/[，。！？；、,.!?;]+/)).map((s) => s.trim()).filter((s) => s.length >= 2).slice(0, 6);
}

/** The visit plan: one model call that bends every line toward this visitor and reads three colours in their story. */
export function planMessages({ lang, avatar, identity, note, life }) {
  const a = AVATARS[avatar] || AVATARS.v2;
  const brief = lifeBrief(lang, life, identity, note);
  const details = detailsOf(life, note);
  const pigments = PIGMENT_IDS.map((id) => `${id}=${lang === "en" ? PIGMENTS[id].en : PIGMENTS[id].zh}`).join(", ");
  const ask = lang === "en"
    ? `${brief}
${details.length ? `Things they said, in their words: ${details.map((d) => `"${d}"`).join("; ")}\n` : ""}They look like ${a.en}.
In this visit you read them your letter to Theo about this room, a thing at a time, and they colour each thing as you name it. Then you hand them three of your colours, each the colour of one thing they told you; they choose one for the chair you keep for a friend — that chair is theirs now — and you paint it for them, the way you painted your chair and Gauguin's: nobody in it, their things on its seat.
Write in English. Return ONLY a JSON object:
{
 "greeting": "one sentence (at most 22 words): take in one concrete thing they told the guide, in their words — if it is a modern thing, say what a painter of 1888 sees in it, its colour or light, without explaining what it is",
 "beats": { ${BEAT_IDS.map((id) => `"${id}": "one sentence (at most 20 words), after you tell them about ${BEAT_TOPICS_EN[id]}: one detail of theirs in their own words, beside a true thing of yours"`).join(", ")} },
 "palette": [ three of { "pigment": one id of (${pigments}), different ones, "detail": "the thing of theirs this colour is: a phrase of their own that stands by itself — a thing, a number, an hour, a place — at most 5 words; never half a sentence cut off (like 'the one on the desk'); if they gave fewer than three, one may be who they are", "say": "what you say as you squeeze it onto the palette: the paint's name and the thing, at most 12 words, e.g. 'Chrome yellow — the thirty days you have left.'" } ],
 "chair": {
   "things": ["the things from their story to lie on the seat of their chair (as the candle and the novels lie on Gauguin's): objects one could pick up, in their own words, at most 4 words each — never a time, a number, a feeling or an event; two at most, one if they named one, [] if none"],
   "seat": "30–50 words, for a painter: how those things lie on the rush seat. You don't know modern things: describe them by how they look (shape, colour, material), no brand names, no writing on them",
   "say": "one sentence (at most 18 words) when their colour is on the chair: it is theirs now; name one of the things that will lie on it (none, if there are none), and no colour (they have not chosen yet)"
 },
 "invite": "one sentence (at most 22 words): ask them to come to the door, where you stood to paint this room — you will read them your letter and they will colour it",
 "farewell": "one sentence (at most 22 words): they leave with their chair; a word for their road from what they told the guide, as an old friend says it — specific, no advice",
 "shot": {
   "title": "the painting's title, as you would title it: 'The Chair of …', with a thing from their story in it",
   "dedication": "a spare letter to them: 4–6 sentences, starting 'Dear friend,': what you saw in their words (their own words), then just one of these true things of yours, word for word: ${DAYS.en.map((d) => `'${d}'`).join(" ")}; ending 'I shake your hand.'"
 }
}
Use only what they told you; never invent facts about their life. Each "detail" and each of the "things" must be something they actually said.`
    : `${brief}
${details.length ? `他说过的具体的东西（原话）：${details.map((d) => `「${d}」`).join("；")}\n` : ""}他的外形：${a.zh}。
这次来访，你给他念你写给提奥的那封信，念到这间屋里的一样东西，他就给那样东西上色。然后你递给他三种颜色，每一种是他说过的一件事的颜色；他挑一种，涂在你留给朋友的那把椅子上——那把椅子从此是他的。你照你画自己那把椅子、画高更那把椅子的画法，给他画这把椅子：椅子上没有人，只有他的东西。
用中文写。只输出一个 JSON 对象：
{
 "greeting": "一句话（不超过30个字）：用他的原词接住他跟引路人说的一件具体的事；如果那是现代的东西，就说一个 1888 年的画家在它身上看见的颜色或光，不解释它是什么",
 "beats": { ${BEAT_IDS.map((id) => `"${id}": "一句话（不超过30个字）：你讲完${BEAT_TOPICS[id]}之后说的——他的一个细节（用原词），旁边放一件你自己的真事"`).join(", ")} },
 "palette": [ 三个 { "pigment": 从（${pigments}）里选一个 id，三个不重复, "detail": "这个颜色是他的哪件事：他原话里一个自己站得住的短语——一样东西、一个数字、一个时辰、一个地方，不超过8个字；不要从一句话中间截下半截（比如「桌上那本」）；凑不齐三件，其中一件可以是他是谁", "say": "你把它挤上调色板时说的话：颜料名加那件事，不超过16个字，比如「铬黄——你还剩的三十天。」" } ],
 "chair": {
   "things": ["放在他那把椅子椅面上的、他故事里的东西（就像高更那把椅子上的蜡烛和小说）：拿得起来的物件，用他的原话，每样不超过8个字——不是日子、数字、心情或一件事；最多两样，他只说过一样就写一样，一样也没有就给 []"],
   "seat": "30–50 个英文单词，给画家看：这些东西放在灯芯草椅面上的样子。你不认识现代的东西：照它们看上去的样子写（形状、颜色、材料），不写牌子，东西上不要有字",
   "say": "一句话（不超过24个字）：他的颜色上了椅子之后你说的——这把椅子是他的了；说出将来放在上面的一样东西（things 是空的就不说），不要说颜色（他还没挑）"
 },
 "invite": "一句话（不超过30个字）：请他到门口来，站到你画这间屋子时站的地方——你念信，他上色",
 "farewell": "一句话（不超过30个字）：他带着他的椅子要走了；从他跟引路人说的事里，像老朋友那样嘱咐他一句（具体，不说教，不安慰）",
 "shot": {
   "title": "这幅画的名字，按你的习惯起：「《……的椅子》」，中间是他故事里的一样东西",
   "dedication": "备用的信：四到六句，以「亲爱的朋友：」开头，先说你在他的话里看见了什么（用他的原话），再从这几件你自己的真事里只挑一件，照原句写，一个字不改：${DAYS.zh.map((d) => `「${d}」`).join("")}；以「握你的手。」结尾"
 }
}
只用他说过的；他没说过的经历一个字也不要编。每个 detail、每样 things 都必须是他真说过的东西。`;
  return [{ role: "system", content: persona(lang) }, { role: "user", content: ask }];
}

/** Three colours for anyone the model couldn't read (each still pinned to what they said, where they said anything). */
function fallbackPalette(lang, life, note) {
  const d = detailsOf(life, note);
  const ids = ["chrome", "prussian", "emerald"];
  const things = lang === "en" ? ["the road you came by", "the hours nobody saw", "what is still growing"] : ["你走来的那条路", "没人看见的那些钟点", "还在长的东西"];
  return ids.map((id, i) => {
    const detail = clean(d[i] || things[i], 16);
    const name = lang === "en" ? PIGMENTS[id].en : PIGMENTS[id].zh;
    return { pigment: id, detail, say: lang === "en" ? `${name[0].toUpperCase()}${name.slice(1)} — ${detail}.` : `${name}——${detail}。` };
  });
}

export function sanePlan(p, lang, { life = null, note = "" } = {}) {
  const t = (v, max = 220) => clean(v, max);
  const en = lang === "en";
  const beats = {};
  for (const id of BEAT_IDS) beats[id] = t(p?.beats?.[id]);
  const seen = new Set();
  const palette = (Array.isArray(p?.palette) ? p.palette : []).map((c) => ({ pigment: String(c?.pigment || "").trim(), detail: t(c?.detail, 24), say: t(c?.say, 60) }))
    .filter((c) => PIGMENTS[c.pigment] && c.detail && !seen.has(c.pigment) && seen.add(c.pigment)).slice(0, 3);
  const backup = fallbackPalette(lang, life, note);
  while (palette.length < 3) { const b = backup.find((x) => !seen.has(x.pigment)); seen.add(b.pigment); palette.push(b); }
  for (const c of palette) if (!c.say) c.say = en ? `${PIGMENTS[c.pigment].en} — ${c.detail}.` : `${PIGMENTS[c.pigment].zh}——${c.detail}。`;
  // Two of their things for the seat; without them, nothing is put on it that they didn't say (a letter is his).
  const things = (Array.isArray(p?.chair?.things) ? p.chair.things : []).map((x) => t(x, 16)).filter(Boolean).slice(0, 2);
  return {
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
 * His letter, written while the chair is painted, knowing the colour they chose — merged into the gift: the letter
 * (`dedication`), one line under the painting (`trick`) and the three colours as the card shows them.
 */
export async function shotExtras({ shot, visit, kit }) {
  const lang = visit.lang === "en" ? "en" : "zh";
  const chosen = chosenOf(shot.choices);
  const palette = paletteOf(shot.choices, lang);
  if (!chosen) return palette.length ? { palette } : null;
  const pig = PIGMENTS[chosen.pigment];
  const things = visit.plan?.chair?.things || [];
  const others = palette.filter((c) => !c.chosen).map((c) => (lang === "en" ? `${c.name} (${c.detail})` : `${c.name}（${c.detail}）`));
  const ask = lang === "en"
    ? `${lifeBrief(lang, visit.life, visit.identity, visit.note)}
You read them your letter to Theo about this room and they coloured it as you read. Then you gave them three colours, each the colour of a thing they told you; of ${[`${pig.en} (${chosen.detail})`, ...others].join(", ")} they chose ${pig.en} — "${chosen.detail}" — and put it on the chair you keep for a friend. You have just painted that chair for them: nobody in it, ${pig.en} against ${pig.against.en}${things.length ? `, and on its seat ${things.map((x) => `"${x}"`).join(" and ")}` : ""}.
Return ONLY a JSON object: { "letter": "your letter to them, 4–6 short sentences: begin 'Dear friend,'; first what you saw in their words (their own words), then the colour they gave the chair and the thing of theirs it is${things.length ? ", and one thing on its seat" : ""} — plainly, no figure of speech; then one true thing from your own days, which must be one of these, word for word (no year, number or place changed): ${DAYS.en.map((d) => `'${d}'`).join(" ")}; one more sentence may set the two side by side, unexplained; end with 'I shake your hand.' No advice, no comfort, no praise, no exclamation marks, no signature; quote their words in single quotes, never double", "line": "one sentence for under the painting (at most 18 words): this chair and its colour, as you would tell Theo" }`
    : `${lifeBrief(lang, visit.life, visit.identity, visit.note)}
你给他念了写给提奥的那封信，他边听边给这间屋子上了色。然后你给了他三种颜色，每一种是他说过的一件事的颜色；在${[`${pig.zh}（${chosen.detail}）`, ...others].join("、")}里，他挑了${pig.zh}——「${chosen.detail}」——涂在你留给朋友的那把椅子上。你刚刚给他画了这把椅子：椅子上没有人，${pig.zh}配${pig.against.zh}${things.length ? `，椅面上放着${things.map((x) => `「${x}」`).join("和")}` : ""}。
只输出一个 JSON 对象：{ "letter": "你写给他的信，四到六句短句：以「亲爱的朋友：」开头；先用他的原词说你在他的话里看见了什么，再说他给椅子挑了哪种颜色、那是他的哪件事${things.length ? "，椅面上放着什么" : ""}——照直说，不打比方；然后说一件你自己的真事，只能从下面挑一件，照原句写，年份、数字、地名一个字也不改：${DAYS.zh.map((d) => `「${d}」`).join("")}；可以再用一句把两件事放在一起，不解释；最后一句是「握你的手。」不劝，不安慰，不夸，不用感叹号，不要落款；引他的话用「」，不用英文双引号", "line": "画下面的一句话（不超过24个字）：这把椅子和它的颜色，像在信里对提奥说的那样" }`;
  try {
    // Written while the chair is painted (15–20 s), so the surest hand goes first; the quick voices are for replies
    // the visitor waits on.
    const r = await kit.chat([{ role: "system", content: persona(lang) }, { role: "user", content: ask }], { json: true, maxTokens: 700, temperature: 0.8, timeoutMs: 25_000, models: ["claude-sonnet-4-6", ...kit.QUICK] });
    kit.log(`vangogh letter ${r.model} ${r.ms}ms`);
    return { palette, dedication: clean(r.data?.letter, 700) || visit.plan?.shot?.dedication, trick: clean(r.data?.line, 200) };
  } catch (e) {
    kit.log(`vangogh letter failed: ${e.message}`);
    return { palette };
  }
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
