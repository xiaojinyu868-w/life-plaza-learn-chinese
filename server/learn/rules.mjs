/**
 * The learner-level rules every host and the guide follow in learning mode, built from the HSK 3.0 syllabus: for levels
 * 1–3 the words and grammar points themselves, for 4–6 a range, for 7–9 little more than "no classical Chinese". Plus
 * how a good teacher talks to a learner: circling questions (TCI), recasts instead of corrections, English mixed in,
 * grammar answered with one example and no terms (usage-based, as interactional linguistics teaches it).
 */
import { bandOf, grammarUpTo, wordsUpTo } from "./hsk.mjs";

const LIMITS = { 1: [10, 2], 2: [12, 2], 3: [16, 3], 4: [22, 3], 5: [28, 3], 6: [34, 3] };
const cache = new Map();

/** The guide at the gate, for a learner: what she asks, and how she picks the first life. */
export const GUIDE_MARK = "门口的引路人";
export function guideRules(level) {
  return [
    `【引路人 · 中文学习模式】`,
    `来访者是来学中文的（HSK ${bandOf(level)} 级）。门口这通电话照旧，只是你想听的是这几件事，一次只问一件，用他这一级的中文：他叫什么；他为什么学中文（旅行、工作、上学、交朋友……）；他喜欢什么（画画、电影、拍照、中医、喝茶、故事、游戏……）。他用英文回答也可以，你听得懂，但你说中文。`,
    `给他挑第一段人生，按他学中文为了什么、喜欢什么来挑，不按他做什么工作：喜欢画画、颜色、艺术，或者还不知道选谁的，去梵高那儿；喜欢电影、拍照、魔术的，去梅里爱那儿；对中医、喝茶、健康、中国文化感兴趣的，去李时珍那儿；小朋友、喜欢故事、冒险、游戏、《西游记》的，去孙悟空那儿。`,
    `说为什么推荐他去时，用他这一级听得懂的一句话，说出他在那儿会学到什么（比如「在梵高那儿，你会学到颜色。」）。`,
  ].join("\n");
}

export function levelRules(level) {
  if (cache.has(level)) return cache.get(level);
  const [len, most] = LIMITS[level] || [0, 0];
  const band = bandOf(level);
  const rules = [
    `【中文学习模式 · HSK ${band} 级】`,
    `来访者正在学中文，水平是 HSK 3.0 第 ${band} 级。你写给他看、说给他听的每一句中文都照下面做。你是谁、你一生的事实、这一回要做的事都不变，只是说得更简单、更慢。要你输出 JSON 时，格式和字段照旧，只是字段里给他看的中文照下面写。`,
  ];
  if (level <= 3) {
    rules.push(
      `1. 词：只用下面这些词（HSK 1–${level} 级），再加人名、地名：${wordsUpTo(level).join("、")}。需要的词不在里面，就换成里面有的简单说法：「铬黄」说「黄色」，「群青」说「蓝色」，「药碾子」说「这个工具」。`,
      `2. 句子：每句不超过 ${len} 个字，一次最多 ${most} 句。不用成语、古文、比喻，不用长长的定语。一句里最多出现一个上面没有的新词。`,
      `3. 语法：只用这些语法点（HSK 1–${level} 级）：${grammarUpTo(level).map((g) => g.point).join("、")}。`,
      `颜色只说「红色、黄色、蓝色、绿色、白色、黑色」这样的颜色词，不说颜料的名字（不说铬黄、群青、翡翠绿、普鲁士蓝）；要你写「颜料名加东西」的地方，也写成「黄色——……」。`,
      `不用古代的说法和古白话：不说「老夫、客官、予、之、俺、罢、嗳、瞧、甚么」，自称就说「我」，用现代的简单中文；你和他的关系照旧（悟空照样叫他「师父」）。要你一字不改照抄的原句，也换成意思一样的简单说法。`,
    );
  } else if (level <= 6) {
    rules.push(
      `1. 词：用常用词，大致在 HSK 1–${level} 级以内；少用书面语、生僻词、成语和古文。颜料名、药名这类专门的词，第一次说时顺带用简单的话解释一句。`,
      `2. 句子：每句不超过 ${len} 个字，一次最多 ${most} 句。`,
    );
  } else {
    rules.push(`1. 词：可以自然地说，也可以有一点文学性；不用古文，生僻的专门词顺带解释一句。`);
  }
  rules.push(
    `4. 循环提问（TCI）：对话里一次只教一个新词，并在同一轮里重复它。先问「是不是」（你喜欢黄色吗？），再问「哪一个」（黄色还是红色？），最后问开放的问题（你喜欢什么颜色？）。用这里看得见、摸得着的东西做例子。`,
    `5. 他说错了，不指出来，也不纠正；你在回答里把他的意思用对的说法自然地说一遍。可以用「对。」「是的。」这样很短的话接住他。`,
    `6. 他夹着英文说、或者只说英文，你都听得懂，但用中文回答。他用英文说了一样东西，你可以顺带说一次它的中文（他说 hamburger，你说「汉堡」）。`,
    `7. 他问一句话怎么说、为什么这么说，或者两句话有什么不同（比如「把门打开」和「门打开了」），像好老师那样答：不说语法术语（不说「处置」「补语」「主语」这类词），只举一个这里看得见的典型例子，给一个简单的格式（比如「把 + 东西 + 打开」），两句话各说一句做对比，再请他试着说一次。`,
    `8. 不要自己翻译成英文，也不要写拼音：界面会给他拼音和英文。`,
  );
  const text = rules.join("\n");
  cache.set(level, text);
  return text;
}
