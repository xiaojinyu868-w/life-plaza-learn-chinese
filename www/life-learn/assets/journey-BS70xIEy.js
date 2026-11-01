import {
  $r as e,
  Hn as t,
  Ii as n,
  L as r,
  Li as i,
  Qi as a,
  R as o,
  Rn as s,
  U as c,
  Wi as l,
  Wr as u,
  Yn as d,
  Zn as f,
  ar as p,
  ba as m,
  ft as h,
  ia as g,
  io as _,
  ir as v,
  jr as y,
  mr as b,
  no as x,
  or as S,
  pa as C,
  qt as w,
  ra as T,
  ro as E,
  s as D,
  ta as O,
  tr as k,
  ya as A,
} from "./three.core-DtjtRha-.js";
import { i as j } from "./lifecard-Bz8CsM4Y.js";
import { n as M } from "./me-CiQWAPxS.js";
import { a as N, n as P, t as F } from "./i18n-BvGoRVq5.js";
import { c as I, i as L, n as R, r as z, s as B, t as V } from "./assets-p2qy6QaX.js";
import { t as H } from "./preload-helper-B4-B-RAC.js";
import { a as U, i as W, o as G } from "./visits-C_j5CG_Y.js";
import { t as ee } from "./mic-DTF0YIPs.js";
function te({
  avatar: e,
  bounds: t = null,
  disc: n = null,
  colliders: r = [],
  blockers: i = [],
  people: a = null,
  radius: o = 0.28,
  speed: s = 1.4,
  runScale: c = 1.45,
  longWalk: l = 1.3,
  heightAt: u = null,
  floor: d = null,
  sight: f = null,
}) {
  let p = new E(),
    m = new E(),
    h = 0,
    g = 0,
    _ = null,
    v = null,
    y = [],
    b = null,
    x = 1,
    S = !1,
    C = !1,
    w = 1 / 0,
    T = 0,
    D = 0,
    O = new E(),
    A = new E(),
    j = new E();
  function M(e) {
    if ((t && ((e.x = k.clamp(e.x, t.minX + o, t.maxX - o)), (e.z = k.clamp(e.z, t.minZ + o, t.maxZ - o))), n)) {
      let t = n.x || 0,
        r = n.z || 0,
        i = e.x - t,
        a = e.z - r,
        s = Math.hypot(i, a) || 1e-6,
        c = n.r - o,
        l = n.pier,
        u = l && Math.abs(e.x - l.x) <= l.hw - o && e.z >= l.z0 && e.z <= l.z1 - o;
      if (s > c && !u) {
        let n = t + (i / s) * c,
          u = r + (a / s) * c;
        if (l) {
          let t = k.clamp(e.x, l.x - l.hw + o, l.x + l.hw - o),
            r = k.clamp(e.z, l.z0, l.z1 - o);
          (e.x - t) ** 2 + (e.z - r) ** 2 < (e.x - n) ** 2 + (e.z - u) ** 2 && ((n = t), (u = r));
        }
        ((e.x = n), (e.z = u));
      }
    }
    for (let t of r) {
      let n = e.x - t.x,
        r = e.z - t.z,
        i = Math.hypot(n, r),
        a = t.r + o;
      i < a && i > 1e-5 && ((e.x = t.x + (n / i) * a), (e.z = t.z + (r / i) * a));
    }
    if (a)
      for (let t of a) {
        let n = e.x - t.x,
          r = e.z - t.z,
          i = Math.hypot(n, r),
          a = t.r + o;
        i < a && i > 1e-5 && ((e.x = t.x + (n / i) * a), (e.z = t.z + (r / i) * a));
      }
    for (let t of i) {
      let n = t.minX - o,
        r = t.maxX + o,
        i = t.minZ - o,
        a = t.maxZ + o;
      if (e.x > n && e.x < r && e.z > i && e.z < a) {
        let t = [e.x - n, r - e.x, e.z - i, a - e.z],
          o = t.indexOf(Math.min(...t));
        o === 0 ? (e.x = n) : o === 1 ? (e.x = r) : (e.z = o === 2 ? i : a);
      }
    }
    return e;
  }
  let N = () => {
      let e = v?.onArrive;
      ((v = null), (y = []), (x = 1), e?.());
    },
    P = () => {
      ((w = 1 / 0), (T = 0));
    };
  return {
    position: p,
    velocity: m,
    get heading() {
      return h;
    },
    set heading(e) {
      ((h = e), (_ = null));
    },
    get moving() {
      return m.lengthSq() > 0.04;
    },
    get walking() {
      return !!v;
    },
    get aim() {
      return v ? y[0] || v.point : null;
    },
    get detouring() {
      return !!v && !!b && y[0] === b;
    },
    get held() {
      return C;
    },
    speed: s,
    colliders: r,
    blockers: i,
    radius: o,
    place(t, n, r = h) {
      (p.set(t, 0, n),
        M(p),
        (p.y = u ? u(p.x, p.z) : 0),
        (h = r),
        (_ = null),
        (g = 0),
        m.set(0, 0, 0),
        e.object.position.copy(p),
        (e.object.rotation.y = h));
    },
    setAvatar(t) {
      ((e = t), e.object.position.copy(p), (e.object.rotation.y = h));
    },
    setSight(e) {
      f = e;
    },
    get avatar() {
      return e;
    },
    walkTo(e, t) {
      ((y = []), (x = 1), P(), (v = { point: e.clone().setY(0), onArrive: t }));
    },
    skip() {
      v && (y.length ? (y.shift(), P()) : N());
    },
    detour(e) {
      v && (b && y[0] === b && y.shift(), (b = e.clone().setY(0)), y.unshift(b), P());
    },
    walkPath(e, t) {
      if (!e?.length) {
        t?.();
        return;
      }
      let n = 0,
        r = p;
      for (let t of e) ((n += Math.hypot(t.x - r.x, t.z - r.z)), (r = t));
      ((y = e.slice(0, -1).map((e) => e.clone().setY(0))),
        (v = { point: e[e.length - 1].clone().setY(0), onArrive: t }),
        (x = n > 9 ? l : 1),
        P());
    },
    stop() {
      ((v = null), (y = []), (x = 1), (g = 0), m.set(0, 0, 0));
    },
    freeze(e) {
      ((S = e), e && this.stop());
    },
    hold(e) {
      C = e;
    },
    nudge(e, t) {
      ((p.x += e), (p.z += t), M(p));
    },
    faceToward(e, t) {
      Math.hypot(e - p.x, t - p.z) > 0.05 && (_ = Math.atan2(e - p.x, t - p.z));
    },
    update(t, n, r, i = !1) {
      j.set(0, 0, 0);
      let a = s;
      if (!S && !C) {
        if (n.x || n.y)
          ((v = null),
            (y = []),
            (x = 1),
            (_ = null),
            O.set(-Math.sin(r), 0, -Math.cos(r)),
            A.set(-O.z, 0, O.x),
            j.addScaledVector(O, n.y).addScaledVector(A, n.x),
            i && (a = s * c));
        else if (v) {
          for (; y.length && Math.hypot(y[0].x - p.x, y[0].z - p.z) < 0.25;) (y.shift(), P());
          if (f && y.length && (D -= t) <= 0)
            for (D = 0.1; y.length && y[0] !== b && f(p, y[1] || v.point);) (y.shift(), P());
          let e = y.length ? y[0] : v.point;
          j.subVectors(e, p).setY(0);
          let n = j.length();
          (n < w - 0.04 ? ((w = n), (T = 0)) : (T += t),
            T > 0.9
              ? y.length
                ? (y.shift(), P())
                : (N(), j.set(0, 0, 0))
              : !y.length && n < 0.12
                ? (N(), j.set(0, 0, 0))
                : j.multiplyScalar((y.length ? 1 : Math.min(1, 0.25 + n / 0.5)) / Math.max(n, 1e-5)),
            (a = s * x));
        }
      }
      if (j.lengthSq() > 1e-6) {
        _ = null;
        let e = Math.atan2(j.x, j.z) - h;
        e = Math.atan2(Math.sin(e), Math.cos(e));
        let r = e * (1 - Math.exp(-t * 10));
        (v && !(n.x || n.y) && !(b && y[0] === b) && (r = k.clamp(r, -4.5 * t, 4.5 * t)), (h += r));
        let i = j.length() * k.clamp((Math.cos(e) + 0.4) / 1.4, 0.08, 1);
        j.set(Math.sin(h), 0, Math.cos(h)).multiplyScalar(i);
      } else if (_ !== null) {
        let e = _ - h;
        ((e = Math.atan2(Math.sin(e), Math.cos(e))),
          (h += e * (1 - Math.exp(-t * 7))),
          Math.abs(e) < 0.01 && (_ = null));
      }
      let o = j.length() * a;
      ((g += (o - g) * (1 - Math.exp(-t * (o < g ? 16 : 9)))),
        g < 0.01 && (g = 0),
        m.set(Math.sin(h) * g, 0, Math.cos(h) * g));
      let l = p.x,
        E = p.z;
      if ((p.addScaledVector(m, t), M(p), d)) {
        let e = d.step({ x: l, z: E }, p);
        ((p.x = e.x), (p.z = e.z));
      }
      (u && (p.y += (u(p.x, p.z) - p.y) * (1 - Math.exp(-t * 14))),
        e.object.position.copy(p),
        (e.object.rotation.y = h));
      let F = Math.hypot(p.x - l, p.z - E) / Math.max(t, 1e-4);
      e.setMotion(F / s, t, F);
    },
  };
}
function ne(
  e,
  {
    box: t,
    height: r = 1.35,
    distance: i = 4.2,
    minDistance: a = 1.8,
    maxDistance: o = 8.5,
    obstacles: s = [],
    groundAt: c = null,
    rayHit: l = null,
    inside: u = null,
    minReach: d = 0.9,
    eyeHeight: f = 1.5,
    lookAhead: p = 1,
    pitchBoost: m = 0.14,
    portraitPull: h = 0.22,
    framePull: g = 0.75,
    onMode: _ = null,
  },
) {
  let v = Math.PI,
    y = 0.32,
    b = v,
    x = y,
    S = 0.08,
    C = i,
    w = `third`,
    T = 0,
    D = null,
    O = 0,
    A = -1 / 0,
    j = 0,
    M = null,
    N = 99,
    P = i,
    F = new E(),
    I = new E(),
    L = new E(),
    R = new E(),
    z = new E(),
    B = new E(),
    V = new E(),
    H = new n(),
    U = new E(),
    W = !0,
    G = () => k.clamp((1.15 - e.aspect) / 0.7, 0, 1),
    ee = (e) => e.x >= t.minX && e.x <= t.maxX && e.z >= t.minZ && e.z <= t.maxZ && e.y <= t.maxY,
    te = (e) => (
      (e.x = k.clamp(e.x, t.minX + 0.35, t.maxX - 0.35)),
      (e.y = k.clamp(e.y, 0.4, t.maxY - 0.3)),
      (e.z = k.clamp(e.z, t.minZ + 0.35, t.maxZ - 0.35)),
      c && (e.y = Math.max(e.y, c(e.x, e.z) + 0.45)),
      e
    ),
    ne = (e, t, n) => {
      let r = n;
      if (s.length) {
        (H.origin.copy(e), H.direction.copy(t));
        for (let t of s) H.intersectBox(t, U) && (r = Math.min(r, Math.max(0.9, U.distanceTo(e) - 0.35)));
      }
      if (l) {
        let n = l(e, [t.x, t.y, t.z], r + 0.3);
        n != null && (r = Math.min(r, n - 0.3));
      }
      if (u) {
        for (let n = 0.1; n <= r; n += 0.1)
          if (!u(e.x + t.x * n, e.z + t.z * n)) {
            r = Math.min(r, n - 0.22);
            break;
          }
      }
      return r;
    };
  function re(e) {
    let n = G(),
      r = k.clamp(y + n * m, 0.05, 1.15),
      i = C * (1 + n * h),
      a = Math.sin(v) * Math.cos(r),
      o = Math.sin(r),
      s = Math.cos(v) * Math.cos(r);
    V.set(a, o, s);
    let c = i,
      l = 0.35;
    return (
      a > 1e-4 ? (c = Math.min(c, (t.maxX - l - e.x) / a)) : a < -1e-4 && (c = Math.min(c, (t.minX + l - e.x) / a)),
      s > 1e-4 ? (c = Math.min(c, (t.maxZ - l - e.z) / s)) : s < -1e-4 && (c = Math.min(c, (t.minZ + l - e.z) / s)),
      o > 1e-4 && (c = Math.min(c, (t.maxY - 0.3 - e.y) / o)),
      Math.max(ne(e, V, c), d)
    );
  }
  function ie(e, t, n, r) {
    if ((n.set(e.x + V.x * t, e.y + V.y * t, e.z + V.z * t), te(n), r)) {
      let n = p * G() * Math.min(1, t / Math.max(C, 0.001));
      r.set(e.x - Math.sin(v) * n, e.y, e.z - Math.cos(v) * n);
    }
    return n;
  }
  function ae(e, t, n) {
    return (I.copy(e), (I.y += r), ie(I, re(I), t, n));
  }
  function oe(e, t) {
    let n = G(),
      r = e.clone();
    if (n <= 0) return r;
    let i = r.clone().sub(t),
      a = i.length();
    if (a < 0.001) return r;
    i.divideScalar(a);
    let o = Math.max(a, ne(t, i, a * (1 + n * g))),
      s = t.clone().addScaledVector(i, o);
    return ee(e) ? te(s) : s;
  }
  function K(e, t = !0) {
    e !== w &&
      ((w = e),
      (T = 0),
      w === `first` ? (S = k.clamp(y - 0.25, -0.2, 0.5)) : ((C = Math.min(o, a + 0.8)), (y = x = 0.3), (N = 0)),
      _?.(w, t));
  }
  return {
    get yaw() {
      return v;
    },
    set yaw(e) {
      v = b = e;
    },
    get pitch() {
      return y;
    },
    set pitch(e) {
      y = x = e;
    },
    get distance() {
      return C;
    },
    set distance(e) {
      C = k.clamp(e, a, o);
    },
    get mode() {
      return w;
    },
    set mode(e) {
      K(e === `first` ? `first` : `third`);
    },
    get portrait() {
      return G();
    },
    setBox(e) {
      Object.assign(t, e);
    },
    get overriding() {
      return !!M;
    },
    get lastLook() {
      return A;
    },
    frame(t, n, { cut: r = !1, fit: i = !r, soft: a = !1 } = {}) {
      (a && performance.now() - A < 2500) ||
        ((M = { position: i ? oe(t, n) : t.clone(), target: n.clone(), soft: a }),
        r && (e.position.copy(M.position), z.copy(M.target), e.lookAt(z)));
    },
    release() {
      M && ((M = null), (N = 0));
    },
    restPose(e) {
      if (w === `first`)
        return {
          position: e.clone().setY(e.y + f),
          look: e.clone().set(e.x - Math.sin(v), e.y + f - S, e.z - Math.cos(v)),
        };
      let t = new E();
      return { position: ae(e, new E(), t), look: t };
    },
    update(t, n, i) {
      let s = i.takeLook(t),
        c = i.takeZoom();
      ((s.x || s.y) &&
        ((b -= s.x * 0.005),
        w === `first` ? (S += s.y * 0.004) : (x += s.y * 0.004),
        (O = -2.4),
        (A = performance.now()),
        M?.soft && ((M = null), (N = 0))),
        (x = k.clamp(x, 0.05, 1.05)),
        (S = k.clamp(S, -0.7, 0.85)));
      let l = 1 - Math.exp(-t * 26);
      if (((v += (b - v) * l), (y += (x - y) * l), c)) {
        if (w === `first`) ((T = c > 0 ? T + c : 0), T > 0.5 && K(`third`));
        else {
          let e = C + c * 0.5;
          (e < a && c < 0 ? ((T -= c), T > 1.1 && K(`first`)) : (T = 0), (C = k.clamp(e, a, o)));
        }
      }
      let u = n.avatar?.object;
      if (M) {
        ((D &&= ((D.visible = !0), null)),
          e.position.lerp(M.position, 1 - Math.exp(-t * 3)),
          z.lerp(M.target, 1 - Math.exp(-t * 3)),
          e.lookAt(z),
          F.copy(n.position).setY(n.position.y + r));
        return;
      }
      if (w === `first`) {
        u && u.visible && ((u.visible = !1), (D = u));
        let i = n.velocity?.length() || 0;
        j += t * i * 5.2;
        let a = i > 0.2 ? Math.sin(j) * 0.022 : 0;
        (B.set(n.position.x, n.position.y + f + a, n.position.z),
          e.position.lerp(B, W ? 1 : 1 - Math.exp(-t * 16)),
          R.set(
            e.position.x - Math.sin(v) * Math.cos(S),
            e.position.y - Math.sin(S),
            e.position.z - Math.cos(v) * Math.cos(S),
          ),
          z.copy(R),
          e.lookAt(R),
          F.copy(n.position).setY(n.position.y + r),
          (W = !1));
        return;
      }
      if (((D &&= ((D.visible = !0), null)), n.walking && n.moving && !i.state.dragging && !i.steering)) {
        if (((O += t), O > 0.6)) {
          let e = n.heading + Math.PI - b;
          ((e = Math.atan2(Math.sin(e), Math.cos(e))), (b += e * (1 - Math.exp(-t * 1.1))));
        }
      } else n.walking || (O = 0);
      let d = n.position.x,
        p = n.position.y + r,
        m = n.position.z;
      if (W) F.set(d, p, m);
      else {
        let e = 1 - Math.exp(-t * 16),
          n = 1 - Math.exp(-t * 7);
        ((F.x += (d - F.x) * e), (F.z += (m - F.z) * e), (F.y += (p - F.y) * n));
      }
      let h = re(F);
      if ((W || h < P ? (P = h) : (P += (h - P) * (1 - Math.exp(-t * 3))), ie(F, P, L, R), W || N > 1.4))
        (e.position.copy(L), z.copy(R));
      else {
        N += t;
        let n = 1 - Math.exp(-t * (3 + N * 40));
        (e.position.lerp(L, n), z.lerp(R, n));
      }
      (e.lookAt(z), (W = !1));
    },
  };
}
function re({ camera: e, canvas: t, player: n, input: r, promptEl: a, actionEl: o = null, route: s = null }) {
  let c = [],
    l = new i(),
    u = new x(),
    d = new E(),
    f = null,
    p = !1,
    m = null,
    h = null,
    g = `do`,
    _ = o?.querySelector(`.act-label`);
  function v() {
    let e = null,
      t = 1 / 0;
    for (let r of c) {
      if (r.enabled && !r.enabled()) continue;
      let i = Math.hypot(n.position.x - r.position.x, n.position.z - r.position.z);
      i < r.radius && i < t && ((e = r), (t = i));
    }
    return e;
  }
  function y(e) {
    e && !p && (navigator.vibrate?.(12), e.activate());
  }
  function b(e) {
    if (!e || p) return;
    let t = Math.hypot(n.position.x - e.position.x, n.position.z - e.position.z);
    if (e.standAt ? Math.hypot(n.position.x - e.standAt.x, n.position.z - e.standAt.z) < 0.6 : t < e.radius) {
      y(e);
      return;
    }
    let r = e.standAt || e.position.clone().lerp(n.position, Math.min(0.9, (e.radius * 0.6) / Math.max(t, 0.01))),
      i = () => {
        (n.faceToward(e.position.x, e.position.z), y(e));
      };
    s ? n.walkPath(s(n.position, r), i) : n.walkTo(r, i);
  }
  (r.onAction(() => b(f)),
    a?.addEventListener(`click`, (e) => {
      (e.preventDefault(), e.stopPropagation(), b(f));
    }),
    o?.addEventListener(`click`, (e) => {
      (e.preventDefault(), e.stopPropagation(), b(g === `go` && h ? h.item : f));
    }));
  function S(n, r) {
    let i = t.getBoundingClientRect();
    (u.set(((n - i.left) / i.width) * 2 - 1, -((r - i.top) / i.height) * 2 + 1), l.setFromCamera(u, e));
    let a = c
        .filter((e) => e.meshes && (!e.enabled || e.enabled()))
        .flatMap((e) => e.meshes.map((t) => ({ m: t, it: e }))),
      o = l.intersectObjects(
        a.map((e) => e.m),
        !0,
      );
    if (!o.length) return null;
    let s = o[0].object;
    for (; s;) {
      let e = a.find((e) => e.m === s);
      if (e) return { item: e.it, distance: o[0].distance };
      s = s.parent;
    }
    return null;
  }
  let C = () => {
      (a?.classList.remove(`show`), o?.classList.remove(`show`));
    },
    w = (e, t, n = ``) => {
      if (!o) return;
      g !== e && ((g = e), o.classList.toggle(`go`, e === `go`));
      let r = n ? `${n}\n${t}` : t;
      if (_ && _.dataset.text !== r && ((_.dataset.text = r), (_.textContent = t), n)) {
        let e = document.createElement(`small`);
        ((e.className = `act-kicker`), (e.textContent = n), _.prepend(e));
      }
      o.classList.add(`show`);
    };
  return {
    items: c,
    add(e) {
      let t = { radius: 1.6, labelHeight: 2, ...e };
      return (c.push(t), t);
    },
    remove(e) {
      let t = c.findIndex((t) => t.id === e);
      t >= 0 && c.splice(t, 1);
    },
    setBusy(e) {
      ((p = e), e && C());
    },
    setGuide(e) {
      m = e;
    },
    approach: b,
    tap(e, t) {
      if (p) return !0;
      let n = S(e, t);
      return n ? (b(n.item), !0) : !1;
    },
    update() {
      if (((f = p ? null : v()), !a)) return;
      h = null;
      let t = !1;
      if (!f || f.done?.() || f.aside) {
        let e = !p && m && !n.walking ? m() : null;
        ((t = !!e?.hold), e?.item && e.item !== f && ((h = e), w(`go`, h.label, F(`下一站`, `Next`))));
      }
      if (!f) {
        (a.classList.remove(`show`), h || o?.classList.remove(`show`));
        return;
      }
      let r = typeof f.label == `function` ? f.label() : f.label;
      if (
        (a.dataset.text !== r && ((a.dataset.text = r), (a.querySelector(`.prompt-text`).textContent = r)),
        !h && !t && !f.done?.() ? w(`do`, r) : h || o?.classList.remove(`show`),
        d.copy(f.position),
        (d.y = f.labelHeight),
        d.project(e),
        d.z > 1)
      ) {
        a.classList.remove(`show`);
        return;
      }
      let i = k.clamp((d.x * 0.5 + 0.5) * window.innerWidth, 70, window.innerWidth - 70),
        s = k.clamp((-d.y * 0.5 + 0.5) * window.innerHeight, 90, window.innerHeight - 40);
      ((a.style.transform = `translate(${i}px, ${s}px) translate(-50%, -100%)`), a.classList.add(`show`));
    },
    get current() {
      return f;
    },
    get busy() {
      return p;
    },
  };
}
var ie = Object.freeze({
    "models/chars/vangogh.glb": Object.freeze({ eyes: !0, mouth: !0 }),
    "models/chars/lishizhen.glb": Object.freeze({ eyes: !0, mouth: !1, skin: 20 }),
    "models/chars/v4.glb": Object.freeze({ eyes: !0, mouth: !0 }),
    "models/chars/v5.glb": Object.freeze({ eyes: !0, mouth: !0 }),
    "models/chars/v8.glb": Object.freeze({ eyes: !0, mouth: !0 }),
    "models/chars/v3.glb": Object.freeze({ eyes: !1, mouth: !0, skin: 24 }),
    "models/chars/v6.glb": Object.freeze({ eyes: !1, mouth: !0 }),
    "models/chars/v7.glb": Object.freeze({ eyes: !1, mouth: !0 }),
  }),
  ae = null,
  oe = () => (ae ||= H(() => import(`./tripoFace-DHIBECeK.js`), [])),
  K = Object.freeze({
    Color: c,
    DataTexture: h,
    LinearFilter: s,
    LinearMipmapLinearFilter: t,
    NoColorSpace: ``,
    RGBAFormat: e,
    SRGBColorSpace: a,
    Vector3: E,
    Vector4: _,
  }),
  se = (e) => Math.min(1, Math.max(0, Number(e) || 0));
function ce(e, t, n) {
  let r = e.geometry,
    i = (e, t) => {
      if (!e) return null;
      if (!e.isInterleavedBufferAttribute && !e.normalized && e.itemSize === t && e.array instanceof Float32Array)
        return e.array;
      let n = new Float32Array(e.count * t),
        r = [e.getX, e.getY, e.getZ, e.getW];
      for (let i = 0; i < e.count; i++) for (let a = 0; a < t; a++) n[i * t + a] = r[a].call(e, i);
      return n;
    },
    a = r.attributes.position.count,
    o = r.index ? r.index.array : Uint32Array.from({ length: a }, (e, t) => t),
    s = {},
    c = new v(),
    l = e.bindMatrix.clone().invert(),
    u = new E();
  return (
    e.skeleton.bones.forEach((t, n) => {
      (c.copy(e.skeleton.boneInverses[n]).invert(), (s[t.name] = u.setFromMatrixPosition(c).applyMatrix4(l).toArray()));
    }),
    {
      positions: i(r.attributes.position, 3),
      uvs: i(r.attributes.uv, 2),
      normals: i(r.attributes.normal, 3),
      indices: o,
      skinIndex: i(r.attributes.skinIndex, 4),
      skinWeight: i(r.attributes.skinWeight, 4),
      count: a,
      joints: s,
      headJoint: e.skeleton.bones.indexOf(t),
      atlas: n,
    }
  );
}
function le(e, t = 1024) {
  let n = e?.image,
    r = n?.width,
    i = n?.height;
  if (!r || !i || typeof document > `u`) return null;
  let a = Math.min(1, t / Math.max(r, i)),
    o = Math.round(r * a),
    s = Math.round(i * a);
  try {
    let e = (
      typeof OffscreenCanvas < `u`
        ? new OffscreenCanvas(o, s)
        : Object.assign(document.createElement(`canvas`), { width: o, height: s })
    ).getContext(`2d`, { willReadFrequently: !0 });
    return (e.drawImage(n, 0, 0, o, s), { data: e.getImageData(0, 0, o, s).data, width: o, height: s });
  } catch {
    return null;
  }
}
var ue = Object.freeze([
  [`aa`, 0.34],
  [`oh`, 0.22],
  [`ee`, 0.18],
  [`ih`, 0.16],
  [`ou`, 0.1],
]);
function de(e = Math.random) {
  let t = { aa: 0, ih: 0, ou: 0, ee: 0, oh: 0 },
    n = 0,
    r = 0,
    i = `aa`,
    a = 0,
    o = 0,
    s = 0,
    c = () => {
      let t = e();
      for (let [e, n] of ue) if (((t -= n), t <= 0)) return e;
      return `aa`;
    };
  function l() {
    (o <= 0 && (o = 3 + Math.floor(e() * 5)), o--, (n = 0), (r = 0.16 + e() * 0.1), (i = c()), (a = 0.45 + e() * 0.45));
  }
  return {
    out: t,
    update(c, u) {
      c = Math.min(Math.max(Number(c) || 0, 0), 0.1);
      let d = 1 - Math.exp(-c * 16);
      if (!u) {
        for (let e in t) t[e] += (0 - t[e]) * d;
        return ((o = 0), (r = 0), (s = 0), t);
      }
      if (s > 0) {
        s -= c;
        for (let e in t) t[e] += (0 - t[e]) * d;
        return t;
      }
      if (n >= r) {
        if (r > 0 && o <= 0) return ((s = 0.25 + e() * 0.35), (r = 0), t);
        l();
      }
      n += c;
      let f = a * Math.sin(Math.PI * Math.min(1, n / r)) ** 0.7;
      for (let e in t) t[e] += ((e === i ? f : e === `aa` && i !== `aa` ? f * 0.35 : 0) - t[e]) * Math.min(1, c * 30);
      return t;
    },
  };
}
var fe = () =>
  new Promise((e) =>
    typeof requestIdleCallback == `function` ? requestIdleCallback(() => e(), { timeout: 600 }) : setTimeout(e, 30),
  );
async function pe({ mesh: e, headBone: t, map: n, support: r }) {
  if (!r) return { status: `none`, reason: `not-listed` };
  if (!e?.isSkinnedMesh || !t || !n) return { status: `none`, reason: `no-rig` };
  let i = await oe();
  await fe();
  let a = performance.now(),
    o = le(n);
  if (!o) return { status: `none`, reason: `no-atlas` };
  let s = ce(e, t, o),
    c = performance.now() - a,
    l = await i.detectFaceSliced(s, { pause: fe, skinThreshold: r.skin || 16 });
  return l.hasFace
    ? {
        status: `ready`,
        reason: `ok`,
        kit: i,
        rig: l.rig,
        textures: i.createFaceTextures(K, l.rig),
        support: r,
        confidence: l.confidence,
        ms: { read: +c.toFixed(1), ...l.ms },
      }
    : { status: `none`, reason: l.reason, confidence: l.confidence };
}
var me = new Map(),
  he = Promise.resolve();
function ge(e, { mesh: t, headBone: n, map: r }) {
  if (!me.has(e)) {
    let i = ie[e];
    if (!i) me.set(e, Promise.resolve({ status: `none`, reason: `not-listed` }));
    else {
      let a = he.then(() => pe({ mesh: t, headBone: n, map: r, support: i }));
      ((he = a.catch(() => null)),
        me.set(
          e,
          a.catch((e) => ({ status: `none`, reason: `error: ${e?.message || e}` })),
        ));
    }
  }
  return me.get(e);
}
var _e = new WeakMap();
function ve({ mesh: e, random: t = Math.random }) {
  let n = de(t),
    r = { aa: 0, ih: 0, ou: 0, ee: 0, oh: 0 },
    i = { blinkRight: 0, blinkLeft: 0, happy: 0, surprised: 0, open: 0, round: 0, wide: 0, smile: 0 },
    a = null,
    o = null,
    s = null,
    c = null,
    l = `stand`,
    u = !1,
    d = 0,
    f = !1,
    p = null,
    m = e.onBeforeRender;
  e.onBeforeRender = function (e, t, n, ...r) {
    return ((p = { renderer: e, scene: t, camera: n }), m.call(this, e, t, n, ...r));
  };
  async function h(n) {
    if (a || f || n?.status !== `ready`) return !1;
    let r = e.material;
    _e.has(r) ||
      _e.set(
        r,
        (async () => {
          if (p?.renderer?.compileAsync) {
            let t = r.clone();
            ((t.onBeforeCompile = r.onBeforeCompile),
              (t.customProgramCacheKey = r.customProgramCacheKey),
              n.kit.installFace(K, t, n.rig, { textures: n.textures }));
            let i = e.clone();
            ((i.material = t), (i.onBeforeRender = () => {}));
            try {
              await p.renderer.compileAsync(i, p.camera, p.scene);
            } catch {}
            t.dispose();
          }
          return n.kit.installFace(K, r, n.rig, { textures: n.textures });
        })(),
      );
    let i = await _e.get(r);
    return !f && ((a = i), (o = n.support), (s = n.kit.createFaceDriver({ random: t })), !0);
  }
  return {
    install: h,
    get installed() {
      return !!a;
    },
    get hasMouth() {
      return !!(a && o.mouth);
    },
    get weights() {
      return i;
    },
    setViseme(e, t) {
      e in r && ((r[e] = se(t)), (d = 0.25));
    },
    setTalking(e) {
      u = !!e;
    },
    setPose(e) {
      l = e || `stand`;
    },
    force(e = null) {
      c = e
        ? { blinkRight: 0, blinkLeft: 0, happy: 0, surprised: 0, open: 0, round: 0, wide: 0, smile: 0, ...e }
        : null;
    },
    update(e) {
      if (!a) return;
      ((d = Math.max(0, d - e)), s.setPose(l));
      let t = n.update(e, u && d <= 0);
      for (let e in r) s.setViseme(e, d > 0 ? r[e] : t[e]);
      (Object.assign(i, s.update(e), c || {}),
        o.eyes || Object.assign(i, { blinkRight: 0, blinkLeft: 0, happy: 0, surprised: 0 }),
        o.mouth || Object.assign(i, { open: 0, round: 0, wide: 0, smile: 0 }),
        a.set(i));
    },
    dispose() {
      ((f = !0), (e.onBeforeRender = m), a && a.set({}), (a = null));
    },
  };
}
var ye = (e) => (/wave|greet|hello|bow/i.test(e) ? `wave` : /laugh|clap|cheer/i.test(e) ? `laugh` : `stand`),
  be = !1,
  xe = (e) => {
    be = e;
  },
  Se = null;
function Ce(e) {
  if (!Se) {
    let e = document.createElement(`canvas`);
    e.width = e.height = 64;
    let t = e.getContext(`2d`),
      n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, `rgba(20,24,30,0.5)`),
      n.addColorStop(0.5, `rgba(20,24,30,0.26)`),
      n.addColorStop(1, `rgba(20,24,30,0)`),
      (t.fillStyle = n),
      t.fillRect(0, 0, 64, 64),
      (Se = new r(e)));
  }
  let t = new p(new y(e * 2, e * 2), new S({ map: Se, transparent: !0, depthWrite: !1 }));
  return (
    (t.rotation.x = -Math.PI / 2),
    (t.position.y = 0.025),
    (t.renderOrder = 1),
    (t.userData.noAO = !0),
    (t.name = `contact`),
    t
  );
}
var we = (e, t) => {
  be &&
    (e.traverse((e) => {
      e.isMesh && (e.castShadow = !1);
    }),
    e.add(Ce(t * 0.24)));
};
function Te({ body: e = `#f2c94c`, skin: t = `#f4d3bd`, hair: n = `#2b2b33`, height: r = 1.6 } = {}) {
  let i = new w(),
    a = new w();
  i.add(a);
  let s = (e, t = 0.6) => new b({ color: e, roughness: t }),
    c = new p(new o(0.2, 0.42, 8, 16), s(e));
  c.position.y = 0.82;
  let l = new p(new C(0.2, 32, 24), s(t, 0.5));
  l.position.y = 1.36;
  let u = new p(new C(0.21, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), s(n, 0.7));
  ((u.position.y = 1.39), (u.rotation.x = -0.25));
  let d = new p(new o(0.075, 0.42, 6, 10), s(`#3b4a63`)),
    f = d.clone();
  (d.position.set(-0.09, 0.3, 0), f.position.set(0.09, 0.3, 0));
  let m = new p(new o(0.06, 0.36, 6, 10), s(e)),
    h = m.clone();
  (m.position.set(-0.27, 0.9, 0), h.position.set(0.27, 0.9, 0));
  let g = s(`#1d1d22`, 0.3);
  for (let e of [-0.07, 0.07]) {
    let t = new p(new C(0.022, 12, 8), g);
    (t.position.set(e, 1.38, 0.185), a.add(t));
  }
  (a.add(c, l, u, d, f, m, h),
    a.scale.setScalar(r / 1.6),
    i.traverse((e) => {
      e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
    }),
    we(i, r));
  let _ = 0;
  return {
    object: i,
    setMotion(e, t) {
      _ += t * (4 + e * 8) * (e > 0.05 ? 1 : 0.25);
      let n = Math.sin(_) * 0.6 * Math.min(e, 1);
      ((d.rotation.x = n),
        (f.rotation.x = -n),
        (m.rotation.x = -n * 0.8),
        (h.rotation.x = n * 0.8),
        (a.position.y = Math.abs(Math.sin(_)) * 0.04 * Math.min(e, 1) + Math.sin(_ * 0.5) * 0.005));
    },
    play() {},
  };
}
var Ee = new WeakSet();
function De(e, t) {
  let n = (t) => {
      let n = null;
      return (
        e.traverse((e) => {
          !n && e.isBone && t.test(e.name.replace(/^mixamorig:?/i, ``)) && (n = e);
        }),
        n
      );
    },
    r = n(/^(hip|hips|pelvis)$/i),
    i = n(/^(l_foot|leftfoot|foot_l)$/i),
    a = n(/^(r_foot|rightfoot|foot_r)$/i);
  if (!r || !i || !a) return;
  let o = (e) => e.tracks.find((e) => e.name === `${r.name}.position`),
    s = [...new Set(t.values())].filter((e) => !Ee.has(e) && o(e));
  if (!s.length) return;
  let c = new E(),
    l = new E(),
    d = () => (
      e.updateMatrixWorld(!0),
      i.getWorldPosition(c),
      a.getWorldPosition(l),
      [(c.x + l.x) / 2, (c.z + l.z) / 2]
    ),
    [f, p] = d(),
    m = r.parent.getWorldQuaternion(new u()).invert(),
    h = r.parent.getWorldScale(new E()),
    g = new D(e),
    _ = new E();
  for (let e of s) {
    let t = o(e),
      n = /walk|run|jog/i.test(e.name),
      r = g.clipAction(e);
    r.play();
    let i = Math.min(40, t.times.length),
      a = [],
      s = [];
    for (let t = 0; t < i; t += 1) {
      let r = (e.duration * t) / i;
      g.setTime(r);
      let [o, c] = d();
      (a.push(r), s.push([o - f, n ? 0 : c - p]));
    }
    (a.push(e.duration), s.push(s[0]));
    let c = t.values;
    for (let e = 0, n = 0; e < t.times.length; e += 1) {
      let r = t.times[e];
      for (; n < a.length - 2 && a[n + 1] < r;) n += 1;
      let i = k.clamp((r - a[n]) / Math.max(a[n + 1] - a[n], 1e-6), 0, 1);
      (_.set(s[n][0] + (s[n + 1][0] - s[n][0]) * i, 0, s[n][1] + (s[n + 1][1] - s[n][1]) * i)
        .applyQuaternion(m)
        .divide(h),
        (c[e * 3] -= _.x),
        (c[e * 3 + 1] -= _.y),
        (c[e * 3 + 2] -= _.z));
    }
    (r.stop(), g.uncacheAction(e), Ee.add(e));
  }
  (g.uncacheRoot(e),
    e.traverse((e) => {
      e.isSkinnedMesh && e.skeleton.pose();
    }));
}
async function Oe(e, { height: t = 1.62, clipFiles: n = {} } = {}) {
  let [r, i] = await Promise.all([
      z(e),
      fetch(R(e.replace(/\.glb$/, `.json`)))
        .then((e) => (e.ok ? e.json() : null))
        .catch(() => null),
    ]),
    a = (i?.clips?.walk?.groundSpeed || 0.64) * t,
    o = (i?.clips?.run?.groundSpeed || 0) * t,
    s = I(r.scene);
  ((s.rotation.y = V), L(s, { height: t }), B(s, { roughness: 0.5, env: 0.8 }));
  let c = new w();
  (c.add(s), we(c, t));
  let l = new D(s),
    u = new Map(r.animations.map((e) => [e.name.toLowerCase(), e]));
  for (let [e, t] of Object.entries(n))
    try {
      let n = await z(t);
      n.animations[0] && u.set(e, n.animations[0]);
    } catch {}
  let p = (...e) => {
    for (let t of e) if (u.has(t)) return u.get(t);
    for (let t of e) for (let [e, n] of u) if (e.includes(t)) return n;
    return null;
  };
  De(s, u);
  let m = p(`idle`, `stand`),
    h = p(`walk`),
    g = o > 0 ? p(`run`) : null,
    _ = m ? l.clipAction(m) : null,
    v = h ? l.clipAction(h) : null,
    y = g ? l.clipAction(g) : null;
  (_ && (_.play(), _.setEffectiveWeight(1)),
    v && (v.play(), v.setEffectiveWeight(0)),
    y && (y.play(), y.setEffectiveWeight(0)));
  let b = null,
    x = null;
  s.traverse((e) => {
    if (!b && e.isSkinnedMesh && !Array.isArray(e.material)) {
      let t = e.skeleton.bones.find((e) => /^head$/i.test(e.name));
      t && ((b = e), (x = t));
    }
  });
  let S = ie[e] && b ? ve({ mesh: b }) : null;
  S &&
    ge(e, { mesh: b, headBone: x, map: b.material.map })
      .then((e) => S.install(e))
      .catch(() => {});
  let C = null,
    T = 0,
    E = 0;
  return {
    object: c,
    mixer: l,
    clips: u,
    face: S,
    setMotion(e, t, n = null) {
      let r = n ?? e * a,
        i = k.clamp((r - 0.06) / (0.42 * a), 0, 1);
      T += (i - T) * (1 - Math.exp(-t * 14));
      let s = y ? k.clamp((r - 1.85) / 0.7, 0, 1) : 0;
      ((E += (s - E) * (1 - Math.exp(-t * 8))),
        C || (_?.setEffectiveWeight(1 - T), v?.setEffectiveWeight(T * (1 - E)), y?.setEffectiveWeight(T * E)),
        v && (v.timeScale = k.clamp(r / a, 0.4, 2.6)),
        y && (y.timeScale = k.clamp(r / o, 0.5, 1.6)),
        l.update(t),
        S?.update(t));
    },
    clipSpeed: a,
    play(e, { loop: t = !1, fade: n = 0.25 } = {}) {
      let r = p(e);
      if (!r) return null;
      let i = l.clipAction(r);
      if (
        (C && C !== i && C.fadeOut(n),
        i.reset(),
        i.setLoop(t ? f : d, t ? 1 / 0 : 1),
        (i.clampWhenFinished = !t),
        i.setEffectiveWeight(1),
        i.fadeIn(n).play(),
        _?.fadeOut(n),
        v?.fadeOut(n),
        y?.fadeOut(n),
        (C = i),
        S?.setPose(ye(e)),
        !t)
      ) {
        let e = (t) => {
          t.action === i &&
            (l.removeEventListener(`finished`, e),
            i.fadeOut(n),
            _?.reset().fadeIn(n).play(),
            v?.reset().play(),
            y?.reset().play(),
            (C = null),
            S?.setPose(`stand`));
        };
        l.addEventListener(`finished`, e);
      }
      return i;
    },
    stopGesture(e = 0.3) {
      C &&
        (C.fadeOut(e),
        _?.reset().fadeIn(e).play(),
        v?.reset().play(),
        y?.reset().play(),
        (C = null),
        S?.setPose(`stand`));
    },
  };
}
function ke(e, t, n) {
  let { cellSize: r, gx0: i, gz0: a, w: o, h: s, cells: c, parts: l } = e,
    u = o * s,
    d = (e, t) => {
      let n = e - i,
        r = t - a;
      return n >= 0 && r >= 0 && n < o && r < s ? r * o + n : -1;
    },
    f = (e, t, n, r) => {
      let i = (e, t) => {
          let r = d(e, t);
          return r >= 0 && c[r] === 1 && (!n || l[r] === n) ? r : -1;
        },
        a = i(e, t);
      if (a >= 0) return a;
      for (let n = 1; n <= r; n += 1)
        for (let r = -n; r <= n; r += 1)
          for (let o = -n; o <= n; o += 1)
            if (Math.max(Math.abs(r), Math.abs(o)) === n && ((a = i(e + r, t + o)), a >= 0)) return a;
      return -1;
    },
    p = f(Math.floor(t.x / r), Math.floor(t.z / r), 0, 6);
  if (p < 0) return [];
  let m = f(Math.floor(n.x / r), Math.floor(n.z / r), l[p], 24);
  if (m < 0) return [];
  let h = (e.scratch ||= {
      run: 0,
      seen: new Uint32Array(u),
      shut: new Uint32Array(u),
      g: new Float32Array(u),
      came: new Int32Array(u),
      heap: new Ne(),
    }),
    g = ++h.run,
    { seen: _, shut: v, g: y, came: b, heap: x } = h;
  x.clear();
  let S = m % o,
    C = (m - S) / o,
    w = (e) => {
      let t = e % o,
        n = (e - t) / o,
        r = Math.abs(t - S),
        i = Math.abs(n - C);
      return 1.1 * (r + i + (Math.SQRT2 - 2) * Math.min(r, i));
    };
  ((_[p] = g), (y[p] = 0), (b[p] = -1), x.push(w(p), p));
  let T = !1;
  for (; x.size;) {
    let e = x.pop();
    if (v[e] === g) continue;
    if (e === m) {
      T = !0;
      break;
    }
    v[e] = g;
    let t = e % o,
      n = (e - t) / o,
      r = y[e];
    for (let i = -1; i <= 1; i += 1)
      for (let a = -1; a <= 1; a += 1) {
        if (!a && !i) continue;
        let l = t + a,
          u = n + i;
        if (l < 0 || u < 0 || l >= o || u >= s) continue;
        let d = u * o + l;
        if (c[d] !== 1 || v[d] === g || (a && i && (c[n * o + l] !== 1 || c[u * o + t] !== 1))) continue;
        let f = r + (a && i ? Math.SQRT2 : 1);
        (_[d] === g && f >= y[d]) || ((_[d] = g), (y[d] = f), (b[d] = e), x.push(f + w(d), d));
      }
  }
  if (!T) return [];
  let D = [];
  for (let e = m; e !== -1; e = b[e]) D.push(e);
  D.reverse();
  let O = (e) => {
      let t = e % o;
      return new E((i + t + 0.5) * r, 0, (a + (e - t) / o + 0.5) * r);
    },
    k = [new E(t.x, 0, t.z)];
  for (let e = 1; e < D.length - 1; e += 1) D[e] - D[e - 1] !== D[e + 1] - D[e] && k.push(O(D[e]));
  k.push(d(Math.floor(n.x / r), Math.floor(n.z / r)) === m ? new E(n.x, 0, n.z) : O(m));
  let A = (t, n) => {
      let i = Math.ceil(t.distanceTo(n) / (r * 0.3));
      for (let r = 1; r < i; r += 1) {
        let a = r / i;
        if (!e.isWalkable(t.x + (n.x - t.x) * a, t.z + (n.z - t.z) * a)) return !1;
      }
      return !0;
    },
    j = [k[0]],
    M = 0;
  for (; M < k.length - 1;) {
    let e = k.length - 1;
    for (; e > M + 1 && !A(k[M], k[e]);) --e;
    (j.push(k[e]), (M = e));
  }
  return j.slice(1);
}
var Ae = (e) => (t, n) => {
  let r = Math.ceil(Math.hypot(n.x - t.x, n.z - t.z) / (e.cellSize * 0.3));
  for (let i = 1; i <= r; i += 1) {
    let a = i / r;
    if (!e.isWalkable(t.x + (n.x - t.x) * a, t.z + (n.z - t.z) * a)) return !1;
  }
  return !0;
};
function je({ minX: e, maxX: t, minZ: n, maxZ: r, cellSize: i = 0.35, free: a }) {
  let o = Math.floor(e / i),
    s = Math.floor(n / i),
    c = Math.ceil(t / i) - o + 1,
    l = Math.ceil(r / i) - s + 1,
    u = new Uint8Array(c * l);
  for (let e = 0; e < l; e += 1)
    for (let t = 0; t < c; t += 1) u[e * c + t] = +!!a((o + t + 0.5) * i, (s + e + 0.5) * i);
  let d = new Int32Array(c * l),
    f = new Int32Array(c * l),
    p = 0;
  for (let e = 0; e < c * l; e += 1) {
    if (!u[e] || d[e]) continue;
    ((p += 1), (d[e] = p));
    let t = 0,
      n = 0;
    for (f[n++] = e; t < n;) {
      let e = f[t++],
        r = e % c,
        i = (e - r) / c;
      for (let e = -1; e <= 1; e += 1)
        for (let t = -1; t <= 1; t += 1) {
          let a = r + t,
            o = i + e;
          if ((!t && !e) || a < 0 || o < 0 || a >= c || o >= l) continue;
          let s = o * c + a;
          u[s] && !d[s] && (!t || !e || (u[i * c + a] && u[o * c + r])) && ((d[s] = p), (f[n++] = s));
        }
    }
  }
  let m = (e, t) => {
    let n = e - o,
      r = t - s;
    return n >= 0 && r >= 0 && n < c && r < l && u[r * c + n] === 1;
  };
  return {
    cellSize: i,
    gx0: o,
    gz0: s,
    w: c,
    h: l,
    cells: u,
    parts: d,
    open: m,
    isWalkable: (e, t) => m(Math.floor(e / i), Math.floor(t / i)),
  };
}
var Me = (e, t, n) => {
    let r = new Map(),
      i = (e, t, n, i, a) => {
        for (let o = Math.floor(t / 2); o <= Math.floor(n / 2); o += 1)
          for (let t = Math.floor(i / 2); t <= Math.floor(a / 2); t += 1) {
            let n = o * 100003 + t,
              i = r.get(n);
            (i || r.set(n, (i = [])), i.push(e));
          }
      };
    for (let t of e) i({ c: t }, t.x - t.r - n, t.x + t.r + n, t.z - t.r - n, t.z + t.r + n);
    for (let e of t) i({ b: e }, e.minX - n, e.maxX + n, e.minZ - n, e.maxZ + n);
    return (e, t) => {
      let i = r.get(Math.floor(e / 2) * 100003 + Math.floor(t / 2));
      if (!i) return !0;
      for (let { c: r, b: a } of i)
        if (r) {
          if ((e - r.x) ** 2 + (t - r.z) ** 2 < (r.r + n) ** 2) return !1;
        } else if (e > a.minX - n && e < a.maxX + n && t > a.minZ - n && t < a.maxZ + n) return !1;
      return !0;
    };
  },
  Ne = class {
    constructor() {
      ((this.p = new Float64Array(1024)), (this.k = new Int32Array(1024)), (this.size = 0));
    }
    clear() {
      this.size = 0;
    }
    push(e, t) {
      if (this.size === this.p.length) {
        let e = new Float64Array(this.size * 2);
        (e.set(this.p), (this.p = e));
        let t = new Int32Array(this.size * 2);
        (t.set(this.k), (this.k = t));
      }
      let n = this.p,
        r = this.k,
        i = this.size++;
      for (; i > 0;) {
        let t = (i - 1) >> 1;
        if (n[t] <= e) break;
        ((n[i] = n[t]), (r[i] = r[t]), (i = t));
      }
      ((n[i] = e), (r[i] = t));
    }
    pop() {
      let e = this.p,
        t = this.k,
        n = t[0],
        r = --this.size;
      if (r > 0) {
        let n = e[r],
          i = t[r],
          a = 0;
        for (;;) {
          let i = a * 2 + 1,
            o = i + 1,
            s = -1,
            c = n;
          if ((i < r && e[i] < c && ((s = i), (c = e[i])), o < r && e[o] < c && (s = o), s < 0)) break;
          ((e[a] = e[s]), (t[a] = t[s]), (a = s));
        }
        ((e[a] = n), (t[a] = i));
      }
      return n;
    }
  },
  Pe = (e) =>
    `<svg viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,
  Fe = Object.freeze({
    moon: Pe(
      `<path d="M15.2 3.6a8.6 8.6 0 1 0 5.2 13.9A7.1 7.1 0 0 1 15.2 3.6z"/><path d="M18.6 3.8v2.6M17.3 5.1h2.6"/>`,
    ),
    sunflower: Pe(
      `<circle cx="12" cy="12" r="3.4" fill="currentColor" fill-opacity=".22"/><path d="M12 2.9v3.3M12 17.8v3.3M2.9 12h3.3M17.8 12h3.3M5.6 5.6l2.3 2.3M16.1 16.1l2.3 2.3M5.6 18.4l2.3-2.3M16.1 7.9l2.3-2.3"/>`,
    ),
    herb: Pe(
      `<path d="M12 21V8.6"/><path d="M12 14.2c-3.6 0-5.7-2.1-6.2-5.2 3.3 0 5.7 1.7 6.2 5.2zM12 11.2c3.3 0 5.3-2 5.8-5.1-3.1 0-5.4 1.6-5.8 5.1zM12 8.6c-1.3-1.9-1.3-3.9 0-5.8 1.3 1.9 1.3 3.9 0 5.8z"/>`,
    ),
    peach: Pe(
      `<path d="M12 20.2c-4.6 0-7.6-3.2-7.6-6.9 0-3.4 2.6-5.8 5.3-5.8 1 0 1.8.4 2.3 1 .5-.6 1.3-1 2.3-1 2.7 0 5.3 2.4 5.3 5.8 0 3.7-3 6.9-7.6 6.9z"/><path d="M12 8.5c.2-2.4 1.6-4.1 4.3-4.7-.3 2.5-1.8 4.1-4.3 4.7zM11.6 10.2c-.9 2.6-.8 5.6.8 8.4"/>`,
    ),
  }),
  Ie = Object.freeze({
    melies: {
      id: `melies`,
      open: !0,
      model: `models/plaza/lm_melies.glb`,
      yaw: 0,
      stamp: Fe.moon,
      accent: `#A8463C`,
      place: F(`蒙特勒伊`, `Montreuil`),
      ink: `#3F5A4A`,
      portrait: `portraits/melies.jpg`,
      name: F(`当一回导演`, `Your turn as the director`),
      meta: F(`1897 · 梅里爱的玻璃摄影棚`, `1897 · Méliès' glass studio`),
      who: F(
        `乔治·梅里爱 · 1861–1938 · 魔术师，拍过五百多部电影`,
        `Georges Méliès · 1861–1938 · magician; made over five hundred films`,
      ),
      hook: F(
        `他变出了电影的第一个戏法，后来在车站卖了很多年玩具，没人认出他。今天，他想给你拍一镜。`,
        `He found cinema's first trick, then sold toys at a railway station for years, and no one knew him. Today he would like to film you.`,
      ),
      door: F(`当一回导演`, `Your turn as the director`),
      short: F(`当一回导演`, `your turn as the director`),
      nick: F(`梅里爱`, `Méliès`),
      gift: F(`他想给你拍一镜默片`, `He'd like to film you`),
      teaser: (e) => F(`给你的那一镜，他连片名都想好了：${e}`, `He already has a title for your shot: ${e}`),
      doorway: { side: 0, y: 1.5, w: 1.5, h: 2.5 },
      host: { model: `models/chars/melies.glb`, height: 1.72, side: -1.45, out: 0.9 },
    },
    vangogh: {
      id: `vangogh`,
      open: !0,
      model: `models/plaza/lm_vangogh.glb`,
      yaw: 0,
      stamp: Fe.sunflower,
      accent: `#E8B930`,
      place: F(`阿尔勒`, `Arles`),
      ink: `#3D5BA9`,
      portrait: `portraits/vangogh.jpg`,
      name: F(`当一回画家`, `Your turn as the painter`),
      meta: F(`1888 · 梵高在阿尔勒的卧室`, `1888 · Van Gogh's bedroom in Arles`),
      who: F(`文森特·梵高 · 1853–1890 · 画家`, `Vincent van Gogh · 1853–1890 · painter`),
      hook: F(
        `这是他在阿尔勒的卧室，他刚把它画完。那年，他的画几乎一张也没卖出去。他想给你画一幅像，再写一封信。`,
        `His bedroom in Arles, just painted. That year he sold almost nothing. He would like to paint you, and write you a letter.`,
      ),
      door: F(`当一回画家`, `Your turn as the painter`),
      short: F(`当一回画家`, `your turn as the painter`),
      nick: F(`梵高`, `Van Gogh`),
      gift: F(`他想给你画一幅像`, `He'd like to paint you`),
      teaser: (e) =>
        F(`要画给你的那一幅，他已经起好了名字：${e}`, `He has already named the painting he'll make of you: ${e}`),
      doorway: { side: 1.07, y: 1.35, w: 0.95, h: 1.75 },
      host: { model: `models/chars/vangogh.glb`, height: 1.72, side: 2.05, out: 0.8 },
    },
    lishizhen: {
      id: `lishizhen`,
      open: !0,
      model: `models/plaza/lm_lishizhen.glb`,
      yaw: 0,
      stamp: Fe.herb,
      accent: `#C4553A`,
      place: F(`蕲州`, `Qizhou`),
      ink: `#C4553A`,
      portrait: `portraits/lishizhen.jpg`,
      name: F(`当一回郎中`, `Your turn as the doctor`),
      meta: F(`万历十八年 · 李时珍的药铺`, `1590 · Li Shizhen's herbal shop`),
      who: F(`李时珍 · 1518–1593 · 蕲州`, `Li Shizhen · 1518–1593 · Qizhou`),
      hook: F(
        `他用二十七年写完一部书，又等了十几年，才有人肯刻。他想给你号一次脉，开一张写给心的方子。`,
        `He spent twenty-seven years on one book, then waited more than ten for someone to print it. He would like to take your pulse, and write a prescription for your heart.`,
      ),
      door: F(`当一回郎中`, `Your turn as the doctor`),
      short: F(`当一回郎中`, `your turn as the doctor`),
      nick: F(`李时珍`, `Li Shizhen`),
      gift: F(`他想给你号一次脉`, `He'd like to take your pulse`),
      teaser: (e) =>
        F(`给你的方子，他已经拟好了名字：${e}`, `The prescription he'll write you already has a name: ${e}`),
      doorway: { side: 0, y: 1.3, w: 1.7, h: 2.1 },
      host: { model: `models/chars/lishizhen.glb`, height: 1.68, side: -1.35, out: 0.9 },
    },
    xiyou: {
      id: `xiyou`,
      open: !0,
      optional: !0,
      model: `models/plaza/lm_xiyou.glb`,
      yaw: 0,
      stamp: Fe.peach,
      accent: `#E3B04B`,
      place: F(`五行山`, `Five Elements Mt.`),
      ink: `#D0482F`,
      portrait: `portraits/xiyou.jpg`,
      name: F(`当一回取经人`, `Your turn as the pilgrim`),
      meta: F(`贞观十三年 · 五行山`, `639 · Five Elements Mountain`),
      who: F(
        `孙悟空 · 齐天大圣 · 出自明代吴承恩《西游记》`,
        `Sun Wukong, the Monkey King · from Journey to the West (Ming dynasty)`,
      ),
      hook: F(
        `他在五行山下压了五百年，没有人来。今天揭帖子的是你。难簿上还少一难，他说那一难是你的。`,
        `He lay five hundred years under a mountain, and nobody came. Today you lift the seal. The register is one ordeal short, and he says that one is yours.`,
      ),
      door: F(`当一回取经人`, `Your turn as the pilgrim`),
      short: F(`当一回取经人`, `your turn as the pilgrim`),
      nick: F(`孙悟空`, `Wukong`),
      gift: F(`他想给你一张通关文牒`, `He'd like to give you a travel pass`),
      teaser: (e) => F(`你的那一回，他连回目都想好了：${e}`, `He already has the title of your chapter: ${e}`),
      doorway: { side: 0, y: 1.4, w: 1.4, h: 2.3 },
      host: { model: `models/chars/wukong.glb`, height: 1.36, side: -1.4, out: 0.9 },
    },
  });
function Le(e = {}) {
  return Object.freeze(Object.fromEntries(Object.entries(Ie).filter(([t, n]) => !n.optional || e[t])));
}
var Re = `lifeplaza.visited`;
function ze() {
  try {
    return JSON.parse(localStorage.getItem(Re) || `{}`) || {};
  } catch {
    return {};
  }
}
function Be(e) {
  try {
    localStorage.setItem(Re, JSON.stringify({ ...ze(), [e]: Date.now() }));
  } catch {}
}
var Ve = `lifeplaza.kept`;
function He() {
  try {
    return JSON.parse(localStorage.getItem(Ve) || `{}`) || {};
  } catch {
    return {};
  }
}
function Ue(e, { title: t = ``, did: n = ``, said: r = `` } = {}) {
  let i = (e, t) =>
      [
        ...String(e || ``)
          .replace(/\s+/g, ` `)
          .trim(),
      ]
        .slice(0, t)
        .join(``),
    a = { title: i(t, 80), did: i(n, 160), said: i(r, 80) };
  if (a.title || a.did)
    try {
      localStorage.setItem(Ve, JSON.stringify({ ...He(), [e]: { ...a, at: Date.now() } }));
    } catch {}
}
function We(e = ``) {
  let t = ze(),
    n = He();
  return Object.keys(t)
    .filter((t) => t !== e && Ie[t])
    .sort((e, n) => t[e] - t[n])
    .map((e) => ({ id: e, title: n[e]?.title || ``, did: n[e]?.did || ``, said: n[e]?.said || `` }));
}
var Ge = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4.5 3.5 6.6v13l5.5-2.1 6 2.1 5.5-2.1v-13L15 6.6z"/><path d="M9 4.5v13M15 6.6v13"/></svg>`,
  Ke = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h5v16h-5"/><path d="M10 8l-4 4 4 4M6 12h10"/></svg>`;
function qe(
  e,
  {
    lives: t,
    here: n = null,
    court: r = null,
    map: i = !1,
    next: a = () => null,
    onGo: o,
    onPlaza: s = null,
    onOpen: c = () => {},
    onClose: l = () => {},
    blocked: u = () => !1,
  },
) {
  let d = j(),
    f = document.createElement(`div`);
  ((f.className = `atlas${i ? ` on-map` : ``}`),
    f.setAttribute(`role`, `dialog`),
    f.setAttribute(`aria-modal`, `true`),
    f.setAttribute(`aria-label`, F(`人生地图`, `Map of lives`)),
    e.appendChild(f));
  let p = document.createElement(`div`);
  ((p.className = `atlas-pins`), e.appendChild(p));
  let m = new Map(),
    h = !1,
    g = null,
    _ = null,
    v = 0,
    y = (e) =>
      String(e ?? ``).replace(/[&<>"]/g, (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e]);
  function b() {
    let e = ze(),
      o = He(),
      c = a(),
      l = ({ id: t, name: r, meta: i, portrait: a, image: s, accent: l, open: u = !0 }) => {
        let d = t === n,
          f = !!e[t],
          p = o[t]?.title,
          m = u
            ? d
              ? F(`你在这里`, `You are here`)
              : p
                ? F(`去过 · 带走了《${p}》`, `Been · took home "${p}"`)
                : f
                  ? F(`去过`, `Been`)
                  : c === t
                    ? F(`下一站`, `Next stop`)
                    : F(`还没去过`, `Not been yet`)
            : F(`还在布置`, `Not open yet`);
        return `<li><button type="button" class="at-row${d ? ` here` : ``}${f ? ` been` : ``}${c === t && !f ? ` at-next` : ``}" data-id="${t}" ${!u || d ? `disabled` : ``} style="--accent:${l || `#1f4f5a`}">
        ${a || s ? `<img src="${a ? R(a) : s}" alt="" loading="lazy" />` : `<i class="at-blank" aria-hidden="true"></i>`}
        <span class="at-text"><b>${y(r)}</b><span>${y(i)}</span><small>${y(m)}</small></span>
        <i class="at-go" aria-hidden="true">${d || !u ? `` : `→`}</i></button></li>`;
      },
      u = t.map(l);
    (r && u.push(l(r)),
      (f.innerHTML = `<div class="at-card">
      <header class="at-head"><b>${F(`人生地图`, `Map of lives`)}</b><span>${i ? F(`点一下，就到它门口`, `Tap one to be at its door`) : F(`想去哪儿，点一下就到`, `Tap one to go straight there`)}</span><button type="button" class="at-x" aria-label="${F(`关上`, `Close`)}">×</button></header>
      ${s ? `<button type="button" class="at-plaza">${Ke}<span>${F(`回到人生广场`, `Back to the Life Plaza`)}</span>${d ? `` : `<kbd>Enter</kbd>`}</button>` : ``}
      <ol class="at-list">${u.join(``)}</ol>
      ${d ? `` : `<footer class="at-keys">${F(`Esc 或 M 打开、关上 · 走路时按住 Shift 跑起来`, `Esc or M opens and shuts this · hold Shift to run`)}</footer>`}
    </div>`),
      f.querySelector(`.at-x`).addEventListener(`click`, () => C()),
      f.querySelector(`.at-plaza`)?.addEventListener(`click`, () => {
        (C({ quiet: !0 }), s());
      }),
      f.querySelectorAll(`.at-row`).forEach((e) => e.addEventListener(`click`, () => x(e.dataset.id))));
  }
  let x = (e) => {
    (C({ quiet: !0 }), o(e));
  };
  function S() {
    return h || u()
      ? !1
      : ((h = !0),
        b(),
        (g = document.activeElement),
        document.body.classList.add(`atlas-open`),
        requestAnimationFrame(() => {
          (f.classList.add(`show`),
            (
              f.querySelector(`.at-plaza`) ||
              f.querySelector(`.at-row.at-next`) ||
              f.querySelector(`.at-row:not([disabled])`)
            )?.focus({ preventScroll: !0 }));
        }),
        c(),
        !0);
  }
  function C({ quiet: e = !1 } = {}) {
    h &&
      ((h = !1),
      f.classList.remove(`show`),
      document.body.classList.remove(`atlas-open`),
      p.replaceChildren(),
      m.clear(),
      g?.isConnected && g.focus?.({ preventScroll: !0 }),
      e || l());
  }
  return (
    f.addEventListener(`click`, (e) => {
      e.target === f && C();
    }),
    window.addEventListener(
      `keydown`,
      (e) => {
        if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
        let t = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target?.tagName || ``) || e.target?.isContentEditable;
        if (e.key === `Escape` || (e.code === `KeyM` && !t)) {
          if (h) {
            (e.preventDefault(), e.stopImmediatePropagation(), C());
            return;
          }
          !t && S() && (e.preventDefault(), e.stopImmediatePropagation());
        }
      },
      !0,
    ),
    {
      get isOpen() {
        return h;
      },
      open: S,
      close: C,
      toggle() {
        return h ? (C(), !1) : S();
      },
      pins(e) {
        (p.replaceChildren(), m.clear());
        for (let t of e) {
          let e = document.createElement(t.me ? `div` : `button`);
          ((e.className = `at-pin${t.me ? ` me` : ``}${t.been ? ` been` : ``}`),
            t.me || ((e.type = `button`), e.addEventListener(`click`, () => x(t.id))),
            e.style.setProperty(`--accent`, t.accent || `#1f4f5a`),
            (e.innerHTML = `<span class="at-pin-b">${t.stamp ? `<i>${t.stamp}</i>` : ``}<b>${y(t.label)}</b></span>`),
            (e.hidden = !0),
            p.appendChild(e),
            m.set(t.id, e));
        }
      },
      place(e, t, n) {
        let r = m.get(e);
        if (!r) return;
        let i = performance.now();
        if (
          (i - v > 250 && ((_ = f.querySelector(`.at-card`)?.getBoundingClientRect() || null), (v = i)),
          t != null && _ && t > _.left - 12 && t < _.right + 12 && n > _.top - 8 && n < _.bottom + 48 && (t = null),
          t == null)
        ) {
          r.hidden = !0;
          return;
        }
        ((r.hidden = !1), (r.style.left = `${t.toFixed(1)}px`), (r.style.top = `${n.toFixed(1)}px`));
      },
      get pinned() {
        return [...m.keys()];
      },
      cardRect() {
        return f.querySelector(`.at-card`)?.getBoundingClientRect() || null;
      },
    }
  );
}
var Je = new Set([`KeyW`, `KeyA`, `KeyS`, `KeyD`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`]),
  Ye = {
    third: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6.5" r="3"/><path d="M6.5 21v-4.5a5.5 5.5 0 0 1 11 0V21"/></svg>`,
    first: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  Xe = {
    on: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18.2 6.6a7.6 7.6 0 0 1 0 10.8"/></svg>`,
    off: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>`,
  },
  Ze = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h5v16h-5"/><path d="M10 8l-4 4 4 4M6 12h10"/></svg>`,
  Qe = `lifeplaza.view`,
  $e = () => {
    try {
      return localStorage.getItem(Qe) === `first` ? `first` : `third`;
    } catch {
      return `third`;
    }
  };
function et(e, { beats: t = 0, stripLabel: n = ``, exit: r = ``, atlas: i = !1 } = {}) {
  let a = j();
  (document.body.classList.toggle(`touch`, a),
    (e.innerHTML = `
    <div class="strip" id="strip" ${t ? `` : `hidden`}>${`<i></i>`.repeat(t)}<span class="strip-label">${n}</span></div>
    ${r ? `<button type="button" class="exit" id="btn-exit">${Ze}<span>${r}</span></button>` : ``}
    <div class="corner">${i ? `<button type="button" id="btn-atlas" aria-label="${F(`人生地图`, `Map of lives`)}" title="${a ? `` : F(`人生地图（Esc 或 M）`, `Map of lives (Esc or M)`)}">${Ge}</button>` : ``}<button type="button" id="btn-view"></button><button type="button" id="btn-mute" aria-label="${F(`声音`, `Sound`)}">${Xe.on}</button><button type="button" id="btn-lang">${P === `en` ? `中文` : `EN`}</button></div>
    <div class="prompt" id="prompt"><span class="prompt-key">E</span><span class="prompt-text"></span></div>
    <div class="subtitle" id="subtitle" aria-live="polite"><div class="sub-who"></div><div class="sub-text"><span class="sub-on"></span><span class="sub-off" aria-hidden="true"></span><i class="sub-dots" aria-hidden="true"><b></b><b></b><b></b></i></div><button type="button" class="sub-next" aria-label="${F(`下一句`, `Next line`)}">›</button><div class="sub-hint" aria-hidden="true"></div></div>
    <div class="toast" id="toast"></div>
    <div class="joystick off" id="joystick"><i></i><b>${F(`按住拖动 · 走路`, `Hold & drag · walk`)}</b></div>
    <button type="button" class="act" id="act"><span class="act-label"></span><span class="act-dot" aria-hidden="true"></span></button>
    <div class="hint" id="hint">${a ? F(`左下按住走路，推出圈外就跑 · 右边滑动转身 · 点地面就走过去`, `Hold bottom-left to walk, push past the ring to run · swipe on the right to turn · tap the ground to go there`) : F(`WASD 走路（按住 Shift 跑）· 按住鼠标拖动看四周（触控板双指左右滑）· 走近东西按 E · Esc 人生地图`, `WASD to walk (Shift to run) · hold and drag to look (two-finger swipe on a trackpad) · E near things · Esc for the map`)}</div>
  `));
  let o = e.querySelector(`#subtitle`),
    s = o.querySelector(`.sub-on`),
    c = o.querySelector(`.sub-off`),
    l = e.querySelector(`#toast`),
    u = e.querySelector(`#hint`),
    d = 0,
    f = 0,
    p = 0,
    m = 0,
    h = null,
    g = null,
    _ = null,
    v = !1,
    y = null,
    b = 0,
    x = 0,
    S = () => {
      if (!o.classList.contains(`show`)) return !1;
      let e = performance.now();
      return e - b < 280 || ((b = e), _ ? (_(), !0) : (e - x < 450 || g?.() || h?.(), !0));
    };
  (o.querySelector(`.sub-next`).addEventListener(`click`, (e) => {
    (e.preventDefault(), e.stopPropagation(), S());
  }),
    o.addEventListener(`click`, (e) => {
      a || (e.preventDefault(), S());
    }));
  let C = o.querySelector(`.sub-hint`),
    w = 0,
    T = 0,
    E = () => {
      if (!v || !o.classList.contains(`show`) || o.classList.contains(`thinking`)) return;
      let e = performance.now();
      e - T < 3500 ||
        ((T = e),
        (C.textContent = a ? F(`点一下，接着听`, `Tap to go on`) : F(`按空格，接着听`, `Space to go on`)),
        o.classList.add(`nudge`),
        clearTimeout(w),
        (w = setTimeout(() => o.classList.remove(`nudge`), 2600)));
    },
    D = document.getElementById(`world`),
    O = null;
  (D?.addEventListener(`pointerdown`, (e) => {
    O = v ? { x: e.clientX, y: e.clientY, t: performance.now(), moved: !1 } : null;
  }),
    D?.addEventListener(`pointermove`, (e) => {
      O && !O.moved && Math.hypot(e.clientX - O.x, e.clientY - O.y) > 24 && ((O.moved = !0), E());
    }),
    D?.addEventListener(`pointerup`, (e) => {
      let t = O;
      ((O = null),
        t &&
          v &&
          !t.moved &&
          performance.now() - t.t < 500 &&
          Math.hypot(e.clientX - t.x, e.clientY - t.y) < 14 &&
          S());
    }),
    window.addEventListener(
      `keydown`,
      (e) => {
        if (!(e.repeat || e.target.closest?.(`input, textarea`))) {
          if (v && Je.has(e.code)) {
            E();
            return;
          }
          (e.code === `Space` || (v && (e.code === `KeyE` || e.code === `Enter`))) &&
            S() &&
            (e.preventDefault(), e.stopImmediatePropagation());
        }
      },
      !0,
    ),
    (e.querySelector(`.prompt-key`).textContent = a ? F(`点`, `Tap`) : `E`),
    e.querySelector(`#btn-lang`).addEventListener(`click`, () => N(P === `en` ? `zh` : `en`)));
  let k = e.querySelector(`#btn-mute`),
    A = null;
  k.addEventListener(`click`, () => {
    let e = k.dataset.muted !== `1`;
    ((k.dataset.muted = e ? `1` : `0`), (k.innerHTML = e ? Xe.off : Xe.on), A?.(e));
  });
  let M = e.querySelector(`#btn-view`),
    I = null,
    L = (e) => {
      ((M.dataset.mode = e),
        (M.innerHTML = Ye[e]),
        M.setAttribute(
          `aria-label`,
          e === `first`
            ? F(`第一人称（点一下换第三人称）`, `First person (tap for third)`)
            : F(`第三人称（点一下换第一人称）`, `Third person (tap for first)`),
        ));
    };
  (L($e()), M.addEventListener(`click`, () => I?.(M.dataset.mode === `first` ? `third` : `first`)));
  let R = {
    promptEl: e.querySelector(`#prompt`),
    joystickEl: e.querySelector(`#joystick`),
    actionEl: e.querySelector(`#act`),
    touch: a,
    onMute(e) {
      A = e;
    },
    onExit(t) {
      e.querySelector(`#btn-exit`)?.addEventListener(`click`, (e) => {
        (e.preventDefault(), e.currentTarget.blur(), t());
      });
    },
    onAtlas(t) {
      e.querySelector(`#btn-atlas`)?.addEventListener(`click`, (e) => {
        (e.preventDefault(), e.currentTarget.blur(), t());
      });
    },
    onView(e) {
      I = e;
    },
    setView(e, { announce: t = !1 } = {}) {
      L(e);
      try {
        localStorage.setItem(Qe, e);
      } catch {}
      t &&
        R.toast(
          e === `first`
            ? F(`第一人称 · 用你自己的眼睛看`, `First person · through your own eyes`)
            : F(`第三人称 · 看得见你自己`, `Third person · you in the picture`),
          1800,
        );
    },
    say(e, t, { hold: n = null } = {}) {
      (clearTimeout(d), clearInterval(f), y?.(), (o.querySelector(`.sub-who`).textContent = e || ``));
      let r = [...t],
        i = 0;
      ((s.textContent = ``),
        (c.textContent = t),
        o.classList.remove(`thinking`),
        o.classList.add(`show`),
        (x = performance.now()));
      let a = () => {
        (clearInterval(f), (_ = null), (s.textContent = t), (c.textContent = ``));
      };
      ((_ = a),
        (f = setInterval(() => {
          ((i = Math.min(r.length, i + 2)),
            (s.textContent = r.slice(0, i).join(``)),
            (c.textContent = r.slice(i).join(``)),
            i >= r.length && a());
        }, 30)));
      let l = n ?? Math.max(2600, r.length * (P === `en` ? 55 : 130));
      return new Promise((e) => {
        let t = () => {
          (clearTimeout(d),
            clearInterval(f),
            (h = null),
            (_ = null),
            (y = null),
            o.classList.remove(`show`, `thinking`),
            e());
        };
        ((h = t),
          (y = () => {
            ((y = null), e());
          }),
          (d = setTimeout(t, l)));
      });
    },
    think(e, t) {
      (clearTimeout(d),
        clearInterval(f),
        y?.(),
        (h = null),
        (_ = null),
        (o.querySelector(`.sub-who`).textContent = e || ``),
        (s.textContent = t || ``),
        (c.textContent = ``),
        o.classList.add(`show`, `thinking`),
        (x = performance.now()));
    },
    wait() {
      o.classList.contains(`show`) && o.classList.add(`thinking`);
    },
    hideSay() {
      (clearTimeout(d), clearInterval(f), y?.(), (h = null), (_ = null), o.classList.remove(`show`, `thinking`));
    },
    get saying() {
      return o.classList.contains(`show`);
    },
    onSkip(e) {
      g = e;
    },
    setScene(e) {
      ((v = e), document.body.classList.toggle(`in-scene`, e));
    },
    toast(e, t = 2600) {
      (clearTimeout(p),
        (l.textContent = e),
        l.classList.add(`show`),
        (p = setTimeout(() => l.classList.remove(`show`), t)));
    },
    setProgress(t) {
      e.querySelectorAll(`#strip i`).forEach((e, n) => e.classList.toggle(`on`, n < t));
    },
    hideHint() {
      (clearTimeout(m), u.classList.add(`gone`));
    },
    showHint(e = 9e3) {
      (u.classList.remove(`gone`), clearTimeout(m), (m = setTimeout(() => u.classList.add(`gone`), e)));
    },
    ripple(t, n) {
      let r = document.createElement(`i`);
      ((r.className = `ripple`),
        (r.style.left = `${t}px`),
        (r.style.top = `${n}px`),
        e.appendChild(r),
        setTimeout(() => r.remove(), 750));
    },
    coach() {
      if (!a) {
        R.showHint();
        return;
      }
      try {
        if (localStorage.getItem(`lifeplaza.coached`)) {
          R.showHint(5e3);
          return;
        }
        localStorage.setItem(`lifeplaza.coached`, `1`);
      } catch {}
      R.hideHint();
      let t = document.createElement(`div`);
      ((t.className = `coach`),
        (t.innerHTML = `
        <div class="coach-look"><i></i><span>${F(`右边滑动<br/>转视角`, `Swipe here<br/>to look`)}</span></div>
        <div class="coach-tap"><i></i><span>${F(`点一下地面<br/>直接走过去`, `Tap the ground<br/>to walk there`)}</span></div>
        <div class="coach-pinch"><span>${F(`推到底就跑 · 两指拉近，拉到最近就是第一人称`, `Push to the rim to run · pinch all the way in for first person`)}</span></div>
        <div class="coach-joy"></div>`),
        e.appendChild(t),
        requestAnimationFrame(() => t.classList.add(`show`)));
      let n = !1,
        r = () => {
          n ||
            ((n = !0),
            t.classList.remove(`show`),
            setTimeout(() => t.remove(), 500),
            window.removeEventListener(`pointerdown`, r, !0));
        };
      (setTimeout(() => window.addEventListener(`pointerdown`, r, !0), 400), setTimeout(r, 9e3));
    },
  };
  return R;
}
var tt = Object.freeze([`aa`, `ih`, `ou`, `ee`, `oh`]),
  nt = (e, t, n) => Math.min(n, Math.max(t, e)),
  rt = (e, t = `zh`) => nt([...String(e || ``)].length * (t === `en` ? 0.065 : 0.22), 0.8, 8);
function it(e, t, n = 60) {
  let r = Math.max(1, Math.round(t / n)),
    i = Math.max(1, Math.ceil(e.length / r)),
    a = new Float32Array(i),
    o = new Float32Array(i).fill(0.5),
    s = new Float32Array(i),
    c = 0;
  for (let t = 0; t < i; t++) {
    let i = t * r,
      o = Math.min(e.length, i + r),
      l = 0,
      u = 0,
      d = i > 0 ? e[i - 1] : e[0] || 0;
    for (let t = i; t < o; t++) {
      let n = e[t];
      ((l += n * n), (u += (n - d) * (n - d)), (d = n));
    }
    let f = nt((Math.sqrt(l / Math.max(1, o - i)) - 0.015) * 5.5, 0, 1);
    ((c += (f - c) * Math.min(1, (f > c ? 28 : 14) / n)), (a[t] = c), (s[t] = f > 0.05 && l > 1e-9 ? u / l : 0));
  }
  let l = 0,
    u = 0;
  for (let e = 0; e < i; e++) s[e] > 0 && ((l += Math.log2(s[e])), u++);
  if (u) {
    let e = l / u;
    for (let t = 0; t < i; t++) s[t] > 0 && (o[t] = nt(0.5 + 0.5 * (Math.log2(s[t]) - e), 0, 1));
  }
  return { fps: n, level: a, bright: o, seconds: e.length / t };
}
function at(e, t, n = {}) {
  let r = nt(Math.floor(t * e.fps), 0, e.level.length - 1),
    i = t > e.seconds + 0.05 ? 0 : e.level[r],
    a = e.bright[r],
    o = 0.5 + 0.5 * Math.sin(t * 9.7);
  ((n.aa = i * (0.55 + 0.45 * (1 - Math.abs(a - 0.5) * 2))),
    (n.oh = i * Math.max(0, 0.5 - a) * 1.4 * (0.6 + 0.4 * o)),
    (n.ou = i * Math.max(0, 0.5 - a) * 0.6 * (1 - o)),
    (n.ih = i * Math.max(0, a - 0.5) * 1.4 * o),
    (n.ee = i * Math.max(0, a - 0.5) * 0.7 * (1 - o)));
  for (let e of tt) n[e] = Math.min(1, n[e]);
  return n;
}
async function ot(e) {
  let t = globalThis.OfflineAudioContext || globalThis.webkitOfflineAudioContext;
  if (!t) return null;
  let n = await (await fetch(e)).arrayBuffer(),
    r = new t(1, 1, 24e3),
    i = await new Promise((e, t) => {
      let i = r.decodeAudioData(n, e, t);
      i?.then && i.then(e, t);
    });
  return it(i.getChannelData(0), i.sampleRate);
}
function st() {
  let e = new Map(),
    t = null,
    n = null,
    r = {},
    i = (e) => (e?.face?.hasMouth ? e.face : null);
  function a() {
    n &&= (clearTimeout(n.timer), n.face.setTalking(!1), null);
  }
  function o() {
    if ((a(), !t)) return;
    let { face: e, raf: n } = t;
    ((t = null), cancelAnimationFrame(n), e.setTalking(!1));
    for (let t of tt) e.setViseme(t, 0);
  }
  function s(n, a, s) {
    o();
    let c = i(s);
    if (!c || !n || !a) return;
    e.has(a) ||
      e.set(
        a,
        ot(a).catch(() => null),
      );
    let l = (t = { face: c, env: null, raf: 0 });
    (c.setTalking(!0),
      e.get(a).then((e) => {
        t === l && e && ((l.env = e), c.setTalking(!1));
      }));
    let u = () => {
      if (t === l) {
        if (n.ended || (n.paused && n.currentTime > 0)) {
          o();
          return;
        }
        if (l.env) {
          at(l.env, n.currentTime, r);
          for (let e of tt) c.setViseme(e, r[e]);
        }
        l.raf = requestAnimationFrame(u);
      }
    };
    l.raf = requestAnimationFrame(u);
  }
  function c(e, t) {
    o();
    let r = i(e);
    if (!r || !(t > 0)) return;
    r.setTalking(!0);
    let s = (n = {
      face: r,
      timer: setTimeout(() => {
        n === s && a();
      }, t * 1e3),
    });
  }
  return { follow: s, mime: c, stop: o };
}
function ct() {
  let e = new DataView(new ArrayBuffer(844)),
    t = (t, n) => {
      for (let r = 0; r < n.length; r += 1) e.setUint8(t + r, n.charCodeAt(r));
    };
  (t(0, `RIFF`),
    e.setUint32(4, 836, !0),
    t(8, `WAVE`),
    t(12, `fmt `),
    e.setUint32(16, 16, !0),
    e.setUint16(20, 1, !0),
    e.setUint16(22, 1, !0),
    e.setUint32(24, 8e3, !0),
    e.setUint32(28, 8e3, !0),
    e.setUint16(32, 1, !0),
    e.setUint16(34, 8, !0),
    t(36, `data`),
    e.setUint32(40, 800, !0));
  for (let t = 0; t < 800; t += 1) e.setUint8(44 + t, 128);
  return URL.createObjectURL(new Blob([e], { type: `audio/wav` }));
}
var lt = (e) => new Promise((t) => setTimeout(t, e));
function ut({ hud: e, lang: t, mouth: n = null }) {
  let r = new Audio();
  r.preload = `auto`;
  let i = st(),
    a = (e) => {
      try {
        return typeof n == `function` ? n(e) : null;
      } catch {
        return null;
      }
    },
    o = new Map(),
    s = new Map(),
    c = 0,
    l = !1,
    u = !1,
    d = () => {
      l || ((l = !0), (r.muted = u), r.src || ((r.src = ct()), r.play().catch(() => {})));
    };
  (G(d), document.addEventListener(`WeixinJSBridgeReady`, d, { once: !0 }));
  let f = (e, n) => `${n}|${t}|${e}`,
    p = (e, n) => {
      let r = f(e, n);
      return (
        o.has(r) ||
          o.set(
            r,
            W.tts(e, { role: n, lang: t }).then((e) => (e && s.set(r, e), e)),
          ),
        o.get(r)
      );
    },
    m = () => l && !u,
    h = null,
    g = Promise.resolve();
  e.onSkip(() => (h ? (r.pause(), i.stop(), h(), !0) : !1));
  let _ = null,
    v = (e, t) =>
      new Promise((n) => {
        let r = () => {
          (_ === r && (_ = null), n());
        };
        ((_ = r), Promise.resolve(e).then(r, r), t.then(r));
      });
  async function y(n, o, s, l, u = null) {
    let d = m() ? await Promise.race([p(o, s), new Promise((e) => setTimeout(() => e(null), 6e3))]) : null;
    if (l !== c) return;
    if (!d && !u) {
      (i.mime(a(s), rt(o, t)), await e.say(n, o));
      return;
    }
    if (!d) {
      i.mime(a(s), rt(o, t));
      let r = e.say(n, o, { hold: 6e5 });
      (await Promise.race([r, lt(Math.max(2600, [...o].length * (t === `en` ? 55 : 130)))]),
        await v(u, r),
        l === c && e.hideSay());
      return;
    }
    r.src = d;
    let f = new Promise((e) => {
        let t = () => {
          ((h = null), r.removeEventListener(`ended`, t), r.removeEventListener(`error`, t), e());
        };
        ((h = t), r.addEventListener(`ended`, t), r.addEventListener(`error`, t));
      }),
      g = e.say(n, o, { hold: 6e5 });
    i.follow(r, d, a(s));
    try {
      (await r.play(), await f);
    } catch {
      (i.mime(a(s), rt(o, t)), await new Promise((e) => setTimeout(e, Math.max(2200, o.length * 110))));
    }
    (l === c && i.stop(),
      u && l === c && (await v(u, g)),
      l === c && (await new Promise((e) => setTimeout(e, 280)), e.hideSay()));
  }
  async function b(n, o, l, u, { grace: d, more: g }) {
    let _ = m() ? p(o, l) : null,
      v = _ ? s.get(f(o, l)) || (await Promise.race([_, lt(d)])) : null;
    if (u !== c) return;
    let y = performance.now(),
      b = Math.max(2200, [...o].length * (t === `en` ? 55 : 125));
    if (
      (e.say(n, o, { hold: 6e5 }),
      await new Promise((e) => {
        let n = !1,
          s = 0,
          d = () => {
            n ||
              ((n = !0),
              clearTimeout(s),
              (h = null),
              r.removeEventListener(`ended`, d),
              r.removeEventListener(`error`, d),
              i.stop(),
              e());
          };
        h = d;
        let f = (e) => {
          ((r.src = e),
            r.addEventListener(`ended`, d),
            r.addEventListener(`error`, d),
            i.follow(r, e, a(l)),
            r
              .play()
              .then(() => clearTimeout(s))
              .catch(() => {}));
        };
        ((s = setTimeout(d, b)),
          v
            ? f(v)
            : (i.mime(a(l), rt(o, t)),
              _?.then((e) => {
                !n && e && u === c && performance.now() - y < 1500 && f(e);
              })));
      }),
      u === c)
    ) {
      if (g()) {
        e.wait();
        return;
      }
      (await lt(280), u === c && !g() && e.hideSay());
    }
  }
  return {
    async say(e, t, { role: n = `melies`, hold: r = null } = {}) {
      let i = ++c;
      _?.();
      let a = (Array.isArray(t) ? t : [t]).filter(Boolean);
      a.forEach((e) => l && !u && p(e, n));
      for (let [t, o] of a.entries()) {
        if (i !== c) return !1;
        await y(e, o, n, i, t === a.length - 1 ? r : null);
      }
      return i === c;
    },
    queue(e, t, { role: n = `melies` } = {}) {
      let r = c;
      return (l && !u && p(t, n), (g = g.then(() => (r === c ? y(e, t, n, r) : null))), g);
    },
    reply(t, { role: n = `melies` } = {}) {
      let o = ++c;
      (r.pause(), i.stop(), h?.(), _?.());
      let l = !0,
        u = 0,
        d = 0,
        g = Promise.resolve(),
        v = null,
        y = () => o === c;
      return {
        get live() {
          return y();
        },
        get said() {
          return d;
        },
        think(o) {
          if (!y() || d) return;
          e.think(t, o);
          let c = m() ? s.get(f(o, n)) : null;
          if (!c) return;
          v?.();
          let l = new Promise((e) => {
            let t = 0,
              o = () => {
                (clearTimeout(t),
                  r.removeEventListener(`ended`, o),
                  r.removeEventListener(`error`, o),
                  v === o && (v = null),
                  e());
              };
            ((v = o),
              (t = setTimeout(o, 4500)),
              r.addEventListener(`ended`, o),
              r.addEventListener(`error`, o),
              (r.src = c),
              i.follow(r, c, a(n)),
              r.play().catch(o));
          });
          g = g.then(() => l);
        },
        line(e) {
          if (!y() || !e) return;
          m() && p(e, n);
          let r = d === 0;
          ((u += 1),
            (d += 1),
            (g = g
              .then(() => (y() ? b(t, e, n, o, { grace: r ? 900 : 450, more: () => l || u > 1 }) : null))
              .finally(() => {
                --u;
              })));
        },
        end() {
          return (
            (l = !1),
            g.then(() => {
              y() && !u && e.hideSay();
            })
          );
        },
      };
    },
    prefetch(e, t = `melies`) {
      u || (Array.isArray(e) ? e : [e]).filter(Boolean).forEach((e) => p(e, t));
    },
    stop() {
      ((c += 1), r.pause(), i.stop(), h?.(), _?.(), e.hideSay());
    },
    setMuted(e) {
      ((u = e), (r.muted = e));
    },
    get muted() {
      return u;
    },
  };
}
var dt = P === `en` ? `en` : `zh`,
  ft = (e) => e[(Math.random() * e.length) | 0],
  pt = {
    melies: { zh: [`嗯……`, `哈，`, `这个嘛……`], en: [`Mm…`, `Ha —`, `Well now…`] },
    vangogh: { zh: [`嗯……`, `啊……`, `嗯，`], en: [`Mm…`, `Ah…`, `Hm…`] },
    lishizhen: { zh: [`嗯。`, `唔……`, `这个么……`], en: [`Mm.`, `Hmm…`, `Well…`] },
    guide: { zh: [`嗯。`, `嗯……`], en: [`Mm.`, `Mm…`] },
  },
  mt = {
    melies: { zh: `且慢，好戏要等一等。`, en: `Patience — the best tricks take a moment.` },
    vangogh: { zh: `等等，我在找那个词。`, en: `Wait — I'm finding the word.` },
    lishizhen: { zh: `莫急，容老夫想想。`, en: `No hurry. Let me think.` },
    guide: { zh: `这句话，我得想一想。`, en: `Let me think about that properly.` },
  },
  ht = {
    melies: { zh: `去吧，到处看看！我就在这儿。`, en: `Go on — have a look around! I'm right here.` },
    vangogh: { zh: `去吧，慢慢看。我就在这儿。`, en: `Go on, take your time. I'm right here.` },
    lishizhen: { zh: `去吧，不急。老夫就在这儿。`, en: `Go on, no hurry. This old man isn't going anywhere.` },
    guide: { zh: `去吧，我在这儿。`, en: `Go on — I'll be here.` },
  },
  gt = (e) => ({ hums: (pt[e] || pt.guide)[dt], slow: (mt[e] || mt.guide)[dt], letGo: (ht[e] || ht.guide)[dt] }),
  _t = new Set([`KeyW`, `KeyA`, `KeyS`, `KeyD`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`]),
  q = {
    recording: F(`在听……松开就发出去 · 往上滑取消`, `Listening… let go to send · slide up to cancel`),
    tapped: F(`在听。说完，点一下。`, `Listening. Tap when you're done.`),
    pause: F(`说完了？点一下。`, `Done? Tap.`),
    cancel: F(`松开，这句就不算了`, `Let go, and this one won't count`),
    thinking: F(`让我听清楚……`, `Making out what you said…`),
    short: F(`再说长一点？按住，重新说。`, `A little longer? Hold and say it again.`),
    shortTap: F(`再说长一点？点一下，重新说。`, `A little longer? Tap and say it again.`),
    silent: F(`好像没听见声音。再试一次？`, `I didn't hear anything. Try again?`),
    failed: F(`没听清。写下来也行。`, `I couldn't make that out. Writing it works too.`),
    denied: F(`没有麦克风也没关系，写下来也一样。`, `No microphone? That's fine — writing works just as well.`),
  },
  vt = new Set([`idle`, `short`, `silent`, `failed`, `denied`]),
  yt = new Set([`recording`, `cancel`, `starting`, `listening`, `pause`]),
  bt = (e) =>
    (String(e || ``).match(/[^。！？!?…]+(?:[。！？!?…]+["”」』’）)]*|$)/g) || []).map((e) => e.trim()).filter(Boolean);
function xt(
  e,
  {
    chips: t = [],
    onAsk: n,
    onClose: r,
    onLeave: i,
    voice: a = null,
    role: o = `guide`,
    placeholder: s = F(`想问他什么？`, `Ask him anything…`),
    thinking: c = F(`他在想……`, `Thinking…`),
    again: l = F(`还想问什么？`, `Anything else?`),
  },
) {
  let u = () => document.body.classList.contains(`touch`),
    d = document.createElement(`div`);
  ((d.className = `talk`),
    (d.innerHTML = `
    <div class="talk-top"><div class="talk-chips"></div><div class="talk-said"></div><div class="talk-tip" aria-live="polite"></div></div>
    <form class="talk-bar" autocomplete="off">
      <input class="talk-input" maxlength="200" placeholder="${s}" enterkeyhint="send" />
      <button class="talk-mic" type="button" aria-label="${F(`说给他听`, `Say it`)}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg></button>
      <button class="talk-send" type="submit">${F(`说`, `Say`)}</button>
      <button class="talk-x" type="button" aria-label="${F(`关闭`, `Close`)}">×</button>
    </form>`),
    e.appendChild(d));
  let f = d.querySelector(`.talk-input`),
    p = d.querySelector(`.talk-chips`),
    m = d.querySelector(`.talk-said`),
    h = d.querySelector(`.talk-tip`),
    g = !1,
    _ = !1,
    v = null,
    y = !1,
    b = 0,
    x = 0,
    S = 0,
    C = 0,
    w = 0,
    T = !1,
    E = ``,
    D = ``,
    O = null,
    k = t.slice(),
    A = () => d.classList.toggle(`has-text`, !!f.value.trim()),
    j = () => {
      (p.replaceChildren(
        ...k.map((e) => {
          let t = document.createElement(`button`);
          return (
            (t.type = `button`),
            (t.className = `talk-chip`),
            (t.textContent = e),
            t.addEventListener(`click`, () => P(e)),
            t
          );
        }),
      ),
        d.classList.toggle(`no-chips`, !k.length));
    };
  j();
  let M = (e, t = 2400) => {
      (clearTimeout(S),
        (h.textContent = e || ``),
        d.classList.toggle(`tipping`, !!e),
        e && t && (S = setTimeout(() => d.classList.remove(`tipping`), t)));
    },
    N = () => !!f.value.trim() || document.activeElement === f || b > 120 || y;
  async function P(e) {
    let t = String(e || ``).trim(),
      r = performance.now();
    if (!t || r - w < 600) return;
    ((w = U = r), v?.abort());
    let i = (v = new AbortController());
    ((_ = !0),
      d.classList.add(`busy`),
      (f.value = ``),
      A(),
      (f.placeholder = c),
      (D = t),
      (m.textContent = F(`「${t}」`, `“${t}”`)),
      M(``),
      (k = k.filter((e) => e !== t)),
      u() && f.blur());
    try {
      let e = await n(t, {
        signal: i.signal,
        begin: () => {
          i === v && (f.placeholder = l);
        },
      });
      (i === v && e?.reply && (E = e.reply), i === v && e?.chips?.length && (k = e.chips.slice(0, 3)));
    } catch (e) {
      console.warn(`talk`, e);
    } finally {
      i === v && ((_ = !1), (v = null), d.classList.remove(`busy`), (f.placeholder = l), j());
    }
  }
  (d.querySelector(`form`).addEventListener(`submit`, (e) => {
    (e.preventDefault(), y && O?.cancel?.(), P(f.value));
  }),
    d.querySelector(`.talk-x`).addEventListener(`click`, () => W.close()),
    f.addEventListener(`input`, A),
    f.addEventListener(`keydown`, (e) => {
      if (e.key === `Escape`) {
        (e.preventDefault(), W.close());
        return;
      }
      !e.isComposing &&
        _t.has(e.code) &&
        ((e.code.startsWith(`Arrow`)
          ? f.value
          : !(e.repeat && f.value && [...f.value].every((t) => t.toLowerCase() === e.key.toLowerCase()))) ||
          (e.preventDefault(),
          (f.value = ``),
          A(),
          f.blur(),
          document.body.dispatchEvent(new KeyboardEvent(`keydown`, { code: e.code, key: e.key, bubbles: !0 }))));
    }),
    window.addEventListener(
      `keydown`,
      (e) => {
        if (!(!g || e.repeat || e.isComposing || e.target.closest?.(`input, textarea`))) {
          if (e.key === `Escape`) {
            W.close();
            return;
          }
          e.key === `Enter` && (e.preventDefault(), e.stopImmediatePropagation(), f.focus());
        }
      },
      !0,
    ),
    document.addEventListener(
      `touchstart`,
      (e) => {
        g && document.activeElement === f && !d.contains(e.target) && (f.blur(), (x = performance.now()));
      },
      { capture: !0, passive: !0 },
    ));
  let I = d.querySelector(`.talk-mic`),
    L = !1;
  for (let [e, t] of [
    [!0, `pointerdown`],
    [!1, `pointerup`],
    [!1, `pointercancel`],
    [!0, `touchstart`],
    [!1, `touchend`],
    [!1, `touchcancel`],
  ])
    I.addEventListener(
      t,
      () => {
        L = e;
      },
      { passive: !0 },
    );
  ((O = ee(I, {
    lang: dt,
    context: () => ({ her: E, you: D }),
    onPartial: (e) => {
      ((f.value = e), A());
    },
    onText: (e) => {
      ((y = !1),
        d.classList.remove(`mic-on`),
        (f.value = e),
        A(),
        setTimeout(() => {
          f.value.trim() === String(e).trim() && P(e);
        }, 350));
    },
    onState: (e) => {
      let t = y;
      ((y = !vt.has(e)),
        y && !t && a?.stop?.(),
        d.classList.toggle(`mic-on`, y),
        d.classList.toggle(`listening`, yt.has(e)),
        d.classList.toggle(`paused`, e === `pause`));
      let n = typeof O?.start == `function`,
        r =
          e === `recording`
            ? L
              ? q.recording
              : q.tapped
            : e === `starting` || e === `listening`
              ? q.tapped
              : e === `short` && n
                ? q.shortTap
                : q[e];
      (M(r || ``, y ? 0 : 2600), e === `denied` && d.classList.add(`no-mic`));
    },
  })),
    O?.supported || d.classList.add(`no-mic`));
  let R = window.visualViewport,
    z = () => {
      ((b = R ? Math.max(0, window.innerHeight - R.height - R.offsetTop) : 0),
        d.style.setProperty(`--kb`, `${Math.round(b)}px`),
        document.body.style.setProperty(`--talk-kb`, `${Math.round(b)}px`),
        document.body.style.setProperty(`--talk-h`, `${Math.round(d.offsetHeight || 0)}px`));
    };
  (R?.addEventListener(`resize`, z), R?.addEventListener(`scroll`, z));
  let B = () => {
      g && ((g = !1), d.classList.remove(`show`), document.body.classList.remove(`talking`), f.blur(), M(``), r?.());
    },
    V = 0,
    H = !1,
    U = -1 / 0,
    W = {
      open() {
        if (g) return;
        ((g = !0), (H = !0), (V = 0), d.classList.add(`show`), document.body.classList.add(`talking`), z());
        let e = gt(o);
        (a?.prefetch([...e.hums, e.slow, e.letGo], o), u() || setTimeout(() => f.focus(), 50));
      },
      close() {
        B();
      },
      get isOpen() {
        return g;
      },
      get busy() {
        return _;
      },
      get composing() {
        return N();
      },
      leave({ to: e } = {}) {
        if (!g && !_) return !0;
        if (N()) {
          let e = performance.now();
          return (
            e - C > 4e3 &&
              ((C = e),
              M(
                y ? F(`还在听你说`, `Still listening to you`) : F(`你还有话没说完`, `You were saying something`),
                2600,
              )),
            !1
          );
        }
        let t = _;
        return (
          v?.abort(),
          (v = null),
          (_ = !1),
          d.classList.remove(`busy`),
          (f.placeholder = l),
          j(),
          B(),
          i?.({ cut: t, to: e }),
          !0
        );
      },
      walk(e, { move: t, yaw: n, at: r, host: i, far: a }) {
        if (!g && !_) return ((V = 0), !1);
        let o = i.x - r.x,
          s = i.z - r.z,
          c = Math.hypot(o, s) || 1e-6,
          l = Math.hypot(t.x, t.y) >= 0.5;
        l || (H = !1);
        let u = !1;
        if (l && !H && performance.now() - U > 2500) {
          let e = Math.sin(n),
            r = Math.cos(n),
            i = r * t.x - e * t.y,
            a = -e * t.x - r * t.y;
          u = (i * o + a * s) / ((Math.hypot(i, a) || 1) * c) < 0.6;
        }
        return ((V = u ? V + e : Math.max(0, V - e * 2)), V >= 0.5 || (u && c > a) ? ((V = 0), W.leave()) : !1);
      },
      leaveFor(e, t, n, { near: r = 1.6, step: i = 0.8 } = {}) {
        return g
          ? Math.hypot(e.x - t.x, e.z - t.z) < r || Math.hypot(e.x - n.x, e.z - n.z) < i
            ? !1
            : W.leave({ to: `floor` })
          : !0;
      },
      swallow() {
        let e = performance.now() - x < 700;
        return ((x = 0), e);
      },
      letGo() {
        return T ? null : ((T = !0), gt(o).letGo);
      },
      tip: M,
    };
  return W;
}
async function St({ voice: e, who: t, role: n, signal: r, ask: i, fallback: a, onBegin: o = () => {} }) {
  let s = gt(n),
    c = e.reply(t, { role: n });
  c.think(ft(s.hums));
  let l = new AbortController(),
    u = () => l.abort();
  r?.addEventListener(`abort`, u, { once: !0 });
  let d = !1,
    f = [],
    p = setTimeout(() => {
      d || c.think(s.slow);
    }, 3e3),
    m = setTimeout(() => {
      f.length || u();
    }, 1e4),
    h = null;
  try {
    h = await i({
      signal: l.signal,
      onFirst: () => {
        d = !0;
      },
      onLine: (e) => {
        (f.length || o(), f.push(e), c.line(e));
      },
    });
  } catch {
    h = null;
  } finally {
    (clearTimeout(p), clearTimeout(m), r?.removeEventListener(`abort`, u));
  }
  if (r?.aborted) return { reply: f.join(``), chips: [], cut: !0 };
  if (!f.length) {
    if (h?.reply && !l.signal.aborted) {
      o();
      for (let e of bt(h.reply)) (f.push(e), c.line(e));
    } else (o(), c.line(a), (f = []));
  }
  return (await c.end(), { reply: f.join(``), chips: (f.length && h?.chips) || [], cut: !1 });
}
var J = (e) =>
    String(e ?? ``).replace(/[&<>"]/g, (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e]),
  Y = Object.freeze({
    serif: `'Songti SC', 'STSong', 'Noto Serif SC', Georgia, serif`,
    kai: `'Kaiti SC', 'STKaiti', 'KaiTi', Georgia, serif`,
    sans: `'PingFang SC', 'Microsoft YaHei', sans-serif`,
  }),
  Ct = (e) =>
    new Promise((t) => {
      if (!e) {
        t(null);
        return;
      }
      let n = new Image();
      ((n.crossOrigin = `anonymous`), (n.onload = () => t(n)), (n.onerror = () => t(null)), (n.src = e));
    });
function X(e, t, n, r, i, a, { align: o = `center` } = {}) {
  e.textAlign = o;
  let s = /[\u3400-\u9fff]/.test(t) ? [...String(t)] : String(t).split(/(\s+)/),
    c = ``,
    l = r;
  for (let t of s) {
    let r = c + t;
    e.measureText(r).width > i && c.trim() ? (e.fillText(c.trim(), n, l), (c = t.trimStart()), (l += a)) : (c = r);
  }
  return (c.trim() && (e.fillText(c.trim(), n, l), (l += a)), l);
}
var wt = (e, t) => {
    let n = document.createElement(`a`);
    ((n.download = `${t}-${Date.now()}.png`), (n.href = e.toDataURL(`image/png`)), n.click());
  },
  Tt = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path class="on" d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/><path class="off" d="M17 9.5l5 5M22 9.5l-5 5"/></svg>`,
  Z = () => /MicroMessenger/i.test(navigator.userAgent),
  Et = new WeakMap(),
  Dt = {
    template: () => `
    <div class="gift-stamp">STAR FILM · MONTREUIL</div>
    <div class="mf-media" data-show="still">
      <div class="mf-poster"><img alt="" /><i class="mf-brush"></i><canvas class="mf-sepia" hidden></canvas><span class="mf-tint-hint" hidden>${F(`抹上颜色`, `Brush on the colour`)}</span></div>
      <div class="mf-reel"><video playsinline webkit-playsinline muted loop preload="auto"></video><button type="button" class="mf-sound" aria-label="${F(`声音`, `Sound`)}">${Tt}</button></div>
      <div class="mf-dev"><i></i><span>${F(`剧照还在上色`, `The still is being coloured`)}</span></div>
    </div>
    <div class="mf-tabs"><button type="button" data-v="still">${F(`海报`, `Poster`)}</button><button type="button" data-v="film">${F(`影片`, `Film`)}</button></div>
    <div class="gift-meta"><div class="gift-title"></div><div class="gift-trick"></div><div class="gift-note"></div><div class="gift-sign">— Georges Méliès</div></div>
    <div class="mf-more"><button type="button" class="mf-save-still">${F(`也收下海报`, `Keep the poster too`)}</button><span class="mf-hint"></span></div>`,
    foot: () =>
      F(
        `AI 演绎 · 你在梅里爱的摄影棚里亲手摇出来的一部戏法片 · 原片《月球旅行记》1902 属公有领域`,
        `An AI performance · a trick film you cranked in Méliès' studio · A Trip to the Moon (1902) is in the public domain`,
      ),
    saveLabel: () => F(`收下这一镜`, `Keep this film`),
    fill(e, t) {
      ((e.__card = t), Et.set(t, e));
      let n = (t) => e.querySelector(t),
        r = n(`.mf-media`),
        i = n(`video`),
        a = n(`.mf-poster img`),
        o = !!t.video?.url,
        s = !!t.image;
      o &&
        i.dataset.src !== t.video.url &&
        ((i.dataset.src = t.video.url), (i.src = t.video.url), (i.muted = !0), r.classList.remove(`loud`));
      let c = s ? `${t.image}|${t.title}|${t.note}` : ``;
      (c &&
        a.dataset.key !== c &&
        ((a.dataset.key = c),
        !a.getAttribute(`src`) && !t.tint && (a.src = t.image),
        At(t).then((n) => {
          if (!n || a.dataset.key !== c || ((a.src = n.url), e.__revealed)) return;
          e.__revealed = !0;
          let i = t.tint && Ot(e, n.canvas, t.tint);
          (r.classList.remove(`reveal`, `arrive`), r.offsetWidth, r.classList.add(i ? `arrive` : `reveal`));
        })),
        r.classList.toggle(`has-film`, o),
        r.classList.toggle(`has-still`, s),
        r.classList.toggle(`developing`, !s && !t.fogged),
        r.dataset.picked || (r.dataset.show = s || !o ? `still` : `film`),
        e.querySelector(`.mf-tabs`).classList.toggle(`show`, o && s),
        e.querySelectorAll(`.mf-tabs button`).forEach((e) => e.classList.toggle(`on`, e.dataset.v === r.dataset.show)));
      let l = () => e.classList.toggle(`mf-poster-on`, r.dataset.show === `still` && r.classList.contains(`has-still`));
      if (
        (l(),
        e.querySelector(`.mf-more`).classList.toggle(`show`, (o && s && !Z()) || (Z() && s)),
        (n(`.mf-save-still`).hidden = Z()),
        (n(`.mf-hint`).textContent =
          Z() && s ? F(`长按海报，存进相册。`, `Press and hold the poster to keep it.`) : ``),
        (n(`.gift-save`).textContent = Dt.saveLabel()),
        (n(`.gift-title`).textContent = t.title || ``),
        (n(`.gift-trick`).textContent = t.trick || ``),
        (n(`.gift-note`).textContent = t.note || ``),
        o && r.dataset.show === `film` && i.play().catch(() => {}),
        e.dataset.wired)
      )
        return;
      e.dataset.wired = `1`;
      let u = (e) => {
        ((i.muted = !e), r.classList.toggle(`loud`, e), e && i.play().catch(() => {}));
      };
      (n(`.mf-sound`).addEventListener(`click`, (e) => {
        (e.stopPropagation(), u(i.muted));
      }),
        i.addEventListener(`click`, () => u(i.muted)),
        e.querySelectorAll(`.mf-tabs button`).forEach((t) =>
          t.addEventListener(`click`, () => {
            ((r.dataset.show = t.dataset.v),
              (r.dataset.picked = `1`),
              e.querySelectorAll(`.mf-tabs button`).forEach((e) => e.classList.toggle(`on`, e === t)),
              l(),
              t.dataset.v === `film` ? i.play().catch(() => {}) : i.pause(),
              Z() &&
                (n(`.mf-hint`).textContent =
                  t.dataset.v === `film`
                    ? F(
                        `影片在微信里存不下。换到浏览器里打开，就能收下。`,
                        `WeChat can't keep videos. Open this page in your browser to keep the film.`,
                      )
                    : F(`长按海报，存进相册。`, `Press and hold the poster to keep it.`)));
          }),
        ),
        n(`.mf-save-still`).addEventListener(`click`, () => {
          let t = e.__card;
          t && Pt(t);
        }));
    },
    async save(e) {
      let t = Et.get(e);
      if (Z() && t) {
        let n = t.querySelector(`.mf-media`);
        ((n.dataset.show = e.image ? `still` : `film`),
          (n.dataset.picked = `1`),
          Dt.fill(t, e),
          (t.querySelector(`.mf-hint`).textContent = e.image
            ? F(`长按海报，存进相册。`, `Press and hold the poster to keep it.`)
            : F(
                `影片在微信里存不下。换到浏览器里打开，就能收下。`,
                `WeChat can't keep videos. Open this page in your browser to keep the film.`,
              )),
          t.querySelector(`.mf-more`).classList.add(`show`));
        return;
      }
      if (e.video?.url) {
        let t = document.createElement(`a`);
        ((t.href = e.video.url),
          (t.download = `melies-${Date.now()}.${/mp4/.test(e.video.type || ``) ? `mp4` : `webm`}`),
          document.body.appendChild(t),
          t.click(),
          t.remove());
        return;
      }
      await Pt(e);
    },
  },
  Q = Object.freeze({ x: 130, y: 160, side: 940, W: 1200 });
function Ot(e, t, n) {
  let r = e.querySelector(`.mf-sepia`),
    i = e.querySelector(`.mf-tint-hint`);
  r.width = r.height = 560;
  let a = r.getContext(`2d`, { willReadFrequently: !0 });
  a.drawImage(t, Q.x, Q.y, Q.side, Q.side, 0, 0, 560, 560);
  try {
    let e = a.getImageData(0, 0, 560, 560),
      t = e.data;
    for (let e = 0; e < t.length; e += 4) {
      let n = Math.min(1, Math.max(0, ((0.3 * t[e] + 0.59 * t[e + 1] + 0.11 * t[e + 2]) / 255 - 0.5) * 1.15 + 0.47));
      ((t[e] = 36 + n * 196), (t[e + 1] = 27 + n * 178), (t[e + 2] = 19 + n * 140));
    }
    a.putImageData(e, 0, 0);
  } catch {
    return !1;
  }
  let o = t.height;
  (Object.assign(r.style, {
    left: `${(Q.x / Q.W) * 100}%`,
    top: `${(Q.y / o) * 100}%`,
    width: `${(Q.side / Q.W) * 100}%`,
    height: `${(Q.side / o) * 100}%`,
    opacity: `1`,
  }),
    (i.style.top = `${((Q.y + Q.side * 0.82) / o) * 100}%`),
    (r.hidden = !1),
    (i.hidden = !1),
    (i.textContent = F(`抹上颜色`, `Brush on the colour`)),
    i.classList.remove(`voila`),
    r.classList.remove(`done`));
  let s = new Set(),
    c = !1,
    l = null,
    u = 0,
    d = !1,
    f = (e, t) => {
      a.globalCompositeOperation = `destination-out`;
      let n = a.createRadialGradient(e, t, 0, e, t, 56);
      (n.addColorStop(0, `rgba(0,0,0,0.95)`),
        n.addColorStop(0.55, `rgba(0,0,0,0.75)`),
        n.addColorStop(1, `rgba(0,0,0,0)`),
        (a.fillStyle = n),
        a.fillRect(e - 56, t - 56, 112, 112));
      for (let n = 0; n < 10; n += 1)
        for (let r = 0; r < 10; r += 1) Math.hypot((n + 0.5) * 56 - e, (r + 0.5) * 56 - t) < 47.6 && s.add(n * 10 + r);
      !c && s.size >= 36 && m();
    },
    p = (e, t) => {
      let n = Math.max(1, Math.ceil(Math.hypot(t.x - e.x, t.y - e.y) / 16.8));
      for (let r = 1; r <= n; r += 1) f(e.x + (t.x - e.x) * (r / n), e.y + (t.y - e.y) * (r / n));
    },
    m = () => {
      ((c = !0),
        clearTimeout(u),
        r.classList.add(`done`),
        n.voila
          ? ((i.textContent = n.voila),
            i.classList.add(`voila`),
            (i.hidden = !1),
            setTimeout(() => {
              i.hidden = !0;
            }, 2200))
          : (i.hidden = !0),
        setTimeout(() => {
          r.hidden = !0;
        }, 900),
        n.done?.());
    },
    h = (e) => {
      let t = r.getBoundingClientRect();
      return { x: ((e.clientX - t.left) / t.width) * 560, y: ((e.clientY - t.top) / t.height) * 560 };
    },
    g = () => {
      (clearTimeout(u), (u = setTimeout(_, 6e3)));
    },
    _ = () => {
      if (c || d || !r.isConnected) return;
      ((d = !0), (i.hidden = !0));
      let e = [];
      for (let t = 0; t < 4; t += 1) {
        let n = 560 * (0.14 + t * 0.24),
          r = t % 2 == 0;
        e.push({ x: r ? -56 * 0.4 : 582.4, y: n - 16.8 }, { x: r ? 582.4 : -56 * 0.4, y: n + 16.8 });
      }
      let t = 0,
        n = 0,
        a = e[0],
        o = () => {
          if (c || !r.isConnected) return;
          if (((n += 0.075), n >= 1)) {
            if (((n = 0), (t += 1), t >= e.length - 1)) {
              c || m();
              return;
            }
            a = e[t];
          }
          let i = e[t],
            s = e[t + 1],
            l = { x: i.x + (s.x - i.x) * n, y: i.y + (s.y - i.y) * n };
          (p(a, l), (a = l), requestAnimationFrame(o));
        };
      requestAnimationFrame(o);
    };
  return (
    (r.onpointerdown = (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        !c && (clearTimeout(u), (i.hidden = !0), r.setPointerCapture?.(e.pointerId), (l = h(e)), f(l.x, l.y)));
    }),
    (r.onpointermove = (e) => {
      if (!l || c) return;
      (e.preventDefault(), e.stopPropagation());
      let t = h(e);
      (p(l, t), (l = t));
    }),
    (r.onpointerup = r.onpointercancel =
      (e) => {
        (e.stopPropagation(), (l = null), c || g());
      }),
    (r.onclick = (e) => e.stopPropagation()),
    g(),
    !0
  );
}
var kt = new Map();
function At(e) {
  let t = `${e.image}|${e.title}|${e.note}|${e.trick}|${e.who}`;
  return (
    kt.has(t) ||
      kt.set(
        t,
        Ct(e.image)
          .then((t) => {
            if (!t) return null;
            let n = jt(e, t);
            try {
              return { canvas: n, url: n.toDataURL(`image/jpeg`, 0.9) };
            } catch {
              return null;
            }
          })
          .catch(() => null),
      ),
    kt.get(t)
  );
}
function jt(e, t) {
  let n = 1200,
    r = document.createElement(`canvas`),
    i = r.getContext(`2d`),
    a = `36px ${Y.sans}`,
    o = `italic 46px ${Y.kai}`;
  i.font = a;
  let s = Nt(i, e.trick || ``, 960);
  i.font = o;
  let c = Nt(i, e.note || ``, 980),
    l = 1252 + (e.who ? 62 : 0) + 68,
    u = l + Math.max(0, s.length - 1) * 50 + 76,
    d = Math.max(1720, u + Math.max(0, c.length - 1) * 64 + 196);
  ((r.width = n),
    (r.height = d),
    (i.fillStyle = `#f6efe2`),
    i.fillRect(0, 0, n, d),
    (i.strokeStyle = `#2b2420`),
    (i.lineWidth = 6),
    i.strokeRect(36, 36, 1128, d - 72),
    (i.lineWidth = 1.5),
    i.strokeRect(52, 52, 1096, d - 104),
    (i.fillStyle = `#14110f`),
    i.fillRect(110, 140, 980, 980));
  let f = Math.min(t.width, t.height);
  return (
    i.drawImage(t, (t.width - f) / 2, (t.height - f) / 2, f, f, Q.x, Q.y, Q.side, Q.side),
    (i.fillStyle = `#2b2420`),
    (i.textAlign = `center`),
    (i.font = `600 30px Georgia, 'Songti SC', serif`),
    i.fillText(`STAR FILM · MONTREUIL`, n / 2, 108),
    (i.font = `700 70px ${Y.serif}`),
    i.fillText(e.title || ``, n / 2, 1252),
    e.who &&
      ((i.font = `36px ${Y.serif}`),
      (i.fillStyle = `#5b4d42`),
      i.fillText(F(`主演　${e.who}`, `starring ${e.who}`), n / 2, 1314)),
    (i.font = a),
    (i.fillStyle = `#5b4d42`),
    s.forEach((e, t) => i.fillText(e, n / 2, l + t * 50)),
    (i.font = o),
    (i.fillStyle = `#2b2420`),
    c.forEach((e, t) => i.fillText(e, n / 2, u + t * 64)),
    (i.font = `italic 34px Georgia, serif`),
    i.fillText(`— Georges Méliès`, n / 2, d - 112),
    (i.font = `22px ${Y.sans}`),
    (i.fillStyle = `#8a7b6e`),
    i.fillText(F(`人生广场 · Life Plaza`, `Life Plaza · 人生广场`), n / 2, d - 70),
    r
  );
}
var Mt = /^[，。、；：？！」』）》…—,.;:?!)\]]/;
function Nt(e, t, n) {
  let r = [],
    i = ``;
  for (let a of String(t).match(/[A-Za-z0-9'’-]+\s*|\s+|./gu) || [])
    i && e.measureText(i + a).width > n && !Mt.test(a) ? (r.push(i.trim()), (i = a.trimStart())) : (i += a);
  return (i.trim() && r.push(i.trim()), r);
}
async function Pt(e) {
  let t = await At(e);
  t && wt(t.canvas, `melies`);
}
var Ft = {
    template: () => `
    <div class="gift-stamp">ARLES · 1888</div>
    <div class="gift-portrait vg-canvas" role="button" tabindex="0" aria-label="${F(`翻过来看看`, `Turn it round`)}">
      <div class="vg-canvas-in">
        <div class="vg-face front"><img alt="" /></div>
        <div class="vg-face back"><div class="vg-back-head"></div><div class="vg-back-note"></div><div class="vg-back-sign">— V.</div></div>
      </div>
    </div>
    <button type="button" class="vg-turn">${F(`翻过来看看`, `Turn it round`)}</button>
    <div class="gift-meta"><div class="gift-title"></div><div class="gift-trick"></div></div>
    <div class="vg-swatches"></div>
    <div class="gift-letter"><div class="gift-note"></div><div class="gift-sign">— Vincent</div></div>`,
    foot: () =>
      F(
        `文森特由 AI 扮演，说的事依据他的生平与书信 · 这间屋子由 World Labs 依他 1888 年的《卧室》（公有领域）建成`,
        `Vincent is played by an AI, from his life and letters · the room was grown by World Labs from his 1888 painting The Bedroom (public domain)`,
      ),
    saveLabel: () => F(`收下画和信`, `Keep the painting and the letter`),
    fill(e, t) {
      let n = (t) => e.querySelector(t);
      ((n(`.vg-face.front img`).src = t.image || ``),
        (n(`.gift-title`).textContent = t.title || ``),
        (n(`.gift-trick`).textContent = t.trick || ``),
        (n(`.gift-note`).textContent = t.note || ``),
        (n(`.vg-swatches`).innerHTML = (t.palette || [])
          .map(
            (e) =>
              `<span class="vg-swatch${e.chosen ? ` chosen` : ``}" style="--c:${J(e.hex)}"><i></i><b>${J(e.name)}</b>${J(e.detail)}</span>`,
          )
          .join(``)));
      let r = t.back?.lines?.length ? t.back : null;
      ((n(`.vg-back-head`).textContent = r?.head || ``),
        (n(`.vg-back-note`).textContent = (r?.lines || []).join(`
`)));
      let i = n(`.vg-canvas`),
        a = n(`.vg-turn`);
      if (
        (i.classList.remove(`turned`),
        (a.hidden = !r),
        (a.textContent = F(`翻过来看看`, `Turn it round`)),
        !i.dataset.wired)
      ) {
        i.dataset.wired = `1`;
        let e = () => {
          if (a.hidden) return;
          let e = i.classList.toggle(`turned`);
          ((a.textContent = e ? F(`翻回去`, `Turn it back`) : F(`翻过来看看`, `Turn it round`)),
            navigator.vibrate?.(8));
        };
        (i.addEventListener(`click`, e),
          i.addEventListener(`keydown`, (t) => {
            (t.key === `Enter` || t.key === ` `) && (t.preventDefault(), e());
          }),
          a.addEventListener(`click`, e));
      }
    },
    async save(e) {
      let t = await Ct(e.image),
        n = 1200,
        r = 2200,
        i = document.createElement(`canvas`);
      ((i.width = n), (i.height = r));
      let a = i.getContext(`2d`);
      ((a.fillStyle = `#f3e9d2`),
        a.fillRect(0, 0, n, r),
        (a.fillStyle = `#6b4a2a`),
        a.fillRect(170, 90, 860, 3440 / 3 + 40),
        t && a.drawImage(t, 190, 110, 820, 3280 / 3));
      let o = 110 + 3280 / 3 + 100;
      ((a.fillStyle = `#2b2420`),
        (a.font = `700 52px ${Y.serif}`),
        (a.textAlign = `center`),
        a.fillText(e.title || ``, n / 2, o),
        (a.font = `italic 26px ${Y.kai}`),
        (a.fillStyle = `#6b5a48`),
        (o = X(a, e.trick || ``, n / 2, o + 56, 900, 38)));
      let s = e.palette || [];
      if (s.length) {
        ((o += 34), (a.font = `26px ${Y.kai}`));
        let e = s.map((e) => ({ p: e, w: 54 + a.measureText(`${e.name} ${e.detail || ``}`).width })),
          t = (n - (e.reduce((e, t) => e + t.w, 0) + (e.length - 1) * 28)) / 2;
        for (let { p: n, w: r } of e)
          ((a.globalAlpha = n.chosen ? 1 : 0.6),
            (a.fillStyle = n.hex),
            a.beginPath(),
            a.arc(t + 18, o, 17, 0, Math.PI * 2),
            a.fill(),
            n.chosen &&
              ((a.strokeStyle = `#2b2420`),
              (a.lineWidth = 3),
              a.beginPath(),
              a.arc(t + 18, o, 23, 0, Math.PI * 2),
              a.stroke()),
            (a.fillStyle = `#2b2420`),
            (a.textAlign = `left`),
            a.fillText(`${n.name} ${n.detail || ``}`, t + 48, o + 9),
            (t += r + 28));
        ((a.globalAlpha = 1), (o += 30));
      }
      ((a.strokeStyle = `rgba(60,90,140,0.18)`), (a.lineWidth = 1));
      for (let e = o + 24; e < 1900; e += 46) (a.beginPath(), a.moveTo(140, e), a.lineTo(1060, e), a.stroke());
      ((a.font = `32px ${Y.kai}`),
        (a.fillStyle = `#22304a`),
        (o = X(a, e.note || ``, 150, o + 60, 900, 46, { align: `left` })),
        (a.font = `italic 40px Georgia, serif`),
        (a.textAlign = `right`),
        a.fillText(`— Vincent`, 1050, Math.min(1940, o + 30)));
      let c = e.back?.lines || [];
      if (c.length) {
        ((a.font = `italic 24px ${Y.kai}`), (a.fillStyle = `#6b5a48`), (a.textAlign = `center`));
        let e = 2080 - c.length * 34;
        for (let t of c) (a.fillText(t, n / 2, e), (e += 34));
      }
      ((a.font = `20px ${Y.sans}`),
        (a.fillStyle = `#8a7b6e`),
        (a.textAlign = `center`),
        a.fillText(F(`人生广场 · Life Plaza · 文森特由 AI 扮演`, `Life Plaza · Vincent played by an AI`), n / 2, 2150),
        wt(i, `vincent`));
    },
  },
  It = `'LzBrush', ${Y.kai}`,
  Lt = () => F(!1, !0),
  Rt = { 君: [`君`, `Chief`], 臣: [`臣`, `Minister`], 佐: [`佐`, `Assistant`], 使: [`使`, `Guide`] },
  zt = {
    chi: [`迟脉`, `A slow pulse`],
    huan: [`缓脉`, `An unhurried pulse`],
    ping: [`平脉`, `An even pulse`],
    shu: [`数脉`, `A quick pulse`],
    breath: [`未诊脉`, `No pulse taken`],
  },
  Bt = {
    tap: [`你自己按着手腕，跟着脉点给他听的`, `tapped out with your own fingers on your wrist`],
    camera: [`借你手机的摄像头和灯，号到的`, `read through your phone's camera and its light`],
    breath: [`没号到脉，陪他喘了三口气`, `no pulse found — three breaths taken with him`],
  },
  Vt = (e) => F(...(Rt[e] || Rt.君)),
  Ht = (e) => {
    let t = String(e || ``).match(/^([\u3400-\u9fff]+)\s*(.*)$/);
    return t ? [t[1], t[2]] : [String(e || ``), ``];
  },
  Ut = (e) => (e.bpm ? F(`每分钟 ${e.bpm} 至`, `${e.bpm} a minute`) : ``);
function Wt(e, t, { ms: n = 1200, delay: r = 0, colour: i = `#b8352c` } = {}) {
  let a = Math.min(2, window.devicePixelRatio || 1),
    o = e.clientWidth || 300,
    s = e.clientHeight || 56;
  ((e.width = Math.round(o * a)), (e.height = Math.round(s * a)));
  let c = e.getContext(`2d`);
  c.setTransform(a, 0, 0, a, 0, 0);
  let l = t?.length > 1 ? t : Array.from({ length: 120 }, (e, t) => -0.55 * Math.cos((t / 119) * Math.PI * 6)),
    u = !(t?.length > 1),
    d = (e.__wave = (e.__wave || 0) + 1),
    f = performance.now() + r,
    p = (t) => {
      if (e.__wave !== d) return;
      let r = Math.max(0, Math.min(1, (t - f) / n));
      (c.clearRect(0, 0, o, s), (c.strokeStyle = `rgba(120, 80, 40, 0.14)`), (c.lineWidth = 1));
      for (let e = o; e > 0; e -= 18) (c.beginPath(), c.moveTo(e, 3), c.lineTo(e, s - 3), c.stroke());
      let a = Math.max(2, Math.round(l.length * r));
      ((c.strokeStyle = u ? `#7f8f72` : i),
        (c.lineWidth = 2),
        (c.lineJoin = `round`),
        (c.lineCap = `round`),
        c.beginPath());
      for (let e = 0; e < a; e += 1) {
        let t = (o * e) / (l.length - 1),
          n = s / 2 - l[e] * s * 0.38;
        e ? c.lineTo(t, n) : c.moveTo(t, n);
      }
      if ((c.stroke(), r < 1)) {
        let e = a - 1,
          t = (o * e) / (l.length - 1),
          n = s / 2 - l[e] * s * 0.38;
        ((c.fillStyle = c.strokeStyle),
          c.beginPath(),
          c.arc(t, n, 3, 0, Math.PI * 2),
          c.fill(),
          requestAnimationFrame(p));
      }
    };
  requestAnimationFrame(p);
}
var Gt = {
    template: () => `
    <div class="gift-stamp">${F(`濒湖药室 · 蕲州`, `THE BINHU PHARMACY · QIZHOU`)}</div>
    <figure class="rp-leaf"><img alt="" /><span class="rp-leaf-seal">濒湖</span></figure>
    <div class="rp-paper">
      <div class="rp-head"><h3 class="rp-title gift-title"></h3><span class="rp-seal">濒湖</span></div>
      <p class="rp-row rp-for"></p>
      <div class="rp-pulse">
        <div class="rp-pulse-top"><b>${F(`脉`, `Pulse`)}</b><span class="rp-pulse-words"></span></div>
        <canvas class="rp-wave"></canvas>
        <div class="rp-pulse-foot"><span class="rp-count"></span><span class="rp-how"></span></div>
      </div>
      <p class="rp-row rp-dx"></p>
      <ol class="rp-herbs"></ol>
      <div class="rp-yin"></div>
      <p class="rp-row rp-method"></p>
      <p class="rp-row rp-advice"></p>
      <div class="rp-sign">${F(`万历十八年 · 李时珍 书`, `Wanli 18 (1590) · written by Li Shizhen`)}</div>
      <p class="rp-fine">${F(`此方写给心，不入药。身体不适，请看医生。`, `A prescription for the heart, not for the pharmacy. If you are unwell, please see a doctor.`)}</p>
    </div>`,
    foot: () =>
      F(
        `AI 演绎 · 李时珍为你开的人生处方 · 药性出自《神农本草经》《本草纲目》`,
        `An AI performance · Li Shizhen's prescription for your life · the herbs' virtues follow the Shennong Classic and the Compendium of Materia Medica`,
      ),
    saveLabel: () => F(`保存这张方子`, `Save the prescription`),
    fill(e, t) {
      let n = (t) => e.querySelector(t);
      ((n(`.rp-leaf img`).src = t.image || ``),
        (n(`.rp-title`).textContent = t.title || ``),
        (n(`.rp-for`).innerHTML = t.who ? `<b>${F(`来访`, `For`)}</b>${J(t.who)}` : ``));
      let r = zt[t.kind] || zt.breath,
        i = Bt[t.source] || Bt.breath;
      ((n(`.rp-pulse-words`).textContent = t.pulse || F(...r)),
        (n(`.rp-count`).textContent = Ut(t)),
        (n(`.rp-how`).textContent = F(...i)),
        (n(`.rp-dx`).innerHTML = t.trick ? `<b>${F(`诊`, `Reading`)}</b>${J(t.trick)}` : ``),
        (n(`.rp-herbs`).innerHTML = (t.herbs || [])
          .map((e, t) => {
            let [n, r] = Ht(e.name);
            return `<li style="--i:${t}"><i class="rp-role">${J(Vt(e.role || [`君`, `臣`, `佐`][t]))}</i><span class="rp-name">${J(n)}${r ? `<small>${J(r)}</small>` : ``}</span><span class="rp-dose">${J(e.dose || ``)}</span><span class="rp-mine">${F(`你亲手称的`, `weighed by you`)}</span><p class="rp-why">${J(e.why || ``)}</p></li>`;
          })
          .join(``)),
        (n(`.rp-yin`).innerHTML = t.yin?.thing
          ? `<i class="rp-role">${J(Vt(`使`))}</i><div><span class="rp-yin-what">${F(`药引`, `The guide`)}</span><span class="rp-yin-thing">${J(t.yin.thing)}</span><p class="rp-why">${J(t.yin.how || ``)}${t.yin.how ? ` ` : ``}<em>${F(`戥子称不了它。`, `No steelyard can weigh it.`)}</em></p></div>`
          : ``),
        (n(`.rp-method`).innerHTML = t.method ? `<b>${F(`煎服法`, `To take`)}</b>${J(t.method)}` : ``),
        (n(`.rp-advice`).innerHTML = t.note ? `<b>${F(`医嘱`, `Advice`)}</b>${J(t.note)}` : ``),
        requestAnimationFrame(() => Wt(n(`.rp-wave`), t.wave, { delay: 1500, ms: 1300 })));
    },
    async save(e) {
      let t = await Ct(e.image),
        n = 1080,
        r = (r) => {
          ((r.fillStyle = `#efe4cc`),
            r.fillRect(0, 0, n, 99999),
            (r.fillStyle = `#3a2a1c`),
            r.fillRect(58, 58, 964, 964),
            (r.fillStyle = `#d9c8a4`),
            r.fillRect(66, 66, 948, 948),
            t ? r.drawImage(t, 72, 72, 936, 936) : ((r.fillStyle = `#cdbb93`), r.fillRect(72, 72, 936, 936)));
          let i = 1104;
          ((r.fillStyle = `#2b2420`),
            (r.font = `700 54px ${Y.serif}`),
            (i = X(r, e.title || ``, 72, i, 786, 66, { align: `left` })),
            (r.fillStyle = `#b8352c`),
            r.fillRect(898, 1048, 110, 110),
            (r.fillStyle = `#efe4cc`),
            (r.font = `52px ${It}`),
            (r.textAlign = `center`),
            r.fillText(`濒`, 953, 1100),
            r.fillText(`湖`, 953, 1150));
          let a = (e, t) => {
              ((r.textAlign = `left`),
                (r.fillStyle = `#6b2a20`),
                (r.font = `700 30px ${Y.serif}`),
                r.fillText(e, 72, t));
            },
            o = (e, t, n = 182, i = 826, a = 30, o = `#3b2f27`) => (
              (r.fillStyle = o),
              (r.font = `${a}px ${Y.kai}`),
              X(r, e, n, t, i, a * 1.45, { align: `left` })
            );
          ((i += 16),
            e.who && (a(F(`来访`, `For`), i), (i = o(e.who, i) + 8)),
            a(F(`脉`, `Pulse`), i),
            (i = o(e.pulse || F(...(zt[e.kind] || zt.breath)), i) + 6));
          let s =
              e.wave?.length > 1
                ? e.wave
                : Array.from({ length: 120 }, (e, t) => -0.55 * Math.cos((t / 119) * Math.PI * 6)),
            c = i - 10;
          ((r.strokeStyle = `rgba(120, 80, 40, 0.16)`), (r.lineWidth = 1.5));
          for (let e = 1008; e > 72; e -= 28) (r.beginPath(), r.moveTo(e, c), r.lineTo(e, c + 120), r.stroke());
          ((r.strokeStyle = e.wave?.length > 1 ? `#b8352c` : `#7f8f72`),
            (r.lineWidth = 4),
            (r.lineJoin = `round`),
            r.beginPath(),
            s.forEach((e, t) => {
              let n = 72 + (936 * t) / (s.length - 1),
                i = c + 60 - e * 120 * 0.38;
              t ? r.lineTo(n, i) : r.moveTo(n, i);
            }),
            r.stroke(),
            (i = c + 120 + 44),
            (r.fillStyle = `#6b5a48`),
            (r.font = `26px ${Y.kai}`),
            (r.textAlign = `left`),
            (i =
              X(r, [Ut(e), F(...(Bt[e.source] || Bt.breath))].filter(Boolean).join(F(` · `, ` · `)), 72, i, 936, 38, {
                align: `left`,
              }) + 6),
            e.trick && (a(F(`诊`, `Reading`), i), (i = o(e.trick, i) + 8)),
            (r.strokeStyle = `rgba(90, 60, 30, 0.35)`),
            (r.lineWidth = 2),
            r.beginPath(),
            r.moveTo(72, i),
            r.lineTo(1008, i),
            r.stroke(),
            (i += 70));
          let l = [
            ...(e.herbs || []).map((e, t) => ({ ...e, role: e.role || [`君`, `臣`, `佐`][t] })),
            ...(e.yin?.thing
              ? [
                  {
                    role: `使`,
                    name: e.yin.thing,
                    dose: ``,
                    why: [e.yin.how, F(`戥子称不了它。`, `No steelyard can weigh it.`)].filter(Boolean).join(` `),
                  },
                ]
              : []),
          ];
          for (let e of l) {
            ((r.fillStyle = `#b8352c`),
              r.fillRect(72, i - 44, 56, 56),
              (r.fillStyle = `#efe4cc`),
              (r.font = `700 ${Lt() ? 18 : 34}px ${Y.serif}`),
              (r.textAlign = `center`),
              r.fillText(Vt(e.role), 100, i - 4));
            let [t, n] = Ht(e.name);
            ((r.textAlign = `left`), (r.fillStyle = `#2b2420`), (r.font = `46px ${It}`), r.fillText(t, 152, i));
            let a = 152 + r.measureText(t).width + 16;
            (n &&
              ((r.font = `26px ${Y.serif}`),
              (r.fillStyle = `#5a4a3c`),
              r.fillText(n, a, i - 4),
              (a += r.measureText(n).width + 16)),
              e.dose && ((r.font = `40px ${It}`), (r.fillStyle = `#b8352c`), r.fillText(e.dose, a, i)),
              (i = o(e.why || ``, i + 50, 152, 856, 27, `#4a3c30`) + 30));
          }
          return (
            r.beginPath(),
            r.moveTo(72, i - 10),
            r.lineTo(1008, i - 10),
            r.stroke(),
            (i += 50),
            e.method && (a(F(`煎服法`, `To take`), i), (i = o(e.method, i, 202, 806) + 8)),
            e.note && (a(F(`医嘱`, `Advice`), i), (i = o(e.note, i, 202, 806) + 8)),
            (i += 30),
            (r.fillStyle = `#6b5a48`),
            (r.font = `28px ${Y.kai}`),
            (r.textAlign = `right`),
            r.fillText(F(`万历十八年 · 李时珍 书`, `Wanli 18 (1590) · Li Shizhen`), 1008, i),
            (i += 70),
            (r.font = `22px ${Y.sans}`),
            (r.fillStyle = `#8a7b6e`),
            (r.textAlign = `center`),
            r.fillText(
              F(
                `此方写给心，不入药。身体不适，请看医生。`,
                `For the heart, not the pharmacy — if unwell, see a doctor.`,
              ),
              n / 2,
              i,
            ),
            r.fillText(F(`人生广场 · AI 演绎`, `Life Plaza · an AI performance`), n / 2, i + 36),
            i + 80
          );
        },
        i = document.createElement(`canvas`).getContext(`2d`),
        a = Math.ceil(r(i)),
        o = document.createElement(`canvas`);
      ((o.width = n), (o.height = a), r(o.getContext(`2d`)), wt(o, `lishizhen`));
    },
  },
  $ = [
    {
      id: `xiyou`,
      chars: `五行山印`,
      host: () => F(`取经人 · 贞观十三年`, `Pilgrim · 639`),
      town: () => F(`五行山`, `Five Elements Mt.`),
    },
    {
      id: `melies`,
      chars: `蒙特勒伊`,
      host: () => F(`导演 · 1897`, `Director · 1897`),
      town: () => F(`蒙特勒伊`, `Montreuil`),
    },
    {
      id: `vangogh`,
      chars: `阿尔勒印`,
      host: () => F(`画家 · 1888`, `Painter · 1888`),
      town: () => F(`阿尔勒`, `Arles`),
    },
    {
      id: `lishizhen`,
      chars: `蕲州之印`,
      host: () => F(`郎中 · 万历十八年`, `Doctor · 1590`),
      town: () => F(`蕲州`, `Qizhou`),
    },
  ],
  Kt = (e) => {
    let t = [...e];
    return `<b>${t[2]}</b><b>${t[0]}</b><b>${t[3]}</b><b>${t[1]}</b>`;
  },
  qt = [`零`, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`],
  Jt = (e) => {
    if (((e = Math.max(0, Math.min(99, Math.round(e)))), e < 10)) return qt[e];
    let t = Math.floor(e / 10),
      n = e % 10;
    return `${t > 1 ? qt[t] : ``}十${n ? qt[n] : ``}`;
  },
  Yt = (e) => {
    let t = 1 + (e.slips?.length || 0),
      n = e.monkeys || 0;
    return F(
      `揭帖${Jt(t)}张${n ? ` · 吹出小猴${Jt(n)}只` : ``}`,
      `${t} seals peeled${n ? ` · ${n} little monkeys blown` : ``}`,
    );
  },
  Xt = (e) =>
    String(e || ``)
      .split(/[\u3000/|]+/)
      .map((e) => e.trim())
      .filter(Boolean);
function Zt() {
  let e = U();
  if (!e) return;
  let t = e.currentTime,
    n = e.createOscillator(),
    r = e.createGain();
  ((n.type = `sine`),
    n.frequency.setValueAtTime(130, t),
    n.frequency.exponentialRampToValueAtTime(55, t + 0.2),
    r.gain.setValueAtTime(1e-4, t),
    r.gain.exponentialRampToValueAtTime(0.55, t + 0.004),
    r.gain.exponentialRampToValueAtTime(1e-4, t + 0.24),
    n.connect(r).connect(e.destination),
    n.start(t),
    n.stop(t + 0.26));
}
var Qt = {
  film: Dt,
  letter: Ft,
  prescription: Gt,
  pass: {
    template: () => `
    <div class="ps-head"><div class="ps-name">${F(`通关文牒`, `Travel Pass`)}</div><div class="ps-meta"></div></div>
    <div class="ps-pic"><img alt="" /><div class="ps-wet"><i></i><span></span></div></div>
    <div class="ps-title gift-title"></div>
    <div class="ps-nan"><span class="ps-nan-k">${F(`第八十一难`, `Ordeal 81`)}</span><span class="ps-nan-v"></span></div>
    <div class="ps-seals">${$.map((e) => `<div class="ps-seal" data-id="${e.id}"><button type="button" class="ps-stamp" ${e.id === `xiyou` ? `` : `tabindex=-1 disabled`}>${Kt(e.chars)}</button><span>${J(e.host())}<br/>${J(e.town())}</span></div>`).join(``)}</div>
    <div class="ps-hint">${F(`按下这一方印`, `Press the seal`)}</div>
    <div class="ps-tale"></div>
    <div class="ps-who"></div>`,
    foot: () =>
      F(
        `AI 演绎 · 孙悟空和你过的一难 · 故事出自明代吴承恩《西游记》`,
        `An AI performance · an ordeal passed with Sun Wukong · from Wu Cheng'en's Journey to the West (Ming dynasty)`,
      ),
    saveLabel: () => F(`收好文牒`, `Keep the pass`),
    fill(e, t) {
      let n = (t) => e.querySelector(t);
      (e.classList.toggle(`ps-stamped`, !!t.stamped),
        (n(`.ps-meta`).textContent = F(
          `五行山下 · 大唐贞观十三年 · ${t.hour || ``}`,
          `Under the Five Elements Mountain · Zhenguan 13 · ${t.hour || ``}`,
        )));
      let r = n(`.ps-pic img`),
        i = n(`.ps-wet`);
      (t.image
        ? (r.getAttribute(`src`) !== t.image &&
            (r.classList.remove(`in`), (r.onload = () => r.classList.add(`in`)), (r.src = t.image)),
          i.classList.add(`gone`))
        : (r.removeAttribute(`src`),
          i.classList.remove(`gone`),
          i.classList.toggle(`dry`, !!t.failed),
          (n(`.ps-wet span`).textContent = t.failed
            ? F(`这一页的墨洇了，字还在。`, `The ink ran on this page; the words are still here.`)
            : F(`画师还在落墨……`, `The painter is still at it…`))),
        (n(`.ps-title`).innerHTML = Xt(t.title)
          .map((e) => `<span>${J(e)}</span>`)
          .join(``)),
        (n(`.ps-nan-v`).textContent = t.nan || ``),
        (n(`.ps-tale`).textContent = t.narration || ``),
        (n(`.ps-who`).innerHTML =
          `<b>${F(`持牒人`, `Bearer`)}</b>${J(t.who || F(`过路人`, `a passer-by`))}<i>${J(Yt(t))}</i>`));
      for (let n of $) {
        let r = e.querySelector(`.ps-seal[data-id="${n.id}"]`);
        (r.classList.toggle(`on`, n.id === `xiyou` ? !!t.stamped : !!t.seen?.[n.id]),
          r.classList.toggle(`mine`, n.id === `xiyou`));
      }
      let a = e.querySelector(`.ps-seal[data-id="xiyou"] .ps-stamp`);
      a.onclick = () => {
        t.stamped ||
          ((t.stamped = !0),
          e.classList.add(`ps-stamped`),
          a.parentElement.classList.add(`on`, `pressing`),
          setTimeout(() => {
            (Zt(), navigator.vibrate?.([14, 40, 10]));
          }, 230),
          setTimeout(() => a.parentElement.classList.remove(`pressing`), 900));
      };
    },
    async save(e) {
      let t = await Ct(e.image),
        n = 1200,
        r = document.createElement(`canvas`);
      ((r.width = n), (r.height = 3e3));
      let i = r.getContext(`2d`);
      if (
        ((i.fillStyle = `#f6eee3`),
        i.fillRect(0, 0, n, 3e3),
        (i.fillStyle = `#3a2e28`),
        (i.textAlign = `center`),
        (i.font = `700 76px ${Y.kai}`),
        i.fillText(F(`通关文牒`, `Travel Pass`), n / 2, 150),
        (i.font = `26px ${Y.kai}`),
        (i.fillStyle = `#7a6a5e`),
        i.fillText(
          F(
            `五行山下 · 大唐贞观十三年 · ${e.hour || ``}`,
            `Under the Five Elements Mountain · Zhenguan 13 · ${e.hour || ``}`,
          ),
          n / 2,
          200,
        ),
        (i.fillStyle = `#3a2a1c`),
        i.fillRect(140, 226, 920, 920),
        (i.fillStyle = `#e9dcbd`),
        i.fillRect(150, 236, 900, 900),
        t)
      ) {
        let e = Math.min(t.width, t.height) * 0.94;
        i.drawImage(t, (t.width - e) / 2, (t.height - e) / 2, e, e, 150, 236, 900, 900);
      }
      let a = 1226;
      ((i.fillStyle = `#3a2e28`), (i.font = `700 46px ${Y.kai}`));
      for (let t of Xt(e.title)) (i.fillText(t, n / 2, a), (a += 62));
      ((a += 10),
        (i.font = `700 32px ${Y.kai}`),
        (i.fillStyle = `#d0482f`),
        i.fillText(`${F(`第八十一难`, `Ordeal 81`)}  ${e.nan || ``}`, n / 2, a),
        (a += 62),
        (i.font = `29px ${Y.kai}`),
        (i.fillStyle = `#3b2f27`),
        (a = X(i, e.narration || ``, n / 2, a, 940, 44)),
        (a += 20),
        (i.font = `24px ${Y.sans}`),
        (i.fillStyle = `#7a6a5e`),
        i.fillText(`${F(`持牒人`, `Bearer`)}  ${e.who || F(`过路人`, `a passer-by`)}  ·  ${Yt(e)}`, n / 2, a),
        (a += 50));
      let o = n / 2 - ($.length * 132 + ($.length - 1) * 64) / 2,
        s = a + 20;
      $.forEach((t, n) => {
        let r = o + n * 196,
          a = t.id === `xiyou` ? e.stamped !== !1 : !!e.seen?.[t.id];
        if ((i.save(), i.translate(r + 66, s + 66), i.rotate((n % 2 ? 1 : -1) * 0.05), a)) {
          ((i.fillStyle = `rgba(208,72,47,0.92)`),
            i.fillRect(-66, -66, 132, 132),
            (i.fillStyle = `#f6e9cc`),
            (i.font = `700 50px ${Y.kai}`),
            (i.textBaseline = `middle`));
          let e = [...t.chars];
          [
            [e[0], 1, -1],
            [e[1], 1, 1],
            [e[2], -1, -1],
            [e[3], -1, 1],
          ].forEach(([e, t, n]) => i.fillText(e, t * 132 * 0.23, n * 132 * 0.23));
        } else
          (i.setLineDash([8, 8]),
            (i.strokeStyle = `rgba(120,90,60,0.55)`),
            (i.lineWidth = 3),
            i.strokeRect(-66, -66, 132, 132),
            i.setLineDash([]));
        (i.restore(),
          (i.textBaseline = `alphabetic`),
          (i.font = `19px ${Y.sans}`),
          (i.fillStyle = `#7a6a5e`),
          (i.textAlign = `center`),
          i.fillText(t.host(), r + 66, s + 132 + 32),
          i.fillText(t.town(), r + 66, s + 132 + 56));
      });
      let c = s + 132 + 170,
        l = document.createElement(`canvas`);
      ((l.width = n), (l.height = c));
      let u = l.getContext(`2d`);
      (u.drawImage(r, 0, 0),
        (u.strokeStyle = `#d0482f`),
        (u.lineWidth = 8),
        u.strokeRect(34, 34, 1132, c - 68),
        (u.lineWidth = 2),
        u.strokeRect(54, 54, 1092, c - 108),
        (u.font = `20px ${Y.sans}`),
        (u.fillStyle = `#8a7b6e`),
        (u.textAlign = `center`),
        u.fillText(
          F(
            `人生广场 · Life Plaza · AI 演绎 · 故事出自《西游记》`,
            `Life Plaza · 人生广场 · an AI performance · from Journey to the West`,
          ),
          n / 2,
          c - 76,
        ),
        wt(l, `xiyou`));
    },
  },
};
function $t(e, { kind: t = `film` } = {}) {
  let n = Qt[t] || Qt.film,
    r = document.createElement(`div`);
  ((r.className = `gift gift-${t}`),
    (r.innerHTML = `
    <div class="gift-card" role="dialog" aria-modal="true">
      ${n.template()}
      <div class="gift-actions">
        <button class="gift-save" type="button">${n.saveLabel()}</button>
        <button class="gift-close" type="button">${F(`再逛逛`, `Keep exploring`)}</button>
      </div>
      <div class="gift-foot">${n.foot()}</div>
    </div>`),
    e.appendChild(r));
  let i = (e) => r.querySelector(e),
    a = null,
    o = null,
    s = () => {
      (r.classList.remove(`show`), o?.());
    };
  return (
    i(`.gift-close`).addEventListener(`click`, s),
    r.addEventListener(`click`, (e) => {
      e.target === r && s();
    }),
    i(`.gift-save`).addEventListener(`click`, () => a && n.save(a)),
    {
      open(e, { onClosed: t } = {}) {
        ((a = e), (o = t || null), n.fill(r, e), r.classList.add(`show`));
      },
      close: s,
      get open_() {
        return r.classList.contains(`show`);
      },
    }
  );
}
var en = (e, t) => {
    let n = document.createElement(`canvas`);
    return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
  },
  tn = (e) => () => (e = (e * 16807) % 2147483647) / 2147483647;
function nn({ size: e = 1024, boards: t = 8, base: n = [214, 176, 132], variance: i = 18, seed: o = 7 } = {}) {
  let [s, c] = en(e, e),
    u = tn(o),
    d = e / t;
  for (let r = 0; r < t; r += 1) {
    let t = -u() * e;
    for (; t < e;) {
      let a = e * (0.35 + u() * 0.5),
        o = (u() - 0.5) * i;
      ((c.fillStyle = `rgb(${n[0] + o},${n[1] + o * 0.9},${n[2] + o * 0.7})`),
        c.fillRect(r * d, t, d, a),
        (c.globalAlpha = 0.07));
      for (let e = 0; e < 14; e += 1) {
        ((c.strokeStyle = u() > 0.5 ? `#6b4a2b` : `#fff3dc`), (c.lineWidth = 1 + u() * 1.5), c.beginPath());
        let e = r * d + u() * d;
        (c.moveTo(e, t),
          c.bezierCurveTo(
            e + (u() - 0.5) * 10,
            t + a * 0.3,
            e + (u() - 0.5) * 10,
            t + a * 0.7,
            e + (u() - 0.5) * 6,
            t + a,
          ),
          c.stroke());
      }
      ((c.globalAlpha = 1), (c.fillStyle = `rgba(90,60,35,0.55)`), c.fillRect(r * d, t, d, 2), (t += a));
    }
    ((c.fillStyle = `rgba(90,60,35,0.5)`), c.fillRect(r * d, 0, 2, e));
  }
  let f = new r(s);
  return ((f.colorSpace = a), (f.wrapS = f.wrapT = l), (f.anisotropy = 8), f);
}
function rn({ w: e = 512, h: t = 256, color: n = `#efe6d6` } = {}) {
  let [i, o] = en(e, t);
  ((o.fillStyle = n), o.fillRect(0, 0, e, t));
  for (let n = 0; n < 2; n += 1) {
    let r = (e / 2) * n + 22,
      i = e / 2 - 44,
      a = t - 44;
    ((o.fillStyle = `rgba(255,255,255,0.35)`),
      o.fillRect(r, 22, i, 3),
      o.fillRect(r, 22, 3, a),
      (o.fillStyle = `rgba(120,100,80,0.18)`),
      o.fillRect(r, 22 + a - 3, i, 3),
      o.fillRect(r + i - 3, 22, 3, a));
  }
  ((o.fillStyle = `rgba(120,100,80,0.25)`), o.fillRect(0, 0, e, 6));
  let s = new r(i);
  return ((s.colorSpace = a), (s.wrapS = l), s);
}
function an(e = 64) {
  let [t, n] = en(e, e),
    i = n.createRadialGradient(e / 2, e / 2, 0, e / 2, e / 2, e / 2);
  (i.addColorStop(0, `rgba(255,255,255,1)`),
    i.addColorStop(0.35, `rgba(255,255,255,0.45)`),
    i.addColorStop(1, `rgba(255,255,255,0)`),
    (n.fillStyle = i),
    n.fillRect(0, 0, e, e));
  let o = new r(t);
  return ((o.colorSpace = a), o);
}
function on({ radius: e = 180, top: t = `#9cc4e4`, mid: n = `#cfe3ee`, horizon: r = `#f6e7cf` } = {}) {
  let i = new C(e, 48, 24),
    a = new O({
      side: 1,
      depthWrite: !1,
      fog: !1,
      uniforms: { cTop: { value: new c(t) }, cMid: { value: new c(n) }, cHor: { value: new c(r) } },
      vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 cTop, cMid, cHor; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.18 ? mix(cMid, cTop, smoothstep(0.18, 0.9, h)) : mix(cHor, cMid, smoothstep(-0.05, 0.18, h)); gl_FragColor = vec4(c, 1.0); }`,
    }),
    o = new p(i, a);
  return ((o.renderOrder = -10), o);
}
function sn(e, { renderOrder: t = 0 } = {}) {
  let n = an(128),
    r = [];
  function i(i, { count: a = 26, color: o = `#bdb6ab`, size: s = 0.9, spread: c = 0.5, life: l = 2.2 } = {}) {
    for (let u = 0; u < a; u += 1) {
      let a = new A(new m({ map: n, color: o, transparent: !0, opacity: 0, depthWrite: !1 }));
      a.renderOrder = t;
      let u = Math.random() * Math.PI * 2,
        d = Math.random() * c;
      a.position.set(i.x + Math.cos(u) * d, i.y + Math.random() * 1.4, i.z + Math.sin(u) * d);
      let f = s * (0.5 + Math.random() * 0.8);
      (a.scale.setScalar(f * 0.3),
        e.add(a),
        r.push({
          m: a,
          t: 0,
          life: l * (0.7 + Math.random() * 0.5),
          s: f,
          v: new E(Math.cos(u) * 0.35, 0.25 + Math.random() * 0.4, Math.sin(u) * 0.35),
          kind: `smoke`,
        }));
    }
  }
  let a = (() => {
      let e = new T();
      for (let t = 0; t < 10; t += 1) {
        let n = (t / 10) * Math.PI * 2 - Math.PI / 2,
          r = t % 2 ? 0.045 : 0.11;
        t ? e.lineTo(Math.cos(n) * r, Math.sin(n) * r) : e.moveTo(Math.cos(n) * r, Math.sin(n) * r);
      }
      return new g(e);
    })(),
    o = new b({
      color: `#f2c24f`,
      emissive: `#d9a12b`,
      emissiveIntensity: 0.9,
      metalness: 0.5,
      roughness: 0.35,
      side: 2,
    });
  function s(t, { count: n = 40 } = {}) {
    for (let i = 0; i < n; i += 1) {
      let n = new p(a, o);
      n.position.set(t.x, t.y + 1, t.z);
      let i = Math.random() * Math.PI * 2;
      (e.add(n),
        r.push({
          m: n,
          t: 0,
          life: 2.6 + Math.random(),
          v: new E(
            Math.cos(i) * (1 + Math.random() * 1.6),
            2.2 + Math.random() * 2.2,
            Math.sin(i) * (1 + Math.random() * 1.6),
          ),
          spin: new E(Math.random() * 6, Math.random() * 6, Math.random() * 6),
          kind: `star`,
        }));
    }
  }
  return {
    puff: i,
    stars: s,
    update(t) {
      for (let n = r.length - 1; n >= 0; --n) {
        let i = r[n];
        i.t += t;
        let a = i.t / i.life;
        if (a >= 1) {
          (e.remove(i.m), i.kind === `smoke` && i.m.material.dispose(), r.splice(n, 1));
          continue;
        }
        (i.m.position.addScaledVector(i.v, t),
          i.kind === `smoke`
            ? (i.v.multiplyScalar(1 - t * 1.4),
              i.m.scale.setScalar(i.s * (0.3 + Math.sqrt(a) * 1.2)),
              (i.m.material.opacity = Math.min(1, a * 8) * (1 - a) * 0.8))
            : ((i.v.y -= 4.2 * t),
              i.v.multiplyScalar(1 - t * 0.9),
              (i.m.rotation.x += i.spin.x * t),
              (i.m.rotation.y += i.spin.y * t),
              (i.m.rotation.z += i.spin.z * t),
              i.m.position.y < 0.05 && ((i.m.position.y = 0.05), i.v.set(0, 0, 0))));
      }
    },
  };
}
var cn = (e) => e.map((e) => `${e.id}:${e.title}:${e.did}:${e.said}`).join(`|`),
  ln = new Map();
function un(e, t, n) {
  try {
    let t = sessionStorage.getItem(e);
    if (t !== null) return Promise.resolve(t);
  } catch {}
  if (ln.has(e)) return ln.get(e);
  performance.mark?.(`lp-${t}-asked`);
  let r = n()
    .then((n) => {
      let r = typeof n?.line == `string` ? n.line : ``;
      if (n)
        try {
          sessionStorage.setItem(e, r);
        } catch {}
      return (performance.mark?.(`lp-${t}-ready`), r);
    })
    .catch(() => ``)
    .finally(() => ln.delete(e));
  return (ln.set(e, r), r);
}
function dn(e, t) {
  let n = We(e).filter((e) => e.title || e.did);
  return n.length
    ? un(`lp.bridge.${e}|${t}|${cn(n)}`, `bridge-${e}`, () =>
        W.bridge({ space: e, lang: t, journey: n, life: M().life || null }),
      )
    : Promise.resolve(``);
}
function fn(e, t) {
  let n = We().filter((e) => e.title || e.did);
  return !n.length || e.life?.care
    ? Promise.resolve(``)
    : un(`lp.ending.${t}|${cn(n)}`, `ending`, () => W.ending({ lang: t, life: e.life || null, journey: n }));
}
var pn = Symbol(`pending`);
async function mn(e, t, n, { role: r, hm: i = ``, wait: a = 2200, after: o = [] } = {}) {
  let s = n ? await Promise.race([n, new Promise((e) => setTimeout(() => e(pn), 0))]) : ``;
  if (s !== pn) return (await e.say(t, [s, ...o].filter(Boolean), { role: r }), s || ``);
  let c = e.reply(t, { role: r });
  (c.think(i), (s = await Promise.race([n, new Promise((e) => setTimeout(() => e(``), a))])));
  for (let e of [s, ...o].filter(Boolean)) c.line(e);
  return (await c.end(), s || ``);
}
export {
  Oe as A,
  Le as C,
  Ae as D,
  ke as E,
  re as M,
  ne as N,
  je as O,
  te as P,
  Be as S,
  Me as T,
  $e as _,
  on as a,
  We as b,
  nn as c,
  X as d,
  xt as f,
  et as g,
  ut as h,
  sn as i,
  xe as j,
  Te as k,
  $t as l,
  bt as m,
  fn as n,
  an as o,
  St as p,
  mn as r,
  rn as s,
  dn as t,
  Y as u,
  qe as v,
  ze as w,
  Ue as x,
  Ie as y,
};
