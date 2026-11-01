import { o as e } from "./three.module-DCgPjWyi.js";
import { t } from "./gsap-CvDoa17S.js";
import { n } from "./i18n-BvGoRVq5.js";
import { a as r } from "./assets-p2qy6QaX.js";
var i = e({
    ACCENTS: () => s,
    FOG: () => l,
    LIGHT: () => c,
    MOVE: () => f,
    PALETTE: () => a,
    POST: () => u,
    SHOTS: () => d,
    SKY: () => o,
    STAMPS: () => p,
    normalizeTripo: () => x,
    useLook: () => h,
    usePaperUi: () => C,
    useShot: () => g,
    useTripoRule: () => S,
  }),
  a = Object.freeze({
    paperCream: `#F6EEE3`,
    linen: `#EADBC8`,
    honeyWood: `#C8925A`,
    walnut: `#8A5A3C`,
    warmStone: `#CFC3B4`,
    seaSalt: `#A9C4DD`,
    mistBlue: `#7FA3C6`,
    sageLit: `#A8BF8A`,
    sage: `#7E9C6A`,
    sageShade: `#5F7F57`,
    apricot: `#F2B880`,
    dustyRose: `#E7B7B0`,
    plum: `#3E3546`,
    deepPlum: `#2A2433`,
    ink: `#3A2E28`,
    ink2: `#7A6A5E`,
    teal: `#2F5D62`,
  }),
  o = Object.freeze({
    afternoon: Object.freeze({
      zenith: `#A9C2E6`,
      mid: `#CFDDF0`,
      horizon: `#F7DCC6`,
      below: `#F3E6DA`,
      sun: `#FFF1D6`,
      halo: `#FFE6BF`,
      band: 4,
    }),
    night: Object.freeze({
      zenith: `#2E3A5C`,
      mid: `#5B6A92`,
      horizon: `#E8B49A`,
      below: `#4A4F78`,
      moon: `#8E86B8`,
      star: `#FBF6EE`,
      band: 5,
    }),
  }),
  s = Object.freeze({
    landing: Object.freeze({ lamp: `#FFC27A`, onAir: `#E0533D` }),
    plaza: Object.freeze({ apricot: `#F2B880`, seaSalt: `#A9C4DD` }),
    vangogh: Object.freeze({ chrome: `#E8B930`, cobalt: `#3D5BA9`, vermilion: `#C8462F`, wall: `#9AA3D6` }),
    lishizhen: Object.freeze({ cinnabar: `#C4553A`, celadon: `#9DB8A0` }),
    melies: Object.freeze({ sepia: `#B8946A`, moonSilver: `#DCD6C8`, curtain: `#A8463C`, ironGreen: `#3F5A4A` }),
    xiyou: Object.freeze({ seal: `#D0482F`, jade: `#7FB59A`, gold: `#E3B04B`, sandstone: `#E2C49A` }),
  }),
  c = Object.freeze({
    sun: Object.freeze({ color: `#FFD6A5`, intensity: 3, elevation: 22, shadowRadius: 3.5, shadowIntensity: 0.75 }),
    sky: Object.freeze({ sky: `#C9D8F0`, ground: `#E6D2B8`, intensity: 1.1 }),
    contact: Object.freeze({ radius: 0.35, opacity: 0.35, color: `#3E3546` }),
    rim: Object.freeze({ color: `#FFD9B0`, intensity: 0.25 }),
    window: Object.freeze({
      shaft: `#FFE2B5`,
      shaftOpacity: Object.freeze([0.1, 0.16]),
      bounce: Object.freeze({ color: `#FFC88A`, intensity: 0.6, distance: 4 }),
    }),
    night: Object.freeze({
      lamp: Object.freeze({ color: `#FFC27A`, intensity: 4, decay: 2, distance: 6 }),
      lantern: Object.freeze({ color: `#FFD9A0`, intensity: 0.8, distance: 3 }),
      moon: Object.freeze({ sky: `#5B6A92`, ground: `#2E3A5C`, intensity: 0.6 }),
      door: Object.freeze({ color: `#FFD7A0`, intensity: 6, angle: 35, penumbra: 0.8 }),
    }),
  }),
  l = Object.freeze({
    plaza: Object.freeze({ color: `#F3E2D2`, near: 25, far: 140 }),
    xiyou: Object.freeze({ color: `#F3E2D2`, near: 20, far: 120 }),
    melies: Object.freeze({ color: `#EBDCCB`, near: 8, far: 40 }),
  }),
  u = Object.freeze({
    procedural: Object.freeze({
      toneMapping: `aces`,
      exposure: 0.97,
      ao: 0.8,
      bloom: Object.freeze({ strength: 0.16, radius: 0.4, threshold: 1.4 }),
      finish: Object.freeze({
        uSat: 0.88,
        uVibrance: 0.1,
        uContrast: 0.94,
        uWarm: 0.025,
        uVignette: 0.22,
        uGrain: 0.028,
        uLift: 0.6,
        uLiftTint: `#3E3546`,
      }),
    }),
    splat: Object.freeze({
      toneMapping: `none`,
      exposure: 1,
      bloom: Object.freeze({ strength: 0.15, radius: 0.5, threshold: 0.88 }),
      finish: Object.freeze({
        uSat: 0.92,
        uVibrance: 0.08,
        uContrast: 0.95,
        uWarm: 0.02,
        uVignette: 0.2,
        uGrain: 0.028,
        uLift: 0.7,
        uLiftTint: `#3E3546`,
      }),
    }),
    night: Object.freeze({
      toneMapping: `aces`,
      exposure: 0.97,
      ao: 0.8,
      bloom: Object.freeze({ strength: 0.32, radius: 0.55, threshold: 0.86 }),
      finish: Object.freeze({
        uSat: 0.88,
        uVibrance: 0.1,
        uContrast: 0.94,
        uWarm: 0,
        uVignette: 0.22,
        uGrain: 0.028,
        uLift: 0.5,
        uLiftTint: `#3E3546`,
      }),
    }),
  }),
  d = Object.freeze({
    model: Object.freeze({ pitch: 40, fov: 30, phoneFov: 50, tilt: 0.7, band: 0.16, focus: 0.5 }),
    walk: Object.freeze({
      pitch: 21,
      fov: 50,
      phoneFov: 64,
      tilt: 0.1,
      band: 0.22,
      focus: 0.5,
      backOff: 0.5,
      outdoor: Object.freeze([3.2, 3.8]),
      indoor: Object.freeze([1.9, 2.3]),
      height: Object.freeze([1.9, 2.2]),
    }),
    close: Object.freeze({ pitch: null, fov: 32, phoneFov: 48, tilt: 0.9, band: 0.1, focus: 0.5 }),
  }),
  f = Object.freeze({ ease: `power2.inOut`, duration: 1.1, opening: 3.2 }),
  p = Object.freeze({
    plaza: Object.freeze({ zh: `PM 4:26`, en: `PM 4:26` }),
    vangogh: Object.freeze({ zh: `PM 4:26  OCT. 1888  ARLES`, en: `PM 4:26  OCT. 1888  ARLES` }),
    lishizhen: Object.freeze({ zh: `PM 4:26  1578  蕲州`, en: `PM 4:26  1578  QIZHOU` }),
    melies: Object.freeze({ zh: `PM 4:26  1897  MONTREUIL`, en: `PM 4:26  1897  MONTREUIL` }),
  }),
  m = [`uSat`, `uVibrance`, `uContrast`, `uWarm`, `uVignette`, `uGrain`, `uLift`];
function h(e, t = `procedural`, { phoneBloom: n } = {}) {
  let r = typeof t == `string` ? u[t] : t;
  if (!r) throw Error(`no look "${t}"`);
  let { renderer: i, bloom: a, ao: o, quality: s } = e,
    c = e.finish?.uniforms,
    l = {
      toneMapping: i.toneMapping,
      exposure: i.toneMappingExposure,
      bloom: a && { strength: a.strength, radius: a.radius, threshold: a.threshold, enabled: a.enabled },
      ao: o ? o.blendIntensity : null,
      finish: c ? Object.fromEntries(m.filter((e) => c[e]).map((e) => [e, c[e].value])) : null,
      tint: c?.uLiftTint ? c.uLiftTint.value.clone() : null,
    };
  if (
    ((i.toneMapping = r.toneMapping === `aces` ? 4 : 0),
    (i.toneMappingExposure = r.exposure),
    a && (e.setBloom(r.bloom), (a.enabled = r.bloom.strength > 0 && (s.low ? (n ?? a.enabled) : !0))),
    o && r.ao != null && (o.blendIntensity = r.ao),
    c)
  ) {
    for (let e of m) c[e] && r.finish[e] != null && (c[e].value = r.finish[e]);
    c.uLiftTint && r.finish.uLiftTint && c.uLiftTint.value.set(r.finish.uLiftTint);
  }
  return {
    preset: r,
    restore() {
      if (
        ((i.toneMapping = l.toneMapping),
        (i.toneMappingExposure = l.exposure),
        a && Object.assign(a, l.bloom),
        o && l.ao != null && (o.blendIntensity = l.ao),
        c)
      ) {
        for (let [e, t] of Object.entries(l.finish)) c[e].value = t;
        l.tint && c.uLiftTint.value.copy(l.tint);
      }
    },
  };
}
function g(e, n = `walk`, { fov: r, focus: i, duration: a = 0, ease: o = f.ease } = {}) {
  let s = d[n];
  if (!s) throw Error(`no shot "${n}"`);
  let c = e.finish?.uniforms,
    l = { fov: r ?? s.fov, max: s.phoneFov, tilt: s.tilt, band: s.band, focus: i ?? s.focus },
    u = (t) => {
      (e.setFovMax?.(t.max),
        e.setFov(t.fov),
        c && ((c.uTilt.value = t.tilt), (c.uBand.value = t.band), (c.uFocus.value = t.focus)));
    };
  if (!a) return (u(l), Promise.resolve());
  let p = {
    fov: e.baseFov,
    max: Number.isFinite(e.fovMax) ? e.fovMax : Math.max(l.max, 78),
    tilt: c ? c.uTilt.value : 0,
    band: c ? c.uBand.value : l.band,
    focus: c ? c.uFocus.value : l.focus,
  };
  return new Promise((e) =>
    t.to(p, { ...l, duration: a, ease: o, overwrite: `auto`, onUpdate: () => u(p), onComplete: e }),
  );
}
var _ = /metal|iron|steel|brass|bronze|copper|chrome|silver|gold|tin\b|铜|铁|钢|金属/i,
  v = Object.freeze({
    roughMin: 0.5,
    metalMax: 0.2,
    satMax: 0.45,
    metal: Object.freeze({ roughMin: 0.35, metalMax: 0.8 }),
  }),
  y = { value: 1 };
function b(e, { roughMin: t, metalMax: n, satMax: r }) {
  if (!e || e.userData.lpTripo || !(`roughness` in e || `color` in e)) return;
  e.userData.lpTripo = { roughMin: t, metalMax: n, satMax: r };
  let i = e.customProgramCacheKey(),
    a = e.onBeforeCompile;
  ((e.onBeforeCompile = function (e, i) {
    (a.call(this, e, i),
      Object.assign(e.uniforms, {
        uLpTripo: y,
        uLpRoughMin: { value: t },
        uLpMetalMax: { value: n },
        uLpSatMax: { value: r },
      }),
      (e.fragmentShader = e.fragmentShader
        .replace(
          `#include <common>`,
          `#include <common>
uniform float uLpTripo, uLpRoughMin, uLpMetalMax, uLpSatMax;`,
        )
        .replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
        { vec3 lpS = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2));
          float lpHi = max(lpS.r, max(lpS.g, lpS.b)), lpLo = min(lpS.r, min(lpS.g, lpS.b));
          float lpSat = lpHi > 1e-4 ? (lpHi - lpLo) / lpHi : 0.0;
          if (lpSat > uLpSatMax) diffuseColor.rgb = mix(diffuseColor.rgb, pow(mix(vec3(lpHi), lpS, uLpSatMax / lpSat), vec3(2.2)), uLpTripo); }`,
        )
        .replace(
          `#include <roughnessmap_fragment>`,
          `#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, max(roughnessFactor, uLpRoughMin), uLpTripo);`,
        )
        .replace(
          `#include <metalnessmap_fragment>`,
          `#include <metalnessmap_fragment>
metalnessFactor = mix(metalnessFactor, min(metalnessFactor, uLpMetalMax), uLpTripo);`,
        )));
  }),
    (e.customProgramCacheKey = () => `${i}|lp-tripo`),
    (e.needsUpdate = !0));
}
function x(e, { metal: t = (e) => _.test(e.name || ``), keep: n = null } = {}) {
  return (
    e.traverse((e) => {
      if (e.isMesh)
        for (let r of Array.isArray(e.material) ? e.material : [e.material]) {
          if (!r || n?.(r, e)) continue;
          let i = t(r, e) ? v.metal : v;
          b(r, { roughMin: i.roughMin, metalMax: i.metalMax, satMax: v.satMax });
        }
    }),
    e
  );
}
function S(e = !0, t) {
  (r(e ? (e) => x(e, t) : null), (y.value = +!!e));
}
function C(e = !0, { accent: t, dark: n = !1 } = {}) {
  let r = document.documentElement;
  (r.classList.toggle(`paper-ui`, e),
    r.classList.toggle(`paper-dark`, e && n),
    e && t ? r.style.setProperty(`--accent`, t) : e || r.style.removeProperty(`--accent`));
}
var w = e({ showStamp: () => O }),
  T = null,
  E = 0,
  D = null;
function O(e, { hold: t = 1400, play: r = `PLAY ▶`, lang: i = n === `en` ? `en` : `zh` } = {}) {
  let a = typeof e == `string` ? (p[e]?.[i] ?? ``) : (e?.date ?? ``);
  return (
    T ||
      ((T = document.createElement(`div`)),
      (T.className = `tape-stamp`),
      T.setAttribute(`aria-hidden`, `true`),
      (T.innerHTML = `<b class="tape-play"></b><b class="tape-date"></b><i class="tape-band"></i>`),
      document.body.appendChild(T)),
    (T.querySelector(`.tape-play`).textContent = r),
    (T.querySelector(`.tape-date`).textContent = a),
    clearTimeout(E),
    D?.(),
    T.classList.remove(`on`),
    T.offsetWidth,
    T.classList.add(`on`),
    new Promise((e) => {
      ((D = e),
        (E = setTimeout(() => {
          (T.classList.remove(`on`),
            (E = setTimeout(() => {
              ((D = null), e());
            }, 600)));
        }, t)));
    })
  );
}
export {
  c as a,
  d as c,
  i as d,
  h as f,
  S as h,
  l as i,
  o as l,
  g as m,
  w as n,
  a as o,
  C as p,
  s as r,
  u as s,
  O as t,
  p as u,
};
