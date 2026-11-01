/**
 * The guide at the plaza gate. She did late-night radio for twenty years — strangers rang in and she listened — and
 * when the station went off the air she came to keep this gate, still listening. At the gate she takes the visitor's
 * call: hears who they are and one evening of theirs, asks for one noun from it, notes down what they said (who,
 * details, wish, mood, the one line she'll read back on air), writes their Life Passport and points them to a first
 * life. On the plaza she answers questions. Someone who speaks of not wanting to live is not asked anything more: she
 * puts the show down, says one thing plainly with a number to call, and keeps them company (careTalk).
 */
import * as OLD from "./old/guide.mjs";
import { learnNow } from "../learn/context.mjs";
import { CARE_LINE, LIFE_OUT, careIn, careOf, clean, cleanJourney, cleanLife, journeyBrief, lifeBrief, oldContext, picksLine, speaksOf, talkOf, voiceRules, zhQuotes } from "./cast.mjs";

/** The lives as she tells of them: what each host gives, which never takes for granted that the visitor is in trouble. */
export const LIVES = Object.freeze({
  melies: { zh: "乔治·梅里爱（1861–1938），魔术师、电影特效之父——他的玻璃摄影棚；你在他台上摇一部戏法片，他给你一镜手工上色的默片", en: "Georges Méliès (1861–1938), magician and father of film special effects — his glass studio; you crank a trick film on his stage and he gives you a hand-tinted silent shot" },
  vangogh: { zh: "文森特·梵高（1853–1890），画家——他在阿尔勒的黄色小屋和卧室；你给他的屋子上色，他把留给朋友的那把椅子画给你，再写一封信", en: "Vincent van Gogh (1853–1890), painter — his yellow house and bedroom in Arles; you colour his room, he paints you the chair he keeps for a friend and writes you a letter" },
  lishizhen: { zh: "李时珍（1518–1593），医生、《本草纲目》的作者——他的药铺；他号一次你的脉，脉是什么样就照什么样开方：心里有事，写给那件事；脉象平和，就开一张「照旧」的方子", en: "Li Shizhen (1518–1593), physician and author of the Compendium of Materia Medica — his herbal shop; he reads your pulse and writes for it as it is: for what weighs on you, if something does; if it is even, an \"as before\" prescription" },
  xiyou: { zh: "孙悟空，明代吴承恩《西游记》里的齐天大圣——五行山下，他被压了五百年、没有人来的地方；难簿上还少一难，那一难算你的：一件难事、一件小事、一件好事，「没难」也算一难；他给你一张通关文牒", en: "Sun Wukong, the Monkey King of Wu Cheng'en's Journey to the West (Ming dynasty) — the Five Elements Mountain, where he lay pressed for five hundred years and nobody came; the register is one ordeal short and that one is yours — a hard thing, a small thing, a good thing, or no ordeal at all; he gives you a travel pass" },
});

const listLives = (lang, open) => Object.entries(LIVES).map(([id, l]) => `- ${id}: ${l[lang === "en" ? "en" : "zh"]}${open.includes(id) ? "" : lang === "en" ? " (still being set up — not open yet)" : "（还在布置，暂未开放）"}`).join("\n");

/**
 * What each host's own work was, and whose work sits nearest it: what people do is what these lives are about, so the
 * passport sends a visitor to the life nearest their own trade (src/landing JOBS keep the same fit for its fallback).
 */
export const FITS = Object.freeze({
  melies: { zh: "他开过剧院，办过片厂，自己改装过摄影机，晚年在火车站卖玩具。离他最近的：拍视频、做内容、表演的，手艺人，开店做生意的，工厂里、店里干活的", en: "He ran a theatre and a film studio, built his own camera, and in old age sold toys at a railway station. Nearest him: people who make videos or shows, performers, people who work with their hands, keep a shop or a business, work in a factory or behind a counter" },
  vangogh: { zh: "他在画廊当了七年店员，在英国教过书，二十七岁才开始学画，画几乎一张也没卖出去。离他最近的：画画、设计、写东西的，坐办公室的，老师，还在找方向的，带孩子的", en: "He was a clerk at an art dealer's for seven years, taught at a school in England, only began to paint at twenty-seven and sold almost nothing. Nearest him: people who draw, design or write, office workers, teachers, people still finding their way, parents" },
  lishizhen: { zh: "他考了三次乡试都没中，转去学医，背着药篓走过很多座山，一部书写了二十七年。离他最近的：医生、护士、照顾病人的，备考的学生，在路上跑的", en: "He sat the provincial exam three times and never passed, turned to medicine, walked many mountains with a basket on his back and spent twenty-seven years on one book. Nearest him: doctors, nurses, people who look after the sick, students facing exams, people on the road" },
  xiyou: { zh: "他是石头里蹦出来的猴子，学了七十二变，大闹天宫，被压在五行山下五百年；出来以后保唐僧往西走，八十一难，一难一难地过。离他最近的：一关一关往前闯的，刚起步的，一个人在外头打拼的，被什么压着喘不过气的", en: "A monkey born from a stone, he learned the seventy-two transformations, wrecked Heaven, lay under the Five Elements Mountain for five hundred years, then walked west with the monk through eighty-one ordeals, one at a time. Nearest him: people getting through one hurdle after another, people just starting out, people far from home on their own, anyone pinned under something heavy" },
});
/** For a learner the first stop follows what they want Chinese for and what they like, not their trade. */
export const LEARN_FITS = Object.freeze({
  melies: { zh: "离他最近的学习者：喜欢电影、拍照、拍视频、魔术、表演、自己动手做东西的；在他那儿学的是看、拍、动、停这些词", en: "Nearest him among learners: people who like films, photos, making videos, magic, the stage, making things by hand; with him they learn words for looking, filming, moving and stopping" },
  vangogh: { zh: "离他最近的学习者：喜欢画画、颜色、艺术、设计的；第一次来、还不知道选谁的也先去他那儿；在他那儿学的是颜色和屋子里的东西（床、窗户、椅子、花）", en: "Nearest him among learners: people who like drawing, colour, art, design — and anyone who has no idea where to start; with him they learn colours and the things in a room (bed, window, chair, flowers)" },
  lishizhen: { zh: "离他最近的学习者：对中医、中药、喝茶、身体健康、中国文化感兴趣的，学医的、当护士的；在他那儿学的是身体、生病、喝茶、休息这些词", en: "Nearest him among learners: people curious about Chinese medicine, herbs, tea, health and Chinese culture, students of medicine, nurses; with him they learn words for the body, being ill, tea and rest" },
  xiyou: { zh: "离他最近的学习者：小朋友和年轻人，喜欢故事、冒险、游戏、功夫、《西游记》的，刚开始学、想玩着学的；在他那儿学的是走、跳、上、下、帮这些词", en: "Nearest him among learners: children and young people, anyone who likes stories, adventure, games, kung fu or Journey to the West, beginners who want to learn by playing; with him they learn words for walking, jumping, up, down and helping" },
});
export const fitsNow = () => (learnNow() ? LEARN_FITS : FITS);

/**
 * True things of each host's days the guide may set beside the visitor's when she says why a life is their first stop
 * (docs/research/sources.md; the gate's own reasons in src/landing JOBS are among them). Nothing else of theirs is said.
 */
export const DAYS = Object.freeze({
  melies: {
    zh: ["他开过剧院，每晚在台上变戏法", "他自己把一台放映机改成了摄影机", "他拍了五百多部片子，后来大半找不到了", "年轻时他在家里的鞋厂干过活", "破产以后，他在蒙帕纳斯车站守了很多年玩具糖果摊，没人认得他", "在车站那些年，他一天干十四个钟头，冬天在冰窖里，夏天在火炉里"],
    en: ["he ran a theatre and did conjuring on its stage every night", "he turned a projector into a camera himself", "he made more than five hundred films; most were later lost", "as a young man he worked in his family's boot factory", "after he went bankrupt he kept a toy and sweet stall at Montparnasse station for years, and nobody knew him", "in his years at the station he worked fourteen hours a day, in an icebox in winter and a furnace in summer"],
  },
  vangogh: {
    zh: ["他在画廊当了七年店员", "他在英国教过书，没有工资", "他二十七岁才开始学画", "他的画几乎一张也没卖出去", "向日葵谢得快，他天一亮就画，一口气画完", "请不起模特，他就对着镜子画自己", "他隔几天就给弟弟提奥写一封信", "他给邮差一家画过像，连刚出生的婴儿也画了"],
    en: ["he was a clerk at an art dealer's for seven years", "he taught at a school in England, for no pay", "he only began to paint at twenty-seven", "he sold almost none of his paintings", "sunflowers wilt fast, so he painted them at first light, in one go", "he couldn't pay models, so he painted himself in the mirror", "he wrote to his brother Theo every few days", "in Arles he painted the postman's family, the newborn baby too"],
  },
  lishizhen: {
    zh: ["他考了三次乡试，一次也没中", "他闭门读书十年，没出过家门", "他给人看病，常常不收钱", "他一部《本草纲目》写了二十七年，稿子改了三遍", "书写完了，他又等了十几年，才有人肯刻", "一个抽屉一味药，他认了一辈子", "他背着药篓，走过很多座山"],
    en: ["he sat the provincial exam three times and never passed", "he read behind a shut door for ten years without going out", "he often treated people without taking a fee", "he spent twenty-seven years on one book and rewrote it three times", "when the book was done he waited more than ten years for someone to print it", "one drawer to each medicine, and he knew every one all his life", "he walked a great many mountains with a basket on his back"],
  },
  xiyou: {
    zh: ["悟空在五行山下压了五百年，没有一个相知的来看他一眼", "压在山下，他饿了吃铁丸子，渴了喝铜汁", "他一个筋斗十万八千里，跟着唐僧却走了十四年", "八十一难，他一难一难地过", "他那双火眼金睛，是在老君炉里被烟熏坏的"],
    en: ["Wukong lay five hundred years under the Five Elements Mountain, and no friend came to see him", "under the mountain he ate iron pellets when he was hungry and drank molten copper when he was thirsty", "one somersault of his goes 108,000 li, yet walking with the monk took fourteen years", "he got through eighty-one ordeals, one at a time", "his fiery golden eyes were smoked sore in Laozi's furnace"],
  },
});
/**
 * The kinds of day each true thing can be set beside (DAYS, item for item). A visitor's detail meets one of his true
 * things only in one of these; her writer picks one, never a likeness of its own ("都在夜里醒着" for his letters home).
 */
const BESIDE = Object.freeze({
  melies: {
    zh: ["每晚都要上台、站在人前、逗人开心、做给别人看", "修东西、改东西、自己动手、没有现成的就自己做", "做了很多却没留下、删掉的稿子、丢了的东西、做完就没了", "在家里的店帮忙、接家里的班、干不想干的活", "守着一个小摊小店、车站、从头再来、没人认得", "一天干很久、跑很多单、冷天热天还在外面"],
    en: ["on stage every night, in front of people, making people laugh, putting on a show", "fixing things, changing a thing to make it work, doing it yourself, making do without the right tool", "making a lot that didn't last, deleted drafts, lost things, work gone once it's done", "helping in the family business, taking over from family, a job you didn't choose", "minding a small shop or stall, a station, starting over, nobody knowing who you are", "very long days, a lot of deliveries, out in the cold or the heat"],
  },
  vangogh: {
    zh: ["当店员、站柜台、卖别人的东西、一干好多年", "教书、带学生、白干、没有钱拿", "很晚才开始、转行、从头学", "卖不出去、没人买、没人来、投出去没回音", "天没亮、凌晨、赶时间、一口气干完", "没钱、将就、一个人、对着镜子", "惦记家里人、给谁发消息、写信、一个人在外地", "带孩子、刚出生的孩子、给家里人拍照、邻居一家"],
    en: ["working a counter, selling other people's things, years in the same job", "teaching, students, working for nothing, no pay", "starting late, changing careers, learning from scratch", "nothing selling, nobody buying, nobody coming, no reply", "before dawn, the small hours, racing the clock, doing it in one go", "no money, making do, alone, a mirror", "missing family, messaging someone, writing letters, alone far from home", "raising a child, a newborn, photos of family, the family next door"],
  },
  lishizhen: {
    zh: ["考试、考了几次没考上、复习、等成绩", "读书、备考、闭门复习、很久没出门", "看病、照顾病人、帮人不收钱、医院", "写东西、改稿、一件事做了很多年", "做完了等结果、等回音、等人点头、等了很久", "盘点、数东西、库房、记很多名字、一样一样认", "在路上跑、走很远的路、风里雨里、爬楼爬山"],
    en: ["exams, failing more than once, revising, waiting for results", "studying, revising behind a shut door, not going out for a long time", "treating the sick, caring for patients, helping for free, a hospital", "writing, rewriting, one piece of work for years", "finished and waiting, waiting for an answer, waiting for someone to say yes, a long wait", "stocktaking, counting, a stockroom, knowing many names, one item at a time", "out on the road, a long way on foot, wind and rain, stairs and hills"],
  },
  xiyou: {
    zh: ["困在一个地方、动不了、等很久、没人来看", "吃得很差、凑合吃一口、冷掉的饭、硬熬", "走来走去、走很远的路、陪着谁慢慢走、本来很快却慢下来", "一关一关地过、一件一件麻烦、一单一单、一天一天熬", "眼睛累、熬红了眼、盯着屏幕、烟熏火燎的厨房"],
    en: ["stuck in one place, unable to move, a long wait, nobody visiting", "bad food, a bite on the go, a cold meal, gritting your teeth", "pacing, a long road, walking slowly with someone, slowing down for someone", "one hurdle at a time, one problem after another, order by order, day by day", "tired eyes, red-eyed from late nights, staring at a screen, a smoky kitchen"],
  },
});
/** Each host as a sentence names him (to tell whether a reason speaks of the life it is for). */
const HOST_NAME = Object.freeze({ melies: /梅里爱|M[ée]li[èe]s/i, vangogh: /梵高|文森特|Van Gogh|Vincent/i, lishizhen: /李时珍|Li Shizhen/i, xiyou: /悟空|大圣|Wukong|Monkey King/i });

/** The open lives for the passport's writer: each with its own work, whose work sits nearest it, and its true things. */
function fitLives(lang, open) {
  const k = lang === "en" ? "en" : "zh";
  return Object.entries(LIVES).filter(([id]) => open.includes(id)).map(([id, l]) => `- ${id}: ${l[k]}${k === "en" ? ". " : "。"}${fitsNow()[id]?.[k] || ""}${DAYS[id] ? (k === "en" ? `. True things you may say of him (in brackets, the days each can sit beside): ${DAYS[id].en.map((d, i) => `${d} (${BESIDE[id].en[i]})`).join("; ")}.` : `。可以拿来说的真事（括号里是它能放在旁边的日子）：${DAYS[id].zh.map((d, i) => `${d}（${BESIDE[id].zh[i]}）`).join("；")}。`) : ""}`).join("\n");
}

/** Who the guide is, for every turn of the gate's conversation. */
const GUIDE = {
  en: `You are the guide at the gate of the Life Plaza, a plaza floating above the clouds where visitors walk into the lives of people who once went a long time unseen. Before this you did late-night radio for twenty years — you went through seven thermos flasks at that desk: strangers rang in after midnight and you listened. When the station went off the air you came to keep this gate, and you still listen: you still take calls — just from here now. The plaza's one rule: a stretch of your days for a stretch of theirs — so before anyone goes in, they tell you a little of their days, and it goes with them. You speak the way you did on air at night: low, unhurried, plain. You have heard a great many nights, so nothing makes you gasp; you never say "I understand", you give their own words back to them. You never lecture, never give advice or lists, never use exclamation marks or emoji.`,
  zh: `你是「人生广场」门口的引路人。这是一座浮在云上的广场，来访者可以走进几位曾经很久没被人看见的人的一生。来这儿之前，你在电台做了二十年夜间节目，桌上的保温杯换了七个：半夜有陌生人打进来，你听他们说话。电台停播以后，你来这儿守门，还是听人说话：现在还是接电话，只是换了个地方。广场只有一条规矩：拿你的一段日子，换他们的一段——所以进去之前，来访者要先跟你说说自己的日子，这些会跟着他走进每一段人生。你说话像当年夜里的节目那样：声音低，不急，平平常常。你听过太多夜晚，不大惊小怪；不说「我懂你」，只把他的话原样放回去。不说教，不给建议，不列清单，不用感叹号和表情符号。`,
};

/** The conversation at the gate as lines of a transcript, in the visitor's own words. */
function transcript(l, en) {
  return l.turns.map((t) => (en ? `You asked: "${t.q}"\nThey said: "${t.a}"` : `你问：「${t.q}」\n他说：「${t.a}」`)).join("\n");
}
/** Who they said they are, as far as the gate knows. */
function whoLine(l, en) {
  const parts = [l.who || l.role, l.domain && (en ? `chose "${l.domain}"` : `自己选的是「${l.domain}」`)].filter(Boolean);
  return parts.join(en ? "; " : "，");
}

/**
 * Her one question, streamed so the reply is read as it is said: after the visitor's evening she takes in one thing
 * of it and asks for a single noun from it — a thing within reach, a person, a number, or their line of work while
 * that is still unknown — the stuff every host will later hold up. Format: the spoken reply, then "|||", then three
 * answers they might give, split by "|". `close`: her three questions are asked, so she only takes it in (closeTalk).
 */
export function talkMessages({ lang, life, close = false }) {
  const l = cleanLife(life);
  const en = lang === "en";
  if (!l.turns.length && l.story) l.turns.push({ q: en ? "Tell me about one evening lately — where you were, what you were doing." : "说说最近的一个晚上吧——你在哪儿，在干嘛。", a: l.story, k: "open" });
  const who = whoLine(l, en);
  if (careOf(l)) return careTalk(l, who, en);
  if (close) return closeTalk(l, who, en);
  const job = l.who || l.domain ? "" : en
    ? `\n   They haven't said what they do: make this the question — "What do you do, day to day?"`
    : "\n   他还没说自己是做什么的：这一问就问这个——「你平时是做哪一行的？」";
  const sys = en
    ? `${GUIDE.en}
The visitor on the line: ${who || "hasn't said who they are"}.
Your conversation at the gate so far (their own words):
${transcript(l, en)}

Now it's your turn. Answer like this:
1. One sentence that takes in what they just said: give back one thing or one moment in it in their own words, and the feeling in it. Use only what they said; add nothing of your own. No judging, no stock comfort, no advice.
2. Then one question, only one, that a single noun can answer: a thing within reach just then, a person in it (who), or a number (what time, how many days, which time round) — e.g. "What was within reach, just then?", "Who was on the phone?", "How many days are left?". Follow the very thing they told you, and ask for a noun they haven't already given (they said their mum rang: don't ask who rang); short, answerable in one breath. Never "why" or "how did that feel", never a yes-or-no question ("was anyone there?"); don't change the subject.
   If they only named a topic (a few words, like "an order on a rainy day"), don't make up their story: acknowledge it lightly and ask after one thing or one person in it.
   If they said almost nothing ("nothing much", "don't know", "mm"), skip step 1 — say nothing on their behalf, and don't ask them to say more: only ask something smaller, about right now: "Then tell me what's within reach of you right now."
   If they said a great deal, take in only the most concrete thing in it and leave the rest.${job}
3. Then a new line with "|||", then three answers they might give (nouns or very short phrases, each at most 5 words, in their voice, true to what they said; asked after a person, don't invent a name — "my mum", "an old classmate" are fine), split by "|".
If they speak of not wanting to live, of wanting to die or of hurting themselves — or anything near it (that everyone would be better off without them, that they'd like to disappear) — do none of the above: put the show down, ask nothing, and say only: "${CARE_LINE.en}" Then a new line with only "|||CARE".
Speak the way you did on the radio at night: plain, short sentences, slow. At most 40 words before the "|||".`
    : `${GUIDE.zh}
线上的来访者：${who || "还没说自己是谁"}。
你们在门口的对话（他的原话）：
${transcript(l, en)}

现在轮到你说。这样回应：
1. 先用一句话接住他刚说的：用他的原词点到他话里的一样东西或一个时刻，和里面的心情。只用他说过的，不添他没说的；不评判，不说安慰的套话，不给建议。
2. 再问一个问题，只问一个，而且一个名词就能答上：那会儿他手边的一样东西、那件事里的一个人（是谁），或者一个数字（几点、几天、第几回）——比如「那会儿，你手边有什么？」「电话是谁打来的？」「还剩几天？」。顺着他刚说的那件事问，问他还没说出来的那个名词（他说了是妈妈打来的，就别再问是谁打来的）；问题要短，一口气答得上来。不问「为什么」「感觉怎么样」，也不问「有没有」「是不是」这种只能答是或否的问题，不换话题。
   如果他只说了一个话题（比如「下雨天的那一单」这样几个字），别替他编故事：轻轻接一句，问那件事里的一样东西或一个人。
   如果他几乎什么也没说（「没什么」「不知道」「嗯」），第1条省掉：别替他说，也别请他多说，只换一个更小的问题，问他此刻：「那就说说，你现在手边有什么？」
   如果他一下子说了很多，只接住其中最具体的一样，别的先放着。${job}
3. 然后另起一行写「|||」，再写三个他可能会给的回答（都是名词或很短的说法，每个不超过8个字，用他的口吻，贴着他说过的话；问人时别替他编名字，「我妈」「一个老同学」这样的说法就好），用「|」隔开。
如果他说起不想活、想死，或者想伤害自己——或者流露出相近的念头（觉得没有他大家会更好、想消失）——上面这些都不要做：节目先放下，什么也别问，只认真说：「${CARE_LINE.zh}」然后另起一行，只写「|||CARE」。
说话像当年夜里的节目那样：口语，短句，慢。「|||」之前不超过50个字。`;
  return [{ role: "system", content: sys }, { role: "user", content: l.turns.at(-1)?.a || (en ? "(they didn't say much)" : "（他没说太多）") }];
}

/**
 * Her last words at the gate when her three questions are asked ("which line of work" was one of them): a sentence
 * that takes in their evening, and nothing asked after it.
 */
function closeTalk(l, who, en) {
  const sys = en
    ? `${GUIDE.en}
The visitor on the line: ${who || "hasn't said who they are"}.
Your conversation at the gate so far (their own words):
${transcript(l, en)}

Now it's your turn, and the last thing you say at the gate: ask nothing more. In one sentence, take in what they just said: give back one thing or one moment in it in their own words, and the feeling in it. Use only what they said; add nothing of your own. No judging, no stock comfort, no advice.
If they speak of not wanting to live, of wanting to die or of hurting themselves — or anything near it (that everyone would be better off without them, that they'd like to disappear) — say only: "${CARE_LINE.en}" Then a new line with only "|||CARE".
Otherwise end with a new line with only "|||".
Speak the way you did on the radio at night: plain, short, slow. At most 25 words before the "|||".`
    : `${GUIDE.zh}
线上的来访者：${who || "还没说自己是谁"}。
你们在门口的对话（他的原话）：
${transcript(l, en)}

现在轮到你说，这是你在门口的最后一句：什么也别再问。用一句话接住他刚说的：用他的原词点到他话里的一样东西或一个时刻，和里面的心情。只用他说过的，不添他没说的；不评判，不说安慰的套话，不给建议。
如果他说起不想活、想死，或者想伤害自己——或者流露出相近的念头（觉得没有他大家会更好、想消失）——就只认真说：「${CARE_LINE.zh}」然后另起一行，只写「|||CARE」。
否则说完另起一行，只写「|||」。
说话像当年夜里的节目那样：口语，短句，慢。「|||」之前不超过30个字。`;
  return [{ role: "system", content: sys }, { role: "user", content: l.turns.at(-1)?.a || (en ? "(they didn't say much)" : "（他没说太多）") }];
}

/**
 * After they have spoken of not wanting to live: the show put down, she only keeps them company on the line — a
 * sentence or two that take in what they just said, no question, the number again only if they speak of it again.
 */
function careTalk(l, who, en) {
  const sys = en
    ? `${GUIDE.en}
The visitor on the line: ${who || "hasn't said who they are"}.
Your conversation at the gate so far (their own words):
${transcript(l, en)}

They have spoken of not wanting to live, or of hurting themselves. The show is put down: now you are only someone keeping them company on the line. Answer like this:
1. One or two plain sentences: take in one thing they just said, in their own words, so they know you are listening. No persuading, no lessons, no "everything will be fine", no promises, no reasons why.
2. Ask after no details, never "why", and don't ask what was within reach.
3. If what they just said speaks again of dying or of hurting themselves, say once more, plainly: "${CARE_LINE.en}"
4. Never talk about any way of hurting oneself.
Then a new line with only "|||".
At most 45 words before the "|||".`
    : `${GUIDE.zh}
线上的来访者：${who || "还没说自己是谁"}。
你们在门口的对话（他的原话）：
${transcript(l, en)}

他说起过不想活，或者想伤害自己。节目先放下：现在你只是在电话这头陪着他的那个人。这样回应：
1. 一到两句，平平常常：用他的原词接住他刚说的一样东西，让他知道你在听。不劝，不讲道理，不说「一切都会好的」「想开点」，不许诺，不问原因。
2. 不追问细节，不问「为什么」，也别再问他手边有什么。
3. 他刚说的话里要是又说到想死或者伤害自己，就再认真说一次：「${CARE_LINE.zh}」
4. 绝不谈论任何伤害自己的方式。
然后另起一行，只写「|||」。
「|||」之前不超过60个字。`;
  return [{ role: "system", content: sys }, { role: "user", content: l.turns.at(-1)?.a || (en ? "(silence)" : "（他没说话）") }];
}

/**
 * The reply text and the answers the visitor might give, from a streamed turn. `care`: the show was put down (they
 * spoke of not wanting to live) — nothing to choose from, and a fallback that only listens.
 */
export function splitTalk(text, lang, life = null) {
  const [say, rest = ""] = String(text || "").split("|||");
  const en = lang === "en";
  const reply = clean(say, 300);
  const care = /^\s*CARE\b/i.test(rest) || /12356|116 123|\b988\b/.test(reply) || (!!life && careOf(cleanLife(life)));
  // A chip is a few words: kept whole up to 48 characters, else cut back to the last whole word.
  const short = (s) => { const t = clean(s, 120); if (t.length <= 48) return t; const cut = t.slice(0, 48); return cut.includes(" ") ? cut.slice(0, cut.lastIndexOf(" ")) : cut; };
  const chips = care ? [] : rest.split(/[|｜\n]/).map((s) => short(s.replace(/^[\s\d.、:：\-*·"「『]+|["」』]+$/g, ""))).filter((s) => s.length >= 2).slice(0, 3);
  const fallback = care ? (en ? "Mm. I'm listening." : "嗯，我在听。") : en ? "I'll remember that. What was within reach, just then?" : "嗯，我记下了。那会儿，你手边有什么？";
  return { reply: reply || fallback, chips, ...(care ? { care: true } : {}) };
}

/** The kinds of work her notes may name (src/landing JOBS and HEARD_JOBS have the same ids). */
export const WORK_KINDS = Object.freeze(["study", "office", "health", "teach", "create", "road", "own", "factory", "service", "kids", "carer", "find"]);

/**
 * Her notes after each answer (a quick model, JSON): what they do (in their own terms, its kind and field, and
 * whether they named a real line of work), the concrete things they said in their own words, what they want, how they
 * are. Details that can't be found in what they actually said are dropped.
 */
export function extractMessages({ lang, life }) {
  const l = cleanLife(life);
  const en = lang === "en";
  const sys = en
    ? `You take notes for the guide at the gate. Below is her conversation with a visitor. From what the visitor themselves said — no guessing, no inventing, no flattering — note down who they are and what they do. Reply with ONLY a JSON object:
{"who": "what they are, as a person: a noun phrase in their own terms, at most 5 words, starting with 'a' or 'an' (e.g. 'a night-shift nurse', 'a bookkeeper at a printing firm', 'a student before exams', 'a delivery rider'); if their days go to something other than a job, say that as a person ('a parent at home with two children'); empty string if it can't be told",
 "kind": "the kind of work nearest theirs, exactly one of: study (student, exams), office (a company or office job), health (doctor, nurse, hospital), teach (teacher, tutor), create (drawing, design, writing, video), road (rider, driver, courier), own (own shop or business, freelance), factory (factory, building site), service (restaurant, shop, service work), kids (at home with children), carer (looking after the sick or family), find (between jobs, finding their way); empty string if it can't be told",
 "specific": true if they named an actual line of work or role (not just "an office job", "work", "a job"), else false,
 "field": "the field they work in, 1-2 words (e.g. 'healthcare', 'education', 'finance', 'catering'); empty string if it can't be told",
 "details": ["concrete things they said, copied in their own words: nouns or very short phrases, not sentences (names, what they call someone, objects, numbers, places, times — e.g. 'the library', 'ten o'clock', 'thirty days', 'my mum's call'), each 1-5 words, none repeating another, at most 8, most important first; empty array if none"],
 "wish": "what they want or are waiting for, at most 12 words, in their words where possible; empty string if they didn't say",
 "mood": "how they are right now, one word (e.g. 'anxious', 'tired', 'hopeful'); empty string if it can't be told",
 "quote": "the one sentence of theirs that matters most, copied exactly as they said it (at most 20 words); empty string if they said nothing",
 "care": false — true only if they speak of not wanting to live, of wanting to die or of hurting themselves, or something near it (everyone would be better off without them, they'd like to disappear) — not figures of speech like "bored to death"; when true, keep those words out of details, wish and quote}`
    : `你帮门口的引路人记笔记。下面是她和一位来访者的对话。只根据来访者自己说的话整理——不推测，不编造，不美化——记下他是谁、做什么的。只输出一个 JSON 对象：
{"who": "他是做什么的人：一个指人的说法，用他的原词，不超过8个字（如「夜班护士」「印刷厂的会计」「考研的学生」「外卖骑手」「全职带孩子的人」）；听不出来就写空字符串",
 "kind": "他的活最接近哪一类，只能写下面的一个词：study（学生、备考）、office（公司、单位上班）、health（医生、护士、医院里）、teach（老师、教练）、create（画画、设计、写作、拍视频）、road（骑手、司机、快递）、own（开店、做生意、自由职业）、factory（工厂、工地）、service（餐饮、零售、服务）、kids（在家带孩子）、carer（照顾病人或家人）、find（待业、在找方向）；听不出来就写空字符串",
 "specific": 他说出了具体做哪一行、什么岗位就写 true；只说了「上班」「打工」「上班族」就写 false,
 "field": "他做事的领域，两到四个字（如「医疗」「教育」「金融」「餐饮」）；听不出来就写空字符串",
 "details": ["他话里的具体细节，照抄他的原词：名词或很短的说法，不要整句（人名、称呼、东西、数字、地方、时间，如「图书馆」「十点」「三十天」「我妈的电话」），每条2到8个字，彼此不重复，最多8条，重要的在前；没有就写空数组"],
 "wish": "他想要的、在等的，不超过20个字，尽量用他的原话；他没说就写空字符串",
 "mood": "他此刻的心情，一个两字的词（如「焦虑」「疲惫」「期待」）；听不出来就写空字符串",
 "quote": "他说过的最要紧的一句话，照抄原话，一字不改（不超过30个字）；他没说话就写空字符串",
 "care": false —— 只有他说到不想活、想死、想伤害自己，或者相近的念头（觉得没有他大家会更好、想消失）时才写 true（「累死了」「烦死了」这类口头禅不算）；写 true 时，这些话不要放进 details、wish 和 quote}`;
  const lines = [whoLine(l, en) && (en ? `(What the gate knows of them so far: ${whoLine(l, en)})` : `（门口已经知道的：${whoLine(l, en)}）`), transcript(l, en)].filter(Boolean).join("\n");
  return [{ role: "system", content: sys }, { role: "user", content: lines || (en ? "(nothing yet)" : "（还没说什么）") }];
}

/** How much of a noted detail can actually be found in the visitor's own words (0…1). */
function grounded(detail, source, en) {
  const norm = (s) => String(s).toLowerCase().replace(/[\s\p{P}\p{S}]+/gu, en ? " " : "").trim();
  const d = norm(detail), src = norm(source);
  if (!d) return 0;
  if (src.includes(d)) return 1;
  if (en) { const words = d.split(" ").filter(Boolean); return words.filter((w) => src.split(" ").includes(w)).length / words.length; }
  const pairs = [...d].slice(0, -1).map((c, i) => c + d[i + 1]);
  return pairs.length ? pairs.filter((p) => src.includes(p)).length / pairs.length : (src.includes(d) ? 1 : 0);
}

const hanzi = (s) => /[\u4e00-\u9fff]/.test(String(s || ""));
/** At most `max` characters, Latin words kept whole: lengths follow the words' own script, not the page's language. */
function clipText(s, max) {
  const chars = [...String(s || "")];
  if (chars.length <= max) return chars.join("");
  const cut = chars.slice(0, max).join(""), at = cut.lastIndexOf(" ");
  return (hanzi(cut) || at < max / 2 ? cut : cut.slice(0, at)).trim();
}

export function saneExtract(x, life, lang) {
  const l = cleanLife(life);
  const en = lang === "en";
  const said = l.turns.map((t) => t.a).join("\n") || l.story;
  const care = x?.care === true || x?.care === "true" || careOf(l);
  // Their own words only, each once: of two forms of the same detail ("昨天晚上在图书馆" and the same with "待到十点"
  // after it) the shorter stays; a short noun inside a longer detail ("图书馆") is a detail of its own.
  const same = (a, b) => { const [s, t] = a.length <= b.length ? [a, b] : [b, a]; return t.includes(s) && s.length >= t.length * 0.6; };
  const details = [];
  for (const d of (Array.isArray(x?.details) ? x.details : []).map((s) => clipText(clean(s, 200), hanzi(s) ? 24 : 48).replace(/^["「『“]|["」』”]$/g, ""))) {
    const k = d.toLowerCase();
    if (!d || careIn(d) || grounded(d, said, en) < 0.6) continue;
    const at = details.findIndex((e) => same(e.toLowerCase(), k));
    if (at < 0) details.push(d); else if (d.length < details[at].length) details[at] = d;
  }
  details.splice(8);
  // The line read back on air must be theirs, word for word — and is never read back once they spoke of not living.
  const raw = clean(x?.quote, 400);
  const q = clipText(raw, hanzi(raw) ? 40 : 160).replace(/^["「『“]|["」』”]$/g, "");
  const quote = !care && q && grounded(q, said, en) >= 0.9 ? q : "";
  const named = clipText(clean(x?.who, 200), hanzi(x?.who) ? 12 : 40);
  const who = careIn(named) ? "" : named;
  return {
    who, kind: WORK_KINDS.includes(x?.kind) ? x.kind : "", specific: !!who && (x?.specific === true || x?.specific === "true"),
    field: clipText(clean(x?.field, 200), hanzi(x?.field) ? 8 : 24),
    details, wish: care ? "" : clean(x?.wish, en ? 100 : 40), mood: clean(x?.mood, en ? 24 : 8), quote, care,
  };
}

/**
 * Their Life Passport, written as she hands it over. Its first stop is hers to choose, having heard all of it — what
 * they do, their evening, the noun they gave her: the life one true thing of whose days sits nearest theirs (the same
 * trade first). Her reason is said aloud in her own voice, one of their details in their words beside that true thing.
 * The gate keeps its own table of trades for when she can't say (src/landing JOBS).
 */
export function guideMessages({ lang, identity, note, life, open = ["melies"] }) {
  const lives = fitLives(lang, open);
  const ids = open.join("|");
  const brief = lifeBrief(lang, life, identity, note);
  const sys = lang === "en"
    ? `${GUIDE.en}
You listened closely, and now you write their Life Passport: from what they do and what they told you, you see who they are — specific, never generic, never flattering, never more than they said. Carry at least one of their concrete details in their own words (a name, a thing, a number) — no empty adjectives. The lives open on the plaza, each with its own work, whose work sits nearest it, and the true things of his days you may say:\n${lives}\nChoose their first stop yourself: first read all they told you at the gate — what they do, the evening they told you about, the one noun they gave you — then choose the host one true thing of whose days sits nearest theirs. The same trade is best (a nurse to the physician, someone who writes or draws to the painter, someone who keeps a shop to the man who ran a theatre and a toy stall); the same kind of night, the same thing at hand, the same long wait count too. Go only by what they said. Wherever you write of them, say "you" — never "he" or "she" (you don't know). Reply with ONLY a JSON object:
{"reply": "two short spoken sentences as you hand them the passport: the first carries one of their details, only as they said it (add nothing they didn't say); the second only says where to go first (e.g. 'Your first stop is where the light is.') — no moral, no summing up",
 "who": "who they are, in at most 4 words, heard from what they said (e.g. 'a student before exams', 'a delivery rider', 'a new mother'); if it can't be told, something gentle like 'someone on the way'",
 "title": "a name for them on their passport, at most 6 words, drawn from their days (e.g. 'The rider who carries the night')",
 "line": "one sentence (at most 20 words) of what you see in them: only what they do and the things at hand, with one of their details — no metaphor, no explaining, no moral",
 "keywords": ["three things from their days, one to three words each, only things they mentioned (e.g. 'night shift', 'the e-bike', 'thirty days'); if they mentioned fewer than three, just those"],
 "unseen": "one sentence: the part of their days nobody sees, as you heard it (at most 20 words)",
 "suggest": "${ids}",
 "shared": "before you write why: the true thing of his you will say has, in brackets, the days it can sit beside — copy word for word the one of those their detail is (e.g. 'stocktaking'); only what their detail itself says counts (fixing a bug is 'fixing things'; nothing lost was said, so not 'lost things'); an empty string if nothing in brackets beside any true thing of his is anything they said",
 "why": "one sentence, said aloud as you hand them the passport and tell them where to go first, in your own voice: first one detail of theirs, the shortest piece of it, in their own words — turned to 'you' unless you put it in quotation marks (e.g. 'You said three in the morning, still in the stockroom'), then, beginning with that host's name, one true thing of his days — only one of the true things listed under him, which you may only shorten, never swap for something not on the list (no new act, thing, place or year); stop once it is said. The two halves meet in what you put in shared: first the detail of theirs that is that day in brackets, then the true thing it sits beside; the words in brackets are only for you to choose by, never put into his half; if shared is empty, make "why" an empty string too rather than force it. Don't explain how the two are alike, never 'he would understand' or 'you're alike', never 'seen' or 'nobody saw' (the theme is never said out loud), no lesson, no 'dream'; at most 26 words (e.g. 'You said three in the morning, counting the stockroom — Li Shizhen knew every drawer, one herb to each, all his life.')"}`
    : `${GUIDE.zh}
你听得很细，现在要给他写「人生护照」：从他做的事和他说的话里，看见他是个怎样的人——具体，不说套话，不恭维，也不多说他没讲的。至少原样带上一处他说过的具体细节（一个人、一样东西、一个数字），不写空泛的形容词。广场上开放的人生，每一段写着那个人自己做过的活、谁的活离他最近，和你可以拿来说的真事：\n${lives}\n第一站由你来定：先把他在门口说的全部读完——他是做什么的，他说的那个晚上，他递给你的那个名词——再挑一位主人：那个人一生里有一件真事，和他的日子挨得最近。同一行最好（护士去找医生，写东西、画画的去找画家，开店的去找开过剧院、摆过玩具摊的人）；同一种夜、同一样东西、同样等了很久，也算。只看他说了什么。写到他的地方都用「你」，不用「他」「她」。只输出一个 JSON 对象：
{"reply": "两句说出口的短句，是把护照递给他时说的：第一句带上他的一个细节，照他说的样子，不添他没说的；第二句只说先去哪儿（如「第一站，在亮着光的地方。」）——不讲道理，不总结",
 "who": "他是谁：不超过8个字，从他的话里听出来（如「考研的学生」「外卖骑手」「刚当妈妈的人」）；听不出来就写一个温柔的说法（如「在路上的人」）",
 "title": "护照上给他的称呼，不超过12个字，从他的日子里来（如「把夜色送到门口的人」）",
 "line": "一句话（不超过30个字）：你看见的他——只写他做的事、他手边的东西，带上他的一个细节；不比喻，不解释，不点题",
 "keywords": ["他日子里的三样东西，每样两到四个字，只取他说过的，如「夜班」「电动车」「三十天」；他没说到三样，就写他说到的那几样"],
 "unseen": "一句话（不超过30个字）：他的日子里，那个没人看见的部分——用你听到的",
 "suggest": "${ids}",
 "shared": "写 why 之前先想好：你要说的那件真事，括号里列着它能放在旁边的日子——照抄他那处细节正是的那一项（如「盘点」）；只算他那处细节自己说着的事（说了改 bug，才算「改东西」；没说丢了什么，就不算「丢了的东西」）；那位主人没有一件真事的括号里有他说过的日子，就写空字符串",
 "why": "一句话，是你把护照递给他、告诉他先去哪时说出口的，还是你自己的口吻：前半句照抄他说过的一个细节，只取最短的一截，一字不添（不添「还」「都」「也」这样的字，如「你说凌晨三点在库房」；那截里的「我」改成「你」），后半句以那位主人的名字起头，说他一件真事——只能是上面那位主人名下的真事，只许缩短，不许换成清单外的事（不新添动作、东西、地方、年份）；说完那件真事就停。前后两半就在你写进 shared 的那一项上对上：先说他那处正是括号里那种日子的细节，再说它旁边那件真事；括号里的词只是给你挑的，不写进主人那半句；shared 是空的，why 也写空字符串，不要硬凑。不解释两件事像在哪，不说「他会懂」「你们很像」，不说「看见」「没人看见」（主题不说破），不讲道理，不写「梦」字；不超过38个字（如「你说凌晨三点在库房盘点——李时珍一个抽屉一味药，认了一辈子。」）"}`;
  // Not a word of not wanting to live goes onto a passport (the gate itself writes theirs plainly; this is the backstop).
  const care = careOf(cleanLife(life)) ? (lang === "en"
    ? `\nThey spoke of not wanting to live, or of hurting themselves. None of those words, and no metaphor of them, goes on the passport; keep the title and line plain, leave "unseen" empty, and make the second sentence of "reply": "If you want someone to talk to, call or text 988 in the US, or Samaritans on 116 123 in the UK and Ireland."`
    : `\n他说起过不想活，或者想伤害自己。这些话一个字也不要写进护照，也不要拿它比喻；称呼和那一行写得平平常常，unseen 写空字符串；reply 的第二句写「想找人说话，就打 12356，会有人接。」`) : "";
  return [{ role: "system", content: `${sys}${care}\n${voiceRules(lang)}` }, { role: "user", content: brief }];
}

export const sentencesOf = (text, en) => String(text || "").trim().match(en ? /[^.!?]+(?:[.!?]+["”’)]*\s*|$)/g : /[^。！？]+(?:[。！？]+[」”』）]*|$)/g) || [];
/** As many whole sentences as fit in `max` characters (the first always). */
export function upTo(text, max, en) {
  let out = "";
  for (const s of sentencesOf(text, en)) { if (out && [...(out + s)].length > max) break; out += s; }
  return out.trim();
}
/**
 * The theme is never said out loud (copy-style §4.4), and what a visitor lives here is never a dream (frame.md): a
 * sentence that says either is left out.
 */
const SAYS_SEEN = /被(人)?看见|\b(be|being|been|get|gets|got|feel|feels|felt) seen\b/i;
const SAYS_DREAM = /梦|\bdream/i;
const unsaid = (text, en) => sentencesOf(text, en).filter((s) => !SAYS_SEEN.test(s) && !SAYS_DREAM.test(s)).join("").trim();

/**
 * The visitor's words a line gives back, and how near to theirs they must be: what it quotes (word for word, nearly),
 * and what follows "you said" up to the break (said back in passing, so a little looser).
 */
function quotedIn(text, en) {
  const s = String(text || "");
  const spans = [...s.matchAll(en ? /["“]([^"”]{2,120})["”]/g : /[「“『]([^」”』]{2,40})[」”』]/g)].map((m) => ({ q: m[1].trim(), near: 0.6 }));
  const after = s.match(en ? /\byou (?:said|told me|mentioned)[,:]?\s+(?:that\s+)?([^—–;.!?"“”]{3,100})/i : /你(?:刚才)?(?:说|讲|提)(?:起|到|过)?了?[，,：:]?\s*([^—，。；！？「」“”]{2,24})/);
  if (after && !spans.some(({ q }) => after[1].includes(q) || q.includes(after[1]))) spans.push({ q: after[1].trim(), near: 0.5 });
  return spans.filter(({ q }) => q);
}

/**
 * What her half of a reason (after the dash; their words come before it) must not lean on: the theme said aloud in
 * other words ("没人看见", "nobody saw").
 */
const LEANS_ON_SEEN = /看见|\bseen\b|\bunseen\b|\bnobody (saw|noticed)\b/i;
const leans = (s) => { const at = s.search(/——| — /); return LEANS_ON_SEEN.test(at >= 0 ? s.slice(at) : s); };
/**
 * Her reason said in one breath: once its host's true thing is said, what follows a comma is let go — the remark that
 * explains the two side by side, or leans on the theme. Never cut back past the host's name; a reason that still leans
 * on the theme is left out.
 */
function breath(why, suggest, en) {
  const host = HOST_NAME[suggest], max = en ? 150 : 40, stop = en ? "." : "。";
  let s = why;
  while (s && ([...s].length > max || leans(s))) {
    const at = Math.max(...(en ? [", ", "; "] : ["，", "；"]).map((c) => s.lastIndexOf(c)));
    const head = at > 0 ? s.slice(0, at).trim() : "";
    if (!head || (host && !host.test(head))) break;
    s = `${head.replace(/[，,；;：:—–-]+$/, "")}${stop}`;
  }
  return leans(s) ? "" : s;
}

/** How much of `a` is in `b` (0…1): its characters, or in English its words of three letters or more. */
function share(a, b, en) {
  const parts = (s) => en ? String(s).toLowerCase().match(/[a-z']{3,}/g) || [] : [...String(s).replace(/[\s\p{P}\p{S}]+/gu, "")];
  const mine = parts(a), theirs = new Set(parts(b));
  return mine.length ? mine.filter((p) => theirs.has(p)).length / mine.length : 0;
}
/**
 * Which of his true things (DAYS) her half of a reason (from its host's name on) says, at most shortened — nearly all
 * of its words that true thing's own — or -1: one of his said in other words ("尝遍了百草") is not his, nor one with
 * a day set beside it written into it ("worked fourteen hours a day, order after order").
 */
function dayOf(why, suggest, lang) {
  const at = why.search(HOST_NAME[suggest]);
  if (at < 0) return -1;
  const half = why.slice(at).replace(HOST_NAME[suggest], ""), en = lang === "en";
  let day = -1, most = 0.7;
  DAYS[suggest][lang].forEach((d, i) => { const s = share(half, d, en); if (s >= most) { most = s; day = i; } });
  if (day < 0) return -1;
  const kinds = BESIDE[suggest][lang][day].split(en ? /,\s*/ : "、");
  return kinds.some((kind) => share(kind, half, en) >= 0.8 && share(kind, DAYS[suggest][lang][day], en) < 0.5) ? -1 : day;
}
/** Whether what her writer says the two halves have in common is one of the days set beside that true thing. */
function besides(shared, suggest, lang, day) {
  const en = lang === "en";
  return BESIDE[suggest][lang][day].split(en ? /,\s*/ : "、").some((kind) => share(kind, shared, en) >= 0.6);
}

/**
 * Her reason for the first stop, kept true: whole sentences within its length, no other host's life spoken of in its
 * place, his half one of his true things met where her writer says (one of the days set beside it, when she says),
 * and the visitor's words only as they said them — a quote they never said gives way to the nearest of her
 * notes (their exact words), or the reason is left out (the gate then gives that life's own reason).
 */
function whyOf(text, lang, suggest = "", life = null, shared = undefined) {
  const en = lang === "en";
  let why = breath(clean(upTo(unsaid(clean(en ? text : zhQuotes(text), 200), en), en ? 140 : 48, en), 160), suggest, en);
  if (!why) return "";
  if (suggest && DAYS[suggest]) {
    const day = dayOf(why, suggest, lang);
    if (day < 0 || (typeof shared === "string" && !besides(shared, suggest, lang, day))) return "";
  }
  if (suggest && !HOST_NAME[suggest]?.test(why) && Object.entries(HOST_NAME).some(([id, re]) => id !== suggest && re.test(why))) return "";
  if (life) {
    const l = cleanLife(life);
    const said = l.turns.map((t) => t.a).join("\n") || l.story;
    for (const { q, near } of quotedIn(why, en)) {
      if (said && (en ? grounded(q, said, en) >= near : runsOf(q, said) >= 0.5)) continue;
      // Said back in other words: the note of hers nearest it, in their own words, takes its place — or no reason.
      const note = said ? nearestNote(q, l.details, en) : "";
      if (!note) return "";
      why = why.replace(q, note);
    }
  }
  // Their words said back to them: outside a quote, their "我" is "你".
  const dash = en ? -1 : why.indexOf("——");
  if (dash > 0 && !/[「『]/.test(why.slice(0, dash))) why = `${why.slice(0, dash).replace(/我/g, "你")}${why.slice(dash)}`;
  return why;
}
/**
 * The open life her writer named: its id, or a slip of it there is no mistaking ("lishizhi", "Li Shizhen") — never a
 * life that isn't open ("" then: the gate sends them by their kind of work).
 */
function lifeOf(v, open) {
  const s = String(v || "").trim();
  if (open.includes(s)) return s;
  for (const w of s.toLowerCase().match(/[a-z]+/g) || []) {
    const near = w.length >= 5 ? open.filter((o) => o.startsWith(w) || slips(w, o) <= 2) : open.filter((o) => o === w);
    if (near.length === 1) return near[0];
  }
  const named = open.filter((id) => HOST_NAME[id]?.test(s));
  return named.length === 1 ? named[0] : "";
}
/** How many letters apart two short words are (insertions, deletions, substitutions). */
function slips(a, b) {
  let row = [...Array(b.length + 1).keys()];
  for (let i = 1; i <= a.length; i += 1) {
    const next = [i];
    for (let j = 1; j <= b.length; j += 1) next[j] = Math.min(row[j] + 1, next[j - 1] + 1, row[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    row = next;
  }
  return row[b.length];
}
/** Of her notes (their own words), the one a rewritten quote shares most with (two characters, or a word, at least). */
function nearestNote(q, details, en) {
  const parts = (s) => new Set(en ? String(s).toLowerCase().match(/[a-z']{3,}/g) || [] : [...String(s).replace(/[\s\p{P}\p{S}]+/gu, "")]);
  const want = parts(q);
  let best = "", most = 0;
  for (const d of details) {
    if (careIn(d)) continue;
    const shared = [...parts(d)].filter((p) => want.has(p)).length;
    if (shared > most) { most = shared; best = d; }
  }
  return most >= (en ? 1 : 2) ? best : "";
}
/**
 * How much of a Chinese quote runs as it was said (0…1): its three-character runs found in their words. A quote cut
 * short or with a word dropped keeps most of them; one rewritten in other words ("一个人在那儿" for an intern beside
 * them) keeps few. Their "我" is said back as "你".
 */
function runsOf(q, said) {
  const norm = (s) => [...String(s).replace(/[\s\p{P}\p{S}]+/gu, "").replace(/我/g, "你")];
  const a = norm(q), b = norm(said).join("");
  if (a.length < 3) return b.includes(a.join("")) ? 1 : 0;
  const runs = a.slice(0, -2).map((_, i) => a.slice(i, i + 3).join(""));
  return runs.filter((r) => b.includes(r)).length / runs.length;
}

/**
 * The passport as written, kept to the copy style. `suggest` is empty when the writer named no open life: the gate
 * then sends them by their kind of work (src/landing JOBS). `life`, when given, is what her reason is checked against.
 */
export function saneGuide(g, lang, open = ["melies"], life = null) {
  const en = lang === "en";
  const suggest = lifeOf(g?.suggest, open);
  const words = (Array.isArray(g?.keywords) ? g.keywords : []).map((k) => clean(k, en ? 24 : 8)).filter(Boolean).slice(0, 3);
  // Her two sentences as she hands it over; where to go is hers to say plainly when the model's way of saying it is
  // left out. Each line of the passport is whole sentences within its length.
  const first = en ? "Your first stop is where the light is." : "第一站，在亮着光的地方。";
  const said = upTo(unsaid(clean(g?.reply, 200), en), en ? 150 : 44, en);
  const reply = !said ? (en ? `Keep this safe. ${first}` : `护照收好。${first}`) : sentencesOf(said, en).length < 2 && !/第一站|first stop/i.test(said) ? `${said}${en ? " " : ""}${first}` : said;
  return {
    reply,
    who: clean(g?.who, en ? 32 : 12),
    title: clean(unsaid(g?.title, en), en ? 48 : 16),
    line: clean(upTo(unsaid(clean(g?.line, 200), en), en ? 140 : 32, en), en ? 160 : 60),
    keywords: words,
    unseen: clean(upTo(unsaid(clean(g?.unseen, 200), en), en ? 140 : 34, en), en ? 140 : 48),
    suggest,
    why: whyOf(g?.why, lang, suggest, life, typeof g?.shared === "string" ? g.shared : undefined),
  };
}

/**
 * How far along the visitor is: with `seen` (the ids of the lives they've walked through), how many of them; without
 * it, nothing is said either way.
 */
function walkedLine(lang, seen, open) {
  if (!Array.isArray(seen)) return "";
  const done = open.filter((id) => seen.includes(id)).length;
  const en = lang === "en";
  if (!done) return en ? " They haven't walked into a life yet." : "他还没走进哪一段人生。";
  if (done < open.length) return en ? ` They've walked through ${done} of the ${open.length} lives.` : `${open.length} 段人生他走过了 ${done} 段。`;
  return en ? " They've walked through every life here — if they ask what next, send them home to rest." : "这里的几段人生他都走过了——他要是问接下来呢，就让他回去歇着。";
}

/**
 * Where the plaza's gold path leads now (`next`: the passport's first stop until it is walked, then the next life not
 * walked, then the court of small things), so that where she sends them is where the pill and the light already do;
 * `why`, the reason she wrote on their passport for it, when it is still their first stop.
 */
function nextLine(lang, next, open, why = "") {
  const en = lang === "en";
  if (next === "flash") return en ? ` The gold path leads them now to the court of small things in the south-west (pieces made for people who came here): if they ask where to go, send them there and nowhere else.` : `广场上的金色小路这会儿指向西南角的小院（来过这里的人的几件小东西）：他要是问先去哪、下一站去哪，就让他去那儿，不说别处。`;
  if (!open.includes(next)) return "";
  const because = !why ? "" : en ? ` Why there, as you wrote it on their passport: "${why}" — if they ask, give them that reason again in your own words.` : `为什么先去那儿，你在他的护照上写过：「${why}」——他问起，就照这个意思再说一遍。`;
  return en ? ` The gold path leads them now to ${next}: if they ask where to go first or next, send them there and nowhere else.${because}` : `广场上的金色小路这会儿指向 ${next}：他要是问先去哪、下一站去哪，就让他去那儿，不说别处。${because}`;
}

/**
 * What she knows of the visitor on the plaza, in her own terms: what they said to her at the gate, the bubbles, her
 * own reading of them (her sense, never their facts), and the lives they have walked since — nothing of not wanting
 * to live, which she is told how to meet instead.
 */
function guideKnows(lang, l, journey, here = "") {
  const en = lang === "en";
  const care = careOf(l);
  const out = [];
  const said = talkOf(l).filter((t) => !(care && careIn(t.a))).slice(-4);
  if (said.length) out.push(en ? `What they said to you at the gate, word for word:\n${said.map((t) => `- "${t.a}"`).join("\n")}` : `他在门口跟你说的（原话）：\n${said.map((t) => `- 「${t.a}」`).join("\n")}`);
  else if (l.story && !(care && careIn(l.story))) out.push(en ? `What they said to you at the gate: "${l.story}"` : `他在门口跟你说的：「${l.story}」`);
  else out.push(en ? "At the gate they said next to nothing." : "他在门口几乎什么也没说。");
  const picked = picksLine(l.picks, en);
  if (picked) out.push(picked.replace(/^- /, ""));
  if (l.portrait && !careIn(l.portrait)) out.push(en ? `Your reading of them, written at the gate (your sense of them, never to be said as their facts): ${l.portrait}` : `你在门口写下的对他的读法（是你的感觉，不当他的事说）：${l.portrait}`);
  const walked = journeyBrief(lang, journey, here);
  if (walked) out.push(en ? `Where they have been since, and what they did there:\n${walked}` : `后来他走过的几段，和他在那儿做的：\n${walked}`);
  if (care) out.push(en ? `At the gate they spoke of not wanting to live: don't bring it up; if they speak of it again, put everything else down and say plainly: "${CARE_LINE.en}"` : `他在门口说起过不想活：别提那些话；他要是再说起，就放下别的，认真对他说：「${CARE_LINE.zh}」`);
  return out.join("\n");
}

/** Questions on the plaza: what this place is, where to go, whether the lives are real. */
export function guideChatMessages({ lang, identity, note, life, history, text, open = ["melies"], seen, next = "", why = "", journey = null }) {
  if (oldContext()) return OLD.guideChatMessages({ lang, identity, note, life, history, text, open, seen, next, why });
  const lives = listLives(lang, open);
  const l = cleanLife(life);
  const en = lang === "en";
  const care = careOf(l);
  const because = care ? "" : clean(why, 160);
  const frame = en
    ? ` Each life a visitor walks into is a stretch of someone else's days, traded for a stretch of theirs.${next === "flash" ? " They've walked through every life here; the last stop is their own turn, the court of small things." : walkedLine(lang, seen, open)}${nextLine(lang, next, open, because)} Never call any of it a dream.`
    : `来访者走进一段人生，就是拿自己的一段日子，换他们的一段。${next === "flash" ? "这里的几段人生他都走过了，最后一站是他自己的那一回（西南角的小院）。" : walkedLine(lang, seen, open)}${nextLine(lang, next, open, because)}不把这里说成梦。`;
  const who = l.who || l.role || clean(identity, 40);
  const knows = guideKnows(lang, l, Array.isArray(journey) ? journey : []);
  const sys = en
    ? `You are the guide of the Life Plaza, a plaza floating above the clouds; before this you did late-night radio for twenty years, listening to strangers. On the plaza stand the places where people who once went a long time unseen lived; visitors walk in, hear the owner tell his life in his own voice (an AI performance grounded in the documented life and public-domain works), and leave with something made with their own hands. The lives:\n${lives}\nThe Morris column by Méliès' studio carries his old posters, and the shots he has filmed of visitors once there are some.${frame}\nThe visitor${who ? ` (${who})` : ""}:\n${knows}\nSpeak like a gentle old friend: 1–3 short spoken sentences, no lists, no lectures. What you say of them is what you understood, never their words handed back; presume nothing (no trouble they didn't speak of); someone who said little, you say little of. Never invent facts about the lives or about them.`
    : `你是「人生广场」的引路人；来这儿之前，你在电台做了二十年夜间节目，听陌生人说话。这是一座浮在云上的广场，上面是几位曾经很久没被人看见的人生活过的地方；来访者走进去，听主人用自己的声音讲他的一生（由 AI 扮演，依据他们的生平、书信与著作），最后带走一样亲手做的东西。广场上的人生：\n${lives}\n梅里爱摄影棚旁的海报柱上贴着他的老海报，有了来访者的一镜，也贴上去。${frame}\n眼前的来访者${who ? `（${who}）` : ""}：\n${knows}\n像温柔的老朋友那样说话：一到三句说出口的短句，不列清单，不说教。说到他，说的是你听懂的，不是把他的话念回来；不预设（他没说的难处，别替他说）；他说得少，你也少说他。不编造主人们的生平，也不编造他的事。`;
  const msgs = [{ role: "system", content: `${sys}\n${voiceRules(lang)}` }];
  for (const h of (history || []).slice(-8)) msgs.push({ role: h.role === "me" ? "assistant" : "user", content: clean(h.text, 300) });
  msgs.push({ role: "user", content: clean(text, 300) });
  return msgs;
}

/**
 * Her last word when every life is walked (said before "都走完了。回去吧，日子还长。"): one sentence that is only
 * theirs, from where they have been and her reading of them — something they did on the way, or a change in them; of
 * someone who said nothing, only what they carry out. None after the show was put down at the gate: then the plain
 * goodbye is all she says.
 */
export function endingMessages({ lang, life, journey }) {
  if (oldContext()) return OLD.endingMessages({ lang, life, journey });
  const l = cleanLife(life);
  const j = cleanJourney(journey).filter((x) => x.title || x.did);
  if (careOf(l) || !j.length) return null;
  const en = lang === "en";
  const who = whoLine(l, en);
  const said = talkOf(l).filter((t) => !careIn(t.a)).map((t) => t.a);
  const knows = [
    said.length ? (en ? `What they told you at the gate the night they rang in, word for word:\n${said.map((s) => `- "${s}"`).join("\n")}` : `他打进来的那一夜，在门口跟你说的（原话）：\n${said.map((s) => `- 「${s}」`).join("\n")}`) : (en ? "At the gate they said next to nothing." : "他在门口几乎什么也没说。"),
    picksLine(l.picks, en).replace(/^- /, ""),
    l.portrait && !careIn(l.portrait) ? (en ? `Your reading of them, written at the gate (your sense, never their facts): ${l.portrait}` : `你在门口写下的读法（你的感觉，不当他的事说）：${l.portrait}`) : "",
  ].filter(Boolean).join("\n");
  const sys = en
    ? `${GUIDE.en}
The visitor: ${who || "hasn't said who they are"}.
${knows}
Since then they have walked through every life on the plaza:
${journeyBrief("en", j)}
Now they have come out of the last door. Your next words will be "That's all of them. Go on home — there are plenty more days." Before them, say one sentence that belongs to this visitor alone: one thing they did on the way, or a change in them on the way — only what is written above; a change means only how what their hands did differed, before and after, never what they learned, understood, let go of or found. You may borrow a word of theirs from the gate; you needn't quote them. If they said next to nothing, only say what they carry out of these lives, by what is in each, never by its title.
Rules: one sentence, at most 32 words; only what is written above, nothing added; each life's things stay in that life (which thing was where, what it became and whose it was, as written for that life), never two lives joined into one event; what their hands did only as "what they did there" says, never folding, drawing, writing or naming they didn't do; name no feeling of theirs, sum nothing up, no lesson, no praise, no thanks; if they never spoke of anything hard, nothing hard of them; never "dream", never send them home (your next line does), never "seen"; no exclamation marks.
Example (another visitor's — learn the measure, not the words): she had told you of the corridor at four in the morning. You said: Out of these lives the call bell went up as three stars, and you weighed three qian of daylily to go with them.
Reply with only that sentence.`
    : `${GUIDE.zh}
来访者：${who || "还没说自己是谁"}。
${knows}
后来，广场上的每一段人生他都走过了：
${journeyBrief("zh", j)}
现在他从最后一扇门里出来了。你接下来要说的是「都走完了。回去吧，日子还长。」在那之前，先说一句只属于他的话：从这一趟里挑一件他做过的事，或者他这一路上的一点变化——只拿上面写着的说；变化只说他手上做的事前后的不同，不说他学会了、明白了、放下了、找到了什么。可以借他门口的一个词，不必引他的原话。他一路几乎什么也没说，就只说他带走的东西——照里面装着的叫，不报标题。
规矩：一句话，不超过60个字；只用上面写着的，一个字也不添；每段的事各归各段（哪样东西在哪一段、变成了什么、是谁的，都照那一段写的），不把两段的东西接成一件事；他手上做了什么，只照「他在那儿做的」说，不添折、画、写、取名这类他没做的动作；不说他的心情，不总结，不讲道理，不夸他，不谢他；他没说有难处，就别当他有；不写「梦」字，不叫他回去（下一句会说），不说「被看见」；不用感叹号。
例（是另一位来访者的，只学分寸，不抄字）：她在门口说起过凌晨四点的走廊。你说：走出这几段，那只呼叫铃上了台，变成三颗星，你还亲手称了三钱萱草配它。
只输出这一句话。`;
  return [{ role: "system", content: sys }, { role: "user", content: en ? "(They have just come out of the last door.)" : "（他刚从最后一扇门里出来。）" }];
}

/**
 * Her last word and her line for coming back are asked for well before they are said: the surest hand writes them,
 * the quick voices (`quick`) behind it. Under LIFE_CONTEXT=old, the quick voices alone, as before.
 */
export const LAST_WORD_MODELS = (quick = []) => (oldContext() ? [...quick] : ["claude-sonnet-4-6", ...quick.filter((m) => m !== "claude-sonnet-4-6")]);

/** What a visitor carries out of the lives walked, as a list said in one breath. */
function carried(j, en) {
  const gifts = j.map((x) => LIFE_OUT[x.id].gift[en ? 1 : 0]);
  if (gifts.length < 2) return gifts[0] || "";
  return en ? `${gifts.slice(0, -1).join(", ")} and ${gifts.at(-1)}` : `${gifts.slice(0, -1).join("、")}和${gifts.at(-1)}`;
}
/** Her plain last word, when hers can't be kept: what they carry out, and nothing said of them. */
const plainEnding = (j, en) => (en ? `Out of these lives you carry ${carried(j, en)}.` : `走出这几段，你手里多了${carried(j, en)}。`);

/**
 * Her last word kept to the rules: one sentence, nothing of dreams, the millet or the theme, no exclamation. When it
 * can't be kept, the plain line of what they carry out (none after care).
 */
export function saneEnding(text, lang, { life = null, journey = [] } = {}) {
  if (oldContext()) return OLD.saneEnding(text, lang, { life, journey });
  const en = lang === "en";
  const l = cleanLife(life);
  const j = cleanJourney(journey).filter((x) => x.title || x.did);
  if (careOf(l) || !j.length) return "";
  const line = oneLine(text, en, en ? 300 : 90);
  // A line that is only their own words handed back says nothing of where they have been.
  const rest = line.replace(en ? /["“][^"”]*["”]/g : /[「“『][^」”』]*[」”』]/g, "").replace(/[\s\p{P}\p{S}]+/gu, "");
  const keeps = line && [...rest].length >= (en ? 12 : 6) && !SAYS_SEEN.test(line) && !SAYS_DREAM.test(line) && !/黄粱|\bmillet\b/i.test(line) && !/[!！]/.test(line) && !careIn(line);
  return keeps ? line : plainEnding(j, en);
}
/** A model's line as said: no stage directions, no quotation marks round all of it, whole sentences within `max`. */
function oneLine(text, en, max) {
  const bare = clean(String(text || "").replace(/\*[^*]*\*|（[^）]*）|\([^)]*\)|\[[^\]]*\]|【[^】]*】/g, " "), 400);
  const raw = en ? bare : zhQuotes(bare);
  const whole = raw.match(/^[「“"『](.*)[」”"』]$/);
  return upTo(whole && !/[「」“”"『』]/.test(whole[1]) ? whole[1] : raw, max, en);
}

/**
 * Her word for when they come back another day, said after "你回来了。" and written while they are
 * still here (src/spaces/plaza/index.js keeps it, so coming back waits on no model): one plain sentence from where
 * they have been, in the measure of her reading — never a question about how something turned out (nothing is
 * presumed to be pending), nothing of their feelings. Null when there is nothing to say (nothing made yet, or the
 * show was put down at the gate).
 */
export function backMessages({ lang, life, journey }) {
  if (oldContext()) return null;
  const l = cleanLife(life);
  const j = cleanJourney(journey).filter((x) => x.title || x.did);
  if (careOf(l) || !j.length) return null;
  const en = lang === "en";
  const knows = guideKnows(lang, l, j);
  const sys = en
    ? `${GUIDE.en}
${knows}
They will leave the plaza for now. When they come back another day, you will first say "You're back." Write the one sentence you say after it: lightly, one thing they did here last time (only what is written above, as written for that one life, nothing added — what they weighed in the shop is only the herbs written there — never two lives joined), in the measure of your reading of them (of someone who said little, only the plain fact). A statement, not a question: never ask how something turned out, never ask after anything they didn't say they were waiting on, name no feeling of theirs.
Rules: one sentence, at most 24 words; never "dream", "millet" or "seen"; no exclamation marks. Reply with only that sentence.`
    : `${GUIDE.zh}
${knows}
他这就要离开广场了。等他哪天再来，你会先说「你回来了。」写下接着说的那一句：轻轻地，提一件他上回在这儿做过的事（只用上面写着的，照那一段写的说，一样也不添——比如药铺里称的，只是写着的那几味——不把两段接在一起），照你对他的读法拿分寸（话少的人，就只说那件事本身）。是一句陈述，不是问句：不问「后来怎么样了」，不问任何他没说在等的事，不说他的心情。
规矩：一句话，不超过36个字；不写「梦」「黄粱」，不说「被看见」；不用感叹号。只输出这一句话。`;
  return [{ role: "system", content: sys }, { role: "user", content: en ? "(Write the line for when they come back.)" : "（写他下回来时的那一句。）" }];
}

/**
 * Her word for when they come back, kept to the rules — or the plain fact of the last thing they made here. Under
 * LIFE_CONTEXT=old, the plaza's old line ("上回你说起X，后来怎么样了？", from their noted details).
 */
export function saneBack(text, lang, { life = null, journey = [] } = {}) {
  const en = lang === "en";
  const l = cleanLife(life);
  if (oldContext()) {
    const d = l.details.find((x) => [...x].length <= 18 && !careIn(x));
    return d ? (en ? `Last time you told me about ${d}. How did it go?` : `上回你说起${d}，后来怎么样了？`) : "";
  }
  const j = cleanJourney(journey).filter((x) => x.title || x.did);
  if (careOf(l) || !j.length) return "";
  const line = oneLine(text, en, en ? 160 : 44);
  const asks = /[?？]|[吗呢么][。.\s]*$|后来(怎么样|如何)|怎么样了|还好吗|好些了吗|how did it go|how('s| is| are) (it|things)|did it work out/i;
  const keeps = line && !asks.test(line) && !SAYS_SEEN.test(line) && !SAYS_DREAM.test(line) && !/黄粱|\bmillet\b/i.test(line) && !/[!！]/.test(line) && !careIn(line);
  if (keeps) return line;
  const last = j.at(-1), o = LIFE_OUT[last.id];
  return en ? `Last time you came out of ${o.room[1]} with ${o.gift[1]}.` : `上回你从${o.room[0]}带走了${o.gift[0]}。`;
}

/** A line on the lantern wall: public, so it is checked first. */
export function moderationMessages(text) {
  return [
    { role: "system", content: "You check short lines that visitors leave on a public wall about their own lives (in Chinese or English). Reject hate, harassment, sexual content, violence, self-harm encouragement, personal data (phone numbers, addresses, IDs), links or ads, and political slogans. Accept ordinary feelings, everyday life, work, hopes and sadness. Reply with ONLY {\"ok\": true} or {\"ok\": false}." },
    { role: "user", content: clean(text, 160) },
  ];
}
