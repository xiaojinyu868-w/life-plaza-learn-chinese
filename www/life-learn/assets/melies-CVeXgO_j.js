import {
  A as e,
  An as t,
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
  Ma as m,
  Mn as h,
  Nr as g,
  O as _,
  Pt as v,
  Qi as y,
  Qt as b,
  R as x,
  St as S,
  T as C,
  U as w,
  Ur as T,
  V as E,
  Wi as D,
  Wr as O,
  Xt as k,
  Z as ee,
  ar as A,
  ba as te,
  ct as j,
  ia as M,
  ir as N,
  it as P,
  j as F,
  jr as I,
  kr as ne,
  mr as L,
  no as R,
  or as re,
  pa as ie,
  pr as ae,
  qi as oe,
  qt as z,
  ra as B,
  ro as V,
  sn as se,
  so as ce,
  tr as H,
  ya as le,
} from "./three.core-DtjtRha-.js";
import { t as ue } from "./gsap-CvDoa17S.js";
import { r as de, t as fe } from "./lifecard-Bz8CsM4Y.js";
import { t as pe } from "./i18n-BvGoRVq5.js";
import { l as me, n as he, o as U } from "./assets-p2qy6QaX.js";
import { f as ge, h as _e, i as ve, m as ye, p as be, r as xe, t as Se } from "./stamp-C8irYyoR.js";
import { t as Ce } from "./sky-6JFrQaA8.js";
import { a as we, i as Te, r as Ee, s as De, t as Oe } from "./visits-C_j5CG_Y.js";
import { t as ke } from "./mic-DTF0YIPs.js";
import {
  A as Ae,
  C as je,
  D as Me,
  E as Ne,
  M as Pe,
  N as Fe,
  O as Ie,
  P as Le,
  S as Re,
  T as ze,
  _ as Be,
  a as Ve,
  b as He,
  c as Ue,
  d as We,
  f as Ge,
  g as Ke,
  h as qe,
  i as Je,
  j as Ye,
  k as Xe,
  l as Ze,
  m as Qe,
  o as $e,
  p as et,
  r as tt,
  s as W,
  t as nt,
  u as rt,
  v as it,
  w as at,
  x as ot,
  y as st,
} from "./journey-BS70xIEy.js";
import { t as ct } from "./direct-B4OdUEHl.js";
import { t as lt } from "./merge-DZHEIcuB.js";
var ut = new V(0, 1, 0),
  dt = (e) => () => (e = (e * 16807) % 2147483647) / 2147483647,
  G = (e, t) => {
    let n = document.createElement(`canvas`);
    return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
  },
  K = (e, { repeat: t = !1 } = {}) => {
    let n = new l(e);
    return ((n.colorSpace = y), (n.anisotropy = 4), t && (n.wrapS = n.wrapT = D), n);
  };
function q(e, t, n, r = 14) {
  let i = e.getImageData(0, 0, t, n),
    a = i.data;
  for (let e = 0; e < a.length; e += 4) {
    let t = (Math.random() - 0.5) * r;
    ((a[e] += t), (a[e + 1] += t), (a[e + 2] += t));
  }
  e.putImageData(i, 0, 0);
}
function ft(e) {
  let t = new ne(e.fov, 4 / 3, 0.05, 100);
  (t.position.set(...e.from), t.lookAt(new V(...e.at)), t.updateMatrixWorld(!0));
  let n = t.position.clone();
  return {
    eye: n,
    cam: t,
    dir: (e, r, i = new V()) =>
      i
        .set(e * 0.75, r, 0.5)
        .unproject(t)
        .sub(n)
        .normalize(),
  };
}
function pt() {
  let [e, t] = G(64, 32);
  ((t.fillStyle = `#c9a878`), t.fillRect(0, 0, 64, 32), (t.fillStyle = `#a5875f`));
  for (let e = 0; e < 8; e += 1) (t.beginPath(), t.ellipse(e * 8 + 4, 16, 2.2, 9, 0, 0, Math.PI * 2), t.fill());
  ((t.fillStyle = `#dcc39a`), t.fillRect(0, 0, 64, 5), t.fillRect(0, 27, 64, 5));
  let n = K(e, { repeat: !0 });
  return new L({ map: n, roughness: 0.92 });
}
function mt(e, t, { at: n, depth: r, yaw: i = 0, thick: a = 0.045, face: o, edge: s }) {
  let c = t.getPoints(12),
    l = new C().setFromPoints(c),
    u = l.getSize(new R()),
    d = Math.tan(H.degToRad(e.cam.fov / 2)) * r,
    f = d / 0.05,
    p = 0.005,
    m = -0.005,
    h = a + p,
    g = new v(t, {
      depth: a,
      curveSegments: 12,
      bevelEnabled: !0,
      bevelThickness: p,
      bevelSize: 0.012 / d,
      bevelSegments: 1,
      UVGenerator: {
        generateTopUV: (e, t, n, r, i) =>
          [n, r, i].map((e) => new R((t[e * 3] - l.min.x) / u.x, (t[e * 3 + 1] - l.min.y) / u.y)),
        generateSideWallUV: (e, t, n, r, i, a) =>
          [n, r, i, a].map((e) => new R((t[e * 3] + 1.7 * t[e * 3 + 1]) * f, (t[e * 3 + 2] - m) / (h - m))),
      },
    }),
    _ = e.dir(n[0], n[1]),
    y = new V(-_.x, 0, -_.z).normalize().applyAxisAngle(ut, i),
    b = _.clone().multiplyScalar(r).dot(y),
    x = new V(),
    S = (t, n, r, i = new V()) => {
      e.dir(t, n, x);
      let a = b / x.dot(y),
        o = r - h;
      return i.set(e.eye.x + x.x * a + y.x * o, e.eye.y + x.y * a + y.y * o, e.eye.z + x.z * a + y.z * o);
    },
    w = g.attributes.position,
    T = new V();
  for (let e = 0; e < w.count; e += 1) (S(w.getX(e), w.getY(e), w.getZ(e), T), w.setXYZ(e, T.x, T.y, T.z));
  (g.computeVertexNormals(), g.computeBoundingSphere());
  let E = new A(g, [o, s]);
  return ((E.castShadow = !0), (E.receiveShadow = !0), { mesh: E, place: (e, t) => S(e, t, (m + h) / 2), box: l });
}
function J(t, n) {
  let r = new Map();
  for (let t of n) {
    let n = t.geometry;
    for (let i of n.groups) {
      let a = t.material[i.materialIndex],
        o = new F();
      for (let t of [`position`, `normal`, `uv`]) {
        let r = n.attributes[t];
        o.setAttribute(t, new e(r.array.slice(i.start * r.itemSize, (i.start + i.count) * r.itemSize), r.itemSize));
      }
      (r.has(a) || r.set(a, []), r.get(a).push(o));
    }
    n.dispose();
  }
  let i = [];
  for (let [e, n] of r) {
    let r = new A(me(n), e);
    ((r.castShadow = !0), (r.receiveShadow = !0), t.add(r), i.push(r));
  }
  return i;
}
function ht(e, t, n, r = 0) {
  let i = new B();
  for (let a = 0; a < 10; a += 1) {
    let o = r + Math.PI / 2 + (a * Math.PI) / 5,
      s = a % 2 ? n * 0.45 : n,
      c = e + Math.cos(o) * s,
      l = t + Math.sin(o) * s;
    a ? i.lineTo(c, l) : i.moveTo(c, l);
  }
  return (i.closePath(), i);
}
function gt(e, t, n) {
  let r = H.degToRad(100),
    i = H.degToRad(69.1),
    a = new B();
  return (
    a.moveTo(e + n * Math.cos(r), t + n * Math.sin(r)),
    a.absarc(e, t, n, r, -r, !0),
    a.absarc(e - 0.55 * n, t, 1.054 * n, -i, i, !1),
    a
  );
}
function _t(e, t, n) {
  let r = new B(),
    i = n / 6;
  r.moveTo(e - n / 2, t);
  for (let a = 0; a < 5; a += 1) {
    let o = e - n / 2 + i + (a * (n - 2 * i)) / 4,
      s = i * (a % 2 ? 1.3 : 1);
    r.absarc(o, t + s * 0.55, s, Math.PI, 0, !0);
  }
  return (r.lineTo(e + n / 2, t), r.quadraticCurveTo(e, t - n * 0.07, e - n / 2, t), r);
}
function vt(e, t, n, r) {
  let i = new B(),
    a = -1.8 - r,
    o = 1.8,
    s = (o - a) / n,
    c = 0.095,
    l = e - c,
    u = (e) => l + (e / 0.62) * c;
  (i.moveTo(a, t), i.lineTo(a, l));
  for (let e = 0; e < n; e += 1) {
    let t = a + e * s;
    (i.bezierCurveTo(t + s * 0.25, u(0.55), t + s * 0.6, u(0.62), t + s * 0.78, u(0.38)),
      i.bezierCurveTo(t + s * 0.7, u(0.3), t + s * 0.82, u(0.18), t + s, u(0.12) - c * 0.19));
  }
  return (i.lineTo(o, t), i.lineTo(a, t), i);
}
function yt(e) {
  let t = dt(e),
    n = [];
  for (let e = -1.75; e < 1.75;) {
    let r = 0.05 + t() * 0.08,
      i = t();
    (n.push({
      x0: e,
      x1: e + r,
      h: 0.11 + t() * 0.16,
      kind: i < 0.2 ? `dome` : i < 0.38 ? `spire` : i < 0.5 ? `tower` : `block`,
    }),
      (e += r * (0.7 + t() * 0.3)));
  }
  n.push(
    { x0: -0.78, x1: -0.56, h: 0.2, kind: `dome` },
    { x0: 0.18, x1: 0.215, h: 0.34, kind: `spire` },
    { x0: 0.3, x1: 0.335, h: 0.3, kind: `spire` },
  );
  let r = (e, t) => {
    let n = e.x1 - e.x0,
      r = (t - e.x0) / n;
    return e.kind === `dome`
      ? e.h + Math.sqrt(Math.max(0, 1 - (2 * r - 1) ** 2)) * n * 0.5
      : e.kind === `spire`
        ? e.h + (1 - Math.abs(2 * r - 1)) * n * 2.4
        : e.kind === `tower`
          ? e.h + 0.09
          : e.h;
  };
  return {
    buildings: n,
    roof: r,
    top: (e) => {
      let t = 0.06;
      for (let i of n) e >= i.x0 && e <= i.x1 && (t = Math.max(t, r(i, e)));
      return t;
    },
  };
}
function bt(e, t, n) {
  let r = Math.max(64, Math.round((512 * (t.max.y - t.min.y)) / (t.max.x - t.min.x))),
    [i, a] = G(512, r),
    o = (e) => ((e - t.min.x) / (t.max.x - t.min.x)) * 512,
    s = (e) => (1 - (e - t.min.y) / (t.max.y - t.min.y)) * r;
  ((a.fillStyle = `#d9cfbd`), a.fillRect(0, 0, 512, r));
  let c = dt(7);
  for (let i of e.buildings) {
    if (i.x1 < t.min.x || i.x0 > t.max.x) continue;
    let l = o(i.x0),
      u = o(i.x1),
      d = s(n + i.h),
      f = s(n),
      p = 214 + Math.round((c() - 0.5) * 22);
    if (
      ((a.fillStyle = `rgb(${p},${p - 8},${p - 22})`),
      a.fillRect(l, d, u - l, f - d),
      (a.fillStyle = `rgba(120,132,156,0.32)`),
      a.fillRect(l + (u - l) * 0.62, d, (u - l) * 0.38, f - d),
      i.kind === `dome`)
    )
      ((a.fillStyle = `#c4a46c`),
        a.beginPath(),
        a.ellipse(
          (l + u) / 2,
          d,
          (u - l) / 2,
          ((u - l) / 2) * (r / 512) * ((t.max.x - t.min.x) / (t.max.y - t.min.y)),
          0,
          Math.PI,
          0,
        ),
        a.fill());
    else if (i.kind === `spire` || i.kind === `tower`) {
      let t = s(n + e.roof(i, (i.x0 + i.x1) / 2));
      ((a.fillStyle = i.kind === `spire` ? `#a99b86` : `#cfc3ae`),
        a.beginPath(),
        a.moveTo(l, d),
        a.lineTo((l + u) / 2, t),
        a.lineTo(u, d),
        a.closePath(),
        a.fill(),
        i.kind === `tower` && a.fillRect(l, t + (d - t) * 0.4, u - l, (d - t) * 0.6));
    }
    a.fillStyle = `#7f8aa0`;
    let m = Math.max(2, (u - l) * 0.12),
      h = m * 1.8;
    for (let e = d + h; e < f - h * 1.5; e += h * 2.2)
      for (let t = l + m; t < u - m * 1.5; t += m * 2.4)
        (a.beginPath(),
          a.moveTo(t, e + h),
          a.lineTo(t, e + m / 2),
          a.arc(t + m / 2, e + m / 2, m / 2, Math.PI, 0),
          a.lineTo(t + m, e + h),
          a.closePath(),
          a.fill());
  }
  let l = a.createLinearGradient(0, s(n + 0.12), 0, r);
  return (
    l.addColorStop(0, `rgba(118,130,152,0)`),
    l.addColorStop(1, `rgba(118,130,152,0.55)`),
    (a.fillStyle = l),
    a.fillRect(0, 0, 512, r),
    q(a, 512, r),
    K(i)
  );
}
function xt(e, t, n, r) {
  let [i, a] = G(512, 160),
    o = (t) => (1 - (t - e.min.y) / (e.max.y - e.min.y)) * 160,
    s = a.createLinearGradient(0, o(t), 0, 160);
  (s.addColorStop(0, n),
    s.addColorStop(1, r),
    (a.fillStyle = s),
    a.fillRect(0, 0, 512, 160),
    (a.strokeStyle = `rgba(232,226,212,0.9)`),
    (a.lineWidth = 7),
    a.beginPath(),
    a.moveTo(0, o(t) + 2),
    a.lineTo(512, o(t) + 2),
    a.stroke(),
    (a.strokeStyle = `rgba(220,214,200,0.45)`),
    (a.lineWidth = 3));
  for (let e of [0.25, 0.45]) {
    a.beginPath();
    for (let n = 0; n <= 512; n += 8) {
      let r = o(t) + (160 - o(t)) * e + Math.sin(n / 26) * 5;
      n ? a.lineTo(n, r) : a.moveTo(n, r);
    }
    a.stroke();
  }
  return (q(a, 512, 160, 12), K(i));
}
function St() {
  let [e, t] = G(256, 256),
    n = t.createRadialGradient(170, 110, 10, 150, 128, 170);
  return (
    n.addColorStop(0, `#efe9dc`),
    n.addColorStop(1, `#cfc8b8`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 256, 256),
    (t.strokeStyle = `rgba(120,104,88,0.85)`),
    (t.lineWidth = 4),
    (t.lineCap = `round`),
    t.beginPath(),
    t.arc(150, 104, 13, 0.15 * Math.PI, 0.85 * Math.PI),
    t.stroke(),
    t.beginPath(),
    t.arc(146, 160, 18, 0.1 * Math.PI, 0.7 * Math.PI),
    t.stroke(),
    q(t, 256, 256, 10),
    K(e)
  );
}
function Ct() {
  let [e, t] = G(256, 128),
    n = t.createLinearGradient(0, 0, 0, 128);
  return (
    n.addColorStop(0, `#f3ece0`),
    n.addColorStop(0.6, `#e3dacd`),
    n.addColorStop(1, `#c3bacb`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 256, 128),
    q(t, 256, 128, 10),
    K(e)
  );
}
var wt = {
  stars: [
    [-1.02, 0.8, 0.1, 3.5, 32],
    [-0.92, 0.56, 0.065, 7.4, -26],
    [-1.18, 0.38, 0.06, 4, 40],
    [0.5, 0.9, 0.075, 7.5, -35],
    [1.12, 0.86, 0.065, 3.6, 28],
    [1, 0.3, 0.05, 6.8, -22],
    [0.62, 0.42, 0.045, 4.1, 18],
  ],
  crescent: { at: [0.86, 0.6], r: 0.25, depth: 3.5, yaw: 55 },
  clouds: [
    { at: [-1.06, 0.03], w: 0.6, depth: 3.6, yaw: -40 },
    { at: [1.02, 0.1], w: 0.54, depth: 7.2, yaw: 30 },
  ],
  city: [
    { x: [-1.62, -0.42], depth: 5.8, yaw: -45 },
    { x: [-0.42, 0.48], depth: 7.6, yaw: 0 },
    { x: [0.48, 1.62], depth: 6.2, yaw: 45 },
  ],
  cityFoot: -0.5,
  waves: [
    { crest: -0.47, depth: 5.55, shift: 0.17, light: `#7e98a2`, dark: `#5d7684` },
    { crest: -0.56, depth: 5.28, shift: 0.09, light: `#8aa3aa`, dark: `#647e8a` },
    { crest: -0.65, depth: 5.02, shift: 0, light: `#97aeb2`, dark: `#6c8590` },
  ],
};
function Tt(e, { view: t, roofAt: n }) {
  let r = ft(t),
    i = pt(),
    a = [],
    o = [],
    s = (e, t, n) => {
      for (let r of t) o.push(e.place(r, n(r)));
    },
    c = (e) => (a.push(e.mesh), e),
    l = new L({ color: `#dcbd7e`, roughness: 0.85 });
  for (let [e, t, n, a, o] of wt.stars)
    s(
      c(mt(r, ht(e, t, n, o * 0.01), { at: [e, t], depth: a, yaw: H.degToRad(o), thick: 0.03, face: l, edge: i })),
      [e],
      () => t + n,
    );
  let u = wt.crescent;
  s(
    c(
      mt(r, gt(u.at[0], u.at[1], u.r), {
        at: u.at,
        depth: u.depth,
        yaw: H.degToRad(u.yaw),
        face: new L({ map: St(), roughness: 0.88 }),
        edge: i,
      }),
    ),
    [u.at[0] - 0.03],
    () => u.at[1] + u.r * 0.98,
  );
  let d = new L({ map: Ct(), roughness: 0.92 });
  for (let e of wt.clouds)
    s(
      c(mt(r, _t(e.at[0], e.at[1], e.w), { at: e.at, depth: e.depth, yaw: H.degToRad(e.yaw), face: d, edge: i })),
      [e.at[0] - e.w * 0.25, e.at[0] + e.w * 0.25],
      () => e.at[1] + e.w * 0.2,
    );
  let f = yt(19),
    p = wt.cityFoot;
  for (let e of wt.city) {
    let [t, n] = e.x,
      a = new B();
    a.moveTo(t, p);
    for (let e = t; e < n; e += 0.006) a.lineTo(e, p + f.top(e));
    (a.lineTo(n, p + f.top(n)), a.lineTo(n, p), a.closePath());
    let o = new C().setFromPoints(a.getPoints());
    s(
      c(
        mt(r, a, {
          at: [(t + n) / 2, p + 0.12],
          depth: e.depth,
          yaw: H.degToRad(e.yaw),
          thick: 0.05,
          face: new L({ map: bt(f, o, p), roughness: 0.9 }),
          edge: i,
        }),
      ),
      [t + (n - t) * 0.18, n - (n - t) * 0.18],
      (e) => p + f.top(e) - 0.01,
    );
  }
  let m = J(e, a),
    h = [];
  for (let [t, n] of wt.waves.entries()) {
    let a = vt(n.crest, -1.15, 9, n.shift),
      o = new C().setFromPoints(a.getPoints()),
      s = mt(r, a, {
        at: [0, n.crest - 0.15],
        depth: n.depth,
        thick: 0.05,
        face: new L({ map: xt(o, n.crest, n.light, n.dark), roughness: 0.9 }),
        edge: i,
      });
    (e.add(s.mesh), m.push(s.mesh), h.push({ mesh: s.mesh, phase: t * 1.3 }));
  }
  let g = [],
    _ = [];
  for (let e of o) {
    let t = n(e.x) - 0.12,
      r = t - e.y;
    if (r < 0.2) continue;
    let i = new j(0.007, 0.007, r, 4, 1, !0);
    (i.translate(e.x, e.y + r / 2, e.z), g.push(i));
    let a = new j(0.06, 0.06, 0.035, 12);
    (a.rotateZ(Math.PI / 2), a.translate(e.x, t, e.z), _.push(a));
  }
  if (g.length) {
    let t = new A(me(g), new L({ color: `#a58b67`, roughness: 0.95 })),
      n = new A(me(_), new L({ color: `#6f5a45`, roughness: 0.6 }));
    ((t.castShadow = !0), e.add(t, n));
  }
  return { waves: h, pieces: m, rays: r };
}
var Et = { honey: `#c8925a`, walnut: `#8a5a3c` };
function Dt(e, t, n, r = Math.min(e, t, n) * 0.06) {
  let i = new B(),
    a = -e / 2,
    o = -t / 2;
  (i.moveTo(a + r, o),
    i.lineTo(a + e - r, o),
    i.quadraticCurveTo(a + e, o, a + e, o + r),
    i.lineTo(a + e, o + t - r),
    i.quadraticCurveTo(a + e, o + t, a + e - r, o + t),
    i.lineTo(a + r, o + t),
    i.quadraticCurveTo(a, o + t, a, o + t - r),
    i.lineTo(a, o + r),
    i.quadraticCurveTo(a, o, a + r, o));
  let s = new v(i, {
    depth: n - 2 * Math.min(r, n / 3),
    bevelEnabled: !0,
    bevelThickness: Math.min(r, n / 3),
    bevelSize: Math.min(r, n / 3) * 0.9,
    bevelSegments: 2,
    curveSegments: 3,
  });
  return (s.translate(0, 0, -(n - 2 * Math.min(r, n / 3)) / 2), s);
}
function Ot(e, t) {
  let [n, r] = G(256, 512),
    i = dt(t);
  if (e === `sky`) {
    ((r.fillStyle = `#5d6c8c`), r.fillRect(0, 0, 256, 512), (r.fillStyle = `#e8d9a8`));
    for (let e = 0; e < 26; e += 1) {
      let e = i() * 256,
        t = i() * 512,
        n = 3 + i() * 7;
      r.beginPath();
      for (let i = 0; i < 10; i += 1) {
        let a = Math.PI / 2 + (i * Math.PI) / 5,
          o = i % 2 ? n * 0.45 : n;
        r.lineTo(e + Math.cos(a) * o, t - Math.sin(a) * o);
      }
      r.fill();
    }
  } else if (e === `forest`) {
    ((r.fillStyle = `#c9cdb5`), r.fillRect(0, 0, 256, 512));
    for (let e = 0; e < 9; e += 1) {
      let t = i() * 256,
        n = 40 + i() * 50,
        a = 220 + i() * 200;
      ((r.fillStyle = [`#7e9c6a`, `#5f7f57`, `#a8bf8a`][e % 3]),
        r.beginPath(),
        r.moveTo(t - n / 2, 512),
        r.lineTo(t, 512 - a),
        r.lineTo(t + n / 2, 512),
        r.fill());
    }
  } else {
    ((r.fillStyle = `#b9c3cc`),
      r.fillRect(0, 0, 256, 512),
      (r.fillStyle = `#e6dccb`),
      r.fillRect(40, 220, 176, 292),
      r.fillRect(20, 150, 50, 362),
      r.fillRect(186, 170, 50, 342),
      r.beginPath(),
      r.moveTo(20, 150),
      r.lineTo(45, 90),
      r.lineTo(70, 150),
      r.fill(),
      r.beginPath(),
      r.moveTo(186, 170),
      r.lineTo(211, 110),
      r.lineTo(236, 170),
      r.fill(),
      (r.fillStyle = `#8b96a8`));
    for (let e = 250; e < 480; e += 46) for (let t = 64; t < 200; t += 34) r.fillRect(t, e, 14, 24);
    ((r.fillStyle = `#a8463c`), r.fillRect(105, 410, 46, 102));
  }
  return (q(r, 256, 512, 14), K(n));
}
function kt() {
  let [e, t] = G(128, 128);
  return (
    (t.fillStyle = `#9c968a`),
    t.fillRect(0, 0, 128, 128),
    (t.strokeStyle = `#6f6a60`),
    (t.lineWidth = 4),
    t.beginPath(),
    t.arc(64, 64, 50, 0, Math.PI * 2),
    t.stroke(),
    (t.fillStyle = `#efe6d4`),
    t.fillRect(22, 52, 84, 24),
    (t.fillStyle = `#6e3a2e`),
    (t.font = `bold 13px Georgia, serif`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    t.fillText(`STAR FILM`, 64, 65),
    K(e)
  );
}
function At() {
  let [e, t] = G(256, 320);
  return (
    (t.fillStyle = `#4b5751`),
    t.fillRect(0, 0, 256, 320),
    (t.strokeStyle = `rgba(236,232,220,0.85)`),
    (t.lineWidth = 3),
    (t.lineCap = `round`),
    t.beginPath(),
    t.arc(128, 120, 62, 0, Math.PI * 2),
    t.stroke(),
    t.beginPath(),
    t.arc(108, 108, 8, 0, Math.PI * 2),
    t.stroke(),
    t.beginPath(),
    t.arc(150, 108, 8, 0, Math.PI * 2),
    t.stroke(),
    t.beginPath(),
    t.arc(128, 136, 22, 0.15 * Math.PI, 0.85 * Math.PI),
    t.stroke(),
    t.beginPath(),
    t.moveTo(40, 40),
    t.lineTo(96, 96),
    t.stroke(),
    t.beginPath(),
    t.moveTo(28, 52),
    t.lineTo(52, 28),
    t.lineTo(60, 60),
    t.closePath(),
    t.stroke(),
    (t.font = `italic 22px Georgia, serif`),
    (t.fillStyle = `rgba(236,232,220,0.8)`),
    t.fillText(`Le Voyage…`, 60, 240),
    t.fillText(`tableau 7`, 74, 278),
    q(t, 256, 320, 10),
    K(e)
  );
}
function jt() {
  let [e, t] = G(64, 256);
  (t.clearRect(0, 0, 64, 256),
    (t.strokeStyle = `#5f7f57`),
    (t.lineWidth = 3),
    t.beginPath(),
    t.moveTo(32, 256),
    t.lineTo(32, 0),
    t.stroke());
  for (let e = 12; e < 250; e += 9) {
    let n = 28 * Math.sin((e / 256) * Math.PI) + 4;
    ((t.fillStyle = e % 18 ? `#7e9c6a` : `#a8bf8a`),
      t.beginPath(),
      t.moveTo(32, e),
      t.quadraticCurveTo(32 - n * 0.6, e - 2, 32 - n, e + 10),
      t.lineTo(32, e + 5),
      t.fill(),
      t.beginPath(),
      t.moveTo(32, e),
      t.quadraticCurveTo(32 + n * 0.6, e - 2, 32 + n, e + 10),
      t.lineTo(32, e + 5),
      t.fill());
  }
  return K(e);
}
function Mt(e, { stageH: t, wallX: n, stageZ: r }) {
  let i = [],
    a = pt(),
    o = new Map(),
    s = (e, t) => {
      (o.has(e) || o.set(e, []), o.get(e).push(t.index ? t.toNonIndexed() : t));
    },
    c = new L({ color: Et.honey, roughness: 0.65 }),
    l = new L({ color: Et.walnut, roughness: 0.6 }),
    d = new L({ color: `#a39d90`, roughness: 0.45, metalness: 0.6 }),
    f = new L({ color: `#b8a37f`, roughness: 0.95 }),
    p = new L({ color: `#b8946a`, roughness: 0.42, metalness: 0.65 }),
    m = new L({ color: `#b8826a`, roughness: 0.8 }),
    h = new L({ color: `#a58b67`, roughness: 0.95 }),
    g = (e, { x: t = 0, y: n = 0, z: r = 0, rx: i = 0, ry: a = 0, rz: o = 0, s = null } = {}) => (
      s && e.scale(...s),
      e.rotateX(i),
      e.rotateZ(o),
      e.rotateY(a),
      e.translate(t, n, r),
      e
    ),
    y = [
      [-1, -3, 1.15, 2.7, 0, `sky`, 1, 0],
      [-1, -3.95, 1.3, 2.95, 0, `castle`, 2, 0.1],
      [-1, -4.95, 1.05, 2.4, 0, `forest`, 3, 0.2],
      [1, -5.65, 1.2, 2.8, 0, `castle`, 4, 0],
      [-1, -7.15, 1.25, 2.9, 1, `forest`, 6, 0],
      [-1, -10.05, 1.3, 3, 1, `sky`, 7, 0],
      [1, -7.3, 1.2, 2.8, 1, `sky`, 8, 0],
      [1, -10.2, 1.3, 2.9, 1, `castle`, 9, 0],
    ],
    b = { sky: null, castle: null, forest: null },
    x = [];
  for (let [e, r, o, s, c, l, u, d] of y) {
    let f = `${l}`;
    b[f] ||= new L({ map: Ot(l, u), roughness: 0.9 });
    let p = new B();
    (p.moveTo(-o / 2, 0), p.lineTo(o / 2, 0), p.lineTo(o / 2, s), p.lineTo(-o / 2, s), p.closePath());
    let m = new v(p, {
        depth: 0.04,
        bevelEnabled: !0,
        bevelThickness: 0.006,
        bevelSize: 0.012,
        bevelSegments: 1,
        curveSegments: 1,
        UVGenerator: {
          generateTopUV: (e, t, n, r, i) => [n, r, i].map((e) => new R((t[e * 3] + o / 2) / o, t[e * 3 + 1] / s)),
          generateSideWallUV: (e, t, n, r, i, a) =>
            [n, r, i, a].map((e) => new R((t[e * 3] + t[e * 3 + 1]) * 20, (t[e * 3 + 2] + 0.006) / 0.052)),
        },
      }),
      h = new A(m, [b[f], a]),
      g = c ? t : 0;
    (h.rotation.set(-0.12, e < 0 ? Math.PI / 2 : -Math.PI / 2, 0, `YXZ`),
      h.position.set(e * (n - 0.42 - d), g, r),
      h.updateMatrixWorld(!0),
      h.geometry.applyMatrix4(h.matrixWorld),
      x.push(h),
      c || i.push({ x: e * (n - 0.3 - d), z: r, r: 0.45 }));
  }
  J(e, x);
  {
    let t = n - 0.55,
      r = -0.55;
    for (let e of [-0.75, 0.75])
      (s(l, g(new j(0.025, 0.03, 1.75, 8), { x: t, y: 0.875, z: r + e })),
        s(l, g(new j(0.02, 0.02, 0.5, 6), { x: t, y: 0.03, z: r + e, rz: Math.PI / 2 })));
    s(l, g(new j(0.02, 0.02, 1.6, 8), { x: t, y: 1.72, z: r, rx: Math.PI / 2 }));
    for (let [n, i] of [
      [`#a8463c`, -0.5],
      [`#4f5a78`, -0.18],
      [`#6a4a5e`, 0.15],
      [`#8a7a5c`, 0.45],
    ]) {
      let a = new I(0.34, 1.15, 6, 4),
        o = a.attributes.position;
      for (let e = 0; e < o.count; e += 1) {
        let t = o.getX(e),
          n = o.getY(e);
        (o.setZ(e, Math.sin(t * 18) * 0.025 + (0.5 - n / 1.15) * 0.06), o.setX(e, t * (1 + (0.5 - n / 1.15) * 0.4)));
      }
      a.computeVertexNormals();
      let s = new A(a, new ae({ color: n, roughness: 0.85, sheen: 0.3, sheenColor: new w(`#ffd9b0`), side: 2 }));
      (s.position.set(t - 0.02, 1.12, r + i), (s.rotation.y = -Math.PI / 2), (s.castShadow = !0), e.add(s));
    }
    s(l, g(new _(0.34, 0.03, 1.5), { x: t, y: 1.95, z: r }));
    let a = new L({ color: `#6a5d6c`, roughness: 0.85 });
    for (let n of [-0.45, 0.05, 0.5]) {
      let i = new A(new j(0.1, 0.105, 0.2, 14), a);
      i.position.set(t, 2.065, r + n);
      let o = new A(new j(0.17, 0.17, 0.015, 16), a);
      (o.position.set(t, 1.972, r + n), e.add(i, o));
    }
    i.push({ x: t, z: r, r: 0.75 });
  }
  {
    let t = -n + 1.2,
      r = -5.55,
      a = new z(),
      o = new A(Dt(0.82, 1, 0.035, 0.02), new L({ color: `#4b5751`, roughness: 0.92 })),
      s = new A(new I(0.74, 0.92), new L({ map: At(), roughness: 0.95 }));
    ((s.position.z = 0.02), o.add(s), o.position.set(0, 1.25, 0.06), (o.rotation.x = -0.18));
    let u = new A(Dt(0.9, 1.08, 0.03, 0.015), l);
    (u.position.copy(o.position), u.rotation.copy(o.rotation), (u.position.z -= 0.012), a.add(u, o));
    for (let [e, t, n] of [
      [-0.34, 0.16, -0.2],
      [0.34, 0.16, -0.2],
      [0, -0.38, 0.32],
    ]) {
      let r = new A(new j(0.018, 0.022, 1.9, 6), c);
      (r.position.set(e, 0.92, t), (r.rotation.x = n), a.add(r));
    }
    (a.position.set(t, 0, r),
      (a.rotation.y = 0.75),
      a.traverse((e) => {
        e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
      }),
      e.add(a),
      i.push({ x: t, z: r, r: 0.5 }));
  }
  {
    let t = -n + 1.75,
      r = -4.35,
      a = new z(),
      o = new A(new j(0.21, 0.21, 0.035, 20), l);
    ((o.position.y = 0.46), a.add(o));
    let s = new A(new u(0.2, 0.012, 6, 20), l);
    ((s.rotation.x = Math.PI / 2), (s.position.y = 0.3), a.add(s));
    for (let [e, t] of [
      [0.15, 0.15],
      [-0.15, 0.15],
      [0.15, -0.15],
      [-0.15, -0.15],
    ]) {
      let n = new A(new j(0.014, 0.018, 0.47, 6), l);
      (n.position.set(e * 1.08, 0.23, t * 1.08), n.rotation.set(t * 0.35, 0, -e * 0.35), a.add(n));
    }
    for (let e of [0, 0.16]) {
      let t = new A(new u(0.18, 0.012, 6, 20, Math.PI), l);
      (t.position.set(0, 0.62 + e * 1.4, -0.19), t.rotation.set(-0.12, 0, 0), t.scale.set(1, 1.2 - e, 1), a.add(t));
    }
    for (let e of [-0.18, 0.18]) {
      let t = new A(new j(0.013, 0.013, 0.5, 6), l);
      (t.position.set(e, 0.7, -0.2), a.add(t));
    }
    (a.position.set(t, 0, r),
      (a.rotation.y = 2.2),
      a.traverse((e) => {
        e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
      }),
      e.add(a),
      i.push({ x: t, z: r, r: 0.33 }));
  }
  {
    let e = n - 1.6,
      t = -5.85;
    (s(p, g(new j(0.1, 0.12, 0.24, 14), { x: e, y: 0.12, z: t })),
      s(p, g(new j(0.012, 0.022, 0.36, 8), { x: e - 0.17, y: 0.25, z: t, rz: 0.95 })),
      s(p, g(new u(0.09, 0.01, 6, 14, Math.PI), { x: e + 0.02, y: 0.25, z: t, ry: Math.PI / 2 })),
      i.push({ x: e, z: t, r: 0.2 }));
  }
  let S = new L({ map: jt(), alphaTest: 0.5, side: 2, roughness: 0.85 });
  for (let [t, r, a] of [
    [-n + 0.5, -6, 1.9],
    [n - 0.55, -3.45, 1.7],
    [-n + 0.55, -1.6, 1.5],
  ]) {
    (s(m, g(new j(0.22, 0.16, 0.42, 16), { x: t, y: 0.21, z: r })),
      s(m, g(new u(0.22, 0.03, 6, 18), { x: t, y: 0.42, z: r, rx: Math.PI / 2 })),
      s(l, g(new j(0.035, 0.05, a * 0.55, 6), { x: t, y: 0.42 + a * 0.27, z: r })));
    let n = [];
    for (let e = 0; e < 8; e += 1) {
      let i = new I(0.26, 0.95, 1, 6),
        o = i.attributes.position;
      for (let e = 0; e < o.count; e += 1) {
        let t = (o.getY(e) + 0.475) / 0.95;
        o.setZ(e, -t * t * 0.45);
      }
      (i.translate(0, 0.475, 0),
        i.rotateX(-0.9 + (e % 2) * 0.35),
        i.rotateY((e / 8) * Math.PI * 2 + e * 0.3),
        i.translate(t, 0.42 + a * 0.52, r),
        n.push(i));
    }
    let o = new A(me(n), S);
    ((o.castShadow = !0), e.add(o), i.push({ x: t, z: r, r: 0.32 }));
  }
  let C = [
      [-n + 0.85, -2.35, 7, 0],
      [n - 0.95, -5.55, 9, 0],
      [n - 0.95, -6.85, 8, 1],
      [-n + 1.25, -10.45, 6, 1],
    ],
    T = new j(0.19, 0.19, 0.045, 18),
    E = [d, new L({ map: kt(), roughness: 0.5, metalness: 0.4 }), d],
    D = C.reduce((e, t) => e + t[2], 0),
    k = new se(T, E, D),
    ee = new N(),
    te = new O(),
    M = dt(5),
    P = 0;
  for (let [e, n, r, a] of C) {
    for (let i = 0; i < r; i += 1)
      (te.setFromAxisAngle(ut, M() * 6.28),
        ee.compose(
          new V(e + (M() - 0.5) * 0.04, (a ? t : 0) + 0.024 + i * 0.047, n + (M() - 0.5) * 0.04),
          te,
          new V(1, 1, 1),
        ),
        k.setMatrixAt(P++, ee));
    a || i.push({ x: e, z: n, r: 0.28 });
  }
  ((k.castShadow = !0),
    (k.receiveShadow = !0),
    e.add(k),
    s(l, g(Dt(0.9, 0.5, 0.55, 0.04), { x: -n + 1.1, y: t + 0.25, z: -9.7, ry: 0.2 })),
    s(p, g(new _(0.92, 0.03, 0.57), { x: -n + 1.1, y: t + 0.38, z: -9.7, ry: 0.2 })));
  let F = [
      [-n + 0.55, -10.55],
      [-n + 0.95, -10.65],
      [-n + 0.75, -10.3],
      [n - 0.55, -9.6],
      [n - 0.95, -9.85],
      [n - 0.6, -8],
    ],
    ne = new ie(0.16, 10, 7);
  ne.scale(1, 0.75, 0.85);
  let re = new se(ne, f, F.length + 4);
  F.forEach(([e, n], r) => {
    (te.setFromAxisAngle(ut, r * 1.3), ee.compose(new V(e, t + 0.11, n), te, new V(1, 1, 1)), re.setMatrixAt(r, ee));
  });
  for (let e = 0; e < 4; e += 1) {
    let r = -8.1 - e * 0.4,
      i = t + 1.1 + (e % 2) * 0.7;
    (te.setFromAxisAngle(ut, e),
      ee.compose(new V(n - 0.25, i, r), te, new V(0.8, 1.2, 0.8)),
      re.setMatrixAt(F.length + e, ee),
      s(h, g(new j(0.008, 0.008, 4 - i, 4, 1, !0), { x: n - 0.25, y: i + (4 - i) / 2, z: r })));
  }
  ((re.castShadow = !0), e.add(re), s(l, g(new _(0.08, 0.1, 1.4), { x: -n + 0.12, y: t + 0.5, z: -8.55 })));
  for (let e = 0; e < 7; e += 1) {
    let t = -8.05 - e * 0.17;
    (s(h, g(new j(0.009, 0.009, 4, 4, 1, !0), { x: -n + 0.2, y: 3.35, z: t })),
      s(h, g(new u(0.05, 0.012, 4, 10), { x: -n + 0.22, y: 1.22, z: t, ry: Math.PI / 2 })));
  }
  for (let [t, n] of o) {
    let r = new A(me(n), t);
    ((r.castShadow = !0), (r.receiveShadow = !0), e.add(r));
  }
  return { colliders: i };
}
var Y = Object.freeze({ w: 9, l: 22, wall: 4.2, ridge: 6.6, stageZ: -6.2, stageH: 0.85 }),
  X = Y.w / 2,
  Nt = Y.l / 2,
  Z = Object.freeze({
    spawn: { x: 0.3, z: 6.4, h: Math.PI },
    screen: { x: -X + 0.32, z: 5.2, y: 2.25, w: 3, h: 1.95 },
    projector: { x: -1.25, z: 5.2 },
    rack: { x: -3.75, z: 1.2 },
    camera: { x: 0.55, z: -2.6 },
    moon: { x: -0.4, y: 2.35, z: -9.05 },
    stageMark: { x: 0, z: -7.6 },
    tins: { x: 3.8, z: -2.4 },
    bench: { x: 3.75, z: 1.6 },
    kiosk: { x: 3.45, z: 8.6 },
    medal: { x: 3.55, z: 6 },
    melies: { x: -0.9, z: -1.7 },
  }),
  Pt = Object.freeze({ from: [0.12, 1.55, -2.95], at: [0.1, 2.38, -7.6], fov: 40 }),
  Ft = Object.freeze(new V(-8, 5.2, -9.5).normalize()),
  It = (e) => Y.ridge - (Math.abs(e) / (Y.w / 2)) * (Y.ridge - Y.wall);
function Lt(e, t) {
  return t < Y.stageZ ? Y.stageH : t < Y.stageZ + 1 && Math.abs(e) < 1.05 ? Y.stageH * (1 - (t - Y.stageZ) / 1) : 0;
}
var Rt = new L({ color: `#4b6757`, roughness: 0.55, metalness: 0.2 });
function zt(e) {
  let t = Ue({ boards: 8, base: [196, 148, 102], variance: 18 });
  t.repeat.set(Y.w / 2.4, Y.l / 2.4);
  let n = new A(new I(Y.w, Y.l), new L({ map: t, roughness: 0.62 }));
  ((n.rotation.x = -Math.PI / 2), (n.receiveShadow = !0), (n.name = `floor`), e.add(n));
  let r = W({ color: `#f6eee3` });
  r.repeat.set(Y.l / 2.2, 1);
  let a = new L({ map: r, roughness: 0.8 });
  for (let t of [-1, 1]) {
    let n = new A(new _(0.12, 1.05, Y.l), a);
    (n.position.set(t * (X + 0.06), 0.525, 0), (n.receiveShadow = !0), (n.castShadow = !0), e.add(n));
  }
  let o = r.clone();
  ((o.needsUpdate = !0), o.repeat.set(Y.w / 2.2, 1));
  let s = new A(new _(Y.w, 1.05, 0.12), new L({ map: o, roughness: 0.8 }));
  (s.position.set(0, 0.525, Nt + 0.06), e.add(s));
  let c = Bt(),
    l = new L({
      color: `#eef3ee`,
      map: c,
      transparent: !0,
      opacity: 1,
      roughness: 0.1,
      metalness: 0,
      envMapIntensity: 1,
      depthWrite: !1,
      side: 2,
    }),
    u = Y.wall - 1.05;
  for (let t of [-1, 1]) {
    let n = c.clone();
    ((n.needsUpdate = !0), n.repeat.set(Y.l / 1.5, 2));
    let r = new A(new I(Y.l, u), l.clone());
    ((r.material.map = n),
      r.position.set(t * X, 1.05 + u / 2, 0),
      (r.rotation.y = (t * Math.PI) / 2),
      (r.renderOrder = 2),
      e.add(r));
  }
  let d = Math.hypot(X, Y.ridge - Y.wall),
    f = Math.atan2(Y.ridge - Y.wall, X);
  for (let t of [-1, 1]) {
    let n = c.clone();
    ((n.needsUpdate = !0), n.repeat.set(3, Y.l / 1.5));
    let r = new I(d, Y.l);
    (r.rotateX(-Math.PI / 2), r.rotateZ(t > 0 ? -f : f));
    let i = new A(r, l.clone());
    ((i.material.map = n), i.position.set((t * X) / 2, (Y.wall + Y.ridge) / 2, 0), (i.renderOrder = 2), e.add(i));
  }
  let p = new B([new R(-X, 0), new R(X, 0), new R(X, u), new R(0, u + Y.ridge - Y.wall), new R(-X, u)]);
  for (let t of [Nt, -Nt]) {
    let n = c.clone();
    ((n.needsUpdate = !0), n.repeat.set(Y.w / 1.5, 3));
    let r = new M(p),
      i = r.attributes.uv;
    for (let e = 0; e < i.count; e += 1)
      i.setXY(e, (r.attributes.position.getX(e) + X) / Y.w, r.attributes.position.getY(e) / (u + Y.ridge - Y.wall));
    let a = new A(r, l.clone());
    ((a.material.map = n), a.position.set(0, 1.05, t), (a.renderOrder = 2), e.add(a));
  }
  let m = [];
  for (let e = -Nt; e <= Nt + 0.01; e += 2.2) {
    for (let t of [-1, 1]) {
      let n = new _(0.14, Y.wall, 0.14);
      (n.translate(t * X, Y.wall / 2, e), m.push(n));
      let r = Math.hypot(X, Y.ridge - Y.wall),
        a = new _(r, 0.14, 0.12);
      (a.rotateZ(t * -Math.atan2(Y.ridge - Y.wall, X)), a.translate((t * X) / 2, (Y.wall + Y.ridge) / 2, e), m.push(a));
      let o = new T(
        new V(t * X, Y.wall - 0.9, e),
        new V(t * X * 0.55, Y.wall + 0.05, e),
        new V(t * 0.6, Y.ridge - 0.35, e),
      );
      m.push(new i(o, 24, 0.04, 6, !1));
    }
    let t = new _(Y.w, 0.06, 0.06);
    (t.translate(0, Y.wall + 0.25, e), m.push(t));
  }
  for (let e of [-1, 1]) {
    let t = new _(0.16, 0.16, Y.l);
    (t.translate(e * X, Y.wall, 0), m.push(t));
  }
  let h = new _(0.16, 0.16, Y.l);
  (h.translate(0, Y.ridge, 0), m.push(h));
  let g = new _(0.08, 0.08, Y.l);
  for (let e of [-1, 1]) {
    let t = g.clone();
    (t.translate(e * X, 2.65, 0), m.push(t));
  }
  let v = new A(me(m.map((e) => e.toNonIndexed())), Rt);
  ((v.castShadow = !0), e.add(v));
}
function Bt() {
  let e = document.createElement(`canvas`);
  ((e.width = 256), (e.height = 256));
  let t = e.getContext(`2d`);
  ((t.fillStyle = `rgba(232,240,236,0.12)`),
    t.fillRect(0, 0, 256, 256),
    (t.fillStyle = `rgba(255,255,255,0.10)`),
    t.fillRect(14, 14, 90, 228),
    (t.fillStyle = `rgba(63,90,74,0.95)`),
    t.fillRect(0, 0, 256, 10),
    t.fillRect(0, 0, 10, 256),
    t.fillRect(124, 0, 8, 256),
    t.fillRect(0, 124, 256, 6));
  let n = new l(e);
  return ((n.colorSpace = y), (n.wrapS = n.wrapT = D), n);
}
function Vt(e) {
  let t = new L({
    color: `#f8f4ec`,
    roughness: 0.95,
    transparent: !0,
    opacity: 0.88,
    side: 2,
    emissive: `#fff1d6`,
    emissiveIntensity: 0.18,
  });
  for (let [n, r] of [7.5, 3.1, -1.3, -5].entries()) {
    let i = new I(Y.w - 0.5, 1.7, 48, 10),
      a = i.attributes.position;
    for (let e = 0; e < a.count; e += 1) {
      let t = a.getX(e),
        r = a.getY(e),
        i = t / (X - 0.25),
        o = 0.9 * (1 - i * i) * (0.85 + 0.15 * Math.cos(r * 2));
      a.setZ(e, -o + Math.sin(t * 2.6 + n * 1.7) * 0.05 + Math.sin(r * 3.4 + t) * 0.035);
    }
    i.computeVertexNormals();
    let o = new A(i, t);
    ((o.rotation.x = -Math.PI / 2),
      o.position.set(0, Y.wall + 0.15 + (n % 2) * 0.2, r),
      (o.receiveShadow = !0),
      e.add(o));
  }
  return t;
}
function Ht(e) {
  let t = new L({
      color: `#fbf6ee`,
      roughness: 0.95,
      transparent: !0,
      opacity: 0.84,
      side: 2,
      emissive: `#ffe6bf`,
      emissiveIntensity: 0.34,
      depthWrite: !1,
    }),
    n = Y.wall - 1.18;
  for (let [r, i, a, o] of [
    [-1, 9.9, 1.25, 1],
    [-1, 7.7, 1.05, -1],
    [-1, 1.1, 1.2, 1],
    [-1, -1.1, 1, -1],
    [1, 9.9, 1.2, -1],
    [1, 5.5, 1.1, 1],
    [1, 3.3, 1.2, -1],
    [1, -1.1, 1.05, 1],
  ]) {
    let s = new I(a, n, 28, 6),
      c = s.attributes.position;
    for (let e = 0; e < c.count; e += 1) {
      let t = c.getX(e),
        r = (c.getY(e) + n / 2) / n;
      (c.setZ(e, Math.sin((t / a) * Math.PI * 7) * 0.045 * (0.7 + 0.3 * r)),
        c.setX(e, t * (0.82 + 0.18 * r) + o * (1 - r) * 0.06));
    }
    s.computeVertexNormals();
    let l = new A(s, t);
    (l.position.set(r * (X - 0.1), 1.12 + n / 2, i + (o * (2.06 - a)) / 2),
      (l.rotation.y = r < 0 ? Math.PI / 2 : -Math.PI / 2),
      (l.renderOrder = 2),
      e.add(l));
  }
  let r = new A(new _(0.03, 0.03, Y.l - 0.4), new L({ color: `#8a5a3c`, roughness: 0.6 }));
  for (let t of [-1, 1]) {
    let n = r.clone();
    (n.position.set(t * (X - 0.1), Y.wall - 0.04, 0), e.add(n));
  }
  return t;
}
function Ut(e) {
  let t = Ve({ top: `#a9c2e6`, mid: `#cfddf0`, horizon: `#f7dcc6` });
  e.add(t);
  let [n, i] = (() => {
      let e = document.createElement(`canvas`);
      return ((e.width = e.height = 256), [e, e.getContext(`2d`)]);
    })(),
    a = i.createRadialGradient(128, 128, 0, 128, 128, 128);
  (a.addColorStop(0, `rgba(255,241,214,1)`),
    a.addColorStop(0.12, `rgba(255,241,214,1)`),
    a.addColorStop(0.14, `rgba(255,230,191,0.55)`),
    a.addColorStop(1, `rgba(255,230,191,0)`),
    (i.fillStyle = a),
    i.fillRect(0, 0, 256, 256));
  let o = new l(n);
  o.colorSpace = y;
  let s = new le(new te({ map: o, transparent: !0, opacity: 0.85, depthWrite: !1, fog: !1 }));
  (s.position.copy(Ft).multiplyScalar(150), s.scale.setScalar(2 * Math.tan(H.degToRad(20)) * 150), e.add(s));
  let c = new A(new r(160, 48), new L({ color: `#a8bf8a`, roughness: 1 }));
  ((c.rotation.x = -Math.PI / 2), (c.position.y = -0.02), (c.receiveShadow = !0), e.add(c));
  let d = new j(0.12, 0.18, 2.4, 6),
    f = new b(1.6, 1),
    p = new ee(0.9, 5.5, 8),
    m = new L({ color: `#8a6a50`, roughness: 1 }),
    h = [`#7e9c6a`, `#a8bf8a`, `#5f7f57`].map((e) => new L({ color: e, roughness: 0.95, flatShading: !0 })),
    g = (() => {
      let e = 11;
      return () => (e = (e * 16807) % 2147483647) / 2147483647;
    })();
  for (let t = 0; t < 46; t += 1) {
    let n = g() * Math.PI * 2,
      r = 16 + g() * 30,
      i = Math.cos(n) * r,
      a = Math.sin(n) * r * 1.3;
    if (Math.abs(i) < 9 && Math.abs(a) < 16) continue;
    let o = new z();
    if (g() > 0.55) {
      let e = new A(p, h[2]);
      ((e.position.y = 2.9), o.add(e));
    } else {
      let e = new A(d, m);
      ((e.position.y = 1.2), o.add(e));
      let n = new A(f, h[t % 2]);
      ((n.position.y = 3.2), n.scale.setScalar(0.8 + g() * 0.8), o.add(n));
    }
    (o.position.set(i, 0, a),
      o.traverse((e) => {
        e.isMesh && (e.castShadow = !0);
      }),
      e.add(o));
  }
  let _ = new A(new u(19, 0.7, 6, 64), h[1]);
  return ((_.rotation.x = Math.PI / 2), _.scale.set(1, 1.35, 1), (_.position.y = 0.5), e.add(_), t.material);
}
function Wt(e, { backdrop: t }) {
  let n = Ue({ boards: 10, base: [204, 152, 98], seed: 3 });
  n.repeat.set(3, 2);
  let r = new L({ map: n, roughness: 0.65 }),
    i = new L({ color: `#8a5a3c`, roughness: 0.7 }),
    a = Nt + Y.stageZ,
    o = new A(new _(Y.w - 0.2, Y.stageH, a), [i, i, r, i, i, i]);
  (o.position.set(0, Y.stageH / 2, Y.stageZ - a / 2), (o.receiveShadow = !0), (o.castShadow = !0), e.add(o));
  for (let t = 0; t < 3; t += 1) {
    let n = (Y.stageH * (3 - t)) / 3,
      i = new A(new _(2.1, n, 0.34), r);
    (i.position.set(0, n / 2, Y.stageZ + 0.17 + t * 0.33), (i.receiveShadow = !0), (i.castShadow = !0), e.add(i));
  }
  let s = new L({ color: `#fff2cc`, emissive: `#ffd28a`, emissiveIntensity: 3.2 }),
    c = new ie(0.05, 12, 8);
  for (let t = -X + 0.5; t <= X - 0.5; t += 0.5) {
    if (Math.abs(t) < 1.15) continue;
    let n = new A(c, s);
    (n.position.set(t, Y.stageH + 0.06, Y.stageZ - 0.08), e.add(n));
  }
  let l = [];
  for (let t of [-2.8, 0, 2.8]) {
    let n = new g(`#ffcf8a`, 2, 6, 1.8);
    (n.position.set(t, Y.stageH + 0.5, Y.stageZ - 0.6), e.add(n), l.push(n));
  }
  let u = new L({ map: Gt(), roughness: 0.92, emissive: `#ffffff`, emissiveIntensity: 0.04 }),
    d = X - 0.12,
    f = Y.wall - 0.08,
    p = Y.ridge - 0.14,
    m = Y.stageH,
    h = new M(new B([new R(-d, m), new R(d, m), new R(d, f), new R(0, p), new R(-d, f)])),
    v = h.attributes.position,
    y = h.attributes.uv;
  for (let e = 0; e < v.count; e += 1) y.setXY(e, (v.getX(e) + d) / (2 * d), (v.getY(e) - m) / (p - m));
  let b = new A(h, u);
  (b.position.set(0, 0, -Nt + 0.22), (b.receiveShadow = !0), e.add(b));
  let x = Tt(e, { view: Pt, roofAt: (e) => It(e) - 0.08 });
  return { backdropMaterial: u, waves: x.waves, lights: l, bulbs: s, scenery: x };
}
function Gt() {
  let e = 1024,
    t = document.createElement(`canvas`);
  ((t.width = e), (t.height = 768));
  let n = t.getContext(`2d`),
    r = n.createLinearGradient(0, 0, 0, 768);
  (r.addColorStop(0, `#373f55`),
    r.addColorStop(0.65, `#56607a`),
    r.addColorStop(1, `#747e95`),
    (n.fillStyle = r),
    n.fillRect(0, 0, e, 768));
  let i = 41,
    a = () => (i = (i * 16807) % 2147483647) / 2147483647;
  n.globalAlpha = 0.08;
  for (let t = 0; t < 260; t += 1) {
    ((n.strokeStyle = a() > 0.5 ? `#2f3a52` : `#c9cfdc`), (n.lineWidth = 6 + a() * 18));
    let t = a() * e,
      r = a() * 768,
      i = (a() - 0.5) * 0.7,
      o = 40 + a() * 140;
    (n.beginPath(), n.moveTo(t, r), n.lineTo(t + Math.cos(i) * o, r + Math.sin(i) * o), n.stroke());
  }
  n.globalAlpha = 1;
  for (let t = 0; t < 70; t += 1) {
    let t = a() * e,
      r = a() * 768 * 0.8,
      i = 2 + a() * 6;
    ((n.fillStyle = `rgba(232,214,160,${0.55 + a() * 0.4})`), n.beginPath());
    for (let e = 0; e < 10; e += 1) {
      let a = Math.PI / 2 + (e * Math.PI) / 5,
        o = e % 2 ? i * 0.42 : i;
      n.lineTo(t + Math.cos(a) * o, r - Math.sin(a) * o);
    }
    n.fill();
  }
  ((n.globalAlpha = 0.18), (n.fillStyle = `#e9e1d6`));
  for (let t = 0; t < 14; t += 1) {
    let t = a() * e,
      r = 768 * (0.62 + a() * 0.3);
    (n.beginPath(), n.ellipse(t, r, 60 + a() * 120, 10 + a() * 16, 0, 0, Math.PI * 2), n.fill());
  }
  n.globalAlpha = 1;
  let o = new l(t);
  return ((o.colorSpace = y), (o.anisotropy = 4), o);
}
function Kt(e) {
  let t = new ae({
      color: `#a8463c`,
      roughness: 0.85,
      sheen: 0.6,
      sheenColor: new w(`#ffc2b0`),
      sheenRoughness: 0.5,
      side: 2,
    }),
    n = (e, t, n, r, i = 0) => {
      let a = new I(e, t, 64, 12),
        o = a.attributes.position;
      for (let a = 0; a < o.count; a += 1) {
        let s = o.getX(a),
          c = (o.getY(a) + t / 2) / t,
          l = 1 - i * (1 - c) * (s / e + 0.5);
        (o.setX(a, s * l), o.setZ(a, Math.sin((s / e) * Math.PI * n) * r * (0.6 + 0.4 * c)));
      }
      return (a.computeVertexNormals(), a);
    };
  for (let r of [-1, 1]) {
    let i = new A(n(1.5, 4.3, 7, 0.09, 0.35), t);
    (i.position.set(r * (X - 0.7), Y.stageH + 2.15, Y.stageZ - 0.25),
      r > 0 && (i.scale.x = -1),
      (i.castShadow = !0),
      (i.receiveShadow = !0),
      e.add(i));
  }
  let r = new A(n(Y.w - 0.3, 0.8, 26, 0.06), t);
  (r.position.set(0, Y.stageH + 4.05, Y.stageZ - 0.2), (r.castShadow = !0), e.add(r));
  let i = new L({ color: `#d9a441`, roughness: 0.4, metalness: 0.6 }),
    a = new A(new _(Y.w - 0.3, 0.06, 0.05), i);
  (a.position.set(0, Y.stageH + 3.64, Y.stageZ - 0.12), e.add(a));
}
function qt(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 768), (t.height = 1152));
  let n = t.getContext(`2d`),
    r = t.width,
    i = t.height;
  ((n.fillStyle = `#9b4a43`), n.fillRect(0, 0, r, i));
  let a = (e, t, a) => {
    ((n.strokeStyle = t), (n.lineWidth = a), n.strokeRect(e, e, r - e * 2, i - e * 2));
  };
  (a(18, `#e9d9b8`, 22),
    a(52, `#2f4a66`, 34),
    a(86, `#e9d9b8`, 8),
    a(104, `#c9784f`, 14),
    (n.fillStyle = `#7f3a37`),
    n.fillRect(118, 118, r - 236, i - 236),
    (n.globalAlpha = 0.55));
  for (let e = 150; e < i - 140; e += 54)
    for (let t = 150; t < r - 140; t += 54)
      ((n.fillStyle = (t + e) % 108 == 0 ? `#e2c58e` : `#36577a`),
        n.beginPath(),
        n.moveTo(t, e - 10),
        n.lineTo(t + 10, e),
        n.lineTo(t, e + 10),
        n.lineTo(t - 10, e),
        n.closePath(),
        n.fill());
  ((n.globalAlpha = 1), n.save(), n.translate(r / 2, i / 2));
  for (let [e, t] of [
    [220, `#e9d9b8`],
    [190, `#2f4a66`],
    [130, `#c9784f`],
    [80, `#e9d9b8`],
    [40, `#2f4a66`],
  ]) {
    ((n.fillStyle = t), n.beginPath());
    for (let t = 0; t < 16; t += 1) {
      let r = (t / 16) * Math.PI * 2,
        i = t % 2 ? e * 0.78 : e;
      n.lineTo(Math.cos(r) * i * 0.8, Math.sin(r) * i * 1.1);
    }
    (n.closePath(), n.fill());
  }
  (n.restore(), (n.globalAlpha = 0.18), (n.fillStyle = `#f3e6cc`), n.fillRect(0, 0, r, i), (n.globalAlpha = 1));
  let o = n.getImageData(0, 0, r, i);
  for (let e = 0; e < o.data.length; e += 4) {
    let t = (Math.random() - 0.5) * 18;
    ((o.data[e] += t), (o.data[e + 1] += t), (o.data[e + 2] += t));
  }
  n.putImageData(o, 0, 0);
  let s = new l(t);
  ((s.colorSpace = y), (s.anisotropy = 8));
  let c = new A(new I(3.8, 5.7), new L({ map: s, roughness: 0.95 }));
  ((c.rotation.x = -Math.PI / 2), c.position.set(0.1, 0.006, 1.6), (c.receiveShadow = !0), e.add(c));
}
function Jt(e) {
  let n = [],
    r = new h({ color: `#2b2b2b` });
  for (let i of [6.6, 2.2, -2.2]) {
    let a = [];
    for (let e = 0; e <= 24; e += 1) {
      let t = e / 24,
        n = -X + t * Y.w;
      a.push(new V(n, Y.wall - 0.25 - Math.sin(t * Math.PI) * 0.75, i));
    }
    e.add(new t(new F().setFromPoints(a), r));
    for (let e = 2; e < 24; e += 2) n.push(a[e].clone().add(new V(0, -0.09, 0)));
  }
  let i = new ie(0.045, 10, 8),
    a = new L({ color: `#fff1c9`, emissive: `#ffc56b`, emissiveIntensity: 2.6 }),
    o = new se(i, a, n.length),
    s = new N();
  return (n.forEach((e, t) => o.setMatrixAt(t, s.makeTranslation(e.x, e.y, e.z))), e.add(o), { material: a });
}
function Yt(e) {
  let t = document.createElement(`video`);
  ((t.src = he(`film/moon-loop.mp4`)),
    (t.loop = !0),
    (t.muted = !0),
    (t.playsInline = !0),
    (t.crossOrigin = `anonymous`),
    (t.preload = `auto`));
  let n = new ce(t);
  n.colorSpace = y;
  let r = new re({ map: n, color: `#fff4e0`, toneMapped: !1 }),
    i = Z.screen,
    a = new A(new I(i.w, i.h), r);
  (a.position.set(i.x, i.y, i.z), (a.rotation.y = Math.PI / 2), e.add(a));
  let o = new A(
    new I(i.w, i.h),
    new re({ color: new w(`#2a2433`).multiplyScalar(1.8), blending: 2, transparent: !0, depthWrite: !1 }),
  );
  (o.position.set(i.x + 0.006, i.y, i.z), (o.rotation.y = Math.PI / 2), e.add(o));
  let s = new A(new _(0.06, i.h + 0.16, i.w + 0.16), new L({ color: `#efe6d6`, roughness: 0.9 }));
  (s.position.set(i.x - 0.04, i.y, i.z), e.add(s));
  let c = new V(Z.projector.x - 0.25, 1.42, Z.projector.z),
    u = new V(i.x + 0.03, i.y, i.z),
    d = u.clone().sub(c).normalize(),
    f = new V(0, 0, 1),
    m = new V().crossVectors(d, f).normalize(),
    h = [],
    v = [];
  for (let e = 0; e < 6; e += 1) {
    let t = (e / 6) * Math.PI,
      n = Math.cos(t),
      r = Math.sin(t),
      a = 1 / Math.max(Math.abs(n) / (i.w / 2), Math.abs(r) / (i.h / 2)),
      o = f.clone().multiplyScalar(n).addScaledVector(m, r),
      s = c.clone().addScaledVector(o, -0.04),
      l = c.clone().addScaledVector(o, 0.04),
      d = u.clone().addScaledVector(o, -a),
      p = u.clone().addScaledVector(o, a);
    (h.push(...s.toArray(), ...d.toArray(), ...p.toArray(), ...s.toArray(), ...p.toArray(), ...l.toArray()),
      v.push(0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0));
  }
  let b = new F();
  (b.setAttribute(`position`, new p(h, 3)), b.setAttribute(`uv`, new p(v, 2)));
  let x = document.createElement(`canvas`);
  ((x.width = 64), (x.height = 128));
  let S = x.getContext(`2d`),
    C = S.createImageData(64, 128);
  for (let e = 0; e < 128; e += 1)
    for (let t = 0; t < 64; t += 1) {
      let n = t / 63,
        r = 1 - e / 127,
        i = Math.exp(-(((n - 0.5) / 0.3) ** 4)) * (1 - 0.55 * r),
        a = (e * 64 + t) * 4;
      ((C.data[a] = C.data[a + 1] = C.data[a + 2] = 255), (C.data[a + 3] = Math.round(255 * i)));
    }
  S.putImageData(C, 0, 0);
  let T = new l(x);
  T.colorSpace = y;
  let D = new re({
      map: T,
      color: `#fff1d0`,
      transparent: !0,
      opacity: 0.03,
      blending: 2,
      depthWrite: !1,
      side: 2,
      fog: !1,
      toneMapped: !1,
    }),
    O = new A(b, D);
  ((O.frustumCulled = !1), (O.renderOrder = 3), e.add(O));
  let k = new g(`#fff1d6`, 0, 7, 1.6);
  (k.position.set(i.x + 0.9, i.y - 0.3, i.z), e.add(k));
  let ee = 1,
    te = 0,
    j = !1,
    M = null,
    N = () => {
      !j && !M && t.play().catch(() => {});
    };
  return {
    video: t,
    mesh: a,
    beam: O,
    beamPath: { from: c, to: u, radius: (Math.hypot(i.w, i.h) / 2) * 0.8 },
    start: N,
    set beamGain(e) {
      ee = e;
    },
    set dark(e) {
      te = e;
    },
    hold(e) {
      ((j = e), e ? t.pause() : N());
    },
    crank(e) {
      if (j) {
        if (e < 0.05) {
          t.paused || t.pause();
          return;
        }
        ((t.playbackRate = Math.min(2, Math.max(0.5, e))), t.paused && t.play().catch(() => {}));
      }
    },
    show(e) {
      if (((M = e), e)) {
        (t.pause(), (e.colorSpace = y));
        let n = i.w / i.h / (4 / 3);
        ((e.wrapS = E), e.repeat.set(n, 1), e.offset.set((1 - n) / 2, 0), (r.map = e));
      } else ((r.map = n), N());
      r.needsUpdate = !0;
    },
    update(e) {
      let t = 1.08 + Math.sin(e * 37) * 0.03 + Math.sin(e * 13.7) * 0.035;
      (r.color.setRGB(1 * t, 0.95 * t, 0.84 * t),
        (D.opacity = (0.022 + (t - 0.9) * 0.05) * ee),
        (k.intensity = 3.2 * te * t));
    },
  };
}
function Xt() {
  let e = document.createElement(`canvas`);
  ((e.width = 64), (e.height = 256));
  let t = e.getContext(`2d`),
    n = t.createImageData(64, 256);
  for (let e = 0; e < 256; e += 1) {
    let t = e / 255,
      r = Math.min(1, t / 0.07) * (1 - t) ** 0.9;
    for (let i = 0; i < 64; i += 1) {
      let a = i / 63,
        o = Math.exp(-(((a - 0.5) / 0.22) ** 2)) * (0.86 + 0.14 * Math.sin(a * 23 + t * 3)),
        s = (e * 64 + i) * 4;
      ((n.data[s] = n.data[s + 1] = n.data[s + 2] = 255), (n.data[s + 3] = Math.round(255 * o * r)));
    }
  }
  t.putImageData(n, 0, 0);
  let r = new l(e);
  return ((r.colorSpace = y), r);
}
function Zt(t, { beam: n }) {
  let r = Ft.clone().negate(),
    i = Xt(),
    a = [];
  for (let [e, n, r, o] of [
    [[-4.42, 4.05, -9.6], 1.7, 6.5, 7.2],
    [[-2.6, 5.5, -7.4], 1.8, 6.5, 8.6],
    [[-4.42, 4, -5.4], 1.5, 6.5, 6.4],
    [[-4.42, 3.9, -1.4], 1.4, 6.5, 7.8],
    [[-4.42, 3.6, 2.4], 1.3, 5.5, 6.9],
  ]) {
    let s = new I(n, r);
    s.translate(0, -r / 2, 0);
    let c = new re({
        map: i,
        color: new w(`#ffe2b5`).multiplyScalar(6),
        transparent: !0,
        opacity: 0.13,
        blending: 2,
        depthWrite: !1,
        side: 2,
        fog: !1,
      }),
      l = new A(s, c);
    (l.position.set(...e),
      (l.frustumCulled = !1),
      (l.renderOrder = 3),
      t.add(l),
      a.push({ mesh: l, start: new V(...e), w: n, len: r, T: o, phase: (a.length * 2.1) % 6.28, k: 1 }));
  }
  let s = r.clone().negate(),
    l = new V(),
    u = new V(),
    d = new V(),
    f = new N(),
    p = (e, t) => {
      (d
        .copy(e.start)
        .addScaledVector(r, e.len / 2)
        .sub(t)
        .negate(),
        u.copy(d).addScaledVector(r, -d.dot(r)).normalize(),
        l.crossVectors(s, u).normalize(),
        f.makeBasis(l, s, u),
        e.mesh.quaternion.setFromRotationMatrix(f));
    },
    m = a.map((e) => ({ start: e.start, axis: r, len: e.len, r0: e.w * 0.42, r1: e.w * 0.42, shaft: e }));
  if (n) {
    let e = n.to.clone().sub(n.from),
      t = e.length();
    m.push({ start: n.from, axis: e.normalize(), len: t, r0: 0.05, r1: n.radius, beam: !0 });
  }
  let h = n ? 60 : 0,
    g = new Float32Array(1080),
    _ = new Float32Array(1080),
    v = new Float32Array(1080),
    y = new Uint8Array(360),
    b = new V(),
    x = new V(),
    S = new V(),
    C = new V(),
    T = (e) => {
      let t = e < 360 - h ? e % a.length : m.length - 1,
        n = m[t];
      ((y[e] = t),
        b.crossVectors(n.axis, Math.abs(n.axis.y) > 0.9 ? new V(1, 0, 0) : new V(0, 1, 0)).normalize(),
        x.crossVectors(n.axis, b));
      let r = 0.08 + Math.random() * 0.86,
        i = (n.r0 + (n.r1 - n.r0) * r) * Math.sqrt(Math.random()),
        o = Math.random() * Math.PI * 2;
      (S.copy(n.start)
        .addScaledVector(n.axis, r * n.len)
        .addScaledVector(b, Math.cos(o) * i)
        .addScaledVector(x, Math.sin(o) * i),
        g.set([S.x, S.y, S.z], e * 3));
      let s = 0.02 + Math.random() * 0.03,
        c = Math.random() * Math.PI * 2,
        l = Math.random() * 2 - 1;
      v.set([Math.cos(c) * Math.sqrt(1 - l * l) * s, l * s * 0.6, Math.sin(c) * Math.sqrt(1 - l * l) * s], e * 3);
    };
  for (let e = 0; e < 360; e += 1) T(e);
  let E = new F();
  (E.setAttribute(`position`, new e(g, 3)), E.setAttribute(`color`, new e(_, 3)));
  let D = new o(
    E,
    new c({
      map: $e(),
      size: 2.4,
      sizeAttenuation: !1,
      vertexColors: !0,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
      blending: 2,
      fog: !1,
    }),
  );
  ((D.frustumCulled = !1), (D.renderOrder = 4), t.add(D));
  let O = 1,
    k = 0;
  return {
    set gain(e) {
      O = e;
    },
    set beamGain(e) {
      k = e;
    },
    update(e, t, n) {
      for (let e of a)
        ((e.k = (1 + 0.2 * Math.sin((t * Math.PI * 2) / e.T + e.phase)) * O),
          (e.mesh.material.opacity = 0.13 * e.k),
          (e.mesh.visible = O > 0.02),
          n && e.mesh.visible && p(e, n));
      for (let t = 0; t < 360; t += 1) {
        let n = m[y[t]];
        ((g[t * 3] += v[t * 3] * e),
          (g[t * 3 + 1] += v[t * 3 + 1] * e),
          (g[t * 3 + 2] += v[t * 3 + 2] * e),
          C.set(g[t * 3] - n.start.x, g[t * 3 + 1] - n.start.y, g[t * 3 + 2] - n.start.z));
        let r = C.dot(n.axis) / n.len,
          i = n.r0 + (n.r1 - n.r0) * r,
          a = C.addScaledVector(n.axis, -r * n.len).length() / i;
        if (r < 0.03 || r > 0.97 || a > 1 || g[t * 3 + 1] < 0.05) {
          T(t);
          continue;
        }
        let o = 2.6 * (1 - a * a) * Math.min(1, r / 0.12) * (n.beam ? k * 1.6 : n.shaft.k * (1 - r * 0.6));
        ((_[t * 3] = o), (_[t * 3 + 1] = o * 0.93), (_[t * 3 + 2] = o * 0.8));
      }
      ((E.attributes.position.needsUpdate = !0), (E.attributes.color.needsUpdate = !0));
    },
  };
}
function Qt(e, t) {
  let n = new k(`#c9d8f0`, `#e6d2b8`, 1.35);
  e.add(n);
  let r = new S(`#ffd6a5`, 2.7);
  (r.position.copy(Ft).multiplyScalar(18),
    r.target.position.set(0, 0, 0),
    (r.castShadow = !0),
    r.shadow.mapSize.set(t.shadowSize, t.shadowSize));
  let i = r.shadow.camera;
  ((i.left = -13),
    (i.right = 13),
    (i.top = 13),
    (i.bottom = -13),
    (i.near = 2),
    (i.far = 42),
    (r.shadow.bias = -4e-4),
    (r.shadow.normalBias = 0.03),
    (r.shadow.radius = 3.5),
    (r.shadow.intensity = 0.75),
    e.add(r, r.target));
  let a = new g(`#ffc88a`, 0.6, 4, 2);
  return (a.position.set(-3.7, 1.3, 9.3), e.add(a), { sun: r, hemi: n, bounce: a });
}
var $t = new Set();
function en(e, t = 1.6) {
  let n = new w(`#2a2433`);
  e.traverse((e) => {
    if (e.isMesh)
      for (let r of [e.material].flat())
        r &&
          r.emissive &&
          !r.emissiveMap &&
          !r.userData.lifted &&
          ((r.emissive.getHex() !== 0 && r.emissiveIntensity > 0) ||
            (r.emissive.copy(n), (r.emissiveIntensity = t), (r.userData.lifted = t), $t.add(r)));
  });
}
function tn(e) {
  for (let t of $t) t.emissiveIntensity = t.userData.lifted * (1 + 0.7 * e);
}
var nn = Object.freeze([
  [`models/melies/m_projector.glb`, { ...Z.projector }, 1.45, -90, 0.55],
  [`models/melies/m_camera.glb`, { ...Z.camera }, 1.75, 180, 0.6],
  [`models/melies/m_rack.glb`, { ...Z.rack }, 2.1, 90, 0.65],
  [`models/melies/m_tins.glb`, { ...Z.tins }, 0.95, -60, 0.55],
  [`models/melies/m_tins.glb`, { x: -3.6, z: 7.6 }, 0.8, 20, 0.5],
  [`models/melies/m_bench.glb`, { ...Z.bench }, 1.15, -90, 0.9],
  [`models/melies/m_stool.glb`, { x: 2.75, z: 2.5 }, 0.72, 15, 0.3],
  [`models/melies/m_crate.glb`, { x: -3.3, z: 9.6 }, 0.6, 12, 0.5],
  [`models/melies/m_crate.glb`, { x: 3.7, z: -4.6 }, 0.6, -25, 0.5],
  [`models/melies/m_kiosk.glb`, { ...Z.kiosk }, 2.3, -90, 1],
  [`models/melies/m_medal.glb`, { ...Z.medal }, 1.25, -105, 0.45],
  [`models/melies/m_moon.glb`, { ...Z.moon }, 2.5, 0, 0],
  [`models/melies/m_sunface.glb`, { x: 3.3, z: -8.9, y: Y.stageH }, 1.6, -25, 0],
  [`models/melies/m_ladder.glb`, { x: -3.7, z: -8.4, y: Y.stageH }, 2, 70, 0],
]);
async function rn({ scene: e, quality: t, camera: n = null, onProgress: r = () => {} }) {
  let i = new z();
  ((i.name = `melies-studio`), zt(i));
  let a = Vt(i),
    o = Ht(i),
    s = Ut(i),
    c = Wt(i, {});
  (Kt(i), qt(i));
  let l = Mt(i, { stageH: Y.stageH, wallX: X, stageZ: Y.stageZ }),
    u = Jt(i),
    d = Yt(i),
    f = Zt(i, { beam: d.beamPath }),
    p = Qt(e, t);
  (e.add(i), Ce(e, ve.melies));
  let m = s.uniforms,
    h = [
      [p.hemi, `intensity`, 0.7],
      [p.sun, `intensity`, 0.97],
      [p.bounce, `intensity`, 0.5],
      [a, `emissiveIntensity`, 1],
      [o, `emissiveIntensity`, 0.92],
      [u.material, `emissiveIntensity`, 0.7],
      [c.bulbs, `emissiveIntensity`, 0.55],
      ...c.lights.map((e) => [e, `intensity`, 0.7]),
    ].map(([e, t, n]) => ({ o: e, key: t, drop: n, base: e[t] })),
    g = p.hemi.color.clone(),
    v = p.hemi.groundColor.clone(),
    y = new w(`#7a6e92`),
    b = new w(`#4a4058`),
    x = new w(`#2a2433`),
    S = [`cTop`, `cMid`, `cHor`].map((e) => [e, m[e].value.clone()]),
    C = e.fog.color.clone(),
    T = [...l.colliders],
    E = {},
    D = 0;
  await Promise.all(
    nn.map(async ([e, t, n, a, o]) => {
      try {
        let r = await U(e, { x: t.x, z: t.z, y: t.y ?? Lt(t.x, t.z), rot: a, height: n });
        i.add(r);
        let s = e.split(`/`).pop().replace(`.glb`, ``);
        (E[s] || (E[s] = r), o && T.push({ x: t.x, z: t.z, r: o }));
      } catch {
        let e = new A(new _(0.8, n, 0.8), new L({ color: `#d8cdbd`, roughness: 0.9 }));
        (e.position.set(t.x, (t.y ?? 0) + n / 2, t.z),
          (e.castShadow = e.receiveShadow = !0),
          i.add(e),
          o && T.push({ x: t.x, z: t.z, r: o }));
      }
      ((D += 1), r(D / nn.length));
    }),
  );
  let O = i.children.filter((e) => e.name === `floor`);
  return (
    lt(i, { keep: [d.mesh, ...c.waves.map((e) => e.mesh), ...Object.values(E), ...O] }),
    {
      group: i,
      props: E,
      colliders: T,
      blockers: [
        { minX: -X, maxX: -1.05, minZ: Y.stageZ - 0.05, maxZ: Y.stageZ + 0.05 },
        { minX: 1.05, maxX: X, minZ: Y.stageZ - 0.05, maxZ: Y.stageZ + 0.05 },
      ],
      screen: d,
      sun: p.sun,
      backdropMaterial: c.backdropMaterial,
      stageLights: c.lights,
      bounds: { minX: -X + 0.15, maxX: X - 0.15, minZ: -Nt + 0.4, maxZ: Nt - 0.3 },
      cameraBox: { minX: -X, maxX: X, minZ: -Nt, maxZ: Nt, maxY: Y.wall + 0.6 },
      floorMeshes: O,
      dim(t) {
        for (let e of h) e.o[e.key] = e.base * (1 - e.drop * t);
        (p.hemi.color.copy(g).lerp(y, t), p.hemi.groundColor.copy(v).lerp(b, t));
        for (let [e, n] of S) m[e].value.copy(n).lerp(x, 0.85 * t);
        (e.fog.color.copy(C).lerp(x, 0.9 * t),
          (f.gain = 1 - t),
          (f.beamGain = t),
          (d.beamGain = 1 + 3.5 * t),
          (d.dark = t),
          tn(t));
      },
      update(e, t) {
        (d.update(t), f.update(e, t, n?.position));
        for (let e of c.waves) e.mesh.position.x = Math.sin(t * 0.9 + e.phase) * 0.06;
      },
    }
  );
}
var an = { zh: `乔治·梅里爱`, en: `Georges Méliès` },
  on = Object.freeze({
    screen: {
      label: { zh: `摇放映机`, en: `Crank the projector` },
      lines: {
        zh: [`1902 年，《月球旅行记》。你来摇放映机。`],
        en: [`1902 — A Trip to the Moon. You crank the projector.`],
      },
      after: {
        zh: [`正中眼睛。全世界都笑了——也全世界都在翻印我的片子。`],
        en: [`Right in the eye. The whole world laughed — and the whole world copied my film.`],
      },
      next: { zh: `戏法是怎么变的？到摄影机这儿来。`, en: `How is a trick done? Come to the camera.` },
    },
    camera: {
      label: { zh: `他的摄影机`, en: `His camera` },
      lines: {
        zh: [
          `1896 年，我在歌剧院广场拍街景，这台机器卡了一下。`,
          `再摇起来，片子里的公共马车，变成了灵车。`,
          `先拿我的礼帽练一回。`,
        ],
        en: [
          `In 1896 I was filming the Place de l'Opéra, and this machine jammed for a moment.`,
          `When I cranked on, the omnibus in the film had become a hearse.`,
          `First, a practice with my top hat.`,
        ],
      },
    },
    medal: {
      label: { zh: `一枚勋章`, en: `A medal` },
      lines: {
        zh: [
          `破产以后，我在蒙帕纳斯车站卖了好多年玩具。成千上万的人走过，没人认得我。`,
          `1931 年，给我别上这枚勋章的，是路易·卢米埃尔。当年不肯把机器卖给我的，就是他们家。`,
        ],
        en: [
          `After the bankruptcy I sold toys at the Gare Montparnasse for years. Thousands walked past. Nobody knew me.`,
          `In 1931 this medal was pinned on me by Louis Lumière. His was the family that wouldn't sell me their machine.`,
        ],
      },
      rub: { zh: `擦一擦`, en: `Rub it` },
    },
  }),
  sn = Object.freeze([
    {
      id: `rack`,
      label: { zh: `魔术师的斗篷`, en: `The magician's cape` },
      lines: {
        zh: [`1888 年，我买下罗贝尔-乌丹剧院，每晚让人从柜子里消失。`, `电影，不过是一只更大的柜子。`],
        en: [
          `In 1888 I bought the Théâtre Robert-Houdin and made people vanish from a cabinet every night.`,
          `Cinema was only a bigger cabinet.`,
        ],
      },
    },
    {
      id: `moon`,
      label: { zh: `石膏月亮`, en: `The plaster moon` },
      lines: {
        zh: [`月亮是石膏的，星星是剧院的姑娘们扮的，海浪是纸板。`, `你看它那只眼睛。炮弹打进去，就再没拔出来过。`],
        en: [
          `The moon is plaster, the stars are chorus girls, the waves are cardboard.`,
          `Look at its eye. The shell went in, and it has never come out since.`,
        ],
      },
    },
    {
      id: `tins`,
      label: { zh: `一堆旧胶片`, en: `Old film cans` },
      lines: {
        zh: [`战争一来，我破了产。胶片被熔掉提银子，赛璐珞做成了鞋跟。`, `1923 年，剩下的底片，我自己烧了。`],
        en: [
          `When the war came I went bankrupt. My prints were melted for silver; the celluloid became boot heels.`,
          `In 1923 I burned the negatives that were left myself.`,
        ],
      },
    },
    {
      id: `kiosk`,
      label: { zh: `车站的玩具摊`, en: `The station kiosk` },
      lines: {
        zh: [`这是我和珍妮在车站的小摊。卖发条玩具，卖糖。`, `她从前是我片子里的女主角。后来，是我的妻子。`],
        en: [
          `This was Jehanne's and my stall at the station. Clockwork toys, sweets.`,
          `She was once the leading lady of my films. Later, my wife.`,
        ],
      },
    },
  ]),
  cn = {
    zh: {
      hello: `Bonjour，我是乔治·梅里爱。`,
      alone: `这是我的玻璃摄影棚。今天，我们拍一部戏法片。`,
      go: `来，先看我的月亮。`,
    },
    en: {
      hello: `Bonjour. I'm Georges Méliès.`,
      alone: `This is my glass studio. Today we'll make a trick film.`,
      go: `Come — first, my moon.`,
    },
  },
  ln = {
    zh: {
      paint: `布景还差最后一笔——`,
      hatStage: `上台，站到礼帽旁边。`,
      stage: `上台来，站到它旁边。`,
      crank: `你来摇。Tournez !`,
      nudge: `摇啊，像磨咖啡那样转。`,
      hold: `接着摇，还没到。`,
      stop: `停！`,
      hatSwap: `大家别动——我去换。`,
      perfect: `一格不差。`,
      early: `抢了一格。观众只会以为，这也是戏法。`,
      late: `我自己上去换！`,
      lateAfter: `我也上镜了。留着，观众爱看这个。`,
      choose: `把它变成什么？`,
      yours: `这回，你说了算。`,
      again: `再开拍——Tournez !`,
      cut: `Coupez !`,
      phone: `你口袋里那盏会说话的小幻灯——今天就变它。`,
    },
    en: {
      paint: `One last stroke on your scenery —`,
      hatStage: `Up on the stage — stand by the hat.`,
      stage: `Up on the stage — stand beside it.`,
      crank: `You crank. Tournez !`,
      nudge: `Turn it — like a coffee grinder.`,
      hold: `Keep turning, not yet.`,
      stop: `Stop!`,
      hatSwap: `Nobody move — I'll swap it.`,
      perfect: `Not a frame out.`,
      early: `A frame early. The audience will think that was part of the trick.`,
      late: `I'll swap it myself!`,
      lateAfter: `Now I'm in the film too. We keep it — audiences love that.`,
      choose: `What shall it become?`,
      yours: `This time, you decide.`,
      again: `Roll again — Tournez !`,
      cut: `Coupez !`,
      phone: `That little talking magic lantern in your pocket — today it's the one.`,
    },
  },
  un = {
    zh: {
      intro: `片子拍好了。到银幕这边来——灯。`,
      after: `这一部是你的。`,
      tint: `最后一道：上色。一格一格地上。`,
      patience: `还差几格颜色。就这一会儿。`,
      poster: `剧照我还在上色，一格一格地上。你去擦擦那枚勋章，好了我叫你。`,
      more: `走之前，再看样东西。`,
      ready: `剧照好了，就差最后一道颜色。来。`,
      brush: `最后一道颜色，你来上。`,
      reveal: `Voilà。`,
      fogged: `剧照那张走光了。片子还在，片子是你的。`,
    },
    en: {
      intro: `The film is shot. Over to the screen — lights.`,
      after: `This one is yours.`,
      tint: `One last thing: the colour. Frame by frame.`,
      patience: `A few frames of colour still to go. Only a moment.`,
      poster: `I'm still colouring your still, frame by frame. Go and polish that medal; I'll call you.`,
      more: `Before you go — one more thing.`,
      ready: `Your still is ready, all but the last colour. Come.`,
      brush: `The last colour is yours to put on.`,
      reveal: `Voilà.`,
      fogged: `The still was fogged in the darkroom. The film survived — the film is yours.`,
    },
  },
  dn = {
    zh: {
      perfect: `好手。这回来真的。`,
      early: `抢了一格。兔子照样出来了。这回来真的。`,
      late: `晚了一点。不要紧，我那台机器也卡过一下。这回来真的。`,
    },
    en: {
      perfect: `Good hands. This time, for real.`,
      early: `A frame early. The rabbit came all the same. This time, for real.`,
      late: `A touch late. No matter — my machine jammed once too. This time, for real.`,
    },
  },
  fn = {
    zh: {
      pill: `你说一个`,
      ask: `你说，它变成什么？`,
      hold: `按住，说给他听`,
      listening: `说吧，他在听`,
      heard: `听着呢……`,
      cancel: `松手就不算`,
      again: `没听清。再说一次，或者写下来`,
      denied: `麦克风没开。写下来也行`,
      type: `或者写下来`,
      send: `就变这个`,
      skip: `还是从三个里挑`,
      thinking: `他在想`,
      hm: `Tiens……`,
      lost: `这一个我得回去琢磨。今天先从这三样里挑？`,
    },
    en: {
      pill: `Say your own`,
      ask: `Say it — what does it become?`,
      hold: `Hold and tell him`,
      listening: `Go on, he's listening`,
      heard: `Listening…`,
      cancel: `Let go to cancel`,
      again: `Didn't catch that. Again, or write it`,
      denied: `No microphone. Write it instead`,
      type: `Or write it down`,
      send: `Make it this`,
      skip: `Pick one of the three`,
      thinking: `He's thinking`,
      hm: `Tiens…`,
      lost: `That one needs some thought. For today, pick one of these three?`,
    },
  },
  pn = {
    zh: {
      lead: `这一镜是我的。该你了——`,
      ask: `你想要一个什么样的镜头？`,
      hold: `按住，说给他听`,
      listening: `说吧，他在听`,
      heard: `听着呢……`,
      cancel: `松手就不算`,
      again: `没听清。再说一次，或者写下来`,
      denied: `麦克风没开。写下来也行`,
      type: `或者写下来`,
      send: `就拍这个`,
      skip: `先不说`,
      took: (e) => `「${e}」。好，这一镜就照这个拍。`,
      hm: `Tiens……`,
      skipped: `不急。到台上，你自己会知道。`,
      after: (e) => `你要的「${e}」，拍下来了。这一部是你的。`,
    },
    en: {
      lead: `That shot was mine. Your turn —`,
      ask: `What shot would you like?`,
      hold: `Hold and tell him`,
      listening: `Go on, he's listening`,
      heard: `Listening…`,
      cancel: `Let go to cancel`,
      again: `Didn't catch that. Again, or write it`,
      denied: `No microphone. Write it instead`,
      type: `Or write it down`,
      send: `Shoot this one`,
      skip: `Not now`,
      took: (e) => `"${e}." Good — that's the shot we'll make.`,
      hm: `Tiens…`,
      skipped: `No hurry. On the stage, you'll know.`,
      after: (e) => `The "${e}" you asked for — it's on film. This one is yours.`,
    },
  },
  mn = {
    after: {
      zh: `片子收好。放给别人看的时候，记得先熄灯。`,
      en: `Keep the film safe. When you show it to someone, put the lights out first.`,
    },
    early: {
      zh: `这就走了？摄影棚的门一直开着。下次来，我们拍一部。`,
      en: `Leaving already? The studio door is always open. Come back and we'll make a film.`,
    },
  },
  hn = {
    zh: {
      look: `台上这堆东西，站在这儿看，什么都不是。`,
      eye: `眼睛贴到取景器上来。`,
      there: `现在，它是一帧了。只有从这一个位置看过去，才成立。`,
    },
    en: {
      look: `From where you stand, what's on my stage is nothing at all.`,
      eye: `Put your eye to the viewfinder.`,
      there: `Now it's one frame. It only works from this one spot.`,
    },
  },
  gn = {
    card: {
      zh: [`当一回导演`, `1897 · 蒙特勒伊 · 梅里爱的玻璃摄影棚`],
      en: [`Your turn as the director`, `1897 · Montreuil · Méliès' glass studio`],
    },
    guide: { zh: `引路人`, en: `The guide` },
    next: { zh: (e) => `还早。下一站：${e}。`, en: (e) => `Still early. Next: ${e}.` },
  },
  _n = Object.freeze({
    moon: {
      zh: [`一弯月牙`, `第二幕　它升上去，成了一弯月牙。`, `我变过很多个月亮。这一个是你的。`],
      en: [
        `a crescent moon`,
        `Act two — it rose, and was a crescent moon.`,
        `I have made many moons. This one is yours.`,
      ],
    },
    doves: {
      zh: [`一群白鸽`, `第二幕　它散开，飞走了。`, `鸽子是我当魔术师时的老搭档。它们认得回家的路。`],
      en: [
        `a flock of doves`,
        `Act two — it came apart, and flew.`,
        `Doves were my partners when I was a conjuror. They always find the way home.`,
      ],
    },
    rocket: {
      zh: [`一枚火箭`, `第二幕　它点着了，往天上去。`, `1902 年我把炮弹打进了月亮的眼睛。你这一枚往哪儿飞，你说了算。`],
      en: [
        `a rocket`,
        `Act two — it caught fire, and went up.`,
        `In 1902 I shot a shell into the moon's eye. Where this one goes is up to you.`,
      ],
    },
    stars: {
      zh: [`一场星星`, `第二幕　它碎成了一天的星星。`, `我的星星是剧院的姑娘们扮的。你看，一点也不难。`],
      en: [
        `a shower of stars`,
        `Act two — it broke into a sky of stars.`,
        `My stars were chorus girls from the theatre. You see? Not hard at all.`,
      ],
    },
    flowers: {
      zh: [`一束花`, `第二幕　它开花了。`, `纸花一推就开。真的花，要等。`],
      en: [`a bouquet`, `Act two — it bloomed.`, `Paper flowers open at a push. Real ones take their time.`],
    },
    sun: {
      zh: [`一轮太阳`, `第二幕　天亮了。`, `1904 年我让火车开进了太阳的嘴里。今天让太阳先出来。`],
      en: [
        `a sun`,
        `Act two — and then it was morning.`,
        `In 1904 I drove a train into the sun's mouth. Today the sun comes out first.`,
      ],
    },
  }),
  vn = [
    [/书|题|本子|册|笔记|课本|试卷|稿/, `book`],
    [/钟|闹|表/, `clock`],
    [/手机|电话/, `phone`],
    [/电脑|键盘|屏幕|代码/, `laptop`],
    [/杯|咖啡|茶|碗/, `cup`],
    [/信|通知|简历|合同|票/, `letter`],
    [/包|箱|行李/, `bag`],
    [/钥匙|锁/, `key`],
    [/鞋|靴/, `shoe`],
    [/头盔|外卖|骑/, `helmet`],
    [/听诊|护士|医/, `stethoscope`],
    [/伞|雨/, `umbrella`],
    [/book|exam|notebook|paper/i, `book`],
    [/clock|alarm|watch/i, `clock`],
    [/phone/i, `phone`],
    [/laptop|keyboard|code|screen/i, `laptop`],
    [/cup|coffee|tea|mug/i, `cup`],
    [/letter|envelope|ticket/i, `letter`],
    [/bag|suitcase/i, `bag`],
    [/key/i, `key`],
    [/shoe|boot/i, `shoe`],
    [/helmet|delivery|rider/i, `helmet`],
    [/stethoscope|nurse/i, `stethoscope`],
    [/umbrella|rain/i, `umbrella`],
  ];
function yn(e, t, n) {
  let r = n === `en`,
    i = e?.trick,
    a = (i?.options || []).filter((e) => _n[e?.into]).slice(0, 3);
  for (let e of [`moon`, `doves`, `stars`, `rocket`]) {
    if (a.length >= 3) break;
    if (a.some((t) => t.into === e)) continue;
    let t = _n[e][r ? `en` : `zh`];
    a.push({ into: e, name: t[0], card: t[1], why: t[2] });
  }
  if (i?.from) return { ...i, options: a, card: i.card || ``, own: i.own !== !1 };
  let o = t?.life || {},
    s = String((Array.isArray(o.details) && o.details.find((e) => e && String(e).length <= 14)) || ``).trim();
  if (s) {
    let e = vn.find(([e]) => e.test(s))?.[1];
    if (e) return { from: s, fromEn: s, kind: e, card: ``, options: a, own: !0 };
  }
  return {
    from: r ? `your phone` : `你的手机`,
    fromEn: `a modern smartphone`,
    kind: `phone`,
    card: r ? `Act one — a talking magic lantern` : `第一幕　会说话的小幻灯`,
    options: a,
    own: !1,
  };
}
var bn = Object.freeze({ kind: `hat`, into: `rabbit` }),
  xn = null,
  Sn = (e) => {
    if (xn) return xn;
    xn = e.createBuffer(1, e.sampleRate, e.sampleRate);
    let t = xn.getChannelData(0);
    for (let e = 0; e < t.length; e += 1) t[e] = Math.random() * 2 - 1;
    return xn;
  };
function Cn(e, t, n, { freq: r = 2400, q: i = 4, gain: a = 0.2, len: o = 0.03, type: s = `bandpass` } = {}) {
  let c = e.createBufferSource();
  c.buffer = Sn(e);
  let l = e.createBiquadFilter();
  ((l.type = s), (l.frequency.value = r), (l.Q.value = i));
  let u = e.createGain();
  (u.gain.setValueAtTime(1e-4, n),
    u.gain.exponentialRampToValueAtTime(a, n + 0.003),
    u.gain.exponentialRampToValueAtTime(1e-4, n + o),
    c.connect(l).connect(u).connect(t),
    c.start(n, Math.random() * 0.8),
    c.stop(n + o + 0.02));
}
var wn = {
    click(e = !1) {
      let t = we();
      t &&
        Cn(t, t.destination, t.currentTime, {
          freq: e ? 900 : 2600,
          q: e ? 2 : 5,
          gain: e ? 0.28 : 0.16,
          len: e ? 0.06 : 0.025,
        });
    },
    clack(e = !1) {
      let t = we();
      if (!t) return;
      let n = t.currentTime;
      if (
        (Cn(t, t.destination, n, { freq: 700, q: 1.4, gain: 0.5, len: 0.12 }),
        Cn(t, t.destination, n + 0.05, { freq: 1800, q: 3, gain: 0.25, len: 0.06 }),
        e)
      )
        for (let e = 0; e < 5; e += 1)
          Cn(t, t.destination, n + 0.12 + e * 0.045, { freq: 3200, q: 6, gain: 0.12, len: 0.03 });
    },
    bell(e = 1) {
      let t = we();
      if (!t) return;
      let n = t.currentTime;
      for (let [r, i] of [
        [880, 0.12],
        [1320, 0.05],
        [2640, 0.02],
      ]) {
        let a = t.createOscillator();
        ((a.type = `sine`), (a.frequency.value = r * e));
        let o = t.createGain();
        (o.gain.setValueAtTime(1e-4, n),
          o.gain.exponentialRampToValueAtTime(i, n + 0.008),
          o.gain.exponentialRampToValueAtTime(1e-4, n + 1.2),
          a.connect(o).connect(t.destination),
          a.start(n),
          a.stop(n + 1.3));
      }
    },
    rub(e) {
      let t = we();
      t &&
        Cn(t, t.destination, t.currentTime, {
          freq: 5200,
          q: 0.8,
          gain: 0.03 + Math.min(1, e) * 0.07,
          len: 0.09,
          type: `highpass`,
        });
    },
    motor() {
      let e = we();
      if (!e) return { setSpeed() {}, stop() {} };
      let t = e.createGain();
      ((t.gain.value = 0), t.connect(e.destination));
      let n = e.createOscillator();
      ((n.type = `sawtooth`), (n.frequency.value = 40));
      let r = e.createBiquadFilter();
      ((r.type = `lowpass`), (r.frequency.value = 260), n.connect(r).connect(t), n.start());
      let i = e.createBufferSource();
      ((i.buffer = Sn(e)), (i.loop = !0));
      let a = e.createBiquadFilter();
      ((a.type = `bandpass`), (a.frequency.value = 1100), (a.Q.value = 0.9));
      let o = e.createGain();
      o.gain.value = 0;
      let s = e.createOscillator();
      ((s.type = `square`), (s.frequency.value = 10));
      let c = e.createGain();
      return (
        (c.gain.value = 0),
        s.connect(c).connect(o.gain),
        i.connect(a).connect(o).connect(e.destination),
        i.start(),
        s.start(),
        {
          setSpeed(r) {
            let i = e.currentTime,
              l = Math.min(1, r / 16);
            (t.gain.setTargetAtTime(Math.min(0.07, r * 0.004), i, 0.08),
              n.frequency.setTargetAtTime(28 + r * 1.6, i, 0.1),
              o.gain.setTargetAtTime(0.045 * l, i, 0.06),
              c.gain.setTargetAtTime(0.04 * l, i, 0.06),
              s.frequency.setTargetAtTime(6 + r * 1.5, i, 0.1),
              a.frequency.setTargetAtTime(800 + r * 50, i, 0.1));
          },
          stop() {
            let r = e.currentTime;
            (t.gain.setTargetAtTime(0, r, 0.05),
              o.gain.setTargetAtTime(0, r, 0.05),
              c.gain.setTargetAtTime(0, r, 0.05),
              setTimeout(() => {
                (n.stop(), i.stop(), s.stop());
              }, 400));
          },
        }
      );
    },
  },
  Tn = (e) => {
    let t = /^([A-G])(#|b)?(\d)$/.exec(e);
    return (
      440 *
      2 **
        (({ C: -9, D: -7, E: -5, F: -4, G: -2, A: 0, B: 2 }[t[1]] +
          (t[2] === `#` ? 1 : t[2] === `b` ? -1 : 0) +
          (Number(t[3]) - 4) * 12) /
          12)
    );
  },
  En = [
    [0, 0.5, `A4`],
    [0.5, 0.5, `C5`],
    [1, 0.5, `F5`],
    [1.5, 0.5, `E5`],
    [2, 0.75, `D5`],
    [2.75, 0.25, `C5`],
    [3, 1, `A4`],
    [4, 0.5, `Bb4`],
    [4.5, 0.5, `D5`],
    [5, 0.5, `G5`],
    [5.5, 0.5, `F5`],
    [6, 0.75, `E5`],
    [6.75, 0.25, `D5`],
    [7, 1, `C5`],
    [8, 0.5, `A4`],
    [8.5, 0.5, `C5`],
    [9, 0.5, `F5`],
    [9.5, 0.5, `A5`],
    [10, 0.5, `G5`],
    [10.5, 0.5, `F5`],
    [11, 0.5, `E5`],
    [11.5, 0.5, `D5`],
    [12, 0.5, `C5`],
    [12.5, 0.5, `E5`],
    [13, 0.5, `G5`],
    [13.5, 0.5, `Bb5`],
    [14, 1.5, `A5`],
    [15.5, 0.5, `C5`],
    [16, 0.5, `D5`],
    [16.5, 0.5, `F5`],
    [17, 0.5, `Bb5`],
    [17.5, 0.5, `A5`],
    [18, 0.75, `G5`],
    [18.75, 0.25, `F5`],
    [19, 1, `D5`],
    [20, 0.5, `C5`],
    [20.5, 0.5, `E5`],
    [21, 0.5, `G5`],
    [21.5, 0.5, `Bb5`],
    [22, 0.5, `A5`],
    [22.5, 0.5, `G5`],
    [23, 0.5, `F5`],
    [23.5, 0.5, `E5`],
    [24, 0.5, `F5`],
    [24.5, 0.5, `C5`],
    [25, 0.5, `A4`],
    [25.5, 0.5, `C5`],
    [26, 0.75, `D5`],
    [26.75, 0.25, `E5`],
    [27, 1, `F5`],
    [28, 0.5, `A5`],
    [28.5, 0.5, `G5`],
    [29, 0.5, `F5`],
    [29.5, 0.5, `D5`],
    [30, 0.5, `C5`],
    [30.5, 0.5, `A4`],
    [31, 1, `F4`, `A4`, `C5`, `F5`],
  ],
  Dn = [`F2`, `F2`, `Bb1`, `C2`, `F2`, `D2`, `C2`, `F2`, `Bb1`, `G2`, `C2`, `F2`, `F2`, `D2`, `C2`, `F2`],
  On = {
    F2: [`A3`, `C4`, `F4`],
    Bb1: [`Bb3`, `D4`, `F4`],
    C2: [`G3`, `Bb3`, `E4`],
    D2: [`A3`, `D4`, `F4`],
    G2: [`G3`, `Bb3`, `D4`],
  };
function kn(e, t, n, r, i, a) {
  let o = e.createGain();
  (o.gain.setValueAtTime(1e-4, n),
    o.gain.exponentialRampToValueAtTime(i, n + 0.006),
    o.gain.exponentialRampToValueAtTime(i * 0.35, n + 0.18),
    o.gain.exponentialRampToValueAtTime(1e-4, n + Math.max(0.35, a) + 0.5));
  let s = e.createBiquadFilter();
  ((s.type = `lowpass`),
    s.frequency.setValueAtTime(Math.min(9e3, r * 9), n),
    s.frequency.exponentialRampToValueAtTime(Math.min(4e3, r * 3), n + 0.4),
    s.connect(o).connect(t));
  for (let [t, i, o, c] of [
    [1, 1, `triangle`, -4],
    [1, 0.6, `sine`, 5],
    [2, 0.22, `sine`, 2],
    [3, 0.08, `sine`, -3],
  ]) {
    let l = e.createOscillator();
    ((l.type = o), (l.frequency.value = r * t), (l.detune.value = c));
    let u = e.createGain();
    ((u.gain.value = i), l.connect(u).connect(s), l.start(n), l.stop(n + Math.max(0.35, a) + 0.6));
  }
  Cn(e, t, n, { freq: 1800, q: 1, gain: i * 0.15, len: 0.02 });
}
function An({ seconds: e = 18, extra: t = null, tempo: n = 132 } = {}) {
  let r = we();
  if (!r) return { stop() {} };
  let i = r.createGain();
  i.gain.value = 1e-4;
  let a = r.createDynamicsCompressor();
  ((a.threshold.value = -16), (a.ratio.value = 3), i.connect(a), a.connect(r.destination), t && a.connect(t));
  let o = r.currentTime + 0.08,
    s = 60 / n,
    c = Math.ceil(e / s);
  (i.gain.exponentialRampToValueAtTime(0.5, o + 0.3),
    i.gain.setValueAtTime(0.5, o + Math.max(0.4, e - 1.4)),
    i.gain.exponentialRampToValueAtTime(1e-4, o + e));
  let l = 0,
    u = 0,
    d = !0,
    f = () => {
      if (!d) return;
      let e = r.currentTime + 1.2 - o;
      for (; l < c && l * s < e;) {
        let e = l % 32,
          t = o + l * s;
        for (let [n, a, ...o] of En)
          if (n >= e && n < e + 1) for (let c of o) kn(r, i, t + (n - e) * s, Tn(c), 0.16, a * s);
        let n = Dn[Math.floor(e / 2) % Dn.length];
        if (e % 2 == 0) kn(r, i, t, Tn(n), 0.2, s * 0.9);
        else for (let e of On[n] || On.F2) kn(r, i, t, Tn(e), 0.06, s * 0.5);
        l += 1;
      }
      l < c && (u = setTimeout(f, 400));
    };
  return (
    f(),
    {
      stop() {
        ((d = !1), clearTimeout(u));
        let e = r.currentTime;
        (i.gain.cancelScheduledValues(e), i.gain.setTargetAtTime(1e-4, e, 0.15));
      },
    }
  );
}
function jn({ extra: e = null } = {}) {
  let t = we();
  if (!t) return { stop() {} };
  let n = t.createGain();
  ((n.gain.value = 0.5), n.connect(t.destination), e && n.connect(e));
  let r = !0,
    i = t.currentTime + 0.05,
    a = 0,
    o = () => {
      if (r) {
        for (; i < t.currentTime + 0.5;) (Cn(t, n, i, { freq: 2200, q: 3, gain: 0.05, len: 0.02 }), (i += 1 / 16));
        a = setTimeout(o, 200);
      }
    };
  return (
    o(),
    {
      stop() {
        ((r = !1), clearTimeout(a), n.gain.setTargetAtTime(0, t.currentTime, 0.1));
      },
    }
  );
}
function Mn(e, t, { kind: n = `` } = {}) {
  let r = document.createElement(`div`);
  ((r.className = n ? `mf-wish mf-wish-${n}` : `mf-wish`),
    (r.innerHTML = `
    <div class="mf-wish-q"></div>
    <div class="mf-wish-chips"></div>
    <button type="button" class="mf-wish-mic"><i></i><span></span></button>
    <form class="mf-wish-type"><input type="text" maxlength="60" enterkeyhint="send" autocomplete="off" /><button type="submit"></button></form>
    <button type="button" class="mf-wish-skip"></button>`),
    e.appendChild(r));
  let i = (e) => r.querySelector(e),
    a = i(`.mf-wish-q`),
    o = i(`.mf-wish-chips`),
    s = i(`.mf-wish-mic`),
    c = i(`.mf-wish-mic span`),
    l = i(`.mf-wish-type`),
    u = i(`.mf-wish-type input`),
    d = i(`.mf-wish-type button`),
    f = i(`.mf-wish-skip`);
  ((u.placeholder = t.type), (d.textContent = t.send), (f.textContent = t.skip));
  let p = null,
    m = (e) => {
      if (!p) return;
      let t = p;
      ((p = null),
        r.classList.remove(`show`),
        u.blur(),
        t(
          (e
            ? e
                .trim()
                .replace(/[。．.！!？?，,、\s]+$/u, ``)
                .replace(/^[「“"]+|[」”"]+$/gu, ``)
                .slice(0, 60)
            : ``) || null,
        ));
    },
    h = (e) => {
      c.textContent = e;
    };
  (ke(s, {
    onText: (e) => {
      ((u.value = e), wn.clack(), m(e));
    },
    onState: (e) => {
      let n = e === `recording` || e === `starting` || e === `listening` || e === `pause`;
      (r.classList.toggle(`listening`, n),
        n
          ? h(t.listening)
          : e === `thinking`
            ? h(t.heard)
            : e === `cancel`
              ? h(t.cancel)
              : e === `short` || e === `silent` || e === `failed`
                ? h(t.again)
                : e === `denied`
                  ? (h(t.denied), (s.hidden = !0), r.classList.add(`typed`))
                  : h(t.hold));
    },
  }).supported || r.classList.add(`typed`),
    l.addEventListener(`submit`, (e) => {
      (e.preventDefault(), u.value.trim() && (wn.clack(), m(u.value)));
    }));
  for (let e of [`keydown`, `keyup`, `keypress`]) u.addEventListener(e, (e) => e.stopPropagation());
  return (
    f.addEventListener(`click`, () => m(null)),
    o.addEventListener(`click`, (e) => {
      let t = e.target.closest(`button`);
      t && (t.classList.add(`picked`), wn.clack(), navigator.vibrate?.(12), setTimeout(() => m(t.textContent), 260));
    }),
    {
      get open() {
        return !!p;
      },
      ask(e = []) {
        return (
          (a.textContent = t.ask),
          h(t.hold),
          (u.value = ``),
          o.replaceChildren(
            ...e.slice(0, 3).map((e, t) => {
              let n = document.createElement(`button`);
              return ((n.type = `button`), (n.textContent = e), n.style.setProperty(`--d`, `${0.08 + t * 0.07}s`), n);
            }),
          ),
          r.classList.add(`show`),
          document.body.classList.add(`mf-wishing`),
          new Promise((e) => {
            p = (t) => {
              (document.body.classList.remove(`mf-wishing`), e(t));
            };
          })
        );
      },
      close() {
        m(null);
      },
    }
  );
}
function Nn(e, t) {
  let n = t === `en`,
    r = (Array.isArray(e?.details) ? e.details : [])
      .map((e) => String(e || ``).trim())
      .filter((e) => e && e.length <= (n ? 30 : 14)),
    i = n
      ? [(e) => `${e}, flying to the moon`, (e) => `${e} turning into stars`, (e) => `Me and ${e}, flying off`]
      : [(e) => `${e}飞上月亮`, (e) => `${e}变成满天星星`, (e) => `我和${e}一起飞走`],
    a = r.slice(0, 3).map((e, t) => i[t](e)),
    o = n
      ? [`Me, flying to the moon`, `A sky full of stars`, `Doves flying out of my hands`]
      : [`我飞上月亮`, `满台的星星落下来`, `一群白鸽从我手里飞起来`];
  for (let e of o) a.length < 3 && a.push(e);
  return a;
}
function Pn({ stage: e, cam: t, ui: n }) {
  let r = document.createElement(`div`);
  ((r.className = `mf-lens`),
    (r.innerHTML = `
    <div class="mf-lens-band mf-top"></div><div class="mf-lens-band mf-bottom"></div>
    <div class="mf-lens-band mf-left"></div><div class="mf-lens-band mf-right"></div>
    <div class="mf-lens-gate"><i class="tl"></i><i class="tr"></i><i class="bl"></i><i class="br"></i>
      <div class="mf-lens-count"><b></b><span>STAR FILM</span></div><div class="mf-lens-dot"></div>
      <div class="mf-lens-call"></div></div>`),
    n.prepend(r));
  let i = r.querySelector(`.mf-lens-gate`),
    a = r.querySelector(`.mf-lens-count b`),
    o = r.querySelector(`.mf-lens-call`),
    s = e.renderer.domElement,
    c = e.finish.uniforms,
    l = !1,
    u = 30,
    d = { x: 0, y: 0, w: 1, h: 1 },
    f = 0,
    p = null,
    m = 0,
    h = 0,
    g = 0,
    _ = !1,
    v = null,
    y = [],
    b = 0;
  function x() {
    let e = window.innerWidth,
      t = window.innerHeight;
    ((d =
      e / t >= 4 / 3
        ? { w: (4 / 3) * t, h: t, x: (e - (4 / 3) * t) / 2, y: 0 }
        : { w: e, h: e * 0.75, x: 0, y: (t - e * 0.75) / 2 }),
      r.style.setProperty(`--gx`, `${d.x}px`),
      r.style.setProperty(`--gy`, `${d.y}px`),
      r.style.setProperty(`--gw`, `${d.w}px`),
      r.style.setProperty(`--gh`, `${d.h}px`),
      l && S());
  }
  function S() {
    let t = window.innerHeight;
    ((f = (2 * Math.atan(Math.tan((u * Math.PI) / 360) * (t / d.h)) * 180) / Math.PI),
      (e.camera.fov = f),
      e.camera.updateProjectionMatrix());
  }
  (window.addEventListener(`resize`, x), x());
  let C = e.composer.render.bind(e.composer),
    w = [0, 1, 2].map(() => document.createElement(`canvas`)),
    T = 0;
  return (
    (e.composer.render = (t) => {
      if ((l && e.camera.fov !== f && S(), C(t), !_ || ((_ = !1), v.skip))) return;
      let n = s.width / window.innerWidth,
        r = Math.min(640, Math.round(d.w * n)),
        i = Math.round((r * 3) / 4),
        a = w[T++ % w.length];
      (a.width !== r && ((a.width = r), (a.height = i)),
        a.getContext(`2d`).drawImage(s, d.x * n, d.y * n, d.w * n, d.h * n, 0, 0, r, i));
      let o = { at: performance.now(), blob: null, take: v.take, mark: v.mark || null };
      if (((v.mark = null), y.push(o), a.toBlob))
        a.toBlob(
          (e) => {
            o.blob = e;
          },
          `image/jpeg`,
          0.82,
        );
      else {
        let e = document.createElement(`canvas`);
        ((e.width = r / 2), (e.height = i / 2), e.getContext(`2d`).drawImage(a, 0, 0, r / 2, i / 2), (o.canvas = e));
      }
    }),
    {
      el: r,
      frames: y,
      get active() {
        return l;
      },
      get rect() {
        return d;
      },
      get filmTime() {
        return g;
      },
      open({ from: e, at: n, fov: i = 30 }) {
        ((u = i),
          (l = !0),
          (m = 0),
          (h = 0),
          c.uTilt && p === null && ((p = c.uTilt.value), (c.uTilt.value = 0)),
          x(),
          S(),
          t.frame(e, n, { cut: !0, fit: !1 }),
          ue.to(c.uSilent, { value: 1, duration: 0.25, overwrite: `auto` }),
          r.classList.add(`show`),
          document.body.classList.add(`mf-through`));
      },
      close() {
        ((l = !1),
          r.classList.remove(`show`, `rolling`),
          document.body.classList.remove(`mf-through`),
          ue.to(c.uSilent, { value: 0, duration: 0.6, overwrite: `auto` }),
          p !== null && ((c.uTilt.value = p), (p = null)),
          e.setFov(e.baseFov));
      },
      frame(e, t = null, { skip: n = !1 } = {}) {
        ((h += 1),
          (v = { take: e, mark: t, skip: n }),
          (b += 1),
          (a.textContent = String(b).padStart(4, `0`)),
          r.classList.add(`rolling`));
      },
      idle() {
        r.classList.remove(`rolling`);
      },
      step(e) {
        if (((m += e), !h)) return 0;
        ((h = Math.min(h - 1, 1)), (_ = !0));
        let t = m;
        return ((m = 0), (g += t), t);
      },
      call(e, { tone: t = `` } = {}) {
        ((o.textContent = e || ``), (o.className = `mf-lens-call${e ? ` show` : ``}${t ? ` ${t}` : ``}`));
      },
      flash() {
        (i.classList.remove(`flash`), i.offsetWidth, i.classList.add(`flash`));
      },
      clearFrames() {
        ((y.length = 0), (b = 0), (a.textContent = `0000`));
      },
      destroy() {
        ((e.composer.render = C), window.removeEventListener(`resize`, x), r.remove());
      },
    }
  );
}
var Fn = (e, t = {}) => new L({ color: e, roughness: 0.88, metalness: 0, side: 2, ...t }),
  In = () =>
    new L({
      color: `#e9bf55`,
      emissive: `#a8741c`,
      emissiveIntensity: 0.45,
      metalness: 0.55,
      roughness: 0.38,
      side: 2,
    }),
  Ln = new re({ color: `#3b2f27` }),
  Rn = new h({ color: `#2a2622`, transparent: !0, opacity: 0.8 }),
  zn = (e, n, r, i = 0) => new t(new F().setFromPoints([new V(e, n, i), new V(e, r, i)]), Rn),
  Bn = (e) => 1 - (1 - Math.min(1, Math.max(0, e))) ** 3,
  Vn = (e = 0.12, t = 0.45) => {
    let n = new B();
    for (let r = 0; r < 10; r += 1) {
      let i = (r / 10) * Math.PI * 2 + Math.PI / 2,
        a = r % 2 ? e * t : e;
      r ? n.lineTo(Math.cos(i) * a, Math.sin(i) * a) : n.moveTo(Math.cos(i) * a, Math.sin(i) * a);
    }
    return n;
  };
function Hn({ fill: e, rim: t, cheeks: n = !0, size: r = 256 }) {
  let i = document.createElement(`canvas`);
  i.width = i.height = r;
  let a = i.getContext(`2d`),
    o = r / 2;
  ((a.fillStyle = e),
    a.beginPath(),
    a.arc(o, o, o * 0.96, 0, Math.PI * 2),
    a.fill(),
    (a.strokeStyle = t),
    (a.lineWidth = r * 0.03),
    a.stroke(),
    (a.strokeStyle = `#3b2f27`),
    (a.lineWidth = r * 0.028),
    (a.lineCap = `round`));
  for (let e of [-1, 1])
    (a.beginPath(), a.arc(o + e * o * 0.34, o * 0.86, o * 0.13, Math.PI * 1.1, Math.PI * 1.9), a.stroke());
  if ((a.beginPath(), a.arc(o, o * 1.08, o * 0.38, Math.PI * 0.18, Math.PI * 0.82), a.stroke(), n)) {
    a.fillStyle = `rgba(232,120,110,0.35)`;
    for (let e of [-1, 1]) (a.beginPath(), a.arc(o + e * o * 0.55, o * 1.15, o * 0.12, 0, Math.PI * 2), a.fill());
  }
  let s = new l(i);
  return ((s.colorSpace = y), s);
}
function Un(e = 1) {
  let t = 1.05,
    n = 0.36,
    r = 0.45770000000000005 / (2 * n),
    i = Math.sqrt(t * t - r * r),
    a = Math.atan2(i, r),
    o = Math.atan2(i, 0.2756944444444446),
    s = new B();
  (s.moveTo(r, i), s.absarc(0, 0, t, a, Math.PI * 2 - a, !1), s.absarc(n, 0, 0.88, Math.PI * 2 - o, o, !0));
  let c = new v(s, {
      depth: 0.07,
      bevelEnabled: !0,
      bevelSize: 0.02,
      bevelThickness: 0.02,
      bevelSegments: 2,
      curveSegments: 48,
    }),
    l = new A(
      c,
      new L({ color: `#e6cf86`, roughness: 0.6, metalness: 0.1, emissive: `#ffd36b`, emissiveIntensity: 0.08 }),
    );
  l.castShadow = !0;
  let d = new z();
  ((l.rotation.z = Math.PI / 2 + 0.15), d.add(l));
  let f = new A(new u(0.06, 0.012, 6, 16, Math.PI), Ln);
  (f.position.set(-0.08, -0.45, 0.1), (f.rotation.z = Math.PI));
  let p = new A(new u(0.1, 0.014, 6, 18, Math.PI * 0.8), Ln);
  (p.position.set(0.12, -0.62, 0.1), (p.rotation.z = Math.PI * 1.1), d.add(f, p));
  for (let e of [-0.55, 0.55]) d.add(zn(e, 0.4, 7, 0.03));
  return (d.scale.setScalar(e), d);
}
var Wn = { up: 0.6, right: 0.35 };
function Gn({ at: e, root: t }) {
  let n = Un(0.5);
  ((n.visible = !1), t.add(n));
  let r = [],
    i = new M(Vn(0.07));
  for (let n = 0; n < 7; n += 1) {
    let a = new A(i, In()),
      o = (n / 7) * Math.PI * 2;
    (a.position.set(e.x + Wn.right + Math.cos(o) * (0.62 + (n % 2) * 0.2), e.y + 1.45 + Math.sin(o) * 0.5, e.z - 0.15),
      a.scale.setScalar(0.001),
      t.add(a),
      r.push(a));
  }
  let a = -1,
    o = 0;
  return {
    set(t) {
      ((n.visible = !0), (o = Math.min(1, o + t / 1.1)), n.position.set(e.x, e.y + 0.85 + (1 - Bn(o)) * 3.5, e.z));
    },
    start() {
      ((a = 0), (n.visible = !0));
    },
    update(t) {
      if (a < 0) return;
      a += t;
      let i = Bn(a / 3.6);
      (n.position.set(e.x + i * Wn.right, e.y + 0.85 + i * Wn.up, e.z),
        (n.rotation.z = Math.sin(a * 1.3) * 0.06),
        r.forEach((e, t) => {
          let n = H.clamp((a - 0.4 - t * 0.18) / 0.35, 0, 1);
          (e.scale.setScalar(n * (1 + Math.sin(a * 5 + t) * 0.18)), (e.rotation.z = a * 0.6 + t));
        }));
    },
  };
}
var Kn = [
  { dx: -0.14, dz: 0.14, when: 2.5, side: -1, yaw: 1.85 },
  { dx: 0.24, dz: -0.04, when: 2.95, side: 1, yaw: -1.25 },
];
function qn({ at: e, root: t }) {
  let n = [],
    r = new ie(0.075, 12, 8);
  r.scale(1, 0.75, 1.7);
  let i = new ie(0.045, 10, 8),
    a = new B([new R(0, -0.05), new R(0.3, 0.02), new R(0.22, 0.08), new R(0, 0.07)]),
    o = new M(a);
  o.rotateX(-Math.PI / 2);
  let s = Fn(`#e9e4da`);
  for (let a = 0; a < 11; a += 1) {
    let c = new z(),
      l = new A(r, s);
    c.add(l);
    let u = new A(i, s);
    (u.position.set(0, 0.04, 0.12), c.add(u));
    let d = new A(o, s),
      f = new A(o, s);
    ((f.scale.x = -1),
      (d.position.x = 0.03),
      (f.position.x = -0.03),
      c.add(d, f),
      c.traverse((e) => {
        e.isMesh && (e.castShadow = !0);
      }),
      (c.visible = !1),
      (c.userData = {
        wl: d,
        wr: f,
        a: -Math.PI / 2 + (a / 10 - 0.5) * 2.6,
        rise: 1.1 + Math.random() * 1.4,
        out: 0.9 + Math.random() * 1.6,
        delay: Math.random() * 0.35,
        phase: Math.random() * 6,
      }));
    let p = Kn[a - 9];
    if (p) {
      c.scale.setScalar(1.25);
      let t = new V(e.x + p.dx, e.y + 0.09, e.z + p.dz);
      c.userData.home = {
        ...p,
        land: t,
        path: new P(
          new V(e.x, e.y + 0.8, e.z),
          new V(e.x + p.side * 1.5, e.y + 3, e.z + 0.7),
          t.clone().add(new V(-p.side * 0.9, 1.3, 0.5)),
          t,
        ),
      };
    }
    (t.add(c), n.push(c));
  }
  let c = new V(),
    l = -1;
  return {
    set() {},
    start() {
      ((l = 0),
        n.forEach((e) => {
          e.visible = !0;
        }));
    },
    update(t) {
      if (!(l < 0)) {
        l += t;
        for (let t of n) {
          let n = t.userData,
            r = Math.max(0, l - n.delay);
          if (n.home) {
            let e = n.home,
              i = Math.min(1, r / (e.when - n.delay));
            if (i < 1) {
              let a = 1 - (1 - i) ** 1.7;
              (e.path.getPoint(a, t.position),
                e.path.getPoint(Math.min(1, a + 0.02), c),
                i > 0.97 && c.set(t.position.x + Math.sin(e.yaw), t.position.y, t.position.z + Math.cos(e.yaw)),
                t.lookAt(c));
              let o = Math.sin(r * (16 - i * 7) + n.phase) * (0.9 - i * 0.3);
              (n.wl.rotation.set(0, 0, o), n.wr.rotation.set(0, 0, -o));
            } else {
              let i = r - (e.when - n.delay);
              (t.position.copy(e.land),
                t.rotation.set(Math.max(0, Math.sin(i * 3.1 + n.phase)) ** 6 * 0.55, e.yaw, 0),
                n.wl.rotation.set(0, 1.45, -0.12),
                n.wr.rotation.set(0, -1.45, 0.12),
                n.wl.scale.set(0.62, 1, 0.8),
                n.wr.scale.set(-0.62, 1, 0.8));
            }
            continue;
          }
          let i = e.x + Math.sin(n.a + Math.PI / 2) * n.out * r * 1.2 + Math.sin(r * 2 + n.phase) * 0.12,
            a = e.y + 0.8 + n.rise * r + r * r * 0.25,
            o = e.z + 0.3 * r + Math.cos(n.a) * 0.4 * r;
          (t.position.set(i, a, o), t.lookAt(i + Math.sin(n.a + Math.PI / 2) * 0.5, a + 0.4, o + 0.3));
          let s = Math.sin(r * 16 + n.phase) * 0.9;
          ((n.wl.rotation.z = s), (n.wr.rotation.z = -s), (t.visible = a < e.y + 6));
        }
      }
    },
  };
}
function Jn({ at: e, root: t, puffs: n }) {
  let i = new z(),
    a = new L({ color: `#c9a25a`, metalness: 0.7, roughness: 0.35 }),
    o = new L({ color: `#8d949a`, metalness: 0.75, roughness: 0.3 }),
    s = new A(new j(0.24, 0.26, 0.82, 28), o);
  s.position.y = 0.41;
  let c = new A(new ee(0.24, 0.42, 28), a);
  ((c.position.y = 1.03), i.add(s, c));
  for (let e of [0.08, 0.42, 0.78]) {
    let t = new A(new u(0.255, 0.018, 8, 28), a);
    ((t.rotation.x = Math.PI / 2), (t.position.y = e), i.add(t));
  }
  let l = new A(new r(0.08, 20), new L({ color: `#f6d98a`, emissive: `#ffcf6a`, emissiveIntensity: 0.6 }));
  (l.position.set(0, 0.55, 0.262), i.add(l));
  for (let e = 0; e < 4; e += 1) {
    let t = new A(new _(0.02, 0.26, 0.16), a),
      n = (e / 4) * Math.PI * 2 + Math.PI / 4;
    (t.position.set(Math.cos(n) * 0.27, 0.12, Math.sin(n) * 0.27), (t.rotation.y = -n), i.add(t));
  }
  (i.traverse((e) => {
    e.isMesh && (e.castShadow = !0);
  }),
    (i.visible = !1),
    i.position.copy(e),
    t.add(i));
  let d = new re({ color: `#ffd98a`, transparent: !0, blending: 2, depthWrite: !1 }),
    f = new ie(0.02, 6, 4),
    p = [],
    m = { t: 2.25, y: 3 },
    h = new A(new r(0.5, 24), new re({ color: `#fff1c4`, transparent: !0, opacity: 0, blending: 2, depthWrite: !1 }));
  (h.position.set(e.x, e.y + m.y, e.z + 0.2), t.add(h));
  let g = new M(Vn(0.065)),
    v = In(),
    y = [];
  for (let e = 0; e < 34; e += 1) {
    let n = new A(g, v),
      r = (e / 34) * Math.PI * 2 + Math.random() * 0.3,
      i = 1.3 + Math.random() * 1.2;
    ((n.userData = {
      v: new V(Math.cos(r) * i, Math.sin(r) * i * 0.8 + 0.4, (Math.random() - 0.5) * 0.6),
      spin: (Math.random() - 0.5) * 7,
      size: 0.7 + Math.random() * 0.6,
      phase: Math.random() * 6,
      down: !1,
    }),
      (n.visible = !1),
      t.add(n),
      y.push(n));
  }
  let b = -1,
    x = 0,
    S = !1;
  return {
    set() {
      ((i.visible = !0), i.position.copy(e));
    },
    start() {
      ((b = 0), (i.visible = !0));
    },
    update(r) {
      if (b < 0) return;
      b += r;
      let a = Math.max(0, b - 0.7);
      if (
        (i.position.set(e.x + (b < 0.7 ? Math.sin(b * 90) * 0.012 : 0), e.y + 2.2 * a * a, e.z),
        (i.rotation.z = a * 0.05),
        b < 3.2)
      ) {
        for (let e = 0; e < 3; e += 1) {
          let e = new A(f, d);
          (e.position.set(
            i.position.x + (Math.random() - 0.5) * 0.2,
            i.position.y + 0.02,
            i.position.z + (Math.random() - 0.5) * 0.2,
          ),
            (e.userData.v = new V(
              (Math.random() - 0.5) * 1.6,
              -0.4 - Math.random() * 1.2,
              (Math.random() - 0.5) * 1.6,
            )),
            (e.userData.life = 0.5 + Math.random() * 0.4),
            t.add(e),
            p.push(e));
        }
        ((x -= r),
          x <= 0 &&
            n &&
            i.position.y < e.y + m.y + 1 &&
            ((x = 0.16),
            n.puff(new V(i.position.x, i.position.y - 0.1, i.position.z), {
              count: 3,
              size: 0.5,
              spread: 0.15,
              life: 3.2,
            })));
      }
      for (let e = p.length - 1; e >= 0; --e) {
        let n = p[e];
        if (((n.userData.life -= r), n.userData.life <= 0)) {
          (t.remove(n), p.splice(e, 1));
          continue;
        }
        ((n.userData.v.y -= 3 * r), n.position.addScaledVector(n.userData.v, r));
      }
      if ((i.position.y > e.y + 9 && (i.visible = !1), !S && b >= m.t)) {
        S = !0;
        for (let e of y) ((e.visible = !0), e.position.copy(h.position));
      }
      let o = b - m.t;
      if (
        ((h.material.opacity = o > 0 ? Math.max(0, 1 - o / 0.35) * 0.9 : 0),
        h.scale.setScalar(o > 0 ? 0.6 + Math.min(1, o / 0.35) * 1.6 : 1),
        S)
      )
        for (let t of y) {
          let n = t.userData;
          n.down ||
            ((n.v.y -= 1.1 * r),
            n.v.multiplyScalar(1 - Math.min(1, r * 2.4)),
            t.position.addScaledVector(n.v, r),
            (t.rotation.z += n.spin * r),
            (t.rotation.y = Math.sin(b * 3 + n.phase) * 0.9),
            t.scale.setScalar(n.size * (1 + Math.sin(b * 9 + n.phase) * 0.2)),
            t.position.y <= e.y + 0.02 &&
              ((n.down = !0),
              (t.position.y = e.y + 0.02),
              t.rotation.set(-Math.PI / 2, 0, n.spin),
              t.scale.setScalar(n.size)));
        }
    },
  };
}
function Yn({ at: e, root: t }) {
  let n = [],
    i = Hn({ fill: `#f3d070`, rim: `#b8862a`, size: 128 }),
    a = new v(Vn(0.2, 0.48), { depth: 0.03, bevelEnabled: !1 }),
    o = new r(0.085, 20);
  for (let r = 0; r < 5; r += 1) {
    let s = new z();
    s.add(new A(a, In()));
    let c = new A(o, new L({ map: i, roughness: 0.7 }));
    ((c.position.z = 0.035), s.add(c), s.add(zn(0, 0.18, 6)));
    let l = e.x + (r - 2) * 0.42,
      u = e.y + 1 + ((r * 37) % 5) * 0.28;
    ((s.userData = { x: l, y: u, phase: r * 1.7 }),
      s.position.set(l, u + 4, e.z - 0.1),
      (s.visible = !1),
      t.add(s),
      n.push(s));
  }
  let s = [],
    c = new M(Vn(0.05));
  for (let n = 0; n < 46; n += 1) {
    let n = new A(c, In());
    ((n.userData = {
      x: e.x + (Math.random() - 0.5) * 3.2,
      y0: e.y + 2.6 + Math.random() * 1.6,
      v: 0.7 + Math.random() * 0.9,
      spin: (Math.random() - 0.5) * 8,
      delay: Math.random() * 1.6,
      z: e.z + (Math.random() - 0.3) * 1.2,
    }),
      (n.visible = !1),
      t.add(n),
      s.push(n));
  }
  let l = -1,
    u = 0;
  return {
    set(e) {
      ((u += e),
        n.forEach((e, t) => {
          e.visible = !0;
          let n = Bn((u - t * 0.12) / 0.9);
          e.position.y = e.userData.y + (1 - n) * 4;
        }));
    },
    start() {
      ((l = 0),
        n.forEach((e) => {
          ((e.visible = !0), (e.position.y = e.userData.y));
        }));
    },
    update(t) {
      if (!(l < 0)) {
        ((l += t),
          n.forEach((e) => {
            ((e.rotation.z = Math.sin(l * 2 + e.userData.phase) * 0.25),
              e.scale.setScalar(1 + Math.sin(l * 6 + e.userData.phase) * 0.06));
          }));
        for (let n of s) {
          let r = n.userData,
            i = l - r.delay;
          if (i < 0) continue;
          n.visible = !0;
          let a = r.y0 - i * r.v;
          (n.position.set(r.x + Math.sin(i * 2 + r.spin) * 0.08, Math.max(e.y + 0.03, a), r.z),
            (n.rotation.z += r.spin * t),
            a < e.y + 0.03 && (n.rotation.x = -Math.PI / 2));
        }
      }
    },
  };
}
function Xn({ at: e, root: t }) {
  let n = new z();
  n.position.copy(e);
  let i = new A(new j(0.2, 0.15, 0.32, 20), new L({ color: `#b8643f`, roughness: 0.8 }));
  ((i.position.y = 0.16), n.add(i));
  let a = Fn(`#5f8a4f`),
    o = [`#f2a7b5`, `#f6d36b`, `#a9cdea`, `#f3f0e6`, `#e88f7a`, `#c9a7e4`, `#f6d36b`],
    s = [],
    c = new r(0.1, 14);
  (c.scale(0.55, 1, 1), c.translate(0, 0.1, 0));
  for (let e = 0; e < 7; e += 1) {
    let t = (e / 7) * Math.PI * 2,
      r = 0.12 + (e % 3) * 0.1,
      i = 0.55 + (e % 4) * 0.18,
      l = new z();
    ((l.position.y = 0.3), l.rotation.set(Math.sin(t) * r, 0, Math.cos(t) * r));
    let u = new A(new j(0.012, 0.016, i, 6), a);
    ((u.position.y = i / 2), l.add(u));
    let d = new z();
    ((d.position.y = i), l.add(d));
    let f = Fn(o[e]),
      p = [];
    for (let e = 0; e < 6; e += 1) {
      let t = new A(c, f);
      t.rotation.y = (e / 6) * Math.PI * 2;
      let n = new z();
      ((n.rotation.y = (e / 6) * Math.PI * 2), n.add(t), t.rotation.set(0.15, 0, 0), d.add(n), p.push(t));
    }
    let m = new A(new ie(0.035, 10, 8), Fn(`#e2b33f`));
    (d.add(m), l.scale.setScalar(0.45), (l.userData = { petals: p, delay: e * 0.12 }), n.add(l), s.push(l));
  }
  ((n.visible = !1), t.add(n));
  let l = -1,
    u = (e, t) => {
      for (let n of e.userData.petals) n.rotation.x = 0.15 + (1 - t) * 1.25;
    };
  return (
    s.forEach((e) => u(e, 0)),
    {
      set() {
        n.visible = !0;
      },
      start() {
        ((l = 0), (n.visible = !0));
      },
      update(e) {
        if (!(l < 0)) {
          l += e;
          for (let e of s) {
            let t = Bn((l - e.userData.delay) / 0.9);
            (e.scale.setScalar(0.45 + t * 0.55),
              u(e, t),
              (e.rotation.y = Math.sin(l * 1.2 + e.userData.delay * 9) * 0.05));
          }
        }
      },
    }
  );
}
function Zn({ at: e, root: t, lights: n = [] }) {
  let i = new z(),
    a = new A(
      new r(0.62, 40),
      new L({
        map: Hn({ fill: `#f6c94e`, rim: `#d08a1e` }),
        emissive: `#ffb43a`,
        emissiveIntensity: 0.35,
        roughness: 0.6,
        side: 2,
      }),
    );
  i.add(a);
  let o = new z(),
    s = new M(new B([new R(-0.09, 0.66), new R(0, 1.08), new R(0.09, 0.66)])),
    c = new L({ color: `#f3b53a`, emissive: `#d9851a`, emissiveIntensity: 0.4, roughness: 0.6, side: 2 });
  for (let e = 0; e < 16; e += 1) {
    let t = new A(s, c);
    ((t.rotation.z = (e / 16) * Math.PI * 2), (t.position.z = -0.01), o.add(t));
  }
  (i.add(o), i.add(zn(-0.3, 0.5, 7, -0.02), zn(0.3, 0.5, 7, -0.02)));
  let l = e.y - 1.3,
    u = { right: 0.55, up: 2.55 };
  (i.scale.setScalar(0.85), i.position.set(e.x + u.right, l, e.z - 0.55), (i.visible = !1), t.add(i));
  let d = n.map((e) => e.intensity),
    f = -1;
  return {
    set() {},
    start() {
      ((f = 0), (i.visible = !0));
    },
    update(e) {
      if (f < 0) return;
      f += e;
      let t = Bn(f / 3.2);
      ((i.position.y = l + t * u.up),
        (o.rotation.z = -f * 0.5),
        (i.rotation.z = Math.sin(f * 1.1) * 0.04),
        n.forEach((e, n) => {
          e.intensity = d[n] * (1 + t * 0.4);
        }));
    },
  };
}
function Qn({ at: e, root: t }) {
  let n = Fn(`#e7e1d5`),
    r = Fn(`#e19aa0`),
    i = new z(),
    a = (e, t, [n, r, a], [o, s, c] = [1, 1, 1]) => {
      let l = new A(e, t);
      return (l.position.set(n, r, a), l.scale.set(o, s, c), (l.castShadow = !0), i.add(l), l);
    },
    o = new ie(1, 24, 18);
  (a(o, n, [0, 0.25, -0.03], [0.2, 0.24, 0.21]), a(o, n, [0, 0.13, -0.02], [0.24, 0.13, 0.24]));
  for (let e of [1, -1])
    (a(o, n, [e * 0.15, 0.12, -0.05], [0.1, 0.12, 0.15]),
      a(o, n, [e * 0.15, 0.025, 0.07], [0.055, 0.03, 0.12]),
      a(o, n, [e * 0.065, 0.07, 0.15], [0.045, 0.06, 0.05]));
  (a(o, n, [0, 0.11, -0.25], [0.065, 0.065, 0.065]), a(o, n, [0, 0.53, 0.07], [0.135, 0.125, 0.14]));
  for (let e of [1, -1]) a(o, n, [e * 0.055, 0.48000000000000004, 0.15], [0.065, 0.055, 0.06]);
  let s = a(o, r, [0, 0.505, 0.215], [0.02, 0.016, 0.014]),
    c = new re({ color: `#ffffff` });
  for (let e of [1, -1])
    (a(o, Ln, [e * 0.072, 0.555, 0.165], [0.024, 0.026, 0.02]),
      a(o, c, [e * 0.078, 0.5650000000000001, 0.183], [0.007, 0.007, 0.004]));
  let l = [];
  for (let e of [1, -1])
    for (let [t, n] of [
      [0.012, 0.01],
      [-0.005, 0.02],
      [-0.022, 0.012],
    ]) {
      let r = 0.5;
      l.push(e * 0.03, r, 0.215, e * 0.17, r + t * 3, 0.17 + n);
    }
  let u = new F();
  (u.setAttribute(`position`, new p(l, 3)), i.add(new f(u, new h({ color: `#6b5d52` }))));
  let d = (e) => {
      let t = new z(),
        a = new A(new x(0.048, 0.3, 4, 12), n),
        o = new A(new x(0.026, 0.24, 4, 10), r);
      return (
        (a.scale.z = 0.5),
        (o.scale.z = 0.4),
        (a.position.y = o.position.y = 0.2),
        (o.position.z = 0.016),
        (a.castShadow = !0),
        t.add(a, o),
        t.position.set(e * 0.055, 0.62, 0.04),
        (t.rotation.x = -0.28),
        i.add(t),
        t
      );
    },
    m = d(1),
    g = d(-1);
  (i.position.copy(e), (i.visible = !1), t.add(i));
  let _ = -1;
  return {
    set() {},
    start() {
      ((_ = 0), (i.visible = !0));
    },
    update(t) {
      if (_ < 0) return;
      _ += t;
      let n = _ < 0.35 ? 0.55 + (0.45 * Math.sin((_ / 0.35) * Math.PI * 0.65)) / Math.sin(Math.PI * 0.65) : 1,
        r = _ > 0.5 && _ < 2.3 ? Math.abs(Math.sin((_ - 0.5) * Math.PI * 1.7)) * 0.16 : 0;
      (i.position.set(e.x, e.y + r, e.z), i.scale.setScalar(1.45 * n), (i.rotation.y = Math.sin(_ * 1.3) * 0.25));
      let a = Math.sin(_ * 11) * 0.08;
      ((m.rotation.z = -0.18 + a), (g.rotation.z = 0.18 - a));
      let o = 1 + Math.max(0, Math.sin(_ * 14)) * 0.3;
      s.scale.set(0.02 * o, 0.016 * o, 0.014);
    },
  };
}
function $n({ at: e, root: t, flat: n }) {
  let r = n || new z();
  ((r.visible = !1), r.position.set(e.x, e.y + 3.5, e.z), t.add(r));
  let i = -1,
    a = 0;
  return {
    set(t) {
      ((r.visible = !0), (a = Math.min(1, a + t / 1.1)), r.position.set(e.x, e.y + (1 - Bn(a)) * 3.5, e.z));
    },
    start() {
      ((i = 0), (r.visible = !0), r.position.set(e.x, e.y, e.z));
    },
    update(t) {
      if (i < 0) return;
      i += t;
      let n = Bn(i / 1.1);
      ((r.rotation.y = n * Math.PI * 2), (r.position.y = e.y + (i < 1.1 ? Math.sin((i / 1.1) * Math.PI) * 0.22 : 0)));
    },
  };
}
var er = { moon: Gn, doves: qn, rocket: Jn, stars: Yn, flowers: Xn, sun: Zn, rabbit: Qn, prop: $n };
function tr(e, { at: t, scene: n, puffs: r = null, lights: i = [], flat: a = null }) {
  let o = new z();
  ((o.name = `magic-${e}`), n.add(o));
  let s = (er[e] || Gn)({ at: t, root: o, puffs: r, lights: i, flat: a });
  return {
    kind: er[e] ? e : `moon`,
    root: o,
    set: s.set,
    start: s.start,
    update: s.update,
    dispose() {
      n.remove(o);
    },
  };
}
var nr = Object.freeze({ x: -0.42, z: -7.5 }),
  rr = Object.freeze({ x: 0.62, z: -7.72 }),
  ir = { from: new V(...Pt.from), at: new V(...Pt.at), fov: Pt.fov },
  ar = { from: new V(3.3, 2.35, -3.4), at: new V(0, 1.5, -7.7) },
  or = {
    drop: { at: [rr.x - 0.1, 0.8, rr.z], w: 1.9, h: 2.5, dir: [0.45, 0.22, 1] },
    pair: { at: [(nr.x + rr.x) / 2, 0.9, (nr.z + rr.z) / 2], w: 2.4, h: 2, dir: [0.25, 0.2, 1] },
    marvel: { at: [(nr.x + rr.x) / 2 + 0.15, 1.15, (nr.z + rr.z) / 2], w: 2.6, h: 2.5, dir: [0.4, 0.16, 1] },
    sun: { at: [(nr.x + rr.x) / 2 + 0.5, 1.15, (nr.z + rr.z) / 2], w: 3, h: 2.5, dir: [0.4, 0.16, 1] },
  },
  sr = (e) => (e === `sun` ? or.sun : or.marvel),
  cr = {
    moon: [0.35, 1.45],
    stars: [0, 1.5],
    doves: [0, 1.4],
    rocket: [0, 2.5],
    flowers: [0, 0.6],
    sun: [0.55, 1.25],
    rabbit: [0, 0.6],
    prop: [0, 0.6],
  },
  lr = 8,
  ur = { count: 8, cut: 26 },
  dr = { count: 24, cut: 60 },
  fr = 1.5,
  pr = {
    moon: `<path d="M38 8a26 26 0 1 0 22 36A21 21 0 0 1 38 8z" fill="currentColor"/>`,
    doves: `<path d="M8 38c10-2 16-8 20-18 2 8 6 12 14 12 6 0 10-4 14-8-2 10-10 18-22 20l-4 8-4-7C18 45 12 42 8 38z" fill="currentColor"/>`,
    rocket: `<path d="M32 4c8 6 12 16 12 28v14H20V32C20 20 24 10 32 4z" fill="currentColor"/><path d="M20 40l-8 12h10zM44 40l8 12H42z" fill="currentColor"/><circle cx="32" cy="26" r="5" fill="#2b2420"/>`,
    stars: `<path d="M32 4l7 18h19L43 34l6 19-17-11-17 11 6-19L6 22h19z" fill="currentColor"/>`,
    flowers: `<g fill="currentColor"><circle cx="32" cy="16" r="9"/><circle cx="46" cy="27" r="9"/><circle cx="41" cy="43" r="9"/><circle cx="23" cy="43" r="9"/><circle cx="18" cy="27" r="9"/></g><circle cx="32" cy="31" r="7" fill="#2b2420"/>`,
    sun: `<circle cx="32" cy="32" r="13" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round">${[
      0, 1, 2, 3, 4, 5, 6, 7,
    ]
      .map((e) => {
        let t = (e / 8) * Math.PI * 2;
        return `<line x1="${(32 + Math.cos(t) * 20).toFixed(1)}" y1="${(32 + Math.sin(t) * 20).toFixed(1)}" x2="${(32 + Math.cos(t) * 28).toFixed(1)}" y2="${(32 + Math.sin(t) * 28).toFixed(1)}"/>`;
      })
      .join(``)}</g>`,
    prop: `<path d="M23 4v15M41 4v15" stroke="currentColor" stroke-width="3"/><rect x="12" y="19" width="40" height="32" rx="4" fill="currentColor"/><path d="M20 30h24M20 39h15" stroke="#f6efe2" stroke-width="4" stroke-linecap="round"/><path d="M18 51l-5 9M46 51l5 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>`,
  },
  mr = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10H10l-4.5 3.5v-3.5H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 9.5h8M8 12.5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  hr = (e) => `<svg viewBox="0 0 64 64" aria-hidden="true">${pr[e] || pr.stars}</svg>`;
function gr({
  stage: e,
  studio: t,
  cam: n,
  player: r,
  voice: i,
  who: a,
  lang: o,
  puffs: s,
  direct: c,
  getMelies: l,
  route: u,
  ui: d,
  crank: f,
}) {
  let p = o === `en`,
    m = ln[p ? `en` : `zh`],
    h = fn[p ? `en` : `zh`],
    g = Mn(d, h, { kind: `say` }),
    _ = Pn({ stage: e, cam: n, ui: d }),
    v = () => {},
    y = () => {},
    b = () => {},
    x = () => f.on({ frame: () => v(), down: () => y(), up: () => b() }),
    S = document.createElement(`div`);
  ((S.className = `mf-choose`), d.appendChild(S));
  let C = (e) => new Promise((t) => setTimeout(t, e)),
    w = (e) => i.say(a, e),
    E = new V(rr.x, Y.stageH, rr.z),
    D = new Set(),
    O = !1,
    k = null,
    ee = (e) =>
      new Promise((t) => {
        let n = !1;
        (r.walkPath(u(r.position, e), () => {
          n || ((n = !0), t());
        }),
          setTimeout(() => {
            n || ((n = !0), r.stop(), r.place(e.x, e.z, 0), t());
          }, 9e3));
      }),
    A = (e, t, n) => {
      let r = l();
      (s.puff(r.object.position, { count: 12, size: 0.6 }),
        De.poof(),
        r.object.position.set(e, t < Y.stageZ ? Y.stageH : 0, t),
        (r.object.rotation.y = n),
        s.puff(r.object.position, { count: 12, size: 0.6 }));
    },
    te = () => A(Z.camera.x + 0.05, Z.camera.z + 0.75, Math.PI),
    j = () => A(E.x + 0.85, E.z + 0.25, -Math.PI / 2),
    M = () => l().object.position.z < Y.stageZ,
    N = (e) => {
      let t = r.avatar.mixer;
      t && (t.timeScale = +!e);
    };
  function P(r, { cut: i = !0, clear: a = 0 } = {}) {
    let o = e.camera,
      s = 0.86,
      c = H.degToRad(o.fov) / 2,
      l = Math.atan(Math.tan(c) * o.aspect),
      u = Math.max(r.w / s / 2 / Math.tan(l), r.h / (s * (1 - a)) / 2 / Math.tan(c)),
      d = new V(r.at[0], Y.stageH + r.at[1], r.at[2]),
      f = d.clone().addScaledVector(new V(...r.dir).normalize(), u),
      p = t.cameraBox;
    (f.set(
      H.clamp(f.x, p.minX + 0.35, p.maxX - 0.35),
      H.clamp(f.y, 0.6, p.maxY - 0.3),
      H.clamp(f.z, p.minZ + 0.35, p.maxZ - 0.35),
    ),
      (d.y -= (a / 2) * 2 * f.distanceTo(d) * Math.tan(c)),
      n.frame(f, d, { cut: i, fit: !1 }));
  }
  let F = (e = !1) =>
      Math.min(0.48, (Math.min(window.innerWidth * 0.29, 136) * 1.25 + 74 + (e ? 58 : 0)) / window.innerHeight),
    I = new ne(ir.fov, 4 / 3, 0.1, 60);
  (I.position.copy(ir.from), I.lookAt(ir.at), I.updateMatrixWorld());
  let L = (e) => {
    let [t, n] = cr[e] || cr.moon,
      r = new V(E.x + t, E.y + n, E.z).project(I);
    return { x: (r.x + 1) / 2, y: (1 - r.y) / 2 };
  };
  function R(e, t, { onPause: n = () => {}, onUp: r = () => {} } = {}) {
    return (
      x(),
      new Promise((i) => {
        let a = 0,
          o = 0,
          s = !1,
          c = !1,
          l = (e) => {
            s || ((s = !0), clearTimeout(o), (v = () => {}), (y = () => {}), (b = () => {}), i({ frames: a, why: e }));
          },
          u = () => {
            (clearTimeout(o),
              (o = setTimeout(
                () => {
                  s || (n(a, c), (c = !0), f.nudge(), u());
                },
                a ? 1600 : 3200,
              )));
          };
        ((v = () => {
          if (s) return;
          ((a += 1), _.frame(e), u());
          let n = t(a);
          n && l(n);
        }),
          (y = () => {
            u();
          }),
          (b = () => {
            _.idle();
            let e = r(a);
            e && l(e);
          }),
          u());
      })
    );
  }
  async function re(e, t, { label: n, line: o, onLate: s = () => {} }) {
    let c = t + 24;
    (_.open(ir), f.show(n), w([o]));
    let l = -1,
      u = 0,
      d = !1,
      p = !1,
      h = 0,
      g = await R(
        e,
        (e) => {
          if ((!p && e >= 3 && ((p = !0), r.avatar.play?.(`wave`)), e >= t && e < c)) {
            let n = 3 - Math.floor((e - t) / lr);
            n !== l && ((l = n), _.call(String(n), { tone: `count` }), wn.click(!0));
          }
          if (
            (e === c &&
              ((u = performance.now()),
              _.call(m.stop, { tone: `stop` }),
              _.flash(),
              f.flare(),
              N(!0),
              navigator.vibrate?.(30),
              i.say(a, [m.stop])),
            u)
          ) {
            let e = (performance.now() - u) / 1e3;
            if ((!d && e > fr && ((d = !0), s()), e > 2.3)) return `late`;
          }
          return null;
        },
        {
          onPause: (e, t) => {
            u ? t || i.stop() : w([e ? m.hold : m.nudge]);
          },
          onUp: (e) => (u && (h = performance.now()), u ? (d ? `late` : `perfect`) : e >= t ? `early` : null),
        },
      );
    (wn.clack(), N(!0), _.idle());
    let v = u && g.why !== `early` ? ((h || performance.now()) - u) / 1e3 : 0;
    return { why: g.why, by: Math.round(v * 10) / 10 };
  }
  async function ie(n, r, i = null) {
    (M() || (j(), await C(350)), l().play?.(`wave`));
    let a = tr(r, { at: E, scene: e.scene, puffs: s, lights: t.stageLights || [], flat: i });
    (D.add(a),
      ue.to(n.position, {
        y: Y.stageH + 5,
        duration: 1,
        ease: `power2.in`,
        onComplete: () => {
          n.visible = !1;
        },
      }),
      wn.click(!0));
    let o = performance.now();
    return (
      await new Promise((e) => {
        let t = o,
          n = (r) => {
            let i = (r - t) / 1e3;
            ((t = r), a.set(i), r - o < 1300 ? requestAnimationFrame(n) : e());
          };
        requestAnimationFrame(n);
      }),
      te(),
      await C(450),
      a
    );
  }
  async function ae(e, t, n, o) {
    (_.open(ir), f.show(o), w([m.again]));
    let c = !0,
      l = 0;
    (await R(
      e,
      (e) => (
        c &&
          ((c = !1),
          s.puff(new V(E.x, Y.stageH + 0.2, E.z), { count: 30, size: 1.2, spread: 0.55, life: 1.8 }),
          t.start(),
          N(!1),
          r.avatar.play?.(`laugh`)),
        e === 10 && s.stars(new V(E.x, Y.stageH, E.z), { count: 30 }),
        e === n && ((l = performance.now()), _.call(m.cut, { tone: `stop` }), i.say(a, [m.cut]), f.flare()),
        l && performance.now() - l > 1600 ? `cut` : null
      ),
      {
        onPause: (e) => {
          l || w([e ? m.hold : m.nudge]);
        },
        onUp: () => (l ? `cut` : null),
      },
    ),
      wn.clack(),
      _.idle(),
      await C(450),
      f.hide(),
      _.close(),
      _.call(``));
  }
  async function oe(t, n) {
    ((t.visible = !0), t.position.set(E.x, Y.stageH + 4.2, E.z), e.scene.add(t), P(or.drop, { cut: !1 }));
    let r = ue.to(t.position, {
      y: Y.stageH,
      duration: 2,
      ease: `bounce.out`,
      delay: 0.6,
      onStart: () => wn.click(!0),
    });
    (n && (await w([n])), await r);
  }
  async function z(e) {
    (w([e]), n.release(), await ee(new V(nr.x, 0, nr.z)), (r.heading = 0), te(), await C(500));
  }
  function B(e, { make: t = null } = {}) {
    return new Promise((n) => {
      ((S.innerHTML = `<div class="mf-choose-q"></div><div class="mf-choose-row">${e
        .map(
          (e, t) => `
        <button type="button" class="mf-choose-card" data-i="${t}" style="--d:${t * 90}ms">${hr(e.into)}<span></span></button>`,
        )
        .join(
          ``,
        )}</div>${t ? `<button type="button" class="mf-say" style="--d:${e.length * 90 + 80}ms"><i>${mr}</i><span></span><b class="mf-say-dots"><u></u><u></u><u></u></b></button>` : ``}`),
        (S.querySelector(`.mf-choose-q`).textContent = m.choose),
        S.querySelectorAll(`.mf-choose-card span`).forEach((t, n) => {
          t.textContent = e[n].name;
        }));
      let r = S.querySelector(`.mf-say`),
        o = (e) => {
          r && (r.querySelector(`span`).textContent = e);
        };
      (o(h.pill), document.body.classList.add(`mf-choosing`), requestAnimationFrame(() => S.classList.add(`show`)));
      let s = !1,
        c = null,
        u = 0,
        d = (e) => {
          (window.removeEventListener(`keydown`, _, !0),
            setTimeout(() => {
              (S.classList.remove(`show`, `busy`),
                document.body.classList.remove(`mf-choosing`),
                delete S.dataset.picked,
                n(e));
            }, 520));
        },
        f = (t) => {
          let n = S.querySelector(`[data-i="${t}"]`);
          !n ||
            S.dataset.picked ||
            s ||
            ((S.dataset.picked = `1`),
            wn.bell(1 + t * 0.12),
            navigator.vibrate?.(14),
            n.classList.add(`picked`),
            d(e[t]));
        },
        p = () => {
          ((S.dataset.picked = `1`), r.classList.add(`picked`), wn.bell(1.42), navigator.vibrate?.(14));
        },
        _ = (t) => {
          let n = Number(t.key) - 1;
          n >= 0 && n < e.length && (t.preventDefault(), t.stopPropagation(), f(n));
        };
      (window.addEventListener(`keydown`, _, !0),
        S.querySelectorAll(`.mf-choose-card`).forEach((e) =>
          e.addEventListener(`click`, (t) => {
            (t.preventDefault(), t.stopPropagation(), f(Number(e.dataset.i)));
          }),
        ),
        r?.addEventListener(`click`, async (n) => {
          if ((n.preventDefault(), n.stopPropagation(), s || S.dataset.picked)) return;
          if (c) {
            (p(), d(c));
            return;
          }
          ((s = !0), i.stop(), S.classList.remove(`show`));
          let f = await g.ask([]);
          if (!f) {
            ((s = !1), S.classList.add(`show`));
            return;
          }
          (S.classList.add(`show`, `busy`),
            r.classList.add(`thinking`),
            o(h.thinking),
            i.reply(a).think(h.hm),
            l().play?.(`look-around`),
            (u += 1));
          let m = await t(f).catch(() => null);
          if ((r.classList.remove(`thinking`), S.classList.remove(`busy`), (s = !1), m?.care)) {
            (o(h.pill), r.remove(), i.say(a, [m.line]));
            return;
          }
          if (!m?.option) {
            (o(h.pill), u >= 2 && r.remove(), i.say(a, [h.lost]));
            return;
          }
          let _ = { ...m.option, said: f, fit: m.fit, title: m.title, key: m.key };
          l().play?.(`laugh`);
          let v = m.fit === `instead` && _.into !== `prop` ? e.findIndex((e) => e.into === _.into) : -1;
          if (v >= 0) {
            e[v] = _;
            let t = S.querySelector(`[data-i="${v}"]`);
            ((t.querySelector(`span`).textContent = _.name),
              t.classList.add(`offered`),
              r.remove(),
              i.say(a, [m.line]));
            return;
          }
          ((r.querySelector(`i`).innerHTML = hr(_.into)), r.classList.add(`offered`), o(_.name));
          let y = i.say(a, [m.line]);
          if (m.fit === `instead`) {
            c = _;
            return;
          }
          (p(_), await y, d(_));
        }));
    });
  }
  let se = () => {
    let e = window.innerWidth,
      t = window.innerHeight,
      n = e / t >= 4 / 3 ? t : e * 0.75;
    return H.radToDeg(2 * Math.atan(Math.tan(H.degToRad(ir.fov / 2)) * (t / n)));
  };
  return {
    lens: _,
    get running() {
      return O;
    },
    async peek({ side: t, onSide: r = async () => {}, onFrame: i = async () => {} }) {
      if (!O) {
        O = !0;
        try {
          let a = e.camera;
          (n.frame(t.from, t.at, { fit: !1 }), await r());
          let o = a.position.clone(),
            s = o.clone().add(a.getWorldDirection(new V()).multiplyScalar(t.from.distanceTo(t.at))),
            c = a.fov,
            l = se(),
            u = new T(
              o,
              o
                .clone()
                .lerp(ir.from, 0.55)
                .add(new V(0, 0.2, -0.25)),
              ir.from.clone(),
            ),
            d = new V(),
            f = new V(),
            p = { v: 0 };
          (await new Promise((e) =>
            ue.to(p, {
              v: 1,
              duration: 2.8,
              ease: `power2.inOut`,
              onComplete: e,
              onUpdate: () => {
                (u.getPoint(p.v, d),
                  f.copy(s).lerp(ir.at, Math.min(1, p.v * 1.15)),
                  n.frame(d, f, { cut: !0, fit: !1 }),
                  (a.fov = c + (l - c) * p.v),
                  a.updateProjectionMatrix());
              },
            }),
          ),
            _.open(ir),
            wn.clack());
          let m = 0,
            h = setInterval(() => {
              (_.frame(-1, null, { skip: !0 }), ++m % 4 == 0 && wn.click(!0));
            }, 62);
          (await C(450),
            await Promise.all([i(), C(2600)]),
            clearInterval(h),
            _.idle(),
            await C(350),
            _.close(),
            _.clearFrames());
        } finally {
          O = !1;
        }
      }
    },
    update(e) {
      for (let t of D) t.update(e);
    },
    get magic() {
      return k;
    },
    look() {
      return (
        _.open(ir),
        () => {
          (_.close(), n.release());
        }
      );
    },
    preview(i, { through: a = !1 } = {}) {
      r.place(nr.x, nr.z, 0);
      let o = tr(i, { at: E, scene: e.scene, puffs: s, lights: t.stageLights || [] });
      (o.set(1.2), o.start());
      for (let e = 0; e < 80; e += 1) o.update(0.05);
      return (
        D.add(o),
        a ? _.open(ir) : P(i === `rabbit` ? or.pair : sr(i)),
        () => {
          (D.delete(o), o.dispose(), a && _.close(), n.release());
        }
      );
    },
    async run({
      trick: e,
      hat: t,
      flat: r,
      invite: o,
      onChosen: u = () => {},
      options: d = () => e.options,
      make: x = null,
      practiced: T = null,
      propFor: ee = null,
    }) {
      if (O) return null;
      O = !0;
      let A = l(),
        te = A.object.position.clone(),
        M = A.object.rotation.y,
        I = dn[p ? `en` : `zh`],
        ne = null;
      (_.clearFrames(),
        i.prefetch([
          m.hatStage,
          m.crank,
          m.stop,
          m.again,
          m.cut,
          m.yours,
          m.perfect,
          m.early,
          m.late,
          m.lateAfter,
          h.hm,
        ]),
        c.begin());
      try {
        if (t) {
          (await oe(t, null),
            await z(m.hatStage),
            (ne = await re(0, ur.count, { label: pe(`转动摇柄`, `Turn the crank`), line: m.crank })));
          let e = T ? T(ne) : null;
          (await C(400),
            f.hide(),
            _.close(),
            _.call(``),
            n.frame(ar.from, ar.at, { cut: !0, fit: !0 }),
            w([m.hatSwap]));
          let r = await ie(t, bn.into);
          (await ae(0, r, ur.cut, pe(`再转起来`, `Turn it again`)), P(or.pair));
          let i = e
            ? await Promise.resolve()
                .then(e)
                .catch(() => null)
            : null;
          (await w([i || I[ne.why] || I.perfect]),
            s.puff(new V(E.x, Y.stageH + 0.3, E.z), { count: 18, size: 0.8 }),
            De.poof(),
            D.delete(r),
            r.dispose(),
            _.clearFrames());
        }
        let c = await r();
        (await oe(c, o), t || (await z(m.stage)), P(or.pair, { clear: F(!!x) }), w([m.yours]));
        let p = await B(d(), { make: x });
        i.stop();
        let h = p.into === `prop` && ee ? ee(p) : null,
          g = {
            from: e.from,
            fromEn: e.fromEn,
            into: p.into,
            intoName: p.name,
            own: !!e.own,
            hour: new Date().getHours(),
            ...(ne ? { practice: ne.why } : {}),
            ...(p.key ? { made: p.key } : {}),
            ...(p.into === `prop` ? { intoEn: p.thingEn || p.thing || p.name } : {}),
          };
        u(g, p);
        let { why: v } = await re(1, dr.count, {
          label: pe(`转动摇柄`, `Turn the crank`),
          line: m.crank,
          onLate: () => {
            (i.say(a, [m.late]), j(), l().play?.(`wave`));
          },
        });
        _.call(
          v === `perfect`
            ? m.perfect
            : v === `early`
              ? pe(`抢了一格`, `A frame early`)
              : pe(`我也上镜了`, `I'm in it too`),
          { tone: `grade ${v}` },
        );
        let y = _.frames.length;
        return (
          await C(700),
          f.hide(),
          _.close(),
          _.call(``),
          n.frame(ar.from, ar.at, { cut: !0, fit: !0 }),
          await w([v === `late` ? m.lateAfter : m[v]]),
          (k = await ie(c, p.into, h ? await h.catch(() => null) : null)),
          await ae(2, k, dr.cut, pe(`再转起来`, `Turn it again`)),
          P(sr(p.into)),
          await w([p.why]),
          { choices: g, option: p, frames: _.frames.slice(), cutAt: y, timing: v, glow: { ...L(p.into), into: p.into } }
        );
      } finally {
        (N(!1),
          f.hide(),
          _.close(),
          _.call(``),
          S.classList.remove(`show`),
          g.close(),
          document.body.classList.remove(`mf-choosing`),
          (v = () => {}),
          (y = () => {}),
          (b = () => {}));
        let e = l();
        (e.object.position.distanceTo(te) > 0.1 &&
          (s.puff(e.object.position, { count: 10, size: 0.6 }), e.object.position.copy(te), (e.object.rotation.y = M)),
          c.end({ lookAt: null }),
          (O = !1));
      }
    },
  };
}
var _r = { wish: 5500 },
  vr = (e) => _r[e] ?? 3e3,
  yr = (e) => new Promise((t) => setTimeout(t, e));
function br({ visit: e }) {
  let t = { screen: !1, wish: null, quick: !1, practice: null, chose: null, film: !1, medal: !1, talk: [] },
    n = new Map();
  return {
    happened: t,
    ask(r) {
      let i = e();
      if (!i?.id || !i.plan?.direct) return Promise.resolve(null);
      let a = { at: performance.now(), got: void 0 };
      return (
        (a.reply = Te.meliesDirect({ visit: i.id, beat: r, happened: { ...t, talk: t.talk.slice(-6) } }).then(
          (e) => (a.got = e && !e.error ? e : null),
        )),
        n.set(r, a),
        a.reply
      );
    },
    async now(e) {
      let t = n.get(e);
      if (!t) return null;
      if (t.got !== void 0) return t.got;
      let r = t.at + vr(e) - performance.now();
      return r > 0 ? Promise.race([t.reply, yr(r).then(() => null)]) : null;
    },
    pending: (e) => n.has(e) && n.get(e).got === void 0,
    got: (e) => n.get(e)?.got ?? null,
  };
}
function xr(e, t) {
  if (!t?.into) return e;
  let n = t.into === `prop` ? -1 : e.findIndex((e) => e.into === t.into);
  return n >= 0
    ? [e[n], ...e.filter((e, t) => t !== n)]
    : t.option
      ? [t.option, ...e.filter((e) => e.into !== t.option.into).slice(0, 2)]
      : e;
}
var Sr = (Math.PI * 2) / 8,
  Cr = 16;
function wr(e, { label: t = `` } = {}) {
  let n = { frame: () => {}, down: () => {}, up: () => {} },
    r = () => n.frame(),
    i = () => n.down(),
    a = () => n.up(),
    o = document.createElement(`div`);
  ((o.className = `mf-crank`),
    (o.innerHTML = `
    <div class="mf-crank-wheel" role="button" tabindex="0">
      <svg viewBox="-100 -100 200 200" aria-hidden="true">
        <defs>
          <radialGradient id="mf-brass" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#fbe7b0"/><stop offset="0.45" stop-color="#d4a650"/><stop offset="1" stop-color="#7a5523"/></radialGradient>
        </defs>
        <circle r="94" fill="rgba(20,16,12,0.55)"/>
        <circle r="84" fill="none" stroke="url(#mf-brass)" stroke-width="11"/>
        <g class="mf-crank-spokes" stroke="#b88a3e" stroke-width="5" stroke-linecap="round">
          ${[0, 1, 2, 3, 4, 5].map((e) => `<line x1="0" y1="0" x2="${(Math.cos((e * Math.PI) / 3) * 80).toFixed(1)}" y2="${(Math.sin((e * Math.PI) / 3) * 80).toFixed(1)}"/>`).join(``)}
        </g>
        <circle r="17" fill="url(#mf-brass)" stroke="#5c3f1b" stroke-width="2"/>
        <g class="mf-crank-arm">
          <rect x="-6" y="-78" width="12" height="80" rx="6" fill="url(#mf-brass)" stroke="#5c3f1b" stroke-width="1.5"/>
          <circle cy="-74" r="15" fill="#6b3f22" stroke="#2e1a0c" stroke-width="2"/>
          <circle cx="-4" cy="-78" r="4" fill="rgba(255,240,210,0.5)"/>
        </g>
      </svg>
      <i class="mf-crank-flash"></i>
      <svg class="mf-crank-hint" viewBox="-100 -100 200 200" aria-hidden="true"><path d="M 0 -116 A 116 116 0 1 1 -82 -82" fill="none" stroke="rgba(255,236,190,0.9)" stroke-width="7" stroke-linecap="round" stroke-dasharray="2 18"/><path d="M -98 -70 L -82 -82 L -70 -98" fill="none" stroke="rgba(255,236,190,0.95)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="mf-crank-label"></div>`),
    e.appendChild(o));
  let s = o.querySelector(`.mf-crank-wheel`),
    c = o.querySelector(`.mf-crank-arm`),
    l = o.querySelector(`.mf-crank-label`);
  l.textContent = t;
  let u = 0,
    d = 0,
    f = null,
    p = !1,
    m = 0,
    h = 0,
    g = !0,
    _ = [],
    v = null,
    y = () => {
      c.setAttribute(`transform`, `rotate(${((u * 180) / Math.PI).toFixed(1)})`);
    },
    b = () => {
      ((h += 1),
        _.push(performance.now()),
        wn.click(h % 8 == 0),
        o.classList.remove(`blink`),
        o.offsetWidth,
        o.classList.add(`blink`),
        r());
    },
    x = (e) => {
      for (u += e, d += Math.abs(e); d >= Sr;) ((d -= Sr), b());
      y();
    },
    S = (e) => {
      let t = s.getBoundingClientRect(),
        n = e.clientX - (t.left + t.width / 2),
        r = e.clientY - (t.top + t.height / 2);
      return { a: Math.atan2(r, n), near: Math.hypot(n, r) < t.width * 0.16 };
    };
  (s.addEventListener(`pointerdown`, (e) => {
    if (o.classList.contains(`show`)) {
      (e.preventDefault(), e.stopPropagation());
      try {
        s.setPointerCapture(e.pointerId);
      } catch {}
      ((p = !0),
        (f = S(e).a),
        (m = performance.now()),
        o.classList.add(`down`),
        o.classList.remove(`idle`),
        (v ||= wn.motor()),
        i());
    }
  }),
    s.addEventListener(`pointermove`, (e) => {
      if (!p) return;
      let { a: t, near: n } = S(e);
      if (n) {
        f = t;
        return;
      }
      let r = t - f;
      ((r = Math.atan2(Math.sin(r), Math.cos(r))), (f = t), Math.abs(r) > 0.004 && (x(r), (m = performance.now())));
    }));
  let C = (e) => {
    p && (e?.preventDefault?.(), (p = !1), o.classList.remove(`down`), a());
  };
  (s.addEventListener(`pointerup`, C),
    s.addEventListener(`pointercancel`, C),
    s.addEventListener(`lostpointercapture`, C),
    s.addEventListener(`contextmenu`, (e) => e.preventDefault()));
  let w = performance.now(),
    T = (e) => {
      if (!g) return;
      let t = Math.min(0.1, (e - w) / 1e3);
      for (w = e, p && e - m > 320 && x(t * Cr * Sr); _.length && e - _[0] > 600;) _.shift();
      (v?.setSpeed(E.speed), requestAnimationFrame(T));
    };
  requestAnimationFrame(T);
  let E = {
    el: o,
    on(e) {
      Object.assign(n, e);
    },
    get down() {
      return p;
    },
    get frames() {
      return h;
    },
    get speed() {
      return _.length / 0.6;
    },
    show(e) {
      (e != null && (l.textContent = e), o.classList.add(`show`, `idle`));
    },
    hide() {
      (o.classList.remove(`show`, `idle`, `down`), (p = !1), v?.setSpeed(0));
    },
    label(e) {
      l.textContent = e;
    },
    nudge() {
      (o.classList.remove(`idle`), o.offsetWidth, o.classList.add(`idle`));
    },
    flare() {
      (o.classList.remove(`flare`), o.offsetWidth, o.classList.add(`flare`));
    },
    destroy() {
      ((g = !1), v?.stop(), o.remove());
    },
  };
  return E;
}
var Q = 640,
  $ = 480,
  Tr = 16,
  Er = /^\s*(第[一二三四五]幕|act\s+(one|two|three|[ivx]+)|acte\s+[ivx]+)[\s　:：—–-]*/i,
  Dr = {
    moon: `#f0d77e`,
    stars: `#f3c862`,
    doves: `#a9d3ee`,
    rocket: `#f2a072`,
    flowers: `#f3a6b6`,
    sun: `#f6c25a`,
    rabbit: `#f3a6b6`,
    prop: `#f2b56b`,
  },
  Or = (e, t) =>
    `rgba(${parseInt(e.slice(1, 3), 16)},${parseInt(e.slice(3, 5), 16)},${parseInt(e.slice(5, 7), 16)},${t})`,
  kr = (e) => (e < 0 ? 0 : Math.min(0.62, ((e + 1) / 10) * 0.62));
function Ar(e) {
  let t = document.createElement(`canvas`);
  ((t.width = Q), (t.height = $));
  let n = t.getContext(`2d`),
    r = n.createLinearGradient(0, 0, 0, $);
  (r.addColorStop(0, `rgba(143,191,230,0.9)`),
    r.addColorStop(0.5, `rgba(148,209,178,0.7)`),
    r.addColorStop(0.63, `rgba(233,143,156,0)`),
    r.addColorStop(0.72, `rgba(233,143,156,0.75)`),
    r.addColorStop(1, `rgba(233,143,156,0.85)`),
    (n.fillStyle = r),
    n.fillRect(0, 0, Q, $));
  let i = Dr[e?.into] || Dr.moon,
    a = (e?.x ?? 0.66) * Q,
    o = (e?.y ?? 0.32) * $,
    s = n.createRadialGradient(a, o, 0, a, o, $ * 0.42);
  return (
    s.addColorStop(0, Or(i, 1)),
    s.addColorStop(0.5, Or(i, 0.7)),
    s.addColorStop(1, Or(i, 0)),
    (n.fillStyle = s),
    n.fillRect(0, 0, Q, $),
    t
  );
}
function jr() {
  return [0, 1, 2, 3].map(() => {
    let e = document.createElement(`canvas`);
    ((e.width = 160), (e.height = 120));
    let t = e.getContext(`2d`),
      n = t.createImageData(160, 120);
    for (let e = 0; e < n.data.length; e += 4) {
      let t = Math.random() * 255;
      ((n.data[e] = n.data[e + 1] = n.data[e + 2] = t), (n.data[e + 3] = 26));
    }
    return (t.putImageData(n, 0, 0), e);
  });
}
function Mr() {
  return typeof MediaRecorder > `u` || !MediaRecorder.isTypeSupported
    ? null
    : [
        `video/mp4;codecs=avc1.42E01E,mp4a.40.2`,
        `video/mp4`,
        `video/webm;codecs=vp9,opus`,
        `video/webm;codecs=vp8,opus`,
        `video/webm`,
      ].find((e) => {
        try {
          return MediaRecorder.isTypeSupported(e);
        } catch {
          return !1;
        }
      }) || null;
}
async function Nr(e) {
  if (e.canvas) return e.canvas;
  if (!e.blob) return null;
  try {
    if (window.createImageBitmap) return await createImageBitmap(e.blob);
    let t = URL.createObjectURL(e.blob),
      n = new Image();
    return ((n.src = t), await n.decode(), URL.revokeObjectURL(t), n);
  } catch {
    return null;
  }
}
function Pr({ lang: e = `zh` } = {}) {
  let t = e === `en`,
    n = document.createElement(`canvas`);
  ((n.width = Q), (n.height = $));
  let r = n.getContext(`2d`),
    i = jr(),
    a = (() => {
      let e = document.createElement(`canvas`);
      ((e.width = Q), (e.height = $));
      let t = e.getContext(`2d`),
        n = t.createRadialGradient(Q / 2, $ / 2, $ * 0.32, Q / 2, $ / 2, $ * 0.86);
      return (
        n.addColorStop(0, `rgba(0,0,0,0)`),
        n.addColorStop(1, `rgba(0,0,0,0.62)`),
        (t.fillStyle = n),
        t.fillRect(0, 0, Q, $),
        e
      );
    })(),
    o = 7,
    s = () => (o = (o * 16807) % 2147483647) / 2147483647;
  function c(e) {
    ((r.globalCompositeOperation = `overlay`),
      r.drawImage(i[e % i.length], 0, 0, Q, $),
      (r.globalCompositeOperation = `source-over`),
      s() > 0.7 && ((r.fillStyle = `rgba(240,232,214,${0.18 + s() * 0.2})`), r.fillRect(s() * Q, 0, 1 + s(), $)));
    for (let e = 0; e < 3; e += 1)
      s() > 0.55 &&
        ((r.fillStyle = s() > 0.5 ? `rgba(10,8,6,0.7)` : `rgba(240,232,214,0.55)`),
        r.beginPath(),
        r.arc(s() * Q, s() * $, 0.6 + s() * 2.2, 0, Math.PI * 2),
        r.fill());
    (r.drawImage(a, 0, 0), (r.fillStyle = `rgba(0,0,0,${s() * 0.08})`), r.fillRect(0, 0, Q, $));
  }
  function l(e, t, n, i = `#efe6d3`) {
    r.beginPath();
    for (let i = 0; i < 10; i += 1) {
      let a = (i / 10) * Math.PI * 2 - Math.PI / 2,
        o = i % 2 ? n * 0.42 : n;
      r.lineTo(e + Math.cos(a) * o, t + Math.sin(a) * o);
    }
    (r.closePath(), (r.fillStyle = i), r.fill());
  }
  function u(e, { act: n = ``, text: i = ``, big: a = !1, title: o = null }) {
    let u = (s() - 0.5) * 3,
      d = (s() - 0.5) * 3;
    ((r.fillStyle = `#000`),
      r.fillRect(0, 0, Q, $),
      r.save(),
      r.translate(u, d),
      (r.fillStyle = `rgb(${15 + s() * 6},${13 + s() * 5},${11 + s() * 4})`),
      r.fillRect(14, 12, 612, 456),
      (r.strokeStyle = `rgba(236,226,206,0.88)`),
      (r.lineWidth = 2.5),
      r.strokeRect(34, 30, 572, 420),
      (r.lineWidth = 1),
      r.strokeRect(44, 40, 552, 400));
    for (let [e, t] of [
      [44, 40],
      [596, 40],
      [44, 440],
      [596, 440],
    ])
      l(e, t, 7);
    if (((r.fillStyle = `#efe6d3`), (r.textAlign = `center`), (r.textBaseline = `alphabetic`), o))
      (l(Q / 2, 92, 20),
        (r.font = `600 15px Georgia, ${rt.serif}`),
        r.fillText(`S  T  A  R     F  I  L  M`, Q / 2, 136),
        (r.font = `700 ${[...o.name].length > 9 ? 40 : 50}px ${rt.serif}`),
        We(r, o.name, Q / 2, 222, 490, 56),
        (r.font = `24px ${rt.serif}`),
        (r.fillStyle = `rgba(239,230,211,0.9)`),
        o.who && r.fillText(o.who, Q / 2, 330),
        (r.font = `italic 15px Georgia, serif`),
        (r.fillStyle = `rgba(239,230,211,0.7)`),
        r.fillText(t ? `Geo. Méliès · Montreuil-sous-Bois` : `Geo. Méliès · 蒙特勒伊`, Q / 2, 410));
    else if (a)
      ((r.font = `700 74px ${rt.serif}`),
        r.fillText(i, Q / 2, 246),
        (r.font = `600 18px Georgia, serif`),
        r.fillText(`F  I  N`, Q / 2, 298),
        l(Q / 2, $ / 2 - 88, 14));
    else {
      ((r.font = `600 19px ${rt.serif}`),
        (r.fillStyle = `rgba(239,230,211,0.82)`),
        r.fillText([...n].join(` `), Q / 2, 118),
        (r.fillStyle = `#efe6d3`));
      let e = i.replace(Er, ``),
        t = [...e].length > 24 ? 30 : 36;
      ((r.font = `${t}px ${rt.serif}`), r.save(), (r.textAlign = `center`));
      let a = Math.ceil(r.measureText(e).width / 470) || 1;
      (We(r, e, Q / 2, 254 - ((a - 1) * (t + 14)) / 2, 470, t + 14), r.restore());
    }
    (r.restore(), c(e));
  }
  function d(e, t, n = 0, i = null) {
    let a = (s() - 0.5) * 2.5,
      o = (s() - 0.5) * 2.5;
    ((r.fillStyle = `#000`),
      r.fillRect(0, 0, Q, $),
      t && r.drawImage(t, a - 2, o - 2, 644, 484),
      t &&
        n > 0 &&
        i &&
        ((r.globalCompositeOperation = `color`),
        (r.globalAlpha = n),
        r.drawImage(i, a + (s() - 0.5) * 5, o + (s() - 0.5) * 5),
        (r.globalCompositeOperation = `source-over`),
        (r.globalAlpha = 1)),
      c(e));
  }
  function f({ frames: e, title: n, who: r, act1: i, act2: a, cutAt: o = null }) {
    let s = [],
      c = (e, t) => {
        for (let n = 0; n < e; n += 1) s.push({ card: t });
      };
    return (
      c(44, { title: { name: n, who: r ? (t ? `starring ${r}` : `主演　${r}`) : `` } }),
      i && c(40, { act: t ? `ACT ONE` : `第一幕`, text: i }),
      e.forEach((e, t) => {
        (e.blob || e.canvas) && s.push({ shot: e, after: o == null ? -1 : t - o });
      }),
      a && c(42, { act: t ? `ACT TWO` : `第二幕`, text: a }),
      c(30, { big: !0, text: t ? `The End` : `完` }),
      s
    );
  }
  return {
    canvas: n,
    still(e) {
      u(0, f(e)[0].card);
    },
    tint(e, { onFrame: t = () => {} } = {}) {
      let n = [`#e98f9c`, `#efd27a`, `#8fbfe6`, `#94d1b2`],
        i = [],
        a = null,
        o = 0;
      Nr(e).then((e) => {
        a = e;
      });
      let l = (e = null, n = 0) => {
          ((r.fillStyle = `#000`),
            r.fillRect(0, 0, Q, $),
            a && r.drawImage(a, 0, 0, Q, $),
            (r.globalCompositeOperation = `color`));
          for (let e of i)
            ((r.globalAlpha = e.a),
              (r.fillStyle = e.c),
              r.beginPath(),
              r.ellipse(e.x, e.y, e.r, e.r * 0.5, e.t, 0, Math.PI * 2),
              r.fill());
          ((r.globalCompositeOperation = `source-over`), (r.globalAlpha = 1));
          let s = i[i.length - 1];
          if (
            (s &&
              !e &&
              ((r.strokeStyle = `#2b2420`),
              (r.lineWidth = 6),
              (r.lineCap = `round`),
              r.beginPath(),
              r.moveTo(s.x + 52, s.y - 66),
              r.lineTo(s.x + 6, s.y - 6),
              r.stroke(),
              (r.fillStyle = s.c),
              r.beginPath(),
              r.ellipse(s.x + 3, s.y - 3, 6, 11, -0.7, 0, Math.PI * 2),
              r.fill()),
            e)
          ) {
            let t = Math.min(e.height, e.width * ($ / Q)),
              i = (Q / $) * t;
            ((r.globalAlpha = n),
              r.drawImage(e, (e.width - i) / 2, (e.height - t) / 2, i, t, 0, 0, Q, $),
              (r.globalAlpha = 1));
          }
          (c(o++), t());
        },
        u = setInterval(() => {
          (i.length < 80 &&
            i.push({
              x: 40 + s() * 560,
              y: 40 + s() * 400,
              r: 22 + s() * 50,
              t: s() * Math.PI,
              a: 0.35 + s() * 0.25,
              c: n[Math.floor(s() * n.length)],
            }),
            l());
        }, 110);
      return {
        stop() {
          clearInterval(u);
        },
        finish(e) {
          return (
            clearInterval(u),
            new Promise((t) => {
              let n = new Image();
              ((n.crossOrigin = `anonymous`),
                (n.onload = () => {
                  let e = performance.now(),
                    r = (i) => {
                      let a = Math.min(1, (i - e) / 900);
                      (l(n, a), a < 1 ? requestAnimationFrame(r) : t(!0));
                    };
                  requestAnimationFrame(r);
                }),
                (n.onerror = () => t(!1)),
                (n.src = e));
            })
          );
        },
      };
    },
    async screen(e, { onFrame: t = () => {}, record: r = !0 } = {}) {
      let i = f(e),
        a = Ar(e.glow),
        o = i.length / Tr,
        s = i.map((e, t) => (e.shot ? t : -1)).filter((e) => e >= 0),
        c = new Map(),
        l = (e) => {
          for (let t of s) t < e || t > e + 10 || c.has(t) || c.set(t, Nr(i[t].shot));
        };
      l(0);
      let p = null,
        m = [],
        h = r ? Mr() : null,
        g = null;
      if (h && n.captureStream)
        try {
          let e = n.captureStream(30),
            t = we();
          if (t?.createMediaStreamDestination) {
            g = t.createMediaStreamDestination();
            let n = g.stream.getAudioTracks()[0];
            n && e.addTrack(n);
          }
          ((p = new MediaRecorder(e, { mimeType: h, videoBitsPerSecond: 24e5, audioBitsPerSecond: 96e3 })),
            (p.ondataavailable = (e) => {
              e.data?.size && m.push(e.data);
            }),
            p.start(500));
        } catch (e) {
          (console.warn(`the film can't be recorded here`, e), (p = null));
        }
      let _ = An({ seconds: o + 0.3, extra: g }),
        v = jn({ extra: g }),
        y = performance.now(),
        b = -1;
      (await new Promise((e) => {
        let n = async () => {
          let r = Math.floor(((performance.now() - y) / 1e3) * Tr);
          if (r >= i.length) {
            e();
            return;
          }
          if (r > b) {
            b = r;
            let e = i[r];
            (l(r),
              e.card
                ? u(r, e.card)
                : d(
                    r,
                    await Promise.race([c.get(r), new Promise((e) => setTimeout(() => e(null), 40))]),
                    kr(e.after),
                    a,
                  ),
              t(r, i.length));
          }
          requestAnimationFrame(n);
        };
        requestAnimationFrame(n);
      }),
        v.stop(),
        _.stop());
      for (let e of c.values()) e.then((e) => e?.close?.());
      if (!p) return { seconds: o, video: null };
      let x = await new Promise((e) => {
        p.onstop = () => e(m.length ? new Blob(m, { type: p.mimeType || h }) : null);
        try {
          p.stop();
        } catch {
          e(null);
        }
      });
      return !x || x.size < 2e4
        ? { seconds: o, video: null }
        : { seconds: o, video: { blob: x, url: URL.createObjectURL(x), type: x.type || h } };
    },
  };
}
function Fr(e, { label: t = `` } = {}) {
  let n = document.createElement(`div`);
  ((n.className = `mf-rub`),
    (n.innerHTML = `<div class="mf-rub-hint"><b></b><span></span><i></i></div>`),
    e.appendChild(n),
    (n.querySelector(`span`).textContent = t));
  let r = n.querySelector(`i`),
    i = [];
  return {
    dull(e) {
      ((i = []),
        e?.traverse((e) => {
          if (e.isMesh) {
            e.material = Array.isArray(e.material) ? e.material.map((e) => e.clone()) : e.material.clone();
            for (let t of [e.material].flat()) {
              let e = {
                color: t.color?.clone(),
                roughness: t.roughness,
                metalness: t.metalness,
                emissive: t.emissive?.clone(),
                ei: t.emissiveIntensity,
              };
              i.push({ m: t, was: e });
            }
          }
        }),
        this.set(0));
    },
    set(e) {
      let t = new w(`#6f675d`);
      for (let { m: n, was: r } of i)
        (r.color && n.color.copy(t).lerp(r.color, Math.min(1, e)),
          r.roughness != null && (n.roughness = H.lerp(1, r.roughness, Math.min(1, e))),
          r.metalness != null && (n.metalness = H.lerp(0.1, r.metalness, Math.min(1, e))),
          n.emissive && (n.emissive.set(`#ffcf73`), (n.emissiveIntensity = Math.max(0, e - 0.8) * 1.6)));
    },
    rub({ need: e = 2400, onProgress: t = () => {} } = {}) {
      return new Promise((i) => {
        let a = 0,
          o = null,
          s = 0,
          c = !1,
          l = 0;
        n.classList.add(`show`);
        let u = () => {
            c ||
              ((c = !0),
              n.classList.remove(`show`, `rubbing`),
              n.removeEventListener(`pointerdown`, f),
              n.removeEventListener(`pointermove`, p),
              window.removeEventListener(`pointerup`, m),
              clearInterval(g),
              i());
          },
          d = (n) => {
            ((a += n),
              (s = Math.min(1, a / e)),
              r.style.setProperty(`--k`, `${Math.round(s * 100)}%`),
              t(s),
              s >= 1 && u());
          },
          f = (e) => {
            (e.preventDefault(), (o = { x: e.clientX, y: e.clientY }), n.classList.add(`rubbing`));
            try {
              n.setPointerCapture(e.pointerId);
            } catch {}
          },
          p = (e) => {
            if (!o) return;
            let t = Math.hypot(e.clientX - o.x, e.clientY - o.y);
            ((o = { x: e.clientX, y: e.clientY }), d(t));
            let n = performance.now();
            n - l > 70 && ((l = n), wn.rub(Math.min(1, t / 30)));
          },
          m = () => {
            ((o = null), n.classList.remove(`rubbing`));
          };
        (n.addEventListener(`pointerdown`, f),
          n.addEventListener(`pointermove`, p),
          window.addEventListener(`pointerup`, m));
        let h = performance.now(),
          g = setInterval(() => {
            !o && performance.now() - h > 9e3 && d(e * 0.035);
          }, 60);
      });
    },
  };
}
function Ir({ data: e, width: t, height: n }, { tolerance: r = 46, soft: i = 22, margin: a = 6 } = {}) {
  let o = t * n,
    s = [];
  for (let e = 0; e < t; e += 4) s.push(e, (n - 1) * t + e);
  for (let e = 0; e < n; e += 4) s.push(e * t, e * t + t - 1);
  let c = (t) => s.map((n) => e[n * 4 + t]).sort((e, t) => e - t)[s.length >> 1],
    l = [c(0), c(1), c(2)],
    u = (t) => {
      let n = t * 4;
      if (e[n + 3] < 16) return 0;
      let r = e[n] - l[0],
        i = e[n + 1] - l[1],
        a = e[n + 2] - l[2];
      return Math.sqrt(r * r + i * i + a * a);
    },
    d = new Uint8Array(o),
    f = new Int32Array(o),
    p = 0,
    m = 0,
    h = (e) => {
      !d[e] && u(e) < r && ((d[e] = 1), (f[m++] = e));
    };
  for (let e = 0; e < t; e += 1) (h(e), h((n - 1) * t + e));
  for (let e = 0; e < n; e += 1) (h(e * t), h(e * t + t - 1));
  for (; p < m;) {
    let e = f[p++],
      n = e % t;
    (n > 0 && h(e - 1), n < t - 1 && h(e + 1), e >= t && h(e - t), e < o - t && h(e + t));
  }
  let g = new Uint8ClampedArray(e.length),
    _ = t,
    v = n,
    y = -1,
    b = -1;
  for (let n = 0; n < o; n += 1) {
    let a = n * 4,
      s = 255;
    if (d[n]) s = 0;
    else {
      let e = n % t;
      ((e > 0 && d[n - 1]) || (e < t - 1 && d[n + 1]) || (n >= t && d[n - t]) || (n < o - t && d[n + t])) &&
        (s = Math.max(0, Math.min(255, ((u(n) - r * 0.5) / i) * 255)));
    }
    if (
      ((g[a] = e[a]), (g[a + 1] = e[a + 1]), (g[a + 2] = e[a + 2]), (g[a + 3] = Math.min(s, e[a + 3])), g[a + 3] > 24)
    ) {
      let e = n % t,
        r = (n / t) | 0;
      (e < _ && (_ = e), e > y && (y = e), r < v && (v = r), r > b && (b = r));
    }
  }
  if (y < _ || (y - _) * (b - v) < o * 0.01) return null;
  let x = Math.max(0, _ - a),
    S = Math.max(0, v - a),
    C = Math.min(t, y + a + 1) - x,
    w = Math.min(n, b + a + 1) - S,
    T = new Uint8ClampedArray(C * w * 4);
  for (let e = 0; e < w; e += 1) T.set(g.subarray(((S + e) * t + x) * 4, ((S + e) * t + x + C) * 4), e * C * 4);
  return { data: T, width: C, height: w, box: { x, y: S, w: C, h: w } };
}
var Lr = (e) =>
  new Promise((t) => {
    let n = new Image();
    ((n.crossOrigin = `anonymous`),
      (n.decoding = `async`),
      (n.onload = () => t(n)),
      (n.onerror = () => t(null)),
      (n.src = e));
  });
async function Rr(e, { height: n = 1.15, maxWidth: r = 1.35, shadows: i = !0 } = {}) {
  let a = await Lr(e.startsWith(`blob:`) || e.startsWith(`data:`) ? e : he(e));
  if (!a) return null;
  let o = Math.min(1, 640 / Math.max(a.naturalWidth, a.naturalHeight)),
    s = document.createElement(`canvas`);
  ((s.width = Math.round(a.naturalWidth * o)), (s.height = Math.round(a.naturalHeight * o)));
  let c = s.getContext(`2d`, { willReadFrequently: !0 });
  c.drawImage(a, 0, 0, s.width, s.height);
  let u = s;
  try {
    let e = Ir(c.getImageData(0, 0, s.width, s.height));
    e &&
      ((u = document.createElement(`canvas`)),
      (u.width = e.width),
      (u.height = e.height),
      u.getContext(`2d`).putImageData(new ImageData(e.data, e.width, e.height), 0, 0));
  } catch {}
  let d = document.createElement(`canvas`);
  ((d.width = u.width + 12), (d.height = u.height + 12));
  let f = d.getContext(`2d`);
  for (let e = 0; e < 16; e += 1)
    f.drawImage(u, 6 + Math.cos((e / 16) * Math.PI * 2) * 6 * 0.8, 6 + Math.sin((e / 16) * Math.PI * 2) * 6 * 0.8);
  ((f.globalCompositeOperation = `source-in`), (f.fillStyle = `#a07a52`), f.fillRect(0, 0, d.width, d.height));
  let p = (e) => {
      let t = new l(e);
      return ((t.colorSpace = y), (t.anisotropy = 4), t);
    },
    m = u.width / u.height,
    g = n,
    _ = g * m;
  _ > r && ((_ = r), (g = _ / m));
  let v = new z(),
    b = new A(new I(_, g), new L({ map: p(u), alphaTest: 0.45, roughness: 0.82, metalness: 0, side: 0 }));
  b.position.set(0, g / 2, 0.012);
  let x = _ * (d.width / u.width),
    S = g * (d.height / u.height),
    C = p(d),
    w = new A(new I(x, S), new L({ map: C, alphaTest: 0.45, roughness: 0.95, side: 2, color: `#cfb08a` }));
  w.position.set(0, g / 2, 0);
  let T = new A(new I(x, S), new L({ map: C, alphaTest: 0.45, roughness: 1, side: 1, color: `#6e5236` }));
  T.position.set(0, g / 2, -0.014);
  for (let e of [b, w, T]) ((e.castShadow = i), (e.receiveShadow = !0), v.add(e));
  let E = new h({ color: `#2a2622`, transparent: !0, opacity: 0.85 });
  for (let e of [-_ * 0.32, _ * 0.32])
    v.add(new t(new F().setFromPoints([new V(e, g * 0.92, 0), new V(e, g + 6, 0)]), E));
  return ((v.userData.size = { w: _, h: g }), v);
}
var zr = (e) => `melies/props/${e}.png`;
function Br(e, { height: n = 1 } = {}) {
  let r = document.createElement(`canvas`);
  ((r.width = 512), (r.height = 400));
  let i = r.getContext(`2d`);
  ((i.fillStyle = `#e9dcc2`),
    i.fillRect(0, 0, 512, 400),
    (i.strokeStyle = `#3b2f27`),
    (i.lineWidth = 10),
    i.strokeRect(14, 14, 484, 372),
    (i.fillStyle = `#3b2f27`),
    (i.textAlign = `center`),
    (i.textBaseline = `middle`),
    (i.font = `700 ${[...e].length > 6 ? 54 : 72}px 'Kaiti SC', 'STKaiti', 'KaiTi', serif`),
    i.fillText(e, 256, 200, 460));
  let a = new l(r);
  a.colorSpace = y;
  let o = n * 1.28,
    s = new z(),
    c = new A(new _(o, n, 0.03), [
      new L({ color: `#a07a52` }),
      new L({ color: `#a07a52` }),
      new L({ color: `#a07a52` }),
      new L({ color: `#a07a52` }),
      new L({ map: a, roughness: 0.9 }),
      new L({ color: `#6e5236` }),
    ]);
  ((c.position.y = n / 2), s.add(c));
  let u = new h({ color: `#2a2622` });
  for (let e of [-o * 0.32, o * 0.32]) s.add(new t(new F().setFromPoints([new V(e, n, 0), new V(e, n + 6, 0)]), u));
  return ((s.userData.size = { w: o, h: n }), s);
}
var Vr = 0.78;
function Hr(e, { z: n = 4.3, y: r = 3.05, from: i = -4.1, to: a = 4.1, max: o = 6 } = {}) {
  let c = new z();
  e.add(c);
  let l = (e) => -0.22 * (1 - ((e - (i + a) / 2) / ((a - i) / 2)) ** 2),
    u = [];
  for (let e = 0; e <= 32; e += 1) {
    let t = i + (e / 32) * (a - i);
    u.push(new V(t, r + l(t), n));
  }
  c.add(new t(new F().setFromPoints(u), new h({ color: `#3a332c` })));
  let d = new m(),
    f = [],
    p = new L({ color: `#c79b6b`, roughness: 0.7 }),
    g = new L({ color: `#1d1a17`, roughness: 0.55 }),
    v = new re({ color: `#efe6d6` });
  function b() {
    let e = new z(),
      t = 0.58,
      n = g.clone(),
      r = v.clone(),
      i = p.clone(),
      a = new A(new _(0.6799999999999999, 0.78, 0.008), n);
    e.add(a);
    for (let n = 0; n < 6; n += 1)
      for (let i of [-1, 1]) {
        let a = new A(new I(0.03, 0.04), r);
        (a.position.set(i * 0.318, -0.58 / 2 + 0.02 + (t / 5.4) * n, 0.005), e.add(a));
        let o = a.clone();
        ((o.position.z = -0.005), (o.rotation.y = Math.PI), e.add(o));
      }
    let o = new L({ color: `#d9cfbf`, roughness: 0.6, emissive: `#ffffff`, emissiveIntensity: 0 }),
      s = new A(new I(t, t), o);
    s.position.z = 0.006;
    let c = s.clone();
    ((c.position.z = -0.006), (c.rotation.y = Math.PI), e.add(s, c));
    for (let t of [-0.18, 0.18]) {
      let n = new A(new _(0.035, 0.09, 0.03), i);
      (n.position.set(t, 0.39999999999999997, 0), e.add(n));
    }
    return (
      e.traverse((e) => {
        e.isMesh && (e.castShadow = !0);
      }),
      { group: e, picMat: o, mats: [n, r, i, o], seen: 1 }
    );
  }
  let x = new V(),
    S = new V(),
    C = new s(),
    w = new V();
  function T(e, t, n) {
    let r = 1;
    if (t) {
      (e.group.getWorldPosition(x), w.subVectors(t.to, t.from));
      let n = w.length();
      C.set(t.from, w.divideScalar(n || 1));
      let i = S.subVectors(x, t.from).dot(C.direction);
      i > 0 && i < n && C.distanceSqToPoint(x) < 0.25 && (r = 0.12);
    }
    e.seen += (r - e.seen) * Math.min(1, n * 6);
    let i = e.seen < 0.98;
    for (let t of e.mats)
      (t.transparent !== i && ((t.transparent = i), (t.depthWrite = !i), (t.needsUpdate = !0)),
        (t.opacity = i ? e.seen : 1));
  }
  let E = (e, t) => {
    (e.group.position.set(t, r + l(t) - 0.42, n), (e.x = t));
  };
  function D() {
    let e = (i + a) / 2,
      t = f.filter((e) => e.mine),
      n = f.filter((e) => !e.mine);
    (t.forEach((n, r) => E(n, e + (r - (t.length - 1) / 2) * Vr)),
      n.forEach((t, n) => E(t, e + (n % 2 ? 1 : -1) * (1.69 + Math.floor(n / 2) * Vr))));
  }
  function O(e, t) {
    d.load(t, (t) => {
      ((t.colorSpace = y),
        (e.picMat.map = t),
        e.picMat.color.set(`#ffffff`),
        (e.picMat.emissiveIntensity = 0),
        (e.picMat.needsUpdate = !0),
        (e.developing = !1));
    });
  }
  return {
    group: c,
    frames: f,
    setItems(e) {
      for (let t of e.slice(0, o)) {
        if (f.some((e) => e.id === t.id)) continue;
        let e = b();
        ((e.id = t.id), (e.item = t), f.push(e), c.add(e.group), O(e, t.image));
      }
      D();
    },
    developing(e) {
      let t = b();
      return (
        (t.id = e),
        (t.developing = !0),
        (t.mine = !0),
        f.push(t),
        c.add(t.group),
        D(),
        {
          frame: t,
          reveal: (e, n) => {
            ((t.item = n), O(t, e));
          },
          remove: () => {
            let e = f.indexOf(t);
            e >= 0 && (f.splice(e, 1), c.remove(t.group), D());
          },
        }
      );
    },
    meshes: () => f.map((e) => e.group),
    frameOf(e) {
      let t = e;
      for (; t;) {
        let e = f.find((e) => e.group === t);
        if (e) return e;
        t = t.parent;
      }
      return null;
    },
    update(e, t, n = 1 / 60) {
      for (let [r, i] of f.entries())
        (T(i, t, n),
          (i.group.rotation.z = Math.sin(e * 0.8 + r * 1.3) * 0.025),
          (i.group.rotation.y = Math.sin(e * 0.5 + r) * 0.06),
          i.developing &&
            ((i.picMat.emissiveIntensity = 0.25 + Math.sin(e * 3 + r) * 0.15), i.picMat.emissive.set(`#ffe2b0`)));
    },
  };
}
var Ur = { rack: `m_rack`, camera: `m_camera`, tins: `m_tins`, kiosk: `m_kiosk`, medal: `m_medal`, moon: `m_moon` },
  Wr = {
    screen: { x: -0.4, z: 5.75, labelHeight: 2.9, radius: 2.4, stand: { x: -0.15, z: 5.95 } },
    camera: { x: Z.camera.x, z: Z.camera.z, labelHeight: 2.2, radius: 1.8, stand: { x: 1.1, z: -1.9 } },
    medal: { x: Z.medal.x - 0.2, z: Z.medal.z, labelHeight: 1.8, radius: 1.8, stand: { x: 2.5, z: 6.05 } },
    rack: { x: Z.rack.x + 0.4, z: Z.rack.z, labelHeight: 2.5, radius: 1.9 },
    moon: { x: 0, z: Y.stageZ + 0.7, labelHeight: 2.6 + Y.stageH, radius: 2 },
    tins: { x: Z.tins.x - 0.3, z: Z.tins.z, labelHeight: 1.6, radius: 1.8 },
    kiosk: { x: Z.kiosk.x - 0.4, z: Z.kiosk.z, labelHeight: 2.7, radius: 2 },
  },
  Gr = 1.6,
  Kr = 0.8,
  qr = 2.8,
  Jr = 0.35,
  Yr = 13,
  Xr = 18.9,
  Zr = { from: new V(1.05, 1.85, 5.75), at: new V(-4.1, 2.15, 5.2) },
  Qr = { from: new V(-3.5, 1.75, -5.2), at: new V(0.9, 1.45, -8.7) },
  $r = { date: `PM 4:26  1897  MONTREUIL` };
async function ei({ stage: e, me: t, lang: r, onProgress: i = () => {} }) {
  let o = e.renderer.domElement,
    s = document.getElementById(`ui`),
    c = Ke(s, {
      beats: 3,
      stripLabel: pe(`他的一生`, `His life`),
      exit: pe(`回到人生广场`, `Back to the Life Plaza`),
      atlas: !0,
    });
  document.body.classList.add(`mf-room`);
  let u = an[r],
    f = qe({ hud: c, lang: r });
  c.onMute((e) => f.setMuted(e));
  let p = (e) => new Promise((t) => setTimeout(t, e)),
    m = Oe(t, `melies`, r),
    h = Ee(t, `melies`, r).then((e) => (e?.id && (m = e), e)),
    g = (e) => (m ? Promise.resolve(m) : Promise.race([h, p(e).then(() => null)])),
    v = nt(`melies`, r);
  (v.then((e) => {
    e && f.prefetch([e]);
  }),
    Ye(e.quality.low),
    _e(!0, { keep: (e, t) => t.isSkinnedMesh }));
  let y = await rn({ scene: e.scene, quality: e.quality, camera: e.camera, onProgress: i });
  (en(y.group, e.quality.low ? 1.3 : 1.95), ge(e, `procedural`), ye(e, `walk`), be(!0, { accent: xe.melies.curtain }));
  let b = e.finish?.uniforms;
  if (b) for (let [e, t] of Object.entries({ uSat: 1, uContrast: 1 })) b[e] && (b[e].value = t);
  ((e.renderer.toneMappingExposure = 0.8),
    e.quality.low && ((e.renderer.shadowMap.autoUpdate = !1), (e.renderer.shadowMap.needsUpdate = !0)));
  let x = Je(e.scene),
    S = Hr(y.group),
    C = Xe({ body: `#f2c94c` });
  ((C.object.visible = !1), e.scene.add(C.object));
  let w = Le({ avatar: C, bounds: y.bounds, colliders: y.colliders, blockers: y.blockers, heightAt: Lt });
  w.place(Z.spawn.x, Z.spawn.z, Z.spawn.h);
  let T = Xe({ body: `#1f2126`, skin: `#f1d2bf`, hair: `#e9e6df`, height: 1.7 });
  (T.object.position.set(Z.melies.x, 0, Z.melies.z),
    (T.object.rotation.y = 0.5),
    (T.object.visible = !1),
    e.scene.add(T.object),
    y.colliders.push({ x: Z.melies.x, z: Z.melies.z, r: 0.4 }));
  let E = Promise.all([
      Ae(`models/chars/${t.avatar}.glb`)
        .then((t) => {
          (en(t.object, 1.35), e.scene.remove(C.object), (C = t), e.scene.add(t.object), w.setAvatar(t));
        })
        .catch(() => {
          C.object.visible = !0;
        }),
      Ae(`models/chars/melies.glb`, { height: 1.72 })
        .then((t) => {
          (en(t.object, 1.35),
            e.scene.remove(T.object),
            t.object.position.copy(T.object.position),
            (t.object.rotation.y = T.object.rotation.y),
            (T = t),
            e.scene.add(t.object));
        })
        .catch(() => {
          T.object.visible = !0;
        }),
    ]),
    D = de(o, { joystickEl: c.joystickEl }),
    O = Fe(e.camera, { box: { ...y.cameraBox }, eyeHeight: 1.52, onMode: (e) => c.setView(e, { announce: !0 }) });
  ((O.yaw = 0),
    c.onView((e) => {
      O.mode = e;
    }),
    Be() === `first` && (O.mode = `first`));
  let k = y.bounds,
    ee = ze(y.colliders, y.blockers, 0.3),
    te = (e, t) => e > k.minX + 0.3 && e < k.maxX - 0.3 && t > k.minZ + 0.3 && t < k.maxZ - 0.3 && ee(e, t),
    j = Ie({ minX: k.minX, maxX: k.maxX, minZ: k.minZ, maxZ: k.maxZ, cellSize: 0.3, free: te }),
    M = (e, t) => {
      let n = Ne(j, e, t);
      return n.length ? n : [t.clone()];
    };
  w.setSight(Me({ cellSize: 0.3, isWalkable: te }));
  let N = Pe({
      camera: e.camera,
      canvas: o,
      player: w,
      input: D,
      promptEl: c.promptEl,
      actionEl: c.actionEl,
      route: M,
    }),
    P = Ze(s),
    F = null,
    ne = () => {
      F = w.position;
    },
    ae = async (e) => (ne(), f.say(u, e)),
    B = (e) => f.say(u, [e].flat().filter(Boolean)),
    se = !1,
    le = Object.values(y.props),
    me = new d(),
    he = new WeakMap(),
    U = ct({
      player: w,
      cam: O,
      host: () => T,
      hostHeight: 1.72,
      heightAt: Lt,
      inside: (e, t) =>
        e > k.minX + 0.25 &&
        e < k.maxX - 0.25 &&
        t > k.minZ + 0.25 &&
        t < k.maxZ - 0.25 &&
        y.colliders.every((n) => (e - n.x) ** 2 + (t - n.z) ** 2 >= (n.r + 0.12) ** 2),
      clear: (e, t) => {
        let n = e.distanceTo(t);
        if (n < 0.3) return !0;
        (me.set(e, new V().subVectors(t, e).divideScalar(n)), (me.far = n));
        let r = he.get(t) ?? 0.35;
        return me.intersectObjects(le, !0).every((e) => e.distance > n - r);
      },
      input: D,
      interactions: N,
      hud: c,
      finish: e.finish?.uniforms,
      onScene: (e) => {
        se = e;
      },
    }),
    ve = (e) => {
      let t = e === `screen` ? y.screen.mesh : y.props[Ur[e]];
      if (!t) {
        let t = Wr[e];
        return new V(t.x, 1.2, t.z);
      }
      let n = new a().setFromObject(t),
        r = n.getCenter(new V()),
        i = n.getSize(new V());
      return (he.set(r, Math.max(i.x, i.y, i.z) / 2 + 0.15), r);
    };
  async function Ce(e) {
    (w.faceToward(T.object.position.x, T.object.position.z), ne(), U.talkShot(), await f.say(u, e));
  }
  let we = wr(s),
    ke = gr({
      stage: e,
      studio: y,
      cam: O,
      player: w,
      voice: f,
      who: u,
      lang: r,
      puffs: x,
      direct: U,
      getMelies: () => T,
      route: M,
      ui: s,
      crank: we,
    }),
    Ve = Pr({ lang: r }),
    Ue = Fr(s, { label: on.medal.rub[r] }),
    We = Mn(s, pn[r]),
    $e = null,
    W = br({ visit: () => m }),
    rt = () => {
      let e = W.got(`wish`);
      return e?.care ? !1 : typeof e?.quick == `boolean` ? e.quick : $e === ``;
    },
    lt = 0,
    ut = () => {
      let e = Zt.filter((e) => e.role === `you`).length;
      e && e !== lt && !dt.has(`medal`) && ((lt = e), (W.happened.talk = Zt.slice(-6)), W.ask(`medal`));
    };
  Ue.dull(y.props.m_medal);
  let dt = new Set(),
    G = !1,
    K = null,
    q = null,
    ft = null,
    pt = !1,
    mt = () => c.setProgress(dt.size),
    J = yn(m?.plan, t, r),
    ht = Promise.resolve(null),
    gt = !1,
    _t = new Map(),
    vt = (t) =>
      t ? (_t.has(t) || _t.set(t, Rr(zr(t), { shadows: !e.quality.low })), _t.get(t)) : Promise.resolve(null);
  (vt(J.kind),
    h.then(async (n) => {
      ((J = yn(n?.plan || m?.plan, t, r)),
        vt(J.kind),
        n?.id &&
          J.own &&
          ((gt = !0),
          (ht = (async () => {
            let t = Date.now();
            for (; Date.now() - t < 15e4;) {
              let t = (await Te.visitStatus(n.id))?.extras?.prop;
              if (t?.image) return Rr(Te.media(t.image), { shadows: !e.quality.low });
              if (t?.failed) return null;
              await p(2500);
            }
            return null;
          })().finally(() => {
            gt = !1;
          }))));
    }));
  async function yt(e) {
    let t = await Promise.race([ht, p(300).then(() => null)]);
    return (
      !t && e.own && gt && (B([ln[r].paint]), (t = await Promise.race([ht, p(7e3).then(() => null)]))),
      t || (e.kind ? await vt(e.kind) : null) || Br(e.from)
    );
  }
  let bt = (e) =>
    m?.id
      ? ((W.happened.talk = Zt.slice(-6)),
        Promise.race([Te.meliesSay({ visit: m.id, text: e, happened: { ...W.happened } }), p(9e3).then(() => null)]))
      : Promise.resolve(null);
  async function xt() {
    let e = on.screen,
      t = await g(800),
      n = t?.plan?.beats?.screen;
    (f.prefetch([...e.lines[r], ...e.after[r], n, e.next[r]].filter(Boolean)),
      U.begin(),
      (S.group.visible = !1),
      document.body.classList.add(`mf-cranking`));
    let i = y.screen.video;
    try {
      F = ve(`screen`);
      let a = Ot();
      (O.frame(a.from, a.at, { fit: !1 }),
        At(0.6, 1.4),
        await new Promise((e) => {
          (w.walkPath(M(w.position, a.visitor), e), setTimeout(e, 2600));
        }),
        w.faceToward(-4.2, 5.2),
        y.screen.hold(!0));
      try {
        i.currentTime = Yr;
      } catch {}
      (await B(e.lines[r]),
        we.show(pe(`转动摇柄 · 放映`, `Turn the crank · project`)),
        we.on({ frame: () => {}, down: () => {}, up: () => {} }));
      let o = performance.now(),
        s = we.frames;
      (await new Promise((e) => {
        let t = () => {
          y.screen.crank(we.speed / 16);
          let n = i.currentTime;
          if ((n >= Xr && n < 22.9) || we.frames - s > 400 || performance.now() - o > 4e4) {
            e();
            return;
          }
          requestAnimationFrame(t);
        };
        requestAnimationFrame(t);
      }),
        De.poof(),
        wn.clack(),
        navigator.vibrate?.(25),
        we.hide(),
        await p(600),
        y.screen.hold(!1),
        dt.add(`screen`),
        mt(),
        (W.happened.screen = !0),
        await B(e.after[r]),
        n && (await Ce([n])),
        await St(t),
        await B([e.next[r]]));
    } finally {
      (ue.killTweensOf(kt),
        At(0, 1.2),
        y.screen.hold(!1),
        we.hide(),
        document.body.classList.remove(`mf-cranking`),
        (S.group.visible = !0),
        U.end({ lookAt: Tn() }));
    }
  }
  async function St(e) {
    if ($e !== null) return;
    let n = pn[r],
      i = (e?.plan?.wishes?.length ? e.plan.wishes : Nn(t.life, r)).slice(0, 3);
    document.body.classList.add(`mf-wishing`);
    try {
      (ne(), B([n.lead]));
      let e = await We.ask(i);
      if ((($e = e || ``), (W.happened.wish = $e), (W.happened.talk = Zt.slice(-6)), W.ask(`wish`), !e)) {
        await B([n.skipped]);
        return;
      }
      W.pending(`wish`) && f.reply(u).think(n.hm);
      let t = await W.now(`wish`);
      if (t?.care) {
        (($e = ``), (W.happened.wish = ``), await B([t.line]));
        return;
      }
      await B([t?.line || n.took(e)]);
    } finally {
      document.body.classList.remove(`mf-wishing`);
    }
  }
  let Ct = !1;
  async function wt() {
    if (K) {
      (await jt(K), zt());
      return;
    }
    let e = await g(6e3);
    ((J = yn(e?.plan || m?.plan, t, r)), U.begin());
    try {
      let n = ve(`camera`);
      (w.faceToward(n.x, n.z),
        (F = n),
        U.shoot(n),
        f.prefetch([hn[r].look, hn[r].eye, hn[r].there, ...on.camera.lines[r]]),
        Ct ||
          ((Ct = !0),
          (S.group.visible = !1),
          await ke.peek({ side: Qr, onSide: () => B([hn[r].look, hn[r].eye]), onFrame: () => B([hn[r].there]) }),
          (S.group.visible = !0),
          U.shoot(n)),
        await B(on.camera.lines[r]));
      let i =
          e?.plan?.invite ||
          (J.own
            ? pe(
                `你说的${J.from}，我画成布景了。这回，轮到它。`,
                `Your ${J.from} — I've painted it as scenery. This time, it's the one.`,
              )
            : ln[r].phone),
        a = await vt(bn.kind),
        o = await ke.run({
          trick: J,
          hat: a,
          flat: () => yt(J),
          invite: i,
          options: () => xr(J.options, W.got(`wish`)?.lead),
          make: e?.plan?.direct ? bt : null,
          practiced: (e) => (
            (W.happened.quick = rt()),
            (W.happened.practice = { stop: e.why, by: e.by }),
            W.ask(`practice`),
            () => W.now(`practice`).then((e) => e?.line || null)
          ),
          propFor: (e) =>
            (e.kind ? vt(e.kind) : Promise.resolve(null)).then((t) => (t ? t.clone() : Br(e.thing || e.name))),
          onChosen: (t, n) => {
            ((W.happened.chose = { from: J.from, name: n.name }), Mt(e, $e ? { ...t, wish: $e } : t));
          },
        });
      if (!o) return;
      let s = o.option.title || e?.plan?.shot?.title || pe(`《消失的戏法》`, `The Vanishing Thing`);
      ((K = {
        ...o,
        trick: J,
        title: s,
        who: t.life?.who || t.identity || ``,
        act1: J.card || ``,
        act2: o.option.card,
      }),
        (q = {
          video: null,
          image: null,
          fogged: !1,
          mine: !0,
          title: s,
          who: K.who,
          trick: pe(`「${J.from}」变成了${o.option.name}`, `"${J.from}" became ${o.option.name}`),
          note: e?.plan?.shot?.dedication || o.option.why,
        }),
        ot(`melies`, { title: s, did: q.trick, said: $e || `` }),
        ft?.done && X(ft.done),
        dt.add(`camera`),
        mt());
    } finally {
      U.end({ lookAt: null });
    }
    K && (await jt(K), zt());
  }
  let Tt = null,
    Et = null,
    Dt = (e) => {
      if (e.video) {
        if (!Et) {
          let t = document.createElement(`video`);
          ((t.src = e.video.url),
            (t.muted = !0),
            (t.loop = !0),
            (t.playsInline = !0),
            t.play().catch(() => {}),
            (Et = new ce(t)));
        }
        y.screen.show(Et);
      }
    };
  function Ot() {
    let t = Z.screen,
      n = e.camera,
      r = new V(t.x, t.y, t.z),
      i = Zr.from.clone().sub(Zr.at).setY(0).normalize(),
      a = new V(-i.z, 0, i.x),
      o = Math.tan(H.degToRad(n.fov) / 2),
      s = o * n.aspect,
      c = n.aspect < 1,
      l = Math.min(8.4, Math.max(t.w / ((c ? 0.92 : 0.46) * 2 * s), t.h / ((c ? 0.6 : 0.66) * 2 * o))),
      u = r.clone().addScaledVector(i, l).setY(2.6),
      d = r.clone().setY(t.y - 0.2),
      f = (e, t) =>
        u
          .clone()
          .addScaledVector(i, -e)
          .addScaledVector(a, Math.sign(t) * Math.min(Math.abs(t) * e * s, 0.95));
    return { from: u, at: d, visitor: f(l * 0.6, 0.72), melies: f(l * 0.5, -0.72) };
  }
  let kt = { k: 0 },
    At = (e, t) =>
      new Promise((n) => {
        ue.to(kt, { k: e, duration: t, ease: `sine.inOut`, onUpdate: () => y.dim(kt.k), onComplete: n });
      });
  async function jt(t) {
    (U.begin(), (S.group.visible = !1), be(!0, { dark: !0, accent: xe.melies.sepia }));
    let n = (t, n) =>
      new Promise((r) =>
        ue.to(e.finish.uniforms.uFade, { value: t, duration: n, ease: `power2.inOut`, onComplete: r }),
      );
    try {
      await n(1, 0.45);
      let e = Ot();
      (w.place(e.visitor.x, e.visitor.z, -Math.PI / 2),
        T.object.position.set(e.melies.x, 0, e.melies.z),
        (T.object.rotation.y = -Math.PI / 2),
        (F = null),
        O.frame(e.from, e.at, { cut: !0, fit: !1 }),
        (Tt ||= new l(Ve.canvas)));
      let i = Tt;
      (Ve.still(t),
        (i.needsUpdate = !0),
        y.screen.show(i),
        ue.killTweensOf(kt),
        (kt.k = 0.45),
        y.dim(0.45),
        await n(0, 0.6),
        At(1, 1.8),
        await B([un[r].intro]));
      let a = await Ve.screen(t, {
        onFrame: () => {
          i.needsUpdate = !0;
        },
        record: !t.video,
      });
      (a.video && !t.video && ((t.video = a.video), q && (q.video = a.video)),
        Dt(t),
        (W.happened.film = !0),
        ut(),
        $e && W.ask(`farewell`),
        await p(400),
        await ae([$e ? pn[r].after($e) : un[r].after]),
        ft?.status === `developing` && (await Rt(t, { patience: rt() })),
        await At(0, 1.4));
    } finally {
      (kt.k > 0 && (ue.killTweensOf(kt), (kt.k = 0), y.dim(0)),
        be(!0, { accent: xe.melies.curtain }),
        (S.group.visible = !0),
        T.object.position.set(Z.melies.x, 0, Z.melies.z),
        U.end({ lookAt: null }));
    }
  }
  async function Mt(e, t) {
    let n = S.developing(`mine`);
    ft = { status: `developing`, handle: n };
    let r = e?.id ? await Te.shot(e.id, t) : null;
    if (!r?.id) {
      ((ft.status = `failed`), n.remove(), Nt());
      return;
    }
    ft.id = r.id;
    let i = Date.now();
    for (let e = r; ;) {
      if (e?.status === `done`) {
        ((ft.status = `done`), (ft.done = e), X(e));
        return;
      }
      if (e?.status === `failed` || Date.now() - i > 24e4) {
        ((ft.status = `failed`), n.remove(), Nt());
        return;
      }
      (await p(2500), (e = await Te.shotStatus(r.id)));
    }
  }
  function X(e) {
    q &&
      ((q.image = Te.media(e.image)),
      e.dedication && (q.note = e.dedication),
      ft.handle?.reveal(q.image, { ...q, mine: !0 }),
      P.open_ && !Ft && ((Ft = !0), Vt(), B([un[r].brush])),
      P.open_ && P.open(q, { onClosed: Gt }),
      It && Ut());
  }
  function Nt() {
    q && ((q.fogged = !0), P.open_ && P.open(q, { onClosed: Gt }), It && Ut());
  }
  function Pt() {
    q && (N.setBusy(!0), P.open(q, { onClosed: Gt }));
  }
  let Ft = !1,
    It = !1;
  async function Rt(e, { patience: t = !1 } = {}) {
    let n = e.frames[Math.max(0, (e.cutAt || e.frames.length) - 3)];
    if (!n || !Tt) return;
    let i = Ve.tint(n, {
      onFrame: () => {
        Tt.needsUpdate = !0;
      },
    });
    (y.screen.show(Tt), B([un[r].tint]));
    let a = performance.now(),
      o = t ? 32e3 : 12e3,
      s = !1;
    for (; ft?.status === `developing` && performance.now() - a < o;)
      (t && !s && performance.now() - a > 12e3 && ((s = !0), B([un[r].patience])), await p(300));
    ft?.status === `done` && q?.image ? await i.finish(q.image) : (i.stop(), Dt(e));
  }
  function zt() {
    if (q) {
      if (Ft || !ft || ft.status !== `developing`) {
        Ht();
        return;
      }
      ((It = !0), ae([un[r].poster]));
    }
  }
  let Bt = () => {
    (wn.bell(1), De.sparkle(), navigator.vibrate?.([18, 40, 18]), Se($r));
  };
  function Vt() {
    q.tint = {
      voila: un[r].reveal,
      done: () => {
        (delete q.tint, Bt(), B([un[r].reveal]));
      },
    };
  }
  function Ht() {
    (Ft || ((Ft = !0), q.image ? (Vt(), B([un[r].brush])) : (Bt(), B([un[r].fogged]))), Pt());
  }
  function Ut() {
    if (!Ft) {
      if (G || se || ke.running || $t.isOpen || P.open_ || pt) {
        setTimeout(Ut, 700);
        return;
      }
      ((Ft = !0),
        c.toast(q?.image ? un[r].ready : un[r].fogged),
        ae([q?.image ? un[r].ready : un[r].fogged]).then(() => {
          (q?.image ? Vt() : Bt(), Pt());
        }));
    }
  }
  let Wt = !1;
  function Gt() {
    (N.setBusy(!1), !(Wt || dt.has(`medal`) || rt()) && ((Wt = !0), ae([un[r].more])));
  }
  async function Kt() {
    let e = on.medal,
      t = (await g(500))?.plan?.beats?.medal;
    (f.prefetch([...e.lines[r], t].filter(Boolean)), ut(), U.begin());
    try {
      let n = ve(`medal`);
      (w.faceToward(n.x, n.z), (F = n), U.shoot(n), W.pending(`medal`) && f.reply(u).think(pn[r].hm));
      let i = (await W.now(`medal`))?.line;
      (await B([i, e.lines[r][0]].filter(Boolean)),
        await Ue.rub({ onProgress: (e) => Ue.set(e) }),
        Ue.set(1.25),
        De.sparkle(),
        x.stars(new V(n.x, 0, n.z), { count: 24 }),
        setTimeout(
          () =>
            ue.to(
              { k: 1.25 },
              {
                k: 1,
                duration: 1.4,
                onUpdate() {
                  Ue.set(this.targets()[0].k);
                },
              },
            ),
          400,
        ),
        dt.add(`medal`),
        mt(),
        (W.happened.medal = !0),
        await B([e.lines[r][1]]),
        t && (await Ce([t])));
    } finally {
      U.end({ lookAt: Tn() });
    }
  }
  let qt = { screen: xt, camera: wt, medal: Kt },
    Jt = {},
    Yt = (e) => async () => {
      if (!(G || ke.running)) {
        G = !0;
        try {
          await e();
        } catch (e) {
          (console.error(`melies beat`, e), U.reset());
        } finally {
          G = !1;
        }
      }
    };
  for (let e of Object.keys(qt)) {
    let t = Wr[e],
      n = e === `screen` ? y.screen.mesh : y.props[Ur[e]];
    Jt[e] = N.add({
      id: e,
      position: new V(t.x, 0, t.z),
      radius: t.radius,
      labelHeight: t.labelHeight,
      standAt: new V(t.stand.x, 0, t.stand.z),
      label: () =>
        e === `camera` && K ? pe(`再放一遍你的片子`, `Show your film again`) : (dt.has(e) ? `✓ ` : ``) + on[e].label[r],
      done: () => dt.has(e) && !(e === `camera` && K),
      meshes: n ? [n] : void 0,
      activate: Yt(qt[e]),
    });
  }
  for (let e of sn) {
    let t = Wr[e.id],
      n = y.props[Ur[e.id]];
    N.add({
      id: e.id,
      position: new V(t.x, 0, t.z),
      radius: t.radius,
      labelHeight: t.labelHeight,
      aside: !0,
      label: () => e.label[r],
      meshes: n ? [n] : void 0,
      activate: Yt(async () => {
        let t = ve(e.id);
        U.begin();
        try {
          (w.faceToward(t.x, t.z), (F = t), U.shoot(t), De.chime(), await B(e.lines[r]));
        } finally {
          U.end({ lookAt: Tn() });
        }
      }),
    });
  }
  let Xt =
      r === `en`
        ? [`Any regrets?`, `Why hit the moon in the eye?`, `A word for me?`]
        : [`你后悔过吗？`, `月亮为什么被打中眼睛？`, `送我一句话吧`],
    Zt = [],
    Qt = null,
    $t = Ge(document.getElementById(`ui`), {
      chips: Xt,
      voice: f,
      role: `melies`,
      onAsk: async (e, { signal: n, begin: i }) => {
        let a = {
          ...(m?.id
            ? { visit: m.id }
            : { space: `melies`, lang: r, avatar: t.avatar, identity: t.identity, note: t.note, life: t.life }),
          text: e,
          history: Zt.slice(-8),
          voice: !f.muted,
          journey: He(`melies`),
        };
        (Zt.push({ role: `you`, text: e }), ne(), T.play?.(`look-around`));
        let o = await et({
          voice: f,
          who: u,
          role: `melies`,
          signal: n,
          fallback:
            r === `en`
              ? `Ah — the film jammed in my head. Ask me again in a moment?`
              : `啊——我脑子里的胶片卡住了。过一会儿再问我一次？`,
          onBegin: () => {
            (i(), T.stopGesture?.(), ne());
          },
          ask: async (e) => (await Te.chatStream(a, e)) ?? Te.chat(a).then((t) => (Qe(t?.reply).forEach(e.onLine), t)),
        });
        return (o.reply && Zt.push({ role: `me`, text: o.reply }), o);
      },
      onClose: () => {
        (N.setBusy(!1), Qt && ((Qt = null), O.release()), ut());
      },
      onLeave: ({ cut: e, to: t }) => {
        (e && f.stop(), ne(), T.stopGesture?.());
        let n = e || t === `thing` ? null : $t.letGo();
        n && f.say(u, [n]);
      },
    });
  (N.add({
    id: `melies`,
    position: new V(Z.melies.x, 0, Z.melies.z),
    radius: 2,
    labelHeight: 2.2,
    aside: !0,
    label: () => pe(`和梅里爱聊聊`, `Talk to Méliès`),
    meshes: [T.object],
    activate: () => {
      let e = T.object.position,
        t = w.position;
      (ne(),
        N.setBusy(!0),
        w.faceToward(e.x, e.z),
        (Qt = U.talkShot() ? { x: t.x, z: t.z } : null),
        Qt && (O.yaw = Math.atan2(t.x - e.x, t.z - e.z)),
        $t.open());
    },
  }),
    E.then(() => {
      N.items.find((e) => e.id === `melies`).meshes = [T.object];
    }),
    Te.wall(`melies`).then((e) => {
      e?.items?.length && S.setItems(e.items.map((e) => ({ ...e, image: Te.media(e.image) })));
    }));
  let tn = new z(),
    nn = new L({ color: `#3c4a3f`, roughness: 0.55, metalness: 0.2 }),
    dn = new L({ color: `#fff3d6`, emissive: `#ffe2a8`, emissiveIntensity: 1.3 });
  for (let e of [-0.53, 0.53]) {
    let t = new A(new _(1.02, 2.5, 0.08), nn);
    t.position.set(e, 1.25, 0);
    let n = new A(new I(0.72, 1.35), dn);
    (n.position.set(e, 1.6, -0.045), (n.rotation.y = Math.PI));
    let r = new A(new ie(0.04, 10, 8), new L({ color: `#d6ad55`, metalness: 0.9, roughness: 0.3 }));
    (r.position.set(e - Math.sign(e) * 0.4, 1.15, -0.07), tn.add(t, n, r));
  }
  (tn.position.set(0, 0, Y.l / 2 - 0.08), e.scene.add(tn));
  let fn = fe(document.body),
    _n = N.add({
      id: `door`,
      position: new V(0, 0, Y.l / 2 - 0.9),
      radius: 1.8,
      labelHeight: 2.4,
      label: () => pe(`回到人生广场`, `Back to the Life Plaza`),
      activate: async () => {
        if (pt) return;
        ((pt = !0), f.stop(), We.close());
        let e = K ? W.got(`farewell`)?.farewell || m?.plan?.farewell || mn.after[r] : mn.early[r];
        (U.begin(),
          w.faceToward(T.object.position.x, T.object.position.z),
          ne(),
          U.shoot(U.face(), { person: !0 }),
          T.play?.(`wave`),
          await f.say(u, [e]));
        let t = Object.values(st).find((e) => e.open && e.id !== `melies` && !at()[e.id]);
        (t && (await f.say(gn.guide[r], [gn.next[r](t.short)], { role: `guide` })), await fn.close(1e3));
        try {
          sessionStorage.setItem(`lp.iris`, `1`);
        } catch {}
        location.href = `/life-learn/?go=plaza&from=melies`;
      },
    });
  c.onExit(() => _n.activate());
  let vn = async (e) => {
      if (!pt) {
        ((pt = !0), f.stop(), We.close(), D.setEnabled(!1), await fn.close(900));
        try {
          sessionStorage.setItem(`lp.iris`, `1`);
        } catch {}
        location.href = `/life-learn/?go=${e}`;
      }
    },
    xn = !0,
    Sn = it(s, {
      lives: Object.values(je({ xiyou: !0 })),
      here: `melies`,
      blocked: () => pt || P.open_ || $t.isOpen,
      onOpen: () => {
        ((xn = D.state.enabled), D.setEnabled(!1));
      },
      onClose: () => {
        pt || D.setEnabled(xn);
      },
      onGo: (e) => vn(e),
      onPlaza: () =>
        se || ke.running || document.body.classList.contains(`in-scene`) ? vn(`plaza&from=melies`) : _n.activate(),
    });
  (c.onAtlas(() => Sn.toggle()), Re(`melies`));
  let Cn = () =>
      !dt.has(`screen`) && !K
        ? `screen`
        : K
          ? !dt.has(`medal`) && (!rt() || (It && !Ft))
            ? `medal`
            : `door`
          : `camera`,
    Tn = () => {
      let e = Cn(),
        t = e === `door` ? { x: 0, z: Y.l / 2 - 0.9 } : Wr[e].stand;
      return new V(t.x, 0, t.z);
    };
  N.setGuide(() => {
    if (ke.running || $t.isOpen || P.open_ || se || pt) return null;
    if (G) return { hold: !0 };
    let e = Cn();
    return e === `door`
      ? { item: _n, label: pe(`回到人生广场`, `Back to the Life Plaza`) }
      : { item: Jt[e], label: on[e].label[r] };
  });
  let En = new A(new oe(0.28, 0.5, 48), new re({ color: `#ffd27a`, transparent: !0, opacity: 0, depthWrite: !1 }));
  ((En.rotation.x = -Math.PI / 2), e.scene.add(En));
  let Dn = new d(),
    On = new n(new V(0, 1, 0), 0),
    kn = new V(),
    An = (e) => (
      (On.constant = -Y.stageH),
      e.intersectPlane(On, kn) && kn.z < Y.stageZ
        ? kn
        : ((On.constant = 0), e.intersectPlane(On, kn) ? (kn.z < Y.stageZ && (kn.z = Y.stageZ - 0.4), kn) : null)
    );
  (D.onTap((t, n) => {
    if ((y.screen.start(), P.open_ || ke.running || $t.swallow())) return;
    let r = o.getBoundingClientRect();
    if (
      (Dn.setFromCamera(new R(((t - r.left) / r.width) * 2 - 1, -((n - r.top) / r.height) * 2 + 1), e.camera),
      $t.isOpen)
    ) {
      if (Dn.intersectObject(T.object, !0).length) return;
      let e =
          Dn.intersectObjects(
            [...N.items.filter((e) => e.id !== `melies` && e.meshes).flatMap((e) => e.meshes), ...S.meshes()],
            !0,
          ).length > 0,
        r = An(Dn.ray),
        i = T.object.position,
        a = w.position;
      if (
        !(e || (r && Math.hypot(r.x - i.x, r.z - i.z) >= Gr && Math.hypot(r.x - a.x, r.z - a.z) >= Kr)) ||
        !$t.leave({ to: e ? `thing` : `floor` })
      ) {
        r && !e && (w.walkPath(M(w.position, r)), c.ripple(t, n));
        return;
      }
    }
    if (N.tap(t, n)) return;
    let i = Dn.intersectObjects(S.meshes(), !0)[0];
    if (i) {
      let e = S.frameOf(i.object);
      if (e?.item) {
        if (e.item.mine && q) {
          Pt();
          return;
        }
        (N.setBusy(!0),
          P.open(
            {
              image: e.item.image,
              title: e.item.title,
              trick: e.item.identity ? `${pe(`主演`, `Starring`)}：${e.item.identity}` : ``,
              note: ``,
            },
            { onClosed: () => N.setBusy(!1) },
          ));
        return;
      }
    }
    An(Dn.ray) && (w.walkPath(M(w.position, kn)), c.ripple(t, n));
  }),
    window.addEventListener(`pointerdown`, () => y.screen.start(), { once: !0 }),
    y.screen.start());
  let jn = De.projector(),
    Pn = new V(),
    Fn = new V(),
    In = !1,
    Ln = !1,
    Rn = performance.now(),
    zn = 0;
  e.onUpdate((t, n) => {
    let r = ke.lens.active,
      i = r ? ke.lens.step(t) : t;
    ((zn += i), D.setControls(!(P.open_ || ke.running || pt || se)));
    let a = P.open_ ? { x: 0, y: 0 } : D.readMove();
    if (
      (!In && (a.x || a.y) && ((In = !0), setTimeout(() => c.hideHint(), 4e3)),
      w.update(i, r ? { x: 0, y: 0 } : a, O.yaw, D.running()),
      $t.walk(t, { move: a, yaw: O.yaw, at: w.position, host: T.object.position, far: qr }),
      Qt &&
        (D.state.dragging || Math.hypot(w.position.x - Qt.x, w.position.z - Qt.z) > Jr) &&
        ((Qt = null), O.release()),
      F && !ke.running)
    ) {
      let e = Math.atan2(F.x - T.object.position.x, F.z - T.object.position.z) - T.object.rotation.y;
      ((e = Math.atan2(Math.sin(e), Math.cos(e))), (T.object.rotation.y += e * (1 - Math.exp(-t * 4))));
    }
    (T.setMotion(0, i),
      O.update(t, w, D),
      N.update(),
      y.update(i, zn),
      ke.update(i),
      Fn.copy(w.position).setY(w.position.y + 1.5),
      S.update(n, { from: e.camera.position, to: Fn }, t),
      x.update(i),
      Pn.set(Z.projector.x, 0, Z.projector.z),
      jn.setNear(Math.max(0, 1 - w.position.distanceTo(Pn) / 6)));
    let o = !se && !G && !ke.running ? Tn() : null;
    (o && En.position.set(o.x, Lt(o.x, o.z) + 0.015, o.z),
      (En.material.opacity +=
        ((o && !P.open_ ? 0.55 + Math.sin(n * 3) * 0.2 : 0) - En.material.opacity) * (1 - Math.exp(-t * 5))),
      En.scale.setScalar(1 + Math.sin(n * 3) * 0.06),
      !Ln &&
        performance.now() - Rn > 1800 &&
        ((Ln = !0),
        Vn().catch((e) => {
          (console.error(`greeting`, e), U.reset());
        })));
  });
  let Bn = ([e, t], n) =>
    new Promise((r) => {
      let i = document.createElement(`div`);
      ((i.className = `mf-title`),
        (i.innerHTML = `<b></b><span></span>`),
        (i.querySelector(`b`).textContent = e),
        (i.querySelector(`span`).textContent = t),
        s.appendChild(i),
        requestAnimationFrame(() => i.classList.add(`show`)),
        setTimeout(() => {
          (i.classList.remove(`show`),
            setTimeout(() => {
              (i.remove(), r());
            }, 480));
        }, n));
    });
  async function Vn() {
    (await E,
      (G = !0),
      await new Promise((e) => {
        let t = performance.now(),
          n = () =>
            document.getElementById(`boot`)?.classList.contains(`gone`) !== !1 || performance.now() - t > 6e3
              ? e()
              : setTimeout(n, 120);
        n();
      }),
      Se($r));
    let e = Bn(gn.card[r], 3e3),
      t = await g(2500);
    await e;
    let n = cn[r],
      i = [n.hello, t?.plan?.greeting || n.alone, n.go];
    (f.prefetch(i), (G = !0), U.begin());
    try {
      (w.faceToward(T.object.position.x, T.object.position.z),
        ne(),
        U.shoot(U.face(), { person: !0 }),
        T.play?.(`wave`),
        await f.say(u, i.slice(0, 1)),
        U.talkShot(),
        await tt(f, u, v, { role: `melies`, hm: pe(`Tiens……`, `Tiens…`), after: i.slice(1) }));
    } finally {
      ((G = !1), U.end({ lookAt: Tn() }));
    }
    c.coach();
  }
  let Hn = {
    overview: [
      [0.5, 2.3, 10.2],
      [0, 1.5, -4],
    ],
    stage: [
      [0.3, 1.7, -1.6],
      [-0.2, 2.9, -9.5],
    ],
    moon: [
      [0.2, 2.3, -4.9],
      [-0.4, 3.6, -9],
    ],
    left: [
      [2.6, 1.8, 9.2],
      [-3.2, 1.3, 2.5],
    ],
    right: [
      [-2.6, 1.8, 9.2],
      [3.2, 1.3, 1.8],
    ],
    melies: [
      [-0.6, 1.55, 0.4],
      [-0.9, 1.45, -1.7],
    ],
    screen: [
      [0.8, 1.9, 6.4],
      [-4.1, 2.2, 5.2],
    ],
    line: [
      [0.2, 2, 7.6],
      [0, 2.1, 4.3],
    ],
    side: [Qr.from.toArray(), Qr.at.toArray()],
    wingRight: [
      [-1.2, 2, -1],
      [3.6, 1.2, -5.2],
    ],
    wingLeft: [
      [1.4, 2, -1],
      [-3.6, 1.2, -5.2],
    ],
  };
  return {
    studio: y,
    player: w,
    cam: O,
    interactions: N,
    voice: f,
    act: ke,
    dry: S,
    crank: we,
    shot: (e) => {
      if (!e || !Hn[e]) return (O.release(), `released`);
      let [t, n] = Hn[e];
      return (O.frame(new V(...t), new V(...n), { fit: e !== `side` }), e);
    },
    ready: E,
    debug: {
      get state() {
        return {
          heard: [...dt],
          film: !!K,
          video: !!K?.video,
          shot: ft?.status || null,
          card: q,
          trick: J,
          wished: $e,
          busy: G,
          running: ke.running,
          quick: rt(),
          directed: { wish: W.got(`wish`), practice: W.got(`practice`), medal: W.got(`medal`) },
          happened: W.happened,
          title: K?.title || null,
          option: K?.option || null,
        };
      },
      beat: (e) => (e === `door` ? _n : Jt[e])?.activate(),
      preview: (e, t) => ke.preview(e, t),
      look: () => {
        (U.begin(), (S.group.visible = !1));
        let e = ke.look();
        return () => {
          (e(), (S.group.visible = !0), U.end({ lookAt: null }));
        };
      },
      reveal: (e) => {
        ((q = { mine: !0, ...e }), (Ft = !1), Ht());
      },
      screening: () => {
        let e = Ot();
        return (
          w.place(e.visitor.x, e.visitor.z, -Math.PI / 2),
          T.object.position.set(e.melies.x, 0, e.melies.z),
          (T.object.rotation.y = -Math.PI / 2),
          U.begin(),
          (S.group.visible = !1),
          O.frame(e.from, e.at, { cut: !0, fit: !1 }),
          y.dim(1),
          () => {
            (y.dim(0),
              (S.group.visible = !0),
              T.object.position.set(Z.melies.x, 0, Z.melies.z),
              U.end({ lookAt: null }));
          }
        );
      },
    },
  };
}
export { ei as enter };
