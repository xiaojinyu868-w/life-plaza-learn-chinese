import { t as e } from "./i18n-BvGoRVq5.js";
import { n as t } from "./assets-p2qy6QaX.js";
var n = () =>
    matchMedia(`(pointer: coarse)`).matches ||
    (navigator.maxTouchPoints > 0 && !matchMedia(`(any-pointer: fine)`).matches),
  r = `.sheet-card, .gift-card, .gate-card, .gate.passport, .gx, .talk-chips, .gallery-grid, .fl-gallery, textarea`,
  i = !1;
function a() {
  if (i) return;
  ((i = !0),
    document.addEventListener(
      `touchmove`,
      (e) => {
        e.target.closest?.(r) || e.preventDefault();
      },
      { passive: !1 },
    ),
    document.addEventListener(`gesturestart`, (e) => e.preventDefault()),
    document.addEventListener(`dblclick`, (e) => e.preventDefault()));
  let e = () => !!document.activeElement?.matches?.(`input, textarea, [contenteditable]`),
    t = () => {
      if (e()) return;
      let t = document.scrollingElement || document.documentElement;
      (window.scrollX || window.scrollY || t.scrollTop || document.body.scrollTop) &&
        (window.scrollTo(0, 0), (t.scrollTop = 0), (document.body.scrollTop = 0));
    };
  (document.addEventListener(
    `focusout`,
    () => {
      (setTimeout(t, 60), setTimeout(t, 450));
    },
    !0,
  ),
    window.addEventListener(`scroll`, t, { passive: !0 }),
    window.visualViewport?.addEventListener(`resize`, () => setTimeout(t, 60)));
}
var o = { world: 0, other: 0, last: `` },
  s = !1;
function c(e) {
  s ||
    ((s = !0),
    document.addEventListener(
      `touchstart`,
      (t) => {
        let n = t.target;
        if (n === e) {
          o.world += 1;
          return;
        }
        o.other += 1;
        let r = Math.round(t.changedTouches[0]?.clientY ?? -1);
        o.last = `${n?.tagName?.toLowerCase() || `?`}${n?.classList?.[0] ? `.${n.classList[0]}` : ``}@${r}/${window.innerHeight}`;
      },
      { capture: !0, passive: !0 },
    ));
}
function l() {
  let e = { ...o };
  return ((o.world = 0), (o.other = 0), e);
}
function u(e, { joystickEl: t } = {}) {
  let r = new Set(),
    i = { move: { x: 0, y: 0 }, look: { x: 0, y: 0 }, zoom: 0, dragging: !1, enabled: !0 },
    o = new Set(),
    s = new Set(),
    l = (e) => e && (e.tagName === `INPUT` || e.tagName === `TEXTAREA` || e.isContentEditable),
    u = `ontouchstart` in window,
    d = n();
  (u && a(),
    window.addEventListener(`keydown`, (e) => {
      if (
        !l(e.target) &&
        (r.add(e.code), (e.code === `KeyE` || e.code === `Enter` || e.code === `Space`) && !e.repeat && i.enabled)
      ) {
        e.preventDefault();
        for (let e of s) e();
      }
    }),
    window.addEventListener(`keyup`, (e) => r.delete(e.code)),
    window.addEventListener(`blur`, () => r.clear()));
  let f = new Map(),
    p = null,
    m = null,
    h = !1,
    g = { x: 0, y: 0 },
    _ = t?.querySelector(`i`),
    v = () => {
      t &&
        (t.classList.toggle(`off`, !(d && h && i.enabled)),
        t.classList.toggle(`active`, !!p),
        t.classList.toggle(`run`, !!p?.run),
        (t.style.left = p ? `${p.cx}px` : ``),
        (t.style.top = p ? `${p.cy}px` : ``),
        _ && (_.style.transform = p ? `translate(${p.x * 60}px, ${-p.y * 60}px)` : ``));
    },
    y = (e, t) => {
      let n = e - p.cx,
        r = t - p.cy,
        i = Math.hypot(n, r);
      if (((p.run = i > 75), i < 6)) {
        ((p.x = 0), (p.y = 0));
        return;
      }
      (i > 60 && ((n *= 60 / i), (r *= 60 / i)), (p.x = n / 60), (p.y = -r / 60));
    },
    b = () => [...f.values()].filter((e) => e.touch && !e.joy),
    x = () => {
      let e = b();
      m = e.length === 2 ? { d: Math.hypot(e[0].x - e[1].x, e[0].y - e[1].y) } : null;
    };
  function S(e, n, r, a) {
    if (!i.enabled) return;
    a && !d && ((d = !0), document.body.classList.add(`touch`));
    let o = {
      id: e,
      x0: n,
      y0: r,
      x: n,
      y: r,
      t0: performance.now(),
      moved: 0,
      touch: a,
      joy: !1,
      onRing: !1,
      trail: [],
    };
    if (
      (f.set(e, o), (g.x = 0), (g.y = 0), a && !p && h && n < window.innerWidth * 0.48 && r > window.innerHeight * 0.3)
    ) {
      let i = t?.getBoundingClientRect(),
        a = i ? i.left + i.width / 2 : n,
        s = i ? i.top + i.height / 2 : r;
      ((o.onRing = !!i && i.width > 0 && Math.hypot(n - a, r - s) < i.width * 0.75),
        (p = { id: e, cx: o.onRing ? a : n, cy: o.onRing ? s : r, x: 0, y: 0, run: !1 }),
        (o.joy = !0),
        o.onRing && y(n, r));
    }
    (x(), v());
  }
  function C(e, n, r) {
    let a = f.get(e);
    if (!a) return;
    let o = n - a.x,
      s = r - a.y;
    if (((a.x = n), (a.y = r), (a.moved += Math.abs(o) + Math.abs(s)), a.joy)) {
      p?.id === e && (y(n, r), v(), a.moved > 30 && t?.classList.add(`used`));
      return;
    }
    if (m) {
      let e = b();
      if (e.length === 2) {
        let t = Math.hypot(e[0].x - e[1].x, e[0].y - e[1].y);
        ((i.zoom += (m.d - t) * 0.012), (m.d = t));
        return;
      }
    }
    if (a.moved > (a.touch ? 10 : 6)) {
      let e = a.touch ? 1.3 : 0.62;
      ((i.dragging = !0), (i.look.x += o * e), (i.look.y += s * e));
      let t = performance.now();
      for (a.trail.push({ t, dx: o * e, dy: s * e }); a.trail.length && t - a.trail[0].t > 100;) a.trail.shift();
    }
  }
  function w(e, t, n, r) {
    let a = f.get(e);
    if (!a) return;
    (f.delete(e), a.joy && p?.id === e && ((p = null), v()), x());
    let s = performance.now() - a.t0 < 450;
    if (!r && i.enabled && s && a.moved <= (a.touch ? 16 : 8) && !a.onRing && f.size === 0) for (let e of o) e(t, n);
    else if (a.touch && !a.joy && a.trail.length > 1) {
      let e = Math.max(16, performance.now() - a.trail[0].t);
      ((g.x = (a.trail.reduce((e, t) => e + t.dx, 0) / e) * 1e3 * 0.4),
        (g.y = (a.trail.reduce((e, t) => e + t.dy, 0) / e) * 1e3 * 0.12));
    }
    [...f.values()].some((e) => !e.joy) || (i.dragging = !1);
  }
  if (
    (e.addEventListener(`pointerdown`, (t) => {
      if (!(t.pointerType === `touch` && u)) {
        try {
          e.setPointerCapture(t.pointerId);
        } catch {}
        (t.pointerType === `mouse` && e.classList.add(`grabbing`),
          S(`p${t.pointerId}`, t.clientX, t.clientY, t.pointerType === `touch`));
      }
    }),
    e.addEventListener(`pointermove`, (e) => {
      (e.pointerType === `touch` && u) || C(`p${e.pointerId}`, e.clientX, e.clientY);
    }),
    e.addEventListener(`pointerup`, (t) => {
      (e.classList.remove(`grabbing`),
        (t.pointerType === `touch` && u) || w(`p${t.pointerId}`, t.clientX, t.clientY, !1));
    }),
    e.addEventListener(`pointercancel`, (t) => {
      (e.classList.remove(`grabbing`),
        (t.pointerType === `touch` && u) || w(`p${t.pointerId}`, t.clientX, t.clientY, !0));
    }),
    u)
  ) {
    c(e);
    let t = (e, t) => {
        for (let n of e.changedTouches) t(`t${n.identifier}`, n.clientX, n.clientY);
      },
      n = (t) => t.target === e || t.target === document.body || t.target === document.documentElement;
    (document.addEventListener(
      `touchstart`,
      (e) => {
        n(e) && (e.preventDefault(), t(e, (e, t, n) => S(e, t, n, !0)));
      },
      { passive: !1 },
    ),
      document.addEventListener(
        `touchmove`,
        (e) => {
          n(e) && (e.preventDefault(), t(e, C));
        },
        { passive: !1 },
      ),
      document.addEventListener(
        `touchend`,
        (e) => {
          n(e) && (e.preventDefault(), t(e, (e, t, n) => w(e, t, n, !1)));
        },
        { passive: !1 },
      ),
      document.addEventListener(
        `touchcancel`,
        (e) => {
          n(e) && t(e, (e, t, n) => w(e, t, n, !0));
        },
        { passive: !1 },
      ));
  }
  return (
    e.addEventListener(
      `wheel`,
      (e) => {
        if ((e.preventDefault(), !i.enabled)) return;
        let t = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1,
          n = e.deltaX * t,
          r = e.deltaY * t;
        if (!e.ctrlKey && Math.abs(n) > Math.abs(r)) {
          i.look.x -= n * 0.6;
          return;
        }
        i.zoom += Math.sign(r) * Math.min(0.6, Math.abs(r) / 60);
      },
      { passive: !1 },
    ),
    e.addEventListener(`contextmenu`, (e) => e.preventDefault()),
    v(),
    {
      state: i,
      get touch() {
        return d;
      },
      readMove() {
        let e = 0,
          t = 0;
        ((r.has(`KeyW`) || r.has(`ArrowUp`)) && (t += 1),
          (r.has(`KeyS`) || r.has(`ArrowDown`)) && --t,
          (r.has(`KeyA`) || r.has(`ArrowLeft`)) && --e,
          (r.has(`KeyD`) || r.has(`ArrowRight`)) && (e += 1),
          !e && !t && p && ((e = p.x), (t = p.y)));
        let n = Math.hypot(e, t);
        return (n > 1 && ((e /= n), (t /= n)), (i.move.x = i.enabled ? e : 0), (i.move.y = i.enabled ? t : 0), i.move);
      },
      takeLook(e = 1 / 60) {
        let t = { x: i.look.x + g.x * e, y: i.look.y + g.y * e };
        ((i.look.x = 0), (i.look.y = 0));
        let n = Math.exp(-e * 5);
        return ((g.x *= n), (g.y *= n), Math.abs(g.x) + Math.abs(g.y) < 4 && ((g.x = 0), (g.y = 0)), t);
      },
      takeZoom() {
        let e = i.zoom;
        return ((i.zoom = 0), e);
      },
      running: () => r.has(`ShiftLeft`) || r.has(`ShiftRight`) || !!p?.run,
      get steering() {
        return (
          (!!p && (p.x !== 0 || p.y !== 0)) ||
          [`KeyW`, `KeyA`, `KeyS`, `KeyD`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`].some((e) => r.has(e))
        );
      },
      onTap(e) {
        return (o.add(e), () => o.delete(e));
      },
      onAction(e) {
        return (s.add(e), () => s.delete(e));
      },
      setEnabled(e) {
        ((i.enabled = e), e || (r.clear(), (p = null), (g.x = 0), (g.y = 0)), v());
      },
      setControls(e) {
        h !== e && ((h = e), e || (p = null), v());
      },
    }
  );
}
function d(n) {
  let r = document.createElement(`div`);
  ((r.className = `lifecard`),
    (r.innerHTML = `<img alt="" /><div class="lifecard-body"><div class="lifecard-name"></div><div class="lifecard-meta"></div><div class="lifecard-who"></div><div class="lifecard-you"></div><div class="lifecard-hook"></div><button class="lifecard-go" type="button"></button></div>`),
    n.appendChild(r));
  let i = r.querySelector(`img`),
    a = r.querySelector(`.lifecard-you`),
    o = r.querySelector(`.lifecard-hook`);
  i.addEventListener(`error`, () => {
    i.hidden = !0;
  });
  let s = null,
    c = null;
  r.querySelector(`.lifecard-go`).addEventListener(`click`, () => {
    s?.open && c && c(s);
  });
  let l = (e) => {
    ((a.textContent = e || ``), r.classList.toggle(`for-you`, !!e));
  };
  return {
    show(n, a, { line: u = null } = {}) {
      if (s?.id === n.id && r.classList.contains(`show`)) return;
      ((s = n),
        (c = a),
        (i.hidden = !n.portrait),
        n.portrait && (i.src = t(n.portrait)),
        (r.querySelector(`.lifecard-name`).textContent = n.name));
      let d = r.querySelector(`.lifecard-meta`);
      d.textContent = ``;
      for (let e of String(n.meta || ``).replace(
        / · /g,
        ` · 
`,
      ).split(`
`)) {
        let t = document.createElement(`span`);
        ((t.textContent = e), d.append(t));
      }
      ((r.querySelector(`.lifecard-who`).textContent = n.who || ``), (o.textContent = n.hook), l(u));
      let f = r.querySelector(`.lifecard-go`);
      ((f.textContent = n.go || (n.open ? e(`走进他的一生`, `Walk into his life`) : e(`即将开放`, `Opening soon`))),
        (f.disabled = !n.open),
        r.classList.toggle(`soon`, !n.open),
        r.classList.add(`show`));
    },
    setLine(e, t) {
      s?.id === e && l(t);
    },
    hide() {
      (r.classList.remove(`show`), (s = null));
    },
    get current() {
      return s;
    },
  };
}
function f(e) {
  let t = document.createElement(`div`);
  ((t.className = `iris`), e.appendChild(t));
  let n = (e, n = 50, r = 50) => {
      (t.style.setProperty(`--r`, `${e}px`), t.style.setProperty(`--x`, `${n}%`), t.style.setProperty(`--y`, `${r}%`));
    },
    r = () => Math.hypot(window.innerWidth, window.innerHeight);
  n(r());
  let i = (e, r, i, a, o) =>
    new Promise((s) => {
      t.classList.add(`on`);
      let c = performance.now(),
        l = (u) => {
          let d = Math.min(1, (u - c) / i),
            f = d < 0.5 ? 2 * d * d : 1 - (-2 * d + 2) ** 2 / 2;
          (n(e + (r - e) * f, a, o), d < 1 ? requestAnimationFrame(l) : (r > 0 && t.classList.remove(`on`), s()));
        };
      requestAnimationFrame(l);
    });
  return {
    close: (e = 900, t = 50, n = 50) => i(r(), 0, e, t, n),
    open: (e = 1100, t = 50, a = 50) => (n(0, t, a), i(0, r(), e, t, a)),
    black() {
      (t.classList.add(`on`), n(0));
    },
  };
}
export { l as a, n as i, d as n, u as r, f as t };
