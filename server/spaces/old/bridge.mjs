// As it was before the gate kept a reading (main 6cefc40), word for word: used when LIFE_CONTEXT=old (cast.mjs).
/**
 * A host's word about where the visitor has been, as he welcomes them: the lives they walked through before his, and
 * what they made there (cast.mjs journeyBrief), taken in in one line — the way a neighbour on the plaza mentions what
 * he has heard. It is said after his first words and before his welcome for them (src/net/journey.js). One line or
 * none: a line that doesn't speak of where they have been, or speaks of a life they haven't walked, is left unsaid.
 */
import { LIFE_OUT, careIn, clean, cleanJourney, journeyBrief, speaksOf, zhQuotes } from "./cast.mjs";
import { sentencesOf, upTo } from "./guide.mjs";

/** The quick model's turn for `space`'s host (his own persona), or null when nothing was made in a life before. */
export function bridgeMessages({ lang, space, journey, persona }) {
  const j = cleanJourney(journey, space).filter((x) => x.title || x.did);
  if (!j.length || !LIFE_OUT[space] || typeof persona !== "function") return null;
  const en = lang === "en";
  const last = LIFE_OUT[j.at(-1).id].room[en ? 1 : 0];
  const ask = en
    ? `Before walking in here, this visitor has walked through these lives on the Life Plaza (in order):
${journeyBrief("en", j)}
You and these hosts are neighbours on the plaza (that is how the plaza is): the guide has told you of them; beyond what is written here you know nothing of them, nor the things of their times — see it with the eyes of your own time and trade.
They have just come in, and you have already said "come in". Now say one more sentence: the way a neighbour mentions something he has heard, speak of one thing from the life they have just come from (${last}) — the gift, or what they did there.
Rules:
1. One sentence, at most 22 words; it may be a question.
2. Only what is written above, nothing added; one thing is enough, don't retell it all.
3. Of your own trade, say only what is so in it (the colour of a dried herb, how a tool is used) — never something you did or had.
4. Don't welcome them again or say "come in"; no praise, no lesson, don't ask how they feel.
5. Never "dream", never "seen", no exclamation marks.
6. If it can't be said naturally, write only: none
Example (another host's, another visitor's — learn the measure, not the words): an old sea captain, hearing the visitor has come from a painter, says: I hear the painter made you a chair? Every chair on my ship is nailed to the deck.
Reply with only that sentence, no quotation marks.`
    : `这位访客走进你这儿之前，已经在人生广场上走过了这几段（按先后）：
${journeyBrief("zh", j)}
你和这几位是广场上的邻居（广场就是这样）：引路人跟你提起过他们；可除了上面写的，你不知道他们的事，也不认得他们那个年代的东西——用你自己那个年代、你那一行的眼睛去看。
他刚进门，「请进」你已经说过了。现在接着说一句：像邻居说起听来的一件事那样，自然地提一下他刚走过的那一段（${last}）里的一样东西——那件礼物，或者他在那儿做的事。
规矩：
1. 只说一句，不超过30个字；可以是一个问句。
2. 只用上面写着的，一个字也不添；挑一样就够，不复述整件事。
3. 说到你自己这一行，只说这一行本来就是那样的事（一味药晒干是什么颜色、一样家伙怎么用），不编你自己做过、有过的事。
4. 不再欢迎，不说「请进」；不夸他，不讲道理，不问他感觉怎么样。
5. 不写「梦」字，不说「被看见」，不用感叹号。
6. 实在说不自然，就只写一个字：无。
例（是别的主人、别的访客的，只学分寸，不抄字）：一位老船长听说访客刚从画家那儿来，说：听说那位画家给你画了一把椅子？我船上的椅子，都用钉子钉在甲板上。
只输出这一句话，不加引号。`;
  return [{ role: "system", content: persona(lang) }, { role: "user", content: ask }];
}

/** His line kept to the rules, or "" (said nothing is better than said wrong). */
export function saneBridge(text, lang, { space = "", journey = [] } = {}) {
  const en = lang === "en";
  const j = cleanJourney(journey, space);
  let s = clean(String(text || "").replace(/\*[^*]*\*|（[^）]*）|\([^)]*\)|\[[^\]]*\]|【[^】]*】/g, " "), 300);
  const whole = s.match(/^[「“"『](.*)[」”"』]$/);
  if (whole && !/[「」“”"『』]/.test(whole[1])) s = whole[1].trim();
  if (!en) s = zhQuotes(s);
  if (!s || /^(无|没有|none|nothing)[。.]?$/i.test(s)) return "";
  s = upTo(s, en ? 160 : 44, en);
  if (!s || /梦|\bdream|黄粱|\bmillet\b|被(人)?看见|\bseen\b/i.test(s) || /[!！].*[!！]/.test(s) || careIn(s)) return "";
  // It speaks of where they've been, and of no life they haven't walked (his own name aside).
  const walked = j.filter((x) => x.title || x.did);
  const about = (t) => walked.some((x) => speaksOf(t, x));
  const stray = Object.entries(LIFE_OUT).some(([id, o]) => id !== space && !j.some((x) => x.id === id) && o.host.test(s));
  if (!about(s) || stray) return "";
  // One breath: past its length, a sentence after the first is let go, then what follows a comma — while what is left
  // still speaks of where they've been.
  while ([...s].length > (en ? 140 : 30)) {
    const whole = sentencesOf(s, en);
    let head = "";
    if (whole.length > 1) head = whole.slice(0, -1).join("").trim();
    else {
      const at = Math.max(...(en ? [", ", "; ", " — "] : ["，", "；", "——"]).map((c) => s.lastIndexOf(c)));
      if (at > 0) head = `${s.slice(0, at).trim()}${en ? "." : "。"}`;
    }
    if (!head || !about(head)) break;
    s = head;
  }
  return [...s].length > (en ? 180 : 48) ? "" : s;
}
