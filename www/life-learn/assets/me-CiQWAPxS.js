var e = `lifeplaza.me`,
  t = Object.freeze([`v1`, `v2`, `v3`, `v4`, `v5`, `v6`, `v7`, `v8`]);
function n() {
  let n = {};
  try {
    n = JSON.parse(localStorage.getItem(e) || `{}`) || {};
  } catch {
    n = {};
  }
  let r = new URLSearchParams(location.search);
  return (
    r.get(`avatar`) && (n.avatar = r.get(`avatar`)),
    r.get(`who`) && (n.identity = r.get(`who`)),
    r.get(`note`) && (n.note = r.get(`note`)),
    t.includes(n.avatar) || (n.avatar = `v2`),
    (n.identity = String(n.identity || ``).slice(0, 40)),
    (n.note = String(n.note || ``).slice(0, 200)),
    (n.gate = Number(n.gate) || 0),
    n.passport && typeof n.passport != `object` && (n.passport = null),
    (!n.life || typeof n.life != `object`) && (n.life = null),
    n
  );
}
function r(t) {
  try {
    localStorage.setItem(
      e,
      JSON.stringify({
        avatar: t.avatar,
        identity: t.identity,
        note: t.note,
        passport: t.passport || null,
        life: t.life || null,
        gate: t.gate || 0,
        at: Date.now(),
      }),
    );
  } catch {}
}
var i = (e) => {
    let t = 2166136261;
    for (let n of String(e || ``)) ((t ^= n.charCodeAt(0)), (t = Math.imul(t, 16777619)));
    return e ? (t >>> 0).toString(36) : ``;
  },
  a = (e, t, n) =>
    `${t}|${n}|${e.avatar}|${e.identity}|${e.note}|${e.life?.story || ``}|${e.life?.answer || ``}|${Array.isArray(e.life?.details) ? e.life.details.join(`,`) : ``}|${i(e.life?.portrait)}`;
export { r as i, n, a as r, t };
