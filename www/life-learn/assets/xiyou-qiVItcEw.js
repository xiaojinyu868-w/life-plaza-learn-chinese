import {
  A as e,
  Ar as t,
  B as n,
  L as r,
  La as i,
  Li as a,
  Lt as o,
  Nr as s,
  O as c,
  Qi as l,
  Qt as u,
  Tn as d,
  U as f,
  Wn as p,
  Wr as m,
  Z as h,
  ar as g,
  ba as _,
  ct as v,
  ir as y,
  j as b,
  jr as x,
  jt as ee,
  mr as S,
  no as te,
  or as C,
  pa as ne,
  qi as w,
  qt as T,
  ro as E,
  sn as D,
  ta as O,
  tr as k,
  ya as re,
  z as ie,
  zt as ae,
} from "./three.core-DtjtRha-.js";
import { t as A } from "./gsap-CvDoa17S.js";
import { r as oe, t as se } from "./lifecard-Bz8CsM4Y.js";
import { t as j } from "./i18n-BvGoRVq5.js";
import { i as M, l as N, r as ce, s as le, t as ue, u as de } from "./assets-p2qy6QaX.js";
import { d as fe, n as pe } from "./stamp-C8irYyoR.js";
import { o as P } from "./sky-6JFrQaA8.js";
import { a as F, i as me, r as he, s as ge, t as _e } from "./visits-C_j5CG_Y.js";
import {
  A as ve,
  C as ye,
  D as be,
  E as xe,
  M as Se,
  N as Ce,
  O as we,
  P as Te,
  S as Ee,
  _ as De,
  b as Oe,
  f as ke,
  g as Ae,
  h as je,
  i as Me,
  j as Ne,
  k as Pe,
  l as Fe,
  o as Ie,
  r as Le,
  t as Re,
  v as ze,
  w as Be,
  x as Ve,
  y as He,
} from "./journey-BS70xIEy.js";
import { t as Ue } from "./direct-B4OdUEHl.js";
import { a as I, n as We, o as L } from "./sky-CUyBFZaE.js";
function Ge(e, { count: t = 30, leaves: n = 6, radius: r = 9, top: i = 7 } = {}) {
  let a = new x(0.06, 0.045, 1, 1);
  {
    let e = a.attributes.position;
    for (let t = 0; t < e.count; t += 1) e.setZ(t, Math.abs(e.getX(t)) * 0.25);
    a.computeVertexNormals();
  }
  let o = new S({ roughness: 0.8, side: 2 }),
    s = t + n,
    c = new D(a, o, s);
  c.frustumCulled = !1;
  let l = L(303),
    u = [],
    d = [`#e7b7b0`, `#ecc4bd`, `#dfa9a5`].map((e) => new f(e)),
    p = [`#a8bf8a`, `#8fa877`].map((e) => new f(e));
  for (let e = 0; e < s; e += 1) {
    let n = e >= t;
    (u.push({
      x: (l() - 0.5) * 2 * r,
      y: l() * i,
      z: (l() - 0.5) * 2 * r,
      ph: l() * 6.28,
      sp: 0.22 + l() * 0.16,
      spin: 1 + l() * 2,
      s: n ? 1.5 : 0.8 + l() * 0.5,
    }),
      c.setColorAt(e, n ? p[e % 2] : d[e % 3]));
  }
  ((c.instanceColor.needsUpdate = !0), e.add(c));
  let h = new y(),
    g = new m(),
    _ = new ee(),
    v = new E(),
    b = new E();
  return {
    mesh: c,
    update(e, t, n) {
      for (let a = 0; a < s; a += 1) {
        let o = u[a];
        ((o.y -= o.sp * e),
          o.y < 0.02 &&
            ((o.y = i * (0.7 + l() * 0.3)), (o.x = n.x + (l() - 0.5) * 2 * r), (o.z = n.z + (l() - 0.5) * 2 * r)));
        let s = Math.sin(t * 1.3 + o.ph) * 0.35;
        (b.set(o.x + s, o.y, o.z + Math.cos(t * 1.1 + o.ph) * 0.25),
          _.set(t * o.spin + o.ph, t * 0.7 + o.ph, s),
          g.setFromEuler(_),
          v.setScalar(o.s),
          c.setMatrixAt(a, h.compose(b, g, v)));
      }
      c.instanceMatrix.needsUpdate = !0;
    },
  };
}
var R = [
    [0.59719, 0.35458, 0.04823],
    [0.076, 0.90834, 0.01566],
    [0.0284, 0.13383, 0.83777],
  ],
  Ke = [
    [1.60475, -0.53108, -0.07367],
    [-0.10208, 1.10813, -0.00605],
    [-0.00327, -0.07276, 1.07602],
  ],
  qe = (e, t) => e.map((e) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2]),
  z = (e) => (e * (e + 0.0245786) - 90537e-9) / (e * (0.983729 * e + 0.432951) + 0.238081),
  Je = (e, t) =>
    qe(
      Ke,
      qe(
        R,
        e.map((e) => (e * t) / 0.6),
      ).map(z),
    ).map((e) => Math.min(Math.max(e, 0), 1));
function Ye(e, t = 0.97) {
  let n = new f(e),
    r = [n.r, n.g, n.b],
    i = r.slice();
  for (let e = 0; e < 400; e += 1) {
    let e = Je(i, t);
    i = i.map((t, n) => Math.min(Math.max(t + (r[n] - e[n]) * 0.8, 0), 12));
  }
  return new f().setRGB(i[0], i[1], i[2], p);
}
function Xe(e, t = `#f3e2d2`) {
  return new O({
    uniforms: {
      uLit: { value: Ye(`#fbecdc`) },
      uShadow: { value: Ye(`#d6c5de`) },
      uRim: { value: new f(`#ffdcb4`) },
      uDir: { value: e },
      uHaze: { value: Ye(t) },
      uFar: { value: 260 },
    },
    vertexShader: `varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform vec3 uLit, uShadow, uRim, uDir, uHaze; uniform float uFar; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 N = normalize(vN), L = normalize(uDir);
        float sun = dot(N, L) * 0.5 + 0.5, up = N.y * 0.5 + 0.5;
        vec3 c = mix(uShadow, uLit, smoothstep(0.2, 0.95, sun * 0.6 + up * 0.55));
        vec3 V = normalize(cameraPosition - vW);
        float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 3.0);
        c += uRim * rim * (0.25 + 0.75 * max(dot(-V, L), 0.0)) * 0.5;
        c = mix(c, uHaze, smoothstep(40.0, uFar, length(cameraPosition - vW)) * 0.75);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}
function Ze(e, t, n, r) {
  let i = [];
  for (let r = 0; r < t; r += 1) {
    let a = new u(1, 2);
    (a.deleteAttribute(`normal`), a.deleteAttribute(`uv`), (a = de(a)));
    let o = (0.45 + e() * 0.45) * n,
      s = t > 1 ? r / (t - 1) - 0.5 : 0;
    (a.scale(o * 1.5, o * 0.7, o * (0.9 + e() * 0.3)),
      a.translate(s * t * 0.7 * n, (1 - Math.abs(s) * 1.6) * 0.3 * o, (e() - 0.5) * 0.6 * n),
      i.push(a));
  }
  let a = N(i);
  return (a.computeVertexNormals(), a);
}
function Qe(e, t) {
  let n = new T();
  n.name = `clouds`;
  let r = Xe(t),
    i = L(515),
    a = [],
    o = (e, t, o, s, c, l) => {
      let u = new g(Ze(i, s, c), r);
      (u.position.set(e, t, o),
        (u.rotation.y = i() * 6.28),
        (u.userData.noAO = !0),
        n.add(u),
        a.push({ m: u, x: e, z: o, sp: l, a: Math.atan2(o, e), rad: Math.hypot(e, o) }));
    };
  for (let e = 0; e < 16; e += 1) {
    let t = (e / 16) * Math.PI * 2 + i() * 0.3,
      n = 18 + i() * 34;
    o(Math.cos(t) * n, -14 - i() * 6, Math.sin(t) * n, 5, 7 + i() * 5, 0.008);
  }
  for (let [e, t, n, r] of [
    [-34, 9, -40, 4.5],
    [30, 15, -52, 5],
    [-52, 20, 6, 4],
    [44, 7, 16, 3.5],
    [8, 26, -70, 6],
  ])
    o(e, t, n, 4, r, 0.012);
  for (let e = 0; e < 10; e += 1) {
    let t = -Math.PI / 2 + (e / 9 - 0.5) * 2.6,
      n = 150 + i() * 30;
    o(Math.cos(t) * n, -9 + i() * 6, Math.sin(t) * n, 6, 16 + i() * 8, 0.002);
  }
  return (
    e.add(n),
    {
      group: n,
      material: r,
      update(e) {
        for (let t of a)
          ((t.a += t.sp * e), (t.m.position.x = Math.cos(t.a) * t.rad), (t.m.position.z = Math.sin(t.a) * t.rad));
      },
    }
  );
}
function $e(t, n) {
  L(t);
  let r = [],
    i = new u(1, 2);
  (i.deleteAttribute(`normal`), i.deleteAttribute(`uv`), (i = de(i)));
  {
    let e = i.attributes.position,
      r = new E();
    for (let i = 0; i < e.count; i += 1) {
      r.fromBufferAttribute(e, i);
      let a = 1 + (I(r.x * 1.6 + t, r.y * 1.6, r.z * 1.6) - 0.5) * 0.3;
      e.setXYZ(i, r.x * n * a, Math.max(r.y, -0.2) * n * 0.45 * a, r.z * n * a * 0.9);
    }
  }
  r.push(i);
  let a = new h(n * 0.95, n * 2.1, 9, 3);
  (a.deleteAttribute(`normal`),
    a.deleteAttribute(`uv`),
    (a = de(a)),
    a.rotateX(Math.PI),
    a.translate(0, -n * 1.05 - n * 0.05, 0));
  {
    let e = a.attributes.position,
      n = new E();
    for (let r = 0; r < e.count; r += 1) {
      n.fromBufferAttribute(e, r);
      let i = 1 + (I(n.x * 0.9 + t, n.y * 0.9, n.z * 0.9) - 0.5) * 0.35;
      e.setXYZ(r, n.x * i, n.y, n.z * i);
    }
  }
  r.push(a);
  let o = N(r);
  o.computeVertexNormals();
  let s = o.attributes.position,
    c = o.attributes.normal,
    l = new Float32Array(s.count * 3),
    d = new f(),
    p = new f(`#e2c49a`),
    m = new f(`#b9997c`),
    _ = new f(`#9c8470`),
    v = new f(`#8fa877`);
  for (let e = 0; e < s.count; e += 1) {
    let r = s.getY(e) / n,
      i = c.getY(e);
    (d.copy(r > -0.15 ? p : m).lerp(_, k.clamp(-r / 2.2, 0, 1) * 0.6),
      i > 0.55 && r > -0.1 && d.lerp(v, 0.75 * k.smoothstep(I(s.getX(e) * 0.5 + t, 2, s.getZ(e) * 0.5), 0.3, 0.6)),
      l.set([d.r, d.g, d.b], e * 3));
  }
  o.setAttribute(`color`, new e(l, 3));
  let y = new g(o, new S({ vertexColors: !0, roughness: 0.95 }));
  return ((y.userData.noAO = !0), y);
}
function et(e, { pine: t = null } = {}) {
  let n = new T();
  n.name = `islets`;
  let r = [
    [-46, 9, -58, 3.2],
    [38, 4, -66, 2.6],
    [-70, -3, -18, 2.2],
    [64, 12, -24, 2.8],
    [8, 18, -96, 3.6],
  ].map(([e, r, i, a], o) => {
    let s = new T();
    return (
      s.add($e(40 + o * 7, a)),
      s.position.set(e, r, i),
      (s.rotation.y = o * 1.7),
      n.add(s),
      t && t(s, a * 0.9).catch(() => {}),
      { g: s, y: r, ph: o * 1.3 }
    );
  });
  return (
    e.add(n),
    {
      group: n,
      update(e) {
        for (let t of r) t.g.position.y = t.y + Math.sin(e * 0.22 + t.ph) * 0.6;
      },
    }
  );
}
var B = Object.freeze({ r: 13.2, walk: 11.7 }),
  V = Object.freeze({ x: 0, z: -4.7, rx: 4.3, ry: 3.4, rz: 3.6, top: 3.1 }),
  H = Object.freeze({
    spawn: { x: 0.5, z: 9.7, h: Math.PI },
    head: new E(0, 0.84, -0.62),
    headStand: { x: 0.1, z: 0.62 },
    stone: { x: 0, z: -4.8 },
    sealStand: { x: 0.66, z: -3.72 },
    away1: { x: 2.4, z: 3.3 },
    away2: { x: 0.9, z: 7.3 },
    exit: { x: -0.6, z: 11.1 },
  }),
  tt = 0.62,
  U = Object.freeze([`唵`, `嘛`, `呢`, `叭`, `咪`, `吽`]),
  nt = [
    new E(2.35, 0, -0.45),
    new E(3.5, 0.55, -1.6),
    new E(3.92, 1.35, -3.05),
    new E(3.3, 2.3, -4.3),
    new E(1.72, V.top, -4.3),
  ],
  rt = [
    { x: -4.45, z: -3.3, h: 5, r: 1.1, lean: 0.4, n: 2 },
    { x: -2.75, z: -7.2, h: 9, r: 1.1, lean: 0.1, n: 3, pine: [0.5, 0.62] },
    { x: -0.35, z: -8.1, h: 10.6, r: 1.2, lean: 0.04, n: 3 },
    { x: 2.1, z: -7.65, h: 9.4, r: 1.1, lean: 0.1, n: 3, pine: [2.6, 0.45] },
    { x: 4, z: -6.45, h: 7, r: 0.98, lean: 0.17, n: 3 },
  ],
  it = [
    { x: -2.4, z: -1.9, rx: 1.35, ry: 1.25, rz: 1.15 },
    { x: -3.9, z: -1.35, rx: 0.8, ry: 0.65, rz: 0.75 },
    { x: -1, z: -0.85, rx: 0.5, ry: 0.62, rz: 0.48 },
    { x: 0.98, z: -0.9, rx: 0.48, ry: 0.55, rz: 0.46 },
    { x: 1.55, z: -1.75, rx: 0.85, ry: 0.95, rz: 0.75 },
    { x: -4.6, z: -6.6, rx: 1.5, ry: 1.6, rz: 1.4 },
  ],
  W = (e) => new f(e),
  G = k.smoothstep,
  at = new ie(nt, !1, `centripetal`),
  ot = Array.from({ length: 160 }, (e, t) => {
    let n = t / 159,
      r = at.getPoint(n);
    return { t: n, x: r.x, y: r.y, z: r.z };
  });
function st(e, t) {
  let n = ot[0],
    r = 1 / 0;
  for (let i of ot) {
    let a = (i.x - e) ** 2 + (i.z - t) ** 2;
    a < r && ((r = a), (n = i));
  }
  return { d: Math.sqrt(r), y: n.y, t: n.t };
}
var ct = (e, t) => ((e - V.x) / V.rx) ** 2 + ((t - V.z) / V.rz) ** 2,
  K = (e, t) => ((e - V.x) / 1.7) ** 2 + ((t - V.z) / 1.4) ** 2 < 1,
  lt = 0.56,
  ut = { fallen: !1 };
function dt(e, t) {
  if (ut.fallen) return 0;
  if (K(e, t)) return V.top;
  let n = st(e, t);
  return n.d < 0.6100000000000001 ? n.y : 0;
}
function ft(e, t) {
  if (Math.hypot(e, t) > B.walk) return !1;
  if (ut.fallen) return ct(e, t) > 1.12 ** 2;
  if (K(e, t)) return !0;
  let n = st(e, t);
  return n.d < lt ? !0 : n.d < 1.15 && n.y > 0.42 ? !1 : ct(e, t) > 1.06 ** 2;
}
function pt(e, t) {
  if (ut.fallen) return 0;
  let n = ct(e, t),
    r = n < 1 ? Math.min(V.top, V.ry * Math.sqrt(1 - n)) : 0;
  return Math.max(r, dt(e, t));
}
function q(
  t,
  n,
  r,
  {
    detail: i = 4,
    seed: a = 1,
    amp: o = 0.13,
    ridge: s = 0.07,
    floor: c = -1,
    palette: l = mt,
    moss: d = 1,
    strata: p = 0,
    cap: m = 0,
  } = {},
) {
  let h = new u(1, i);
  (h.deleteAttribute(`normal`), h.deleteAttribute(`uv`), (h = de(h)));
  let g = h.attributes.position,
    _ = new E();
  for (let e = 0; e < g.count; e += 1) {
    _.fromBufferAttribute(g, e);
    let i = I(_.x * 1.5 + a, _.y * 1.5 + a * 1.7, _.z * 1.5 - a) * 2 - 1,
      l = I(_.x * 3.4 - a, _.y * 3.4, _.z * 3.4 + a) * 2 - 1,
      u = I(_.x * 3.3 + a * 2, _.y * 0.6, _.z * 3.3) - 0.5,
      d = 1 + o * i + o * 0.3 * l + s * u * (1 - Math.abs(_.y) * 0.6),
      f = _.y * n * d;
    ((f *= f > 0 ? 0.72 + 0.28 * (1 - _.y * _.y) : 0.88), g.setXYZ(e, _.x * t * d, Math.max(f, c * n), _.z * r * d));
  }
  h.computeVertexNormals();
  let v = new Float32Array(g.count * 3),
    y = h.attributes.normal,
    b = new f();
  for (let e = 0; e < g.count; e += 1) {
    _.fromBufferAttribute(g, e);
    let t = k.clamp((_.y / n) * 0.5 + 0.5, 0, 1),
      r = y.getY(e),
      i = I(_.x * 2.6 + a, _.y * 2.6, _.z * 2.6 - a),
      o = I(_.x * 4.2 + a, _.y * 0.9, _.z * 4.2);
    (b
      .copy(l.foot)
      .lerp(l.base, G(t, 0.22, 0.72))
      .lerp(l.light, G(t, 0.66, 0.97) * 0.75 + Math.max(0, i - 0.64) * 0.7),
      b.lerp(l.foot, Math.max(0, o - 0.6) * 0.9 * (1 - t * 0.6)),
      p &&
        b.lerp(
          l.dark,
          G(Math.sin(_.y * n * 7 + (I(_.x * 0.9 + a, _.y * 0.4, _.z * 0.9) - 0.5) * 3) * 0.5 + 0.5, 0.7, 0.97) *
            0.17 *
            p,
        ),
      b.lerp(l.dark, Math.max(0, -r - 0.1) * 0.5 + Math.max(0, 0.4 - i) * 0.4));
    let s = Math.max(
      G(r, 0.48, 0.8) * G(I(_.x * 1.4 - a, _.y * 1.4, _.z * 1.4 + 4), 0.32, 0.5) * d,
      G(t - (I(_.x * 3.1 + a, 7, _.z * 3.1) - 0.5) * 0.22, 0.74, 0.86) * m,
    );
    (b.lerp(l.moss, s * 0.92), v.set([b.r, b.g, b.b], e * 3));
  }
  return (h.setAttribute(`color`, new e(v, 3)), h);
}
var mt = { base: W(`#e2c49a`), dark: W(`#a58e78`), light: W(`#ead8b8`), moss: W(`#7e9c6a`), foot: W(`#c9a87e`) },
  ht = { base: W(`#e6cfac`), dark: W(`#ab977f`), light: W(`#ebdcc0`), moss: W(`#8aa673`), foot: W(`#cdb08a`) },
  gt = { base: W(`#cdb391`), dark: W(`#94816f`), light: W(`#dfcaa9`), moss: W(`#6f8d5f`), foot: W(`#b69873`) },
  J = { base: W(`#cfc3b4`), dark: W(`#9f958b`), light: W(`#e0d7cb`), moss: W(`#8fa877`), foot: W(`#b8ab9b`) };
function _t() {
  let e = B.r,
    t = [],
    n = [],
    r = [],
    i = W(`#a8bf8a`),
    a = W(`#7e9c6a`),
    s = W(`#b7c79e`),
    c = W(`#e4d3bd`),
    l = W(`#6f8d5f`),
    u = W(`#a8bf8a`),
    d = [
      [0.5, 11.6],
      [0.3, 8],
      [-0.5, 5],
      [-0.2, 2.4],
      [0.05, 0.7],
    ],
    p = (e, t) => {
      let n = 1 / 0;
      for (let r = 0; r < d.length - 1; r += 1) {
        let [i, a] = d[r],
          [o, s] = d[r + 1],
          c = o - i,
          l = s - a,
          u = k.clamp(((e - i) * c + (t - a) * l) / (c * c + l * l), 0, 1);
        n = Math.min(n, Math.hypot(e - i - c * u, t - a - l * u));
      }
      return n;
    },
    m = new f();
  for (let r = 0; r <= 44; r += 1) {
    let o = e * (r / 44) ** 0.8;
    for (let d = 0; d < 132; d += 1) {
      let f = (d / 132) * Math.PI * 2,
        h = Math.cos(f) * o,
        g = Math.sin(f) * o,
        _ = G(o, B.walk + 0.2, e),
        v = Math.sin(_ * Math.PI) * 0.14 - G(o, e - 0.4, e) * 0.38;
      t.push(h, v, g);
      let y = I(h * 0.3, 0, g * 0.3),
        b = I(h * 1.1 + 7, 1, g * 1.1);
      if (
        (m
          .copy(i)
          .lerp(a, G(y, 0.36, 0.62))
          .lerp(s, G(b, 0.7, 0.9) * 0.45),
        m.lerp(l, G(1.7 - ct(h, g), 0, 0.7) * 0.5),
        m.lerp(c, (1 - G(p(h, g) + (b - 0.5) * 0.25, 0.42, 0.92)) * 0.95),
        m.lerp(u, _ * 0.6),
        n.push(m.r, m.g, m.b),
        r === 0)
      )
        break;
    }
  }
  let h = (e, t) => (e === 0 ? 0 : 1 + (e - 1) * 132 + (t % 132));
  for (let e = 0; e < 44; e += 1)
    for (let t = 0; t < 132; t += 1) {
      if (e === 0) {
        r.push(0, h(1, t + 1), h(1, t));
        continue;
      }
      let n = h(e, t),
        i = h(e, t + 1),
        a = h(e + 1, t),
        o = h(e + 1, t + 1);
      r.push(n, i, a, i, o, a);
    }
  let _ = new b();
  (_.setAttribute(`position`, new o(t, 3)),
    _.setAttribute(`color`, new o(n, 3)),
    _.setIndex(r),
    _.computeVertexNormals());
  let v = new g(_, new S({ vertexColors: !0, roughness: 0.92 }));
  return ((v.receiveShadow = !0), { mesh: v, pathD: p, path: d });
}
function vt() {
  let t = B.r,
    n = new d(
      [
        [0.02, -10.2],
        [0.15, -8.7],
        [0.32, -7],
        [0.5, -5.3],
        [0.68, -3.7],
        [0.83, -2.3],
        [0.93, -1.25],
        [0.985, -0.6],
        [0.995, -0.18],
      ].map(([e, n]) => new te(e * t, n)),
      80,
    ),
    r = n.attributes.position,
    i = new E(),
    a = new Float32Array(r.count * 3),
    o = new f(),
    s = W(`#7c6552`),
    c = W(`#c8a585`),
    l = W(`#ad8d70`),
    u = W(`#d9c2a2`);
  for (let e = 0; e < r.count; e += 1) {
    i.fromBufferAttribute(r, e);
    let t = Math.atan2(i.z, i.x),
      n = I(Math.cos(t) * 2.2 + 5, i.y * 0.45, Math.sin(t) * 2.2 + 5) * 2 - 1,
      d = i.y < -0.5 ? 1 + n * 0.1 : 1;
    r.setXYZ(e, i.x * d, i.y + (i.y < -0.5 ? n * 0.3 : 0), i.z * d);
    let f = Math.sin(i.y * 2.2 + n * 1.5) * 0.5 + 0.5;
    (o
      .copy(c)
      .lerp(l, f)
      .lerp(u, Math.max(0, n) * 0.5),
      i.y > -0.75 && o.lerp(s, 0.8),
      a.set([o.r, o.g, o.b], e * 3));
  }
  (n.computeVertexNormals(), n.setAttribute(`color`, new e(a, 3)));
  let p = new g(n, new S({ vertexColors: !0, roughness: 1 }));
  return ((p.receiveShadow = !0), p);
}
function yt(e, t) {
  let n = new T(),
    r = L(7),
    i = new y(),
    a = new m(),
    s = new E(),
    c = new E(),
    l = new E(0, 1, 0),
    d = (e, n, r = 0.8) =>
      ct(e, n) > 1.25 &&
      t.pathD(e, n) > r &&
      Math.hypot(e, n) < B.r - 0.45 &&
      it.every((t) => Math.hypot(e - t.x, n - t.z) > t.rx + 0.2),
    f = (() => {
      let e = [];
      for (let t = 0; t < 5; t += 1) {
        let n = new b(),
          r = (t / 5) * Math.PI * 2,
          i = Math.cos(r) * 0.05,
          a = Math.sin(r) * 0.05,
          s = 0.15 + (t % 3) * 0.05;
        (n.setAttribute(`position`, new o([i - 0.03, 0, a, i + 0.03, 0, a, i * 2.2, s, a * 2.2 + 0.02], 3)),
          n.setAttribute(`color`, new o([0.3, 0.42, 0.28, 0.3, 0.42, 0.28, 0.62, 0.72, 0.5], 3)),
          e.push(n));
      }
      let t = N(e);
      return (t.computeVertexNormals(), t);
    })(),
    p = e.low ? 650 : 1500,
    h = new D(f, new S({ vertexColors: !0, roughness: 0.9, side: 2 }), p),
    g = 0;
  for (let e = 0; g < p && e < p * 8; e += 1) {
    let e = r() * Math.PI * 2,
      t = Math.sqrt(r()) * (B.r - 0.5),
      n = Math.cos(e) * t,
      o = Math.sin(e) * t;
    !d(n, o, 0.7) ||
      I(n * 0.55, 3, o * 0.55) < 0.42 ||
      (a.setFromAxisAngle(l, r() * 6.28),
      s.setScalar(0.75 + r() * 0.8),
      c.set(n, Math.hypot(n, o) > B.walk ? 0.1 : 0, o),
      h.setMatrixAt(g++, i.compose(c, a, s)));
  }
  ((h.count = g), (h.receiveShadow = !0), n.add(h));
  let _ = q(1, 0.8, 1, {
      detail: 2,
      seed: 4,
      amp: 0.16,
      ridge: 0,
      palette: { base: W(`#7e9c6a`), dark: W(`#5f7f57`), light: W(`#a8bf8a`), moss: W(`#8fa877`), foot: W(`#66845b`) },
      moss: 0,
    }),
    v = new D(_, new S({ vertexColors: !0, roughness: 0.85 }), 26),
    x = new D(new u(0.07, 0), new S({ roughness: 0.6 }), 234),
    ee = [`#e7b7b0`, `#efe6dc`, `#f0c9a2`, `#dba6a6`].map(W),
    te = 0,
    C = 0;
  for (let e = 0; te < v.count && e < 900; e += 1) {
    let e = r() * Math.PI * 2,
      t = 6 + r() * 5.4,
      n = Math.cos(e) * t,
      o = Math.sin(e) * t;
    if (!d(n, o, 1.3) || Math.hypot(n - 0.5, o - 9.7) < 2.2) continue;
    let u = 0.32 + r() * 0.34;
    if (
      (c.set(n, u * 0.35, o),
      a.setFromAxisAngle(l, r() * 6.28),
      s.set(u * (1 + r() * 0.4), u, u * (1 + r() * 0.3)),
      v.setMatrixAt(te++, i.compose(c, a, s)),
      r() < 0.55)
    )
      for (let e = 0; e < 9 && C < x.count; e += 1) {
        let e = r() * Math.PI * 2,
          t = r() * 0.9;
        (c.set(
          n + Math.cos(e) * Math.sin(t) * s.x,
          u * 0.35 + Math.cos(t) * u * 0.78,
          o + Math.sin(e) * Math.sin(t) * s.z,
        ),
          x.setMatrixAt(C, i.compose(c, a.identity(), s.setScalar(0.7 + r() * 0.6))),
          x.setColorAt(C, ee[(n * 7 + o * 3) & 3 ? Math.floor(r() * 4) : 0]),
          (C += 1));
      }
  }
  ((v.count = te), (x.count = C), (v.castShadow = v.receiveShadow = !0), n.add(v, x));
  let ne = new u(0.05, 0);
  ne.scale(1, 0.45, 1);
  let w = new D(ne, new S({ roughness: 0.7 }), e.low ? 180 : 340),
    O = [`#f3ebe0`, `#e7b7b0`, `#ecd0a0`, `#dfa9a7`, `#ebe3d8`, `#c3cbdc`].map(W);
  g = 0;
  for (let e = 0; g < w.count && e < 5e3; e += 1) {
    let e = r() * Math.PI * 2,
      t = Math.sqrt(r()) * (B.r - 0.6),
      n = Math.cos(e) * t,
      o = Math.sin(e) * t;
    !d(n, o, 0.6) ||
      I(n * 0.4 + 9, 2, o * 0.4) < 0.48 ||
      (c.set(n, 0.1 + r() * 0.07 + (Math.hypot(n, o) > B.walk ? 0.1 : 0), o),
      s.setScalar(0.8 + r() * 0.7),
      w.setMatrixAt(g, i.compose(c, a.identity(), s)),
      w.setColorAt(g, O[Math.floor(r() * O.length)]),
      (g += 1));
  }
  ((w.count = g), n.add(w));
  let k = q(1, 0.25, 0.8, { detail: 2, seed: 9, amp: 0.1, ridge: 0, palette: J, moss: 0.4 }),
    re = new D(k, new S({ vertexColors: !0, roughness: 0.9 }), 22),
    ae = new ie(t.path.map(([e, t]) => new E(e, 0, t)));
  for (let e = 0; e < re.count; e += 1) {
    let t = ae.getPoint(0.02 + (e / re.count) * 0.9),
      n = 0.26 + r() * 0.08;
    (c.set(t.x + (r() - 0.5) * 0.3, 0.012, t.z),
      a.setFromAxisAngle(l, r() * 6.28),
      s.set(n, 0.18, n),
      re.setMatrixAt(e, i.compose(c, a, s)));
  }
  return ((re.receiveShadow = !0), n.add(re), n);
}
function bt(e) {
  let t = new T(),
    n = L(21),
    r = [],
    i = Xe(e),
    a = (e, t) => {
      let r = [];
      for (let i = 0; i < e; i += 1) {
        let a = new u(1, 2);
        (a.deleteAttribute(`normal`), a.deleteAttribute(`uv`), (a = de(a)));
        let o = (0.45 + n() * 0.4) * t,
          s = i / Math.max(1, e - 1) - 0.5;
        (a.scale(o * 1.4, o * 0.75, o),
          a.translate(s * e * 0.62 * t, (1 - Math.abs(s) * 1.7) * 0.35 * o, (n() - 0.5) * 0.5 * t),
          r.push(a));
      }
      let i = N(r);
      return (i.computeVertexNormals(), i);
    };
  for (let [e, o, s, c, l, u] of [
    [-3.6, 5, -8.6, 1, 5, 0.3],
    [3.4, 5.6, -9, 0.95, 4, -0.4],
    [0.2, 8, -10.2, 1.1, 5, 0],
    [-6.8, 2.7, -4.6, 0.75, 4, 1.1],
    [7.4, 3.4, -5.4, 0.7, 3, -1],
  ]) {
    let d = new g(a(l, c), i);
    (d.position.set(e, o, s),
      (d.rotation.y = u),
      (d.userData.noAO = !0),
      t.add(d),
      r.push({ m: d, x: e, ph: n() * 6, sp: 0.12 + n() * 0.08 }));
  }
  return {
    group: t,
    update(e) {
      for (let t of r) t.m.position.x = t.x + Math.sin(e * t.sp + t.ph) * 0.4;
    },
  };
}
function xt(e) {
  let t = [
      [
        [3.4, -5.6],
        [1.8, -6.05],
        [0.2, -6.35],
        [-1.4, -6.65],
      ],
      [
        [3.3, -4.25],
        [1.72, -4.3],
        [0.4, -4.68],
        [-1.5, -4.55],
        [-3.2, -4.3],
      ],
      [
        [-2.8, -4.05],
        [-2.65, -3.05],
        [-2.05, -2.25],
        [-1.15, -1.55],
      ],
    ],
    n = new a(),
    r = new E(0, -1, 0),
    i = new E(),
    s = W(`#97836d`),
    c = W(`#6f8d5f`),
    l = [];
  t.forEach((t, a) => {
    let u = new ie(t.map(([e, t]) => new E(e, 0, t))),
      d = [],
      f = [],
      p = [];
    for (let t = 0; t <= 56; t += 1) {
      let o = t / 56,
        l = u.getPoint(o),
        m = u.getTangent(o),
        h = 0.03 + 0.085 * Math.sin(Math.PI * o),
        g = -m.z,
        _ = m.x;
      for (let t of [-1, 1]) {
        let o = l.x + g * h * t,
          u = l.z + _ * h * t;
        n.set(i.set(o, 30, u), r);
        let p = n.intersectObject(e, !1)[0];
        d.push(o, p ? p.point.y + 0.03 : V.top, u);
        let m = s.clone().lerp(c, G(I(o * 1.4 + a * 3, 1, u * 1.4), 0.42, 0.62));
        f.push(m.r, m.g, m.b);
      }
      if (t < 56) {
        let e = t * 2;
        p.push(e, e + 2, e + 1, e + 1, e + 2, e + 3);
      }
    }
    let m = new b();
    (m.setAttribute(`position`, new o(d, 3)), m.setAttribute(`color`, new o(f, 3)), m.setIndex(p), l.push(m));
  });
  let u = N(l);
  u.computeVertexNormals();
  let d = new g(
    u,
    new S({
      vertexColors: !0,
      roughness: 0.95,
      side: 2,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
  );
  return ((d.receiveShadow = !0), (d.name = `palm-lines`), d);
}
function St(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 96), (t.height = 256));
  let n = t.getContext(`2d`),
    i = L(e);
  ((n.fillStyle = `#e3d6bd`), n.fillRect(0, 0, 96, 256));
  for (let e = 0; e < 260; e += 1)
    ((n.fillStyle = `rgba(120,96,70,${i() * 0.12})`), n.fillRect(i() * 96, i() * 256, 1 + i() * 3, 1 + i() * 4));
  ((n.strokeStyle = `rgba(150,112,92,0.55)`),
    (n.lineWidth = 5),
    n.strokeRect(7, 7, 82, 242),
    (n.font = `700 46px 'KaiTi', 'STKaiti', 'Kaiti SC', 'Noto Serif SC', serif`),
    (n.textAlign = `center`),
    (n.textBaseline = `middle`),
    (n.fillStyle = `rgba(96,80,66,0.35)`),
    [...U].slice(e % 3, (e % 3) + 3).forEach((e, t) => n.fillText(e, 48, 52 + t * 66)));
  let a = new r(t);
  return ((a.colorSpace = l), a);
}
function Ct(e) {
  let t = new T(),
    a = L(91),
    o = new ie(e.path.map(([e, t]) => new E(e, 0, t))),
    s = Math.floor(o.getLength() / 1.5),
    f = new y(),
    p = new m(),
    h = new E(),
    b = new E(),
    ee = new E(0, 1, 0),
    C = new D(
      q(1, 0.55, 0.85, { detail: 2, seed: 13, amp: 0.14, ridge: 0.05, palette: J, moss: 0.9 }),
      new S({ vertexColors: !0, roughness: 0.92 }),
      s + 6,
    ),
    ne = new u(0.05, 0);
  ne.scale(1, 0.45, 1);
  let w = new D(ne, new S({ roughness: 0.75 }), (s + 2) * 9),
    O = [`#e7b7b0`, `#f0e6da`, `#ecd0a0`, `#dba6a6`, `#c3cbdc`].map(W),
    k = [],
    ae = 0,
    A = 0,
    oe = (e, t, n) => {
      (b.set(e, n * 0.2, t),
        p.setFromAxisAngle(ee, a() * 6.28),
        h.set(n, n * (0.7 + a() * 0.4), n * (0.8 + a() * 0.3)),
        C.setMatrixAt(ae++, f.compose(b, p, h)));
    },
    se = (e, t) => {
      for (let n = 0; n < 9; n += 1) {
        let n = a() * 6.28,
          r = Math.sqrt(a()) * 0.28;
        (b.set(e + Math.cos(n) * r, 0.08 + a() * 0.1, t + Math.sin(n) * r),
          h.setScalar(0.8 + a() * 0.6),
          w.setMatrixAt(A, f.compose(b, p.identity(), h)),
          w.setColorAt(A, O[Math.floor(a() * O.length)]),
          (A += 1));
      }
    };
  for (let e = 0; e < s; e += 1) {
    let t = (e + 0.5) / s,
      n = o.getPointAt(t),
      r = o.getTangentAt(t),
      i = e % 2 ? 1 : -1,
      c = 0.8 + a() * 0.35,
      l = n.x - r.z * c * i,
      u = n.z + r.x * c * i;
    if (Math.hypot(l, u) > B.walk - 0.6 || Math.hypot(l - H.head.x, u - H.head.z) < 1.4) continue;
    let d = e % 3;
    d === 0
      ? oe(l, u, 0.14 + a() * 0.1)
      : d === 1
        ? se(l, u)
        : k.push({ x: l, z: u, rot: a() * 6.28, height: 0.7 + a() * 0.3 });
  }
  let j = new T(),
    M = new S({ color: `#8b6d52`, roughness: 0.45, metalness: 0.65 }),
    N = new g(
      new d(
        [
          [0, 0],
          [0.19, 0.02],
          [0.24, 0.1],
          [0.25, 0.2],
          [0.21, 0.26],
          [0.23, 0.29],
          [0.2, 0.3],
        ].map(([e, t]) => new te(e, t)),
        24,
      ),
      M,
    );
  ((N.position.y = 0.14), (N.castShadow = !0), j.add(N));
  for (let e = 0; e < 3; e += 1) {
    let t = (e / 3) * Math.PI * 2,
      n = new g(new v(0.025, 0.035, 0.18, 8), M);
    (n.position.set(Math.cos(t) * 0.15, 0.08, Math.sin(t) * 0.15), j.add(n));
  }
  for (let e of [-1, 1]) {
    let t = new g(new i(0.05, 0.014, 6, 12, Math.PI), M);
    (t.position.set(e * 0.2, 0.47, 0), (t.rotation.y = Math.PI / 2), j.add(t));
  }
  let ce = new g(new n(0.19, 20), new S({ color: `#b3a99c`, roughness: 1 }));
  ((ce.rotation.x = -Math.PI / 2), (ce.position.y = 0.41), j.add(ce));
  let le = new g(new v(0.006, 0.006, 0.26, 4), new S({ color: `#9a5a3c`, roughness: 0.8 }));
  (le.position.set(0.02, 0.53, 0), j.add(le));
  let ue = new g(
    q(0.42, 0.08, 0.36, { detail: 2, seed: 17, amp: 0.08, ridge: 0, palette: J, moss: 0.6 }),
    new S({ vertexColors: !0, roughness: 0.92 }),
  );
  ((ue.position.y = 0.04),
    (ue.receiveShadow = !0),
    j.add(ue),
    j.position.set(3.15, 0, 0.45),
    (j.rotation.y = -0.4),
    t.add(j));
  let de = Ie(64),
    fe = [];
  for (let e = 0; e < 5; e += 1) {
    let t = new re(new _({ map: de, color: `#efe7dc`, transparent: !0, opacity: 0, depthWrite: !1 }));
    (j.add(t), fe.push({ sp: t, ph: e / 5 }));
  }
  let pe = new T(),
    P = new c(0.62, 1.15, 0.2, 6, 8, 1);
  {
    let e = P.attributes.position;
    for (let t = 0; t < e.count; t += 1) {
      let n = e.getX(t),
        r = e.getY(t),
        i = e.getZ(t),
        a = 0.36 - (n + 0.31) * 0.42 + (I(n * 9, 3, i) - 0.5) * 0.12;
      e.setXYZ(t, n * (1 + (I(n * 3, r * 3, i * 3) - 0.5) * 0.06), Math.min(r, a), i);
    }
    (P.computeVertexNormals(), P.translate(0, 0.575, 0));
  }
  pe.add(Object.assign(new g(P, new S({ color: `#cdbfac`, roughness: 0.93 })), { castShadow: !0, receiveShadow: !0 }));
  let F = document.createElement(`canvas`);
  ((F.width = 128), (F.height = 256));
  {
    let e = F.getContext(`2d`);
    ((e.font = `700 74px 'KaiTi', 'STKaiti', 'Kaiti SC', 'Noto Serif SC', serif`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.fillStyle = `rgba(92,78,64,0.62)`),
      [`两`, `界`, `山`].forEach((t, n) => e.fillText(t, 64, 46 + n * 80)));
  }
  let me = new g(
    new x(0.42, 0.84),
    new S({
      map: Object.assign(new r(F), { colorSpace: l }),
      transparent: !0,
      roughness: 1,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
    }),
  );
  (me.position.set(0, 0.5, 0.102), pe.add(me));
  let he = new g(
    q(0.42, 0.12, 0.2, {
      detail: 2,
      seed: 23,
      amp: 0.2,
      ridge: 0,
      palette: { base: W(`#7e9c6a`), dark: W(`#5f7f57`), light: W(`#a8bf8a`), moss: W(`#7e9c6a`), foot: W(`#66845b`) },
      moss: 0,
    }),
    new S({ vertexColors: !0, roughness: 0.95 }),
  );
  ((he.position.y = 0.05), pe.add(he), pe.position.set(-1.75, 0, 0.35), pe.rotation.set(0.04, 0.45, -0.07), t.add(pe));
  let ge = new x(0.12, 0.34, 1, 6);
  {
    let e = ge.attributes.position;
    for (let t = 0; t < e.count; t += 1) e.setZ(t, Math.sin((e.getY(t) / 0.17) * 1.6) * 0.012);
    ge.computeVertexNormals();
  }
  return (
    [
      [-0.95, 1.45, 0.4],
      [1.15, 1.95, 2.2],
      [-1.9, 2.75, 1.1],
      [0.75, 3.55, -0.7],
      [2.4, 1.15, 2.9],
    ].forEach(([e, n, r], i) => {
      let a = new g(ge, new S({ map: St(i + 3), roughness: 0.95, side: 2 }));
      (a.rotation.set(-Math.PI / 2 + 0.06, 0, r), a.position.set(e, 0.035, n), (a.receiveShadow = !0), t.add(a));
    }),
    (C.count = ae),
    (w.count = A),
    (C.castShadow = C.receiveShadow = !0),
    w.instanceColor && (w.instanceColor.needsUpdate = !0),
    t.add(C, w),
    {
      group: t,
      pines: k,
      colliders: [
        { x: 3.15, z: 0.45, r: 0.36 },
        { x: -1.75, z: 0.35, r: 0.42 },
        ...k.map((e) => ({ x: e.x, z: e.z, r: 0.22 })),
      ],
      update(e) {
        for (let t of fe) {
          let n = (e * 0.16 + t.ph) % 1;
          (t.sp.position.set(0.02 + Math.sin(n * 7 + t.ph * 9) * 0.05 * n, 0.68 + n * 0.9, Math.cos(n * 5) * 0.03 * n),
            t.sp.scale.setScalar(0.08 + n * 0.32),
            (t.sp.material.opacity = Math.sin(n * Math.PI) * 0.34));
        }
      },
    }
  );
}
function wt() {
  let e = document.createElement(`canvas`);
  ((e.width = 256), (e.height = 648));
  let t = e.getContext(`2d`),
    n = t.createLinearGradient(0, 0, 256, 0);
  (n.addColorStop(0, `#efd98f`),
    n.addColorStop(0.5, `#f7e7a8`),
    n.addColorStop(1, `#ecd486`),
    (t.fillStyle = n),
    t.fillRect(0, 0, 256, 648));
  let i = L(5);
  for (let e = 0; e < 1400; e += 1)
    ((t.fillStyle = `rgba(140,96,30,${i() * 0.07})`), t.fillRect(i() * 256, i() * 648, 1 + i() * 2, 1 + i() * 3));
  ((t.strokeStyle = `#a8281f`),
    (t.lineWidth = 10),
    t.strokeRect(12, 12, 232, 624),
    (t.lineWidth = 3),
    t.strokeRect(30, 30, 196, 588),
    (t.font = `700 88px 'KaiTi', 'STKaiti', 'Kaiti SC', 'Noto Serif SC', 'Songti SC', serif`),
    (t.textAlign = `center`),
    (t.textBaseline = `middle`),
    U.forEach((e, n) => {
      let r = 84 + n * 96;
      ((t.lineJoin = `round`), (t.lineWidth = 9), (t.strokeStyle = `#5a2c0c`), t.strokeText(e, 128, r));
      let i = t.createLinearGradient(0, r - 40, 0, r + 40);
      (i.addColorStop(0, `#fff0b0`),
        i.addColorStop(0.45, `#f0b83e`),
        i.addColorStop(1, `#b8731a`),
        (t.fillStyle = i),
        t.fillText(e, 128, r));
    }));
  let a = new r(e);
  return ((a.colorSpace = l), (a.anisotropy = 8), a);
}
function Tt(e) {
  let t = document.createElement(`canvas`);
  t.width = t.height = 160;
  let n = t.getContext(`2d`),
    i = n.createRadialGradient(80, 80, 6, 80, 80, 78);
  (i.addColorStop(0, `rgba(255,226,140,0.95)`),
    i.addColorStop(0.45, `rgba(255,196,80,0.5)`),
    i.addColorStop(1, `rgba(255,180,60,0)`),
    (n.fillStyle = i),
    n.fillRect(0, 0, 160, 160),
    (n.font = `700 92px 'KaiTi', 'STKaiti', 'Kaiti SC', 'Noto Serif SC', 'Songti SC', serif`),
    (n.textAlign = `center`),
    (n.textBaseline = `middle`),
    (n.lineJoin = `round`),
    (n.lineWidth = 8),
    (n.strokeStyle = `#6a3408`),
    n.strokeText(e, 80, 84));
  let a = n.createLinearGradient(0, 40, 0, 128);
  (a.addColorStop(0, `#fff6c8`),
    a.addColorStop(0.5, `#ffc93e`),
    a.addColorStop(1, `#d98a1c`),
    (n.fillStyle = a),
    n.fillText(e, 80, 84));
  let o = new r(t);
  return ((o.colorSpace = l), o);
}
function Y() {
  let t = 0.36,
    n = 0.9,
    r = new b(),
    i = new Float32Array(186),
    a = new Float32Array(124),
    o = [];
  for (let e = 0; e <= 30; e += 1) {
    for (let t = 0; t < 2; t += 1) {
      let n = e * 2 + t;
      ((a[n * 2] = t), (a[n * 2 + 1] = e / 30));
    }
    if (e < 30) {
      let t = e * 2;
      o.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
    }
  }
  (r.setAttribute(`position`, new e(i, 3)), r.setAttribute(`uv`, new e(a, 2)), r.setIndex(o));
  let s = new S({
    map: wt(),
    roughness: 0.8,
    side: 2,
    emissive: `#ffffff`,
    emissiveMap: null,
    emissiveIntensity: 0,
    transparent: !0,
  });
  s.onBeforeCompile = (e) => {
    e.fragmentShader = e.fragmentShader.replace(
      `#include <map_fragment>`,
      `#include <map_fragment>
if (!gl_FrontFacing) diffuseColor.rgb = vec3(0.85, 0.75, 0.5);`,
    );
  };
  let c = new g(r, s);
  ((c.castShadow = !0), (c.renderOrder = 2));
  function l(e) {
    let a = n / 2 - e * n,
      o = n / 30,
      s = a,
      c = 0.006,
      l = 0.45 + e * 0.95,
      u = !1;
    for (let e = 0; e <= 30; e += 1) {
      let n = -0.9 / 2 + e * o,
        r = n,
        d = 0.006;
      n > a &&
        (u || ((u = !0), (s = a), (c = 0.006)),
        (l += 3 * o),
        (s += Math.cos(l) * o),
        (c += Math.sin(l) * o),
        (r = s),
        (d = c));
      for (let n = 0; n < 2; n += 1) {
        let a = (e * 2 + n) * 3;
        ((i[a] = (0.5 - n) * t), (i[a + 1] = d), (i[a + 2] = r));
      }
    }
    ((r.attributes.position.needsUpdate = !0), r.computeVertexNormals(), r.computeBoundingSphere());
  }
  return (l(0), { mesh: c, setPeel: l, length: n, width: t });
}
var Et = { uSageShade: { value: W(`#768a5e`) }, uSageLit: { value: W(`#b0c592`) } };
function Dt(e, t = 0.5) {
  let n = { value: t };
  return (
    e.traverse((e) => {
      if (e.isMesh)
        for (let t of [].concat(e.material)) {
          if (!t || t.userData.xySage) continue;
          t.userData.xySage = !0;
          let e = t.onBeforeCompile,
            r = t.customProgramCacheKey.bind(t);
          ((t.onBeforeCompile = (r, i) => {
            (e?.call(t, r, i),
              Object.assign(r.uniforms, Et, { uSageRest: n }),
              (r.fragmentShader = r.fragmentShader
                .replace(
                  `#include <common>`,
                  `#include <common>
uniform vec3 uSageShade, uSageLit; uniform float uSageRest;`,
                )
                .replace(
                  `#include <map_fragment>`,
                  `#include <map_fragment>
            { vec3 c = diffuseColor.rgb; float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
              float leaf = smoothstep(-0.03, 0.0, c.g - c.r);
              vec3 green = mix(uSageShade, uSageLit, smoothstep(0.03, 0.22, l));
              diffuseColor.rgb = mix(mix(vec3(l), c, uSageRest), green, leaf); }`,
                )));
          }),
            (t.customProgramCacheKey = () => `${r()}|xy-sage`),
            (t.needsUpdate = !0));
        }
    }),
    e
  );
}
async function Ot(e, { x: t, z: n, y: r = 0, height: i, rot: a = 0 }) {
  let o = (await ce(e)).scene.clone(!0);
  ((o.rotation.y = ue),
    M(o, { height: i }),
    le(o, { roughness: 0.75, env: 0.7 }),
    /x_pine\.glb$/.test(e) ? Dt(o) : /x_tree\.glb$/.test(e) && Dt(o, 0.8));
  let s = new T();
  return (s.add(o), s.position.set(t, r, n), (s.rotation.y = a), s);
}
async function kt({ scene: t, quality: n, sun: r = new E(-0.71, 0.37, -0.6), onProgress: i = () => {} }) {
  ut.fallen = !1;
  let o = new T();
  ((o.name = `five-elements-mountain`), t.add(o));
  let s = _t(),
    l = Ct(s);
  (o.add(s.mesh, vt(), yt(n, s), l.group), i(0.2));
  let u = n.low ? 3 : 4,
    d = new S({ vertexColors: !0, roughness: 0.93 }),
    p = new T();
  (p.position.set(V.x, 0, V.z), o.add(p));
  let h = q(V.rx, V.ry, V.rz, {
    detail: u + 1,
    seed: 3,
    amp: 0.11,
    ridge: 0.15,
    floor: -0.04,
    palette: mt,
    strata: 1,
    cap: 0.55,
  });
  {
    let e = h.attributes.position,
      t = H.head;
    for (let n = 0; n < e.count; n += 1) {
      let r = e.getX(n),
        i = e.getY(n),
        a = e.getZ(n),
        o = r + V.x,
        s = a + V.z;
      i > V.top && (i = V.top + (i - V.top) * 0.05);
      let c = st(o, s);
      c.d < 0.9400000000000001 && (i = Math.min(i, c.y - 0.08));
      let l = Math.hypot(o - t.x, (i - 0.5) * 0.9, s - t.z);
      if (l < 1.1) {
        let e = (1.1 - l) * 0.45;
        a -= e;
      }
      e.setXYZ(n, r, i, a);
    }
    h.computeVertexNormals();
  }
  let v = new g(h, d);
  ((v.castShadow = v.receiveShadow = !0), p.add(v));
  let y = it.map((e, t) => {
      let n = new g(
        q(e.rx, e.ry, e.rz, {
          detail: u,
          seed: 50 + t * 3,
          amp: 0.15,
          ridge: 0.08,
          floor: -0.2,
          palette: t % 2 ? ht : mt,
        }),
        d,
      );
      return (
        n.position.set(e.x - V.x, e.ry * 0.42, e.z - V.z),
        (n.rotation.y = t * 1.3),
        (n.castShadow = n.receiveShadow = !0),
        p.add(n),
        n
      );
    }),
    b = new T();
  for (let [e, t, n, r, i, a, o] of [
    [-0.43, 0.3, 0.02, 0.44, 0.44, 0.5, 71],
    [0.44, 0.29, -0.02, 0.42, 0.43, 0.5, 73],
    [0, 0.45, 0.25, 0.36, 0.21, 0.2, 75],
    [0.05, 1.62, -0.2, 0.92, 0.5, 0.62, 77],
  ]) {
    let s = new g(
      q(r, i, a, { detail: 3, seed: o, amp: 0.12, ridge: 0.08, floor: -1, palette: o === 77 ? ht : J, moss: 1.3 }),
      d,
    );
    (s.position.set(e, t, n), (s.castShadow = s.receiveShadow = !0), b.add(s));
  }
  (b.position.set(H.head.x, 0, H.head.z), o.add(b));
  let x = new T(),
    ee = [],
    te = L(31);
  for (let t = 0; t < 17; t += 1) {
    let n = (t + 0.5) / 17,
      r = at.getPoint(n),
      i = at.getTangent(n),
      a = 1.04 + te() * 0.14,
      o = new c(a, r.y + 0.3, 0.44, 3, 1, 2),
      s = o.attributes.position;
    for (let e = 0; e < s.count; e += 1) {
      let n = s.getX(e),
        r = s.getY(e),
        i = s.getZ(e);
      s.setXYZ(e, n + (I(n * 3 + t, r, i * 3) - 0.5) * 0.06, r, i + (I(n * 3, r + t, i * 3) - 0.5) * 0.05);
    }
    (o.translate(0, (r.y + 0.3) / 2 - 0.3, 0),
      o.rotateY(Math.atan2(i.x, i.z) + (te() - 0.5) * 0.08),
      o.translate(r.x - V.x, 0, r.z - V.z));
    let l = o.toNonIndexed();
    l.computeVertexNormals();
    let u = new Float32Array(l.attributes.position.count * 3),
      d = new f(),
      p = (te() - 0.5) * 0.07,
      m = te() < 0.35;
    for (let e = 0; e < l.attributes.position.count; e += 1) {
      let t = l.attributes.normal.getY(e),
        n = l.attributes.position.getY(e);
      (d
        .set(t > 0.5 ? (m ? `#b5c19c` : `#ddd2c2`) : `#bba98f`)
        .offsetHSL(0, 0, p - (t > 0.5 ? 0 : G(r.y - n, 0, 2.5) * 0.12)),
        u.set([d.r, d.g, d.b], e * 3));
    }
    (l.setAttribute(`color`, new e(u, 3)), ee.push(l));
  }
  let C = new g(N(ee), new S({ vertexColors: !0, roughness: 0.9 }));
  ((C.castShadow = C.receiveShadow = !0), x.add(C), p.add(x));
  let w = new g(new c(0.98, 0.62, 0.98, 4, 2, 4), new S({ color: `#d3c6b4`, roughness: 0.88 }));
  {
    let e = w.geometry.attributes.position;
    for (let t = 0; t < e.count; t += 1) {
      let n = e.getX(t),
        r = e.getY(t),
        i = e.getZ(t),
        a = 1 + (I(n * 5, r * 5, i * 5) - 0.5) * 0.08;
      e.setXYZ(t, n * a, r, i * a);
    }
    w.geometry.computeVertexNormals();
  }
  (w.position.set(H.stone.x - V.x, V.top + 0.31, H.stone.z - V.z), (w.castShadow = w.receiveShadow = !0), p.add(w));
  let D = Y(),
    O = new T();
  (O.position.set(w.position.x, w.position.y + 0.312, w.position.z),
    (O.rotation.y = Math.atan2(H.stone.x - H.sealStand.x, H.stone.z - H.sealStand.z)),
    O.add(D.mesh),
    p.add(O));
  let ie = Ie(128),
    ae = U.map((e, t) => {
      let n = new re(new _({ map: Tt(e), transparent: !0, opacity: 0, depthWrite: !1 }));
      return (
        n.position.set(0, 0.05, D.length / 2 - (t + 0.5) * (D.length / 6)),
        n.scale.setScalar(0.2),
        (n.renderOrder = 3),
        O.add(n),
        n
      );
    }),
    oe = new T(),
    se = new re(
      new _({ map: ie, color: `#ffe6bf`, transparent: !0, opacity: 0.3, depthWrite: !1, blending: 2, fog: !1 }),
    );
  (se.scale.setScalar(1.3),
    (se.position.y = 0.3),
    oe.add(se),
    oe.position.set(w.position.x, w.position.y + 0.32, w.position.z),
    p.add(oe),
    p.updateMatrixWorld(!0),
    o.add(xt(v)),
    i(0.4));
  let j = rt.map((e, t) => {
    let n = new T();
    n.position.set(e.x, 0, e.z);
    let r = e.x - V.x,
      i = e.z - V.z,
      a = Math.hypot(r, i) || 1,
      s = new E(r / a, 0, i / a),
      c = new E(s.z, 0, -s.x),
      l = [],
      f = L(60 + t),
      p = (e.h + 0.35) / e.n;
    for (let n = 0; n < e.n; n += 1) {
      let r = n === e.n - 1,
        i = e.r * (1 - n * 0.09),
        a = p * (r ? 1.08 : 1),
        o = q(i, a * 0.66, i * 0.94, {
          detail: u,
          seed: 30 + t * 7 + n,
          amp: 0.1,
          ridge: 0.16,
          floor: -0.97,
          palette: (t + n) % 2 ? mt : gt,
          strata: 1.8,
          moss: 1.3,
          cap: r ? 0.85 : 1,
        });
      (o.rotateY(f() * 6.28),
        o.translate((f() - 0.5) * 0.06 * i, -0.35 + p * n + a * 0.5, (f() - 0.5) * 0.06 * i),
        l.push(o));
    }
    let m = N(l);
    {
      let t = m.attributes.position;
      for (let n = 0; n < t.count; n += 1) {
        let r = st(t.getX(n) + e.x, t.getZ(n) + e.z);
        r.d < 0.8600000000000001 && t.getY(n) > r.y - 0.1 && t.setY(n, Math.min(t.getY(n), r.y - 0.1));
      }
      m.computeVertexNormals();
    }
    let h = new g(m, d);
    return (
      (h.castShadow = h.receiveShadow = !0),
      n.add(h),
      n.quaternion.setFromAxisAngle(c, e.lean),
      o.add(n),
      { pivot: n, mesh: h, axis: c, out: s, lean: e.lean, f: e }
    );
  });
  (i(0.5),
    (
      await Promise.all(
        [
          Ot(`models/xiyou/x_pine.glb`, { x: -6.2, z: -6, height: 3.8, rot: 0.4 }),
          Ot(`models/xiyou/x_pine.glb`, { x: 6.4, z: -2.6, height: 3.3, rot: 2.1 }),
          Ot(`models/xiyou/x_pine.glb`, { x: -2.3, z: -3.9, y: pt(-2.3, -3.9) - 0.25, height: 1.8, rot: 1.2 }),
          Ot(`models/xiyou/x_pine.glb`, { x: -7.8, z: 2.2, height: 3.1, rot: 4 }),
          Ot(`models/xiyou/x_tree.glb`, { x: -5.4, z: 6, height: 3.7, rot: 0.8 }),
          Ot(`models/xiyou/x_tree.glb`, { x: 6, z: 6.9, height: 3.1, rot: 2.6 }),
          Ot(`models/xiyou/x_peaches.glb`, { x: 1.35, z: 0.42, height: 0.42, rot: -0.5 }),
          ...l.pines.map((e) => Ot(`models/xiyou/x_pine.glb`, { x: e.x, z: e.z, height: e.height, rot: e.rot })),
        ].map((e) => e.catch(() => null)),
      )
    ).forEach((e, t) => {
      e && (t === 2 ? ((e.position.x -= V.x), (e.position.z -= V.z), p.add(e)) : o.add(e));
    }),
    await Promise.all(
      j
        .filter((e) => e.f.pine)
        .map(async (e) => {
          let [t, n] = e.f.pine,
            r = Math.max(1, Math.round(n * e.f.n)),
            i = -0.35 + ((e.f.h + 0.35) / e.f.n) * r - 0.1,
            a = e.f.r * (1 - r * 0.09) * 0.86,
            o = await Ot(`models/xiyou/x_pine.glb`, {
              x: Math.cos(t) * a,
              z: Math.sin(t) * a,
              y: i,
              height: 1.5,
              rot: t,
            }).catch(() => null);
          o && ((o.rotation.z = Math.cos(t) * 0.25), (o.rotation.x = -Math.sin(t) * 0.25), e.pivot.add(o));
        }),
    ),
    i(0.8));
  let M = bt(r);
  o.add(M.group);
  let ce = [
      { x: -6.2, z: -6, r: 0.55 },
      { x: 6.4, z: -2.6, r: 0.5 },
      { x: -7.8, z: 2.2, r: 0.5 },
      { x: -5.4, z: 6, r: 0.5 },
      { x: 6, z: 6.9, r: 0.45 },
      { x: 1.35, z: 0.42, r: 0.36 },
      { x: H.head.x, z: H.head.z, r: 0.55 },
      { x: H.stone.x, z: H.stone.z, r: 0.66 },
      { x: rt[0].x, z: rt[0].z, r: rt[0].r + 0.1 },
      ...it.map((e) => ({ x: e.x, z: e.z, r: Math.max(e.rx, e.rz) * 0.95 })),
      ...l.colliders,
    ],
    le = [];
  {
    let e = new g(new ne(1, 16, 10));
    (e.scale.set(V.rx, V.ry * 0.95, V.rz), e.position.set(V.x, 0, V.z), e.updateMatrixWorld(), le.push(e));
  }
  for (let e of j) {
    let t = new g(new ne(1, 10, 8));
    (t.scale.set(e.f.r * 0.95, e.f.h / 2, e.f.r * 0.95),
      t.position.set(0, e.f.h / 2 - 0.4, 0),
      (t.visible = !1),
      e.pivot.add(t),
      le.push(t));
  }
  let ue = new a(),
    de = new E(),
    fe = new E(),
    pe = (e, t, n) => {
      if (ut.fallen) return null;
      (ue.set(de.copy(e), fe.set(t[0], t[1], t[2])), (ue.far = n));
      let r = ue.intersectObjects(le, !1)[0];
      return r ? r.distance : null;
    },
    P = 1,
    F = 0,
    me = new E(),
    he = new E(),
    ge = {
      group: o,
      palm: p,
      fingers: j,
      stone: w,
      seal: D,
      sealHolder: O,
      wordGlows: ae,
      rays: oe,
      box: b,
      boulders: y,
      colliders: ce,
      rayHit: pe,
      setPeel(e) {
        (D.setPeel(e),
          ae.forEach((t, n) => {
            let r = k.clamp(e * 6 - n, 0, 1);
            ((t.material.opacity = r), t.scale.setScalar(0.15 + r * 0.08));
          }));
      },
      blowSeal() {
        let e = D.mesh,
          n = e.getWorldPosition(new E()),
          r = e.getWorldQuaternion(new m());
        (O.remove(e), t.add(e), e.position.copy(n), e.quaternion.copy(r));
        let i = { t: 0 };
        (A.to(i, {
          t: 1,
          duration: 3.4,
          ease: `power1.in`,
          onUpdate: () => {
            (e.position.set(
              n.x + Math.sin(i.t * 8) * i.t * 1.6,
              n.y + i.t * i.t * 15 + i.t * 0.6,
              n.z + Math.cos(i.t * 8) * i.t * 1.6,
            ),
              (e.rotation.y += 0.11),
              (e.rotation.x += 0.045),
              (e.material.opacity = 1 - i.t * i.t));
          },
          onComplete: () => {
            t.remove(e);
          },
        }),
          A.to(
            ae.map((e) => e.material),
            { opacity: 0, duration: 2.4, delay: 1.4 },
          ));
        let a = { v: 1 };
        A.to(a, {
          v: 0,
          duration: 2.6,
          delay: 0.8,
          onUpdate: () => {
            P = a.v;
          },
        });
      },
      collapse({ shake: e = () => {}, boom: t = () => {}, out: n = () => {} } = {}) {
        return new Promise((r) => {
          let i = A.timeline({
              onComplete: () => {
                ((ut.fallen = !0), r());
              },
            }),
            a = { k: 0 };
          (i.to(a, { k: 0.3, duration: 0.9, ease: `power1.in`, onUpdate: () => e(a.k) }),
            i.add(() => t(), 0.9),
            i.to(a, { k: 1, duration: 0.12 }, 0.9),
            i.to(a, { k: 0, duration: 2.8, ease: `power2.out`, onUpdate: () => e(a.k) }, 1.02),
            i.add(() => n(), 1),
            j.forEach((e, t) => {
              let n = { v: e.lean },
                r = { y: 0 },
                a = e.pivot.position.clone();
              (i.to(
                n,
                {
                  v: 1.7,
                  duration: 1.15 + t * 0.08,
                  ease: `power2.in`,
                  onUpdate: () => e.pivot.quaternion.setFromAxisAngle(e.axis, n.v),
                },
                0.95 + t * 0.07,
              ),
                i.to(
                  r,
                  {
                    y: 1,
                    duration: 1.7,
                    ease: `power2.in`,
                    onUpdate: () => {
                      e.pivot.position.set(a.x + e.out.x * r.y * 9, -r.y * r.y * 34, a.z + e.out.z * r.y * 9);
                    },
                    onComplete: () => {
                      e.pivot.visible = !1;
                    },
                  },
                  1.95 + t * 0.07,
                ));
            }),
            i.to(p.position, { y: -0.45, duration: 1.6, ease: `power2.out` }, 0.95),
            i.to(p.scale, { y: 0.42, x: 1.05, z: 1.05, duration: 1.6, ease: `power2.out` }, 0.95),
            b.children.forEach((e, t) => {
              let n = e.position.clone(),
                r = [-1, 1, 0, 0][t],
                a = { t: 0 },
                o = [0.5, 0.4, 1.4, -0.6][t],
                s = [0.9, 0.9, 0.5, 0][t],
                c = [0.35, 0.35, 0.25, 1.5][t];
              i.to(
                a,
                {
                  t: 1,
                  duration: 1.1,
                  ease: `power1.out`,
                  onUpdate: () => {
                    (e.position.set(n.x + r * a.t * 1.4, n.y + Math.sin(a.t * Math.PI) * s - a.t * c, n.z + a.t * o),
                      (e.rotation.z += r * 0.04),
                      (e.rotation.x += t === 2 ? 0.1 : 0));
                  },
                },
                1,
              );
            }),
            i.to({}, { duration: 0.5 }));
        });
      },
      update(e, t, n) {
        ((F = t), M.update(t), l.update(t), oe.getWorldPosition(he), me.copy(n.position));
        let r = G(me.distanceTo(he), 2.5, 7);
        ((se.material.opacity = 0.3 * (0.85 + Math.sin(t * 1.7) * 0.15) * P * r), (oe.visible = P > 0.01));
      },
      get time() {
        return F;
      },
    };
  return (i(1), ge);
}
var At = [
    { at: [-0.165, 0.05, 0.05], dir: [-1, 0.5, 0.25], n: 9, len: 0.13 },
    { at: [0.165, 0.04, 0.05], dir: [1, 0.5, 0.25], n: 9, len: 0.13 },
    { at: [0, -0.16, 0.1], dir: [0, -1, 0.55], n: 11, len: 0.11, color: `sedge` },
    { at: [-0.19, -0.03, -0.05], dir: [-1, 0.1, -0.2], n: 6, len: 0.16, color: `vine` },
    { at: [0.02, 0.1, -0.04], dir: [0, 1, -0.15], n: 14, len: 0.05, color: `moss` },
  ],
  jt = {
    grass: [
      [0.22, 0.42, 0.14],
      [0.62, 0.8, 0.32],
    ],
    sedge: [
      [0.3, 0.45, 0.16],
      [0.74, 0.78, 0.36],
    ],
    vine: [
      [0.2, 0.36, 0.14],
      [0.45, 0.66, 0.24],
    ],
    moss: [
      [0.27, 0.42, 0.15],
      [0.5, 0.66, 0.27],
    ],
  };
function Mt({ n: e, len: t, color: n = `grass` }, r) {
  let i = L(r),
    a = [],
    [s, c] = jt[n];
  for (let r = 0; r < e; r += 1) {
    let l = (r / e) * Math.PI * 2 + i() * 0.6,
      u = 0.35 + i() * 0.4,
      d = t * (0.6 + i() * 0.7),
      f = n === `moss` ? 0.022 : 0.011,
      p = Math.cos(l) * u,
      m = Math.sin(l) * u,
      h = [],
      g = [];
    for (let e = 0; e <= 4; e += 1) {
      let t = e / 4,
        n = t * t * 0.6,
        r = (p * t + p * n) * d,
        i = t * d * (1 - n * 0.35),
        a = (m * t + m * n) * d,
        o = f * (1 - t * 0.85);
      h.push(r - o * Math.sin(l), i, a + o * Math.cos(l), r + o * Math.sin(l), i, a - o * Math.cos(l));
      let u = [0, 1, 2].map((e) => s[e] + (c[e] - s[e]) * t);
      g.push(...u, ...u);
    }
    let _ = [];
    for (let e = 0; e < 4; e += 1) {
      let t = e * 2;
      _.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
    }
    let v = new b();
    (v.setAttribute(`position`, new o(h, 3)), v.setAttribute(`color`, new o(g, 3)), v.setIndex(_), a.push(v));
  }
  if (n === `moss`) {
    let e = new u(1, 2);
    (e.deleteAttribute(`uv`), e.deleteAttribute(`normal`), e.scale(0.062, 0.034, 0.056), e.translate(0, -0.012, 0));
    let t = [];
    for (let n = 0; n < e.attributes.position.count; n += 1) t.push(0.36, 0.52, 0.2);
    (e.setAttribute(`color`, new o(t, 3)), a.push(e));
  }
  let l = N(a.map((e) => (e.index ? e.toNonIndexed() : e)));
  return (l.computeVertexNormals(), l);
}
function Nt(e) {
  let t = {};
  e.object.traverse((e) => {
    e.isBone && (t[e.name] = e);
  });
  let n = [
      [`Head`, [0, 0.25, -0.13], [0, 1, -0.7], 11, 0.05],
      [`Head`, [0.12, 0.2, -0.08], [0.7, 1, -0.4], 7, 0.045],
      [`L_Clavicle`, [0.07, 0.05, -0.03], [0.3, 1, -0.1], 8, 0.045],
      [`R_Clavicle`, [-0.09, 0.05, -0.03], [-0.3, 1, -0.1], 8, 0.045],
      [`Spine02`, [0.02, 0.07, -0.13], [0, 0.5, -1], 9, 0.05],
    ],
    r = new S({ vertexColors: !0, roughness: 0.9, side: 2 }),
    i = new E(0, 1, 0),
    a = new E(),
    o = new E(),
    s = new m();
  (e.object.updateMatrixWorld(!0),
    n.forEach(([e, n, c, l, u], d) => {
      let f = t[e];
      if (!f) return;
      let p = new T();
      (p.add(new g(Mt({ n: l, len: u, color: d % 2 ? `grass` : `moss` }, 71 + d * 5), r)),
        f.getWorldPosition(a).add(new E(...n)),
        f.add(p),
        p.position.copy(f.worldToLocal(a.clone())),
        f.getWorldScale(o),
        p.scale.setScalar(1 / o.x),
        p.quaternion.copy(
          f
            .getWorldQuaternion(s)
            .invert()
            .multiply(new m().setFromUnitVectors(i, new E(...c).normalize())),
        ));
    }));
}
function Pt(e) {
  let t = new T();
  t.position.copy(e);
  let n = new S({ vertexColors: !0, roughness: 0.85, side: 2, transparent: !0 }),
    r = new E(0, 1, 0),
    i = At.map((e, i) => {
      let a = new g(Mt(e, 11 + i * 7), n.clone()),
        o = new T();
      return (
        o.position.set(...e.at),
        o.quaternion.setFromUnitVectors(r, new E(...e.dir).normalize()),
        o.add(a),
        t.add(o),
        { holder: o, mesh: a, gone: !1, stretch: 0 }
      );
    }),
    a = new E();
  return {
    group: t,
    tufts: i,
    left: () => i.filter((e) => !e.gone).length,
    at(e) {
      return i[e].holder.getWorldPosition(a).clone();
    },
    pull(e, t) {
      let n = i[e];
      ((n.stretch = t), n.mesh.scale.set(1 - t * 0.15, 1 + t * 0.9, 1 - t * 0.15), (n.mesh.position.y = t * 0.03));
    },
    pop(e, n) {
      let r = i[e];
      if (r.gone) return;
      r.gone = !0;
      let a = t.worldToLocal(n.clone()),
        o = r.holder.position.clone(),
        s = { v: 0 };
      A.to(s, {
        v: 1,
        duration: 0.85,
        ease: `power2.out`,
        onUpdate: () => {
          (r.holder.position.lerpVectors(o, a, s.v),
            (r.holder.position.y += Math.sin(s.v * Math.PI) * 0.18),
            (r.holder.rotation.x += 0.18),
            (r.holder.rotation.z += 0.11),
            (r.mesh.material.opacity = 1 - s.v * s.v));
        },
        onComplete: () => {
          r.holder.visible = !1;
        },
      });
    },
  };
}
function Ft(e) {
  let t = document.createElement(`div`);
  ((t.className = `xy-hands`),
    (t.innerHTML = `<i class="xy-ghost" aria-hidden="true"></i><div class="xy-cue"></div>
    <button type="button" class="xy-breath"><span class="xy-breath-ring" aria-hidden="true"></span><span class="xy-breath-label"></span></button>`),
    e.appendChild(t));
  let n = t.querySelector(`.xy-ghost`),
    r = t.querySelector(`.xy-cue`),
    i = t.querySelector(`.xy-breath`),
    a = t.querySelector(`.xy-breath-label`),
    o = null,
    s = 0,
    c = 0,
    l = (e, t) => {
      e.style.transform = `translate(${Math.round(t.x)}px, ${Math.round(t.y)}px)`;
    },
    u = (e) => {
      if (
        ((s = requestAnimationFrame(u)),
        o?.tried && !d && e - f > 3500 && ((o.tried = !1), (c = e), r.classList.toggle(`show`, !!o.hint)),
        !o || o.tried)
      ) {
        n.classList.remove(`on`);
        return;
      }
      let t = o.from?.(),
        i = o.to?.() || t;
      if (!t) return;
      let a = ((e - c) % 1700) / 1700,
        p = a < 0.2 ? 0 : a > 0.8 ? 1 : (a - 0.2) / 0.6,
        m = p * p * (3 - 2 * p);
      (l(n, { x: t.x + (i.x - t.x) * m, y: t.y + (i.y - t.y) * m }),
        n.classList.toggle(`on`, a > 0.05 && a < 0.92),
        n.classList.toggle(`press`, a > 0.15 && a < 0.85),
        o.hint && l(r, { x: t.x, y: t.y - 46 }));
    },
    d = null,
    f = 0;
  (t.addEventListener(`pointerdown`, (e) => {
    if (o && !e.target.closest(`.xy-breath`)) {
      e.preventDefault();
      try {
        t.setPointerCapture(e.pointerId);
      } catch {}
      ((f = performance.now()),
        (d = {
          id: e.pointerId,
          x0: e.clientX,
          y0: e.clientY,
          x: e.clientX,
          y: e.clientY,
          t0: performance.now(),
          moved: 0,
        }),
        (o.tried = !0),
        r.classList.remove(`show`),
        o.onDown?.(e.clientX, e.clientY));
    }
  }),
    t.addEventListener(`pointermove`, (e) => {
      if (!o || !d || e.pointerId !== d.id) return;
      let t = e.clientX - d.x,
        n = e.clientY - d.y;
      ((d.x = e.clientX), (d.y = e.clientY), (d.moved += Math.hypot(t, n)), o.onMove?.(t, n, e.clientX, e.clientY, d));
    }));
  let p = (e) => {
    if (!o || !d || e.pointerId !== d.id) return;
    let t = d;
    ((d = null), (f = performance.now()), o.onUp?.(t.moved < 12 && performance.now() - t.t0 < 500, t));
  };
  (t.addEventListener(`pointerup`, p), t.addEventListener(`pointercancel`, p));
  let m = null;
  async function h() {
    try {
      if ((await navigator.permissions?.query?.({ name: `microphone` }))?.state !== `granted`) return null;
      let e = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
        }),
        t = F();
      if (!t) return (e.getTracks().forEach((e) => e.stop()), null);
      let n = t.createMediaStreamSource(e),
        r = t.createAnalyser();
      ((r.fftSize = 1024), n.connect(r));
      let i = new Float32Array(r.fftSize);
      return {
        level() {
          r.getFloatTimeDomainData(i);
          let e = 0;
          for (let t = 0; t < i.length; t += 1) e += i[t] * i[t];
          return Math.sqrt(e / i.length);
        },
        close() {
          (e.getTracks().forEach((e) => e.stop()), n.disconnect());
        },
      };
    } catch {
      return null;
    }
  }
  return {
    get busy() {
      return !!o;
    },
    drag(e) {
      ((o = { ...e, tried: !1 }),
        (c = performance.now()),
        (r.textContent = e.hint || ``),
        r.classList.toggle(`show`, !!e.hint),
        t.classList.add(`on`),
        (s ||= requestAnimationFrame(u)));
    },
    nudge() {
      o && ((o.tried = !1), (c = performance.now()), r.classList.toggle(`show`, !!o.hint));
    },
    breath({ label: e, micLabel: n, onLevel: r }) {
      let s = !1,
        c = 0,
        l = !0,
        u = null,
        d = !1;
      ((a.textContent = e), i.classList.add(`show`), t.classList.add(`on`, `breathing`));
      let f = (e) => {
          (e.preventDefault(), (s = !0), i.classList.add(`held`), navigator.vibrate?.(10));
        },
        p = () => {
          ((s = !1), i.classList.remove(`held`));
        };
      (i.addEventListener(`pointerdown`, f),
        window.addEventListener(`pointerup`, p),
        window.addEventListener(`pointercancel`, p));
      let g = (e) => {
        e.code === `Space` &&
          !e.repeat &&
          (e.preventDefault(), (s = e.type === `keydown`), i.classList.toggle(`held`, s));
      };
      (window.addEventListener(`keydown`, g),
        window.addEventListener(`keyup`, g),
        h().then((e) => {
          if (!l) {
            e?.close();
            return;
          }
          ((m = u = e), e && n && (a.textContent = n));
        }));
      let _ = performance.now(),
        v = (e) => {
          if (!l) return;
          let t = Math.min(0.05, (e - _) / 1e3);
          _ = e;
          let n = u ? Math.max(0, Math.min(1, (u.level() - 0.035) / 0.12)) : 0;
          n > 0.3 && (d = !0);
          let a = Math.max(+!!s, n);
          ((c += (a - c) * (1 - Math.exp(-t * (a > c ? 14 : 5)))),
            i.style.setProperty(`--k`, c.toFixed(3)),
            r(c, t),
            requestAnimationFrame(v));
        };
      return (
        requestAnimationFrame(v),
        {
          stop() {
            return (
              (l = !1),
              p(),
              i.removeEventListener(`pointerdown`, f),
              window.removeEventListener(`pointerup`, p),
              window.removeEventListener(`pointercancel`, p),
              window.removeEventListener(`keydown`, g),
              window.removeEventListener(`keyup`, g),
              i.classList.remove(`show`, `held`),
              t.classList.remove(`breathing`),
              o || t.classList.remove(`on`),
              u?.close(),
              (m = u = null),
              d ? `mic` : `hold`
            );
          },
        }
      );
    },
    off() {
      ((o = null),
        (d = null),
        n.classList.remove(`on`, `press`),
        r.classList.remove(`show`),
        i.classList.contains(`show`) || t.classList.remove(`on`));
    },
    dispose() {
      (cancelAnimationFrame(s), m?.close(), t.remove());
    },
  };
}
var It = `'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', 'Noto Serif CJK SC', 'Songti SC', 'STSong', 'SimSun', serif`,
  Lt = (e, t) => {
    let n = document.createElement(`canvas`);
    return ((n.width = e), (n.height = t), [n, n.getContext(`2d`)]);
  },
  Rt = (e) => {
    let t = new r(e);
    return ((t.colorSpace = l), (t.anisotropy = 8), t);
  };
function zt(e, t, n, { base: r = `#f3e7c8`, edge: i = `#dcc79c`, seed: a = 3 } = {}) {
  let o = e.createRadialGradient(t / 2, n / 2, Math.min(t, n) * 0.2, t / 2, n / 2, Math.max(t, n) * 0.75);
  (o.addColorStop(0, r), o.addColorStop(1, i), (e.fillStyle = o), e.fillRect(0, 0, t, n));
  let s = L(a);
  for (let r = 0; r < (t * n) / 220; r += 1)
    ((e.fillStyle = `rgba(120,86,40,${s() * 0.06})`), e.fillRect(s() * t, s() * n, 1 + s() * 2, 1 + s() * 2));
}
function Bt(e, t, n, r, i, { max: a = 120, color: o = `#1d1712`, weight: s = 700 } = {}) {
  let c = String(t || ``).trim();
  if (c && !/[\u3400-\u9fff]/.test(c)) {
    let t = Math.round(a * 0.8),
      l = () => {
        e.font = `${s} ${t}px ${It}`;
      };
    for (l(); e.measureText(c).width > i && t > 10;) ((t -= 2), l());
    (e.save(),
      e.translate(n, r + i / 2),
      e.rotate(Math.PI / 2),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      (e.fillStyle = o),
      e.fillText(c, 0, 0),
      e.restore());
    return;
  }
  let l = [...c].filter((e) => e.trim());
  if (!l.length) return;
  let u = Math.min(a, i / l.length);
  ((e.font = `${s} ${Math.round(u * 0.9)}px ${It}`),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.fillStyle = o),
    l.forEach((t, i) => e.fillText(t, n, r + u * (i + 0.5))));
}
function Vt(e, t = 1) {
  let [n, r] = Lt(256, 720);
  return (
    zt(r, 256, 720, { base: `#f6ebcd`, edge: `#e2cd9a`, seed: t }),
    (r.strokeStyle = `#b3322a`),
    (r.lineWidth = 9),
    r.strokeRect(14, 14, 228, 692),
    (r.lineWidth = 3),
    r.strokeRect(30, 30, 196, 660),
    Bt(r, e, 128, 70, 580, { max: 150 }),
    Rt(n)
  );
}
function Ht({ map: t, w: n = 0.72, h: r = 1.9, n: i = 26 }) {
  let a = new b(),
    o = new Float32Array((i + 1) * 2 * 3),
    s = new Float32Array((i + 1) * 2 * 2),
    c = [];
  for (let e = 0; e <= i; e += 1) {
    for (let t = 0; t < 2; t += 1) {
      let n = e * 2 + t;
      ((s[n * 2] = t), (s[n * 2 + 1] = e / i));
    }
    if (e < i) {
      let t = e * 2;
      c.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
    }
  }
  (a.setAttribute(`position`, new e(o, 3)), a.setAttribute(`uv`, new e(s, 2)), a.setIndex(c));
  let l = new S({ map: t, roughness: 0.82, side: 2, transparent: !0 });
  l.onBeforeCompile = (e) => {
    e.fragmentShader = e.fragmentShader.replace(
      `#include <map_fragment>`,
      `#include <map_fragment>
if (!gl_FrontFacing) diffuseColor.rgb = vec3(0.86, 0.79, 0.6);`,
    );
  };
  let u = new g(a, l);
  u.castShadow = !0;
  function d(e) {
    let t = r / 2 - e * r,
      s = r / i,
      c = 0,
      l = t,
      u = 0.012,
      d = !1;
    for (let a = 0; a <= i; a += 1) {
      let i = -r / 2 + a * s,
        f = i,
        p = 0.012;
      i > t &&
        (d || ((d = !0), (l = t), (u = 0.012)),
        (c += (2.2 + e * 2.4) * s),
        (l += Math.cos(c) * s),
        (u += Math.sin(c) * s),
        (f = l),
        (p = u));
      for (let e = 0; e < 2; e += 1) {
        let t = (a * 2 + e) * 3;
        ((o[t] = (e - 0.5) * n), (o[t + 1] = f), (o[t + 2] = p));
      }
    }
    ((a.attributes.position.needsUpdate = !0), a.computeVertexNormals(), a.computeBoundingSphere());
  }
  return (d(0), { mesh: u, setPeel: d, w: n, h: r });
}
var Ut = [
  [`金蝉遭贬`, `第一难`],
  [`出胎几杀`, `第二难`],
  [`满月抛江`, `第三难`],
  [`寻亲报冤`, `第四难`],
  null,
  [`双叉岭上`, `第七难`],
  [`两界山头`, `第八难`],
  null,
  [`铜台府监禁`, `七十九难`],
  [`凌云渡脱胎`, `八十难`],
];
function Wt({ lang: e }) {
  let t = 1024,
    [n, r] = Lt(t, 640),
    i = Rt(n),
    a = ``,
    o = 0,
    s = [];
  for (let e = 949; s.length < Ut.length + 2; e -= 70) (Math.abs(e - t / 2) < 42 && (e -= 42), s.push(e));
  function l() {
    zt(r, t, 640, { base: `#f4e9cf`, edge: `#dfcb9d`, seed: 11 });
    let e = r.createLinearGradient(t / 2 - 40, 0, 552, 0);
    (e.addColorStop(0, `rgba(90,60,30,0)`),
      e.addColorStop(0.5, `rgba(90,60,30,0.28)`),
      e.addColorStop(1, `rgba(90,60,30,0)`),
      (r.fillStyle = e),
      r.fillRect(t / 2 - 40, 0, 80, 640),
      (r.strokeStyle = `rgba(170,60,40,0.35)`),
      (r.lineWidth = 2));
    for (let e of s)
      for (let t of [-1, 1])
        (r.beginPath(), r.moveTo(e + (t * 70) / 2, 40), r.lineTo(e + (t * 70) / 2, 600), r.stroke());
    (Bt(r, `难簿`, s[0], 50, 150, { max: 64, color: `#9a2a20` }),
      Ut.forEach((e, t) => {
        let n = s[t + 1];
        if (!e) {
          Bt(r, `……`, n, 60, 120, { max: 50, color: `#6d5a44`, weight: 400 });
          return;
        }
        let i = e[1] === `第八难`;
        Bt(r, e[0] + e[1], n, 56, 520, { max: 54, color: i ? `#9a2a20` : `#2a221b`, weight: 600 });
      }));
    let n = s[s.length - 1];
    if (o <= 0)
      (r.setLineDash([6, 8]),
        (r.strokeStyle = `rgba(154,42,32,0.75)`),
        (r.lineWidth = 3),
        r.strokeRect(n - 35 + 6, 50, 58, 540),
        r.setLineDash([]));
    else if (/[\u3400-\u9fff]/.test(a)) {
      let e = [...a],
        t = e.slice(0, Math.ceil(e.length * Math.min(1, o)));
      Bt(r, t.join(``), n, 56, 528, { max: 58, color: `#120d0a`, weight: 800 });
    } else {
      (r.save(), (r.font = `800 46px ${It}`));
      let e = Math.min(528, r.measureText(a).width),
        t = 56 + (528 - e) / 2;
      (r.beginPath(),
        r.rect(n - 35, 0, 70, t + e * Math.min(1, o)),
        r.clip(),
        Bt(r, a, n, 56, 528, { max: 58, color: `#120d0a`, weight: 800 }),
        r.restore());
    }
    i.needsUpdate = !0;
  }
  l();
  let u = new T(),
    d = new g(new c(1.72, 0.05, 1.12), new S({ color: `#2f4a6b`, roughness: 0.8 }));
  ((d.position.y = 0.025), (d.castShadow = d.receiveShadow = !0), u.add(d));
  let f = new x(1.62, 1.02, 32, 1);
  {
    let e = f.attributes.position;
    for (let t = 0; t < e.count; t += 1) {
      let n = e.getX(t);
      e.setZ(t, 0.07 * (Math.abs(n) / 0.81) ** 0.6 - 0.02 * (1 - Math.abs(n) / 0.81));
    }
    f.computeVertexNormals();
  }
  let p = new g(f, new S({ map: i, roughness: 0.9, emissive: `#ffe9b0`, emissiveMap: i, emissiveIntensity: 0 }));
  ((p.rotation.x = -Math.PI / 2), (p.position.y = 0.07), (p.receiveShadow = !0), u.add(p));
  let m = new re(new _({ map: Ie(128), color: `#ffd77a`, transparent: !0, opacity: 0, depthWrite: !1, blending: 2 }));
  return (
    m.scale.set(2.6, 2.6, 1),
    (m.position.y = 0.4),
    u.add(m),
    {
      group: u,
      slot: new E((s[s.length - 1] / t - 0.5) * 1.62, 0.12, 0),
      leaf: p,
      glow: m,
      write(e, t = 1) {
        ((a = String(e || ``)), (o = t), l());
      },
      light(e) {
        ((p.material.emissiveIntensity = e * 0.35), (m.material.opacity = e * 0.55));
      },
    }
  );
}
function Gt(e, t) {
  let [n, r] = Lt(256, 340);
  (zt(r, 256, 340, { base: `#efe3c3`, edge: `#d5bf8f`, seed: t }),
    (r.strokeStyle = `rgba(60,70,110,0.22)`),
    (r.lineWidth = 2));
  for (let e = 40; e < 320; e += 26) (r.beginPath(), r.moveTo(18, e), r.lineTo(238, e), r.stroke());
  (r.save(),
    r.translate(128, 170),
    r.rotate(-0.12),
    (r.globalAlpha = 0.78),
    (r.textAlign = `center`),
    (r.textBaseline = `middle`),
    (r.fillStyle = `#231a14`));
  let i = 110,
    a = () => {
      r.font = `700 ${i}px ${It}`;
    };
  for (a(); r.measureText(e).width > 220 && i > 14;) ((i -= 4), a());
  return (r.fillText(e, 0, 0), r.restore(), Rt(n));
}
function Kt() {
  let e = new x(0.62, 0.82, 3, 4),
    t = e.attributes.position;
  for (let e = 0; e < t.count; e += 1) {
    let n = t.getX(e),
      r = t.getY(e);
    t.setZ(e, 0.06 * Math.cos((n / 0.31) * 1.4) + 0.04 * (r / 0.41) ** 2);
  }
  return (e.computeVertexNormals(), e);
}
function qt({ words: e, quality: t }) {
  let n = 8.2,
    r = 3.1,
    i = new T(),
    a = new T();
  i.add(a);
  let o = Kt(),
    s = (e.length ? e : [`……`]).slice(0, 3),
    c = Math.round((t.low ? 140 : 220) / s.length),
    l = L(41),
    u = new y(),
    d = new m(),
    p = new ee(),
    h = new E(),
    v = new E(),
    b = [],
    x = s.map((e, i) => {
      let s = new S({ map: Gt(e, 5 + i), roughness: 0.9, side: 2 }),
        u = new D(o, s, c);
      ((u.castShadow = !t.low), (u.receiveShadow = !0));
      for (let e = 0; e < c; e += 1) {
        let t = l() ** 0.75,
          i = t * n,
          a = r * (1 - t) ** 0.85 * (0.82 + l() * 0.22) + 0.15,
          o = l() * Math.PI * 2,
          s = {
            im: u,
            i: e,
            x: Math.cos(o) * a,
            y: i,
            z: Math.sin(o) * a,
            yaw: -o + Math.PI / 2,
            tilt: -0.35 - (1 - t) * 0.25 + (l() - 0.5) * 0.5,
            roll: (l() - 0.5) * 1.4,
            s: 0.85 + l() * 0.6,
            ph: l() * 6.28,
            out: null,
          };
        b.push(s);
        let c = 0.42 + t * 0.55 + l() * 0.08;
        u.setColorAt(e, new f(c, c * 0.97, c * 0.93));
      }
      return ((u.instanceColor.needsUpdate = !0), a.add(u), u);
    }),
    te = (e, t = 0) => {
      (p.set(e.tilt + t * 0.05, e.yaw, e.roll + t * 0.04, `YXZ`),
        d.setFromEuler(p),
        e.out
          ? (v.set(e.out.x, e.out.y, e.out.z), h.setScalar(e.s * e.out.k))
          : (v.set(e.x, e.y, e.z), h.setScalar(e.s)),
        e.im.setMatrixAt(e.i, u.compose(v, d, h)));
    };
  (b.forEach((e) => te(e)),
    x.forEach((e) => {
      e.instanceMatrix.needsUpdate = !0;
    }));
  let w = Ie(128),
    O = [-0.62, 0.62].map((e) => {
      let t = new re(
        new _({ map: w, color: `#ffb03a`, transparent: !0, opacity: 0, depthWrite: !1, blending: 2, fog: !1 }),
      );
      return (t.position.set(e, n * 0.66, 1.602), t.scale.setScalar(0.95), a.add(t), t);
    }),
    ie = O.map((e) => {
      let t = new g(new ne(0.13, 16, 10), new C({ color: `#1b120b`, transparent: !0, opacity: 0 }));
      return (t.position.copy(e.position).add(new E(0, -0.02, 0.06)), a.add(t), t);
    }),
    ae = [
      [-1.05, 2.05],
      [0.05, 2.75],
      [1.1, 1.95],
    ],
    oe = (e) => r * Math.max(0, 1 - e / n) ** 0.85 * 0.94 + 0.12,
    se = s.map((e, t) => {
      let n = Ht({ map: Vt(e, 20 + t) }),
        r = new T(),
        [a, o] = ae[t],
        s = Math.sqrt(Math.max(0.01, oe(o) ** 2 - a * a));
      return (
        r.position.set(a, o, s),
        (r.rotation.y = Math.atan2(a, s) * 0.7),
        (r.rotation.x = -0.18),
        r.add(n.mesh),
        i.add(r),
        { ...n, holder: r, word: e, peeled: !1, base: new E(a, o, s) }
      );
    }),
    j = 0,
    M = !0,
    N = {
      group: i,
      slips: se,
      eyes: O,
      height: n,
      setRise(e) {
        a.position.y = -8.2 * 1.02 * (1 - e);
        for (let t of se) t.holder.position.y = t.base.y * a.scale.y - n * 1.02 * (1 - e);
        let t = k.smoothstep(e, 0.82, 1);
        (O.forEach((e) => {
          e.material.opacity = t * 0.95;
        }),
          ie.forEach((e) => {
            e.material.opacity = t;
          }));
      },
      drop(e = () => {}) {
        j += 1;
        let t = [1, 0.8, 0.62, 0.45][Math.min(j, 3)];
        A.to(a.scale, { x: t, y: t, z: t, duration: 0.9, ease: `back.out(2.2)` });
        for (let e of se)
          if (!e.peeled) {
            let n = e.base;
            A.to(e.holder.position, {
              x: n.x * (0.75 + 0.25 * t),
              y: Math.min(n.y, n.y * (0.6 + 0.4 * t)),
              z: Math.sqrt(Math.max(0.01, (oe(n.y) * t) ** 2 - (n.x * (0.75 + 0.25 * t)) ** 2)) + 0.1,
              duration: 0.9,
              ease: `back.out(2)`,
            });
          }
        let n = b
          .filter((e) => !e.out)
          .sort(() => l() - 0.5)
          .slice(0, Math.round(b.length * 0.18));
        for (let t of n) e(t);
      },
      blowSheet(e, t = new E(1.6, 3.2, 1.2)) {
        let n = { k: 0 },
          r = new E(e.x, e.y, e.z).multiplyScalar(a.scale.x);
        e.out = { x: r.x, y: r.y, z: r.z, k: 1 };
        let i = new E(r.x, 0, r.z)
          .normalize()
          .multiplyScalar(2 + l() * 3)
          .add(t.clone().multiplyScalar(0.5 + l()));
        A.to(n, {
          k: 1,
          duration: 1.6 + l() * 1.2,
          ease: `power1.in`,
          onUpdate: () => {
            ((e.out.x = r.x + i.x * n.k * 2.2),
              (e.out.y = r.y + i.y * n.k * 2.2 + Math.sin(n.k * 9 + e.ph) * 0.3),
              (e.out.z = r.z + i.z * n.k * 2.2),
              (e.out.k = a.scale.x * (1 - n.k * n.k)),
              (e.roll += 0.12));
          },
        });
      },
      burst() {
        return new Promise((e) => {
          (b.filter((e) => !e.out).forEach((e) => N.blowSheet(e, new E((l() - 0.5) * 3, 4.5, (l() - 0.5) * 3))),
            A.to(
              O.map((e) => e.material),
              { opacity: 0, duration: 0.5 },
            ),
            A.to(
              ie.map((e) => e.material),
              { opacity: 0, duration: 0.5 },
            ),
            setTimeout(() => {
              ((M = !1), e());
            }, 2600));
        });
      },
      update(e, t) {
        if (i.visible) {
          for (let e of b) te(e, M ? Math.sin(t * 1.7 + e.ph) : 0);
          if (
            (x.forEach((e) => {
              e.instanceMatrix.needsUpdate = !0;
            }),
            M)
          ) {
            let e = 1 + Math.sin(t * 1.3) * 0.012;
            a.position.x = Math.sin(t * 0.9) * 0.04;
            let n = Math.sin(t * 0.7) > 0.985 ? 0.15 : 1;
            (O.forEach((t) => t.scale.set(0.95 * e, 0.95 * n, 1)),
              ie.forEach((e) => {
                e.scale.y = n;
              }));
          }
        }
      },
      dispose() {
        (i.removeFromParent(),
          o.dispose(),
          x.forEach((e) => {
            (e.material.map?.dispose(), e.material.dispose(), e.dispose());
          }));
      },
    };
  return (N.setRise(0), N);
}
function Jt() {
  let [e, t] = Lt(128, 300);
  (zt(t, 128, 300, { base: `#f6ecd2`, edge: `#e3cfa2`, seed: 31 }),
    (t.strokeStyle = `rgba(179,50,42,0.8)`),
    (t.lineWidth = 5),
    t.strokeRect(8, 8, 112, 284),
    (t.fillStyle = `#16110d`));
  for (let e of [44, 84]) (t.beginPath(), t.ellipse(e, 104, 9, 12, 0, 0, Math.PI * 2), t.fill());
  t.fillStyle = `#fff`;
  for (let e of [47, 87]) (t.beginPath(), t.arc(e, 99, 3, 0, Math.PI * 2), t.fill());
  ((t.strokeStyle = `#16110d`), (t.lineWidth = 4), t.beginPath(), t.arc(64, 140, 10, 0.2, Math.PI - 0.2), t.stroke());
  let n = new x(0.17, 0.4, 4, 10),
    r = n.attributes.position;
  for (let e = 0; e < r.count; e += 1) {
    let t = r.getX(e),
      n = r.getY(e),
      i = Math.max(0, t / 0.085 + n / 0.2 - 1.1);
    (r.setZ(e, 0.02 * Math.sin(n * 9) + i * i * 0.05), r.setY(e, n - i * i * 0.03));
  }
  (n.computeVertexNormals(), n.translate(0, 0.2, 0));
  let i = new g(n, new S({ map: Rt(e), roughness: 0.85, side: 2 }));
  i.castShadow = !0;
  let a = new T();
  (a.add(i), (a.visible = !1));
  let o = 0;
  return {
    group: a,
    mesh: i,
    update(e, t, n = 1) {
      ((o += e * (5 + n * 4)),
        (i.position.y = Math.abs(Math.sin(o)) * 0.05 * n),
        (i.rotation.z = Math.sin(t * 23) * 0.05 * n),
        (i.scale.y = 1 - Math.abs(Math.sin(o)) * 0.06 * n));
    },
  };
}
async function Yt({ max: e }) {
  let t = (await ce(`models/xiyou/x_monkey.glb`)).scene.clone(!0);
  ((t.rotation.y = ue), M(t, { height: 0.34 }), t.updateMatrixWorld(!0));
  let n = null;
  t.traverse((e) => {
    e.isMesh && !n && (n = e);
  });
  let r = n.geometry.clone().applyMatrix4(n.matrixWorld),
    i = n.material.clone();
  i.roughness = Math.max(i.roughness ?? 0, 0.7);
  let a = new D(r, i, e);
  ((a.castShadow = !0), (a.count = 0), (a.frustumCulled = !1));
  let o = [],
    s = new y(),
    c = new m(),
    l = new E(0, 1, 0),
    u = new E(),
    d = new E(),
    f = L(77);
  return {
    mesh: a,
    list: o,
    spawn(t, n = 0) {
      if (o.length >= e) return null;
      let r = {
        x: t.x,
        y: t.y,
        z: t.z,
        tx: t.x,
        tz: t.z,
        heading: n,
        born: 0,
        ph: f() * 6.28,
        speed: 1.3 + f() * 0.7,
        k: 0,
        carry: !1,
        lift: 0,
      };
      return (o.push(r), (a.count = o.length), r);
    },
    send(e) {
      o.forEach((t, n) => {
        let r = e(t, n);
        r && ((t.tx = r.x), (t.tz = r.z));
      });
    },
    middle() {
      let e = new E();
      return (o.forEach((t) => e.add(d.set(t.x, 0, t.z))), o.length ? e.divideScalar(o.length) : e);
    },
    arrived(e = 0.25) {
      return o.every((t) => Math.hypot(t.tx - t.x, t.tz - t.z) < e);
    },
    update(e, t) {
      for (let n = 0; n < o.length; n += 1) {
        let r = o[n];
        r.born = Math.min(1, r.born + e * 3.5);
        let i = r.tx - r.x,
          f = r.tz - r.z,
          p = Math.hypot(i, f),
          m = !1;
        if (p > 0.04) {
          let t = Math.min(p, r.speed * e);
          ((r.x += (i / p) * t), (r.z += (f / p) * t), (m = !0));
          let n = Math.atan2(i, f) - r.heading;
          ((n = Math.atan2(Math.sin(n), Math.cos(n))), (r.heading += n * Math.min(1, e * 10)));
        }
        r.ph += e * (m ? 15 : 5);
        let h = Math.abs(Math.sin(r.ph)) * (m ? 0.13 : 0.03),
          g = r.born < 1 ? 1 + Math.sin(r.born * Math.PI) * 0.35 : 1;
        (d.set(r.x, (t ? t(r.x, r.z) : 0) + h + r.lift, r.z),
          c.setFromAxisAngle(l, r.heading),
          u.setScalar(Math.max(0.001, r.born * g)),
          a.setMatrixAt(n, s.compose(d, c, u)));
      }
      a.instanceMatrix.needsUpdate = !0;
    },
    clear() {
      ((o.length = 0), (a.count = 0));
    },
  };
}
var Xt = (e, t) => {
  let n = e.createBuffer(1, Math.floor(e.sampleRate * t), e.sampleRate),
    r = n.getChannelData(0);
  for (let e = 0; e < r.length; e += 1) r[e] = Math.random() * 2 - 1;
  return n;
};
function Zt(
  e,
  {
    at: t = 0,
    dur: n = 0.2,
    type: r = `bandpass`,
    f0: i = 1200,
    f1: a = i,
    q: o = 1,
    gain: s = 0.3,
    attack: c = 0.005,
  } = {},
) {
  let l = e.currentTime + t,
    u = e.createBufferSource();
  u.buffer = Xt(e, n + 0.05);
  let d = e.createBiquadFilter();
  ((d.type = r),
    (d.Q.value = o),
    d.frequency.setValueAtTime(i, l),
    d.frequency.exponentialRampToValueAtTime(Math.max(30, a), l + n));
  let f = e.createGain();
  (f.gain.setValueAtTime(1e-4, l),
    f.gain.exponentialRampToValueAtTime(s, l + c),
    f.gain.exponentialRampToValueAtTime(1e-4, l + n),
    u.connect(d).connect(f).connect(e.destination),
    u.start(l),
    u.stop(l + n + 0.05));
}
function Qt(
  e,
  { at: t = 0, f: n = 440, f1: r = n, dur: i = 0.6, type: a = `sine`, gain: o = 0.12, attack: s = 0.01 } = {},
) {
  let c = e.currentTime + t,
    l = e.createOscillator();
  ((l.type = a), l.frequency.setValueAtTime(n, c), r !== n && l.frequency.exponentialRampToValueAtTime(r, c + i));
  let u = e.createGain();
  (u.gain.setValueAtTime(1e-4, c),
    u.gain.exponentialRampToValueAtTime(o, c + s),
    u.gain.exponentialRampToValueAtTime(1e-4, c + i),
    l.connect(u).connect(e.destination),
    l.start(c),
    l.stop(c + i + 0.05));
}
var $t = [392, 440, 493.9, 587.3, 659.3, 784],
  X = {
    pluck() {
      let e = F();
      e &&
        (Zt(e, { dur: 0.16, f0: 2400, f1: 900, q: 2, gain: 0.32 }),
        Qt(e, { at: 0.02, f: 320, f1: 180, dur: 0.12, type: `triangle`, gain: 0.12 }));
    },
    peel(e = 0.5) {
      let t = F();
      t && Zt(t, { dur: 0.09, f0: 3200 + e * 1800, f1: 1800, q: 3, gain: 0.07 + e * 0.05, attack: 0.002 });
    },
    word(e) {
      let t = F();
      if (!t) return;
      let n = $t[Math.max(0, Math.min(5, e))];
      (Qt(t, { f: n, dur: 1.6, type: `sine`, gain: 0.13 }),
        Qt(t, { f: n * 2, dur: 0.9, type: `triangle`, gain: 0.03 }));
    },
    chord() {
      let e = F();
      e &&
        ($t.forEach((t, n) => Qt(e, { at: n * 0.04, f: t, dur: 2.6, gain: 0.07 })),
        Zt(e, { dur: 2.2, type: `lowpass`, f0: 1400, f1: 300, q: 0.7, gain: 0.16, attack: 0.4 }));
    },
    clap() {
      let e = F();
      e &&
        (Zt(e, { dur: 0.07, f0: 1800, f1: 1200, q: 1.4, gain: 0.55, attack: 0.001 }),
        Qt(e, { f: 210, f1: 120, dur: 0.12, type: `triangle`, gain: 0.2, attack: 0.001 }));
    },
    rumble(e = 1) {
      let t = F();
      t && Zt(t, { dur: e, type: `lowpass`, f0: 160, f1: 60, q: 0.8, gain: 0.5, attack: e * 0.8 });
    },
    boom() {
      let e = F();
      e &&
        (Qt(e, { f: 70, f1: 28, dur: 2.4, type: `sine`, gain: 0.7, attack: 0.01 }),
        Zt(e, { dur: 2.8, type: `lowpass`, f0: 900, f1: 80, q: 0.6, gain: 0.6, attack: 0.01 }),
        Zt(e, { at: 0.15, dur: 1.6, f0: 500, f1: 200, q: 0.5, gain: 0.25 }));
    },
    breath() {
      let e = F();
      if (!e) return { set() {}, stop() {} };
      let t = e.createBufferSource();
      ((t.buffer = Xt(e, 2)), (t.loop = !0));
      let n = e.createBiquadFilter();
      ((n.type = `bandpass`), (n.frequency.value = 700), (n.Q.value = 0.6));
      let r = e.createGain();
      return (
        (r.gain.value = 1e-4),
        t.connect(n).connect(r).connect(e.destination),
        t.start(),
        {
          set(t) {
            let i = e.currentTime;
            (r.gain.setTargetAtTime(0.02 + t * 0.32, i, 0.06), n.frequency.setTargetAtTime(500 + t * 1100, i, 0.08));
          },
          stop() {
            let n = e.currentTime;
            (r.gain.setTargetAtTime(1e-4, n, 0.15), setTimeout(() => t.stop(), 700));
          },
        }
      );
    },
    chirp() {
      let e = F();
      if (!e) return;
      let t = 900 + Math.random() * 700;
      (Qt(e, { f: t, f1: t * 1.6, dur: 0.09, type: `triangle`, gain: 0.05, attack: 0.004 }),
        Qt(e, { at: 0.08, f: t * 1.3, f1: t * 0.9, dur: 0.08, type: `triangle`, gain: 0.04, attack: 0.004 }));
    },
    pop() {
      let e = F();
      e && Zt(e, { dur: 0.18, type: `lowpass`, f0: 1600, f1: 300, q: 0.7, gain: 0.12 });
    },
    brush() {
      let e = F();
      e && Zt(e, { dur: 0.22, f0: 1500, f1: 700, q: 0.9, gain: 0.06, attack: 0.03 });
    },
    stamp() {
      let e = F();
      e &&
        (Qt(e, { f: 120, f1: 60, dur: 0.22, type: `sine`, gain: 0.5, attack: 0.003 }),
        Zt(e, { dur: 0.12, type: `lowpass`, f0: 900, f1: 200, q: 0.8, gain: 0.3, attack: 0.002 }));
    },
  },
  en = { zh: `孙悟空`, en: `Sun Wukong` },
  tn = {
    card: {
      zh: [`当一回取经人`, `五行山下 · 大唐贞观十三年`],
      en: [`Your turn as the pilgrim`, `639 · under the Five Elements Mountain`],
    },
    shoutWho: { zh: `山脚下有人叫喊`, en: `A shout from the foot of the mountain` },
    shout: { zh: `我师父来也！我师父来也！`, en: `My master has come! My master has come!` },
    greet: {
      zh: `咦，你不是和尚。也罢，揭帖子的就是师父。`,
      en: `Hey — you're no monk. Never mind: whoever lifts the seal is my master.`,
    },
    askWeeds: { zh: `师父，先替老孙拔了脸上的草。`, en: `Master, first pull the grass off old Monkey's face.` },
    face: {
      zh: `头上堆苔藓，耳中生薜萝。
鬓边少发多青草，颔下无须有绿莎。`,
      en: `Moss heaped on his head, creepers in his ears;
grass at his temples, green sedge on his chin.`,
    },
    weedsLabel: { zh: `替他拔草`, en: `Pull the grass off` },
    pull: { zh: `往外拔`, en: `Pull it out` },
    weedsDone: {
      zh: `五百年了，头一回有人替我拔草。`,
      en: `Five hundred years, and the first hand to pull the grass.`,
    },
    askSeal: {
      zh: `山顶上有张金字压帖。你上去揭了它，老孙就出来了。`,
      en: `On the summit there's a seal with six gold words. Go up and lift it, and old Monkey is out.`,
    },
    sealLabel: { zh: `上山揭帖`, en: `Up to the seal` },
    seal: {
      zh: `果然见金光万道，瑞气千条，有块四方大石，
石上贴着一封皮，却是「唵嘛呢叭咪吽」六个金字。`,
      en: `And there were ten thousand rays of gold, a thousand threads of holy mist, a square stone,
and on it a paper seal: six gold words, Om mani padme hum.`,
    },
    peel: { zh: `按住，往回揭`, en: `Hold, and peel it back` },
    skyWho: { zh: `空中有声`, en: `A voice in the air` },
    sky: { zh: `今日他的难满。`, en: `Today his ordeal is over.` },
    hand: {
      zh: `将五指化作金、木、水、火、土五座联山，唤名『五行山』，轻轻的把他压住。`,
      en: `His five fingers became five joined mountains, of metal, wood, water, fire and earth, called the Five Elements Mountain; lightly, they held him down.`,
    },
    away: {
      zh: `师父，你请走开些，我好出来，莫惊了你。`,
      en: `Master, go a little way off, so I can come out without frightening you.`,
    },
    awayLabel: { zh: `走开些`, en: `Step away` },
    further: { zh: `再走！再走！`, en: `Further! Further!` },
    furtherLabel: { zh: `再走远些`, en: `Further off` },
    fall: { zh: `一声响亮，真个是地裂山崩。`, en: `A great crack — and truly, the earth split and the mountain fell.` },
    out: { zh: `师父，我出来也！`, en: `Master, I'm out!` },
    register: {
      zh: `圣僧受过八十难，还少一难，不得完成此数。`,
      en: `The holy monk has passed eighty ordeals. One is missing; the number is not complete.`,
    },
    registerSrc: { zh: `第九十九回 · 观音翻难簿`, en: `Chapter 99 · Guanyin reads the register` },
    yours: { zh: `还少的那一难，是你的。`, en: `The one it's short of is yours.` },
    seen: { zh: `但见那怪：`, en: `And there it stood: ` },
    slipsAsk: {
      zh: `师父莫怕。它身上也贴着帖子，跟方才一样，揭！`,
      en: `Don't be afraid, Master. It has slips pasted on it too. Peel them, like before!`,
    },
    slip: { zh: `揭下来`, en: `Peel it off` },
    truth: { zh: `原来是`, en: `And it was only ` },
    blowAsk: { zh: `师父，对着老孙的毫毛，吹一口仙气。`, en: `Master, blow on old Monkey's hairs. One breath.` },
    blowHold: { zh: `按住，吹一口气`, en: `Hold, and blow` },
    blowMic: { zh: `吹一口气，或按住`, en: `Blow — or hold` },
    change: { zh: `变！`, en: `Change!` },
    himself: { zh: `老孙替你吹！`, en: `Old Monkey will blow for you!` },
    pass: { zh: `师父，你的通关文牒。`, en: `Master, your travel pass.` },
    passLabel: { zh: `看你的通关文牒`, en: `See your travel pass` },
    talk: { zh: `和悟空说说话`, en: `Talk to Wukong` },
    chips: {
      zh: [`五百年里你想什么？`, `一个筋斗真有十万八千里？`, `你怕紧箍吗？`],
      en: [
        `What did you think about for five hundred years?`,
        `Is one somersault really 108,000 li?`,
        `Are you afraid of the headband?`,
      ],
    },
    chatFallback: {
      zh: `嘿，老孙走了一下神。师父再问一遍？`,
      en: `Hey, old Monkey's mind wandered. Ask me again, Master?`,
    },
    exit: { zh: `回到人生广场`, en: `Back to the Life Plaza` },
    go: {
      zh: { weeds: `拔草`, seal: `揭帖`, away: `走开`, further: `再远些`, home: `回广场` },
      en: { weeds: `Pull grass`, seal: `The seal`, away: `Step off`, further: `Further`, home: `Plaza` },
    },
    guideWho: { zh: `引路人`, en: `The guide` },
    next: { zh: (e) => `还早。下一站：${e}。`, en: (e) => `Still early. Next: ${e}.` },
    early: { zh: `师父这就走？帖子还在山顶上呢。`, en: `Leaving already, Master? The seal's still on the summit.` },
    bye: {
      zh: `师父慢走。下回再来，老孙还在这部书里。`,
      en: `Go well, Master. Come again — old Monkey will be in this book.`,
    },
    next: { zh: `毕竟不知后事如何，且听下回分解。`, en: `What came of it, the next chapter will tell.` },
    chapter: {
      zh: `五行山前揭金帖　众猴扛难入书来`,
      en: `The Seal Comes Off the Mountain / Little Monkeys Carry an Ordeal Home`,
    },
    tale: {
      zh: (e) =>
        `话说那日五行山下，来了一位${e || `过路人`}，替老孙揭了帖子。难簿上还少一难，众猴把它扛进书里，凑足了八十一之数。毕竟不知后事如何，且听下回分解。`,
      en: (e) =>
        `Now it is told that ${e || `a passer-by`} came to the foot of the Five Elements Mountain and lifted the seal for old Monkey. The register was one ordeal short; the little monkeys carried theirs into the book, and the eighty-one were complete. What came of it, the next chapter will tell.`,
    },
  },
  nn = (e, t) => [...String(e || ``).trim()].slice(0, t).join(``);
function rn(e) {
  let t = e?.life && typeof e.life == `object` ? e.life : {},
    n = (e) =>
      /[\u3400-\u9fff]/.test(e)
        ? [...e].length >= 2 && [...e].length <= 8
        : e.length >= 2 && e.length <= 24 && e.split(/\s+/).length <= 4,
    r = [];
  for (let e of Array.isArray(t.details) ? t.details : []) {
    let t = String(e || ``).trim();
    n(t) && !r.includes(t) && r.push(t);
  }
  if (r.length < 3)
    for (let i of [t.answer, t.story, e?.note]) {
      let e = String(i || ``);
      for (let t of e.split(/[\u3400-\u9fff]/.test(e) ? /[，。、；：！？,.;:!?\s「」“”"]+/ : /[,.;:!?"“”]+/)) {
        let e = t.trim();
        n(e) && !r.includes(e) && r.push(e);
      }
    }
  return r.slice(0, 3);
}
function an(e, t, n) {
  let r = e?.nan || {},
    i = n === `en`,
    a = (e, t) => nn(e, i ? t * 3 : t),
    o = (Array.isArray(r.words) && r.words.filter(Boolean).length ? r.words.filter(Boolean) : rn(t))
      .map((e) => a(e, 8))
      .slice(0, 3);
  return {
    title: a(r.title, 24) || (i ? `The Ordeal You Brought` : `你带来的这一难`),
    demon: a(r.demon, 16) || (i ? `a nameless imp` : `无名小妖`),
    disguise: a(r.disguise, 40) || (i ? `a mountain of paper, pressing down` : `一座压下来的纸山`),
    truth: a(r.truth, 40) || (i ? `one small slip of paper` : `一张小纸条`),
    words: o.length ? o : [i ? `one short` : `还少一难`],
    see: a(r.see, 80) || (i ? `Ha! All that mountain, and it's this small.` : `嘿，吓人的一座山，原来就这么一点儿。`),
    carry:
      a(r.carry, 80) ||
      (i
        ? `Into the book with it. Eighty-one ordeals, and this one is yours.`
        : `扛进书里去。八十一难，这一难是你的。`),
  };
}
function on(e = new Date(), t = `zh`) {
  let n = Math.floor(((e.getHours() + 1) % 24) / 2);
  return t === `en`
    ? [
        `the hour of the Rat`,
        `the hour of the Ox`,
        `the hour of the Tiger`,
        `the hour of the Hare`,
        `the hour of the Dragon`,
        `the hour of the Snake`,
        `the hour of the Horse`,
        `the hour of the Goat`,
        `the hour of the Monkey`,
        `the hour of the Rooster`,
        `the hour of the Dog`,
        `the hour of the Pig`,
      ][n]
    : [`子时`, `丑时`, `寅时`, `卯时`, `辰时`, `巳时`, `午时`, `未时`, `申时`, `酉时`, `戌时`, `亥时`][n];
}
var sn = Object.assign({ "../../engine/look.js": fe, "../../engine/sky.js": P, "../../ui/stamp.js": pe }),
  cn = sn[`../../engine/look.js`] || null,
  ln = sn[`../../engine/sky.js`] || null,
  un = sn[`../../ui/stamp.js`] || null,
  dn = { zh: `PM 4:26  贞观十三年  五行山`, en: `PM 4:26  639  FIVE ELEMENTS MT.` },
  fn = 1.36,
  pn = `xiyou`,
  mn = (e) => new E(e[0], e[1] ?? 0, e[2] ?? 0),
  Z = (e) => new Promise((t) => setTimeout(t, e)),
  hn = (e, t) => new Promise((n) => A.to(e, { ...t, onComplete: n })),
  gn = (e) =>
    e?.nan
      ? j(`把「${e.nan}」写进了难簿，算第八十一难`, `"${e.nan}" went into the register as the eighty-first ordeal`)
      : ``,
  _n = { uRimColor: { value: new f(`#ffd9b0`) }, uRimStrength: { value: 0.25 }, uRimDir: { value: new E(0, 1, 0) } };
function vn(e) {
  e.traverse((e) => {
    if (e.isMesh)
      for (let t of [].concat(e.material)) {
        if (!t?.isMeshStandardMaterial || t.userData.xyRim) continue;
        t.userData.xyRim = !0;
        let e = t.onBeforeCompile,
          n = t.customProgramCacheKey();
        ((t.onBeforeCompile = function (t, n) {
          (e.call(this, t, n),
            Object.assign(t.uniforms, _n),
            (t.fragmentShader = t.fragmentShader
              .replace(
                `#include <common>`,
                `#include <common>
uniform vec3 uRimColor, uRimDir; uniform float uRimStrength;`,
              )
              .replace(
                `#include <opaque_fragment>`,
                `{ float rimF = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 3.0); outgoingLight += uRimColor * uRimStrength * rimF * smoothstep(-0.1, 0.7, dot(normal, uRimDir)); }
#include <opaque_fragment>`,
              )));
        }),
          (t.customProgramCacheKey = () => `${n}|xy-rim`),
          (t.needsUpdate = !0));
      }
  });
}
function yn(e) {
  let t = document.createElement(`div`);
  ((t.className = `xy-cap`),
    (t.innerHTML = `<div class="xy-cap-name"></div><div class="xy-cap-text"></div><div class="xy-cap-src"></div>`));
  let n = document.createElement(`div`);
  ((n.className = `xy-title`), (n.innerHTML = `<div class="xy-title-a"></div><div class="xy-title-b"></div>`));
  let r = document.createElement(`div`);
  ((r.className = `xy-gold`), e.append(t, n, r));
  let i = 0;
  return {
    say(e, { ms: n = 4200, src: r = ``, name: a = `` } = {}) {
      (clearTimeout(i),
        (t.querySelector(`.xy-cap-name`).textContent = a),
        (t.querySelector(`.xy-cap-text`).textContent = e),
        (t.querySelector(`.xy-cap-src`).textContent = r),
        t.classList.toggle(`named`, !!a),
        t.classList.add(`show`),
        (i = setTimeout(() => t.classList.remove(`show`), n)));
    },
    hide() {
      (clearTimeout(i), t.classList.remove(`show`));
    },
    async title([e, t], r = 3e3) {
      ((n.querySelector(`.xy-title-a`).textContent = e),
        (n.querySelector(`.xy-title-b`).textContent = t),
        n.classList.add(`show`),
        await Z(r),
        n.classList.remove(`show`));
    },
    flash() {
      (r.classList.remove(`on`), r.offsetWidth, r.classList.add(`on`));
    },
  };
}
async function bn({ stage: e, me: n, lang: r, onProgress: i = () => {} }) {
  let { scene: o, camera: l, renderer: u, quality: d } = e,
    f = u.domElement,
    p = document.getElementById(`ui`);
  ((l.far = 2200), e.setFov(48), (o.environmentIntensity = 0.16));
  let h = e.finish?.uniforms;
  if (cn) {
    let t = (e) => {
      for (let t = e; t; t = t.parent) if (t.isSkinnedMesh || t.isBone) return !0;
      return !1;
    };
    (cn.useTripoRule(!0, { keep: (e, n) => t(n) }),
      cn.useLook(e, `procedural`, { phoneBloom: !1 }),
      e.bloom && (e.bloom.enabled = !1),
      cn.useShot(e, `walk`),
      cn.usePaperUi(!0, { accent: cn.ACCENTS.xiyou.seal }));
  } else
    ((u.toneMapping = 4),
      (u.toneMappingExposure = 0.97),
      e.setBloom({ strength: 0.22, radius: 0.55, threshold: 0.86 }),
      d.low && e.bloom && (e.bloom.enabled = !1),
      h &&
        ((h.uSat.value = 0.88),
        (h.uVibrance.value = 0.1),
        (h.uContrast.value = 0.94),
        (h.uVignette.value = 0.22),
        (h.uWarm.value = 0.025),
        (h.uGrain.value = 0.028)));
  u.localClippingEnabled = !0;
  let y = Ae(p, {
      beats: 3,
      stripLabel: j(`第十四回`, `Chapter 14`),
      exit: j(`回到人生广场`, `Back to the Life Plaza`),
      atlas: !0,
    }),
    b = je({ hud: y, lang: r });
  y.onMute((e) => b.setMuted(e));
  let x = (e) => tn[e][r],
    ee = en[r],
    S = _e(n, `xiyou`, r),
    T = he(n, `xiyou`, r).then((e) => (e?.id && (S = e), e)),
    D = (e) => (S ? Promise.resolve(S) : Promise.race([T, Z(e).then(() => null)])),
    O = Re(`xiyou`, r);
  (O.then((e) => {
    e && b.prefetch([e], pn);
  }),
    Ne(d.low));
  let ie = null,
    M = null,
    N = null,
    ce;
  if (ln && cn)
    ((ie = ln.createDaylight(o, { azimuth: 230, fog: cn.FOG.xiyou, quality: d, box: 18, renderer: u })),
      (ce = ie.sun),
      (N = Qe(o, ce)));
  else {
    ((M = We(o, d)),
      (ce = new E(Math.sin(k.degToRad(230)), 0, Math.cos(k.degToRad(230)))
        .multiplyScalar(Math.cos(k.degToRad(22)))
        .setY(Math.sin(k.degToRad(22)))),
      M.sun.color.set(`#ffd6a5`),
      (M.sun.intensity = 3),
      M.sun.position.copy(ce).multiplyScalar(70),
      (M.sun.shadow.radius = 3.5),
      (M.sun.shadow.intensity = 0.75),
      M.hemi.color.set(`#c9d8f0`),
      M.hemi.groundColor.set(`#e6d2b8`),
      (M.hemi.intensity = 1.1),
      M.fill && (M.fill.intensity = 0),
      (o.fog = new ae(`#f3e2d2`, 20, 120)),
      Object.assign(M.sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16 }),
      M.sun.shadow.camera.updateProjectionMatrix());
    let e = M.dome.material.uniforms;
    ((e.uTop.value = Ye(`#a9c2e6`)),
      (e.uMid.value = Ye(`#c6d7ef`)),
      (e.uVeil.value = Ye(`#f7dcc6`)),
      (e.uHor.value = Ye(`#f7dcc6`)),
      (e.uWarm.value = Ye(`#f9d2b0`)),
      (e.uBelow.value = Ye(`#f3e6da`)),
      e.uSun.value.set(`#ffe6bf`),
      (e.uDir = { value: ce }));
    for (let e of M.group.children) e.visible = e === M.dome;
    N = Qe(o, ce);
  }
  i(0.1);
  let le = await kt({ scene: o, quality: d, sun: ce, onProgress: (e) => i(0.1 + e * 0.6) }),
    ue = Ge(o),
    de = et(o, {
      pine: (e, t) =>
        Ot(`models/xiyou/x_pine.glb`, { x: 0, z: 0, y: t * 0.32, height: t }).then((t) => {
          e.add(t);
        }),
    }),
    fe = () => {
      d.low && (u.shadowMap.needsUpdate = !0);
    };
  d.low && ((u.shadowMap.autoUpdate = !1), fe());
  let pe = Me(o),
    P = Pt(H.head);
  o.add(P.group);
  let F = new s(`#ffe6cc`, 3.6, 3.8, 2);
  (F.position.set(H.head.x + 0.15, H.head.y + 0.25, H.head.z + 1.05), o.add(F));
  let I = [...le.colliders],
    L = Pe({ body: `#f2c94c` });
  ((L.object.visible = !1), o.add(L.object));
  let R = Te({
    avatar: L,
    disc: { r: B.walk },
    colliders: I,
    heightAt: dt,
    floor: {
      step: (e, t) => (ft(t.x, t.z) ? t : ft(t.x, e.z) ? { x: t.x, z: e.z } : ft(e.x, t.z) ? { x: e.x, z: t.z } : e),
    },
    speed: 1.45,
  });
  R.place(H.spawn.x, H.spawn.z, H.spawn.h);
  let Ke = new t(new E(0, 1, 0), -(tt - 0.02)),
    qe = new E(H.head.x, H.head.y - fn * 0.88, H.head.z),
    z = Pe({ body: `#f2efe6`, skin: `#f3c9a8`, hair: `#c98a3c`, height: fn });
  (z.object.position.copy(qe), (z.object.visible = !1), o.add(z.object));
  let Je = (e, t) =>
      e.object.traverse((e) => {
        if (e.isMesh) for (let n of [].concat(e.material)) ((n.clippingPlanes = t ? [Ke] : null), (n.needsUpdate = !0));
      }),
    Xe = Promise.all([
      ve(`models/chars/${n.avatar}.glb`)
        .then((e) => {
          (o.remove(L.object), (L = e), vn(e.object), o.add(e.object), R.setAvatar(e));
        })
        .catch(() => {
          L.object.visible = !0;
        }),
      ve(`models/chars/wukong.glb`, { height: fn })
        .then((e) => {
          (o.remove(z.object),
            e.object.position.copy(z.object.position),
            (e.object.rotation.y = 0),
            vn(e.object),
            Je(e, !0),
            e.play(`look-around`, { loop: !0 }),
            (z = e),
            o.add(e.object));
        })
        .catch(() => {
          z.object.visible = !0;
        }),
    ]),
    Ze = Yt({ max: d.low ? 40 : 72 })
      .then((e) => (o.add(e.mesh), e))
      .catch(() => null);
  i(0.8);
  let $e = oe(f, { joystickEl: y.joystickEl }),
    U = Ce(l, {
      box: { minX: -24, maxX: 24, minZ: -24, maxZ: 24, maxY: 22 },
      distance: 5.2,
      maxDistance: 12,
      groundAt: pt,
      rayHit: le.rayHit,
      height: 1.4,
      eyeHeight: 1.52,
      lookAhead: 1.6,
      onMode: (e) => y.setView(e, { announce: !0 }),
    });
  ((U.yaw = 0),
    (U.pitch = 0.3),
    y.onView((e) => {
      U.mode = e;
    }),
    De() === `first` && (U.mode = `first`));
  let nt = (e, t) => ft(e, t) && I.every((n) => (e - n.x) ** 2 + (t - n.z) ** 2 >= (n.r + 0.22) ** 2),
    rt = we({ minX: -B.r, maxX: B.r, minZ: -B.r, maxZ: B.r, cellSize: 0.3, free: nt }),
    it = () => {
      rt = we({ minX: -B.r, maxX: B.r, minZ: -B.r, maxZ: B.r, cellSize: 0.3, free: nt });
    },
    W = (e, t) => {
      let n = xe(rt, e, t);
      return n.length ? n : [t.clone()];
    };
  R.setSight(be({ cellSize: 0.3, isWalkable: nt }));
  let G = Se({ camera: l, canvas: f, player: R, input: $e, promptEl: y.promptEl, actionEl: y.actionEl, route: W }),
    at = !1,
    ot = (e, t) => {
      let n = e.distanceTo(t);
      if (n < 0.3) return !0;
      let r = le.rayHit(e, [(t.x - e.x) / n, (t.y - e.y) / n, (t.z - e.z) / n], n);
      return r == null || r > n - 0.4;
    },
    st = h ? h.uVignette.value : 0,
    ct = h ? { uVignette: { value: st } } : null,
    K = Ue({
      player: R,
      cam: U,
      host: () => z,
      hostHeight: fn,
      heightAt: dt,
      inside: (e, t) => Math.hypot(e, t) < B.r + 4,
      clear: ot,
      input: $e,
      interactions: G,
      hud: y,
      finish: ct,
      onScene: (e) => {
        at = e;
      },
    }),
    lt = Ft(p),
    ut = yn(p),
    q = Fe(p, { kind: `pass` }),
    mt = se(document.body),
    ht = null,
    gt = !1,
    J = (e, t = {}) => b.say(t.who || ee, e, { role: pn }),
    _t = () => {
      ht = R.position;
    },
    vt = (e, t = null) => {
      let n = z.object.position,
        r = Math.hypot(e.x - n.x, e.z - n.z);
      return hn(n, { x: e.x, z: e.z, duration: t ?? Math.max(0.4, r / 1.3), ease: `power1.inOut` });
    },
    yt = `walk`,
    bt = (t, n) => ((yt = t), cn ? cn.useShot(e, t, n) : Promise.resolve()),
    xt = { model: [30, 50], walk: [50, 64], close: [32, 48] },
    St = (e, t, n = yt) => {
      if (!cn) return e;
      let r = U.portrait > 0.5,
        i = r ? 78 : 48,
        a = xt[n][+!!r],
        o = Math.tan(k.degToRad(i / 2)) / Math.tan(k.degToRad(a / 2));
      return t.clone().add(e.clone().sub(t).multiplyScalar(o));
    },
    Ct = new E(),
    wt = (e) => {
      Ct.copy(e).project(l);
      let t = f.getBoundingClientRect();
      return { x: t.left + (Ct.x * 0.5 + 0.5) * t.width, y: t.top + (-Ct.y * 0.5 + 0.5) * t.height };
    },
    Tt = (e, t, n) => U.frame(St(e, t), t, { fit: !1, ...n }),
    Y = `arrive`,
    Et = !1,
    Dt = new g(new ne(0.42, 12, 8), new C({ visible: !1 }));
  (Dt.position.copy(H.head), o.add(Dt));
  let At = new g(new c(1.1, 0.9, 1.1), new C({ visible: !1 }));
  (At.position.set(H.stone.x, 3.4, H.stone.z), o.add(At));
  let jt = (() => {
      let e = new g(new w(0.32, 0.44, 48), new C({ color: `#ffd27a`, transparent: !0, opacity: 0, depthWrite: !1 }));
      return ((e.rotation.x = -Math.PI / 2), (e.renderOrder = 3), o.add(e), e);
    })(),
    Mt = {
      head: G.add({
        id: `head`,
        position: new E(H.head.x, 0, H.head.z + 0.5),
        standAt: new E(H.headStand.x, 0, H.headStand.z),
        radius: 1.6,
        labelHeight: 1.5,
        label: () => x(`weedsLabel`),
        enabled: () => Y === `weeds`,
        meshes: [Dt],
        activate: () => Zt(),
      }),
      seal: G.add({
        id: `seal`,
        position: new E(H.stone.x, 0, H.stone.z),
        standAt: new E(H.sealStand.x, 0, H.sealStand.z),
        radius: 1.5,
        labelHeight: 4.6,
        label: () => x(`sealLabel`),
        enabled: () => Y === `seal`,
        meshes: [At],
        activate: () => $t(),
      }),
      away: G.add({
        id: `away`,
        position: new E(H.away1.x, 0, H.away1.z),
        radius: 0.9,
        labelHeight: 1.4,
        label: () => x(Y === `further` ? `furtherLabel` : `awayLabel`),
        enabled: () => Y === `away` || Y === `further`,
        activate: () => bn(!0),
      }),
    },
    It = [],
    Lt = ke(p, {
      chips: tn.chips[r],
      placeholder: j(`想问悟空什么？`, `Ask Wukong anything…`),
      onAsk: async (e) => {
        It.push({ role: `you`, text: e });
        let t =
          (S?.id ? await me.chat({ visit: S.id, text: e, history: It, journey: Oe(`xiyou`) }) : null)?.reply ||
          x(`chatFallback`);
        (It.push({ role: `me`, text: t }), _t(), z.play?.(`agree`), await J([t]));
      },
      onClose: () => G.setBusy(!1),
    }),
    Rt = new g(new v(0.34, 0.34, 1.4, 10), new C({ visible: !1 }));
  o.add(Rt);
  let zt = G.add({
      id: `wukong`,
      position: new E(),
      radius: 1.7,
      labelHeight: 1.75,
      aside: !0,
      label: () => x(`talk`),
      meshes: [Rt],
      enabled: () => gt && (Y === `gift` || Y === `home`) && !q.open_,
      activate: () => {
        (_t(), G.setBusy(!0), Lt.open());
      },
    }),
    Bt = G.add({
      id: `pass`,
      position: new E(),
      radius: 1.6,
      labelHeight: 0.8,
      label: () => x(`passLabel`),
      enabled: () => Y === `home` && !!$,
      done: () => !0,
      activate: () => Bn(),
    }),
    Vt = xn();
  (Vt.position.set(H.exit.x, 0.05, H.exit.z), o.add(Vt));
  let Ht = G.add({
    id: `exit`,
    position: new E(H.exit.x, 0, H.exit.z),
    radius: 1.6,
    labelHeight: 1.5,
    label: () => x(`exit`),
    meshes: [Vt],
    enabled: () => !Et && Y !== `arrive`,
    activate: () => Jn(),
  });
  (G.setGuide(() => {
    if (at || Et || Lt.isOpen || q.open_) return null;
    let e = x(`go`);
    return Y === `weeds`
      ? { item: Mt.head, label: e.weeds }
      : Y === `seal`
        ? { item: Mt.seal, label: e.seal }
        : Y === `away` || Y === `further`
          ? { item: Mt.away, label: e[Y] }
          : Y === `home`
            ? { item: Ht, label: e.home }
            : null;
  }),
    Ee(`xiyou`));
  let Ut = new t(new E(0, 1, 0), 0),
    Gt = new E(),
    Kt = new a();
  $e.onTap((e, t) => {
    if (at || Lt.isOpen || q.open_ || G.tap(e, t)) return;
    let n = f.getBoundingClientRect();
    (Kt.setFromCamera(new te(((e - n.left) / n.width) * 2 - 1, -((t - n.top) / n.height) * 2 + 1), l),
      (Ut.constant = -dt(R.position.x, R.position.z)),
      Kt.ray.intersectPlane(Ut, Gt) && nt(Gt.x, Gt.z) && (R.walkPath(W(R.position, Gt)), y.ripple(e, t)));
  });
  async function Xt() {
    let [e, t] = er.wide;
    bt(`model`);
    let n = St(mn(e), mn(t));
    if ((U.frame(n, mn(t), { cut: !0 }), o.fog)) {
      let e = Math.max(0, n.distanceTo(mn(t)) - 12);
      ((o.fog.near = 20 + e), (o.fog.far = 120 + e));
    }
    (y.hideHint(), await Xe, K.begin());
    try {
      un?.showStamp({ date: dn[r] });
      let e = ut.title(x(`card`), 3e3),
        t = (await D(2600))?.plan?.greeting || x(`greet`);
      (b.prefetch([x(`shout`), t, x(`askWeeds`)], pn),
        await e,
        bt(`walk`, { duration: 3.2 }),
        sn(),
        Tt(new E(2.2, 1.8, 4.2), new E(0, 0.9, -0.6)),
        X.clap(),
        await J([x(`shout`)], { who: x(`shoutWho`) }));
      let n = 2.25;
      (Tt(H.head.clone().add(new E(0.2 * n, 0.19 * n, n)), H.head.clone().add(new E(0, 0.1, 0))),
        (await J([t])) && (await Le(b, ee, O, { role: pn, hm: j(`嘿……`, `Heh…`), after: [x(`askWeeds`)] })));
    } finally {
      K.end({ lookAt: H.head });
    }
    ((Y = `weeds`), y.coach());
  }
  async function Zt() {
    if (!(Et || Y !== `weeds`)) {
      ((Et = !0), K.begin());
      try {
        (R.stop(), R.faceToward(H.head.x, H.head.z), bt(`close`, { duration: 1.1 }));
        let e = 0.92 - U.portrait * 0.24;
        (Tt(H.head.clone().add(new E(0.13 * e, 0.21 * e, e)), H.head.clone().add(new E(0, -0.02, 0))),
          ut.say(x(`face`), { ms: 5200, src: j(`第十四回`, `Chapter 14`) }),
          await Z(900),
          await Qt(),
          y.setProgress(1),
          z.play?.(`laugh`));
        let t = await D(1500);
        await J([t?.plan?.beats?.weeds || x(`weedsDone`), x(`askSeal`)]);
      } finally {
        (bt(`walk`, { duration: 1.1 }), K.end({ lookAt: new E(H.sealStand.x, 0, H.sealStand.z) }), (Et = !1));
      }
      Y = `seal`;
    }
  }
  function Qt() {
    return new Promise((e) => {
      let t = -1,
        n = 0,
        r = () => P.tufts.map((e, t) => (e.gone ? -1 : t)).filter((e) => e >= 0),
        i = (e, t) => {
          let n = -1,
            i = 1 / 0;
          for (let a of r()) {
            let r = wt(P.at(a)),
              o = Math.hypot(r.x - e, r.y - t);
            o < i && ((i = o), (n = a));
          }
          return n;
        },
        a = (e) => {
          let t = wt(P.at(e)),
            n = wt(H.head),
            r = t.x - n.x,
            i = t.y - n.y,
            a = Math.hypot(r, i) || 1;
          return { x: t.x + (r / a) * 70, y: t.y + (i / a) * 70 };
        },
        o = (n) => {
          let i = P.at(n);
          (P.pop(
            n,
            i
              .clone()
              .lerp(l.position, 0.45)
              .add(new E((Math.random() - 0.5) * 0.8, 0.5, 0)),
          ),
            X.pluck(),
            navigator.vibrate?.(14),
            pe.puff(i, { count: 5, color: `#b7d77e`, size: 0.16, spread: 0.06, life: 0.8 }),
            (t = -1),
            r().length || (lt.off(), setTimeout(e, 450)));
        };
      lt.drag({
        hint: x(`pull`),
        from: () => {
          let e = r();
          return e.length ? wt(P.at(e[0])) : null;
        },
        to: () => {
          let e = r();
          return e.length ? a(e[0]) : null;
        },
        onDown: (e, r) => {
          ((t = i(e, r)), (n = 0));
        },
        onMove: (e, r) => {
          t < 0 || ((n += Math.hypot(e, r)), P.pull(t, Math.min(1, n / 70)), n > 70 && o(t));
        },
        onUp: (e) => {
          t < 0 || (e || n > 22 ? o(t) : (P.pull(t, 0), (t = -1)));
        },
      });
    });
  }
  async function $t() {
    if (!(Et || Y !== `seal`)) {
      ((Et = !0), K.begin());
      try {
        (R.stop(), R.faceToward(H.stone.x, H.stone.z));
        let e = le.sealHolder.getWorldPosition(new E()),
          t = new E(H.sealStand.x - H.stone.x, 0, H.sealStand.z - H.stone.z).normalize();
        (bt(`close`, { duration: 1.1 }),
          Tt(
            e
              .clone()
              .addScaledVector(t, 0.62)
              .add(new E(0, 1.8, 0)),
            e.clone().addScaledVector(t, 0.08),
          ),
          ut.say(x(`seal`), { ms: 6e3, src: j(`第十四回`, `Chapter 14`) }),
          await Z(1200),
          await nn(e, t),
          y.setProgress(2),
          X.chord(),
          le.blowSeal(),
          bt(`walk`, { duration: 1 }));
        let n = new E(-t.z, 0, t.x),
          r = e
            .clone()
            .addScaledVector(t, 2.5)
            .addScaledVector(n, 1.3)
            .add(new E(0, 1.9, 0));
        (Tt(r, e.clone().add(new E(0, 2.2, 0))),
          await Z(1100),
          await rn(),
          ut.say(x(`hand`), { ms: 5600, src: j(`第七回`, `Chapter 7`) }),
          await Z(900),
          await y.say(x(`skyWho`), x(`sky`), { hold: 2800 }),
          await Z(700),
          sn(),
          bt(`walk`, { duration: 1.4 }));
        let i = await D(1e3);
        (Tt(H.head.clone().add(new E(0.9, 2.6, 3.2)), new E(0.3, 2.2, -2.6)),
          await J([i?.plan?.beats?.seal, x(`away`)].filter(Boolean)));
      } finally {
        (yt !== `walk` && bt(`walk`, { duration: 1.1 }), K.end({ lookAt: new E(H.away1.x, 0, H.away1.z) }), (Et = !1));
      }
      Y = `away`;
    }
  }
  function nn(e, t) {
    return new Promise((n) => {
      let r = 0,
        i = 0,
        a = 0,
        o = !1,
        s = e.clone().addScaledVector(t, -0.42),
        c = e.clone().addScaledVector(t, 0.42),
        l = () => k.clamp(Math.min(window.innerWidth, window.innerHeight) * 0.6, 230, 420),
        u = (e) => {
          if (o) return;
          ((r = Math.min(1, r + e)), le.setPeel(r));
          let t = performance.now();
          for (t - a > 45 && (X.peel(r), (a = t)); i < Math.min(6, Math.floor(r * 6 + 0.35));)
            (X.word(i), (i += 1), navigator.vibrate?.(8));
          r >= 1 && ((o = !0), lt.off(), setTimeout(n, 350));
        };
      lt.drag({
        hint: x(`peel`),
        from: () => wt(s),
        to: () => {
          let e = wt(c);
          return { x: e.x, y: e.y + 70 };
        },
        onMove: (e, t) => u((Math.max(0, t) + Math.abs(e) * 0.4 + Math.max(0, -t) * 0.4) / l()),
        onUp: (e) => {
          if (e) {
            let e = { v: 0 },
              t = r;
            A.to(e, { v: 0.14, duration: 0.35, onUpdate: () => u(t + e.v - r) });
          }
        },
      });
    });
  }
  function rn(e = 3.8) {
    let t = l.position.clone(),
      n = l.getWorldDirection(new E()).multiplyScalar(6).add(t),
      r = new E(V.x - 0.3, 1.8, V.z + 0.9);
    cn && bt(`model`, { duration: e * 0.8 });
    let i = k.degToRad(cn ? xt.model[+(U.portrait > 0.5)] : l.fov),
      a = 2 * Math.atan(Math.tan(i / 2) * l.aspect),
      s = 10.8 / Math.tan(Math.min(i, a) / 2),
      c = new E(0.1, Math.sin(k.degToRad(58)), Math.cos(k.degToRad(58))).normalize(),
      u = r.clone().addScaledVector(c, s),
      d = { t: 0 };
    return hn(d, {
      t: 1,
      duration: e,
      ease: `power2.inOut`,
      onUpdate: () => {
        let e = t.clone().lerp(u, d.t);
        if (
          ((e.y += Math.sin(d.t * Math.PI) * 2.5),
          U.frame(e, n.clone().lerp(r, Math.min(1, d.t * 1.25)), { cut: !0 }),
          o.fog)
        ) {
          let t = Math.max(0, e.distanceTo(r) - 12);
          ((o.fog.near = 20 + t), (o.fog.far = 120 + t));
        }
      },
    });
  }
  let sn = () => o.fog && A.to(o.fog, { near: 20, far: 120, duration: 1.4, ease: `power2.inOut` });
  function bn(e = !1) {
    let t = R.position,
      n = H.head,
      r = Math.hypot(t.x - n.x, t.z - n.z);
    Y === `away` && (e || (dt(t.x, t.z) < 0.05 && r > 3.4))
      ? ((Y = `further`), Mt.away.position.set(H.away2.x, 0, H.away2.z), J([x(`further`)]))
      : Y === `further` &&
        ((e && Math.hypot(t.x - H.away2.x, t.z - H.away2.z) < 1.2) || r > 6.6) &&
        ((Y = `falling`),
        Cn().catch((e) => {
          (console.error(`fall`, e), K.reset(), (Et = !1));
        }));
  }
  let Sn = 0;
  async function Cn() {
    ((Et = !0), R.stop(), K.begin());
    try {
      R.faceToward(V.x, V.z);
      let e = R.position.clone(),
        t = new E(V.x - e.x, 0, V.z - e.z).normalize();
      (Tt(
        e
          .clone()
          .addScaledVector(t, -3.4)
          .add(new E(1.3, 2.4, 0)),
        new E(V.x, 3.4, V.z + 1.2),
      ),
        await Z(900),
        X.rumble(1),
        ut.say(x(`fall`), { ms: 3800, src: j(`第十四回`, `Chapter 14`) }));
      let n = e
        .clone()
        .addScaledVector(t, 1.45)
        .add(new E(t.z, 0, -t.x).multiplyScalar(0.55));
      (await le.collapse({
        shake: (e) => {
          Sn = e;
        },
        boom: () => X.boom(),
        out: () => wn(n),
      }),
        (Sn = 0),
        (I.length = 0),
        I.push(
          ...le.colliders.filter(
            (e) => Math.hypot(e.x - V.x, e.z - V.z) > 5 && Math.hypot(e.x - H.head.x, e.z - H.head.z) > 1,
          ),
        ),
        it(),
        fe(),
        await Z(400),
        R.faceToward(z.object.position.x, z.object.position.z),
        _t(),
        K.talkShot(),
        z.play?.(`bow`),
        await J([x(`out`)]),
        y.setProgress(2));
    } finally {
      K.end({ lookAt: null });
    }
    await Mn();
  }
  function wn(e) {
    (Je(z, !1), z.mixer && Nt(z), (gt = !0));
    let t = z.object,
      n = t.position.clone(),
      r = { v: 0 };
    (pe.puff(H.head.clone().setY(0.3), { color: `#e3d6b8`, count: 30, size: 1.3, spread: 0.9, life: 2.6 }),
      z.play?.(`jump`),
      A.to(r, {
        v: 1,
        duration: 1.5,
        ease: `power1.inOut`,
        onUpdate: () => {
          (t.position.lerpVectors(n, e, r.v),
            (t.position.y = n.y + (0 - n.y) * r.v + Math.sin(r.v * Math.PI) * 2.6),
            (t.rotation.y = Math.atan2(R.position.x - t.position.x, R.position.z - t.position.z)));
        },
        onComplete: () => {
          ((t.position.y = 0), pe.puff(e.clone().setY(0.05), { color: `#efe6d0`, count: 12, size: 0.7, spread: 0.4 }));
        },
      }));
  }
  let Tn = null,
    En = null,
    Dn = null,
    Q = null,
    On = null,
    $ = null,
    kn = [],
    An = 0,
    jn = `hold`;
  async function Mn() {
    ((Y = `nan`), (Et = !0));
    let e = await D(4e3),
      t = an(e?.plan, n, r),
      i = R.position.clone(),
      a = new E(0, 0, -1),
      s = new E(1, 0, 0),
      c = new E(V.x, 0, V.z + 3.5),
      l = c.clone().addScaledVector(a, -5.6),
      u = l.clone().addScaledVector(s, -1).addScaledVector(a, 0.15),
      f = l.clone().addScaledVector(s, 1.55).addScaledVector(a, -0.2);
    K.begin();
    try {
      ((Dn = Wt({ lang: r })),
        Dn.group.position.copy(f).setY(9),
        (Dn.group.rotation.y = Math.atan2(-a.x, -a.z) + 0.25),
        o.add(Dn.group),
        (ht = f),
        Tt(
          i
            .clone()
            .addScaledVector(a, -2)
            .addScaledVector(s, -0.6)
            .add(new E(0, 2.6, 0)),
          f.clone().add(new E(0, 1.2, 0)),
        ),
        ge.chime(),
        Dn.light(1),
        await hn(Dn.group.position, { y: 0.02, duration: 2.6, ease: `power2.out` }),
        Tt(
          f
            .clone()
            .addScaledVector(a, -1.3)
            .addScaledVector(s, -0.25)
            .add(new E(0, 1.75, 0)),
          f.clone().add(new E(0, 0.05, 0)),
        ),
        ut.say(x(`register`), { ms: 5600, src: x(`registerSrc`) }),
        await Z(4600),
        _t(),
        K.talkShot(),
        await J([x(`yours`)]),
        Dn.light(0.25),
        (Tn = qt({ words: t.words, quality: d })),
        Tn.group.position.copy(c),
        (Tn.group.rotation.y = Math.atan2(-a.x, -a.z)),
        o.add(Tn.group),
        Tt(
          i
            .clone()
            .addScaledVector(a, -3.2)
            .add(new E(0, 0.7, 0))
            .addScaledVector(s, 0.9),
          c.clone().add(new E(0, 4.2, 0)),
        ),
        X.rumble(2.8));
      let n = { k: 0 };
      ((Sn = 0.25),
        await hn(n, { k: 1, duration: 3, ease: `power2.out`, onUpdate: () => Tn.setRise(n.k) }),
        (Sn = 0),
        fe(),
        ut.say(`${x(`seen`)}${t.disguise}`, { ms: 5200, name: t.demon }),
        await Z(1600),
        (ht = c),
        await Promise.all([Nn(l), vt(u), J([x(`slipsAsk`)])]),
        R.faceToward(c.x, c.z),
        Tt(
          l
            .clone()
            .addScaledVector(a, -2.3)
            .addScaledVector(s, 0.55)
            .add(new E(0, 1.95, 0)),
          c
            .clone()
            .addScaledVector(a, -2)
            .add(new E(0, 2.35, 0)),
        ),
        await Z(900),
        (kn = await Pn()),
        ut.flash(),
        X.chord(),
        h && A.to(h.uWarm, { value: 0.2, duration: 0.25, yoyo: !0, repeat: 1 }),
        Tn.burst().then(() => {
          Tn.group.visible = !1;
        }));
      let p = l.clone().addScaledVector(a, 1.15).addScaledVector(s, 0.15);
      ((En = Jt()),
        En.group.position.copy(p),
        (En.group.rotation.y = Math.atan2(-a.x, -a.z)),
        o.add(En.group),
        await Z(900),
        (En.group.visible = !0),
        pe.puff(p.clone().setY(0.1), { color: `#fff3d6`, count: 10, size: 0.45, spread: 0.2, life: 1.4 }),
        X.pop(),
        (On = e?.id ? me.shot(e.id, { slips: kn, hour: on(new Date(), `zh`) }) : null));
      let m = 1 - U.portrait;
      (Tt(
        p
          .clone()
          .addScaledVector(a, 1.05 + m * 1)
          .addScaledVector(s, 0.45)
          .add(new E(0, 0.42 + m * 0.4, 0)),
        p
          .clone()
          .addScaledVector(a, -0.55)
          .add(new E(0, 0.32 + m * 0.35, 0)),
      ),
        ut.say(`${x(`truth`)}${t.truth}`, { ms: 4200 }),
        await Z(1400),
        (ht = p),
        z.play?.(`laugh`),
        await J([t.see]),
        _t());
      let g = z.object.position.clone().lerp(p, 0.5).setY(0);
      (Tt(
        g
          .clone()
          .addScaledVector(a, 2.7)
          .addScaledVector(s, 0.35)
          .add(new E(0, 1.25, 0)),
        g
          .clone()
          .addScaledVector(a, -0.3)
          .add(new E(0, 0.55, 0)),
      ),
        await J([x(`blowAsk`)]),
        (Q = await Ze),
        (An = await In(p)),
        await Ln(p, f, a),
        Tt(
          f
            .clone()
            .addScaledVector(a, -1.15)
            .add(new E(0, 1.6, 0)),
          f.clone().add(new E(0, 0.05, 0)),
        ),
        await Rn(j(`${t.title}第八十一难`, `${t.title} — the eighty-first`)),
        y.setProgress(3),
        _t(),
        K.talkShot(),
        await J([t.carry]),
        zn(),
        z.play?.(`agree`),
        await J([x(`pass`)]));
    } finally {
      (K.end({ lookAt: null }), (Et = !1));
    }
    ((Y = `gift`), Bt.position.copy(f), await Bn());
  }
  let Nn = (e) =>
    new Promise((t) => {
      let n = !1;
      (R.walkPath(W(R.position, e), () => {
        ((n = !0), t());
      }),
        setTimeout(() => {
          n || ((n = !0), R.stop(), t());
        }, 6e3));
    });
  function Pn() {
    return new Promise((e) => {
      let t = [],
        n = null,
        r = 0,
        i = 0,
        a = () => Tn.slips.filter((e) => !e.peeled),
        s = (e) => e.holder.localToWorld(new E(0, 0, 0)),
        c = (e) => e.holder.localToWorld(new E(0, e.h * 0.42, 0)),
        l = (e, t) => {
          let n = null,
            r = 1 / 0;
          for (let i of a()) {
            let a = wt(s(i)),
              o = Math.hypot(a.x - e, a.y - t);
            o < r && ((r = o), (n = i));
          }
          return n;
        },
        u = () => k.clamp(Math.min(window.innerWidth, window.innerHeight) * 0.5, 200, 340),
        d = (i) => {
          ((i.peeled = !0), t.push(i.word), (n = null), (r = 0), X.chord(), navigator.vibrate?.([10, 30, 14]));
          let s = i.mesh,
            c = s.getWorldPosition(new E()),
            l = s.getWorldQuaternion(new m());
          (o.attach(s), s.position.copy(c), s.quaternion.copy(l));
          let u = { v: 0 };
          (A.to(u, {
            v: 1,
            duration: 2.4,
            ease: `power1.in`,
            onUpdate: () => {
              ((s.position.y = c.y + u.v * u.v * 9),
                (s.position.x = c.x + Math.sin(u.v * 7) * u.v * 1.4),
                (s.rotation.y += 0.09),
                (s.rotation.x += 0.05),
                (s.material.opacity = 1 - u.v * u.v));
            },
            onComplete: () => s.removeFromParent(),
          }),
            Tn.drop((e) => Tn.blowSheet(e)),
            (Sn = 0.18),
            setTimeout(() => {
              Sn = 0;
            }, 450),
            a().length ? lt.nudge() : (lt.off(), setTimeout(() => e(t), 700)));
        },
        f = (e) => {
          if (!n) return;
          ((r = Math.min(1, r + e)), n.setPeel(r));
          let t = performance.now();
          (t - i > 45 && (X.peel(r), (i = t)), r >= 1 && d(n));
        };
      lt.drag({
        hint: x(`slip`),
        from: () => {
          let e = a();
          return e.length ? wt(c(e[0])) : null;
        },
        to: () => {
          let e = a();
          if (!e.length) return null;
          let t = wt(c(e[0]));
          return { x: t.x, y: t.y + 120 };
        },
        onDown: (e, t) => {
          n || ((n = l(e, t)), (r = 0));
        },
        onMove: (e, t) => f((Math.max(0, t) + Math.abs(e) * 0.4 + Math.max(0, -t) * 0.4) / u()),
        onUp: (e) => {
          if (e && n) {
            let e = { v: 0 },
              t = r;
            A.to(e, { v: 0.2, duration: 0.3, onUpdate: () => f(t + e.v - r) });
          }
        },
      });
    });
  }
  let Fn = new re(new _({ map: Ie(64), color: `#ffd66b`, transparent: !0, opacity: 0, depthWrite: !1, blending: 2 }));
  (Fn.scale.setScalar(0.32), o.add(Fn));
  function In(e) {
    return new Promise((t) => {
      let n = z.object.position,
        r = new E(n.x, 0, n.z).addScaledVector(new E(e.x - n.x, 0, e.z - n.z).normalize(), 0.4).setY(0.95);
      (Fn.position.copy(r), A.to(Fn.material, { opacity: 0.9, duration: 0.4 }));
      let i = X.breath(),
        a = 0,
        o = 0,
        s = !1,
        c = performance.now(),
        l = !1,
        u = !1,
        f = performance.now(),
        p = Q ? (d.low ? 40 : 72) : 0,
        m = (t) => {
          let n = t * 2.39996,
            r = 0.32 + Math.sqrt(t) * 0.12;
          return { x: e.x + Math.cos(n) * r, z: e.z + Math.sin(n) * r };
        },
        h = () => {
          if (!Q || a >= p) return;
          let t = Math.random() * Math.PI * 2,
            n = 0.15 + Math.random() * 0.55,
            i = new E(r.x + Math.cos(t) * n, 0, r.z + Math.sin(t) * n),
            o = Q.spawn(i, Math.atan2(e.x - i.x, e.z - i.z));
          if (!o) return;
          let s = m(a);
          ((o.tx = s.x),
            (o.tz = s.z),
            (a += 1),
            a % 2 && pe.puff(i.clone().setY(0.15), { color: `#fff1d0`, count: 3, size: 0.28, spread: 0.08, life: 0.9 }),
            X.pop(),
            a % 3 == 1 && X.chirp());
        },
        g = () => {
          u || ((u = !0), (jn = _.stop()), i.stop(), A.to(Fn.material, { opacity: 0, duration: 0.4 }), t(a));
        },
        _ = lt.breath({
          label: x(`blowHold`),
          micLabel: x(`blowMic`),
          onLevel: (e, t) => {
            if (u) return;
            let n = performance.now();
            if ((i.set(e), Fn.scale.setScalar(0.32 * (1 - Math.min(0.7, a / Math.max(1, p)))), e > 0.22))
              for (
                s = !0,
                  c = n,
                  l || ((l = !0), z.play?.(`laugh`), b.say(ee, [x(`change`)], { role: pn })),
                  o += t * (5 + e * 12);
                o >= 1;
              )
                (--o, h());
            if ((s && a >= 8 && n - c > 1100 && g(), a >= p && p && g(), !s && n - f > 1e4)) {
              ((s = !0), (l = !0), b.say(ee, [x(`himself`)], { role: pn }));
              let e = setInterval(() => {
                (h(), (u || a >= 18 || !Q) && (clearInterval(e), g()));
              }, 90);
            }
          },
        });
      Q || setTimeout(g, 2500);
    });
  }
  function Ln(e, t, n) {
    return new Promise((r) => {
      if (!Q || !Q.list.length) {
        hn(En.group.position, { x: t.x, z: t.z, duration: 1.2 }).then(r);
        return;
      }
      let i = Dn.group.localToWorld(Dn.slot.clone());
      Tt(
        e
          .clone()
          .addScaledVector(n, -2.6)
          .add(new E(0, 1.9, 0))
          .lerp(t.clone().add(new E(0, 2.2, 0)), 0.25),
        e
          .clone()
          .lerp(t, 0.5)
          .add(new E(0, 0.2, 0)),
      );
      let a = performance.now(),
        o = () => {
          Q.arrived(0.3) || performance.now() - a > 2600 ? s() : setTimeout(o, 120);
        },
        s = async () => {
          (await hn(En.group.position, { y: 0.3, duration: 0.45, ease: `back.out(2)` }),
            X.chirp(),
            Q.send((e, t) => {
              let n = t * 2.39996,
                r = 0.22 + Math.sqrt(t) * 0.1;
              return { x: i.x + Math.cos(n) * r * 1.3, z: i.z + Math.sin(n) * r };
            }));
          let e = () => {
            let t = Q.middle();
            if (
              ((En.group.position.x += (t.x - En.group.position.x) * 0.08),
              (En.group.position.z += (t.z - En.group.position.z) * 0.08),
              Math.hypot(En.group.position.x - i.x, En.group.position.z - i.z) < 0.35 || performance.now() - a > 9e3)
            ) {
              c();
              return;
            }
            requestAnimationFrame(e);
          };
          e();
        },
        c = async () => {
          (await hn(En.group.position, { x: i.x, y: i.y + 0.35, z: i.z, duration: 0.5, ease: `power2.out` }),
            X.brush(),
            await hn(En.group.scale, { x: 0.01, y: 0.01, z: 0.01, duration: 0.45, ease: `power2.in` }),
            (En.group.visible = !1),
            pe.puff(i.clone(), { color: `#3a2a20`, count: 6, size: 0.25, spread: 0.1, life: 1 }));
          let e = Dn.group.position,
            t = Q.list.length;
          (Q.send((n, r) => {
            let i = -1.5 + (r / Math.max(1, t - 1)) * 3,
              a = 1.2 + (r % 3) * 0.22;
            return { x: e.x + Math.cos(i) * a, z: e.z + Math.sin(i) * a * 0.85 };
          }),
            await Z(900),
            r());
        };
      o();
    });
  }
  async function Rn(e) {
    Dn.light(0.7);
    let t = /[\u3400-\u9fff]/.test(e) ? [...e].length : Math.max(1, e.split(/\s+/).length);
    for (let n = 1; n <= t; n += 1) (Dn.write(e, n / t), X.brush(), await Z(/[\u3400-\u9fff]/.test(e) ? 170 : 260));
    (X.stamp(), await Z(900));
  }
  function zn() {
    if (!Q) return;
    let e = z.object.position;
    (Q.list.forEach((e, t) => {
      t % 3 == 0 && pe.puff(new E(e.x, 0.15, e.z), { color: `#fff1d0`, count: 3, size: 0.26, spread: 0.06, life: 0.8 });
    }),
      X.pop(),
      setTimeout(() => X.pop(), 120),
      Q.clear(),
      Fn.position.set(e.x, 1.2, e.z),
      (Fn.material.opacity = 0.9),
      A.to(Fn.material, { opacity: 0, duration: 0.9, delay: 0.3 }));
  }
  async function Bn() {
    if (!$) {
      un?.showStamp({ date: dn[r] });
      let e = S,
        t = Be();
      (($ = {
        kind: `pass`,
        mine: !0,
        image: null,
        title: e?.plan?.shot?.title || x(`chapter`),
        narration: e?.plan?.shot?.dedication || tn.tale[r](n.identity),
        nan: an(e?.plan, n, r).title,
        who: n.identity || ``,
        slips: kn,
        monkeys: An,
        breath: jn,
        hour: on(new Date(), r),
        seen: { melies: !!t.melies, vangogh: !!t.vangogh, lishizhen: !!t.lishizhen },
        stamped: !1,
      }),
        Ve(`xiyou`, { title: $.title, did: gn($) }),
        Hn());
    }
    (G.setBusy(!0), q.open($, { onClosed: Vn }));
  }
  function Vn() {
    (G.setBusy(!1),
      Y === `gift` &&
        ((Y = `home`),
        Kn().catch((e) => {
          (console.error(`farewell`, e), K.reset(), (Et = !1));
        })));
  }
  async function Hn() {
    let e = await (On || Promise.resolve(null));
    if (!e?.id) {
      (($.image = ``), ($.failed = !0), q.open_ && q.open($, { onClosed: Vn }));
      return;
    }
    let t = Date.now();
    for (;;) {
      let n = e.status === `done` ? e : await me.shotStatus(e.id);
      if (n?.status === `done`) {
        (($.image = me.media(n.image)),
          n.title && (($.title = n.title), Ve(`xiyou`, { title: n.title, did: gn($) })),
          n.dedication && ($.narration = n.dedication),
          q.open_ && q.open($, { onClosed: Vn }),
          ge.sparkle());
        return;
      }
      if (n?.status === `failed` || Date.now() - t > 24e4) {
        (($.failed = !0), q.open_ && q.open($, { onClosed: Vn }));
        return;
      }
      await Z(2500);
    }
  }
  let Un = !1,
    Wn = () => Object.values(He).find((e) => e.open && e.id !== `xiyou` && !Be()[e.id]) || null;
  async function Gn() {
    ((Un = !0),
      gt && (R.faceToward(z.object.position.x, z.object.position.z), _t(), K.talkShot(), z.play?.(`wave`)),
      await J([S?.plan?.farewell || x(`bye`)]));
    let e = Wn();
    e && (await b.say(x(`guideWho`), [tn.next[r](e.short)], { role: `guide` }));
  }
  async function Kn() {
    if (!Un) {
      ((Et = !0), K.begin());
      try {
        await Gn();
      } finally {
        (K.end({ lookAt: new E(H.exit.x, 0, H.exit.z) }), (Et = !1));
      }
    }
  }
  let qn = !1;
  async function Jn() {
    if (!qn) {
      ((qn = !0),
        b.stop(),
        K.begin(),
        $
          ? Un || (await Gn())
          : (gt && (R.faceToward(z.object.position.x, z.object.position.z), _t(), K.talkShot(), z.play?.(`wave`)),
            await J([x(`early`)])),
        ut.say(x(`next`), { ms: 3e3 }),
        await Z(1200),
        await mt.close(1100));
      try {
        sessionStorage.setItem(`lp.iris`, `1`);
      } catch {}
      location.href = `/life-learn/?go=plaza&from=xiyou`;
    }
  }
  y.onExit(() => Jn());
  let Yn = async (e) => {
      if (!qn) {
        ((qn = !0), b.stop(), $e.setEnabled(!1), await mt.close(900));
        try {
          sessionStorage.setItem(`lp.iris`, `1`);
        } catch {}
        location.href = `/life-learn/?go=${e}`;
      }
    },
    Xn = !0,
    Zn = ze(p, {
      lives: Object.values(ye({ xiyou: !0 })),
      here: `xiyou`,
      blocked: () => qn || q.open_ || Lt.isOpen,
      onOpen: () => {
        ((Xn = $e.state.enabled), $e.setEnabled(!1));
      },
      onClose: () => {
        qn || $e.setEnabled(Xn);
      },
      onGo: (e) => Yn(e),
      onPlaza: () => (at || document.body.classList.contains(`in-scene`) ? Yn(`plaza&from=xiyou`) : Jn()),
    });
  y.onAtlas(() => Zn.toggle());
  let Qn = !1,
    $n = new te(qe.x, qe.z);
  e.onUpdate((e, t) => {
    let n = at || Y === `arrive` || Lt.isOpen || q.open_ || qn;
    $e.setControls(!n);
    let r = n ? { x: 0, y: 0 } : $e.readMove();
    (!Qn && (r.x || r.y) && ((Qn = !0), setTimeout(() => y.hideHint(), 4e3)), R.update(e, r, U.yaw, $e.running()));
    let i = z.object.position,
      a = i.x - $n.x,
      o = i.z - $n.y,
      s = Math.hypot(a, o) / Math.max(e, 1e-4);
    if (($n.set(i.x, i.z), gt)) {
      let t = s > 0.15 && s < 5 && i.y < 0.05 ? Math.atan2(a, o) : ht ? Math.atan2(ht.x - i.x, ht.z - i.z) : null;
      if (t !== null && i.y < 0.05) {
        let n = t - z.object.rotation.y;
        ((n = Math.atan2(Math.sin(n), Math.cos(n))),
          (z.object.rotation.y += n * (1 - Math.exp(-e * (s > 0.15 ? 9 : 4)))));
      }
      (z.setMotion(i.y < 0.05 && s < 5 ? s / 1.1 : 0, e, i.y < 0.05 && s < 5 ? s : 0),
        Rt.position.set(i.x, 0.7, i.z),
        zt.position.set(i.x, 0, i.z));
    } else z.setMotion(0, e);
    (U.update(e, R, $e),
      _n.uRimDir.value.copy(ce).transformDirection(l.matrixWorldInverse),
      Sn > 0 &&
        l.position.add(
          new E(
            (Math.random() - 0.5) * Sn * 0.22,
            (Math.random() - 0.5) * Sn * 0.16,
            (Math.random() - 0.5) * Sn * 0.22,
          ),
        ),
      G.update(),
      pe.update(e),
      ie ? ie.update(l, R.position) : M.update(e, t, l, pt),
      ct && (h.uVignette.value = st + (ct.uVignette.value - st) * 0.4),
      N?.update(e),
      le.update(e, t, l),
      ue.update(e, t, R.position),
      de.update(t),
      Tn?.update(e, t),
      En?.update(e, t, Y === `nan` ? 1 : 0.3),
      Q?.update(e, null),
      (Y === `away` || Y === `further`) && bn());
    let c = (Y === `away` || Y === `further`) && !at;
    ((jt.material.opacity += ((c ? 0.85 : 0) - jt.material.opacity) * (1 - Math.exp(-e * 4))),
      jt.position.set(Mt.away.position.x, 0.03, Mt.away.position.z),
      jt.scale.setScalar(1 + Math.sin(t * 3) * 0.07),
      (Vt.position.y = 0.12 + Math.sin(t * 1.4) * 0.05));
  });
  let er = {
    wide: [
      [9, 6.5, 14],
      [0, 1.4, -4],
    ],
    head: [
      [0.25, 1.2, 0.55],
      [0, 0.84, -0.62],
    ],
    face: [
      [0.12, 1.04, 0.3],
      [0, 0.82, -0.62],
    ],
    summit: [
      [1.1, 4.75, -3],
      [0, 3.6, -4.8],
    ],
    stair: [
      [6.5, 3.2, 1],
      [2.8, 1.5, -2.6],
    ],
    under: [
      [0, -6, 22],
      [0, -2, 0],
    ],
  };
  return (
    i(1),
    {
      player: R,
      cam: U,
      interactions: G,
      voice: b,
      mt: le,
      ready: Xe,
      start: () => {
        Xt().catch((e) => {
          (console.error(`arrival`, e), K.reset(), (Y = `weeds`));
        });
      },
      shot(e) {
        if (!e || !er[e]) return (U.release(), `released`);
        let [t, n] = er[e];
        return (U.frame(mn(t), mn(n), { cut: !0 }), e);
      },
      debug: {
        wukong: () => z,
        gsap: A,
        regrid: it,
        direct: K,
        hands: lt,
        phase: () => Y,
        weeds: P,
        demon: () => Tn,
        troop: () => Q,
        register: () => Dn,
        pass: () => $,
      },
    }
  );
}
function xn() {
  let e = new T(),
    t = new S({ color: `#ffffff`, emissive: `#fff2dc`, emissiveIntensity: 0.35, roughness: 0.9 });
  for (let [n, r, i, a] of [
    [0, 0.22, 0, 0.42],
    [0.42, 0.18, 0.08, 0.3],
    [-0.4, 0.17, -0.05, 0.32],
    [0.12, 0.34, -0.18, 0.28],
    [-0.15, 0.3, 0.2, 0.26],
  ]) {
    let o = new g(new ne(a, 18, 12), t);
    (o.position.set(n, r, i), (o.scale.y = 0.7), e.add(o));
  }
  return e;
}
export { bn as enter };
