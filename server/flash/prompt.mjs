/**
 * What the maker model is told. The Bitter Lesson stance: two contexts (the visitor's life, the life they walked
 * into) and one line of intent go in; the mechanic, the pictures, the words and the code are the model's. What is
 * fixed is only the sandbox contract (what the page may use, how it ends) and the bar it has to clear.
 *
 * Two calls: a short concept (title, the act, the beats, the reveal — shown to the visitor while the piece is being
 * made), then the piece itself written from that concept.
 */
import { clean } from "../spaces/cast.mjs";

const list = (v, n, max) => (Array.isArray(v) ? v : []).map((x) => clean(x, max)).filter(Boolean).slice(0, n);

/**
 * The visitor's life as the gate gathered it (`me.life`, every field optional; old visitors have only some), plus the
 * identity and note older clients send. Returned both as prompt text and as the small object the SDK carries.
 */
export function visitorOf(life = {}, { identity = "", note = "" } = {}) {
  const l = life && typeof life === "object" ? life : {};
  const me = {
    who: clean(l.who || l.role || identity, 40),
    story: clean(l.story || note, 500),
    details: list(l.details, 8, 60),
    wish: clean(l.wish, 160),
    mood: clean(l.mood, 20),
    title: clean(l.title, 48),
    line: clean(l.line, 160),
    unseen: clean(l.unseen, 160),
    domain: clean(l.domain, 24),
    stage: clean(l.stage, 24),
    keywords: list(l.keywords, 3, 14),
  };
  // What was said after the gate put its show down (k: "care") stays between the guide and them: no host hears it.
  const turns = (Array.isArray(l.turns) ? l.turns : []).filter((t) => t && (t.q || t.a) && t.k !== "care").slice(0, 4).map((t) => ({ q: clean(t.q, 160), a: clean(t.a, 400) }));
  if (!turns.length && l.ask && l.answer) turns.push({ q: clean(l.ask, 160), a: clean(l.answer, 400) });
  return { me, turns };
}

export function visitorText(lang, { me, turns }) {
  const en = lang === "en";
  const rows = [];
  const add = (zh, enText, v) => { if (v) rows.push(`- ${en ? `${enText}: ` : `${zh}：`}${v}`); };
  add("他是谁", "Who they are", me.who);
  add("他的日子", "Their days", [me.domain, me.stage].filter(Boolean).join(en ? "; " : "，"));
  add("最近放在他心上的事（原话）", "What has been on their mind (their words)", me.story && `「${me.story}」`);
  for (const t of turns) add("引路人问", "The guide asked", `「${t.q}」${en ? " They answered: " : "他答："}「${t.a}」`);
  add("他说过的具体细节（原样用）", "Details they gave (use them as they are)", me.details.join(en ? "; " : "；"));
  add("他想要的、在等的", "What they want, what they wait for", me.wish);
  add("他此刻的心情", "Their mood now", me.mood);
  add("引路人在他的人生护照上写", "The guide wrote on their passport", [me.title, me.line].filter(Boolean).join(en ? " — " : "——"));
  add("他日子里没人看见的那部分（引路人的话）", "The part of their days nobody sees (the guide's words)", me.unseen);
  if (!rows.length) return en ? "They told the guide almost nothing about themselves. Make something any passer-by would love, and do not pretend to know them." : "他几乎没跟引路人说起自己。做一件任何一个路过的人都会喜欢的东西，不要假装了解他。";
  return rows.join("\n");
}

const SDK_DOC = `window.LP（已经注入，直接用）：
- LP.me = { who, story, details:[…], wish, mood, title, line, unseen }：这件作品是为谁做的（上面都告诉你了；可以直接写进作品里）
- LP.host = { id, name }：做这件作品的那段人生
- LP.size = { w, h, dpr, portrait }（随窗口更新）；LP.onResize(fn)
- LP.font = { serif, kai, sans }：系统字体栈（不能加载任何网络字体）
- LP.sound：tap() tick() pop() thud() whoosh(秒) chime() note(n) bell(n) chord([n…]) swell([n…]) tone(hz, {dur,type,vel,glide,lp}) noise({dur,from,to,q,vel}) ambient(kind) → {level(v), stop()}
  n 是五声音阶的级数（0 是中音，负数往下，5 高一个八度），所以一连串触摸天然成曲；ambient 的 kind："rain" "wind" "sea" "room" "night" "city" "fire"。声音在第一次触摸后才会响（浏览器的规矩，已经替你处理），所以开场不要依赖声音。
- LP.caption(text, { ms=2800, y=0.14, size=20, kai, dark })：在画面上浮出一行字，几秒后淡出（返回 Promise；ms=0 则一直留着，再调用会替换）
- LP.hint(text, { x, y, dark })：在 (x, y) 放一个缓缓呼吸的圆环和 2–6 个字的提示；LP.hint(null) 收起
- LP.haptic(ms)：轻轻震一下（能震就震）
- LP.rand(seed?)：为这个人固定下来的随机数函数（返回 () => 0..1）
- LP.wait(ms)：Promise
- LP.trace()：{ touches, longestHoldMs, seconds }——他到现在为止点了几下、按住最久的一次多长、玩了几秒（写背面时可以用）
- LP.paper(g, w, h, { tone, lines })：在 2D 画布 g 上铺一张有纤维、斑点、四角做旧的纸（第一次生成后缓存，每帧调用也不费）。tone 是纸色（默认浅纸；深色如 "#1d1a17" 就是暗房的底）；lines: true 是信纸的横格。每一帧先铺纸，再画别的。
- LP.grain(g, w, h, amount=0.1)：每帧最后盖一层胶片颗粒、偶尔的划痕和闪烁（默片用）。
- LP.page(kind, words, { keep: "收下" })：揭示的那一页（keep 是那一页下面按钮上的字，可省）。SDK 按经典自己的版式把你写的字排好（纸、字体、竖排、黑底栏目、印章、花边、光圈），盖在画面上，他点「收下」之后 resolve，然后你再调用 LP.done。不要自己再画这一页，也不要在它上面叠字。kind 和 words：
  · "card" 默片字幕卡：{ title: "第一本", lines: ["一两行字"], small: "落款或出处", tint: "#rrggbb"（手工上色的那层颜色，可选） }
  · "letter" 信：{ place: "阿尔勒，1888 年 10 月", to: "亲爱的朋友：", paragraphs: ["两三段"], close, sign, sketch: canvas.toDataURL("image/jpeg", 0.8)（他亲手画的那一帧，夹在信里） }
  · "entry" 本草条目、脉案或方子：{ name: "橘", part: "果部", rows: [["释名", "…"], ["气味", "…"], ["主治", "…"], ["附方", "…"]], seal: "濒湖" }（name 只写药名；四到六栏，每栏一句，不超过 16 个字；中文竖排；最底下那行健康提示 SDK 自己加）
  · "chapter" 一回书：{ title: "第二回", couplet: ["上联", "下联"], lines: ["话说……"], poem: ["四句诗"], close: "毕竟不知……且听下回分解。" }
  每个字段都用这段人生的文体写，字照样要少；close、sign 这类惯用语可以省，SDK 会补上。英文作品里这些字也写英文（Reel one、Dear friend,、Names / Nature / Indications / Prescription、Chapter Two）。
- LP.done({ line, title, image, back })：作品结束时调用一次。line = 最后留给他的一句话；back = 这件东西的背面（见下面"背面"）；image 可选（例如 canvas.toDataURL("image/jpeg", 0.85)，他带走的那一帧）。调用之后画面停在最后的样子，外框会接手。`;

const CONTRACT = `技术契约（违反任何一条，作品都不会被展示）：
1. 一个完整的 HTML 文件。CSS 和 JS 全部内联，用普通 <script>（不要 type="module"，不要 import/require）。
2. 不联网：不 fetch、不 XHR、不 WebSocket，不加载任何外部脚本、图片、字体、音频。所有图形用 canvas 2D、SVG 或 CSS 画出来；所有声音用 LP.sound 或 Web Audio 合成。不要用 emoji（要什么就画什么）。
3. 文件尽量控制在 45 KB 以内（硬上限 150 KB）。不要嵌入大段 base64 数据。
4. 手机竖屏优先（宽 360–430，高 640–932）；横屏和桌面也要好好地居中显示，不拉伸、不溢出。canvas 按 devicePixelRatio（最多 2）绘制，保证清晰；留出 env(safe-area-inset-*)。右上角约 56×56 会放外框的关闭按钮，不要把要点的东西放在那里。
5. 只用指针事件（pointerdown / pointermove / pointerup / pointercancel），一根手指就能玩完；不要键盘、不要输入框、不要悬停、不要右键。
6. 不用 alert/confirm/prompt、表单、iframe、window.open、localStorage、cookie。
7. 流畅：每秒 60 帧，不在每一帧里逐像素处理大画面；粒子有上限；没有任何报错。
8. 60–120 秒能自然地玩完，然后调用一次 LP.done({ line, back })。没有失败、没有 game over、没有计分和倒计时惩罚。每一拍都要能被随手乱点推进：他点了七八下还没做成，或者停了 15 秒，就用 LP.hint 指一下；再过一会儿，就温柔地替他完成这一拍。无论怎么玩，两分钟内一定走到揭示和 LP.done。
9. 小窗口：作品可能先在 0×0 或 300×150 的窗口里启动，过一会儿才放大到手机那么大。所有按窗口算出来的尺寸都夹住下限（Math.max(1, …)），半径、字号、间距不能算成负数或 NaN；不写要靠窗口够大才能结束的循环；LP.onResize 时重新布局，放大以后画面完整、不错位。`;

const BAR = `品质的标准（这是一件送给一个真实的人的作品。不要假设他对什么都感兴趣——他可能只是随手点开，第一眼就要把他留住）：
- 前 10 秒：一眼就美；画面里只有一个最显眼的、马上就能做的动作；一句只对他说的话，里面有他说过的具体细节。
- 机制即隐喻：他手上做的那一个动作，本身就是这段人生最核心的体验，而它作用在他自己的日子上。像《Florence》里两人吵架时，对话拼图越拼越难拼上；像《艾迪芬奇的记忆》里，右手在罐头厂一刀一刀切鱼头，左手同时在脑子里的王国里走得越来越远。先想清楚：他的手指在做什么？为什么这个动作就是意义？
- 起承转合，3–5 拍，只有一个动作：起——在主人自己的东西上，安全地学会这个动作；承——再做一次，变一点；转——把这个动作用在"他的那样东西"上，他说过的细节在这一刻进场；合——他一路亲手做的事，变成一件他没想到的东西（一帧影片、一幅画、一封信、一张方子、一页经……），这是全程的峰值。然后才是最后一句话。
- aha = 他说过的具体细节 × 变成他想不到的样子 × 经过他自己的手。少一样就塌：只有细节是复读机，只有变形是模板，没有亲手就只是一张图。
- 隔世误读：主人不认识任何现代的东西。来访者提到的每样现代东西，主人都用自己那个年代、自己那一行的词去理解，说出他看见的样子，不解释它是什么（梵高把外卖保温箱看成一块铬黄；李时珍把熬夜听成"心火"；梅里爱把手机叫作"一盏会说话的小幻灯"）。幽默和诗意从这里来，换一个人就完全不同。
- 被看见：他说过的具体细节——人名、物件、数字、地方、原话——要出现在画面里、动作里、结尾里，至少三处，原样用，不要换成抽象的词。他没说过的经历一个字也不要编。
- 他的原话：从他对引路人说的话里原样摘一两句（整句或半句，不改一个字，中文放在「」里），一句出现在作品当中（字幕卡、信里、条目里、说书人的嘴里），一句写进揭示的那一页。这是他认得出"这是我说的"的地方。
- 背面：作品自己记下他在这件作品里确实做过的事（先碰了哪一样、在哪儿停得最久、按住了多久、一共点亮了几格），在 LP.done 的 back 里用一句话写出来，像主人顺手写在背面的一行字。只写真实发生过的动作，不猜他的心情。
- 换人测试：每一句话，换一个来访者来看，他都应该觉得"这不是我"。说不出具体细节的句子，删掉。
- 怎么点都好看：每一次触摸都有好看的回应，光、动、声音一起发生，像《Townscaper》那样随手一碰都是好的。没有点了没反应的地方，也没有"点错了"。
- 字少：每一拍最多一两句；任何时候屏幕上的字不超过两行；整件作品的字加起来不超过 150 个。
- 不要做：问答测验；换皮小游戏（接东西、打砖块、躲障碍、跑酷、消除、计分）；幻灯片；"点击继续"的故事；说明书一样的开场。
- 文字：中文为本。像汪曾祺那样平实温暖，像史铁生那样克制；具体胜过抽象（写"你桌上那本翻卷了角的真题"，不写"你的努力"）；不说教，不灌鸡汤，不喊口号，不写"加油""你很棒"，不用感叹号（主人的口头禅如"Moteur !"除外）。引他的原话用「」，一字不改。按钮和提示 2–6 个字，用这个世界里的动词（冲洗、上色、碾、翻过来），不写"点击""请""您"，不写"生成""加载""体验""保存"。引经典一次最多一句，引在物件旁边，引了就停，不讲解；主人只引他那个时代、他读过的东西。
- 画面要像一件出版级的插画，不是程序画的示意图：
  · 物件要有可辨认的轮廓和细节（提手、褶皱、高光、投影），不要用纯色的圆和矩形凑合；用渐变、柔和的投影、细线描边。
  · 给整个画面一层质感：每帧先用 LP.paper 铺纸（暗底就传深色 tone），默片在最后再 LP.grain；画布纹理、笔触这些自己画，开场时在离屏 canvas 上生成一次、缓存起来，每帧只 drawImage。
  · 构图：一个视觉焦点，四周留白；主体放在屏幕中部（避开顶部 70px 和底部 80px）；任何东西都不要被屏幕边缘意外切掉；所有尺寸按 LP.size 计算。
  · 颜色：一种主色调加一种强调色，来自那段人生的视觉语言；明亮通透优先，夜里也要有光；暗底上不要大面积的模糊光晕和高饱和的霓虹色。
  · 字：屏幕上的字不小于 15px，标题和字幕用 LP.font.serif 或 LP.font.kai；字不压在复杂的图案上；不要画超过屏幕宽一半的大字，除非那个字就是画面本身。
  · 动效：缓入缓出、轻微回弹，粒子少而精；第一帧就完整、好看，不要从空白开始。
- 借经典自己的叙述形式，不只借它的题材：作品的文体就是那段人生的文体（上面"形式"写了：默片的字幕卡，一封信，本草的条目和脉案，一回书的回目和"有诗为证"），揭示时他得到的东西也是这种文体的一件（一张字幕卡、一封信、一页本草、一回书），用 LP.page 呈现，他一路亲手做出来的东西要写进这一页。原文只从上面"可以原样引用的原文"里取，一字不改，一次一句，出处放在字幕卡、落款或页脚；没列出来的句子不要凭记忆引，也不要编"名言"。新写的诗、新添的条目可以有，但不要冒充原书。
- 做这件作品的，是那段人生的主人：他的手艺和口吻要在作品里，但他不讲道理。`;

const FORMAT = `输出格式（严格）：先是一段注释头，然后是完整的 HTML，除此之外什么都不要写：
<!--flash
{"title":"作品名（不超过 12 个字）","line":"一句话说这是什么（不超过 24 个字）","palette":["#rrggbb","#rrggbb","#rrggbb","#rrggbb"],"dark":false,"key":0,"minutes":1.5,"steps":["正在做的第一步（不超过 10 个字，用主人的口吻）","第二步","第三步"]}
-->
<!doctype html>
<html lang="zh-CN">…</html>
（dark：作品底色是不是深色，决定 LP.caption/LP.hint 的颜色；key：五声音阶的调，-6 到 6 的半音偏移。）`;

const system = (lang) => `你是一位顶尖的互动作品作者——游戏设计、视觉、声音、文字和前端代码都在世界一流水准，品味像做《Florence》《Gorogoa》《纪念碑谷》《艾迪芬奇的记忆》的人。你为「人生广场」写"闪应用"：一个来访者把自己人生的一段讲给门口的引路人听，然后走进了一段别人的人生；那段人生的主人，用自己一生的手艺，为他做一件一两分钟就能玩完的小作品。
${lang === "en" ? "Write every visible word in English (literary, not literal)." : "作品里所有看得见的字都用中文。"}

${SDK_DOC}

${CONTRACT}

${BAR}`;

const brief = (lang, { field, visitor, intent, plan }) => {
  const en = lang === "en";
  const host = plan?.greeting ? (en ? `\nWhat ${field.name} already said to them on the way in: "${clean(plan.greeting, 200)}"` : `\n${field.name}进门时已经对他说过：「${clean(plan.greeting, 200)}」`) : "";
  // The life's own intent stays (it carries the craft); what the visitor said they would like is made with it.
  const own = clean(field.intent, 300), said = clean(intent, 200);
  const wish = said && said !== own ? (en ? `\nWhat they asked for, in their own words: "${said}". Make that, with your craft.` : `\n他自己说想要的：「${said}」。照他说的做，用你的手艺。`) : "";
  return `${en ? "## The life they walked into" : "## 他走进的这段人生"}（${field.place || field.name}）
${field.text || (en ? "(no description)" : "（没有描述）")}

${en ? "## The visitor" : "## 来访者"}
${visitorText(lang, visitor)}${host}

${en ? "## The intent" : "## 意图"}
${own || (en ? "Make him something small he will remember." : "为他做一件他会记住的小东西。")}${wish}${field.page ? (en ? `\n\n## The reveal\nShow it with LP.page("${field.page}", …) (see LP.page above); call LP.done once they have kept it.` : `\n\n## 揭示\n用 LP.page("${field.page}", …) 呈现（见上面 LP.page 的说明），他收下之后再调用 LP.done。`) : ""}`;
};

/** First call: what to make. A short JSON the visitor sees part of while waiting (title, line, palette, steps). */
export function conceptMessages({ lang = "zh", field, visitor, intent, plan }) {
  const ask = lang === "en"
    ? `Before writing any code, decide what to make. Think of three different ideas (one sentence each: what the visitor's finger does → why that act is the meaning), pick the strongest, then return ONLY a JSON object:
{"ideas":["…","…","…"],"pick":0,"title":"≤ 6 words","line":"≤ 14 words, what it is","palette":["#rrggbb","#rrggbb","#rrggbb","#rrggbb"],"dark":false,"key":0,"steps":["what the maker is doing now, ≤ 6 words, in the maker's voice","…","…"],"act":"the core act: exactly what the finger does, what happens on screen, why it is this life's heart applied to theirs (2–3 sentences)","beats":["start (≤10 s, on the host's own thing): …","again, changed: …","turn (the act on their thing): …","reveal: …"],"details":["their details you will use, verbatim"],"quotes":["one or two things they said to the guide, word for word (a sentence or half of one, ≤ 20 words each)"],"form":"how this life's own form carries the piece from the first line to the last page (one or two sentences)","misread":"how the host misreads one modern thing of theirs in the words of his own time (one line)","reveal":"what they end up with, carrying which details and which of their quotes","back":"which real act of theirs in this piece the back will record","last":"the last line"}`
    : `先别写代码，想清楚做什么。想三个不同的点子（每个一句话：他的手指在做什么 → 为什么这个动作就是意义），挑最强的一个，然后只输出一个 JSON 对象：
{"ideas":["…","…","…"],"pick":0,"title":"作品名，不超过 12 个字","line":"一句话说这是什么，不超过 24 个字","palette":["#rrggbb","#rrggbb","#rrggbb","#rrggbb"],"dark":false,"key":0,"steps":["主人此刻正在做的事，不超过 10 个字，用他的口吻","…","…"],"act":"核心动作：手指具体做什么、屏幕上发生什么、为什么这就是这段人生最核心的体验作用在他的日子上（两三句）","beats":["起（10 秒内，在主人自己的东西上）：…","承（再做一次，变一点）：…","转（用在他的那样东西上）：…","合（揭示）：…"],"details":["会用上的他的细节，原样"],"quotes":["他对引路人说过的原话，一字不改，一两句（整句或半句，每句不超过 24 个字）"],"form":"这段人生自己的文体怎样从第一句贯穿到揭示那一页（一两句）","misread":"主人怎样用他那个年代的词，误读来访者的一样现代东西（一句）","reveal":"最后他得到的是什么，带着哪些细节、哪一句原话","back":"背面会记下他在作品里的哪一个真实动作","last":"最后一句话"}`;
  return [
    { role: "system", content: system(lang) },
    { role: "user", content: `${brief(lang, { field, visitor, intent, plan })}\n\n${ask}` },
  ];
}

/** Second call: the piece, from the concept. */
export function buildMessages({ lang = "zh", field, visitor, intent, plan, concept, budgetKB = 40 }) {
  const c = concept ? JSON.stringify(concept, null, 1) : "";
  const keep = concept
    ? (lang === "en"
      ? " The quotes in it are their own words: put them in as they are (in curly quotes), one in the piece and one on the reveal page. Its form is the life's own: tell every beat in it, not only the ending."
      : "方案里的 quotes 是他的原话：原样放进去（中文用「」），一句在作品当中，一句在揭示那一页。form 是这段人生自己的文体：每一拍的字都用它来写，不只是结尾。")
    : "";
  // With no concept call before it (one model thinks of the piece and writes it in one answer), what that call would
  // have settled is settled here, silently, before the first line of code.
  const think = concept ? "" : lang === "en"
    ? " First, in your head and not in the answer: three different ideas (what the visitor's finger does → why that act is the meaning), and the strongest of them; four beats (start within 10 s on the host's own thing; again, changed; the act on their thing; the reveal); one or two things they said to the guide, word for word, one in the piece and one on the reveal page; this life's own form carrying every beat's words; one modern thing of theirs the host misreads in the words of his own time. Then write it."
    : "先在心里想清楚，不要写出来：三个不同的点子（他的手指在做什么 → 为什么这个动作就是意义），挑最强的一个；起承转合四拍（起：10 秒内，在主人自己的东西上；承：再做一次，变一点；转：用在他的那样东西上；合：揭示）；他对引路人说过的一两句原话，一字不改，用「」放进去，一句在作品当中，一句在揭示那一页；这段人生自己的文体，每一拍的字都用它来写；主人用他那个年代的词，误读他的一样现代东西（一句）。想好了，直接写。";
  const beats = lang === "en"
    ? " Give every beat its own timer: no progress for 15 s, show LP.hint; 20 s after that, finish the beat for them (move it on as if they had done it). The acceptance run plays the piece by following your hints with simple taps, holds and drags; if it doesn't reach LP.done within two minutes the piece is refused."
    : "每一拍都配一个计时：15 秒没进展就 LP.hint，再过 20 秒替他把这一拍做完（就当他做到了，往下走）。验收会照你的提示用简单的点、按住、拖去玩；两分钟内走不到 LP.done，作品就不过关。";
  const ask = lang === "en"
    ? `${c ? `The concept you settled on (keep its title, palette and steps in the header):\n${c}\n\n` : ""}Now write the piece.${think}${keep}${beats} Make every touch beautiful and every word count. Keep the file under ${budgetKB} KB (write tight: no comments, no repeated code). ${FORMAT.replace(/（[\s\S]*?）$/, "")}`
    : `${c ? `你已经想好的方案（注释头里的 title、palette、steps 沿用它）：\n${c}\n\n` : ""}现在把它做出来。${think}${keep}${beats}每一次触摸都要好看，每一个字都要算数。文件控制在 ${budgetKB} KB 以内（写得精炼：不写注释，不写重复的代码）。\n${FORMAT}`;
  return [
    { role: "system", content: system(lang) },
    { role: "user", content: `${brief(lang, { field, visitor, intent, plan })}\n\n${ask}` },
  ];
}

/**
 * A finished piece for another visitor in another life, shown as the bar for craft (never for content or mechanic).
 * `reference` is that piece's source file.
 */
const referenceBlock = (lang, reference) => (reference
  ? (lang === "en"
    ? `\n\n## The bar for craft: a finished piece (another visitor, another life — learn its craft; do not copy its content or its mechanic)\n\`\`\`html\n${reference}\n\`\`\``
    : `\n\n## 手艺的标准：一件做好的作品（另一位来访者、另一段人生；学它的手艺，不要抄它的内容和机制）\n\`\`\`html\n${reference}\n\`\`\``)
  : "");
/** The size a file of full craft is written to: as much as the budget allows (a buffered writer gets less). */
const span = (kb = 40) => `${Math.max(12, Math.round(kb * 0.62))}–${kb} KB`;
const CRAFT_ZH = (kb) => `画面的手艺要做足，像上面那件作品：开场在离屏 canvas 上生成一次纸纹或胶片颗粒；每样东西都画出可辨认的轮廓、细描边、渐变、高光、投影和小细节（提手、褶皱、纹理），不用纯色的圆和矩形凑；一个视觉焦点，四周留白；字不压在图上，不小于 15px；每一拍之间有转场，揭示是一件出版级的插画（一页、一封信、一张片名卡、一回书）。文件写到 ${span(kb)}：细节要足，但不写注释，不写重复的代码。`;
const CRAFT_EN = (kb) => `Give the drawing full craft, like the piece above: a paper or film-grain ground generated once on an offscreen canvas; every object with a recognisable silhouette, fine outlines, gradients, highlights, cast shadows and small details (handles, folds, texture), never bare circles and boxes; one focus with room around it; no words over drawings, none under 15px; a transition between beats, and a reveal that is a publication-grade illustration (a page, a letter, a title card, a chapter). Write ${span(kb)}: rich in detail, but no comments and no repeated code.`;

/** Second call, with a bar to clear: the piece from the concept, against a finished piece's craft. */
export function craftedBuildMessages(opts) {
  const msgs = buildMessages(opts);
  const last = msgs[msgs.length - 1];
  const lang = opts.lang || "zh";
  msgs[msgs.length - 1] = { ...last, content: `${last.content}${referenceBlock(lang, opts.reference)}\n\n${lang === "en" ? CRAFT_EN(opts.budgetKB) : CRAFT_ZH(opts.budgetKB)}` };
  return msgs;
}

/** A polish pass over a piece that already plays: same mechanic, beats, words and ending; the drawing redone to the bar. */
export function polishMessages({ lang = "zh", field, visitor, intent, plan, html, reference, budgetKB = 40 }) {
  const en = lang === "en";
  const frame = en
    ? " Fill the whole screen (no fixed-ratio box with empty bands), keep every object inside it, and keep words off the drawings."
    : "画面铺满整个屏幕（不要固定比例的画框，上下留出大片空白），每样东西都在屏幕里，字不压在图上。";
  const ask = en
    ? `## The piece to polish\n\`\`\`html\n${html}\n\`\`\`\n\nThis piece plays, but its drawing is plain. Keep its mechanic, every beat, every word, its timings, its LP.page, LP.done and its back exactly as they are, and redraw it to the craft of the finished piece above.${frame} ${CRAFT_EN(budgetKB)}\n${FORMAT.replace(/（[\s\S]*?）$/, "")}`
    : `## 要精修的作品\n\`\`\`html\n${html}\n\`\`\`\n\n这件作品已经能玩，但画面朴素。它的机制、每一拍、所有文字、时间、LP.page、LP.done 和背面都保持原样，只把画面重画到上面那件作品的手艺。${frame}${CRAFT_ZH(budgetKB)}\n${FORMAT}`;
  return [
    { role: "system", content: system(lang) },
    { role: "user", content: `${brief(lang, { field, visitor, intent, plan })}${referenceBlock(lang, reference)}\n\n${ask}` },
  ];
}

/** For a model whose answer the gateway cuts at 180 s: write the file in parts, each ending on a marker. */
export const SEGMENT = Object.freeze({
  marker: "<!--continue-->",
  first: (lang) => (lang === "en"
    ? "This file is long, so write it in parts. In this part, start from the header comment and stop at the end of a function, about halfway through; then write <!--continue--> alone on the last line."
    : "这个文件比较长，分几次写：这一次从注释头写起，写到一个函数结束的地方停下（大约一半），最后单独一行写 <!--continue-->。"),
  next: (lang) => (lang === "en"
    ? "Continue: start right after the last character you wrote and carry on exactly from there, repeating nothing already written, with no explanation and no code fences. If the file is finished, end with </html>; if not, stop at the end of a function and write <!--continue--> alone on the last line."
    : "接着写：从你上一段最后一个字符之后开始，原样接上，不要重复已经写过的任何内容，不要加解释，不要代码块标记。整个文件写完就以 </html> 结束；还没写完，就在一个函数结束的地方停下，最后单独一行写 <!--continue-->。"),
});

/** The fix after a failed check: the same conversation, the answer, and what went wrong. */
export function repairMessages(build, answer, errors, lang = "zh") {
  const what = errors.map((e, i) => `${i + 1}. ${e}`).join("\n");
  const ask = lang === "en"
    ? `Your piece failed the acceptance run:\n${what}\n\nFix every problem without losing what is good about it. Answer with EITHER the complete corrected file in the same format (header comment, then the HTML), OR only the edits, each as:\n<<<<<<< SEARCH\n(exact lines from your file)\n=======\n(replacement)\n>>>>>>> REPLACE`
    : `你的作品没通过验收试玩：\n${what}\n\n把每个问题都修好，同时别丢掉它好的地方。回答二选一：要么输出完整的新文件（同样的格式：注释头，然后 HTML）；要么只输出修改，每处修改写成：\n<<<<<<< SEARCH\n（你文件里原样的几行）\n=======\n（替换成的内容）\n>>>>>>> REPLACE`;
  return [...build, { role: "assistant", content: answer }, { role: "user", content: ask }];
}

/** Apply SEARCH/REPLACE edits to a file; null if any edit does not match exactly once. */
export function applyEdits(file, text) {
  const re = /<<<<<<< SEARCH\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> REPLACE/g;
  const edits = [...String(text).matchAll(re)];
  if (!edits.length) return null;
  let out = String(file);
  for (const [, search, replace] of edits) {
    const at = out.indexOf(search);
    if (at < 0 || out.indexOf(search, at + 1) >= 0) return null;
    out = out.slice(0, at) + replace + out.slice(at + search.length);
  }
  return out;
}

/** A concept as the visitor may see it while waiting (and the header fields the piece is played with). */
/** Chinese is cut by characters; English needs longer limits and is cut at a word, never inside one. */
const cut = (v, n, lang) => {
  const s = clean(v, 400);
  if (s.length <= n) return s;
  if (lang !== "en") return s.slice(0, n).trim();
  const i = s.lastIndexOf(" ", n);
  return `${(i > n * 0.6 ? s.slice(0, i) : s.slice(0, n)).replace(/[\s,;:.—–-]+$/, "")}…`;
};

export function saneConcept(c, lang = "zh") {
  const o = c && typeof c === "object" ? c : {};
  const en = lang === "en";
  const hex = (v) => (/^#[0-9a-f]{6}$/i.test(String(v || "")) ? String(v).toLowerCase() : null);
  const palette = (Array.isArray(o.palette) ? o.palette : []).map(hex).filter(Boolean).slice(0, 5);
  return {
    title: cut(o.title, en ? 64 : 24, lang) || (en ? "Something small, for you" : "给你的小东西"),
    line: cut(o.line, en ? 140 : 60, lang),
    palette: palette.length >= 2 ? palette : ["#fbf6ec", "#e8b45c", "#ef8f78", "#23303a"],
    dark: !!o.dark,
    key: Math.max(-6, Math.min(6, Math.round(Number(o.key) || 0))),
    minutes: Math.max(0.5, Math.min(4, Number(o.minutes) || 1.5)),
    steps: (Array.isArray(o.steps) ? o.steps : []).map((s) => cut(s, en ? 60 : 24, lang)).filter(Boolean).slice(0, 4),
  };
}
