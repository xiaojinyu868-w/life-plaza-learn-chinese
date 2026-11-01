import { ro as e, tr as t } from "./three.core-DtjtRha-.js";
import { t as n } from "./gsap-CvDoa17S.js";
function r({
  player: r,
  cam: i,
  host: a,
  hostHeight: o = 1.72,
  heightAt: s,
  inside: c,
  clear: l,
  input: u,
  interactions: d,
  hud: f,
  finish: p = null,
  onScene: m = () => {},
}) {
  let h = p ? p.uVignette.value : 0,
    g = (t, n, r) => new e().subVectors(n, t).angleTo(new e().subVectors(r, t));
  function _(n, { from: o = r.position, person: u = !1 } = {}) {
    let d = s(o.x, o.z),
      f = new e(o.x, d + 1.5, o.z),
      p = n.x - o.x,
      m = n.z - o.z,
      h = Math.hypot(p, m) || 1,
      _ = p / h,
      v = m / h,
      y = i.portrait > 0.5,
      b = y ? 0.3 : 0.42,
      x = y ? 0.2 : 0,
      S = [];
    if (y && !u)
      for (let t of [0.3, 0.55])
        for (let r of [1, -1]) {
          let i = new e(o.x - _ * t - v * 0.36 * r, d + 1.55, o.z - v * t + _ * 0.36 * r);
          i.distanceTo(n) >= 1.25 && S.push({ c: i, look: n, own: !0 });
        }
    if (!y || u)
      for (let t of y ? [0.6, 0.45] : [0.95, 0.7])
        for (let r of [1, -1]) {
          let i = (y ? 0.04 : 0.18) * Math.min(1, h / 1.5);
          S.push({
            c: new e(o.x - _ * t - v * b * r, d + 1.6, o.z - v * t + _ * b * r),
            look: new e(n.x + v * i * r, n.y - x, n.z - _ * i * r),
            behind: !0,
          });
        }
    let C = new e((o.x + n.x) / 2, (f.y + n.y) / 2, (o.z + n.z) / 2);
    if (!y)
      for (let t of [1.45, 1.15])
        for (let n of [1, -1]) S.push({ c: new e(C.x - v * t * n, d + 1.55, C.z + _ * t * n), look: C });
    !y && h < 1.2 && S.sort((e, t) => +!!e.behind - !!t.behind);
    let w = a().object.position,
      T = (e, n) => {
        let r = n.x - e.x,
          i = n.z - e.z,
          a = r * r + i * i || 1,
          o = t.clamp(((w.x - e.x) * r + (w.z - e.z) * i) / a, 0, 1);
        return Math.hypot(e.x + r * o - w.x, e.z + i * o - w.z) < 0.32 && Math.hypot(n.x - w.x, n.z - w.z) > 0.5;
      };
    for (let { c: e, look: t, own: r } of S)
      if (
        !(!c(e.x, e.z) || Math.hypot(e.x - w.x, e.z - w.z) < 0.45) &&
        !(!l(e, n) || T(e, n) || (!r && T(e, f))) &&
        !(r ? g(e, f, n) < 0.45 : !l(e, f) || g(e, f, n) < 0.2)
      )
        return [e, t];
    return null;
  }
  function v(e) {
    let t = r.position;
    if (Math.hypot(t.x - e.x, t.z - e.z) < 0.6) return;
    let a = Math.atan2(t.x - e.x, t.z - e.z) - i.yaw;
    a = Math.atan2(Math.sin(a), Math.cos(a));
    let o = { yaw: i.yaw };
    n.to(o, {
      yaw: i.yaw + a,
      duration: 0.9,
      ease: `power2.inOut`,
      overwrite: `auto`,
      onUpdate: () => {
        i.yaw = o.yaw;
      },
    });
  }
  function y(t, n = r.position) {
    let a = n.x - t.x,
      o = n.z - t.z,
      s = Math.hypot(a, o) || 1,
      u = a / s,
      d = o / s,
      f = i.portrait > 0.5 ? 0.3 : 0.08;
    for (let n of [1.6, 1.25, 2])
      for (let r of [1, -1]) {
        let i = new e(t.x + u * n - d * 0.35 * r, t.y + 0.05, t.z + d * n + u * 0.35 * r);
        if (c(i.x, i.z) && l(i, t)) return [i, t.clone().setY(t.y - f)];
      }
    return null;
  }
  let b = 0,
    x = (e, t) => {
      p && n.to(p.uVignette, { value: e, duration: t, ease: `power2.inOut`, overwrite: `auto` });
    },
    S = {
      compose: _,
      get active() {
        return b > 0;
      },
      shoot(e, { person: t = !1 } = {}) {
        let n = _(e, { person: t });
        return n ? (i.frame(n[0], n[1], { fit: !1 }), !0) : i.portrait > 0.5 && !t && (i.release(), v(e), !0);
      },
      face() {
        let t = a().object;
        return new e(t.position.x, t.position.y + o * 0.9, t.position.z);
      },
      talkShot() {
        let e = S.face(),
          t = r.position,
          n = (Math.hypot(e.x - t.x, e.z - t.z) > 3 && y(e)) || _(e, { person: !0 });
        return (n && i.frame(n[0], n[1], { fit: !1 }), !!n);
      },
      begin() {
        b++ > 0 || (d.setBusy(!0), u.setEnabled(!1), f.setScene(!0), m(!0), x(h + 0.2, 0.9));
      },
      end({ lookAt: e = null } = {}) {
        if (b === 0 || --b > 0) return;
        let t = r.position;
        (e && i.overriding && Math.hypot(t.x - e.x, t.z - e.z) > 0.6
          ? (i.yaw = Math.atan2(t.x - e.x, t.z - e.z))
          : e && v(e),
          i.release(),
          u.setEnabled(!0),
          d.setBusy(!1),
          f.setScene(!1),
          m(!1),
          x(h, 1.2));
      },
      reset() {
        b > 0 && ((b = 1), S.end());
      },
    };
  return S;
}
export { r as t };
