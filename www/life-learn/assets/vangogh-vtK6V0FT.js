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
import {
  $r as e,
  A as t,
  E as n,
  Fr as r,
  Hn as i,
  Ja as a,
  L as o,
  Li as s,
  Lt as c,
  Ma as l,
  O as u,
  Qa as d,
  Qi as f,
  Rn as p,
  U as m,
  Ur as h,
  Wi as g,
  Wr as _,
  ar as v,
  bt as y,
  ct as b,
  do as x,
  dt as S,
  ea as C,
  io as w,
  ir as T,
  j as E,
  jr as D,
  jt as O,
  kr as k,
  mr as A,
  no as j,
  or as M,
  qt as ee,
  ro as N,
  rr as P,
  ta as te,
  tr as F,
} from "./three.core-DtjtRha-.js";
import { t as I } from "./gsap-CvDoa17S.js";
import { l as ne, n as re } from "./assets-p2qy6QaX.js";
import { t as ie } from "./preload-helper-B4-B-RAC.js";
import { r as L } from "./stamp-C8irYyoR.js";
import { a as R } from "./visits-C_j5CG_Y.js";
import { w as ae, y as z } from "./journey-BS70xIEy.js";
import { t as oe } from "./room-zvqq_5d-.js";
var se = `
vec3 vgRot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
vec4 vgQuat(vec3 x, vec3 y, vec3 z) {
  float tr = x.x + y.y + z.z;
  vec4 q;
  if (tr > 0.0) { float s = sqrt(tr + 1.0) * 2.0; q = vec4((y.z - z.y) / s, (z.x - x.z) / s, (x.y - y.x) / s, 0.25 * s); }
  else if (x.x > y.y && x.x > z.z) { float s = sqrt(1.0 + x.x - y.y - z.z) * 2.0; q = vec4(0.25 * s, (y.x + x.y) / s, (z.x + x.z) / s, (y.z - z.y) / s); }
  else if (y.y > z.z) { float s = sqrt(1.0 + y.y - x.x - z.z) * 2.0; q = vec4((y.x + x.y) / s, 0.25 * s, (z.y + y.z) / s, (z.x - x.z) / s); }
  else { float s = sqrt(1.0 + z.z - x.x - y.y) * 2.0; q = vec4((z.x + x.z) / s, (z.y + y.z) / s, 0.25 * s, (x.y - y.x) / s); }
  return normalize(q);
}
float vgHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
vec4 vgField(sampler2DArray t, vec3 uvw, float depth) {
  float z = clamp(uvw.z * depth - 0.5, 0.0, depth - 1.0);
  float z0 = floor(z);
  return mix(texture(t, vec3(uvw.xy, z0)), texture(t, vec3(uvw.xy, min(z0 + 1.0, depth - 1.0))), z - z0);
}
float vgInBox(vec3 p, vec3 lo, vec3 hi) { vec3 d = max(lo - p, p - hi); return 1.0 - smoothstep(-0.04, 0.06, max(d.x, max(d.y, d.z))); }
`,
  B = (e) => Number(e).toFixed(3),
  ce = 99,
  V = (e, t, n) => `
${t} = ${e.gsplat};
vec3 vgP = ${t}.center;
vec3 vgUvw = (vgP - ${e.boxMin}) / ${e.boxSize};
// Past the cut (z) the room is built (bedroom.js): its splats fade out over the overlap.
if (${e.cut}.x > ${e.cut}.y && all(greaterThan(vgUvw, vec3(0.0))) && all(lessThan(vgUvw, vec3(1.0)))) ${t}.rgba.a *= smoothstep(${e.cut}.y, ${e.cut}.x, vgP.z);
if (${e.on} > 0.5 && all(greaterThan(vgUvw, vec3(0.0))) && all(lessThan(vgUvw, vec3(1.0)))) {
  float vgBack = 0.0;
  // The southern sun let in at the window: warmer and brighter toward it, and the shadows going blue and violet.
  if (${e.sun} > 0.001) {
    float vgK = ${e.sun} * (0.3 + 0.7 * exp(-distance(vgP, ${e.sunC}) * 0.32));
    vec3 vgS0 = ${t}.rgba.rgb;
    float vgL0 = dot(vgS0, vec3(0.299, 0.587, 0.114));
    // Gentle: the light itself (the patch on the tiles, the air) is laid over the room by light.js.
    vgS0 = vgS0 * (1.0 + 0.06 * vgK) + vec3(0.045, 0.028, 0.0) * vgK;
    vgS0 = mix(vgS0, vgS0 * vec3(0.84, 0.9, 1.2), vgK * (1.0 - smoothstep(0.12, 0.42, vgL0)));
    ${t}.rgba.rgb = clamp(vgS0, 0.0, 1.0);
  }
  // The thing within reach lights up.
  if (${e.glow} > 0.001) {
    float vgG = ${e.glow} * (1.0 - smoothstep(${e.glowR} * 0.4, ${e.glowR}, distance(vgP, ${e.glowC})));
    ${t}.rgba.rgb = clamp(${t}.rgba.rgb * (1.0 + 0.28 * vgG) + vec3(0.2, 0.15, 0.05) * vgG, 0.0, 1.0);
  }
  vec3 vgS = ${t}.scales;
  vec4 vgQ = ${t}.quaternion;
  vec3 vgN = vgS.x < vgS.y ? (vgS.x < vgS.z ? vgRot(vgQ, vec3(1.0, 0.0, 0.0)) : vgRot(vgQ, vec3(0.0, 0.0, 1.0))) : (vgS.y < vgS.z ? vgRot(vgQ, vec3(0.0, 1.0, 0.0)) : vgRot(vgQ, vec3(0.0, 0.0, 1.0)));
  vec3 vgC = ${t}.rgba.rgb;
  vec4 vgPaint = vgField(${e.paint}, vgUvw, ${e.depth});
  float vgA = clamp(vgPaint.a * ${e.strength}, 0.0, 1.0);
  vec3 vgPig = vgPaint.rgb / max(vgPaint.a, 0.004);
  vec4 vgDirT = vgField(${e.dir}, vgUvw, ${e.depth});
  float vgTh = max(vgDirT.a * ${e.strength}, ${e.base});
  vec3 vgDir = vgDirT.xyz * 2.0 - 1.0;
  // How the paint takes a splat: how far toward the paint's colour, how far its light and shade are drawn toward the
  // paint's own value, how flat its value planes.
  float vgTint = ${e.tint}, vgPull = 0.35, vgPlanesK = ${e.planes};
  // The things the room knows by name, in order; where two overlap the later one wins (the visitor's chair is last).
  // A named thing is recoloured and keeps its drawing; only the running edge of the paint swells the splats into
  // strokes as it passes, like a loaded brush going over.
${n.map(
  (t, n) => `  {
    vec4 vgF = ${e[`fo${n}`]};
    float vgZ = clamp(${t.glsl}, 0.0, 1.0) * ${e[`fa${n}`]};
    float vgD = distance(vgP, vgF.xyz);
    float vgW = vgZ * (1.0 - smoothstep(vgF.w - 0.7, vgF.w, vgD));
    vgBack = max(vgBack, vgW);
    if (vgW > 0.003 && vgW >= vgA - 0.02) { vgA = vgW; vgPig = ${e[`fc${n}`]}; vgDir = vec3(0.0); vgTint = ${B(t.tint ?? 0.82)}; vgPull = ${B(t.pull ?? 0.25)}; vgPlanesK = ${B(t.planes ?? 0.3)}; vgTh = max(vgTh, vgW * ${B(t.thick ?? 0)}); }
    vgTh = max(vgTh, vgZ * smoothstep(vgF.w - 1.1, vgF.w - 0.55, vgD) * (1.0 - smoothstep(vgF.w - 0.55, vgF.w, vgD)) * ${B(t.swell ?? 0.9)});
  }`,
).join(`
`)}
  if ((vgA > 0.003 || vgTh > 0.003) && ${t}.rgba.a > 0.06) {
    vec3 vgT = vgDir - vgN * dot(vgDir, vgN);
    float vgTl = length(vgT);
    // No brush direction laid here: upright on the walls, along the boards on the floor (toward the window).
    vec3 vgGrain = abs(vgN.y) > 0.7 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
    vec3 vgT2 = vgGrain - vgN * dot(vgGrain, vgN);
    vgT = vgTl > 0.05 ? vgT / vgTl : normalize(length(vgT2) > 0.05 ? vgT2 : cross(vgN, vec3(1.0, 0.0, 0.0)));
    vec3 vgB = cross(vgN, vgT);
    float vgV = dot(vgP, vgB) / ${e.width};
    float vgRow = floor(vgV);
    float vgU = dot(vgP, vgT) / ${e.length} + vgHash(vec2(vgRow, 3.1)) * 7.0;
    float vgCol = floor(vgU);
    float vgId = vgHash(vec2(vgRow, vgCol));
    float vgId2 = vgHash(vec2(vgCol + 11.0, vgRow - 5.0));
    float vgLum = dot(vgC, vec3(0.299, 0.587, 0.114));
    // Value planes, the way a painter lays them: the light and shade of the room in a few steps, the steps shifted a
    // little from stroke to stroke so their edges break along the strokes.
    float vgLumQ = (floor(vgLum * 4.0 + (vgId - 0.5) * 0.9) + 0.5) / 4.0;
    float vgLum0 = vgLum;
    vgLum = mix(vgLum, clamp(vgLumQ, 0.0, 1.0), vgPlanesK);
    // The room's own colours brushed: its light and shade in planes, a ridge and a little variation stroke to stroke.
    vec3 vgOwn = vgC * clamp(vgLum / max(vgLum0, 0.02), 0.6, 1.5) * (0.94 + 0.12 * vgId) * (0.93 + 0.12 * sin(fract(vgV) * 3.14159));
    vgC = mix(vgC, clamp(vgOwn, 0.0, 1.0), ${e.base} * 0.7);
    // The paint's own scale of value: a deep shade of it, the paint itself at its own value, then on toward the light.
    // The splat keeps its place on that scale, so outlines stay dark and lit planes light: the drawing survives.
    float vgLp = clamp(dot(vgPig, vec3(0.299, 0.587, 0.114)), 0.06, 0.94);
    float vgL = mix(vgLum, vgLp, vgPull);
    vec3 vgShade = vgPig * 0.3 + vec3(0.04, 0.05, 0.12);
    vec3 vgHi = mix(vgPig, vec3(1.0, 0.97, 0.88), 0.82);
    vec3 vgTarget = vgL < vgLp ? mix(vgShade, vgPig, vgL / vgLp) : mix(vgPig, vgHi, (vgL - vgLp) / (1.0 - vgLp));
    // Broken colour: now and then a stroke a little lighter, or leaning toward the paint's neighbour on the wheel.
    vgTarget = vgId2 > 0.7 ? mix(vgTarget, vec3(1.0, 0.97, 0.86), 0.12) : vgTarget;
    vgTarget = vgId2 < 0.08 ? mix(vgTarget, vgTarget.brg * 0.85 + 0.1, 0.25) : vgTarget;
    vec3 vgOut = mix(vgC, vgTarget, vgTint);
    float vgShape = smoothstep(0.1, 0.7, vgTh) * step(0.18, ${t}.rgba.a);
    // Stroke to stroke a little lighter or darker; where the paint is thick, each stroke a ridge lit along one side.
    vgOut *= 1.0 + (vgId - 0.5) * (0.06 + 0.14 * vgShape);
    vgOut *= 1.0 + vgShape * (0.2 * sin(fract(vgV) * 3.14159) - 0.12 + 0.05 * cos(fract(vgU) * 6.28318));
    float vgL2 = dot(vgOut, vec3(0.299, 0.587, 0.114));
    vgOut = mix(vec3(vgL2), vgOut, 1.12);
    ${t}.rgba.rgb = mix(vgC, clamp(vgOut, 0.0, 1.0), vgA);
    if (vgShape > 0.0) {
      float vgThin = min(vgS.x, min(vgS.y, vgS.z));
      float vgSize = clamp(sqrt((vgS.x * vgS.y * vgS.z) / max(vgThin, 1e-5)), 0.004, 0.1);
      // A dab of the stroke it falls in: neighbours in one stroke share its colour and merge into one flat mark.
      vec3 vgDash = vec3(max(vgSize * 1.2, ${e.length} * (0.42 + 0.25 * vgId)), max(vgSize * ${e.bristle}, 0.0025), vgThin);
      ${t}.quaternion = vgQuat(vgT, vgB, vgN);
      ${t}.scales = mix(vec3(vgSize, vgSize, vgThin), vgDash, vgShape);
      ${t}.rgba.a = mix(${t}.rgba.a, max(${t}.rgba.a, 0.9), vgShape);
    }
  }
  // Before his letter the room is his drawing of it: brown ink on cream, by the splat's own value; a named thing's
  // paint, running out over it, brings its colour back.
  if (${e.drain} > 0.001) {
    float vgDl = dot(${t}.rgba.rgb, vec3(0.299, 0.587, 0.114));
    vec3 vgInk = mix(vec3(0.29, 0.2, 0.13), vec3(0.93, 0.89, 0.8), smoothstep(0.1, 0.62, vgDl));
    ${t}.rgba.rgb = mix(${t}.rgba.rgb, vgInk, ${e.drain} * (1.0 - vgBack));
  }
}
`;
async function le({ world: t, box: n, voxel: r = 0.08, fills: i = [], helpers: o = `` }) {
  let { dyno: s } = await ie(
      async () => {
        let { dyno: e } = await import(`./spark.module-BLkI3pTG.js`);
        return { dyno: e };
      },
      __vite__mapDeps([0, 1, 2, 3]),
    ),
    c = new N(n.minX, n.minY, n.minZ),
    l = new N(n.maxX - n.minX, n.maxY - n.minY, n.maxZ - n.minZ),
    u = Math.ceil(l.x / r),
    d = Math.ceil(l.y / r),
    f = Math.ceil(l.z / r);
  l.set(u * r, d * r, f * r);
  let m = u * d,
    h = new Uint8Array(m * f * 4),
    g = new Uint8Array(m * f * 4).fill(128);
  for (let e = 3; e < g.length; e += 4) g[e] = 0;
  let _ = new Float32Array(m * f),
    v = (t) => {
      let n = new S(t, u, d, f);
      return (
        (n.format = e),
        (n.type = a),
        (n.minFilter = n.magFilter = p),
        (n.generateMipmaps = !1),
        (n.unpackAlignment = 1),
        (n.needsUpdate = !0),
        n
      );
    },
    y = v(h),
    b = v(g),
    x = {
      paint: s.dynoSampler2DArray(y, `vgPaintTex`),
      dir: s.dynoSampler2DArray(b, `vgDirTex`),
      boxMin: s.dynoVec3(c.clone(), `vgBoxMin`),
      boxSize: s.dynoVec3(l.clone(), `vgBoxSize`),
      depth: s.dynoFloat(f, `vgDepth`),
      strength: s.dynoFloat(1, `vgStrength`),
      tint: s.dynoFloat(0.72, `vgTint`),
      length: s.dynoFloat(0.12, `vgLength`),
      width: s.dynoFloat(0.034, `vgWidth`),
      planes: s.dynoFloat(0.85, `vgPlanes`),
      bristle: s.dynoFloat(0.7, `vgBristle`),
      base: s.dynoFloat(0, `vgBase`),
      sun: s.dynoFloat(0, `vgSun`),
      sunC: s.dynoVec3(new N(), `vgSunC`),
      glow: s.dynoFloat(0, `vgGlow`),
      glowC: s.dynoVec3(new N(), `vgGlowC`),
      glowR: s.dynoFloat(0.5, `vgGlowR`),
      on: s.dynoFloat(1, `vgOn`),
      cut: s.dynoVec2(new j(0, 0), `vgCut`),
      drain: s.dynoFloat(0, `vgDrain`),
    },
    C = {
      gsplat: s.Gsplat,
      paint: `sampler2DArray`,
      dir: `sampler2DArray`,
      boxMin: `vec3`,
      boxSize: `vec3`,
      depth: `float`,
      strength: `float`,
      tint: `float`,
      length: `float`,
      width: `float`,
      planes: `float`,
      bristle: `float`,
      base: `float`,
      sun: `float`,
      sunC: `vec3`,
      glow: `float`,
      glowC: `vec3`,
      glowR: `float`,
      on: `float`,
      cut: `vec2`,
      drain: `float`,
    };
  i.forEach((e, t) => {
    ((x[`fo${t}`] = s.dynoVec4(new w(0, 0, 0, 0), `vgFillAt${t}`)),
      (x[`fa${t}`] = s.dynoFloat(0, `vgFillOn${t}`)),
      (x[`fc${t}`] = s.dynoVec3(new N(1, 1, 1), `vgFillColor${t}`)),
      Object.assign(C, { [`fo${t}`]: `vec4`, [`fa${t}`]: `float`, [`fc${t}`]: `vec3` }));
  });
  let T = s.dynoBlock({ gsplat: s.Gsplat }, { gsplat: s.Gsplat }, ({ gsplat: e }) => ({
    gsplat: new s.Dyno({
      inTypes: C,
      outTypes: { gsplat: s.Gsplat },
      inputs: { gsplat: e, ...x },
      globals: () => [se, o],
      statements: ({ inputs: e, outputs: t }) => s.unindentLines(V(e, t.gsplat, i)),
    }).outputs.gsplat,
  }));
  ((t.splat.worldModifier = T), t.splat.updateGenerator());
  let E = new Set(),
    D = (e, t, n) => [Math.floor((e - c.x) / r), Math.floor((t - c.y) / r), Math.floor((n - c.z) / r)],
    O = () => t.splat.updateVersion();
  function k(e, t, n, i = 0.25, a = 1) {
    let [o, s, l] = D(e.x, e.y, e.z),
      p = Math.ceil(i / r),
      v = t.clone();
    (v.lengthSq() < 1e-8 && v.set(1, 0, 0), v.normalize(), (v.y < 0 || (v.y === 0 && v.x < 0)) && v.negate());
    for (let t = Math.max(0, l - p); t <= Math.min(f - 1, l + p); t += 1) {
      let l = !1;
      for (let f = Math.max(0, s - p); f <= Math.min(d - 1, s + p); f += 1)
        for (let s = Math.max(0, o - p); s <= Math.min(u - 1, o + p); s += 1) {
          let o = c.x + (s + 0.5) * r - e.x,
            d = c.y + (f + 0.5) * r - e.y,
            p = c.z + (t + 0.5) * r - e.z,
            y = Math.sqrt(o * o + d * d + p * p) / i;
          if (y >= 1) continue;
          let b = a * (1 - y * y) * (1 - y * y),
            x = t * m + f * u + s,
            S = x * 4,
            C = _[x],
            w = Math.min(1, C + b * (1 - C) * 1.6),
            T = C > 0 ? Math.min(1, b * 1.3) : 1,
            E = h[S] / 255 / Math.max(C, 0.001),
            D = h[S + 1] / 255 / Math.max(C, 0.001),
            O = h[S + 2] / 255 / Math.max(C, 0.001),
            k = C > 0 ? E + (n.r - E) * T : n.r,
            A = C > 0 ? D + (n.g - D) * T : n.g,
            j = C > 0 ? O + (n.b - O) * T : n.b;
          ((_[x] = w),
            (h[S] = Math.round(Math.min(1, k) * w * 255)),
            (h[S + 1] = Math.round(Math.min(1, A) * w * 255)),
            (h[S + 2] = Math.round(Math.min(1, j) * w * 255)),
            (h[S + 3] = Math.round(w * 255)),
            (T > 0.2 || C === 0) &&
              ((g[S] = Math.round((v.x * 0.5 + 0.5) * 255)),
              (g[S + 1] = Math.round((v.y * 0.5 + 0.5) * 255)),
              (g[S + 2] = Math.round((v.z * 0.5 + 0.5) * 255))),
            (g[S + 3] = Math.max(g[S + 3], Math.round(w * 255))),
            (l = !0));
        }
      l && E.add(t);
    }
  }
  function A() {
    if (!E.size) return !1;
    for (let e of E) (y.addLayerUpdate(e), b.addLayerUpdate(e));
    return (E.clear(), (y.needsUpdate = !0), (b.needsUpdate = !0), O(), !0);
  }
  function M(e, { from: t, color: n, reach: r = 9, speed: i = 4.2, amount: a = 1 }) {
    (x[`fc${e}`].value.set(n.r, n.g, n.b), x[`fo${e}`].value.set(t.x, t.y, t.z, 0));
    let o = { r: 0, a: x[`fa${e}`].value };
    return new Promise((t) =>
      I.to(o, {
        r,
        a,
        duration: r / i,
        ease: `power1.out`,
        onUpdate: () => {
          ((x[`fo${e}`].value.w = o.r), (x[`fa${e}`].value = o.a), O());
        },
        onComplete: () => {
          ((x[`fo${e}`].value.w = ce), O(), t());
        },
      }),
    );
  }
  return {
    uniforms: x,
    voxel: r,
    min: c,
    size: l,
    dims: [u, d, f],
    dab: k,
    flush: A,
    fill: M,
    fillAll(e) {
      (e.forEach((e, t) => {
        e && (x[`fc${t}`].value.set(e.r, e.g, e.b), x[`fo${t}`].value.set(0, 1.5, -3, ce), (x[`fa${t}`].value = 1));
      }),
        O());
    },
    set(e, t) {
      (x[e].value?.isVector2 || x[e].value?.isVector3 || x[e].value?.isVector4 ? x[e].value.copy(t) : (x[e].value = t),
        O());
    },
    clearFills() {
      (i.forEach((e, t) => {
        ((x[`fa${t}`].value = 0), (x[`fo${t}`].value.w = 0));
      }),
        O());
    },
    get(e) {
      return x[e].value;
    },
    dispose() {
      ((t.splat.worldModifier = void 0), t.splat.updateGenerator(), y.dispose(), b.dispose());
    },
  };
}
var H = 16;
function ue(e) {
  let t = 1e-4;
  return e.map((e) => {
    let n = e.length / 9,
      r = Math.ceil(n / H),
      i = new Float32Array((r + 1) * 6);
    i.set([1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0]);
    for (let a = 0; a < r; a += 1) {
      let r = (a + 1) * 6;
      i.set([1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0], r);
      for (let o = a * H * 9, s = Math.min(n, (a + 1) * H) * 9; o < s; o += 3)
        for (let n = 0; n < 3; n += 1)
          ((i[r + n] = Math.min(i[r + n], e[o + n] - t)), (i[r + 3 + n] = Math.max(i[r + 3 + n], e[o + n] + t)));
      for (let e = 0; e < 3; e += 1) ((i[e] = Math.min(i[e], i[r + e])), (i[3 + e] = Math.max(i[3 + e], i[r + 3 + e])));
    }
    return { p: e, n, box: i };
  });
}
function de(e, t, n, r, i, a, o, s, c) {
  let l = (e[t] - n) * a,
    u = (e[t + 3] - n) * a,
    d = Math.min(l, u),
    f = Math.max(l, u);
  return (
    (l = (e[t + 1] - r) * o),
    (u = (e[t + 4] - r) * o),
    (d = Math.max(d, Math.min(l, u))),
    (f = Math.min(f, Math.max(l, u))),
    (l = (e[t + 2] - i) * s),
    (u = (e[t + 5] - i) * s),
    (d = Math.max(d, Math.min(l, u), 0)),
    (f = Math.min(f, Math.max(l, u), c)),
    d <= f ? d : 1 / 0
  );
}
function fe(e, t, n, r, i, a, o, s, c) {
  let l = e[t],
    u = e[t + 1],
    d = e[t + 2],
    f = e[t + 3] - l,
    p = e[t + 4] - u,
    m = e[t + 5] - d,
    h = e[t + 6] - l,
    g = e[t + 7] - u,
    _ = e[t + 8] - d,
    v = p * _ - m * g,
    y = m * h - f * _,
    b = f * g - p * h,
    x = a * v + o * y + s * b,
    S = 1;
  if (x > 0) {
    if (c) return -1;
  } else if (x < 0) ((S = -1), (x = -x));
  else return -1;
  let C = n - l,
    w = r - u,
    T = i - d,
    E = S * (a * (w * _ - T * g) + o * (T * h - C * _) + s * (C * g - w * h));
  if (E < 0) return -1;
  let D = S * (a * (p * T - m * w) + o * (m * C - f * T) + s * (f * w - p * C));
  if (D < 0 || E + D > x) return -1;
  let O = -S * (C * v + w * y + T * b);
  return O < 0 ? -1 : O / x;
}
function pe(e, t, n, r, i) {
  let a = Math.hypot(n.x, n.y, n.z) || 1,
    o = n.x / a,
    s = n.y / a,
    c = n.z / a,
    l = t.x,
    u = t.y,
    d = t.z,
    f = 1 / (o || 1e-12),
    p = 1 / (s || 1e-12),
    m = 1 / (c || 1e-12),
    h = 1 / 0;
  for (let { p: t, n, box: a } of e)
    if (!(de(a, 0, l, u, d, f, p, m, r) >= h)) {
      for (let e = 0, g = 6; e * H < n; e += 1, g += 6)
        if (!(de(a, g, l, u, d, f, p, m, r) >= h))
          for (let a = e * H * 9, f = Math.min(n, (e + 1) * H) * 9; a < f; a += 9) {
            let e = fe(t, a, l, u, d, o, s, c, i);
            e >= 0 && e <= r && e < h && (h = e);
          }
    }
  return h === 1 / 0 ? null : h;
}
var me = new N(0.109, -0.407, 0.907).normalize(),
  he = [`walls`, `floor`, `wood`, `blanket`, `window`, `chair`],
  ge = { walls: 0, ceiling: 0, floor: 1, wood: 2, seat: 2, table: 2, things: 2, blanket: 3, pillow: 3 },
  _e = {
    walls: { rect: [0.405, 0.8, 0.432, 0.97], tile: [0.17, 0.85] },
    floor: { rect: [0.22, 0.02, 0.45, 0.22], tile: [1, 1.15] },
    wood: { rect: [0.62, 0.33, 0.86, 0.6], tile: [0.8, 0.65] },
    blanket: { rect: [0.5, 0.48, 0.54, 0.58], tile: [0.36, 0.5] },
    pillow: { rect: [0.47, 0.63, 0.53, 0.71], tile: [0.4, 0.3] },
    seat: { rect: [0.04, 0.38, 0.15, 0.44], tile: [0.34, 0.24] },
    table: { rect: [0.2, 0.627, 0.3, 0.645], tile: [0.5, 0.35] },
    ceiling: { rect: [0.405, 0.8, 0.432, 0.97], tile: [0.17, 0.85] },
    things: { rect: [0.2, 0.655, 0.245, 0.69], tile: [0.12, 0.1] },
  },
  ve = Object.keys(_e),
  ye = ve.length,
  be = [0.243, 0.7, 0.398, 1.01],
  xe = `
attribute float aPatch, aThing, aChair;
attribute vec2 aAtlas;
varying vec3 vWorld, vNormal;
varying vec2 vUv, vAtlas;
varying float vPatch, vThing, vChair;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz; vNormal = normalize(mat3(modelMatrix) * normal); vUv = uv; vAtlas = aAtlas;
  vPatch = aPatch; vThing = aThing; vChair = aChair;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
  Se = `
precision highp float;
uniform sampler2D uPaint, uSketch, uDepth, uMask, uShell, uShellSketch, uDoorPaint, uDoorSketch, uStrokes;
uniform float uDebug;
uniform mat4 uProjVP;
uniform vec3 uEye;
uniform vec2 uDepthTexel;
uniform float uNear, uFar, uDrain, uSun, uGlow, uGlowR, uChairOn, uTime, uGrainOn;
uniform vec3 uSunC, uGlowC, uChairColor;
uniform vec4 uChairAt;
uniform vec4 uRev[6];
uniform float uRevOn[6];
uniform vec4 uPatchRect[9];
uniform vec2 uPatchTile[9];
uniform vec4 uWindow;
varying vec3 vWorld, vNormal;
varying vec2 vUv, vAtlas;
varying float vPatch, vThing, vChair;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
float linZ(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
vec3 toDisplay(vec3 c) { return pow(max(c, 0.0), vec3(1.0 / 2.2)); }
vec3 toLinear(vec3 c) { return pow(max(c, 0.0), vec3(2.2)); }
float mirror(float x) { return 1.0 - abs(fract(x * 0.5) * 2.0 - 1.0); }

void main() {
  vec3 n = normalize(vNormal);
  int pk = int(vPatch + 0.5);
  bool shell = pk == 0 || pk == 1 || pk == 7;
  bool nearHalf = pk == ${ye};
  // Where his eye saw this point on the canvas, and whether it saw it (the first surface along its ray). The door's
  // half lies outside his canvas, behind and beside him.
  vec4 pc = uProjVP * vec4(vWorld, 1.0);
  vec3 ndc = pc.xyz / pc.w;
  vec2 puv = ndc.xy * 0.5 + 0.5;
  float facing = dot(n, normalize(uEye - vWorld));
  float seen = 0.0;
  if (!nearHalf && pc.w > 0.0 && facing > 0.0 && puv.x > 0.0 && puv.x < 1.0 && puv.y > 0.0 && puv.y < 1.0) {
    float zf = linZ(ndc.z * 0.5 + 0.5);
    float bias = 0.015 + 0.004 * zf / max(facing, 0.15);
    for (int i = 0; i < 4; i++) {
      vec2 o = (vec2(float(i / 2), float(i - (i / 2) * 2)) - 0.5) * uDepthTexel;
      seen += step(zf, linZ(texture2D(uDepth, puv + o).r) + bias);
    }
    seen *= 0.25;
    // Seen from anywhere but his place: a surface his eye only grazed is stretched thin by the projection, and where
    // the built thing and the painted one do not quite coincide, a wall would carry chair paint (or a chair the
    // wall's). There his patch for the surface takes over.
    // The floor, the walls and the ceiling have their own picture for that (the painting where it shows them, carried
    // on behind the furniture and past the canvas: bedroom-shell.py), so away from his place they take it whole.
    float away = smoothstep(0.4, 1.6, distance(cameraPosition, uEye));
    if (shell) seen *= 1.0 - away;
    else {
      float wrong = 1.0 - texture2D(uMask, puv).r;
      seen *= 1.0 - away * (1.0 - smoothstep(0.25, 0.5, facing));
      seen *= 1.0 - away * smoothstep(0.3, 0.7, wrong);
      // The blanket where he painted the footboard over its foot (seen from the head of the bed, two spots of butter
      // yellow on the scarlet): only his scarlet is the blanket's.
      if (pk == 3) {
        vec3 pp = texture2D(uPaint, puv).rgb;
        seen *= 1.0 - away * smoothstep(0.28, 0.45, pp.g / max(pp.r, 0.001));
      }
    }
    // The canvas's own edges (but its foot, where the splat takes over) are feathered into the patch.
    seen *= smoothstep(0.0, 0.025, min(min(puv.x, 1.0 - puv.x), 1.0 - puv.y));
  }
  if (uDebug > 1.5) { gl_FragColor = vec4(vec3(seen, float(pk) / 7.0, 0.0), 1.0); return; }
  if (uDebug > 0.5) seen = 0.0;

  vec3 patchPaint, patchSketch;
  // His brush over the door's half (strokes.jpg: the grain of his own paint, its light and shade), at about the size it
  // has on his far wall: upright on the walls and what stands in the room, the floor's long strokes along its boards.
  // The shell by the cut carries that half's paint (bedroom-shell.py), so its brush too, fading into his own.
  float grain = 0.0;
  if (uGrainOn > 0.5 && (nearHalf || (shell && vWorld.z > -4.3))) {
    bool level = abs(n.y) > 0.7;
    vec3 sg = texture2D(uStrokes, level ? vUv * vec2(1.2, 0.5) : vUv * 1.2).rgb * 6.0 - 3.0;
    grain = (level ? sg.g : sg.r) * (nearHalf ? 1.0 : smoothstep(-4.3, -3.1, vWorld.z));
  }
  if (nearHalf) {
    patchPaint = texture2D(uDoorPaint, vAtlas).rgb * (1.0 + 0.055 * grain);
    patchSketch = texture2D(uDoorSketch, vAtlas).rgb * (1.0 + 0.02 * grain);
  } else if (shell) {
    patchPaint = texture2D(uShell, vAtlas).rgb * (1.0 + 0.055 * grain);
    patchSketch = texture2D(uShellSketch, vAtlas).rgb;
  } else {
    // His patch for this kind of surface, tiled (mirrored, so it has no seams) over the surface in metres.
    vec4 rect = uPatchRect[pk];
    vec2 tile = uPatchTile[pk];
    vec2 fuv = rect.xy + vec2(mirror(vUv.x / tile.x), mirror(vUv.y / tile.y)) * rect.zw;
    patchPaint = texture2D(uPaint, fuv).rgb;
    patchSketch = texture2D(uSketch, fuv).rgb;
    // Faces his light never fell on directly sit a little in shadow, the undersides most.
    float shade = (0.8 + 0.2 * (n.y * 0.5 + 0.5)) * (0.9 + 0.1 * max(dot(n, -normalize(vec3(${me.x.toFixed(3)}, ${me.y.toFixed(3)}, ${me.z.toFixed(3)}))), 0.0));
    patchPaint *= shade; patchSketch *= mix(1.0, shade, 0.5);
  }
  vec3 paintC = mix(patchPaint, texture2D(uPaint, puv).rgb, seen);
  vec3 sketchC = mix(patchSketch, texture2D(uSketch, puv).rgb, seen);

  // Which thing of his letter this is: the window is the green casement painted on the back wall.
  int th = int(vThing + 0.5);
  if (th == 0 && seen > 0.5 && puv.x > uWindow.x && puv.x < uWindow.z && puv.y > uWindow.y && puv.y < uWindow.w) th = 4;
  // The paint coming back: a stroke running out from where it was touched, ragged along the surface's own grain.
  vec4 rv = uRev[0]; float on = uRevOn[0];
  if (th == 1) { rv = uRev[1]; on = uRevOn[1]; } else if (th == 2) { rv = uRev[2]; on = uRevOn[2]; } else if (th == 3) { rv = uRev[3]; on = uRevOn[3]; } else if (th == 4) { rv = uRev[4]; on = uRevOn[4]; }
  vec2 g = abs(n.y) > 0.7 ? vWorld.xz * vec2(2.5, 9.0) : vec2(dot(vWorld.xz, vec2(n.z, -n.x)) * 9.0, vWorld.y * 2.2);
  float ragged = noise(g) * 0.65 + noise(g * 2.7 + 5.0) * 0.35;
  float edge = rv.w - distance(vWorld, rv.xyz) + (ragged - 0.5) * 0.9;
  float back = on * smoothstep(0.0, 0.12, edge);
  float wet = on * smoothstep(0.0, 0.06, edge) * (1.0 - smoothstep(0.06, 0.45, edge)) * (1.0 - step(50.0, rv.w));
  vec3 col = mix(paintC, sketchC, uDrain * (1.0 - back));

  vec3 d = toDisplay(col);
  // A loaded brush at the paint's running edge: a little richer and lighter as it passes.
  float dl = dot(d, vec3(0.299, 0.587, 0.114));
  d = mix(d, mix(vec3(dl), d, 1.35) * 1.06, wet * 0.8);
  // The chair he keeps for a friend, in the visitor's colour: its light and shade carried onto that paint's own scale.
  if (vChair > 0.5 && uChairOn > 0.001) {
    float ce = uChairAt.w - distance(vWorld, uChairAt.xyz) + (ragged - 0.5) * 0.5;
    float k = uChairOn * smoothstep(0.0, 0.1, ce);
    float lum = dot(d, vec3(0.299, 0.587, 0.114));
    float lp = clamp(dot(uChairColor, vec3(0.299, 0.587, 0.114)), 0.06, 0.94);
    float l = mix(lum, lp, 0.45);
    vec3 shadeC = uChairColor * 0.3 + vec3(0.04, 0.05, 0.12), hi = mix(uChairColor, vec3(1.0, 0.97, 0.88), 0.8);
    vec3 target = l < lp ? mix(shadeC, uChairColor, l / lp) : mix(uChairColor, hi, (l - lp) / (1.0 - lp));
    d = mix(d, target, k * 0.88);
  }
  // The southern sun let in at the window (as the splat has it, paint.js): warmer toward it, the shadows bluer.
  if (uSun > 0.001) {
    float sk = uSun * (0.3 + 0.7 * exp(-distance(vWorld, uSunC) * 0.32));
    float l0 = dot(d, vec3(0.299, 0.587, 0.114));
    d = d * (1.0 + 0.06 * sk) + vec3(0.045, 0.028, 0.0) * sk;
    d = mix(d, d * vec3(0.84, 0.9, 1.2), sk * (1.0 - smoothstep(0.12, 0.42, l0)));
  }
  // The thing within reach lights up.
  if (uGlow > 0.001) {
    float gk = uGlow * (1.0 - smoothstep(uGlowR * 0.4, uGlowR, distance(vWorld, uGlowC)));
    d = d * (1.0 + 0.28 * gk) + vec3(0.2, 0.15, 0.05) * gk;
  }
  gl_FragColor = vec4(toLinear(clamp(d, 0.0, 1.0)), 1.0);
  #include <colorspace_fragment>
}`;
async function Ce({ scene: e, renderer: t, quality: n }) {
  let [r, a] = await Promise.all([
      fetch(re(`worlds/vangogh/bedroom.json`)).then((e) => e.json()),
      fetch(re(`worlds/vangogh/near.json`))
        .then((e) => (e.ok ? e.json() : null))
        .catch(() => null),
    ]),
    o = !!n?.strong && !n?.low,
    s = new l(),
    u = (e) =>
      new Promise((t) =>
        s.load(
          re(`worlds/vangogh/${e}`),
          (e) => {
            ((e.colorSpace = f), (e.anisotropy = 8), (e.generateMipmaps = !0), (e.minFilter = i), t(e));
          },
          void 0,
          () => t(null),
        ),
      ),
    p = o ? `4k` : n?.strong ? `3k` : `2k`,
    [h, _, b, S, D, O, A, P] = await Promise.all([
      u(o ? `bedroom-3k.jpg` : `bedroom-2k.jpg`),
      u(o ? `sketch-3k.jpg` : `sketch-2k.jpg`),
      u(`mask.png`),
      u(`shell-${p}.jpg`),
      u(`shell-sketch.jpg`),
      a ? u(`near-${p}.jpg`) : null,
      a ? u(`near-sketch-1k.jpg`) : null,
      a ? u(`strokes.jpg`) : null,
    ]);
  (b && ((b.colorSpace = ``), (b.anisotropy = 1)), P && ((P.colorSpace = ``), (P.wrapS = P.wrapT = g)));
  let { eye: F, target: ie, canvas: L } = r.projector,
    R = 0.3,
    ae = R / -L.at[2],
    z = new k();
  (z.position.set(...F),
    z.up.set(0, 1, 0),
    z.lookAt(new N(...ie)),
    z.updateMatrixWorld(!0),
    z.projectionMatrix.makePerspective(
      (L.at[0] - L.w / 2) * ae,
      (L.at[0] + L.w / 2) * ae,
      (L.at[1] + L.h / 2) * ae,
      (L.at[1] - L.h / 2) * ae,
      R,
      14,
    ),
    z.projectionMatrixInverse.copy(z.projectionMatrix).invert());
  let oe = new T().multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse),
    se = o ? 2048 : 1024,
    B = Math.round((se * L.h) / L.w),
    ce = new x(se, B, { depthBuffer: !0 });
  ce.depthTexture = new y(se, B, d);
  let V = {
      uPaint: { value: h },
      uSketch: { value: _ },
      uDepth: { value: ce.depthTexture },
      uMask: { value: b },
      uShell: { value: S },
      uShellSketch: { value: D },
      uDoorPaint: { value: O },
      uDoorSketch: { value: A },
      uStrokes: { value: P },
      uGrainOn: { value: +!!P },
      uDebug: { value: Number(new URLSearchParams(location.search).get(`vgdebug`)) || 0 },
      uProjVP: { value: oe },
      uEye: { value: new N(...F) },
      uDepthTexel: { value: new j(1 / se, 1 / B) },
      uNear: { value: R },
      uFar: { value: 14 },
      uDrain: { value: 0 },
      uTime: { value: 0 },
      uSun: { value: 0 },
      uSunC: { value: new N() },
      uGlow: { value: 0 },
      uGlowC: { value: new N() },
      uGlowR: { value: 0.5 },
      uChairOn: { value: 0 },
      uChairColor: { value: new m(1, 1, 1) },
      uChairAt: { value: new w(0, 0, 0, 99) },
      uRev: { value: he.map(() => new w(0, 0, 0, 99)) },
      uRevOn: { value: he.map(() => 1) },
      uPatchRect: {
        value: ve.map((e) => {
          let t = _e[e].rect;
          return new w(t[0], t[1], t[2] - t[0], t[3] - t[1]);
        }),
      },
      uPatchTile: { value: ve.map((e) => new j(..._e[e].tile)) },
      uWindow: { value: new w(...be) },
    },
    le = new te({ uniforms: V, vertexShader: xe, fragmentShader: Se, toneMapped: !1 }),
    H = new ee();
  H.name = `VG_PaintedRoom`;
  let de = [],
    fe = (O && a?.parts) || [];
  for (let e of [...r.parts, ...fe]) {
    let t = new E(),
      n = e.pos.length / 3,
      r = fe.includes(e);
    (t.setAttribute(`position`, new c(e.pos, 3)),
      t.setAttribute(`normal`, new c(e.nrm, 3)),
      t.setAttribute(`uv`, new c(e.uv, 2)),
      t.setAttribute(`aAtlas`, new c(e.auv || new Float32Array(n * 2), 2)));
    let i = +!!e.id.startsWith(`chair-near`);
    (t.setAttribute(`aPatch`, new c(new Float32Array(n).fill(r ? ye : ve.indexOf(e.group)), 1)),
      t.setAttribute(
        `aThing`,
        new c(new Float32Array(n).fill(r ? Math.max(0, he.indexOf(e.thing)) : (ge[e.group] ?? 0)), 1),
      ),
      t.setAttribute(`aChair`, new c(new Float32Array(n).fill(i), 1)),
      de.push(t),
      e.id !== `back` && (e.pos = e.nrm = e.uv = e.auv = null));
  }
  let me = new v(ne(de), le);
  ((me.name = `VG_PaintedRoomDrawn`), (me.receiveShadow = !0), (me.raycast = () => {}), H.add(me), e.add(H));
  let Ce = ue(de.map((e) => e.attributes.position.array)),
    we = () => le.side === 0,
    Te = new C(),
    Ee = new M({ colorWrite: !1, side: 2 }),
    De = () => {
      (Te.add(H), (Te.overrideMaterial = Ee));
      let n = t.getRenderTarget();
      (t.setRenderTarget(ce),
        t.clear(!0, !0, !0),
        t.render(Te, z),
        t.setRenderTarget(n),
        (Te.overrideMaterial = null),
        e.add(H));
    };
  De();
  let U = r.floor,
    W = (e) => U.y0 + U.rise * (U.z0 - e),
    G = fe.length ? a.floor : null,
    Oe = (e) => {
      if (e >= G[G.length - 1][0]) return G[G.length - 1][1];
      for (let t = 1; t < G.length; t += 1)
        if (e <= G[t][0]) {
          let [n, r] = G[t - 1],
            [i, a] = G[t];
          return r + ((e - n) / (i - n)) * (a - r);
        }
      return G[G.length - 1][1];
    },
    ke = (e) => (G && e > U.z0 ? Oe(e) : W(e)),
    Ae = he.map(() => null);
  return {
    group: H,
    model: r,
    material: le,
    uniforms: V,
    marks: r.marks,
    meshZ: r.meshZ,
    near: G ? { marks: a.marks } : null,
    floorY: ke,
    pointOf(e, t) {
      let n = new N(L.at[0] + (e - 0.5) * L.w, L.at[1] + (t - 0.5) * L.h, L.at[2])
          .applyMatrix4(z.matrixWorld)
          .sub(z.position)
          .normalize(),
        r = pe(Ce, z.position, n, 1 / 0, we());
      return r == null ? null : z.position.clone().addScaledVector(n, r);
    },
    hit(e, t, n = 20) {
      return pe(Ce, e, t, n, we());
    },
    drain(e, t = 1.2) {
      return new Promise((n) => I.to(V.uDrain, { value: e, duration: t, ease: `power1.inOut`, onComplete: n }));
    },
    hideAll() {
      he.forEach((e, t) => {
        ((V.uRev.value[t].w = -2), (V.uRevOn.value[t] = 1), Ae[t]?.kill());
      });
    },
    reveal(e, { from: t, speed: n = 3.2, reach: r = 9 }) {
      let i = he.indexOf(e);
      if (i < 0) return Promise.resolve();
      let a = V.uRev.value[i];
      return (
        a.set(t.x, t.y, t.z, -0.5),
        Ae[i]?.kill(),
        new Promise((e) => {
          Ae[i] = I.to(a, {
            w: r,
            duration: r / n,
            ease: `power1.out`,
            onComplete: () => {
              ((a.w = 99), e());
            },
          });
        })
      );
    },
    showAll() {
      he.forEach((e, t) => {
        (Ae[t]?.kill(), (V.uRev.value[t].w = 99));
      });
    },
    paintChair(e, { from: t, speed: n = 1.2, reach: r = 1.4 }) {
      V.uChairColor.value.setRGB(e.r, e.g, e.b);
      let i = V.uChairAt.value;
      return (
        i.set(t.x, t.y, t.z, -0.3),
        (V.uChairOn.value = 1),
        new Promise((e) =>
          I.to(i, {
            w: r,
            duration: r / n,
            ease: `power1.out`,
            onComplete: () => {
              ((i.w = 99), e());
            },
          }),
        )
      );
    },
    redrawDepth: De,
    dispose() {
      (e.remove(H), le.dispose(), ce.dispose(), H.traverse((e) => e.geometry?.dispose()));
    },
  };
}
var we = `#ffe2b5`,
  Te = `#ffe6bf`,
  Ee = new m(`#ffd9b0`),
  De = `#3e3546`,
  U = { x0: -1.42, x1: -0.7, y0: 1.95, y1: 2.75, z: -8.22 },
  W = new N(0.109, -0.407, 0.907).normalize(),
  G = (e, t) => {
    let n = document.createElement(`canvas`);
    ((n.width = n.height = e), t(n.getContext(`2d`), e));
    let r = new o(n);
    return ((r.colorSpace = f), r);
  },
  Oe = (e) => new M({ transparent: !0, depthWrite: !1, blending: 2, toneMapped: !1, ...e });
function ke(e, { heightAt: n, lowEnd: i = !1 }) {
  let a = new ee();
  ((a.renderOrder = 12), e.add(a));
  let o = (e, t, r) => {
      let i = (t - n(e, r)) / -W.y;
      for (let a = 0; a < 4; a += 1) i = (t - n(e + W.x * i, r + W.z * i) - 0.01) / -W.y;
      return new N(e, t, r).addScaledVector(W, i);
    },
    s = G(128, (e, t) => {
      let n = e.createImageData(t, t);
      for (let e = 0; e < t; e += 1)
        for (let r = 0; r < t; r += 1) {
          let i = e / (t - 1),
            a = r / (t - 1),
            o = Math.sin(Math.PI * a) ** 1.6 * (Math.min(1, i / 0.12) * (1 - i) ** 0.7) * 255,
            s = (e * t + r) * 4;
          ((n.data[s] = n.data[s + 1] = n.data[s + 2] = o), (n.data[s + 3] = 255));
        }
      e.putImageData(n, 0, 0);
    });
  s.colorSpace = ``;
  let l = [];
  for (let [e, t] of [0.15, 0.4, 0.65, 0.9].entries()) {
    let n = U.y0 + (U.y1 - U.y0) * t,
      r = (e - 1.5) * 0.06,
      i = new N(U.x0 + r, n, U.z),
      u = new N(U.x1 + r, n, U.z),
      d = o(i.x, i.y, i.z),
      f = o(u.x, u.y, u.z),
      p = new E();
    (p.setAttribute(`position`, new c([...i.toArray(), ...u.toArray(), ...f.toArray(), ...d.toArray()], 3)),
      p.setAttribute(`uv`, new c([0, 0, 1, 0, 1, 1, 0, 1], 2)),
      p.setIndex([0, 1, 2, 0, 2, 3]));
    let m = Oe({ color: we, map: s, opacity: 0.13, side: 2 }),
      h = new v(p, m);
    ((h.renderOrder = 12),
      (h.frustumCulled = !1),
      a.add(h),
      l.push({ m: h, base: 0.13 + (e % 3) * 0.015, period: 6 + e * 0.9, phase: e * 1.7 }));
  }
  let u = G(40, (e, t) => {
      ((e.fillStyle = `#000`), e.fillRect(0, 0, t, t), (e.fillStyle = `#fff`));
      let n = t / 2 - 5 - 1;
      for (let [r, i] of [
        [5, 5],
        [t / 2 + 1, 5],
        [5, t / 2 + 1],
        [t / 2 + 1, t / 2 + 1],
      ])
        e.fillRect(r, i, n, n);
    }),
    d = [
      [U.x0, U.y0],
      [U.x1, U.y0],
      [U.x1, U.y1],
      [U.x0, U.y1],
    ].map(([e, t]) => o(e, t, U.z)),
    f = [],
    p = [],
    h = [];
  for (let e = 0; e <= 8; e += 1)
    for (let t = 0; t <= 8; t += 1) {
      let r = t / 8,
        i = e / 8,
        a = d[0].clone().lerp(d[1], r).lerp(d[3].clone().lerp(d[2], r), i);
      if ((f.push(a.x, n(a.x, a.z) + 0.015, a.z), p.push(r, i), t < 8 && e < 8)) {
        let n = e * 9 + t;
        h.push(n, n + 1, n + 8 + 2, n, n + 8 + 2, n + 8 + 1);
      }
    }
  let g = new E();
  (g.setAttribute(`position`, new c(f, 3)), g.setAttribute(`uv`, new c(p, 2)), g.setIndex(h));
  let _ = new v(g, Oe({ color: `#ffeed8`, map: u, opacity: 0.3 }));
  ((_.renderOrder = 11), (_.frustumCulled = !1), a.add(_));
  let y = G(40, (e, t) => {
      ((e.fillStyle = `#000`), e.fillRect(0, 0, t, t), (e.fillStyle = `#fff`), e.fillRect(5, 5, t - 10, t - 10));
    }),
    b = new v(g, Oe({ color: `#ffeed8`, map: y, opacity: 0 }));
  ((b.renderOrder = 11), (b.frustumCulled = !1), a.add(b));
  let x = G(128, (e, t) => {
      let n = e.createRadialGradient(t / 2, t / 2, 0, t / 2, t / 2, t / 2);
      (n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.55, `rgba(255,255,255,0.45)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (e.fillStyle = n),
        e.fillRect(0, 0, t, t));
    }),
    S = new v(new D(1.7, 2.4), Oe({ color: Te, map: x, opacity: 0.3 }));
  (S.position.set((U.x0 + U.x1) / 2 - 0.05, 2.55, U.z + 0.12), (S.renderOrder = 12), a.add(S));
  let C = i ? 160 : 220,
    w = new Float32Array(C * 3),
    T = new Float32Array(C),
    O = new Float32Array(C * 2);
  for (let e = 0; e < C; e += 1) {
    let t = F.lerp(U.x0, U.x1, Math.random()),
      n = F.lerp(U.y0, U.y1, Math.random());
    (w.set([t, n, U.z], e * 3),
      (T[e] = o(t, n, U.z).distanceTo(new N(t, n, U.z))),
      O.set([Math.random(), 0.35 + Math.random() * 0.65], e * 2));
  }
  let k = new E();
  (k.setAttribute(`position`, new t(w, 3)), k.setAttribute(`reach`, new t(T, 1)), k.setAttribute(`seed`, new t(O, 2)));
  let A = new te({
      transparent: !0,
      depthWrite: !1,
      blending: 2,
      uniforms: {
        uTime: { value: 0 },
        uDir: { value: W.clone() },
        uScale: { value: 1 },
        uK: { value: 0.6 },
        uColor: { value: new m(we) },
      },
      vertexShader: `
      attribute float reach; attribute vec2 seed; uniform float uTime, uScale; uniform vec3 uDir; varying float vA;
      void main() {
        // 2-5 cm/s along the light, with a slow sway across it.
        float s = fract(seed.x + uTime * 0.035 * seed.y / max(reach, 0.5));
        vec3 p = position + uDir * (s * reach);
        p += vec3(sin(uTime * 0.31 + seed.x * 40.0), sin(uTime * 0.23 + seed.y * 30.0), cos(uTime * 0.27 + seed.x * 25.0)) * 0.06;
        vA = smoothstep(0.0, 0.12, s) * smoothstep(1.0, 0.75, s) * (0.6 + 0.4 * sin(uTime * 1.3 + seed.x * 60.0));
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.5 + 1.5 * seed.y) * uScale;
      }`,
      fragmentShader: `
      uniform vec3 uColor; uniform float uK; varying float vA;
      void main() { float d = length(gl_PointCoord - 0.5); gl_FragColor = vec4(uColor * (1.0 - smoothstep(0.2, 0.5, d)) * vA * 0.35 * uK, 1.0); }`,
    }),
    j = new r(k, A);
  ((j.renderOrder = 13), (j.frustumCulled = !1), a.add(j));
  let M = 0.6,
    P = 0;
  return {
    group: a,
    set(e) {
      M = e;
    },
    get k() {
      return M;
    },
    widen(e) {
      P = e;
    },
    update(e, t, n) {
      ((A.uniforms.uTime.value = t), (A.uniforms.uK.value = M), (A.uniforms.uScale.value = n?.getPixelRatio?.() || 1));
      for (let e of l) e.m.material.opacity = e.base * M * (1 + 0.2 * Math.sin((t / e.period) * Math.PI * 2 + e.phase));
      ((_.material.opacity = 0.4 * M * (1 - P)),
        (b.material.opacity = 0.4 * M * P),
        (S.material.opacity = 0.15 + 0.15 * M));
    },
  };
}
function Ae(e, { heightAt: t }) {
  let n = G(128, (e, t) => {
      let n = e.createRadialGradient(t / 2, t / 2, 0, t / 2, t / 2, t / 2);
      (n.addColorStop(0, `rgba(255,255,255,1)`),
        n.addColorStop(0.5, `rgba(255,255,255,0.55)`),
        n.addColorStop(1, `rgba(255,255,255,0)`),
        (e.fillStyle = n),
        e.fillRect(0, 0, t, t));
    }),
    r = new Map(),
    i = (t) => {
      if (!r.has(t)) {
        let i = new v(
          new D(0.7, 0.7),
          new M({ color: De, map: n, transparent: !0, opacity: 0.35, depthWrite: !1, toneMapped: !1 }),
        );
        ((i.rotation.x = -Math.PI / 2), (i.renderOrder = 6), e.add(i), r.set(t, i));
      }
      return r.get(t);
    },
    a = { value: new N() },
    o = { value: Ee.clone().multiplyScalar(0.25) },
    s = new WeakSet(),
    c = (e) =>
      e.traverse((e) => {
        for (let t of [e.material].flat()) {
          if (!t || s.has(t) || !t.isMeshStandardMaterial) continue;
          s.add(t);
          let e = t.onBeforeCompile;
          ((t.onBeforeCompile = (n, r) => {
            (e?.call(t, n, r),
              (n.uniforms.vgRimDir = a),
              (n.uniforms.vgRimColor = o),
              (n.fragmentShader = n.fragmentShader
                .replace(
                  `void main() {`,
                  `uniform vec3 vgRimDir, vgRimColor;
void main() {`,
                )
                .replace(
                  `#include <opaque_fragment>`,
                  `{
            vec3 vgN = normalize(normal), vgV = normalize(vViewPosition);
            float vgF = pow(1.0 - clamp(dot(vgN, vgV), 0.0, 1.0), 3.0);
            outgoingLight += vgRimColor * vgF * clamp(dot(vgN, vgRimDir) * 0.75 + 0.35, 0.0, 1.0) * 2.0;
          }
          #include <opaque_fragment>`,
                )));
          }),
            (t.needsUpdate = !0));
        }
      }),
    l = W.clone().negate();
  return {
    update(e, n) {
      a.value.copy(l).transformDirection(e.matrixWorldInverse);
      for (let e of n) {
        if (!e) continue;
        c(e);
        let n = i(e);
        n.visible = e.visible;
        let r = e.getWorldPosition(new N());
        n.position.set(r.x, t(r.x, r.z) + 0.012, r.z);
      }
    },
  };
}
var je = `vec3(0.29, 0.2, 0.13)`,
  Me = `vec3(0.93, 0.89, 0.8)`,
  Ne = [
    [78, 10, 0.52, 0.085, 9, 0.5],
    [64, -36, 0.47, 0.085, 10, 0.55],
    [62, 40, 0.48, 0.08, 0, 0.55],
    [40, -66, 0.42, 0.085, 4, 0.6],
    [38, 70, 0.44, 0.08, 2, 0.6],
    [48, 4, 0.33, 0.095, 7, 0.7],
    [27, -20, 0.24, 0.09, 6, 0.75],
    [22, 36, 0.27, 0.08, 5, 0.7],
    [8, 62, 0.3, 0.07, 16, 0.2],
    [-22, -50, 0.27, 0.062, 15, 0.1],
    [-6, 88, 0.33, 0.062, 14, 0.15],
    [55, -102, 0.4, 0.075, 1, 0.35],
    [58, 116, 0.4, 0.07, 11, 0.35],
    [70, 56, 0.6, 0.07, 17, 0.3],
    [30, 140, 0.34, 0.07, 3, 0.4],
    [36, -126, 0.36, 0.075, 13, 0.3],
    [50, 24, 0.4, 0.08, 8, 0.6],
  ],
  Pe = [
    [18, -80, 0.2, 0.75, 0],
    [10, 95, 0.18, 0.65, 1],
    [32, 150, 0.16, 0.6, 0],
    [5, -20, 0.16, 0.6, 1],
    [40, -150, 0.15, 0.55, 1],
  ],
  Fe = [
    [0, 0],
    [0.07, 0],
    [0.085, 0.012],
    [0.128, 0.07],
    [0.14, 0.115],
    [0.128, 0.185],
    [0.098, 0.228],
    [0.086, 0.245],
    [0.094, 0.258],
    [0.088, 0.262],
    [0.05, 0.25],
  ],
  Ie = `
attribute vec2 aLocal;
attribute float aKind;
varying vec2 vUv, vLocal;
varying vec3 vWorld, vNormal;
varying float vKind;
void main() {
  vUv = uv; vLocal = aLocal; vKind = aKind;
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz; vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
  Le = `
precision highp float;
uniform sampler2D uPaint, uMask;
uniform vec2 uTexel;
uniform vec4 uBract, uRev;
uniform vec3 uToLight, uGlowC, uSunC;
uniform vec2 uLightTex;
uniform float uDrain, uOwn, uGlow, uGlowR, uSun;
varying vec2 vUv, vLocal;
varying vec3 vWorld, vNormal;
varying float vKind;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  // A head's back is the green of its bracts, cut to the same outline as its face.
  bool back = vKind < 0.5 && !gl_FrontFacing;
  vec2 uv = back ? uBract.xy + (vLocal * 0.42 + 0.5) * uBract.zw : vUv;
  vec4 m = texture2D(uMask, vUv);
  if (m.r < 0.5) discard;
  // The paint as the scan has it (display values: the texture is decoded to linear light on the way in).
  vec3 c = pow(max(texture2D(uPaint, uv).rgb, 0.0), vec3(1.0 / 2.2));
  // Light across the thickness of the paint (B: its height), from the window's side: the ridges of the petals and the
  // boss of a seed head stand out of it.
  float hx = texture2D(uMask, vUv + vec2(uTexel.x, 0.0)).b - texture2D(uMask, vUv - vec2(uTexel.x, 0.0)).b;
  float hy = texture2D(uMask, vUv + vec2(0.0, uTexel.y)).b - texture2D(uMask, vUv - vec2(0.0, uTexel.y)).b;
  float relief = clamp(1.0 + (hx * uLightTex.x + hy * uLightTex.y) * 2.2, 0.8, 1.22);
  // The jug's normals face out; a head, a leaf or a stem is seen from either side. The paint's own light and shade is
  // the picture's; the room's light only turns a face a little lighter toward the window.
  vec3 n = normalize(vNormal) * (vKind > 3.5 || gl_FrontFacing ? 1.0 : -1.0);
  float lit = 0.97 + 0.1 * max(dot(n, uToLight), 0.0) + 0.04 * n.y;
  c *= back ? lit * 0.85 : relief * lit;
  // His drawing of them: the ink a little heavier than the room's, so the flowers read as drawn in a painted room.
  vec3 ink = mix(${je}, ${Me}, pow(m.g, 1.7));
  // The paint coming in: from where it was laid (the jug's mouth), a stroke's ragged edge running out over the flowers.
  float ragged = noise(vWorld.xz * 30.0 + vWorld.y * 11.0) * 0.6 + noise(vWorld.yz * 61.0) * 0.4;
  float edge = uRev.w - distance(vWorld, uRev.xyz) + (ragged - 0.5) * 0.12;
  float on = smoothstep(0.0, 0.05, edge);
  float wet = smoothstep(0.0, 0.03, edge) * (1.0 - smoothstep(0.03, 0.16, edge)) * (1.0 - step(50.0, uRev.w));
  vec3 col = mix(c, ink, max(uDrain, uOwn) * (1.0 - on));
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, mix(vec3(l), col, 1.35) * 1.08, wet * 0.8);
  // The southern sun let in at the window, and the glow of a thing within reach (as the room's: bedroom.js).
  if (uSun > 0.001) col = col * (1.0 + 0.06 * uSun) + vec3(0.04, 0.025, 0.0) * uSun;
  if (uGlow > 0.001) { float g = uGlow * (1.0 - smoothstep(uGlowR * 0.4, uGlowR, distance(vWorld, uGlowC))); col = col * (1.0 + 0.22 * g) + vec3(0.16, 0.12, 0.04) * g; }
  gl_FragColor = vec4(pow(clamp(col, 0.0, 1.0), vec3(2.2)), 1.0);
  #include <colorspace_fragment>
}`;
function Re() {
  let e = [],
    t = [],
    n = [],
    r = [],
    i = [],
    a = [];
  return {
    pos: e,
    nrm: t,
    uv: n,
    loc: r,
    kind: i,
    idx: a,
    vertex(a, o, s, c, l) {
      return (
        e.push(a.x, a.y, a.z),
        t.push(o.x, o.y, o.z),
        n.push(s[0], s[1]),
        r.push(c[0], c[1]),
        i.push(l),
        e.length / 3 - 1
      );
    },
    geometry() {
      let o = new E();
      return (
        o.setAttribute(`position`, new c(e, 3)),
        o.setAttribute(`normal`, new c(t, 3)),
        o.setAttribute(`uv`, new c(n, 2)),
        o.setAttribute(`aLocal`, new c(r, 2)),
        o.setAttribute(`aKind`, new c(i, 1)),
        o.setIndex(a),
        o.computeBoundingSphere(),
        o
      );
    },
  };
}
function ze(e) {
  let t = Math.abs(e.y) < 0.9 ? new N(0, 1, 0) : new N(1, 0, 0),
    n = new N().crossVectors(t, e).normalize();
  return [n, new N().crossVectors(e, n)];
}
async function Be({ scene: e, quality: t, base: r, room: i, along: a, uniforms: o }) {
  let s = await fetch(re(`worlds/vangogh/sunflowers.json`))
    .then((e) => (e.ok ? e.json() : null))
    .catch(() => null);
  if (!s) return null;
  let c = t?.strong ? `2k` : `1k`,
    u = new l(),
    d = (e, t) =>
      new Promise((n) =>
        u.load(
          re(`worlds/vangogh/${e}`),
          (e) => {
            ((e.colorSpace = t ? f : ``), (e.anisotropy = 4), n(e));
          },
          void 0,
          () => n(null),
        ),
      ),
    [p, m] = await Promise.all([d(`sunflowers-${c}.jpg`, !0), d(`sunflowers-mask-${c}.jpg`, !1)]);
  if (!p || !m) return null;
  let g = c === `2k` ? 2048 : 1024,
    _ = i.clone().setY(0).normalize(),
    y = a.clone().setY(0).normalize(),
    b = new N(0, 1, 0),
    x = (e, t, n) => r.clone().addScaledVector(_, e).addScaledVector(b, t).addScaledVector(y, n),
    S = Re(),
    C = (e, t, n) => [e[0] + t * e[2], e[1] + n * e[3]],
    T = s.jug,
    E = Fe.length - 1,
    D = (e) => 1 - Math.min(1, Math.max(0, (0.21 - e) / 0.21));
  for (let e = 0; e <= E; e += 1)
    for (let t = 0; t <= 28; t += 1) {
      let n = (t / 28) * Math.PI * 2 - Math.PI,
        [r, i] = Fe[e],
        a = _.clone().multiplyScalar(Math.cos(n)).addScaledVector(y, Math.sin(n)),
        [o, s] = Fe[Math.max(0, e - 1)],
        [c, l] = Fe[Math.min(E, e + 1)],
        u = a
          .clone()
          .multiplyScalar(l - s)
          .addScaledVector(b, -(c - o))
          .normalize();
      S.vertex(x(0, 0, 0).addScaledVector(a, r).addScaledVector(b, i), u, C(T, t / 28, D(i)), [0, 0], 4);
    }
  for (let e = 0; e < E; e += 1)
    for (let t = 0; t < 28; t += 1) {
      let n = e * 29 + t;
      S.idx.push(n, n + 28 + 2, n + 1, n, n + 28 + 1, n + 28 + 2);
    }
  let O = x(0, 0.25, 0),
    k = s.stem,
    A = (e, t = 0.0065) => {
      let n = O.clone().addScaledVector(e.clone().sub(O).setY(0), 0.08),
        r = n
          .clone()
          .lerp(e, 0.45)
          .setY(Math.max(n.y, e.y) + 0.06),
        i = new h(n, r, e),
        a = S.pos.length / 3;
      for (let e = 0; e <= 8; e += 1) {
        let n = e / 8,
          r = i.getPoint(n),
          [a, o] = ze(i.getTangent(n));
        for (let e = 0; e <= 6; e += 1) {
          let i = (e / 6) * Math.PI * 2,
            s = a.clone().multiplyScalar(Math.cos(i)).addScaledVector(o, Math.sin(i));
          S.vertex(r.clone().addScaledVector(s, t * (1 - 0.3 * n)), s, C(k, e / 6, n), [0, 0], 2);
        }
      }
      for (let e = 0; e < 8; e += 1)
        for (let t = 0; t < 6; t += 1) {
          let n = a + e * 7 + t;
          S.idx.push(n, n + 1, n + 6 + 2, n, n + 6 + 2, n + 6 + 1);
        }
      return i;
    },
    M = [];
  for (let [e, t, n, r, i, a] of Ne) {
    let o = F.degToRad(e),
      c = F.degToRad(t),
      l = _.clone()
        .multiplyScalar(Math.cos(o) * Math.cos(c))
        .addScaledVector(y, Math.cos(o) * Math.sin(c))
        .addScaledVector(b, Math.sin(o)),
      u = O.clone().addScaledVector(l, n),
      d = s.heads[i % s.heads.length],
      f = d.kind === `full`,
      p = d.kind === `seed`,
      m = l.clone().lerp(_.clone().addScaledVector(b, 0.25).normalize(), a).normalize();
    (p && m.addScaledVector(b, -0.55).normalize(), A(u.clone().addScaledVector(m, -0.03)));
    let [h, g] = ze(m),
      v = (i * 2.39996) % (Math.PI * 2),
      x = [0, 0.18, 0.4, 0.62, 0.8, 1, 1.2],
      w = S.pos.length / 3,
      T = f ? 0.38 : p ? 0.3 : 0.16;
    for (let [e, t] of x.entries()) {
      let n =
        r * (T * Math.cos((Math.min(1, t / 0.62) * Math.PI) / 2) - (t > 0.62 ? 0.28 * ((t - 0.62) / 0.38) ** 1.5 : 0));
      for (let i = 0; i <= (e ? 24 : 0); i += 1) {
        let e = (i / 24) * Math.PI * 2,
          a = Math.cos(e) * t,
          o = Math.sin(e) * t,
          s = u
            .clone()
            .addScaledVector(h, a * r)
            .addScaledVector(g, o * r)
            .addScaledVector(m, n),
          c = m
            .clone()
            .addScaledVector(h, a * (t > 0.62 ? 0.5 : -0.2))
            .addScaledVector(g, o * (t > 0.62 ? 0.5 : -0.2))
            .normalize(),
          l = Math.cos(v) * a - Math.sin(v) * o,
          f = Math.sin(v) * a + Math.cos(v) * o;
        S.vertex(s, c, C(d.rect, 0.5 + l * 0.4, 0.5 + f * 0.4), [l, f], 0);
      }
    }
    for (let e = 0; e < 24; e += 1) S.idx.push(w, w + 1 + e, w + 2 + e);
    for (let e = 1; e < x.length - 1; e += 1) {
      let t = w + 1 + (e - 1) * 25,
        n = t + 24 + 1;
      for (let e = 0; e < 24; e += 1) S.idx.push(t + e, n + e, n + e + 1, t + e, n + e + 1, t + e + 1);
    }
    M.push({ centre: u, R: r });
  }
  let ee = s.leaf,
    P = s.leafAspect || 0.53;
  for (let [e, t, n, r, i] of Pe) {
    let a = F.degToRad(e),
      o = F.degToRad(t),
      s = _.clone()
        .multiplyScalar(Math.cos(a) * Math.cos(o))
        .addScaledVector(y, Math.cos(a) * Math.sin(o))
        .addScaledVector(b, Math.sin(a)),
      c = new N().crossVectors(s, b).normalize(),
      l = S.pos.length / 3;
    for (let e = 0; e <= 4; e += 1) {
      let t = e / 4,
        a = n * P * 0.5,
        o = O.clone()
          .addScaledVector(s, 0.04 + t * n)
          .addScaledVector(b, -r * n * t * t);
      for (let e = 0; e <= 2; e += 1) {
        let n = e / 2 - 0.5,
          l = b
            .clone()
            .addScaledVector(s, r * t)
            .normalize();
        S.vertex(
          o
            .clone()
            .addScaledVector(c, n * 2 * a)
            .addScaledVector(b, -Math.abs(n) * a * 0.4),
          l,
          C(ee, i ? 1 - e / 2 : e / 2, t),
          [0, 0],
          3,
        );
      }
    }
    for (let e = 0; e < 4; e += 1)
      for (let t = 0; t < 2; t += 1) {
        let n = l + e * 3 + t;
        S.idx.push(n, n + 3, n + 1, n + 1, n + 3, n + 4);
      }
  }
  let ne = new w(O.x, O.y, O.z, -1),
    ie = {
      uPaint: { value: p },
      uMask: { value: m },
      uTexel: { value: new j(1.5 / g, 1.5 / g) },
      uBract: { value: new w(...s.bract) },
      uRev: { value: ne },
      uOwn: { value: 1 },
      uLightTex: { value: new j(-0.6, 0.6) },
      uToLight: { value: W.clone().negate() },
      uDrain: o.uDrain,
      uGlow: o.uGlow,
      uGlowC: o.uGlowC,
      uGlowR: o.uGlowR,
      uSun: o.uSun,
      uSunC: o.uSunC,
    },
    L = new te({ uniforms: ie, vertexShader: Ie, fragmentShader: Le, side: 2, toneMapped: !1 }),
    R = new v(S.geometry(), L);
  ((R.name = `VG_Sunflowers`), (R.frustumCulled = !1), e.add(R));
  let ae = new n().setFromObject(R),
    z = ae.getCenter(new N()),
    oe = null;
  return {
    mesh: R,
    uniforms: ie,
    centre: z,
    box: ae,
    mouth: O,
    paintTo(e) {
      (oe?.kill(), (ne.w = -0.05 + e * 0.85));
    },
    finish(e = 0.9) {
      return (
        oe?.kill(),
        new Promise((t) => {
          oe = I.to(ne, {
            w: 0.95,
            duration: e,
            ease: `power1.out`,
            onComplete: () => {
              ((ne.w = 99), (ie.uOwn.value = 0), t());
            },
          });
        })
      );
    },
    hide() {
      (oe?.kill(), (ie.uOwn.value = 0), (ne.w = -2));
    },
    get touched() {
      return ie.uOwn.value < 0.5;
    },
    dispose() {
      (e.remove(R), L.dispose(), R.geometry.dispose(), p.dispose(), m.dispose());
    },
  };
}
function Ve(e, t = 2) {
  let n = e.createBuffer(1, Math.floor(e.sampleRate * t), e.sampleRate),
    r = n.getChannelData(0),
    i = 0;
  for (let e = 0; e < r.length; e += 1) ((i = i * 0.6 + (Math.random() * 2 - 1) * 0.4), (r[e] = i));
  return n;
}
var K = {
    stroke(e = 0) {
      let t = R();
      if (!t) return;
      let n = t.currentTime,
        r = t.createBufferSource();
      r.buffer = Ve(t, 1);
      let i = t.createBiquadFilter();
      ((i.type = `bandpass`),
        (i.Q.value = 0.8),
        i.frequency.setValueAtTime(700, n),
        i.frequency.exponentialRampToValueAtTime(2800, n + 0.32),
        i.frequency.exponentialRampToValueAtTime(1200, n + 0.6));
      let a = t.createGain();
      (a.gain.setValueAtTime(1e-4, n),
        a.gain.exponentialRampToValueAtTime(0.32, n + 0.06),
        a.gain.exponentialRampToValueAtTime(1e-4, n + 0.65),
        r.connect(i).connect(a).connect(t.destination),
        r.start(n),
        r.stop(n + 0.7));
      let o = [261.63, 293.66, 329.63, 392, 440, 523.25][e % 6];
      for (let [e, r, i] of [
        [1, `sine`, 0.1],
        [2, `triangle`, 0.025],
      ]) {
        let a = t.createOscillator();
        ((a.type = r), (a.frequency.value = o * e));
        let s = t.createGain();
        (s.gain.setValueAtTime(1e-4, n + 0.05),
          s.gain.exponentialRampToValueAtTime(i, n + 0.09),
          s.gain.exponentialRampToValueAtTime(1e-4, n + 1.8),
          a.connect(s).connect(t.destination),
          a.start(n + 0.05),
          a.stop(n + 1.9));
      }
    },
    plop(e = 0) {
      let t = R();
      if (!t) return;
      let n = t.currentTime,
        r = [392, 330, 262, 440][e % 4],
        i = t.createOscillator();
      ((i.type = `sine`),
        i.frequency.setValueAtTime(r * 1.9, n),
        i.frequency.exponentialRampToValueAtTime(r, n + 0.12));
      let a = t.createGain();
      (a.gain.setValueAtTime(1e-4, n),
        a.gain.exponentialRampToValueAtTime(0.22, n + 0.015),
        a.gain.exponentialRampToValueAtTime(1e-4, n + 0.35),
        i.connect(a).connect(t.destination),
        i.start(n),
        i.stop(n + 0.4));
    },
    tick() {
      let e = R();
      if (!e) return;
      let t = e.currentTime,
        n = e.createOscillator();
      ((n.type = `triangle`), (n.frequency.value = 1180));
      let r = e.createGain();
      (r.gain.setValueAtTime(1e-4, t),
        r.gain.exponentialRampToValueAtTime(0.08, t + 0.005),
        r.gain.exponentialRampToValueAtTime(1e-4, t + 0.09),
        n.connect(r).connect(e.destination),
        n.start(t),
        n.stop(t + 0.1));
    },
    hold() {
      let e = R();
      if (!e) return { set() {}, stop() {} };
      let t = e.createOscillator();
      ((t.type = `sine`), (t.frequency.value = 220));
      let n = e.createOscillator();
      ((n.type = `triangle`), (n.frequency.value = 330));
      let r = e.createGain();
      return (
        (r.gain.value = 0),
        t.connect(r),
        n.connect(r),
        r.connect(e.destination),
        t.start(),
        n.start(),
        {
          set(i) {
            let a = e.currentTime;
            (r.gain.setTargetAtTime(0.03 + 0.07 * i, a, 0.05),
              t.frequency.setTargetAtTime(220 + 220 * i, a, 0.05),
              n.frequency.setTargetAtTime(330 + 330 * i, a, 0.05));
          },
          stop(i) {
            let a = e.currentTime;
            (r.gain.cancelScheduledValues(a),
              r.gain.setTargetAtTime(0, a, 0.08),
              setTimeout(() => {
                (t.stop(), n.stop());
              }, 500),
              i &&
                [659.25, 987.77, 1318.5].forEach((t, n) => {
                  let r = e.createOscillator();
                  ((r.type = `sine`), (r.frequency.value = t));
                  let i = e.createGain(),
                    o = a + n * 0.06;
                  (i.gain.setValueAtTime(1e-4, o),
                    i.gain.exponentialRampToValueAtTime(0.12, o + 0.01),
                    i.gain.exponentialRampToValueAtTime(1e-4, o + 1.6),
                    r.connect(i).connect(e.destination),
                    r.start(o),
                    r.stop(o + 1.7));
                }));
          },
        }
      );
    },
    wind() {
      let e = R();
      if (!e) return;
      let t = e.currentTime,
        n = e.createBufferSource();
      n.buffer = Ve(e, 4);
      let r = e.createBiquadFilter();
      ((r.type = `lowpass`),
        r.frequency.setValueAtTime(300, t),
        r.frequency.linearRampToValueAtTime(1600, t + 1.2),
        r.frequency.linearRampToValueAtTime(500, t + 3.6));
      let i = e.createGain();
      (i.gain.setValueAtTime(1e-4, t),
        i.gain.exponentialRampToValueAtTime(0.35, t + 0.9),
        i.gain.exponentialRampToValueAtTime(1e-4, t + 3.8),
        n.connect(r).connect(i).connect(e.destination),
        n.start(t),
        n.stop(t + 4));
    },
    swell(e = 3) {
      let t = R();
      if (!t) return;
      let n = t.currentTime;
      [261.63, 329.63, 392, 493.88, 587.33, 783.99].forEach((r, i) => {
        let a = t.createOscillator();
        ((a.type = i % 2 ? `triangle` : `sine`), (a.frequency.value = r));
        let o = t.createGain(),
          s = n + (e / 8) * i;
        (o.gain.setValueAtTime(1e-4, s),
          o.gain.exponentialRampToValueAtTime(0.06, s + 0.4),
          o.gain.exponentialRampToValueAtTime(1e-4, n + e + 2.2),
          a.connect(o).connect(t.destination),
          a.start(s),
          a.stop(n + e + 2.4));
      });
    },
  },
  He = (e) => String(e ?? ``).replace(/[&<>"]/g, (e) => ({ "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;` })[e]),
  Ue = (e, t) => {
    let n = Math.min(Math.max(t.x, 56), window.innerWidth - 56),
      r = Math.min(Math.max(t.y, 110), window.innerHeight - 190);
    e.style.transform = `translate(${n}px, ${r}px)`;
  };
function We(e) {
  let t = document.createElement(`div`);
  ((t.className = `vg-palette`), (t.innerHTML = `<div class="vg-board"></div>`), e.appendChild(t));
  let n = t.querySelector(`.vg-board`),
    r = null;
  return (
    n.addEventListener(`click`, (e) => {
      let i = e.target.closest(`.vg-dab`);
      if (!i || !i.classList.contains(`in`) || !r) return;
      (e.preventDefault(), e.stopPropagation());
      let a = Number(i.dataset.i);
      (n.querySelectorAll(`.vg-dab`).forEach((e, t) => e.classList.toggle(`on`, t === a)),
        t.classList.add(`chosen`),
        K.tick(),
        navigator.vibrate?.(12));
      let o = r;
      ((r = null), o(a));
    }),
    {
      el: t,
      fill(e) {
        n.innerHTML = e
          .map(
            (e, t) =>
              `<button type="button" class="vg-dab" data-i="${t}" style="--c:${e.hex}"><i></i><b>${He(e.name)}</b><span>${He(e.detail)}</span></button>`,
          )
          .join(``);
      },
      show() {
        (t.classList.add(`show`), document.body.classList.add(`vg-painting`));
      },
      hide() {
        (t.classList.remove(`show`), document.body.classList.remove(`vg-painting`));
      },
      reveal(e) {
        let t = n.children[e];
        t && (t.classList.add(`in`), K.plop(e), navigator.vibrate?.(10));
      },
      choose({ ms: e = 25e3, fallback: i = 0 } = {}) {
        return (
          t.classList.add(`choosing`),
          new Promise((a) => {
            let o = setTimeout(() => {
              r && ((r = null), n.children[i]?.classList.add(`on`), t.classList.add(`chosen`), a({ i, chose: !1 }));
            }, e);
            r = (e) => {
              (clearTimeout(o), a({ i: e, chose: !0 }));
            };
          }).finally(() => t.classList.remove(`choosing`))
        );
      },
      dispose() {
        (t.remove(), document.body.classList.remove(`vg-painting`));
      },
    }
  );
}
function Ge(e, { anchor: t, hint: n = ``, ms: r = 9e3 }) {
  let i = document.createElement(`div`);
  ((i.className = `vg-tap`),
    (i.innerHTML = `<div class="vg-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" class="bg"/></svg><b></b></div>${n ? `<span>${He(n)}</span>` : ``}`),
    e.prepend(i));
  let a = i.querySelector(`.vg-ring`),
    o = 0,
    s = !1;
  return (
    requestAnimationFrame(() => i.classList.add(`show`)),
    new Promise((e) => {
      let n = (t) => {
          s ||
            ((s = !0),
            cancelAnimationFrame(o),
            clearTimeout(u),
            i.removeEventListener(`pointerdown`, c),
            window.removeEventListener(`keydown`, l, !0),
            i.classList.add(`done`),
            setTimeout(() => i.remove(), 600),
            e(t));
        },
        c = (e) => {
          (e.preventDefault(), navigator.vibrate?.(12), n({ x: e.clientX, y: e.clientY }));
        },
        l = (e) => {
          e.repeat ||
            ((e.code === `Space` || e.code === `KeyE` || e.code === `Enter`) &&
              (e.preventDefault(), e.stopImmediatePropagation(), n(null)));
        };
      (i.addEventListener(`pointerdown`, c), window.addEventListener(`keydown`, l, !0));
      let u = setTimeout(() => n(null), r),
        d = () => {
          let e = t?.();
          (e && Ue(a, e), a.classList.toggle(`free`, !e), (o = requestAnimationFrame(d)));
        };
      d();
    })
  );
}
function Ke(e, { text: t, anchor: n, ms: r = 1600, onProgress: i = () => {} }) {
  let a = document.createElement(`div`);
  ((a.className = `vg-hold`),
    (a.innerHTML = `<div class="vg-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" class="bg"/><circle cx="50" cy="50" r="44" class="fg"/></svg><b></b></div><span>${He(t)}</span>`),
    e.prepend(a));
  let o = a.querySelector(`.vg-ring`),
    s = a.querySelector(`.fg`),
    c = 2 * Math.PI * 44;
  ((s.style.strokeDasharray = `${c}`), (s.style.strokeDashoffset = `${c}`));
  let l = K.hold(),
    u = !1,
    d = 0,
    f = performance.now(),
    p = 0,
    m = (e) => {
      ((u = e), a.classList.toggle(`down`, e), e && navigator.vibrate?.(10));
    },
    h = (e) => {
      (e.preventDefault(), m(!0));
    },
    g = () => m(!1);
  (a.addEventListener(`pointerdown`, h),
    window.addEventListener(`pointerup`, g),
    window.addEventListener(`pointercancel`, g));
  let _ = (e) => {
    e.repeat ||
      ((e.code === `Space` || e.code === `KeyE` || e.code === `Enter`) &&
        (e.preventDefault(), e.stopImmediatePropagation(), m(e.type === `keydown`)));
  };
  return (
    window.addEventListener(`keydown`, _, !0),
    window.addEventListener(`keyup`, _, !0),
    requestAnimationFrame(() => a.classList.add(`show`)),
    new Promise((e) => {
      let t = (m) => {
        let h = Math.min(0.1, (m - f) / 1e3);
        f = m;
        let v = d;
        ((d = u ? Math.min(1, d + (h * 1e3) / r) : Math.max(0, d - h * 1.6)),
          d !== v && (i(d), l.set(d), (s.style.strokeDashoffset = `${c * (1 - d)}`)),
          u && Math.floor(d * 8) > p && ((p = Math.floor(d * 8)), navigator.vibrate?.(6)));
        let y = n?.();
        if ((y && Ue(o, y), o.classList.toggle(`free`, !y), d >= 1)) {
          (l.stop(!0),
            a.classList.add(`done`),
            window.removeEventListener(`pointerup`, g),
            window.removeEventListener(`pointercancel`, g),
            window.removeEventListener(`keydown`, _, !0),
            window.removeEventListener(`keyup`, _, !0),
            setTimeout(() => a.remove(), 700),
            e());
          return;
        }
        requestAnimationFrame(t);
      };
      requestAnimationFrame(t);
    })
  );
}
var qe = 0.2375,
  Je = 0.3245,
  Ye = 0.3955,
  Xe = 0.718,
  Ze = 0.999,
  Qe = 0.3,
  $e = 2.5,
  et = { left: 2.05, right: 1.25 },
  tt = `
attribute float aPatch, aThing, aChair;
attribute vec2 aAtlas;
uniform vec3 uHinge;
uniform float uAngle;
varying vec3 vWorld, vNormal;
varying vec2 vUv, vAtlas;
varying float vPatch, vThing, vChair;
void main() {
  // Painted where it lay on the wall; drawn where it has swung to.
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz; vNormal = normalize(mat3(modelMatrix) * normal); vUv = uv; vAtlas = aAtlas;
  vPatch = aPatch; vThing = aThing; vChair = aChair;
  vec3 p = w.xyz - uHinge;
  float c = cos(uAngle), s = sin(uAngle);
  p = vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  gl_Position = projectionMatrix * viewMatrix * vec4(uHinge + p, 1.0);
}`,
  nt = `
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
  rt = `
precision highp float;
uniform sampler2D uView;
uniform vec4 uHole;      // the opening on the wall: x0, y0, x1, y1
uniform float uWallZ, uReveal, uBack, uOpen, uTime;
uniform vec4 uPlane;     // the view's picture behind the wall: centre x, centre y, width, height
uniform vec3 uRevealC, uSunDir;
varying vec3 vWorld;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
void main() {
  vec3 d = normalize(vWorld - cameraPosition);
  if (d.z > -0.001) discard;
  // Through the thickness of the wall: the first of the reveal's four sides the ray meets, else out of its far end.
  float tb = uReveal / -d.z;
  float tx = d.x > 0.0 ? (uHole.z - vWorld.x) / d.x : (uHole.x - vWorld.x) / min(d.x, -1e-5);
  float ty = d.y > 0.0 ? (uHole.w - vWorld.y) / d.y : (uHole.y - vWorld.y) / min(d.y, -1e-5);
  vec3 col;
  if (min(tx, ty) < tb) {
    float t = min(tx, ty);
    vec3 h = vWorld + d * t;
    // The reveal in the wall's paint, in strokes along it; the side the sun comes past is lit, the sill most.
    bool side = tx < ty;
    vec3 n = side ? vec3(d.x > 0.0 ? -1.0 : 1.0, 0.0, 0.0) : vec3(0.0, d.y > 0.0 ? -1.0 : 1.0, 0.0);
    float lit = 0.62 + 0.55 * max(dot(n, -uSunDir), 0.0) * uOpen;
    vec2 g = side ? vec2(h.z * 14.0, h.y * 5.0) : vec2(h.x * 5.0, h.z * 14.0);
    float stroke = noise(g) * 0.6 + noise(g * 2.3 + 7.0) * 0.4;
    float deep = clamp((uWallZ - h.z) / uReveal, 0.0, 1.0);
    col = uRevealC * lit * (0.9 + 0.2 * stroke) * mix(1.0, 0.82, deep * (1.0 - uOpen));
  } else {
    vec3 h = vWorld + d * ((uBack) / -d.z);
    vec2 uv = vec2((h.x - uPlane.x) / uPlane.z + 0.5, (h.y - uPlane.y) / uPlane.w + 0.5);
    col = texture2D(uView, clamp(uv, 0.002, 0.998)).rgb;
    // Out there it is noon-bright beside the room: a little lifted, and the air shimmering faintly.
    col *= 1.0 + 0.18 * uOpen + 0.03 * sin(uTime * 1.7 + uv.x * 40.0) * uOpen;
  }
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;
function it({ scene: e, bedroom: t, quality: n, sunDir: r }) {
  if (!t?.pointOf || !t.material) return null;
  let i = (e, n) => t.pointOf(e, n),
    a = [
      [qe, Xe],
      [Je, Xe],
      [Ye, Xe],
      [qe, Ze],
      [Je, Ze],
      [Ye, Ze],
    ].map(([e, t]) => i(e, t));
  if (a.some((e) => !e)) return null;
  let [o, s, u, d, p, h] = a,
    g = o.z,
    _ = at(t.model.parts.find((e) => e.id === `back`));
  if (!_) return null;
  let y = new ee();
  ((y.name = `VG_Casement`), e.add(y));
  let b = [],
    x = (e, n, r) => {
      let i = [],
        a = [];
      for (let t of e) (i.push(t.x, t.y, g + 0.005), a.push(..._(t.x, t.y)));
      let o = new E();
      (o.setAttribute(`position`, new c(i, 3)),
        o.setAttribute(`normal`, new c([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], 3)),
        o.setAttribute(`uv`, new c(new Float32Array(8), 2)),
        o.setAttribute(`aAtlas`, new c(a, 2)),
        o.setAttribute(`aPatch`, new c(new Float32Array(4), 1)),
        o.setAttribute(`aThing`, new c(new Float32Array(4), 1)),
        o.setAttribute(`aChair`, new c(new Float32Array(4), 1)),
        o.setIndex([0, 1, 2, 0, 2, 3]));
      let s = { ...t.material.uniforms, uHinge: { value: new N(n.x, 0, g) }, uAngle: { value: 0 } },
        l = new te({
          uniforms: s,
          vertexShader: tt,
          fragmentShader: t.material.fragmentShader,
          toneMapped: !1,
          side: 2,
        }),
        u = new v(o, l);
      ((u.frustumCulled = !1), y.add(u), b.push({ m: u, swing: r }));
    };
  (x([o, s, p, d], o.clone().lerp(d, 0.5), -et.left), x([s, u, h, p], u.clone().lerp(h, 0.5), et.right));
  let S = new w(Math.min(o.x, d.x), Math.min(o.y, u.y), Math.max(u.x, h.x), Math.max(d.y, h.y)),
    C = new l().load(re(`worlds/vangogh/window-view-${n?.low ? `1k` : `2k`}.jpg`));
  ((C.colorSpace = f), (C.anisotropy = 4));
  let T = {
      uView: { value: C },
      uHole: { value: S },
      uWallZ: { value: g },
      uReveal: { value: Qe },
      uBack: { value: $e },
      uOpen: { value: 0 },
      uTime: { value: 0 },
      uPlane: { value: new w(-1.9, 2.35, 7, 5.25) },
      uRevealC: { value: new m(`#a9b8d6`) },
      uSunDir: { value: (r || new N(0.109, -0.407, 0.907)).clone().normalize() },
    },
    D = new E();
  (D.setAttribute(
    `position`,
    new c([o.x, o.y, g + 0.0025, u.x, u.y, g + 0.0025, h.x, h.y, g + 0.0025, d.x, d.y, g + 0.0025], 3),
  ),
    D.setIndex([0, 1, 2, 0, 2, 3]));
  let O = new v(D, new te({ uniforms: T, vertexShader: nt, fragmentShader: rt, toneMapped: !1 }));
  ((O.frustumCulled = !1), (O.visible = !1), y.add(O));
  let k = 0;
  return {
    group: y,
    centre: new N((S.x + S.z) / 2, (S.y + S.w) / 2, g),
    get k() {
      return k;
    },
    open(e) {
      k = e;
      for (let t of b) t.m.material.uniforms.uAngle.value = t.swing * e;
      ((O.visible = e > 0.002), (T.uOpen.value = F.clamp(e, 0, 1)));
    },
    update(e) {
      T.uTime.value = e;
    },
    dispose() {
      (e.remove(y), C.dispose());
      for (let e of b) (e.m.geometry.dispose(), e.m.material.dispose());
      (D.dispose(), O.material.dispose());
    },
  };
}
function at(e) {
  if (!e?.pos || !e?.auv) return null;
  let t = e.pos.length / 3,
    n = new P(),
    r = new N(),
    i = new N(),
    a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let n = 0; n < t; n += 1) {
    let t = [e.pos[n * 3], e.pos[n * 3 + 1], 1];
    for (let e = 0; e < 3; e += 1) for (let n = 0; n < 3; n += 1) a[e * 3 + n] += t[e] * t[n];
    ((r.x += t[0] * e.auv[n * 2]),
      (r.y += t[1] * e.auv[n * 2]),
      (r.z += e.auv[n * 2]),
      (i.x += t[0] * e.auv[n * 2 + 1]),
      (i.y += t[1] * e.auv[n * 2 + 1]),
      (i.z += e.auv[n * 2 + 1]));
  }
  n.set(...a).invert();
  let o = r.applyMatrix3(n),
    s = i.applyMatrix3(n);
  return (e, t) => [o.x * e + o.y * t + o.z, s.x * e + s.y * t + s.z];
}
var ot = { zh: `文森特·梵高`, en: `Vincent van Gogh` },
  q = (e, t, n) => (e === `en` ? n : t),
  J = {
    chrome: { zh: `铬黄`, en: `Chrome yellow`, hex: `#f2c12e`, against: { zh: `淡紫`, en: `violet` } },
    ochre: { zh: `土黄`, en: `Yellow ochre`, hex: `#c8963c`, against: { zh: `蓝紫`, en: `blue-violet` } },
    vermilion: { zh: `朱红`, en: `Vermilion`, hex: `#e2432a`, against: { zh: `翡翠绿`, en: `emerald green` } },
    geranium: { zh: `天竺葵红`, en: `Geranium lake`, hex: `#d6385e`, against: { zh: `绿`, en: `green` } },
    carmine: { zh: `胭脂红`, en: `Carmine`, hex: `#a3203c`, against: { zh: `维罗纳绿`, en: `Veronese green` } },
    prussian: { zh: `普鲁士蓝`, en: `Prussian blue`, hex: `#1f3f7a`, against: { zh: `橙`, en: `orange` } },
    ultramarine: { zh: `群青`, en: `Ultramarine`, hex: `#2e4fb3`, against: { zh: `铬黄`, en: `chrome yellow` } },
    cobalt: { zh: `钴蓝`, en: `Cobalt blue`, hex: `#3f70c6`, against: { zh: `橙`, en: `orange` } },
    emerald: { zh: `翡翠绿`, en: `Emerald green`, hex: `#2f9e6b`, against: { zh: `朱红`, en: `vermilion` } },
    veronese: { zh: `维罗纳绿`, en: `Veronese green`, hex: `#5a9e80`, against: { zh: `胭脂红`, en: `carmine` } },
    white: { zh: `锌白`, en: `Zinc white`, hex: `#f1ece0`, against: { zh: `钴蓝`, en: `cobalt blue` } },
  },
  st = (e) => ({
    r: parseInt(e.slice(1, 3), 16) / 255,
    g: parseInt(e.slice(3, 5), 16) / 255,
    b: parseInt(e.slice(5, 7), 16) / 255,
  }),
  ct = `
float vgFloorY(float z) { return max(0.0, -1.0 - z) * 0.1 + max(0.0, -7.25 - z) * 0.3; }
float vgNearFloor(vec3 p) { return 1.0 - smoothstep(0.2, 0.38, p.y - vgFloorY(p.z)); }
float vgNearCeiling(vec3 p) { return smoothstep(-0.45, -0.2, p.y - (3.24 - 0.087 * p.z)); }
float vgWarm(vec3 c) { return smoothstep(0.08, 0.2, c.r - c.b); }
// What a wall looks like here (pale and cool), so a box round a thing on the wall keeps the thing, not the wall.
float vgWallish(vec3 c) { return (1.0 - vgWarm(c)) * smoothstep(0.45, 0.62, dot(c, vec3(0.299, 0.587, 0.114))); }
// Lying flat (the floor), not standing up (a leg of the bed or a chair).
float vgFlat(vec3 n) { return smoothstep(0.55, 0.8, abs(n.y)); }
float vgYellow(vec3 c) { return smoothstep(0.08, 0.24, min(c.r, c.g) - c.b) * smoothstep(0.32, 0.5, c.r); }
float vgRed(vec3 c) { return smoothstep(0.08, 0.22, c.r - max(c.g, c.b) * 1.1); }
// The right wall leans in toward the window, the way the painting's perspective drew it.
float vgRightWall(float z) { return 1.45 + (z + 3.7) * 0.2; }
float vgBed(vec3 p) {
  float far = vgInBox(p, vec3(-0.12, 0.2, -7.55), vec3(vgRightWall(p.z) - 0.05, 1.35 + max(0.0, -3.7 - p.z) * 0.17, -3.55));
  return max(far, vgInBox(p, vec3(0.75, 0.1, -2.5), vec3(1.62, 1.3, 0.35)));
}
float vgChairNear(vec3 p) { return vgInBox(p, vec3(-1.58, 0.15, -4.45), vec3(-0.82, 1.42, -3.2)); }
float vgChairs(vec3 p) { return max(vgChairNear(p), vgInBox(p, vec3(-0.95, 0.5, -7.8), vec3(-0.2, 1.95, -6.9))); }
float vgTables(vec3 p) { return max(vgInBox(p, vec3(-1.78, 0.3, -6.95), vec3(-0.7, 1.6, -5.75)), vgInBox(p, vec3(-1.15, 0.15, -1.75), vec3(-0.6, 1.75, -0.2))); }
float vgWindow(vec3 p) { return vgInBox(p, vec3(-1.5, 1.55, -8.7), vec3(-0.3, 3.6, -7.8)); }
float vgMirror(vec3 p) { return vgInBox(p, vec3(-1.45, 1.35, -2.15), vec3(-1.05, 2.5, -1.05)); }
`,
  lt = [
    {
      id: `walls`,
      glsl: `(1.0 - vgNearFloor(vgP)) * (1.0 - vgNearCeiling(vgP)) * (1.0 - vgWarm(vgC)) * (1.0 - max(max(vgWindow(vgP), vgMirror(vgP)) * (1.0 - vgWallish(vgC)), vgTables(vgP)))`,
      tint: 0.32,
      pull: 0.08,
    },
    {
      id: `floor`,
      glsl: `vgNearFloor(vgP) * max(vgFlat(vgN), 1.0 - max(vgBed(vgP), vgChairs(vgP)) * vgYellow(vgC))`,
      tint: 0.32,
      pull: 0.1,
    },
    {
      id: `wood`,
      glsl: `max(vgBed(vgP), vgChairs(vgP)) * vgYellow(vgC) * (1.0 - vgNearFloor(vgP) * vgFlat(vgN))`,
      tint: 0.35,
      pull: 0.1,
    },
    { id: `blanket`, glsl: `vgBed(vgP) * vgRed(vgC)`, tint: 0.4, pull: 0.12 },
    {
      id: `window`,
      glsl: `vgWindow(vgP) * (1.0 - vgWallish(vgC)) * (1.0 - vgNearCeiling(vgP))`,
      tint: 0.35,
      pull: 0.1,
    },
    { id: `chair`, glsl: `vgChairNear(vgP) * (1.0 - vgNearFloor(vgP) * vgFlat(vgN))`, tint: 0.86, pull: 0.5, swell: 1 },
  ],
  ut = Object.fromEntries(lt.map((e, t) => [e.id, t])),
  dt = [
    {
      fill: `walls`,
      hex: `#b4a6d6`,
      uv: [0.43, 0.86],
      at: [0.05, 2.9, -8.2],
      zh: `墙是淡紫的。`,
      en: `墙是紫色的。`,
    },
    {
      fill: `floor`,
      hex: `#b88672`,
      uv: [0.3, 0.2],
      at: [-0.45, 0.3, -4.2],
      zh: `地面是红色的方砖。`,
      en: `地上是红色的。`,
    },
    {
      fill: `wood`,
      hex: `#e6cc7e`,
      uv: [0.74, 0.47],
      at: [0.7, 1.1, -4.45],
      zh: `床架和椅子，是新鲜黄油的黄。`,
      en: `床和椅子是黄色的。`,
    },
    {
      fill: `blanket`,
      hex: `#c4483a`,
      uv: [0.515, 0.55],
      at: [0.2, 1.15, -5.6],
      zh: `被子是猩红的。`,
      en: `被子是红色的。`,
    },
    {
      fill: `window`,
      hex: `#5a9a62`,
      uv: [0.32, 0.86],
      at: [-0.95, 2.55, -8.2],
      zh: `窗是绿的。`,
      en: `窗户是绿色的。`,
    },
  ],
  ft = [-1.39, 0.88, -4.6],
  pt = [
    [-0.25, 1.55, -3.15],
    [-1.35, 0.85, -4.55],
  ],
  mt = { x: -0.62, z: -3, yaw: 0.62, r: 0.32 },
  Y = { x: -1.06, z: -3.12, yaw: Math.PI / 2, r: 0.3 },
  ht = [-0.3, -2.55],
  gt = [-0.02, -3.35],
  _t = [-0.9, -2.25],
  vt = [
    [0.55, 1.55, -2.6],
    [-0.7, 1.1, -3.3],
  ],
  yt = [
    [0.2, 1.45, -2],
    [-0.62, 1.35, -3],
  ],
  bt = { x: -0.15, z: -0.5 },
  xt = [
    [-0.15, 1.4, -0.5],
    [0.15, 1.15, -5.2],
  ],
  St = { w: 0.913, h: 0.724, at: [-0.048, -0.016, -1.15] },
  Ct = [-3.25, -3.6],
  wt = null,
  X = null,
  Z = null;
function Tt(e, t) {
  let n = [],
    r = (e, t) => {
      let [r, i] = e.foot,
        [a, o] = e.head,
        s = [(r[0] + i[0]) / 2, (r[2] + i[2]) / 2],
        c = [(a[0] + o[0]) / 2, (a[2] + o[2]) / 2];
      for (let e = 0; e <= 4; e += 1)
        n.push({ x: s[0] + (c[0] - s[0]) * (0.08 + 0.21 * e), z: s[1] + (c[1] - s[1]) * (0.08 + 0.21 * e), r: t });
    };
  r(e.bed, 0.5);
  let i = e.table.top;
  n.push({ x: i[0] - 0.24, z: i[2] - 0.04, r: 0.33 }, { x: i[0] + 0.24, z: i[2] + 0.04, r: 0.33 });
  for (let t of [e.chairFar, e.chairNear]) n.push({ x: t.seat[0], z: t.seat[2], r: 0.28 });
  if (!t) return n;
  r(t.bed, 0.4);
  let { origin: a, along: o, inward: s, length: c, depth: l } = t.table;
  for (let e = 0; e < 4; e += 1) {
    let t = (0.12 + 0.25 * e) * c;
    n.push({ x: a[0] + o[0] * t + (s[0] * l) / 2, z: a[2] + o[2] * t + (s[2] * l) / 2, r: 0.24 });
  }
  return (n.push({ x: t.chair.seat[0], z: t.chair.seat[2], r: 0.28 }), n.push({ x: -1.3, z: 0.35, r: 0.5 }), n);
}
function Et() {
  let e = { sun: 0, sunC: new N(), glow: 0, glowC: new N(), glowR: 0.5, drain: 0, base: 0, cut: new j() };
  return {
    uniforms: e,
    glowFor: null,
    get: (t) => e[t],
    set(t, n) {
      e[t]?.copy ? e[t].copy(n) : (e[t] = n);
    },
    dab() {},
    flush: () => !1,
    fill: () => Promise.resolve(),
    fillAll() {},
    clearFills() {},
    dispose() {},
  };
}
function Dt(e, t) {
  let n = new ee(),
    r = new A({ color: `#a8784a`, roughness: 0.8 });
  for (let [e, t] of [
    [-0.26, 0.09],
    [0.26, -0.09],
  ]) {
    let i = new v(new b(0.022, 0.028, 1.75, 6), r);
    (i.position.set(e, 0.86, 0), (i.rotation.z = t), n.add(i));
  }
  let i = new v(new b(0.022, 0.028, 1.75, 6), r);
  (i.position.set(0, 0.82, -0.3), (i.rotation.x = -0.34), n.add(i));
  let a = new v(new u(0.72, 0.035, 0.07), r);
  (a.position.set(0, 0.78, 0.06), n.add(a));
  let s = document.createElement(`canvas`);
  ((s.width = 600), (s.height = 800));
  let c = s.getContext(`2d`);
  ((c.fillStyle = `#efe6cf`), c.fillRect(0, 0, 600, 800), (c.globalAlpha = 0.08));
  for (let e = 0; e < 2600; e += 1)
    ((c.fillStyle = e % 2 ? `#ffffff` : `#b9a77f`), c.fillRect(Math.random() * 600, Math.random() * 800, 2, 2));
  c.globalAlpha = 1;
  let l = new o(s);
  ((l.colorSpace = f), (l.anisotropy = 4));
  let d = new A({ map: l, roughness: 0.75 }),
    p = new v(new u(0.6, 0.8, 0.03), [r, r, r, r, d, r]);
  (p.position.set(0, 1.2, 0.07),
    (p.rotation.x = -0.09),
    n.add(p),
    n.position.set(Y.x, t(Y.x, Y.z), Y.z),
    (n.rotation.y = Y.yaw),
    n.traverse((e) => {
      e.isMesh && ((e.castShadow = !0), (e.receiveShadow = !0));
    }),
    e.add(n));
  let m = { x: Y.x, z: Y.z, r: Y.r },
    h = null,
    g = `#f2c12e`,
    _ = (e) => ((g = e), jt(e)),
    y = (e) => {
      (n.position.set(e.x, t(e.x, e.z), e.z), (n.rotation.y = e.yaw), Object.assign(m, { x: e.x, z: e.z, r: e.r }));
    };
  return {
    group: n,
    board: p,
    tex: l,
    ctx: c,
    collider: m,
    get up() {
      return m.r === mt.r;
    },
    setUp: () => y(mt),
    putAway: () => y(Y),
    underpaint(e) {
      h = _(e);
    },
    paintOn(e = 8) {
      if (h) {
        if (h.length) for (let t = 0; t < e && h.length; t += 1) Nt(c, h.shift());
        else Math.random() < 0.3 && Nt(c, Mt(g));
        l.needsUpdate = !0;
      }
    },
    async reveal(e) {
      let t = await new Promise((t) => {
        let n = new Image();
        ((n.crossOrigin = `anonymous`), (n.onload = () => t(n)), (n.onerror = () => t(null)), (n.src = e));
      });
      if (!t) return;
      h = null;
      let n = { t: 0 },
        r = 0;
      await new Promise((e) =>
        I.to(n, {
          t: 1,
          duration: 2.8,
          ease: `power1.inOut`,
          onUpdate: () => {
            for (; r < n.t * 420; r += 1) {
              let e = Math.min(800, (r / 420) * 900 - 60 + (Math.random() - 0.5) * 220),
                n = Math.random() * 600;
              (c.save(),
                c.translate(n, e),
                c.rotate((Math.random() - 0.5) * 1.2 + (e > 470 ? 0.5 : 1.45)),
                c.beginPath(),
                c.ellipse(0, 0, 26 + Math.random() * 30, 9 + Math.random() * 8, 0, 0, Math.PI * 2),
                c.clip(),
                c.setTransform(1, 0, 0, 1, 0, 0),
                c.drawImage(t, 0, 0, 600, 800),
                c.restore());
            }
            l.needsUpdate = !0;
          },
          onComplete: () => {
            (c.drawImage(t, 0, 0, 600, 800), (l.needsUpdate = !0), e());
          },
        }),
      );
    },
  };
}
var Ot = [
    [
      [232, 118],
      [238, 365],
      [250, 612],
    ],
    [
      [470, 138],
      [468, 380],
      [462, 630],
    ],
    [
      [234, 168],
      [469, 186],
    ],
    [
      [235, 226],
      [469, 242],
    ],
    [
      [236, 286],
      [468, 300],
    ],
    [
      [170, 430],
      [240, 365],
      [470, 380],
      [420, 452],
      [170, 430],
    ],
    [
      [172, 432],
      [176, 690],
    ],
    [
      [418, 454],
      [410, 722],
    ],
    [
      [176, 600],
      [410, 632],
    ],
    [
      [252, 560],
      [462, 580],
    ],
    [
      [176, 640],
      [250, 585],
    ],
    [
      [410, 680],
      [462, 610],
    ],
  ],
  kt = (e) => {
    let t = new m(e),
      n = {};
    return (t.getHSL(n, f), n);
  },
  Q = (e, t, n = null, r = 0) => {
    let i = kt(e);
    return `#${new m().setHSL((i.h + r + 1) % 1, n ?? i.s, t, f).getHexString()}`;
  },
  At = (e, t) => [e[0] + (Math.random() - 0.5) * t, e[1] + (Math.random() - 0.5) * t];
function jt(e) {
  let t = [],
    n = (e, t) => e + Math.random() * (t - e);
  for (let e = 0; e < 14; e += 1) {
    let r = n(0, 800);
    t.push([
      `wash`,
      e % 2 ? `#c8975a` : `#b88a52`,
      n(70, 110),
      0.22,
      [
        [-20, r],
        [620, r + n(-60, 60)],
      ],
    ]);
  }
  t.push(
    [
      `line`,
      `#2e4fb3`,
      4,
      0.75,
      [
        [0, 470],
        [600, 482],
      ],
    ],
    [
      `line`,
      `#2e4fb3`,
      4,
      0.75,
      [
        [520, 0],
        [522, 476],
      ],
    ],
  );
  for (let e of Ot) t.push([`line`, `#2e4fb3`, 5, 0.85, e.map((e) => At(e, 4))]);
  let r = kt(e).h,
    i = r > 0.22 && r < 0.8,
    a = i ? e : Q(e, 0.6, 0.45, 0.5),
    o = i ? Q(e, 0.58, 0.72, 0.5) : e,
    s = Q(a, 0.5, 0.45),
    c = Q(a, 0.62, 0.4),
    l = (e, t) => e > 160 && e < 480 && t > 110 && t < 730 && !(t < 360 && e > 250 && e < 460 && t % 60 > 30);
  for (let e = 0; e < 420; e += 1) {
    let r = n(-10, 610),
      i = n(-10, 465);
    (l(r, i) && Math.random() < 0.85) ||
      t.push([
        `dab`,
        [s, c, s, Q(a, 0.4, 0.5)][e % 4],
        n(14, 21),
        0.92,
        [
          [r, i],
          [r + n(-4, 4), i + n(26, 44)],
        ],
      ]);
  }
  for (let e = 0; e < 330; e += 1) {
    let r = n(-30, 620),
      i = n(470, 810);
    (l(r, i) && Math.random() < 0.75) ||
      t.push([
        `dab`,
        [`#b6563a`, `#c8683f`, `#a24a32`, `#d27a48`][e % 4],
        n(14, 20),
        0.92,
        [
          [r, i],
          [r + n(30, 50), i + n(10, 20)],
        ],
      ]);
  }
  for (let e = 0; e < 9; e += 1) {
    let e = n(500, 790);
    t.push([
      `line`,
      `#5f8a5a`,
      3,
      0.7,
      [
        [n(0, 300), e],
        [n(300, 600), e + n(10, 40)],
      ],
    ]);
  }
  let u = Q(o, Math.min(0.82, kt(o).l + 0.18)),
    d = Q(o, Math.max(0.16, kt(o).l - 0.2));
  for (let e of Ot.slice(0, 5).concat(Ot.slice(6)))
    t.push(
      [`line`, o, 17, 0.96, e.map((e) => At(e, 2))],
      [`line`, d, 7, 0.8, e.map((e) => [e[0] + 5, e[1] + 3])],
      [`line`, u, 5, 0.85, e.map((e) => [e[0] - 4, e[1] - 3])],
    );
  for (let e = 0; e < 46; e += 1) {
    let r = Math.random(),
      i = Math.random(),
      a = 170 + 70 * (1 - r) * i + 300 * r * (1 - i) + 250 * r * i,
      o = 430 + -65 * (1 - r) * i + -50 * r * (1 - i) + 22 * r * i;
    t.push([
      `dab`,
      [`#c99a45`, `#e0b45a`, `#b0843a`][e % 3],
      n(7, 11),
      0.95,
      [
        [a, o],
        [a + n(-14, 14), o + n(-6, 6)],
      ],
    ]);
  }
  for (let e of Ot) t.push([`line`, `#1f2a4a`, 4, 0.9, e.map((e) => At(e, 3))]);
  return t;
}
function Mt(e) {
  let t, n;
  do ((t = Math.random() * 600), (n = Math.random() * 800));
  while (t > 150 && t < 490 && n > 100 && n < 740);
  let r = kt(e).h > 0.22 && kt(e).h < 0.8;
  return [
    `dab`,
    n > 470
      ? Math.random() < 0.5
        ? `#d27a48`
        : `#a24a32`
      : Q(r ? e : Q(e, 0.6, 0.45, 0.5), 0.42 + Math.random() * 0.25, 0.45),
    8 + Math.random() * 6,
    0.9,
    [[t, n], n > 470 ? [t + 34, n + 12] : [t + 2, n + 30]],
  ];
}
function Nt(e, [t, n, r, i, a]) {
  (e.save(), (e.lineCap = `round`), (e.lineJoin = `round`), (e.globalAlpha = i));
  let o = (t = 0, n = 0) => {
    (e.beginPath(), e.moveTo(a[0][0] + t, a[0][1] + n));
    for (let r of a.slice(1)) e.lineTo(r[0] + t, r[1] + n);
  };
  ((e.strokeStyle = n),
    (e.lineWidth = r),
    o(),
    e.stroke(),
    t === `dab` &&
      ((e.globalAlpha = i * 0.45),
      (e.lineWidth = r * 0.3),
      (e.strokeStyle = `rgba(255,248,230,0.9)`),
      o(-r * 0.22, -r * 0.22),
      e.stroke(),
      (e.strokeStyle = `rgba(30,24,40,0.8)`),
      o(r * 0.3, r * 0.3),
      e.stroke()),
    e.restore());
}
var Pt = [
  {
    src: `worlds/vangogh/art/boch.jpg`,
    frame: 0.075,
    corners: [
      [0.815, 3.278, -7.018],
      [0.924, 3.247, -6.477],
      [0.915, 2.475, -6.519],
      [0.807, 2.506, -7.06],
    ],
  },
  {
    src: `worlds/vangogh/art/milliet.jpg`,
    frame: 0.06,
    corners: [
      [1.059, 2.921, -5.801],
      [1.135, 2.912, -5.418],
      [1.133, 2.436, -5.428],
      [1.057, 2.445, -5.811],
    ],
  },
];
function Ft() {
  let e = document.createElement(`canvas`);
  ((e.width = 64), (e.height = 256));
  let t = e.getContext(`2d`);
  ((t.fillStyle = `#cf6d27`), t.fillRect(0, 0, 64, 256));
  for (let e = 0; e < 90; e += 1) {
    ((t.strokeStyle = [`#e58a35`, `#b9561d`, `#f0a24a`, `#c4622a`][e % 4]),
      (t.globalAlpha = 0.55),
      (t.lineWidth = 2 + Math.random() * 5));
    let n = Math.random() * 64,
      r = Math.random() * 256;
    (t.beginPath(), t.moveTo(n, r), t.lineTo(n + (Math.random() - 0.5) * 6, r + 20 + Math.random() * 40), t.stroke());
  }
  let n = new o(e);
  return ((n.colorSpace = f), (n.wrapS = n.wrapT = g), n);
}
function It() {
  let e = document.createElement(`canvas`);
  e.width = e.height = 64;
  let t = e.getContext(`2d`);
  ((t.filter = `blur(5px)`), (t.fillStyle = `#000`), t.fillRect(10, 10, 44, 44));
  let n = new o(e);
  return ((n.colorSpace = f), n);
}
function Lt(e, t, n = `#ffffff`) {
  return new te({
    uniforms: { map: { value: e }, uDrain: t, uTint: { value: new m(n) } },
    vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
      uniform sampler2D map; uniform float uDrain; uniform vec3 uTint; varying vec2 vUv;
      void main() {
        vec3 c = pow(max(texture2D(map, vUv).rgb * uTint, 0.0), vec3(1.0 / 2.2));
        float l = dot(c, vec3(0.299, 0.587, 0.114));
        vec3 ink = mix(vec3(0.29, 0.2, 0.13), vec3(0.93, 0.89, 0.8), smoothstep(0.1, 0.62, l));
        gl_FragColor = vec4(pow(mix(c, ink, uDrain), vec3(2.2)), 1.0);
        #include <colorspace_fragment>
      }`,
    toneMapped: !1,
  });
}
function Rt(e, t) {
  let n = new l(),
    r = Lt(Ft(), t),
    i = new M({ color: `#2c2a3e`, toneMapped: !1 }),
    a = new M({ map: It(), color: `#2a2340`, transparent: !0, opacity: 0.32, depthWrite: !1, toneMapped: !1 });
  for (let o of Pt) {
    let s = n.load(re(o.src));
    ((s.colorSpace = f), (s.anisotropy = 8));
    let [c, l, , d] = o.corners.map((e) => new N(...e)),
      p = l.clone().sub(c),
      m = d.clone().sub(c),
      h = p.length(),
      g = m.length(),
      _ = p.normalize(),
      y = m.normalize().negate(),
      b = new N().crossVectors(_, y),
      x = new ee();
    (x.quaternion.setFromRotationMatrix(new T().makeBasis(_, y, b)),
      x.position
        .copy(c)
        .addScaledVector(_, h / 2)
        .addScaledVector(y, -g / 2));
    let S = new v(new D(h, g), Lt(s, t, `#f1ebe0`));
    ((S.position.z = 0.014), x.add(S));
    let C = o.frame,
      w = 0.035;
    for (let [e, t, n, i] of [
      [h + 2 * C, C, 0, (g + C) / 2],
      [h + 2 * C, C, 0, -(g + C) / 2],
      [C, g, -(h + C) / 2, 0],
      [C, g, (h + C) / 2, 0],
    ]) {
      let a = new v(new u(e, t, w), r);
      (a.position.set(n, i, w / 2), x.add(a));
    }
    for (let [e, t, n, r] of [
      [h + 2 * C + 0.012, 0.012, 0, g / 2 + C],
      [h + 2 * C + 0.012, 0.012, 0, -g / 2 - C],
      [0.012, g + 2 * C, -h / 2 - C, 0],
      [0.012, g + 2 * C, h / 2 + C, 0],
      [h, 0.006, 0, g / 2],
      [h, 0.006, 0, -g / 2],
      [0.006, g, -h / 2, 0],
      [0.006, g, h / 2, 0],
    ]) {
      let a = new v(new u(e, t, 0.037000000000000005), i);
      (a.position.set(n, r, w / 2), x.add(a));
    }
    let E = new v(new D(h + 2 * C + 0.1, g + 2 * C + 0.1), a);
    (E.position.set(0.012, -0.03, 0.003), x.add(E), e.add(x));
  }
}
var zt = (e, t) => {
    let n = new N(t.x ?? t[0], t.y ?? t[1], t.z ?? t[2]).project(e);
    return n.z > 1 ? null : { x: (n.x * 0.5 + 0.5) * window.innerWidth, y: (-n.y * 0.5 + 0.5) * window.innerHeight };
  },
  Bt = null,
  Vt = null,
  Ht = null,
  Ut = null,
  Wt = { uTilt: 0.25, uBand: 0.22, uFocus: 0.5 },
  Gt = () => (Ht?.quality?.low ? { uTilt: 0, uBand: 0.22, uFocus: 0.5 } : Wt);
function Kt(e, t) {
  let n = Ht?.finish?.uniforms;
  if (!n) return () => {};
  (I.to(n.uTilt, { value: 0.9, duration: 0.6, ease: `power2.out`, overwrite: `auto` }), (n.uBand.value = 0.1));
  let r = !0,
    i = () => {
      if (!r) return;
      let a = zt(e, t);
      (a && (n.uFocus.value += (1 - a.y / window.innerHeight - n.uFocus.value) * 0.25), requestAnimationFrame(i));
    };
  return (
    i(),
    () => {
      r = !1;
      let e = Gt();
      I.to(n.uTilt, {
        value: e.uTilt,
        duration: 0.8,
        ease: `power2.inOut`,
        overwrite: `auto`,
        onComplete: () => {
          ((n.uBand.value = e.uBand), (n.uFocus.value = e.uFocus));
        },
      });
    }
  );
}
async function qt({ extras: e, camera: t, ui: n, lang: r, at: i, puffs: a, sound: o }) {
  let s = e.sunflowers;
  if (s) {
    let e = s.centre.clone(),
      i = Kt(t, e);
    (await Ke(n, {
      text: q(r, `按住，上色`, `Hold to paint`),
      anchor: () => zt(t, e),
      ms: 1700,
      onProgress: (e) => s.paintTo(e),
    }),
      a?.puff(s.mouth.clone().setY(s.mouth.y + 0.15), { color: `#ffe27a`, count: 14, size: 0.45 }),
      o.sparkle(),
      await s.finish(),
      setTimeout(i, 900));
    return;
  }
  let c = e.paint,
    l = st(J.chrome.hex),
    u = new N(i.x, i.y, i.z),
    d = new N(),
    f = new N(0, 1, 0),
    p = 0,
    m = Kt(t, u);
  (await Ke(n, {
    text: q(r, `按住，上色`, `Hold to paint`),
    anchor: () => zt(t, u),
    ms: 1700,
    onProgress: (e) => {
      for (; p < e * 26;) {
        let t = p * 2.4,
          n = 0.03 + 0.12 * Math.sqrt(p / 26);
        (d.set(u.x + Math.cos(t) * n, u.y + Math.sin(t * 0.7) * n * 0.8, u.z + Math.sin(t) * n * 0.6),
          c.dab(d, d.clone().sub(u).add(f.clone().multiplyScalar(0.02)), l, 0.07 + 0.08 * e, 0.85),
          (p += 1));
      }
      c.flush();
    },
  }),
    a?.puff(u.clone(), { color: `#ffe27a`, count: 14, size: 0.45 }),
    o.sparkle(),
    setTimeout(m, 1400));
}
async function Jt({ extras: e, camera: t, ui: n, lang: r, at: i }) {
  let a = e.paint;
  if (Ut && Ut.k >= 0.99) return;
  let o = new N(i.x, i.y, i.z);
  a.set(`sunC`, o);
  let s = Kt(t, o);
  (await Ke(n, {
    text: q(r, `按住，把窗户打开`, `把窗户打开 · Hold to open`),
    anchor: () => zt(t, o),
    ms: 1500,
    onProgress: (e) => {
      (Ut?.open(0.22 * e * (2 - e)), a.set(`sun`, e * 0.45), Bt?.set(0.6 + 0.3 * e));
    },
  }),
    K.wind());
  let c = { o: Ut?.k ?? 0, v: a.get(`sun`), l: Bt?.k ?? 0.9 };
  (await new Promise((e) => {
    let t = I.timeline({ onComplete: e });
    (t.to(
      c,
      {
        o: 1,
        duration: 1.5,
        ease: `back.out(1.3)`,
        onUpdate: () => {
          (Ut?.open(c.o), Bt?.widen(Math.min(1, c.o)));
        },
      },
      0,
    ),
      t.to(
        c,
        {
          v: 1,
          l: 1.6,
          duration: 1.8,
          ease: `power2.out`,
          onUpdate: () => {
            (a.set(`sun`, c.v), Bt?.set(c.l));
          },
        },
        0.15,
      ));
  }),
    setTimeout(s, 1200));
}
var Yt = [
    {
      id: `sunflowers`,
      at: [-0.85, 1.15, -0.8],
      stand: [0.3, -0.75],
      glow: 0.38,
      label: { zh: `桌上的向日葵`, en: `向日葵 · Sunflowers` },
      lines: {
        zh: [`八月我画向日葵。花谢得快，我天一亮就画，一口气画完。`],
        en: [`这是向日葵。八月，我画了很多向日葵。`],
      },
      act: qt,
      after: {
        zh: [`我画它们的那股劲儿，就像马赛人喝鱼汤。`],
        en: [`黄色，像太阳。我很喜欢黄色。`],
      },
    },
    {
      id: `window`,
      at: [-1.06, 2.6, -8.2],
      stand: [-0.35, -4.5],
      radius: 1.6,
      glow: 0.95,
      label: { zh: `南方的窗`, en: `窗户 · Window` },
      lines: {
        zh: [`请你把窗户打开。`, `我二月从巴黎来到阿尔勒，是来找日本那样的光的。`],
        en: [`请你把窗户打开。`],
      },
      act: Jt,
      after: {
        zh: [`这里的太阳是硫磺色的，影子是蓝的、紫的。`, `我二十七岁才开始画。到现在，画几乎一张也没卖出去。`],
        en: [`你看，太阳进来了。`, `我二十七岁才开始画画。我的画，没有人买。`],
      },
    },
    {
      id: `bed`,
      at: [0.72, 1.35, -4.42],
      stand: [0.6, -3.3],
      optional: !0,
      glow: 1,
      label: { zh: `黄色的床`, en: `床 · Bed` },
      lines: {
        zh: [`这就是我画的那张床。松木的，结实，涂成了新鲜黄油的颜色。`],
        en: [`这是我的床。床是黄色的。我想在这里好好休息。`],
      },
    },
    {
      id: `mirror`,
      at: [-1.25, 1.75, -1.6],
      stand: [-0.45, -1.7],
      optional: !0,
      glow: 0.5,
      label: { zh: `墙上的镜子`, en: `镜子 · Mirror` },
      lines: {
        zh: [`我请不起模特，常常对着这面镜子画我自己。`, `九月我把自己画成一个日本和尚，剃了头，送给了高更。`],
        en: [`我没有钱请人来，就看着镜子画我自己。`, `九月，我画了我自己，送给朋友高更。`],
      },
    },
    {
      id: `portraits`,
      at: [0.78, 2.62, -5.92],
      stand: [0.1, -5.5],
      optional: !0,
      glow: 0.75,
      label: { zh: `墙上的朋友`, en: `朋友 · Friends` },
      lines: {
        zh: [
          `墙上是我的朋友：诗人欧仁·博赫，还有轻骑兵中尉米列。`,
          `博赫的脑袋后面，我没画那面平常的墙。我画的是无穷：最深的蓝，上面是星星。`,
        ],
        en: [`墙上是我的朋友。`, `我在朋友后面画了蓝色的天，天上有很多星星。`],
      },
    },
  ],
  Xt = {
    sunflowers: { zh: `向日葵`, en: `the sunflowers` },
    window: { zh: `窗`, en: `the window` },
    bed: { zh: `床`, en: `the bed` },
    mirror: { zh: `镜子`, en: `the mirror` },
    portraits: { zh: `墙上的画`, en: `the pictures on the wall` },
  },
  Zt = () => {
    let e = ae();
    return Object.values(z).find((t) => t.open && t.id !== `vangogh` && !e[t.id]) || null;
  },
  Qt = {
    zh: [`啊——请进，请进。小心地板，它有点斜。`, `先看看吧。亮着的东西，都可以碰。`],
    en: [`你好，请进，请进！`, `你看看吧。亮的东西，你都可以点。`],
  },
  $ = null,
  $t = { arrived: null, first: null };
function en(e, t) {
  let n = (Array.isArray(e?.plan?.palette) ? e.plan.palette : [])
      .filter((e) => J[e?.pigment] && e.detail)
      .slice(0, 3)
      .map((e) => ({
        id: e.pigment,
        name: J[e.pigment][t],
        hex: J[e.pigment].hex,
        detail: e.detail,
        say: e.say || `${J[e.pigment][t]}——${e.detail}。`,
      })),
    r = [
      [`chrome`, q(t, `你走来的那条路`, `the road you came by`)],
      [`prussian`, q(t, `没人看见的钟点`, `the hours nobody saw`)],
      [`emerald`, q(t, `还在长的东西`, `what is still growing`)],
    ];
  for (let [e, i] of r)
    n.length < 3 &&
      !n.some((t) => t.id === e) &&
      n.push({ id: e, name: J[e][t], hex: J[e].hex, detail: i, say: q(t, `${J[e].zh}——${i}。`, `${J[e].en} — ${i}.`) });
  return n;
}
async function tn({ camera: e, scene: t, sleep: n, say: r, lang: i, underneath: a }) {
  if (!wt) return;
  let o = new te({
      transparent: !0,
      depthWrite: !1,
      depthTest: !1,
      toneMapped: !1,
      uniforms: { map: { value: wt }, uOpen: { value: 0 }, uAlpha: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
      uniform sampler2D map; uniform float uOpen, uAlpha; varying vec2 vUv;
      float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1.0, 0.0)), f.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), f.x), f.y); }
      void main() {
        vec4 c = texture2D(map, vUv);
        // Strokes: noise drawn out along a dab's length; the canvas lets go of them from its edges in.
        vec2 q = vec2(vUv.x * 10.0 + vUv.y * 4.0, vUv.y * 30.0 - vUv.x * 6.0);
        float stroke = n(q) * 0.6 + n(q * 2.3 + 7.0) * 0.4;
        float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)) * 2.0;
        float keep = smoothstep(uOpen - 0.06, uOpen + 0.06, edge * 0.75 + stroke * 0.45);
        gl_FragColor = vec4(c.rgb, uAlpha * keep);
      }`,
    }),
    s = new v(new D(St.w, St.h), o);
  ((s.renderOrder = 40), (s.frustumCulled = !1), t.add(s));
  let c = { t: 0 },
    l = new N(...St.at),
    u = new N(0.42, -0.62, -0.95),
    d = new O(-0.55, -0.45, 0.18),
    f = new _().setFromEuler(d),
    p = new _(),
    m = () => {
      let t = u.clone().lerp(l, c.t);
      (s.position.copy(e.localToWorld(t)),
        s.quaternion.copy(e.quaternion).multiply(f.clone().slerp(p, c.t)),
        s.scale.setScalar(0.55 + 0.45 * c.t));
    },
    h = !0,
    g = () => {
      h && (m(), requestAnimationFrame(g));
    };
  (g(),
    K.swell(2.4),
    I.to(o.uniforms.uAlpha, { value: 1, duration: 0.6, ease: `power1.out` }),
    await new Promise((e) => I.to(c, { t: 1, duration: 2.4, ease: `power3.inOut`, onComplete: e })),
    K.stroke(2),
    await r([
      q(
        i,
        `就是这儿。画它的时候，我就站在你这个位置。`,
        `Right here. When I painted it, I stood where you are standing.`,
      ),
    ]),
    await a?.(),
    await n(300),
    K.wind(),
    await new Promise((e) => I.to(o.uniforms.uOpen, { value: 1.25, duration: 2.4, ease: `power1.in`, onComplete: e })),
    (h = !1),
    t.remove(s),
    o.dispose(),
    s.geometry.dispose());
}
async function nn(e) {
  let {
      cam: t,
      host: n,
      player: r,
      camera: i,
      stage: a,
      ui: o,
      voice: c,
      world: l,
      extras: u,
      lang: d,
      visit: f,
      sleep: p,
      puffs: m,
    } = e,
    h = u.paint,
    g = (e, t) => c.say(ot[d], e, { role: `vangogh`, ...t }),
    _ = en(f, d),
    v = f?.plan?.chair || {};
  $ = { voice: c, lang: d, colours: _, chosen: null, things: (v.things || []).filter(Boolean) };
  let y = [
    q(
      d,
      `我写信告诉提奥：这一回只是我的卧室，可颜色要在这里做所有的事。`,
      `I wrote to Theo: this time it's just simply my bedroom, only here colour is to do everything.`,
    ),
    q(d, `我念一样，你点一样。`, `I'll read it a thing at a time. You touch each one.`),
  ];
  (c.prefetch([...y, ...dt.map((e) => e[d])], `vangogh`), (r.avatar.object.visible = !1), X && (X.group.visible = !1));
  let b = a.baseFov;
  (a.setFov(50),
    t.frame(new N(...xt[0]), new N(...xt[1]), { fit: !1 }),
    I.to(n.object.position, { x: -0.8, z: -0.55, duration: 1, ease: `power2.inOut` }),
    document.body.classList.add(`vg-reading`),
    await p(600));
  let x = (e, t) =>
    new Promise((n) => {
      let r = { v: h.get(`drain`) };
      I.to(r, { v: e, duration: t, ease: `power1.inOut`, onUpdate: () => h.set(`drain`, r.v), onComplete: n });
    });
  (await tn({
    camera: i,
    scene: e.scene,
    sleep: p,
    say: g,
    lang: d,
    underneath: async () => {
      (Z?.hideAll(), u.sunflowers?.hide(), h.clearFills(), await Promise.all([Z?.drain(1, 0.5), x(1, 1.4)]));
    },
  }),
    await g(y));
  let S = new s(),
    C = new j(),
    w = (e, t) => {
      (C.set((e / window.innerWidth) * 2 - 1, -(t / window.innerHeight) * 2 + 1), S.setFromCamera(C, i));
      let n = l.hit(S.ray.origin, S.ray.direction, 14);
      return n == null ? null : S.ray.origin.clone().addScaledVector(S.ray.direction, n - 0.02);
    },
    T = 0;
  c.prefetch(
    _.map((e) => e.say),
    `vangogh`,
  );
  for (let [e, t] of dt.entries()) {
    let n = Z?.pointOf(...t.uv) || new N(...t.at),
      r = Ge(o, { anchor: () => zt(i, n), hint: e === 0 ? q(d, `点一下`, `Tap`) : ``, ms: e === 0 ? 12e3 : 8e3 }),
      a = g([t[d]], { hold: r }),
      s = await r;
    s && (T += 1);
    let c = (s && w(s.x, s.y)) || n;
    (K.stroke(e),
      m?.puff(c.clone(), { color: t.hex, count: 12, size: 0.4 }),
      Z?.reveal(t.fill, { from: c, speed: 3.4 }),
      h.fill(ut[t.fill], { from: c, color: st(t.hex), speed: 4.5 }),
      await a,
      await p(260));
  }
  (Z?.drain(0, 1.8),
    x(0, 1.8),
    await g([
      q(
        d,
        `看这幅画，应该让头脑休息。或者说，让想象力休息。`,
        `Looking at the picture ought to rest the mind, or rather the imagination.`,
      ),
    ]));
  let E = { p: new N(...xt[0]), l: new N(...xt[1]) },
    D = { p: new N(...pt[0]), l: new N(...pt[1]) },
    O = { t: 0 },
    k = new Promise((e) =>
      I.to(O, {
        t: 1,
        duration: 2.2,
        ease: `power2.inOut`,
        onUpdate: () => t.frame(E.p.clone().lerp(D.p, O.t), E.l.clone().lerp(D.l, O.t), { cut: !0 }),
        onComplete: e,
      }),
    );
  (($.glowAt = { at: new N(...ft), r: 0.75 }),
    await g([q(d, `两把椅子，一把是我的，一把留给朋友。`, `Two chairs: one is mine, one is for a friend.`)]),
    await k,
    await g([q(d, `这一把，给你。它是什么颜色，你来定。`, `This one is yours. Its colour is yours to choose.`)]));
  let A = We(o);
  (A.fill(_), A.show(), document.body.classList.remove(`vg-reading`), await p(450));
  for (let e = 0; e < _.length; e += 1) (A.reveal(e), await g([_[e].say]));
  let { i: M, chose: ee } = await A.choose({ ms: 25e3, fallback: 0 }),
    P = _[M];
  (($.chosen = P), K.stroke(5), K.swell(2.2), m?.puff(new N(...ft), { color: P.hex, count: 18, size: 0.55 }));
  let te = Z
    ? Z.paintChair(st(P.hex), { from: new N(...ft).setY(ft[1] + 0.45), reach: 1.5, speed: 0.9 })
    : h.fill(ut.chair, { from: new N(...ft), color: st(P.hex), reach: 1.6, speed: 1.4 });
  (($.glowAt = null), ee || (await g([q(d, `那就${P.name}吧。`, `${P.name}, then.`)])), await te);
  let F = Object.entries(J).some(([e, t]) => e !== P.id && v.say?.toLowerCase().includes(t[d].toLowerCase()));
  return (
    await g([v.say && !F ? v.say : q(d, `${P.name}。这把椅子，是你的了。`, `${P.name}. This chair is yours now.`)]),
    A.hide(),
    await p(500),
    A.dispose(),
    a.setFov(b),
    X && (X.group.visible = !0),
    (r.avatar.object.visible = !0),
    {
      colour: { id: P.id, detail: P.detail },
      palette: _.map((e) => ({ id: e.id, detail: e.detail })),
      touched: T,
      chose: ee,
    }
  );
}
var rn = !1,
  an = 0,
  on = 0,
  sn = 0,
  cn = 0,
  ln = null,
  un = {
    zh: [
      (e) => `${e.name}要先上，趁它还亮。`,
      (e) => `再用${J[e.id].against.zh}衬它。黄配紫，蓝配橙，红配绿。`,
      () => `提奥说我画得太快。可是光不等人。`,
    ],
    en: [
      () => `先用这个颜色。`,
      () => `再用另一个颜色。黄和紫，蓝和橙，红和绿，放在一起很好看。`,
      () => `提奥说我画得太快。可是太阳不等人。`,
    ],
  };
function dn(e) {
  let t = [],
    n = $t.arrived;
  if (n) {
    let r = n.getHours(),
      i = n.getMinutes();
    if (e === `en`)
      t.push(
        `At ${((r + 11) % 12) + 1}:${String(i).padStart(2, `0`)} ${r < 5 ? `in the night` : r < 12 ? `in the morning` : r < 18 ? `in the afternoon` : `in the evening`} you opened this door.`,
      );
    else {
      let e = `零一二三四五六七八九`,
        n = (t) =>
          t < 10
            ? e[t]
            : t < 20
              ? `十${t % 10 ? e[t % 10] : ``}`
              : `${e[Math.floor(t / 10)]}十${t % 10 ? e[t % 10] : ``}`,
        a = r < 5 ? `凌晨` : r < 8 ? `早上` : r < 11 ? `上午` : r < 13 ? `中午` : r < 18 ? `下午` : `晚上`,
        o = r === 0 ? `零` : (r % 12 || 12) == 2 ? `两` : n(r > 12 ? r - 12 : r);
      t.push(`${a}${o}点${i === 0 ? `整` : i < 10 ? `零${e[i]}分` : `${n(i)}分`}，你推开了这扇门。`);
    }
  }
  let r = Xt[$t.first];
  r && t.push(q(e, `你先碰了${r.zh}。`, `The first thing you touched was ${r.en}.`));
  let i = $?.chosen;
  return (
    i &&
      t.push(
        q(
          e,
          `给你的椅子，你挑了${i.name}——「${i.detail}」。`,
          `For your chair you chose ${i.name.toLowerCase()} — "${i.detail}".`,
        ),
      ),
    t
  );
}
var fn = {
    id: `vangogh`,
    who: ot,
    role: `vangogh`,
    art: { accent: L.vangogh.cobalt, stamp: `vangogh`, tripo: !1 },
    world: { floor: { maxClimb: 1, walkRadius: 9.5 } },
    host: {
      model: `models/chars/vangogh.glb`,
      height: 1.74,
      at: _t,
      yaw: 0.66,
      body: `#3f5f8a`,
      hair: `#c1652d`,
      hello: `wave`,
    },
    spawn: { x: 0.15, z: -0.85, h: Math.PI },
    beats: Yt,
    inviteAfter: 2,
    greeting: Qt,
    hm: { zh: `啊……`, en: `Ah…` },
    chips: {
      zh: [`提奥是个怎样的人？`, `你为什么来阿尔勒？`, `颜料够用吗？`],
      en: [`你喜欢什么颜色？`, `提奥是谁？`, `你为什么来这里？`],
    },
    chatFallback: {
      zh: `啊，我脑子里全是颜色，一下子说不出话了。再问我一次？`,
      en: `对不起，我没听清楚。请你再说一次？`,
    },
    async setup({ scene: e, world: t, heightAt: n, stage: r }) {
      (($t.arrived = new Date()),
        ($t.first = null),
        (Z = await Ce({ scene: e, renderer: r.renderer, quality: r.quality })));
      let i = !!Z.near;
      (i && (t.splat.visible = !1),
        (t.heightAt = i
          ? (e, t) => Z.floorY(t)
          : (e, t) => {
              let r = F.smoothstep(-t, 3.05, 3.35);
              return r <= 0 ? n(e, t) : n(e, t) * (1 - r) + Z.floorY(t) * r;
            }));
      let a = t.heightAt,
        o = t.hit;
      ((t.hit = (e, t, n) => {
        let r = e.isVector3 ? e : new N().fromArray(e),
          a = t.isVector3 ? t : new N().fromArray(t),
          s = Z.hit(r, a, n);
        if (i) return s;
        let c = o(e, t, n);
        return (c != null && r.z + a.z * c < Ct[1] + 0.1 && (c = null), s == null ? c : c == null ? s : Math.min(s, c));
      }),
        Rt(e, Z.uniforms.uDrain),
        (X = Dt(e, a)));
      let s = null,
        c = Z.near?.marks.table;
      if (c) {
        let t = new N(...c.origin),
          n = new N(...c.along),
          i = new N(...c.inward),
          a = t
            .clone()
            .addScaledVector(n, new N(...Z.near.marks.vase).sub(t).dot(n))
            .addScaledVector(i, c.depth / 2);
        ((a.y = Z.floorY(a.z) + c.rise),
          (s = await Be({ scene: e, quality: r.quality, uniforms: Z.uniforms, base: a, room: i, along: n })));
      }
      if (s) {
        let e = s.centre,
          t = Yt.find((e) => e.id === `sunflowers`);
        ((t.at = [e.x, e.y, e.z]), (t.glow = 0.55));
      }
      (!i && t.splats >= 3e5 && r?.quality?.strong && (t.spark.falloff = 0.6), (Ht = r));
      let u = r?.finish?.uniforms;
      if (u)
        for (let [e, t] of Object.entries({
          uSat: 0.88,
          uVibrance: 0.08,
          uContrast: 1.04,
          uWarm: 0,
          uVignette: 0.24,
          uGrain: 0.028,
          ...Gt(),
        }))
          u[e].value = t;
      (r?.bloom &&
        !r.quality?.low &&
        ((r.bloom.enabled = !0), r.setBloom({ strength: 0.15, radius: 0.5, threshold: 0.88 })),
        (Bt = ke(e, { heightAt: a, lowEnd: !!r?.quality?.low })));
      try {
        Ut = it({ scene: e, bedroom: Z, quality: r.quality, sunDir: W });
      } catch (e) {
        (console.warn(`casement`, e), (Ut = null));
      }
      ((Vt = Ae(e, { heightAt: a })),
        (wt = new l().load(re(`worlds/vangogh/painting.jpg`))),
        (wt.colorSpace = f),
        (wt.anisotropy = 8));
      let d = i
        ? Et()
        : await le({
            world: t,
            box: { minX: -2.9, maxX: 2, minY: -0.15, maxY: 4.1, minZ: -8.6, maxZ: 1.5 },
            fills: lt,
            helpers: ct,
          });
      d.set(`cut`, new j(...Ct));
      let p = new URLSearchParams(location.search);
      return (
        p.has(`vgzones`)
          ? d.fillAll([`#e040fb`, `#ff3b30`, `#ffd400`, `#00e5ff`, `#34c759`, `#1e5bff`].map(st))
          : p.has(`vgletter`) &&
            d.fillAll([...dt.map((e) => st(e.hex)), st(J[p.get(`vgletter`)]?.hex || J.chrome.hex)]),
        {
          easel: X,
          paint: d,
          bedroom: Z,
          sunflowers: s,
          light: Bt,
          colliders: [X.collider, ...Tt(Z.marks, Z.near?.marks)],
        }
      );
    },
    update(e, t, { interactions: n, extras: r, staging: i, intro: a, heard: o, host: s, player: c, camera: l }) {
      (Bt?.update(e, t, Ht?.renderer), Ut?.update(t), Vt?.update(l, [c?.avatar?.object, s?.object]));
      let u = r.paint;
      if (!u) return;
      !$t.first && o.size && ($t.first = o.values().next().value);
      let d = !i && !a ? n.current : null,
        f = d && Yt.find((e) => e.id === d.id && !o.has(e.id)),
        p = $?.glowAt ? { key: `chair`, ...$.glowAt } : f ? { key: f.id, at: new N(...f.at), r: f.glow || 0.6 } : null;
      p && u.glowFor !== p.key && ((u.glowFor = p.key), u.set(`glowC`, p.at), u.set(`glowR`, p.r));
      let m = +!!p,
        h = u.get(`glow`);
      if (
        (Math.abs(h - m) > 0.01 ? u.set(`glow`, h + (m - h) * (1 - Math.exp(-e * 5))) : h !== m && u.set(`glow`, m), Z)
      ) {
        let e = Z.uniforms;
        ((e.uGlow.value = u.get(`glow`)),
          e.uGlowC.value.copy(u.get(`glowC`)),
          (e.uGlowR.value = u.get(`glowR`)),
          (e.uSun.value = u.get(`sun`)),
          e.uSunC.value.copy(u.get(`sunC`)));
      }
      if (!rn || !X?.up) return;
      let g = $?.chosen;
      (t > an && ((an = t + 0.32 + Math.random() * 0.2), X.paintOn(10)),
        t > sn && ((sn = t + 4 + Math.random() * 3), s.play?.(Math.random() < 0.5 ? `agree` : `look-around`)),
        on < 0 && (on = t + 9));
      let _ =
        document.getElementById(`subtitle`)?.classList.contains(`show`) || document.body.classList.contains(`talking`);
      if (t > on && $?.voice && g && !_) {
        on = t + 12;
        let e = un[$.lang];
        (cn < e.length && $.voice.say(ot[$.lang], [e[cn](g)], { role: `vangogh` }), (cn += 1));
      }
    },
    action: nn,
    async giftScene({ host: e, lang: t, say: n, sleep: r, cam: i }) {
      let a = $?.chosen;
      (document.body.classList.remove(`vg-reading`),
        X?.setUp(),
        e.object.position.set(ht[0], e.object.position.y, ht[1]),
        i.frame(new N(...vt[0]), new N(...vt[1]), { cut: !0 }),
        e.play?.(`look-around`),
        await n([
          q(
            t,
            `我刚画了高更那把扶手椅：夜里，墙上点着煤气灯，椅面上一支点着的蜡烛，两本小说。`,
            `I've just painted Gauguin's armchair: night, the gas lamp lit on the wall, a burning candle and two novels on the seat.`,
          ),
          q(t, `椅子上没有人，可谁看了都知道，那是他。`, `There's nobody in it, and anyone can tell it's his.`),
        ]),
        X?.underpaint(a?.hex || J.chrome.hex));
      for (let e = 0; e < 6; e += 1) (X?.paintOn(10), await r(300));
      let o = $?.things || [];
      (e.play?.(`agree`),
        await n([
          o.length
            ? q(
                t,
                `现在画你的。椅面上，放${o.map((e) => `「${e}」`).join(`，还有`)}。`,
                `Now yours. On the seat, ${o.map((e) => `"${e}"`).join(` and `)}.`,
              )
            : q(t, `现在画你的。`, `Now yours.`),
        ]),
        (rn = !0),
        (cn = 0),
        (on = -1));
    },
    async onGiftReady({ card: e, cam: t, sleep: n, host: r }) {
      ((rn = !1),
        r && I.to(r.object.position, { x: gt[0], z: gt[1], duration: 0.9, ease: `power2.inOut` }),
        t.frame(new N(...yt[0]), new N(...yt[1]), { fit: !1 }),
        (ln = t),
        await n(700),
        await X?.reveal(e.image),
        await n(600));
    },
    onGiftShown({ host: e }) {
      (ln?.release(), (ln = null), X?.up && (X.putAway(), e.object.position.set(_t[0], e.object.position.y, _t[1])));
    },
    gift: {
      card: `letter`,
      spot: { x: bt.x, z: bt.z, h: Math.PI },
      hostAt: [-0.8, -0.55],
      frame: xt,
      invite: {
        zh: `到门口来，站到我画这间屋子的地方。我念信，你来上色。`,
        en: `请到门口来。我读信，你来画颜色。`,
      },
      labels: {
        go: { zh: `照他的信上色`, en: `Colour it` },
        waiting: { zh: `颜料还没干`, en: `Still wet` },
        again: { zh: `你的椅子`, en: `Your chair` },
      },
      lines: {
        wait: {
          zh: [`颜料涂得厚，干得慢。你去看看你上的色，干了我叫你。`],
          en: [`颜色还没有干。你去看看，好了我叫你。`],
        },
        slow: {
          zh: [`我颜料涂得厚，干得就慢。再等我一会儿。`],
          en: [`还没有干。请你再等一下。`],
        },
        done: { zh: `画好了。来看——这是你的椅子。`, en: `画好了！来看，这是你的椅子。` },
        fail: {
          zh: `哎呀，这块画布不行，颜料全糊了……我们再画一次？`,
          en: `不好，画坏了……我们再画一次，好吗？`,
        },
      },
    },
    exit: { at: [-1.3, 0.32], yaw: Math.PI / 2 },
    farewell: {
      after: { zh: `去吧。那把椅子，我先替你留着。`, en: `再见！你的椅子，我给你留着。` },
      early: {
        zh: `这就要走了？……也好。哪天想看看颜色了，再来。`,
        en: `你要走了吗？好。想看颜色的时候，再来。`,
      },
      async coda({ lang: e, voice: t }) {
        let n = Zt();
        n &&
          (await t.say(
            q(e, `引路人`, `The guide`),
            [q(e, `还早。下一站：${n.short}。`, `Still early. Next: ${n.short}.`)],
            { role: `guide` },
          ));
      },
    },
    arrival: {
      image: `worlds/vangogh/painting.jpg`,
      kind: `gilt`,
      hold: 1800,
      from: xt[0],
      look: [0.15, 1.15, -6],
      fov: 46,
      caption: {
        zh: `<b class="vg-role">当一回画家</b>1888 · 阿尔勒 · 梵高的卧室<small>文森特·梵高《卧室》，1888 年 10 月 · 梵高博物馆藏 · 公有领域</small>`,
        en: `<b class="vg-role">Your turn as the painter</b>1888 · Arles · Van Gogh's bedroom<small>Vincent van Gogh, The Bedroom, October 1888 · Van Gogh Museum, Amsterdam · public domain</small>`,
      },
    },
    light: {
      sky: `#b4b39f`,
      ground: `#aa9883`,
      fill: 1.3,
      key: `#ffd6a5`,
      keyIntensity: 1.6,
      from: W.toArray().map((e) => -e * 6),
      shadow: 0.24,
    },
    look: { marker: `#ffe39a`, background: `#2a2018`, vignette: 0.15 },
    camera: {
      distance: 2.1,
      maxDistance: 2.7,
      height: 1.25,
      pitch: 0.16,
      fov: 56,
      ceiling: 2.35,
      overFurniture: !0,
      box: { minX: -1.7, maxX: 1.8, minZ: -7.7, maxZ: 0.55 },
    },
    shots: {
      room: xt,
      near: [
        [0.9, 1.5, 0.2],
        [-0.9, 1, -1.6],
      ],
      chair: pt,
      easel: vt,
      reveal: yt,
      window: [
        [-0.2, 1.9, -5.6],
        [-1.05, 2.3, -8.05],
      ],
      painted: [
        [1.05, 1.75, -2.2],
        [-0.75, 1.25, -6.6],
      ],
    },
    cardOf: ({ shot: e, image: t, lang: n }) => ({
      image: t,
      title: e.title,
      trick: e.trick,
      note: e.dedication,
      mine: !0,
      palette: (e.palette || $?.colours?.map((e) => ({ ...e, chosen: e.id === $?.chosen?.id })) || []).map((e) => ({
        name: e.name || J[e.id]?.[n],
        hex: e.hex || J[e.id]?.hex,
        detail: e.detail,
        chosen: !!e.chosen,
      })),
      back: { head: q(n, `阿尔勒 · 1888 年深秋`, `Arles · late autumn 1888`), lines: dn(n) },
    }),
    kept: (e, t) => {
      let n = (e.palette || []).find((e) => e.chosen);
      return n
        ? {
            did: q(
              t,
              `给梵高留给朋友的那把椅子挑了${n.name}——「${n.detail}」`,
              `chose ${n.name} for the chair Van Gogh keeps for a friend — "${n.detail}"`,
            ),
          }
        : {};
    },
  },
  pn = (e) => oe({ ...e, cfg: fn });
export { pn as enter };
