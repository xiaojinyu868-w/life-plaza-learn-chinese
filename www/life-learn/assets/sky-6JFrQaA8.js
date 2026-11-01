import { o as e } from "./three.module-DCgPjWyi.js";
import {
  A as t,
  Fr as n,
  Ir as r,
  St as i,
  U as a,
  Wn as o,
  Xt as s,
  ar as c,
  j as l,
  pa as u,
  ro as d,
  rr as f,
  ta as p,
  tr as m,
  zt as h,
} from "./three.core-DtjtRha-.js";
import { a as g, i as _, l as v, o as y } from "./stamp-C8irYyoR.js";
var b = e({
  applyFog: () => N,
  backlight: () => S,
  createDaylight: () => P,
  createSky: () => k,
  createSkyLight: () => M,
  createSunLight: () => j,
  sunDirection: () => x,
  untoned: () => O,
});
function x(e = 0, t = g.sun.elevation, n = new d()) {
  let r = m.degToRad(e),
    i = m.degToRad(t);
  return n.set(Math.sin(r) * Math.cos(i), Math.sin(i), Math.cos(r) * Math.cos(i));
}
function S(e, t, n = 45) {
  let r = t.x - e.x,
    i = t.z - e.z;
  return m.radToDeg(Math.atan2(r, i)) - n;
}
var C = new f().set(0.59719, 0.35458, 0.04823, 0.076, 0.90834, 0.01566, 0.0284, 0.13383, 0.83777),
  w = new f().set(1.60475, -0.53108, -0.07367, -0.10208, 1.10813, -0.00605, -0.00327, -0.07276, 1.07602),
  T = (e) => (e * (e + 0.0245786) - 90537e-9) / (e * (0.983729 * e + 0.432951) + 0.238081);
function E(e, t) {
  let n = e
    .clone()
    .multiplyScalar(t / 0.6)
    .applyMatrix3(C);
  return new d(T(n.x), T(n.y), T(n.z)).applyMatrix3(w).clampScalar(0, 1);
}
function D(e, t) {
  let n = e.clone().multiplyScalar(t),
    r = Math.min(n.x, n.y, n.z),
    i = r < 0.08 ? r - 6.25 * r * r : 0.04;
  n.subScalar(i);
  let a = Math.max(n.x, n.y, n.z),
    o = 0.76;
  if (a < o) return n;
  let s = 0.24,
    c = 1 - (s * s) / (a + s - o);
  n.multiplyScalar(c / a);
  let l = 1 - 1 / (0.15 * (a - c) + 1);
  return n.lerp(new d(c, c, c), l);
}
function O(e, t, n = new a()) {
  let r = new a(e),
    i = t?.toneMapping === 4 ? E : t?.toneMapping === 7 ? D : null;
  if (!i) return n.copy(r);
  let s = new d(r.r, r.g, r.b).clampScalar(0, 0.985),
    c = s.clone();
  for (let e = 0; e < 40; e += 1) {
    let e = i(c, t.toneMappingExposure);
    c.set(
      (c.x * (s.x + 1e-4)) / (e.x + 1e-4),
      (c.y * (s.y + 1e-4)) / (e.y + 1e-4),
      (c.z * (s.z + 1e-4)) / (e.z + 1e-4),
    );
  }
  return n.setRGB(c.x, c.y, c.z, o);
}
function k({
  colors: e = v.afternoon,
  sun: t = x(),
  renderer: n = null,
  radius: r = 900,
  disc: i = 2.4,
  halo: o = 20,
  haloOpacity: s = 0.35,
  haloPower: l = 2,
  stars: d = e === v.night ? 200 : 0,
} = {}) {
  let f = !!e.sun,
    m = {
      uZenith: { value: new a() },
      uMid: { value: new a() },
      uHorizon: { value: new a() },
      uBelow: { value: new a() },
      uSun: { value: new a() },
      uHalo: { value: new a() },
      uDir: { value: t },
      uBand: { value: e.band ?? 4 },
      uDisc: { value: i },
      uHaloR: { value: o },
      uHaloOpacity: { value: s },
      uHaloPower: { value: l },
      uSunOn: { value: +!!f },
    },
    h = new p({
      side: 1,
      depthWrite: !1,
      fog: !1,
      uniforms: m,
      vertexShader: `varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
      fragmentShader: `uniform vec3 uZenith, uMid, uHorizon, uBelow, uSun, uHalo, uDir; uniform float uBand, uDisc, uHaloR, uHaloOpacity, uHaloPower, uSunOn; varying vec3 vD;
      void main(){
        vec3 d = normalize(vD);
        float h = degrees(asin(clamp(d.y, -1.0, 1.0)));
        vec3 c = h >= 0.0 ? mix(mix(uHorizon, uMid, smoothstep(uBand, 25.0, h)), uZenith, smoothstep(30.0, 90.0, h)) : mix(uHorizon, uBelow, smoothstep(0.0, -6.0, h));
        float a = degrees(acos(clamp(dot(d, normalize(uDir)), -1.0, 1.0)));
        c = mix(c, uHalo, pow(clamp(1.0 - a / uHaloR, 0.0, 1.0), uHaloPower) * uHaloOpacity * uSunOn);
        c = mix(c, uSun, (1.0 - smoothstep(uDisc - 0.3, uDisc + 0.3, a)) * uSunOn);
        gl_FragColor = vec4(c, 1.0);
      }`,
    }),
    g = new c(new u(r, 48, 24), h);
  ((g.name = `look-sky`),
    (g.renderOrder = -10),
    (g.frustumCulled = !1),
    (g.userData.noAO = !0),
    d && g.add(A(d, r * 0.96, e.star || y.paperCream)));
  let _ = {
    mesh: g,
    material: h,
    uniforms: m,
    sun: t,
    fit(t = n) {
      for (let [n, r] of [
        [`uZenith`, `zenith`],
        [`uMid`, `mid`],
        [`uHorizon`, `horizon`],
        [`uBelow`, `below`],
        [`uSun`, `sun`],
        [`uHalo`, `halo`],
      ])
        e[r] && O(e[r], t, m[n].value);
      return _;
    },
    update(e) {
      g.position.copy(e.position);
    },
  };
  return _.fit(n);
}
function A(e, i, a) {
  let o = new Float32Array(e * 3),
    s = 7,
    c = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let t = 0; t < e; t += 1) {
    let e = c() * Math.PI * 2,
      n = 0.08 + c() * 0.92,
      r = Math.sqrt(1 - n * n);
    o.set([Math.cos(e) * r * i, n * i, Math.sin(e) * r * i], t * 3);
  }
  let u = new l();
  u.setAttribute(`position`, new t(o, 3));
  let d = new n(
    u,
    new r({ color: a, size: 1.6, sizeAttenuation: !1, depthWrite: !1, fog: !1, transparent: !0, opacity: 0.9 }),
  );
  return ((d.frustumCulled = !1), (d.userData.noAO = !0), d);
}
function j({
  sun: e = x(),
  quality: t = { shadowSize: 2048 },
  box: n = 24,
  distance: r = 70,
  color: a = g.sun.color,
  intensity: o = g.sun.intensity,
} = {}) {
  let s = new i(a, o);
  ((s.castShadow = !0),
    s.shadow.mapSize.set(t.shadowSize, t.shadowSize),
    Object.assign(s.shadow.camera, { left: -n, right: n, top: n, bottom: -n, near: 1, far: r * 2.2 }),
    s.shadow.camera.updateProjectionMatrix(),
    (s.shadow.bias = -4e-4),
    (s.shadow.normalBias = 0.05),
    (s.shadow.radius = g.sun.shadowRadius),
    (s.shadow.intensity = g.sun.shadowIntensity));
  let c = new d(),
    l = (t = c) => {
      (c.copy(t),
        s.target.position.copy(c),
        s.position.copy(e).normalize().multiplyScalar(r).add(c),
        s.target.updateMatrixWorld());
    };
  return (l(), { light: s, target: s.target, sun: e, follow: l });
}
function M(e = g.sky) {
  return new s(e.sky, e.ground, e.intensity);
}
function N(e, t) {
  return ((e.fog = t ? new h(t.color, t.near, t.far) : null), e.fog);
}
function P(
  e,
  {
    azimuth: t = 0,
    elevation: n = g.sun.elevation,
    colors: r = v.afternoon,
    fog: i = _.plaza,
    renderer: a = null,
    quality: o,
    box: s,
    radius: c,
  } = {},
) {
  let l = x(t, n),
    u = k({ colors: r, sun: l, renderer: a, radius: c }),
    d = !r.sun,
    f = d ? null : j({ sun: l, quality: o, box: s }),
    p = M(d ? g.night.moon : g.sky);
  (e.add(u.mesh, p), f && e.add(f.light, f.target));
  let m = i ? N(e, i) : null;
  return {
    sky: u,
    sun: l,
    light: f?.light ?? null,
    hemi: p,
    fog: m,
    setSun(e, t = n) {
      (x(e, t, l), f?.follow());
    },
    update(e, t) {
      (u.update(e), t && f?.follow(t));
    },
    remove() {
      (e.remove(u.mesh, p), f && e.remove(f.light, f.target), e.fog === m && (e.fog = null));
    },
  };
}
export { j as a, M as i, S as n, b as o, k as r, x as s, N as t };
