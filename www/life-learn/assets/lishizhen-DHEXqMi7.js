import {
  A as e,
  Ar as t,
  B as n,
  Ba as r,
  Fr as i,
  Ir as a,
  L as o,
  La as s,
  O as c,
  Pt as l,
  Qi as u,
  Qt as d,
  Tn as f,
  U as p,
  Wr as m,
  ar as h,
  ba as g,
  ct as _,
  ia as v,
  ir as y,
  j as b,
  jr as x,
  jt as S,
  mr as C,
  no as w,
  or as T,
  pa as E,
  qt as D,
  ra as O,
  ro as k,
  sn as A,
  tr as j,
  ya as M,
  z as N,
} from "./three.core-DtjtRha-.js";
import { t as P } from "./gsap-CvDoa17S.js";
import { n as F, t as I } from "./i18n-BvGoRVq5.js";
import { l as ee, n as te } from "./assets-p2qy6QaX.js";
import { s as L } from "./stamp-C8irYyoR.js";
import { a as R } from "./visits-C_j5CG_Y.js";
import { t as ne } from "./room-zvqq_5d-.js";
var re = 5,
  z = `'Kaiti SC', 'STKaiti', 'KaiTi', serif`,
  B = `'LzBrush', ${z}`,
  V = (e, t = {}) => new C({ color: e, roughness: 0.75, metalness: 0, ...t }),
  H = () => V(`#b8904e`, { roughness: 0.32, metalness: 0.8 }),
  U = () => V(`#5a3b24`, { roughness: 0.68 }),
  W = (e) => (
    e.traverse((e) => {
      (e.isMesh || e.isSprite) &&
        ((e.renderOrder = re), e.isMesh && e.material && !e.material.transparent && (e.material.transparent = !0));
    }),
    e
  );
function G(e, t, n) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t), n(r.getContext(`2d`), e, t));
  let i = new o(r);
  return ((i.colorSpace = u), (i.anisotropy = 4), i);
}
function ie(
  e,
  t,
  { x: n, y: r, size: i, lh: a = i * 1.12, height: o, gap: s = i * 1.5, color: c = `#2b2420`, font: l = z },
) {
  ((e.fillStyle = c), (e.font = `${i}px ${l}`), (e.textAlign = `center`), (e.textBaseline = `middle`));
  let u = n,
    d = r;
  for (let n of t) {
    if (
      n ===
      `
`
    ) {
      ((u -= s), (d = r));
      continue;
    }
    (d + a > r + o && ((u -= s), (d = r)), e.fillText(n, u, d + a / 2), (d += a));
  }
  return u;
}
function ae(e, t, n) {
  let r = new M(new g({ map: e, transparent: !0, depthWrite: !1 }));
  return (r.scale.set(t, n, 1), (r.renderOrder = 6), r);
}
var oe = (e) =>
  G(64, 64, (t) => {
    let n = t.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, e), n.addColorStop(1, `rgba(0,0,0,0)`), (t.fillStyle = n), t.fillRect(0, 0, 64, 64));
  });
function se(e, t, n = 0.45) {
  let r = new h(new x(e, t), new T({ map: oe(`rgba(20, 10, 4, 1)`), transparent: !0, opacity: n, depthWrite: !1 }));
  return ((r.rotation.x = -Math.PI / 2), (r.position.y = 0.0015), (r.renderOrder = re), r);
}
var ce = {
  合欢花: [`#d98aa0`, `#a8b47e`],
  萱草: [`#e08a3a`, `#c4682a`],
  远志: [`#b48a5a`, `#93693f`],
  酸枣仁: [`#7a3b25`, `#5a2a1a`],
  茯苓: [`#efe7d6`, `#d8cdb8`],
  甘草: [`#dcb75c`, `#b88c3a`],
  当归: [`#8a5a3a`, `#c9a47c`],
  陈皮: [`#c0652a`, `#94481c`],
  薄荷: [`#5f8f4e`, `#7fa862`],
  菊花: [`#e6c84a`, `#f0dc84`],
  决明子: [`#5a3a22`, `#7a5030`],
  枸杞子: [`#c4302b`, `#9e2420`],
  蕲艾: [`#9fb08f`, `#c2c9b2`],
  人参: [`#e2c99a`, `#cbab76`],
  黄芪: [`#e8d9a8`, `#c9b37c`],
  大枣: [`#8e2a22`, `#6c1d17`],
  莲子心: [`#6f8f3a`, `#8aa852`],
  生姜: [`#e3c27a`, `#c7a257`],
  山楂: [`#b8463a`, `#e2c494`],
  金银花: [`#efe2a0`, `#f6f0d8`],
};
function le(e, { r: t = 0.035, n = 44, seed: r = 3 } = {}) {
  let [i, a] = ce[e] || [`#9a7a50`, `#7a5a3a`],
    o = new A(new d(1, 0), V(`#ffffff`, { roughness: 0.9, flatShading: !0 }), n),
    s = r * 7919 + 13,
    c = () => (s = (s * 16807) % 2147483647) / 2147483647,
    l = new y(),
    u = new m(),
    f = new S(),
    h = new p(),
    g = new k(),
    _ = new k();
  for (let e = 0; e < n; e += 1) {
    let n = c() * Math.PI * 2,
      r = Math.sqrt(c()) * t,
      s = t * (0.1 + c() * 0.09);
    (g.set(Math.cos(n) * r, (1 - r / t) * t * 0.5 * (0.4 + c() * 0.6) + s * 0.4, Math.sin(n) * r),
      u.setFromEuler(f.set(c() * 3, c() * 3, c() * 3)),
      o.setMatrixAt(e, l.compose(g, u, _.set(s * (1 + c() * 0.8), s * 0.55, s))),
      o.setColorAt(e, h.set(c() < 0.65 ? i : a).offsetHSL(0, 0, (c() - 0.5) * 0.1)));
  }
  return ((o.instanceMatrix.needsUpdate = !0), (o.instanceColor.needsUpdate = !0), (o.renderOrder = re), o);
}
function ue(e, t, n, { width: r = 0.5, height: i = 0.4, min: a = 0.42 } = {}) {
  let o = new k().subVectors(t, n).normalize(),
    s = j.degToRad(e.fov),
    c = 2 * Math.atan(Math.tan(s / 2) * e.aspect),
    l = Math.max(a, r / 2 / Math.tan(c / 2), i / 2 / Math.tan(s / 2));
  return t.clone().addScaledVector(o, -l);
}
function de() {
  let e = new D(),
    t = V(`#3a3430`, { roughness: 0.5, metalness: 0.55 }),
    n = new O();
  (n.moveTo(-0.22, 0.075),
    n.quadraticCurveTo(-0.2, 0, -0.1, 0),
    n.lineTo(0.1, 0),
    n.quadraticCurveTo(0.2, 0, 0.22, 0.075),
    n.lineTo(0.13, 0.075),
    n.quadraticCurveTo(0, 0.02, -0.13, 0.075),
    n.closePath());
  let r = new h(
    new l(n, {
      depth: 0.1,
      bevelEnabled: !0,
      bevelSize: 0.006,
      bevelThickness: 0.006,
      bevelSegments: 2,
      curveSegments: 10,
    }),
    t,
  );
  ((r.rotation.y = Math.PI / 2), (r.position.x = -0.05));
  let i = new h(new c(0.09, 0.012, 0.3), t);
  ((i.position.y = 0.004), e.add(r, i, se(0.2, 0.52)));
  let a = le(`当归`, { r: 0.05, n: 36, seed: 5 });
  (a.scale.set(1, 0.5, 2.2), (a.position.y = 0.03), e.add(a));
  let o = new D(),
    u = new h(new _(0.075, 0.075, 0.02, 32), t);
  u.rotation.z = Math.PI / 2;
  let d = new h(new s(0.068, 0.004, 6, 32), V(`#58504a`, { roughness: 0.4, metalness: 0.7 }));
  d.rotation.y = Math.PI / 2;
  let f = new h(new _(0.009, 0.009, 0.3, 10), U());
  f.rotation.z = Math.PI / 2;
  let p = new D();
  (p.add(u, d, new h(new c(0.022, 0.012, 0.02), V(`#2a2522`))), o.add(p, f), (o.position.y = 0.088), e.add(o), W(e));
  let m = 0.11,
    g = 0;
  return {
    group: e,
    get u() {
      return g;
    },
    roll(e) {
      let t = j.clamp(e, -1, 1),
        n = (t - g) * m;
      return ((g = t), (o.position.z = g * m), (p.rotation.x -= n / 0.075), Math.abs(n));
    },
    grind(e) {
      ((a.scale.y = Math.max(0.18, a.scale.y - e * 0.6)), (a.scale.x = Math.min(1.5, a.scale.x + e * 0.4)));
    },
  };
}
var fe = [
  {
    title: `序`,
    text: `如入金谷之园种色夺目如登龙君之宫宝藏悉陈如对冰壶玉鉴毛发可指数也
博而不繁详而有要综核究竟直窥渊海`,
  },
  {
    title: `曼陀罗花`,
    text: `曼陀罗生北土人家亦栽之
相传此花笑采酿酒饮令人笑舞采酿酒饮令人舞
予尝试之饮须半酣更令一人或笑或舞引之乃验也`,
    plant: !0,
  },
  {
    title: `鲮鲤`,
    text: `鲮鲤状如鼍而小背如鲤而阔首如鼠而无牙
腹内脏腑俱全而胃独大常吐舌诱蚁食之
曾剖其胃约蚁升许也`,
    marks: !0,
  },
  { title: `本草纲目`, text: ``, seal: !0 },
];
function pe(e, t) {
  return G(256, 384, (n, r, i) => {
    ((n.fillStyle = `#efe2c4`), n.fillRect(0, 0, r, i));
    for (let e = 0; e < 900; e += 1)
      ((n.fillStyle = `rgba(120,90,50,${Math.random() * 0.05})`),
        n.fillRect(Math.random() * r, Math.random() * i, 2, 2));
    ((n.strokeStyle = `rgba(160, 50, 40, 0.55)`),
      (n.lineWidth = 2),
      n.strokeRect(14, 18, r - 28, i - 36),
      (n.lineWidth = 1));
    for (let e = r - 14 - 26; e > 14; e -= 26) (n.beginPath(), n.moveTo(e, 18), n.lineTo(e, i - 18), n.stroke());
    if (e) {
      if (t === `right`) {
        if (
          (e.title && ie(n, e.title, { x: r - 27, y: 30, size: 21, height: i - 60, color: `#3a2418` }),
          ie(n, e.text, { x: r - 53, y: 30, size: 17, height: i - 60, gap: 26 }),
          e.marks)
        ) {
          ((n.strokeStyle = `rgba(190, 40, 30, 0.8)`), (n.lineWidth = 2));
          for (let [e, t] of [
            [r - 79, 120],
            [r - 105, 200],
            [r - 53, 260],
          ])
            (n.beginPath(), n.ellipse(e, t, 11, 26, 0, 0, Math.PI * 2), n.stroke());
        }
      } else if (e.plant) {
        ((n.strokeStyle = `#3b3026`),
          (n.lineWidth = 2.2),
          (n.lineCap = `round`),
          n.beginPath(),
          n.moveTo(r / 2, i - 40),
          n.bezierCurveTo(r / 2 - 10, i - 140, r / 2 + 14, i - 210, r / 2, i - 290),
          n.stroke());
        for (let [e, t, a] of [
          [r / 2 - 40, i - 150, -1],
          [r / 2 + 44, i - 200, 1],
          [r / 2 - 36, i - 250, -1],
        ])
          (n.beginPath(),
            n.moveTo(r / 2, t + 20),
            n.quadraticCurveTo(e, t - 10, e + a * 30, t + 26),
            n.quadraticCurveTo(e + a * 6, t + 30, r / 2, t + 20),
            n.stroke());
        (n.beginPath(),
          n.moveTo(r / 2, i - 290),
          n.lineTo(r / 2 - 22, i - 340),
          n.lineTo(r / 2, i - 324),
          n.lineTo(r / 2 + 22, i - 340),
          n.closePath(),
          n.stroke(),
          ie(n, `曼陀罗花`, { x: 40, y: 34, size: 18, height: 120, color: `#3a2418` }));
      } else
        e.seal
          ? ((n.fillStyle = `#b8352c`),
            n.fillRect(r / 2 - 34, i / 2 - 34, 68, 68),
            (n.fillStyle = `#efe2c4`),
            (n.font = `700 28px ${z}`),
            (n.textAlign = `center`),
            (n.textBaseline = `middle`),
            n.fillText(`濒`, r / 2 + 14, i / 2 - 13),
            n.fillText(`湖`, r / 2 + 14, i / 2 + 17),
            n.fillText(`东`, r / 2 - 14, i / 2 - 13),
            n.fillText(`璧`, r / 2 - 14, i / 2 + 17))
          : ie(
              n,
              e.text.split(`
`)[1] || ``,
              { x: r - 27, y: 30, size: 17, height: i - 60, gap: 26 },
            );
    }
  });
}
function me() {
  let e = new D(),
    t = 0.15,
    n = 0.22,
    r = new h(new c(0.232, 0.012, 0.314), V(`#36414a`, { roughness: 0.85 }));
  ((r.position.y = 0.006), e.add(r));
  let i = (e) => V(`#ffffff`, { map: e, roughness: 0.95 }),
    a = (r) => {
      let a = new h(new x(t, n), i(null));
      return (
        (a.rotation.x = -Math.PI / 2),
        (a.rotation.z = Math.PI / 2),
        a.position.set(0, 0.0135, r === `left` ? t / 2 : -0.15 / 2),
        e.add(a),
        a
      );
    },
    o = a(`left`),
    s = a(`right`),
    l = new x(t, n, 16, 1);
  (l.rotateX(-Math.PI / 2), l.rotateY(Math.PI / 2), l.translate(0, 0, t / 2));
  let u = l.attributes.position.array.slice(),
    d = new h(l, V(`#ffffff`, { roughness: 0.95, side: 2 }));
  ((d.position.y = 0.0145), (d.visible = !1), e.add(d), W(e));
  let f = 0,
    p = () => {
      ((o.material.map = pe(fe[f], `left`)),
        (o.material.needsUpdate = !0),
        (s.material.map = pe(fe[f], `right`)),
        (s.material.needsUpdate = !0));
    };
  p();
  let m = (e) => {
    let n = l.attributes.position,
      r = Math.PI * e,
      i = Math.sin(Math.PI * e);
    for (let a = 0; a < n.count; a += 1) {
      let o = u[a * 3],
        s = u[a * 3 + 2],
        c = r + i * 0.9 * (s / t) * (1 - e * 0.6);
      n.setXYZ(a, o, Math.sin(c) * s * 0.98, Math.cos(c) * s);
    }
    ((n.needsUpdate = !0), l.computeVertexNormals());
  };
  return {
    group: e,
    get spread() {
      return f;
    },
    turn() {
      if (f >= fe.length - 1) return Promise.resolve(!1);
      ((d.material.map = o.material.map),
        (d.material.needsUpdate = !0),
        (d.visible = !0),
        (f += 1),
        (o.material.map = pe(fe[f], `left`)),
        (o.material.needsUpdate = !0));
      let e = { t: 0 };
      return (
        m(0),
        new Promise((t) =>
          P.to(e, {
            t: 1,
            duration: 0.9,
            ease: `power2.inOut`,
            onUpdate: () => m(e.t),
            onComplete: () => {
              ((d.visible = !1), p(), t(!0));
            },
          }),
        )
      );
    },
  };
}
var he = {
    合欢花: `萱草`,
    萱草: `合欢花`,
    远志: `茯苓`,
    酸枣仁: `远志`,
    茯苓: `甘草`,
    甘草: `大枣`,
    当归: `黄芪`,
    陈皮: `生姜`,
    薄荷: `菊花`,
    菊花: `枸杞子`,
    决明子: `菊花`,
    枸杞子: `菊花`,
    蕲艾: `生姜`,
    人参: `黄芪`,
    黄芪: `当归`,
    大枣: `生姜`,
    莲子心: `酸枣仁`,
    生姜: `大枣`,
    山楂: `陈皮`,
    金银花: `薄荷`,
  },
  ge = (e, t) =>
    G(80, 144, (n, r, i) => {
      ((n.fillStyle = t ? `#f6ead0` : `#eadcbc`),
        n.fillRect(0, 0, r, i),
        (n.strokeStyle = `rgba(122, 80, 46, 0.7)`),
        (n.lineWidth = 2),
        n.strokeRect(4, 4, r - 8, i - 8));
      let a = Math.min(4, [...e].length);
      ie(n, [...e].slice(0, 4).join(``), {
        x: r / 2,
        y: 10,
        size: a > 3 ? 27 : 32,
        lh: a > 3 ? 30 : 38,
        height: i - 18,
        color: t ? `#2b2420` : `#5a4636`,
        font: B,
      });
    });
function _e(e, { label: t = e, other: r = null, W: i = 0.235, H: a = 0.165, clip: o = null } = {}) {
  let l = new D(),
    u = new D();
  l.add(u);
  let d = V(`#9a6a3c`, { roughness: 0.58 }),
    f = 0.26,
    m = 0.01,
    g = 0.2,
    _ = new h(new c(i, a, 0.016), d);
  _.position.z = 0.008;
  let v = new h(
    new x(0.058, 0.104),
    new C({ map: ge(t, !0), roughness: 0.9, emissive: new p(`#ffb860`), emissiveIntensity: 0 }),
  );
  v.position.set(-i * 0.3, 0.004, 0.0165);
  let y = r ?? (he[e] && he[e] !== e ? he[e] : ``),
    b = new h(new x(0.058, 0.104), V(`#ffffff`, { map: ge(y, !1), roughness: 0.9 }));
  b.position.set(i * 0.3, 0.004, 0.0165);
  let S = new h(new s(0.014, 0.003, 6, 18), H());
  S.position.set(0, -0.016, 0.02);
  let w = new h(new n(0.016, 18), H());
  w.position.set(0, -0.002, 0.0165);
  let E = new h(new x(i - 0.008, a - 0.008), new T({ color: `#140c07`, transparent: !0, opacity: 0, depthWrite: !1 }));
  ((E.position.z = 8e-4), l.add(E));
  let O = new D(),
    A = (e, t, n, r, i, a) => {
      let o = new h(new c(e, t, n), V(`#4a3020`, { roughness: 0.8 }));
      (o.position.set(r, i, a), O.add(o));
    };
  (A(i - 0.01, m, f, 0, -a / 2 + m, -0.26 / 2),
    A(m, a - 0.02, f, -i / 2 + 0.01, -0.005, -0.26 / 2),
    A(m, a - 0.02, f, i / 2 - 0.01, -0.005, -0.26 / 2),
    A(i - 0.01, a - 0.02, m, 0, -0.005, -0.26));
  let M = le(e, { r: 0.05, n: 60, seed: e.charCodeAt(0) });
  (M.scale.set(1.5, 0.9, 2.2), M.position.set(0, -a / 2 + m * 1.5, -0.117), O.add(M), u.add(O, _, v, b, S, w));
  let N = ae(oe(`rgba(255, 196, 110, 0.85)`), 0.42, 0.34);
  (N.position.set(0, 0, 0.05),
    (N.material.opacity = 0),
    (N.material.blending = 2),
    (N.material.depthTest = !1),
    l.add(N),
    (l.rotation.y = -Math.PI / 2),
    W(l),
    o &&
      u.traverse((e) => {
        e.material && (e.material.clippingPlanes = [o]);
      }));
  let F = null,
    I = () => {
      E.material.opacity = Math.min(1, u.position.z / 0.03);
    };
  return {
    group: l,
    pile: M,
    OUT: g,
    get front() {
      return (u.updateWorldMatrix(!0, !1), u.localToWorld(new k(0, 0, 0.016)));
    },
    get out() {
      return u.position.z / g;
    },
    pull(e) {
      (P.killTweensOf(u.position), (u.position.z = j.clamp(e, 0, 1) * g), I());
    },
    glow(e, t = !1) {
      (F?.kill(),
        (F = null),
        e
          ? (P.to(v.material, { emissiveIntensity: t ? 0.55 : 0.28, duration: 0.6 }),
            (F = P.fromTo(
              N.material,
              { opacity: t ? 0.55 : 0.28 },
              { opacity: t ? 0.95 : 0.45, duration: 1.1, yoyo: !0, repeat: -1, ease: `sine.inOut` },
            )))
          : (P.to(v.material, { emissiveIntensity: 0, duration: 0.6 }),
            P.to(N.material, { opacity: 0, duration: 0.6 })));
    },
    nudge() {
      return new Promise((e) =>
        P.to(u.position, { z: 0.03, duration: 0.45, ease: `back.out(2.4)`, onUpdate: I, onComplete: e }),
      );
    },
    open() {
      return new Promise((e) =>
        P.to(u.position, { z: g, duration: 0.6, ease: `power2.out`, onUpdate: I, onComplete: e }),
      );
    },
    close() {
      return new Promise((e) =>
        P.to(u.position, { z: 0, duration: 0.5, ease: `power2.in`, onUpdate: I, onComplete: e }),
      );
    },
  };
}
var ve = 0.035,
  ye = 0.05,
  be = 0.32,
  xe = 0.05,
  Se = (e) => ve + ye * e,
  Ce = (e, t) => (t === `en` ? String(e) : [``, `一`, `二`, `三`, `四`, `五`][e]);
function we(e, t) {
  return G(64, 64, (n) => {
    (t && ((n.fillStyle = `rgba(255, 214, 140, 0.95)`), n.beginPath(), n.arc(32, 32, 26, 0, Math.PI * 2), n.fill()),
      (n.font = `700 40px ${z}`),
      (n.textAlign = `center`),
      (n.textBaseline = `middle`),
      (n.fillStyle = t ? `#9a2a20` : `#3a2a1c`),
      n.fillText(e, 32, 34));
  });
}
function Te({ lang: e = `zh` } = {}) {
  let t = new D(),
    n = new D(),
    r = new h(new c(0.03, 0.42, 0.03), U());
  r.position.set(0.12, 0.21, 0);
  let i = new h(new c(0.15, 0.026, 0.026), U());
  i.position.set(0.06, 0.41, 0);
  let a = new h(new c(0.12, 0.02, 0.12), U());
  a.position.set(0.12, 0.01, 0);
  let o = se(0.2, 0.2);
  ((o.position.x = 0.12), n.add(r, i, a, o), t.add(n));
  let l = new D();
  ((l.position.y = 0.3), t.add(l));
  let u = new h(new _(0.0014, 0.0014, 0.1, 5), V(`#7a2a20`));
  (u.position.set(0, 0.35, 0), t.add(u));
  let d = new h(new _(0.0042, 0.0032, 0.39, 10), V(`#eadfc6`, { roughness: 0.38 }));
  ((d.rotation.x = Math.PI / 2), (d.position.z = 0.27 / 2));
  let f = new h(new E(0.006, 10, 8), H());
  ((f.position.z = 0.33), l.add(d, f));
  for (let e = 0; e <= 5; e += 0.5) {
    let t = new h(new E(e % 1 ? 0.0017 : 0.0026, 6, 4), H());
    (t.position.set(0, 0.0038, Se(e)), l.add(t));
  }
  let p = [];
  for (let t = 1; t <= 5; t += 1) {
    let n = ae(we(Ce(t, e), !1), 0.024, 0.024);
    (n.position.set(0, 0.024, Se(t)),
      (n.userData = { q: t, cold: n.material.map, hot: we(Ce(t, e), !0) }),
      l.add(n),
      p.push(n));
  }
  let m = ae(oe(`rgba(255, 196, 100, 1)`), 0.034, 0.034);
  ((m.material.blending = 2), (m.material.opacity = 0), m.position.set(0, 0.004, Se(0)), l.add(m));
  let g = new D(),
    v = new h(
      new E(0.058, 28, 8, 0, Math.PI * 2, Math.PI * 0.66, Math.PI * 0.34),
      V(`#b8904e`, { roughness: 0.3, metalness: 0.8, side: 2 }),
    );
  ((v.position.y = 0.05), g.add(v));
  for (let e = 0; e < 3; e += 1) {
    let t = (e / 3) * Math.PI * 2,
      n = new h(new _(8e-4, 8e-4, 0.105, 4), V(`#5a3a28`)),
      r = new k(Math.cos(t) * 0.045, 0.015, Math.sin(t) * 0.045),
      i = new k(0, 0.11, 0);
    (n.position.copy(r).add(i).multiplyScalar(0.5),
      n.quaternion.setFromUnitVectors(new k(0, 1, 0), i.clone().sub(r).normalize()),
      g.add(n));
  }
  t.add(g);
  let y = new D(),
    b = new h(new s(0.006, 0.0014, 5, 12), V(`#7a2a20`)),
    x = new h(new _(9e-4, 9e-4, 0.04, 4), V(`#7a2a20`));
  x.position.y = -0.022;
  let S = new h(new _(0.009, 0.016, 0.03, 14), H());
  S.position.y = -0.056;
  let C = new h(new E(0.009, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), H());
  ((C.position.y = -0.041), y.add(b, x, S, C), l.add(y), W(t));
  let w = ve,
    T = 0,
    O = 0,
    A = 0,
    M = null,
    N = null,
    F = () => {
      ((l.rotation.x = O),
        y.position.set(0, 0, w),
        (y.rotation.x = -O),
        g.position.set(0, 0.3 + xe * Math.sin(O) - 0.11, -0.05 * Math.cos(O)));
    };
  return (
    F(),
    {
      group: t,
      pivot: l,
      ZERO: ve,
      ARM: be,
      get weight() {
        return w;
      },
      set weight(e) {
        w = j.clamp(e, 0.015, be);
      },
      markAt: Se,
      pointAt(e) {
        return (l.updateWorldMatrix(!0, !1), l.localToWorld(new k(0, 0, e)));
      },
      get weightPoint() {
        return this.pointAt(w).add(new k(0, -0.05, 0));
      },
      get panPoint() {
        return (g.updateWorldMatrix(!0, !1), g.localToWorld(new k(0, 0.02, 0)));
      },
      get reading() {
        return (w - ve) / ye;
      },
      home() {
        let e = { s: w };
        return new Promise((t) =>
          P.to(e, {
            s: ve,
            duration: 0.45,
            ease: `power2.inOut`,
            onUpdate: () => {
              ((w = e.s), F());
            },
            onComplete: t,
          }),
        );
      },
      load(e, t) {
        ((M &&= (g.remove(M), null)),
          (T = e ? t : 0),
          p.forEach((n) => {
            n.material.map = e && n.userData.q === Math.round(t) && t % 1 == 0 ? n.userData.hot : n.userData.cold;
          }),
          (m.position.z = Se(T)),
          P.to(m.material, { opacity: e ? 0.9 : 0, duration: 0.4 }),
          e &&
            ((M = le(e, { r: 0.035, n: 34, seed: e.charCodeAt(0) + 1 })), (M.position.y = 0.012), g.add(M), (A -= 1.8)),
          (N = null));
      },
      get target() {
        return T;
      },
      get lean() {
        return O / 0.25;
      },
      update(e, t) {
        let n = (w - Se(T)) / ye,
          r = j.clamp(n * 0.11, -0.25, 0.25);
        return (
          (A += (-(O - r) * 70 - A * 7.5) * e),
          (O += A * e),
          F(),
          Math.abs(n) < 0.13 && Math.abs(A) < 0.25 ? ((N ??= t), t - N > 380) : ((N = null), !1)
        );
      },
    }
  );
}
function Ee() {
  let e = new D(),
    t = 0.11,
    n = 0.07,
    r = G(128, 128, (e, t, n) => {
      ((e.fillStyle = `#efe4c8`), e.fillRect(0, 0, t, n));
      for (let r = 0; r < 500; r += 1)
        ((e.fillStyle = `rgba(130,100,60,${Math.random() * 0.06})`),
          e.fillRect(Math.random() * t, Math.random() * n, 1.5, 1.5));
    }),
    i = () => V(`#ffffff`, { map: r, roughness: 0.95, side: 2 }),
    a = new h(new x(t, t), i());
  ((a.rotation.x = -Math.PI / 2), (a.position.y = 0.001), e.add(a, se(0.22, 0.22, 0.32)));
  let o = new D();
  e.add(o);
  let s = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ].map(([r, a], o) => {
      let s = new D();
      s.position.set((r * t) / 2, 0.001, (a * t) / 2);
      let c = r !== 0,
        l = new h(new x(c ? n : 0.122, c ? 0.122 : n), i());
      return (
        (l.rotation.x = -Math.PI / 2),
        l.position.set((r * n) / 2, 0, (a * n) / 2),
        s.add(l),
        (s.userData = { dx: r, dz: a, i: o }),
        e.add(s),
        s
      );
    }),
    l = new D(),
    u = V(`#8a2a1e`, { roughness: 0.7 }),
    d = new h(new c(0.12, 0.003, 0.003), u),
    f = new h(new c(0.003, 0.003, 0.12), u);
  (l.add(d, f), (l.position.y = 0.0095), (l.visible = !1), e.add(l), W(e));
  let p = 0;
  return {
    group: e,
    heap(e) {
      (o.clear(),
        e.forEach((t, n) => {
          let r = le(t, { r: 0.022, n: 26, seed: t.charCodeAt(0) + 7 }),
            i = (n / e.length) * Math.PI * 2 + 0.6;
          (r.position.set(Math.cos(i) * 0.018, 0.002, Math.sin(i) * 0.018),
            r.scale.setScalar(0.001),
            o.add(r),
            P.to(r.scale, { x: 1, y: 1, z: 1, duration: 0.45, delay: n * 0.25, ease: `back.out(2)` }));
        }));
    },
    add(e) {
      let t = o.children.length,
        n = le(e, { r: 0.022, n: 26, seed: e.charCodeAt(0) + 7 }),
        r = (t / 3) * Math.PI * 2 + 0.6;
      (n.position.set(Math.cos(r) * 0.018, 0.002, Math.sin(r) * 0.018),
        n.scale.setScalar(0.001),
        o.add(n),
        P.to(n.scale, { x: 1, y: 1, z: 1, duration: 0.4, ease: `back.out(2)` }));
    },
    get folded() {
      return p;
    },
    fold() {
      let e = s[p];
      if (!e) return Promise.resolve(!1);
      ((p += 1), p === 1 && P.to(o.scale, { y: 0.12, duration: 0.3 }));
      let { dx: t, dz: n, i: r } = e.userData,
        i = n ? { x: -n * Math.PI } : { z: t * Math.PI };
      return (
        P.to(e.position, { y: 0.003 + 0.0016 * r, duration: 0.55, ease: `power2.inOut` }),
        new Promise((t) => P.to(e.rotation, { ...i, duration: 0.55, ease: `power2.inOut`, onComplete: () => t(!0) }))
      );
    },
    tie(t) {
      if (
        ((l.visible = !0),
        l.scale.setScalar(0.001),
        P.to(l.scale, { x: 1, y: 1, z: 1, duration: 0.5, ease: `power2.out` }),
        !t)
      )
        return Promise.resolve();
      let n = new h(
        new x(0.03, 0.12),
        V(`#ffffff`, {
          roughness: 0.9,
          map: G(80, 320, (e, n, r) => {
            ((e.fillStyle = `#b8352c`),
              e.fillRect(0, 0, n, r),
              (e.fillStyle = `#f6e8cf`),
              (e.font = `700 22px ${z}`),
              (e.textAlign = `center`),
              e.fillText(I(`药引`, `guide`), n / 2, 30),
              ie(e, t.slice(0, 10), { x: n / 2, y: 46, size: 24, lh: 26, height: r - 56, color: `#f6e8cf` }));
          }),
        }),
      );
      return (
        (n.rotation.x = -Math.PI / 2),
        (n.rotation.z = 0.12),
        n.position.set(0.03, 0.0087, 0.12),
        (n.renderOrder = re),
        e.add(n),
        new Promise((e) => P.to(n.position, { z: 0.01, duration: 0.9, ease: `power2.out`, onComplete: e }))
      );
    },
  };
}
function De({ W: e = 0.2, H: t = 0.27 } = {}) {
  let n = new D(),
    r = document.createElement(`canvas`);
  ((r.width = 384), (r.height = 520));
  let i = r.getContext(`2d`),
    a = new o(r);
  ((a.colorSpace = u), (a.anisotropy = 8));
  let s = Array.from({ length: 700 }, () => [Math.random() * r.width, Math.random() * r.height, Math.random() * 0.06]),
    c = () => {
      ((i.fillStyle = `#f1e5c8`), i.fillRect(0, 0, r.width, r.height));
      for (let [e, t, n] of s) ((i.fillStyle = `rgba(120, 88, 50, ${n})`), i.fillRect(e, t, 2, 1.5));
      ((i.strokeStyle = `rgba(170, 60, 44, 0.35)`),
        (i.lineWidth = 1.2),
        i.strokeRect(14, 16, r.width - 28, r.height - 32));
      for (let e = r.width - 14 - 44; e > 20; e -= 44)
        (i.beginPath(), i.moveTo(e, 16), i.lineTo(e, r.height - 16), i.stroke());
    };
  c();
  let l = new h(new x(e, t), V(`#ffffff`, { map: a, roughness: 0.95 }));
  ((l.rotation.x = -Math.PI / 2), (l.position.y = 0.002));
  let d = new D();
  ((d.rotation.y = Math.PI / 2), d.add(l), n.add(se(t * 1.12, e * 1.18, 0.3), d), W(n));
  let f = (e) => {
      let t = [];
      return (
        e.forEach((e, n) => {
          let i = r.width - 14 - 22 - n * 44,
            a = 34;
          for (let [n, o = `#2b2420`, s = B, c = 29] of e) {
            for (let e of n) {
              if (e === ` `) {
                a += 14.85;
                continue;
              }
              if (a > r.height - 30) break;
              (t.push({ ch: e, x: i, y: a, color: o, font: s, size: c }), (a += c === 29 ? 33 : c * 1.12));
            }
            a += 9.9;
          }
        }),
        t
      );
    },
    p = (e) => {
      ((i.fillStyle = e.color),
        (i.font = `${e.size}px ${e.font}`),
        (i.textAlign = `center`),
        (i.textBaseline = `middle`),
        i.fillText(e.ch, e.x, e.y + e.size / 2));
    },
    m = 0;
  return {
    group: n,
    write(e, { ms: t = 6e3, onChar: n = () => {} } = {}) {
      let r = ++m;
      (c(), (a.needsUpdate = !0));
      let i = f(e),
        o = Math.max(60, t / Math.max(1, i.length));
      return new Promise((e) => {
        let t = 0,
          s = () => {
            if (r !== m) {
              e(!1);
              return;
            }
            if (t >= i.length) {
              e(!0);
              return;
            }
            (p(i[t]), (t += 1), (a.needsUpdate = !0), n(t), setTimeout(s, o * (i[t]?.x === i[t - 1]?.x ? 1 : 2.2)));
          };
        s();
      });
    },
    seal() {
      let e = r.height - 40 - 54;
      (i.save(),
        i.translate(57, e + 27),
        i.rotate(-0.04),
        (i.fillStyle = `rgba(184, 53, 44, 0.92)`),
        i.fillRect(-27, -27, 54, 54),
        (i.fillStyle = `#f1e5c8`),
        (i.font = `24px ${B}`),
        (i.textAlign = `center`),
        (i.textBaseline = `middle`),
        i.fillText(`濒`, 54 / 4 - 1, -12.5),
        i.fillText(`湖`, 54 / 4 - 1, 54 / 4),
        i.fillText(`东`, -12.5, -12.5),
        i.fillText(`璧`, -12.5, 54 / 4),
        i.restore(),
        (a.needsUpdate = !0));
    },
    clear() {
      ((m += 1), c(), (a.needsUpdate = !0));
    },
  };
}
var Oe = (e) => (Number.isFinite(e) ? (e < 60 ? `chi` : e < 70 ? `huan` : e < 90 ? `ping` : `shu`) : `breath`);
function ke(e, t, n) {
  let r = 0,
    i = 0,
    a = 0,
    o = 0;
  for (let s = Math.floor(n * 0.2); s < Math.ceil(n * 0.8); s += 1)
    for (let n = Math.floor(t * 0.2); n < Math.ceil(t * 0.8); n += 1) {
      let c = (s * t + n) * 4;
      ((r += e[c]), (i += e[c + 1]), (a += e[c + 2]), (o += 1));
    }
  return o ? { r: r / o, g: i / o, b: a / o } : { r: 0, g: 0, b: 0 };
}
var Ae = ({ r: e, g: t, b: n }) => e > 35 && e > t * 1.15 && e > n * 1.6,
  je = (e, t) => {
    let n = e.length,
      r = new Float32Array(n),
      i = Math.floor(t / 2),
      a = new Float64Array(n + 1);
    for (let t = 0; t < n; t += 1) a[t + 1] = a[t] + e[t];
    for (let e = 0; e < n; e += 1) {
      let t = Math.max(0, e - i),
        o = Math.min(n, e + i + 1);
      r[e] = (a[o] - a[t]) / (o - t);
    }
    return r;
  },
  Me = (e) => {
    let t = 1 / 0,
      n = -1 / 0;
    for (let r of e) ((t = Math.min(t, r)), (n = Math.max(n, r)));
    let r = (t + n) / 2,
      i = (n - t) / 2 || 1;
    return e.map((e) => (e - r) / i);
  };
function Ne(e, { hz: t = 30, seconds: n = 10 } = {}) {
  if (e.length < 2) return null;
  let r = e[e.length - 1].t,
    i = Math.max(e[0].t, r - n * 1e3),
    a = Math.floor(((r - i) / 1e3) * t);
  if (a < t * 3) return null;
  let o = new Float32Array(a),
    s = 0;
  for (let n = 0; n < a; n += 1) {
    let r = i + (n * 1e3) / t;
    for (; s + 1 < e.length - 1 && e[s + 1].t < r;) s += 1;
    let a = e[s],
      c = e[s + 1],
      l = c.t > a.t ? Math.min(1, Math.max(0, (r - a.t) / (c.t - a.t))) : 0;
    o[n] = a.v + (c.v - a.v) * l;
  }
  let c = je(o, t);
  for (let e = 0; e < a; e += 1) o[e] -= c[e];
  let l = je(o, Math.max(1, Math.round(t * 0.12))),
    u = 0;
  for (let e of l) u += e;
  u /= a;
  let d = 0;
  for (let e of l) d += (e - u) ** 2;
  if (((d = Math.sqrt(d / a)), !(d > 1e-6))) return new Float32Array(a);
  for (let e = 0; e < a; e += 1) l[e] = -(l[e] - u) / d;
  return l;
}
function Pe(e, { hz: t = 30, seconds: n = 10 } = {}) {
  let r = Ne(e, { hz: t, seconds: n });
  if (!r) return { bpm: NaN, quality: 0 };
  let i = r.length,
    a = Math.floor((t * 60) / 180),
    o = Math.min(Math.ceil((t * 60) / 40), i - Math.floor(t * 2));
  if (o <= a + 2) return { bpm: NaN, quality: 0 };
  let s = new Float32Array(o + 2);
  for (let e = a - 1; e <= o + 1; e += 1) {
    let t = 0,
      n = 0,
      a = 0;
    for (let o = 0; o + e < i; o += 1) ((t += r[o] * r[o + e]), (n += r[o] * r[o]), (a += r[o + e] * r[o + e]));
    s[e] = n && a ? t / Math.sqrt(n * a) : 0;
  }
  let c = -1;
  for (let e = a; e <= o; e += 1) s[e] >= s[e - 1] && s[e] >= s[e + 1] && (c < 0 || s[e] > s[c]) && (c = e);
  if (c < 0) return { bpm: NaN, quality: 0 };
  let l = Math.round(c / 2);
  for (let e = Math.max(a, l - 2); e <= Math.min(o, l + 2); e += 1)
    if (s[e] >= s[e - 1] && s[e] >= s[e + 1] && s[e] > 0.8 * s[c]) {
      c = e;
      break;
    }
  let u = s[c - 1],
    d = s[c],
    f = s[c + 1],
    p = u - 2 * d + f,
    m = c + (p < 0 ? (0.5 * (u - f)) / p : 0);
  return { bpm: (60 * t) / m, quality: Math.max(0, Math.min(1, d)) };
}
function Fe({ hz: e = 30, onBeat: t = () => {} } = {}) {
  let n = [],
    r = [],
    i = null,
    a = 0,
    o = 0,
    s = 0,
    c = !1,
    l = -1e9;
  return {
    push(u, d) {
      for (n.push({ t: u, v: d }); n.length && n[0].t < u - 15e3;) n.shift();
      ((i = i == null ? d : i + (d - i) * 0.06),
        (a += (-(d - i) - a) * 0.5),
        (o += (Math.abs(a) - o) * 0.03),
        r.push(o > 1e-6 ? a / (o * 2.2) : 0),
        r.length > e * 6 && r.shift(),
        a < 0 && (c = !0),
        c && a > o * 0.6 && s <= o * 0.6 && u - l > 330 && ((c = !1), (l = u), t(u)),
        (s = a));
    },
    read: (t = 8) => Pe(n, { hz: e, seconds: t }),
    wave: () => r,
    get seconds() {
      return n.length > 1 ? (n[n.length - 1].t - n[0].t) / 1e3 : 0;
    },
    reset() {
      ((n.length = 0), (r.length = 0), (i = null), (a = 0), (o = 0), (s = 0), (c = !1));
    },
  };
}
var Ie = (e) => {
  let t = [...e].sort((e, t) => e - t),
    n = t.length >> 1;
  return t.length % 2 ? t[n] : (t[n - 1] + t[n]) / 2;
};
function Le(e, { least: t = 5 } = {}) {
  let n = [];
  for (let t of e.slice(-18)) (!n.length || t - n[n.length - 1] >= 250) && n.push(t);
  let r = [];
  for (let e = 1; e < n.length; e += 1) n[e] - n[e - 1] <= 2e3 && r.push(n[e] - n[e - 1]);
  if (r.length < t - 1) return null;
  let i = Ie(r),
    a = [];
  for (let e of r) e > i * 0.7 && e < i * 1.4 ? a.push(e) : e > i * 1.7 && e < i * 2.3 && a.push(e / 2, e / 2);
  if (a.length < t - 1) return null;
  let o = a.reduce((e, t) => e + t, 0) / a.length,
    s = Math.sqrt(a.reduce((e, t) => e + (t - o) ** 2, 0) / a.length);
  return { bpm: Math.round(6e4 / o), steady: Math.max(0, 1 - s / o), count: a.length };
}
function Re(e, t = 160) {
  let n = e?.length || 0,
    r = new Float32Array(t);
  if (n < 2) return r;
  for (let i = 0; i < t; i += 1) {
    let a = (i * (n - 1)) / (t - 1),
      o = Math.floor(a),
      s = Math.min(n - 1, o + 1);
    r[i] = e[o] + (e[s] - e[o]) * (a - o);
  }
  return Me(r);
}
function ze(e, t = 160) {
  if (e.length < 2) return new Float32Array(t);
  let n = e[0] - 150,
    r = e[e.length - 1] + 600,
    i = new Float32Array(t);
  for (let a = 0; a < t; a += 1) {
    let o = n + ((r - n) * a) / (t - 1),
      s = 0;
    for (let t of e) {
      let e = (o - t) / 1e3;
      e > -0.15 &&
        e < 1.2 &&
        (s += Math.exp(-(((e - 0.08) / 0.05) ** 2)) + 0.38 * Math.exp(-(((e - 0.34) / 0.08) ** 2)));
    }
    i[a] = s;
  }
  return Me(i);
}
var K = 9,
  Be = 9,
  Ve = (e) =>
    e < -0.15 || e > 1.2 ? 0 : Math.exp(-(((e - 0.08) / 0.05) ** 2)) + 0.38 * Math.exp(-(((e - 0.34) / 0.08) ** 2)),
  He = () => !!navigator.mediaDevices?.getUserMedia && matchMedia(`(pointer: coarse)`).matches;
async function Ue() {
  let e = await navigator.mediaDevices.getUserMedia({
      audio: !1,
      video: {
        facingMode: { ideal: `environment` },
        width: { ideal: 320 },
        height: { ideal: 240 },
        frameRate: { ideal: 30 },
      },
    }),
    t = e.getVideoTracks()[0],
    n = !1;
  try {
    t.getCapabilities?.().torch && (await t.applyConstraints({ advanced: [{ torch: !0 }] }), (n = !0));
  } catch {}
  return {
    stream: e,
    torch: n,
    stop() {
      (n && t.applyConstraints({ advanced: [{ torch: !1 }] }).catch(() => {}), e.getTracks().forEach((e) => e.stop()));
    },
  };
}
function We(e, { onBeat: t = () => {}, onBreath: n = () => {}, say: r = () => {} } = {}) {
  let i = document.createElement(`div`);
  ((i.className = `lzp`),
    (i.innerHTML = `
    <canvas class="lzp-wave"></canvas>
    <div class="lzp-row">
      <button class="lzp-pad" type="button"><video muted playsinline></video><span class="lzp-label"></span></button>
      <div class="lzp-side">
        <p class="lzp-hint"></p>
        <div class="lzp-dots">${`<i></i>`.repeat(K)}</div>
        <div class="lzp-btns"><button class="lzp-alt" type="button"></button><button class="lzp-skip" type="button">${I(`先不号了`, `Not now`)}</button></div>
      </div>
    </div>
    <p class="lzp-fine"></p>
    <div class="lzp-stamp"></div>`),
    e.appendChild(i));
  let a = (e) => i.querySelector(e),
    o = a(`.lzp-wave`),
    s = o.getContext(`2d`),
    c = a(`video`),
    l = a(`.lzp-pad`),
    u = [...i.querySelectorAll(`.lzp-dots i`)],
    d = document.createElement(`canvas`);
  ((d.width = 40), (d.height = 30));
  let f = d.getContext(`2d`, { willReadFrequently: !0 }),
    p = `tap`,
    m = 0,
    h = null,
    g = null,
    _ = 0,
    v = 0,
    y = [],
    b = { r: null, g: null },
    x = `r`,
    S = 0,
    C = 0,
    w = NaN,
    T = 0,
    E = !1,
    D = (e) => {
      a(`.lzp-hint`).textContent = e;
    },
    O = (e) => {
      a(`.lzp-fine`).textContent = e
        ? I(
            `陪你玩的，不是看病。摄像头的画面只在你手机上，不上传。`,
            `For play, not a diagnosis. The camera's picture stays on your phone.`,
          )
        : I(`陪你玩的，不是看病。`, `For play, not a diagnosis.`);
    },
    k = (e) => u.forEach((t, n) => t.classList.toggle(`on`, n < e)),
    A = () => {
      (l.classList.remove(`beat`), l.offsetWidth, l.classList.add(`beat`));
    };
  function j(e) {
    if (!g) return;
    let t = g;
    ((g = null), L());
    let n = Number.isFinite(e.bpm) ? Math.round(e.bpm) : null,
      r = {
        kind: n ? Oe(n) : `breath`,
        bpm: n,
        switched: _,
        seconds: Math.round((performance.now() - v) / 1e3),
        ...e,
        bpm: n,
      };
    (n && ((a(`.lzp-stamp`).textContent = I(`每分钟 ${n} 至`, `${n} a minute`)), i.classList.add(`stamped`)),
      setTimeout(() => t(r), n ? 1300 : 200));
  }
  function M(e) {
    (L(),
      p === `camera` && (_ += 1),
      (p = `tap`),
      (y = []),
      k(0),
      (E = !1),
      (v ||= performance.now()),
      (i.dataset.mode = `tap`),
      O(!1),
      (a(`.lzp-label`).textContent = I(`跟着脉点`, `Tap with it`)),
      D(
        I(
          `两根手指按在手腕内侧。感觉到跳，就跟着点。`,
          `Two fingers on the inside of your wrist. When you feel it beat, tap along.`,
        ),
      ),
      (a(`.lzp-alt`).textContent = I(`用摄像头号`, `Use the camera`)),
      (a(`.lzp-alt`).hidden = !He()),
      (N = performance.now()),
      e && r([e]));
  }
  let N = 0;
  function P() {
    if (!g || p !== `tap`) return;
    let e = performance.now();
    (y.push(e), t(e), A(), k(Math.min(K, y.length)));
    let n = Le(y);
    n && ((y.length >= K && n.steady > 0.7) || y.length >= 14)
      ? j({
          source: `tap`,
          bpm: n.bpm,
          steady: Math.round(n.steady * 100) / 100,
          taps: y.length,
          trace: Array.from(ze(y.slice(-8), 160), (e) => Math.round(e * 100) / 100),
        })
      : y.length >= 19 && j({ source: `breath`, bpm: NaN, taps: y.length, trace: [] });
  }
  l.addEventListener(`pointerdown`, (e) => {
    (e.preventDefault(), P());
  });
  let F = (e) => {
    (e.code === `Space` || e.code === `Enter`) && g && p === `tap` && (e.preventDefault(), P());
  };
  async function ee() {
    (p === `tap` && (_ += +!!y.length),
      (p = `camera`),
      (i.dataset.mode = `camera`),
      (v ||= performance.now()),
      k(0),
      O(!0),
      (a(`.lzp-label`).textContent = ``),
      (a(`.lzp-alt`).textContent = I(`按手腕点`, `Tap my wrist`)),
      (a(`.lzp-alt`).hidden = !1),
      D(I(`食指轻轻盖住摄像头和灯，别用力。`, `Rest a fingertip lightly over the camera and its light. Don't press.`)));
    try {
      h = await Ue();
    } catch {
      p === `camera` &&
        M(
          I(`看不见也不要紧。按着手腕，点给我听。`, `No matter if I can't see. Feel your wrist and tap it out for me.`),
        );
      return;
    }
    if (p !== `camera` || !g) {
      L();
      return;
    }
    ((c.srcObject = h.stream),
      c.play().catch(() => {}),
      (b.r = Fe({
        onBeat: (e) => {
          x === `r` && S && (t(e), A());
        },
      })),
      (b.g = Fe({
        onBeat: (e) => {
          x === `g` && S && (t(e), A());
        },
      })),
      (S = 0),
      (C = 0),
      (w = NaN),
      (te = performance.now()),
      h.torch ||
        D(
          I(
            `这台手机的灯点不亮。手指盖住镜头，对着亮处。`,
            `This phone won't light its lamp for me. Cover the lens and face a bright light.`,
          ),
        ));
  }
  let te = 0;
  function L() {
    ((h &&= (h.stop(), null)), (c.srcObject = null));
  }
  let R = -1;
  function ne(e) {
    if (!h) return;
    c.readyState >= 2 &&
      c.currentTime !== R &&
      ((R = c.currentTime),
      f.drawImage(c, 0, 0, d.width, d.height),
      re(e, ke(f.getImageData(0, 0, d.width, d.height).data, d.width, d.height)));
    let t = S ? (e - S) / 1e3 : 0;
    ((S && t > 24) || (!S && e - te > 22e3)) &&
      M(
        I(`这光透不过来。按着手腕，点给我听。`, `The light won't come through. Feel your wrist and tap it out for me.`),
      );
  }
  function re(e, t) {
    (b.r.push(e, t.r),
      b.g.push(e, t.g),
      Ae(t)
        ? S || ((S = e), D(I(`好，别动。`, `Good. Keep still.`)))
        : S &&
          e - S > 400 &&
          ((S = 0),
          b.r.reset(),
          b.g.reset(),
          D(
            I(
              `食指轻轻盖住摄像头和灯，别用力。`,
              `Rest a fingertip lightly over the camera and its light. Don't press.`,
            ),
          )));
    let n = S ? (e - S) / 1e3 : 0;
    if ((k(Math.min(K, Math.floor((n / Be) * K))), S && e - C > 1e3 && n > 5)) {
      C = e;
      let t = b.r.read(8),
        r = b.g.read(8),
        i = r.quality > t.quality ? r : t;
      x = r.quality > t.quality ? `g` : `r`;
      let a = Number.isFinite(w) && Math.abs(i.bpm - w) <= 5;
      ((w = i.bpm),
        n >= Be &&
          i.quality >= 0.6 &&
          i.bpm >= 45 &&
          i.bpm <= 150 &&
          a &&
          j({
            source: `camera`,
            bpm: i.bpm,
            quality: Math.round(i.quality * 100) / 100,
            torch: !!h?.torch,
            trace: Array.from(Re(b[x].wave().slice(-150), 160), (e) => Math.round(e * 100) / 100),
          }));
    }
  }
  function z() {
    (L(),
      (p = `breath`),
      (i.dataset.mode = `breath`),
      (T = performance.now()),
      (a(`.lzp-alt`).hidden = !0),
      (a(`.lzp-skip`).hidden = !0),
      O(!1),
      k(0),
      D(I(`那就跟老夫一起，慢慢喘三口气。`, `Then breathe with me — three slow breaths.`)));
  }
  let B = 5200;
  function V(e) {
    let t = (e - T) / B,
      r = t - Math.floor(t),
      i = 0.5 - 0.5 * Math.cos(r * Math.PI * 2);
    (n(i),
      l.style.setProperty(`--breath`, i.toFixed(3)),
      (a(`.lzp-label`).textContent = r < 0.5 ? I(`吸`, `In`) : I(`呼`, `Out`)),
      k(Math.min(K, Math.floor((t / 3) * K))),
      t >= 3 && j({ source: `breath`, bpm: NaN, trace: [] }));
  }
  function H(e) {
    let t = Math.min(2, window.devicePixelRatio || 1),
      n = o.clientWidth,
      r = o.clientHeight;
    ((o.width !== Math.round(n * t) || o.height !== Math.round(r * t)) &&
      ((o.width = Math.round(n * t)), (o.height = Math.round(r * t))),
      s.setTransform(t, 0, 0, t, 0, 0),
      s.clearRect(0, 0, n, r),
      (s.strokeStyle = `rgba(120, 80, 40, 0.16)`),
      (s.lineWidth = 1));
    for (let e = n; e > 0; e -= 24) (s.beginPath(), s.moveTo(e, 4), s.lineTo(e, r - 4), s.stroke());
    let i = new Float32Array(150);
    if (p === `tap`)
      for (let t = 0; t < 150; t += 1) {
        let n = e - 5e3 + (5e3 * t) / 149,
          r = 0;
        for (let e of y) r += Ve((n - e) / 1e3);
        i[t] = r * 0.8 - 0.3;
      }
    else if (p === `camera`) {
      let e = b[x]?.wave() || [];
      for (let t = 0; t < 150; t += 1) i[t] = S ? (e[e.length - 150 + t] ?? 0) : 0;
    } else {
      let t = (e - T) / B;
      for (let e = 0; e < 150; e += 1) i[e] = -0.6 * Math.cos((t - (149 - e) / 150) * Math.PI * 2);
    }
    ((s.strokeStyle = `#b8352c`), (s.lineWidth = 2), (s.lineJoin = `round`), s.beginPath());
    for (let e = 0; e < 150; e += 1) {
      let t = (n * e) / 149,
        a = r / 2 - Math.max(-1.2, Math.min(1.2, i[e])) * (r * 0.38);
      e ? s.lineTo(t, a) : s.moveTo(t, a);
    }
    s.stroke();
    let a = r / 2 - Math.max(-1.2, Math.min(1.2, i[149])) * (r * 0.38);
    ((s.fillStyle = `#b8352c`), s.beginPath(), s.arc(n - 3, a, 3, 0, Math.PI * 2), s.fill());
  }
  function U(e) {
    if (((m = requestAnimationFrame(U)), p === `camera`)) ne(e);
    else if (p === `breath`) V(e);
    else if (g && !y.length && e - N > 16e3 && !E)
      ((E = !0),
        r([
          I(
            `找不到也不要紧。大拇指那一侧，手腕内侧，轻一点按。`,
            `No matter if you can't find it. The thumb side of the inside of your wrist — press lightly.`,
          ),
        ]));
    else if (g && y.length < 3 && e - N > 34e3) z();
    else if (g && p === `tap` && y.length >= 3 && e - y[y.length - 1] > 7e3) {
      let e = Le(y, { least: 3 });
      e
        ? j({
            source: `tap`,
            bpm: e.bpm,
            steady: Math.round(e.steady * 100) / 100,
            taps: y.length,
            trace: Array.from(ze(y.slice(-8), 160), (e) => Math.round(e * 100) / 100),
          })
        : z();
    }
    H(e);
  }
  return (
    a(`.lzp-alt`).addEventListener(`click`, () => {
      g && (p === `tap` ? ee() : M());
    }),
    a(`.lzp-skip`).addEventListener(`click`, () => {
      g && p !== `breath` && z();
    }),
    {
      read({ prefer: e = `tap` } = {}) {
        return new Promise((t) => {
          ((g = t),
            (_ = 0),
            (v = 0),
            i.classList.remove(`stamped`),
            (a(`.lzp-skip`).hidden = !1),
            l.style.removeProperty(`--breath`),
            e === `camera` && He() ? ee() : M(),
            i.classList.add(`show`),
            window.addEventListener(`keydown`, F, !0),
            cancelAnimationFrame(m),
            (m = requestAnimationFrame(U)));
        });
      },
      hide() {
        (i.classList.remove(`show`),
          window.removeEventListener(`keydown`, F, !0),
          L(),
          setTimeout(() => cancelAnimationFrame(m), 600));
      },
      dispose() {
        (this.hide(), setTimeout(() => i.remove(), 700));
      },
    }
  );
}
var Ge = {
    tap: `<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0-1.2a1.5 1.5 0 0 1 3 0V11m0-.8a1.5 1.5 0 0 1 3 0v4.3a6 6 0 0 1-6 6h-.7a6 6 0 0 1-4.5-2.1L4.4 15a1.6 1.6 0 0 1 2.4-2.1L9 15.2"/>`,
    push: `<path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/>`,
    pull: `<path d="M12 4v15M7 14l5 5 5-5"/>`,
    drag: `<path d="M4 12h15M14 7l5 5-5 5"/>`,
  },
  Ke = (e) => `<svg viewBox="0 0 24 24" aria-hidden="true">${Ge[e] || Ge.tap}</svg>`;
function qe(e, t) {
  let n = document.createElement(`div`);
  n.className = `lzh-pad`;
  let r = document.createElement(`div`);
  ((r.className = `lzh-cue`),
    (r.innerHTML = `<span class="lzh-ring"></span><span class="lzh-dot"></span><span class="lzh-chip"><i></i><b></b></span>`));
  let i = document.createElement(`div`);
  ((i.className = `lzh-note`), (i.innerHTML = `<b></b><span></span>`), e.prepend(n), e.append(r, i));
  let a = null,
    o = 0,
    s = null,
    c = null,
    l = 0,
    u = new k(),
    d = () => {
      if (((o = requestAnimationFrame(d)), !a)) return;
      let e = typeof a == `function` ? a() : a;
      if (!e) return;
      u.copy(e).project(t);
      let n = u.z > 1,
        i = j.clamp((u.x * 0.5 + 0.5) * innerWidth, 40, innerWidth - 40),
        s = j.clamp((-u.y * 0.5 + 0.5) * innerHeight, 70, innerHeight - 40);
      ((r.style.transform = `translate(${i.toFixed(1)}px, ${s.toFixed(1)}px)`), r.classList.toggle(`off`, n));
    },
    f = (e) => {
      s &&
        s.id == null &&
        (e.preventDefault(),
        (s.id = e.pointerId),
        (s.x0 = s.x = e.clientX),
        (s.y0 = s.y = e.clientY),
        (s.t0 = performance.now()),
        (s.moved = !1),
        n.setPointerCapture?.(e.pointerId),
        n.classList.add(`dragging`),
        s.on.down?.(e.clientX, e.clientY));
    },
    p = (e) => {
      if (!s || s.id !== e.pointerId) return;
      let t = e.clientX - s.x,
        n = e.clientY - s.y;
      ((s.x = e.clientX),
        (s.y = e.clientY),
        Math.hypot(s.x - s.x0, s.y - s.y0) > 9 && (s.moved = !0),
        s.on.move?.(t, n, e.clientX, e.clientY));
    },
    m = (e) => {
      if (!s || s.id !== e.pointerId) return;
      let t = s;
      ((t.id = null),
        n.classList.remove(`dragging`),
        !t.moved && performance.now() - t.t0 < 600 && t.on.tap?.(e.clientX, e.clientY),
        t.on.up?.(t.moved, e.clientX - t.x0, e.clientY - t.y0));
    };
  (n.addEventListener(`pointerdown`, f),
    n.addEventListener(`pointermove`, p),
    n.addEventListener(`pointerup`, m),
    n.addEventListener(`pointercancel`, m));
  let h = (e) => {
    c && c(e.code) !== !1 && e.preventDefault();
  };
  return (
    window.addEventListener(`keydown`, h, !0),
    {
      cue(e, t, n = `tap`, { delay: i = 700 } = {}) {
        ((a = t),
          (r.dataset.kind = n),
          (r.querySelector(`i`).innerHTML = Ke(n)),
          (r.querySelector(`b`).textContent = e),
          cancelAnimationFrame(o),
          d(),
          clearTimeout(l),
          (l = setTimeout(() => r.classList.add(`show`), i)));
      },
      hideCue() {
        (clearTimeout(l),
          r.classList.remove(`show`),
          setTimeout(() => {
            r.classList.contains(`show`) || ((a = null), cancelAnimationFrame(o));
          }, 400));
      },
      note(e, t) {
        ((i.querySelector(`b`).textContent = e || ``),
          (i.querySelector(`span`).textContent = t || ``),
          i.classList.toggle(`show`, !!(e || t)));
      },
      hideNote() {
        i.classList.remove(`show`);
      },
      take(e = {}, t = null) {
        ((s = { on: e, id: null }), (c = t), n.classList.add(`on`));
      },
      release() {
        ((s = null), (c = null), n.classList.remove(`on`, `dragging`));
      },
      dispose() {
        (this.release(),
          cancelAnimationFrame(o),
          window.removeEventListener(`keydown`, h, !0),
          r.classList.remove(`show`),
          i.classList.remove(`show`),
          setTimeout(() => {
            (n.remove(), r.remove(), i.remove());
          }, 500));
      },
    }
  );
}
function Je(e, t) {
  let n = t.clone().project(e);
  return { x: (n.x * 0.5 + 0.5) * innerWidth, y: (-n.y * 0.5 + 0.5) * innerHeight };
}
var Ye = null,
  Xe = (e) => {
    if (Ye?.sampleRate === e.sampleRate) return Ye;
    Ye = e.createBuffer(1, e.sampleRate * 2, e.sampleRate);
    let t = Ye.getChannelData(0);
    for (let e = 0; e < t.length; e += 1) t[e] = Math.random() * 2 - 1;
    return Ye;
  };
function q(
  e,
  {
    type: t = `bandpass`,
    freq: n = 1200,
    q: r = 1,
    peak: i = 0.2,
    attack: a = 0.005,
    decay: o = 0.15,
    at: s = e.currentTime,
    sweep: c = null,
  },
) {
  let l = e.createBufferSource();
  l.buffer = Xe(e);
  let u = e.createBiquadFilter();
  ((u.type = t),
    u.frequency.setValueAtTime(n, s),
    (u.Q.value = r),
    c && u.frequency.exponentialRampToValueAtTime(c, s + a + o));
  let d = e.createGain();
  (d.gain.setValueAtTime(1e-4, s),
    d.gain.exponentialRampToValueAtTime(i, s + a),
    d.gain.exponentialRampToValueAtTime(1e-4, s + a + o),
    l.connect(u).connect(d).connect(e.destination),
    l.start(s, Math.random() * 1.5),
    l.stop(s + a + o + 0.05));
}
function J(e, { freq: t, type: n = `sine`, peak: r = 0.12, decay: i = 0.6, at: a = e.currentTime, bend: o = 1 }) {
  let s = e.createOscillator();
  ((s.type = n), s.frequency.setValueAtTime(t, a), o !== 1 && s.frequency.exponentialRampToValueAtTime(t * o, a + i));
  let c = e.createGain();
  (c.gain.setValueAtTime(1e-4, a),
    c.gain.exponentialRampToValueAtTime(r, a + 0.006),
    c.gain.exponentialRampToValueAtTime(1e-4, a + i),
    s.connect(c).connect(e.destination),
    s.start(a),
    s.stop(a + i + 0.05));
}
var Y = {
    rumble() {
      let e = R();
      if (!e) return { set() {}, stop() {} };
      let t = e.createBufferSource();
      ((t.buffer = Xe(e)), (t.loop = !0));
      let n = e.createBiquadFilter();
      ((n.type = `lowpass`), (n.frequency.value = 300), (n.Q.value = 0.8));
      let r = e.createBiquadFilter();
      ((r.type = `bandpass`), (r.frequency.value = 2600), (r.Q.value = 1.4));
      let i = e.createGain(),
        a = e.createGain();
      ((i.gain.value = 0),
        (a.gain.value = 0),
        t.connect(n).connect(i).connect(e.destination),
        t.connect(r).connect(a).connect(e.destination),
        t.start());
      let o = !0;
      return {
        set(t) {
          if (!o) return;
          let r = e.currentTime,
            s = Math.min(1, Math.max(0, t));
          (i.gain.setTargetAtTime(s * 0.55, r, 0.04),
            a.gain.setTargetAtTime(s * 0.05, r, 0.04),
            n.frequency.setTargetAtTime(220 + s * 420, r, 0.06));
        },
        stop() {
          if (!o) return;
          o = !1;
          let n = e.currentTime;
          (i.gain.setTargetAtTime(0, n, 0.06), a.gain.setTargetAtTime(0, n, 0.06), setTimeout(() => t.stop(), 500));
        },
      };
    },
    slide(e = !0) {
      let t = R();
      t &&
        (q(t, {
          type: `bandpass`,
          freq: e ? 700 : 900,
          q: 0.9,
          peak: 0.16,
          attack: 0.04,
          decay: e ? 0.42 : 0.3,
          sweep: e ? 420 : 1100,
        }),
        J(t, {
          freq: 150,
          type: `triangle`,
          peak: 0.16,
          decay: 0.12,
          at: t.currentTime + (e ? 0.44 : 0.32),
          bend: 0.6,
        }));
    },
    tick() {
      let e = R();
      e && J(e, { freq: 3400, type: `triangle`, peak: 0.035, decay: 0.05 });
    },
    bell() {
      let e = R();
      e && (J(e, { freq: 1568, peak: 0.1, decay: 1.6 }), J(e, { freq: 3923, peak: 0.03, decay: 0.9 }));
    },
    pour() {
      let e = R();
      if (e)
        for (let t = 0; t < 9; t += 1)
          q(e, {
            type: `highpass`,
            freq: 2500 + Math.random() * 2500,
            q: 0.7,
            peak: 0.05 + Math.random() * 0.05,
            attack: 0.003,
            decay: 0.05,
            at: e.currentTime + t * 0.035 + Math.random() * 0.02,
          });
    },
    fold() {
      let e = R();
      e &&
        (q(e, { type: `bandpass`, freq: 1800, q: 0.6, peak: 0.12, attack: 0.05, decay: 0.22, sweep: 900 }),
        q(e, { type: `lowpass`, freq: 600, q: 0.5, peak: 0.14, attack: 0.004, decay: 0.07, at: e.currentTime + 0.26 }));
    },
    tie() {
      let e = R();
      e &&
        (J(e, { freq: 196, type: `triangle`, peak: 0.08, decay: 0.3, bend: 1.3 }),
        q(e, { type: `bandpass`, freq: 1200, q: 2, peak: 0.05, attack: 0.02, decay: 0.15 }));
    },
    page() {
      let e = R();
      e && q(e, { type: `bandpass`, freq: 2400, q: 0.5, peak: 0.1, attack: 0.08, decay: 0.32, sweep: 1300 });
    },
    brush() {
      let e = R();
      e && q(e, { type: `bandpass`, freq: 3e3 + Math.random() * 800, q: 0.9, peak: 0.025, attack: 0.03, decay: 0.12 });
    },
    stamp() {
      let e = R();
      e &&
        (J(e, { freq: 90, type: `sine`, peak: 0.35, decay: 0.25, bend: 0.6 }),
        q(e, { type: `lowpass`, freq: 500, q: 0.6, peak: 0.12, attack: 0.003, decay: 0.08 }));
    },
    thump() {
      let e = R();
      e &&
        (J(e, { freq: 64, peak: 0.32, decay: 0.2, bend: 0.55 }),
        J(e, { freq: 54, peak: 0.2, decay: 0.18, bend: 0.55, at: e.currentTime + 0.15 }));
    },
  },
  Ze =
    typeof FontFace > `u` || !document.fonts
      ? Promise.resolve(!1)
      : new FontFace(`LzBrush`, `url(${te(`worlds/lishizhen/brush.woff2`)}) format("woff2")`, { display: `swap` })
          .load()
          .then((e) => (document.fonts.add(e), !0))
          .catch(() => !1),
  Qe = [`chi`, `huan`, `ping`, `shu`, `breath`],
  $e = [``, `一`, `二`, `三`, `四`, `五`],
  et = (e, t = `zh`) => (t === `en` ? `${e} qian` : `${$e[Math.floor(e)] || `一`}钱${e % 1 ? `五分` : ``}`),
  tt = [
    {
      name: `合欢花`,
      en: `Albizia flower`,
      qian: 3,
      does: [
        `安五脏，和心志，令人欢乐无忧（《神农本草经》）`,
        `calms the five organs, harmonises the heart's will, makes one joyful and free of worry`,
      ],
    },
    {
      name: `陈皮`,
      en: `Aged tangerine peel`,
      qian: 2,
      does: [`理气健脾，以陈久者良`, `moves stuck qi and strengthens the spleen; the older the better`],
    },
  ],
  nt = {
    chi: {
      name: `黄芪`,
      en: `Astragalus root`,
      does: [`李时珍：色黄，为补药之长`, `yellow, and the chief of the tonics`],
    },
    huan: {
      name: `大枣`,
      en: `Jujube`,
      does: [
        `安中养脾，补少气，和百药（《神农本草经》）`,
        `settles the middle, nourishes the spleen, harmonises a hundred herbs`,
      ],
    },
    ping: {
      name: `甘草`,
      en: `Liquorice root`,
      does: [`调和众药有功，故有「国老」之号`, `it harmonises all other herbs — hence 'the Elder Statesman'`],
    },
    shu: { name: `莲子心`, en: `Lotus plumule`, does: [`清心去热（李时珍）`, `clears the heart and takes away heat`] },
    breath: {
      name: `茯苓`,
      en: `Poria`,
      does: [`久服安魂养神（《神农本草经》）`, `long taken, it settles the soul and nourishes the spirit`],
    },
  };
function rt(e, t, n = `zh`) {
  let r = +(n === `en`),
    i = (e?.shot?.herbs || []).filter((e) => e?.name).slice(0, 2),
    a = (i.length === 2 && i[0].name !== i[1].name ? i : tt.map((e) => ({ ...e, does: e.does[r] }))).map((e, t) => ({
      role: t ? `臣` : `君`,
      name: e.name,
      en: e.en || e.name,
      qian: Math.min(5, Math.max(1, Math.round((Number(e.qian) || 2) * 2) / 2)),
      does: e.does || ``,
      why: e.why || ``,
    })),
    o = new Set(a.map((e) => e.name)),
    s = e?.zuo?.[t],
    c = s?.name && !o.has(s.name) ? s : [nt[t] || nt.breath, ...Object.values(nt)].find((e) => !o.has(e.name)),
    l = Array.isArray(c.does) ? c.does[r] : c.does || ``;
  return [
    ...a,
    {
      role: `佐`,
      name: c.name,
      en: c.en || c.name,
      qian: Math.min(5, Math.max(1, Number(c.qian) || 1.5)),
      does: l,
      why: ``,
    },
  ];
}
function it(e, t = 120) {
  let n = e?.length || 0;
  if (n < 2) return ``;
  let r = ``;
  for (let i = 0; i < t; i += 1) {
    let a = (i * (n - 1)) / (t - 1),
      o = Math.floor(a),
      s = Math.min(n - 1, o + 1),
      c = e[o] + (e[s] - e[o]) * (a - o);
    r += Math.round(Math.min(1, Math.max(0, (c + 1) / 2)) * 35).toString(36);
  }
  return r;
}
var at = (e) =>
    typeof e == `string` && /^[0-9a-z]{8,}$/.test(e) ? [...e].map((e) => (parseInt(e, 36) / 35) * 2 - 1) : [],
  ot = [`零`, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`];
function st(e) {
  let t = Math.floor(e / 100),
    n = Math.floor((e % 100) / 10),
    r = e % 10,
    i = t ? `${ot[t]}百` : ``;
  return (n ? (i += `${t || n > 1 ? ot[n] : ``}十`) : t && r && (i += `零`), r && (i += ot[r]), i || ot[0]);
}
var X = (e, t, n) => (e === `en` ? n : t),
  ct = (e) => new k(e[0], e[1], e[2]),
  lt = {
    chi: [`迟脉`, `slow`],
    huan: [`缓脉`, `unhurried`],
    ping: [`平脉`, `even`],
    shu: [`数脉`, `quick`],
    breath: [`没号到脉`, `no pulse taken`],
  },
  ut = { 君: [`君药`, `The chief herb`], 臣: [`臣药`, `The minister`], 佐: [`佐药`, `The assistant`] },
  dt = {
    chi: [`迟脉。慢，是在攒着力气。`, `A slow pulse. Slow is strength being saved.`],
    huan: [`缓脉，不疾不徐。底子在。`, `An unhurried pulse, neither quick nor slow. The root is there.`],
    ping: [`平脉，从容和缓。你撑得住。`, `An even pulse, easy and steady. You are holding up.`],
    shu: [
      `脉稍数。莫慌，走快了、茶喝多了，也是这样。`,
      `A little quick. No alarm — the stairs or the tea will do that.`,
    ],
    breath: [
      `没号到也不要紧。这三口气，老夫记下了。`,
      `No matter that I couldn't feel it. I have counted those three breaths.`,
    ],
  };
function ft(e) {
  let t = e?.finish?.uniforms;
  if (!t) return { beat() {}, breathe() {}, calm() {}, focus() {} };
  let n = t.uWarm.value,
    r = t.uVignette.value;
  return {
    focus(e) {
      P.to(t.uVignette, { value: e ? r + 0.24 : r, duration: 1, overwrite: !0 });
    },
    beat() {
      (P.fromTo(t.uWarm, { value: n + 0.09 }, { value: n, duration: 0.8, ease: `power2.out`, overwrite: !0 }),
        P.fromTo(
          t.uVignette,
          { value: Math.max(0, r - 0.12) },
          { value: r, duration: 0.8, ease: `power2.out`, overwrite: !0 },
        ));
    },
    breathe(e) {
      ((t.uWarm.value = n + 0.06 * e), (t.uVignette.value = Math.max(0, r - 0.1 * e)));
    },
    calm() {
      (P.to(t.uWarm, { value: n, duration: 0.9, overwrite: !0 }),
        P.to(t.uVignette, { value: r, duration: 0.9, overwrite: !0 }));
    },
  };
}
function Z(e, t, n, r, i, a = {}) {
  let o = ct(n),
    s = ue(t, o, ct(r), i),
    c = o.clone();
  if (t.aspect < 1) {
    let e = s.distanceTo(o),
      n = new k(0, 1, 0),
      r = o.clone().sub(s).normalize(),
      i = n.sub(r.clone().multiplyScalar(n.dot(r))).normalize();
    c.addScaledVector(i, -e * Math.tan(j.degToRad(t.fov) / 2) * 0.26);
  }
  return (e.frame(s, c, { fit: !1, ...a }), { at: s, look: c });
}
function pt(e, t, n, r, { duration: i = 0.7, lift: a = 0.14 } = {}) {
  let o = le(t, { r: 0.026, n: 24, seed: t.charCodeAt(0) + 11 });
  (o.position.copy(n), e.add(o));
  let s = { t: 0 };
  return new Promise((t) =>
    P.to(s, {
      t: 1,
      duration: i,
      ease: `power1.inOut`,
      onUpdate: () => {
        (o.position.lerpVectors(n, r, s.t), (o.position.y += Math.sin(Math.PI * s.t) * a), (o.rotation.y += 0.06));
      },
      onComplete: () => {
        (e.remove(o), o.geometry.dispose(), o.material.dispose(), t());
      },
    }),
  );
}
var mt = (e, t) =>
  new Promise((n) => {
    let r = performance.now(),
      i = () => {
        e() ? n(!0) : performance.now() - r > t ? n(!1) : setTimeout(i, 80);
      };
    i();
  });
async function ht(e) {
  let { cam: t, ui: n, say: r, lang: i, extras: a, lines: o } = e,
    s = a.camera,
    c = a.grinder;
  if (!s || !c) {
    await r(o);
    return;
  }
  let l = c.group.position;
  Z(t, s, [l.x, l.y + 0.07, l.z], [l.x - 0.7, l.y + 0.55, l.z + 0.3], { width: 0.74, height: 0.5 });
  let u = qe(n, s),
    d = Y.rumble(),
    f = (e) => c.group.localToWorld(new k(0, 0.088, e * 0.11)),
    p = null,
    m = 0,
    h = performance.now(),
    g = () => {
      c.group.updateWorldMatrix(!0, !1);
      let e = Je(s, f(-1)),
        t = Je(s, f(1));
      return { x: t.x - e.x, y: t.y - e.y };
    },
    _ = (e) => {
      let t = c.roll(c.u + e);
      c.grind(t * 0.9);
      let n = performance.now(),
        r = Math.max(0.016, (n - h) / 1e3);
      ((h = n), (m = Math.min(1, m * 0.6 + (t / r) * 0.25)), d.set(m));
    },
    v = setInterval(() => {
      ((m *= 0.7), d.set(m));
    }, 90);
  (u.cue(X(i, `来回推`, `Push it to and fro`), () => f(c.u), `push`),
    u.take(
      {
        down: () => {
          ((p = g()), (h = performance.now()));
        },
        move: (e, t) => {
          if (!p) return;
          let n = Math.max(p.x * p.x + p.y * p.y, 14400);
          _((2 * (e * p.x + t * p.y)) / n);
        },
        up: () => {
          p = null;
        },
      },
      (e) => (e === `ArrowLeft` || e === `ArrowRight` ? (_(e === `ArrowRight` ? 0.35 : -0.35), !0) : !1),
    ));
  try {
    for (let e of o) await r([e]);
  } finally {
    (clearInterval(v), d.stop(), u.dispose());
  }
}
async function gt(e) {
  let { cam: t, ui: n, say: r, lang: i, extras: a, lines: o } = e,
    s = a.camera,
    c = a.manuscript;
  if (!s || !c) {
    await r(o);
    return;
  }
  let l = c.group.position;
  Z(t, s, [l.x, l.y + 0.01, l.z], [l.x + 0.55, l.y + 0.62, l.z - 0.08], { width: 0.42, height: 0.34 });
  let u = qe(n, s),
    d = !1,
    f = async () => {
      d || c.spread >= o.length - 1 || ((d = !0), Y.page(), await c.turn(), (d = !1));
    };
  (u.cue(X(i, `翻一页`, `Turn the page`), () => c.group.localToWorld(new k(0, 0.02, 0.08)), `tap`),
    u.take(
      {
        tap: f,
        up: (e) => {
          e && f();
        },
      },
      (e) => (e === `Space` || e === `Enter` || e === `ArrowRight` || e === `ArrowLeft` ? (f(), !0) : !1),
    ));
  try {
    let e = r([o[0]]);
    for (let t = 1; t < o.length; t += 1)
      ((await Promise.race([mt(() => c.spread >= t && !d, 6e4), e.then(() => mt(() => c.spread >= t && !d, 5e3))])) ||
        (await f()),
        t === o.length - 1 && (u.hideCue(), u.release()),
        (e = r([o[t]])));
    await e;
  } finally {
    u.dispose();
  }
}
async function _t(e) {
  let { stage: n, scene: r, camera: i, player: a, ui: o, voice: s, lang: c, visit: l, extras: u } = e,
    d = l?.plan || {},
    f = { pulse: null, herbs: [] },
    p = qe(o, i),
    m = ft(n);
  ((u.camera ||= i), u.reset?.(), s?.prefetch?.(Qe.map((e) => d.pulses?.[e]).filter(Boolean), `lishizhen`));
  try {
    f.pulse = await vt(e, d, m);
    let n = rt(d, f.pulse.kind, c);
    (s?.prefetch?.(
      n.map((e, t) => yt(e, t, f.pulse.kind, c)[0]),
      `lishizhen`,
    ),
      await Promise.race([Ze, new Promise((e) => setTimeout(e, 1500))]));
    let i = new t(new k(-1, 0, 0), u.cabinetX);
    ((u.drawers = n.map((e, t) => {
      let n = _e(e.name, { clip: i }),
        [a, o] = u.slots[t];
      return (n.group.position.set(u.cabinetX, o, a), (n.group.visible = !1), r.add(n.group), n);
    })),
      m.focus(!0),
      a.faceToward(u.steelyard.group.position.x, u.steelyard.group.position.z));
    for (let [t, r] of n.entries())
      (await bt(e, p, r, t, f.pulse.kind), f.herbs.push({ role: r.role, name: r.name, qian: r.qian }));
    await Ct(e, p, d);
  } catch (e) {
    console.warn(`lishizhen act`, e);
  } finally {
    (p.dispose(), m.calm(), document.body.classList.remove(`lzp-on`));
  }
  return ((f.pulse ||= { kind: `breath`, bpm: null, source: `breath`, wave: `` }), f);
}
async function vt({ ui: e, say: t, lang: n, host: r }, i, a) {
  (r.play?.(`agree`),
    await t([i.before || X(n, `手伸过来，我听听。`, `Give me your wrist. Let me listen.`)]),
    document.body.classList.add(`lzp-on`));
  let o = We(e, {
      onBeat: () => {
        (a.beat(), Y.thump());
      },
      onBreath: (e) => a.breathe(e),
      say: (e) => t(e),
    }),
    s = await o.read({ prefer: He() ? `camera` : `tap` });
  (o.dispose(), document.body.classList.remove(`lzp-on`), a.calm());
  let c = Qe.includes(s?.kind) ? s.kind : `breath`;
  (r.play?.(`agree`), await t([i.pulses?.[c] || X(n, ...dt[c])]));
  let l = {
    kind: c,
    bpm: c === `breath` ? null : s.bpm,
    source: c === `breath` ? `breath` : s.source === `camera` ? `camera` : `tap`,
    wave: it(s?.trace),
  };
  return (s?.steady != null && (l.steady = s.steady), s?.quality != null && (l.quality = s.quality), l);
}
function yt(e, t, n, r) {
  let i = et(e.qian, r),
    a = r === `en` ? e.en : e.name,
    [o, s] = ut[e.role] || ut.君,
    c = e.qian % 1 != 0;
  if (t === 0)
    return [
      X(
        r,
        `${o}，${a}，${i}。百眼橱，一个抽屉一味药——亮着的那个，拉开它。`,
        `${s}: ${a}, ${i}. One drawer, one herb — pull the one that's lit.`,
      ),
      X(
        r,
        `放上戥子。秤砣往外推，秤杆就往下沉；推到亮着的那颗星，杆平了，就是${i}。`,
        `Onto the steelyard. Slide the weight out and the beam dips; stop at the lit star — when it lies level, that is ${i}.`,
      ),
      X(r, `${i}，一分不差。`, `${i}, to a hair.`),
    ];
  if (t === 1)
    return [
      X(r, `${o}，${a}，${i}。这回你自己来。`, `${s}: ${a}, ${i}. This one is yours to weigh.`),
      c ? X(r, `半钱没有字，看那颗星。`, `Half a qian has no numeral — watch the star.`) : ``,
      X(r, `手稳。`, `A steady hand.`),
    ];
  let [l, u] = lt[n] || lt.breath;
  return [
    n === `breath`
      ? X(
          r,
          `${o}，本该听你的脉。没听到，那就${a}，${i}，安神。`,
          `${s} should come from your pulse. Without it — ${a}, ${i}, to settle you.`,
        )
      : X(
          r,
          `${o}，要听你的脉。${l}，那就${a}，${i}。`,
          `${s} comes from your pulse. ${u[0].toUpperCase()}${u.slice(1)} — so ${a}, ${i}.`,
        ),
    c ? X(r, `半钱没有字，看那颗星。`, `Half a qian has no numeral — watch the star.`) : ``,
    X(r, `好。三味齐了。`, `Good. That makes three.`),
  ];
}
async function bt(e, t, n, r, i) {
  let { scene: a, camera: o, cam: s, say: c, lang: l, extras: u } = e,
    d = u.drawers[r],
    f = u.steelyard,
    p = u.packet,
    [m, h, g] = yt(n, r, i, l),
    _ = d.front;
  (Z(s, o, [_.x - 0.06, _.y, _.z], [_.x - 1.15, _.y + 0.16, _.z + 0.32], { width: 0.62, height: 0.5 }),
    t.note(n.name, l === `en` ? `${n.en} — ${n.does}` : n.does),
    (d.group.visible = !0),
    d.glow(!0, !0),
    d.nudge(),
    Y.slide(!0));
  let v = c([m]);
  (t.cue(X(l, `拉开`, `Pull`), () => d.front, `pull`), await xt(t, d, { lang: l, say: c }), t.hideCue(), d.glow(!1));
  let y = f.panPoint;
  (await Promise.all([pt(a, n.name, d.front.add(new k(0.12, -0.02, 0)), y.clone().add(new k(0, 0.04, 0))), f.home()]),
    Y.pour(),
    f.load(n.name, n.qian),
    await v);
  let b = f.group.position;
  Z(s, o, [b.x, b.y + 0.27, b.z + 0.14], [b.x - 0.7, b.y + 0.62, b.z + 0.36], { width: 0.48, height: 0.4 });
  let x = h ? c([h]) : Promise.resolve();
  (t.cue(X(l, `拖秤砣`, `Slide the weight`), () => f.weightPoint, `drag`),
    await St(o, t, f, { lang: l, say: c }),
    t.hideCue(),
    Y.bell(),
    await x);
  let S = c([g]);
  (await pt(a, n.name, f.panPoint.add(new k(0, 0.03, 0)), p.group.position.clone().add(new k(0, 0.02, 0)), {
    duration: 0.8,
    lift: 0.18,
  }),
    Y.pour(),
    f.load(null),
    p.add(n.name),
    t.hideNote(),
    d.close().then(() => Y.slide(!1)),
    await S);
}
function xt(e, t, { lang: n, say: r }) {
  return new Promise((i) => {
    let a = t.out,
      o = !1,
      s = () => {
        o || ((o = !0), clearTimeout(c), clearTimeout(l), e.release(), Y.slide(!0), t.open().then(i));
      };
    e.take(
      {
        down: () => {
          a = Math.max(a, t.out);
        },
        move: (e, n) => {
          ((a = Math.min(1, a + (Math.abs(e) + Math.abs(n)) / 240)), t.pull(Math.max(0.15, a)), a > 0.6 && s());
        },
        up: (e) => {
          e && t.out > 0.3 && s();
        },
        tap: s,
      },
      (e) => (e === `Space` || e === `Enter` || e === `ArrowDown` ? (s(), !0) : !1),
    );
    let c = setTimeout(() => {
        o || (t.pull(0), t.nudge(), Y.slide(!1));
      }, 6e3),
      l = setTimeout(() => {
        o || (r([X(n, `老夫替你拉开。`, `Let me get it for you.`)]), s());
      }, 12e3);
  });
}
function St(e, t, n, { lang: r, say: i }) {
  return new Promise((a) => {
    let o = !1,
      s = !1,
      c = null,
      l = performance.now(),
      u = Math.round(n.reading * 2),
      d = { s: n.weight },
      f = (e) => {
        n.weight = e;
        let t = Math.round(n.reading * 2);
        t !== u && ((u = t), Y.tick());
      },
      p = (e, t = 0.3) => {
        ((d.s = n.weight), P.to(d, { s: e, duration: t, ease: `power2.out`, overwrite: !0, onUpdate: () => f(d.s) }));
      },
      m = () => {
        Math.abs(n.reading - n.target) < 0.35 && p(n.markAt(n.target), 0.25);
      },
      h = () => {
        let e = performance.now(),
          t = Math.min(0.05, (e - l) / 1e3);
        ((l = e), n.update(t, e) && !o && (!s || Math.abs(n.reading - n.target) < 0.12) && g());
      },
      g = () => {
        o || ((o = !0), P.ticker.remove(h), clearTimeout(v), t.release(), a());
      },
      _ = () => {
        let t = Je(e, n.pointAt(n.weight)),
          r = Je(e, n.pointAt(n.weight + 0.1));
        return { x: r.x - t.x, y: r.y - t.y };
      };
    (P.ticker.add(h),
      t.take(
        {
          down: () => {
            ((s = !0), (c = _()), P.killTweensOf(d));
          },
          move: (e, t) => {
            if (!c) return;
            let r = Math.max(c.x * c.x + c.y * c.y, 3600);
            f(n.weight + ((e * c.x + t * c.y) / r) * 0.1);
          },
          up: () => {
            ((s = !1), (c = null), m());
          },
          tap: (t, r) => {
            let i = Je(e, n.pointAt(n.weight)),
              a = _(),
              o = Math.sign((t - i.x) * a.x + (r - i.y) * a.y) || 1;
            (p(n.weight + o * 0.025, 0.25), setTimeout(m, 280));
          },
        },
        (e) =>
          e !== `ArrowLeft` && e !== `ArrowRight`
            ? !1
            : (p(n.weight + (e === `ArrowRight` ? 0.025 : -0.025), 0.2), setTimeout(m, 240), !0),
      ));
    let v = setTimeout(() => {
      o || (i([X(r, `老夫扶你一把。`, `Let me steady your hand.`)]), p(n.markAt(n.target), 1.1));
    }, 16e3);
  });
}
async function Ct({ camera: e, cam: t, say: n, lang: r, extras: i, host: a }, o, s) {
  let c = i.packet,
    l = c.group.position;
  Z(t, e, [l.x, l.y + 0.01, l.z], [l.x + 0.02, l.y + 0.62, l.z + 0.3], { width: 0.3, height: 0.26 });
  let u = n([X(r, `包起来。四个角，一个一个折。`, `Now wrap it. Four corners, one at a time.`)]);
  o.cue(X(r, `折一角`, `Fold a corner`), () => l.clone().add(new k(0, 0.02, 0)), `tap`);
  let d = 0;
  o.take(
    {
      tap: () => {
        d += 1;
      },
      up: (e) => {
        e && (d += 1);
      },
    },
    (e) => (e === `Space` || e === `Enter` ? ((d += 1), !0) : !1),
  );
  for (let e = 0; e < 4; e += 1)
    ((await mt(() => d > e, e === 0 ? 9e3 : 6e3)) || (d = Math.max(d, e + 1)), Y.fold(), await c.fold());
  (o.hideCue(), o.release(), await u);
  let f = s.yin?.thing || ``;
  (Y.tie(),
    a.play?.(`agree`),
    await Promise.all([
      c.tie(f),
      n([
        s.yin?.line ||
          (f
            ? X(r, `药引是${f}。戥子称不了它。`, `Its guide is ${f}. No steelyard can weigh that.`)
            : X(r, `这一包，你收好。`, `Keep this packet safe.`)),
      ]),
    ]));
}
var wt = (e, t, n) => (e === `en` ? n : t),
  Tt = [`#A8BF8A`, `#7E9C6A`, `#5F7F57`],
  Et = `rgba(43, 36, 32, 0.9)`;
function Dt(e) {
  let t = e >>> 0;
  return () => (t = (Math.imul(t, 1664525) + 1013904223) >>> 0) / 4294967296;
}
function Ot(e) {
  let t = new C({ roughness: 0.85, metalness: 0, ...e });
  return ((t.transparent = !0), (t.depthWrite = !0), t);
}
function kt(t, n) {
  let r = new p(n),
    i = t.attributes.position.count,
    a = new Float32Array(i * 3);
  for (let e = 0; e < i; e += 1) r.toArray(a, e * 3);
  return (t.setAttribute(`color`, new e(a, 3)), t);
}
var At = [
  [
    [0, 0.02, 0],
    [0.02, 0.14, 0.01],
    [-0.015, 0.27, -0.01],
    [0.015, 0.4, 0.01],
    [-0.01, 0.52, 0],
    [0, 0.63, 0.01],
    [-0.08, 0.72, 0.02],
    [-0.2, 0.74, 0.03],
    [-0.3, 0.66, 0.03],
    [-0.34, 0.54, 0.02],
  ],
  [
    [0, 0.02, 0],
    [-0.02, 0.12, 0],
    [0.02, 0.24, 0.01],
    [-0.01, 0.36, 0],
    [0.03, 0.48, 0.01],
    [0.1, 0.57, 0.02],
    [0.22, 0.6, 0.02],
    [0.3, 0.54, 0.03],
    [0.33, 0.42, 0.02],
  ],
  [
    [0.02, 0.02, 0.02],
    [0.08, 0.1, 0.03],
    [0.15, 0.13, 0.04],
    [0.22, 0.1, 0.04],
    [0.26, 0.02, 0.03],
  ],
  [
    [-0.02, 0.02, 0.02],
    [-0.09, 0.11, 0.03],
    [-0.17, 0.15, 0.03],
    [-0.24, 0.12, 0.03],
    [-0.28, 0.05, 0.02],
  ],
];
function jt(e, t) {
  let n = [];
  for (let r = 0; r <= 10; r += 1) {
    let i = r / 10;
    n.push([i * e, (t / 2) * Math.sin(Math.PI * i) ** 0.85 * (1 - 0.25 * i)]);
  }
  for (let r = 9; r >= 1; --r) {
    let i = r / 10;
    n.push([i * e, -(t / 2) * Math.sin(Math.PI * i) ** 0.85 * (1 - 0.25 * i)]);
  }
  return n;
}
function Mt() {
  let e = new D(),
    t = Dt(1590),
    i = [],
    a = Ot({ color: `#8A5A3C`, roughness: 0.7 }),
    o = new h(new c(0.36, 0.03, 0.36), a);
  o.position.y = 0.435;
  let s = [
      [-0.15, -0.15],
      [0.15, -0.15],
      [-0.15, 0.15],
      [0.15, 0.15],
    ].map(([e, t]) => {
      let n = new h(new c(0.03, 0.42, 0.03), a);
      return (n.position.set(e, 0.21, t), n);
    }),
    l = [
      [0, 0],
      [0.1, 0],
      [0.115, 0.02],
      [0.14, 0.2],
      [0.152, 0.23],
      [0.155, 0.245],
      [0.142, 0.25],
      [0.138, 0.235],
    ].map(([e, t]) => new w(e, t)),
    u = new h(new f(l, 28), Ot({ color: `#B4744E`, roughness: 0.9 }));
  u.position.y = 0.45;
  let d = new h(new n(0.137, 24), Ot({ color: `#5a4636`, roughness: 0.95 }));
  ((d.rotation.x = -Math.PI / 2), (d.position.y = 0.68));
  let p = new h(new _(0.005, 0.007, 0.7, 6), Ot({ color: `#C8A46A`, roughness: 0.75 }));
  ((p.position.y = 1.03),
    [o, ...s, u].forEach((e) => {
      e.castShadow = !0;
    }),
    e.add(o, ...s, u, d, p));
  let g = new k(0, 0.68, 0),
    b = [],
    x = [],
    S = [],
    C = new k(0, 0, 1);
  for (let [e, n] of At.entries()) {
    let a = new N(n.map(([e, t, n]) => new k(e, t, n).add(g)));
    (b.push(kt(new r(a, 48, 0.004, 5, !1), Tt[2])), i.push({ pts: a.getSpacedPoints(48), w: 2.4 }));
    let o = e < 2 ? 7 : 3;
    for (let e = 1; e <= o; e += 1) {
      let n = 0.12 + (e / (o + 0.4)) * 0.84,
        r = a.getPointAt(n),
        s = a.getTangentAt(n),
        c = new k().crossVectors(s, C).normalize();
      for (let e of [1, -1]) {
        let n = 0.05 + t() * 0.028,
          a = n * (0.42 + t() * 0.08),
          o = c
            .clone()
            .multiplyScalar(e)
            .addScaledVector(s, 0.55 + t() * 0.3)
            .normalize(),
          l = new k().crossVectors(C, o).normalize(),
          u = (t() - 0.5) * 0.5,
          d = new y()
            .makeBasis(o, l.clone().applyAxisAngle(o, u), new k().crossVectors(o, l).applyAxisAngle(o, u))
            .setPosition(r),
          f = jt(n, a),
          p = new O(f.map(([e, t]) => new w(e, t)));
        (x.push(kt(new v(p, 3).applyMatrix4(d), Tt[Math.floor(t() * 2)])),
          i.push({ pts: [...f, f[0]].map(([e, t]) => new k(e, t, 0).applyMatrix4(d)), w: 1.7 }),
          i.push({ pts: [new k(0, 0, 0), new k(n * 0.85, 0, 0)].map((e) => e.applyMatrix4(d)), w: 1.1 }));
      }
      if (e % 2 == 0 || e === o)
        for (let [e, n] of [
          [0, `#F4EEE2`],
          [1, `#E3B04B`],
        ]) {
          let a = c
              .clone()
              .multiplyScalar(e ? -0.6 : 0.6)
              .add(new k(0, 0.8, 0.25))
              .normalize(),
            o = 0.034 + t() * 0.008,
            s = r.clone().addScaledVector(a, o / 2 + 0.006),
            l = new _(0.0042, 0.0016, o, 6)
              .applyMatrix4(new y().makeRotationFromQuaternion(new m().setFromUnitVectors(new k(0, 1, 0), a)))
              .translate(s.x, s.y, s.z);
          S.push(kt(l, n));
          let u = r.clone().addScaledVector(a, o + 0.006);
          i.push({ pts: [r.clone().addScaledVector(a, 0.006), u, u.clone().add(new k(0.006, -0.004, 0))], w: 1.4 });
        }
    }
  }
  let T = new h(ee([...b, ...x, ...S]), Ot({ vertexColors: !0, side: 2, roughness: 0.82 }));
  return (
    e.add(T),
    e.traverse((e) => {
      e.isMesh && (e.renderOrder = 5);
    }),
    {
      group: e,
      strokes() {
        return (
          e.updateWorldMatrix(!0, !0),
          i.map(({ pts: t, w: n }) => ({ pts: t.map((t) => t.clone().applyMatrix4(e.matrixWorld)), w: n }))
        );
      },
    }
  );
}
function Nt(e, { eye: t, look: n, dist: r = 0.42, width: i = 0.27, height: a = 0.36 }) {
  let s = Math.round((a / i) * 768),
    c = n.clone().sub(t).normalize(),
    l = new k().crossVectors(c, new k(0, 1, 0)).normalize(),
    d = new k().crossVectors(l, c),
    f = (e) => {
      let n = e.clone().sub(t),
        o = n.dot(c);
      if (o < 0.05) return null;
      let u = r / o;
      return [((n.dot(l) * u) / i + 0.5) * 768, (0.5 - (n.dot(d) * u) / a) * s];
    },
    p = () => {
      let e = document.createElement(`canvas`);
      return ((e.width = 768), (e.height = s), e);
    },
    m = p(),
    g = m.getContext(`2d`),
    _ = Dt(27);
  ((g.fillStyle = `rgba(247, 240, 226, 1)`), g.fillRect(0, 0, 768, s));
  for (let e = 0; e < 900; e += 1) {
    ((g.strokeStyle = `rgba(${_() < 0.5 ? `214, 198, 172` : `255, 252, 244`}, ${0.18 + _() * 0.2})`),
      (g.lineWidth = 0.6 + _()));
    let e = _() * 768,
      t = _() * s,
      n = _() * Math.PI;
    (g.beginPath(),
      g.moveTo(e, t),
      g.lineTo(e + Math.cos(n) * (4 + _() * 14), t + Math.sin(n) * (4 + _() * 14)),
      g.stroke());
  }
  let v = g.createRadialGradient(384, s / 2, 768 * 0.35, 384, s / 2, 768 * 0.8);
  (v.addColorStop(0, `rgba(160, 120, 80, 0)`),
    v.addColorStop(1, `rgba(160, 120, 80, 0.22)`),
    (g.fillStyle = v),
    g.fillRect(0, 0, 768, s));
  let y = p(),
    b = y.getContext(`2d`);
  ((b.strokeStyle = Et),
    (b.lineJoin = b.lineCap = `round`),
    (b.lineWidth = 3),
    b.strokeRect(26, 26, 716, s - 52),
    (b.lineWidth = 1.2),
    b.strokeRect(36, 36, 696, s - 72),
    b.save(),
    b.beginPath(),
    b.rect(38, 38, 692, s - 76),
    b.clip());
  for (let { pts: t, w: n } of e) {
    let e = t.map(f);
    e.some((e) => !e) ||
      ((b.lineWidth = n * 1 * 1.25),
      b.beginPath(),
      e.forEach(([e, t], n) => (n ? b.lineTo(e, t) : b.moveTo(e, t))),
      b.stroke());
  }
  b.restore();
  let S = () => {
      ((b.fillStyle = Et),
        (b.textAlign = `center`),
        (b.textBaseline = `top`),
        (b.font = `78px ${B}`),
        `忍冬`.split(``).forEach((e, t) => b.fillText(e, 676, (58 + t * 86) * 1)),
        (b.font = `25px 'Kaiti SC', 'STKaiti', 'KaiTi', serif`),
        `黄白相映故呼金银花`.split(``).forEach((e, t) => b.fillText(e, 616, (66 + t * 30) * 1)),
        (b.fillStyle = `#b8352c`),
        b.fillRect(58, s - 118, 52, 52),
        (b.fillStyle = `#f7efe0`),
        (b.font = `21px ${B}`),
        b.fillText(`濒`, 84, s - 114),
        b.fillText(`湖`, 84, s - 91));
    },
    C = (e) => {
      let t = new o(e);
      return ((t.colorSpace = u), (t.anisotropy = 4), t);
    },
    w = C(y);
  Ze.finally(() => {
    (S(), (w.needsUpdate = !0));
  });
  let E = new x(i, a),
    O = (e, t) => {
      let n = new h(
        E,
        new T({ map: e, transparent: !0, opacity: t, depthTest: !1, depthWrite: !1, toneMapped: !1, side: 2 }),
      );
      return ((n.renderOrder = 30), n);
    },
    A = new D(),
    j = O(C(m), 0),
    M = O(w, 0);
  return (
    (M.renderOrder = 31),
    (M.position.z = 5e-4),
    A.add(j, M),
    A.position.set(0, 0, -r),
    {
      group: A,
      paper: j.material,
      ink: M.material,
      eye: t,
      look: n,
      dir: c,
      right: l,
      dispose() {
        E.dispose();
        for (let e of [j, M]) (e.material.map.dispose(), e.material.dispose());
      },
    }
  );
}
async function Pt(e) {
  let { scene: t, cam: n, ui: r, say: i, lang: a, extras: o, player: s } = e,
    c = o.camera,
    l = o.herb;
  if (!c || !l) return;
  let u = l.eye,
    d = l.look,
    f = Nt(l.plant.strokes(), { eye: u, look: d }),
    p = f.right
      .clone()
      .multiplyScalar(-0.5)
      .addScaledVector(f.dir, -0.32)
      .add(new k(0, 0.04, 0)),
    m = (e) => u.clone().addScaledVector(p, 1 - e),
    h = { s: 0 },
    g = () => {
      let e = m(h.s);
      n.frame(e, e.clone().addScaledVector(f.dir, 3), { cut: !0, fit: !1 });
    },
    _ = !c.parent;
  _ && t.add(c);
  let v = s?.avatar?.object,
    y = qe(r, c);
  o.herbBusy = !0;
  try {
    (e.lines?.length && (await i(e.lines)),
      await i([
        wt(
          a,
          `这一页，你拿着。举起来，对着门口那株忍冬看。`,
          `Take this leaf. Hold it up, and look at the honeysuckle by the gate.`,
        ),
      ]),
      v && (v.visible = !1),
      c.add(f.group),
      g(),
      Y.page(),
      P.to(f.paper, { opacity: 0.52, duration: 0.6 }),
      P.to(f.ink, { opacity: 0.92, duration: 0.6 }));
    let t = !1,
      n = performance.now();
    (await new Promise((e) => {
      let r = () => {
        t ||
          ((t = !0),
          y.hideCue(),
          y.release(),
          P.to(h, { s: 1, duration: 0.35, ease: `power2.out`, onUpdate: g, onComplete: e }));
      };
      (y.cue(wt(a, `左右移一移`, `Move it side to side`), () => f.group.localToWorld(new k(0, -0.15, 0)), `drag`, {
        delay: 400,
      }),
        y.take(
          {
            move: (e) => {
              t ||
                ((n = performance.now()),
                (h.s = j.clamp(h.s + e / (innerWidth * 0.55), 0, 1.35)),
                g(),
                Math.abs(h.s - 1) < 0.035 && r());
            },
            up: () => {
              !t && Math.abs(h.s - 1) < 0.08 && r();
            },
          },
          (e) =>
            e !== `ArrowLeft` && e !== `ArrowRight`
              ? !1
              : ((h.s = j.clamp(h.s + (e === `ArrowRight` ? 0.12 : -0.12), 0, 1.35)),
                g(),
                (n = performance.now()),
                Math.abs(h.s - 1) < 0.05 && r(),
                !0),
        ));
      let o = setInterval(() => {
        if (t) {
          clearInterval(o);
          return;
        }
        performance.now() - n > 14e3 &&
          (clearInterval(o),
          i([wt(a, `再往右一点……`, `A little more to the right…`)]),
          y.hideCue(),
          y.release(),
          (t = !0),
          P.to(h, { s: 1, duration: 1.8, ease: `power1.inOut`, onUpdate: g, onComplete: e }));
      }, 400);
    }),
      Y.bell(),
      P.to(f.paper, { opacity: 0.2, duration: 0.9 }),
      await i([
        wt(
          a,
          `对上了。叶对叶，茎对茎。老夫这二十七年，就做了这一件事：让纸上的草，对得上地里的草。`,
          `There. Leaf on leaf, stem on stem. Twenty-seven years, and that is all I did: made the herb on the paper match the herb in the ground.`,
        ),
      ]),
      await new Promise((e) => setTimeout(e, 900)),
      await new Promise((e) => {
        P.to([f.paper, f.ink], { opacity: 0, duration: 0.6, onComplete: e });
      }));
  } finally {
    (y.dispose(), c.remove(f.group), f.dispose(), _ && t.remove(c), v && (v.visible = !0), (o.herbBusy = !1));
  }
}
var Ft = `#FFE2B5`;
function It(e = 64, t = 256, n = !1) {
  let r = document.createElement(`canvas`);
  ((r.width = e), (r.height = t));
  let i = r.getContext(`2d`),
    a = i.createLinearGradient(0, 0, e, 0);
  (a.addColorStop(0, `rgba(255,255,255,0)`),
    a.addColorStop(0.5, `rgba(255,255,255,1)`),
    a.addColorStop(1, `rgba(255,255,255,0)`),
    (i.fillStyle = a),
    i.fillRect(0, 0, e, t),
    (i.globalCompositeOperation = `destination-in`));
  let s = i.createLinearGradient(0, 0, 0, t);
  if (
    (s.addColorStop(0, `rgba(0,0,0,0.9)`),
    s.addColorStop(0.55, `rgba(0,0,0,0.55)`),
    s.addColorStop(1, `rgba(0,0,0,0)`),
    (i.fillStyle = s),
    i.fillRect(0, 0, e, t),
    n)
  ) {
    ((i.globalCompositeOperation = `destination-out`), (i.fillStyle = `rgba(0,0,0,0.75)`));
    for (let n = 1; n < 4; n += 1) i.fillRect((e * n) / 4 - 1.5, 0, 3, t);
  }
  let c = new o(r);
  return ((c.colorSpace = u), c);
}
function Lt(e = 256, t = 192) {
  let n = document.createElement(`canvas`);
  ((n.width = e), (n.height = t));
  let r = n.getContext(`2d`),
    i = r.createRadialGradient(e / 2, t / 2, 10, e / 2, t / 2, e * 0.55);
  (i.addColorStop(0, `rgba(255,255,255,1)`),
    i.addColorStop(1, `rgba(255,255,255,0)`),
    (r.fillStyle = i),
    r.fillRect(0, 0, e, t),
    (r.globalCompositeOperation = `destination-out`),
    (r.fillStyle = `rgba(0,0,0,0.85)`));
  for (let n = 1; n < 6; n += 1) r.fillRect((e * n) / 6 - 3, 0, 6, t);
  for (let n = 1; n < 4; n += 1) r.fillRect(0, (t * n) / 4 - 3, e, 6);
  r.filter = `blur(2px)`;
  let a = new o(n);
  return ((a.colorSpace = u), a);
}
var Rt = (e, t) =>
  new T({ map: e, color: Ft, transparent: !0, opacity: t, blending: 2, depthWrite: !1, side: 2, toneMapped: !1 });
function zt(t, { shafts: n, floor: r, dust: s = 260 }) {
  let c = new D(),
    l = new x(1, 1),
    u = n.map((e, t) => {
      let n = new h(l, Rt(It(64, 256, e.lattice), e.opacity));
      ((n.renderOrder = 6), (n.frustumCulled = !1));
      let r = new k(...e.dir).normalize(),
        i = new k(...e.from).addScaledVector(r, e.length / 2);
      (n.scale.set(e.width, e.length, 1), c.add(n));
      let a = (Math.abs(r.y) < 0.9 ? new k(0, 1, 0) : new k(1, 0, 0)).cross(r).normalize();
      return {
        mesh: n,
        axis: r,
        mid: i,
        p1: a,
        p2: new k().crossVectors(r, a),
        from: new k(...e.from),
        base: e.opacity,
        period: 6 + ((t * 1.7) % 3),
        phase: t * 1.3,
        s: e,
      };
    }),
    d = null;
  r &&
    ((d = new h(l, Rt(Lt(), r.opacity ?? 0.16))),
    d.rotation.set(-Math.PI / 2, 0, r.yaw ?? 0),
    d.scale.set(r.size[0], r.size[1], 1),
    d.position.set(...r.at),
    (d.renderOrder = 6),
    c.add(d));
  let f = new Float32Array(s * 3),
    p = new Float32Array(s * 4);
  for (let e = 0; e < s; e += 1) {
    let t = u[e % u.length],
      n = Math.random(),
      r = (Math.random() - 0.5) * t.s.width * 0.7,
      i = (Math.random() - 0.5) * t.s.width * 0.5;
    p.set([e % u.length, n, r, i], e * 4);
  }
  let m = new b();
  m.setAttribute(`position`, new e(f, 3));
  let g = document.createElement(`canvas`);
  g.width = g.height = 16;
  let _ = g.getContext(`2d`),
    v = _.createRadialGradient(8, 8, 0, 8, 8, 8);
  (v.addColorStop(0, `rgba(255,246,228,1)`),
    v.addColorStop(1, `rgba(255,246,228,0)`),
    (_.fillStyle = v),
    _.fillRect(0, 0, 16, 16));
  let S = new a({
      map: new o(g),
      size: 2.6,
      sizeAttenuation: !1,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
      blending: 2,
      toneMapped: !1,
    }),
    C = new i(m, S);
  ((C.renderOrder = 6), (C.frustumCulled = !1), c.add(C), t.add(c));
  let w = new k(),
    T = new k(),
    E = new k(),
    O = new y();
  return {
    group: c,
    update(e, t, n) {
      for (let e of u)
        (T.subVectors(n.position, e.mid),
          w.crossVectors(e.axis, T).normalize(),
          E.crossVectors(w, e.axis).normalize(),
          O.makeBasis(w, e.axis, E),
          e.mesh.quaternion.setFromRotationMatrix(O),
          e.mesh.position.copy(e.mid),
          (e.mesh.material.opacity = e.base * (1 + 0.2 * Math.sin((t * Math.PI * 2) / e.period + e.phase))));
      for (let n = 0; n < s; n += 1) {
        let r = n * 4,
          i = u[p[r]];
        p[r + 1] = (p[r + 1] + e * (0.012 + (n % 7) * 0.003)) % 1;
        let a = p[r + 1] * i.s.length * 0.85,
          o = p[r + 2] + Math.sin(t * 0.4 + n) * 0.02,
          s = p[r + 3];
        ((f[n * 3] = i.from.x + i.axis.x * a + i.p1.x * o + i.p2.x * s),
          (f[n * 3 + 1] = i.from.y + i.axis.y * a + i.p1.y * o + i.p2.y * s),
          (f[n * 3 + 2] = i.from.z + i.axis.z * a + i.p1.z * o + i.p2.z * s));
      }
      m.attributes.position.needsUpdate = !0;
    },
  };
}
var Bt = Object.freeze({
    uSat: 0.9,
    uVibrance: 0.08,
    uContrast: 0.85,
    uWarm: -0.05,
    uVignette: 0.17,
    uGrain: 0.028,
    uLift: 1.1,
    uLiftTint: `#3E3546`,
  }),
  Vt = { zh: `李时珍`, en: `Li Shizhen` },
  Ht = 0.96,
  Ut = 1.46,
  Q = {
    grinder: [0.94, 0.968, -4.16],
    steelyard: [0.86, Ht, -3.56],
    packet: [0.86, 0.947, -2.52],
    manuscript: [-1.03, 0.898, -2.96],
    rx: [-1, 0.859, -3.53],
  },
  Wt = [
    [-3.23, 1.567],
    [-3.53, 1.753],
    [-3.805, 1.567],
  ],
  Gt = {
    baskets: [-1, 0.85, -6.66],
    basketsStand: [-0.35, -6.55],
    courtyard: [0.12, 1.6, -7.6],
    courtyardStand: [0.12, -6.15],
  },
  $ = { at: [0.12, -7.6], eye: [0.12, 1.42, -6.3] },
  Kt = [-0.8, -6.12],
  qt = [-0.42, -4.55],
  Jt = [
    {
      id: `grinder`,
      at: [Q.grinder[0], 1.24, Q.grinder[2]],
      stand: [0.02, -4.35],
      act: ht,
      lines: {
        zh: [
          `这个药碾子，是我父亲留下的。`,
          `祖父摇铃走街，父亲是蕲州的名医。可那时候行医让人看不起，父亲盼我去考功名。`,
          `乡试考了三回，回回落榜。二十三岁那年，我跟父亲说：我要学医。`,
        ],
        en: [
          `This grinder was my father's.`,
          `My grandfather rang a bell in the streets as a wandering doctor; my father was Qizhou's best physician. But doctors were looked down on, and he wanted me to sit the exams.`,
          `I failed the provincial exam three times. At twenty-three I told my father: I want to study medicine.`,
        ],
      },
      label: { zh: `父亲的药碾`, en: `My father's grinder` },
    },
    {
      id: `manuscript`,
      at: [Q.manuscript[0], 1.12, Q.manuscript[2]],
      stand: [-0.15, -3.35],
      radius: 0.7,
      act: gt,
      lines: {
        zh: [
          `这是《本草纲目》的稿子。写了二十七年，改了三遍。`,
          `曼陀罗花。相传笑着采来酿酒，喝了会笑。老夫亲口尝过，记下了：昏昏如醉。`,
          `穿山甲。书上说它吃蚂蚁，老夫就剖开它的胃——真有一升多蚂蚁。`,
          `五十二卷，一千八百九十二种药。三百七十四种，是前人书里没有的。`,
        ],
        en: [
          `This is the manuscript of the Compendium. Twenty-seven years, three drafts.`,
          `Datura. They say if you pick it laughing and brew it into wine, it makes you laugh. I tasted it myself and wrote down what it does: a drowsy haze, as if drunk.`,
          `The pangolin. The books said it eats ants, so I opened its stomach — and found a good pint of them.`,
          `Fifty-two volumes, one thousand eight hundred and ninety-two medicines. Three hundred and seventy-four were in no book before.`,
        ],
      },
      label: { zh: `《本草纲目》手稿`, en: `The manuscript` },
    },
    {
      id: `courtyard`,
      at: Gt.courtyard,
      stand: Gt.courtyardStand,
      radius: 1.5,
      act: Pt,
      label: { zh: `院子里晒的药`, en: `Herbs drying in the yard` },
      lines: {
        zh: [
          `书写完十几年了，没人肯刻。南京有个书商叫胡承龙，总算答应了。`,
          `怕是等不到它印出来的那天了。不要紧——院子里这些药，晒着，也是在长。`,
        ],
        en: [
          `The book has been finished for over ten years, and no one would print it. A bookseller in Nanjing, Hu Chenglong, has at last agreed.`,
          `I may not live to see it printed. No matter — the herbs drying in the yard: even drying, they are still growing.`,
        ],
      },
    },
    {
      id: `baskets`,
      at: Gt.baskets,
      stand: Gt.basketsStand,
      label: { zh: `采药的篓子`, en: `The gathering baskets` },
      lines: {
        zh: [`这些篓子，跟了老夫很多年。`, `穿着草鞋上武当山、庐山、茅山、牛首山，问樵夫，问猎户，问药农。`],
        en: [
          `These baskets travelled with me for years.`,
          `In straw sandals I climbed Wudang, Lushan, Maoshan and Niushou, asking woodcutters, hunters and herb farmers.`,
        ],
      },
    },
  ],
  Yt = {
    zh: [`客官请进。老夫李时珍，茶还是热的。`, `柜台上那个药碾子，是我父亲留下的。去推推看。`],
    en: [
      `Come in. I am Li Shizhen — the tea is still warm.`,
      `The grinder on the counter was my father's. Go and give it a push.`,
    ],
  },
  Xt = [-0.42, -2.5],
  Zt = [0.15, -2.45],
  Qt = [-0.62, -2.62],
  $t = [
    [0.02, 1.55, -1.2],
    [-0.12, 1.32, -2.5],
  ];
function en(e, t) {
  let n = `#a8322a`,
    r = `#2b2420`,
    i = `'Kaiti SC', 'STKaiti', 'KaiTi', serif`,
    a = (e) => /[A-Za-z]/.test(e),
    o = t?.pulse || {},
    s = { chi: `迟`, huan: `缓`, ping: `平`, shu: `数` }[o.kind],
    c = (t?.herbs || []).map((e) => [
      [e.role, n],
      [` ${e.name} `, r],
      [et(e.qian, `zh`), r],
    ]),
    l = e?.shot?.title || ``,
    u = e?.yin?.thing || ``,
    d = u
      ? a(u)
        ? [
            [`使`, n],
            [` 药引`, r],
          ]
        : [
            [`使`, n],
            [u.length > 8 ? ` ${u}` : ` 以${u}为引`, r, i, 27],
          ]
      : null;
  return [
    ...(l && !a(l) ? [[[l, r, i, 30]]] : []),
    [
      [`脉`, n],
      [s && o.bpm ? ` ${s}脉 ${st(Math.round(o.bpm))}至` : ` 同息三次`, r],
    ],
    ...c,
    ...(d ? [d] : []),
    [[`濒湖 李时珍 书`, r, B, 25]],
  ];
}
function tn(e, t = 0.5) {
  let n = document.createElement(`canvas`);
  n.width = n.height = 64;
  let r = n.getContext(`2d`),
    i = r.createRadialGradient(32, 32, 0, 32, 32, 32);
  (i.addColorStop(0, `rgba(255, 214, 140, 0.9)`),
    i.addColorStop(1, `rgba(255, 214, 140, 0)`),
    (r.fillStyle = i),
    r.fillRect(0, 0, 64, 64));
  let a = new o(n);
  a.colorSpace = u;
  let s = new M(new g({ map: a, transparent: !0, opacity: 0, depthWrite: !1, blending: 2 }));
  return (s.scale.set(t, t * 0.6, 1), s.position.set(e[0], e[1] + 0.08, e[2]), (s.renderOrder = 4), s);
}
var nn = {
    id: `lishizhen`,
    who: Vt,
    role: `lishizhen`,
    host: {
      model: `models/chars/lishizhen.glb`,
      height: 1.7,
      at: Qt,
      yaw: 0.35,
      body: `#4a5a4a`,
      hair: `#d9d4c7`,
      hello: `bow`,
      radius: 0.32,
    },
    spawn: { x: -0.05, z: -1.75, h: Math.PI },
    colliders: [
      ...[-2.15, -2.55, -2.95, -3.35, -3.75, -4.15].map((e) => ({ x: -1.13, z: e, r: 0.36 })),
      ...[-2.15, -2.55, -2.95, -3.3].map((e) => ({ x: 1.11, z: e, r: 0.36 })),
      { x: 0.54, z: -3.61, r: 0.2 },
      { x: 0.53, z: -4.08, r: 0.22 },
      { x: 0.49, z: -4.84, r: 0.25 },
      { x: 0.5, z: -5.62, r: 0.22 },
      { x: 0.55, z: -5.98, r: 0.15 },
      { x: 0.73, z: -6.3, r: 0.14 },
      { x: -1.05, z: -4.9, r: 0.3 },
      { x: -1.02, z: -6.68, r: 0.28 },
      { x: 1.2, z: -6.85, r: 0.32 },
    ],
    beats: Jt,
    inviteAfter: 2,
    greeting: Yt,
    hm: { zh: `唔……`, en: `Hm…` },
    chips: {
      zh: [`你为什么要写这本书？`, `我最近总睡不好`, `给我一句话吧`],
      en: [`Why write the book?`, `I can't sleep lately`, `A word for me?`],
    },
    chatFallback: { zh: `人老了，耳朵背，你再说一遍？`, en: `My ears are old — say that once more?` },
    gift: {
      card: `prescription`,
      spot: { x: Zt[0], z: Zt[1], h: Math.atan2(Xt[0] - Zt[0], Xt[1] - Zt[1]) },
      hostAt: Xt,
      frame: $t,
      invite: { zh: `到书案这儿来，把手腕伸给我。`, en: `Come over to my desk and give me your wrist.` },
      labels: {
        go: { zh: `到书案边，号脉`, en: `By his desk — your pulse` },
        waiting: { zh: `方子还在写……`, en: `He is still writing it…` },
        again: { zh: `再看看你的方子`, en: `See your prescription again` },
      },
      lines: {
        wait: {
          zh: [`墨还没干。老夫再给你配一幅画，你四下看看。`],
          en: [`The ink isn't dry. I'm having a picture made to go with it — look around a moment.`],
        },
        slow: {
          zh: [`画画的手比老夫还慢……你多担待。`],
          en: [`The painter is slower than my old hand — bear with us.`],
        },
        done: { zh: `好了。来，这张方子是你的。`, en: `There. This prescription is yours.` },
        fail: {
          zh: `哎呀，墨洇了，这张不作数……老夫再写一张？`,
          en: `Ah, the ink has run — this one won't do. Shall I write another?`,
        },
      },
    },
    exit: { at: [-0.1, 0.5] },
    farewell: {
      after: {
        zh: `方子收好。按时吃饭，按时睡觉——这一味，书上没有。`,
        en: `Keep the prescription safe. Eat on time, sleep on time — that one is in no book.`,
      },
      early: { zh: `慢走。路上当心，得空再来坐坐。`, en: `Go carefully. Come and sit again when you have time.` },
    },
    arrival: {
      image: `worlds/lishizhen/painting.jpg`,
      kind: `scroll`,
      hold: 1600,
      from: [0, 1.549, 0],
      look: [0.1, 1.299, -4.9],
      fov: 55,
      caption: {
        zh: `<b class="lzh-job">当一回郎中</b>蕲州 · 濒湖药室 · 万历十八年（1590）`,
        en: `<b class="lzh-job">Your turn as the doctor</b>Qizhou · the Binhu Pharmacy · 1590`,
      },
    },
    light: {
      sky: `#f4e6d0`,
      ground: `#6b5747`,
      fill: 1.05,
      key: `#FFD6A5`,
      keyIntensity: 1.45,
      from: [-2.6, 2.4, -3],
      shadow: 0.3,
    },
    look: { marker: `#ffd27a`, background: `#1c1610`, vignette: 0.2 },
    art: {
      accent: `#C4553A`,
      stamp: { date: F === `en` ? `PM 4:26  1590  QIZHOU` : `PM 4:26  1590  蕲州` },
      tripo: !1,
      look: { ...L.splat, finish: Bt },
    },
    camera: {
      distance: 1.9,
      maxDistance: 2.3,
      height: 1.35,
      pitch: 0.2,
      fov: 56,
      ceiling: 2.4,
      box: { minX: -1.25, maxX: 0.95, minZ: -7.75, maxZ: 0.9 },
    },
    shots: {
      shop: [
        [0, 1.6, -2],
        [0, 1.2, -6],
      ],
      gate: [
        [-0.15, 1.5, -3.6],
        [$.at[0], 1.1, -7],
      ],
      pulse: $t,
      counter: [
        [0.1, 1.55, -2.5],
        [0.9, 1, -3.4],
      ],
      cabinet: [
        [0.35, 1.5, -3.3],
        [Ut, 1.5, -3.5],
      ],
      desk: [
        [-0.3, 1.6, -3.9],
        [-1, 0.9, -3.2],
      ],
    },
    setup({ scene: e, stage: t, heightAt: n, floorY: r = 0 }) {
      t?.renderer && (t.renderer.localClippingEnabled = !0);
      let i = (t, n) => (t.group.position.set(...n), e.add(t.group), t),
        a = (e, t) => {
          let i = n?.(e, t);
          return Number.isFinite(i) ? i : r;
        },
        o = i(Mt(), [$.at[0], a($.at[0], $.at[1]), $.at[1]]),
        s = {
          plant: o,
          eye: new k($.eye[0], a($.eye[0], $.eye[2]) + $.eye[1], $.eye[2]),
          look: o.group.position.clone().add(new k(0, 1.04, 0)),
        },
        c = [1, -0.62, -0.12],
        l = zt(e, {
          shafts: [
            { from: [-1.66, 2.25, -2.3], dir: c, length: 2.7, width: 0.42, opacity: 0.12, lattice: !0 },
            { from: [-1.66, 2.2, -3], dir: c, length: 2.7, width: 0.46, opacity: 0.14, lattice: !0 },
            { from: [-1.66, 2.25, -3.7], dir: c, length: 2.6, width: 0.4, opacity: 0.11, lattice: !0 },
            { from: [-1.66, 2.15, -4.3], dir: c, length: 2.5, width: 0.36, opacity: 0.1, lattice: !0 },
            { from: [0.06, 1.5, -7.95], dir: [0.05, -0.28, 1], length: 3.2, width: 1.3, opacity: 0.08 },
          ],
          floor: { at: [-0.1, a(-0.1, -3.1) + 0.006, -3.1], size: [1.1, 0.8], yaw: 0.2, opacity: 0.14 },
        }),
        u = i(de(), Q.grinder),
        d = i(me(), Q.manuscript),
        f = i(Te({ lang: F }), Q.steelyard),
        p = i(De(), Q.rx),
        m = i(Ee(), Q.packet),
        h = { grinder: tn(Q.grinder, 0.62), manuscript: tn(Q.manuscript, 0.5) };
      Object.values(h).forEach((t) => e.add(t));
      let g = {
        camera: t?.camera,
        grinder: u,
        manuscript: d,
        steelyard: f,
        rx: p,
        halos: h,
        herb: s,
        sun: l,
        slots: Wt,
        cabinetX: Ut,
        drawers: [],
        get packet() {
          return m;
        },
        reset() {
          (g.drawers.forEach((t) => e.remove(t.group)),
            (g.drawers = []),
            m.folded && (e.remove(m.group), (m = i(Ee(), Q.packet))),
            f.load(null),
            p.clear());
        },
      };
      return g;
    },
    update(e, t, { interactions: n, extras: r, staging: i, intro: a, heard: o, host: s, player: c, camera: l }) {
      r.sun?.update(e, t, l || r.camera);
      let u = s?.object;
      u && o.has(`courtyard`) && !r.toGate
        ? ((r.toGate = !0),
          P.timeline()
            .to(u.position, { x: qt[0], z: qt[1], duration: 1.6, ease: `sine.in` })
            .to(u.position, { x: Kt[0], z: Kt[1], duration: 1.35, ease: `sine.out` }))
        : u &&
          r.toGate &&
          !r.home &&
          !r.herbBusy &&
          !i &&
          Math.hypot(c.position.x - u.position.x, c.position.z - u.position.z) > 2.4 &&
          ((r.home = !0),
          P.timeline()
            .to(u.position, { x: qt[0], z: qt[1], duration: 1.35, ease: `sine.in` })
            .to(u.position, { x: Qt[0], z: Qt[1], duration: 1.6, ease: `sine.out` }));
      let d = !i && !a ? n.current : null;
      for (let [n, i] of Object.entries(r.halos || {})) {
        let r = d?.id === n && !o.has(n) ? 0.5 + Math.sin(t * 3.2) * 0.16 : 0;
        i.material.opacity += (r - i.material.opacity) * (1 - Math.exp(-e * 5));
      }
    },
    action: _t,
    async giftScene({ host: e, visit: t, lang: n, say: r, extras: i, cam: a, choices: o }) {
      let s = t?.plan || {},
        c = i.rx.group.position;
      (Z(a, i.camera, [c.x, c.y + 0.01, c.z], [c.x + 0.5, c.y + 0.6, c.z + 0.38], { width: 0.35, height: 0.27 }),
        e.play?.(`agree`));
      let l = r([s.wait || (n === `en` ? `I write slowly. Bear with me.` : `方子老夫写慢一点，你别急。`)]);
      (await i.rx.write(en(s, o), {
        ms: 6500,
        onChar: (e) => {
          e % 2 && Y.brush();
        },
      }),
        await l);
    },
    async onGiftReady({ extras: e, cam: t, sleep: n }) {
      let r = e.rx.group.position,
        i = Z(t, e.camera, [r.x, r.y, r.z], [r.x + 0.42, r.y + 0.56, r.z + 0.3], { width: 0.36, height: 0.26 });
      ((e.held = t), await n(700));
      for (let t = 0; t < 2400 && e.camera.position.distanceTo(i.at) > 0.04; t += 100) await n(100);
      (e.rx.seal(), Y.stamp(), await n(800));
    },
    onGiftShown({ extras: e, host: t }) {
      (t.object.position.set(Qt[0], t.object.position.y, Qt[1]), e.held?.release(), (e.held = null));
    },
    cardOf: ({ shot: e, visit: t, image: n, me: r, lang: i }) => {
      let a = t?.plan || {},
        o = e.choices || {},
        s = Array.isArray(e.herbs) ? e.herbs : [],
        c = [...(a.shot?.herbs || []), ...Object.values(a.zuo || {})],
        l =
          Array.isArray(o.herbs) && o.herbs.length
            ? o.herbs.map((e) => {
                let t = s.find((t) => String(t.name || ``).startsWith(e.name)),
                  n = c.find((t) => t?.name === e.name);
                return {
                  role: e.role,
                  name: t?.name || (i === `en` && n?.en ? `${e.name} (${n.en})` : e.name),
                  dose: t?.dose || et(Number(e.qian) || 2, i),
                  why: t?.why || n?.why || n?.does || ``,
                };
              })
            : s;
      return {
        image: n,
        title: e.title,
        trick: e.trick,
        note: e.dedication,
        method: e.method,
        mine: !0,
        herbs: l,
        pulse: e.pulse || ``,
        bpm: e.bpm ?? o.pulse?.bpm ?? null,
        kind: e.kind || o.pulse?.kind || `breath`,
        source: e.source || o.pulse?.source || `breath`,
        wave: at(o.pulse?.wave),
        yin: e.yin || (a.yin?.thing ? { thing: a.yin.thing, how: `` } : null),
        who: r.identity || ``,
      };
    },
    kept: (e, t) => {
      let n = t === `en`,
        r = (e.herbs || []).slice(0, 3).map((e) => `${e.name}${n ? ` ` : ``}${e.dose}`),
        i = e.bpm ? (n ? `; he read their pulse, ${e.bpm} beats a minute` : `；他号的脉，每分钟${e.bpm}至`) : ``;
      return r.length
        ? {
            did: n
              ? `weighed ${r.join(`, `)} on Li Shizhen's steelyard${i}`
              : `在李时珍的戥子上亲手称了${r.join(`、`)}${i}`,
          }
        : {};
    },
  },
  rn = (e) => ne({ ...e, cfg: nn });
export { rn as enter };
