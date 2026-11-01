import { t as e } from "./i18n-BvGoRVq5.js";
import { a as t, s as n } from "./visits-C_j5CG_Y.js";
import { a as r, c as i, i as a, l as o, o as s, s as c } from "./mine-CDwrJdN1.js";
var l = 1200,
  u = 9e3,
  d = (e) => String(e ?? ``).replace(/[&<>"]/g, (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e]),
  f = (e) => e?.host?.name || e?.hostName || ``;
function p(t, { mine: n = !1 } = {}) {
  let r = f(t);
  return t?.credit
    ? t.credit
    : r
      ? n || !t?.who
        ? e(`${r}为你做的`, `Made for you by ${r}`)
        : e(`${r}为${t.who}做的`, `Made by ${r} for ${t.who}`)
      : ``;
}
function m(t, { root: n = document.body, mine: a = !1, onDone: s = null, onClose: c = null, onNext: m = null } = {}) {
  t = i(t);
  let g = document.createElement(`div`);
  g.className = `fl fl-player`;
  let _ = !!t?.dark,
    v = (Array.isArray(t?.palette) && t.palette[0]) || (_ ? `#14161b` : `#fbf6ec`);
  ((g.innerHTML = `
    <div class="fl-stage${_ ? ` dark` : ``}" style="--fl-bg:${d(v)}">
      <div class="fl-curtain"><div>
        <small>${d(f(t))}</small>
        <b>${t?.title ? e(`《${d(t.title)}》`, d(t.title)) : ``}</b>
        <span class="fl-dots"><i></i><i></i><i></i></span>
      </div></div>
    </div>
    <button class="fl-x${_ ? ` on-dark` : ``}" type="button" aria-label="${e(`关上`, `Close`)}"></button>`),
    n.appendChild(g),
    requestAnimationFrame(() => g.classList.add(`in`)));
  let y = g.querySelector(`.fl-stage`),
    b = null,
    x = 0,
    S = !1,
    C = !1,
    w = 0,
    T = 0,
    E = 0,
    D = null,
    O = !t?.file && !t?.doc && t?.id,
    k = [],
    A = (n) => {
      if (C) return;
      (clearTimeout(w), clearTimeout(T), b?.remove(), (b = null), O && o(t.id, n), y.classList.remove(`live`));
      let r = document.createElement(`div`);
      ((r.className = `fl-sorry`),
        (r.innerHTML = `<div><p>${e(`这件小东西还没做好。<br>他说，再给他一点时间。`, `This little thing isn't quite finished.<br>Give them a little more time.`)}</p><button class="fl-btn" type="button">${e(`好`, `OK`)}</button></div>`),
        r.querySelector(`button`).addEventListener(`click`, () => I()),
        y.appendChild(r));
    },
    j = (e) => {
      if (!b || e.source !== b.contentWindow) return;
      let t = e.data;
      if (t && t.lpFlash === 1) {
        if (t.type === `ready` && !x)
          ((x = performance.now()),
            clearTimeout(w),
            (T = setTimeout(() => {
              k.length ? A(k) : ((S = !0), y.classList.add(`live`));
            }, l)));
        else if (t.type === `error`) S || k.push(String(t.message || `error`).slice(0, 300));
        else if (t.type === `done` && !D) ((D = t.result || {}), s?.(D), (E = setTimeout(P, 1500)));
        else if (t.type === `haptic`)
          try {
            navigator.vibrate?.(Math.min(80, Number(t.ms) || 12));
          } catch {}
      }
    };
  addEventListener(`message`, j);
  let M = (e) => {
      if (C) return;
      (b?.remove(),
        (x = 0),
        (S = !1),
        (D = null),
        (k.length = 0),
        y.classList.remove(`live`),
        (b = document.createElement(`iframe`)),
        b.setAttribute(`sandbox`, `allow-scripts`),
        b.setAttribute(`allow`, `autoplay`),
        b.setAttribute(`title`, t?.title || `flash`),
        y.insertBefore(b, y.firstChild));
      let n = b,
        r = () => {
          b === n && !n.srcdoc && (n.srcdoc = e);
        };
      (requestAnimationFrame(() => requestAnimationFrame(r)),
        setTimeout(r, 250),
        (w = setTimeout(() => {
          x || A([`never said ready`]);
        }, u)));
    },
    N = null;
  r(t).then((e) => {
    if (!C) {
      if (!e) {
        A([`could not fetch the piece`]);
        return;
      }
      ((N = e), M(e));
    }
  });
  function P() {
    if (C || !D) return;
    y.querySelector(`.fl-end`)?.remove();
    let n = document.createElement(`div`);
    n.className = `fl-end`;
    let r = D.line || t?.last || ``,
      i = D.back || ``;
    ((n.innerHTML = `
      <div class="fl-end-card">
        <div class="fl-end-face">${r ? `<p>${d(r)}</p>` : ``}<small>${d(p(t, { mine: a }))}</small></div>
        ${i ? `<div class="fl-end-back" aria-hidden="true"><p>${d(i)}</p><small>${d(e(`${f(t)}写在背面`, `${f(t)}, on the back`))}</small></div>` : ``}
      </div>
      <div class="fl-end-actions">
        ${i ? `<button class="fl-btn" type="button" data-a="flip">${e(`翻过来`, `Turn over`)}</button>` : ``}
        <button class="fl-btn" type="button" data-a="again">${e(`再玩一次`, `Again`)}</button>
        ${D.image ? `<button class="fl-btn" type="button" data-a="keep">${e(`收下这张`, `Keep it`)}</button>` : ``}
        ${m ? `<button class="fl-btn main" type="button" data-a="next">${e(`下一个`, `Next`)}</button>` : `<button class="fl-btn main" type="button" data-a="close">${e(`收好了`, `Done`)}</button>`}
      </div>`),
      n.addEventListener(`click`, (r) => {
        let i = r.target.closest(`[data-a]`)?.dataset.a;
        if (i === `flip`) {
          let t = n.classList.toggle(`flipped`);
          ((r.target.closest(`[data-a]`).textContent = t ? e(`翻回去`, `Turn back`) : e(`翻过来`, `Turn over`)),
            n.querySelector(`.fl-end-face`)?.setAttribute(`aria-hidden`, String(t)),
            n.querySelector(`.fl-end-back`)?.setAttribute(`aria-hidden`, String(!t)));
        } else
          i === `again`
            ? (n.remove(), M(N))
            : i === `keep`
              ? h(t, D, { mine: a })
              : i === `next`
                ? (I(), m?.())
                : i === `close` && I();
      }),
      y.appendChild(n),
      requestAnimationFrame(() => requestAnimationFrame(() => n.classList.add(`up`))));
  }
  let F = (e) => {
    e.key === `Escape` && I();
  };
  (addEventListener(`keydown`, F), g.querySelector(`.fl-x`).addEventListener(`click`, () => I()));
  function I() {
    if (!C) {
      ((C = !0),
        clearTimeout(w),
        clearTimeout(T),
        clearTimeout(E),
        removeEventListener(`message`, j),
        removeEventListener(`keydown`, F));
      try {
        b?.contentWindow?.postMessage({ lpFlash: 1, type: `pause` }, `*`);
      } catch {}
      (g.classList.remove(`in`),
        setTimeout(() => {
          (b?.remove(), g.remove());
        }, 420),
        c?.({ done: !!D, result: D }));
    }
  }
  return { close: I, el: g };
}
async function h(t, n, { mine: r }) {
  let i = await new Promise((e) => {
      let t = new Image();
      ((t.onload = () => e(t)), (t.onerror = () => e(null)), (t.src = n.image));
    }),
    a = 1080,
    o = 1700,
    s = document.createElement(`canvas`);
  ((s.width = a), (s.height = o));
  let c = s.getContext(`2d`);
  ((c.fillStyle = `#fbf6ec`), c.fillRect(0, 0, a, o));
  let l = `Georgia, 'Iowan Old Style', 'Palatino Linotype', Palatino, serif`,
    u = e(`'Songti SC', 'STSong', 'Noto Serif SC', Georgia, serif`, l),
    d = e(`'Kaiti SC', 'STKaiti', 'KaiTi', Georgia, serif`, `italic ${l}`),
    f = 90;
  if (i) {
    let e = Math.min(860 / i.width, 1080 / i.height),
      t = i.width * e,
      n = i.height * e,
      r = (a - t) / 2;
    ((c.fillStyle = `#fffdf8`),
      (c.shadowColor = `rgba(35,48,58,0.25)`),
      (c.shadowBlur = 40),
      (c.shadowOffsetY = 18),
      c.fillRect(r - 22, f - 22, t + 44, n + 44),
      (c.shadowColor = `transparent`),
      c.drawImage(i, r, f, t, n),
      (f += n + 110));
  }
  ((c.textAlign = `center`),
    (c.fillStyle = `#23303a`),
    (c.font = `700 50px ${u}`),
    c.fillText(t?.title ? e(`《${t.title}》`, t.title) : ``, a / 2, f));
  let m = (e, t) => (t.startsWith(`italic `) ? `italic ${e}px ${t.slice(7)}` : `${e}px ${t}`);
  ((c.font = m(34, d)), (c.fillStyle = `#4a4038`));
  let h = String(n.line || ``),
    g = e([...h], h.split(/(?<=\s)/)),
    _ = [],
    v = ``;
  for (let e of g) v && c.measureText(v + e).width > 840 ? (_.push(v.trim()), (v = e)) : (v += e);
  v.trim() && _.push(v.trim());
  let y = _.slice(0, 3);
  if ((y.forEach((e, t) => c.fillText(e, a / 2, f + 76 + t * 52)), n.back)) {
    ((c.font = m(26, d)), (c.fillStyle = `#7a6e62`));
    let t = String(n.back),
      r = e(30, 64);
    c.fillText(t.length > r ? `${t.slice(0, r - 1)}…` : t, a / 2, Math.min(1510, f + 76 + y.length * 52 + 40));
  }
  ((c.font = `26px ${u}`),
    (c.fillStyle = `#5d6b72`),
    c.fillText(p(t, { mine: r }), a / 2, 1580),
    (c.font = `22px sans-serif`),
    (c.fillStyle = `#8a8f88`),
    c.fillText(e(`人生广场 · 主人由 AI 扮演`, `Life Plaza · hosts played by AI`), a / 2, 1630));
  let b = document.createElement(`a`);
  ((b.download = `life-plaza-${Date.now()}.png`), (b.href = s.toDataURL(`image/png`)), b.click());
}
var g = Object.freeze({ melies: `film`, vangogh: `strokes`, lishizhen: `grind`, xiyou: `road` }),
  _ = [0, 2, 4, 7, 9],
  v = () => {
    let e = t();
    return e && e.state === `running` ? e : null;
  };
function y(e, t = 0.1, n = 0.9) {
  let r = v();
  if (!r) return;
  let i = 523.25 * 2 ** ((_[((e % 5) + 5) % 5] + 12 * Math.floor(e / 5)) / 12),
    a = r.createOscillator(),
    o = r.createGain(),
    s = r.currentTime;
  ((a.type = `triangle`),
    (a.frequency.value = i),
    o.gain.setValueAtTime(1e-4, s),
    o.gain.exponentialRampToValueAtTime(t, s + 0.012),
    o.gain.exponentialRampToValueAtTime(1e-4, s + n),
    a.connect(o).connect(r.destination),
    a.start(s),
    a.stop(s + n + 0.05));
}
function b(e = 0.32) {
  let t = v();
  if (!t) return;
  let n = t.createOscillator(),
    r = t.createGain(),
    i = t.currentTime;
  (n.frequency.setValueAtTime(110, i),
    n.frequency.exponentialRampToValueAtTime(48, i + 0.2),
    r.gain.setValueAtTime(1e-4, i),
    r.gain.exponentialRampToValueAtTime(e, i + 0.01),
    r.gain.exponentialRampToValueAtTime(1e-4, i + 0.26),
    n.connect(r).connect(t.destination),
    n.start(i),
    n.stop(i + 0.3));
}
var x = null;
function S(e = 0.09, t = 0.16, n = 1900) {
  let r = v();
  if (!r) return;
  if (!x) {
    x = r.createBuffer(1, r.sampleRate, r.sampleRate);
    let e = x.getChannelData(0);
    for (let t = 0; t < e.length; t += 1) e[t] = Math.random() * 2 - 1;
  }
  let i = r.createBufferSource(),
    a = r.createBiquadFilter(),
    o = r.createGain(),
    s = r.currentTime;
  ((i.buffer = x),
    (a.type = `bandpass`),
    (a.frequency.value = n),
    (a.Q.value = 1.4),
    o.gain.setValueAtTime(1e-4, s),
    o.gain.exponentialRampToValueAtTime(e, s + 0.02),
    o.gain.exponentialRampToValueAtTime(1e-4, s + t),
    i.connect(a).connect(o).connect(r.destination),
    i.start(s, Math.random() * 0.5),
    i.stop(s + t + 0.05));
}
function C() {
  [1760, 2637, 3520].forEach((e, t) => {
    let n = v();
    if (!n) return;
    let r = n.createOscillator(),
      i = n.createGain(),
      a = n.currentTime + t * 0.05;
    ((r.type = `sine`),
      (r.frequency.value = e),
      i.gain.setValueAtTime(1e-4, a),
      i.gain.exponentialRampToValueAtTime(0.05 / (t + 1), a + 0.01),
      i.gain.exponentialRampToValueAtTime(1e-4, a + 1.3),
      r.connect(i).connect(n.destination),
      r.start(a),
      r.stop(a + 1.35));
  });
}
var w = (e) => {
    let t = e >>> 0;
    return () => {
      t = (t + 1831565813) | 0;
      let e = Math.imul(t ^ (t >>> 15), 1 | t);
      return ((e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e), ((e ^ (e >>> 14)) >>> 0) / 4294967296);
    };
  },
  T = (e, t = 0, n = 1) => Math.max(t, Math.min(n, e)),
  E = (e) => 1 - (1 - T(e)) ** 3,
  D = (e) => ((e = T(e)), e < 0.6 ? E(e / 0.6) * 1.15 : 1.15 - 0.15 * E((e - 0.6) / 0.4));
function O(e, t, n, r, i = 0.05, a = !1) {
  let o = document.createElement(`canvas`);
  ((o.width = Math.max(1, Math.round(e * n))), (o.height = Math.max(1, Math.round(t * n))));
  let s = o.getContext(`2d`);
  ((s.fillStyle = r), s.fillRect(0, 0, o.width, o.height));
  let c = w(7),
    l = Math.round((o.width * o.height) / 9);
  for (let e = 0; e < l; e += 1)
    ((s.fillStyle = c() < 0.5 ? `rgba(60,40,20,${i * c()})` : `rgba(255,255,255,${i * 1.4 * c()})`),
      s.fillRect(c() * o.width, c() * o.height, 1.2 * n, 1.2 * n));
  if (a) {
    ((s.strokeStyle = `rgba(90,70,40,0.05)`), (s.lineWidth = n));
    for (let e = 0; e < o.width; e += 3 * n) (s.beginPath(), s.moveTo(e, 0), s.lineTo(e, o.height), s.stroke());
    for (let e = 0; e < o.height; e += 3 * n) (s.beginPath(), s.moveTo(0, e), s.lineTo(o.width, e), s.stroke());
  }
  return o;
}
var k = {
  film: {
    setup(e) {
      e.stars = [];
    },
    draw(e, t, n) {
      let { w: r, h: i, pal: a } = e,
        o = r - 12,
        s = i * 0.1,
        c = i * 0.8;
      ((t.fillStyle = `#2b2622`),
        t.beginPath(),
        t.roundRect(6, s, o, c, 6),
        t.fill(),
        (t.fillStyle = `rgba(244,236,220,0.82)`));
      for (let e = 13; e < 6 + o - 6; e += 13) (t.fillRect(e, s + 4, 6, 5), t.fillRect(e, s + c - 9, 6, 5));
      let l = (o - 40) / 7,
        u = s + 15,
        d = c - 30,
        f = e.shown * 7;
      e.frames = [];
      for (let r = 0; r < 7; r += 1) {
        let i = 11 + r * (l + 5);
        e.frames.push([i, l]);
        let o = t.createLinearGradient(0, u, 0, u + d);
        (o.addColorStop(0, `#ddd7cc`),
          o.addColorStop(1, `#9e988e`),
          (t.fillStyle = o),
          t.fillRect(i, u, l, d),
          t.save(),
          t.beginPath(),
          t.rect(i, u, l, d),
          t.clip(),
          (t.fillStyle = `rgba(70,64,58,0.5)`));
        let s = r % 3;
        if (s === 0)
          (t.beginPath(),
            t.arc(i + l * 0.55, u + d * 0.36, l * 0.24, 0, 7),
            t.fill(),
            (t.fillStyle = `#cfc8bc`),
            t.beginPath(),
            t.arc(i + l * 0.64, u + d * 0.31, l * 0.21, 0, 7),
            t.fill());
        else if (s === 1)
          (t.beginPath(),
            t.moveTo(i - 2, u + d),
            t.quadraticCurveTo(i + l * 0.4, u + d * 0.5, i + l + 2, u + d * 0.78),
            t.lineTo(i + l + 2, u + d),
            t.fill());
        else {
          t.beginPath();
          for (let e = 0; e < 10; e += 1) {
            let n = -Math.PI / 2 + (e * Math.PI) / 5,
              r = e % 2 ? l * 0.1 : l * 0.24;
            t.lineTo(i + l / 2 + Math.cos(n) * r, u + d * 0.45 + Math.sin(n) * r);
          }
          t.fill();
        }
        let c = T(f - r);
        c > 0 &&
          ((t.globalCompositeOperation = `multiply`),
          (t.globalAlpha = 0.62),
          (t.fillStyle = a[r % a.length]),
          t.beginPath(),
          t.arc(i + l / 2, u + d / 2, E(c) * Math.hypot(l, d) * 0.62, 0, 7),
          t.fill(),
          (t.globalCompositeOperation = `source-over`),
          (t.globalAlpha = 1));
        for (let i of e.stars)
          if (i.i === r) {
            let e = 5.5 * D((n - i.born) / 0.5);
            ((t.fillStyle = `#f6d77d`), t.beginPath());
            for (let n = 0; n < 8; n += 1) {
              let r = (n * Math.PI) / 4 + i.spin,
                a = n % 2 ? e * 0.32 : e;
              t.lineTo(i.x + Math.cos(r) * a, i.y + Math.sin(r) * a);
            }
            t.fill();
          }
        t.restore();
      }
      let p = Math.floor(f);
      if (p < 7 && !e.finished) {
        let [r, i] = e.frames[p],
          o = r + i * (0.5 + 0.3 * Math.sin(n * 3.1)),
          s = u + d * (0.5 + 0.28 * Math.sin(n * 4.3 + 1));
        ((t.strokeStyle = `#8a6a44`),
          (t.lineWidth = 2),
          (t.lineCap = `round`),
          t.beginPath(),
          t.moveTo(o + 3, s - 4),
          t.lineTo(o + 15, s - 22),
          t.stroke(),
          (t.fillStyle = a[p % a.length]),
          t.beginPath(),
          t.ellipse(o + 1.5, s - 1.5, 2.6, 4.4, -0.6, 0, 7),
          t.fill());
      }
      ((t.fillStyle = `rgba(255,236,190,${0.03 + 0.03 * Math.sin(n * 23)})`), t.fillRect(6, s, o, c));
    },
    help(e, t, n, r) {
      let i = (e.frames || []).findIndex(([e, n]) => t >= e - 3 && t <= e + n + 3);
      i < 0 ||
        (e.stars.push({ i, x: t, y: T(n, e.h * 0.2, e.h * 0.8), born: r, spin: Math.random() }),
        e.stars.length > 40 && e.stars.shift(),
        y(i, 0.1),
        S(0.03, 0.08, 4200));
    },
  },
  strokes: {
    setup(e) {
      ((e.laid = 0), (e.extra = []), (e.rand = w(1888)), (e.paint = null));
    },
    angle(e, t, n) {
      let r = [
          [e.w * 0.3, e.h * 0.45, 1],
          [e.w * 0.72, e.h * 0.55, -0.8],
        ],
        i = 0.2;
      for (let [e, a, o] of r) {
        let r = Math.hypot(t - e, n - a) + 18;
        i += o * (Math.atan2(n - a, t - e) + Math.PI / 2) * (60 / r);
      }
      return i;
    },
    lay(e, t, n, r) {
      let i = e.paint.getContext(`2d`),
        a = k.strokes.angle(e, t, n),
        o = 8 + e.rand() * 7;
      (i.save(),
        i.scale(e.dpr, e.dpr),
        (i.strokeStyle = e.pal[r % e.pal.length]),
        (i.globalAlpha = 0.86),
        (i.lineWidth = 4 + e.rand() * 2.4),
        (i.lineCap = `round`),
        i.beginPath(),
        i.moveTo(t - (Math.cos(a) * o) / 2, n - (Math.sin(a) * o) / 2),
        i.quadraticCurveTo(
          t + Math.cos(a + 1.4) * 2,
          n + Math.sin(a + 1.4) * 2,
          t + (Math.cos(a) * o) / 2,
          n + (Math.sin(a) * o) / 2,
        ),
        i.stroke(),
        (i.globalAlpha = 0.35),
        (i.strokeStyle = `#fffaf0`),
        (i.lineWidth = 1),
        i.stroke(),
        i.restore(),
        (e.last = [t, n]));
    },
    draw(e, t, n) {
      (!e.paint || e.paint.width !== Math.round(e.w * e.dpr)) &&
        ((e.paint = O(e.w, e.h, e.dpr, `#f3e9d2`, 0.06, !0)), (e.laid = 0), (e.rand = w(1888)));
      let r = Math.round(e.shown * 170);
      for (let t = 0; e.laid < r && t < 3; t += 1, e.laid += 1)
        k.strokes.lay(e, 6 + e.rand() * (e.w - 12), 6 + e.rand() * (e.h - 12), e.laid);
      for (; e.extra.length;) {
        let [t, n, r] = e.extra.shift();
        k.strokes.lay(e, t, n, r);
      }
      if ((t.drawImage(e.paint, 0, 0, e.w, e.h), e.last && !e.finished)) {
        let [r, i] = e.last,
          a = Math.sin(n * 6) * 2;
        ((t.strokeStyle = `#7b5b38`),
          (t.lineWidth = 2.2),
          (t.lineCap = `round`),
          t.beginPath(),
          t.moveTo(r + 4, i - 3 + a),
          t.lineTo(r + 20, i - 18 + a),
          t.stroke(),
          (t.fillStyle = e.pal[e.laid % e.pal.length]),
          t.beginPath(),
          t.ellipse(r + 2.5, i - 1.5 + a, 3, 5, -0.8, 0, 7),
          t.fill());
      }
    },
    help(e, t, n) {
      for (let r = 0; r < 7; r += 1)
        e.extra.push([t + (Math.random() - 0.5) * 34, n + (Math.random() - 0.5) * 26, Math.floor(Math.random() * 9)]);
      (S(0.08, 0.16, 1500 + Math.random() * 800), y(Math.floor((t / e.w) * 7), 0.06, 0.7));
    },
  },
  grind: {
    setup(e) {
      ((e.phase = 0), (e.push = 0), (e.dust = []), (e.side = 1), (e.paper = null));
    },
    draw(e, t, n, r) {
      let { w: i, h: a, pal: o } = e;
      ((!e.paper || e.paper.width !== Math.round(i * e.dpr)) && (e.paper = O(i, a, e.dpr, `#f2ead9`, 0.05)),
        t.drawImage(e.paper, 0, 0, i, a));
      let s = i / 2,
        c = Math.min(i * 0.42, 150),
        l = a * 0.5,
        u = a * 0.3,
        d = () => {
          (t.beginPath(), t.moveTo(s - c, l), t.quadraticCurveTo(s, l + u * 2, s + c, l), t.closePath());
        };
      ((t.fillStyle = `rgba(60,40,24,0.16)`), t.beginPath(), t.ellipse(s, l + u + 8, c * 0.9, 7, 0, 0, 7), t.fill());
      let f = t.createLinearGradient(0, l, 0, l + u);
      (f.addColorStop(0, `#6c5340`),
        f.addColorStop(1, `#3f2f24`),
        (t.fillStyle = f),
        d(),
        t.fill(),
        t.save(),
        d(),
        t.clip());
      let p = l + u - 4 - E(e.shown) * u * 0.72,
        m = o[1] || `#9aa86e`,
        h = o[2] || `#c9a46a`;
      ((t.fillStyle = m),
        t.beginPath(),
        t.moveTo(s - c, l + u * 1.2),
        t.lineTo(s - c, p + 10),
        t.quadraticCurveTo(s, p - 8, s + c, p + 10),
        t.lineTo(s + c, l + u * 1.2),
        t.fill());
      let g = w(9);
      for (let e = 0; e < 140; e += 1)
        ((t.fillStyle = g() < 0.5 ? h : `rgba(255,250,235,0.5)`),
          t.fillRect(s - c + g() * c * 2, p - 2 + g() * u, 1.6, 1.6));
      (t.restore(),
        (t.strokeStyle = `rgba(255,240,220,0.35)`),
        (t.lineWidth = 1.2),
        t.beginPath(),
        t.moveTo(s - c + 6, l + 1),
        t.quadraticCurveTo(s, l + u * 1.6, s + c - 6, l + 1),
        t.stroke(),
        (e.push *= 0.35 ** r),
        (e.phase += r * (e.finished ? 0.3 : 1.3 + e.push * 3)));
      let _ = Math.min(a * 0.24, 32),
        v = s + c * 0.55 * Math.sin(e.phase),
        y = Math.min(p - _ + 6, l + u * 0.62 - _ + 4),
        b = Math.sign(Math.cos(e.phase));
      if (b !== e.side && ((e.side = b), e.push > 0.3))
        for (let t = 0; t < 6; t += 1)
          e.dust.push({
            x: v - b * _,
            y: y + _,
            vx: (Math.random() - 0.5) * 40,
            vy: -20 - Math.random() * 30,
            life: 1,
          });
      let x = t.createRadialGradient(v - _ * 0.3, y - _ * 0.3, _ * 0.2, v, y, _);
      (x.addColorStop(0, `#9a8a76`),
        x.addColorStop(1, `#5e5244`),
        (t.fillStyle = `rgba(40,28,18,0.25)`),
        t.beginPath(),
        t.ellipse(v, y + _ * 0.95, _ * 0.8, 3, 0, 0, 7),
        t.fill(),
        (t.fillStyle = x),
        t.beginPath(),
        t.arc(v, y, _, 0, 7),
        t.fill(),
        (t.strokeStyle = `rgba(255,245,225,0.3)`),
        (t.lineWidth = 1.2),
        t.beginPath(),
        t.arc(v, y, _ * 0.72, 0, 7),
        t.stroke());
      let S = (v - s) / _;
      ((t.strokeStyle = `rgba(40,30,20,0.4)`),
        t.beginPath(),
        t.moveTo(v, y),
        t.lineTo(v + Math.cos(S) * _ * 0.9, y + Math.sin(S) * _ * 0.9),
        t.stroke(),
        (t.strokeStyle = `#7b5a3a`),
        (t.lineWidth = 5),
        (t.lineCap = `round`),
        t.beginPath(),
        t.moveTo(v - _ * 1.7, y),
        t.lineTo(v + _ * 1.7, y),
        t.stroke(),
        (t.fillStyle = `#3a2c22`),
        t.beginPath(),
        t.arc(v, y, 4, 0, 7),
        t.fill());
      for (let n of e.dust)
        ((n.x += n.vx * r),
          (n.y += n.vy * r),
          (n.vy += 60 * r),
          (n.life -= r * 1.4),
          (t.fillStyle = `rgba(150,140,100,${Math.max(0, n.life) * 0.6})`),
          t.fillRect(n.x, n.y, 2, 2));
      e.dust = e.dust.filter((e) => e.life > 0);
    },
    help(e) {
      ((e.push = Math.min(2.4, e.push + 1)), b(0.28), S(0.04, 0.3, 700));
    },
  },
  road: {
    setup(e) {
      ((e.clouds = [
        { x: 0.2, y: 0.24, born: -9, own: !1 },
        { x: 0.62, y: 0.12, born: -9, own: !1 },
      ]),
        (e.bg = null));
    },
    path(e, t) {
      let { w: n, h: r } = e,
        i = [
          [n * 0.07, r * 0.9],
          [n * 0.62, r * 0.95],
          [n * 0.2, r * 0.42],
          [n * 0.8, r * 0.36],
        ],
        a = 1 - t;
      return [
        a ** 3 * i[0][0] + 3 * a * a * t * i[1][0] + 3 * a * t * t * i[2][0] + t ** 3 * i[3][0],
        a ** 3 * i[0][1] + 3 * a * a * t * i[1][1] + 3 * a * t * t * i[2][1] + t ** 3 * i[3][1],
      ];
    },
    draw(e, t, n, r) {
      let { w: i, h: a, pal: o } = e;
      if (!e.bg || e.bg.width !== Math.round(i * e.dpr)) {
        e.bg = O(i, a, e.dpr, `#ecf0e4`, 0.045);
        let t = e.bg.getContext(`2d`);
        t.scale(e.dpr, e.dpr);
        let n = t.createRadialGradient(i * 0.84, a * 0.2, 2, i * 0.84, a * 0.2, a * 0.55);
        (n.addColorStop(0, `rgba(246,214,125,0.75)`),
          n.addColorStop(1, `rgba(246,214,125,0)`),
          (t.fillStyle = n),
          t.fillRect(0, 0, i, a));
        let r = (e, n, r, o) => {
          ((t.fillStyle = o),
            t.beginPath(),
            t.moveTo(r - i * 0.3, a),
            t.quadraticCurveTo(r - i * 0.1, e, r, n),
            t.quadraticCurveTo(r + i * 0.08, e, r + i * 0.32, a),
            t.fill());
        };
        (r(a * 0.5, a * 0.18, i * 0.86, `#a9c4b2`),
          r(a * 0.62, a * 0.4, i * 0.62, `#c4d6c4`),
          r(a * 0.7, a * 0.5, i * 0.98, `#8fb09f`),
          (t.strokeStyle = `rgba(90,80,60,0.18)`),
          t.setLineDash([3, 5]),
          (t.lineWidth = 1.2),
          t.beginPath());
        for (let n = 0; n <= 1.001; n += 0.02) {
          let [r, i] = k.road.path(e, n);
          n === 0 ? t.moveTo(r, i) : t.lineTo(r, i);
        }
        (t.stroke(), t.setLineDash([]));
      }
      t.drawImage(e.bg, 0, 0, i, a);
      let s = Math.floor(e.shown * 26);
      for (let n = 0; n < s; n += 1) {
        let r = (n + 0.5) / 26,
          [i, a] = k.road.path(e, r),
          [o, s] = k.road.path(e, r + 0.01),
          c = Math.atan2(s - a, o - i),
          l = n % 2 ? 1 : -1,
          u = 0.7 + 0.3 * (1 - r);
        ((t.fillStyle = `rgba(70,62,48,${0.28 + (n / 26) * 0.3})`),
          t.beginPath(),
          t.ellipse(
            i + Math.cos(c + Math.PI / 2) * 3 * l,
            a + Math.sin(c + Math.PI / 2) * 3 * l,
            3.2 * u,
            1.8 * u,
            c,
            0,
            7,
          ),
          t.fill());
      }
      let [c, l] = k.road.path(e, Math.min(0.995, (s + 0.6) / 26)),
        u = e.finished ? 0 : Math.abs(Math.sin(n * 5)) * 1.6;
      ((t.strokeStyle = `#6e5a3a`),
        (t.lineWidth = 1.3),
        t.beginPath(),
        t.moveTo(c + 5, l - 1),
        t.lineTo(c + 5, l - 19 - u),
        t.stroke(),
        (t.strokeStyle = `#d8b25a`),
        t.beginPath(),
        t.arc(c + 5, l - 21 - u, 2.4, 0, 7),
        t.stroke(),
        (t.fillStyle = `#a5452f`),
        t.beginPath(),
        t.moveTo(c - 4, l),
        t.quadraticCurveTo(c, l - 17 - u, c + 4, l),
        t.fill(),
        (t.fillStyle = `#e9d2b0`),
        t.beginPath(),
        t.arc(c, l - 15 - u, 2.6, 0, 7),
        t.fill());
      for (let r of e.clouds) {
        let e = n - r.born,
          o = r.own ? D(e / 0.7) : 1,
          s = r.x * i + Math.sin(n * 0.3 + r.y * 9) * 8 + (r.own ? e * 6 : 0),
          c = r.y * a,
          l = r.own ? T(1 - (e - 5) / 3) : 0.8;
        if (!(l <= 0)) {
          ((t.globalAlpha = l), (t.strokeStyle = `#c79a4c`), (t.fillStyle = `#fffaf0`), (t.lineWidth = 1.2));
          for (let [e, n] of [
            [-9, 6],
            [0, 8],
            [9, 6],
          ])
            (t.beginPath(), t.arc(s + e * o, c, n * o, Math.PI, 0), t.fill(), t.stroke());
          (t.beginPath(), t.arc(s + 4 * o, c + 1, 3 * o, 0, Math.PI * 1.6), t.stroke(), (t.globalAlpha = 1));
        }
      }
      e.clouds = e.clouds.filter((e) => !e.own || n - e.born < 8);
    },
    help(e, t, n, r) {
      (e.clouds.push({ x: t / e.w, y: T(n / e.h, 0.1, 0.8), born: r, own: !0 }),
        e.clouds.length > 14 && e.clouds.splice(2, 1),
        C());
    },
  },
  ink: {
    setup(e) {
      e.drops = [];
      let t = w(3);
      for (let n = 0; n < 9; n += 1)
        e.drops.push({ x: 0.1 + t() * 0.8, y: 0.2 + t() * 0.6, r: 14 + t() * 16, at: n / 9, own: !1 });
      e.paper = null;
    },
    draw(e, t, n) {
      ((!e.paper || e.paper.width !== Math.round(e.w * e.dpr)) && (e.paper = O(e.w, e.h, e.dpr, `#fbf6ec`, 0.04)),
        t.drawImage(e.paper, 0, 0, e.w, e.h),
        (t.globalCompositeOperation = `multiply`),
        e.drops.forEach((r, i) => {
          let a = r.own ? E((n - r.born) / 1.6) : E((e.shown - r.at) * 4);
          if (a <= 0) return;
          let o = r.x * e.w,
            s = r.y * e.h,
            c = r.r * a,
            l = e.pal[i % e.pal.length],
            u = t.createRadialGradient(o, s, c * 0.1, o, s, c);
          (u.addColorStop(0, l),
            u.addColorStop(0.7, l),
            u.addColorStop(1, `rgba(255,255,255,0)`),
            (t.globalAlpha = 0.55),
            (t.fillStyle = u),
            t.beginPath(),
            t.arc(o, s, c, 0, 7),
            t.fill());
        }),
        (t.globalCompositeOperation = `source-over`),
        (t.globalAlpha = 1));
    },
    help(e, t, n, r) {
      (e.drops.push({ x: t / e.w, y: n / e.h, r: 10 + Math.random() * 12, own: !0, born: r }),
        e.drops.length > 40 && e.drops.splice(9, 1),
        y(Math.floor(Math.random() * 8), 0.08));
    },
  },
};
function A(e, t = `ink`, { palette: n = [] } = {}) {
  let r = k[t] || k.ink,
    i = e.getContext(`2d`),
    a = { w: 1, h: 1, dpr: 1, shown: 0, target: 0, finished: !1, pal: [] },
    o = (e) => {
      let t = parseInt(e.slice(1), 16);
      return (0.299 * (t >> 16) + 0.587 * ((t >> 8) & 255) + 0.114 * (t & 255)) / 255;
    },
    s = (e) => {
      let t = (Array.isArray(e) ? e : []).filter((e) => /^#[0-9a-f]{6}$/i.test(e) && o(e) > 0.12 && o(e) < 0.86);
      a.pal = t.length >= 2 ? t : [`#e8b45c`, `#ef8f78`, `#7fa3b8`, `#9aa86e`];
    };
  (s(n), r.setup(a));
  let c = () => {
    let t = e.getBoundingClientRect(),
      n = Math.min(2, window.devicePixelRatio || 1);
    t.width < 2 ||
      ((a.w = t.width),
      (a.h = t.height),
      (a.dpr = n),
      (e.width = Math.round(t.width * n)),
      (e.height = Math.round(t.height * n)));
  };
  c();
  let l = typeof ResizeObserver == `function` ? new ResizeObserver(c) : null;
  l?.observe(e);
  let u = 0,
    d = performance.now(),
    f = !0,
    p = (e) => {
      if (!f) return;
      if (((u = requestAnimationFrame(p)), document.hidden)) {
        d = e;
        return;
      }
      let t = Math.min(0.05, (e - d) / 1e3);
      ((d = e),
        (a.shown += (a.target - a.shown) * Math.min(1, t * 1.6)),
        a.w < 2 && c(),
        i.setTransform(a.dpr, 0, 0, a.dpr, 0, 0),
        i.clearRect(0, 0, a.w, a.h),
        r.draw(a, i, e / 1e3, t));
    };
  u = requestAnimationFrame(p);
  let m = (t) => {
    let n = e.getBoundingClientRect();
    (r.help(a, t.clientX - n.left, t.clientY - n.top, performance.now() / 1e3),
      e.dispatchEvent(new CustomEvent(`craft-help`, { bubbles: !0 })));
  };
  return (
    e.addEventListener(`pointerdown`, m),
    {
      set(e, t) {
        ((a.target = T(Number(e) || 0)), t && s(t));
      },
      finish() {
        ((a.target = 1), (a.finished = !0));
      },
      stop() {
        ((f = !1), cancelAnimationFrame(u), l?.disconnect(), e.removeEventListener(`pointerdown`, m));
      },
    }
  );
}
var j = (e) =>
    String(e ?? ``).replace(/[&<>"]/g, (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e]),
  M = {
    melies: {
      thinking: [`他在想，给你变个什么戏法`, `He is deciding which trick to conjure for you`],
      making: [`他在一格一格地给片子上色`, `He is tinting the film, frame by frame`],
      trying: [`冲好了，他先自己放一遍`, `Developed. He runs it once himself`],
      mending: [`有一格走光了，他在补`, `One frame fogged; he is fixing it`],
      polishing: [`他再一格一格补一遍颜色`, `He goes over the colour once more, frame by frame`],
      slow: [`暗房里的药水凉，冲得慢些`, `The developer is cold tonight; it takes longer`],
      ready: [`片子冲好了`, `The film is ready`],
      failed: [
        `这一卷胶片走光了，他想重拍，先不拿给你看`,
        `This reel fogged. He wants to shoot it again before he shows you`,
      ],
      promise: [`冲好了我叫你`, `I'll call you when it's developed`],
      help: [`添一颗星`, `Add a star`],
      open: [`放映`, `Screen it`],
    },
    vangogh: {
      thinking: [
        `他盯着你说的那几样东西，看它们的颜色`,
        `He is looking at the things you said, until he sees their colour`,
      ],
      making: [`他在一笔一笔地画`, `He is painting, stroke by stroke`],
      trying: [`画好了，他退后两步看一看`, `Done. He steps back to look`],
      mending: [`有一块颜色不对，他刮掉重画`, `One patch is wrong; he scrapes it and paints again`],
      polishing: [`他又添了几笔`, `He is adding a few more strokes`],
      slow: [`颜料涂得厚，干得慢`, `The paint is thick; it dries slowly`],
      ready: [`画好了`, `The painting is ready`],
      failed: [
        `这一张颜料糊了，他想重画，先不拿给你看`,
        `The paint smudged. He wants to paint it again before he shows you`,
      ],
      promise: [`画好了我叫你`, `I'll call you when it's done`],
      help: [`你也画几笔`, `Paint a few strokes`],
      open: [`看看`, `See it`],
    },
    lishizhen: {
      thinking: [`老先生在想，你这一味该用什么`, `He is weighing what you need`],
      making: [`药碾子在碾`, `The grinding wheel is rolling`],
      trying: [`碾好了，他先自己尝一口`, `Ground. He tastes it first`],
      mending: [`有一味分量不对，他在重新称`, `One measure is off; he weighs it again`],
      polishing: [`他再细细筛一遍`, `He sifts it once more, finely`],
      slow: [`这一味要文火慢慢来`, `This one wants a slow fire`],
      ready: [`包好了`, `It's wrapped and ready`],
      failed: [`这一回墨洇了，他想重写，先不拿给你看`, `The ink ran. He wants to write it again before he shows you`],
      promise: [`好了我叫你`, `I'll call you`],
      help: [`帮他推碾子`, `Push the wheel`],
      open: [`打开`, `Open it`],
    },
    xiyou: {
      thinking: [`说书人在翻，看你该走哪一回`, `The storyteller is finding your chapter`],
      making: [`这一回正在写`, `This chapter is being written`],
      trying: [`写完了，他先念一遍`, `Written. He reads it aloud once`],
      mending: [`有一页粘破了，他在补`, `A page tore while drying; he is mending it`],
      polishing: [`说书人把这一回再润一遍`, `The storyteller goes over the chapter once more`],
      slow: [`路还有一程`, `There is a stretch of road still`],
      ready: [`这一回写好了`, `The chapter is ready`],
      failed: [`经书落了水，字迹洇了，先不拿给你看`, `The scroll fell in the river and the ink ran. Not this time`],
      promise: [`写好了我叫你`, `I'll call you when it's written`],
      help: [`放一朵祥云`, `Let a cloud go`],
      open: [`翻开`, `Open it`],
    },
    plaza: {
      thinking: [`{h}在想给你做什么`, `{h} is deciding what to make you`],
      making: [`{h}正在为你做`, `{h} is making it for you`],
      trying: [`做好了，他先自己玩一遍`, `Done. Trying it once first`],
      mending: [`有个地方不顺手，他在改`, `One part isn't right yet; mending it`],
      polishing: [`{h}在细细收拾最后一遍`, `{h} is giving it one last careful pass`],
      slow: [`比说好的慢一点`, `A little slower than promised`],
      ready: [`做好了`, `It's ready`],
      failed: [`这次没做成，他想再琢磨琢磨，先不拿给你看`, `It didn't come out. They want to think it over first`],
      promise: [`好了我叫你`, `I'll call you`],
      help: [`点一滴颜色`, `Drop a colour`],
      open: [`打开`, `Open it`],
    },
  },
  N = (e) => M[e] || M.plaza,
  P = (t, n, r) => {
    let i = N(t)[n] || M.plaza[n];
    return e(i[0], i[1]).replace(`{h}`, r || e(`他`, `they`));
  },
  F = (e, t = ``) => P(e, `failed`, t);
function I(t, n = ``, r = t?.host?.id || ``) {
  let i = n || t?.host?.name || ``;
  return t
    ? t.status === `ready`
      ? P(r, `ready`, i)
      : t.status === `failed`
        ? P(r, `failed`, i)
        : t.stage === `queued`
          ? t.place > 0
            ? e(`前面还有人在等，一会儿就轮到你`, `Someone is ahead of you; your turn soon`)
            : P(r, `thinking`, i)
          : (t.stage === `making` || t.stage === `polishing`) && t.late
            ? P(r, `slow`, i)
            : P(r, [`thinking`, `making`, `trying`, `mending`, `polishing`].includes(t.stage) ? t.stage : `thinking`, i)
    : P(r, `thinking`, i);
}
function L(t) {
  if (!t || t.status !== `making`) return ``;
  let n = Number(t.eta) || 0;
  return t.stage === `queued`
    ? e(`稍等`, `a moment`)
    : n > 150
      ? e(`还要两三分钟`, `two or three minutes more`)
      : n > 70
        ? e(`还要一两分钟`, `a minute or two more`)
        : n > 25
          ? e(`快好了`, `nearly there`)
          : e(`就快了`, `any moment`);
}
var R = (e, t) =>
  t
    ? e.status === `ready`
      ? t
      : e.stage === `queued` || e.stage === `thinking`
        ? 0
        : e.stage === `trying` || e.stage === `mending` || e.stage === `polishing`
          ? t - 1
          : Math.min(t - 1, Math.floor(((e.progress - 0.12) / 0.72) * t))
    : -1;
function z(
  t = document.body,
  { host: r = ``, hostId: i = ``, onOpen: a = null, onLater: o = null, onClose: s = null } = {},
) {
  let c = document.createElement(`div`);
  ((c.className = `fl fl-wait`),
    (c.innerHTML = `
    <div class="fl-wait-card" role="dialog" aria-live="polite">
      <div class="fl-wait-host">${j(r)}</div>
      <div class="fl-wait-what"></div>
      <div class="fl-wait-title blur">${e(`《……》`, `…`)}</div>
      <div class="fl-wait-line"></div>
      <div class="fl-craft-box"><canvas class="fl-craft" aria-hidden="true"></canvas><span class="fl-craft-hint"></span></div>
      <ul class="fl-steps"></ul>
      <div class="fl-wait-eta"></div>
      <div class="fl-wait-actions"></div>
    </div>`),
    t.appendChild(c),
    requestAnimationFrame(() => requestAnimationFrame(() => c.classList.add(`in`))));
  let l = (e) => c.querySelector(e),
    u = null,
    d = !1,
    f = ``,
    p = null,
    m = ``,
    h = (e) => {
      (m === e && p) ||
        (p?.stop(),
        (m = e),
        (p = A(l(`.fl-craft`), g[e] || `ink`, { palette: u?.palette || [] })),
        (l(`.fl-craft-hint`).textContent = P(e, `help`, r)));
    };
  (c.addEventListener(`craft-help`, () => l(`.fl-craft-box`).classList.add(`helped`)), h(i));
  let _ = (t) => {
    let n = t?.status === `ready`,
      a = t?.status === `failed`;
    l(`.fl-wait-actions`).innerHTML = n
      ? `${o ? `<button class="fl-btn" type="button" data-a="later">${e(`待会儿`, `Later`)}</button>` : ``}<button class="fl-btn main" type="button" data-a="open">${j(P(t.host?.id || i, `open`, r))}</button>`
      : a
        ? `<button class="fl-btn" type="button" data-a="close">${e(`好`, `OK`)}</button>`
        : `<button class="fl-btn" type="button" data-a="${o ? `later` : `close`}">${o ? e(`先逛逛`, `Look around`) : e(`关上`, `Close`)}</button>`;
  };
  c.addEventListener(`click`, (e) => {
    let t = e.target.closest(`[data-a]`)?.dataset.a;
    t === `open` ? (y(), a?.(u)) : t === `later` ? (y(), o?.(u)) : t === `close` && (y(), s?.(u));
  });
  function v(t) {
    if (d || !t) return;
    let a = u;
    u = t;
    let o = t.host?.id || i;
    (h(o),
      c.classList.toggle(`ready`, t.status === `ready`),
      c.classList.toggle(`failed`, t.status === `failed`),
      (l(`.fl-wait-what`).textContent = I(t, r, o)));
    let s = l(`.fl-wait-title`);
    (t.title && t.status !== `failed` && ((s.textContent = e(`《${t.title}》`, t.title)), s.classList.remove(`blur`)),
      (l(`.fl-wait-line`).textContent = t.status === `failed` ? `` : t.line || ``),
      t.status === `ready` ? p.finish() : p.set(t.status === `failed` ? 0 : t.progress || 0.02, t.palette));
    let m = t.status === `failed` ? [] : t.steps || [];
    m.join(`|`) !== f && ((f = m.join(`|`)), (l(`.fl-steps`).innerHTML = m.map((e) => `<li>${j(e)}</li>`).join(``)));
    let g = R(t, m.length);
    c.querySelectorAll(`.fl-steps li`).forEach((e, t) => {
      e.className = t < g ? `did` : t === g ? `now` : ``;
    });
    let v = L(t);
    ((l(`.fl-wait-eta`).textContent =
      t.status === `making` ? `${v ? `${v}${e(`。`, `. `)}` : ``}${P(o, `promise`, r)}${e(`。`, `.`)}` : ``),
      (!a || a.status !== t.status) && _(t),
      t.status === `ready` && a && a.status !== `ready` && n.chime());
  }
  function y() {
    d ||
      ((d = !0),
      c.classList.remove(`in`),
      setTimeout(() => {
        (p?.stop(), c.remove());
      }, 420));
  }
  return (
    _(null),
    {
      el: c,
      update: v,
      close: y,
      get job() {
        return u;
      },
    }
  );
}
var B = (e) =>
    String(e ?? ``).replace(/[&<>"]/g, (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e]),
  V = (t) => (t && t >= 1.75 ? e(`两分钟`, `2 min`) : e(`一分钟`, `1 min`)),
  H = (t) => (t ? e(`《${B(t)}》`, B(t)) : ``),
  U = (e) => e?.host?.name || ``;
async function W({
  root: t = document.body,
  items: r = null,
  space: o = null,
  mine: l = null,
  onClose: u = null,
} = {}) {
  let d = document.createElement(`div`);
  ((d.className = `fl fl-gallery`), d.setAttribute(`role`, `dialog`));
  let f = l?.store?.get() || null,
    p = !!f,
    h = p && f.state !== `none`;
  ((d.innerHTML = `
    <div class="fl-gallery-inner">
      <div class="fl-kicker">${e(`人生广场 · 小东西`, `LIFE PLAZA · SMALL THINGS`)}</div>
      <h2>${h ? e(`当一回你自己`, `Your turn as yourself`) : e(`来过这里的人`, `People who came by`)}</h2>
      <p class="fl-lede">${h ? e(`你在门口说的那一段日子，有人听进去了。最前面这件是为你做的；后面挂着${c().zh}个来过的人，每人也有一件。`, `Someone listened to what you told the gate. The first one here was made for you; after it, ${c().en} people who came by, each with their own.`) : e(`每个人在门口说了一段自己的日子，又走进一段别人的人生；那里的主人为他做了一件小东西。一两分钟，玩完，你会懂他一点。`, `Each of them told the gate a little of their days, then walked into someone else's life — and its owner made them a small thing. A minute or two each; play one and you will know them a little.`)}</p>
      <div class="fl-grid"></div>
      <p class="fl-foot">${h ? `${e(`你的那件，是 AI 照你的话和那段人生现做的，没有人改过；做坏了的不会拿给你。`, `Yours was made by AI just now, from your words and the life you walked; no one has touched it, and a broken one is never shown.`)}<br>` : ``}${e(`后面几位来访者，是照着真实的日子写的示例。每件小东西由 AI 按他们的话和那段人生构思、写成，又逐件改过、在手机上试玩过；引的原文都核对过出处。`, `The visitors after it are examples written from real days. Each small thing was imagined and written by AI from their words and the life they walked into, then reworked piece by piece and played on a phone; every quotation was checked against its source.`)}</p>
    </div>
    <button class="fl-x" type="button" aria-label="${e(`关上`, `Close`)}"></button>`),
    t.appendChild(d));
  let g = d.querySelector(`.fl-grid`),
    _ = (r || (await s())).map(i);
  (o && (_ = [..._.filter((e) => e.space === o), ..._.filter((e) => e.space !== o)]),
    (g.innerHTML = `${p ? `<div class="fl-mine-slot"></div>` : ``}${_.map(
      (t, n) => `
    <button class="fl-card" type="button" data-i="${n}" style="transition-delay:${0.06 * (n + +!!p) + 0.1}s">
      <span class="fl-card-pic">${a(t) ? `<img alt="" loading="lazy" decoding="async" src="${B(a(t))}" />` : ``}<i>${V(t.minutes)}</i></span>
      <b>${e(`《${B(t.title)}》`, B(t.title))}</b>
      ${t.quote ? `<q>${B(t.quote)}</q>` : ``}
      <small>${t.turn ? B(t.turn) : `${B(t.who)} · ${B(e(`在${t.place || t.host?.name || ``}`, `in ${t.place || t.host?.name || ``}`))}`}</small>
    </button>`,
    ).join(``)}`),
    requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add(`in`))));
  let v = null,
    y = !1,
    b = null,
    x = (e) => {
      let n = _[e];
      n &&
        (v = m(n, {
          root: t,
          onNext: _.length > 1 ? () => x((e + 1) % _.length) : null,
          onClose: () => {
            v = null;
          },
        }));
    },
    S = p
      ? G(g.querySelector(`.fl-mine-slot`), l, {
          play: (e) => {
            (v?.close(),
              (v = m(e, {
                root: t,
                mine: !0,
                onNext: _.length ? () => x(0) : null,
                onClose: () => {
                  v = null;
                },
              })));
          },
          wait: (e) => {
            ((b = z(t, {
              host: U(e),
              hostId: e?.host?.id || ``,
              onOpen: (e) => {
                ((b = null), S.play(e));
              },
              onLater: () => {
                b = null;
              },
              onClose: () => {
                b = null;
              },
            })),
              b.update(e));
          },
          glint: (e) => {
            (b || n.chime(), v && K(t, e, () => S.play(e)));
          },
        })
      : null,
    C = p
      ? l.store.on((e) => {
          e.job && b?.update(e.job);
        })
      : null;
  g.addEventListener(`click`, (e) => {
    let t = e.target.closest(`.fl-card[data-i]`);
    t && x(Number(t.dataset.i));
  });
  let w = (e) => {
    e.key === `Escape` && !v && !b && T();
  };
  (addEventListener(`keydown`, w), d.querySelector(`.fl-x`).addEventListener(`click`, () => T()));
  function T() {
    y ||
      ((y = !0),
      v?.close(),
      b?.close(),
      S?.stop(),
      C?.(),
      removeEventListener(`keydown`, w),
      d.classList.remove(`in`),
      setTimeout(() => d.remove(), 460),
      u?.());
  }
  return { close: T, el: d, play: x };
}
function G(t, n, { play: r, wait: i, glint: o }) {
  let s = null,
    c = ``,
    l = null,
    u = () => {
      (s?.stop(), (s = null), (c = ``));
    },
    d = n.quote ? `<q>${B(n.quote)}</q>` : ``,
    f = (f) => {
      let p = f.job,
        m = U(p),
        h = p?.host?.id || f.space || ``,
        _ = l;
      if (((l = f.state), f.state === `ready`)) {
        u();
        let n = a(p);
        ((t.innerHTML = `<button class="fl-card fl-mine ready${_ && _ !== `ready` ? ` glint` : ``}" type="button">
        <span class="fl-card-pic">${n ? `<img alt="" decoding="async" src="${B(n)}" />` : `<span class="fl-mine-plain" style="--a:${B(p.palette?.[0] || `#fbf6ec`)};--b:${B(p.palette?.[1] || `#e8b45c`)}"></span>`}<em>${e(`为你做的`, `Made for you`)}</em><i>${V(p.minutes)}</i></span>
        <b>${H(p.title)}</b>${d}
        <small>${B(e(`${m}为你做的 · 你自己的那一段`, `Made for you by ${m} · your own days`))}</small></button>`),
          t.firstElementChild.addEventListener(`click`, () => r(p)),
          _ && _ !== `ready` && o(p));
        return;
      }
      if (f.state === `making`) {
        (_ !== `making` || c !== h || !s) &&
          (u(),
          (t.innerHTML = `<button class="fl-card fl-mine making" type="button">
          <span class="fl-card-pic"><canvas class="fl-mine-craft" aria-hidden="true"></canvas><span class="fl-mine-ring"><svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="10"></circle><circle class="arc" cx="13" cy="13" r="10" stroke-dasharray="62.8" stroke-dashoffset="60" transform="rotate(-90 13 13)"></circle></svg></span><em>${e(`正在为你做`, `Being made for you`)}</em></span>
          <b class="blur">${e(`《……》`, `…`)}</b>
          <small class="fl-mine-what"></small></button>`),
          (s = A(t.querySelector(`canvas`), g[h] || `ink`, { palette: p?.palette || [] })),
          (c = h),
          t.firstElementChild.addEventListener(`click`, (e) => {
            e.target.closest(`canvas`) || i(n.store.get().job);
          }));
        let r = t.querySelector(`b`);
        (p?.title && ((r.innerHTML = H(p.title)), r.classList.remove(`blur`)),
          (t.querySelector(`.fl-mine-what`).textContent = `${I(p, m, h)}${L(p) ? e(` · ${L(p)}`, ` · ${L(p)}`) : ``}`),
          t
            .querySelector(`.arc`)
            .setAttribute(`stroke-dashoffset`, (62.8 * (1 - Math.max(0.03, p?.progress || 0))).toFixed(1)),
          s.set(p?.progress || 0.02, p?.palette));
        return;
      }
      if ((u(), f.state === `failed`)) {
        ((t.innerHTML = `<div class="fl-card fl-mine failed">
        <span class="fl-card-pic"><span class="fl-mine-note"><b>${e(`这次没做成`, `It didn't come out`)}</b>${B(F(h, m))}</span></span>
        <b>${H(p?.title) || e(`你的那件`, `Yours`)}</b>
        <small>${e(`做坏了的不拿给你看。`, `A broken one is never shown.`)}</small>
        ${n.retry ? `<button class="fl-btn" type="button" data-a="again">${e(`请他再做一次`, `Ask once more`)}</button>` : ``}</div>`),
          t.querySelector(`[data-a=again]`)?.addEventListener(`click`, () => n.retry()));
        return;
      }
      if (f.state === `busy`) {
        let n =
          f.why === `visitor`
            ? e(
                `今天已经为你做过两回，都没做成。明天再来，他会再试。`,
                `He has tried twice today and neither came out. Come back tomorrow and he will try again.`,
              )
            : f.why === `day`
              ? e(
                  `今天作坊里做的小东西太多了，没轮上你。明天再来。`,
                  `The workshop has made too many small things today, and your turn didn't come. Come back tomorrow.`,
                )
              : e(
                  `作坊里排的人多，还没轮上你。过一会儿再回来看看。`,
                  `There's a queue at the workshop and your turn hasn't come yet. Look in again in a little while.`,
                );
        t.innerHTML = `<div class="fl-card fl-mine busy"><span class="fl-card-pic"><span class="fl-mine-note"><b>${e(`还没轮上你`, `Not your turn yet`)}</b>${B(n)}</span></span><b>${e(`你的那件`, `Yours`)}</b></div>`;
        return;
      }
      t.innerHTML = `<div class="fl-card fl-mine none"><span class="fl-card-pic"><span class="fl-mine-note">${e(`走完一段人生，那里的主人会照你在门口说的话，为你做一件。`, `Walk through one life, and its host will make you one from what you told the gate.`)}</span></span><b>${e(`你的那件`, `Yours`)}</b></div>`;
    };
  (f(n.store.get()), requestAnimationFrame(() => t.firstElementChild?.classList.add(`in`)));
  let p = n.store.on(f);
  return {
    stop() {
      (p(), u());
    },
    play: r,
  };
}
function K(t, n, r) {
  let i = document.createElement(`button`);
  ((i.type = `button`),
    (i.className = `fl fl-whisper`),
    (i.innerHTML = `${e(`${B(U(n))}做好了${H(n.title)}`, `${B(U(n))} has finished ${H(n.title)}`)}<span>${e(`看看`, `See it`)}</span>`),
    t.appendChild(i),
    requestAnimationFrame(() => requestAnimationFrame(() => i.classList.add(`in`))));
  let a = () => {
    (i.classList.remove(`in`), setTimeout(() => i.remove(), 500));
  };
  (i.addEventListener(`click`, () => {
    (a(), r());
  }),
    setTimeout(a, 9e3));
}
export { I as a, F as i, z as n, p as o, L as r, m as s, W as t };
