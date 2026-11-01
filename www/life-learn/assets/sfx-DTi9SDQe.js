const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/flash-DsjFYdvz.js",
      "assets/gallery-Dt7lIqYc.js",
      "assets/i18n-BvGoRVq5.js",
      "assets/visits-C_j5CG_Y.js",
      "assets/me-CiQWAPxS.js",
      "assets/mine-CDwrJdN1.js",
      "assets/gallery-Dp4QNNyu.css",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./i18n-BvGoRVq5.js";
import { n as t } from "./assets-p2qy6QaX.js";
import { t as n } from "./preload-helper-B4-B-RAC.js";
import { a as r } from "./visits-C_j5CG_Y.js";
import { n as i, r as a } from "./mine-CDwrJdN1.js";
var o = (e) =>
    String(e ?? ``).replace(
      /[&<>"']/g,
      (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` })[e],
    ),
  s = (e, t) => {
    let n = (Array.isArray(e) ? e : []).filter(Boolean);
    return n
      .filter((e) => !n.some((t) => t !== e && t.length < e.length && e.toLowerCase().includes(t.toLowerCase())))
      .slice(0, t);
  },
  c = Object.freeze({
    melies: {
      turn: [`当一回导演`, `Your turn as the director`],
      where: [`1897，梅里爱的玻璃摄影棚`, `1897, Méliès' glass studio`],
      stamp: [`导演 · 1897`, `Director · 1897`],
    },
    vangogh: {
      turn: [`当一回画家`, `Your turn as the painter`],
      where: [`1888，梵高在阿尔勒的卧室`, `1888, Van Gogh's bedroom in Arles`],
      stamp: [`画家 · 1888`, `Painter · 1888`],
    },
    lishizhen: {
      turn: [`当一回郎中`, `Your turn as the doctor`],
      where: [`万历十八年，李时珍的药铺`, `1590, Li Shizhen's herbal shop`],
      stamp: [`郎中 · 万历十八年`, `Doctor · 1590`],
    },
    xiyou: {
      turn: [`当一回取经人`, `Your turn as the pilgrim`],
      where: [`贞观十三年，五行山`, `639, Five Elements Mountain`],
      stamp: [`取经人 · 贞观十三年`, `Pilgrim · 639`],
    },
  }),
  l = (t, n) => {
    let r = c[t?.id]?.[n];
    return r ? e(r[0], r[1]) : ``;
  },
  u = (e) => l(e, `turn`) || e?.short || ``,
  d = (e) => {
    let t = new Date(e);
    return `${t.getFullYear()}.${String(t.getMonth() + 1).padStart(2, `0`)}.${String(t.getDate()).padStart(2, `0`)}`;
  },
  f = [-5, 3, -2, 5, -3, 2],
  p = (e) => {
    let t = 2166136261;
    for (let n of `${e.title}|${e.at}`) ((t ^= n.charCodeAt(0)), (t = Math.imul(t, 16777619)));
    return String((t >>> 0) % 1e5).padStart(5, `0`);
  };
function m({ passport: n, me: r, lives: i, seen: a = {}, actions: c = ``, flash: m = `` }) {
  let h = i[n.suggest] || Object.values(i)[0],
    g = d(n.at || Date.now()),
    _ = Object.values(i)
      .map(
        (e, t) =>
          `<i class="pp-visa${a[e.id] ? ` on` : ``}" style="--visa-ink:${e.ink || `#c8473a`};--visa-tilt:${f[t % f.length]}deg" title="${o(u(e))}"><span class="pp-visa-mark">${e.stamp}</span><b>${o(l(e, `stamp`) || e.place || e.nick || ``)}</b><small>${a[e.id] ? d(a[e.id]) : ``}</small></i>`,
      )
      .join(``),
    v = r.life?.care ? [] : s(r.life?.details, 4),
    y = (n.keywords || []).filter(Boolean);
  return `
    <div class="pp">
      <div class="pp-head"><b>${e(`人生护照`, `Life Passport`)}</b><span>${e(`LIFE PASSPORT`, `人生护照`)}</span></div>
      <div class="pp-main">
        <div class="pp-photo"><img src="${t(`portraits/${r.avatar || `v2`}.jpg`)}" alt="" /><i class="pp-stamp">${e(`人生广场<br/>已入境`, `LIFE PLAZA<br/>ADMITTED`)}</i></div>
        <div class="pp-info">
          <div class="pp-k">${e(`持照人`, `Holder`)}</div>
          <div class="pp-who">${o(r.identity || e(`远道而来的人`, `A traveller from afar`))}</div>
          <div class="pp-title">${o(n.title)}</div>
          <div class="pp-line">${o(n.line)}</div>
          <div class="pp-valid"><span class="pp-k">${e(`有效期`, `Valid until`)}</span><b>${e(`走完为止`, `you've walked them all`)}</b></div>
        </div>
      </div>
      ${v.length >= 2 ? `<div class="pp-notes"><div class="pp-k">${e(`她记下的`, `What she wrote down`)}</div><div class="pp-notes-l">${v.map((e, t) => `<span style="--i:${t}">${o(e)}</span>`).join(``)}</div></div>` : y.length ? `<div class="pp-keys">${y.map((e, t) => `<b style="--i:${t}">${o(e)}</b>`).join(``)}</div>` : ``}
      ${n.unseen ? `<div class="pp-unseen"><div class="pp-k">${e(`没人看见的那部分`, `The part nobody sees`)}</div><div class="pp-unseen-t">${o(n.unseen)}</div></div>` : ``}
      ${h ? `<div class="pp-first"><img src="${t(h.portrait)}" alt="" /><div><div class="pp-k">${e(`第一站`, `First stop`)}</div><div class="pp-life">${o(u(h))}</div>${l(h, `where`) ? `<div class="pp-where">${o(l(h, `where`))}</div>` : ``}${n.why ? `<div class="pp-why">${o(n.why)}</div>` : ``}</div></div>` : ``}
      <div class="pp-visas"><span>${e(`入境章`, `Stamps`)}</span>${_}</div>
      ${m ? `<div class="pp-flash-slot">${m}</div>` : ``}
      ${c}
      <div class="pp-no">No. ${p(n)} · ${g}</div>
    </div>`;
}
function h(t) {
  let n = t?.job;
  if (!n || ![`ready`, `making`, `failed`].includes(t.state)) return ``;
  let r = n.host?.name || ``,
    i = n.title ? e(`《${o(n.title)}》`, o(n.title)) : e(`一件小东西`, `A small thing`),
    a = t.state === `ready` && n.cover ? `/life-learn/api/${n.cover}` : ``,
    s =
      t.state === `ready`
        ? e(`做好了，一两分钟，挂在庭院里，也在这儿。`, `Ready: a minute or two. It hangs in the court, and here.`)
        : t.state === `making`
          ? e(
              `还在做。好了，庭院里第一件就是它。`,
              `Still being made. When it's done, it's the first one in the court.`,
            )
          : e(`这次没做成，他说先不拿给你看。`, `It didn't come out; they won't show you a broken one.`);
  return `<div class="pp-flash ${t.state}"><span class="pp-flash-pic">${a ? `<img alt="" src="${o(a)}" />` : `<i></i>`}</span><div class="pp-flash-t"><div class="pp-k">${o(e(`${r}为你做的`, `Made for you by ${r}`))}</div><b>${i}</b><small>${s}</small></div>${t.state === `ready` ? `<button type="button" class="pp-flash-go">${e(`打开`, `Open`)}</button>` : ``}</div>`;
}
function g(t, { lives: r }) {
  let o = document.createElement(`div`);
  ((o.className = `sheet passport-sheet`), t.appendChild(o));
  let s = null,
    c = null,
    l = () => {
      (o.classList.remove(`show`), c?.(), (c = null), s?.());
    };
  return (
    o.addEventListener(`click`, (e) => {
      if (e.target.closest(`.pp-again`)) {
        location.href = `/life-learn/?go=plaza&gate=1`;
        return;
      }
      if (e.target.closest(`.pp-flash-go`)) {
        let e = a.get().job;
        e &&
          n(
            async () => {
              let { openFlash: e } = await import(`./flash-DsjFYdvz.js`);
              return { openFlash: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
          )
            .then(({ openFlash: t }) => t(e, { mine: !0 }))
            .catch((e) => console.warn(`flash`, e));
        return;
      }
      (e.target === o || e.target.closest(`.pp-close`)) && l();
    }),
    {
      open(t, n, l) {
        if (!t.passport) return !1;
        ((s = l),
          (o.innerHTML = `<div class="passport-wrap">${m({ passport: t.passport, me: t, lives: r, seen: n, flash: h(i(t)), actions: `<div class="pp-actions"><button type="button" class="pp-close pp-go">${e(`收好`, `Put it away`)}</button><button type="button" class="pp-again">${e(`重走一遍门口`, `Walk through the gate again`)}</button></div>` })}</div>`),
          c?.());
        let u = a.get().state;
        return (
          (c = a.on((e) => {
            if (e.state === u) return;
            u = e.state;
            let t = o.querySelector(`.pp-flash-slot`),
              n = h(e);
            t
              ? (t.innerHTML = n)
              : n &&
                o.querySelector(`.pp-visas`)?.insertAdjacentHTML(`afterend`, `<div class="pp-flash-slot">${n}</div>`);
          })),
          requestAnimationFrame(() => o.classList.add(`show`)),
          !0
        );
      },
      get isOpen() {
        return o.classList.contains(`show`);
      },
    }
  );
}
var _ = (e, t) => {
    let n = e.createBuffer(1, Math.floor(e.sampleRate * t), e.sampleRate),
      r = n.getChannelData(0);
    for (let e = 0; e < r.length; e += 1) r[e] = Math.random() * 2 - 1;
    return n;
  },
  v = (e) => 440 * 2 ** ((e - 69) / 12),
  y = [
    [71, 1],
    [74, 1],
    [79, 1],
    [78, 1.5],
    [76, 0.5],
    [74, 1],
    [76, 1],
    [74, 1],
    [71, 1],
    [69, 3],
    [71, 1],
    [74, 1],
    [79, 1],
    [81, 1.5],
    [79, 0.5],
    [78, 1],
    [76, 1],
    [78, 1],
    [74, 1],
    [79, 3],
  ],
  b = [43, 50, 52, 50, 43, 50, 48, 43],
  x = {
    tuneIn() {
      let e = r();
      if (!e) return;
      let t = e.currentTime,
        n = e.createBufferSource();
      n.buffer = _(e, 1.2);
      let i = e.createBiquadFilter();
      ((i.type = `bandpass`),
        (i.Q.value = 6),
        i.frequency.setValueAtTime(400, t),
        i.frequency.exponentialRampToValueAtTime(2600, t + 0.55),
        i.frequency.exponentialRampToValueAtTime(1200, t + 0.9));
      let a = e.createGain();
      (a.gain.setValueAtTime(1e-4, t),
        a.gain.exponentialRampToValueAtTime(0.09, t + 0.08),
        a.gain.exponentialRampToValueAtTime(1e-4, t + 1),
        n.connect(i).connect(a).connect(e.destination),
        n.start(t),
        n.stop(t + 1.2),
        [
          [880, 0.95],
          [1318.5, 1.1],
        ].forEach(([n, r]) => {
          let i = e.createOscillator();
          ((i.type = `sine`), (i.frequency.value = n));
          let a = e.createGain();
          (a.gain.setValueAtTime(1e-4, t + r),
            a.gain.exponentialRampToValueAtTime(0.07, t + r + 0.015),
            a.gain.exponentialRampToValueAtTime(1e-4, t + r + 0.5),
            i.connect(a).connect(e.destination),
            i.start(t + r),
            i.stop(t + r + 0.55));
        }));
    },
    click(e = !0) {
      let t = r();
      if (!t) return;
      let n = t.currentTime,
        i = t.createOscillator();
      ((i.type = `sine`),
        i.frequency.setValueAtTime(e ? 1400 : 900, n),
        i.frequency.exponentialRampToValueAtTime(e ? 2100 : 600, n + 0.05));
      let a = t.createGain();
      (a.gain.setValueAtTime(1e-4, n),
        a.gain.exponentialRampToValueAtTime(0.06, n + 0.006),
        a.gain.exponentialRampToValueAtTime(1e-4, n + 0.09),
        i.connect(a).connect(t.destination),
        i.start(n),
        i.stop(n + 0.1));
    },
    pen() {
      let e = r();
      if (!e) return { stop() {} };
      let t = !0,
        n = 0,
        i = _(e, 0.6),
        a = () => {
          if (!t) return;
          let r = e.currentTime,
            o = 0.12 + Math.random() * 0.28,
            s = e.createBufferSource();
          ((s.buffer = i), (s.playbackRate.value = 0.8 + Math.random() * 0.5));
          let c = e.createBiquadFilter();
          ((c.type = `bandpass`), (c.frequency.value = 3200 + Math.random() * 1800), (c.Q.value = 1.4));
          let l = e.createGain();
          (l.gain.setValueAtTime(1e-4, r),
            l.gain.linearRampToValueAtTime(0.035, r + 0.03),
            l.gain.setValueAtTime(0.03, r + o - 0.04),
            l.gain.linearRampToValueAtTime(1e-4, r + o),
            s.connect(c).connect(l).connect(e.destination),
            s.start(r, Math.random() * 0.2),
            s.stop(r + o + 0.02),
            (n = setTimeout(a, (o + 0.08 + Math.random() * 0.45) * 1e3)));
        };
      return (
        a(),
        {
          stop() {
            ((t = !1), clearTimeout(n));
          },
        }
      );
    },
    pop(e = 46) {
      let t = r();
      if (!t) return;
      let n = t.currentTime,
        i = 760 - Math.min(64, Math.max(28, e)) * 6,
        a = t.createOscillator();
      ((a.type = `sine`),
        a.frequency.setValueAtTime(i * 1.9, n),
        a.frequency.exponentialRampToValueAtTime(i, n + 0.07));
      let o = t.createGain();
      (o.gain.setValueAtTime(1e-4, n),
        o.gain.exponentialRampToValueAtTime(0.11, n + 0.008),
        o.gain.exponentialRampToValueAtTime(1e-4, n + 0.17),
        a.connect(o).connect(t.destination),
        a.start(n),
        a.stop(n + 0.19));
    },
    unpop() {
      let e = r();
      if (!e) return;
      let t = e.currentTime,
        n = e.createOscillator();
      ((n.type = `sine`), n.frequency.setValueAtTime(380, t), n.frequency.exponentialRampToValueAtTime(640, t + 0.08));
      let i = e.createGain();
      (i.gain.setValueAtTime(1e-4, t),
        i.gain.exponentialRampToValueAtTime(0.05, t + 0.01),
        i.gain.exponentialRampToValueAtTime(1e-4, t + 0.12),
        n.connect(i).connect(e.destination),
        n.start(t),
        n.stop(t + 0.14));
    },
    birth(e = 4) {
      let t = r();
      if (!t) return;
      let n = t.currentTime + 0.05;
      for (let r = 0; r < Math.min(e, 6); r += 1) {
        let e = n + r * 0.036,
          i = 1100 + r * 90,
          a = t.createOscillator();
        ((a.type = `sine`),
          a.frequency.setValueAtTime(i, e),
          a.frequency.exponentialRampToValueAtTime(i * 0.68, e + 0.06));
        let o = t.createGain();
        (o.gain.setValueAtTime(1e-4, e),
          o.gain.exponentialRampToValueAtTime(0.034, e + 0.006),
          o.gain.exponentialRampToValueAtTime(1e-4, e + 0.09),
          a.connect(o).connect(t.destination),
          a.start(e),
          a.stop(e + 0.1));
      }
    },
    limit() {
      let e = r();
      if (!e) return;
      let t = e.currentTime,
        n = e.createOscillator();
      ((n.type = `triangle`),
        n.frequency.setValueAtTime(190, t),
        n.frequency.exponentialRampToValueAtTime(120, t + 0.1));
      let i = e.createGain();
      (i.gain.setValueAtTime(1e-4, t),
        i.gain.exponentialRampToValueAtTime(0.09, t + 0.006),
        i.gain.exponentialRampToValueAtTime(1e-4, t + 0.14),
        n.connect(i).connect(e.destination),
        n.start(t),
        n.stop(t + 0.16));
    },
    send() {
      let e = r();
      if (!e) return;
      let t = e.currentTime,
        n = e.createBufferSource();
      n.buffer = _(e, 0.3);
      let i = e.createBiquadFilter();
      ((i.type = `bandpass`),
        (i.Q.value = 1.2),
        i.frequency.setValueAtTime(900, t),
        i.frequency.exponentialRampToValueAtTime(3400, t + 0.18));
      let a = e.createGain();
      (a.gain.setValueAtTime(1e-4, t),
        a.gain.exponentialRampToValueAtTime(0.028, t + 0.03),
        a.gain.exponentialRampToValueAtTime(1e-4, t + 0.2),
        n.connect(i).connect(a).connect(e.destination),
        n.start(t),
        n.stop(t + 0.24));
    },
    tap() {
      let e = r();
      if (!e) return;
      let t = e.currentTime,
        n = e.createOscillator();
      ((n.type = `sine`),
        n.frequency.setValueAtTime(1500, t),
        n.frequency.exponentialRampToValueAtTime(1050, t + 0.04));
      let i = e.createGain();
      (i.gain.setValueAtTime(1e-4, t),
        i.gain.exponentialRampToValueAtTime(0.03, t + 0.004),
        i.gain.exponentialRampToValueAtTime(1e-4, t + 0.06),
        n.connect(i).connect(e.destination),
        n.start(t),
        n.stop(t + 0.07));
    },
    stamp() {
      let e = r();
      if (!e) return;
      let t = e.currentTime,
        n = e.createBufferSource();
      n.buffer = _(e, 0.2);
      let i = e.createBiquadFilter();
      ((i.type = `lowpass`), (i.frequency.value = 420));
      let a = e.createGain();
      (a.gain.setValueAtTime(1e-4, t),
        a.gain.exponentialRampToValueAtTime(0.5, t + 0.006),
        a.gain.exponentialRampToValueAtTime(1e-4, t + 0.14),
        n.connect(i).connect(a).connect(e.destination),
        n.start(t),
        n.stop(t + 0.18),
        [
          [1318.5, 0.06],
          [1975.5, 0.12],
        ].forEach(([n, r]) => {
          let i = e.createOscillator();
          ((i.type = `sine`), (i.frequency.value = n));
          let a = e.createGain();
          (a.gain.setValueAtTime(1e-4, t + r),
            a.gain.exponentialRampToValueAtTime(0.05, t + r + 0.01),
            a.gain.exponentialRampToValueAtTime(1e-4, t + r + 0.6),
            i.connect(a).connect(e.destination),
            i.start(t + r),
            i.stop(t + r + 0.65));
        }));
    },
    song() {
      let e = r();
      if (!e) return { fade() {} };
      let t = e.currentTime + 0.15,
        n = 60 / 84,
        i = e.createGain();
      (i.gain.setValueAtTime(1e-4, e.currentTime), i.gain.exponentialRampToValueAtTime(1, t + 0.6));
      let a = e.createBiquadFilter();
      ((a.type = `lowpass`), (a.frequency.value = 4200), i.connect(a).connect(e.destination));
      let o = e.createBufferSource();
      ((o.buffer = _(e, 2)), (o.loop = !0));
      let s = e.createGain();
      s.gain.value = 0.006;
      let c = e.createBiquadFilter();
      ((c.type = `highpass`), (c.frequency.value = 2500), o.connect(c).connect(s).connect(i), o.start(t));
      let l = (t, n, r, a) => {
          [
            [1, a],
            [2, a * 0.18],
            [3, a * 0.08],
          ].forEach(([a, o]) => {
            let s = e.createOscillator();
            ((s.type = a === 1 ? `triangle` : `sine`), (s.frequency.value = v(t) * a));
            let c = e.createGain();
            (c.gain.setValueAtTime(1e-4, n),
              c.gain.exponentialRampToValueAtTime(o, n + 0.008),
              c.gain.exponentialRampToValueAtTime(1e-4, n + Math.max(0.9, r * 1.6)),
              s.connect(c).connect(i),
              s.start(n),
              s.stop(n + Math.max(1, r * 1.7)));
          });
        },
        u = t;
      for (let [e, t] of y) (l(e, u, t * n, 0.05), (u += t * n));
      b.forEach((e, r) => l(e, t + r * 3 * n, 3 * n, 0.03));
      let d = u + 1.6;
      o.stop(d);
      let f = !1;
      return {
        fade(t = 1.6) {
          if (f) return;
          f = !0;
          let n = e.currentTime;
          (i.gain.cancelScheduledValues(n),
            i.gain.setValueAtTime(Math.max(1e-4, i.gain.value), n),
            i.gain.exponentialRampToValueAtTime(1e-4, n + t));
          try {
            o.stop(n + t + 0.05);
          } catch {}
        },
      };
    },
  };
export { s as a, m as i, g as n, u as o, o as r, x as t };
