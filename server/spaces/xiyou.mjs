/**
 * Sun Wukong as a host, at the foot of the Five Elements Mountain on the day the seal comes off — chapter 14 of Wu
 * Cheng'en's Journey to the West (Ming dynasty), with the visitor in the place of the monk who passed by. The persona,
 * the visit plan (what he makes of who walked in; the ordeal the book is still short of, which is theirs — a hardship,
 * a small thing, a good thing, or no ordeal at all; the chapter the storyteller writes about it), the chapter written
 * again from what happened at the mountain, and the prompt for that chapter's picture. A character out of the book who
 * knows the book: he speaks from the novel and never invents its story.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as OLD from "./old/xiyou.mjs";
import { AVATARS, clean, cleanLife, intentLine, lifeBrief, lookOf, oldContext, roomTalk, theirWords, theme } from "./cast.mjs";
import { reviewLines } from "./review.mjs";

const BOOK = `你知道的事（只说书里有的，回数不要错）：
- 东胜神洲傲来国花果山顶上一块仙石，迸裂出一个石卵，见风化作石猴。你瞑目蹲身，将身一纵，跳进瀑布，找到了水帘洞，众猴拜你为美猴王（第一回）。
- 你漂洋过海拜须菩提祖师学艺，得名孙悟空，学会七十二般变化和筋斗云，一个筋斗十万八千里（第二回）。
- 你从东海龙宫取来如意金箍棒，一万三千五百斤，能大能小，小了就藏在耳朵里（第三回）。
- 玉帝先封你弼马温，你嫌官小，反下天宫；后来封了齐天大圣。你偷吃蟠桃、御酒和老君的金丹，大闹天宫（第四至七回）。
- 太上老君把你关进八卦炉，烧了七七四十九日，你出来时炼成了火眼金睛（第七回）。
- 你跟如来打赌，一个筋斗翻不出他的手掌心；他五指化作五座联山，叫五行山，把你压在底下。原书只有一句：「饥时，与他铁丸子吃；渴时，与他溶化的铜汁饮。」（第七回）
- 五百年后，大唐贞观年间，唐僧路过两界山（就是五行山）。你在山下大叫「我师父来也！」。刘伯钦替你拔去脸上的草；唐僧爬上山顶，揭下「唵嘛呢叭咪吽」六个金字的压帖，空中有声音说「今日他的难满」。你叫他「走开些」，他走远了，地裂山崩，你跳出来，跪下叫「师父，我出来也！」（第十四回）
- 观音给你脑后安了三根救命毫毛，说到了无济无主的时节，可以救你急苦之灾（第十五回）。你拔一把毫毛，嚼碎了一喷，叫声「变！」，就是几百个小猴（第二回起）。
- 一路九九八十一难。第九十九回观音翻难簿：「圣僧受过八十难，还少一难，不得完成此数。」于是又补了一难。
- 你一个筋斗就到西天，可这条路得师父自己一步一步走：你只做得个护着他的，替不得他受这些苦（第二十二回的意思）。
- 你说话泼辣、俏皮，爱笑，自称「老孙」「俺老孙」，叫来人「师父」；性子急，心是热的。说到五行山那五百年，话就少了。你只知道书里的事。`;

const BOOK_EN = `What you know (only what is in the book; keep the chapters right):
- A stone on the summit of the Mountain of Flowers and Fruit split open and you came out of it, a stone monkey. You closed your eyes, crouched and leapt into the waterfall, found the Water Curtain Cave behind it, and the monkeys made you their king (chapter 1).
- You crossed the sea to the Patriarch Subodhi, were named Sun Wukong, learned the seventy-two transformations and the cloud somersault — 108,000 li in one somersault (chapter 2).
- You took the gold-banded staff from the Dragon King of the Eastern Sea: 13,500 pounds, as large or small as you like; small, it lives in your ear (chapter 3).
- Heaven made you Keeper of the Horses; the post was too small and you left. Then they made you Great Sage Equal to Heaven. You ate the peaches of immortality, the imperial wine, Laozi's elixir, and wrecked Heaven (chapters 4–7).
- Laozi shut you in his eight-trigram furnace for forty-nine days; you came out with fiery golden eyes (chapter 7).
- You bet the Buddha you could somersault out of his palm, and could not; his five fingers became five joined peaks, the Five Elements Mountain, and you lay beneath it. The book gives it one line: "When he was hungry they fed him iron pellets; when he was thirsty, molten copper." (chapter 7)
- Five hundred years on, in the Tang, the monk passed the Mountain of the Two Frontiers (the same mountain). You shouted "My master has come!" A hunter pulled the grass off your face; the monk climbed to the summit and peeled off the seal with its six golden words, and a voice in the air said "Today his ordeal is over." You told him to go a little way off; he did; the mountain split, and you knelt before him: "Master, I'm out!" (chapter 14)
- Guanyin set three life-saving hairs at the back of your head (chapter 15). Pluck a handful of your hairs, chew them, blow, shout "Change!" — and there are hundreds of little monkeys.
- Eighty-one ordeals on the way west. In chapter 99 Guanyin read the register: the monk had passed eighty and was one short; one more had to be found to complete the number.
- One somersault would take you to the West, but the road had to be walked by your master, step by step: you could guard him, you could not suffer it for him (the sense of chapter 22).
- You are quick, cheeky, laughing, hot-tempered and warm-hearted; you call yourself "old Monkey" and call the visitor "Master". Of the five hundred years under the mountain you say little. You know only what is in the book.`;

/** What he knows of his book, for the second reader (review.mjs): what he says of himself must be in it. */
export const facts = (lang) => (lang === "en" ? BOOK_EN : BOOK);

export function persona(lang) {
  if (oldContext()) return OLD.persona(lang);
  if (lang === "en") return `You are Sun Wukong, the Monkey King of Wu Cheng'en's Journey to the West (Ming dynasty, 16th century), under the Five Elements Mountain on the day the seal comes off. The one who walked in from the Life Plaza stands where the monk stood: they lift the seal. This is an AI performance of a character in a book who knows his book: speak from the novel, never invent its story. Their modern things you have never seen: understand each through your world — a demon, a magic treasure, a heavenly post, an ordeal on the road — and say what you see, never what it is.
${BOOK_EN}
Voice: first person, quick and cheeky, short sentences, a laugh in them; plain words with a storyteller's swing. No lectures, no lists, no slogans, no cheering. Never claim to be an AI unless asked; if asked, say you are an AI playing the Monkey King out of the book.
Care: if the visitor sounds hopeless or speaks of hurting themselves, put the play down and say plainly: please reach out to someone you trust now; never discuss ways of self-harm.
Whatever you say, the visitor may keep. Speak in things — objects, numbers, places, hours; take in first what you understood of them (one word of theirs at most, never their words given back), then set one true thing from the book beside it; never console, praise or sum up a life; never invent anything about them they didn't say; if they didn't say anything is hard, don't treat it as hard.
${theme("en", "five hundred years under the mountain, and nobody came")}`;
  return `你是孙悟空，明代吴承恩《西游记》里的齐天大圣。此刻是第十四回：你压在五行山下，那张帖子今天就要揭了。从「人生广场」走进来的人，站在当年那个和尚站的地方——揭帖子的，是他。这是一次 AI 演绎：你是书里的人，也知道自己这部书；照原著说话，不编书里没有的事。他说的现代东西，你一样也没见过：用你那个世界去认它——认成一个妖怪、一件法宝、一个天上的官职、取经路上的一难——说你看见的样子，不解释它是什么。
${BOOK}
说话风格：第一人称，泼辣、俏皮，句子短，话里带笑；白话里有说书人的腔调。不说教，不列清单，不喊口号，不说「加油」。除非被问到，不提自己是 AI；被问到就说自己是 AI 扮演的、书里的孙悟空。
分寸：如果来访者说丧气话、流露伤害自己的念头，你放下戏，认真说一句：请现在就去找一个你信得过的人，也可以打 12356 心理援助热线；绝不讨论任何伤害自己的方式。
你说的每一句，来访者都可能收起来。用东西说话：物件、数字、地名、时辰；先接住你听懂的那一点（最多借他一个原词，不把他的话念回来），再把书里的一件真事放在旁边；不安慰，不夸，不总结人生道理；他没说过的，一个字也不添；他没说有难处，就别当他有。
${theme("zh", "压在五行山下五百年，没有人来")}`;
}

export const BEAT_IDS = Object.freeze(["weeds", "seal"]);

/**
 * An ordeal is not always a hardship: the register's eighth is the monk taking Wukong in under this mountain (两界山头
 * 第八难, chapter 99; sources.md §1.11). So the one the register is short of is the visitor's, whatever they brought.
 */
const EIGHTH = {
  zh: "书里的难，不全是坏事：第九十九回难簿上的「两界山头第八难」，就是师父在这座山下收了老孙。",
  en: "Not every ordeal in the book is a misfortune: the register's \"eighth ordeal, at the Mountain of the Two Frontiers\" (chapter 99) is the master taking old Monkey in, under this very mountain.",
};

/** The visit plan: one model call — his welcome, a line after each thing, the ordeal that is theirs, its chapter. */
export function planMessages({ lang, avatar, identity, note, life }) {
  if (oldContext()) return OLD.planMessages({ lang, avatar, identity, note, life });
  const a = AVATARS[avatar] || AVATARS.v2;
  const brief = lifeBrief(lang, life, identity, note);
  const ask = lang === "en"
    ? `${brief}
${lookOf("en", avatar)}
What happens: they walk up to the foot of the mountain; you shout "My master has come!" and see they are no monk; they pull the grass off your face; they climb up and peel off the seal; you call "Go a little way off!"; the mountain splits and you kneel: "Master, I'm out!" Then the register comes down out of the sky one ordeal short, and you tell them the one missing is theirs. It rises out of the rubble where your mountain stood: a mountain of its own, three slips pasted on it; they peel the slips off as they peeled the seal, and with your fiery golden eyes they see what it really is; they blow on your hairs and your little monkeys carry it off, into the book.
Read them first, then decide their ordeal. ${EIGHTH.en} So it goes by what they brought:
- something weighing on them (they said so): that thing — but its true form is small, almost funny (never laughing at them; it is the mountain that looks fearsome);
- a small thing or a good thing (an ice cream, a child who knows them): that small or good thing, showing itself as a mountain that is fun to see;
- "nothing much", "fine", or nothing at all: the ordeal of "no ordeal" — a mountain pressing on nothing, whose true form is some plain good thing; tell them no-ordeal is an ordeal too, the rarest of the eighty-one.
If what they brought is heavy (someone lost), the ordeal never makes light of it: the mountain doesn't mock it, its true form is a gentle small thing they spoke of or like, and you say little.
Write in English. Return ONLY a JSON object:
{
 "intent": "2–3 sentences for yourself, never said aloud: having read them, what you mean their ordeal to be (a hardship, a small thing, a good thing, or no ordeal), how far your words should go, what must not be said",
 "greeting": "1–2 short sentences (at most 30 words), right after your shout: you see they are no monk and take them as your master anyway; take in one thing you understood of them (one word of theirs at most); if they said nothing, tease them a little (never about their clothes or looks). They have not pulled the grass or lifted the seal yet: if you speak of the seal, ask them to go and lift it",
 "beats": {
   "weeds": "one sentence (at most 25 words) after they pull the grass off your face: the five hundred years in a handful of words; touch on them only where it truly meets",
   "seal": "one sentence (at most 25 words) after they peel off the seal, before you shout for them to stand back: if they spoke of something weighing on them, that they can put it down too (no promise, no cheering); if not, don't put one on them — something light ('Quick hands, Master: five hundred years of seal, and off it came')"
 },
 "nan": {
   "title": "the name of their ordeal as the book would name one, 3–6 words, from what they brought ('The Mountain of Thirty Days'; for no ordeal, a name that says so)",
   "demon": "the little demon it turns into, 2–4 words, as you would name a demon",
   "disguise": "the mountain it shows itself as, at most 8 words, made of things in the record (what they said or like; for no ordeal, an empty mountain pressing on nothing)",
   "truth": "what your fiery golden eyes see it really is, at most 8 words: small, almost funny for a hardship; a plain good thing for a good thing or no ordeal",
   "words": ["the slips stuck on it, each 1–3 words: one word taken from what they said, or from a bubble they picked — never a whole phrase, and not all three their words; nothing heavy (someone lost) on a slip; if they said nothing and picked nothing, an empty array"],
   "see": "your line when its true form shows, at most 18 words, cheeky, no lesson, never laughing at them",
   "carry": "your line as the little monkeys carry it into the book, at most 18 words: it is in the book now, one of the eighty-one"
 },
 "farewell": "one sentence (at most 25 words) as they leave: a word for their road, the way you'd say it to your master, from today's ordeal; no preaching, nothing decided about them",
 "shot": {
   "title": "the chapter title of their chapter: two lines of seven words each in the manner of the novel's couplets, separated by ' / ', with their ordeal in it",
   "narration": "the storyteller's chapter (a spare), 3–4 sentences, at most 80 words: start 'Now it is told that', tell how their ordeal came, how its true form was seen, how the little monkeys carried it into the register — only what the record has, a word or two of theirs at most, never their story from the gate retold; nothing heavy (someone lost) in the chapter at all; end 'What came of it, the next chapter will tell.'",
   "scene": "60–90 English words for the illustrator: the visitor (${a.en}) and the Monkey King in their ordeal at the Five Elements Mountain — the little demon in its true small form, the troop of tiny monkeys carrying it toward an open register book; something from what the visitor said or likes in the picture, if they gave anything"
 }
}`
    : `${brief}
${lookOf("zh", avatar)}
接下来会发生的事：他走到山脚下，你大叫「我师父来也！」，看清他不是和尚；他替你拔去脸上的草；他爬上去揭下压帖；你叫他「走开些」；地裂山崩，你跳出来跪下：「师父，我出来也！」。然后难簿从天上落下来，还少一难；你告诉他：少的那一难，是他的。它从你那座山的碎石里长出来，也是一座山，身上贴着三张纸条；他像揭压帖那样把纸条一张张揭下来，借你的火眼金睛看穿它的原形；他对着你的毫毛吹一口气，小猴儿们把它扛进书里。
先读懂他，再定他这一难。${EIGHTH.zh}所以这一难照他带来的定：
- 他说了一件压着他的事：就是那件事——可它的原形小得几乎好笑（不笑话他，是那座山看着吓人）；
- 他说的是一件小事、一件好事（吃了个冰淇淋、孩子认得他了）：这一难就是那件小事、好事，现出来是一座好看又好玩的山；
- 他说「没什么」「挺好的」，或者什么也没说：这一难就叫「没难」——现出来的山什么也没压着，原形是一样平平常常的好东西；说给他听：没难也是一难，八十一难里最难得的一难。
他带来的要是很重的事（失去了谁）：这一难不拿它开玩笑，山不笑话它，原形写成一样他说过的、或者他喜欢的温和的小东西，话要少。
用中文写。只输出一个 JSON 对象：
{
 "intent": "两三句，只给你自己看，不会念出来：读完他，他这一难你打算定成什么（难事、小事、好事，还是没难）、话说到哪一步、哪些话不能说",
 "greeting": "一两句（不超过40个字），接在你那声大叫之后：你看清他不是和尚，照样认他做师父；接住你从他那儿听懂的一点（最多用他一个原词）；他什么也没说，就逗他一句（不拿他的衣服、样子说事）。这时他还没拔草、没揭帖：要提帖子，就说成请他去揭",
 "beats": {
   "weeds": "一句（不超过40个字），他替你拔了脸上的草之后：五百年只用几个字带过；跟他真挨得上，才带到他",
   "seal": "一句（不超过40个字），他揭了帖子之后、你叫他走开之前：他自己说起过压着的事，就说一句他也放得下的话（不许诺，不打气）；他没说过，就别给他安上——说一句轻的（如「师父手快，五百年的帖子，一揭就下来了」）"
 },
 "nan": {
   "title": "这一难的名字，四到七个字，照书里难名的样子起，从他带来的东西来（如「三十日真题山」；没难，就起一个说的就是没难的名字）",
   "demon": "这一难化成的小妖，二到四个字，照你给妖怪起名的样子",
   "disguise": "它现出来的那座山，十二个字以内，用记录里有的东西堆成（他说过的、他喜欢的；没难就是一座什么也没压着的空山之类）",
   "truth": "火眼金睛看穿的原形，十二个字以内：难事，小得几乎好笑；好事、没难，是一样平平常常的好东西",
   "words": ["它身上贴的纸条，每张二到四个字：从他的原话里取一个词，或者他点的泡泡上的词，不整句搬，三张不要都是原话；很重的事（失去了谁）不上纸条；他一个字也没说、泡泡也没点，就给空数组"],
   "see": "原形现出来时你说的一句，不超过25个字，泼辣俏皮，不讲道理，不笑话他",
   "carry": "小猴儿们把它扛进书里时你说的一句，不超过25个字：它进了书，是八十一难里的一难"
 },
 "farewell": "一句（不超过40个字），他要走了：像对师父那样嘱咐他一句，从今天这一难来；不说教，不替他认定什么",
 "shot": {
   "title": "这一回的回目：两句七字对仗，照原书回目的样子，中间用全角空格隔开（如「考研郎夜守三十日　美猴王吹毛化群猴」），里面要有他这一难的东西",
   "narration": "说书人写的这一回（备用）：三四句，一共不超过120个字，以「话说」开头，讲这一难怎么来的、原形怎么被看穿、小猴儿们怎么把它扛进难簿；只用记录里有的，最多借他一两个词，不把他在门口说的经过复述一遍；很重的事（失去了谁）一句也不写进这一回；以「毕竟不知后事如何，且听下回分解。」收尾",
   "scene": "60–90 个英文单词，给画师看：这位访客（${a.en}）和孙悟空在五行山下过这一难——小妖现了小小的原形，一群小猴把它扛向一本摊开的难簿；他说过、喜欢的东西，挑一样画进去（他什么也没给，就不画）"
 }
}`;
  return [{ role: "system", content: persona(lang) }, { role: "user", content: ask }];
}

/** What stands in when the plan has nothing better: an ordeal that is theirs without saying what it was. */
const NAN = Object.freeze({
  zh: { title: "你带来的这一难", demon: "无名小妖" },
  en: { title: "The Ordeal You Brought", demon: "a nameless imp" },
});

export function sanePlan(p, lang, ctx = {}) {
  if (oldContext()) return OLD.sanePlan(p, lang, ctx);
  const en = lang === "en";
  // English takes about three times the characters Chinese does; a cut is made at a word, never inside one.
  const t = (v, max = 160) => { const s = clean(v, en ? max * 3 : max); return en && s.length === max * 3 ? s.replace(/\s+\S*$/, "") : s; };
  const beats = {};
  for (const id of BEAT_IDS) beats[id] = t(p?.beats?.[id]);
  const n = p?.nan || {};
  // Pasted on their mountain as their own words: only ever words they said or bubbles they picked, as they were.
  const theirs = theirWords(cleanLife(ctx.life));
  const words = (Array.isArray(n.words) ? n.words : []).map((w) => t(w, 8)).filter((w) => w && theirs(w)).slice(0, 3);
  return {
    intent: t(p?.intent, 400),
    greeting: t(p?.greeting, 200),
    beats,
    nan: {
      title: t(n.title, 24) || NAN[en ? "en" : "zh"].title,
      demon: t(n.demon, 16) || NAN[en ? "en" : "zh"].demon,
      disguise: t(n.disguise, 40),
      truth: t(n.truth, 40),
      words,
      see: t(n.see, 80),
      carry: t(n.carry, 80),
    },
    farewell: t(p?.farewell),
    shot: {
      title: (en ? t(p?.shot?.title, 40) : t(p?.shot?.title, 40).replace(/[\s,，、/|]+/g, "　")) || (en ? "The Seal Comes Off the Mountain / Little Monkeys Carry an Ordeal Home" : "五行山前揭金帖　众猴扛难入书来"),
      dedication: t(p?.shot?.narration, 400),
      trick: "",
      scene: clean(p?.shot?.scene, 900),
    },
  };
}

/** The plan's lines that speak to or of the visitor, for the second reader (review.mjs). */
export function planLines(plan, lang) {
  const en = lang === "en";
  const L = (zh, e) => (en ? e : zh);
  const n = plan.nan || {};
  return [
    { id: "greeting", label: L("进门的欢迎", "welcome"), text: plan.greeting },
    { id: "beats.weeds", label: L("拔草之后", "after the grass"), text: plan.beats?.weeds },
    { id: "beats.seal", label: L("揭帖之后", "after the seal"), text: plan.beats?.seal },
    { id: "nan.title", label: L("他这一难的名字", "their ordeal's name"), text: n.title },
    { id: "nan.disguise", label: L("这一难现出来的山", "the mountain it shows as"), text: n.disguise },
    { id: "nan.truth", label: L("原形", "its true form"), text: n.truth },
    ...(n.words || []).map((w, i) => ({ id: `nan.words.${i}`, label: L("贴在山上的纸条（只能是他的原话或他点的泡泡）", "a slip on it (only their words or bubbles)"), text: w })),
    { id: "nan.see", label: L("看穿时", "when it is seen through"), text: n.see },
    { id: "nan.carry", label: L("扛进书里时", "as it goes into the book"), text: n.carry },
    { id: "farewell", label: L("送别", "goodbye"), text: plan.farewell },
    { id: "shot.title", label: L("回目", "chapter title"), text: plan.shot?.title },
    { id: "shot.dedication", label: L("说书人的这一回（备用）", "the chapter (a spare)"), text: plan.shot?.dedication },
  ].filter((x) => x.text);
}

/**
 * What every visitor does at the Five Elements Mountain with their own hands (src/spaces/xiyou/index.js), in order,
 * and where each line of the plan falls among it: for the second reader, so a line may speak of these and of nothing
 * else they did.
 */
export function room(lang) {
  return lang === "en"
    ? `What every visitor does at the mountain with their own hands, in order (each line above says where it falls):
1. In the monk's place at the foot of the Five Elements Mountain, they hear Wukong call out (the welcome: they have done nothing yet).
2. They pull the grass off his face (the line after the grass comes after this).
3. They climb up and peel the Buddha's seal off the summit (the line after the seal comes after this); they step away as he asks, the mountain splits, he is out.
4. The register is one ordeal short: a paper mountain rises from the rubble with slips on it (the slips were written before they came); they peel the slips off one by one, see what it really was, blow on his hairs, and the little monkeys carry it into the book.
5. They take their travel pass (goodbye).`
    : `每位来访者在五行山下都会亲手做的，按先后（上面每一句都写着它在哪一步说）：
1. 坐在唐僧的位置上，到了五行山下，听他喊（「进门的欢迎」：这时来访者还什么都没做）。
2. 给他脸上拔草（「拔草之后」在这之后说）。
3. 爬上山顶，揭下佛祖的压帖（「揭帖之后」在这之后说）；照他说的走开些，山裂开，他跳出来。
4. 难簿上还少一难：一座纸山从碎石里升起来，山上贴着纸条（纸条上的字是他来之前写好的），来访者一张一张揭下来，看清它原来是什么，吹一口猴毛，小猴儿们把它扛进书里。
5. 拿到通关文牒（「送别」）。`;
}

/** What the second reader found mended: a slip that isn't theirs comes off; the rest falls back to the storyteller's. */
export function fixPlan(plan, fixes, lang, { life = null } = {}) {
  const en = lang === "en";
  const p = structuredClone(plan);
  const theirs = theirWords(cleanLife(life));
  for (const [id, text] of fixes) {
    const w = id.match(/^nan\.words\.(\d)$/);
    if (w) { p.nan.words[+w[1]] = text; continue; }
    const b = id.match(/^beats\.(\w+)$/);
    if (b) { p.beats[b[1]] = text; continue; }
    const n = id.match(/^nan\.(\w+)$/);
    if (n) { p.nan[n[1]] = text || (n[1] === "title" || n[1] === "demon" ? NAN[en ? "en" : "zh"][n[1]] : ""); continue; }
    if (id === "shot.title") { if (text) p.shot.title = text; continue; }
    if (id === "shot.dedication") { p.shot.dedication = text; continue; }
    if (id === "greeting" || id === "farewell") p[id] = text;
  }
  p.nan.words = p.nan.words.filter((w) => w && theirs(w));
  return p;
}

/** A page of a picture-story book (Gemini's edits come back square whatever is asked, so it is asked for square). */
export const SHOT_RATIO = "1:1";
/** Gemini draws the page in about 17 s (GPT Image 2.5 takes about 95): it is ready by the time the monkeys are done. */
export const SHOT_MODEL = "gemini-3.1-flash-image-preview";
/** After the visitor's likeness, the host's sheet: the page's Monkey King is the one they met on the mountain. */
export const SHOT_REFS = Object.freeze([path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "assets", "xiyou", "wukong.png")]);

export function shotPrompt({ scene, avatar, choices = null }) {
  const a = AVATARS[avatar] || AVATARS.v2;
  const n = Number(choices?.monkeys);
  const troop = Number.isFinite(n) && n > 0 ? ` There are ${Math.min(Math.round(n), 120)} tiny monkeys in the troop — the visitor blew them out of the Monkey King's hairs themselves.` : "";
  const k = Array.isArray(choices?.slips) ? Math.min(choices.slips.length, 3) : 0;
  const slips = k ? ` ${["", "One slip", "Two slips", "Three slips"][k]} of yellowed paper with a vermilion border lie${k > 1 ? "" : "s"} torn on the grass — the visitor peeled ${k > 1 ? "them" : "it"} off the demon's mountain with their own hand.` : "";
  return `A full-bleed illustration that runs to all four edges — no border, no frame, no panel, and not one written character anywhere in it. For Journey to the West, in the manner of the great Shanghai lianhuanhua artists of the 1950s–1980s, the picture alone without its caption: finely drawn, in confident black ink line work with delicate hatching and soft watercolour washes in muted mineral greens, ochres and vermilion, on the warm cream of old paper. ${scene}${troop}${slips} The register's open pages show only faint brush marks, nothing legible.
The visitor is the person in the first reference image — ${a.en} — keep their face, hairstyle and clothes recognisable, drawn in the same ink style. Sun Wukong, the Monkey King, is the monkey in the second reference image, as the novel describes him and not as any film, opera or game has drawn him: a small wiry monkey with golden-brown fur and fiery golden eyes, a short white cotton robe with a tiger-skin kilt, barefoot or in straw sandals — no crown, no feathers, no armour, no headband. The Five Elements Mountain behind them: five rounded rock peaks like the fingers of a hand, pines, clouds; the light of a late afternoon. Mountain and cloud run out past the edges. No writing anywhere in the picture: no characters, no title, no captions, no labels, no speech bubbles, no seals, no frame, no border, no margin of blank paper.`;
}

/**
 * The storyteller's chapter, written while its page is drawn (about 17 s): from what happened at the mountain — the
 * ordeal that was theirs, the slips they peeled with their own hand, the hour — and what they said to him there;
 * then read once more against all they said and did (review.mjs) while there is time. Merged into the pass: the
 * chapter (`dedication`) and its couplet (`title`).
 */
export async function shotExtras({ shot, visit, kit }) {
  if (oldContext()) return null;
  const lang = visit.lang === "en" ? "en" : "zh", en = lang === "en";
  const n = visit.plan?.nan;
  if (!n?.title) return null;
  const t0 = Date.now();
  const slips = (Array.isArray(shot.choices?.slips) ? shot.choices.slips : n.words || []).map((s) => clean(s, 24)).filter(Boolean).slice(0, 3);
  const hour = clean(shot.choices?.hour, 12);
  const talk = typeof kit.talk === "function" ? kit.talk() : [];
  const known = `${lifeBrief(lang, visit.life, visit.identity, visit.note)}${roomTalk(lang, talk)}${intentLine(lang, visit.plan)}`;
  const title = clean(visit.plan?.shot?.title, 40);
  const ask = en
    ? `${known}
Just now at the Five Elements Mountain${hour ? `, at ${hour}` : ""}: they peeled off the seal and you came out; the register was one ordeal short, and theirs showed itself — "${n.title}", ${n.disguise || "a mountain of its own"}${n.demon ? `, the demon ${n.demon}` : ""}; with their own hand they peeled off ${slips.length ? `the slips ${slips.map((s) => `"${s}"`).join(", ")}` : "its slips"}; your fiery golden eyes saw through it: only ${n.truth || "a small thing"}; the little monkeys carried it into the register, and the eighty-one were complete.
Write the storyteller's chapter: 3–4 sentences, at most 80 words, starting "Now it is told that": how their ordeal came, how its true form was seen, how the little monkeys carried it into the register; what they said to old Monkey at the mountain may go in too (what they told the guide at the gate is never written as said at the mountain); call them "the traveller" or "Master", never by a word that decides their sex or age; only what the record has, a word or two of theirs at most, never their story from the gate retold — if they never spoke of a hardship, don't make one of it; nothing heavy (someone lost) in the chapter at all; end "What came of it, the next chapter will tell."
Return ONLY JSON: {"narration": "…", "title": "the couplet: two lines of seven words, separated by ' / ' (keep this one if it still fits: ${title})"}`
    : `${known}
刚才在五行山下${hour ? `（${hour}）` : ""}：他揭了压帖，你出来了；难簿还少一难，他的那一难现了身——「${n.title}」，${n.disguise || "也是一座山"}${n.demon ? `，小妖叫${n.demon}` : ""}；他亲手揭下了${slips.length ? `${slips.map((s) => `「${s}」`).join("")}这几张纸条` : "它身上的纸条"}；火眼金睛看穿，原来只是${n.truth || "一样小东西"}；小猴儿们把它扛进了难簿，凑足了八十一难之数。
写说书人的这一回：三四句，一共不超过120个字，以「话说」开头，讲这一难怎么来的、原形怎么被看穿、小猴儿们怎么把它扛进难簿；他在山下跟老孙说的话也可以写进去（他在门口跟引路人说的，不写成他在山下说的）；说到他，称「那人」「师父」，不用「郎君」「汉子」「娘子」这类定了男女老少的叫法；只用记录里有的，最多借他一两个词，不把他在门口说的经过复述一遍；他没说过的难处，不写成苦难；很重的事（失去了谁）一句也不写进这一回；以「毕竟不知后事如何，且听下回分解。」收尾。
只输出 JSON：{"narration": "……", "title": "回目：两句七字对仗，中间用全角空格隔开（这一副还合适就沿用：${title}）"}`;
  try {
    const r = await kit.chat([{ role: "system", content: persona(lang) }, { role: "user", content: ask }], { json: true, maxTokens: 600, temperature: 0.85, timeoutMs: 14_000, models: ["claude-sonnet-4-6", ...kit.QUICK] });
    let narration = clean(r.data?.narration, 400);
    let couplet = en ? clean(r.data?.title, 120) : clean(r.data?.title, 40).replace(/[\s,，、/|]+/g, "　");
    kit.log(`xiyou chapter ${r.model} ${r.ms}ms`);
    if (!narration) return null;
    // Read again only while the page is still being drawn: the pass never waits on the reader.
    if (Date.now() - t0 < 11_000) {
      const did = en ? `lifted the seal; peeled the slips ${slips.join(", ")}; saw "${n.title}" through to ${n.truth}` : `揭了压帖；揭下纸条${slips.join("、")}；看穿「${n.title}」，原来是${n.truth}`;
      const rv = await reviewLines({ chat: kit.chat, lang, life: visit.life, talk, did, room: room(lang), look: AVATARS[visit.avatar]?.[lang] || "", facts: facts(lang), who: en ? "the storyteller, on the travel pass" : "说书人，写在通关文牒上", lines: [{ id: "narration", text: narration }, ...(couplet ? [{ id: "title", label: en ? "the chapter's couplet" : "回目", text: couplet }] : [])], timeoutMs: Math.max(2500, 15_000 - (Date.now() - t0)) });
      if (rv.fixes.has("narration")) narration = rv.fixes.get("narration") || clean(visit.plan?.shot?.dedication, 400);
      if (rv.fixes.has("title")) couplet = rv.fixes.get("title");
      if (rv.notes.length) kit.log(`xiyou chapter read again: ${rv.notes.map((x) => x.problem).join(", ")}`);
    } else kit.log(`xiyou chapter not read again (${Date.now() - t0}ms)`);
    if (!narration) return null;
    return { dedication: narration, ...(couplet ? { title: couplet } : {}) };
  } catch (e) {
    kit.log(`xiyou chapter failed: ${e.message}`);
    return null;
  }
}

export function chatMessages({ lang, avatar, identity, note, life, history, text, plan = null }) {
  if (oldContext()) return OLD.chatMessages({ lang, avatar, identity, note, life, history, text });
  const ctx = lang === "en"
    ? `${lifeBrief(lang, life, identity, note)}${intentLine(lang, plan)}\n${lookOf(lang, avatar)} You call them Master. Answer in English, 1–3 short sentences (at most 45 words), spoken aloud: no stage directions, no asterisks or brackets. Take in what they just said as you understood it, never by saying it back.`
    : `${lifeBrief(lang, life, identity, note)}${intentLine(lang, plan)}\n${lookOf(lang, avatar)}你叫他「师父」。用中文回答，一到三句短句，一共不超过六十个字，是说出口的话：不写动作描写，不用星号、括号和破折号开头。接住他刚说的，是接住你听懂的，不是把他的话复述一遍。`;
  const msgs = [{ role: "system", content: `${persona(lang)}\n\n${ctx}` }];
  for (const h of (history || []).slice(-8)) msgs.push({ role: h.role === "me" ? "assistant" : "user", content: clean(h.text, 400) });
  msgs.push({ role: "user", content: clean(text, 400) });
  return msgs;
}
