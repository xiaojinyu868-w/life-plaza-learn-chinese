import { tr as e } from "./three.core-DtjtRha-.js";
import { a as t, f as n, h as r, i, m as a, o, p as s, r as c, s as l, t as u, u as d } from "./stamp-C8irYyoR.js";
import { r as f, s as p, t as m } from "./sky-6JFrQaA8.js";
var h = { plaza: `procedural`, melies: `procedural`, xiyou: `procedural`, vangogh: `splat`, lishizhen: `splat` },
  g = {
    plaza: o.teal,
    melies: c.melies.curtain,
    vangogh: c.vangogh.cobalt,
    lishizhen: c.lishizhen.cinnabar,
    xiyou: c.xiyou.seal,
  };
function _(o, { go: c, look: _ }) {
  let v = l[_] ? _ : h[c] || `procedural`,
    y = null,
    b = [],
    x = o.finish?.uniforms;
  function S() {
    let n = y?.sky?.dome,
      r = y?.sky?.sun,
      i = y?.sky?.hemi;
    if (!n || !r) return;
    let a = n.material.uniforms.uDir.value,
      s = {
        dir: a.clone(),
        material: n.material,
        pos: r.position.clone(),
        color: r.color.clone(),
        intensity: r.intensity,
        radius: r.shadow.radius,
        shadow: r.shadow.intensity,
      };
    (p(e.radToDeg(Math.atan2(a.x, a.z)), t.sun.elevation, a),
      (n.material = f({ sun: a, renderer: o.renderer }).material),
      r.position.copy(a).multiplyScalar(70),
      r.color.set(t.sun.color),
      (r.intensity = t.sun.intensity),
      (r.shadow.radius = t.sun.shadowRadius),
      (r.shadow.intensity = t.sun.shadowIntensity));
    let c = i && { sky: i.color.clone(), ground: i.groundColor.clone(), intensity: i.intensity };
    (i && (i.color.set(t.sky.sky), i.groundColor.set(t.sky.ground), (i.intensity = t.sky.intensity)),
      (o.renderer.shadowMap.needsUpdate = !0),
      b.push(() => {
        (a.copy(s.dir),
          (n.material = s.material),
          r.position.copy(s.pos),
          r.color.copy(s.color),
          (r.intensity = s.intensity),
          (r.shadow.radius = s.radius),
          (r.shadow.intensity = s.shadow),
          i && (i.color.copy(c.sky), i.groundColor.copy(c.ground), (i.intensity = c.intensity)),
          (o.renderer.shadowMap.needsUpdate = !0));
      }));
  }
  function C() {
    (r(!0), s(!0, { accent: g[c] }));
    let e = n(o, v),
      t = { max: o.fovMax, tilt: x?.uTilt.value, band: x?.uBand.value, focus: x?.uFocus.value };
    (a(o, `walk`, { fov: o.baseFov }),
      b.push(() => {
        (e.restore(),
          o.setFovMax(t.max),
          x && ((x.uTilt.value = t.tilt), (x.uBand.value = t.band), (x.uFocus.value = t.focus)),
          s(!1),
          r(!1));
      }));
    let l = { plaza: i.plaza, melies: i.melies, xiyou: i.xiyou }[c];
    if (l && v !== `splat`) {
      let e = o.scene.fog;
      (m(o.scene, l),
        b.push(() => {
          o.scene.fog = e;
        }));
    }
    c === `plaza` && S();
  }
  function w() {
    for (let e of b.reverse()) e();
    b = [];
  }
  return (
    r(!0),
    {
      entered(e) {
        ((y = e), C());
      },
      started() {
        u(d[c] ? c : { date: `PM 4:26` });
      },
      set(e = v) {
        return (w(), e !== `off` && (l[e] && (v = e), C()), e);
      },
    }
  );
}
export { _ as startPreview };
