const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/spark.module-BLkI3pTG.js",
      "assets/three.module-DCgPjWyi.js",
      "assets/three.core-DtjtRha-.js",
      "assets/Pass-CVVF-B1T.js",
    ]),
) => i.map((i) => d[i]);
import { a as e } from "./three.module-DCgPjWyi.js";
import {
  Ar as t,
  L as n,
  Li as r,
  O as i,
  Qi as a,
  Rn as o,
  St as s,
  U as c,
  Xt as l,
  ar as u,
  ba as d,
  ct as f,
  ft as p,
  io as m,
  jr as h,
  na as g,
  no as _,
  or as v,
  pa as ee,
  qi as y,
  qt as b,
  ro as x,
  ya as S,
  zi as C,
} from "./three.core-DtjtRha-.js";
import { t as te } from "./gsap-CvDoa17S.js";
import { r as ne, t as re } from "./lifecard-Bz8CsM4Y.js";
import { t as w } from "./i18n-BvGoRVq5.js";
import { n as ie } from "./assets-p2qy6QaX.js";
import { t as T } from "./preload-helper-B4-B-RAC.js";
import { f as ae, h as oe, m as se, p as ce, t as le } from "./stamp-C8irYyoR.js";
import { i as ue, r as de, s as fe, t as pe } from "./visits-C_j5CG_Y.js";
import {
  A as me,
  C as he,
  D as ge,
  E as _e,
  M as ve,
  N as ye,
  O as be,
  P as xe,
  S as Se,
  _ as Ce,
  b as we,
  f as Te,
  g as Ee,
  h as De,
  i as Oe,
  k as ke,
  l as Ae,
  m as je,
  p as Me,
  r as Ne,
  t as Pe,
  v as Fe,
  x as Ie,
} from "./journey-BS70xIEy.js";
import { t as Le } from "./direct-B4OdUEHl.js";
function E(e, t) {
  return e[Math.min(e.length - 1, Math.max(0, Math.floor(e.length * t)))];
}
function Re(e, t, n, r, i) {
  return [e * r, -(t * r - i), -(n * r)];
}
function D(
  e,
  {
    colors: t = null,
    cellSize: n = 0.6,
    origin: r = [0, 0],
    maxRadius: i = 18,
    stepHeight: a = 0.8,
    minFloorPoints: o = 5,
    clearRadius: s = 1.6,
    walkRadius: c = 1 / 0,
    maxClimb: l = 1 / 0,
    maxDescend: u = 1 / 0,
    walkBounds: d = null,
  } = {},
) {
  let f = e.length / 3;
  if (!f) return null;
  let p = (e, t) => `${e},${t}`,
    m = new Map();
  for (let a = 0; a < f; a += 1) {
    let o = e[a * 3],
      s = e[a * 3 + 2];
    if (Math.hypot(o - r[0], s - r[1]) > i) continue;
    let c = p(Math.floor(o / n), Math.floor(s / n)),
      l = m.get(c);
    (l || ((l = []), m.set(c, l)),
      l.push(t ? [e[a * 3 + 1], t[a * 3], t[a * 3 + 1], t[a * 3 + 2]] : [e[a * 3 + 1], 0.5, 0.5, 0.5]));
  }
  let h = new Map();
  for (let [e, i] of m) {
    if (i.length < o) continue;
    i.sort((e, t) => e[0] - t[0]);
    let a = i[Math.min(i.length - 1, Math.floor(i.length * 0.12))][0],
      c = 0,
      l = 0,
      u = 0,
      d = 0,
      f = 0;
    for (let [e, t, n, r] of i)
      e >= a - 0.2 && e <= a + 0.35
        ? ((c += 1), (u += t), (d += n), (f += r))
        : e >= a + 1.1 && e <= a + 2.2 && (l += 1);
    c && ((u /= c), (d /= c), (f /= c));
    let p = t ? f > u * 1.25 && d > u * 1.15 && Math.max(u, d, f) - Math.min(u, d, f) > 0.12 : !1,
      [m, g] = e.split(`,`).map(Number),
      _ = Math.hypot((m + 0.5) * n - r[0], (g + 0.5) * n - r[1]) <= s,
      v = c >= o && !p && (_ || l <= Math.max(2, c * 0.25));
    h.set(e, { floorY: a, floorCount: c, bodyCount: l, open: v, water: p, total: i.length, color: [u, d, f] });
  }
  if (!h.size) return null;
  let g = p(Math.floor(r[0] / n), Math.floor(r[1] / n)),
    _ = h.get(g);
  if (!_ || !_.open) {
    let e = null,
      t = 1 / 0;
    for (let [i, a] of h) {
      if (!a.open) continue;
      let [o, s] = i.split(`,`).map(Number),
        c = Math.hypot((o + 0.5) * n - r[0], (s + 0.5) * n - r[1]);
      c < t && ((t = c), (e = i));
    }
    if (!e) return null;
    ((_ = h.get(e)), (_.seedKey = e));
  }
  let v = _.seedKey || g,
    ee = h.get(v).floorY,
    y = new Map(),
    b = [v];
  for (y.set(v, ee); b.length;) {
    let e = b.shift(),
      t = y.get(e),
      [i, o] = e.split(`,`).map(Number);
    for (let [e, s] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ]) {
      let f = p(i + e, o + s);
      if (y.has(f)) continue;
      let m = h.get(f),
        g = e && s ? a * 1.35 : a;
      if (!m || !m.open || Math.abs(m.floorY - t) > g) continue;
      let _ = (i + e + 0.5) * n,
        v = (o + s + 0.5) * n;
      Math.hypot(_ - r[0], v - r[1]) > c ||
        (d && (_ < d.minX || _ > d.maxX || v < d.minZ || v > d.maxZ)) ||
        m.floorY - ee > l ||
        ee - m.floorY > u ||
        (y.set(f, m.floorY), b.push(f));
    }
  }
  let x = [],
    S = [],
    C = [];
  for (let [e, t] of y) {
    let [r, i] = e.split(`,`).map(Number);
    (x.push((r + 0.5) * n), S.push((i + 0.5) * n), C.push(t));
  }
  (x.sort((e, t) => e - t), S.sort((e, t) => e - t), C.sort((e, t) => e - t));
  let te = { minX: x[0] - n / 2, maxX: x[x.length - 1] + n / 2, minZ: S[0] - n / 2, maxZ: S[S.length - 1] + n / 2 },
    ne = E(C, 0.5),
    re = (e, t) => y.get(p(Math.floor(e / n), Math.floor(t / n)));
  function w(e, t, r = 8) {
    let i = Math.floor(e / n),
      a = Math.floor(t / n);
    for (let e = 0; e <= r; e += 1) {
      let t = null,
        n = 1 / 0;
      for (let r = -e; r <= e; r += 1)
        for (let o = -e; o <= e; o += 1) {
          if (Math.max(Math.abs(r), Math.abs(o)) !== e) continue;
          let s = y.get(p(i + r, a + o));
          if (s === void 0) continue;
          let c = Math.hypot(r, o);
          c < n && ((t = s), (n = c));
        }
      if (t !== null) return t;
    }
    return ne;
  }
  function ie(e, t) {
    let r = e / n - 0.5,
      i = t / n - 0.5,
      a = Math.floor(r),
      o = Math.floor(i),
      s = r - a,
      c = i - o,
      l = (e, t) => {
        let r = y.get(p(e, t));
        return r === void 0 ? w((e + 0.5) * n, (t + 0.5) * n) : r;
      },
      u = l(a, o) * (1 - s) + l(a + 1, o) * s,
      d = l(a, o + 1) * (1 - s) + l(a + 1, o + 1) * s;
    return u * (1 - c) + d * c;
  }
  let T = (e, t) => re(e, t) !== void 0;
  function ae(e, t) {
    return T(t.x, t.z)
      ? { x: t.x, z: t.z, blocked: !1 }
      : T(t.x, e.z)
        ? { x: t.x, z: e.z, blocked: !0 }
        : T(e.x, t.z)
          ? { x: e.x, z: t.z, blocked: !0 }
          : { x: e.x, z: e.z, blocked: !0 };
  }
  return {
    cellSize: n,
    cells: h,
    walkable: y,
    body: te,
    floorY: ne,
    seedKey: v,
    query: w,
    querySmooth: ie,
    isWalkable: T,
    step: ae,
  };
}
function O(
  e,
  {
    voxel: t = 0.2,
    minPoints: n = 3,
    centre: r = [0, 0],
    radius: i = 14,
    floor: a = null,
    floorClearance: o = 0.15,
  } = {},
) {
  let s = new Map(),
    c = (e, t, n) => (e + 512) * 1048576 + (t + 512) * 1024 + (n + 512);
  for (let n = 0; n < e.length; n += 3) {
    let a = e[n],
      o = e[n + 1],
      l = e[n + 2];
    if (Math.abs(a - r[0]) > i || Math.abs(l - r[1]) > i || Math.abs(o) > i) continue;
    let u = c(Math.floor(a / t), Math.floor(o / t), Math.floor(l / t));
    s.set(u, (s.get(u) || 0) + 1);
  }
  let l = new Set();
  for (let [e, t] of s) t >= n && l.add(e);
  let u = (e, n, r) => l.has(c(Math.floor(e / t), Math.floor(n / t), Math.floor(r / t)));
  function d(e, n, { margin: r = 0.3 } = {}) {
    let i = n[0] - e[0],
      s = n[1] - e[1],
      c = n[2] - e[2],
      l = Math.hypot(i, s, c),
      d = l - r;
    if (d <= 0) return !1;
    let f = t * 0.5;
    for (let n = f; n < d; n += f) {
      let r = e[0] + (i * n) / l,
        d = e[1] + (s * n) / l,
        f = e[2] + (c * n) / l;
      if (u(r, d, f) && !(a && d - a(r, f) < o + t)) return !0;
    }
    return !1;
  }
  function f(e, n, r = 2 * i, a = t * 0.5) {
    let o = Math.hypot(n[0], n[1], n[2]) || 1,
      s = n[0] / o,
      c = n[1] / o,
      l = n[2] / o,
      d = t * 0.5;
    for (let t = a; t < r; t += d) if (u(e[0] + s * t, e[1] + c * t, e[2] + l * t)) return t;
    return null;
  }
  return { voxel: t, radius: i, size: l.size, isSolid: u, blocked: d, hit: f };
}
function ze(e, t, { name: n = `GROUND_SplatFloor`, visible: r = !1 } = {}) {
  let { walkable: i, cellSize: a } = t;
  if (!i.size) return null;
  let o = [],
    s = [],
    c = 0;
  for (let [e, t] of i) {
    let [n, r] = e.split(`,`).map(Number),
      i = n * a,
      l = r * a,
      u = i + a,
      d = l + a;
    (o.push(i, t, l, u, t, l, u, t, d, i, t, d), s.push(c, c + 2, c + 1, c, c + 3, c + 2), (c += 4));
  }
  let l = new e.BufferGeometry();
  (l.setAttribute(`position`, new e.Float32BufferAttribute(o, 3)), l.setIndex(s), l.computeVertexNormals());
  let u = new e.Mesh(
    l,
    new e.MeshBasicMaterial({ visible: r, color: 3407752, wireframe: !0, transparent: !0, opacity: 0.5 }),
  );
  return ((u.name = n), u);
}
async function Be({
  renderer: t,
  scene: n,
  url: i,
  metricScale: a = 1,
  groundOffset: o = 1.5,
  floor: s = {},
  onProgress: c = () => {},
}) {
  let { SparkRenderer: l, SplatMesh: u } = await T(
      async () => {
        let { SparkRenderer: e, SplatMesh: t } = await import(`./spark.module-BLkI3pTG.js`);
        return { SparkRenderer: e, SplatMesh: t };
      },
      __vite__mapDeps([0, 1, 2, 3]),
    ),
    d = new l({ renderer: t });
  n.add(d);
  let f = new u({
    url: i,
    onProgress: (e) => {
      e?.lengthComputable && e.total && c(Math.min(1, e.loaded / e.total) * 0.85);
    },
  });
  await f.initialized;
  let p = new b();
  ((p.name = `SPLAT_MetricFrame`),
    p.quaternion.set(1, 0, 0, 0),
    p.scale.setScalar(a),
    p.position.set(0, o, 0),
    p.add(f),
    n.add(p));
  let m = [],
    h = [];
  (f.forEachSplat((e, t, n, r, i, s) => {
    if (i < 0.25) return;
    let [c, l, u] = Re(t.x, t.y, t.z, a, o);
    (m.push(c, l, u), h.push(s.r, s.g, s.b));
  }),
    c(0.92));
  let g = D(m, {
    colors: h,
    cellSize: 0.35,
    origin: [0, 0],
    maxRadius: 14,
    stepHeight: 0.35,
    walkRadius: 7,
    maxClimb: 0.4,
    maxDescend: 0.6,
    ...s,
  });
  if (!g) throw Error(`no walkable floor found in the world`);
  let _ = O(m, { voxel: 0.2, minPoints: 4, centre: [0, 0], radius: 12, floor: (e, t) => g.querySmooth(e, t) }),
    v = ze(e, g, { visible: new URLSearchParams(location.search).has(`floor`) });
  (v && n.add(v), c(1));
  let ee = new r();
  return {
    spark: d,
    splat: f,
    frame: p,
    floor: g,
    occupancy: _,
    floorMesh: v,
    splats: m.length / 3,
    heightAt: (e, t) => g.querySmooth(e, t),
    hit: (e, t, n) => _.hit(e.toArray ? e.toArray() : e, t.toArray ? t.toArray() : t, n, 0.15),
    pick(e, t) {
      ee.setFromCamera(e, t);
      let n = [];
      return (f.raycast(ee, n), n.sort((e, t) => e.distance - t.distance), n[0]?.point || null);
    },
    dispose() {
      (n.remove(d, p), v && n.remove(v), f.dispose?.(), d.dispose?.());
    },
  };
}
function Ve(e, { image: t, kind: n = `gilt`, caption: r = `` }) {
  let i = document.createElement(`div`);
  ((i.className = `framein ${n}`),
    (i.innerHTML = `<div class="framein-wall"></div><figure class="framein-art"><div class="framein-frame"><img alt="" /></div>${r ? `<figcaption>${r}</figcaption>` : ``}</figure>`),
    e.appendChild(i));
  let a = i.querySelector(`img`),
    o = new Promise((e) => {
      ((a.onload = e), (a.onerror = e), (a.src = t));
    }),
    s = (e) => new Promise((t) => setTimeout(t, e));
  return {
    async show() {
      (await Promise.race([o, s(4e3)]),
        requestAnimationFrame(() => i.classList.add(`in`)),
        await s(n === `scroll` ? 2e3 : 900));
    },
    async dissolve(e = 2200) {
      (i.classList.add(`open`), await s(e * 0.45), i.classList.add(`through`), await s(e * 0.55), i.remove());
    },
  };
}
var He = 3,
  Ue = 1.3,
  We = 0.8,
  Ge = 2.4,
  Ke = 0.35,
  k = (e) => new x(e[0], e[1] ?? 0, e[2] ?? 0);
function qe(e) {
  let t = (() => {
      let t = document.createElement(`canvas`);
      t.width = t.height = 128;
      let r = t.getContext(`2d`),
        i = r.createRadialGradient(64, 64, 0, 64, 64, 60);
      (i.addColorStop(0, `rgba(255,230,160,0.55)`),
        i.addColorStop(1, `rgba(255,230,160,0)`),
        (r.fillStyle = i),
        r.fillRect(0, 0, 128, 128));
      let o = (e, t) => {
        r.beginPath();
        for (let n = 0; n < 8; n += 1) {
          let i = (n * Math.PI) / 4 - Math.PI / 2,
            a = n % 2 ? t : e;
          r.lineTo(64 + Math.cos(i) * a, 64 + Math.sin(i) * a);
        }
        r.closePath();
      };
      (o(44, 11),
        (r.lineJoin = `round`),
        (r.lineWidth = 7),
        (r.strokeStyle = `rgba(70,40,15,0.75)`),
        r.stroke(),
        (r.fillStyle = e),
        r.fill(),
        o(20, 5),
        (r.fillStyle = `#fffbe8`),
        r.fill());
      let s = new n(t);
      return ((s.colorSpace = a), s);
    })(),
    r = new d({ map: t, transparent: !0, depthWrite: !1 }),
    i = new S(r);
  return (i.scale.setScalar(0.1), (i.renderOrder = 5), i);
}
function Je(e, t) {
  let { walkable: n, cellSize: r, body: i } = e,
    a = Math.floor(i.minX / r) - 1,
    s = Math.floor(i.minZ / r) - 1,
    c = Math.ceil(i.maxX / r) + 1 - a,
    l = Math.ceil(i.maxZ / r) + 1 - s,
    u = new Uint8Array(c * l);
  for (let e of n.keys()) {
    let [t, n] = e.split(`,`).map(Number);
    u[(n - s) * c + (t - a)] = 255;
  }
  let d = new p(u, c, l, C);
  ((d.unpackAlignment = 1), (d.magFilter = d.minFilter = o), (d.needsUpdate = !0));
  let f = new g({ opacity: t });
  return (
    (f.onBeforeCompile = (e) => {
      ((e.uniforms.uFloorMask = { value: d }),
        (e.uniforms.uFloorBox = { value: new m(a * r, s * r, c * r, l * r) }),
        (e.vertexShader = e.vertexShader
          .replace(
            `#include <common>`,
            `#include <common>
varying vec2 vFloorXZ;`,
          )
          .replace(
            `#include <worldpos_vertex>`,
            `#include <worldpos_vertex>
vFloorXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            `#include <common>`,
            `#include <common>
uniform sampler2D uFloorMask;
uniform vec4 uFloorBox;
varying vec2 vFloorXZ;`,
          )
          .replace(
            `opacity * ( 1.0 - getShadowMask() )`,
            `opacity * ( 1.0 - getShadowMask() ) * texture2D( uFloorMask, ( vFloorXZ - uFloorBox.xy ) / uFloorBox.zw ).r`,
          )));
    }),
    f
  );
}
function Ye(e) {
  let { walkable: t, cellSize: n, body: r } = e,
    i = Math.floor(r.minX / n) - 2,
    a = Math.floor(r.minZ / n) - 2,
    o = Math.ceil(r.maxX / n) + 2 - i,
    s = Math.ceil(r.maxZ / n) + 2 - a,
    c = new Uint8Array(o * s),
    l = new Uint8Array(o * s);
  for (let e of t.keys()) {
    let [t, n] = e.split(`,`).map(Number),
      r = t - i,
      c = n - a;
    r >= 0 && c >= 0 && r < o && c < s && (l[c * o + r] = 1);
  }
  let u = [];
  for (let e = 0; e < o; e += 1) u.push(e, (s - 1) * o + e);
  for (let e = 0; e < s; e += 1) u.push(e * o, e * o + o - 1);
  for (; u.length;) {
    let e = u.pop();
    if (c[e] || l[e]) continue;
    c[e] = 1;
    let t = e % o,
      n = (e - t) / o;
    (t > 0 && u.push(e - 1), t < o - 1 && u.push(e + 1), n > 0 && u.push(e - o), n < s - 1 && u.push(e + o));
  }
  return (e, t) => {
    let r = Math.floor(e / n) - i,
      l = Math.floor(t / n) - a;
    return r >= 0 && l >= 0 && r < o && l < s && !c[l * o + r];
  };
}
async function A({ stage: e, me: n, lang: a, fromIris: o = !1, onProgress: d = () => {}, cfg: p }) {
  let { scene: m, camera: g, renderer: b } = e,
    S = b.domElement,
    C = document.getElementById(`ui`),
    T = p.who[a],
    E = p.beats.filter((e) => !e.optional),
    Re = Math.min(p.inviteAfter ?? He, E.length),
    D = Ee(C, {
      beats: E.length,
      stripLabel: w(`他的一生`, `His life`),
      exit: w(`回到人生广场`, `Back to the Life Plaza`),
      atlas: !0,
    }),
    O = De({ hud: D, lang: a, mouth: (e) => (e === p.role ? V : null) });
  (D.onMute((e) => O.setMuted(e)),
    e.ao && (e.ao.enabled = !1),
    (b.toneMapping = 0),
    (b.shadowMap.enabled = !0),
    e.bloom && (e.bloom.enabled = !1));
  let ze = e.finish?.uniforms;
  (ze &&
    ((ze.uVignette.value = p.look?.vignette ?? 0.16),
    (ze.uGrain.value = 0.015),
    (ze.uWarm.value = 0),
    (ze.uSat.value = p.look?.saturation ?? 1)),
    (m.background = new c(p.look?.background || `#1a1612`)),
    (g.near = 0.05),
    (g.far = 120),
    e.setFov(p.camera?.fov ?? 52));
  let A = p.art || null;
  A &&
    (A.tripo !== !1 && oe(),
    ae(e, A.look || `splat`),
    A.shot !== !1 && se(e, A.shot || `walk`, { fov: p.camera?.fov ?? 52 }),
    A.paper !== !1 && ce(!0, { accent: A.accent }));
  let j = pe(n, p.id, a),
    Xe = de(n, p.id, a).then((e) => (e?.id && (j = e), e)),
    Ze = Pe(p.id, a);
  Ze.then((e) => {
    e && O.prefetch([e], p.role);
  });
  let Qe = await fetch(ie(`worlds/${p.id}/meta.json`))
    .then((e) => (e.ok ? e.json() : null))
    .catch(() => null);
  if (!Qe) throw Error(`no world for ${p.id}`);
  let M = await Be({
      renderer: b,
      scene: m,
      url: ie(`worlds/${p.id}/${!e.quality.strong && Qe.low ? Qe.low : Qe.spz}`),
      metricScale: Qe.metricScale ?? 1,
      groundOffset: Qe.groundOffset ?? 1.5,
      floor: p.world?.floor,
      onProgress: (e) => d(e * 0.8),
    }),
    N = M.floor.floorY,
    P = p.light || {},
    $e = new l(P.sky || `#fff1dc`, P.ground || `#6b5040`, P.fill ?? 1.1),
    F = new s(P.key || `#ffe2b8`, P.keyIntensity ?? 1.6);
  (F.position.set(...(P.from || [-2, 4, -3])),
    F.target.position.set(0, N, -1.5),
    (F.castShadow = !0),
    F.shadow.mapSize.set(2048, 2048),
    Object.assign(F.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 0.1, far: 20 }),
    (F.shadow.bias = -4e-4),
    (F.shadow.normalBias = 0.02),
    m.add($e, F, F.target));
  let et = new u(new h(30, 30), Je(M.floor, P.shadow ?? 0.28));
  ((et.rotation.x = -Math.PI / 2),
    (et.position.y = N + 0.005),
    (et.receiveShadow = !0),
    (et.renderOrder = 5),
    m.add(et));
  let I = (await p.setup?.({ scene: m, world: M, floorY: N, heightAt: M.heightAt, stage: e })) || {};
  d(0.85);
  let L = M.heightAt,
    tt = Oe(m, { renderOrder: 5 }),
    nt = ke({ body: `#f2c94c` });
  m.add(nt.object);
  let R = p.host.at,
    rt = [{ x: R[0], z: R[1], r: p.host.radius ?? 0.45 }, ...(p.colliders || []), ...(I.colliders || [])],
    z = xe({ avatar: nt, colliders: rt, heightAt: L, floor: M.floor, speed: p.speed ?? 1.15, radius: 0.24 }),
    B = p.spawn;
  z.place(B.x, B.z, B.h);
  let V = ke({
    body: p.host.body || `#3b4a63`,
    skin: `#f1d2bf`,
    hair: p.host.hair || `#8a5a2b`,
    height: p.host.height || 1.72,
  });
  (V.object.position.set(R[0], L(R[0], R[1]), R[1]), (V.object.rotation.y = p.host.yaw ?? 0), m.add(V.object));
  let it = Promise.all([
    me(`models/chars/${n.avatar}.glb`)
      .then((e) => {
        (m.remove(nt.object), (nt = e), m.add(e.object), z.setAvatar(e));
      })
      .catch(() => {}),
    me(p.host.model, { height: p.host.height || 1.72 })
      .then((e) => {
        (m.remove(V.object),
          e.object.position.copy(V.object.position),
          (e.object.rotation.y = V.object.rotation.y),
          (V = e),
          m.add(e.object));
      })
      .catch(() => {}),
  ]);
  d(0.95);
  let H = ne(S, { joystickEl: D.joystickEl }),
    U = M.floor.body,
    at = Ye(M.floor),
    ot = p.camera?.box || {},
    W = ye(g, {
      box: {
        minX: ot.minX ?? U.minX - 0.6,
        maxX: ot.maxX ?? U.maxX + 0.6,
        minZ: ot.minZ ?? U.minZ - 0.6,
        maxZ: ot.maxZ ?? U.maxZ + 0.6,
        maxY: N + (p.camera?.ceiling ?? 2.8),
      },
      height: p.camera?.height ?? 1.3,
      distance: p.camera?.distance ?? 2.6,
      minDistance: 1,
      maxDistance: p.camera?.maxDistance ?? 3.6,
      groundAt: L,
      rayHit: (e, t, n) => M.hit(e, t, n),
      inside: p.camera?.overFurniture ? null : at,
      minReach: 0.55,
      eyeHeight: p.camera?.eye ?? 1.48,
      pitchBoost: 0.26,
      lookAhead: 0.8,
      onMode: (e) => D.setView(e, { announce: !0 }),
    });
  ((W.yaw = B.h + Math.PI),
    (W.pitch = p.camera?.pitch ?? 0.22),
    D.onView((e) => {
      W.mode = e;
    }));
  let st = (e, t) => M.floor.isWalkable(e, t) && rt.every((n) => (e - n.x) ** 2 + (t - n.z) ** 2 >= (n.r + 0.26) ** 2),
    ct = () => be({ minX: U.minX, maxX: U.maxX, minZ: U.minZ, maxZ: U.maxZ, cellSize: 0.2, free: st }),
    lt = ct(),
    ut = rt.map((e) => [e.x, e.z, e.r]),
    dt = 0,
    ft = () => {
      ((lt = ct()), (ut = rt.map((e) => [e.x, e.z, e.r])));
    },
    pt = (e, t) => {
      let n = _e(lt, e, t);
      return n.length ? n : [t.clone()];
    };
  z.setSight(ge({ cellSize: 0.2, isWalkable: st }));
  let G = ve({ camera: g, canvas: S, player: z, input: H, promptEl: D.promptEl, actionEl: D.actionEl, route: pt }),
    mt = Ae(C, { kind: p.gift.card, lang: a }),
    ht = null,
    K = () => {
      ht = z.position;
    },
    gt = async (e) => (K(), O.say(T, e, { role: p.role })),
    _t = Le({
      player: z,
      cam: W,
      host: () => V,
      hostHeight: p.host.height || 1.72,
      heightAt: L,
      inside: at,
      clear: (e, t) => {
        let n = t.x - e.x,
          r = t.y - e.y,
          i = t.z - e.z,
          a = Math.hypot(n, r, i) || 1,
          o = M.hit(e, [n / a, r / a, i / a], a);
        return o == null || o > a - 0.45;
      },
      input: H,
      interactions: G,
      hud: D,
      finish: ze,
      onScene: (e) => {
        Y = e;
      },
    }),
    vt = () => _t.face(),
    yt = (e, t) => _t.shoot(e, t),
    bt = () => {
      if (wt && !J) return new x(p.gift.spot.x, 0, p.gift.spot.z);
      let e = E.find((e) => !q.has(e.id));
      return e ? k(e.at) : null;
    },
    xt = () => _t.begin(),
    St = () => _t.end({ lookAt: bt() });
  async function Ct(e, t = `agree`) {
    (z.faceToward(V.object.position.x, V.object.position.z),
      K(),
      _t.talkShot(),
      t && V.play?.(t),
      await O.say(T, e, { role: p.role }));
  }
  let q = new Set(),
    wt = !1,
    Tt = !1,
    Et = !1,
    Dt = 0,
    J = null,
    Y = !1,
    Ot = [],
    kt = [],
    At = new Map(),
    jt = new v({ visible: !1 });
  for (let t of p.beats) {
    let n = k(t.at),
      r = qe(p.look?.marker || `#ffd99a`);
    (r.position.copy(n), m.add(r), kt.push({ m: r, beat: t, base: n.y, phase: Math.random() * 6 }));
    let i = new u(new ee(t.pickRadius ?? 0.45, 12, 8), jt);
    (i.position.copy(n),
      m.add(i),
      Ot.push(i),
      At.set(
        t.id,
        G.add({
          id: t.id,
          position: new x(t.stand?.[0] ?? n.x, 0, t.stand?.[1] ?? n.z),
          standAt: t.stand ? new x(t.stand[0], 0, t.stand[1]) : void 0,
          radius: t.radius ?? 1.5,
          labelHeight: n.y + 0.35,
          label: () => (q.has(t.id) ? `✓ ` : ``) + t.label[a],
          done: () => q.has(t.id),
          meshes: [i],
          activate: async () => {
            let r = ++Dt;
            ((Et = !0), q.add(t.id), D.setProgress(E.filter((e) => q.has(e.id)).length), fe.chime());
            let i = j?.plan?.beats?.[t.id];
            (O.prefetch([...t.lines[a], ...(t.after?.[a] || []), i].filter(Boolean), p.role), xt());
            try {
              (z.faceToward(n.x, n.z), (ht = n), yt(n), t.gesture && V.play?.(t.gesture));
              let o = (r) =>
                Promise.resolve()
                  .then(() =>
                    t.act({
                      stage: e,
                      scene: m,
                      camera: g,
                      cam: W,
                      host: V,
                      player: z,
                      input: H,
                      hud: D,
                      ui: C,
                      voice: O,
                      sound: fe,
                      sleep: Q,
                      puffs: tt,
                      world: M,
                      extras: I,
                      heightAt: L,
                      floorY: N,
                      lang: a,
                      visit: j,
                      at: n,
                      ...r,
                    }),
                  )
                  .catch((e) => console.warn(`beat act failed`, e));
              if (
                (t.act && t.after
                  ? (await O.say(T, t.lines[a], { role: p.role }),
                    r === Dt && (await o({ say: gt }), r === Dt && (await O.say(T, t.after[a], { role: p.role }))))
                  : t.act
                    ? await o({ lines: t.lines[a], say: (e) => O.say(T, e, { role: p.role }) })
                    : await O.say(T, t.lines[a], { role: p.role }),
                i && r === Dt && (await Ct([i])),
                r === Dt && !wt && E.filter((e) => q.has(e.id)).length >= Re && !J)
              ) {
                ((wt = !0), (Tt = !0), Lt(!0));
                let e = new x(Z.spot.x, L(Z.spot.x, Z.spot.z) + 0.3, Z.spot.z);
                (z.faceToward(e.x, e.z),
                  K(),
                  yt(e),
                  V.play?.(`agree`),
                  await O.say(T, [j?.plan?.invite || p.gift.invite[a]], { role: p.role }));
              }
            } finally {
              (St(), (Tt = !1), r === Dt && (Et = !1));
            }
          },
        }),
      ));
  }
  let Mt = [],
    Nt = null,
    X = Te(C, {
      chips: p.chips[a],
      voice: O,
      role: p.role,
      placeholder: w(`想问${T}什么？`, `Ask ${T} anything…`),
      onAsk: async (e, { signal: t, begin: r }) => {
        let i = {
          ...(j?.id
            ? { visit: j.id }
            : { space: p.id, lang: a, avatar: n.avatar, identity: n.identity, note: n.note, life: n.life }),
          text: e,
          history: Mt.slice(-8),
          voice: !O.muted,
          journey: we(p.id),
        };
        (Mt.push({ role: `you`, text: e }), K(), V.play?.(`look-around`));
        let o = await Me({
          voice: O,
          who: T,
          role: p.role,
          signal: t,
          fallback: p.chatFallback[a],
          onBegin: () => {
            (r(), V.stopGesture?.(), K());
          },
          ask: async (e) => (await ue.chatStream(i, e)) ?? ue.chat(i).then((t) => (je(t?.reply).forEach(e.onLine), t)),
        });
        return (o.reply && Mt.push({ role: `me`, text: o.reply }), o);
      },
      onClose: () => {
        (G.setBusy(!1), Nt && ((Nt = null), W.release()));
      },
      onLeave: ({ cut: e, to: t }) => {
        if ((e && O.stop(), K(), V.stopGesture?.(), e)) return;
        V.play?.(`agree`);
        let n = t === `thing` ? null : X.letGo();
        n && O.say(T, [n], { role: p.role });
      },
    }),
    Pt = new u(new f(0.35, 0.35, 1.8, 10), jt);
  (Pt.position.set(R[0], N + 0.9, R[1]),
    m.add(Pt),
    G.add({
      id: `host`,
      position: new x(R[0], 0, R[1]),
      radius: 1.6,
      labelHeight: N + 2.05,
      aside: !0,
      label: () => w(`和${T}聊聊`, `Talk to ${T}`),
      meshes: [Pt],
      activate: () => {
        let e = V.object.position,
          t = z.position;
        (K(),
          G.setBusy(!0),
          z.faceToward(e.x, e.z),
          (Nt = _t.talkShot() ? { x: t.x, z: t.z } : null),
          Nt && (W.yaw = Math.atan2(t.x - e.x, t.z - e.z)),
          X.open());
      },
    }));
  let Z = p.gift,
    Ft = new v({ color: p.look?.marker || `#ffd27a`, transparent: !0, opacity: 0, depthWrite: !1 }),
    It = new u(new y(0.3, 0.42, 48), Ft);
  ((It.rotation.x = -Math.PI / 2),
    It.position.set(Z.spot.x, L(Z.spot.x, Z.spot.z) + 0.02, Z.spot.z),
    (It.renderOrder = 5),
    m.add(It));
  let Lt = (e) => te.to(Ft, { opacity: e ? 0.85 : 0.22, duration: 0.8 });
  Lt(!1);
  let Rt = new u(new f(0.5, 0.5, 0.3, 12), jt);
  (Rt.position.copy(It.position), m.add(Rt));
  let zt = G.add({
      id: `gift`,
      position: new x(Z.spot.x, 0, Z.spot.z),
      radius: 1.3,
      labelHeight: N + 1.9,
      meshes: [Rt],
      label: () => (J?.status === `done` ? Z.labels.again[a] : J ? Z.labels.waiting[a] : Z.labels.go[a]),
      activate: () => Vt(),
    }),
    Q = (e) => new Promise((t) => setTimeout(t, e)),
    Bt = (e) =>
      new Promise((t) => {
        let n = !1;
        (z.walkPath(pt(z.position, e), () => {
          ((n = !0), t());
        }),
          setTimeout(() => {
            n || ((n = !0), z.stop(), t());
          }, 7e3));
      });
  async function Vt() {
    if (J?.status === `done`) {
      Wt(J.card);
      return;
    }
    if (J) {
      D.toast(Z.labels.waiting[a]);
      return;
    }
    J = { status: `making` };
    let t = j || (await Promise.race([Xe, Q(5e3).then(() => null)])),
      r = !p.action && t?.id ? ue.shot(t.id) : null;
    (G.setBusy(!0),
      H.setEnabled(!1),
      Lt(!1),
      (Y = !0),
      p.onGiftStart &&
        (K(),
        await p.onGiftStart({ extras: I, host: V, sleep: Q, say: gt, lang: a, heightAt: L, cam: W, gift: Z }),
        ft()),
      await Bt(new x(Z.spot.x, 0, Z.spot.z), Z.spot.h),
      z.stop());
    let i = Math.atan2(Math.sin(Z.spot.h - z.heading), Math.cos(Z.spot.h - z.heading));
    te.to(z, { heading: z.heading + i, duration: 0.5, ease: `power2.out` });
    let o = Z.hostAt || R;
    (te.to(V.object.position, { x: o[0], z: o[1], duration: 1.2, ease: `power2.inOut` }),
      (ht = z.position),
      Z.frame && W.frame(k(Z.frame[0]), k(Z.frame[1])));
    let s = null;
    p.action &&
      ((s = await Promise.resolve()
        .then(() =>
          p.action({
            stage: e,
            scene: m,
            camera: g,
            cam: W,
            host: V,
            player: z,
            input: H,
            hud: D,
            interactions: G,
            ui: C,
            voice: O,
            talk: X,
            me: n,
            visit: t,
            lang: a,
            who: T,
            say: gt,
            sleep: Q,
            puffs: tt,
            sound: fe,
            world: M,
            extras: I,
            heightAt: L,
            floorY: N,
            gift: Z,
          }),
        )
        .catch((e) => (console.warn(`life action failed`, e), null))),
      (r = t?.id ? ue.shot(t.id, s || void 0) : null));
    let c = await (r || null);
    if (
      (await p.giftScene({
        stage: e,
        scene: m,
        host: V,
        player: z,
        visit: t,
        lang: a,
        who: T,
        say: gt,
        sleep: Q,
        puffs: tt,
        sound: fe,
        world: M,
        extras: I,
        cam: W,
        choices: s,
        shot: c,
      }),
      H.setEnabled(!0),
      G.setBusy(!1),
      W.release(),
      (Y = !1),
      !c?.id)
    ) {
      await Ut();
      return;
    }
    if (((J = { id: c.id, status: `making` }), (await ue.shotStatus(c.id).catch(() => null))?.status === `done`)) {
      Ht(c.id, t, 0);
      return;
    }
    (await gt(Z.lines.wait[a]), Ht(c.id, t));
  }
  async function Ht(e, t, r = 3e3) {
    let i = Date.now(),
      o = !1;
    for (;;) {
      (await Q(r),
        (r = 3e3),
        !o && Date.now() - i > 1e5 && Z.lines.slow && ((o = !0), !Et && !X.isOpen && gt(Z.lines.slow[a])));
      let s = await ue.shotStatus(e);
      if (s?.status === `done`) {
        let r = p.cardOf({ shot: s, visit: t, image: ue.media(s.image), me: n, lang: a });
        ((J = { id: e, status: `done`, card: r }),
          Ie(p.id, { title: r.title, ...p.kept?.(r, a) }),
          fe.sparkle(),
          A?.stamp && le(A.stamp),
          G.setBusy(!0),
          (Y = !0),
          await p.onGiftReady?.({ card: r, extras: I, cam: W, sleep: Q, host: V }),
          G.setBusy(!1),
          (Y = !1),
          await gt([Z.lines.done[a]]),
          Wt(r));
        return;
      }
      if (s?.status === `failed` || Date.now() - i > 42e4) {
        await Ut();
        return;
      }
    }
  }
  async function Ut() {
    ((J = null), Lt(!0), await gt([Z.lines.fail[a]]));
  }
  function Wt(e) {
    (G.setBusy(!0),
      mt.open(e, { onClosed: () => G.setBusy(!1) }),
      p.onGiftShown && (p.onGiftShown({ extras: I, host: V }), ft()));
  }
  let Gt = re(document.body),
    Kt = !1,
    qt = p.exit.at,
    Jt = new u(new i(1.2, 2.2, 0.4), jt);
  (Jt.position.set(qt[0], N + 1.1, qt[1]), (Jt.rotation.y = p.exit.yaw || 0), m.add(Jt));
  let Yt = qe(`#ffffff`);
  (Yt.position.set(qt[0], N + 2.1, qt[1]), Yt.scale.setScalar(0.16), m.add(Yt));
  let Xt = async () => {
      if (Kt) return;
      ((Kt = !0), O.stop());
      let e = J?.status === `done` ? j?.plan?.farewell || p.farewell?.after?.[a] : p.farewell?.early?.[a];
      (xt(),
        e && (await Ct([e], p.host.bye || `wave`)),
        p.farewell?.coda &&
          (await Promise.resolve()
            .then(() => p.farewell.coda({ lang: a, voice: O, sleep: Q }))
            .catch((e) => console.warn(`farewell coda`, e))),
        await Gt.close(1e3));
      try {
        sessionStorage.setItem(`lp.iris`, `1`);
      } catch {}
      location.href = `/life-learn/?go=plaza&from=${p.id}`;
    },
    Zt = G.add({
      id: `door`,
      position: new x(qt[0], 0, qt[1]),
      radius: 1.4,
      labelHeight: N + 2.3,
      meshes: [Jt],
      label: () => w(`回到人生广场`, `Back to the Life Plaza`),
      activate: Xt,
    });
  D.onExit(() => {
    !$ && !Y && !mt.open_ && Xt();
  });
  let Qt = async (e) => {
      if (!Kt) {
        ((Kt = !0), O.stop(), H.setEnabled(!1), await Gt.close(900));
        try {
          sessionStorage.setItem(`lp.iris`, `1`);
        } catch {}
        location.href = `/life-learn/?${e}`;
      }
    },
    $t = !0,
    en = Fe(C, {
      lives: Object.values(he({ xiyou: !0 })),
      here: p.id,
      blocked: () => Kt || mt.open_ || X.isOpen,
      onOpen: () => {
        (($t = H.state.enabled), H.setEnabled(!1));
      },
      onClose: () => {
        Kt || H.setEnabled($t);
      },
      onGo: (e) => Qt(`go=${e}`),
      onPlaza: () => ($ || Y ? Qt(`go=plaza&from=${p.id}`) : Xt()),
    });
  (D.onAtlas(() => en.toggle()),
    Se(p.id),
    G.setGuide(() => {
      if (Y || X.isOpen || mt.open_) return null;
      if ($ || Et) return { hold: !0 };
      let e = E.find((e) => !q.has(e.id));
      return e && (!wt || E.filter((e) => q.has(e.id)).length < Re)
        ? { item: At.get(e.id), label: e.label[a] }
        : J
          ? J.status === `done`
            ? e
              ? { item: At.get(e.id), label: e.label[a] }
              : { item: Zt, label: w(`回到人生广场`, `Back to the Life Plaza`) }
            : e
              ? { item: At.get(e.id), label: e.label[a] }
              : null
          : { item: zt, label: Z.labels.go[a] };
    }));
  let tn = new t(new x(0, 1, 0), -N),
    nn = new r(),
    rn = new x();
  H.onTap((e, t) => {
    if (mt.open_ || $ || X.swallow()) return;
    let n = S.getBoundingClientRect();
    nn.setFromCamera(new _(((e - n.left) / n.width) * 2 - 1, -((t - n.top) / n.height) * 2 + 1), g);
    let r = nn.ray.intersectPlane(tn, rn) && M.floor.isWalkable(rn.x, rn.z) ? rn : null;
    if (X.isOpen) {
      if (nn.intersectObject(Pt, !1).length) return;
      let n =
          nn.intersectObjects(
            G.items.filter((e) => e.id !== `host` && e.meshes).flatMap((e) => e.meshes),
            !0,
          ).length > 0,
        i = V.object.position,
        a = z.position;
      if (
        !(n || (r && Math.hypot(r.x - i.x, r.z - i.z) >= Ue && Math.hypot(r.x - a.x, r.z - a.z) >= We)) ||
        !X.leave({ to: n ? `thing` : `floor` })
      ) {
        r && !n && (z.walkPath(pt(z.position, r)), D.ripple(e, t));
        return;
      }
    }
    G.tap(e, t) || (r && (z.walkPath(pt(z.position, r)), D.ripple(e, t)));
  });
  let an = !1,
    $ = !0,
    on = new _(R[0], R[1]);
  e.onUpdate((e, t) => {
    H.setControls(!(mt.open_ || $ || Y || Kt));
    let n = mt.open_ || $ ? { x: 0, y: 0 } : H.readMove();
    (!an && (n.x || n.y) && ((an = !0), setTimeout(() => D.hideHint(), 4e3)),
      z.update(e, n, W.yaw, H.running()),
      X.walk(e, { move: n, yaw: W.yaw, at: z.position, host: V.object.position, far: Ge }),
      Nt &&
        (H.state.dragging || Math.hypot(z.position.x - Nt.x, z.position.z - Nt.z) > Ke) &&
        ((Nt = null), W.release()));
    let r = V.object.position,
      i = r.x - on.x,
      a = r.z - on.z,
      o = Math.hypot(i, a) / Math.max(e, 1e-4);
    on.set(r.x, r.z);
    let s = o > 0.12 && o < 4 ? Math.atan2(i, a) : ht ? Math.atan2(ht.x - r.x, ht.z - r.z) : null;
    if (s !== null) {
      let t = s - V.object.rotation.y;
      ((t = Math.atan2(Math.sin(t), Math.cos(t))),
        (V.object.rotation.y += t * (1 - Math.exp(-e * (o > 0.12 ? 9 : 4)))));
    }
    (V.setMotion(o < 4 ? o / 1.1 : 0, e, o < 4 ? o : 0),
      (Pt.position.x = V.object.position.x),
      (Pt.position.z = V.object.position.z),
      (rt[0].x = V.object.position.x),
      (rt[0].z = V.object.position.z),
      (dt += e) > 0.25 &&
        rt.some((e, t) => Math.abs(e.x - ut[t][0]) + Math.abs(e.z - ut[t][1]) > 0.1 || e.r !== ut[t][2]) &&
        ((dt = 0), ft()),
      G.items.find((e) => e.id === `host`).position.set(V.object.position.x, 0, V.object.position.z),
      $ || W.update(e, z, H),
      G.update(),
      tt.update(e),
      p.update?.(e, t, { player: z, host: V, interactions: G, extras: I, camera: g, staging: Y, intro: $, heard: q }));
    for (let n of kt) {
      let r = q.has(n.beat.id);
      ((n.m.position.y = n.base + Math.sin(t * 1.6 + n.phase) * 0.04),
        (n.m.material.opacity += ((Y ? 0 : r ? 0.25 : 0.95) - n.m.material.opacity) * (1 - Math.exp(-e * 3))),
        n.m.scale.setScalar((r ? 0.06 : 0.1) * (1 + Math.sin(t * 2.4 + n.phase) * 0.12)));
    }
    (It.scale.setScalar(1 + Math.sin(t * 3) * 0.06), (It.visible = !Y || Tt), (Yt.visible = !Y));
    let c = L(z.position.x, z.position.z);
    ((et.position.y = c + 0.005),
      F.position.set(z.position.x + (P.from?.[0] ?? -2), (P.from?.[1] ?? 4) + c, z.position.z + (P.from?.[2] ?? -3)),
      F.target.position.set(z.position.x, c, z.position.z));
  });
  async function sn() {
    let t = p.arrival || {},
      n = k(t.from || [0, N + 1.45, 0]),
      r = k(t.look || [0, N + 1.45, -4]),
      i = e.baseFov;
    (t.fov && e.setFov(t.fov),
      W.frame(n, r, { cut: !0 }),
      (nt.object.visible = !1),
      await it,
      (z.avatar.object.visible = !1));
    let o = p.arrival?.image
      ? Ve(document.body, {
          image: ie(p.arrival.image),
          kind: p.arrival.kind || `gilt`,
          caption: p.arrival.caption?.[a] || ``,
        })
      : null;
    (o && (await o.show(), await Q(p.arrival.hold ?? 1600), await o.dissolve(2200)),
      A?.stamp && le(A.stamp),
      tt.puff(new x(B.x, N + 0.1, B.z), { color: `#fff1e2`, count: 18, size: 0.7 }),
      fe.poof(),
      (z.avatar.object.visible = !0),
      (z.heading = Math.atan2(R[0] - B.x, R[1] - B.z)),
      xt());
    let s = _t.compose(vt(), { person: !0 }),
      c = s ? { position: s[0], look: s[1] } : W.restPose(z.position),
      l = g.position.clone(),
      u = r.clone(),
      d = { t: 0 },
      f = e.baseFov;
    O.prefetch(p.greeting[a].slice(0, 1), p.role);
    let m = j ? Promise.resolve(j) : Promise.race([Xe, Q(3200).then(() => null)]);
    await new Promise((t) =>
      te.to(d, {
        t: 1,
        duration: 2.6,
        ease: `power2.inOut`,
        onUpdate: () => {
          (e.setFov(f + (i - f) * d.t),
            W.frame(l.clone().lerp(c.position, d.t), u.clone().lerp(c.look, d.t), { cut: !0 }));
        },
        onComplete: t,
      }),
    );
    let h = await m,
      [_, ...v] = [p.greeting[a][0], h?.plan?.greeting, ...p.greeting[a].slice(1)].filter(Boolean);
    (O.prefetch([_, ...v], p.role), ($ = !1), K(), V.play?.(p.host.hello || `wave`));
    try {
      (await O.say(T, [_], { role: p.role })) && (await Ne(O, T, Ze, { role: p.role, hm: p.hm?.[a], after: v }));
    } finally {
      St();
    }
    (Ce() === `first` && (W.mode = `first`), D.coach());
  }
  let cn = {
    painting: [p.arrival?.from || [0, N + 1.45, 0], p.arrival?.look || [0, N + 1.45, -4]],
    ...(p.shots || {}),
  };
  return (
    d(1),
    {
      world: M,
      player: z,
      cam: W,
      interactions: G,
      voice: O,
      talk: X,
      host: () => V,
      heard: q,
      extras: I,
      reveal: (e) => (A?.stamp && le(A.stamp), p.onGiftReady?.({ card: e, extras: I, cam: W, sleep: Q, host: V })),
      start: () => {
        sn().catch((e) => {
          (console.error(`arrival`, e), ($ = !1), _t.reset(), W.release());
        });
      },
      shot(e) {
        if (!e || !cn[e]) return (W.release(), `released`);
        let [t, n] = cn[e];
        return (W.frame(k(t), k(n), { cut: !0 }), e);
      },
    }
  );
}
export { A as t };
