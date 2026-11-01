/**
 * A second reader for whatever a host or the guide is about to say of the visitor (docs/ai-native.md §6). A quick
 * model holds each line up against the record — did they say it, pick it, do it here? is a guess of the guide's
 * reading said as their fact? is a hardship they never spoke of put on them? — and, when the host's own checked life
 * is given (`facts`), whether what he says of himself is in it. A line that fails is rewritten in its own voice, or
 * let go. When it can't be had in time the lines stay as written (they were written under the same rules); under
 * LIFE_CONTEXT=old nothing is read again, as before.
 */
import { careIn, clean, cleanLife, journeyBrief, oldContext, picksLine, talkOf } from "./cast.mjs";

/** The reader: a sure hand first (it runs while the visitor crosses the plaza), the quick voices behind it. */
export const REVIEW_MODELS = Object.freeze((process.env.LIFE_LLM_REVIEW || "claude-sonnet-4-6,ds:qwen3.8-max,claude-haiku-4-5").split(",").map((s) => s.trim()).filter(Boolean));

/**
 * How long a plan may be read (it is written in the background as the visitor crosses the plaza; a room that starts
 * before it is kept uses its own lines until it comes). At 12 s a third or more of the readings ran out in the eval.
 */
const PLAN_MS = 20_000;

/** What a line can be held to fail on, in either language. */
const PROBLEMS = { 编造: "invented", 推测当事实: "guess", 预设难处: "hardship", 主人的事说错了: "host", invented: "invented", guess: "guess", hardship: "hardship", host: "host" };

/**
 * Everything the visitor said, picked and did, as the reader checks a line against it: what the host can see of
 * them (`look`), their words at the gate, the bubbles, who the gate noted they are, what they said to a host in a
 * room (`talk`: [{ role, text }], theirs are "you"), what they did in this life (`did`), the lives walked before
 * (`journey`) — and the guide's reading, kept apart as her guess.
 */
export function recordOf(lang, life, { talk = [], did = "", room = "", journey = [], here = "", look = "" } = {}) {
  const l = cleanLife(life);
  const en = lang === "en";
  const out = [];
  const said = talkOf(l).filter((t) => !careIn(t.a)).map((t) => t.a);
  if (!said.length) for (const s of [l.story, l.answer]) if (s && !careIn(s)) said.push(s);
  const spoken = (Array.isArray(talk) ? talk : []).filter((t) => t?.role === "you" && t.text && !careIn(t.text)).map((t) => clean(t.text, 300));
  if (look) out.push(en ? `[What the host can see of them] ${look}` : `【主人看得见的他】${look}`);
  out.push(en ? "[What they said at the gate, word for word]" : "【他在门口说的话】（原话）");
  out.push(said.length ? said.map((s) => (en ? `- "${s}"` : `- 「${s}」`)).join("\n") : en ? "- nothing" : "- 什么也没说");
  const picked = picksLine(l.picks, en);
  if (picked) out.push(picked);
  const who = l.who || l.role;
  if (who) out.push(en ? `- Who they are, as the gate noted it: ${who}` : `- 门口记下的他是谁：${who}`);
  if (!said.length && l.details.length) out.push(en ? `- Things they mentioned: ${l.details.filter((d) => !careIn(d)).join("; ")}` : `- 他提过的东西：${l.details.filter((d) => !careIn(d)).join("；")}`);
  if (spoken.length) out.push(en ? `[What they said to the host in this room]\n${spoken.map((s) => `- "${s}"`).join("\n")}` : `【他在这间屋里跟主人说的话】\n${spoken.map((s) => `- 「${s}」`).join("\n")}`);
  if (did) out.push(en ? `[What they did in this room] ${clean(did, 400)}` : `【他在这间屋里做的】${clean(did, 400)}`);
  if (room) out.push(en ? `[How a visit here goes]\n${clean(room, 1400)}` : `【这儿的一趟是怎么走的】\n${clean(room, 1400)}`);
  const walked = journeyBrief(lang, journey, here);
  if (walked) out.push(en ? `[Where they have been on the plaza]\n${walked}` : `【他在广场上走过的】\n${walked}`);
  if (l.portrait && !careIn(l.portrait)) out.push(en ? `[The guide's reading of them — her guess, not their words]\n${l.portrait}` : `【引路人对他的读法——这是她的猜测，不是他说的事实】\n${l.portrait}`);
  return out.join("\n");
}

/** The reader's instructions and the lines to read (each { id, text, label }); `facts`, the speaker's checked life. */
export function reviewMessages({ lang, record, lines, who = "", facts = "" }) {
  const en = lang === "en";
  const list = lines.map((x) => `[${x.id}]${x.label ? ` (${x.label})` : ""} ${x.text}`).join("\n");
  const sys = en
    ? `You read what the hosts of the Life Plaza are about to say to a visitor, before they say it. ${who ? `The speaker: ${who}. ` : ""}Below is the visitor's whole record${facts ? ", the speaker's own checked life" : ""}, then the lines. Check each line for these and nothing else:
1. invented: it states as so a person, thing, event, number, place or time of the visitor's life that is nowhere in the record (what they said, picked, did here, and how they look all count). Moving something they said to today, tonight or another hour or season, or giving it details they never gave, is invented too; so is saying when or how they came here today, if they didn't say. What they do here can only be what the record says they did or every visitor does here, and only once that step is done (at the welcome they have done nothing yet). How they look may be said as it is, but a trade, a day or a place guessed from their clothes is invented. Of the lives they walked: which thing was where, what it became and whose it was go by [Where they have been on the plaza]; a thing put in the wrong life, or two lives joined into one event, is invented. Invented too: giving their moment a sky, moon, stars or weather they didn't speak of; how they did something (without hesitating, quickly); the speaker saying he sees a thing they only spoke of (it is not here); a thing of theirs moved to another place; words they said to the guide at the gate written as said here; a detail they gave changed ("a long while" made "a moment"); their sex or who they are (someone's father, mother) decided for them.
2. guess: it states as the visitor's fact something only the guide's reading guesses, or says what they learned, understood, let go of or found when they never said so. Said as the speaker's own sense of them ("the way I hear it…") is fine.
3. hardship: they never spoke of anything hard (tired, afraid, struggling, holding on, waiting, unseen, alone…), yet the line says or takes for granted that they are.${facts ? `
4. host: a hard fact the speaker states of his own life — a year, a place, a name, who did what — plainly goes against his checked life below, or is nowhere in it. The same thing said another way ("my father's workshop" for a family that made boots) is not wrong; his feelings, stage talk, jokes and figures of speech are not facts; leave them.` : ""}
Never flag: what the speaker says of himself and his own things ("the seal of five hundred years", "my father's grinder" are not about the visitor; only check 4 looks at them); things the speaker brings, paints or makes for them; questions; make-believe on the speaker's stage; lines in the visitor's voice suggesting what they might ask for (a shot, a wish), unless they state a fact of the visitor's life the record doesn't have; voice and style.
List only the lines that fail. For each, give it rewritten: a whole, natural sentence by the same speaker in the same voice, no longer than it was; take away, never add — the failing words go, or go back to what the record says, and no new event, detail or thing comes in; if it can't be saved, an empty string.
Reply with ONLY JSON: {"fix": [{"id": "…", "problem": "invented|guess|hardship${facts ? "|host" : ""}", "where": "the failing words", "line": "the line rewritten, or an empty string"}]}; if nothing fails: {"fix": []}`
    : `你在人生广场的主人们开口之前，替他们审一遍要对来访者说的话。${who ? `说话的人：${who}。` : ""}下面先是来访者的全部记录${facts ? "、说话的主人核过的生平" : ""}，再是要核的句子。每一句只核下面这几样：
1. 编造：把来访者一生里的人、事、东西、经历、数字、地点、时辰当真说出来，可记录里没有（他说过的、泡泡里点过的、在这儿做过的、主人看得见的他，都算记录）。把他说过的事挪到今天、今晚、别的时辰或季节，或者给它添上他没说过的细节，也算编造；他没说，就说他今天什么时候、怎么来的，也算。说他在这儿做的事，只能是记录里写着他做了的、或者每位来访者在这儿都会做的，而且得是那一步做完之后（欢迎的时候他什么都还没做）。他的样子可以照实说，但凭衣着猜他的职业、去处、做过的事，算编造。说到他走过的几段：哪样东西在哪一段、变成了什么、是谁的，都照【他在广场上走过的】说，安错了段、把两段接成一件事，也算编造。这些也是编造：给他的那一刻配上他没说的天色、月亮、星星、天气；说他做事时的样子（没犹豫、很快）；说主人看见了他说起的东西（那些东西不在这儿）；把他说过的东西换了地方（兜里的说成抽屉里的，反过来也一样）；把他在门口跟引路人说的话，写成他在这儿说的；把他给的细节改了（「很久」说成「片刻」）；替他定男女、身份（他没说自己是谁的父亲、母亲）。
2. 推测当事实：只有引路人读法里才有的猜测，被当成他的事实说了出来；或者说他学会了、明白了、放下了、找到了什么，可他没这么说过。说成主人自己的感觉（「我听着……」）可以。
3. 预设难处：他没说过自己有什么难处（累、怕、熬、扛、等、苦、没人看见、一个人……），这句却说他有，或者当他有。${facts ? `
4. 主人的事说错了：主人说他自己一生里的硬事实——年份、地名、人名、谁做了什么——跟下面他核过的生平明明白白对不上，或者里面根本没有。同一件事换个说法（「父亲的作坊」和「家里是做皮靴的」）不算错；主人的感觉、舞台腔、玩笑、比喻不算事实，不要管。` : ""}
这些不要列：主人说他自己、他屋里的东西（「五百年的帖子」「我父亲的药碾」不是在说来访者，只归第4条管）；主人拿来给他、替他画的、替他做的东西；问句；主人台上的戏法和玩笑；用来访者口吻替他设想的话（他可能想要的一个镜头、一个愿望），除非里面把记录里没有的事当成他一生里的事实；口吻和文笔。
只列出有问题的句子。每一句给出改好的样子：同一个人、同样的口吻、完整通顺的一句，不比原来长；只删不添——出问题的那几个字拿掉，或者换回记录里的说法，不添新的事、新的细节、新的东西；实在改不好，就给空字符串。
只输出 JSON：{"fix": [{"id": "…", "problem": "编造|推测当事实|预设难处${facts ? "|主人的事说错了" : ""}", "where": "出问题的那几个字", "line": "改好的一句，或空字符串"}]}；没有问题就输出 {"fix": []}`;
  const life = facts ? (en ? `\n\n[The speaker's own checked life — the only facts of his he may state]\n${facts}` : `\n\n【说话的主人核过的生平——他说自己的事，只能是这里面的】\n${facts}`) : "";
  const user = en ? `${record}${life}\n\n[The lines to read]\n${list}` : `${record}${life}\n\n【要核的句子】\n${list}`;
  return [{ role: "system", content: sys }, { role: "user", content: user }];
}

/**
 * Read `lines` ([{ id, text, label }]) against the visitor's record, within `timeoutMs` in all (past it, every line
 * stays as written). Resolves with `fixes` (id → the line as it should be said, "" to let it go) and `notes` (what
 * failed, for the log); never throws.
 */
export async function reviewLines({ chat, lang, life, lines, who = "", facts = "", talk = [], did = "", room = "", journey = [], here = "", look = "", models = REVIEW_MODELS, timeoutMs = 12_000 }) {
  const fixes = new Map(), notes = [];
  const todo = (lines || []).filter((x) => x && x.id && typeof x.text === "string" && x.text.trim());
  if (oldContext() || !todo.length || typeof chat !== "function") return { fixes, notes };
  const t0 = Date.now();
  let timer;
  try {
    const record = recordOf(lang, life, { talk, did, room, journey, here, look });
    const late = new Promise((_, no) => { timer = setTimeout(() => no(new Error(`no reading within ${timeoutMs} ms`)), timeoutMs); });
    const r = await Promise.race([chat(reviewMessages({ lang, record, lines: todo, who, facts }), { json: true, models, maxTokens: 1400, temperature: 0.1, timeoutMs }), late]);
    const byId = new Map(todo.map((x) => [x.id, x]));
    for (const f of Array.isArray(r.data?.fix) ? r.data.fix : []) {
      const x = byId.get(String(f?.id || "").replace(/^\[|\]$/g, ""));
      const problem = PROBLEMS[String(f?.problem || "").trim()];
      if (!x || !problem || fixes.has(x.id)) continue;
      const line = clean(f?.line, 600);
      // A rewrite only takes away: no longer than the line it mends, nothing in it that was neither in the line nor
      // in the record (a reader once "mended" a chair with Gauguin's candle), and no words of not wanting to live.
      const fits = line && [...line].length <= [...x.text].length * 1.25 + 6 && !careIn(line) && line !== x.text && onlyFrom(line, `${x.text}\n${record}`);
      fixes.set(x.id, fits ? line : "");
      notes.push({ id: x.id, problem, where: clean(f?.where, 80), from: x.text, to: fits ? line : "" });
    }
    return { fixes, notes, ms: Date.now() - t0, model: r.model };
  } catch (e) {
    return { fixes, notes, ms: Date.now() - t0, error: e.message };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Whether `line` is made of what is in `source`: its words (English) or two-character runs (Chinese), all but a few
 * joining ones (at most two, or a fifth of them).
 */
export function onlyFrom(line, source) {
  const pieces = (s) => {
    const t = String(s || "").toLowerCase();
    const out = new Set(t.match(/[a-z][a-z']+/g) || []);
    for (const run of t.match(/[\u3400-\u9fff]+/g) || []) for (let i = 0; i < run.length - 1; i += 1) out.add(run.slice(i, i + 2));
    return out;
  };
  const have = pieces(source), want = [...pieces(line)];
  const novel = want.filter((p) => !have.has(p)).length;
  return novel <= Math.max(2, Math.floor(want.length / 5));
}

/** A value inside a plan by its path ("trick.options.1.why"). */
export function pathGet(o, path) {
  return String(path).split(".").reduce((x, k) => (x == null ? undefined : x[k]), o);
}
export function pathSet(o, path, value) {
  const keys = String(path).split(".");
  const last = keys.pop();
  const at = keys.reduce((x, k) => (x == null ? undefined : x[k]), o);
  if (at != null && typeof at === "object") at[last] = value;
}

/**
 * A life's plan read before it is kept (server/index.mjs makeVisit): the lines its module offers (mod.planLines) are
 * read against the visitor's record and the host's checked life (mod.facts), and mod.fixPlan mends what failed (the
 * module knows which lines can go and what stands in for the rest). `look` is the visitor as the host sees them (their
 * avatar). Resolves with the plan and the notes.
 */
export async function reviewPlan(mod, plan, { chat, lang, life, who = "", look = "", timeoutMs } = {}) {
  if (oldContext() || !plan || typeof mod?.planLines !== "function") return { plan, notes: [] };
  const lines = mod.planLines(plan, lang);
  const facts = typeof mod.facts === "function" ? mod.facts(lang) : "";
  const room = typeof mod.room === "function" ? mod.room(lang) : "";
  const r = await reviewLines({ chat, lang, life, lines, who, look, facts, room, timeoutMs: timeoutMs || PLAN_MS });
  if (!r.fixes.size) return { plan, notes: r.notes, ms: r.ms, model: r.model, error: r.error };
  const fixed = typeof mod.fixPlan === "function" ? mod.fixPlan(plan, r.fixes, lang, { life }) : (() => { for (const [id, text] of r.fixes) pathSet(plan, id, text); return plan; })();
  return { plan: fixed, notes: r.notes, ms: r.ms, model: r.model };
}
