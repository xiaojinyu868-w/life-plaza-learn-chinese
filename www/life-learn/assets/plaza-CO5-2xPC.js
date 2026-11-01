import { n as e } from "./me-CiQWAPxS.js";
import { t } from "./i18n-BvGoRVq5.js";
import { t as n } from "./gallery-Dt7lIqYc.js";
import { c as r, i, n as a, o, r as s, s as c, t as l } from "./mine-CDwrJdN1.js";
import "./mic-DTF0YIPs.js";
Object.freeze({
  melies: [`梅里爱想给你现变一个小戏法`, `Méliès would like to conjure you a small trick of your own`],
  vangogh: [`梵高想给你现画一件小东西`, `Van Gogh would like to paint you something small, here and now`],
  lishizhen: [
    `李时珍想照你的日子，给你现配一件小东西`,
    `Li Shizhen would like to make you something small from your days`,
  ],
  xiyou: [`说书人想给你现写一回`, `The storyteller would like to write you a chapter of your own`],
});
var u = null,
  d = !1,
  f = () => u?.me || e(),
  p = () => (d || ((d = !0), a(f())), s.get()),
  m = (e) => e.job?.host?.name || ``;
function h(e) {
  let n = String(e?.life?.story || e?.note || ``).trim();
  if (!n) return ``;
  let r = n.split(/(?<=[。！？!?])\s*|(?<=\.)\s+/)[0] || n,
    i = t(34, 96);
  return [...r].length > i ? `${[...r].slice(0, i - 1).join(``)}…` : r;
}
var g = (e) => (l(e) && s.get().state === `ready` ? { store: s, quote: h(e), retry: null } : null),
  _ = Object.freeze({
    id: `flash`,
    name: t(`当一回你自己`, `Your turn as yourself`),
    get meta() {
      let e = p(),
        n = c();
      return e.state === `ready`
        ? t(`你的一件 · 来过的人的${n.zh}件`, `Yours · and ${n.en} from people who came by`)
        : e.state === `making`
          ? t(`${m(e)}在为你做 · 来过的人的${n.zh}件`, `${m(e)} is making yours · ${n.en} from people who came by`)
          : t(`来过这里的人 · ${n.zh}件小东西`, `People who came by · ${n.en} small things`);
    },
    who: t(
      `主人拿一个人的日子和自己那一行，为他现做的一两分钟小游戏`,
      `A game of a minute or two that a life made from someone's days and its own craft`,
    ),
    get hook() {
      let e = p(),
        n = c();
      return e.state === `ready` || e.state === `making`
        ? t(
            `前面几段，你当了别人。这一件，是${m(e)}照你在门口说的那段日子，为你做的；旁边挂着${n.zh}个来过的人的。`,
            `In the lives before, you were someone else. This one ${m(e)} made for you, from what you told the gate; beside it hang ${n.en} from people who came by.`,
          )
        : t(
            `前面几段，你当了别人。这里挂着${n.zh}个来过的人：一位主人为他们每人做了一件小东西。玩一件，你会懂他一点。`,
            `In the lives before, you were someone else. Here are ${n.en} people who came by; a life made each of them a small thing. Play one, and you will know them a little.`,
          );
    },
    door: t(`当一回你自己`, `Your turn as yourself`),
    short: t(`当一回你自己`, `your turn as yourself`),
    get go() {
      return p().state === `ready`
        ? t(`看看为你做的`, `See the one made for you`)
        : t(`看看他们的小东西`, `See their small things`);
    },
    async covers() {
      let e = (await o())
          .map(r)
          .map((e) => ({ src: i(e), title: e.title || `` }))
          .filter((e) => e.src),
        t = p();
      return (t.state === `ready` && t.job?.cover && e.unshift({ src: i(t.job), title: t.job.title || `` }), e);
    },
    open({ onClose: e, stage: t = null } = {}) {
      p();
      let r = v(t);
      return n({
        onClose: () => {
          (r(), e?.());
        },
        mine: g(f()),
      });
    },
    async arrive({ me: e, lang: t, root: n = document.body, stage: r = null, seen: i = {}, delay: o = 0 } = {}) {
      return ((u = { me: e, lang: t, seen: i, stage: r }), (d = !0), a(e), null);
    },
  });
function v(e) {
  if (!e?.pause || !e?.resume) return () => {};
  let t = !1,
    n = setTimeout(() => {
      t || e.pause();
    }, 650);
  return () => {
    ((t = !0), clearTimeout(n), e.resume());
  };
}
export { _ as default, _ as plazaEntry };
