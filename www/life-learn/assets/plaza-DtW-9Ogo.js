const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/xiyou-qiVItcEw.js",
      "assets/three.core-DtjtRha-.js",
      "assets/gsap-CvDoa17S.js",
      "assets/lifecard-Bz8CsM4Y.js",
      "assets/i18n-BvGoRVq5.js",
      "assets/assets-p2qy6QaX.js",
      "assets/lifecard-4j-R9WIN.css",
      "assets/stamp-C8irYyoR.js",
      "assets/three.module-DCgPjWyi.js",
      "assets/stamp-B9sAYg4l.css",
      "assets/sky-6JFrQaA8.js",
      "assets/visits-C_j5CG_Y.js",
      "assets/me-CiQWAPxS.js",
      "assets/journey-BS70xIEy.js",
      "assets/preload-helper-B4-B-RAC.js",
      "assets/mic-DTF0YIPs.js",
      "assets/journey-CKWT4nIk.css",
      "assets/direct-B4OdUEHl.js",
      "assets/sky-CUyBFZaE.js",
      "assets/xiyou-ACXbKTp8.css",
      "assets/plaza-CO5-2xPC.js",
      "assets/gallery-Dt7lIqYc.js",
      "assets/mine-CDwrJdN1.js",
      "assets/gallery-Dp4QNNyu.css",
      "assets/landing-BtczYm99.js",
      "assets/sfx-DTi9SDQe.js",
      "assets/sfx-CUgiK3oU.css",
      "assets/landing-DDjECPzR.css",
    ]),
) => i.map((i) => d[i]);
import {
  $r as e,
  A as t,
  Ar as n,
  B as r,
  Ba as i,
  E as a,
  Fr as o,
  Ii as s,
  Ir as c,
  L as l,
  La as u,
  Li as d,
  Ln as f,
  Lt as p,
  Mn as m,
  Nr as h,
  O as g,
  Pt as _,
  Qi as v,
  Qt as y,
  R as b,
  Rt as x,
  St as S,
  Tn as C,
  U as w,
  Wi as T,
  Wr as E,
  Yt as ee,
  Z as D,
  _a as te,
  _r as O,
  ar as k,
  ba as A,
  ct as j,
  do as ne,
  fa as re,
  ft as M,
  ia as ie,
  io as N,
  ir as P,
  j as F,
  jr as I,
  jt as ae,
  mr as L,
  no as oe,
  or as se,
  pa as R,
  qi as ce,
  qt as z,
  ra as le,
  ro as B,
  sn as ue,
  ta as de,
  tr as V,
  ya as fe,
  z as pe,
} from "./three.core-DtjtRha-.js";
import { t as me } from "./gsap-CvDoa17S.js";
import { n as he, r as ge, t as _e } from "./lifecard-Bz8CsM4Y.js";
import { i as ve, t as ye } from "./me-CiQWAPxS.js";
import { a as H, n as be, t as U } from "./i18n-BvGoRVq5.js";
import { l as xe, n as Se, o as Ce, u as we } from "./assets-p2qy6QaX.js";
import { t as Te } from "./fonts-BF0KELzc.js";
import { t as Ee } from "./preload-helper-B4-B-RAC.js";
import { c as De, f as Oe, h as ke, m as Ae, p as je, r as Me, s as Ne, t as Pe } from "./stamp-C8irYyoR.js";
import { a as Fe, i as Ie, n as Le, o as Re, r as ze, s as Be, t as Ve } from "./visits-C_j5CG_Y.js";
import { n as W, t as He } from "./mic-DTF0YIPs.js";
import { i as Ue, n as We, r as Ge, t as Ke } from "./sfx-DTi9SDQe.js";
import {
  A as qe,
  C as Je,
  D as Ye,
  E as Xe,
  M as Ze,
  N as Qe,
  O as $e,
  P as et,
  T as tt,
  _ as nt,
  b as rt,
  f as it,
  g as at,
  h as ot,
  i as st,
  j as ct,
  k as lt,
  l as ut,
  n as dt,
  o as ft,
  r as pt,
  t as mt,
  v as ht,
  w as gt,
  y as _t,
} from "./journey-BS70xIEy.js";
import { t as vt } from "./merge-DZHEIcuB.js";
import { a as G, i as yt, n as bt, o as xt, r as St, t as Ct } from "./sky-CUyBFZaE.js";
function wt(e, { camera: t = null, keyboard: n = !0 } = {}) {
  let r = document.createElement(`button`);
  ((r.type = `button`),
    (r.className = `next`),
    (r.innerHTML = `<span class="next-face"><img alt="" /></span><span class="next-words"><span class="next-k"></span><b class="next-l"></b></span><span class="next-go" aria-hidden="true"></span>`));
  let i = document.createElement(`div`);
  ((i.className = `next-edge`), (i.innerHTML = `<i></i>`), e.append(r, i));
  let a = r.querySelector(`img`),
    o = r.querySelector(`.next-face`),
    s = null,
    c = !1,
    l = new B(),
    u = () => {
      s && !c && (navigator.vibrate?.(10), s.go?.());
    };
  (r.addEventListener(`click`, (e) => {
    (e.preventDefault(), e.stopPropagation(), u());
  }),
    n &&
      window.addEventListener(`keydown`, (e) => {
        e.code === `Tab` &&
          !e.target.closest?.(`input, textarea`) &&
          r.classList.contains(`show`) &&
          (e.preventDefault(), u());
      }));
  let d = () => {
      let e = !!s && !c;
      (r.classList.toggle(`show`, e), e || i.classList.remove(`show`));
    },
    f = {
      set(e) {
        let t = e && e.key !== s?.key;
        if (((s = e || null), s)) {
          r.querySelector(`.next-k`).textContent = s.kicker || ``;
          let e = r.querySelector(`.next-l`);
          e.textContent = ``;
          for (let t of String(s.label || ``)
            .replace(
              /(的|·| )/g,
              `$1
`,
            )
            .split(
              `
`,
            )
            .filter(Boolean)) {
            let n = document.createElement(`span`);
            ((n.textContent = t), e.append(n));
          }
          ((o.hidden = !s.image),
            s.image && (a.src = Se(s.image)),
            r.setAttribute(`aria-label`, `${s.kicker || ``} ${s.label || ``}`.trim()));
        }
        (d(), t && f.pulse());
      },
      get step() {
        return s;
      },
      hold(e) {
        c !== e && ((c = e), d());
      },
      pulse() {
        (r.classList.remove(`beckon`), r.offsetWidth, r.classList.add(`beckon`));
      },
      update() {
        if (!t || !s?.at || c) {
          i.classList.remove(`show`);
          return;
        }
        l.copy(typeof s.at == `function` ? s.at() : s.at).project(t);
        let e = l.z > 1;
        if (!e && Math.abs(l.x) < 0.92 && Math.abs(l.y) < 0.9) {
          i.classList.remove(`show`);
          return;
        }
        let n = e ? -l.x : l.x,
          r = e ? -l.y : l.y;
        e && Math.abs(n) < 0.001 && Math.abs(r) < 0.001 && (r = -1);
        let a = window.innerWidth,
          o = window.innerHeight,
          u = Math.min(
            (a / 2 - 34) / Math.max((Math.abs(n) * a) / 2, 0.001),
            (o / 2 - 34 - 40) / Math.max((Math.abs(r) * o) / 2, 0.001),
          ),
          d = a / 2 + (a / 2) * n * u,
          f = o / 2 - (o / 2) * r * u;
        ((i.style.transform = `translate(${d.toFixed(1)}px, ${f.toFixed(1)}px) rotate(${Math.atan2(-r, n).toFixed(3)}rad)`),
          i.classList.add(`show`));
      },
    };
  return f;
}
var Tt = [81, 0, 84, 86, 84, 81, 82, 0, 86, 84, 0, 79, 81, 79, 77, 76, 0, 81, 79, 0, 84, 77, 0, 0],
  Et = [
    [53, [69, 72]],
    [50, [65, 69]],
    [46, [65, 70]],
    [48, [67, 70]],
    [53, [69, 72]],
    [45, [64, 69]],
    [46, [65, 70]],
    [48, [64, 67]],
  ],
  Dt = 60 / 70,
  Ot = (e) => 440 * 2 ** ((e - 69) / 12);
function kt(e, t = 2.4) {
  let n = Math.floor(e.sampleRate * t),
    r = e.createBuffer(2, n, e.sampleRate);
  for (let e = 0; e < 2; e += 1) {
    let t = r.getChannelData(e);
    for (let e = 0; e < n; e += 1) t[e] = (Math.random() * 2 - 1) * (1 - e / n) ** 3.2;
  }
  return r;
}
function At(e, t = 3, n = !1) {
  let r = e.createBuffer(1, Math.floor(e.sampleRate * t), e.sampleRate),
    i = r.getChannelData(0),
    a = 0;
  for (let e = 0; e < i.length; e += 1) {
    let t = Math.random() * 2 - 1;
    n ? ((a = (a + 0.02 * t) / 1.02), (i[e] = a * 3.5)) : (i[e] = t);
  }
  return r;
}
function jt({ fountain: e = null, waterfall: t = null } = {}) {
  let n = null,
    r = null,
    i = null,
    a = !1,
    o = !1,
    s = 0,
    c = 0,
    l = null,
    u = null,
    d = 0,
    f = 0;
  function p() {
    if (a || ((n = Fe()), !n)) return;
    ((a = !0), (r = n.createGain()), (r.gain.value = +!o), r.connect(n.destination));
    let e = n.createConvolver();
    e.buffer = kt(n);
    let t = n.createGain();
    ((t.gain.value = 0.32),
      e.connect(t).connect(r),
      (i = n.createGain()),
      (i.gain.value = 0),
      i.connect(r),
      i.connect(e),
      i.gain.linearRampToValueAtTime(0.09, n.currentTime + 4));
    let f = n.createBufferSource();
    ((f.buffer = At(n, 6, !0)), (f.loop = !0));
    let p = n.createBiquadFilter();
    ((p.type = `lowpass`), (p.frequency.value = 520));
    let m = n.createGain();
    m.gain.value = 0.05;
    let _ = n.createOscillator();
    _.frequency.value = 0.07;
    let v = n.createGain();
    ((v.gain.value = 0.03), _.connect(v).connect(m.gain), f.connect(p).connect(m).connect(r), f.start(), _.start());
    let y = (t, i, a) => {
      let o = n.createBufferSource();
      ((o.buffer = At(n, 4)), (o.loop = !0));
      let s = n.createBiquadFilter();
      ((s.type = a), (s.frequency.value = t), (s.Q.value = i));
      let c = n.createGain();
      return ((c.gain.value = 0), o.connect(s).connect(c).connect(r), c.connect(e), o.start(), c);
    };
    ((l = y(1500, 0.7, `bandpass`)),
      (u = y(700, 0.5, `lowpass`)),
      (d = n.currentTime + 1.5),
      (s = setInterval(h, 120)),
      (c = setTimeout(g, 3e3)));
  }
  function m(e, t, r = 1) {
    let a = Ot(e),
      o = n.createGain();
    (o.gain.setValueAtTime(1e-4, t),
      o.gain.exponentialRampToValueAtTime(0.42 * r, t + 0.006),
      o.gain.exponentialRampToValueAtTime(1e-4, t + 1.9));
    let s = n.createOscillator();
    ((s.type = `sine`), (s.frequency.value = a));
    let c = n.createOscillator();
    ((c.type = `sine`), (c.frequency.value = a * 4.07));
    let l = n.createGain();
    (l.gain.setValueAtTime(0.18 * r, t),
      l.gain.exponentialRampToValueAtTime(1e-4, t + 0.35),
      s.connect(o),
      c.connect(l).connect(o),
      o.connect(i),
      s.start(t),
      c.start(t),
      s.stop(t + 2),
      c.stop(t + 0.4));
  }
  function h() {
    if (n)
      for (; d < n.currentTime + 0.4;) {
        let e = f % Tt.length,
          t = Math.floor(e / 3),
          n = e % 3,
          r = Math.floor(f / Tt.length) % 2,
          i = Tt[e];
        i && m(i - (r && t >= 2 && t <= 5 ? 12 : 0), d, 0.9);
        let [a, o] = Et[t];
        (n === 0 ? m(a + 12, d, 0.55) : o.forEach((e, t) => m(e, d + t * 0.012, 0.28)),
          (d += Dt * (n === 2 && t === 7 ? 1.25 : 1)),
          (f += 1));
      }
  }
  function g() {
    if (!n) return;
    let e = n.currentTime + 0.05,
      t = n.createStereoPanner();
    ((t.pan.value = Math.random() * 1.6 - 0.8), t.connect(r));
    let i = 2 + ((Math.random() * 3) | 0);
    for (let r = 0; r < i; r += 1) {
      let i = n.createOscillator();
      i.type = `sine`;
      let a = e + r * (0.09 + Math.random() * 0.05),
        o = 2600 + Math.random() * 1400;
      (i.frequency.setValueAtTime(o, a),
        i.frequency.exponentialRampToValueAtTime(o * (1.25 + Math.random() * 0.3), a + 0.07));
      let s = n.createGain();
      (s.gain.setValueAtTime(1e-4, a),
        s.gain.exponentialRampToValueAtTime(0.022, a + 0.01),
        s.gain.exponentialRampToValueAtTime(1e-4, a + 0.09),
        i.connect(s).connect(t),
        i.start(a),
        i.stop(a + 0.1));
    }
    c = setTimeout(g, 4e3 + Math.random() * 7e3);
  }
  return (
    Re(p),
    {
      start: p,
      listen(r) {
        if (!n || !l) return;
        let i = (e, t) => (e ? Math.max(0, 1 - r.distanceTo(e) / t) : 0);
        (l.gain.setTargetAtTime(0.06 * i(e, 12) ** 1.5, n.currentTime, 0.3),
          u.gain.setTargetAtTime(0.09 * i(t, 16) ** 1.5, n.currentTime, 0.3));
      },
      setMuted(e) {
        ((o = e), r && r.gain.setTargetAtTime(+!e, n.currentTime, 0.2));
      },
      duck(e) {
        i && i.gain.setTargetAtTime(e ? 0.035 : 0.09, n.currentTime, 0.4);
      },
      stop() {
        (clearInterval(s), clearTimeout(c), r && r.gain.setTargetAtTime(0, n.currentTime, 0.3));
      },
    }
  );
}
var K = (e, t) => ({ zh: e, en: t }),
  q = (e, t, n, r = {}) => ({ id: e, label: t, say: n, ...r }),
  Mt = `other`,
  Nt = Object.freeze([
    q(`study`, K(`在上学`, `Studying`), K(`在上学`, `I'm studying`), {
      who: K(`在上学的人`, `a student`),
      subs: [
        q(`school`, K(`中学`, `High school`), K(`在上中学`, `I'm in high school`), {
          whole: !0,
          who: K(`中学生`, `a high-school student`),
        }),
        q(`college`, K(`大学`, `University`), K(`在上大学`, `I'm at university`), {
          whole: !0,
          who: K(`大学生`, `a university student`),
        }),
        q(`master`, K(`读研`, `Master's`), K(`在读研`, `I'm doing a master's`), {
          whole: !0,
          who: K(`读研的学生`, `a master's student`),
        }),
        q(`phd`, K(`读博`, `PhD`), K(`在读博`, `I'm doing a PhD`), {
          whole: !0,
          who: K(`读博的学生`, `a PhD student`),
        }),
        q(`exam`, K(`在准备考试`, `Exams ahead`), K(`在准备考试`, `I'm studying for exams`), {
          whole: !0,
          who: K(`在备考的人`, `someone studying for exams`),
        }),
        q(`abroad`, K(`在国外读书`, `Studying abroad`), K(`在国外读书`, `I'm studying abroad`), {
          whole: !0,
          who: K(`在国外读书的人`, `a student abroad`),
        }),
        q(`graduate`, K(`刚毕业`, `Just graduated`), K(`刚毕业`, `I've just graduated`), {
          whole: !0,
          who: K(`刚毕业的人`, `a new graduate`),
        }),
      ],
    }),
    q(`work`, K(`在上班`, `Working`), K(`在上班`, `I'm working`), {
      who: K(`上班的人`, `someone at work`),
      subs: [
        q(`code`, K(`写代码`, `Code`), K(`写代码的`, `I write code`), {
          who: K(`写代码的人`, `someone who writes code`),
        }),
        q(`design`, K(`做设计`, `Design`), K(`做设计的`, `I'm a designer`), { who: K(`做设计的人`, `a designer`) }),
        q(`hospital`, K(`医生护士`, `Doctor or nurse`), K(`在医院上班`, `I work at a hospital`), {
          whole: !0,
          who: K(`在医院上班的人`, `someone at a hospital`),
        }),
        q(`teach`, K(`老师`, `Teacher`), K(`当老师`, `I teach`), { who: K(`当老师的人`, `a teacher`) }),
        q(`sales`, K(`销售业务`, `Sales`), K(`跑业务的`, `I'm in sales`), { who: K(`跑业务的人`, `someone in sales`) }),
        q(`office`, K(`财务行政`, `Finance, admin`), K(`做财务行政的`, `I do finance and admin`), {
          who: K(`做财务行政的人`, `someone in finance and admin`),
        }),
        q(`civil`, K(`公务员`, `Civil service`), K(`在单位当公务员`, `I'm a civil servant`), {
          whole: !0,
          who: K(`公务员`, `a civil servant`),
        }),
        q(`factory`, K(`在工厂`, `Factory`), K(`在工厂上班`, `I work in a factory`), {
          whole: !0,
          who: K(`在工厂上班的人`, `a factory worker`),
        }),
        q(`courier`, K(`外卖快递`, `Deliveries`), K(`送外卖快递的`, `I do deliveries`), {
          who: K(`送外卖快递的人`, `a delivery rider`),
        }),
        q(`drive`, K(`开车`, `Driving`), K(`开车的`, `I drive for a living`), { who: K(`开车的人`, `a driver`) }),
        q(`content`, K(`做内容`, `Content`), K(`做内容的`, `I make content`), {
          who: K(`做内容的人`, `someone who makes content`),
        }),
        q(`shop`, K(`在店里`, `In a shop`), K(`在店里上班`, `I work in a shop`), {
          whole: !0,
          who: K(`在店里上班的人`, `someone who works in a shop`),
        }),
        q(`elsework`, K(`别的工作`, `Other work`), K(``, ``), {}),
      ],
    }),
    q(`own`, K(`自己干`, `On my own`), K(`自己干`, `I work for myself`), {
      who: K(`自己干的人`, `someone who works for themselves`),
      subs: [
        q(`store`, K(`开店`, `A shop`), K(`开了个店`, `I run a shop`), {
          who: K(`开店的人`, `someone who runs a shop`),
        }),
        q(`freelance`, K(`自由职业`, `Freelance`), K(`做自由职业`, `I freelance`), {
          who: K(`做自由职业的人`, `a freelancer`),
        }),
        q(`startup`, K(`创业`, `A start-up`), K(`在创业`, `I'm starting a business`), {
          who: K(`在创业的人`, `someone starting a business`),
        }),
        q(`craft`, K(`手艺人`, `A craft`), K(`是个手艺人`, `I make things by hand`), {
          who: K(`手艺人`, `a craftsperson`),
        }),
        q(`stall`, K(`摆摊`, `A stall`), K(`摆摊`, `I keep a stall`), {
          who: K(`摆摊的人`, `someone who keeps a stall`),
        }),
        q(`media`, K(`做自媒体`, `My own channel`), K(`做自媒体`, `I run my own channel`), {
          who: K(`做自媒体的人`, `someone with their own channel`),
        }),
      ],
    }),
    q(`home`, K(`在家里`, `At home`), K(`在家里`, `I'm at home`), {
      who: K(`在家里的人`, `someone at home`),
      subs: [
        q(`kids`, K(`带孩子`, `The kids`), K(`带孩子`, `looking after the kids`), {
          who: K(`在家带孩子的人`, `someone at home with the kids`),
        }),
        q(`family`, K(`照顾家人`, `Family`), K(`照顾家人`, `looking after family`), {
          who: K(`在家照顾家人的人`, `someone looking after family`),
        }),
        q(`rest`, K(`歇一阵`, `A break`), K(`歇一阵`, `taking a break`), {
          who: K(`在家歇一阵的人`, `someone taking a break`),
        }),
      ],
    }),
    q(`retired`, K(`退休了`, `Retired`), K(`退休了`, `I'm retired`), {
      who: K(`退休的人`, `someone retired`),
      subs: [
        q(`grandkids`, K(`带孙辈`, `Grandchildren`), K(`带孙辈`, `looking after the grandchildren`), {}),
        q(`garden`, K(`养花种菜`, `Flowers and veg`), K(`养花种菜`, `growing flowers and vegetables`), {}),
        q(`about`, K(`到处走走`, `Getting about`), K(`到处走走`, `getting about`), {}),
        q(`learning`, K(`学点新东西`, `Learning things`), K(`学点新东西`, `learning new things`), {}),
      ],
    }),
    q(`turn`, K(`在换方向`, `Changing course`), K(`在换方向`, `I'm changing course`), {
      who: K(`在换方向的人`, `someone changing course`),
      subs: [
        q(`quit`, K(`刚辞职`, `Just quit`), K(`刚辞职`, `I've just quit`), {}),
        q(`seek`, K(`在找工作`, `Looking for work`), K(`在找工作`, `looking for work`), {}),
        q(`gap`, K(`间隔年`, `A gap year`), K(`过个间隔年`, `taking a gap year`), {}),
        q(`think`, K(`还在想`, `Still thinking`), K(`还在想`, `still thinking`), {}),
      ],
    }),
    q(`unsaid`, K(`不想说`, `Rather not say`), K(``, ``), {}),
    q(Mt, K(`其他`, `Something else`), K(``, ``), { hint: K(`我自己说`, `in my own words`) }),
  ]),
  Pt = Object.freeze([
    q(`film`, K(`看电影`, `Films`), K(`看电影`, `films`), {
      subs: [
        q(`oldfilm`, K(`老电影`, `Old films`), K(`看老电影`, `old films`)),
        q(`anime`, K(`动画`, `Animation`), K(`看动画`, `animation`)),
        q(`docs`, K(`纪录片`, `Documentaries`), K(`看纪录片`, `documentaries`)),
        q(`shoot`, K(`自己拍`, `Shooting my own`), K(`自己拍点东西`, `shooting my own films`)),
      ],
    }),
    q(`draw`, K(`画画`, `Drawing`), K(`画画`, `drawing`), {
      subs: [
        q(`doodle`, K(`涂鸦`, `Doodling`), K(`涂涂画画`, `doodling`)),
        q(`water`, K(`水彩`, `Watercolour`), K(`画水彩`, `watercolours`)),
        q(`show`, K(`看展`, `Exhibitions`), K(`看展`, `exhibitions`)),
        q(`photo`, K(`拍照`, `Photos`), K(`拍照`, `taking photos`)),
      ],
    }),
    q(`music`, K(`音乐`, `Music`), K(`听音乐`, `music`), {
      subs: [
        q(`sing`, K(`唱歌`, `Singing`), K(`唱歌`, `singing`)),
        q(`play`, K(`弹琴`, `Playing`), K(`弹琴`, `playing an instrument`)),
        q(`live`, K(`听现场`, `Live gigs`), K(`听现场`, `live music`)),
        q(
          `phones`,
          K(`戴着耳机发呆`, `Headphones on, miles away`),
          K(`戴着耳机发呆`, `sitting with headphones on, miles away`),
        ),
      ],
    }),
    q(`sport`, K(`运动`, `Sport`), K(`运动`, `sport`), {
      subs: [
        q(`run`, K(`跑步`, `Running`), K(`跑步`, `running`)),
        q(`bike`, K(`骑车`, `Cycling`), K(`骑车`, `cycling`)),
        q(`ball`, K(`打球`, `Ball games`), K(`打球`, `ball games`)),
        q(`gym`, K(`健身`, `The gym`), K(`健身`, `the gym`)),
        q(`swim`, K(`游泳`, `Swimming`), K(`游泳`, `swimming`)),
        q(`hike`, K(`爬山`, `Hills`), K(`爬山`, `walking in the hills`)),
      ],
    }),
    q(`read`, K(`看书`, `Reading`), K(`看书`, `reading`), {
      subs: [
        q(`novel`, K(`小说`, `Novels`), K(`看小说`, `novels`)),
        q(`history`, K(`历史`, `History`), K(`看历史`, `history`)),
        q(`comic`, K(`漫画`, `Comics`), K(`看漫画`, `comics`)),
        q(`poem`, K(`诗`, `Poetry`), K(`读诗`, `poetry`)),
      ],
    }),
    q(`eat`, K(`吃`, `Food`), K(`吃好吃的`, `good food`), {
      subs: [
        q(`cook`, K(`下厨`, `Cooking`), K(`下厨`, `cooking`)),
        q(`hotpot`, K(`火锅`, `Hotpot`), K(`吃火锅`, `hotpot`)),
        q(`sweet`, K(`甜点`, `Sweet things`), K(`吃甜点`, `sweet things`)),
        q(`hunt`, K(`到处找好吃的`, `Hunting for good food`), K(`到处找好吃的`, `hunting for good food`)),
      ],
    }),
    q(`plant`, K(`花草`, `Plants`), K(`弄弄花草`, `plants`), {
      subs: [
        q(`flower`, K(`养花`, `Flowers`), K(`养花`, `growing flowers`)),
        q(`veg`, K(`种菜`, `Vegetables`), K(`种菜`, `growing vegetables`)),
        q(`park`, K(`逛公园`, `Parks`), K(`逛公园`, `walks in the park`)),
      ],
    }),
    q(`pet`, K(`猫狗`, `Cats and dogs`), K(`猫猫狗狗`, `cats and dogs`), {
      subs: [
        q(`cat`, K(`养猫`, `My cat`), K(`养猫`, `my cat`)),
        q(`dog`, K(`养狗`, `My dog`), K(`养狗`, `my dog`)),
        q(`othercat`, K(`看别人的猫`, `Other people's cats`), K(`看别人的猫`, `other people's cats`)),
      ],
    }),
    q(`walk`, K(`走走`, `Wandering`), K(`到处走走`, `wandering`), {
      subs: [
        q(`travel`, K(`旅行`, `Travel`), K(`旅行`, `travelling`)),
        q(`drivetrip`, K(`自驾`, `Road trips`), K(`自驾`, `road trips`)),
        q(`stroll`, K(`城里瞎逛`, `Pottering round town`), K(`在城里瞎逛`, `pottering round town`)),
      ],
    }),
    q(`game`, K(`游戏`, `Games`), K(`打游戏`, `games`), {
      subs: [
        q(`mobile`, K(`手游`, `Phone games`), K(`玩手游`, `phone games`)),
        q(`console`, K(`主机`, `Console`), K(`打主机游戏`, `console games`)),
        q(`board`, K(`桌游`, `Board games`), K(`玩桌游`, `board games`)),
      ],
    }),
    q(`sleep`, K(`睡觉`, `Sleep`), K(`睡觉`, `sleep`)),
    q(Mt, K(`其他`, `Something else`), K(``, ``), { hint: K(`我自己说`, `in my own words`) }),
  ]),
  Ft = (e) => e && `${e[0].toUpperCase()}${e.slice(1)}`,
  It = (e, t) => (t ? (e.length > 1 ? `${e.slice(0, -1).join(`, `)} and ${e.at(-1)}` : e[0] || ``) : e.join(`，`));
function Lt({ now: e = [], likes: t = [] }, n) {
  let r = n === `en`,
    i = r ? `en` : `zh`,
    a = [],
    [o, s] = e;
  if (o?.own) a.push(o.own.replace(/[。.！!？?]+$/, ``));
  else if (o && o.id !== `unsaid`) {
    let e = s?.own || s?.say?.[i],
      t = e ? (s?.whole ? e : r ? `${o.say[i]} — ${e}` : `${o.say[i]}，${e}`) : o.say[i];
    a.push(r ? Ft(t) : t);
  }
  let c = t
    .filter((e) => !t.some((t) => t.parentId === e.id))
    .map((e) => e.own || e.say[i])
    .filter(Boolean);
  return (
    c.length && a.push(r ? `I like ${It(c, r)}` : `平常喜欢${It(c, r)}`),
    a.map((e) => `${e}${r ? `.` : `。`}`).join(r ? ` ` : ``)
  );
}
function Rt({ now: e = [] }, t) {
  let n = t === `en` ? `en` : `zh`,
    [r, i] = e;
  return !r || r.own || r.id === `unsaid` || r.id === `other` ? `` : i?.who?.[n] || r.who?.[n] || ``;
}
var zt = (e) => {
    let t = 2166136261;
    for (let n of String(e)) ((t ^= n.charCodeAt(0)), (t = Math.imul(t, 16777619)));
    return (t >>> 0) / 4294967295;
  },
  Bt = (e) =>
    String(e ?? ``).replace(
      /[&<>"']/g,
      (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[e],
    ),
  Vt = 5,
  Ht = 1 / 60;
function Ut(e, t, n, r) {
  let i = e.label[t],
    a = t === `en` ? Math.min(i.length, 18) * 0.5 : [...i].length;
  return (
    (Math.max(n ? 33 : 47, Math.min(n ? 50 : 66, (n ? 29 : 38) + a * (n ? 3.6 : 5.2))) +
      (zt(e.id) - 0.5) * (n ? 6 : 12)) *
    r
  );
}
function Wt(
  e,
  {
    items: t,
    lang: n,
    single: r = !1,
    max: i = 5,
    sfx: a = {},
    onChange: o = () => {},
    onOther: s = () => {},
    onLimit: c = () => {},
  } = {},
) {
  let l = n === `en` ? `en` : `zh`,
    u = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    d = [],
    f = [],
    p = e.clientWidth || 360,
    m = e.clientHeight || 480,
    h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = !0,
    b = 1,
    x = 0,
    S = !1,
    C = () => Math.max(0.86, Math.min(1.16, p / 390)),
    w = document.createElement(`i`);
  ((w.className = `bb-glow`), w.setAttribute(`aria-hidden`, `true`), e.appendChild(w));
  function T(t, { parent: n = null, x: r, y: i, delay: a = 0 }) {
    let o = document.createElement(`button`);
    ((o.type = `button`),
      (o.className = `bb${n ? ` sub` : ``}${t.id === `other` ? ` other` : ``}${t.id === `unsaid` ? ` unsaid` : ``}${t.own ? ` own` : ``}`),
      o.setAttribute(`aria-pressed`, `false`),
      (o.innerHTML = `<span>${Bt(t.label[l])}${t.hint ? `<small>${Bt(t.hint[l])}</small>` : ``}</span>`));
    let s = t.own ? Math.max(44, Math.min(62, 32 + [...t.own].length * 3.6)) * C() : Ut(t, l, !!n, C());
    o.style.width = o.style.height = `${(s * 2).toFixed(1)}px`;
    let c = {
      item: t,
      parent: n,
      el: o,
      R: s,
      x: r,
      y: i,
      vx: 0,
      vy: 0,
      r: 0,
      vr: 0,
      grow: 1,
      hx: r,
      hy: i,
      h0x: r,
      h0y: i,
      sel: !1,
      pin: !1,
      dying: !1,
      delay: h + a,
      ph: zt(t.id) * 6.283,
    };
    return (o.addEventListener(`click`, () => P(c)), e.appendChild(o), d.push(c), c);
  }
  function E() {
    let e = t.length,
      n = p / 2,
      r = m * 0.5,
      i = Math.min(p, m) * 0.56;
    t.forEach((t, a) => {
      let o = a * 2.39996 + 0.6,
        s = i * Math.sqrt((a + 0.6) / e);
      T(t, {
        x: n + Math.cos(o) * s * (p / Math.min(p, m)) * 0.92,
        y: r + Math.sin(o) * s * (m / Math.min(p, m)) * 0.86,
        delay: u ? 0 : 0.08 + a * 0.045,
      });
    });
    for (let e of d) e.r = e.R;
    S = !0;
    for (let e = 0; e < 240; e += 1) D(!1);
    S = !1;
    for (let e of d) ((e.hx = e.h0x = e.x), (e.hy = e.h0y = e.y), (e.r = u ? e.R : 0), (e.vx = e.vy = e.vr = 0));
    h = 0;
  }
  let ee = (e) => (S ? e.R : e.dying || h < e.delay ? 0 : e.R * e.grow * (e.sel ? 1 : b));
  function D(e = !0) {
    e && (h += Ht);
    let t = d;
    for (let e of t) {
      ((e.vr += (ee(e) - e.r) * 0.2), (e.vr *= 0.66), (e.r = Math.max(0, e.r + e.vr)));
      let t = e.pin ? 0.07 : e.parent ? 0.035 : 0.012,
        n = u ? 0 : Math.sin(h * 0.47 + e.ph) * 3.2,
        r = u ? 0 : Math.cos(h * 0.39 + e.ph * 1.7) * 3.2;
      ((e.vx += (e.hx + n - e.x) * t), (e.vy += (e.hy + r - e.y) * t));
    }
    for (let e = 0; e < 3; e += 1)
      for (let e = 0; e < t.length; e += 1) {
        let n = t[e];
        if (!(n.r < 3))
          for (let r = e + 1; r < t.length; r += 1) {
            let e = t[r];
            if (e.r < 3) continue;
            let i = e.x - n.x,
              a = e.y - n.y,
              o = n.r + e.r + Vt,
              s = i * i + a * a;
            if (s >= o * o) continue;
            let c = Math.sqrt(s) || 0.01;
            ((i /= c), (a /= c));
            let l = (o - c) * 0.5,
              u = n.pin ? 1e6 : n.r * n.r,
              d = e.pin ? 1e6 : e.r * e.r,
              f = d / (u + d),
              p = u / (u + d);
            ((n.x -= i * l * f),
              (n.y -= a * l * f),
              (e.x += i * l * p),
              (e.y += a * l * p),
              (n.vx -= i * l * f * 0.12),
              (n.vy -= a * l * f * 0.12),
              (e.vx += i * l * p * 0.12),
              (e.vy += a * l * p * 0.12));
          }
      }
    for (let e of t) {
      let t = e.r * 0.38,
        n = e.r * 0.75;
      (e.x < t ? (e.vx += (t - e.x) * 0.18) : e.x > p - t && (e.vx -= (e.x - (p - t)) * 0.18),
        e.y < n ? (e.vy += (n - e.y) * 0.18) : e.y > m - t && (e.vy -= (e.y - (m - t)) * 0.18),
        (e.vx *= 0.86),
        (e.vy *= 0.86),
        (e.x = Math.min(p + e.r * 0.1, Math.max(-e.r * 0.1, e.x + e.vx))),
        (e.y = Math.min(m + e.r * 0.1, Math.max(e.r * 0.3, e.y + e.vy))));
    }
    for (let e = t.length - 1; e >= 0; --e)
      t[e].dying && t[e].r < 0.6 && h > t[e].delay && (t[e].el.remove(), t.splice(e, 1));
  }
  function te() {
    for (let e of d) {
      let t = Math.max(1e-4, e.r / e.R);
      e.el.style.transform = `translate3d(${(e.x - e.R).toFixed(2)}px, ${(e.y - e.R).toFixed(2)}px, 0) scale(${t.toFixed(4)})`;
    }
    let e = [...f].reverse().find((e) => !e.parent && !e.dying);
    e
      ? ((w.style.transform = `translate3d(${(e.x - 160).toFixed(1)}px, ${(e.y - 160).toFixed(1)}px, 0) scale(${(e.r / 64).toFixed(3)})`),
        w.classList.add(`on`))
      : w.classList.remove(`on`);
  }
  function O(t) {
    if (!y) return;
    if (((v = requestAnimationFrame(O)), !e.isConnected || e.offsetParent === null)) {
      _ = t;
      return;
    }
    ((g += Math.min(0.1, (t - (_ || t)) / 1e3)), (_ = t));
    let n = 0;
    for (; g >= Ht && n < 4;) (D(), (g -= Ht), (n += 1));
    (n === 4 && (g = 0), te());
  }
  function k(e) {
    let t = p / 2,
      n = m * 0.47,
      r = e.R * e.grow + (e.item.subs?.length ? 80 * C() + 18 : 14);
    for (let i of d) {
      if (i === e || i.parent) continue;
      let a = i.h0x - t,
        o = i.h0y - n,
        s = Math.hypot(a, o) || 1,
        c = r + i.R * 0.9,
        l = Math.max(s, c) / s;
      ((i.hx = t + a * l), (i.hy = n + o * l));
    }
  }
  function A() {
    for (let e of d) !e.parent && !e.pin && ((e.hx = e.h0x), (e.hy = e.h0y));
  }
  function j(e) {
    let t = e.item.subs || [];
    if (!t.length) return;
    let n = t.reduce((e, t) => e + Ut(t, l, !0, C()), 0) / t.length,
      r = e.R * e.grow + n + 10,
      i = Math.max(4, Math.floor((2 * Math.PI * r) / (2 * n + 10)));
    (t.forEach((a, o) => {
      let s = o < i,
        c = s ? Math.min(i, t.length) : t.length - i,
        l = s ? o : o - i,
        d = s ? r : r + 2 * n + 8,
        f = -Math.PI / 2 + 0.35 + (l + (s ? 0 : 0.5)) * ((2 * Math.PI) / c),
        p = T(a, { parent: e, x: e.x, y: e.y, delay: u ? 0 : 0.05 + o * 0.035 });
      ((p.hx = e.hx + Math.cos(f) * d),
        (p.hy = e.hy + Math.sin(f) * d * 0.94),
        (p.vx = Math.cos(f) * 4),
        (p.vy = Math.sin(f) * 4),
        u && ((p.x = p.hx), (p.y = p.hy), (p.r = p.R)));
    }),
      a.birth?.(t.length));
  }
  function ne(e) {
    for (let t of d)
      t.parent !== e ||
        t.dying ||
        (t.sel && ((t.sel = !1), f.splice(f.indexOf(t), 1)),
        (t.dying = !0),
        (t.hx = e.x),
        (t.hy = e.y),
        t.el.classList.add(`going`),
        (t.el.disabled = !0));
  }
  function re() {
    let e = d.filter((e) => !e.dying).reduce((e, t) => e + Math.PI * (t.R * (t.sel ? t.grow : 1)) ** 2, 0),
      t = p * m * 0.6;
    ((b = e > t ? Math.max(0.68, Math.sqrt(t / e)) : 1), r && f.some((e) => !e.parent) && (b = Math.min(b, 0.84)));
  }
  function M(t) {
    ((t.sel = !0),
      t.el.classList.add(`sel`),
      t.el.setAttribute(`aria-pressed`, `true`),
      f.push(t),
      a.pop?.(t.R),
      navigator.vibrate?.(8),
      t.parent
        ? (t.grow = 1.1)
        : ((t.grow = r ? 1.3 : 1.12),
          r && ((t.pin = !0), (t.hx = p / 2), (t.hy = m * 0.47), k(t), e.classList.add(`chosen`)),
          j(t)),
      re(),
      o(I()));
  }
  function ie(t, n = !1) {
    ((t.sel = !1), t.el.classList.remove(`sel`), t.el.setAttribute(`aria-pressed`, `false`));
    let i = f.indexOf(t);
    (i >= 0 && f.splice(i, 1),
      (t.grow = 1),
      n || a.unpop?.(),
      t.parent ||
        ((t.pin = !1),
        t.item.own ? ((t.dying = !0), t.el.classList.add(`going`)) : ((t.hx = t.h0x), (t.hy = t.h0y)),
        ne(t),
        r && (A(), e.classList.remove(`chosen`))),
      re(),
      n || o(I()));
  }
  function N(e) {
    (e.el.classList.remove(`no`),
      e.el.offsetWidth,
      e.el.classList.add(`no`),
      (e.vx += (Math.random() - 0.5) * 6),
      a.limit?.(),
      c());
  }
  function P(e) {
    if (y && !e.dying) {
      if (e.item.id === `other` && !e.parent) {
        (e.el.classList.remove(`ask`),
          e.el.offsetWidth,
          e.el.classList.add(`ask`),
          a.pop?.(e.R * 0.8),
          s(f.find((e) => e.item.own)?.item.own || ``));
        return;
      }
      if (e.sel) {
        ie(e);
        return;
      }
      if (r) {
        if (e.parent) for (let t of [...f]) t.parent === e.parent && ie(t, !0);
        else for (let e of [...f]) e.parent || ie(e, !0);
      } else if (f.length >= i) {
        N(e);
        return;
      }
      M(e);
    }
  }
  function F(e) {
    let t = String(e || ``)
        .trim()
        .slice(0, 40),
      n = f.find((e) => e.item.own);
    if ((n && ie(n, !0), !t)) {
      o(I());
      return;
    }
    if (!r && f.length >= i) {
      let e = d.find((e) => e.item.id === `other` && !e.parent);
      e && N(e);
      return;
    }
    if (r) for (let e of [...f]) ie(e, !0);
    let a = d.find((e) => e.item.id === `other` && !e.parent) || { x: p / 2, y: m / 2 };
    x += 1;
    let s = T({ id: `own${x}`, own: t, label: { zh: t, en: t }, say: { zh: t, en: t } }, { x: a.x, y: a.y });
    ((s.h0x = s.hx = a.x + (p / 2 - a.x) * 0.35), (s.h0y = s.hy = a.y + (m / 2 - a.y) * 0.35), M(s));
  }
  function I() {
    let e = f.filter((e) => !e.dying);
    return (r ? [...e.filter((e) => !e.parent), ...e.filter((e) => e.parent)] : e).map((e) => ({
      ...e.item,
      parentId: e.parent ? e.parent.item.id : null,
    }));
  }
  function ae() {
    let t = e.clientWidth,
      n = e.clientHeight;
    if (!t || !n || (t === p && n === m)) return;
    let r = t / p,
      i = n / m;
    for (let e of d) ((e.x *= r), (e.y *= i), (e.hx *= r), (e.hy *= i), (e.h0x *= r), (e.h0y *= i));
    ((p = t), (m = n), re());
  }
  let L = `ResizeObserver` in window ? new ResizeObserver(ae) : null;
  return (
    L?.observe(e),
    E(),
    te(),
    (v = requestAnimationFrame(O)),
    {
      picked: I,
      addOwn: F,
      relayout: ae,
      destroy() {
        ((y = !1), cancelAnimationFrame(v), L?.disconnect());
        for (let e of d) e.el.remove();
        (w.remove(), (d.length = 0));
      },
    }
  );
}
var Gt = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3.2" width="6" height="11" rx="3"/><path d="M5.6 11.2a6.4 6.4 0 0 0 12.8 0M12 17.6v3.2"/></svg>`,
  Kt = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V6M6.5 11.5 12 6l5.5 5.5"/></svg>`,
  qt = {
    zh: {
      hold: `松手发送 · 上滑取消`,
      tap: `说完了，点一下发送`,
      click: `说完了，再点一下话筒`,
      pause: `说完了？点一下发送`,
      off: `松手，就不发了`,
      starting: `在听……`,
      thinking: `让我听清楚……`,
      short: `好像没说完？再按住说一次。`,
      silent: `好像没听见声音。再试一次？`,
      failed: `没听清。写下来也行。`,
      denied: `没有麦克风也没关系，写给我也一样。`,
      touch: `发消息或按住说话`,
      mouse: `发消息，或点一下话筒说话`,
      type: `写给她……`,
      send: `发送`,
      mic: `按住说话`,
      x: `不发了`,
    },
    en: {
      hold: `Let go to send · slide up to cancel`,
      tap: `Done? Tap to send`,
      click: `Done? Click the mic again`,
      pause: `Done? Tap to send`,
      off: `Let go, and it won't be sent`,
      starting: `Listening…`,
      thinking: `Making out what you said…`,
      short: `Not finished? Hold and say it again.`,
      silent: `I didn't hear anything. Try again?`,
      failed: `I couldn't make that out. Writing works too.`,
      denied: `No microphone? That's fine — write it to me instead.`,
      touch: `Type, or hold to talk`,
      mouse: `Type, or click the mic to talk`,
      type: `Write to her…`,
      send: `Send`,
      mic: `Hold to talk`,
      x: `Don't send`,
    },
  };
function Jt(e, { lang: t, onSend: n, onLive: r = () => {}, onMic: i = () => {}, context: a = null } = {}) {
  let o = qt[t === `en` ? `en` : `zh`],
    s = document.body.classList.contains(`touch`),
    c = document.createElement(`form`);
  ((c.className = `cl-bar`),
    c.setAttribute(`autocomplete`, `off`),
    (c.innerHTML = `
    <div class="cl-bar-box">
      <textarea rows="1" maxlength="400" enterkeyhint="send" placeholder="${s ? o.touch : o.mouse}"></textarea>
      <div class="cl-bar-live" aria-live="polite"><span class="cl-wave" aria-hidden="true">${`<i></i>`.repeat(9)}</span><b></b></div>
    </div>
    <button type="button" class="cl-x" aria-label="${o.x}" hidden><i aria-hidden="true"></i></button>
    <button type="button" class="cl-mic" aria-label="${o.mic}">${Gt}</button>
    <button type="submit" class="cl-send" aria-label="${o.send}" hidden>${Kt}</button>
    <div class="cl-bar-note" aria-live="polite"></div>`),
    e.appendChild(c));
  let l = c.querySelector(`textarea`),
    u = c.querySelector(`.cl-mic`),
    d = c.querySelector(`.cl-send`),
    f = c.querySelector(`.cl-x`),
    p = c.querySelector(`.cl-bar-live b`),
    m = c.querySelector(`.cl-bar-note`),
    h = null,
    g = 0,
    _ = !1,
    v = !1,
    y = () => {
      ((l.style.height = `auto`), (l.style.height = `${Math.min(l.scrollHeight, 112)}px`));
      let e = !!l.value.trim();
      ((d.hidden = !e && !u.hidden), (d.disabled = !e), u.classList.toggle(`away`, e), c.classList.toggle(`has`, e));
    },
    b = () => {
      let e = l.value.trim();
      !e || _ || v || ((l.value = ``), y(), n(e, `typed`));
    };
  (l.addEventListener(`input`, y),
    l.addEventListener(`keydown`, (e) => {
      e.key === `Enter` && !e.shiftKey && !e.isComposing && (e.preventDefault(), b());
    }),
    c.addEventListener(`submit`, (e) => {
      (e.preventDefault(), b());
    }));
  let x = (e, t = 2600) => {
      ((m.textContent = e),
        m.classList.add(`on`),
        clearTimeout(g),
        (g = setTimeout(() => m.classList.remove(`on`), t)));
    },
    S = (e) => {
      p.textContent = e;
    },
    C = c.querySelector(`.cl-wave`),
    w = () => {
      ((h = null), c.classList.remove(`rec`, `tap`, `off`, `thinking`, `paused`), (f.hidden = !0), i(!1));
    },
    T = He(C, {
      lang: t === `en` ? `en` : `zh`,
      context: () => (typeof a == `function` ? a() : null),
      onPartial: (e) => {
        h && r(e);
      },
      onText: (e) => {
        let t = h;
        (w(), t && !_ && n(e, `voice`));
      },
      onState: (e) => {
        h &&
          (e === `starting`
            ? S(o.starting)
            : e === `listening`
              ? (c.classList.remove(`paused`), S(h.mode === `hold` ? (h.off ? o.off : o.hold) : s ? o.tap : o.click))
              : e === `pause`
                ? h.mode !== `hold` && (c.classList.add(`paused`), S(o.pause))
                : e === `thinking`
                  ? (c.classList.add(`thinking`), S(o.thinking))
                  : e === `idle`
                    ? h.sending || (r(null), w())
                    : (e === `short` || e === `silent` || e === `failed` || e === `denied`) &&
                      (r(null),
                      w(),
                      x(o[e]),
                      e === `denied` && ((u.hidden = !0), y()),
                      (e === `failed` || e === `denied`) && !s && l.focus()));
      },
    });
  (T.supported || ((u.hidden = !0), (l.placeholder = o.type)), y());
  let E = (e, t = 0) => {
      h ||
        _ ||
        v ||
        ((h = { mode: e, y: t, t: performance.now(), off: !1, sending: !1 }),
        c.classList.add(`rec`),
        c.classList.toggle(`tap`, e !== `hold`),
        (f.hidden = e === `hold`),
        S(o.starting),
        i(!0),
        r(``),
        T.start());
    },
    ee = () => {
      h && ((h.sending = !0), c.classList.add(`thinking`), S(o.thinking), (f.hidden = !0), T.stop());
    },
    D = () => {
      h && (T.cancel(), r(null), w());
    };
  (u.addEventListener(
    `touchstart`,
    (e) => {
      if ((e.preventDefault(), W(), h && h.mode === `tap`)) {
        ee();
        return;
      }
      E(`hold`, e.touches[0].clientY);
    },
    { passive: !1 },
  ),
    u.addEventListener(
      `touchmove`,
      (e) => {
        if (!h || h.mode !== `hold`) return;
        let t = h.y - e.touches[0].clientY > 64;
        t !== h.off &&
          ((h.off = t), c.classList.toggle(`off`, t), S(t ? o.off : o.hold), navigator.vibrate?.(t ? 14 : 6));
      },
      { passive: !0 },
    ),
    u.addEventListener(
      `touchend`,
      (e) => {
        if ((e.preventDefault(), W(), h && h.mode === `hold`)) {
          if (h.off) {
            D();
            return;
          }
          if (performance.now() - h.t < 380) {
            ((h.mode = `tap`), c.classList.add(`tap`), (f.hidden = !1), S(o.tap));
            return;
          }
          ee();
        }
      },
      { passive: !1 },
    ),
    u.addEventListener(`touchcancel`, () => {
      h?.mode === `hold` && D();
    }),
    u.addEventListener(`click`, () => {
      h ? h.mode !== `hold` && ee() : E(`click`);
    }),
    f.addEventListener(`click`, D));
  let te = (e) => {
    e.key === `Escape` && h && (e.preventDefault(), D());
  };
  return (
    document.addEventListener(`keydown`, te),
    {
      el: c,
      focus(e = ``) {
        (h && D(), e && !l.value.trim() && (l.value = e), y(), l.focus());
        let t = l.value.length;
        l.setSelectionRange(t, t);
      },
      hint: x,
      cancel: D,
      busy(e) {
        ((v = !!e), c.classList.toggle(`busy`, v));
      },
      get listening() {
        return !!h;
      },
      destroy() {
        ((_ = !0), D(), clearTimeout(g), document.removeEventListener(`keydown`, te), c.remove());
      },
    }
  );
}
var J = (e, t) => ({ zh: e, en: t }),
  Yt = (e) => new Promise((t) => setTimeout(t, e)),
  Xt = () => {
    let e = new Date().getHours();
    return e >= 23 || e < 5;
  },
  Zt = () => {
    let e = new Date();
    return `${String(e.getHours()).padStart(2, `0`)}:${String(e.getMinutes()).padStart(2, `0`)}`;
  },
  Qt = J(
    `还有什么想跟我说的吗？什么都行，也可以直接进去。`,
    `Anything else you'd like to tell me? Anything at all — or you can go straight in.`,
  ),
  $t = J(`说说今天`, `About today`),
  en = J(`今天`, `Today `),
  tn = J(`先不说了`, `Not now`),
  nn = J(`好，那就先这样。我记下了。`, `All right, we'll leave it there. I've got it down.`),
  rn = J(`挑一张脸吧。广场上的人，会这样看见你。`, `Choose a face. This is how the plaza will see you.`),
  an = J(`她在写你的护照……`, `She is writing your passport…`),
  on = J(`写好了。`, `It's written.`),
  sn = J(
    `护照收好。拿你的一段日子，去换他们的一段。`,
    `Keep this safe. Take a stretch of your days, and trade it for a stretch of theirs.`,
  ),
  cn = J(`你现在……平常喜欢……`, `These days you're… and you like…`),
  ln = {
    now: {
      items: Nt,
      single: !0,
      k: `1 / 2`,
      q: J(`你现在……`, `These days, you're…`),
      hint: J(`你点的，后面每一位主人都会知道。`, `Whatever you tap, every host in there will know.`),
      own: J(`用你自己的话说：你现在……`, `In your own words — these days you're…`),
    },
    likes: {
      items: Pt,
      single: !1,
      k: `2 / 2`,
      q: J(`平常喜欢……`, `And you like…`),
      hint: J(`喜欢的都点上，最多五个。`, `Tap all you like — five at most.`),
      own: J(`用你自己的话，说一样你喜欢的`, `In your own words — something you like`),
    },
  },
  un = J(`最多五个。先放下一个？`, `Five at most. Let one go first?`),
  dn = {
    none: J(`不点也行。`, `That's fine too.`),
    unsaid: J(`不说也行。`, `No need to say.`),
    picks: J(`嗯，我都记下了。`, `Mm. I've got all that.`),
    open: J(`嗯，这一句我替你记下了。`, `Mm. I've written that one down for you.`),
    more: J(`好，我记下了。`, `All right. I've got it down.`),
  },
  fn = [
    /不想活(?![成得在出])|活不下去|活着(真|也|都)?没(有)?(意思|意义|盼头)|想死(?![你您他她它我])|寻死|自杀(?!式)|轻生|自尽|自残|(想|要|会|忍不住)(去)?伤害自己|了结(自己的?)?生命|了结自己(?!的)|结束(自己的?)?生命|死了算了|不如死了|割腕|跳楼(?!价|大?甩卖|大?促销)|上吊|再也不想醒|不想再醒/,
    /\bkill myself\b|\bsuicid(e|al)\b|\bend(ing)? my (own )?life\b|\b(to|gonna|wanna) end it all\b|\b(want|wanna|wanted) to die\b|\b(don'?t|do not|no longer) want to (live|be alive)\b|\bno reason to (live|go on)\b|\bbetter off (dead|without me)\b|\bself[- ]?harm|\b(want|wanted|going|gonna|trying|tried) to (hurt|harm) myself\b|\bharming myself\b/i,
  ],
  pn = (e) => fn.some((t) => t.test(String(e || ``))),
  mn = Object.freeze({
    line: J(
      `这件事我想认真对你说：请现在就去找一个你信得过的人。也可以打 12356 心理援助热线，会有人接。`,
      `I want to say this plainly: please reach out to someone you trust, now. In the US you can call or text 988; in the UK and Ireland, Samaritans are on 116 123.`,
    ),
    calls: J(
      [[`12356`, `12356`, `心理援助热线`]],
      [
        [`988`, `988`, `call or text · US`],
        [`116123`, `116 123`, `Samaritans · UK & Ireland`],
      ],
    ),
    listening: J(`嗯，我在听。`, `Mm. I'm listening.`),
    on: J(`先进去走走`, `Let me in for now`),
    page: J(`这一页先空着，等你回来填。`, `This page can wait for you.`),
    bye: J(
      `护照收好。那个号码是 12356，打过去，会有人接。`,
      `Keep this safe. That number again: 988 in the US, 116 123 in the UK and Ireland.`,
    ),
  }),
  hn = `lifeplaza.gate.sound`,
  gn = {
    on: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z"/><path class="w1" d="M15.5 9a4.2 4.2 0 0 1 0 6"/><path class="w2" d="M18.2 6.6a7.6 7.6 0 0 1 0 10.8"/></svg>`,
    off: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>`,
  },
  _n = { hello: 8, now: 30, likes: 50, take: 58, open: 70, more: 80, face: 90, passport: 100 };
function vn(
  e,
  { voice: t, me: n = {}, onStep: r = () => {}, onAvatar: i = () => {}, onStudio: a = () => {}, lives: o = {} } = {},
) {
  let s = be === `en` ? `en` : `zh`,
    c = s === `en`,
    l = (e) => e[s],
    u = matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    d = {
      step: `title`,
      progress: 0,
      now: [],
      likes: [],
      turns: [],
      her: ``,
      avatar: ``,
      care: !1,
      writing: null,
      reading: null,
      deep: ``,
      g: null,
      leaving: !1,
      ctl: null,
    },
    f = !0;
  try {
    f = localStorage.getItem(hn) !== `off`;
  } catch {}
  t?.setMuted?.(!f);
  let p = (e, ...t) => (f && typeof Ke[e] == `function` ? Ke[e](...t) : null),
    m = U(`引路人`, `The guide`),
    h = Se(`portraits/guide.jpg`);
  document.body.classList.add(`gating`, `calling`);
  let g = document.createElement(`div`);
  ((g.className = `gate`), e.appendChild(g));
  let _ = (e) => g.querySelector(e),
    v = (e) => {
      e.detail?.on && t?.stop?.();
    };
  window.addEventListener(`lp-mic`, v);
  let y = window.visualViewport,
    b = () => {
      let e = y ? Math.max(0, window.innerHeight - y.height - y.offsetTop) : 0;
      (g.style.setProperty(`--kb`, `${Math.round(e)}px`),
        g.style.setProperty(`--vh`, `${Math.round(y ? y.height : window.innerHeight)}px`),
        _(`.cl-panel`)?.classList.toggle(`kb`, e > 80),
        e > 80 && w());
    };
  (y?.addEventListener(`resize`, b), y?.addEventListener(`scroll`, b), window.addEventListener(`resize`, b));
  let x = (e, t) =>
      new Promise((n) => {
        (g.classList.remove(`in`),
          setTimeout(
            () => {
              ((g.className = `gate ${e}`),
                (g.innerHTML = t),
                b(),
                requestAnimationFrame(() => requestAnimationFrame(() => g.classList.add(`in`))),
                n());
            },
            g.innerHTML ? 320 : 0,
          ));
      }),
    S = () => _(`.cl-thread`),
    C = null,
    w = () =>
      requestAnimationFrame(() => {
        let e = S();
        e && e.scrollTo({ top: C ? Math.max(0, C.offsetTop - 10) : e.scrollHeight, behavior: u ? `auto` : `smooth` });
      });
  function T(e = !1) {
    let t = S(),
      n = t.lastElementChild?.classList.contains(`her`),
      r = document.createElement(`div`);
    return (
      (r.className = `cl-msg her${n ? ` cont` : ``}${e ? ` wait` : ``}`),
      (r.innerHTML = `${n ? `` : `<img class="cl-face" src="${h}" alt="" />`}<p class="cl-text"></p><i class="cl-dots" aria-hidden="true"><b></b><b></b><b></b></i>`),
      t.appendChild(r),
      w(),
      r
    );
  }
  function E(e) {
    let t = [],
      n = [],
      r = 0,
      i = !1,
      a = null,
      o = new Promise((e) => {
        a = e;
      }),
      s = () => {
        if (((r = 0), t.length >= n.length)) {
          i && a();
          return;
        }
        let o = n.length - t.length,
          l = u ? o : o > 40 ? 3 : o > 14 ? 2 : 1;
        for (let r = 0; r < l && t.length < n.length; r += 1) {
          let r = n[t.length];
          t.push(r);
          let i = document.createElement(`span`);
          ((i.className = `c`),
            (i.textContent = r),
            e.appendChild(i),
            !c && /[，、；：。？…—」]/.test(r) && e.appendChild(document.createTextNode(`​`)));
        }
        (w(), (r = setTimeout(s, c ? 17 : 40)));
      };
    return {
      set(i) {
        let a = [...String(i || ``)];
        (a.slice(0, t.length).join(``) !== t.join(``) && ((e.textContent = ``), (t = [])), (n = a), r || s());
      },
      end() {
        return ((i = !0), r || s(), o);
      },
      get text() {
        return n.join(``);
      },
    };
  }
  function ee() {
    let e = 0,
      n = ``,
      r = (r) => {
        if (!f) return;
        let i = n.slice(e),
          a = r ? i.length : Math.max(...[`。`, `？`, `…`, `.`, `?`].map((e) => i.lastIndexOf(e))) + 1;
        if (a <= 0) return;
        let o = i.slice(0, a).trim();
        ((e += a), o && t?.queue?.(m, o, { role: `guide` }));
      };
    return {
      push(e) {
        ((n = e), r(!1));
      },
      end(e) {
        ((n = e), r(!0));
      },
    };
  }
  async function D(e, { speak: n = !0 } = {}) {
    let r = T(),
      i = E(r.querySelector(`.cl-text`));
    return (n && f && t?.queue?.(m, e, { role: `guide` }), i.set(e), await i.end(), (d.her = e), r);
  }
  let te = null;
  function O(e, { live: t = !1 } = {}) {
    let n = S(),
      r = te;
    return (
      r ||
        ((r = document.createElement(`div`)),
        (r.className = `cl-msg you`),
        (r.innerHTML = `<p></p>`),
        n.appendChild(r)),
      (r.querySelector(`p`).textContent = e),
      r.classList.toggle(`live`, t),
      (te = t ? r : null),
      t || p(`send`),
      w(),
      r
    );
  }
  let k = () => {
    (te?.remove(), (te = null));
  };
  function A(e, t) {
    let n = document.createElement(`div`);
    return ((n.className = `cl-card ${e}`), (n.innerHTML = t), S().appendChild(n), w(), n);
  }
  let j = 0,
    ne = 0;
  function re(e) {
    let t = _(`.cl-arc-done`),
      n = _(`.cl-star`),
      r = _(`.cl-arc`);
    if (!t || !n || !r) return;
    t.style.strokeDashoffset = String(100 - e);
    let i = t.getTotalLength(),
      a = t.getPointAtLength((i * e) / 100),
      o = r.getBoundingClientRect(),
      s = _(`.cl-head`).getBoundingClientRect();
    n.style.transform = `translate(${(o.left - s.left + (a.x / 400) * o.width).toFixed(1)}px, ${(o.top - s.top + (a.y / 44) * o.height).toFixed(1)}px)`;
    let c = _(`.cl-meter b`);
    c && (c.textContent = String(Math.round(e)));
  }
  function M(e) {
    let t = Math.max(d.progress, _n[e] ?? 0);
    if (t === d.progress) return;
    ((d.progress = t), a({ lamps: t >= 90 ? 3 : t >= 50 ? 2 : +(t >= 8) }));
    let n = j,
      r = performance.now(),
      i = u ? 1 : 900;
    cancelAnimationFrame(ne);
    let o = (e) => {
      let a = Math.min(1, (e - r) / i),
        s = 1 - (1 - a) ** 3;
      ((j = n + (t - n) * s), re(j), a < 1 && (ne = requestAnimationFrame(o)));
    };
    ((ne = requestAnimationFrame(o)),
      _(`.cl-star`)?.classList.remove(`glint`),
      _(`.cl-star`)?.offsetWidth,
      _(`.cl-star`)?.classList.add(`glint`));
  }
  function ie() {
    let e = _(`.cl-sound`);
    e &&
      ((e.innerHTML = `${f ? gn.on : gn.off}<span>${f ? U(`关上声音`, `Sound off`) : U(`开启声音`, `Sound on`)}</span>`),
      e.setAttribute(`aria-pressed`, String(f)),
      e.classList.toggle(`off`, !f));
  }
  function N() {
    f = !f;
    try {
      localStorage.setItem(hn, f ? `on` : `off`);
    } catch {}
    (t?.setMuted?.(!f), f ? Be.chime() : (t?.stop?.(), d.song?.fade?.(0.4), d.pen?.stop?.()), ie());
  }
  function P(e) {
    let t = _(`.cl-chips`);
    t &&
      ((t.innerHTML = ``),
      e.forEach(({ label: e, act: n, main: r = !1 }, i) => {
        let a = document.createElement(`button`);
        ((a.type = `button`),
          (a.className = `cl-chip${r ? ` main` : ``}`),
          a.style.setProperty(`--i`, String(i)),
          (a.textContent = e),
          a.addEventListener(
            `click`,
            () => {
              d.leaving || (p(`tap`), navigator.vibrate?.(6), n());
            },
            { once: !0 },
          ),
          t.appendChild(a));
      }),
      t.classList.toggle(`on`, e.length > 0),
      w(),
      setTimeout(w, 400));
  }
  let F = null;
  function I() {
    F = Jt(_(`.cl-barslot`), {
      lang: s,
      context: () => ({ her: d.her, you: d.turns.at(-1)?.a || `` }),
      onMic: (e) => {
        (a({ air: e ? !0 : !d.care }), _(`.cl-panel`)?.classList.toggle(`talking`, e), e && t?.stop?.());
      },
      onLive: (e) => {
        e == null ? k() : e && O(e, { live: !0 });
      },
      onSend: (e, t) => ae(e, t),
    });
  }
  let ae = () => {};
  return new Promise((e) => {
    ((ae = (e, t) => {
      if (d.leaving) return;
      let n = String(e || ``).trim();
      if (n) {
        if (d.step === `own`) {
          (k(), de(n));
          return;
        }
        if (d.step === `care`) {
          De(n);
          return;
        }
        if (d.step === `hello` || d.step === `invite`) {
          me(n, `open`, t);
          return;
        }
        if (d.step === `asked`) {
          me(n, `more`, t);
          return;
        }
        k();
      }
    }),
      te());
    async function te() {
      r(`title`);
      let e = U(`人生广场`, `Life Plaza`);
      (await x(
        `title cl-title`,
        `
        <div class="gt">
          <div class="gt-top">
            <div class="gt-kicker">${U(`LIFE PLAZA`, `人 生 广 场`)}</div>
            <h1 class="gt-name">${[...e].map((e, t) => `<span style="--i:${t}">${e === ` ` ? `&nbsp;` : e}</span>`).join(``)}</h1>
            <p class="gt-tag">${U(`云上有一座广场。<br/>住在这里的人，都曾很久没被人看见。<br/>他们想听听你的日子。`, `There is a plaza above the clouds.<br/>Everyone who lives here went a long time unseen.<br/>They would like to hear about your days.`)}</p>
          </div>
          <div class="gt-bottom">
            <button class="gt-start" type="button">${U(`推门进去`, `Go in`)}</button>
            <div class="gt-lang" role="group" aria-label="${U(`语言`, `Language`)}"><button type="button" data-l="zh" class="${c ? `` : `on`}">中文</button><button type="button" data-l="en" class="${c ? `on` : ``}">English</button></div>
            <div class="gt-fine">${U(`这几位主人由 AI 扮演，说的事依据他们的生平、书信与著作；若有出入，以史料为准。`, `The hosts here are played by AI, from their own lives, letters and books. Where they differ from the record, the record is right.`)}</div>
          </div>
        </div>`,
      ),
        g.querySelectorAll(`.gt-lang button`).forEach((e) =>
          e.addEventListener(`click`, () => {
            e.dataset.l !== s && H(e.dataset.l);
          }),
        ),
        _(`.gt-start`).addEventListener(
          `click`,
          () => {
            (Be.chime(), W(), oe());
          },
          { once: !0 },
        ));
    }
    function L() {
      let e = n?.at && n?.life && typeof n.life == `object` && !n.life.care,
        t = Xt();
      return e
        ? [
            U(`你回来了。我还在这儿接电话。`, `You're back. I'm still here, taking calls.`),
            U(
              `规矩还是那一条：拿你的一段日子，换他们的一段。哪一段都行，平常的也算。再认识一下？`,
              `Same one rule: a stretch of your days for a stretch of theirs. Any stretch will do — ordinary ones too. Shall we start again?`,
            ),
          ]
        : [
            U(
              `${t ? `这么晚，你来了。` : `你来了。`}我以前在电台做了二十年夜间节目，现在还是接电话，只是换了个地方。`,
              `${t ? `There you are — this late.` : `There you are.`} I did late-night radio for twenty years. I still take calls — just from here now.`,
            ),
            U(
              `这儿的规矩只有一条：拿你的一段日子，换他们的一段。哪一段都行，平常的也算。先认识一下？`,
              `There's one rule here: a stretch of your days for a stretch of theirs. Any stretch will do — ordinary ones too. Shall we get acquainted?`,
            ),
          ];
    }
    async function oe() {
      ((d.step = `hello`), r(`premise`));
      let e = L();
      (t?.prefetch?.(e, `guide`),
        await x(
          `cl`,
          `
        <div class="cl-panel" role="dialog" aria-label="${U(`和引路人通话`, `On the line with the guide`)}">
          <div class="cl-head">
            <svg class="cl-arc" viewBox="0 0 400 44" preserveAspectRatio="none" aria-hidden="true"><path class="cl-arc-track" d="M8 7 Q200 52 392 7"/><path class="cl-arc-done" d="M8 7 Q200 52 392 7" pathLength="100"/></svg>
            <i class="cl-star" aria-hidden="true"></i>
            <div class="cl-row">
              <button type="button" class="cl-in">${U(`直接进去`, `Straight in`)}<i aria-hidden="true"></i></button>
              <div class="cl-meter">${U(`护照 · 写到 <b>0</b>%`, `Passport · <b>0</b>%`)}</div>
              <button type="button" class="cl-sound"></button>
            </div>
          </div>
          <div class="cl-body">
            <div class="cl-thread" role="log" aria-live="polite"><div class="cl-hello"><img src="${h}" alt="" /><b>${m}</b><span>${U(`夜间节目 · 线路接通`, `The late show · you're on the line`)} · ${Zt()}</span></div></div>
            <div class="cl-foot">
              <div class="cl-chips"></div>
              <div class="cl-barslot"></div>
              <div class="cl-fine">${U(`她由 AI 扮演`, `She is played by AI`)}</div>
            </div>
          </div>
          <section class="cl-page" hidden></section>
        </div>`,
        ),
        ie(),
        re(0),
        _(`.cl-sound`).addEventListener(`click`, N),
        _(`.cl-in`).addEventListener(`click`, () => {
          (p(`tap`), we());
        }),
        I(),
        `ResizeObserver` in window && new ResizeObserver(() => re(j)).observe(_(`.cl-head`)),
        await Yt(u ? 200 : 1100),
        p(`tuneIn`),
        setTimeout(() => a({ air: !0 }), 900),
        await Yt(u ? 100 : 700),
        f && t?.say?.(m, e, { role: `guide` }));
      for (let [t, n] of e.entries()) {
        if (d.step !== `hello`) return;
        (await D(n, { speak: !1 }), t < e.length - 1 && (await Yt(260)));
      }
      d.step === `hello` &&
        (M(`hello`),
        P([
          {
            label: U(`好`, `Sure`),
            main: !0,
            act: () => {
              (O(U(`好`, `Sure`)), z());
            },
          },
          { label: U(`直接进去`, `Let me in`), act: we },
        ]));
    }
    let se = null,
      R = null,
      ce = ``;
    async function z() {
      (P([]), (await le(`now`)) && (M(`now`), (await le(`likes`)) && (M(`likes`), B(), await Yt(u ? 50 : 420), fe())));
    }
    function le(e) {
      let t = ln[e];
      d.step = e;
      let n = _(`.cl-panel`),
        i = _(`.cl-page`),
        a = t.single ? 2 : 5;
      return (
        (i.innerHTML = `
        <header class="cl-page-head"><span>${t.k}</span><h2>${Ge(l(t.q))}</h2></header>
        <div class="cl-field"></div>
        <footer class="cl-page-foot">
          <div class="cl-segs" aria-hidden="true">${`<i></i>`.repeat(a)}</div>
          <p class="cl-page-hint">${Ge(l(t.hint))}</p>
          <div class="cl-page-btns"><button type="button" class="cl-skip">${U(`跳过`, `Skip`)}</button><button type="button" class="cl-ok" disabled>${U(`好了`, `Done`)}</button></div>
          <div class="cl-ownslot"></div>
        </footer>`),
        (i.hidden = !1),
        n.classList.add(`tall`, `paging`),
        r(`listening`),
        new Promise((n) => {
          R = n;
          let a = i.querySelector(`.cl-field`),
            o = i.querySelector(`.cl-ok`),
            c = i.querySelector(`.cl-page-hint`),
            f = (e) => {
              (i.querySelectorAll(`.cl-segs i`).forEach((t, n) => t.classList.toggle(`on`, n < e.length)),
                (o.disabled = !e.length),
                (c.textContent = l(t.hint)),
                e.length && r(`listening`));
            };
          setTimeout(
            () => {
              d.step === e &&
                (se = Wt(a, {
                  items: t.items,
                  lang: s,
                  single: t.single,
                  max: 5,
                  sfx: {
                    pop: (e) => p(`pop`, e),
                    unpop: () => p(`unpop`),
                    birth: (e) => p(`birth`, e),
                    limit: () => p(`limit`),
                  },
                  onChange: f,
                  onOther: (t) => ue(e, t),
                  onLimit: () => {
                    ((c.textContent = l(un)), navigator.vibrate?.([10, 40, 10]));
                  },
                }));
            },
            u ? 0 : 380,
          );
          let m = (t) => {
            if (d.step !== e && d.step !== `own`) return;
            V();
            let r = t.map((e) => ({ ...e }));
            (e === `now` ? (d.now = r) : (d.likes = r), se?.destroy(), (se = null), (R = null), n(!0));
          };
          (o.addEventListener(`click`, () => {
            (p(`tap`), m(se?.picked() || []));
          }),
            i.querySelector(`.cl-skip`).addEventListener(`click`, () => {
              (p(`tap`), m([]));
            }));
        })
      );
    }
    function B() {
      let e = _(`.cl-panel`),
        t = _(`.cl-page`);
      (e?.classList.remove(`tall`, `paging`),
        t &&
          (t.classList.add(`out`),
          setTimeout(() => {
            ((t.hidden = !0), t.classList.remove(`out`), (t.innerHTML = ``));
          }, 420)));
    }
    function ue(e, t) {
      ((d.step = `own`), (ce = e));
      let n = _(`.cl-ownslot`);
      n &&
        F &&
        ((n.innerHTML = `<p class="cl-own-q">${Ge(l(ln[e].own))}</p>`),
        n.appendChild(F.el),
        _(`.cl-page`)?.classList.add(`owning`),
        F.focus(t));
    }
    function de(e) {
      (se?.addOwn(e), V());
    }
    function V() {
      (d.step === `own` && (d.step = ce), _(`.cl-page`)?.classList.remove(`owning`));
      let e = _(`.cl-barslot`);
      (F && e && F.el.parentElement !== e && e.appendChild(F.el),
        _(`.cl-ownslot`) && (_(`.cl-ownslot`).innerHTML = ``));
    }
    async function fe() {
      d.step = `take`;
      let e = Lt({ now: d.now, likes: d.likes }, s);
      if (e) {
        if ((O(e), d.turns.push({ q: l(cn), a: e, k: `picks` }), pn(e))) {
          Ee();
          return;
        }
        let t = await pe();
        if (d.leaving || d.step !== `take`) return;
        if (t.care) {
          Ee();
          return;
        }
      } else (await Yt(300), await D(l(d.now.some((e) => e.id === `unsaid`) ? dn.unsaid : dn.none)));
      d.leaving ||
        d.step !== `take` ||
        (M(`take`),
        await Yt(320),
        (d.step = `invite`),
        await D(l(Qt)),
        !(d.leaving || d.step !== `invite`) &&
          P([
            { label: l($t), act: () => F?.focus(l(en)) },
            { label: l(tn), act: he },
          ]));
    }
    async function pe() {
      let e = T(!0),
        t = E(e.querySelector(`.cl-text`)),
        n = ee();
      (F?.busy(!0), (d.ctl = new AbortController()));
      let r = d.turns.at(-1)?.k || `open`,
        i = ``,
        a = await Promise.race([
          Ie.guideCall(
            { lang: s, picks: _e(), turns: d.turns },
            (r) => {
              (i || e.classList.remove(`wait`), (i += r), t.set(i), n.push(i));
            },
            d.ctl.signal,
          ),
          Yt(26e3).then(() => null),
        ]);
      if (((d.ctl = null), d.leaving || d.step === `passport`))
        return (e.remove(), F?.busy(!1), { line: ``, ask: !1, done: !1, care: !1, chips: [] });
      let o = a || { line: l(dn[r] || dn.open), ask: !1, done: r !== `picks`, care: !1, chips: [] };
      return o.care
        ? (e.remove(), F?.busy(!1), o)
        : (e.classList.remove(`wait`), t.set(o.line), n.end(o.line), await t.end(), (d.her = o.line), F?.busy(!1), o);
    }
    async function me(e, t, n = `typed`) {
      if ((P([]), O(e), d.turns.push({ q: d.her, a: e, k: t }), pn(e))) {
        Ee();
        return;
      }
      ((d.step = `thinking`), r(`listening`));
      let i = await pe();
      if (!(d.leaving || d.step !== `thinking`)) {
        if (i.care) {
          Ee();
          return;
        }
        if ((M(t), i.ask && t === `open`)) {
          ((d.step = `asked`),
            P([...i.chips.map((e) => ({ label: e, act: () => me(e, `more`, `pick`) })), { label: l(tn), act: he }]),
            n === `voice` && F?.hint(U(`想说就按住话筒`, `Hold the mic to answer`), 2200));
          return;
        }
        (await Yt(u ? 100 : 650), ge());
      }
    }
    async function he() {
      (P([]), O(l(tn)), (d.step = `closing`), await Yt(250), await D(l(nn)), await Yt(u ? 100 : 400), ge());
    }
    async function ge() {
      if (
        d.leaving ||
        d.step === `faces` ||
        d.step === `passport` ||
        ((d.step = `faces`),
        P([]),
        F?.cancel(),
        _(`.cl-panel`)?.classList.add(`done`),
        r(`thinking`),
        xe(),
        await D(
          d.care
            ? U(
                `挑一张脸吧。护照我先给你写上，空着的地方，以后再填。`,
                `Choose a face. I'll write your passport now; the empty parts can wait.`,
              )
            : l(rn),
        ),
        d.step !== `faces`)
      )
        return;
      let e = A(
        `cl-faces`,
        `
        <div class="cl-faces-grid">${ye.map((e, t) => `<button type="button" data-id="${e}" style="--i:${t}" aria-label="${U(`这一张`, `This one`)}"><img src="${Se(`portraits/${e}.jpg`)}" alt="" /></button>`).join(``)}</div>
        <div class="cl-writing" aria-live="polite"><i aria-hidden="true"></i><span>${l(an)}</span></div>`,
      );
      ((d.pen = p(`pen`)),
        d.writing.then(() => {
          let t = e.querySelector(`.cl-writing`);
          (t && (t.classList.add(`done`), (t.querySelector(`span`).textContent = l(on))), d.pen?.stop?.());
        }),
        e.querySelectorAll(`.cl-faces-grid button`).forEach((t) =>
          t.addEventListener(`click`, async () => {
            d.step === `faces` &&
              ((d.step = `picked`),
              e.querySelectorAll(`.cl-faces-grid button`).forEach((e) => e.classList.toggle(`chosen`, e === t)),
              e.classList.add(`picked`),
              (d.avatar = t.dataset.id),
              navigator.vibrate?.(12),
              Be.chime(),
              i(d.avatar),
              M(`face`),
              await Yt(u ? 100 : 700),
              Ce());
          }),
        ));
    }
    function _e() {
      let e = (e) => e.own || e.label[s];
      return {
        now: d.now.map(e),
        likes: d.likes.map(e),
        own: [...d.now, ...d.likes]
          .filter((e) => e.own)
          .map((e) => e.own)
          .join(`；`),
      };
    }
    let ve = () =>
      d.now.some((e) => e.id !== `unsaid`) ||
      d.likes.length > 0 ||
      d.turns.some((e) => e.k === `open` || e.k === `more`);
    function be(e = d.g) {
      let t = d.turns.find((e) => e.k === `open`),
        n = d.turns.find((e) => e.k === `more`),
        r = (d.care ? `` : e?.who) || Rt({ now: d.now }, s),
        i = [
          ...d.now.filter((e, t) => e.own || t === d.now.length - 1),
          ...d.likes.filter((e) => !d.likes.some((t) => t.parentId === e.id)),
        ]
          .map((e) => e.own || e.label[s])
          .filter((e) => e && !pn(e));
      return {
        domain: Lt({ now: d.now, likes: [] }, s)
          .replace(/[。.]$/, ``)
          .slice(0, 24),
        role: r,
        who: r,
        field: ``,
        story: t?.a || ``,
        ask: n?.q || ``,
        answer: n?.a || ``,
        turns: d.turns.map((e) => ({ ...e })),
        details: !d.care && e?.details?.length ? e.details : i.slice(0, 8),
        wish: ``,
        mood: ``,
        ...(e ? { title: e.title || ``, line: e.line || ``, unseen: ``, keywords: e.keywords || [] } : {}),
        picks: _e(),
        portrait: d.care ? `` : d.deep || e?.portrait || ``,
        ...(d.care ? { care: !0 } : {}),
      };
    }
    function xe() {
      if (d.writing) return;
      if (d.care) {
        d.writing = Promise.resolve(null);
        return;
      }
      let e = be(null),
        t = Ie.guidePortrait({ lang: s, life: e, avatar: d.avatar }).catch(() => null);
      (ve() &&
        ((d.reading = Ie.guideReading({ lang: s, life: e })
          .then((e) => e?.portrait || ``)
          .catch(() => ``)),
        d.reading.then((e) => {
          e && !d.leaving && (d.deep = e);
        })),
        (d.writing = (async () => {
          let n = await Promise.race([t, Yt(12e3).then(() => `slow`)]);
          if (n && n !== `slow` && !n.failed) return n;
          let r = Ie.guide({ lang: s, identity: e.who, note: e.story.slice(0, 200), life: e }).catch(() => null);
          return (
            (await Promise.race([
              r.then((e) => e || new Promise(() => {})),
              n === `slow` ? t.then((e) => (e && !e.failed ? e : new Promise(() => {}))) : new Promise(() => {}),
              Yt(1e4).then(() => null),
            ])) || (n && n !== `slow` ? n : null)
          );
        })().then((e) => ((d.g = e), e))));
    }
    async function Ce() {
      if (d.leaving || d.step === `passport`) return;
      ((d.step = `passport`), P([]), F?.cancel(), _(`.cl-panel`)?.classList.add(`done`, `tall`), xe());
      let e = A(
          `cl-draft`,
          `<img src="${Se(`portraits/${d.avatar || `v2`}.jpg`)}" alt="" /><div><i></i><i></i><i></i><span>${l(an)}</span></div>`,
        ),
        n = await d.writing;
      if ((d.pen?.stop?.(), d.leaving)) return;
      let i = Object.values(o).filter((e) => e.open),
        a = !ve(),
        c = !d.care && o[n?.suggest]?.open ? n.suggest : ``,
        h = c || (o.melies?.open ? `melies` : i[0]?.id || `melies`),
        g = d.care
          ? {
              title: U(`远道而来的人`, `A traveller from afar`),
              line: l(mn.page),
              keywords: [],
              unseen: ``,
              suggest: h,
              why: ``,
              at: Date.now(),
            }
          : {
              title:
                n?.title ||
                n?.who ||
                (a
                  ? U(`来随便看看的人`, `Someone just looking around`)
                  : Rt({ now: d.now }, s) || U(`远道而来的人`, `A traveller from afar`)),
              line: n?.line || U(`你没多说，我也就不多写。`, `You didn't say much, so I haven't written much.`),
              keywords: n?.keywords || [],
              unseen: ``,
              suggest: h,
              why: (c && n?.why) || ``,
              at: Date.now(),
            };
      d.passport = g;
      let v = be(d.care ? null : n),
        y = v.who;
      e.remove();
      let b = d.care ? l(mn.bye) : l(sn),
        x = D(b, { speak: !1 });
      ((C = S().lastElementChild), d.care && A(`cl-help`, Te()));
      let T = A(
        `cl-pass`,
        Ue({
          passport: g,
          me: { avatar: d.avatar || `v2`, identity: y, life: v },
          lives: o,
          seen: {},
          actions: `<div class="pp-actions"><button type="button" class="pp-go">${U(`收好，进去`, `Keep it — let's go in`)}</button></div>`,
        }),
      );
      (M(`passport`),
        r(`passport`, d.care ? { suggest: h } : { ...n, suggest: h }),
        setTimeout(
          () => {
            (T.querySelector(`.pp`)?.classList.add(`stamped`),
              d.care || (p(`stamp`), navigator.vibrate?.([12, 40, 18])));
          },
          u ? 50 : 700,
        ),
        !d.care && f && (d.song = Ke.song()),
        setTimeout(() => d.song?.fade?.(3), 6e3),
        T.querySelector(`.pp-go`).addEventListener(`click`, () => Oe(), { once: !0 }),
        f && t?.say?.(m, [b, g.why].filter(Boolean), { role: `guide` }),
        await x,
        w());
    }
    function we() {
      if (!d.leaving) {
        if (d.step === `passport`) {
          Oe();
          return;
        }
        if (d.step !== `title`) {
          if ((d.ctl?.abort(), F?.cancel(), k(), R)) {
            let e = se?.picked() || [];
            (d.step === `now` || ce === `now` ? (d.now = e) : (d.step === `likes` || ce === `likes`) && (d.likes = e),
              se?.destroy(),
              (se = null),
              (R = null),
              V(),
              B());
          }
          if (
            (d.avatar || ((d.avatar = ye[(Math.random() * ye.length) | 0]), i(d.avatar)),
            d.now.length || d.likes.length)
          ) {
            let e = Lt({ now: d.now, likes: d.likes }, s);
            e && !d.turns.some((e) => e.k === `picks`) && d.turns.unshift({ q: l(cn), a: e, k: `picks` });
          }
          Ce();
        }
      }
    }
    let Te = () =>
      `<div class="cl-calls">${mn.calls[s].map(([e, t, n]) => `<a href="tel:${e}"><b>${Ge(t)}</b><span>${Ge(n)}</span></a>`).join(``)}</div>`;
    async function Ee() {
      d.care ||
        ((d.care = !0),
        (d.step = `care`),
        d.ctl?.abort(),
        P([]),
        t?.stop?.(),
        a({ air: !1 }),
        r(`listening`),
        _(`.cl-panel`)?.classList.add(`caring`),
        R && (se?.destroy(), (se = null), (R = null), V(), B()),
        f && t?.say?.(m, [l(mn.line)], { role: `guide` }),
        await D(l(mn.line), { speak: !1 }),
        A(`cl-help`, Te()),
        P([{ label: l(mn.on), act: () => ge() }]));
    }
    async function De(e) {
      (P([]), O(e), d.turns.push({ q: d.her, a: e, k: `care` }));
      let n = T(!0),
        r = E(n.querySelector(`.cl-text`));
      F?.busy(!0);
      let i = ``,
        a =
          (
            await Promise.race([
              Ie.guideTalk({ lang: s, life: { ...be(null), care: !0, turns: d.turns.slice(-5) } }, (e) => {
                (i || n.classList.remove(`wait`), (i += e), r.set(i));
              }),
              Yt(25e3).then(() => null),
            ])
          )?.reply || l(mn.listening);
      (n.classList.remove(`wait`),
        r.set(a),
        f && t?.queue?.(m, a, { role: `guide` }),
        await r.end(),
        (d.her = a),
        F?.busy(!1),
        d.step === `care` && P([{ label: l(mn.on), act: () => ge() }]));
    }
    function Oe() {
      if (d.leaving) return;
      ((d.leaving = !0),
        d.ctl?.abort(),
        F?.destroy(),
        se?.destroy(),
        d.song?.fade?.(0.8),
        d.pen?.stop?.(),
        cancelAnimationFrame(ne),
        a({ air: !1 }),
        t?.stop?.(),
        window.removeEventListener(`lp-mic`, v),
        y?.removeEventListener(`resize`, b),
        y?.removeEventListener(`scroll`, b),
        window.removeEventListener(`resize`, b),
        _(`.cl-panel`)?.classList.add(`leaving`),
        document.body.classList.remove(`gating`, `calling`),
        setTimeout(() => g.classList.remove(`in`), u ? 0 : 260),
        setTimeout(() => g.remove(), 900));
      let n = be(d.care ? null : d.g),
        r = d.passport,
        i =
          !d.care && d.reading && !d.deep
            ? d.reading.then((e) => (e ? { ...n, portrait: e } : null)).catch(() => null)
            : null;
      e({
        avatar: d.avatar || `v2`,
        identity: n.who || ``,
        note: (n.story || ``).slice(0, 200),
        life: n,
        suggest: r?.suggest || `melies`,
        why: r?.why || ``,
        passport: r,
        go: !1,
        gate: 4,
        later: i,
      });
    }
  });
}
var yn = new B();
function bn(e, t, n, r, i, a) {
  let o = (2 * Math.PI * i) / 4,
    s = Math.max(a - 2 * i, 0),
    c = Math.PI / 4;
  (yn.copy(t), (yn[r] = 0), yn.normalize());
  let l = (0.5 * o) / (o + s),
    u = 1 - yn.angleTo(e) / c;
  return Math.sign(yn[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u);
}
var Y = class e extends g {
    constructor(e = 1, t = 1, n = 1, r = 2, i = 0.1) {
      let a = r * 2 + 1;
      if (
        ((i = Math.min(e / 2, t / 2, n / 2, i)),
        super(1, 1, 1, a, a, a),
        (this.type = `RoundedBoxGeometry`),
        (this.parameters = { width: e, height: t, depth: n, segments: r, radius: i }),
        a === 1)
      )
        return;
      let o = this.toNonIndexed();
      ((this.index = null),
        (this.attributes.position = o.attributes.position),
        (this.attributes.normal = o.attributes.normal),
        (this.attributes.uv = o.attributes.uv));
      let s = new B(),
        c = new B(),
        l = new B(e, t, n).divideScalar(2).subScalar(i),
        u = this.attributes.position.array,
        d = this.attributes.normal.array,
        f = this.attributes.uv.array,
        p = u.length / 6,
        m = new B(),
        h = 0.5 / a;
      for (let r = 0, a = 0; r < u.length; r += 3, a += 2)
        switch (
          (s.fromArray(u, r),
          c.copy(s),
          (c.x -= Math.sign(c.x) * h),
          (c.y -= Math.sign(c.y) * h),
          (c.z -= Math.sign(c.z) * h),
          c.normalize(),
          (u[r + 0] = l.x * Math.sign(s.x) + c.x * i),
          (u[r + 1] = l.y * Math.sign(s.y) + c.y * i),
          (u[r + 2] = l.z * Math.sign(s.z) + c.z * i),
          (d[r + 0] = c.x),
          (d[r + 1] = c.y),
          (d[r + 2] = c.z),
          Math.floor(r / p))
        ) {
          case 0:
            (m.set(1, 0, 0), (f[a + 0] = bn(m, c, `z`, `y`, i, n)), (f[a + 1] = 1 - bn(m, c, `y`, `z`, i, t)));
            break;
          case 1:
            (m.set(-1, 0, 0), (f[a + 0] = 1 - bn(m, c, `z`, `y`, i, n)), (f[a + 1] = 1 - bn(m, c, `y`, `z`, i, t)));
            break;
          case 2:
            (m.set(0, 1, 0), (f[a + 0] = 1 - bn(m, c, `x`, `z`, i, e)), (f[a + 1] = bn(m, c, `z`, `x`, i, n)));
            break;
          case 3:
            (m.set(0, -1, 0), (f[a + 0] = 1 - bn(m, c, `x`, `z`, i, e)), (f[a + 1] = 1 - bn(m, c, `z`, `x`, i, n)));
            break;
          case 4:
            (m.set(0, 0, 1), (f[a + 0] = 1 - bn(m, c, `x`, `y`, i, e)), (f[a + 1] = 1 - bn(m, c, `y`, `x`, i, t)));
            break;
          case 5:
            (m.set(0, 0, -1), (f[a + 0] = bn(m, c, `x`, `y`, i, e)), (f[a + 1] = 1 - bn(m, c, `y`, `x`, i, t)));
        }
    }
    static fromJSON(t) {
      return new e(t.width, t.height, t.depth, t.segments, t.radius);
    }
  },
  xn = 8,
  Sn = 1024;
function Cn(e) {
  return e.metalness > 0.3 ? `metal` : e.roughness < 0.52 ? `gloss` : e.roughness < 0.78 ? `satin` : `matte`;
}
var wn = (e) => e.reduce((e, t) => e + t, 0) / e.length;
function Tn(e, n, r) {
  let i = new F();
  for (let a of [`position`, `normal`, `uv`]) {
    let o = e.getAttribute(a);
    i.setAttribute(a, new t(o.array.slice(n * o.itemSize, (n + r) * o.itemSize), o.itemSize));
  }
  return i;
}
function En(e) {
  let t = e.clone();
  for (let e of [`position`, `normal`, `uv`]) {
    let n = t.getAttribute(e),
      r = n.itemSize,
      i = n.array;
    for (let e = 0; e < n.count; e += 3)
      for (let t = 0; t < r; t += 1) {
        let n = i[(e + 1) * r + t];
        ((i[(e + 1) * r + t] = i[(e + 2) * r + t]), (i[(e + 2) * r + t] = n));
      }
  }
  let n = t.getAttribute(`normal`).array;
  for (let e = 0; e < n.length; e += 1) n[e] = -n[e];
  return t;
}
function Dn(e, n) {
  let r = e.getAttribute(`position`).count,
    i = new Float32Array(r * 3);
  for (let e = 0; e < r; e += 1) ((i[e * 3] = n.r), (i[e * 3 + 1] = n.g), (i[e * 3 + 2] = n.b));
  e.setAttribute(`color`, new t(i, 3));
}
function On(e, t) {
  let n = e.getAttribute(`uv`);
  for (let e = 0; e < n.count; e += 1) {
    let [r, i] = t(n.getX(e), n.getY(e));
    n.setXY(e, r, i);
  }
}
function kn(t, { glow: n = [], keep: r = [] } = {}) {
  t.updateMatrixWorld(!0);
  let i = t.matrixWorld.clone().invert(),
    a = [];
  t.traverse((e) => {
    e.isMesh && a.push(e);
  });
  let o = [],
    s = new P(),
    c = new w();
  for (let e of a) {
    let t = e.geometry.index ? e.geometry.toNonIndexed() : e.geometry,
      n = Array.isArray(e.material) ? e.material : [e.material],
      r =
        Array.isArray(e.material) && t.groups.length
          ? t.groups
          : [{ start: 0, count: t.getAttribute(`position`).count, materialIndex: 0 }];
    for (let a = 0; a < (e.isInstancedMesh ? e.count : 1); a += 1) {
      let l = new P().multiplyMatrices(i, e.matrixWorld);
      e.isInstancedMesh && (e.getMatrixAt(a, s), l.multiply(s));
      for (let i of r) {
        let r = n[i.materialIndex],
          s = Tn(t, i.start, i.count);
        s.applyMatrix4(l);
        let u = r.color.clone();
        (e.isInstancedMesh && e.instanceColor && (e.getColorAt(a, c), u.multiply(c)),
          o.push({ geo: s, material: r, color: u }),
          r.side === 2 && o.push({ geo: En(s), material: r, color: u }));
      }
    }
    t !== e.geometry && t.dispose();
  }
  let u = (e) => !n.includes(e.material) && !r.includes(e.material),
    d = [...new Set(o.filter((e) => u(e) && e.material.map).map((e) => e.material.map))],
    f = new Map(),
    p = xn,
    m = xn,
    h = 0,
    g = (e, t, n) => {
      (p + t + xn > Sn && ((p = xn), (m += h + 16), (h = 0)),
        f.set(e, { x: p, y: m, w: t, h: n }),
        (p += t + 16),
        (h = Math.max(h, n)));
    };
  g(`white`, 64, 64);
  for (let e of d) g(e, e.image.width, e.image.height);
  let _ = V.ceilPowerOfTwo(m + h + xn),
    y = document.createElement(`canvas`);
  ((y.width = Sn), (y.height = _));
  let b = y.getContext(`2d`),
    S = f.get(`white`);
  ((b.fillStyle = `#ffffff`), b.fillRect(S.x - xn, S.y - xn, S.w + 16, S.h + 16));
  for (let e of d) {
    let t = f.get(e);
    (b.drawImage(e.image, t.x - xn, t.y - xn, t.w + 16, t.h + 16), b.drawImage(e.image, t.x, t.y, t.w, t.h));
  }
  let C = new l(y);
  ((C.colorSpace = v), (C.anisotropy = 4));
  let T = (e) => (t, n) => [(e.x + t * e.w) / Sn, 1 - (e.y + (1 - n) * e.h) / _],
    E = [(S.x + S.w / 2) / Sn, 1 - (S.y + S.h / 2) / _],
    ee = [],
    D = new Map(),
    te = new Map(),
    A = [];
  for (let e of o) {
    let t = n.indexOf(e.material);
    if (t >= 0) {
      (On(e.geo, () => [(t + 0.5) / n.length, 0.5]), Dn(e.geo, e.color), A.push(e.geo));
      continue;
    }
    if (r.includes(e.material)) {
      (te.has(e.material) || te.set(e.material, []), te.get(e.material).push(e.geo));
      continue;
    }
    (On(e.geo, e.material.map ? T(f.get(e.material.map)) : () => E), Dn(e.geo, e.color));
    let i = Cn(e.material);
    (D.has(i) || D.set(i, []), D.get(i).push(e));
  }
  for (let [e, n] of D) {
    let r = [...new Set(n.map((e) => e.material))],
      i = new L({
        map: C,
        vertexColors: !0,
        roughness: wn(r.map((e) => e.roughness)),
        metalness: wn(r.map((e) => e.metalness)),
      }),
      a = new k(xe(n.map((e) => e.geo)), i);
    ((a.name = `${t.name}-${e}`), (a.castShadow = !0), (a.receiveShadow = !0), ee.push(a));
  }
  for (let [e, n] of te) {
    let r = new k(xe(n), e);
    ((r.name = `${t.name}-${e.name || `kept`}`), ee.push(r));
  }
  let j = () => {};
  if (A.length) {
    let r = new Float32Array(n.length * 4),
      i = new M(r, n.length, 1, e, x);
    ((i.magFilter = O),
      (i.minFilter = O),
      (i.generateMipmaps = !1),
      (j = (e, t) => {
        let a = n[e].emissive;
        ((r[e * 4] = a.r * t),
          (r[e * 4 + 1] = a.g * t),
          (r[e * 4 + 2] = a.b * t),
          (r[e * 4 + 3] = 1),
          (i.needsUpdate = !0));
      }),
      n.forEach((e, t) => j(t, e.emissiveIntensity)));
    let a = new L({
        vertexColors: !0,
        roughness: wn(n.map((e) => e.roughness)),
        metalness: 0,
        emissive: 16777215,
        emissiveMap: i,
      }),
      o = new k(xe(A), a);
    ((o.name = `${t.name}-glow`), ee.push(o));
  }
  for (let e of a) (e.removeFromParent(), e.geometry.dispose());
  for (let e of new Set(o.filter(u).map((e) => e.material))) e.dispose();
  for (let e of n) e.dispose();
  for (let e of d) e.dispose();
  for (let e of [...t.children]) e.isGroup && !e.children.length && e.removeFromParent();
  return (t.add(...ee), { glow: j, meshes: ee });
}
var An = (e) => new w(e),
  jn = (e, t = 0.7, n = {}) => new L({ color: An(e), roughness: t, metalness: 0, ...n });
function Mn(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`), e, t));
  let i = new l(r);
  return ((i.colorSpace = v), (i.anisotropy = 4), i);
}
function Nn(e = `#c8925a`) {
  return Mn(256, 256, (t, n, r) => {
    ((t.fillStyle = e), t.fillRect(0, 0, n, r));
    for (let e = 0; e < 6; e += 1) {
      let i = (e * n) / 6;
      ((t.fillStyle = `rgba(${e % 2 ? `120,78,44` : `236,196,140`},0.10)`),
        t.fillRect(i, 0, n / 6, r),
        (t.fillStyle = `rgba(90,58,36,0.38)`),
        t.fillRect(i, 0, 2, r));
      for (let a = 0; a < 9; a += 1) {
        ((t.strokeStyle = `rgba(110,70,40,${0.05 + ((e * 7 + a * 3) % 5) * 0.012})`), (t.lineWidth = 1), t.beginPath());
        let o = i + 6 + ((a * 37 + e * 11) % (n / 6 - 10));
        (t.moveTo(o, 0), t.bezierCurveTo(o + 3, r * 0.3, o - 3, r * 0.6, o + 2, r), t.stroke());
      }
    }
  });
}
function Pn() {
  return Mn(512, 160, (e, t, n) => {
    ((e.fillStyle = `#2a2433`),
      e.fillRect(0, 0, t, n),
      (e.strokeStyle = `#e0533d`),
      (e.lineWidth = 8),
      e.strokeRect(14, 14, t - 28, n - 28),
      (e.fillStyle = `#ff7a5c`),
      (e.font = `800 92px ui-monospace, Menlo, Consolas, monospace`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      e.fillText(`ON AIR`, t / 2, n / 2 + 4));
  });
}
function Fn() {
  return Mn(256, 256, (e, t) => {
    let n = t / 2;
    ((e.fillStyle = `#f6eee3`),
      e.beginPath(),
      e.arc(n, n, n - 4, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `#8a5a3c`),
      (e.lineWidth = 10),
      e.stroke(),
      (e.fillStyle = `#3a2e28`));
    for (let t = 0; t < 12; t += 1) {
      let r = (t / 12) * Math.PI * 2;
      (e.beginPath(),
        e.arc(n + Math.sin(r) * (n - 30), n - Math.cos(r) * (n - 30), t % 3 ? 4 : 7, 0, Math.PI * 2),
        e.fill());
    }
    ((e.lineCap = `round`),
      (e.strokeStyle = `#3a2e28`),
      (e.lineWidth = 9),
      e.beginPath(),
      e.moveTo(n, n),
      e.lineTo(n + Math.sin((8 / 12) * Math.PI * 2) * 62, n - Math.cos((8 / 12) * Math.PI * 2) * 62),
      e.stroke(),
      (e.lineWidth = 6),
      e.beginPath(),
      e.moveTo(n, n),
      e.lineTo(n, n - 92),
      e.stroke(),
      (e.fillStyle = `#c4553a`),
      e.beginPath(),
      e.arc(n, n, 8, 0, Math.PI * 2),
      e.fill());
  });
}
function In(e, t) {
  return Mn(128, 160, (n, r, i) => {
    ((n.fillStyle = e),
      n.fillRect(0, 0, r, i),
      (n.strokeStyle = `rgba(58,46,40,0.55)`),
      (n.lineWidth = 3),
      (n.lineCap = `round`));
    for (let e = 0; e < 5; e += 1) {
      let r = 34 + e * 22,
        i = 40 + ((t * 13 + e * 29) % 60);
      (n.beginPath(), n.moveTo(16, r), n.lineTo(16 + i, r + ((e + t) % 2 ? 2 : -1)), n.stroke());
    }
    ((n.fillStyle = `#c4553a`), n.beginPath(), n.arc(r / 2, 12, 6, 0, Math.PI * 2), n.fill());
  });
}
function Ln() {
  return Mn(256, 320, (e, t, n) => {
    ((e.fillStyle = `#3f4a42`),
      e.fillRect(0, 0, t, n),
      (e.strokeStyle = `#8a5a3c`),
      (e.lineWidth = 18),
      e.strokeRect(0, 0, t, n),
      (e.strokeStyle = `rgba(246,238,227,0.85)`),
      (e.lineWidth = 5),
      (e.lineJoin = `round`),
      e.strokeRect(58, 120, 140, 90),
      e.beginPath(),
      e.arc(100, 165, 26, 0, Math.PI * 2),
      e.stroke(),
      e.beginPath(),
      e.moveTo(150, 145),
      e.lineTo(180, 145),
      e.moveTo(150, 165),
      e.lineTo(180, 165),
      e.moveTo(150, 185),
      e.lineTo(180, 185),
      e.stroke(),
      e.beginPath(),
      e.moveTo(90, 120),
      e.lineTo(150, 70),
      e.stroke(),
      (e.font = `600 30px ui-monospace, Menlo, Consolas, monospace`),
      (e.fillStyle = `rgba(246,238,227,0.85)`),
      (e.textAlign = `center`),
      e.fillText(`20:00`, t / 2, 262));
  });
}
function Rn() {
  let e = new z();
  e.name = `radio-booth`;
  let t = jn(`#c8925a`, 0.66, { map: Nn() }),
    n = jn(`#8a5a3c`, 0.62),
    r = 2.6,
    i = 1.9,
    a = 2.5,
    o = (t, n, r, i, a, o, s, c = 0.04) => {
      let l = new k(new Y(t, n, r, 2, Math.max(0.01, Math.min(c, Math.min(t, n, r) * 0.08))), i);
      return (l.position.set(a, o, s), e.add(l), l);
    };
  (o(2.8000000000000003, 0.14, 2.1, n, 0, 0.07, 0),
    o(r, a, 0.1, t, 0, a / 2, -1.9 / 2 + 0.05),
    o(0.1, a, i, t, -1.25, a / 2, 0),
    o(0.1, a, i, t, r / 2 - 0.05, a / 2, 0),
    o(r, 1, 0.1, t, 0, 0.5 + 0.07, i / 2 - 0.05),
    o(2.7600000000000002, 0.07, 0.56, n, 0, 1.1, i / 2 - 0.14),
    o(r, 0.42, 0.1, n, 0, 2.29, i / 2 - 0.05));
  let s = o(3.1, 0.09, 2.65, n, 0, 2.62, 0.18);
  ((s.rotation.x = -0.12), o(3.16, 0.05, 0.08, jn(`#a8463c`, 0.85), 0, 2.52, 1.48));
  let c = Pn(),
    l = new L({
      name: `on-air`,
      color: `#2a2433`,
      roughness: 0.6,
      map: c,
      emissiveMap: c,
      emissive: An(`#ff6a4f`),
      emissiveIntensity: 0.15,
    }),
    d = new k(new Y(1, 0.31, 0.06, 2, 0.02), [n, n, n, n, l, n]);
  (d.position.set(0, 2.29, 0.97), e.add(d));
  let f = -0.71;
  for (let e of [1.55, 1.98]) o(1.5, 0.05, 0.3, n, 0.45, e, f);
  ([`#c4553a`, `#7e9c6a`, `#f2b880`, `#2f5d62`, `#e7b7b0`, `#a9c4dd`, `#e3b04b`].forEach((t, n) => {
    let r = new z(),
      i = new k(new j(0.055, 0.06, 0.27, 16), jn(t, 0.45)),
      a = new k(new j(0.045, 0.05, 0.06, 14), jn(n % 2 ? `#3a2e28` : `#dcd6c8`, 0.5)),
      o = new k(new j(0.061, 0.061, 0.03, 16), jn(`#f6eee3`, 0.5));
    ((i.position.y = 0.135),
      (a.position.y = 0.3),
      (o.position.y = 0.2),
      r.add(i, a, o),
      r.position.set(-0.2 + n * 0.19, 2.005, f + (n % 2 ? 0.03 : -0.02)),
      (r.rotation.y = n * 0.7),
      e.add(r));
  }),
    [`#3a2e28`, `#a8463c`, `#2f5d62`, `#8a5a3c`, `#3e3546`, `#c8925a`].forEach((t, n) => {
      let r = new k(new Y(0.03, 0.31, 0.31, 1, 0.006), jn(t, 0.85));
      (r.position.set(0 + n * 0.045, 1.735, f), (r.rotation.z = n === 5 ? -0.25 : 0), e.add(r));
    }));
  for (let t = 0; t < 5; t += 1) {
    let n = new k(
      new Y(0.06, 0.22 + (t % 3) * 0.03, 0.18, 1, 0.008),
      jn([`#7e9c6a`, `#e7b7b0`, `#eadbc8`, `#7fa3c6`, `#c4553a`][t], 0.85),
    );
    (n.position.set(0.62 + t * 0.07, 1.58 + 0.12, f), e.add(n));
  }
  let p = new k(new j(0.2, 0.2, 0.05, 32), [n, new L({ map: Fn(), roughness: 0.6 }), n]);
  ((p.rotation.x = Math.PI / 2), p.position.set(-0.72, 1.86, -0.82), e.add(p));
  let m = [`#f6eee3`, `#f3d9c4`, `#e7b7b0`, `#eadbc8`, `#f6e2b3`, `#dfe6d2`];
  for (let t = 0; t < 7; t += 1) {
    let n = new k(new I(0.16, 0.2), new L({ map: In(m[t % m.length], t), roughness: 0.9, side: 2 })),
      r = t % 4,
      i = (t / 4) | 0;
    (n.position.set(-1 + r * 0.19 + i * 0.08, 1.38 - i * 0.24 + (r % 2) * 0.03, -0.845),
      (n.rotation.z = (((t * 37) % 11) - 5) * 0.03),
      e.add(n));
  }
  let g = 1.135;
  o(0.62, 0.1, 0.3, jn(`#3e3546`, 0.55), -0.55, 1.185, 0.69, 0.02);
  let _ = [];
  for (let t = 0; t < 3; t += 1) {
    let n = new L({ color: An(`#e7c27b`), roughness: 0.4, emissive: An(`#ffd38a`), emissiveIntensity: 0.05 }),
      r = new k(new R(0.035, 16, 12), n);
    (r.position.set(-0.71 + t * 0.16, 1.255, 0.75), e.add(r), _.push(n));
  }
  for (let t = 0; t < 4; t += 1) {
    let n = new k(new j(0.018, 0.018, 0.03, 10), jn(`#dcd6c8`, 0.5));
    (n.position.set(-0.7 + t * 0.1, 1.25, 0.6), e.add(n));
  }
  let v = new L({ color: An(`#6f6a66`), roughness: 0.42, metalness: 0.65 }),
    x = new z(),
    S = new k(new j(0.08, 0.1, 0.03, 20), v),
    C = new k(new j(0.012, 0.012, 0.26, 10), v),
    w = new k(new b(0.045, 0.09, 6, 12), new L({ color: An(`#3a3a3e`), roughness: 0.5, metalness: 0.5 }));
  ((S.position.y = 0.015),
    (C.position.y = 0.16),
    w.position.set(0, 0.33, 0.02),
    (w.rotation.x = 0.35),
    x.add(S, C, w),
    x.position.set(0.02, g, 0.77),
    (x.rotation.y = -0.2),
    e.add(x));
  let T = new z(),
    ee = new k(new j(0.07, 0.08, 0.025, 18), jn(`#2f5d62`, 0.55)),
    te = new k(new j(0.01, 0.01, 0.32, 8), jn(`#2f5d62`, 0.55)),
    O = new k(new D(0.1, 0.12, 20, 1, !0), new L({ color: An(`#2f5d62`), roughness: 0.55, side: 2 })),
    A = new L({ color: An(`#fff1d6`), emissive: An(`#ffc27a`), emissiveIntensity: 0.2, roughness: 0.4 }),
    ne = new k(new R(0.035, 14, 10), A);
  ((ee.position.y = 0.012),
    te.position.set(0, 0.17, 0),
    (te.rotation.z = 0.25),
    O.position.set(-0.05, 0.33, 0.02),
    (O.rotation.z = -0.5),
    ne.position.set(-0.03, 0.3, 0.02),
    T.add(ee, te, O, ne),
    T.position.set(0.55, g, 0.63),
    e.add(T));
  let re = new k(new j(0.04, 0.035, 0.09, 16), jn(`#f6eee3`, 0.45));
  (re.position.set(0.32, 1.18, 0.81), e.add(re));
  let M = jn(`#e3a467`, 0.92),
    ie = jn(`#f6e7d2`, 0.92),
    N = new z(),
    F = new k(new R(0.17, 20, 14), M);
  (F.scale.set(1.25, 0.62, 0.95), (F.position.y = 0.1));
  let ae = new k(new R(0.095, 18, 14), M);
  (ae.position.set(0.17, 0.1, 0.07), ae.scale.set(1, 0.85, 1));
  let oe = new k(new R(0.045, 12, 10), ie);
  oe.position.set(0.24, 0.08, 0.1);
  for (let e of [-1, 1]) {
    let t = new k(new D(0.035, 0.07, 10), M);
    (t.position.set(0.16 + e * 0.045, 0.19, 0.06), (t.rotation.z = -e * 0.25), N.add(t));
  }
  let se = new k(new u(0.15, 0.03, 8, 20, Math.PI * 1.1), M);
  ((se.rotation.x = Math.PI / 2),
    se.position.set(-0.02, 0.05, 0.02),
    N.add(F, ae, oe, se),
    N.position.set(1, g, 0.79),
    (N.rotation.y = -0.4),
    e.add(N));
  let ce = new k(new Y(0.42, 0.56, 0.03, 1, 0.01), [n, n, n, n, new L({ map: Ln(), roughness: 0.92 }), n]);
  (ce.position.set(0.95, 0.36, 1.31), (ce.rotation.x = -0.16), e.add(ce), o(0.9, 0.3, 0.3, n, -0.7, 0.29, 1.17));
  let le = new ue(new y(0.055, 1), new L({ roughness: 0.75 }), 22),
    de = new ue(new y(0.075, 1), jn(`#7e9c6a`, 0.9), 18),
    V = new P(),
    fe = new E(),
    pe = [`#e7b7b0`, `#f6eee3`, `#f2b880`, `#e7b7b0`].map(An);
  for (let e = 0; e < 22; e += 1)
    (le.setMatrixAt(
      e,
      V.compose(
        new B(-1.1 + (e % 11) * 0.08, 0.5 + ((e * 7) % 5) * 0.025, 1.1099999999999999 + (e > 10 ? 0.1 : 0)),
        fe,
        new B(1, 1, 1),
      ),
    ),
      le.setColorAt(e, pe[e % pe.length]),
      e < 18 &&
        de.setMatrixAt(
          e,
          V.compose(new B(-1.1 + (e % 9) * 0.1, 0.46, 1.15 + (e > 8 ? 0.06 : -0.02)), fe, new B(1.2, 0.8, 1)),
        ));
  e.add(le, de);
  let me = new z(),
    he = new L({ color: An(`#fff1d6`), emissive: An(`#ffd9a0`), emissiveIntensity: 0.25, roughness: 0.5 }),
    ge = new k(new j(0.07, 0.07, 0.16, 12), he),
    _e = new k(new D(0.1, 0.07, 12), jn(`#3a2e28`, 0.6));
  _e.position.y = 0.115;
  let ve = new k(new j(0.08, 0.08, 0.025, 12), jn(`#3a2e28`, 0.6));
  ((ve.position.y = -0.09), me.add(ge, _e, ve), me.position.set(1.42, 2.25, 1.35), e.add(me));
  let ye = me.position.clone(),
    H = new h(An(`#ffc27a`), 0, 6, 2);
  (H.position.set(0.5, 1.635, 0.7), e.add(H));
  let be = kn(e, { glow: [..._, A, he], keep: [l] });
  return {
    group: e,
    seat: new B(0.12, 0.14, -0.28),
    lantern: ye,
    setNight(e) {
      ((H.intensity = 4 * e), be.glow(3, 0.2 + 2.6 * e), be.glow(4, 0.25 + 2.4 * e));
    },
    setOnAir(e) {
      l.emissiveIntensity = e ? 2.4 : 0.15;
    },
    setLamps(e) {
      for (let t = 0; t < 3; t += 1) be.glow(t, t < e ? 3.2 : 0.05);
    },
  };
}
var zn = (e) => new w(e),
  Bn = Object.freeze({
    top: zn(`#2e3a5c`),
    mid: zn(`#5b6a92`),
    hor: zn(`#e8b49a`),
    below: zn(`#4a4f78`),
    moon: zn(`#8e86b8`),
    hemiSky: zn(`#5b6a92`),
    hemiGround: zn(`#2e3a5c`),
    hemi: 0.6,
    moonLight: 0.55,
    fog: zn(`#565b88`),
    env: 0.1,
    bloom: { strength: 0.32, radius: 0.55, threshold: 0.86 },
    finish: { uWarm: 0, uVignette: 0.22, uGrain: 0.028, uSat: 0.88, uVibrance: 0.1, uContrast: 0.94 },
  }),
  Vn = Object.freeze({ exposure: Ne.night.exposure * 0.8, halo: zn(`#ffcf8a`), haloSize: 0.8, haloOpacity: 0.9 }),
  Hn = Object.freeze({
    hemiSky: zn(`#c9d8f0`),
    hemiGround: zn(`#e6d2b8`),
    hemi: 1.1,
    sun: 3,
    sunColor: zn(`#ffd6a5`),
    fog: zn(`#f3e2d2`),
    dome: {
      uTop: zn(`#a9c2e6`),
      uMid: zn(`#cfddf0`),
      uVeil: zn(`#e2e4ea`),
      uHor: zn(`#f7dcc6`),
      uWarm: zn(`#ffe6bf`),
      uBelow: zn(`#f3e6da`),
      uSun: zn(`#fff1d6`),
    },
  });
function Un() {
  let e = new de({
      side: 1,
      depthWrite: !1,
      fog: !1,
      transparent: !0,
      uniforms: {
        uTop: { value: Bn.top },
        uMid: { value: Bn.mid },
        uHor: { value: Bn.hor },
        uBelow: { value: Bn.below },
        uMoon: { value: Bn.moon },
        uK: { value: 0 },
      },
      vertexShader: `varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
      fragmentShader: `uniform vec3 uTop, uMid, uHor, uBelow, uMoon; uniform float uK; varying vec3 vD;
      void main(){
        vec3 d = normalize(vD); float h = d.y;
        vec3 c = mix(uMid, uTop, smoothstep(0.45, 0.95, h));
        // The afterglow: a band about five degrees high, warmest just over the horizon.
        c = mix(uHor, c, smoothstep(0.0, 0.09, h));
        // Below: the cloud sea in moonlight, lighter toward the horizon.
        vec3 b = mix(mix(uHor, uMoon, 0.65), uBelow, smoothstep(0.0, 0.35, -h));
        c = h < 0.0 ? b : c;
        gl_FragColor = vec4(c, uK);
      }`,
    }),
    t = new k(new R(360, 40, 20), e);
  return ((t.renderOrder = -9), (t.frustumCulled = !1), (t.userData.noAO = !0), (t.visible = !1), t);
}
function Wn() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 32;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(16, 16, 0, 16, 16, 16);
  return (
    n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(0.35, `rgba(255,255,255,0.75)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 32, 32),
    new l(e)
  );
}
function Gn(e) {
  let n = new Float32Array(600),
    r = 7,
    i = () => (r = (r * 16807) % 2147483647) / 2147483647;
  for (let e = 0; e < 200; e += 1) {
    let t = i() * Math.PI * 2,
      r = 0.2 + Math.asin(i()) * 0.85;
    ((n[e * 3] = Math.cos(t) * Math.cos(r) * 330),
      (n[e * 3 + 1] = Math.sin(r) * 330),
      (n[e * 3 + 2] = Math.sin(t) * Math.cos(r) * 330));
  }
  let a = new F();
  a.setAttribute(`position`, new t(n, 3));
  let s = new c({
      map: Wn(),
      color: zn(`#fbf6ee`),
      size: 2.2 * e,
      sizeAttenuation: !1,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
      fog: !1,
    }),
    l = new o(a, s);
  return ((l.frustumCulled = !1), (l.userData.noAO = !0), (l.visible = !1), l);
}
function Kn() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`),
    n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    n.addColorStop(0, `rgba(255,255,255,1)`),
    n.addColorStop(0.18, `rgba(255,255,255,0.6)`),
    n.addColorStop(0.5, `rgba(255,255,255,0.16)`),
    n.addColorStop(1, `rgba(255,255,255,0)`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 64, 64),
    new l(e)
  );
}
function qn(e) {
  let t = new c({
      map: Kn(),
      color: Vn.halo,
      size: Vn.haloSize,
      sizeAttenuation: !0,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
      blending: 2,
      fog: !1,
    }),
    n = new o(new F().setFromPoints(e), t);
  return ((n.name = `gate-halos`), (n.userData.noAO = !0), (n.visible = !1), (n.renderOrder = 2), n);
}
function Jn(e) {
  let t = new z(),
    n = new L({ color: zn(`#3a2e28`), roughness: 0.6 }),
    r = new k(new j(0.075, 0.075, 0.18, 12), e),
    i = new k(new D(0.11, 0.08, 12), n);
  i.position.y = 0.13;
  let a = new k(new u(0.04, 0.008, 6, 12), n);
  a.position.y = 0.19;
  let o = new k(new j(0.09, 0.1, 0.035, 12), n);
  ((o.position.y = -0.105), t.add(r, i, a, o));
  for (let e of t.children) e.castShadow = !0;
  return t;
}
function Yn({ stage: e, sky: t, booth: n, gate: r, pier: i, ground: a = () => 0 }) {
  let { renderer: o, scene: s, camera: c, finish: l, quality: u } = e,
    d = new z();
  d.name = `gate-night`;
  let f = Un(),
    p = Gn(Math.min(2, o.getPixelRatio()));
  d.add(f, p);
  let m = new L({ color: zn(`#fff1d6`), emissive: zn(`#ffd9a0`), emissiveIntensity: 0.2, roughness: 0.5 }),
    g = [
      [-2.35, r.z + 0.55],
      [2.35, r.z + 0.55],
    ];
  for (let e of [i.z0 + 1, i.z0 + 3.4, i.z0 + 5.8]) for (let t of [-1, 1]) g.push([i.x + t * (i.hw - 0.16), e]);
  let _ = new z();
  _.name = `gate-lanterns`;
  for (let [e, t] of g) {
    let n = Jn(m);
    (n.position.set(e, a(e, t) + 0.125, t), _.add(n));
  }
  let v = kn(_, { glow: [m] });
  d.add(_);
  let y = qn([...g.map(([e, t]) => new B(e, a(e, t) + 0.125, t)), n.group.localToWorld(n.lantern.clone())]);
  d.add(y);
  let b = [
      [2.35, r.z + 0.55],
      [i.x + i.hw - 0.16, i.z0 + 3.4],
    ].map(([e, t]) => {
      let n = new h(zn(`#ffd9a0`), 0, 3, 2);
      return (n.position.set(e, a(e, t) + 0.6, t), d.add(n), n);
    }),
    x = new te(zn(`#ffd7a0`), 0, 14, V.degToRad(35), 0.8, 1);
  (x.position.set(r.x, 2.9, r.z - 1.1), x.target.position.set(r.x, 0, r.z + 4.2), d.add(x, x.target));
  let C = t.fill || new S(zn(`#ffffff`), 0);
  t.fill || (C.position.set(-25, 45, 70), d.add(C));
  let w = t.dome.mesh || t.dome,
    T = new oe();
  o.getDrawingBufferSize(T);
  let D = 0.5,
    O = new ne(Math.max(2, Math.round(T.x * D)), Math.max(2, Math.round(T.y * D)), { type: ee }),
    A = new le();
  (A.moveTo(-1.7, 0),
    A.lineTo(1.7, 0),
    A.lineTo(1.7, 3.32),
    A.absellipse(0, 3.32, 1.86, 1.17, 0, Math.PI, !1),
    A.lineTo(-1.7, 0));
  let j = new de({
      uniforms: { tDay: { value: O.texture }, uRes: { value: T.clone() } },
      vertexShader: `void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform sampler2D tDay; uniform vec2 uRes; void main(){ gl_FragColor = vec4(texture2D(tDay, gl_FragCoord.xy / uRes).rgb, 1.0); }`,
      fog: !1,
    }),
    re = new k(new ie(A, 24), j);
  (re.position.set(r.x, 0.005, r.z), (re.visible = !1), d.add(re), s.add(d));
  let M = () => ({
      sun: t.sun.intensity,
      sunColor: t.sun.color.clone(),
      hemi: t.hemi.intensity,
      hemiSky: t.hemi.color.clone(),
      hemiGround: t.hemi.groundColor.clone(),
      fill: C.intensity,
      fillColor: C.color.clone(),
      fog: s.fog?.color.clone(),
      env: s.environmentIntensity,
    }),
    N = {
      ...M(),
      exposure: o.toneMappingExposure,
      bloom: { strength: e.bloom.strength, radius: e.bloom.radius, threshold: e.bloom.threshold },
      finish: Object.fromEntries(Object.keys(Bn.finish).map((e) => [e, l.uniforms[e].value])),
      dome: Object.fromEntries(
        Object.keys(Hn.dome)
          .filter((e) => t.dome.material.uniforms?.[e]?.value?.isColor)
          .map((e) => [e, t.dome.material.uniforms[e].value.clone()]),
      ),
    },
    P = N,
    F = (e, t, n) => e + (t - e) * n,
    I = 0,
    ae = 0,
    se = 0,
    R = 0,
    ce = 0,
    ue = 0,
    fe = !1,
    pe = 0,
    me = 0,
    he = null,
    ge = new B(),
    _e = new E(),
    ve = o.shadowMap.autoUpdate,
    ye = () => {
      for (let [e, n] of Object.entries(N.dome)) t.dome.material.uniforms[e].value.copy(n);
    };
  function H(r, i = P) {
    ((t.sun.intensity = F(i.sun, 0, r)),
      t.sun.color.copy(i.sunColor),
      (t.hemi.intensity = F(i.hemi, Bn.hemi, r)),
      t.hemi.color.copy(i.hemiSky).lerp(Bn.hemiSky, r),
      t.hemi.groundColor.copy(i.hemiGround).lerp(Bn.hemiGround, r),
      (C.intensity = F(i.fill, Bn.moonLight, r)),
      C.color.copy(i.fillColor).lerp(Bn.moon, r),
      s.fog && i.fog && s.fog.color.copy(i.fog).lerp(Bn.fog, r),
      (s.environmentIntensity = F(i.env, Bn.env, r)),
      (f.visible = r > 0),
      (f.material.uniforms.uK.value = r),
      (w.visible = r < 1),
      (p.visible = r > 0.05),
      (p.material.opacity = Math.max(0, (r - 0.3) / 0.7)),
      v.glow(0, 0.2 + 2.6 * r),
      (y.visible = r > 0.02 && !e.bloom.enabled),
      (y.material.opacity = Vn.haloOpacity * r));
    for (let e of b) e.intensity = 0.8 * r;
    ((x.intensity = 6 * r), n.setNight(r));
  }
  function be(t) {
    e.setBloom({
      strength: F(N.bloom.strength, Bn.bloom.strength, t),
      radius: F(N.bloom.radius, Bn.bloom.radius, t),
      threshold: F(N.bloom.threshold, Bn.bloom.threshold, t),
    });
    for (let e of Object.keys(Bn.finish)) l.uniforms[e].value = F(N.finish[e], Bn.finish[e], t);
    u.low && (o.toneMappingExposure = F(N.exposure, Vn.exposure, t));
  }
  function U() {
    o.getDrawingBufferSize(T);
    let e = Math.max(2, Math.round(T.x * D)),
      t = Math.max(2, Math.round(T.y * D));
    ((O.width !== e || O.height !== t) && O.setSize(e, t),
      j.uniforms.uRes.value.copy(T),
      H(0, N),
      (re.visible = !1),
      ve && me % 4 == 0 && (o.shadowMap.needsUpdate = !0),
      (me += 1));
    let n = o.getRenderTarget();
    (o.setRenderTarget(O), o.render(s, c), o.setRenderTarget(n), H(I), (re.visible = !0));
  }
  (o.setRenderTarget(O), o.render(s, c), o.setRenderTarget(null));
  let xe = e.onUpdate((t) => {
    if (((ue += t), ce)) {
      let t = Math.min(1, (ue - R) / ce),
        n = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      ((I = F(ae, se, n)),
        H(I),
        be(I),
        t >= 1 &&
          ((ce = 0), I >= 1 && (ye(), (he ??= Oe(e, `night`)), u.low && (o.toneMappingExposure = Vn.exposure))));
    }
    (f.position.copy(c.position), p.position.copy(c.position), (pe += 1));
    let n = c.position.distanceToSquared(ge) > 1e-6 || c.quaternion.angleTo(_e) > 1e-4;
    (ge.copy(c.position), _e.copy(c.quaternion), fe && I > 0 && (pe % 2 == 0 || ce || n) && U());
  });
  return {
    group: d,
    get k() {
      return I;
    },
    title(e) {
      if (!e) {
        (H(0, N), ye());
        return;
      }
      (t.hemi.color.copy(Hn.hemiSky),
        t.hemi.groundColor.copy(Hn.hemiGround),
        (t.hemi.intensity = Hn.hemi),
        (t.sun.intensity = Hn.sun),
        t.sun.color.copy(Hn.sunColor),
        s.fog && s.fog.color.copy(Hn.fog));
      for (let e of Object.keys(N.dome)) t.dome.material.uniforms[e].value.copy(Hn.dome[e]);
    },
    fall(e = 2.6) {
      (fe || ((ve = o.shadowMap.autoUpdate), (o.shadowMap.autoUpdate = !1), (P = M())),
        (fe = !0),
        (ae = I),
        (se = 1),
        (R = ue),
        (ce = Math.max(0.01, e)));
    },
    dawn() {
      (fe || I) &&
        ((ce = 0),
        (I = 0),
        (fe = !1),
        (P = N),
        he?.restore(),
        (he = null),
        H(0, N),
        be(0),
        ye(),
        (re.visible = !1),
        (o.shadowMap.autoUpdate = ve),
        (o.shadowMap.needsUpdate = !0));
    },
    crossing(e = 0.25) {
      return fe && c.position.z < r.z + e && Math.abs(c.position.x - r.x) < 1.7;
    },
    dispose() {
      (xe(), O.dispose());
    },
  };
}
var Xn = Object.freeze({ r: 30, walk: 27.6, plaza: 8.6 }),
  X = Object.freeze({
    fountain: { x: 0, z: 0, r: 2.75 },
    melies: { front: { x: 0, z: -16.4 }, facing: 0, height: 9.2 },
    vangogh: { front: { x: 15.8, z: -2.6 }, facing: -Math.PI / 2, height: 9.6 },
    lishizhen: { front: { x: -15.8, z: -2.6 }, facing: Math.PI / 2, height: 6.4 },
    xiyou: { front: { x: -11.2, z: -11.2 }, facing: Math.PI / 4, height: 8.4 },
    flash: { x: -15.4, z: 15.2, rot: 2.36 },
    pond: { x: 17.4, z: 17.4, r: 5 },
    gate: { x: 0, z: 25.4 },
    pier: { z0: 27.4, z1: 34.5, w: 2.4 },
    balloon: { x: 5.4, z: 34.8 },
    spawn: { x: 0, z: 30.2, h: Math.PI },
    guide: { x: 1.45, z: 27.6, home: 0.35 },
    morris: { x: 4.6, z: -12.6 },
  }),
  Zn = [
    {
      w: 2.8,
      pts: [
        [0, 26.6],
        [0, 8],
      ],
    },
    {
      w: 2.8,
      pts: [
        [0, -8],
        [0, -16.6],
      ],
    },
    {
      w: 2.5,
      pts: [
        [8, -0.6],
        [11.5, -2.2],
        [15.9, -2.6],
      ],
    },
    {
      w: 2.5,
      pts: [
        [-8, -0.6],
        [-11.5, -2.2],
        [-15.9, -2.6],
      ],
    },
    {
      w: 1.7,
      pts: [
        [1.2, 18],
        [6.6, 16.6],
        [12, 14],
      ],
    },
    {
      w: 1.7,
      pts: [
        [-1.2, 18],
        [-6.4, 16.8],
        [-11.6, 14.4],
      ],
    },
  ],
  Qn = [
    { x: 0, z: -21.2, hw: 5.6, hd: 5.6 },
    { x: 20, z: -2.6, hw: 4.8, hd: 6.4 },
    { x: -19.8, z: -2.6, hw: 4.6, hd: 5.4 },
    { x: 0, z: 25.2, hw: 3.4, hd: 2.2 },
  ],
  $n = {};
function er(e) {
  if (e.xiyou && !$n.xiyou) {
    let e = X.xiyou.front,
      t = Math.SQRT1_2;
    (Zn.push({
      w: 2.4,
      pts: [
        [-6, -6],
        [e.x + t * 0.1, e.z + t * 0.1],
      ],
    }),
      Qn.push({ x: e.x - t * 3.6, z: e.z - t * 3.6, hw: 4.6, hd: 4.6 }));
  }
  (e.flash && !$n.flash && Qn.push({ x: X.flash.x, z: X.flash.z, hw: 3.6, hd: 3.6 }), Object.assign($n, e));
}
var tr = (e) => !!$n[e],
  nr = (e, t, n) => V.smoothstep(n, e, t);
function rr(e, t, n, r, i, a) {
  let o = i - n,
    s = a - r,
    c = V.clamp(((e - n) * o + (t - r) * s) / (o * o + s * s || 1), 0, 1);
  return Math.hypot(e - (n + o * c), t - (r + s * c));
}
function ir(e, t, n) {
  let r = 1 / 0;
  for (let i = 0; i < n.pts.length - 1; i += 1) r = Math.min(r, rr(e, t, ...n.pts[i], ...n.pts[i + 1]));
  return r;
}
function ar(e, t) {
  let n = Math.hypot(e, t),
    r = 1 - nr(Xn.plaza + 0.6, Xn.plaza + 2, n);
  for (let n of Zn) r = Math.max(r, 1 - nr(n.w / 2 + 0.2, n.w / 2 + 1.4, ir(e, t, n)));
  for (let n of Qn) {
    let i = Math.max(Math.abs(e - n.x) - n.hw, 0),
      a = Math.max(Math.abs(t - n.z) - n.hd, 0);
    r = Math.max(r, 1 - nr(0.4, 2.2, Math.hypot(i, a)));
  }
  let i = Math.hypot(e - X.pond.x, t - X.pond.z);
  return ((r = Math.max(r, 1 - nr(X.pond.r + 0.6, X.pond.r + 2, i))), r);
}
function Z(e, t) {
  let n = Math.hypot(e, t),
    r =
      (Math.sin(e * 0.23 + 1.3) * Math.cos(t * 0.19 - 0.4) + 0.55 * Math.sin(e * 0.41 - t * 0.33 + 2.1) + 1.4) *
      0.17 *
      nr(9, 18, n) *
      (1 - ar(e, t));
  r -= 0.75 * nr(Xn.r - 1.1, Xn.r, n) ** 1.6;
  let i = Math.hypot(e - X.pond.x, t - X.pond.z);
  return (i < X.pond.r + 0.4 && (r -= 0.55 * (1 - nr(0, X.pond.r + 0.4, i) ** 2)), r);
}
var or = (e, t) => {
    let n = Math.max(Z(e, t), -0.05);
    return Math.abs(e) < X.pier.w / 2 && t > X.pier.z0 - 0.6 && t < X.pier.z1 + 0.2 ? Math.max(n, 0.06) : n;
  },
  sr = { value: new N(0, 0, 1 / 85, 1) },
  cr = `
uniform vec4 uCurve;
vec4 curveWorld(vec4 w) {
  float k = uCurve.z * uCurve.w;
  vec2 d = w.xz - uCurve.xy;
  float r = length(d);
  if (k < 1e-6 || r < 1e-4) return w;
  float R = 1.0 / k, th = r * k, s = sin(th * 0.5);
  w.xz = uCurve.xy + d * ((R + w.y) * sin(th) / r);
  w.y = w.y * cos(th) - 2.0 * R * s * s;
  return w;
}
`,
  lr = `
vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = viewMatrix * curveWorld( modelMatrix * mvPosition );
gl_Position = projectionMatrix * mvPosition;
`,
  ur = `vec4 mvPosition = modelViewMatrix[ 3 ];`,
  dr = `vec4 mvPosition = viewMatrix * curveWorld( modelMatrix * vec4( 0.0, 0.0, 0.0, 1.0 ) );`,
  fr = new WeakSet();
function pr(e) {
  if (!e || fr.has(e) || e.isShaderMaterial || e.userData?.flat) return;
  fr.add(e);
  let t = e.onBeforeCompile,
    n = e.customProgramCacheKey();
  ((e.onBeforeCompile = function (n, r) {
    (t.call(this, n, r), (n.uniforms.uCurve = sr));
    let i = n.vertexShader.replace(`#include <common>`, `#include <common>\n${cr}`);
    ((i = e.isSpriteMaterial ? i.replace(ur, dr) : i.replace(`#include <project_vertex>`, lr)), (n.vertexShader = i));
  }),
    (e.customProgramCacheKey = () => `${n}|curve`),
    (e.needsUpdate = !0));
}
function mr(e) {
  let t = (e) => {
    if (e.userData?.flat) return;
    let n = e.material;
    if (n) for (let e of Array.isArray(n) ? n : [n]) pr(e);
    for (let n of e.children) t(n);
  };
  t(e);
}
function hr(e, t = new B()) {
  let [n, r, i, a] = sr.value.toArray(),
    o = i * a,
    s = e.x - n,
    c = e.z - r,
    l = Math.hypot(s, c);
  if (o < 1e-6 || l < 1e-4) return t.copy(e);
  let u = 1 / o,
    d = l * o,
    f = Math.sin(d / 2),
    p = ((u + e.y) * Math.sin(d)) / l;
  return t.set(n + s * p, e.y * Math.cos(d) - 2 * u * f * f, r + c * p);
}
function gr(e, t = new B()) {
  let [n, r, i, a] = sr.value.toArray(),
    o = i * a;
  if (o < 1e-6) return t.copy(e);
  let s = 1 / o,
    c = e.x - n,
    l = e.z - r,
    u = Math.hypot(c, l),
    d = e.y + s,
    f = Math.atan2(u, d) * s,
    p = Math.hypot(u, d) - s;
  return u > 1e-6 ? t.set(n + (c / u) * f, p, r + (l / u) * f) : t.set(n, p, r);
}
function _r(e, t, { far: n = 160, step: r = 0.35 } = {}) {
  let i = new B(),
    a = new B(),
    o = (n) => (e.at(n, i), gr(i, a), a.y <= t(a.x, a.z)),
    s = 0.3;
  if (o(s)) return null;
  for (let c = s + r; c <= n; s = c, c += r * (1 + c * 0.02)) {
    if (!o(c)) continue;
    let n = s,
      r = c;
    for (let e = 0; e < 12; e += 1) {
      let e = (n + r) / 2;
      o(e) ? (r = e) : (n = e);
    }
    return (e.at(r, i), gr(i, a), { point: a.clone().setY(t(a.x, a.z)), distance: r });
  }
  return null;
}
function vr(e, t, n = new s()) {
  let r = gr(e.origin, new B()),
    i = gr(e.at(Math.max(t, 1), new B()), new B());
  return (n.origin.copy(r), n.direction.copy(i.sub(r)).normalize(), n);
}
var Q = (e) => new w(e),
  yr = (e, t, n, r = new w()) => r.copy(e).lerp(t, V.clamp(n, 0, 1)),
  br = 1.19;
function xr() {
  let e = xt(61),
    t = document.createElement(`canvas`);
  t.width = t.height = 256;
  let n = t.getContext(`2d`);
  ((n.fillStyle = `rgb(236,236,236)`), n.fillRect(0, 0, 256, 256), (n.lineCap = `round`));
  for (let t = 0; t < 1700; t += 1) {
    let t = e() * 256,
      r = e() * 256,
      i = -0.9 + (e() - 0.5) * 0.8,
      a = 3 + e() * 5;
    ((n.strokeStyle = e() < 0.42 ? `rgba(255,255,255,${0.45 + e() * 0.4})` : `rgba(178,178,178,${0.3 + e() * 0.3})`),
      (n.lineWidth = 0.9 + e() * 0.8));
    let o = Math.cos(i) * a,
      s = Math.sin(i) * a,
      c = (e() - 0.5) * 2;
    for (let e of [-256, 0, 256])
      for (let i of [-256, 0, 256])
        (n.beginPath(),
          n.moveTo(t + e, r + i),
          n.quadraticCurveTo(t + e + o * 0.5 + c, r + i + s * 0.5 - c, t + e + o, r + i + s),
          n.stroke());
  }
  let r = n.getImageData(0, 0, 256, 256).data,
    i = document.createElement(`canvas`);
  i.width = i.height = 256;
  let a = i.getContext(`2d`),
    o = a.createImageData(256, 256);
  for (let e = 0; e < 256; e += 1)
    for (let t = 0; t < 256; t += 1) {
      let n = yt(t / 32, e / 32, 4) * 0.6 + yt(t / 7 + 40, e / 7, 2) * 0.4,
        i = Math.min(255, 240 + (n - 0.43) * 64),
        a = (e * 256 + t) * 4;
      ((o.data[a] = o.data[a + 2] = i), (o.data[a + 1] = r[a]), (o.data[a + 3] = 255));
    }
  a.putImageData(o, 0, 0);
  let s = new l(i);
  return ((s.wrapS = s.wrapT = T), (s.colorSpace = v), (s.anisotropy = 8), s);
}
function Sr() {
  let e = new L({ vertexColors: !0, map: xr(), roughness: 0.96 });
  return (
    (e.onBeforeCompile = (e) => {
      ((e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>
attribute float aLawn;
varying float vLawn;`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
vLawn = aLawn;`,
        )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
varying float vLawn;`,
          )
          .replace(
            `#include <map_fragment>`,
            `#ifdef USE_MAP
        vec4 detail = texture2D(map, vMapUv);
        diffuseColor.rgb *= detail.r * mix(1.0, detail.g * ${br.toFixed(3)}, vLawn);
      #endif`,
          )));
    }),
    (e.customProgramCacheKey = () => `ground`),
    e
  );
}
function Cr(e) {
  let t = e.low ? 80 : 130,
    n = e.low ? 180 : 300,
    r = Xn.r,
    i = [0, Z(0, 0), 0],
    a = [],
    o = [0, 0],
    s = [],
    c = [],
    l = [Q(`#93B470`), Q(`#A9C77C`), Q(`#7EA163`)],
    u = Q(`#CDB393`),
    d = Q(`#8FAFBC`),
    f = new w(),
    m = new w(),
    h = (e, t) => {
      let n = yt(e * 0.08 + 3, t * 0.08, 3),
        r = yt(e * 0.5, t * 0.5, 2);
      (yr(l[0], n > 0.44 ? l[1] : l[2], Math.abs(n - 0.44) * 3, f), f.offsetHSL(0, 0, (r - 0.375) * 0.06));
      let i = ar(e, t),
        a = V.smoothstep(i, 0.5, 0.82);
      yr(f, u, a, f);
      let o = Math.hypot(e - X.pond.x, t - X.pond.z),
        c = 1 - V.smoothstep(o, X.pond.r - 0.6, X.pond.r + 0.5);
      (c > 0 && yr(f, d, c, f), s.push((1 - a) * (1 - c)));
      let p = Math.hypot(e, t);
      return (m.copy(f).offsetHSL(0.01, 0.02, 0.04), yr(f, m, V.smoothstep(p, Xn.r - 2.5, Xn.r), f).clone());
    };
  a.push(...h(0, 0).toArray());
  for (let e = 1; e <= t; e += 1) {
    let s = r * (e / t) ** 0.92;
    for (let t = 0; t < n; t += 1) {
      let r = (t / n) * Math.PI * 2 + (e % 2) * (Math.PI / n),
        c = Math.cos(r) * s,
        l = Math.sin(r) * s;
      (i.push(c, Z(c, l), l), a.push(...h(c, l).toArray()), o.push(c / 3.2, l / 3.2));
    }
  }
  let g = (e, t) => (e === 0 ? 0 : 1 + (e - 1) * n + (((t % n) + n) % n));
  for (let e = 0; e < n; e += 1) c.push(0, g(1, e + 1), g(1, e));
  for (let e = 1; e < t; e += 1)
    for (let t = 0; t < n; t += 1) {
      let n = g(e, t),
        r = g(e, t + 1),
        i = g(e + 1, t),
        a = g(e + 1, t + 1);
      c.push(n, r, i, r, a, i);
    }
  let _ = new F();
  (_.setAttribute(`position`, new p(i, 3)),
    _.setAttribute(`color`, new p(a, 3)),
    _.setAttribute(`uv`, new p(o, 2)),
    _.setAttribute(`aLawn`, new p(s, 1)),
    _.setIndex(c),
    _.computeVertexNormals());
  let v = new k(_, Sr());
  return ((v.receiveShadow = !0), (v.name = `ground`), v);
}
function wr(e, t) {
  let n = V.clamp((-0.72 - t) / 24, 0, 1),
    r = Math.floor((t + 0.7) / 2.3),
    i = G(Math.cos(e) * 3.1, Math.sin(e) * 3.1, t * 0.18) - 0.5,
    a = (G(r * 7.1, e * 2.6, 3.3) - 0.5) * 0.09;
  return Xn.r * (1 - 0.9 * n ** 1.25) * (1 + i * 0.16 + a);
}
function Tr(e) {
  let t = e.low ? 120 : 200,
    n = e.low ? 40 : 60,
    r = Xn.r,
    i = [],
    a = [],
    o = [],
    s = [Q(`#E8D3B4`), Q(`#DCC29E`), Q(`#E4CDAE`), Q(`#D3B693`), Q(`#DEC6A6`)],
    c = Q(`#B89A7E`),
    l = Q(`#B49A86`),
    d = Q(`#7E9C6A`),
    f = Q(`#93AE79`),
    m = Q(`#8E6A4E`),
    h = new w(),
    g = new w();
  for (let e = 0; e <= n; e += 1) {
    let o = (e / n) ** 1.35,
      u = -0.72 - o * 24;
    for (let p = 0; p <= t; p += 1) {
      let _ = (p / t) * Math.PI * 2,
        v = Math.floor((u + 0.7) / 2.3),
        y = G(Math.cos(_) * 3.1, Math.sin(_) * 3.1, u * 0.18) - 0.5,
        b = (G(v * 7.1, _ * 2.6, 3.3) - 0.5) * 0.09,
        x = r * (1 - 0.9 * o ** 1.25) * (1 + y * 0.16 + b) + (e === 0 ? -0.15 : 0);
      (e === n && (x = 0.4), i.push(Math.cos(_) * x, u, Math.sin(_) * x));
      let S = u + G(_ * 4.1, u * 0.3, 2) * 1.4 - 0.7,
        C = Math.floor(-S / 2.1),
        w = -S / 2.1 - C;
      (h.copy(s[((C % s.length) + s.length) % s.length]),
        yr(h, c, (1 - V.smoothstep(w, 0, 0.1)) * 0.55, h),
        yr(h, l, V.smoothstep(o, 0.3, 1) * 0.7, h));
      let T = -0.72 - u,
        E = 0.5 + 1.9 * G(_ * 9, 0.5, 7) ** 2.2;
      (T < 2.2 && yr(m, h, V.smoothstep(T, 1.3, 2.2), h),
        T < E && yr(h, yr(d, f, G(_ * 22, u * 3, 4), g), 1 - V.smoothstep(T, E - 0.35, E), h),
        e === 0 && h.copy(d),
        a.push(h.r, h.g, h.b));
    }
  }
  for (let e = 0; e < n; e += 1)
    for (let n = 0; n < t; n += 1) {
      let r = e * (t + 1) + n,
        i = r + 1,
        a = r + t + 1,
        s = a + 1;
      o.push(r, a, i, i, a, s);
    }
  let _ = new F();
  (_.setAttribute(`position`, new p(i, 3)),
    _.setAttribute(`color`, new p(a, 3)),
    _.setIndex(o),
    _.computeVertexNormals());
  let v = new k(_, new L({ vertexColors: !0, roughness: 0.92 }));
  ((v.receiveShadow = !0), (v.castShadow = !1));
  let y = new u(r - 0.32, 0.42, 10, t);
  y.rotateX(Math.PI / 2);
  let b = new k(y, new L({ color: `#86A271`, roughness: 0.95 }));
  ((b.position.y = -0.62), (b.receiveShadow = !0));
  let x = new z();
  return (x.add(v, b, Er(e)), x);
}
function Er(e) {
  let t = xt(303),
    n = Xn.r,
    r = new z(),
    i = Math.atan2(X.pond.z, X.pond.x),
    a = new D(0.05, 1, 5, 3, !0);
  a.translate(0, -0.5, 0);
  {
    let e = a.attributes.position;
    for (let t = 0; t < e.count; t += 1) {
      let n = e.getY(t);
      (e.setX(t, e.getX(t) + Math.sin(n * 7) * 0.06), e.setZ(t, e.getZ(t) + Math.cos(n * 5) * 0.05));
    }
    a.computeVertexNormals();
  }
  let o = new ue(a, new L({ color: `#8A6A52`, roughness: 0.92 }), e.low ? 70 : 130),
    s = new y(1, 0);
  s.scale(1, 0.45, 0.8);
  let c = e.low ? 34 : 60,
    l = new ue(s, new L({ color: `#ffffff`, roughness: 0.9 }), c * 9),
    u = new P(),
    d = new E(),
    f = new ae(),
    p = new B(),
    m = new B(),
    h = [Q(`#7E9C6A`), Q(`#8EA978`), Q(`#6F8D60`), Q(`#9AB283`)],
    g = (e, t) => {
      let r = Math.max(n - 0.05, wr(e, -0.9)) + t;
      return [Math.cos(e) * r, Math.sin(e) * r];
    };
  for (let e = 0; e < o.count; e += 1) {
    let n = t() * Math.PI * 2;
    Math.abs(Math.atan2(Math.sin(n - i), Math.cos(n - i))) < 0.2 && (n += 0.5);
    let [r, a] = g(n, 0.02 + t() * 0.12),
      s = 0.7 + t() * 1.5;
    (d.setFromEuler(f.set((t() - 0.5) * 0.3, t() * 6.3, (t() - 0.5) * 0.3)),
      o.setMatrixAt(e, u.compose(p.set(r, -1 - t() * 0.5, a), d, m.set(0.7 + t() * 0.8, s, 0.7 + t() * 0.8))));
  }
  let _ = 0;
  for (let e = 0; e < c; e += 1) {
    let n = t() * Math.PI * 2;
    Math.abs(Math.atan2(Math.sin(n - i), Math.cos(n - i))) < 0.2 && (n += 0.5);
    let [r, a] = g(n, 0),
      o = 1 + t() * 1.2,
      s = 0.12 + t() * 0.1;
    for (let i = 0; i < 9; i += 1) {
      let c = i / 8,
        g = -0.7 - c * o,
        v = Math.sin(c * 5 + e) * 0.12;
      (p.set(r + Math.cos(n) * (s + v) + Math.sin(n) * v, g, a + Math.sin(n) * (s + v) - Math.cos(n) * v),
        d.setFromEuler(f.set(t() * 6, t() * 6, t() * 6)));
      let y = (0.13 + t() * 0.07) * (1 - c * 0.35);
      (l.setMatrixAt(_, u.compose(p, d, m.setScalar(y))), l.setColorAt(_, h[(t() * h.length) | 0]), (_ += 1));
    }
  }
  for (let e of [o, l]) ((e.castShadow = !1), (e.receiveShadow = !0), r.add(e));
  return r;
}
function Dr(e) {
  let t = xt(77),
    n = new z(),
    r = [],
    i = new L({ color: `#E4D0B4`, roughness: 0.9, flatShading: !1 }),
    a = new L({ color: `#92AC7C`, roughness: 0.95 });
  for (let o = 0; o < 9; o += 1) {
    let s = 0.8 + t() * 2.2,
      c = new y(1, e.low ? 2 : 3);
    (c.deleteAttribute(`normal`), c.deleteAttribute(`uv`), (c = we(c)));
    let l = c.attributes.position;
    for (let e = 0; e < l.count; e += 1) {
      let t = new B().fromBufferAttribute(l, e),
        n = 1 + (G(t.x * 1.7 + o, t.y * 1.7, t.z * 1.7) - 0.5) * 0.5;
      (t.multiplyScalar(n), t.y > 0.2 ? (t.y = 0.2 + (t.y - 0.2) * 0.25) : (t.y *= 1.5), l.setXYZ(e, t.x, t.y, t.z));
    }
    c.computeVertexNormals();
    let u = new k(c, i),
      d = new k(new j(0.95, 1, 0.16, 18), a);
    d.position.y = 0.26;
    let f = new z();
    (f.add(u, d), f.scale.setScalar(s));
    let p = t() * Math.PI * 2,
      m = 18 + t() * 26;
    (f.position.set(Math.cos(p) * m, -6 - t() * 22, Math.sin(p) * m),
      (f.rotation.y = t() * 6),
      f.traverse((e) => {
        e.isMesh && ((e.castShadow = !1), (e.receiveShadow = !0));
      }),
      n.add(f),
      r.push({ g: f, y: f.position.y, ph: t() * 6, sp: 0.2 + t() * 0.3 }));
  }
  return e.low
    ? (vt(n), { group: n, update() {} })
    : {
        group: n,
        update(e) {
          for (let t of r) t.g.position.y = t.y + Math.sin(e * t.sp + t.ph) * 0.35;
        },
      };
}
function Or() {
  let e = (e, t, n) => {
      let r = 0.5 - e,
        i = r - n;
      return [
        [i, r],
        [r, i],
        [r, -i],
        [i, -r],
        [-i, -r],
        [-r, -i],
        [-r, i],
        [-i, r],
      ].map(([e, n]) => [e, t, n]);
    },
    t = [e(0.13, 0.5, 0.1), e(0, -0.15, 0.16)],
    n = (e, t) => 1 + e * 8 + (t % 8),
    r = [];
  for (let e = 0; e < 8; e += 1) r.push(0, n(0, e), n(0, e + 1));
  for (let e = 0; e < 1; e += 1)
    for (let t = 0; t < 8; t += 1) r.push(n(e, t), n(e + 1, t), n(e + 1, t + 1), n(e, t), n(e + 1, t + 1), n(e, t + 1));
  let i = new F();
  return (i.setAttribute(`position`, new p([0, 0.5, 0, ...t.flat(2)], 3)), i.setIndex(r), i.computeVertexNormals(), i);
}
function kr(e) {
  let t = xt(5),
    n = [],
    r = [Q(`#DAC4A9`), Q(`#D0B89E`), Q(`#E1CCB3`), Q(`#C9B097`)],
    i = Q(`#B9A086`),
    a = (e, t, r, i, a, o, s = 0.14) => n.push({ x: e, z: t, sx: r, sz: i, rot: a, color: o, h: s }),
    o = (e, t, n, r, i, o) => a(Math.cos(e) * t, Math.sin(e) * t, n, r, -e + Math.PI / 2, i, o);
  {
    let e = Math.round((2 * Math.PI * 3) / 0.62);
    for (let t = 0; t < e; t += 1) o((t / e) * Math.PI * 2, 3, (2 * Math.PI * 3) / e - 0.05, 0.5, i, 0.16);
  }
  for (let e = 3.55; e < Xn.plaza - 0.2; e += 0.52) {
    let n = Math.round((2 * Math.PI * e) / 0.6),
      i = t() * Math.PI;
    for (let a = 0; a < n; a += 1)
      o(i + (a / n) * Math.PI * 2, e, (2 * Math.PI * e) / n - 0.06, 0.46, r[(t() * r.length) | 0]);
  }
  {
    let e = Xn.plaza,
      t = Math.round((2 * Math.PI * e) / 0.66);
    for (let n = 0; n < t; n += 1) o((n / t) * Math.PI * 2, e, (2 * Math.PI * e) / t - 0.06, 0.42, i, 0.15);
  }
  for (let e of Zn)
    for (let n = 0; n < e.pts.length - 1; n += 1) {
      let [i, o] = e.pts[n],
        [s, c] = e.pts[n + 1],
        l = Math.hypot(s - i, c - o),
        u = (s - i) / l,
        d = (c - o) / l,
        f = -d,
        p = u,
        m = Math.max(2, Math.round(e.w / 0.66));
      for (let n = 0, s = 0; n < l; n += 0.56, s += 1)
        for (let c = 0; c < m; c += 1) {
          let l = (c + 0.5 + (s % 2 ? 0.5 : 0)) / m - 0.5;
          if (Math.abs(l) > 0.5) continue;
          let h = i + u * n + f * l * e.w + (t() - 0.5) * 0.05,
            g = o + d * n + p * l * e.w + (t() - 0.5) * 0.05;
          Math.hypot(h, g) < Xn.plaza + 0.35 ||
            a(h, g, e.w / m - 0.07, 0.5, Math.atan2(u, d) + (t() - 0.5) * 0.12, r[(t() * r.length) | 0]);
        }
    }
  let s = Or(),
    c = new L({ color: `#ffffff`, roughness: 0.84 }),
    l = new ue(s, c, n.length),
    u = new P(),
    d = new E(),
    f = new ae(),
    p = new B(),
    m = new B();
  return (
    n.forEach((e, n) => {
      (d.setFromEuler(f.set(0, e.rot, 0)),
        p.set(e.sx, e.h, e.sz),
        m.set(e.x, Z(e.x, e.z) - e.h / 2 + 0.03, e.z),
        l.setMatrixAt(n, u.compose(m, d, p)),
        l.setColorAt(n, e.color.clone().offsetHSL(0, 0, (t() - 0.5) * 0.04)));
    }),
    (l.receiveShadow = !0),
    (l.castShadow = !1),
    l
  );
}
function Ar({ deep: e = `#7C9FC0`, shallow: t = `#AFC8DE`, radius: n = 5 } = {}) {
  return new de({
    transparent: !0,
    depthWrite: !1,
    uniforms: {
      uTime: { value: 0 },
      uDeep: { value: Q(e) },
      uShallow: { value: Q(t) },
      uSky: { value: Q(`#DCE5F0`) },
      uSun: { value: Q(`#FFF1D6`) },
      uR: { value: n },
      uCurve: sr,
    },
    vertexShader: `${cr} varying vec3 vW; varying vec2 vL; void main(){ vL = position.xy; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * curveWorld(w); }`,
    fragmentShader: `${St}
      uniform float uTime, uR; uniform vec3 uDeep, uShallow, uSky, uSun; varying vec3 vW; varying vec2 vL;
      void main(){
        float r = length(vL) / uR;
        float depth = 1.0 - smoothstep(0.0, 1.0, r);
        vec3 col = mix(uShallow, uDeep, pow(depth, 0.6));
        float n = fbm(vW.xz * 0.9 + vec2(uTime * 0.12, uTime * 0.07));
        float n2 = fbm(vW.xz * 2.3 - vec2(uTime * 0.2, -uTime * 0.15));
        col += (n - 0.5) * 0.08;
        vec3 V = normalize(cameraPosition - vW);
        float fres = pow(1.0 - clamp(V.y, 0.0, 1.0), 4.0);
        col = mix(col, uSky, fres * 0.55);
        float glint = smoothstep(0.78, 0.86, n2 * n) ;
        col += uSun * glint * 0.9;
        float foam = smoothstep(0.86, 0.99, r + (n2 - 0.5) * 0.08);
        col = mix(col, vec3(0.96, 0.98, 0.97), foam * 0.55);
        gl_FragColor = vec4(col, 0.94);
      }`,
  });
}
function jr(e) {
  let t = X.pond,
    n = new z(),
    i = Ar({ radius: t.r }),
    a = new k(new r(t.r, 64), i);
  ((a.rotation.x = -Math.PI / 2),
    a.position.set(t.x, -0.13, t.z),
    (a.renderOrder = 1),
    (a.userData.noAO = !0),
    n.add(a));
  let o = xt(31),
    s = Math.atan2(t.z, t.x),
    c = new y(1, 1),
    l = e.low ? 80 : 210,
    u = new ue(c, new L({ color: `#ffffff`, roughness: 0.9 }), l),
    d = new P(),
    f = new E(),
    m = new ae(),
    h = [Q(`#d9cfbf`), Q(`#cfc4b2`), Q(`#e2d9ca`), Q(`#bfb8ad`), Q(`#d4cab6`)],
    g = 0;
  for (let e = 0; e < l; e += 1) {
    let e = o() * Math.PI * 2,
      n = Math.atan2(Math.sin(e - s), Math.cos(e - s));
    if (Math.abs(n) < 0.42) continue;
    let r = t.r + 0.05 + o() * 0.55,
      i = 0.12 + o() * 0.17;
    (f.setFromEuler(m.set(o(), o() * 6, o())),
      d.compose(
        new B(t.x + Math.cos(e) * r, Z(t.x + Math.cos(e) * r, t.z + Math.sin(e) * r) + i * 0.25, t.z + Math.sin(e) * r),
        f,
        new B(i * 1.35, i * 0.7, i),
      ),
      u.setMatrixAt(g, d),
      u.setColorAt(g, h[(o() * h.length) | 0].clone().offsetHSL(0, 0, (o() - 0.5) * 0.05)),
      (g += 1));
  }
  ((u.count = g), (u.castShadow = !0), (u.receiveShadow = !0), n.add(u));
  let _ = new L({ color: `#88A574`, roughness: 0.7, side: 2 }),
    v = new L({ color: `#EDBDB5`, roughness: 0.6, emissive: `#E7B7B0`, emissiveIntensity: 0.12 });
  for (let e = 0; e < 9; e += 1) {
    let i = o() * Math.PI * 2,
      a = 1 + o() * (t.r - 2),
      s = new k(new r(0.32 + o() * 0.22, 20, 0.35, Math.PI * 2 - 0.5), _);
    if (
      ((s.rotation.x = -Math.PI / 2),
      (s.rotation.z = o() * 6),
      s.position.set(t.x + Math.cos(i) * a, -0.11, t.z + Math.sin(i) * a),
      (s.userData.noAO = !0),
      n.add(s),
      e % 3 == 0)
    ) {
      let e = new k(new R(0.09, 10, 8), v);
      ((e.scale.y = 0.6), e.position.copy(s.position).add(new B(0.05, 0.05, 0)), n.add(e));
    }
  }
  let b = new de({
      transparent: !0,
      depthWrite: !1,
      side: 2,
      uniforms: { uTime: { value: 0 }, uCurve: sr },
      vertexShader: `${cr} varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * viewMatrix * curveWorld(modelMatrix * vec4(position, 1.0)); }`,
      fragmentShader: `${St}
      uniform float uTime; varying vec2 vUv;
      void main(){
        float s = vnoise(vec2(vUv.x * 26.0, vUv.y * 5.0 - uTime * 2.4)) * 0.6 + vnoise(vec2(vUv.x * 61.0, vUv.y * 9.0 - uTime * 3.4)) * 0.4;
        float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        float fade = 1.0 - smoothstep(0.45, 1.0, vUv.y);
        vec3 col = mix(vec3(0.78, 0.86, 0.93), vec3(0.99, 0.98, 0.96), smoothstep(0.35, 0.85, s));
        gl_FragColor = vec4(col, edge * fade * (0.55 + s * 0.45));
      }`,
    }),
    x = (e, { from: t, top: n, drop: r, out0: i, out1: a, w0: o, w1: s }) => {
      let c = Math.cos(e),
        l = Math.sin(e),
        u = -l,
        d = c,
        f = [],
        m = [],
        h = [];
      for (let e = 0; e <= 40; e += 1) {
        let p = e / 40,
          h = i + Math.sqrt(p) * a,
          g = o + p * s;
        for (let e = 0; e <= 8; e += 1) {
          let i = e / 8,
            a = (i - 0.5) * g;
          (f.push(c * (t + h) + u * a, n - p * r, l * (t + h) + d * a), m.push(i, p));
        }
      }
      for (let e = 0; e < 40; e += 1)
        for (let t = 0; t < 8; t += 1) {
          let n = e * 9 + t;
          h.push(n, n + 8 + 1, n + 1, n + 1, n + 8 + 1, n + 8 + 2);
        }
      let g = new F();
      (g.setAttribute(`position`, new p(f, 3)), g.setAttribute(`uv`, new p(m, 2)), g.setIndex(h));
      let _ = new k(g, b);
      return ((_.userData.noAO = !0), (_.renderOrder = 2), (_.frustumCulled = !1), _);
    },
    S = Xn.r - 0.35,
    C = Math.cos(s),
    w = Math.sin(s);
  n.add(x(s, { from: S, top: -0.12, drop: 26, out0: 0.4, out1: 2.4, w0: 2.6, w1: 2.2 }));
  let T = 2.62;
  n.add(
    x(T, { from: Math.max(Xn.r - 0.2, wr(T, -1.6)), top: -1.5, drop: 22, out0: 0.15, out1: 1.4, w0: 0.7, w1: 0.9 }),
  );
  let ee = Ar({ radius: 2.2 }),
    D = new k(new I(2.8, 3.2), ee);
  return (
    (D.rotation.x = -Math.PI / 2),
    (D.rotation.z = -s + Math.PI / 2),
    D.position.set(C * (S - 1.2), -0.14, w * (S - 1.2)),
    (D.userData.noAO = !0),
    (D.renderOrder = 1),
    n.add(D),
    {
      group: n,
      water: a,
      spillPoint: new B(C * S, 0, w * S),
      update(e) {
        ((i.uniforms.uTime.value = e), (ee.uniforms.uTime.value = e * 2.5), (b.uniforms.uTime.value = e));
      },
    }
  );
}
function Mr(e, t) {
  let n = new z();
  ((n.name = `island`), n.add(Cr(t), Tr(t), kr(t)));
  let r = Dr(t),
    i = jr(t);
  return (
    n.add(r.group, i.group),
    e.add(n),
    {
      group: n,
      water: i,
      update(e, t) {
        (r.update(t), i.update(t));
      },
    }
  );
}
var $ = (e) => new w(e);
function Nr(e, { amp: t = 0.05, base: n = 1.2, uniforms: r, local: i = !1, shake: a = !1, glow: o = 0 }) {
  return (
    (e.customProgramCacheKey = () => `wind:${t}:${n}:${i}:${a}:${o}`),
    (e.onBeforeCompile = (e) => {
      ((e.uniforms.uTime = r.uTime),
        a && (e.uniforms.uShake = r.uShake),
        o &&
          ((e.uniforms.uSunDir = { value: Ct }),
          (e.fragmentShader = e.fragmentShader
            .replace(
              `#include <common>`,
              `#include <common>
uniform vec3 uSunDir;`,
            )
            .replace(
              `#include <emissivemap_fragment>`,
              `#include <emissivemap_fragment>
          { vec3 L = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz), V = normalize(vViewPosition);
            float back = max(dot(-V, L), 0.0), rim = 1.0 - max(dot(normal, V), 0.0), through = max(dot(-normal, L), 0.0);
            totalEmissiveRadiance += diffuseColor.rgb * vec3(1.25, 1.05, 0.45) * ${o.toFixed(2)} * back * back * (rim * rim * 0.9 + through * 0.35); }`,
            ))));
      let s = i ? `vec4(0.0, 0.0, 0.0, 1.0)` : `vec4(transformed, 1.0)`;
      e.vertexShader = e.vertexShader
        .replace(
          `#include <common>`,
          `#include <common>\nuniform float uTime;${a ? `\nuniform float uShake[${Pr}];\nattribute float aTree;` : ``}`,
        )
        .replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
        { vec4 wp0 = modelMatrix * ${s};
          #ifdef USE_INSTANCING
            wp0 = modelMatrix * instanceMatrix * ${s};
          #endif
          float hh = ${i ? `max(0.0, transformed.y)` : `max(0.0, wp0.y - ${n.toFixed(2)})`};
          float s = sin(uTime * 1.3 + wp0.x * 0.35 + wp0.z * 0.21) + 0.5 * sin(uTime * 2.7 + wp0.z * 0.8);
          transformed.x += s * ${t.toFixed(3)} * hh; transformed.z += s * ${(t * 0.6).toFixed(3)} * hh;
          ${
            a
              ? `float sk = uShake[int(aTree + 0.5)];
          transformed.x += sin(uTime * 21.0 + aTree * 1.3) * sk * (0.04 + hh * 0.05);
          transformed.z += cos(uTime * 17.0 + aTree * 2.1) * sk * (0.03 + hh * 0.04);
          transformed.y += sin(uTime * 25.0 + aTree) * sk * 0.02;`
              : ``
          } }`,
        );
    }),
    e
  );
}
var Pr = 64,
  Fr = (e, n, { shade: r = 0.28, jitter: i = 0.04, seed: a = 0 } = {}) => {
    let o = e.attributes.position.count,
      s = new Float32Array(o * 3),
      c = new w(),
      l = e.attributes.normal,
      u = e.attributes.position;
    for (let e = 0; e < o; e += 1) {
      let t = 1 - r + r * (l.getY(e) * 0.5 + 0.5),
        o = (G(u.getX(e) * 1.3 + a, u.getY(e) * 1.3, u.getZ(e) * 1.3) - 0.5) * i;
      (c.copy(n).offsetHSL(0, 0, o).multiplyScalar(t), (s[e * 3] = c.r), (s[e * 3 + 1] = c.g), (s[e * 3 + 2] = c.b));
    }
    return (e.setAttribute(`color`, new t(s, 3)), e);
  },
  Ir = $(`#7F9DB8`),
  Lr = $(`#F4DDAE`),
  Rr = (e, n, { shade: r = 0.22, jitter: i = 0.05, seed: a = 0 } = {}) => {
    let o = e.attributes.position.count,
      s = new Float32Array(o * 3),
      c = new w(),
      l = n.clone().lerp(Lr, 0.16).multiplyScalar(1.06),
      u = n.clone().lerp(Ir, 0.24).multiplyScalar(0.84),
      d = e.attributes.normal,
      f = e.attributes.position;
    for (let e = 0; e < o; e += 1) {
      let t = d.getY(e),
        n = Math.max(0, d.getX(e) * Ct.x + t * Ct.y + d.getZ(e) * Ct.z);
      c.copy(u).lerp(l, V.smoothstep(n * 0.75 + (t * 0.5 + 0.5) * 0.4, 0.2, 0.95));
      let o = (G(f.getX(e) * 1.3 + a, f.getY(e) * 1.3, f.getZ(e) * 1.3) - 0.5) * i;
      (c.offsetHSL(0, 0, o).multiplyScalar(1 - r + r * (t * 0.5 + 0.5)),
        (s[e * 3] = c.r),
        (s[e * 3 + 1] = c.g),
        (s[e * 3 + 2] = c.b));
    }
    return (e.setAttribute(`color`, new t(s, 3)), e);
  },
  zr = (e, t, n, r = 0) => {
    let i = new y(1, e);
    (i.deleteAttribute(`normal`), i.deleteAttribute(`uv`), (i = we(i)));
    let a = i.attributes.position;
    for (let e = 0; e < a.count; e += 1) {
      let i = a.getX(e),
        o = a.getY(e),
        s = a.getZ(e),
        c = 1 + (G(i * 1.8 + n, o * 1.8, s * 1.8) - 0.5) * t;
      (r && (c += (G(i * 4.6 + n * 1.7, o * 4.6 + 3.1, s * 4.6) ** 0.8 - 0.45) * r), a.setXYZ(e, i * c, o * c, s * c));
    }
    return (i.computeVertexNormals(), i);
  },
  Br = 3,
  Vr = (e) => {
    let t = [`position`, `normal`, `color`, `aTree`];
    for (let n of Object.keys(e.attributes)) t.includes(n) || e.deleteAttribute(n);
    return e.index ? e.toNonIndexed() : e;
  },
  Hr = (e, t) => (e.setAttribute(`aTree`, new p(new Float32Array(e.attributes.position.count).fill(t), 1)), e);
function Ur(e, t, n, r, i) {
  let a = Z(e, t),
    o = [],
    s = [],
    c = new j(0.13 * n, 0.22 * n, 2.3 * n, 7);
  (c.translate(0, 1.15 * n, 0), Fr(c, $(`#8A6A52`), { shade: 0.2 }), o.push(c.translate(e, a, t)));
  let l = 2 + ((i() * 2) | 0),
    u = r[(i() * r.length) | 0];
  for (let r = 0; r < l; r += 1) {
    let o = zr(Br, 0.26, r * 7 + e, 0.16),
      c = (1.05 + i() * 0.5) * n;
    o.scale(c * 1.05, c * 0.9, c);
    let d = (r / l) * Math.PI * 2 + i();
    (o.translate(Math.cos(d) * 0.62 * n * !!r, (2.6 + i() * 0.8 + (r ? 0 : 0.55)) * n, Math.sin(d) * 0.62 * n * !!r),
      Rr(o, u.clone().offsetHSL((i() - 0.5) * 0.02, 0, (i() - 0.5) * 0.05), { seed: r }),
      s.push(o.translate(e, a, t)));
  }
  return { wood: o, leaf: s, r: 0.35 * n };
}
function Wr(e, t, n, r) {
  let i = Z(e, t),
    a = [];
  for (let e = 0; e <= 14; e += 1) {
    let t = e / 14;
    a.push(new oe(Math.sin(t ** 0.75 * Math.PI) * 0.62 * (1 - t * 0.35) + 0.02, t * n));
  }
  let o = new C(a, 14),
    s = o.attributes.position;
  for (let t = 0; t < s.count; t += 1) {
    let n = s.getX(t),
      r = s.getY(t),
      i = s.getZ(t),
      a = 1 + (G(n * 2.5, r * 1.4, i * 2.5 + e) - 0.5) * 0.35;
    s.setXYZ(t, n * a, r, i * a);
  }
  (o.computeVertexNormals(),
    o.translate(e, i + 0.25, t),
    Rr(o, $(`#66855C`).offsetHSL(0, 0, (r() - 0.5) * 0.05), { shade: 0.2, jitter: 0.08 }));
  let c = new j(0.08, 0.12, 0.6, 6);
  return (c.translate(e, i + 0.3, t), Fr(c, $(`#86674E`)), { wood: [c], leaf: [o], r: 0.45 });
}
function Gr(e, t, n, r) {
  let a = Z(e, t),
    o = [],
    s = [],
    c = new pe([
      new B(0, 0, 0),
      new B(0.3 * n, 1.4 * n, 0.1),
      new B(-0.2 * n, 2.6 * n, 0.2),
      new B(0.5 * n, 3.6 * n, -0.1),
    ]),
    l = new i(c, 16, 0.16 * n, 7, !1);
  (Fr(l, $(`#86654C`), { shade: 0.25 }), o.push(l.translate(e, a, t)));
  for (let [i, o, c, l, u] of [
    [0.6, 3.8, -0.1, 1.9, 0.42],
    [-0.9, 3, 0.4, 1.5, 0.36],
    [1.2, 2.5, 0.6, 1.2, 0.32],
    [0.1, 4.5, 0.1, 1.2, 0.34],
  ]) {
    let d = zr(2, 0.35, i * 9, 0.12);
    (d.scale(l * n, u * n, l * 0.8 * n),
      d.translate(i * n, o * n, c * n),
      Rr(d, $(`#6E8F62`).offsetHSL(0, 0, (r() - 0.5) * 0.06), { shade: 0.26 }),
      s.push(d.translate(e, a, t)));
  }
  return { wood: o, leaf: s, r: 0.4 * n };
}
function Kr(e, t, n, r) {
  let i = Ur(e, t, n, [$(`#E9B9B2`), $(`#F0C8C0`), $(`#DFA9A2`)], r);
  return (i.wood.forEach((e) => Fr(e, $(`#7A5A48`), { shade: 0.2 })), (i.blossom = !0), i);
}
function qr(e, t, n) {
  let r = Z(e, t),
    i = [],
    a = [];
  for (let o = 0; o < 11; o += 1) {
    let s = n() * Math.PI * 2,
      c = n() * 0.9,
      l = 4 + n() * 2.2,
      u = (n() - 0.5) * 0.18,
      d = new j(0.045, 0.06, l, 6, 6);
    (d.translate(0, l / 2, 0), d.rotateZ(u), d.rotateY(s), Fr(d, $(`#A2B77E`), { shade: 0.15, jitter: 0.06 }));
    let f = e + Math.cos(s) * c,
      p = t + Math.sin(s) * c;
    i.push(d.translate(f, r, p));
    for (let e = 0; e < 5; e += 1) {
      let t = zr(1, 0.2, o * 5 + e);
      (t.scale(0.55, 0.16, 0.22),
        t.rotateY(n() * 6),
        t.rotateZ((n() - 0.5) * 0.6),
        t.translate(f + Math.sin(u) * -l * 0.8 + (n() - 0.5) * 0.7, r + l * (0.65 + n() * 0.35), p + (n() - 0.5) * 0.7),
        Rr(t, $(`#A8BF8A`)),
        a.push(t));
    }
  }
  return { wood: i, leaf: a, r: 1 };
}
function Jr(e, t, n, r, i) {
  let a = Z(e, t),
    o = [];
  for (let s = 0; s < 3; s += 1) {
    let c = zr(2, 0.3, e + s, 0.12),
      l = n * (0.55 + i() * 0.3);
    (c.scale(l, l * 0.8, l),
      c.translate((i() - 0.5) * n * 0.9, l * 0.55, (i() - 0.5) * n * 0.9),
      Rr(c, r.clone().offsetHSL(0, 0, (i() - 0.5) * 0.06)),
      o.push(c.translate(e, a, t)));
  }
  return { wood: [], leaf: o, r: n * 0.7 };
}
function Yr(e, t, n) {
  let r = Z(e, t),
    i = [],
    a = 1.25 + n() * 0.55,
    o = new j(0.022, 0.03, a, 5);
  (o.translate(0, a / 2, 0), Fr(o, $(`#7A9A5E`), { shade: 0.1 }), i.push(o));
  for (let e of [-1, 1]) {
    let t = zr(1, 0.1, e);
    (t.scale(0.16, 0.03, 0.08),
      t.rotateZ(e * 0.4),
      t.translate(e * 0.12, a * (0.45 + n() * 0.2), 0),
      Fr(t, $(`#86A26A`)),
      i.push(t));
  }
  let s = new j(0.11, 0.12, 0.05, 14);
  (s.rotateX(Math.PI / 2), Fr(s, $(`#6B4A30`), { shade: 0.1 }));
  let c = [];
  for (let e = 0; e < 14; e += 1) {
    let t = new R(1, 6, 4);
    (t.scale(0.035, 0.1, 0.012),
      t.translate(0, 0.17, -0.005),
      t.rotateZ((e / 14) * Math.PI * 2),
      Fr(t, $(`#E8B930`), { shade: 0.05, jitter: 0.06 }),
      c.push(t));
  }
  let l = xe([Vr(s), ...c.map(Vr)]);
  return (
    l.rotateX(-0.25),
    l.rotateY(-Math.PI / 2 + (n() - 0.5) * 0.5),
    l.translate(0, a + 0.05, 0),
    i.push(l),
    i.map((n) => Vr(n).translate(e, r, t))
  );
}
function Xr() {
  let e = [0, 0, 0],
    t = [1, 0.8, 0.42],
    n = [];
  for (let n = 0; n < 30; n += 1) {
    let r = (n / 30) * Math.PI * 2,
      i = 0.38 + 0.62 * Math.abs(Math.cos(r * 2.5)) ** 0.3;
    (e.push(Math.cos(r) * i, 0.22 * i * i, Math.sin(r) * i), t.push(1, 1, 1));
  }
  for (let e = 0; e < 30; e += 1) n.push(0, 1 + ((e + 1) % 30), 1 + e);
  let r = new F();
  return (
    r.setAttribute(`position`, new p(e, 3)),
    r.setAttribute(`color`, new p(t, 3)),
    r.setIndex(n),
    r.computeVertexNormals(),
    r
  );
}
function Zr(e, n, { xiyou: r = !1 } = {}) {
  let i = xt(2024),
    a = [],
    o = [],
    s = [],
    c = [],
    l = new Float32Array(Pr),
    u = { uTime: { value: 0 }, uShake: { value: l } },
    d = [$(`#8FAA78`), $(`#9DB584`), $(`#7E9C6A`), $(`#A3B98A`)],
    f = (e, t, n, r = `tree`) => {
      let i = Math.min(c.length, 63),
        l = 0,
        u = 1 / 0,
        d = 0,
        f = Z(t, n);
      for (let r of e.leaf) {
        r.computeBoundingBox();
        let e = r.boundingBox;
        ((l = Math.max(l, e.max.y - f)),
          (u = Math.min(u, e.min.y - f)),
          (d = Math.max(d, e.max.x - t, t - e.min.x, e.max.z - n, n - e.min.z)));
      }
      let p = { r: d * 0.8, y0: Math.max(0, u), y1: l };
      (c.push({
        id: i,
        x: t,
        z: n,
        r: Math.max(e.r * 2.6, r === `bush` ? 0.7 : 1.1),
        h: Math.max(l, 0.8),
        kind: r,
        blossom: !!e.blossom,
        crown: p,
      }),
        a.push(...e.wood.map(Vr)),
        o.push(...e.leaf.map((e) => Hr(Vr(e), i))),
        s.push({ x: t, z: n, r: e.r }));
    },
    p = [],
    m = (e, t, n, ...r) => {
      (f(e(t, n, ...r, i), t, n), p.push([t, n]));
    };
  (m(Wr, 25, -9, 6.2),
    m(Wr, 25.4, 3.6, 5.4),
    m(Wr, 13.4, -8.8, 5),
    m(Wr, 24, -12.8, 4.6),
    m(Wr, 23.5, 7.2, 4.4),
    m(Gr, -24.6, -9.6, 1),
    r || m(Gr, -12.8, -9.2, 0.8),
    m(Kr, -12.6, 4.6, 0.95),
    m(Kr, -24.3, 4.4, 0.85),
    m(Kr, -7.5, 21.8, 0.8),
    f(qr(-22.8, -10.6, i), -22.8, -10.6),
    p.push([-22.8, -10.6]),
    f(qr(-26, 0.8, i), -26, 0.8),
    p.push([-26, 0.8]));
  for (let [e, t, n] of [
    [-8.6, -14.2, 0.95],
    [8.8, -14.8, 1.05],
    [-9.4, -20.4, 1.15],
    [9.6, -21, 1.1],
    [6.2, 24, 0.9],
    [-5.6, 26.1, 0.8],
    [11.2, 23.6, 0.95],
  ])
    (r && e < 0 && t < -12 && t > -16) || m(Ur, e, t, n, d);
  for (let e = 0, t = 0; e < 600 && t < (n.low ? 9 : 13); e += 1) {
    let e = i() * Math.PI * 2,
      n = 15 + i() * 11.5,
      r = Math.cos(e) * n,
      a = Math.sin(e) * n;
    ar(r, a) > 0.02 ||
      Math.hypot(r - X.pond.x, a - X.pond.z) < X.pond.r + 2.2 ||
      (Math.abs(r) < 4 && a > 20) ||
      p.some(([e, t]) => Math.hypot(e - r, t - a) < 3.6) ||
      (m(Ur, r, a, 0.75 + i() * 0.45, d), (t += 1));
  }
  for (let [e, t, n, r] of [
    [-5.4, -15.4, 0.8, `#86A272`],
    [5.4, -15.4, 0.8, `#86A272`],
    [-3.6, -15.5, 0.55, `#E2AFA8`],
    [3.6, -15.5, 0.55, `#EBC0B8`],
    [14.6, -7.4, 0.8, `#8FAA78`],
    [14.6, 2.6, 0.75, `#8FAA78`],
    [-14.6, -7, 0.75, `#7E9C6A`],
    [-14.6, 2.2, 0.7, `#7E9C6A`],
    [-2.6, 24.2, 0.6, `#93AE7C`],
    [2.8, 26.2, 0.55, `#93AE7C`],
  ])
    f(Jr(e, t, n, $(r), i), e, t, `bush`);
  let h = [0, Math.PI / 2, Math.PI, Math.PI * 1.5, ...(r ? [Math.PI * 1.25] : [])];
  for (let e = 0; e < 12; e += 1) {
    let t = (e / 12) * Math.PI * 2 + 0.26;
    if (h.some((e) => Math.abs(Math.atan2(Math.sin(t - e), Math.cos(t - e))) < 0.42)) continue;
    let n = Math.cos(t) * 9.9,
      r = Math.sin(t) * 9.9;
    f(Jr(n, r, 0.6 + i() * 0.25, d[e % 4], i), n, r, `bush`);
  }
  let g = [];
  for (let e = 0; e < 22; e += 1) {
    let t = 12.6 + (e % 6) * 0.42 + i() * 0.2,
      n = 3.6 + Math.floor(e / 6) * 0.45 + i() * 0.2;
    g.push(...Yr(t, n, i));
  }
  s.push({ x: 13.7, z: 4.3, r: 1.3 });
  let _ = new k(xe(a), new L({ vertexColors: !0, roughness: 0.95 })),
    v = Nr(new L({ vertexColors: !0, roughness: 0.9 }), { amp: 0.018, base: 1.4, uniforms: u, shake: !0, glow: 0.6 }),
    y = new k(xe(o), v),
    b = new k(xe(g), Nr(new L({ vertexColors: !0, roughness: 0.75 }), { amp: 0.03, base: 0.3, uniforms: u }));
  for (let e of [_, y, b]) ((e.castShadow = !0), (e.receiveShadow = !0));
  let x = [`#E7B7B0`, `#F6EEE3`, `#EFD58E`, `#C9B8D8`, `#E8A08A`, `#F0C9C2`].map($),
    S = [],
    C = [],
    w = [],
    T = [],
    ee = n.low ? 3 : 4,
    te = (e, t) =>
      Math.hypot(e - X.pond.x, t - X.pond.z) < X.pond.r + 0.7 ||
      s.some((n) => Math.hypot(n.x - e, n.z - t) < n.r + 0.25),
    O = (e, t) => {
      let n = x[Math.floor(G(e * 0.4, t * 0.4, 9) * 7) % x.length];
      S.push([e, t]);
      for (let r = 0; r < ee; r += 1) {
        let r = i() * Math.PI * 2,
          a = Math.sqrt(i()) * 0.26;
        C.push([e, t, Math.cos(r) * a, Math.sin(r) * a, n]);
      }
    };
  for (let e = 0; e < 2e4 && S.length < (n.low ? 150 : 260); e += 1) {
    let e = i() * Math.PI * 2,
      t = Math.sqrt(i()) * (Xn.r - 1.6),
      n = Math.cos(e) * t,
      r = Math.sin(e) * t,
      a = ar(n, r);
    a > 0.25 || a < 0.04 || te(n, r) || O(n, r);
  }
  for (let e = 0, t = 0; e < 2e4 && t < (n.low ? 80 : 200); e += 1) {
    let e = i() * Math.PI * 2,
      n = Math.sqrt(i()) * (Xn.r - 2.2),
      r = Math.cos(e) * n,
      a = Math.sin(e) * n;
    ar(r, a) > 0.02 || te(r, a) || (O(r, a), (t += 1));
  }
  for (let e = 0; e < 2e4 && T.length < (n.low ? 150 : 240); e += 1) {
    let e = i() * Math.PI * 2,
      t = Math.sqrt(i()) * (Xn.r - 2),
      n = Math.cos(e) * t,
      r = Math.sin(e) * t;
    ar(n, r) > 0.3 || te(n, r) || T.push([n, r, 0.07 + i() * 0.13]);
  }
  for (let e = 0; e < 4e4 && w.length < (n.low ? 560 : 2600); e += 1) {
    let e = i() * Math.PI * 2,
      t = Math.sqrt(i()) * (Xn.r - 1.2),
      n = Math.cos(e) * t,
      r = Math.sin(e) * t;
    ar(n, r) > 0.1 || Math.hypot(n - X.pond.x, r - X.pond.z) < X.pond.r + 0.5 || w.push([n, r]);
  }
  let A = new P(),
    j = new E(),
    ne = new ae(),
    re = new B(),
    M = new B(),
    ie = new L({ vertexColors: !0, side: 2, roughness: 0.65, emissive: `#ffffff`, emissiveIntensity: 0.06 }),
    N = new ue(Xr(), ie, C.length),
    F = new E(),
    I = new B(),
    oe = new B(0, 1, 0);
  (C.forEach(([e, t, n, r, a], o) => {
    let s = Math.hypot(n, r),
      c = 0.16 * Math.sqrt(Math.max(0, 1 - (s / 0.33) ** 2));
    (re.set(e + n, Z(e, t) + 0.062 + c, t + r),
      I.set(r, 0, -n).normalize(),
      j
        .setFromAxisAngle(s > 0.001 ? I : oe, s > 0.001 ? (s / 0.32) * 0.9 + (i() - 0.5) * 0.3 : 0)
        .multiply(F.setFromAxisAngle(oe, i() * Math.PI * 2)),
      M.setScalar(0.07 * (0.8 + i() * 0.5)),
      A.compose(re, j, M),
      N.setMatrixAt(o, A),
      N.setColorAt(o, a.clone().offsetHSL(0, 0, (i() - 0.5) * 0.06)));
  }),
    (N.castShadow = !1),
    (N.receiveShadow = !0));
  let se = [];
  for (let e = 0; e < 5; e += 1) {
    let t = new D(0.035, 0.28 + (e % 2) * 0.08, 3, 1);
    (t.translate(0, 0.14, 0), t.rotateZ((e - 2) * 0.28), t.rotateY(e * 1.3), se.push(t));
  }
  let R = xe(se.map((e) => e.toNonIndexed())),
    ce = R.attributes.position,
    le = new Float32Array(ce.count * 3);
  for (let e = 0; e < ce.count; e += 1) le.fill(0.72 + 0.46 * V.clamp(ce.getY(e) / 0.36, 0, 1), e * 3, e * 3 + 3);
  R.setAttribute(`color`, new t(le, 3));
  let de = Nr(new L({ vertexColors: !0, roughness: 0.95 }), { amp: 0.16, uniforms: u, local: !0, glow: 0.8 }),
    fe = new ue(R, de, w.length),
    pe = [$(`#8FAA78`), $(`#9DB584`), $(`#7E9C6A`), $(`#A8BF8A`)];
  (w.forEach(([e, t], n) => {
    (re.set(e, Z(e, t) - 0.02, t),
      j.setFromEuler(ne.set(0, i() * 6, 0)),
      M.setScalar(0.7 + i() * 0.8),
      A.compose(re, j, M),
      fe.setMatrixAt(n, A),
      fe.setColorAt(n, pe[(i() * 4) | 0]));
  }),
    (fe.receiveShadow = !0));
  let me = new ue(zr(1, 0.2, 3), new L({ color: `#7E9C6A`, roughness: 0.9 }), S.length);
  (S.forEach(([e, t], n) => {
    (re.set(e, Z(e, t) + 0.05, t), M.set(0.32, 0.16, 0.32), A.compose(re, j.identity(), M), me.setMatrixAt(n, A));
  }),
    (me.receiveShadow = !0));
  let he = [$(`#CFC3B4`), $(`#C4B6A5`), $(`#D8CDBF`), $(`#BDB0A2`)],
    ge = zr(+!n.low, 0.45, 11),
    _e = new ue(ge, new L({ color: `#ffffff`, roughness: 0.88 }), T.length);
  (T.forEach(([e, t, n], r) => {
    (re.set(e, Z(e, t) + n * 0.12, t),
      j.setFromEuler(ne.set((i() - 0.5) * 0.4, i() * 6, (i() - 0.5) * 0.4)),
      M.set(n * (1.2 + i() * 0.5), n * 0.55, n),
      _e.setMatrixAt(r, A.compose(re, j, M)),
      _e.setColorAt(r, he[(i() * he.length) | 0]));
  }),
    (_e.receiveShadow = !0));
  let ve = new z();
  return (
    (ve.name = `nature`),
    ve.add(_, y, b, N, fe, me, _e),
    e.add(ve),
    {
      group: ve,
      colliders: s,
      trees: c,
      shake(e) {
        e >= 0 && e < Pr && (l[e] = 1);
      },
      update(e, t) {
        u.uTime.value = t;
        for (let t = 0; t < c.length; t += 1) l[t] > 0 && (l[t] = Math.max(0, l[t] - e * 0.9));
      },
    }
  );
}
var Qr = (e) => new w(e),
  $r = new L({ color: `#DDD2C4`, roughness: 0.8 }),
  ei = new L({ color: `#D2BFA6`, roughness: 0.82 }),
  ti = new L({ color: `#D2AA5A`, roughness: 0.42, metalness: 0.7 }),
  ni = new L({ color: `#3F5A4A`, roughness: 0.5, metalness: 0.6 }),
  ri = new L({ color: `#C8925A`, roughness: 0.68 }),
  ii = new L({ color: `#8A5A3C`, roughness: 0.7 }),
  ai = new L({ color: `#C98A66`, roughness: 0.86 });
new L({ color: `#F6EEE3`, roughness: 0.9 });
var oi = new L({ color: `#EADBC8`, roughness: 0.92 }),
  si = new L({ color: `#86A272`, roughness: 0.9 }),
  ci = new L({ color: `#B9B4A8`, roughness: 0.45, metalness: 0.6 }),
  li = new L({ color: `#fff1cf`, emissive: `#ffc978`, emissiveIntensity: 1.9, roughness: 0.4 }),
  ui = new L({ color: `#fff3d6`, emissive: `#ffcf86`, emissiveIntensity: 1.7 });
function di(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`), e, t));
  let i = new l(r);
  return ((i.colorSpace = v), (i.anisotropy = 8), (i.userData.canvas = r), i);
}
var fi = (e, t = !0) => (
  e.traverse((e) => {
    e.isMesh && ((e.castShadow = t), (e.receiveShadow = !0));
  }),
  e
);
function pi() {
  return new de({
    transparent: !0,
    depthWrite: !1,
    side: 2,
    uniforms: { uTime: { value: 0 }, uCurve: sr },
    vertexShader: `${cr} varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * viewMatrix * curveWorld(modelMatrix * vec4(position, 1.0)); }`,
    fragmentShader: `${St} uniform float uTime; varying vec2 vUv;
      void main(){ float s = vnoise(vec2(vUv.x * 90.0, vUv.y * 4.0 + uTime * 3.0)) * 0.7 + vnoise(vec2(vUv.x * 200.0, vUv.y * 7.0 + uTime * 4.2)) * 0.3;
        float a = smoothstep(0.3, 0.8, s) * 0.42 + 0.07; a *= smoothstep(0.0, 0.12, vUv.y);
        gl_FragColor = vec4(mix(vec3(0.8, 0.87, 0.93), vec3(0.99, 0.98, 0.96), s), a); }`,
  });
}
function mi() {
  let e = new z(),
    t = (e, t, n = 64) =>
      new k(
        new C(
          e.map(([e, t]) => new oe(e, t)),
          n,
        ),
        t,
      );
  (e.add(
    t(
      [
        [0, 0.02],
        [2.3, 0.02],
        [2.32, 0.52],
        [2.42, 0.62],
        [2.62, 0.64],
        [2.78, 0.58],
        [2.8, 0.1],
        [2.86, 0.02],
        [2.86, -0.06],
      ],
      $r,
      96,
    ),
  ),
    e.add(
      t(
        [
          [0, 0],
          [0.5, 0],
          [0.5, 0.12],
          [0.38, 0.2],
          [0.3, 0.5],
          [0.24, 1.1],
          [0.3, 1.36],
          [0.22, 1.46],
          [0, 1.46],
        ],
        $r,
      ),
    ),
    e.add(
      t(
        [
          [0, 1.36],
          [0.32, 1.38],
          [0.85, 1.55],
          [1.06, 1.7],
          [1.1, 1.78],
          [1.02, 1.8],
          [0.4, 1.7],
          [0, 1.7],
        ],
        $r,
      ),
    ),
    e.add(
      t(
        [
          [0, 1.7],
          [0.16, 1.72],
          [0.12, 2.2],
          [0.18, 2.42],
          [0, 2.42],
        ],
        $r,
      ),
    ),
    e.add(
      t(
        [
          [0, 2.36],
          [0.18, 2.4],
          [0.5, 2.54],
          [0.56, 2.64],
          [0.5, 2.66],
          [0, 2.6],
        ],
        $r,
      ),
    ),
    e.add(
      t(
        [
          [0, 2.6],
          [0.07, 2.62],
          [0.05, 2.86],
          [0.09, 2.92],
          [0, 2.94],
        ],
        ti,
        24,
      ),
    ));
  let n = new k(new r(2.3, 64), Ar({ radius: 2.3, deep: `#86A8C6`, shallow: `#B6CDE0` }));
  ((n.rotation.x = -Math.PI / 2), (n.position.y = 0.46), (n.userData.noAO = !0), (n.renderOrder = 1));
  let i = new k(new r(0.98, 40), Ar({ radius: 0.98, deep: `#8EAFCB`, shallow: `#BDD2E3` }));
  ((i.rotation.x = -Math.PI / 2), (i.position.y = 1.74), (i.userData.noAO = !0), (i.renderOrder = 1), e.add(n, i));
  let a = pi(),
    o = new k(new j(1.1, 1.24, 1.32, 64, 1, !0), a);
  o.position.y = 1.12;
  let s = new k(new j(0.57, 0.64, 0.9, 40, 1, !0), a);
  s.position.y = 2.2;
  for (let t of [o, s]) ((t.userData.noAO = !0), (t.renderOrder = 2), e.add(t));
  let c = new z();
  for (let [e, t] of [
    [0, 0],
    [Math.PI / 2, 0],
    [Math.PI / 2, Math.PI / 2],
    [0.41, 0.2],
  ]) {
    let n = new k(new u(0.44, 0.02, 10, 72), ti);
    (n.rotation.set(e, 0, t), c.add(n));
  }
  let l = new k(new u(0.44, 0.05, 6, 72), ti);
  (l.rotation.set(Math.PI / 2 - 0.41, 0, 0), l.scale.set(1, 1, 0.35), c.add(l));
  let d = new k(new R(0.11, 24, 16), new L({ color: `#fff1cf`, emissive: `#ffcf7a`, emissiveIntensity: 1.6 }));
  c.add(d);
  let f = new k(new j(0.012, 0.012, 1.1, 6), ti);
  (c.add(f),
    (c.position.y = 3.34),
    (c.rotation.z = 0.41),
    e.add(c),
    fi(e),
    [n, i, o, s].forEach((e) => {
      e.castShadow = !1;
    }));
  let p = [n.material, i.material, a],
    m = 0,
    h = 0;
  return {
    group: e,
    surge() {
      m = 1;
    },
    update(e, t = 1 / 60) {
      for (let t of p) t.uniforms.uTime.value = e;
      m = Math.max(0, m - t * 0.45);
      let n = m * m;
      ((h += t * (0.18 + n * 2.6)),
        (c.rotation.y = h),
        (c.children[0].rotation.y = h * 1.6),
        o.scale.set(1 + n * 0.06, 1 + n * 0.12, 1 + n * 0.06),
        s.scale.set(1 + n * 0.08, 1 + n * 0.2, 1 + n * 0.08),
        (d.material.emissiveIntensity = 1.6 + n * 4));
    },
  };
}
function hi() {
  let e = new z(),
    t = new Y(1.7, 0.045, 0.1, 2, 0.015);
  for (let n = 0; n < 4; n += 1) {
    let r = new k(t, ri);
    (r.position.set(0, 0.46, -0.2 + n * 0.13), e.add(r));
  }
  for (let n = 0; n < 3; n += 1) {
    let r = new k(t, ri);
    (r.position.set(0, 0.62 + n * 0.13, -0.3 - n * 0.03), (r.rotation.x = -0.2), e.add(r));
  }
  for (let t of [-0.72, 0.72]) {
    let n = new k(
        new i(
          new pe([new B(t, 0, 0.22), new B(t, 0.44, 0.2), new B(t, 0.47, -0.22), new B(t, 0.9, -0.38)]),
          20,
          0.03,
          6,
        ),
        ni,
      ),
      r = new k(new j(0.025, 0.03, 0.46, 6), ni);
    r.position.set(t, 0.23, -0.22);
    let a = new k(new i(new pe([new B(t, 0.47, 0.18), new B(t, 0.66, 0.12), new B(t, 0.68, -0.15)]), 12, 0.025, 6), ni);
    e.add(n, r, a);
  }
  return fi(e);
}
function gi(e = 3.3) {
  let t = new z(),
    n = new k(
      new C(
        [
          [0.2, 0],
          [0.2, 0.16],
          [0.12, 0.26],
          [0.09, 0.6],
          [0.06, 1],
          [0.05, e - 0.5],
          [0.08, e - 0.42],
          [0.05, e - 0.36],
          [0, e - 0.36],
        ].map(([e, t]) => new oe(e, t)),
        14,
      ),
      ni,
    ),
    r = new k(new j(0.17, 0.12, 0.36, 6), li);
  r.position.y = e - 0.16;
  let i = new k(new D(0.25, 0.22, 6), ni);
  i.position.y = e + 0.12;
  let a = new k(new R(0.045, 8, 6), ni);
  return ((a.position.y = e + 0.26), t.add(n, r, i, a), fi(t), (r.castShadow = !1), t);
}
function _i(e, t, n, r = 16) {
  let i = [];
  for (let a = 0; a <= r; a += 1) {
    let o = a / r,
      s = e.clone().lerp(t, o);
    ((s.y -= Math.sin(o * Math.PI) * n), i.push(s));
  }
  return i;
}
function vi(e, { spacing: t = 0.45, bulb: n = 0.05 } = {}) {
  let r = [],
    i = [];
  for (let [n, a, o] of e) {
    let e = _i(n, a, o, 24);
    for (let t = 0; t < e.length - 1; t += 1) i.push(e[t], e[t + 1]);
    let s = n.distanceTo(a),
      c = Math.max(2, Math.round(s / t));
    for (let e = 1; e < c; e += 1) {
      let t = e / c,
        i = n.clone().lerp(a, t);
      ((i.y -= Math.sin(t * Math.PI) * o + 0.07), r.push(i));
    }
  }
  let a = new z();
  a.add(new f(new F().setFromPoints(i), new m({ color: `#3a3330` })));
  let o = new ue(new y(n, 0), ui, r.length),
    s = new P();
  return (r.forEach((e, t) => o.setMatrixAt(t, s.makeTranslation(e.x, e.y, e.z))), (o.userData.noAO = !0), a.add(o), a);
}
function yi() {
  let e = new z(),
    t = Xn.r - 1.7,
    n = Math.atan2(X.pond.z, X.pond.x),
    r = [],
    a = [],
    o = [],
    s = 2.7 / t,
    c = (e) =>
      Math.abs(Math.atan2(Math.sin(e - Math.PI / 2), Math.cos(e - Math.PI / 2))) < 0.075 ||
      Math.abs(Math.atan2(Math.sin(e - n), Math.cos(e - n))) < 0.24,
    l = null;
  for (let e = 0; e < Math.PI * 2 - s * 0.5; e += s) {
    if (c(e)) {
      l = null;
      continue;
    }
    let n = Math.cos(e) * t,
      i = Math.sin(e) * t,
      s = Z(n, i);
    r.push(new B(n, s, i));
    let u = new B(n, s + 0.9, i);
    (l && (a.push([l, u, 0.22]), o.push(..._i(l, u, 0.2, 10))), (l = u));
  }
  let u = xe(
      [new j(0.06, 0.075, 0.95, 7).translate(0, 0.47, 0), new R(0.085, 10, 8).translate(0, 0.98, 0)].map((e) =>
        e.toNonIndexed(),
      ),
    ),
    d = new ue(u, ii, r.length),
    f = new P();
  (r.forEach((e, t) => d.setMatrixAt(t, f.makeTranslation(e.x, e.y, e.z))),
    (d.castShadow = !0),
    (d.receiveShadow = !0),
    e.add(d));
  let p = [];
  for (let [e, t, n] of a) p.push(new i(new pe(_i(e, t, n, 8)), 10, 0.022, 5, !1));
  let m = new k(xe(p), new L({ color: `#cdb48c`, roughness: 0.9 }));
  return (
    (m.castShadow = !0),
    e.add(m),
    e.add(
      vi(
        a.map(([e, t]) => [e.clone().add(new B(0, 0.02, 0)), t.clone().add(new B(0, 0.02, 0)), 0.22]),
        { spacing: 0.9, bulb: 0.04 },
      ),
    ),
    { group: e, postPositions: r }
  );
}
function bi(e, t, n, r) {
  let i = e.createLinearGradient(0, 0, 0, n);
  (i.addColorStop(0, `#356A6F`), i.addColorStop(1, `#2A5257`), (e.fillStyle = i), e.fillRect(0, 0, t, n));
  for (let r = 0; r < 1800; r += 1)
    ((e.fillStyle = `rgba(255,255,255,${Math.random() * 0.025})`),
      e.fillRect(Math.random() * t, Math.random() * n, 3 + Math.random() * 28, 1 + Math.random() * 3));
  let a = e.createLinearGradient(0, 70, 0, 260);
  (a.addColorStop(0, `#fff0b8`), a.addColorStop(0.45, `#f2c86a`), a.addColorStop(1, `#c98f2e`));
  let o = (r, i) => {
    let a = r,
      o = r,
      s = t - r,
      c = n - r;
    ((e.lineWidth = i),
      (e.strokeStyle = `#e8bf63`),
      e.beginPath(),
      e.moveTo(a + 26, o),
      e.arcTo(s, o, s, c, 26),
      e.arcTo(s, c, a, c, 26),
      e.arcTo(a, c, a, o, 26),
      e.arcTo(a, o, s, o, 26),
      e.closePath(),
      e.stroke());
  };
  (o(18, 6), o(34, 2), (e.textAlign = `center`), (e.textBaseline = `alphabetic`));
  let s = r === `en` ? `Life Plaza` : `人生广场`,
    c = r === `en` ? `人 生 广 场` : `L I F E   P L A Z A`;
  e.font =
    r === `en`
      ? `italic 700 150px PlazaSerif,Georgia,'Times New Roman',serif`
      : `800 158px PlazaSerif,'Songti SC','STSong','Noto Serif SC','Noto Serif CJK SC','SimSun',serif`;
  let l = r === `en` ? 0 : 34,
    u = [...s],
    d = u.map((t) => e.measureText(t).width),
    f = d.reduce((e, t) => e + t, 0) + l * (u.length - 1),
    p = t / 2 - f / 2;
  ((e.shadowColor = `rgba(0,0,0,0.35)`),
    (e.shadowBlur = 10),
    (e.shadowOffsetY = 5),
    u.forEach((t, n) => {
      ((e.fillStyle = a), e.fillText(t, p + d[n] / 2, 236), (p += d[n] + l));
    }),
    (e.shadowColor = `transparent`),
    (e.font = `600 40px Georgia,'Times New Roman',serif`),
    (e.fillStyle = `#f6e7c4`),
    e.fillText(c, t / 2, 318));
  let m = [t / 2 - 120, t / 2, t / 2 + 120];
  ((e.fillStyle = `#f0c565`),
    (e.strokeStyle = `#f0c565`),
    (e.lineWidth = 4),
    e.beginPath(),
    e.arc(m[0], 372, 20, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#2F5E63`),
    e.beginPath(),
    e.arc(m[0] + 9, 366, 18, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#f0c565`));
  for (let t = 0; t < 12; t += 1) {
    let n = (t / 12) * Math.PI * 2;
    (e.beginPath(), e.ellipse(m[1] + Math.cos(n) * 17, 372 + Math.sin(n) * 17, 9, 4, n, 0, Math.PI * 2), e.fill());
  }
  ((e.fillStyle = `#8a5a22`),
    e.beginPath(),
    e.arc(m[1], 372, 9, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#f0c565`),
    e.beginPath(),
    e.moveTo(m[2], 394),
    e.quadraticCurveTo(m[2] - 26, 370, m[2], 348),
    e.quadraticCurveTo(m[2] + 26, 370, m[2], 394),
    e.fill(),
    (e.strokeStyle = `#2F5E63`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.moveTo(m[2], 392),
    e.lineTo(m[2], 354),
    e.stroke(),
    (e.fillStyle = `#e8bf63`));
  for (let n of [-60, 60]) (e.beginPath(), e.arc(t / 2 + n, 372, 3.5, 0, Math.PI * 2), e.fill());
}
function xi(e) {
  let t = new z(),
    n = new Y(0.62, 3.2, 0.62, 3, 0.08);
  for (let e of [-1.95, 1.95]) {
    let r = new k(n, $r);
    (r.position.set(e, 1.6, 0), t.add(r));
    let i = new k(new Y(0.8, 0.18, 0.8, 2, 0.05), ei);
    (i.position.set(e, 3.28, 0), t.add(i));
  }
  let r = new le();
  (r.absarc(0, 0, 2.3, 0, Math.PI, !1), r.lineTo(-1.82, 0), r.absarc(0, 0, 1.82, Math.PI, 0, !0), r.lineTo(2.3, 0));
  let i = new k(
    new _(r, {
      depth: 0.42,
      bevelEnabled: !0,
      bevelSize: 0.04,
      bevelThickness: 0.04,
      bevelSegments: 2,
      curveSegments: 48,
    }),
    $r,
  );
  (i.position.set(0, 3.32, -0.21), i.scale.set(1, 0.62, 1), t.add(i));
  let a = xt(8),
    o = new P(),
    s = [`#f6b8c6`, `#fff2e2`, `#f4a28c`, `#f9d77e`, `#cdb9e8`].map(Qr),
    c = new ue(new y(0.09, 0), new L({ roughness: 0.7, emissive: `#ffffff`, emissiveIntensity: 0.05 }), 160),
    l = new ue(new y(0.1, 0), new L({ color: `#86A272`, roughness: 0.9 }), 120);
  for (let e = 0; e < 160; e += 1) {
    let t = a() * Math.PI,
      n = 2.08 + (a() - 0.5) * 0.36,
      r = Math.cos(t) * n,
      i = 3.32 + Math.sin(t) * n * 0.62,
      u = 0.24 + (a() - 0.5) * 0.12;
    (c.setMatrixAt(e, o.compose(new B(r, i, u), new E(), new B().setScalar(0.7 + a() * 0.6))),
      c.setColorAt(e, s[(a() * s.length) | 0]),
      e < 120 &&
        l.setMatrixAt(
          e,
          o.compose(
            new B(Math.cos(t) * (n + 0.05), 3.32 + Math.sin(t) * (n + 0.05) * 0.62, 0.2),
            new E(),
            new B(1.2, 0.6, 0.8),
          ),
        ));
  }
  t.add(c, l);
  let u = di(1400, 440, (t, n, r) => bi(t, n, r, e));
  Te.then((t) => {
    if (!t) return;
    let n = u.userData.canvas;
    (bi(n.getContext(`2d`), n.width, n.height, e), (u.needsUpdate = !0));
  });
  let d = new L({ map: u, emissiveMap: u, emissive: `#ffffff`, emissiveIntensity: 0.2, roughness: 0.55 }),
    f = new k(new Y(2.36, 0.76, 0.09, 2, 0.035), [ii, ii, ii, ii, d, ii]);
  (f.position.set(0, 3.12, 0.08), t.add(f));
  for (let e of [-1.12, 1.12])
    for (let n of [2.78, 3.46]) {
      let r = new k(new R(0.035, 10, 8), ti);
      (r.position.set(e, n, 0.14), t.add(r));
    }
  for (let e of [-0.8, 0.8]) {
    let n = new k(new j(0.01, 0.01, 0.52, 4), ni);
    (n.position.set(e, 3.7, 0.08), t.add(n));
  }
  return (fi(t), t);
}
function Si() {
  let e = di(1024, 64, (e, t, n) => {
    let r = xt(23);
    ((e.fillStyle = `#f3ece2`), e.fillRect(0, 0, t, n));
    let i = (n, r, i, a, o, s) => {
      ((e.strokeStyle = o), (e.lineWidth = s), e.beginPath());
      for (let o = 0; o <= t; o += 8) {
        let s = n + Math.sin((o / t) * Math.PI * 2 * i + a) * r;
        o ? e.lineTo(o, s) : e.moveTo(o, s);
      }
      e.stroke();
    };
    for (let e = 0; e < 30; e += 1) {
      let e = r() < 0.55;
      i(
        r() * n,
        0.6 + r() * 3.5,
        1 + ((r() * 3) | 0),
        r() * 6.3,
        e ? `rgba(112,70,40,${0.12 + r() * 0.22})` : `rgba(255,253,247,${0.3 + r() * 0.4})`,
        0.6 + r() * 2.4,
      );
    }
    for (let t = 0; t < 3; t += 1) {
      let i = 120 + t * 320 + r() * 140,
        a = 14 + r() * (n - 28);
      for (let t = 4; t >= 1; --t)
        ((e.strokeStyle = `rgba(96,58,32,${0.14 + (4 - t) * 0.08})`),
          (e.lineWidth = 1.2),
          e.beginPath(),
          e.ellipse(i, a, 5 + t * 5, 1.6 + t * 1.7, 0, 0, Math.PI * 2),
          e.stroke());
      ((e.fillStyle = `rgba(88,52,28,0.55)`), e.beginPath(), e.ellipse(i, a, 4, 1.8, 0, 0, Math.PI * 2), e.fill());
    }
  });
  e.wrapS = T;
  let t = new L({ color: `#cc925c`, map: e, roughness: 0.76 });
  return (
    (t.onBeforeCompile = (e) => {
      e.vertexShader = e.vertexShader.replace(
        `#include <uv_vertex>`,
        `#include <uv_vertex>
#ifdef USE_INSTANCING
  vMapUv.x += fract(float(gl_InstanceID) * 0.618034);
#endif`,
      );
    }),
    (t.customProgramCacheKey = () => `deck`),
    t
  );
}
function Ci() {
  let e = new z(),
    { z0: t, z1: n, w: r } = X.pier,
    a = new Y(r, 0.08, 0.26, 1, 0.02),
    o = xt(9),
    s = new ue(a, Si(), Math.ceil((n - t) / 0.3)),
    c = new P();
  for (let e = 0; e < s.count; e += 1)
    (s.setMatrixAt(e, c.makeTranslation(0, 0.02, t + e * 0.3)),
      s.setColorAt(e, Qr(`#ffffff`).multiplyScalar(0.9 + o() * 0.15)));
  e.add(s);
  for (let i of [-r / 2 + 0.15, r / 2 - 0.15]) {
    let r = new k(new g(0.16, 0.2, n - t), ii);
    (r.position.set(i, -0.12, (t + n) / 2), e.add(r));
  }
  let l = [];
  for (let i = t + 0.6; i <= n + 0.01; i += 1.7)
    for (let t of [-r / 2, r / 2]) {
      let n = new k(new j(0.06, 0.07, 1.1, 7), ii);
      (n.position.set(t, 0.55, i), e.add(n), l.push(new B(t, 1.05, i)));
    }
  let u = [];
  for (let e = 0; e + 2 < l.length; e += 1)
    l[e].x === l[e + 2].x && u.push(new i(new pe(_i(l[e], l[e + 2], 0.18, 8)), 10, 0.022, 5));
  e.add(new k(xe(u), new L({ color: `#cdb48c`, roughness: 0.9 })));
  for (let n of [t + 2.4, t + 4.8])
    for (let t of [-r / 2 + 0.15, r / 2 - 0.15]) {
      let r = new k(new j(0.06, 0.06, 3.4, 6), ii);
      (r.position.set(t, -1.6, n - 1), (r.rotation.x = -0.55), e.add(r));
    }
  return fi(e);
}
function wi(e) {
  return di(1024, 512, (t, n, r) => {
    for (let i = 0; i < 12; i += 1) ((t.fillStyle = e[i % e.length]), t.fillRect((i / 12) * n, 0, n / 12 + 1, r));
    ((t.globalAlpha = 0.12), (t.fillStyle = `#000`));
    for (let e = 0; e < 12; e += 1) t.fillRect((e / 12) * n, 0, 3, r);
    t.globalAlpha = 1;
    let i = t.createLinearGradient(0, 0, 0, r);
    (i.addColorStop(0, `rgba(255,255,255,0.18)`),
      i.addColorStop(1, `rgba(0,0,0,0.12)`),
      (t.fillStyle = i),
      t.fillRect(0, 0, n, r));
  });
}
function Ti(e = [`#F3ECE0`, `#E39A86`, `#F3ECE0`, `#8FB3B0`], t = 1) {
  let n = new z(),
    r = [];
  for (let e = 0; e <= 24; e += 1) {
    let t = e / 24,
      n = t * 7.2,
      i = Math.sin(t ** 0.8 * Math.PI) * 3.2 * (t < 0.12 ? 0.55 + t * 3.7 : 1) * (1 - t ** 6 * 0.2);
    r.push(new oe(Math.max(0.35, i), n));
  }
  ((r[0].x = 0.42), (r[r.length - 1].x = 0));
  let i = new k(new C(r, 48), new L({ map: wi(e), roughness: 0.65, side: 2 }));
  i.position.y = 2.1;
  let a = new k(
    new j(0.62, 0.52, 0.78, 16),
    new L({
      map: di(256, 128, (e, t, n) => {
        ((e.fillStyle = `#b8895a`), e.fillRect(0, 0, t, n), (e.strokeStyle = `#8a6440`), (e.lineWidth = 3));
        for (let r = 0; r < n; r += 10) {
          e.beginPath();
          for (let n = 0; n <= t; n += 8) e.lineTo(n, r + ((n / 8) % 2 ? 4 : 0));
          e.stroke();
        }
      }),
      roughness: 0.9,
    }),
  );
  a.position.y = 0;
  let o = new k(new u(0.62, 0.05, 8, 32), ii);
  ((o.rotation.x = Math.PI / 2), (o.position.y = 0.4));
  let s = new k(new R(0.12, 12, 8), new L({ color: `#fff1cf`, emissive: `#ffb35a`, emissiveIntensity: 3 }));
  ((s.position.y = 1.65), (s.name = `burner`));
  let c = [];
  for (let e = 0; e < 4; e += 1) {
    let t = (e / 4) * Math.PI * 2 + Math.PI / 4;
    c.push(new B(Math.cos(t) * 0.55, 0.4, Math.sin(t) * 0.55), new B(Math.cos(t) * 0.5, 2.25, Math.sin(t) * 0.5));
  }
  return (
    n.add(i, a, o, s, new f(new F().setFromPoints(c), new m({ color: `#5b4636` }))),
    n.scale.setScalar(t),
    fi(n),
    (s.castShadow = !1),
    n
  );
}
function Ei(e) {
  let t = new z(),
    n = new L({ color: `#3F5A4A`, roughness: 0.55, metalness: 0.3 }),
    r = di(2048, 1024, (t, n, r) => ki(t, n, r, [], e)),
    i = new k(new j(0.72, 0.72, 2.5, 48, 1, !0), new L({ map: r, roughness: 0.85 }));
  i.position.y = 1.55;
  let a = new k(new j(0.84, 0.9, 0.3, 40), n);
  a.position.y = 0.15;
  let o = new k(new j(0.86, 0.8, 0.22, 40), n);
  o.position.y = 2.9;
  let s = new k(new R(0.8, 40, 16, 0, Math.PI * 2, 0, Math.PI / 2), n);
  ((s.position.y = 3), (s.scale.y = 0.55));
  let c = new k(new D(0.08, 0.5, 10), ti);
  c.position.y = 3.6;
  let l = new k(new u(0.84, 0.05, 6, 40), n);
  ((l.rotation.x = Math.PI / 2), (l.position.y = 3.02), t.add(i, a, o, s, c, l), fi(t));
  let d = 0;
  return {
    group: t,
    mesh: i,
    async setShots(t) {
      let n = await Promise.all(
          t.slice(0, 6).map(
            (e) =>
              new Promise((t) => {
                let n = new Image();
                ((n.crossOrigin = `anonymous`),
                  (n.onload = () => t({ img: n, it: e })),
                  (n.onerror = () => t(null)),
                  (n.src = e.image));
              }),
          ),
        ),
        i = r.userData.canvas;
      (ki(i.getContext(`2d`), i.width, i.height, n.filter(Boolean), e), (r.needsUpdate = !0));
    },
    turn() {
      d += Math.PI / 3;
    },
    update(e) {
      let t = d - i.rotation.y;
      Math.abs(t) > 1e-4 && (i.rotation.y += t * (1 - Math.exp(-e * 4)));
    },
  };
}
var Di = [
  {
    title: `LE VOYAGE DANS LA LUNE`,
    year: `1902`,
    bg: `#1f3150`,
    ink: `#f3e3b8`,
    draw: (e, t, n, r, i) => {
      ((e.fillStyle = `#f6ecd0`),
        e.beginPath(),
        e.arc(t + r / 2, n + i / 2, r * 0.36, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#cdbb94`));
      for (let [a, o, s] of [
        [-0.12, -0.1, 0.05],
        [0.1, 0.12, 0.04],
        [-0.05, 0.16, 0.03],
      ])
        (e.beginPath(), e.arc(t + r * (0.5 + a), n + i * (0.5 + o), r * s, 0, Math.PI * 2), e.fill());
      ((e.strokeStyle = `#3b3326`),
        (e.lineWidth = 6),
        e.beginPath(),
        e.arc(t + r * 0.5, n + i * 0.56, r * 0.12, 0.2, Math.PI - 0.2),
        e.stroke(),
        (e.fillStyle = `#3b3326`),
        e.beginPath(),
        e.arc(t + r * 0.4, n + i * 0.45, r * 0.025, 0, Math.PI * 2),
        e.fill(),
        e.save(),
        e.translate(t + r * 0.62, n + i * 0.44),
        e.rotate(-0.7),
        (e.fillStyle = `#d9d2c4`),
        e.fillRect(-r * 0.03, -r * 0.12, r * 0.06, r * 0.16),
        e.beginPath(),
        e.moveTo(-r * 0.03, -r * 0.12),
        e.lineTo(0, -r * 0.18),
        e.lineTo(r * 0.03, -r * 0.12),
        e.fill(),
        e.restore(),
        (e.fillStyle = `#f3e3b8`));
      for (let a = 0; a < 26; a += 1)
        (e.beginPath(), e.arc(t + ((a * 97) % r), n + ((a * 61) % i), 2 + (a % 3), 0, Math.PI * 2), e.fill());
    },
  },
  {
    title: `STAR FILM`,
    year: `PARIS`,
    bg: `#b23a2c`,
    ink: `#fbe9c8`,
    draw: (e, t, n, r, i) => {
      ((e.fillStyle = `#fbe9c8`), e.beginPath());
      for (let a = 0; a < 10; a += 1) {
        let o = (a / 10) * Math.PI * 2 - Math.PI / 2,
          s = a % 2 ? r * 0.14 : r * 0.36;
        e.lineTo(t + r / 2 + Math.cos(o) * s, n + i / 2 + Math.sin(o) * s);
      }
      (e.fill(),
        (e.fillStyle = `#b23a2c`),
        (e.font = `700 ${Math.round(r * 0.08)}px Georgia,serif`),
        (e.textAlign = `center`),
        e.fillText(`GEO. MÉLIÈS`, t + r / 2, n + i / 2 + r * 0.03));
    },
  },
  {
    title: `THÉÂTRE ROBERT-HOUDIN`,
    year: `1888`,
    bg: `#1d1a1a`,
    ink: `#e9c66f`,
    draw: (e, t, n, r, i) => {
      let a = t + r / 2,
        o = n + i * 0.58;
      ((e.fillStyle = `#2c2825`),
        e.fillRect(a - r * 0.17, o - r * 0.3, r * 0.34, r * 0.3),
        e.fillRect(a - r * 0.27, o - r * 0.02, r * 0.54, r * 0.05),
        (e.fillStyle = `#b23a2c`),
        e.fillRect(a - r * 0.17, o - r * 0.08, r * 0.34, r * 0.05),
        e.save(),
        e.translate(a + r * 0.12, o - r * 0.32),
        e.rotate(0.6),
        (e.fillStyle = `#f2efe6`),
        e.fillRect(-4, -r * 0.22, 8, r * 0.26),
        (e.fillStyle = `#1d1a1a`),
        e.fillRect(-4, -r * 0.22, 8, r * 0.05),
        e.restore(),
        (e.fillStyle = `#e9c66f`));
      for (let [t, n, i] of [
        [0.28, -0.42, 9],
        [0.36, -0.3, 6],
        [0.2, -0.5, 5],
        [-0.3, -0.38, 7],
      ])
        (e.beginPath(), e.arc(a + r * t, o + r * n, i, 0, Math.PI * 2), e.fill());
    },
  },
  {
    title: `VOYAGE À TRAVERS L'IMPOSSIBLE`,
    year: `1904`,
    bg: `#f0c45a`,
    ink: `#3a2416`,
    draw: (e, t, n, r, i) => {
      let a = t + r / 2,
        o = n + i * 0.48,
        s = r * 0.3;
      ((e.fillStyle = `#f7e1a0`),
        e.beginPath(),
        e.arc(a, o, s, 0, Math.PI * 2),
        e.fill(),
        (e.strokeStyle = `#e39b3a`),
        (e.lineWidth = 7));
      for (let t = 0; t < 16; t += 1) {
        let n = (t / 16) * Math.PI * 2;
        (e.beginPath(),
          e.moveTo(a + Math.cos(n) * s * 1.1, o + Math.sin(n) * s * 1.1),
          e.lineTo(a + Math.cos(n) * s * 1.35, o + Math.sin(n) * s * 1.35),
          e.stroke());
      }
      ((e.fillStyle = `#3a2416`),
        e.beginPath(),
        e.arc(a - s * 0.35, o - s * 0.15, 6, 0, Math.PI * 2),
        e.arc(a + s * 0.35, o - s * 0.15, 6, 0, Math.PI * 2),
        e.fill(),
        e.beginPath(),
        e.ellipse(a, o + s * 0.35, s * 0.2, s * 0.14, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `#2c3b4a`),
        e.fillRect(a - s * 1.2, o + s * 0.7, s * 0.5, s * 0.22),
        e.fillRect(a - s * 1.6, o + s * 0.78, s * 0.36, s * 0.16),
        (e.fillStyle = `#fff`),
        (e.globalAlpha = 0.7),
        e.beginPath(),
        e.arc(a - s * 1.05, o + s * 0.58, 10, 0, Math.PI * 2),
        e.arc(a - s * 1.2, o + s * 0.48, 7, 0, Math.PI * 2),
        e.fill(),
        (e.globalAlpha = 1));
    },
  },
];
function Oi(e, t, n, r, i, a) {
  let o = Di[a % Di.length];
  ((e.fillStyle = o.bg),
    e.fillRect(t, n, r, i),
    (e.strokeStyle = o.ink),
    (e.lineWidth = 4),
    e.strokeRect(t + 14, n + 14, r - 28, i - 28),
    o.draw(e, t + 20, n + 90, r - 40, i - 250),
    (e.fillStyle = o.ink),
    (e.textAlign = `center`),
    (e.font = `700 26px Georgia,serif`),
    e.fillText(`STAR FILM`, t + r / 2, n + 58),
    (e.font = `700 34px Georgia,serif`),
    Ai(e, o.title, t + r / 2, n + i - 130, r - 50, 40, 2),
    (e.font = `italic 30px Georgia,serif`),
    e.fillText(o.year, t + r / 2, n + i - 34));
}
function ki(e, t, n, r, i) {
  ((e.fillStyle = `#e9dcc4`), e.fillRect(0, 0, t, n), (e.globalAlpha = 0.25));
  for (let r = 0; r < 900; r += 1)
    ((e.fillStyle = Math.random() > 0.5 ? `#c9b693` : `#f5ecdc`),
      e.fillRect(Math.random() * t, Math.random() * n, 3, 3));
  e.globalAlpha = 1;
  let a = t / 6,
    o = r.length >= 3 ? r.map((e, t) => t) : [0, 3].slice(0, r.length);
  for (let t = 0, s = 0; t < 6; t += 1) {
    let c = t * a + 22,
      l = a - 44,
      u = n - 150,
      d = o.indexOf(t),
      f = d >= 0 ? r[d] : null;
    if (!f) {
      (Oi(e, c, 70, l, u, s), (s += 1));
      continue;
    }
    ((e.fillStyle = `#33302b`),
      e.fillRect(c, 70, l, u),
      (e.fillStyle = `#f3e7cf`),
      e.fillRect(c + 12, 82, l - 24, u - 24),
      (e.fillStyle = `#2a2522`),
      (e.textAlign = `center`),
      (e.font = `600 30px Georgia,serif`),
      e.fillText(`STAR FILM`, c + l / 2, 126));
    let p = c + 26,
      m = l - 52,
      h = m * 0.75,
      { img: g } = f,
      _ = Math.max(m / g.width, h / g.height),
      v = m / _,
      y = h / _;
    (e.drawImage(g, (g.width - v) / 2, (g.height - y) / 2, v, y, p, 148, m, h),
      (e.font = `700 38px 'Songti SC','STSong',Georgia,serif`),
      Ai(e, f.it.title || ``, c + l / 2, 148 + h + 64, m, 44, 2),
      (e.font = `26px 'PingFang SC','Microsoft YaHei',sans-serif`),
      (e.fillStyle = `#5b4d42`),
      e.fillText(
        f.it.identity ? `${i === `en` ? `Starring` : `主演`} · ${f.it.identity}` : ``,
        c + l / 2,
        70 + u - 40,
      ));
  }
  ((e.fillStyle = `#2f4a3c`), e.fillRect(0, 0, t, 40), e.fillRect(0, n - 40, t, 40));
}
function Ai(e, t, n, r, i, a, o) {
  let s = [...t],
    c = ``,
    l = 0;
  for (let t of s) {
    let s = c + t;
    if (e.measureText(s).width > i && c) {
      if ((e.fillText(c, n, r + l * a), (c = t), (l += 1), l >= o)) return;
    } else c = s;
  }
  c && e.fillText(c, n, r + l * a);
}
function ji() {
  let e = new z(),
    t = new z(),
    n = new L({ color: `#e59a4f`, roughness: 0.9 }),
    r = new L({ color: `#fbe7cf`, roughness: 0.9 }),
    a = new k(new R(0.2, 14, 10), n);
  (a.scale.set(1.25, 0.62, 0.95), (a.position.y = 0.12));
  let o = new k(new R(0.1, 12, 10), n);
  o.position.set(0.2, 0.1, 0.1);
  let s = new k(new R(0.045, 8, 6), r);
  s.position.set(0.27, 0.08, 0.15);
  for (let e of [-1, 1]) {
    let r = new k(new D(0.035, 0.07, 4), n);
    (r.position.set(0.2 + e * 0.045, 0.19, 0.1 - e * 0.02), (r.rotation.z = -e * 0.3), t.add(r));
  }
  let c = new pe([new B(-0.22, 0.08, 0), new B(-0.2, 0.06, 0.2), new B(0.02, 0.05, 0.26), new B(0.18, 0.05, 0.22)]),
    l = new k(new i(c, 12, 0.032, 6), n);
  (t.add(a, o, s, l), e.add(t), fi(e));
  let u = -1;
  return {
    group: e,
    stretch() {
      u < 0 && (u = 0);
    },
    update(e) {
      if (u < 0) {
        t.scale.y = 1 + Math.sin(performance.now() / 900) * 0.025;
        return;
      }
      u += e;
      let n = u / 1.8,
        r = Math.sin(Math.min(1, n) * Math.PI);
      (t.scale.set(1 + r * 0.22, 1 + r * 0.35, 1),
        (t.position.y = r * 0.04),
        (l.rotation.y = Math.sin(u * 9) * 0.25 * r),
        n >= 1 && ((u = -1), t.scale.set(1, 1, 1), (t.position.y = 0), (l.rotation.y = 0)));
    },
  };
}
function Mi() {
  let e = new z(),
    t = di(256, 256, (e, t, n) => {
      ((e.fillStyle = `#fbf3e4`), e.fillRect(0, 0, t, n), (e.fillStyle = `rgba(214, 92, 74, 0.55)`));
      for (let r = 0; r < 8; r += 2) (e.fillRect(r * 32, 0, 32, n), e.fillRect(0, r * 32, t, 32));
    }),
    n = new k(new I(2.2, 1.7, 8, 6), new L({ map: t, roughness: 0.95 })),
    r = n.geometry.attributes.position;
  for (let e = 0; e < r.count; e += 1) r.setZ(e, Math.sin(r.getX(e) * 3.1) * 0.012 + Math.cos(r.getY(e) * 4.3) * 0.01);
  (n.geometry.computeVertexNormals(), (n.rotation.x = -Math.PI / 2), (n.position.y = 0.06), e.add(n));
  let i = new z(),
    a = new L({ color: `#c79a5c`, roughness: 0.9 }),
    o = new k(new j(0.26, 0.21, 0.28, 16), a);
  ((o.position.y = 0.2), (o.scale.z = 0.7));
  let s = new k(new j(0.27, 0.27, 0.04, 16), a);
  (s.position.set(0, 0.36, -0.05), (s.rotation.x = -0.35), (s.scale.z = 0.7));
  let c = new k(new u(0.17, 0.016, 6, 16, Math.PI), ii);
  c.position.y = 0.34;
  let l = new k(new b(0.035, 0.3, 4, 8), new L({ color: `#e0a75e`, roughness: 0.8 }));
  (l.position.set(0.08, 0.38, 0.04), (l.rotation.z = 0.9), i.add(o, s, c, l), i.position.set(-0.7, 0.04, -0.45));
  let d = new k(new j(0.045, 0.035, 0.09, 10), new L({ color: `#7fb6b2`, roughness: 0.5 }));
  d.position.set(0.45, 0.11, -0.4);
  let f = new k(new g(0.26, 0.04, 0.19), new L({ color: `#3f6f86`, roughness: 0.7 }));
  (f.position.set(0.15, 0.08, 0.42), (f.rotation.y = 0.5));
  let p = new ue(new R(0.05, 8, 6), new L({ color: `#d9483b`, roughness: 0.45 }), 3);
  ([
    [-0.25, 0.1, -0.15],
    [-0.18, 0.1, -0.05],
    [-0.3, 0.1, -0.02],
  ].forEach(([e, t, n], r) => p.setMatrixAt(r, new P().makeTranslation(e, t, n))),
    e.add(i, d, f, p));
  let m = ji();
  return (
    m.group.position.set(0.65, 0.05, 0.25),
    (m.group.rotation.y = -0.6),
    e.add(m.group),
    e.position.set(X.flash.x, Z(X.flash.x, X.flash.z), X.flash.z),
    (e.rotation.y = X.flash.rot),
    fi(e),
    (n.castShadow = !1),
    { group: e, cat: m, catAt: () => m.group.getWorldPosition(new B()) }
  );
}
function Ni() {
  let e = new z(),
    t = (t, n, r = ei) => {
      let i = new k(t, r);
      return ((i.position.y = n), e.add(i), i);
    };
  (t(new j(0.34, 0.4, 0.16, 6), 0.08),
    t(new j(0.1, 0.12, 0.7, 8), 0.5),
    t(new j(0.3, 0.26, 0.12, 6), 0.9),
    t(
      new g(0.34, 0.32, 0.34),
      1.12,
      new L({ color: `#fff0cf`, emissive: `#ffc46e`, emissiveIntensity: 1.4, roughness: 0.6 }),
    ));
  let n = t(new D(0.46, 0.34, 4), 1.45);
  return ((n.rotation.y = Math.PI / 4), t(new R(0.07, 8, 6), 1.66), fi(e));
}
function Pi() {
  let e = new z(),
    t = xt(66),
    n = new L({ color: `#c9a874`, roughness: 0.85 });
  for (let [t, r] of [
    [-0.5, -0.5],
    [0.5, -0.5],
    [0.5, 0.5],
    [-0.5, 0.5],
  ]) {
    let i = new k(new j(0.03, 0.03, 1.2, 5), n);
    (i.position.set(t, 0.6, r), e.add(i));
  }
  let r = [`#7aa457`, `#b5452f`, `#a07a4a`, `#c9b45c`, `#5f8c55`].map(Qr);
  for (let [i, a] of [
    [0.42, 0],
    [0.8, 1],
    [1.18, 2],
  ]) {
    let o = new k(new j(0.62, 0.6, 0.06, 28), n);
    ((o.position.y = i), e.add(o));
    let s = new ue(new y(0.04, 0), new L({ roughness: 0.9 }), 70),
      c = new P();
    for (let e = 0; e < 70; e += 1) {
      let n = t() * 6.28,
        o = Math.sqrt(t()) * 0.52;
      (s.setMatrixAt(e, c.makeTranslation(Math.cos(n) * o, i + 0.05, Math.sin(n) * o)),
        s.setColorAt(e, r[(a * 2 + ((t() * 2) | 0)) % r.length]));
    }
    e.add(s);
  }
  return fi(e);
}
function Fi() {
  let e = new z();
  for (let [t, n] of [
    [-0.3, 0.1],
    [0.3, -0.1],
  ]) {
    let r = new k(new j(0.025, 0.03, 1.9, 5), ri);
    (r.position.set(t, 0.93, 0), (r.rotation.z = n), e.add(r));
  }
  let t = new k(new j(0.025, 0.03, 1.9, 5), ri);
  (t.position.set(0, 0.9, -0.34), (t.rotation.x = -0.33), e.add(t));
  let n = di(640, 512, (e, t, n) => {
      let r = e.createLinearGradient(0, 0, 0, n);
      (r.addColorStop(0, `#1d3a7a`),
        r.addColorStop(0.7, `#3c63a8`),
        r.addColorStop(1, `#2b3f5e`),
        (e.fillStyle = r),
        e.fillRect(0, 0, t, n),
        (e.lineCap = `round`));
      for (let r = 0; r < 260; r += 1) {
        let i = Math.random() * t,
          a = Math.random() * n * 0.75,
          o = Math.random() * 6.28;
        ((e.strokeStyle = [`#6f9ad8`, `#a9c4ea`, `#2f5296`, `#f3e7a8`][r % 4]),
          (e.lineWidth = 5 + Math.random() * 5),
          e.beginPath(),
          e.arc(i, a, 14 + Math.random() * 30, o, o + 1.6),
          e.stroke());
      }
      for (let [t, n, r] of [
        [480, 90, 46],
        [130, 140, 26],
        [300, 70, 22],
        [560, 230, 20],
      ]) {
        let i = e.createRadialGradient(t, n, 2, t, n, r * 1.8);
        (i.addColorStop(0, `#fff7c2`),
          i.addColorStop(0.5, `#f4d35e`),
          i.addColorStop(1, `rgba(244,211,94,0)`),
          (e.fillStyle = i),
          e.beginPath(),
          e.arc(t, n, r * 1.8, 0, 6.28),
          e.fill());
      }
      ((e.fillStyle = `#1c2a1f`),
        e.beginPath(),
        e.moveTo(70, n),
        e.bezierCurveTo(60, 300, 120, 160, 100, 60),
        e.bezierCurveTo(150, 170, 160, 320, 150, n),
        e.fill(),
        (e.fillStyle = `#33405a`),
        e.fillRect(0, n * 0.82, t, n * 0.18));
    }),
    r = new k(new Y(0.86, 0.68, 0.04, 1, 0.01), [ri, ri, ri, ri, new L({ map: n, roughness: 0.7 }), ri]);
  (r.position.set(0, 1.28, 0.07), (r.rotation.x = -0.1), e.add(r));
  let i = new k(new g(0.86, 0.04, 0.08), ri);
  return (i.position.set(0, 0.92, 0.1), e.add(i), fi(e));
}
var Ii = new Map();
function Li(e, t, n = 1) {
  let r = new z(),
    i = new k(
      new C(
        [
          [0.001, 0],
          [0.13, 0],
          [0.16, 0.2],
          [0.19, 0.24],
          [0.19, 0.28],
          [0.001, 0.28],
        ].map(([e, t]) => new oe(e, t)),
        12,
      ),
      ai,
    ),
    a = new k(new y(0.2, 1), si);
  ((a.position.y = 0.38),
    a.scale.set(1, 0.8, 1),
    r.add(i, a),
    Ii.has(t) || Ii.set(t, new L({ color: t, roughness: 0.7 })));
  let o = Ii.get(t);
  for (let t = 0; t < 4; t += 1) {
    let t = new k(new y(0.055, 0), o),
      n = e() * 6.3;
    (t.position.set(Math.cos(n) * 0.13, 0.46 + e() * 0.06, Math.sin(n) * 0.13), r.add(t));
  }
  return (r.scale.setScalar(n), r);
}
function Ri(e, t) {
  let n = new z(),
    r = di(512, 656, (n) => Gi(n, 512, 656, e, t));
  Te.then((n) => {
    n && (Gi(r.userData.canvas.getContext(`2d`), 512, 656, e, t), (r.needsUpdate = !0));
  });
  let i = new k(new Y(0.5, 0.64, 0.035, 1, 0.012), [ri, ri, ri, ri, new L({ map: r, roughness: 0.85 }), ri]);
  (i.position.set(0, 0.42, 0.11), (i.rotation.x = -0.28));
  let a = new k(new Y(0.5, 0.64, 0.035, 1, 0.012), ri);
  return (a.position.set(0, 0.42, -0.11), (a.rotation.x = 0.28), n.add(i, a), n);
}
var zi = `PlazaSerif,'Songti SC','Noto Serif SC',serif`;
function Bi(e, t, n, r, i, a = zi) {
  let o = r;
  for (e.font = `${n} ${o}px ${a}`; o > 16 && e.measureText(t).width > i;) ((o -= 2), (e.font = `${n} ${o}px ${a}`));
  return e.font;
}
function Vi(e, t, n, r, i) {
  for (let [a, o] of [
    [1, i],
    [0.55, i * 0.5],
  ])
    ((e.strokeStyle = `rgba(241,236,223,${o})`),
      (e.lineWidth = r * a),
      (e.lineCap = `round`),
      (e.lineJoin = `round`),
      e.beginPath(),
      t.forEach(([t, r], i) =>
        i ? e.lineTo(t + (n() - 0.5) * 2.2, r + (n() - 0.5) * 2.2) : e.moveTo(t + (n() - 0.5) * 2, r + (n() - 0.5) * 2),
      ),
      e.stroke());
}
var Hi = (e, t, n, r, i = 22) => {
  let a = Math.max(2, Math.round(Math.hypot(n - e, r - t) / i));
  return Array.from({ length: a + 1 }, (i, o) => [e + ((n - e) * o) / a, t + ((r - t) * o) / a]);
};
function Ui(e, t, n, r, i, a, o) {
  if (!t) return;
  let s = document.createElement(`canvas`);
  ((s.width = e.canvas.width), (s.height = e.canvas.height));
  let c = s.getContext(`2d`);
  ((c.font = i), (c.textAlign = `center`), (c.fillStyle = a), c.fillText(t, n, r));
  let l = c.measureText(t),
    u = l.width / 2 + 8,
    d = r - (l.actualBoundingBoxAscent || 90) - 4,
    f = r + (l.actualBoundingBoxDescent || 16) + 4;
  c.globalCompositeOperation = `destination-out`;
  for (let e = 0, t = (u * 2 * (f - d)) / 14; e < t; e += 1)
    ((c.fillStyle = `rgba(0,0,0,${0.2 + o() * 0.6})`),
      c.fillRect(n - u + o() * u * 2, d + o() * (f - d), 1 + o() * 2.4, 1 + o() * 1.4));
  e.drawImage(s, 0, 0);
}
function Wi(e, t, n, r, i) {
  (e.save(),
    e.translate(n - i / 2, r),
    e.scale(i / 24, i / 24),
    (e.lineWidth = 1.5),
    (e.lineCap = `round`),
    (e.lineJoin = `round`),
    (e.strokeStyle = `rgba(241,236,223,0.9)`),
    (e.fillStyle = `rgba(241,236,223,0.22)`));
  for (let n of t.matchAll(/<circle cx="([\d.]+)" cy="([\d.]+)" r="([\d.]+)"([^>]*)>/g))
    (e.beginPath(),
      e.arc(+n[1], +n[2], +n[3], 0, Math.PI * 2),
      /fill="currentColor"/.test(n[4]) && e.fill(),
      e.stroke());
  for (let n of t.matchAll(/<path d="([^"]+)"/g)) e.stroke(new Path2D(n[1]));
  e.restore();
}
function Gi(e, t, n, r, i) {
  let a = xt([...String(r.id || r.name)].reduce((e, t) => e * 31 + t.charCodeAt(0), 7) >>> 0);
  ((e.globalCompositeOperation = `source-over`), (e.fillStyle = `#25302A`), e.fillRect(0, 0, t, n));
  for (let r = 0; r < 8; r += 1) {
    let r = a() * t,
      i = a() * n,
      o = 90 + a() * 170,
      s = e.createRadialGradient(r, i, 0, r, i, o);
    (s.addColorStop(0, `rgba(214,226,214,0.07)`),
      s.addColorStop(1, `rgba(214,226,214,0)`),
      (e.fillStyle = s),
      e.fillRect(0, 0, t, n));
  }
  e.lineCap = `round`;
  for (let r = 0; r < 5; r += 1) {
    let r = a() * n;
    ((e.strokeStyle = `rgba(232,238,228,${0.03 + a() * 0.03})`),
      (e.lineWidth = 26 + a() * 20),
      e.beginPath(),
      e.moveTo(-30, r),
      e.quadraticCurveTo(t / 2, r + (a() - 0.5) * 140, t + 30, r + (a() - 0.5) * 90),
      e.stroke());
  }
  for (let r = 0; r < 1800; r += 1)
    ((e.fillStyle = `rgba(240,240,230,${a() * 0.06})`), e.fillRect(a() * t, a() * n, 1 + a() * 2, 1 + a() * 2));
  for (let [r, i, o] of [
    [26, 0.78, 3.4],
    [40, 0.42, 2],
  ])
    Vi(
      e,
      [
        ...Hi(r, r, t - r, r),
        ...Hi(t - r, r, t - r, n - r).slice(1),
        ...Hi(t - r, n - r, r, n - r).slice(1),
        ...Hi(r, n - r, r, r).slice(1),
      ],
      a,
      o,
      i,
    );
  r.stamp ? Wi(e, r.stamp, t / 2, 70, 108) : Ui(e, `✦`, t / 2, 160, `700 84px ${zi}`, `#F1ECDF`, a);
  let o = String(r.name || ``),
    s = i === `en`,
    c = s ? null : o.match(/^(当一回)(.+)$/),
    l = s ? `your turn as` : c ? c[1] : ``,
    u = s ? o.replace(/^Your turn as /i, ``) : c ? c[2] : o,
    d = t - 128;
  (Ui(e, l, t / 2, 262, Bi(e, l, s ? `italic 500` : `600`, s ? 40 : 44, d, s ? `Georgia,serif` : zi), `#E9E3D4`, a),
    Ui(e, u, t / 2, s ? 362 : 382, Bi(e, u, `800`, s ? 76 : 112, d, s ? `Georgia,serif` : zi), `#F8F3E7`, a),
    Vi(
      e,
      Hi(t / 2 - 120, 430, t / 2 + 120, 430, 16).map(([e, t], n, r) => [
        e,
        t + Math.sin((n / (r.length - 1)) * Math.PI) * 9,
      ]),
      a,
      3,
      0.6,
    ));
  let f = String(r.meta || ``).split(` · `)[0];
  Ui(e, f, t / 2, 512, Bi(e, f, `700`, 46, d, s ? `Georgia,serif` : zi), `#EFD58E`, a);
}
function Ki() {
  let e = new z(),
    t = new u(0.31, 0.022, 6, 28);
  for (let n of [-0.5, 0.5]) {
    let r = new k(t, ii);
    (r.position.set(n, 0.33, 0), e.add(r));
    let i = new k(new j(0.03, 0.03, 0.06, 6), ci);
    ((i.rotation.x = Math.PI / 2), i.position.set(n, 0.33, 0), e.add(i));
  }
  let n = (e, t = 0.018) => new k(new i(new pe(e.map(([e, t]) => new B(e, t, 0))), 6, t, 5), ni);
  e.add(
    n([
      [-0.5, 0.33],
      [-0.05, 0.36],
      [0.4, 0.72],
    ]),
    n([
      [-0.05, 0.36],
      [-0.18, 0.72],
      [0.4, 0.72],
    ]),
    n([
      [-0.5, 0.33],
      [-0.2, 0.75],
    ]),
    n([
      [0.5, 0.33],
      [0.38, 0.86],
      [0.3, 0.92],
    ]),
  );
  let r = new k(new Y(0.2, 0.05, 0.1, 1, 0.02), ii);
  (r.position.set(-0.2, 0.78, 0), e.add(r));
  let a = new k(new j(0.15, 0.12, 0.16, 10), ri);
  (a.position.set(0.52, 0.84, 0), e.add(a));
  let o = new k(new y(0.12, 1), new L({ color: `#E8B930`, roughness: 0.7 }));
  return (o.position.set(0.52, 0.95, 0), e.add(o), (e.rotation.z = 0.05), e);
}
function qi(e) {
  let t = new z(),
    n = [],
    r = xt(77),
    i = (e, t, n) => {
      let r = X[e],
        i = { x: Math.sin(r.facing), z: Math.cos(r.facing) },
        a = { x: Math.cos(r.facing), z: -Math.sin(r.facing) },
        o = r.front.x + a.x * t + i.x * n,
        s = r.front.z + a.z * t + i.z * n;
      return { x: o, z: s, y: Z(o, s), face: r.facing };
    },
    a = (e, r, a, o, { turn: s = 0, r: c = 0 } = {}) => {
      let l = i(r, a, o);
      return (
        e.position.set(l.x, l.y, l.z),
        (e.rotation.y = l.face + s),
        t.add(e),
        c && n.push({ x: l.x, z: l.z, r: c }),
        e
      );
    },
    o = [`#E7B7B0`, `#F6EEE3`, `#EFD58E`, `#E8A08A`, `#C9B8D8`],
    s = { melies: [-2.3, 1.3], vangogh: [-2.3, 1.5], lishizhen: [-3.2, 1], xiyou: [-2.6, 1.4] },
    c = [`melies`, `vangogh`, `lishizhen`, ...(tr(`xiyou`) ? [`xiyou`] : [])];
  for (let t of c) {
    let n = _t[t],
      i = n.doorway?.side || 0;
    for (let [e, n, s] of [
      [-1, 0.35, 1.15],
      [1, 0.35, 1.15],
      [-1.45, 0.25, 0.85],
      [1.45, 0.25, 0.85],
    ])
      a(Li(r, o[(r() * o.length) | 0], s), t, i + e, n, { r: 0.22 });
    a(Ri(n, e), t, i + s[t][0], s[t][1], { turn: 0.35, r: 0.32 });
  }
  let l = new z();
  for (let e = 0; e < 5; e += 1) {
    let t = new k(new j(0.2, 0.2, 0.06, 18), ci);
    (t.position.set((r() - 0.5) * 0.04, 0.03 + e * 0.065, (r() - 0.5) * 0.04), l.add(t));
  }
  a(l, `melies`, 2.25, 0.6, { r: 0.25 });
  let d = new k(new Y(0.62, 0.46, 0.46, 2, 0.03), ri);
  d.position.y = 0.23;
  let f = new z();
  f.add(d);
  let p = new k(new Y(0.66, 0.04, 0.5, 1, 0.015), ii);
  ((p.position.y = 0.48),
    f.add(p),
    a(f, `melies`, 2.9, 2, { turn: 0.3, r: 0.4 }),
    a(hi(), `melies`, -3, 2.4, { turn: 0, r: 0.75 }),
    a(Ki(), `vangogh`, -1.45, 0.32, { turn: 0, r: 0.35 }));
  let m = new z(),
    h = new k(new Y(0.5, 0.3, 0.38, 2, 0.025), ri);
  ((h.position.y = 0.15), m.add(h));
  let g = new L({ color: `#C8462F`, roughness: 0.55 });
  for (let e = 0; e < 9; e += 1) {
    let t = new k(new y(0.055, 1), g);
    (t.position.set(-0.16 + (e % 3) * 0.16, 0.32, -0.1 + Math.floor(e / 3) * 0.1), m.add(t));
  }
  a(m, `vangogh`, 3.3, 0.5, { turn: 0.2, r: 0.35 });
  let _ = new z(),
    v = new k(new j(0.12, 0.14, 0.26, 12), new L({ color: `#3D5BA9`, roughness: 0.55, metalness: 0.3 }));
  ((v.position.y = 0.13), _.add(v));
  let b = new k(new j(0.015, 0.025, 0.3, 6), v.material);
  (b.position.set(0.17, 0.24, 0), (b.rotation.z = -0.9), _.add(b), a(_, `vangogh`, 5.6, 2.6, { turn: 0.6 }));
  let x = new z(),
    S = new k(new Y(0.42, 0.05, 0.42, 1, 0.015), new L({ color: `#D9B24A`, roughness: 0.85 }));
  ((S.position.y = 0.45), x.add(S));
  for (let [e, t] of [
    [-0.18, -0.18],
    [0.18, -0.18],
    [-0.18, 0.18],
    [0.18, 0.18],
  ]) {
    let n = new k(new j(0.02, 0.02, 0.45, 5), ri);
    (n.position.set(e, 0.225, t), x.add(n));
  }
  for (let e of [-0.18, 0.18]) {
    let t = new k(new j(0.02, 0.02, 0.5, 5), ri);
    (t.position.set(e, 0.7, -0.19), x.add(t));
  }
  let w = new k(new Y(0.4, 0.06, 0.03, 1, 0.01), ri);
  (w.position.set(0, 0.88, -0.19), x.add(w), a(x, `vangogh`, -2.6, 1.1, { turn: -0.5, r: 0.35 }));
  let T = [`#9AA866`, `#B5452F`, `#A07A4A`, `#C9B45C`, `#7E9C6A`].map(Qr);
  for (let [e, t] of [
    [-1.1, 1],
    [1.15, 1.05],
    [2.4, 0.45],
  ]) {
    let n = new z(),
      i = new k(new j(0.42, 0.4, 0.06, 20), oi);
    ((i.position.y = 0.04), n.add(i));
    let o = new ue(new y(0.035, 0), new L({ roughness: 0.9 }), 40),
      s = new P(),
      c = T[(r() * T.length) | 0];
    for (let e = 0; e < 40; e += 1) {
      let t = r() * 6.28,
        n = Math.sqrt(r()) * 0.35;
      (o.setMatrixAt(e, s.makeTranslation(Math.cos(t) * n, 0.08, Math.sin(t) * n)),
        o.setColorAt(e, c.clone().offsetHSL(0, 0, (r() - 0.5) * 0.08)));
    }
    (n.add(o), a(n, `lishizhen`, e, t, { r: 0.42 }));
  }
  let E = new z(),
    ee = new L({ color: `#9DB8A0`, roughness: 0.42 });
  for (let e = 0; e < 3; e += 1) {
    let t = new k(
      new C(
        [
          [0.001, 0],
          [0.12, 0],
          [0.16, 0.12],
          [0.14, 0.26],
          [0.08, 0.3],
          [0.09, 0.34],
          [0.001, 0.34],
        ].map(([t, n]) => new oe(t * (1 - e * 0.15), n * (1 - e * 0.12))),
        12,
      ),
      ee,
    );
    (t.position.set(e * 0.34 - 0.34, 0, 0), E.add(t));
  }
  a(E, `lishizhen`, -2, 0.3, { r: 0.45 });
  let D = new z(),
    te = new k(new Y(0.7, 0.18, 0.2, 2, 0.06), new L({ color: `#8E8478`, roughness: 0.6, metalness: 0.35 }));
  ((te.position.y = 0.09), D.add(te));
  let O = new k(new j(0.13, 0.13, 0.04, 16), te.material);
  ((O.rotation.x = Math.PI / 2), O.position.set(0.05, 0.2, 0), D.add(O));
  let A = new k(new j(0.015, 0.015, 0.5, 5), ri);
  if (
    ((A.rotation.x = Math.PI / 2),
    A.position.set(0.05, 0.2, 0),
    D.add(A),
    a(D, `lishizhen`, 3.2, 1.3, { turn: 0.4, r: 0.4 }),
    tr(`xiyou`))
  ) {
    let e = new z(),
      t = new L({ color: `#8C7350`, roughness: 0.48, metalness: 0.65 }),
      n = new k(
        new C(
          [
            [0.001, 0.22],
            [0.2, 0.24],
            [0.26, 0.36],
            [0.27, 0.46],
            [0.23, 0.5],
            [0.001, 0.47],
          ].map(([e, t]) => new oe(e, t)),
          18,
        ),
        t,
      );
    e.add(n);
    for (let n = 0; n < 3; n += 1) {
      let r = (n / 3) * Math.PI * 2,
        i = new k(new j(0.025, 0.035, 0.26, 6), t);
      (i.position.set(Math.cos(r) * 0.15, 0.13, Math.sin(r) * 0.15), e.add(i));
    }
    for (let n of [-1, 1]) {
      let r = new k(new u(0.06, 0.014, 6, 12, Math.PI), t);
      (r.position.set(n * 0.25, 0.5, 0), (r.rotation.y = Math.PI / 2), e.add(r));
    }
    let i = new k(new j(0.22, 0.22, 0.02, 16), oi);
    ((i.position.y = 0.46), e.add(i));
    let o = new L({ color: `#A8463C`, roughness: 0.8 });
    for (let t = 0; t < 3; t += 1) {
      let n = new k(new j(0.006, 0.006, 0.28, 4), o);
      (n.position.set((t - 1) * 0.05, 0.6, (r() - 0.5) * 0.04), (n.rotation.z = (t - 1) * 0.12), e.add(n));
    }
    a(e, `xiyou`, 2.3, 1.1, { r: 0.35 });
    let s = new z(),
      c = new L({ color: `#D9C09A`, roughness: 0.9 }),
      l = new k(new Y(0.62, 1.05, 0.16, 2, 0.04), c);
    ((l.position.y = 0.5), (l.rotation.z = 0.12), s.add(l));
    let d = new k(new Y(0.3, 0.22, 0.14, 1, 0.03), c);
    (d.position.set(0.42, 0.1, 0.12), d.rotation.set(0.3, 0.6, 0.9), s.add(d));
    let f = new k(new Y(0.8, 0.14, 0.34, 1, 0.04), ei);
    ((f.position.y = 0.04), s.add(f), a(s, `xiyou`, 3.4, 0.5, { turn: -0.25, r: 0.5 }));
    let p = di(64, 192, (e, t, n) => {
        ((e.fillStyle = `#EFE3C8`),
          e.fillRect(0, 0, t, n),
          (e.strokeStyle = `rgba(160,70,50,0.75)`),
          (e.lineWidth = 3),
          e.strokeRect(6, 6, t - 12, n - 12),
          (e.fillStyle = `rgba(140,60,45,0.7)`));
        for (let t = 0; t < 6; t += 1) e.fillRect(22, 24 + t * 26, 20, 4);
      }),
      m = new L({ map: p, roughness: 0.92, side: 2 });
    for (let [e, t, n] of [
      [-1.6, 2.4, 0.4],
      [0.9, 2.9, -0.7],
      [2, 2.2, 1.6],
    ]) {
      let r = new k(new I(0.16, 0.46), m);
      ((r.rotation.x = -Math.PI / 2 + 0.06), (r.position.y = 0.03));
      let i = new z();
      (i.add(r), a(i, `xiyou`, e, t, { turn: n }));
    }
    let h = new z(),
      g = new L({ color: `#C9A25A`, roughness: 0.6 }),
      _ = new k(new R(0.13, 12, 10), g);
    ((_.position.y = 0.13), h.add(_));
    let v = new k(new R(0.085, 12, 10), g);
    ((v.position.y = 0.3), h.add(v));
    let y = new k(new u(0.05, 0.01, 6, 12), new L({ color: `#A8463C`, roughness: 0.8 }));
    ((y.position.y = 0.22), (y.rotation.x = Math.PI / 2), h.add(y), (h.rotation.z = 1.2), (h.position.y = 0.1));
    let b = new z();
    (b.add(h), a(b, `xiyou`, -1.9, 0.6, { turn: 0.5, r: 0.2 }));
  }
  return (fi(t), { group: t, colliders: n });
}
var Ji = 6;
function Yi(e, t, n, r, i, a) {
  let o = xt(31),
    s = a === `en`,
    c = s ? `Georgia,'Times New Roman',serif` : zi;
  ((e.fillStyle = `#A87B4F`), e.fillRect(0, 0, t, n));
  for (let r = 0; r < 16e3; r += 1) {
    let r = o();
    ((e.fillStyle =
      r < 0.45
        ? `rgba(78,50,26,${0.1 + o() * 0.16})`
        : r < 0.85
          ? `rgba(214,170,118,${0.08 + o() * 0.14})`
          : `rgba(40,24,12,${0.12 + o() * 0.12})`),
      e.fillRect(o() * t, o() * n, 1 + o() * 3.2, 1 + o() * 3.2));
  }
  let l = e.createRadialGradient(t / 2, n / 2, n * 0.35, t / 2, n / 2, t * 0.62);
  (l.addColorStop(0, `rgba(40,22,10,0)`),
    l.addColorStop(1, `rgba(40,22,10,0.32)`),
    (e.fillStyle = l),
    e.fillRect(0, 0, t, n));
  let u = (t, n, r = `#C8462F`) => {
      ((e.fillStyle = `rgba(30,18,10,0.35)`),
        e.beginPath(),
        e.arc(t + 3, n + 4, 10, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = r),
        e.beginPath(),
        e.arc(t, n, 10, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = `rgba(255,255,255,0.6)`),
        e.beginPath(),
        e.arc(t - 3.5, n - 3.5, 3.4, 0, Math.PI * 2),
        e.fill());
    },
    d = t * 0.6,
    f = (t - d) / 2;
  (e.save(),
    e.translate(t / 2, 104),
    e.rotate(-0.006),
    (e.fillStyle = `rgba(30,18,10,0.3)`),
    e.fillRect(-d / 2 + 7, -69, d, 156),
    (e.fillStyle = `#FAF4E8`),
    e.fillRect(-d / 2, -78, d, 156),
    (e.textAlign = `center`),
    (e.fillStyle = `#33281F`),
    (e.font = Bi(e, i.name, s ? `700` : `800`, s ? 72 : 84, d - 80, c)),
    e.fillText(i.name, 0, 10),
    (e.fillStyle = `#7A6A5E`),
    (e.font = Bi(e, i.meta, s ? `italic 500` : `500`, s ? 32 : 34, d - 80, c)),
    e.fillText(i.meta, 0, 58),
    e.restore(),
    u(f + 26, 48, `#3F6B8A`),
    u(f + d - 26, 48, `#3F6B8A`));
  let p = Ji,
    m = (t - 1284) / 7;
  for (let t = 0; t < p; t += 1) {
    let n = m + t * (214 + m),
      i = (t % 2 ? 1 : -1) * 0.02 * (1 + (t % 3) * 0.4),
      a = r[t];
    if (
      (e.save(),
      e.translate(n + 107, 459),
      e.rotate(i),
      (e.fillStyle = `rgba(30,18,10,0.34)`),
      e.fillRect(-100, -223, 214, 466),
      (e.fillStyle = `#FBF6EE`),
      e.fillRect(-107, -233, 214, 466),
      a?.img)
    ) {
      let { img: t } = a,
        n = Math.max(196 / t.width, 448 / t.height),
        r = 196 / n,
        i = 448 / n;
      e.drawImage(t, (t.width - r) / 2, (t.height - i) / 2, r, i, -98, -224, 196, 448);
    } else
      ((e.fillStyle = [`#E7B7B0`, `#A9C4DD`, `#EFD58E`, `#A8BF8A`, `#C9B8D8`, `#E9C9A8`][t % 6]),
        e.fillRect(-98, -224, 196, 448));
    if ((e.restore(), u(n + 107, 234), a?.title)) {
      let t = s ? a.title : `《${a.title}》`,
        r = 214 + m * 0.6;
      ((e.fillStyle = `rgba(30,18,10,0.28)`),
        e.fillRect(n + 107 - r / 2 + 4, 711, r, 58),
        (e.fillStyle = `#F4EBDA`),
        e.fillRect(n + 107 - r / 2, 706, r, 58),
        (e.fillStyle = `#33281F`),
        (e.textAlign = `center`),
        (e.font = Bi(e, t, `600`, s ? 26 : 28, r - 16, c)),
        e.fillText(t, n + 107, 745));
    }
  }
}
function Xi(e, t) {
  let n = new z(),
    r = xt(88),
    i = [];
  for (let e of [-2.7 / 2 - 0.1, 1.4500000000000002]) {
    let t = new k(new Y(0.15, 2.82, 0.15, 2, 0.035), ii);
    (t.position.set(e, 1.41, -0.02), n.add(t));
  }
  let a = new k(new Y(2.8600000000000003, 1.71, 0.08, 2, 0.03), ri);
  (a.position.set(0, 1.495, -0.05), n.add(a));
  let o = di(1536, 880, (n, r, i) => Yi(n, r, i, [], e, t)),
    s = new k(
      new I(2.7, 1.55),
      new L({ map: o, roughness: 0.88, emissive: `#ffffff`, emissiveMap: o, emissiveIntensity: 0.03 }),
    );
  (s.position.set(0, 1.495, 0), n.add(s));
  let c = new k(new Y(3.4000000000000004, 0.07, 0.7, 2, 0.025), ai);
  (c.position.set(0, 2.77, 0.08), (c.rotation.x = 0.3), n.add(c));
  let l = new k(new Y(3.4400000000000004, 0.08, 0.1, 1, 0.03), ii);
  (l.position.set(0, 2.87, -0.22), n.add(l));
  let u = new L({ color: `#F6E3C8`, emissive: `#F2B880`, emissiveIntensity: 1.1, roughness: 0.8 });
  for (let e of [-2.7 / 2 - 0.1, 1.4500000000000002]) {
    let t = new k(new R(0.15, 14, 10), u);
    ((t.scale.y = 1.25), t.position.set(e, 2.35, 0.32), n.add(t));
    let r = new k(new j(0.006, 0.006, 0.3, 4), ii);
    (r.position.set(e, 2.65, 0.32), n.add(r));
  }
  let d = (e, t) => ({ x: e, z: t }),
    f = (e, t, r, a = 0, o = 0) => {
      let s = d(t, r);
      (e.position.set(s.x, 0, s.z), (e.rotation.y = a), n.add(e), o && i.push({ side: t, out: r, r: o }));
    },
    p = [`#E7B7B0`, `#F6EEE3`, `#EFD58E`, `#C9B8D8`];
  for (let [e, t, n, i] of [
    [-1.85, 0.35, 1.15, 0],
    [1.85, 0.35, 1.15, 1],
    [-2.3, 0.05, 0.85, 2],
    [2.3, 0.05, 0.85, 3],
  ])
    f(Li(r, p[i], n), e, t, 0, 0.22);
  (f(Ri({ name: e.name, meta: e.meta }, t), -1.6, 1.6, 0.35, 0.32), f(hi(), 2.2, 1.7, -0.5, 0.75));
  let m = new z(),
    h = new k(new j(0.2, 0.2, 0.05, 16), ri);
  ((h.position.y = 0.42), m.add(h));
  for (let e = 0; e < 3; e += 1) {
    let t = (e / 3) * Math.PI * 2,
      n = new k(new j(0.02, 0.025, 0.42, 5), ri);
    (n.position.set(Math.cos(t) * 0.13, 0.21, Math.sin(t) * 0.13), m.add(n));
  }
  f(m, 1.3, 1.25, 0, 0.25);
  for (let e of [-1.1, 0, 1.1]) i.push({ side: e, out: -0.02, r: 0.55 });
  return (
    fi(n),
    (s.castShadow = !1),
    {
      group: n,
      mesh: s,
      colliders: i,
      async paint(n) {
        let r = await Promise.all(
            (n || []).slice(0, Ji).map(
              (e) =>
                new Promise((t) => {
                  let n = new Image();
                  ((n.onload = () => t({ ...e, img: n })), (n.onerror = () => t({ ...e, img: null })), (n.src = e.src));
                }),
            ),
          ),
          i = o.userData.canvas;
        return (
          Yi(i.getContext(`2d`), i.width, i.height, r, e, t),
          (o.needsUpdate = !0),
          r.filter((e) => e.img).length
        );
      },
    }
  );
}
function Zi(e, { lang: t, quality: n, flash: r = null }) {
  let i = new z();
  i.name = `props`;
  let a = [],
    o = mi();
  (i.add(o.group), a.push({ x: 0, z: 0, r: X.fountain.r }));
  for (let e = 0; e < 4; e += 1) {
    let t = Math.PI / 4 + (Math.PI / 2) * e,
      n = hi();
    (n.position.set(Math.cos(t) * 6, 0, Math.sin(t) * 6),
      (n.rotation.y = -t - Math.PI / 2),
      i.add(n),
      a.push({ x: Math.cos(t) * 6, z: Math.sin(t) * 6, r: 0.75 }));
  }
  let s = [];
  for (let e = 0; e < 8; e += 1) {
    let t = Math.PI / 8 + (Math.PI / 4) * e,
      n = Math.cos(t) * 9.15,
      r = Math.sin(t) * 9.15,
      o = gi(4.2);
    (o.position.set(n, Z(n, r), r), i.add(o), a.push({ x: n, z: r, r: 0.25 }), s.push(new B(n, Z(n, r) + 3.95, r)));
  }
  let c = s.map((e, t) => [e, s[(t + 1) % s.length], 0.32]);
  i.add(vi(c));
  let l = s.map((e, t) => ({
    at: new B(e.x, e.y - 3.95, e.z),
    head: e.clone().setY(e.y + 0.1),
    note: t,
    strings: c
      .filter(([t, n]) => t === e || n === e)
      .map(([t, n, r]) => (t === e ? _i(t, n, r, 12) : _i(n, t, r, 12)).map((e) => e.clone().setY(e.y - 0.07))),
  }));
  for (let [e, t] of [
    [1.9, 14.2],
    [-1.9, 19.6],
    [1.9, -12.2],
    [-1.9, -12.2],
    [12.2, -0.4],
    [-12.2, -0.4],
  ]) {
    let n = gi(3);
    (n.position.set(e, Z(e, t), t),
      i.add(n),
      a.push({ x: e, z: t, r: 0.25 }),
      l.push({ at: new B(e, Z(e, t), t), head: new B(e, Z(e, t) + 2.85, t), note: l.length, strings: [] }));
  }
  let u = yi();
  i.add(u.group);
  let d = xi(t);
  (d.position.set(X.gate.x, 0, X.gate.z),
    i.add(d),
    a.push({ x: -1.95, z: X.gate.z, r: 0.42 }, { x: 1.95, z: X.gate.z, r: 0.42 }),
    i.add(Ci()));
  let f = Ti();
  (f.position.set(X.balloon.x, -0.15, X.balloon.z), i.add(f));
  let p = [],
    m = [
      [[`#F3ECE0`, `#EBC77A`], 70, 14, 0.9, 1],
      [[`#F3ECE0`, `#A9C4DD`], 92, 24, 1.1, 2.6],
      [[`#EFD0CC`, `#F3ECE0`, `#C9B8D8`], 60, 4, 0.7, 4.2],
      [[`#F3ECE0`, `#A8BF8A`], 110, 30, 1.2, 5.4],
    ];
  for (let [e, t, r, a, o] of n.low ? m.slice(0, 2) : m) {
    let n = Ti(e, a);
    (n.traverse((e) => {
      e.isMesh && ((e.castShadow = !1), (e.userData.noAO = !0), (e.material = e.material.clone()));
    }),
      (n.userData.flat = !0),
      i.add(n),
      p.push({ b: n, rad: t, y: r, a: o, sp: 0.012 + Math.random() * 0.01 }));
  }
  let h = Ei(t);
  (h.group.position.set(X.morris.x, Z(X.morris.x, X.morris.z), X.morris.z),
    i.add(h.group),
    a.push({ x: X.morris.x, z: X.morris.z, r: 0.95 }));
  let g = r ? null : Mi();
  g && (i.add(g.group), a.push({ x: X.flash.x, z: X.flash.z, r: 1.25 }));
  let _ = null;
  if (r) {
    _ = Xi(r, t);
    let e = X.flash.rot,
      n = { x: Math.sin(e), z: Math.cos(e) },
      o = { x: Math.cos(e), z: -Math.sin(e) },
      s = X.flash.x - n.x * 1.2,
      c = X.flash.z - n.z * 1.2;
    (_.group.position.set(s, Z(s, c), c), (_.group.rotation.y = e), i.add(_.group));
    for (let e of _.colliders) a.push({ x: s + o.x * e.side + n.x * e.out, z: c + o.z * e.side + n.z * e.out, r: e.r });
    ((_.front = { x: s + n.x * 0.1, z: c + n.z * 0.1 }), (_.facing = e));
  }
  for (let e of [-0.6, -4.6]) {
    let t = Ni();
    (t.position.set(-13.9, Z(-13.9, e), e), i.add(t), a.push({ x: -13.9, z: e, r: 0.4 }));
  }
  let v = Pi();
  (v.position.set(-13.2, Z(-13.2, -7.2), -7.2), i.add(v), a.push({ x: -13.2, z: -7.2, r: 0.8 }));
  let y = Fi();
  (y.position.set(13.9, Z(13.9, -6.6), -6.6), (y.rotation.y = -1.2), i.add(y), a.push({ x: 13.9, z: -6.6, r: 0.5 }));
  let b = qi(t);
  (i.add(b.group),
    a.push(...b.colliders),
    vt(i, { keep: [o.group, f, ...p.map((e) => e.b), h.group, ...(g ? [g.group] : []), ...(_ ? [_.mesh] : [])] }),
    e.add(i));
  let x = f.getObjectByName(`burner`),
    S = 0;
  return {
    group: i,
    colliders: a,
    morris: h,
    lawn: g,
    court: _,
    balloon: f,
    fence: u,
    lamps: l,
    fountain: o,
    burn() {
      S = 1;
    },
    update(e, t) {
      (o.update(t, e), h.update(e), g?.cat.update(e), (S = Math.max(0, S - e * 0.35)));
      let n = Math.sin(Math.min(1, (1 - S) * 1.4) * Math.PI) * +(S > 0);
      ((f.position.y = -0.15 + Math.sin(t * 0.8) * 0.08 + n * 0.6),
        (f.rotation.y = Math.sin(t * 0.3) * 0.05),
        x && (x.material.emissiveIntensity = 3 + S * S * 14));
      for (let n of p)
        ((n.a += n.sp * e),
          n.b.position.set(Math.cos(n.a) * n.rad, n.y + Math.sin(t * 0.4 + n.rad) * 1.5, Math.sin(n.a) * n.rad));
    },
  };
}
var Qi = (e, t, n = null) => ({ x: e, z: t, face: n }),
  $i = {
    ...Object.fromEntries(
      Array.from({ length: 8 }, (e, t) => [
        `r${t}`,
        Qi(Math.cos((t * Math.PI) / 4) * 4.4, Math.sin((t * Math.PI) / 4) * 4.4, [0, 0]),
      ]),
    ),
    mE: Qi(8.2, -0.4),
    eMid: Qi(11.5, -2),
    vg: Qi(13.4, -2.6, [20, -2.6]),
    mW: Qi(-8.2, -0.4),
    wMid: Qi(-11.5, -2),
    lsz: Qi(-13.4, -2.6, [-20, -2.6]),
    mN: Qi(0, -8.2),
    morris: Qi(3, -11, [4.6, -12.6]),
    mel: Qi(0, -14, [0, -22]),
    mS: Qi(0, 8.2),
    s1: Qi(0, 13),
    jn: Qi(0, 17.6),
    gate: Qi(0.6, 21.4, [0, 34]),
    pondA: Qi(6.6, 16.4),
    pond: Qi(11.2, 14.4, [17.4, 17.4]),
    lotA: Qi(-6.4, 16.6),
    lot: Qi(-11.2, 14.8),
    lotIn: Qi(-13.6, 15.8, [-15.4, 15.2]),
  },
  ea = [
    ...Array.from({ length: 8 }, (e, t) => [`r${t}`, `r${(t + 1) % 8}`]),
    [`r0`, `mE`],
    [`mE`, `eMid`],
    [`eMid`, `vg`],
    [`r4`, `mW`],
    [`mW`, `wMid`],
    [`wMid`, `lsz`],
    [`r6`, `mN`],
    [`mN`, `morris`],
    [`morris`, `mel`],
    [`mN`, `mel`],
    [`r2`, `mS`],
    [`mS`, `s1`],
    [`s1`, `jn`],
    [`jn`, `gate`],
    [`jn`, `pondA`],
    [`pondA`, `pond`],
    [`jn`, `lotA`],
    [`lotA`, `lot`],
    [`lot`, `lotIn`],
  ],
  ta = [
    [`vg`, 3],
    [`lsz`, 3],
    [`mel`, 4],
    [`morris`, 2],
    [`pond`, 3],
    [`lotIn`, 2],
    [`gate`, 1],
    [`r1`, 1],
    [`r3`, 1],
    [`r5`, 1],
    [`r7`, 1],
  ],
  na = {};
for (let [e, t] of ea) ((na[e] ||= []).push(t), (na[t] ||= []).push(e));
var ra = (e, t) => Math.hypot($i[e].x - $i[t].x, $i[e].z - $i[t].z);
function ia(e, t) {
  let n = { [e]: 0 },
    r = {},
    i = new Set(Object.keys($i));
  for (; i.size;) {
    let e = null;
    for (let t of i) n[t] !== void 0 && (e === null || n[t] < n[e]) && (e = t);
    if (e === null || e === t) break;
    i.delete(e);
    for (let t of na[e] || []) {
      let i = n[e] + ra(e, t);
      i < (n[t] ?? 1 / 0) && ((n[t] = i), (r[t] = e));
    }
  }
  if (n[t] === void 0) return [];
  let a = [];
  for (let n = t; n !== e; n = r[n]) a.unshift(n);
  return a;
}
var aa = (e, t) => {
    let n = t.reduce((e, [, t]) => e + t, 0),
      r = e() * n;
    for (let [e, n] of t) if (((r -= n), r <= 0)) return e;
    return t[0][0];
  },
  oa = 3.2,
  sa = { visitor: 0.95, person: 0.75 },
  ca = { visitor: 1.1, person: 0.9 },
  la = 0.72,
  ua = 0.66,
  da = -1;
function fa({
  scene: e,
  ids: t,
  colliders: n,
  heightAt: r,
  disc: i,
  walkable: a = () => !0,
  pathfind: o = null,
  sight: s = null,
  visitor: c = null,
  circles: l = [],
  lines: u = [],
  bubbleEl: d,
  camera: f,
}) {
  let p = Math.random,
    m = [],
    h = 0,
    g = [`r1`, `r3`, `r5`, `r7`, `pond`, `lotIn`, `vg`, `lsz`, `mel`, `gate`],
    _ = (e) => `models/chars/lod/${e}.glb`,
    v = Promise.all(
      t.map(async (t, a) => {
        let o;
        try {
          o = await qe(_(t));
        } catch {
          return;
        }
        e.add(o.object);
        let u = { x: 0, z: 0, r: 0.3 },
          d = et({
            avatar: o,
            disc: i,
            colliders: n,
            people: c ? [c] : null,
            heightAt: r,
            sight: s,
            speed: 0.95 + p() * 0.25,
            radius: 0.26,
          }),
          f = g[a % g.length],
          v = $i[f],
          y = b(v, null);
        (d.place(y.x, y.z, p() * 6), v.face && (d.heading = Math.atan2(v.face[0] - y.x, v.face[1] - y.z)));
        let x = {
          id: t,
          avatar: o,
          ctrl: d,
          node: f,
          me: u,
          mode: `idle`,
          until: h + 1 + p() * 6,
          path: [],
          goal: y,
          waved: -99,
          waited: 0,
          nextStep: 0,
        };
        ((u.x = y.x), (u.z = y.z), m.push(x), l.push(u));
      }),
    ),
    y = (e, t, n, r) => {
      let i = Math.ceil(Math.hypot(n - e, r - t) / 0.3);
      for (let o = 1; o <= i; o += 1) if (!a(e + ((n - e) * o) / i, t + ((r - t) * o) / i)) return !1;
      return !0;
    };
  function b(e, t) {
    for (let n = 0; n < 12; n += 1) {
      let r = p() * Math.PI * 2,
        i = n < 2 ? p() * 0.3 : 0.45 + p() * 1,
        o = e.x + Math.cos(r) * i,
        s = e.z + Math.sin(r) * i;
      if (
        a(o, s) &&
        m.every(
          (e) =>
            e === t ||
            (Math.hypot(e.ctrl.position.x - o, e.ctrl.position.z - s) > 0.95 &&
              Math.hypot(e.goal.x - o, e.goal.z - s) > 0.95),
        )
      )
        return new B(o, 0, s);
    }
    return new B(e.x, 0, e.z);
  }
  function x(e) {
    let t = e.path.shift();
    if (!t) {
      e.mode = `idle`;
      let t = $i[e.node];
      (t.face && e.ctrl.faceToward(t.face[0], t.face[1]), (e.until = h + 6 + p() * 12));
      let n = p();
      n < 0.35
        ? e.avatar.play?.(`look-around`, { loop: !0, fade: 0.5 })
        : n < 0.6 && e.avatar.play?.(`idle-relax`, { loop: !0, fade: 0.5 });
      return;
    }
    let n = $i[t],
      r = e.path.length ? new B(n.x + (p() - 0.5) * 0.6, 0, n.z + (p() - 0.5) * 0.6) : b(n, e);
    e.goal = r;
    let i = () => {
      ((e.node = t), x(e));
    };
    o ? e.ctrl.walkPath(o(e.ctrl.position, r), i) : e.ctrl.walkTo(r, i);
  }
  let S = null,
    C = 0,
    w = 6,
    T = -1,
    E = !1,
    ee = !1,
    D = 0,
    te = 0,
    O = new B(),
    k = (e, t = 5.5) => {
      let n = (p() * u.length) | 0;
      (u.length > 1 && n === T && (n = (n + 1) % u.length),
        (T = n),
        (S = e),
        (d.querySelector(`span`).textContent = u[n]),
        d.classList.add(`show`),
        (C = h + t),
        (D = d.offsetWidth),
        (te = d.offsetHeight));
    },
    A = (e, t = null) => {
      e.avatar.stopGesture?.(0.5);
      let n = aa(p, ta);
      for (let r = 0; r < 4 && (n === e.node || n === t); r += 1) n = aa(p, ta);
      ((e.path = ia(e.node, n)), (e.dest = n), (e.mode = `walk`), (e.waited = 0), e.ctrl.hold(!1), x(e));
    };
  function j(e, t, n, r, i, a, o = 1) {
    let s = null,
      c = (i, a, o, c = null) => {
        let l = i - e.x,
          u = a - e.z,
          d = l * t + u * n;
        if (d < 0.05 || d > Math.min(oa, r + 0.9)) return;
        let f = l * n - u * t;
        Math.abs(f) > sa[o] || ((!s || d < s.along) && (s = { x: i, z: a, along: d, lat: f, kind: o, q: c }));
      },
      l = (r, i, a, s, l) => {
        if ((c(r, i, s, l), !a || a.x * a.x + a.z * a.z < 0.04)) return;
        let u = Math.min(1.2, Math.max(0, (r - e.x) * t + (i - e.z) * n) / Math.max(0.6, o));
        c(r + a.x * u, i + a.z * u, s, l);
      };
    a && l(a.position.x, a.position.z, a.velocity, `visitor`, null);
    for (let e of m)
      e !== i && l(e.ctrl.position.x, e.ctrl.position.z, e.mode === `idle` ? null : e.ctrl.velocity, `person`, e);
    return s;
  }
  function ne(e, t) {
    let n = e.position,
      r = t.x - n.x,
      i = t.z - n.z,
      o = Math.hypot(r, i);
    ((r /= o), (i /= o));
    let s = i,
      c = -r,
      l = Math.abs(t.lat) > 0.12 ? -Math.sign(t.lat) : da;
    if (t.q?.mode === `walk`) {
      let e = t.q.ctrl.velocity,
        n = e.x * s + e.z * c;
      Math.abs(n) > 0.15 && (l = -Math.sign(n));
    }
    for (let u of [ca[t.kind], la]) {
      if (o < u + 0.03) continue;
      let t = u / o,
        d = Math.sqrt(1 - t * t),
        f = o * d + 0.5;
      for (let o of [l, -l]) {
        let l = r * d + s * o * t,
          u = i * d + c * o * t,
          p = n.x + l * f,
          m = n.z + u * f;
        if (a(p, m) && y(n.x, n.z, p, m)) return (e.detour(new B(p, 0, m)), !0);
      }
    }
    return !1;
  }
  function re(e) {
    if (!e.walking || e.held) return;
    let t = e.aim,
      n = e.position,
      r = t.x - n.x,
      i = t.z - n.z,
      a = Math.hypot(r, i);
    if (a < 0.3) return;
    ((r /= a), (i /= a));
    let o = j(n, r, i, a, null, null, Math.max(1, e.velocity.length()));
    !o || o.along < 0.4 || (e.detouring && (o.along > 1.8 || Math.abs(o.lat) > ua)) || ne(e, o);
  }
  function M(e, t, n, r) {
    let i = e.ctrl,
      o = i.aim;
    if (!o) return;
    let s = i.position,
      c = o.x - s.x,
      l = o.z - s.z,
      u = Math.hypot(c, l);
    if (u < 0.05) return;
    ((c /= u), (l /= u));
    let d = j(s, c, l, u, e, r, Math.max(0.6, i.velocity.length()));
    if (!d) {
      (i.held && i.hold(!1), (e.waited = 0));
      return;
    }
    let f = () => {
      (i.held || (i.hold(!0), (e.waitFor = d.kind)),
        d.kind === `visitor` && i.faceToward(r.position.x, r.position.z),
        (e.waited += n));
      let t = d.q,
        o = t?.ctrl.held && t.waitFor === `person`;
      if (e.waited > (d.kind === `visitor` ? 0.7 : 0.35) && (!o || m.indexOf(e) > m.indexOf(t))) {
        let t = Math.abs(d.lat) > 0.08 ? -Math.sign(d.lat) : da;
        for (let n of [t, -t]) {
          let t = s.x + l * n * 0.9,
            r = s.z - c * n * 0.9;
          if (a(t, r) && y(s.x, s.z, t, r)) {
            (i.hold(!1), i.detour(new B(t, 0, r)), (e.waited = 0));
            return;
          }
        }
      }
      e.waited > 2.4 && A(e, e.dest);
    };
    if (!i.detouring && d.along < 2.4 && Math.hypot(o.x - d.x, o.z - d.z) < ca[d.kind]) {
      (i.hold(!1), (e.waited = 0), i.skip());
      return;
    }
    let p = Math.abs(d.lat) < ua;
    if (i.detouring) {
      if (p && d.along < 1.8 && ne(i, d)) {
        (i.hold(!1), (e.waited = 0));
        return;
      }
      d.along < 0.85 && p ? f() : (i.held && i.hold(!1), (e.waited = 0));
      return;
    }
    if (ne(i, d)) {
      (i.hold(!1), (e.waited = 0));
      return;
    }
    d.along < 1.6 && p && f();
  }
  function ie(e, t, n) {
    if (t < e.nextStep) return;
    let r = e.ctrl,
      i = r.position,
      o = 0,
      s = 0,
      c = 0,
      l = null,
      u = (e, t, n, r) => {
        let a = Math.hypot(t.x, t.z);
        if (l || a < 0.35) return;
        let u = t.x / a,
          d = t.z / a,
          f = i.x - e.x,
          p = i.z - e.z,
          m = f * u + p * d,
          h = f * d - p * u;
        m < 0 || m > n || Math.abs(h) > 0.8 || ((o = u), (s = d), (c = h), (l = r));
      },
      d = n.walking && n.aim;
    u(n.position, d ? { x: d.x - n.position.x, z: d.z - n.position.z } : n.velocity, 2.2, `visitor`);
    for (let t of m) t !== e && t.mode === `walk` && !t.ctrl.held && u(t.ctrl.position, t.ctrl.velocity, 1.6, `person`);
    if (!l) return;
    let f = Math.abs(c) > 0.08 ? Math.sign(c) : p() < 0.5 ? 1 : -1;
    for (let u of [f, -f]) {
      let d = u * 1.05 - c,
        f = i.x + s * d,
        p = i.z - o * d;
      if (a(f, p) && y(i.x, i.z, f, p)) {
        (e.avatar.stopGesture?.(0.3),
          (e.mode = `step`),
          (e.goal = new B(f, 0, p)),
          r.walkTo(e.goal, () => {
            ((e.mode = `idle`),
              (e.until = Math.max(e.until, h + 3)),
              l === `visitor` && r.faceToward(n.position.x, n.position.z));
          }),
          (e.nextStep = t + 1.2));
        return;
      }
    }
    e.nextStep = t + 0.5;
  }
  function N(e, t) {
    if (!(t < e.nextStep))
      for (let n of m) {
        if (n === e || n.mode === `walk`) continue;
        let r = e.ctrl.position.x - n.ctrl.position.x,
          i = e.ctrl.position.z - n.ctrl.position.z,
          o = Math.hypot(r, i);
        if (o > 0.62) continue;
        let s = o > 0.001 ? Math.atan2(r, i) : p() * Math.PI * 2,
          c = e.ctrl.position.x + Math.sin(s) * (0.95 - o),
          l = e.ctrl.position.z + Math.cos(s) * (0.95 - o);
        (a(c, l) &&
          ((e.mode = `step`),
          (e.goal = new B(c, 0, l)),
          e.ctrl.walkTo(e.goal, () => {
            e.mode = `idle`;
          })),
          (e.nextStep = t + 1.5));
        return;
      }
  }
  return {
    ready: v,
    people: m,
    update(e, t, n) {
      h += e;
      let r = h;
      re(n);
      for (let t of m) {
        (t.mode === `idle` && r > t.until && A(t),
          t.mode === `walk` ? M(t, r, e, n) : t.mode === `idle` && (ie(t, r, n), t.mode === `idle` && N(t, r)));
        let i = Math.hypot(n.position.x - t.ctrl.position.x, n.position.z - t.ctrl.position.z);
        (t.mode === `idle` &&
          i < 2.6 &&
          i > 1.3 &&
          r - t.waved > 40 &&
          ((t.waved = r),
          t.ctrl.faceToward(n.position.x, n.position.z),
          t.avatar.play?.(p() > 0.3 ? `wave` : `laugh`, { fade: 0.3 })),
          t.ctrl.update(e, { x: 0, y: 0 }, 0, !1),
          (t.me.x = t.ctrl.position.x),
          (t.me.z = t.ctrl.position.z));
      }
      if (d) {
        if ((S && E && !ee && (d.classList.remove(`show`), (S = null)), !S && !E && r > w && u.length && m.length)) {
          let e = m.filter((e) => Math.hypot(n.position.x - e.ctrl.position.x, n.position.z - e.ctrl.position.z) < 11);
          (e.length && (k(e[(p() * e.length) | 0]), (ee = !1)), (w = r + 10 + p() * 8));
        }
        if (S) {
          (O.copy(S.ctrl.position), (O.y += 2.05), O.project(f));
          let e = O.z < 1 && Math.abs(O.x) < 1.1 && Math.abs(O.y) < 1.1,
            t = window.innerWidth,
            n = V.clamp((O.x * 0.5 + 0.5) * t, D / 2 + 10, Math.max(D / 2 + 10, t - D / 2 - 10)),
            i = Math.max((-O.y * 0.5 + 0.5) * window.innerHeight, te + 78);
          ((d.style.transform = `translate(${n.toFixed(1)}px, ${i.toFixed(1)}px) translate(-50%, -100%)`),
            d.classList.toggle(`show`, e),
            r > C && (d.classList.remove(`show`), (S = null)));
        }
      }
    },
    setLines(e) {
      u = e;
    },
    hush(e) {
      E = e;
    },
    personAt(e, t = 1 / 0) {
      let n = null,
        r = t,
        i = new B(),
        a = new B(),
        o = new B();
      for (let t of m) {
        let s = t.ctrl.position;
        if ((i.set(s.x, s.y + 0.35, s.z), a.set(s.x, s.y + 1.45, s.z), e.distanceSqToSegment(i, a, o) > 0.1296))
          continue;
        let c = o.distanceTo(e.origin);
        c < r && ((r = c), (n = t));
      }
      return n;
    },
    poke(e, t) {
      if (e)
        return (
          e.mode !== `idle` && (e.ctrl.stop(), (e.mode = `idle`), (e.path = [])),
          (e.until = h + 6),
          (e.waved = h),
          e.ctrl.faceToward(t.position.x, t.position.z),
          e.avatar.play?.(p() < 0.55 ? `laugh` : `wave`, { fade: 0.25 }),
          d && u.length && (k(e, 5), (ee = !0), (w = h + 12)),
          m.indexOf(e)
        );
    },
    async recast(t, n) {
      await v;
      let r = m.find((e) => e.id === t),
        i = n.find((e) => e !== t && !m.some((t) => t.id === e));
      if (!r || !i) return;
      let a = await qe(_(i)).catch(() => null);
      a && (e.remove(r.avatar.object), e.add(a.object), r.ctrl.setAvatar(a), (r.avatar = a), (r.id = i));
    },
  };
}
function pa(e, { heightAt: n, width: r = 0.62, lift: i = 0.075 } = {}) {
  let a = new de({
      transparent: !0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
      uniforms: { uTime: { value: 0 }, uLen: { value: 1 }, uReveal: { value: 1 }, uOn: { value: 0 }, uCurve: sr },
      vertexShader: `${cr} attribute float aU; varying float vU; varying float vV; void main(){ vU = aU; vV = uv.y; gl_Position = projectionMatrix * viewMatrix * curveWorld(modelMatrix * vec4(position, 1.0)); }`,
      fragmentShader: `uniform float uTime, uLen, uReveal, uOn; varying float vU; varying float vV;
      void main(){
        float across = abs(vV - 0.5) * 2.0;
        float body = 1.0 - smoothstep(0.6, 0.98, across);
        float rim = smoothstep(0.5, 0.78, across) * (1.0 - smoothstep(0.8, 1.0, across));
        // Chevrons every 1.1 m, drifting toward the door.
        float s = fract((vU - uTime * 0.9) / 1.1);
        float chev = smoothstep(0.16, 0.0, abs(s - 0.5 + across * 0.22)) * (1.0 - smoothstep(0.7, 0.95, across));
        float ends = smoothstep(0.6, 2.2, vU) * (1.0 - smoothstep(uLen - 2.4, uLen - 0.5, vU));
        float drawn = 1.0 - smoothstep(uReveal * uLen - 1.2, uReveal * uLen, vU);
        vec3 col = mix(vec3(0.97, 0.62, 0.16), vec3(1.25, 1.08, 0.72), chev);
        col = mix(col, vec3(0.62, 0.32, 0.06), rim * 0.55);
        float a = clamp(body * 0.42 + rim * 0.3 + chev * 0.55, 0.0, 0.92) * ends * drawn * uOn;
        gl_FragColor = vec4(col, a);
      }`,
    }),
    o = new k(new F(), a);
  ((o.frustumCulled = !1), (o.renderOrder = 4), (o.userData.noAO = !0), (o.visible = !1), e.add(o));
  let s = 0,
    c = 0,
    l = null;
  function u(e) {
    let a = e.map((e) => new B(e.x, 0, e.z));
    if (a.length < 2) return 0;
    let s = new pe(a, !1, `centripetal`, 0.5),
      c = s.getLength(),
      l = Math.max(8, Math.ceil(c / 0.28)),
      u = new Float32Array((l + 1) * 2 * 3),
      d = new Float32Array((l + 1) * 2 * 2),
      f = new Float32Array((l + 1) * 2),
      p = [],
      m = new B(),
      h = new B();
    for (let e = 0; e <= l; e += 1) {
      let t = e / l;
      (s.getPointAt(t, m), s.getTangentAt(t, h));
      let a = -h.z,
        o = h.x,
        g = Math.hypot(a, o) || 1;
      for (let s = 0; s < 2; s += 1) {
        let l = (s ? 0.5 : -0.5) * r,
          p = m.x + (a / g) * l,
          h = m.z + (o / g) * l,
          _ = e * 2 + s;
        (u.set([p, n(p, h) + i, h], _ * 3), d.set([t, s], _ * 2), (f[_] = t * c));
      }
      if (e < l) {
        let t = e * 2;
        p.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
      }
    }
    let g = new F();
    return (
      g.setAttribute(`position`, new t(u, 3)),
      g.setAttribute(`uv`, new t(d, 2)),
      g.setAttribute(`aU`, new t(f, 1)),
      g.setIndex(p),
      o.geometry.dispose(),
      (o.geometry = g),
      c
    );
  }
  return {
    mesh: o,
    set(e) {
      if (!e || e.length < 2) {
        c = 0;
        return;
      }
      ((a.uniforms.uLen.value = u(e)), (o.visible = !0), (c = 1));
    },
    reveal(e = 1.6) {
      ((l = { t: 0, d: e }), (a.uniforms.uReveal.value = 0));
    },
    get shown() {
      return c > 0;
    },
    update(e, t) {
      if (
        ((s += (c - s) * (1 - Math.exp(-e * 4))),
        c === 0 && s < 0.01 && ((s = 0), (o.visible = !1)),
        (a.uniforms.uOn.value = s),
        (a.uniforms.uTime.value = t),
        l)
      ) {
        l.t += e;
        let t = Math.min(1, l.t / l.d);
        ((a.uniforms.uReveal.value = 1 - (1 - t) ** 2.2), t >= 1 && (l = null));
      }
    },
  };
}
var ma = null,
  ha = !1,
  ga = () => {
    let e = Fe();
    return e ? (ma || ((ma = e.createGain()), (ma.gain.value = +!ha), ma.connect(e.destination)), e) : null;
  },
  _a = (e, t) => {
    let n = e.createBuffer(1, Math.floor(e.sampleRate * t), e.sampleRate),
      r = n.getChannelData(0);
    for (let e = 0; e < r.length; e += 1) r[e] = Math.random() * 2 - 1;
    return n;
  };
function va(
  e,
  t,
  n,
  { type: r = `sine`, vol: i = 0.1, attack: a = 0.005, decay: o = 1.2, to: s = ma, bend: c = 0 } = {},
) {
  let l = e.createOscillator();
  ((l.type = r), l.frequency.setValueAtTime(t, n), c && l.frequency.exponentialRampToValueAtTime(t * c, n + o * 0.6));
  let u = e.createGain();
  (u.gain.setValueAtTime(1e-4, n),
    u.gain.exponentialRampToValueAtTime(i, n + a),
    u.gain.exponentialRampToValueAtTime(1e-4, n + o),
    l.connect(u).connect(s),
    l.start(n),
    l.stop(n + o + 0.05));
}
function ya(
  e,
  t,
  {
    freq: n = 2e3,
    q: r = 1,
    vol: i = 0.1,
    attack: a = 0.01,
    decay: o = 0.4,
    type: s = `bandpass`,
    sweep: c = null,
  } = {},
) {
  let l = e.createBufferSource();
  l.buffer = _a(e, o + 0.1);
  let u = e.createBiquadFilter();
  ((u.type = s),
    u.frequency.setValueAtTime(n, t),
    (u.Q.value = r),
    c && u.frequency.exponentialRampToValueAtTime(c, t + o));
  let d = e.createGain();
  (d.gain.setValueAtTime(1e-4, t),
    d.gain.exponentialRampToValueAtTime(i, t + a),
    d.gain.exponentialRampToValueAtTime(1e-4, t + o),
    l.connect(u).connect(d).connect(ma),
    l.start(t),
    l.stop(t + o + 0.1));
}
var ba = [72, 74, 76, 79, 81, 84, 86, 88],
  xa = (e) => 440 * 2 ** ((e - 69) / 12),
  Sa = {
    setMuted(e) {
      ((ha = e), ma && (ma.gain.value = +!e));
    },
    bell() {
      let e = ga();
      if (!e) return;
      let t = e.currentTime + 0.01;
      for (let [n, r] of [
        [0, 0],
        [1, 0.11],
      ])
        (va(e, 1760 * (n ? 1.19 : 1), t + r, { vol: 0.06, decay: 1.4 }),
          va(e, 1760 * (n ? 1.19 : 1) * 2.76, t + r, { vol: 0.018, decay: 0.5 }));
    },
    note(e = 0, t = 0.09) {
      let n = ga();
      if (!n) return;
      let r = n.currentTime + 0.01,
        i = xa(ba[((e % ba.length) + ba.length) % ba.length]);
      (va(n, i, r, { vol: t, decay: 1.6 }), va(n, i * 4.07, r, { vol: t * 0.35, decay: 0.3 }));
    },
    coin() {
      let e = ga();
      if (!e) return;
      let t = e.currentTime + 0.01;
      (va(e, 2637, t, { type: `triangle`, vol: 0.05, decay: 0.25 }),
        va(e, 3520, t + 0.05, { type: `triangle`, vol: 0.03, decay: 0.2 }),
        Sa.plop(0.62));
    },
    plop(e = 0) {
      let t = ga();
      if (!t) return;
      let n = t.currentTime + 0.01 + e;
      (va(t, 420, n, { vol: 0.12, decay: 0.16, bend: 2.2 }),
        ya(t, n, { freq: 1800, q: 0.7, vol: 0.05, decay: 0.35, sweep: 600 }));
    },
    rustle() {
      let e = ga();
      if (!e) return;
      let t = e.currentTime + 0.01;
      (ya(e, t, { freq: 3200, q: 0.5, vol: 0.06, attack: 0.08, decay: 0.9, sweep: 1400 }),
        ya(e, t + 0.12, { freq: 5200, q: 0.8, vol: 0.03, attack: 0.05, decay: 0.6 }));
    },
    whoosh() {
      let e = ga();
      e &&
        ya(e, e.currentTime + 0.01, {
          type: `lowpass`,
          freq: 900,
          q: 0.3,
          vol: 0.12,
          attack: 0.06,
          decay: 1.1,
          sweep: 300,
        });
    },
    splash() {
      let e = ga();
      if (!e) return;
      let t = e.currentTime + 0.01;
      (ya(e, t, { freq: 2600, q: 0.6, vol: 0.06, decay: 0.25 }),
        ya(e, t + 0.55, { freq: 1500, q: 0.6, vol: 0.08, decay: 0.4, sweep: 500 }),
        va(e, 520, t + 0.55, { vol: 0.06, decay: 0.12, bend: 1.8 }));
    },
    mew() {
      let e = ga();
      if (!e) return;
      let t = e.currentTime + 0.01,
        n = e.createOscillator();
      ((n.type = `triangle`),
        n.frequency.setValueAtTime(620, t),
        n.frequency.linearRampToValueAtTime(880, t + 0.12),
        n.frequency.exponentialRampToValueAtTime(520, t + 0.42));
      let r = e.createBiquadFilter();
      ((r.type = `bandpass`), (r.frequency.value = 1300), (r.Q.value = 1.4));
      let i = e.createGain();
      (i.gain.setValueAtTime(1e-4, t),
        i.gain.exponentialRampToValueAtTime(0.09, t + 0.05),
        i.gain.exponentialRampToValueAtTime(1e-4, t + 0.48),
        n.connect(r).connect(i).connect(ma),
        n.start(t),
        n.stop(t + 0.5));
    },
    hum(e = 1) {
      let t = ga();
      if (!t) return;
      let n = t.currentTime + 0.01;
      va(t, 210 * e, n, { type: `triangle`, vol: 0.05, attack: 0.03, decay: 0.28, bend: 1.35 });
    },
    twinkle(e = 0) {
      let t = ga();
      if (!t) return;
      let n = t.currentTime + 0.01;
      [0, 2, 4, 7].forEach((r, i) => va(t, xa(ba[(e + r) % ba.length] + 12), n + i * 0.06, { vol: 0.045, decay: 0.7 }));
    },
    thump() {
      let e = ga();
      if (!e) return;
      let t = e.currentTime + 0.01;
      (va(e, 140, t, { vol: 0.22, decay: 0.22, bend: 0.5 }),
        ya(e, t, { type: `lowpass`, freq: 900, q: 0.5, vol: 0.08, decay: 0.12 }));
    },
  },
  Ca = (e) => ({ x: Math.sin(e), z: Math.cos(e) }),
  wa = (e) => ({ x: Math.cos(e), z: -Math.sin(e) }),
  Ta = `${cr} varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * viewMatrix * curveWorld(modelMatrix * vec4(position, 1.0)); }`,
  Ea = (e) => new w(`#FFC27A`).lerp(new w(e || `#FFC27A`), 0.22);
function Da(e) {
  return new de({
    transparent: !0,
    depthWrite: !1,
    blending: 2,
    uniforms: { uOn: { value: 0 }, uTime: { value: 0 }, uColor: { value: e }, uCurve: sr },
    vertexShader: Ta,
    fragmentShader: `uniform float uOn, uTime; uniform vec3 uColor; varying vec2 vUv;
      void main(){
        float x = abs(vUv.x - 0.5) * 2.0;
        float body = (1.0 - smoothstep(0.55, 1.0, x)) * (1.0 - smoothstep(0.7, 1.0, vUv.y)) * smoothstep(0.0, 0.06, vUv.y);
        float core = (1.0 - smoothstep(0.0, 0.7, x)) * (1.0 - smoothstep(0.0, 0.9, vUv.y));
        float flick = 0.94 + 0.06 * sin(uTime * 7.0 + sin(uTime * 2.3) * 3.0);
        vec3 c = uColor * (body * 0.42 + core * 0.5) * flick * uOn;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}
function Oa(e) {
  return new de({
    transparent: !0,
    depthWrite: !1,
    blending: 2,
    polygonOffset: !0,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
    uniforms: { uOn: { value: 0 }, uColor: { value: e }, uCurve: sr },
    vertexShader: Ta,
    fragmentShader: `uniform float uOn; uniform vec3 uColor; varying vec2 vUv;
      void main(){
        // A fan of light widening away from the threshold (v = 0 at the door).
        float spread = 0.28 + vUv.y * 0.55;
        float across = abs(vUv.x - 0.5) / spread;
        float a = (1.0 - smoothstep(0.35, 1.0, across)) * (1.0 - smoothstep(0.2, 1.0, vUv.y)) * smoothstep(0.0, 0.08, vUv.y);
        gl_FragColor = vec4(uColor * a * 0.38 * uOn, 1.0);
      }`,
  });
}
function ka(e, { lives: t, sites: n, heightAt: r, puffs: i }) {
  let a = {};
  for (let i of Object.values(t)) {
    let t = n[i.id],
      o = i.doorway;
    if (!t || !o || !i.open) continue;
    let s = Ca(t.facing),
      c = wa(t.facing),
      l = t.front.x + c.x * o.side,
      u = t.front.z + c.z * o.side,
      d = r(l + s.x * 0.6, u + s.z * 0.6),
      f = Ea(i.accent),
      p = Da(f),
      m = new k(new I(o.w * 1.25, o.h * 1.15), p);
    (m.position.set(l + s.x * 0.12, d + o.y, u + s.z * 0.12), (m.rotation.y = t.facing));
    let h = Oa(f),
      g = new k(new I(o.w * 3.2, 3.6), h);
    g.geometry.rotateX(-Math.PI / 2).translate(0, 0, 1.8);
    let _ = g.geometry.attributes.uv;
    for (let e = 0; e < _.count; e += 1) _.setY(e, 1 - _.getY(e));
    (g.position.set(l + s.x * 0.15, d + 0.09, u + s.z * 0.15), (g.rotation.y = t.facing));
    for (let t of [m, g]) ((t.userData.noAO = !0), (t.renderOrder = 3), (t.visible = !1), e.add(t));
    a[i.id] = { life: i, s: t, glow: m, pool: g, glowMat: p, poolMat: h, on: 0, near: !1, rang: -99, cx: l, cz: u };
  }
  let o = null,
    s = null,
    c = null,
    l = !1,
    u = -99,
    d = null,
    f = 0,
    p = 0,
    m = (e) => {
      let t = n[e.id],
        r = Ca(t.facing),
        i = wa(t.facing),
        a = e.host;
      return { x: t.front.x + i.x * a.side + r.x * a.out, z: t.front.z + i.z * a.side + r.z * a.out, face: t.facing };
    };
  function h(t) {
    if (!t?.host || c === t.id) return;
    let n = t.id;
    ((c = n),
      (s &&= (e.remove(s.object), null)),
      (l = !1),
      (d = qe(t.host.model, { height: t.host.height })
        .then((i) => {
          if (c !== n) return;
          let a = m(t);
          (i.object.position.set(a.x, r(a.x, a.z), a.z),
            (i.object.rotation.y = a.face),
            (i.object.visible = !1),
            e.add(i.object),
            (s = i));
        })
        .catch(() => {})));
  }
  return {
    setNext(n) {
      ((o = n && a[n] ? n : null), o ? h(t[o]) : s && (e.remove(s.object), (s = null), (c = null)));
    },
    get host() {
      return l ? s : null;
    },
    get next() {
      return o;
    },
    update(e, n, r) {
      f += e;
      let c = r.position.x,
        d = r.position.z;
      for (let t of Object.values(a)) {
        let r = Math.hypot(c - t.cx, d - t.cz),
          i = t.life.id === o,
          a = +(r < (i ? 12 : 8.5));
        (a && !t.near && f - t.rang > 18 && ((t.rang = f), Sa.bell()),
          (t.near = !!a),
          (t.on += (Math.max(a ? (i ? 1 : 0.75) : 0.4, p) - t.on) * (1 - Math.exp(-e * (a || p ? 2.2 : 1.2)))));
        let s = t.on > 0.005;
        ((t.glow.visible = t.pool.visible = s),
          s &&
            ((t.glowMat.uniforms.uOn.value = t.on),
            (t.glowMat.uniforms.uTime.value = n),
            (t.poolMat.uniforms.uOn.value = t.on)));
      }
      if (!s || !o) return;
      let h = t[o],
        g = m(h),
        _ = s.object,
        v = Math.hypot(c - g.x, d - g.z);
      if (
        (!l &&
          v < 14 &&
          ((l = !0),
          (_.visible = !0),
          i?.puff(new B(g.x, _.position.y + 0.3, g.z), { color: `#fff1e2`, count: 20, size: 0.85 }),
          s.play?.(`wave`, { fade: 0.3 }),
          (u = f)),
        !l)
      )
        return;
      let y = (v < 13 ? Math.atan2(c - _.position.x, d - _.position.z) : g.face) - _.rotation.y;
      ((y = Math.atan2(Math.sin(y), Math.cos(y))),
        (_.rotation.y += y * (1 - Math.exp(-e * 3))),
        v < 4.2 && f - u > 14 && ((u = f), s.play?.(Math.random() < 0.5 ? `wave` : `laugh`, { fade: 0.3 })),
        s.setMotion(0, e));
    },
    farewell() {
      l && s && s.play?.(`wave`, { fade: 0.25 });
    },
    glowAll(e) {
      p = e ? 1.6 : 0;
    },
    get loading() {
      return d;
    },
  };
}
var Aa = new w(`#ffd27a`),
  ja = 0.8;
function Ma(e, { puffs: t = null } = {}) {
  let n = [],
    r = [],
    i = ft(64),
    a = new B(),
    o = new B(),
    s = new B(),
    c = new B();
  function l(e, t, r) {
    let i = null,
      l = t;
    for (let t of n) {
      if ((t.enabled && !t.enabled()) || (r && !r(t))) continue;
      if (t.test) {
        let n = t.test(e);
        n != null && n > ja && n < l && ((l = n), (i = { th: t, point: e.at(n, new B()) }));
        continue;
      }
      let n = typeof t.at == `function` ? t.at() : t.at;
      if (
        (a.set(n.x, n.y + Math.min(t.r, t.h / 2), n.z),
        o.set(n.x, n.y + Math.max(t.h - t.r, t.h / 2), n.z),
        e.distanceSqToSegment(a, o, s, c) > t.r * t.r)
      )
        continue;
      let u = s.distanceTo(e.origin);
      u > ja && u < l && ((l = u), (i = { th: t, point: s.clone() }));
    }
    return i;
  }
  let u = new I(0.16, 0.1);
  function d(
    t,
    {
      count: n = 14,
      colors: i = [`#7cc55a`, `#a6db6e`, `#5fa84a`],
      spread: a = 1,
      height: o = 2.5,
      crown: s = null,
    } = {},
  ) {
    for (let c = 0; c < n; c += 1) {
      let n = new k(u, new se({ color: i[c % i.length], side: 2, transparent: !0, opacity: 1, depthWrite: !1 })),
        l = new oe((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5);
      if (s) {
        let e = Math.random() * Math.PI * 2,
          r = 0.5 + Math.random() * 0.9;
        (n.position.set(
          t.x + Math.cos(e) * s.r * (0.85 + Math.random() * 0.2),
          t.y + s.y0 + (s.y1 - s.y0) * (0.08 + Math.random() * 0.5),
          t.z + Math.sin(e) * s.r * (0.85 + Math.random() * 0.2),
        ),
          (l.x += Math.cos(e) * r),
          (l.y += Math.sin(e) * r));
      } else
        n.position.set(
          t.x + (Math.random() - 0.5) * a * 2,
          t.y + o * (0.55 + Math.random() * 0.45),
          t.z + (Math.random() - 0.5) * a * 2,
        );
      (n.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6),
        (n.userData.noAO = !0),
        e.add(n),
        r.push({
          kind: `leaf`,
          m: n,
          t: 0,
          life: 2.6 + Math.random() * 1.4,
          ph: Math.random() * 6,
          vy: -(0.45 + Math.random() * 0.35),
          drift: l,
          floor: t.y + 0.03,
        }));
    }
  }
  let f = new ce(0.82, 1, 40).rotateX(-Math.PI / 2);
  function p(t, { size: n = 1.2, life: i = 1.4, color: a = `#ffffff` } = {}) {
    let o = new k(f, new se({ color: a, transparent: !0, opacity: 0.8, depthWrite: !1 }));
    (o.position.copy(t),
      (o.position.y += 0.015),
      o.scale.setScalar(0.05),
      (o.userData.noAO = !0),
      (o.renderOrder = 2),
      e.add(o),
      r.push({ kind: `ring`, m: o, t: 0, life: i, size: n }));
  }
  function m(t, { size: n = 1.6, color: a = Aa, life: o = 1 } = {}) {
    let s = new fe(new A({ map: i, color: a, transparent: !0, opacity: 0, depthWrite: !1, blending: 2 }));
    (s.position.copy(t), (s.renderOrder = 5), e.add(s), r.push({ kind: `flare`, m: s, t: 0, life: o, size: n }));
  }
  function h(t, { life: n = 0.9, size: a = 0.5 } = {}) {
    let o = new fe(new A({ map: i, color: Aa, transparent: !0, opacity: 0, depthWrite: !1, blending: 2 }));
    ((o.renderOrder = 5), o.scale.setScalar(a), e.add(o));
    let s = new pe(t);
    r.push({ kind: `spark`, m: o, t: 0, life: n, curve: s, size: a });
  }
  let g = new j(0.05, 0.05, 0.012, 14),
    _ = new L({ color: `#f2c24f`, metalness: 0.9, roughness: 0.25, emissive: `#8a5a10`, emissiveIntensity: 0.4 });
  function v(t, n, i) {
    let a = new k(g, _);
    (a.position.copy(t),
      e.add(a),
      r.push({ kind: `coin`, m: a, t: 0, life: 0.62, from: t.clone(), to: n.clone(), onLand: i }));
  }
  let y = (() => {
      let e = new R(0.1, 10, 8);
      e.scale(0.55, 0.5, 1.5);
      let t = new D(0.08, 0.14, 4);
      return (t.rotateX(-Math.PI / 2), t.scale(0.25, 1, 1), t.translate(0, 0, -0.2), [e, t]);
    })(),
    b = [new L({ color: `#f08a3c`, roughness: 0.4 }), new L({ color: `#fff4e8`, roughness: 0.4 })];
  function x(t, { heading: n = Math.random() * Math.PI * 2, onIn: i = null } = {}) {
    let a = new z(),
      o = b[Math.random() < 0.6 ? 0 : 1];
    (a.add(new k(y[0], o), new k(y[1], o)), e.add(a));
    let s = new B(Math.sin(n), 0, Math.cos(n));
    (r.push({
      kind: `fish`,
      m: a,
      t: 0,
      life: 0.85,
      from: t.clone(),
      to: t.clone().addScaledVector(s, 1),
      onIn: i,
      splashed: !1,
    }),
      p(t, { size: 0.7, life: 0.9 }));
  }
  return {
    flutter: d,
    ripple: p,
    flare: m,
    spark: h,
    coin: v,
    fish: x,
    add(e) {
      return (n.push(e), e);
    },
    remove(e) {
      let t = n.indexOf(e);
      t >= 0 && n.splice(t, 1);
    },
    tap(e, t = 1 / 0, n = null) {
      let r = l(e, t + 0.6, n);
      return r ? (navigator.vibrate?.(8), r.th.react(r.point, r), !0) : !1;
    },
    update(t, n) {
      for (let i = r.length - 1; i >= 0; --i) {
        let a = r[i];
        a.t += t;
        let o = a.t / a.life;
        if (a.kind === `coin`) {
          let n = Math.min(1, o);
          (a.m.position.lerpVectors(a.from, a.to, n),
            (a.m.position.y += Math.sin(n * Math.PI) * 1.1),
            (a.m.rotation.x += t * 16),
            (a.m.rotation.z += t * 7),
            o >= 1 && (e.remove(a.m), r.splice(i, 1), p(a.to, { size: 0.9 }), a.onLand?.()));
          continue;
        }
        if (a.kind === `fish`) {
          let t = Math.min(1, o);
          (a.m.position.lerpVectors(a.from, a.to, t),
            (a.m.position.y = a.from.y - 0.05 + Math.sin(t * Math.PI) * 0.75));
          let n = a.m.position,
            s = Math.cos(t * Math.PI) * 0.75 * Math.PI;
          (a.m.lookAt(n.x + (a.to.x - a.from.x), n.y + s, n.z + (a.to.z - a.from.z)),
            !a.splashed && o > 0.92 && ((a.splashed = !0), p(a.to, { size: 1 }), a.onIn?.()),
            o >= 1 && (e.remove(a.m), r.splice(i, 1)));
          continue;
        }
        if (o >= 1) {
          (e.remove(a.m), a.m.material?.dispose?.(), r.splice(i, 1));
          continue;
        }
        if (a.kind === `leaf`)
          (a.drift.multiplyScalar(Math.exp(-t * 1.4)),
            (a.m.position.y += a.vy * t),
            (a.m.position.x += (a.drift.x + Math.sin(n * 3 + a.ph) * 0.35) * t),
            (a.m.position.z += (a.drift.y + Math.cos(n * 2.6 + a.ph) * 0.35) * t),
            a.m.position.y > a.floor
              ? ((a.m.rotation.x += t * 2.2), (a.m.rotation.z += t * 1.6))
              : ((a.m.position.y = a.floor), (a.vy = 0), a.drift.set(0, 0), a.m.rotation.set(-Math.PI / 2, 0, a.ph)),
            (a.m.material.opacity = Math.min(1, (1 - o) * 3)));
        else if (a.kind === `ring`) {
          let e = 1 - (1 - o) ** 2;
          (a.m.scale.setScalar(0.05 + e * a.size), (a.m.material.opacity = 0.8 * (1 - o)));
        } else if (a.kind === `flare`) {
          let e = Math.sin(Math.min(1, o) * Math.PI);
          (a.m.scale.setScalar(a.size * (0.4 + e * 0.8)), (a.m.material.opacity = e));
        } else
          a.kind === `spark` &&
            (a.curve.getPointAt(Math.min(1, o), a.m.position),
            (a.m.material.opacity = Math.sin(Math.min(1, o) * Math.PI)));
      }
    },
    stars(e, n = 10) {
      t?.stars(e, { count: n });
    },
  };
}
var Na = Object.freeze({ walk: 65, whole: 58 }),
  Pa = (e) => new B(Math.sin(e), 0, Math.cos(e)),
  Fa = `​`,
  Ia = Object.assign({
    "../xiyou/index.js": () =>
      Ee(
        () => import(`./xiyou-qiVItcEw.js`),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
      ),
  }),
  La = Object.assign({
    "../../flash/plaza.js": () =>
      Ee(() => import(`./plaza-CO5-2xPC.js`), __vite__mapDeps([20, 12, 4, 21, 11, 22, 23, 15])),
  });
async function Ra() {
  let e = (e, t, n) => Promise.race([e, new Promise((e) => setTimeout(() => e(n), t))]),
    t = Object.values(La)[0],
    n = t
      ? await e(
          t()
            .then((e) => e.plazaEntry || e.default || null)
            .catch((e) => (console.warn(`flash`, e), null)),
          4e3,
          null,
        )
      : null;
  return { xiyou: Object.keys(Ia).length > 0, flash: n && typeof n == `object` ? n : null };
}
var za = Object.freeze({ fill: 0.22, color: [1, 0.9, 0.78], vangogh: { fill: 0.45, satMax: 0.38 } }),
  Ba = new B(-Ct.x, 0, -Ct.z).normalize();
function Va(e, t) {
  let { fill: n = za.fill, satMax: r = 1 } = za[t] || {};
  e.traverse((e) => {
    if (e.isMesh)
      for (let i of Array.isArray(e.material) ? e.material : [e.material]) {
        if (!i?.isMeshStandardMaterial || i.userData.fronts) continue;
        i.userData.fronts = !0;
        let e = i.onBeforeCompile,
          a = i.customProgramCacheKey();
        ((i.onBeforeCompile = function (t, i) {
          (e.call(this, t, i),
            (t.uniforms.uFillFrom = { value: Ba }),
            (t.fragmentShader = t.fragmentShader
              .replace(
                `#include <common>`,
                `#include <common>
uniform vec3 uFillFrom;`,
              )
              .replace(
                `#include <emissivemap_fragment>`,
                `#include <emissivemap_fragment>
          { ${
            r < 1
              ? `vec3 fS = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2)); float fHi = max(fS.r, max(fS.g, fS.b)), fLo = min(fS.r, min(fS.g, fS.b));
            float fSat = fHi > 1e-4 ? (fHi - fLo) / fHi : 0.0;
            if (fSat > ${r.toFixed(3)}) diffuseColor.rgb = pow(mix(vec3(fHi), fS, ${r.toFixed(3)} / fSat), vec3(2.2));`
              : ``
          }
            vec3 F = normalize((viewMatrix * vec4(uFillFrom, 0.0)).xyz);
            totalEmissiveRadiance += diffuseColor.rgb * vec3(${za.color.map((e) => e.toFixed(2)).join(`, `)}) * ${n.toFixed(3)} * max(dot(normal, F), 0.0); }`,
              )));
        }),
          (i.customProgramCacheKey = () => `${a}|fronts:${t}`),
          (i.needsUpdate = !0));
      }
  });
}
async function Ha(e, t, n) {
  let r = {},
    i = [],
    o = [],
    s = 0,
    c = Object.values(t);
  return (
    await Promise.all(
      c.map(async (t) => {
        let l = X[t.id];
        try {
          let n = await Ce(t.model, { height: l.height, rot: V.radToDeg(l.facing) + t.yaw, roughness: 0.6 }),
            s = n.rotation.y;
          ((n.rotation.y = V.degToRad(t.yaw)), n.updateMatrixWorld(!0));
          let c = new a().setFromObject(n),
            u = c.max.z;
          n.rotation.y = s;
          let d = Pa(l.facing);
          (n.position.set(l.front.x - d.x * u, or(l.front.x, l.front.z) - 0.04, l.front.z - d.z * u),
            n.updateMatrixWorld(!0),
            n.traverse((e) => {
              e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
            }),
            Va(n, t.id),
            mr(n),
            e.add(n));
          let f = new a().setFromObject(n);
          if (((r[t.id] = n), Math.abs(Math.sin(2 * l.facing)) < 0.001))
            (i.push(f.clone().expandByScalar(-0.15)),
              o.push({ minX: f.min.x + 0.25, maxX: f.max.x - 0.25, minZ: f.min.z + 0.25, maxZ: f.max.z - 0.25 }));
          else
            for (let e of Ua(c, l.facing, n.position))
              (o.push(e), i.push(new a(new B(e.minX, f.min.y, e.minZ), new B(e.maxX, f.max.y, e.maxZ))));
        } catch (e) {
          console.warn(`landmark`, t.id, e);
        }
        ((s += 1), n(s / c.length));
      }),
    ),
    { groups: r, boxes: i, blockers: o }
  );
}
function Ua(e, t, n, r = 0.25, i = 0.8) {
  let a = [],
    o = Math.cos(t),
    s = Math.sin(t),
    c = i * 0.62;
  for (let t = e.min.x + r + i / 2; t < e.max.x - r; t += i)
    for (let l = e.min.z + r + i / 2; l < e.max.z - r; l += i) {
      let e = n.x + t * o + l * s,
        r = n.z - t * s + l * o;
      a.push({ minX: e - c, maxX: e + c, minZ: r - c, maxZ: r + c });
    }
  return a;
}
function Wa() {
  let e = new de({
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      side: 2,
      uniforms: { uTime: { value: 0 }, uOn: { value: 0 }, uNear: { value: 1 }, uCurve: sr },
      vertexShader: `${cr} varying vec2 vUv; varying vec3 vN; varying vec3 vW; void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * curveWorld(w); }`,
      fragmentShader: `uniform float uTime, uOn, uNear; varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 V = normalize(cameraPosition - vW); vec3 N = normalize(vec3(vN.x, 0.0, vN.z)); vec3 Vh = normalize(vec3(V.x, 0.0, V.z));
        float core = pow(clamp(abs(dot(N, Vh)), 0.0, 1.0), 3.0);
        float fade = pow(clamp(1.0 - vUv.y, 0.0, 1.0), 1.6) * smoothstep(0.0, 0.05, vUv.y);
        float pulse = 0.8 + 0.2 * sin(uTime * 1.6 - vUv.y * 6.0);
        gl_FragColor = vec4(vec3(1.0, 0.8, 0.48) * core * fade * pulse * 0.3 * uOn * uNear, 1.0); }`,
    }),
    t = new k(new j(0.55, 0.7, 14, 32, 1, !0), e);
  return (
    t.geometry.translate(0, 7, 0),
    (t.userData.noAO = !0),
    (t.renderOrder = 3),
    {
      mesh: t,
      mat: e,
      show(t) {
        me.to(e.uniforms.uOn, { value: +!!t, duration: 1.2 });
      },
    }
  );
}
var Ga = `lifeplaza.back`;
function Ka(e) {
  try {
    let t = JSON.parse(localStorage.getItem(Ga) || `null`);
    return t?.lang === e && typeof t.line == `string` ? t.line : ``;
  } catch {
    return ``;
  }
}
function qa(e, t) {
  let n = rt().filter((e) => e.title || e.did);
  n.length &&
    !e.life?.care &&
    Ie.back({ lang: t, life: e.life || null, journey: n }).then((e) => {
      if (typeof e?.line == `string`)
        try {
          localStorage.setItem(Ga, JSON.stringify({ line: e.line, lang: t, at: Date.now() }));
        } catch {}
    });
}
function Ja(e, t, n) {
  let r = Ve(t, e.id, n)?.plan;
  return e.teaser && r?.shot?.scene && r.shot.title
    ? e.teaser(r.shot.title)
    : t.passport?.suggest === e.id && t.passport.why
      ? t.passport.why
      : null;
}
async function Ya({ stage: e, me: t, lang: r, fromIris: i = !1, onProgress: o = () => {} }) {
  let { scene: c, camera: l, quality: u } = e,
    f = e.renderer.domElement;
  ((l.far = 2200), ke(!0, { keep: (e, t) => !!t.isSkinnedMesh }), Oe(e, `procedural`), Ae(e, `walk`));
  let p = () => je(!0, { accent: Me.plaza.apricot });
  (p(), (c.environmentIntensity = 0.34), u.low && e.bloom && (e.bloom.enabled = !1));
  let m = e.finish?.uniforms,
    h = De.walk.fov,
    g = De.walk.phoneFov,
    _ = 0,
    v = 0,
    y = document.getElementById(`ui`),
    b = at(y, { beats: 0, atlas: !0 });
  b.hideHint();
  let x = document.getElementById(`subtitle`),
    S = ot({ hud: b, lang: r }),
    C = new URLSearchParams(location.search),
    T = await Ra();
  er({ xiyou: T.xiyou, flash: !!T.flash });
  let E = Je({ xiyou: T.xiyou }),
    ee = E[C.get(`from`)] ? C.get(`from`) : null,
    D = ee;
  ct(u.low);
  let te = Mr(c, u);
  (mr(te.group), o(0.08));
  let O = bt(c, u, e.renderer);
  (mr(O.air), o(0.16));
  let k = Zr(c, u, { xiyou: T.xiyou });
  (mr(k.group), o(0.3));
  let A = Zi(c, { lang: r, quality: u, flash: T.flash });
  (o(0.38), mr(A.group));
  let j = A.court,
    ne = j
      ? Object.freeze({ ...T.flash, id: `flash`, open: !0, flash: !0, portrait: null, accent: Me.plaza.apricot })
      : null,
    M = Object.freeze({ ...X, ...(j ? { flash: { ...X.flash, front: j.front, facing: j.facing } } : {}) }),
    ie = null;
  (j &&
    T.flash
      .covers?.()
      .then((e) => ((ie = e[0]?.src || null), j.paint(e)))
      .catch((e) => console.warn(`flash covers`, e)),
    e.ao?.normalMaterial && pr(e.ao.normalMaterial));
  let N = await Ha(c, E, (e) => o(0.38 + e * 0.32));
  (Object.values(E).some((e) => e.optional && !N.groups[e.id]) &&
    (E = Je(
      Object.fromEntries(
        Object.values(E)
          .filter((e) => e.optional && N.groups[e.id])
          .map((e) => [e.id, !0]),
      ),
    )),
    u.low && ((e.renderer.shadowMap.autoUpdate = !1), (e.renderer.shadowMap.needsUpdate = !0)));
  let P = st(c),
    F = Wa();
  c.add(F.mesh);
  let I = [...k.colliders, ...A.colliders],
    ae = { r: Xn.walk, pier: { x: 0, hw: X.pier.w / 2, z0: Xn.walk - 1.4, z1: X.pier.z1 } },
    L = lt({ body: `#f2c94c` });
  ((L.object.visible = !1), c.add(L.object));
  let se = [],
    R = et({
      avatar: L,
      disc: ae,
      colliders: I,
      blockers: N.blockers,
      people: se,
      heightAt: or,
      speed: 1.7,
      runScale: 2.1,
      longWalk: 1.9,
    }),
    ce = ee
      ? ((e) => {
          let t = X[e],
            n = Pa(t.facing);
          return { x: t.front.x + n.x * 2.4, z: t.front.z + n.z * 2.4, h: t.facing };
        })(ee)
      : X.spawn;
  R.place(ce.x, ce.z, ce.h);
  let z = (e) =>
      qe(`models/chars/${e}.glb`).then((e) => (c.remove(L.object), (L = e), c.add(e.object), R.setAvatar(e), e)),
    le = C.get(`gate`) === `1` || C.get(`gate`) === `old` || (!ee && !C.has(`skip`) && (!t.at || t.gate < 4)),
    ue = le ? Promise.resolve(null) : z(t.avatar).catch(() => null),
    de = !1,
    fe = (e) => {
      de &&
        (P.puff(e.position.clone().setY(e.position.y + 0.2), { color: `#fff1e2`, count: 22, size: 0.9 }), Be.poof());
    },
    H = lt({ body: `#efe6d6`, hair: `#4a3426` });
  (H.object.position.set(X.guide.x, or(X.guide.x, X.guide.z), X.guide.z),
    (H.object.rotation.y = X.guide.home),
    (H.object.visible = !1),
    c.add(H.object),
    I.push({ x: X.guide.x, z: X.guide.z, r: 0.4 }));
  let be = Rn(),
    xe = { x: 4.25, z: 25.75, h: -0.5 };
  (be.group.position.set(xe.x, or(xe.x, xe.z), xe.z),
    (be.group.rotation.y = xe.h),
    c.add(be.group),
    be.group.updateMatrixWorld(!0));
  for (let e of [-0.62, 0.62]) I.push({ x: xe.x + Math.cos(xe.h) * e, z: xe.z - Math.sin(xe.h) * e, r: 1 });
  let Se = le
    ? Yn({
        stage: e,
        sky: O,
        booth: be,
        gate: X.gate,
        pier: { x: 0, hw: X.pier.w / 2, z0: X.pier.z0, z1: X.pier.z1 },
        ground: or,
      })
    : null;
  le && (H.object.position.copy(be.group.localToWorld(be.seat.clone())), Se.title(!0));
  let Ce = () => H.object.position.set(X.guide.x, or(X.guide.x, X.guide.z), X.guide.z),
    we = qe(`models/chars/guide.glb`, { height: 1.64 })
      .then((e) => {
        (c.remove(H.object),
          e.object.position.copy(H.object.position),
          (e.object.rotation.y = H.object.rotation.y),
          (H = e),
          c.add(e.object),
          fe(e.object));
      })
      .catch(() => {
        H.object.visible = !0;
      }),
    Te = document.createElement(`div`);
  ((Te.className = `bubble-say`), (Te.innerHTML = `<span></span>`), y.appendChild(Te));
  let Ne = { x: 0, z: 0, r: 0.3 },
    Fe = fa({
      scene: c,
      ids: ye.filter((e) => e !== t.avatar).slice(0, u.low ? 5 : 6),
      colliders: I,
      heightAt: or,
      disc: ae,
      lines: Xa(r, E),
      bubbleEl: Te,
      camera: l,
      walkable: (e, t) => Ge.isWalkable(e, t),
      pathfind: (e, t) => Ke(e, t),
      sight: (e, t) => vt(e, t),
      visitor: Ne,
      circles: se,
    }),
    Re = ge(f, { joystickEl: b.joystickEl }),
    Ve = new a(new B(X.balloon.x - 2.9, 1.7, X.balloon.z - 2.9), new B(X.balloon.x + 2.9, 9.4, X.balloon.z + 2.9)),
    W = Qe(l, {
      box: { minX: -90, maxX: 90, minZ: -90, maxZ: 90, maxY: 70 },
      distance: 3.6,
      maxDistance: 18,
      obstacles: [...N.boxes, Ve],
      groundAt: or,
      height: 0.9,
      eyeHeight: 1.55,
      lookAhead: 1,
      pitchBoost: 0,
      portraitPull: 0.14,
      framePull: 1.05,
      onMode: (e) => b.setView(e, { announce: !0 }),
    });
  ((W.yaw = ce.h === Math.PI ? 0 : ce.h + Math.PI),
    (W.pitch = 0.35),
    b.onView((e) => {
      W.mode = e;
    }));
  let He = tt(I, N.blockers, 0.32),
    Ue = (e, t) =>
      (Math.hypot(e, t) < Xn.walk - 0.35 ||
        (Math.abs(e - ae.pier.x) < ae.pier.hw - 0.3 && t > ae.pier.z0 && t < ae.pier.z1 - 0.3)) &&
      He(e, t),
    Ge = $e({ minX: -Xn.walk, maxX: Xn.walk, minZ: -Xn.walk, maxZ: X.pier.z1, cellSize: 0.35, free: Ue }),
    Ke = (e, t) => {
      let n = Xe(Ge, e, t);
      return n.length ? n : [t.clone()];
    },
    ft = Ye(Ge),
    _t = Ye({ cellSize: 0.35, isWalkable: Ue }),
    vt = (e, t) => ft(e, t) && _t(e, t);
  R.setSight(vt);
  let G = Ze({ camera: l, canvas: f, player: R, input: Re, promptEl: b.promptEl, actionEl: b.actionEl, route: Ke }),
    yt = he(y),
    xt = _e(document.body),
    St = ut(y),
    Ct = jt({ fountain: new B(0, 1, 0), waterfall: te.water.spillPoint });
  b.onMute((e) => {
    (S.setMuted(e), Ct.setMuted(e), Sa.setMuted(e));
  });
  let Tt = document.createElement(`div`);
  Tt.className = `stamps`;
  let Et = gt(),
    Dt = (e) => !!Et[e] && e !== ee;
  ((Tt.innerHTML = `<span class="stamps-label">${U(`人生护照`, `Life passport`)}</span>${Object.values(E)
    .map((e) => `<i class="${Dt(e.id) ? `on` : ``}" data-id="${e.id}" title="${e.name}">${e.stamp}</i>`)
    .join(``)}`),
    y.appendChild(Tt));
  let Ot = We(y, { lives: E });
  Tt.addEventListener(`click`, () => {
    !Nn && Ot.open(t, gt(), () => G.setBusy(!1)) && G.setBusy(!0);
  });
  let kt = ka(c, { lives: E, sites: X, heightAt: or, puffs: P }),
    At = !1;
  async function K(e) {
    if (At || !e.open) return;
    ((At = !0),
      G.setBusy(!0),
      yt.hide(),
      Re.setEnabled(!1),
      Kt.hold(!0),
      qt.set(null),
      Be.chime(),
      kt.next === e.id && kt.farewell());
    let t = M[e.id],
      n = Pa(t.facing),
      r = new B(t.front.x - n.x * 0.3, or(t.front.x, t.front.z) + 1.4, t.front.z - n.z * 0.3);
    (R.walkPath(Ke(R.position, new B(t.front.x + n.x * 0.6, 0, t.front.z + n.z * 0.6))),
      W.frame(r.clone().add(new B(n.x * 5.5, 1.2, n.z * 5.5)), r),
      Ct.stop(),
      await new Promise((e) => setTimeout(e, 900)),
      await xt.close(1100));
    try {
      sessionStorage.setItem(`lp.iris`, `1`);
    } catch {}
    location.href = `/life-learn/?go=${e.id}`;
  }
  let q = {};
  for (let e of Object.values(E)) {
    let t = M[e.id],
      n = Pa(t.facing);
    q[e.id] = G.add({
      id: e.id,
      position: new B(t.front.x + n.x * 1.4, 0, t.front.z + n.z * 1.4),
      radius: 3.6,
      labelHeight: 2.9,
      label: () => (e.open ? e.door : `${e.short} · ${U(`即将开放`, `opening soon`)}`),
      meshes: N.groups[e.id] ? [N.groups[e.id]] : void 0,
      enabled: () => D !== e.id,
      activate: () =>
        e.open
          ? K(e)
          : b.toast(U(`${e.nick}那儿还在布置，过几天再来`, `${e.nick}'s place is still being set up — come back soon`)),
    });
  }
  let Mt = !1,
    Nt = `lifeplaza.flash`,
    Pt = () => {
      try {
        return !!localStorage.getItem(Nt);
      } catch {
        return !1;
      }
    },
    Ft = () => Object.values(E).every((e) => !e.open || gt()[e.id]),
    It = Ft() ? dt(t, r) : null,
    Lt = !1;
  function Rt() {
    let e = Lt ? null : It;
    return (
      (Lt = !0),
      pt(S, U(`引路人`, `The guide`), e, {
        role: `guide`,
        hm: U(`嗯……`, `Mm…`),
        after: [U(`都走完了。回去吧，日子还长。`, `That's all of them. Go on home — there are plenty more days.`)],
      })
    );
  }
  async function zt() {
    if (!(!ne || Mt || At)) {
      ((Mt = !0), G.setBusy(!0), yt.hide(), R.stop());
      try {
        localStorage.setItem(Nt, String(Date.now()));
      } catch {}
      (Yt?.id === `flash` && Qt(null), Be.chime());
      try {
        await T.flash.open({
          stage: e,
          onClose: () => {
            ((Mt = !1), G.setBusy(!1), Ft() && Rt());
          },
        });
      } catch (e) {
        (console.warn(`gallery`, e), (Mt = !1), G.setBusy(!1));
      }
    }
  }
  if (ne) {
    let e = M.flash,
      t = Pa(e.facing);
    G.add({
      id: `flash`,
      position: new B(e.front.x + t.x * 1.4, 0, e.front.z + t.z * 1.4),
      radius: 3.6,
      labelHeight: 2.9,
      label: () => ne.door,
      meshes: [j.mesh],
      activate: () => zt(),
    });
  }
  let Bt = [];
  Ie.wall(`melies`).then((e) => {
    ((Bt = (e?.items || []).map((e) => ({ ...e, image: Ie.media(e.image) }))),
      Bt.length && A.morris.setShots(Bt.slice(0, Bt.length >= 3 ? 6 : 2)),
      Fe.setLines([
        ...Xa(r, E),
        ...Bt.slice(0, 8)
          .filter((e) => e.identity && e.title)
          .map((e) =>
            U(`我是${e.identity}，梅里爱给我拍了${e.title}`, `I'm a ${e.identity} — Méliès filmed me in "${e.title}"`),
          ),
      ]));
  });
  let Vt = Za(y, {
      onPick: (e) => {
        (Vt.close(), Ht(e));
      },
    }),
    Ht = (e) =>
      Ut({
        image: e.image,
        title: e.title,
        trick: e.identity ? `${U(`主演`, `Starring`)}：${e.identity}` : ``,
        note: ``,
      });
  G.add({
    id: `morris`,
    position: new B(X.morris.x - 1, 0, X.morris.z + 1),
    radius: 2.4,
    labelHeight: 3.6,
    label: () =>
      Bt.length >= 3
        ? U(`今日上映 · 来访者的一镜`, `Now showing · visitors' shots`)
        : Bt.length
          ? U(`今日上映 · 一位来访者`, `Now showing · a visitor`)
          : U(`梅里爱的${Fa}老海报`, `Méliès' old posters`),
    meshes: [A.morris.mesh],
    activate: () => {
      if (Bt.length >= 3) {
        (G.setBusy(!0), Vt.open(Bt, () => G.setBusy(!1)));
        return;
      }
      if (Bt.length) {
        Ht(Bt[0]);
        return;
      }
      (A.morris.turn(),
        Sa.note(2),
        b.toast(
          U(`还没有人拍过。第一镜，也许是你的。`, `Nobody has been filmed yet. The first shot may be yours.`),
          4200,
        ));
    },
  });
  function Ut(e) {
    (G.setBusy(!0), St.open(e, { onClosed: () => G.setBusy(!1) }));
  }
  let Wt = [],
    Gt = it(y, {
      chips:
        r === `en`
          ? [`Where should I start?`, `What is this place?`, `Are these lives real?`]
          : [`我该先去哪？`, `这里是什么地方？`, `这些人生是真的吗？`],
      placeholder: U(`想问引路人什么？`, `Ask the guide anything…`),
      thinking: U(`引路人在想……`, `The guide is thinking…`),
      onAsk: async (e, { signal: n }) => {
        Wt.push({ role: `you`, text: e });
        let i = J(),
          a = await Ie.guideChat({
            lang: r,
            identity: t.identity,
            note: t.note,
            life: t.life,
            text: e,
            history: Wt,
            seen: Object.keys(gt()).filter((e) => E[e]),
            journey: rt(),
            next: i?.id || ``,
            why: (i && t.passport?.suggest === i.id && t.passport.why) || ``,
          });
        if (n.aborted) return;
        let o = a?.reply || U(`嗯……我们先走走，边走边说？`, `Hmm — shall we walk and talk?`);
        (Wt.push({ role: `me`, text: o }),
          H.play?.(`agree`),
          await S.say(U(`引路人`, `The guide`), [o], { role: `guide` }));
      },
      onClose: () => G.setBusy(!1),
      onLeave: ({ cut: e }) => {
        (e && S.stop(), H.play?.(`agree`));
        let t = e ? null : Gt.letGo();
        t && S.say(U(`引路人`, `The guide`), [t], { role: `guide` });
      },
    });
  G.add({
    id: `guide`,
    position: new B(X.guide.x, 0, X.guide.z),
    radius: 2.2,
    labelHeight: 2.1,
    label: () => U(`和引路人${Fa}聊聊`, `Talk to the guide`),
    meshes: [H.object],
    activate: () => {
      (G.setBusy(!0), (Pn = !0), H.play?.(`wave`), Gt.open());
    },
  });
  let Kt = wt(y, { camera: l }),
    qt = pa(c, { heightAt: or }),
    Jt = (e) => {
      let t = M[e],
        n = Pa(t.facing);
      return new B(t.front.x + n.x * 2, 0, t.front.z + n.z * 2);
    },
    J = () => {
      let e = gt(),
        n = t.passport?.suggest;
      return (
        (n && E[n]?.open && !e[n] ? E[n] : null) ||
        Object.values(E).find((t) => t.open && !e[t.id]) ||
        (ne && !Pt() ? ne : null)
      );
    },
    Yt = null,
    Xt = null,
    Zt = 0;
  function Qt(e, { reveal: n = !1 } = {}) {
    if (((Yt = e), kt.setNext(e?.id || null), !e)) {
      (F.show(!1), qt.set(null), Kt.set(null));
      return;
    }
    let i = M[e.id],
      a = Pa(i.facing);
    (F.mesh.position.set(i.front.x + a.x * 1.2, or(i.front.x, i.front.z), i.front.z + a.z * 1.2), F.show(!0));
    let o = new B(i.front.x, or(i.front.x, i.front.z) + 2.2, i.front.z);
    (Kt.set({
      key: e.id,
      kicker: U(`下一站`, `Next`),
      label: e.name,
      image: e.flash ? ie : e.portrait,
      at: () => hr(o),
      go: () => tn(e),
    }),
      $t(),
      n && qt.reveal(1.8),
      !e.flash &&
        (ze(t, e.id, r)
          .then(() => {
            let n = Ja(e, t, r);
            n && yt.setLine(e.id, n);
          })
          .catch(() => {}),
        mt(e.id, r)));
  }
  function $t() {
    if (!Yt) return;
    let e = Jt(Yt.id);
    if (((Xt = R.position.clone()), (Zt = 0), Math.hypot(e.x - R.position.x, e.z - R.position.z) < 3.2)) {
      qt.set(null);
      return;
    }
    qt.set([R.position.clone(), ...Ke(R.position, e)]);
  }
  let en = null;
  function tn(e) {
    if (At || en || Nn) return;
    let t = M[e.id],
      n = Jt(e.id),
      r = [R.position.clone(), ...Ke(R.position, n)],
      i = 0;
    for (let e = 1; e < r.length; e += 1) i += Math.hypot(r[e].x - r[e - 1].x, r[e].z - r[e - 1].z);
    let a = () => R.faceToward(t.front.x, t.front.z);
    if ((b.hideHint(), i < 12 || W.mode === `first`)) {
      R.walkPath(r.slice(1), a);
      return;
    }
    let o = new pe(
      r.map((e) => new B(e.x, 0, e.z)),
      !1,
      `centripetal`,
      0.5,
    );
    ((en = {
      curve: o,
      length: o.getLength(),
      t: 0,
      T: V.clamp(i / 9, 2.8, 4.8),
      site: t,
      done: a,
      at: performance.now(),
    }),
      R.stop(),
      Sa.whoosh());
  }
  let nn = new B(),
    rn = new B(),
    an = new B(),
    on = new B();
  function sn(e) {
    let t = en;
    t.t += e;
    let n = Math.min(1, t.t / t.T),
      r = n < 0.5 ? 4 * n * n * n : 1 - (-2 * n + 2) ** 3 / 2,
      i = n < 0.5 ? 12 * n * n : 3 * (-2 * n + 2) ** 2;
    (t.curve.getPointAt(Math.min(r, 1), nn), t.curve.getTangentAt(Math.min(r, 1), rn));
    let a = (i * t.length) / t.T,
      o = Math.atan2(rn.x, rn.z);
    (R.place(nn.x, nn.z, o), R.avatar.setMotion(Math.min(a, 3) / 1.5, e, Math.min(a, 3)));
    let s = Math.sin(Math.min(1, n * 1.15) * Math.PI),
      c = 7 + s * 5 * (1 + W.portrait * 0.5),
      l = 3 + s * 8 * (1 + W.portrait * 0.4);
    if (
      (on.set(nn.x - rn.x * c, or(nn.x, nn.z) + l, nn.z - rn.z * c),
      t.curve.getPointAt(Math.min(1, r + 0.06), an),
      (an.y = or(an.x, an.z) + 1),
      W.frame(on, an, { fit: !1, soft: !0 }),
      (_ = s > 0.35 ? 0.5 : 0),
      n >= 1)
    ) {
      ((en = null), (_ = 0));
      let e = t.site;
      (R.place(nn.x, nn.z, Math.atan2(e.front.x - nn.x, e.front.z - nn.z)),
        W.lastLook < t.at && (W.yaw = R.heading + Math.PI),
        W.release(),
        t.done());
    }
  }
  let cn = Ma(c, { puffs: P }),
    ln = new re(),
    un = new B(),
    dn = 0;
  cn.add({
    at: new B(0, 0, 0),
    r: 2.95,
    h: 3.6,
    react: () => {
      let e = R.position.clone().setY(R.position.y + 1.3),
        t = Math.atan2(R.position.z, R.position.x) + (Math.random() - 0.5) * 1.2,
        n = 1.2 + Math.random() * 0.8,
        r = new B(Math.cos(t) * n, 0.46, Math.sin(t) * n);
      (R.faceToward(0, 0),
        Sa.coin(),
        cn.coin(e, r, () => {
          (A.fountain.surge(),
            cn.flare(r.clone().setY(0.76), { size: 1.4, life: 1.2 }),
            cn.stars(r, 8),
            setTimeout(() => Sa.twinkle(dn++), 260));
        }));
    },
  });
  for (let e of A.lamps)
    cn.add({
      at: e.at,
      r: 0.5,
      h: 3.5,
      react: () => {
        (Sa.note(e.note),
          cn.flare(e.head, { size: 2.2, life: 1.1 }),
          e.strings.forEach((e, t) => setTimeout(() => cn.spark(e, { life: 1 + t * 0.1 }), t * 60)));
      },
    });
  for (let e of k.trees) {
    let t = new B(e.x, or(e.x, e.z), e.z);
    cn.add({
      at: t,
      r: e.r,
      h: e.h,
      react: () => {
        (k.shake(e.id), Sa.rustle());
        let n = e.blossom ? [`#ffb3cc`, `#ffd0de`, `#f78fb3`] : [`#7cc55a`, `#a6db6e`, `#5fa84a`, `#c9e27a`];
        cn.flutter(t, { count: e.kind === `bush` ? 8 : e.blossom ? 30 : 18, colors: n, crown: e.crown });
      },
    });
  }
  let fn = X.pond,
    pn = new n(new B(0, 1, 0), 0.13);
  if (
    (cn.add({
      test: (e) =>
        e.intersectPlane(pn, un) && Math.hypot(un.x - fn.x, un.z - fn.z) < fn.r - 0.4 ? e.origin.distanceTo(un) : null,
      react: (e) => {
        (cn.ripple(e.clone().setY(-0.13), { size: 1.3 }),
          Sa.plop(),
          setTimeout(() => {
            let t = Math.random() * Math.PI * 2,
              n = new B(e.x + Math.cos(t) * 0.6, -0.13, e.z + Math.sin(t) * 0.6);
            (Math.hypot(n.x - fn.x, n.z - fn.z) > fn.r - 1.4 &&
              n.set(fn.x + (e.x - fn.x) * 0.5, -0.13, fn.z + (e.z - fn.z) * 0.5),
              Sa.splash(),
              cn.fish(n, { heading: Math.atan2(fn.x - n.x, fn.z - n.z) + (Math.random() - 0.5) * 1.5 }));
          }, 350));
      },
    }),
    cn.add({
      test: (e) => (
        ln.set(A.balloon.position.clone().setY(A.balloon.position.y + 5.6), 3.3),
        e.intersectSphere(ln, un) ? e.origin.distanceTo(un) : null
      ),
      react: () => {
        (A.burn(),
          Sa.whoosh(),
          cn.flare(A.balloon.position.clone().setY(A.balloon.position.y + 1.8), {
            size: 2.6,
            life: 1.3,
            color: new w(`#ffb35a`),
          }));
      },
    }),
    cn.add({
      at: new B(13.7, 0, 4.3),
      r: 1.4,
      h: 1.9,
      react: () => {
        (Sa.twinkle(5),
          cn.flutter(new B(13.7, 0, 4.3), {
            count: 12,
            colors: [`#f6c33e`, `#ffd96a`, `#f2b02a`],
            spread: 0.9,
            height: 1.7,
          }),
          cn.flare(new B(13.7, 1.6, 4.3), { size: 2, life: 1.1 }));
      },
    }),
    A.lawn)
  ) {
    let e = A.lawn.catAt();
    cn.add({
      at: e,
      r: 0.45,
      h: 0.55,
      react: () => {
        (A.lawn.cat.stretch(), Sa.mew());
      },
    });
  }
  cn.add({
    first: !0,
    at: () => kt.host.object.position,
    enabled: () => !!kt.host,
    r: 0.4,
    h: 1.75,
    react: () => {
      (kt.host.play?.(Math.random() < 0.5 ? `laugh` : `wave`, { fade: 0.25 }), Sa.hum(0.8));
    },
  });
  let mn = new d(),
    hn = new oe(),
    gn = new s();
  Re.onTap((e, t) => {
    if (Y) {
      Y.skip?.();
      return;
    }
    if (St.open_ || Vt.isOpen || Ot.isOpen || Nn || en || Gt.swallow()) return;
    let n = f.getBoundingClientRect();
    (hn.set(((e - n.left) / n.width) * 2 - 1, -((t - n.top) / n.height) * 2 + 1), mn.setFromCamera(hn, l));
    let r = _r(mn.ray, Z);
    if (
      Gt.isOpen &&
      (mn.intersectObject(H.object, !0).length || !(r && Gt.leaveFor(r.point, H.object.position, R.position)))
    )
      return;
    let i = r ? r.distance : 80,
      a = vr(mn.ray, i, gn),
      o = Fe.personAt(a, i + 0.6);
    if (o) {
      let e = Fe.poke(o, R);
      Sa.hum(0.85 + (e % 4) * 0.12);
      return;
    }
    cn.tap(a, i, (e) => e.first) ||
      G.tap(e, t) ||
      cn.tap(a, i, (e) => !e.first) ||
      (r && (R.walkPath(Ke(R.position, r.point)), b.ripple(e, t)));
  });
  let _n = [],
    yn = 0,
    bn = !1,
    Y = null,
    xn = pa(c, { heightAt: or, width: 1, lift: 0.09 });
  function Sn(e = W.yaw, t = V.degToRad(44)) {
    let n = V.lerp(90, 130, W.portrait),
      r = new B(0, -4.5, 0);
    return { pos: new B(Math.sin(e) * Math.cos(t) * n, Math.sin(t) * n - 4.5, Math.cos(e) * Math.cos(t) * n), look: r };
  }
  async function Cn() {
    if (bn || Y) return;
    ((bn = !0), (Y = { skip: null }), R.stop(), G.setBusy(!0), yt.hide());
    let e = l.position.clone(),
      t = new B(0, 0, -1).applyQuaternion(l.quaternion).multiplyScalar(5).add(e),
      n = Sn();
    Sa.whoosh();
    let r = { t: 0 };
    (await new Promise((i) =>
      me.to(r, {
        t: 1,
        duration: 3.4,
        ease: `power2.inOut`,
        onUpdate: () => {
          ((v = r.t), (_ = 0.7 * r.t));
          let i = e.clone().lerp(n.pos, r.t * r.t * (3 - 2 * r.t));
          ((i.y += Math.sin(r.t * Math.PI) * 6),
            W.frame(i, t.clone().lerp(n.look, Math.min(1, r.t * 1.4)), { cut: !0, fit: !1 }));
        },
        onComplete: i,
      }),
    ),
      kt.glowAll(!0));
    let i = _n.filter((e, t) => t % Math.max(1, Math.ceil(_n.length / 80)) === 0);
    (i.length > 1 && (xn.set([...i, R.position.clone()]), xn.reveal(1.6)),
      Sa.twinkle(4),
      b.toast(U(`你刚才走过的路，就在你的掌心里。`, `The way you just walked is in the palm of your hand.`), 3400),
      await new Promise((e) => {
        let t = setTimeout(e, 3200);
        Y.skip = () => {
          (clearTimeout(t), e());
        };
      }),
      (Y.skip = null),
      kt.glowAll(!1));
    let a = W.restPose(R.position),
      o = l.position.clone(),
      s = n.look.clone();
    ((r.t = 0),
      await new Promise((e) =>
        me.to(r, {
          t: 1,
          duration: 2.8,
          ease: `power2.inOut`,
          onUpdate: () => {
            ((v = 1 - r.t),
              (_ = 0.7 * (1 - r.t)),
              W.frame(o.clone().lerp(a.position, r.t), s.clone().lerp(a.look, r.t), { cut: !0, fit: !1 }));
          },
          onComplete: e,
        }),
      ),
      xn.set(null),
      (v = 0),
      (_ = 0),
      W.release(),
      G.setBusy(!1),
      (Y = null));
  }
  let wn = null,
    Tn = new B(),
    En = new B(),
    Dn = ht(y, {
      lives: Object.values(E),
      map: !0,
      court: ne
        ? {
            id: `flash`,
            name: ne.name,
            get meta() {
              return T.flash.meta;
            },
            get image() {
              return ie;
            },
            accent: ne.accent,
          }
        : null,
      next: () => J()?.id || null,
      blocked: () =>
        !Ln ||
        Nn ||
        At ||
        en ||
        !!Y ||
        !!wn ||
        St.open_ ||
        Vt.isOpen ||
        Ot.isOpen ||
        Mt ||
        Gt.isOpen ||
        document.body.classList.contains(`in-scene`),
      onOpen: () => On(),
      onClose: () => An(),
      onGo: (e) => jn(e),
    });
  b.onAtlas(() => Dn.toggle());
  function On() {
    (R.stop(), G.setBusy(!0), yt.hide(), Re.setEnabled(!1), b.hideHint());
    let e = l.position.clone(),
      t = new B(0, 0, -1).applyQuaternion(l.quaternion).multiplyScalar(5).add(e),
      n = Sn(),
      r = gt(),
      i = Dn.cardRect(),
      a = innerWidth;
    innerHeight;
    let o = !!i && i.width < a * 0.7,
      s = { x: o ? (a - i.left) / 2 : 0, y: !o && i ? i.height / 2 : 0 };
    (n.pos
      .sub(n.look)
      .multiplyScalar(o ? 1.22 : i ? 1.15 : 1)
      .add(n.look),
      kt.glowAll(!0),
      Sa.whoosh(),
      Dn.pins([
        ...Object.values(E)
          .filter((e) => e.open)
          .map((e) => ({ id: e.id, label: e.nick, stamp: e.stamp, accent: e.accent, been: !!r[e.id] })),
        ...(ne ? [{ id: `flash`, label: U(`庭院`, `The court`), stamp: `✦`, accent: ne.accent }] : []),
        { id: `me`, label: U(`你在这里`, `You are here`), me: !0 },
      ]));
    let c = { t: 0 };
    wn = {
      look: n.look,
      off: s,
      tween: me.to(c, {
        t: 1,
        duration: 1.3,
        ease: `power2.inOut`,
        onUpdate: () => {
          ((v = c.t), (_ = 0.7 * c.t));
          let r = e.clone().lerp(n.pos, c.t * c.t * (3 - 2 * c.t));
          ((r.y += Math.sin(c.t * Math.PI) * 4),
            W.frame(r, t.clone().lerp(n.look, Math.min(1, c.t * 1.4)), { cut: !0, fit: !1 }),
            kn(s, c.t));
        },
      }),
    };
  }
  function kn(e, t) {
    if (t <= 0.001 || (!e.x && !e.y)) {
      l.view?.enabled && l.clearViewOffset();
      return;
    }
    l.setViewOffset(innerWidth, innerHeight, e.x * t, e.y * t, innerWidth, innerHeight);
  }
  function An() {
    if (!wn) return;
    wn.tween.kill();
    let e = l.position.clone(),
      t = wn.look.clone(),
      n = W.restPose(R.position),
      r = v,
      i = wn.off,
      a = { t: 0 };
    (kt.glowAll(!1),
      (wn.tween = me.to(a, {
        t: 1,
        duration: 1,
        ease: `power2.inOut`,
        onUpdate: () => {
          ((v = r * (1 - a.t)),
            (_ = 0.7 * v),
            W.frame(e.clone().lerp(n.position, a.t), t.clone().lerp(n.look, a.t), { cut: !0, fit: !1 }),
            kn(i, 1 - a.t));
        },
        onComplete: () => {
          ((v = 0), (_ = 0), kn(i, 0), W.release(), (wn = null), Re.setEnabled(!0), G.setBusy(!1));
        },
      })));
  }
  async function jn(e) {
    if (e === `flash`) {
      (An(), setTimeout(() => zt(), 1050));
      return;
    }
    if (!E[e]?.open || At) {
      An();
      return;
    }
    ((At = !0), wn?.tween.kill());
    let t = M[e],
      n = Pa(t.facing),
      r = new B(t.front.x - n.x * 0.3, or(t.front.x, t.front.z) + 1.4, t.front.z - n.z * 0.3),
      i = r.clone().add(new B(n.x * 5.5, 1.2, n.z * 5.5));
    R.place(t.front.x + n.x * 1.2, t.front.z + n.z * 1.2, t.facing + Math.PI);
    let a = l.position.clone(),
      o = (wn?.look || r).clone(),
      s = v,
      c = wn?.off || { x: 0, y: 0 },
      u = { t: 0 };
    (Be.chime(),
      Ct.stop(),
      kt.next === e && kt.farewell(),
      await new Promise((e) =>
        me.to(u, {
          t: 1,
          duration: 1.2,
          ease: `power2.inOut`,
          onUpdate: () => {
            ((v = s * (1 - u.t)),
              (_ = 0.7 * v),
              W.frame(a.clone().lerp(i, u.t), o.clone().lerp(r, u.t), { cut: !0, fit: !1 }),
              kn(c, 1 - u.t));
          },
          onComplete: e,
        }),
      ),
      await xt.close(800));
    try {
      sessionStorage.setItem(`lp.iris`, `1`);
    } catch {}
    location.href = `/life-learn/?go=${e}`;
  }
  function Mn() {
    for (let e of Dn.pinned) {
      if (e === `me`) Tn.set(R.position.x, R.position.y + 2.1, R.position.z);
      else {
        let t = M[e];
        if (!t) continue;
        Tn.set(t.front.x, or(t.front.x, t.front.z) + 5.2, t.front.z);
      }
      if ((hr(Tn, En).project(l), En.z > 1 || Math.abs(En.x) > 1.05 || Math.abs(En.y) > 1.05)) {
        Dn.place(e, null);
        continue;
      }
      Dn.place(e, (En.x * 0.5 + 0.5) * innerWidth, (0.5 - En.y * 0.5) * innerHeight);
    }
  }
  let Nn = !1,
    Pn = !1,
    Fn = null,
    In = !1,
    Ln = !1,
    zn = !1,
    Bn = 0,
    Vn = new B(),
    Hn = new B();
  e.onUpdate((n, i) => {
    let a = St.open_ || Vt.isOpen || Ot.isOpen || Mt || !!wn;
    Re.setControls(!(a || Nn || At || Fn || en || Y || !Ln));
    let o = a || Nn || At || en || Y ? { x: 0, y: 0 } : Re.readMove();
    (Y && Re.state.dragging && Y.skip?.(),
      !In && (o.x || o.y) && ((In = !0), setTimeout(() => b.hideHint(), 4e3)),
      en ? sn(n) : R.update(n, o, W.yaw, Re.running()),
      Gt.walk(n, { move: o, yaw: W.yaw, at: R.position, host: H.object.position, far: 3 }),
      (Ne.x = R.position.x),
      (Ne.z = R.position.z),
      Fn &&
        ((Fn.a += n * 0.05), W.frame(Vn.set(Math.cos(Fn.a) * Fn.r, Fn.y, Math.sin(Fn.a) * Fn.r), Fn.look, { cut: !0 })),
      W.update(n, R, Re),
      sr.value.set(R.position.x * (1 - v), R.position.z * (1 - v), 1 / V.lerp(Na.walk, Na.whole, v), 1),
      wn && Dn.isOpen && Mn());
    let s = V.lerp(De.walk.fov, De.model.fov, v),
      d = V.lerp(De.walk.phoneFov, De.model.phoneFov, v);
    if (
      ((Math.abs(s - h) > 0.01 || Math.abs(d - g) > 0.01) && ((h = s), (g = d), e.setFovMax(d), e.setFov(s)),
      Hn.set(R.position.x * (1 - v), or(R.position.x, R.position.z) * (1 - v), R.position.z * (1 - v)),
      O.setFocus(Hn, l.position.distanceTo(Hn)),
      ++Bn & 31 || mr(c),
      Ln && !en && !Y && !Nn)
    ) {
      let e = _n[_n.length - 1];
      ((!e || e.distanceTo(R.position) > 0.6) &&
        (e && (yn += e.distanceTo(R.position)), _n.push(R.position.clone()), _n.length > 900 && _n.shift()),
        !bn &&
          !a &&
          !Gt.isOpen &&
          !At &&
          !Fn &&
          yn > 14 &&
          Math.hypot(R.position.x, R.position.z) < Xn.plaza - 1.2 &&
          Cn());
    }
    if (((c.environmentIntensity = V.lerp(u.low ? 0.34 : 0.26, 0.12, v)), m)) {
      ((m.uContrast.value = V.lerp(u.low ? 1.04 : 1.08, 1.18, v)),
        u.low || (m.uWarm.value = 0),
        (m.uVibrance.value = V.lerp(0.3, 0.36, v)),
        (m.uSat.value = V.lerp(0.96, 1, v)),
        m.uLift && (m.uLift.value = V.lerp(0.4, 0.6, v)));
      let e = V.lerp(De.walk.tilt, De.model.tilt, v);
      ((m.uTilt.value += ((Fn ? 1 : Math.max(_, e)) - m.uTilt.value) * (1 - Math.exp(-n * 2.5))),
        (m.uFocus.value = Fn ? 0.62 : en ? 0.42 : 0.5),
        (m.uBand.value = Fn ? De.model.band : V.lerp(De.walk.band, De.model.band, v)));
    }
    let f = Math.hypot(R.position.x - H.object.position.x, R.position.z - H.object.position.z) < 4.5,
      p =
        (Pn || Nn || f
          ? Math.atan2(R.position.x - H.object.position.x, R.position.z - H.object.position.z)
          : X.guide.home) - H.object.rotation.y;
    ((p = Math.atan2(Math.sin(p), Math.cos(p))),
      (H.object.rotation.y += p * (1 - Math.exp(-n * 3))),
      H.setMotion(0, n),
      Gt.isOpen || (Pn = !1),
      te.update(n, i),
      O.update(n, i, l, or),
      k.update(n, i),
      A.update(n, i),
      Fe.update(n, i, R),
      P.update(n),
      (F.mat.uniforms.uTime.value = i),
      (F.mat.uniforms.uNear.value = V.smoothstep(
        Math.hypot(R.position.x - F.mesh.position.x, R.position.z - F.mesh.position.z),
        5,
        13,
      )),
      G.update(),
      Ct.listen(R.position),
      kt.update(n, i, R),
      cn.update(n, i),
      (Zt += n),
      Yt && Ln && !At && Zt > 0.4 && Xt && Xt.distanceTo(R.position) > 1 && $t(),
      qt.update(n, i),
      xn.update(n, i));
    let y = null;
    if (
      (D && Math.hypot(R.position.x - M[D].front.x, R.position.z - M[D].front.z) > 6.5 && (D = null),
      !Nn && !At && !en && !Y && !Mt)
    ) {
      let e = 5.2;
      for (let t of [...Object.values(E), ...(ne ? [ne] : [])]) {
        if (t.id === D) continue;
        let n = M[t.id],
          r = Math.hypot(R.position.x - n.front.x, R.position.z - n.front.z);
        r < e && ((e = r), (y = t));
      }
      y?.flash && yt.current?.id !== y.id
        ? yt.show({ ...y, portrait: ie }, () => zt(), { line: null })
        : y && !y.flash && yt.current?.id !== y.id
          ? yt.show(y, K, { line: Ja(y, t, r) })
          : !y && yt.current && yt.hide();
    }
    b.promptEl?.classList.toggle(`by-card`, !!yt.current && G.current?.id === yt.current.id);
    let S = x.classList.contains(`show`),
      C = !document.body.classList.contains(`touch`);
    (C && zn && !S && Kt.pulse(),
      (zn = S),
      Kt.hold(!Ln || a || Nn || At || !!en || !!Y || (y && y === Yt) || (C && S)),
      Kt.update(),
      Fe.hush(a || Nn || At || !!en || !!Y || !!y || S));
  });
  let Un =
    W.portrait > 0.5
      ? { pos: new B(1, 1.6, 37.4), look: new B(2.9, -3.3, 25.75) }
      : C.get(`gate`) === `old`
        ? { pos: new B(-2.3, 2.05, 33.9), look: new B(0.6, 1.8, 25.8) }
        : { pos: new B(-2.3, 2.05, 33.9), look: new B(2.9, 1.8, 26.5) };
  function Wn() {
    return Se
      ? new Promise((t) => {
          let n = l.position.clone(),
            r = new B(0, 0, -1).applyQuaternion(l.quaternion).multiplyScalar(6).add(l.position),
            i = new B(),
            a = new B(),
            o = !1,
            s = 0,
            c = () => {
              o || ((o = !0), Se.dawn(), Pe(`plaza`));
            },
            u = e.onUpdate((e) => {
              s += e;
              let t = Math.min(1, s / 1.4),
                o = t * t * (3 - 2 * t);
              (i.set(R.position.x, R.position.y + 1.5, R.position.z + 2.4),
                a.set(R.position.x, R.position.y + 1.2, R.position.z - 4),
                W.frame(i.lerp(n, 1 - o), a.lerp(r, 1 - o), { cut: !0 }),
                Se.crossing() && c());
            });
          R.walkPath([new B(0, 0, X.gate.z + 1.4), new B(0, 0, X.gate.z - 6.6)], () => {
            (u(), c(), Ce(), (W.yaw = R.heading + Math.PI), W.release(), setTimeout(t, 700));
          });
        })
      : Promise.resolve();
  }
  async function Gn(e = 2400, { whole: t = !1 } = {}) {
    if (
      (await ue,
      (R.heading = ce.h),
      R.place(R.position.x, R.position.z, ce.h),
      (W.yaw = ce.h === Math.PI ? 0 : ce.h + Math.PI),
      t)
    ) {
      let e = Sn(W.yaw);
      ((v = 1),
        (_ = 0.7),
        W.frame(e.pos, e.look, { cut: !0, fit: !1 }),
        m && (m.uTilt.value = _),
        await new Promise((e) => setTimeout(e, 1400)));
    }
    let n = W.restPose(R.position),
      r = l.position.clone(),
      i = new B(0, 0, -1)
        .applyQuaternion(l.quaternion)
        .multiplyScalar(t ? r.length() : 10)
        .add(l.position),
      a = { t: 0 },
      o = v;
    ((Fn = null),
      await new Promise((t) =>
        me.to(a, {
          t: 1,
          duration: e / 1e3,
          ease: `power2.inOut`,
          onUpdate: () => {
            let e = r.clone().lerp(n.position, a.t);
            ((e.y += Math.sin(a.t * Math.PI) * 2),
              o && ((v = o * (1 - a.t)), (_ = 0.7 * (1 - a.t))),
              W.frame(e, i.clone().lerp(n.look, Math.min(1, a.t * 1.3)), { cut: !0 }));
          },
          onComplete: t,
        }),
      ),
      (v = 0),
      (_ = 0),
      W.release());
  }
  function Kn(e = 3200) {
    let t = l.position.clone(),
      n = Fn ? Fn.look.clone() : new B(0, 0, -1).applyQuaternion(l.quaternion).multiplyScalar(30).add(t);
    Fn = null;
    let r = new pe([t, new B(-10, 10, 45), Un.pos.clone()], !1, `centripetal`),
      i = { t: 0 },
      a = v;
    return new Promise((t) =>
      me.to(i, {
        t: 1,
        duration: e / 1e3,
        ease: `power2.inOut`,
        onUpdate: () => {
          ((v = a * (1 - i.t)),
            W.frame(r.getPoint(i.t), n.clone().lerp(Un.look, Math.min(1, i.t * 1.25)), { cut: !0 }));
        },
        onComplete: t,
      }),
    );
  }
  function qn(e) {
    let n = E[e]?.open && !gt()[e] ? E[e] : J();
    if ((Qt(n, { reveal: !0 }), !n)) return;
    (Sa.twinkle(1), b.toast(U(`第一站：${n.short}。`, `First stop: ${n.short}.`), 5200));
    let r = t.passport?.suggest === n.id ? t.passport.why : ``;
    return S.say(U(`引路人`, `The guide`), [r || U(`${n.gift}。`, `${n.gift}.`)], { role: `guide` });
  }
  function Jn(e, t = 1.4) {
    let n = Math.atan2(R.position.x - e.x, R.position.z - e.z) - W.yaw;
    n = Math.atan2(Math.sin(n), Math.cos(n));
    let r = { a: W.yaw };
    me.to(r, {
      a: W.yaw + n,
      duration: t,
      ease: `power2.inOut`,
      onUpdate: () => {
        W.yaw = r.a;
      },
    });
  }
  async function Zn(e) {
    let t = E[e];
    await new Promise((e) => setTimeout(e, 1100));
    let n = Tt.querySelector(`i[data-id="${e}"]`);
    (n &&
      (n.classList.add(`on`, `stamping`),
      Tt.classList.add(`stamped`),
      setTimeout(() => {
        (n.classList.remove(`stamping`), Tt.classList.remove(`stamped`));
      }, 1400)),
      Sa.thump(),
      setTimeout(() => Sa.twinkle(3), 160),
      b.toast(U(`${t?.nick || ``}的章，盖上了`, `${t?.nick || ``}'s stamp is in your passport`), 2600),
      await new Promise((e) => setTimeout(e, 1300)));
    let r = J();
    if ((Qt(r, { reveal: !0 }), !r)) {
      Rt();
      return;
    }
    (Jn(M[r.id].front),
      S.say(U(`引路人`, `The guide`), [U(`还早。下一站：${r.short}。`, `Still early. Next: ${r.short}.`)], {
        role: `guide`,
      }));
  }
  if (le)
    ((Nn = !0),
      (v = 1),
      (Fn = {
        a: 1.15,
        r: 129.2 * (1 + 0.45 * W.portrait),
        y: 51 * (1 + 0.3 * W.portrait),
        look: new B(0, -13 - 11 * W.portrait + 15 * (1 - W.portrait), 0),
      }),
      b.hideHint(),
      Tt.classList.add(`away`));
  else if (i) {
    let e = W.restPose(R.position);
    (W.frame(e.position, e.look, { cut: !0 }), W.release());
  } else (l.position.set(0, 26, 60), l.lookAt(0, 0, 0));
  async function Qn() {
    if (le) {
      je(!0, { dark: !0, accent: Me.landing.lamp });
      let e = await (
        C.get(`gate`) === `old`
          ? (
              await Ee(
                async () => {
                  let { runLanding: e } = await import(`./landing-BtczYm99.js`);
                  return { runLanding: e };
                },
                __vite__mapDeps([24, 12, 4, 5, 1, 11, 15, 25, 14, 22, 26, 27]),
              )
            ).runLanding
          : vn
      )(y, {
        voice: S,
        me: t,
        lives: E,
        onStudio: ({ air: e, lamps: t }) => {
          (e !== void 0 && be.setOnAir(e), t !== void 0 && be.setLamps(t));
        },
        onStep: (e, t) => {
          (e === `premise` &&
            (Fn && (Kn(t?.quick ? 900 : 3200), setTimeout(() => H.play?.(`wave`), 2200)),
            Se?.fall(t?.quick ? 0.6 : 2.8)),
            e === `listening` && H.play?.(`agree`),
            e === `thinking` && H.play?.(`look-around`),
            e === `passport` && H.play?.(`agree`));
        },
        onAvatar: (e) => {
          let t = new B(X.spawn.x, 0.15, X.spawn.z);
          (P.puff(t, { color: `#fff1e2`, count: 30, size: 1.1 }),
            P.stars(t, { count: 26 }),
            Be.poof(),
            setTimeout(() => Be.sparkle(), 250),
            Fe.recast(e, ye),
            (ue = z(e)
              .then((e) => (R.place(X.spawn.x, X.spawn.z, Math.atan2(X.guide.x - X.spawn.x, X.guide.z - X.spawn.z)), e))
              .catch(() => null)));
        },
      });
      if (
        (Object.assign(t, {
          avatar: e.avatar,
          identity: e.identity,
          note: e.note,
          life: e.life || null,
          passport: e.passport || t.passport || null,
          gate: 4,
        }),
        ve(t),
        C.has(`gate`))
      ) {
        let e = new URL(location.href);
        (e.searchParams.delete(`gate`), history.replaceState(history.state, ``, e));
      }
      let n = Object.values(E)
        .filter((e) => e.open)
        .map((e) => e.id);
      if (!e.later) Le(t, r, n);
      else {
        Le(t, r, [n.includes(e.suggest) ? e.suggest : n[0]]);
        let i = !1,
          a = () => {
            i || ((i = !0), Le(t, r, n));
          };
        (e.later
          .then((e) => {
            (e?.portrait && t.life && ((t.life = { ...t.life, portrait: e.portrait }), ve(t)), a());
          })
          .catch(a),
          setTimeout(a, 45e3));
      }
      ((Nn = !1), p(), Tt.classList.remove(`away`), H.play?.(`wave`));
      let i = E[e.suggest] || E.melies;
      if (e.go && i.open) {
        (Se?.dawn(), Ce(), await Gn(1800), K(i));
        return;
      }
      (await Gn(2200), await Wn(), qn(e.suggest));
    } else if ((await ue, i || (await Gn(3200, { whole: !0 })), ee)) (Zn(ee), qa(t, r));
    else {
      Qt(J(), { reveal: !0 });
      let e = Ka(r);
      S.say(U(`引路人`, `The guide`), [U(`你回来了。`, `You're back.`), ...(e ? [e] : [])], { role: `guide` });
    }
    (nt() === `first` && (W.mode = `first`),
      (Object.keys(gt()).length || !document.body.classList.contains(`touch`)) &&
        setTimeout(() => {
          !In && !yt.current && !At && !en && b.coach();
        }, 6500));
  }
  let $n = {
    hero: [
      [38, 22, 46],
      [0, 0, 0],
    ],
    gate: [Un.pos.toArray(), Un.look.toArray()],
    plaza: [
      [0, 3.2, 15.5],
      [0, 2.2, 0],
    ],
    melies: [
      [3.5, 2.6, -8.5],
      [0, 3.5, -20],
    ],
    vangogh: [
      [7.5, 2.4, 2.5],
      [19, 4, -3],
    ],
    lishizhen: [
      [-7.5, 2.4, 2.2],
      [-19, 2.6, -3],
    ],
    pond: [
      [10.6, 3.2, 11.6],
      [19, -1.5, 19.5],
    ],
    court: [
      [-9.5, 2.4, 10.5],
      [-15.4, 1.5, 15.2],
    ],
    xiyou: [
      [-5.2, 2.6, -5.2],
      [-12.5, 3.2, -12.5],
    ],
  };
  return {
    player: R,
    cam: W,
    interactions: G,
    voice: S,
    crowd: Fe,
    props: A,
    island: te,
    sky: O,
    nature: k,
    lm: N,
    grid: Ge,
    route: Ke,
    doors: kt,
    next: Kt,
    trail: qt,
    lives: E,
    ready: Promise.all([we, ue, Fe.ready]),
    revealed() {
      de = !0;
    },
    start: () => {
      Qn()
        .catch((e) => console.error(`arrival`, e))
        .finally(() => {
          ((Ln = !0),
            T.flash
              ?.arrive?.({ me: t, lang: r, root: y, stage: e, seen: gt(), delay: ee ? 5200 : 1500 })
              ?.catch?.((e) => console.warn(`flash`, e)));
        });
    },
    get arrived() {
      return Ln;
    },
    get target() {
      return Yt?.id || null;
    },
    goNext() {
      Yt && tn(Yt);
    },
    shot(e, t = !1) {
      if (
        ((v = +(e === `whole` || e === `hero`)),
        (_ = e === `hero` ? 1 : e === `whole` ? 0.7 : 0),
        t && m && (m.uTilt.value = _),
        e === `whole`)
      ) {
        let n = Sn();
        return (W.frame(n.pos, n.look, { cut: t, fit: !1 }), e);
      }
      if (!e || !$n[e]) return (W.release(), `released`);
      let [n, r] = $n[e];
      return (W.frame(new B(...n), new B(...r), { cut: t }), e);
    },
    holdUp() {
      return ((bn = !1), Cn());
    },
  };
}
function Xa(e, t) {
  let n =
    e === `en`
      ? [
          `They're showing a film from 1902 in the glass house. The moon has a shell in its eye.`,
          `Méliès filmed me — the reel is still drying.`,
          `I've just come out of the herbal shop. My wrist is still warm.`,
          `The floor in Van Gogh's room slopes. I nearly lost my footing.`,
          `Looking at the clouds from here feels like being on a ship.`,
          `Li Shizhen put daylily in my prescription. He said the old books call it forget-worry.`,
          `Every lamp on the plaza is lit. No hurry.`,
        ]
      : [
          `玻璃屋里在放一部 1902 年的电影，月亮的眼睛里插着一颗炮弹。`,
          `梅里爱给我拍了一镜，片子还在晾。`,
          `我刚从药铺出来，手腕上还是热的。`,
          `梵高屋里的地板是斜的，我差点没站稳。`,
          `从这儿看云，像在船上。`,
          `李时珍给我开的方子里，有一味萱草。他说古人叫它忘忧。`,
          `广场上的灯一盏一盏都亮着，不急。`,
        ];
  return (
    t.xiyou &&
      n.push(
        e === `en`
          ? `Over at the Journey they say the ordeals queue up, one after another.`
          : `听说西游记那边，八十一难排着队。`,
      ),
    n
  );
}
function Za(e, { onPick: t }) {
  let n = document.createElement(`div`);
  ((n.className = `sheet gallery`), e.appendChild(n));
  let r = null,
    i = () => {
      (n.classList.remove(`show`), r?.());
    };
  return (
    n.addEventListener(`click`, (e) => {
      (e.target === n || e.target.closest(`.sheet-x`)) && i();
    }),
    {
      open(e, i) {
        ((r = i),
          (n.innerHTML = `<div class="sheet-card"><button class="sheet-x" type="button">×</button><div class="sheet-kicker">STAR FILM · ${U(`今日上映`, `NOW SHOWING`)}</div><h3>${U(`来访者的一镜`, `Visitors' shots`)}</h3>
        <div class="gallery-grid">${e.map((e, t) => `<button type="button" class="gallery-item" data-i="${t}"><img src="${e.image}" alt="" loading="lazy" /><b>${e.title || ``}</b><span>${e.identity ? `${U(`主演`, `Starring`)} · ${e.identity}` : ``}</span></button>`).join(``)}</div></div>`),
          n
            .querySelectorAll(`.gallery-item`)
            .forEach((n) => n.addEventListener(`click`, () => t(e[Number(n.dataset.i)]))),
          n.classList.add(`show`));
      },
      close: i,
      get isOpen() {
        return n.classList.contains(`show`);
      },
    }
  );
}
export { Se as assetUrl, Ya as enter };
