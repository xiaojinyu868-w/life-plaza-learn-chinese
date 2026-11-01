import {
  $r as e,
  A as t,
  B as n,
  Fr as r,
  Hn as i,
  Ir as a,
  L as o,
  Lt as s,
  O as c,
  Qi as l,
  Qt as u,
  R as d,
  Rn as f,
  U as p,
  Wi as m,
  Wr as h,
  Z as g,
  ar as _,
  ba as v,
  ct as y,
  ft as b,
  ir as x,
  j as S,
  jr as C,
  jt as w,
  mr as T,
  no as E,
  qt as D,
  ro as O,
  sn as k,
  ta as A,
  tr as j,
  ya as M,
} from "./three.core-DtjtRha-.js";
import { l as N, u as P } from "./assets-p2qy6QaX.js";
import { i as ee, l as te } from "./stamp-C8irYyoR.js";
import { a as ne, i as re, n as ie, r as F, s as I, t as L } from "./sky-6JFrQaA8.js";
import { o as R } from "./journey-BS70xIEy.js";
var z = (e, t, n) => {
    let r = Math.imul(e | 0, 374761393) ^ Math.imul(t | 0, 668265263) ^ Math.imul(n | 0, 2147483647);
    return ((r = Math.imul(r ^ (r >>> 13), 1274126177)), ((r ^ (r >>> 16)) >>> 0) / 4294967295);
  },
  B = (e) => e * e * (3 - 2 * e),
  V = (e, t, n) => e + (t - e) * n;
function H(e, t, n) {
  let r = Math.floor(e),
    i = Math.floor(t),
    a = Math.floor(n),
    o = B(e - r),
    s = B(t - i),
    c = B(n - a),
    l = (e, t, n) => z(r + e, i + t, a + n);
  return V(
    V(V(l(0, 0, 0), l(1, 0, 0), o), V(l(0, 1, 0), l(1, 1, 0), o), s),
    V(V(l(0, 0, 1), l(1, 0, 1), o), V(l(0, 1, 1), l(1, 1, 1), o), s),
    c,
  );
}
var U = (e, t) => H(e, t, 0.5),
  W = (e, t, n = 4) => {
    let r = 0,
      i = 0.5,
      a = 1;
    for (let o = 0; o < n; o += 1) ((r += i * U(e * a, t * a)), (a *= 2.03), (i *= 0.5));
    return r;
  };
function G(e = 1) {
  let t = e >>> 0 || 1;
  return () => ((t = Math.imul(t ^ (t >>> 15), 2246822507) + 2654435769), (t ^= t >>> 13), ((t >>> 0) % 1e6) / 1e6);
}
var K = `
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y); }
float fbm(vec2 p){ float a = 0.0, s = 0.5; for (int i = 0; i < 4; i++){ a += s * vnoise(p); p *= 2.03; s *= 0.5; } return a; }
`,
  q = (e) => new p(e),
  J = I(ie({ x: 0, z: 30 }, { x: 0, z: 0 }, 45)),
  Y = ee.plaza,
  X = Object.freeze({ lit: `#FFDCC0`, shade: `#A6A4E0`, deep: `#7579CC`, rim: `#FFD3A8` }),
  Z = te.afternoon;
function ae() {
  let e = X;
  return new A({
    uniforms: {
      uLit: { value: q(e.lit) },
      uShadow: { value: q(e.shade) },
      uBase: { value: q(e.deep) },
      uRim: { value: q(e.rim) },
      uDir: { value: J },
      uFog: { value: q(Z.horizon) },
      uNear: { value: 160 },
      uFar: { value: 1100 },
    },
    vertexShader: `attribute float aBase; varying vec3 vN; varying vec3 vW; varying float vBase; void main(){ vBase = aBase; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `uniform vec3 uLit, uShadow, uBase, uRim, uDir, uFog; uniform float uNear, uFar; varying vec3 vN; varying vec3 vW; varying float vBase;
      void main(){
        vec3 N = normalize(vN);
        // The low sun models every puff: its sunward side cream, the far side lavender.
        float sun = dot(N, uDir) * 0.5 + 0.5, up = N.y * 0.5 + 0.5;
        vec3 c = mix(uShadow, uLit, smoothstep(0.36, 0.92, sun * 0.92 + up * 0.16));
        c = mix(uBase, c, 0.25 + 0.75 * smoothstep(0.0, 0.65, vBase));
        vec3 V = normalize(cameraPosition - vW);
        float rim = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 3.0);
        c += uRim * rim * (0.15 + 0.85 * max(dot(-V, uDir), 0.0)) * 0.4;
        c = mix(c, uFog, smoothstep(uNear, uFar, length(vW - cameraPosition)) * 0.6);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}
function oe(e, n, r) {
  let i = [];
  for (let t = 0; t < n; t += 1) {
    let a = new u(1, r);
    (a.deleteAttribute(`normal`), a.deleteAttribute(`uv`), (a = P(a)));
    let o = 0.55 + e() * 0.6,
      s = a.attributes.position;
    for (let e = 0; e < s.count; e += 1) {
      let n = s.getX(e),
        r = s.getY(e),
        i = s.getZ(e),
        a = 1 + (H(n * 1.6 + t * 3, r * 1.6, i * 1.6) - 0.5) * 0.28;
      s.setXYZ(e, n * a, Math.max(r * a, -0.35), i * a);
    }
    a.scale(o * (1.2 + e() * 0.6), o * (0.8 + e() * 0.3), o * (1 + e() * 0.4));
    let c = t / Math.max(1, n - 1) - 0.5;
    (a.translate(c * 3.4 + (e() - 0.5) * 0.8, (1 - Math.abs(c) * 1.6) * 0.5 * o, (e() - 0.5) * 1.6), i.push(a));
  }
  let a = N(i);
  a.computeVertexNormals();
  let o = a.attributes.position,
    s = new Float32Array(o.count);
  a.computeBoundingBox();
  let c = a.boundingBox.min.y,
    l = Math.max(0.01, a.boundingBox.max.y - c);
  for (let e = 0; e < o.count; e += 1) s[e] = (o.getY(e) - c) / l;
  return (a.setAttribute(`aBase`, new t(s, 1)), a);
}
function Q(e, t) {
  let n = G(e),
    r = 204.8,
    i = document.createElement(`canvas`);
  ((i.width = 512), (i.height = 256));
  let a = i.getContext(`2d`),
    s = [],
    c = 6 + ((n() * 4) | 0);
  for (let e = 0; e < c; e += 1) {
    let t = (e + 0.5) / c,
      i = Math.sin(t * Math.PI),
      a = 256 * (0.12 + i * 0.17 + n() * 0.07);
    s.push({ x: 512 * (0.1 + t * 0.8) + (n() - 0.5) * 512 * 0.05, y: r - a * (0.42 + i * 0.38), rad: a });
  }
  for (let e = 0, t = 2 + ((n() * 3) | 0); e < t; e += 1) {
    let e = 256 * (0.11 + n() * 0.08);
    s.push({ x: 512 * (0.3 + n() * 0.4), y: r - 256 * (0.4 + n() * 0.1) - e * 0.25, rad: e });
  }
  for (let e of s) e.rad = Math.min(e.rad, e.y - 6);
  let u = (e, t, n, r, i, o) => {
    let s = a.createRadialGradient(e, t, n * r, e, t, n);
    (s.addColorStop(0, `rgba(${i},${o})`),
      s.addColorStop(1, `rgba(${i},0)`),
      (a.fillStyle = s),
      a.beginPath(),
      a.arc(e, t, n, 0, Math.PI * 2),
      a.fill());
  };
  for (let e of s) u(e.x, e.y, e.rad, 0.6, `222,208,226`, 1);
  let d = t ? 1 : -1;
  for (let e of s) u(e.x + d * e.rad * 0.24, e.y - e.rad * 0.32, e.rad * 0.9, 0.2, `255,248,238`, 1);
  a.globalCompositeOperation = `source-atop`;
  let f = a.createLinearGradient(0, 128, 0, r);
  (f.addColorStop(0, `rgba(214,200,222,0)`),
    f.addColorStop(1, `rgba(200,184,212,0.85)`),
    (a.fillStyle = f),
    a.fillRect(0, 0, 512, 256),
    (a.globalCompositeOperation = `destination-out`));
  let p = a.createLinearGradient(0, 199.8, 0, 213.8);
  (p.addColorStop(0, `rgba(0,0,0,0)`),
    p.addColorStop(1, `rgba(0,0,0,1)`),
    (a.fillStyle = p),
    a.fillRect(0, 199.8, 512, 56.19999999999999),
    (a.globalCompositeOperation = `source-over`));
  let m = new o(i);
  return ((m.colorSpace = l), m);
}
function se(e) {
  let t = G(515),
    n = new D(),
    r = new E(J.x, J.z).normalize(),
    i = [0, 1, 2].map((e) => [Q(70 + e * 13, !1), Q(70 + e * 13, !0)]),
    a = 0,
    o = (e, t, o, s, c) => {
      let l = Math.cos(e),
        u = Math.sin(e),
        d = -u * r.x + l * r.y > 0,
        f = l * r.x + u * r.y,
        p = new v({ map: i[a++ % 3][+!!d], transparent: !0, depthWrite: !1, opacity: c, fog: !1 });
      p.color.set(f > 0.3 ? `#fff1e2` : `#fbf7f6`);
      let m = new M(p);
      (m.center.set(0.5, 0.2),
        m.scale.set(s, s * 0.5, 1),
        m.position.set(l * t, Math.tan(j.degToRad(o)) * t, u * t),
        (m.userData.noAO = !0),
        n.add(m));
    },
    s = e.low ? 1 : 2;
  for (let e = 0; e < 7; e += 1) {
    let n = -Math.PI / 2 + (e / 7) * Math.PI * 2 + (t() - 0.5) * 0.5,
      r = 440 + t() * 280;
    o(n, r, 1.6 + t() * 2.4, r * (0.3 + t() * 0.12), 0.9);
    for (let e = 0; e < s; e += 1) {
      let e = 280 + t() * 240;
      o(n + (t() < 0.5 ? -1 : 1) * (0.14 + t() * 0.2), e, 6 + t() * 10, e * (0.14 + t() * 0.1), 0.8 + t() * 0.15);
    }
    if (t() < 0.5) {
      let e = 320 + t() * 200;
      o(n + (t() - 0.5) * 0.6, e, 18 + t() * 12, e * (0.1 + t() * 0.06), 0.6);
    }
  }
  return {
    group: n,
    update(e) {
      n.rotation.y += e * 0.0011;
    },
  };
}
function ce() {
  let t = new Uint8Array(262144),
    n = (e, t) => {
      let n = new Float32Array(e * e),
        r = G(t);
      for (let e = 0; e < n.length; e += 1) n[e] = r();
      return n;
    },
    r = [
      [8, 0.5, 11],
      [16, 0.28, 12],
      [32, 0.15, 13],
      [64, 0.07, 14],
    ].map(([e, t, r]) => ({ p: e, w: t, g: n(e, r) })),
    a = (e) => e * e * (3 - 2 * e);
  for (let e = 0; e < 256; e += 1)
    for (let n = 0; n < 256; n += 1) {
      let i = 0;
      for (let t of r) {
        let r = (n / 256) * t.p,
          o = (e / 256) * t.p,
          s = Math.floor(r),
          c = Math.floor(o),
          l = a(r - s),
          u = a(o - c),
          d = (e, n) => t.g[(((n % t.p) + t.p) % t.p) * t.p + (((e % t.p) + t.p) % t.p)],
          f = (d(s, c) * (1 - l) + d(s + 1, c) * l) * (1 - u) + (d(s, c + 1) * (1 - l) + d(s + 1, c + 1) * l) * u;
        i += t.w * (1 - Math.abs(f * 2 - 1));
      }
      let o = (e * 256 + n) * 4;
      ((t[o] = t[o + 1] = t[o + 2] = Math.round(Math.min(1, i) * 255)), (t[o + 3] = 255));
    }
  let o = new b(t, 256, 256, e);
  return (
    (o.wrapS = o.wrapT = m),
    (o.magFilter = f),
    (o.minFilter = i),
    (o.generateMipmaps = !0),
    (o.needsUpdate = !0),
    o
  );
}
function le() {
  let e = X,
    t = new A({
      fog: !1,
      uniforms: {
        uNoise: { value: ce() },
        uTime: { value: 0 },
        uDir: { value: J },
        uLit: { value: q(e.lit) },
        uShade: { value: q(e.shade) },
        uDeep: { value: q(e.deep) },
        uFog: { value: q(Z.horizon) },
      },
      vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform sampler2D uNoise; uniform float uTime; uniform vec3 uDir, uLit, uShade, uDeep, uFog; varying vec3 vW;
      float hgt(vec2 p){ return texture2D(uNoise, p * 0.0042).r * 0.62 + texture2D(uNoise, p * 0.0131 + vec2(0.37, 0.71)).r * 0.38; }
      void main(){
        vec2 p = vW.xz + vec2(uTime * 0.45, uTime * 0.22);
        float h = hgt(p), e = 2.5;
        vec2 g = vec2(hgt(p + vec2(e, 0.0)) - h, hgt(p + vec2(0.0, e)) - h) / e;
        vec3 N = normalize(vec3(-g.x * 26.0, 1.0, -g.y * 26.0));
        float lit = clamp(dot(N, uDir) * 0.9 + 0.38, 0.0, 1.0);
        vec3 c = mix(uShade, uLit, smoothstep(0.2, 0.95, lit));
        c = mix(uDeep * 0.74, c, smoothstep(0.28, 0.76, h));
        float dist = length(vW.xz - cameraPosition.xz);
        c = mix(c, uFog, smoothstep(220.0, 1300.0, dist) * 0.7);
        gl_FragColor = vec4(c, 1.0);
      }`,
    }),
    r = new _(new n(1500, 72), t);
  return (
    (r.rotation.x = -Math.PI / 2),
    (r.position.y = -52),
    (r.userData.noAO = !0),
    (r.renderOrder = -5),
    {
      mesh: r,
      update(e) {
        t.uniforms.uTime.value = e;
      },
    }
  );
}
function $(e) {
  let t = G(909),
    n = new D(),
    r = ae(),
    i = [],
    a = e.low ? 2 : 3,
    o = (e, [o, s], [c, l], [u, d]) => {
      for (let f = 0; f < e; f += 1) {
        let p = oe(t, 4 + ((t() * 4) | 0), a),
          m = new _(p, r),
          h = (f / e) * Math.PI * 2 + t() * 0.6,
          g = c + t() * (l - c),
          v = u + t() * (d - u);
        (m.position.set(Math.cos(h) * g, o + t() * (s - o), Math.sin(h) * g),
          m.scale.set(v, v * (0.8 + t() * 0.3), v),
          (m.rotation.y = t() * Math.PI * 2),
          (m.userData.noAO = !0),
          n.add(m),
          i.push({ m, a: h, rad: g, sp: (t() - 0.5) * 0.004, y: m.position.y }));
      }
    };
  (o(e.low ? 14 : 22, [-56, -40], [38, 170], [8, 15]),
    o(e.low ? 10 : 20, [-66, -54], [190, 500], [20, 34]),
    o(e.low ? 3 : 5, [-6, 10], [90, 170], [3, 5.5]));
  let s = le();
  if ((n.add(s.mesh), e.low)) {
    n.updateMatrixWorld(!0);
    let e = N(i.map(({ m: e }) => e.geometry.clone().applyMatrix4(e.matrixWorld)));
    for (let { m: e } of i) n.remove(e);
    let t = new _(e, r);
    return (
      (t.userData.noAO = !0),
      n.add(t),
      {
        group: n,
        update(e, t) {
          s.update(t);
        },
      }
    );
  }
  return {
    group: n,
    update(e, t) {
      s.update(t);
      for (let t of i)
        ((t.a += t.sp * e), (t.m.position.x = Math.cos(t.a) * t.rad), (t.m.position.z = Math.sin(t.a) * t.rad));
    },
  };
}
function ue(e) {
  let t = new D(),
    n = G(4242),
    r = q(Z.below),
    i = (e) => new T({ color: q(e).lerp(r, 0.45), roughness: 1, fog: !1 }),
    a = i(`#A8BF8A`),
    o = i(`#E2D3BF`),
    s = i(`#7E9C6A`),
    l = i(`#F2E6D5`),
    d = i(`#C98F6E`),
    f = [],
    p = [
      [2.2, 230, 4, 1],
      [3.7, 290, 16, 0.8],
      [5, 250, -6, 0.75],
      [0.9, 320, 22, 0.9],
      [5.9, 340, 0, 1.1],
    ];
  for (let [r, i, m, h] of e.low ? p.slice(0, 3) : p) {
    let p = new D(),
      v = new _(new y(7, 6.6, 1.2, 28), a),
      b = new u(6.8, e.low ? 2 : 3);
    (b.deleteAttribute(`normal`), b.deleteAttribute(`uv`), (b = P(b)));
    let x = b.attributes.position;
    for (let e = 0; e < x.count; e += 1) {
      let t = x.getX(e),
        n = x.getY(e),
        i = x.getZ(e),
        a = 1 + (H(t * 0.3, n * 0.3, i * 0.3 + r) - 0.5) * 0.4;
      x.setXYZ(e, t * a, n > 0 ? n * 0.06 : n * a * 1.05, i * a);
    }
    b.computeVertexNormals();
    let S = new _(b, o);
    if (((S.position.y = -0.5), p.add(v, S), n() > 0.45)) {
      let e = new _(new u(2.2, 1), s);
      e.position.set(1.5, 3.2, 0);
      let t = new _(new y(0.25, 0.35, 2.4), o);
      (t.position.set(1.5, 1.6, 0), p.add(e, t));
    } else {
      let e = new _(new c(3, 2.4, 2.6), l);
      e.position.set(-0.5, 1.8, 0);
      let t = new _(new g(2.5, 1.6, 4), d);
      ((t.rotation.y = Math.PI / 4), t.position.set(-0.5, 3.8, 0), p.add(e, t));
    }
    (p.position.set(Math.cos(r) * i, m, Math.sin(r) * i),
      p.scale.setScalar(h * 1.4),
      p.traverse((e) => {
        e.isMesh && (e.userData.noAO = !0);
      }),
      t.add(p),
      f.push({ g: p, y: m, ph: n() * 6 }));
  }
  return {
    group: t,
    update(e) {
      for (let t of f) t.g.position.y = t.y + Math.sin(e * 0.25 + t.ph) * 0.8;
    },
  };
}
function de(e) {
  let t = new D(),
    n = [],
    r = G(12),
    i = e.low ? 5 : 9,
    a = new T({ color: `#fbf7f0`, roughness: 0.8, side: 2 }),
    o = new S();
  (o.setAttribute(`position`, new s([0, 0, -0.12, 0, 0, 0.16, 0.62, 0.02, -0.02], 3)), o.computeVertexNormals());
  for (let e = 0; e < i; e += 1) {
    let s = new D(),
      c = new _(new d(0.05, 0.22, 4, 8), a);
    c.rotation.x = Math.PI / 2;
    let l = new _(o, a),
      u = new _(o, a);
    ((u.scale.x = -1),
      s.add(c, l, u),
      s.scale.setScalar(1.6),
      s.traverse((e) => {
        e.userData.noAO = !0;
      }),
      t.add(s),
      n.push({
        b: s,
        wl: l,
        wr: u,
        a: (e / i) * 0.9 + r() * 0.2,
        rad: 34 + r() * 8,
        y: 12 + r() * 5,
        ph: r() * 6,
        sp: 0.075 + r() * 0.01,
      }));
  }
  return {
    group: t,
    update(e, t) {
      for (let r of n) {
        r.a += r.sp * e;
        let n = Math.cos(r.a) * r.rad,
          i = Math.sin(r.a) * r.rad,
          a = r.y + Math.sin(t * 0.5 + r.ph) * 1.2;
        (r.b.position.set(n, a, i), (r.b.rotation.y = -r.a));
        let o = Math.sin(t * 7 + r.ph) * 0.7;
        ((r.wl.rotation.z = o), (r.wr.rotation.z = -o));
      }
    },
  };
}
function fe(e) {
  let n = e.low ? 160 : 360,
    i = new Float32Array(n * 3),
    o = new Float32Array(n),
    s = G(3);
  for (let e = 0; e < n; e += 1) {
    let t = s() * Math.PI * 2,
      n = Math.sqrt(s()) * 26;
    ((i[e * 3] = Math.cos(t) * n),
      (i[e * 3 + 1] = 0.4 + s() * 5.5),
      (i[e * 3 + 2] = Math.sin(t) * n),
      (o[e] = s() * 100));
  }
  let c = new S();
  c.setAttribute(`position`, new t(i, 3));
  let l = new r(
    c,
    new a({ map: R(), color: `#ffe2b0`, size: 0.09, transparent: !0, opacity: 0.8, depthWrite: !1, blending: 2 }),
  );
  return (
    (l.userData.noAO = !0),
    {
      group: l,
      update(e, t) {
        for (let e = 0; e < n; e += 1) {
          let n = o[e];
          ((i[e * 3] += Math.sin(t * 0.2 + n) * 0.004),
            (i[e * 3 + 2] += Math.cos(t * 0.17 + n) * 0.004),
            (i[e * 3 + 1] += 0.0025 + Math.sin(t * 0.3 + n) * 0.002),
            i[e * 3 + 1] > 6.5 && (i[e * 3 + 1] = 0.3));
        }
        c.attributes.position.needsUpdate = !0;
      },
    }
  );
}
function pe() {
  let e = G(404),
    t = new C(1, 0.62, 1, 1),
    n = t.attributes.position;
  for (let e = 0; e < n.count; e += 1) n.setZ(e, Math.abs(n.getX(e)) * 0.35);
  t.computeVertexNormals();
  let r = new T({ color: `#E7B7B0`, roughness: 0.85, side: 2, emissive: `#E7B7B0`, emissiveIntensity: 0.18 }),
    i = new k(t, r, 40);
  ((i.frustumCulled = !1), (i.userData.noAO = !0));
  let a = [],
    o = new x(),
    s = new h(),
    c = new w(),
    l = new O(),
    u = new O(),
    d = new O(),
    f = (t, n) => {
      ((t.x = d.x + (e() - 0.5) * 26), (t.z = d.z + (e() - 0.5) * 26), (t.y = n ? 7 + e() * 3 : 0.3 + e() * 9));
    };
  for (let t = 0; t < 40; t += 1) {
    let t = { size: 0.04 + e() * 0.03, ph: e() * 6.3, sw: 0.4 + e() * 0.5, spin: (e() - 0.5) * 2 };
    (f(t, !1), a.push(t));
  }
  return {
    mesh: i,
    follow(e) {
      d.set(e.x, 0, e.z);
    },
    update(e, t, n) {
      for (let r = 0; r < 40; r += 1) {
        let p = a[r];
        p.y -= e * 0.3;
        let m = Math.sin(t * p.sw + p.ph);
        ((p.x += m * e * 0.22 + e * 0.12),
          (p.z += Math.cos(t * p.sw * 0.8 + p.ph) * e * 0.16),
          (p.y < n(p.x, p.z) + 0.02 || Math.hypot(p.x - d.x, p.z - d.z) > 18) && f(p, !0),
          s.setFromEuler(c.set(0.6 + m * 0.7, t * p.spin + p.ph, m * 0.5)),
          i.setMatrixAt(r, o.compose(l.set(p.x, p.y, p.z), s, u.setScalar(p.size))));
      }
      i.instanceMatrix.needsUpdate = !0;
    },
  };
}
function me(e, t, n) {
  let r = new D();
  ((r.name = `sky`), (r.userData.flat = !0));
  let i = F({ sun: J, renderer: n }),
    a = $(t),
    o = se(t),
    s = ue(t),
    c = de(t);
  (r.add(i.mesh, a.group, o.group, s.group, c.group), e.add(r));
  let l = new D();
  l.name = `air`;
  let u = fe(t),
    d = pe();
  (l.add(u.group, d.mesh), e.add(l), L(e, Y));
  let f = ne({ sun: J, quality: t, box: 34 }),
    p = re();
  e.add(f.light, f.target, p);
  let m = i.material.uniforms;
  Object.assign(m, { uTop: m.uZenith, uHor: m.uHorizon });
  let h = new O();
  return {
    group: r,
    air: l,
    sun: f.light,
    hemi: p,
    dome: i,
    petals: d,
    setFocus(t, n) {
      h.copy(t);
      let r = Y.near + Math.max(0, n - 12) * 0.95;
      ((e.fog.near = r), (e.fog.far = r + (Y.far - Y.near) * (1 + Math.max(0, n - 12) / 90)));
    },
    update(e, t, n, r = () => -1 / 0) {
      (i.update(n),
        a.update(e, t),
        o.update(e),
        s.update(t),
        c.update(e, t),
        u.update(e, t),
        d.follow(h),
        d.update(e, t, r));
    },
  };
}
export { H as a, W as i, me as n, G as o, K as r, J as t };
