import { r as e } from "./i18n-BvGoRVq5.js";
import "./visits-C_j5CG_Y.js";
var t = `/life-learn/`,
  n = `${t}api`,
  r = (e) => {
    if (AbortSignal.timeout) return AbortSignal.timeout(e);
    let t = new AbortController();
    return (setTimeout(() => t.abort(), e), t.signal);
  };
async function i(e, { method: t = `GET`, body: n, ms: i = 2e4, text: a = !1 } = {}) {
  try {
    let o = await fetch(e, {
      method: t,
      headers: n ? { "Content-Type": `application/json` } : void 0,
      body: n ? JSON.stringify(n) : void 0,
      signal: r(i),
    });
    return o.ok ? (a ? await o.text() : await o.json()) : null;
  } catch {
    return null;
  }
}
var a = (t) => (e() && t?.en ? { ...t, ...t.en, en: null } : t);
async function o() {
  let e = await i(`${t}flash/index.json`, { ms: 12e3 }),
    n = Array.isArray(e?.items) ? e.items : [];
  return (n.length && (s = n.length), n);
}
var s = 6,
  c = [`零`, `一`, `两`, `三`, `四`, `五`, `六`, `七`, `八`, `九`, `十`],
  l = [`no`, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `ten`],
  u = () => ({ zh: c[s] || String(s), en: l[s] || String(s) });
async function d(e) {
  return e
    ? typeof e.doc == `string`
      ? e.doc
      : e.file
        ? i(`${t}flash/${e.file}`, { text: !0, ms: 2e4 })
        : e.html
          ? i(`${n}/${e.html}`, { text: !0, ms: 2e4 })
          : null
    : null;
}
var f = (e) => (e?.cover ? (e.file ? `${t}flash/${e.cover}` : `${n}/${e.cover}`) : ``);
function p(e, t) {
  if (!e) return;
  let r = JSON.stringify({ ok: !1, errors: t.slice(0, 6) });
  navigator.sendBeacon?.(`${n}/flash/${encodeURIComponent(e)}/report`, new Blob([r], { type: `application/json` })) ||
    fetch(`${n}/flash/${encodeURIComponent(e)}/report`, {
      method: `POST`,
      body: r,
      headers: { "Content-Type": `application/json` },
      keepalive: !0,
    }).catch(() => {});
}
var m = `lifeplaza.flash.mine`;
Object.freeze([`melies`, `vangogh`, `lishizhen`, `xiyou`]);
var h = Object.freeze({ queue: 24e4, ip: 6e5, day: 216e5, net: 6e4 }),
  g = (e) => {
    try {
      return JSON.parse(localStorage.getItem(e) || `null`);
    } catch {
      return null;
    }
  };
function _(e) {
  let t = e?.life || {},
    n = [
      e?.identity || ``,
      t.story || e?.note || ``,
      ...(Array.isArray(t.turns) ? t.turns.map((e) => e?.a || ``) : []),
      ...(Array.isArray(t.details) ? t.details : []),
    ].join(`|`),
    r = 2166136261;
  for (let e of n) ((r ^= e.codePointAt(0)), (r = Math.imul(r, 16777619)));
  return `${(r >>> 0).toString(36)}:${[...n].length}`;
}
var v = (e) =>
    !!e?.life && !e.life.care && [...String(e.life.story || e.note || ``)].length + (e.life.turns?.length || 0) > 0,
  y = new Set(),
  b = { state: `none`, job: null, space: null },
  x = () => {
    for (let e of y)
      try {
        e(b);
      } catch (e) {
        console.warn(`flash mine`, e);
      }
  },
  S = (e) => {
    ((b = { ...b, ...e }), x());
  };
function C(e) {
  let t = g(m);
  return t && t.story === _(e) ? t : null;
}
var w = Object.freeze({
  get: () => b,
  on(e) {
    return (y.add(e), () => y.delete(e));
  },
});
function T(e) {
  let t = e && C(e);
  return (
    t?.job
      ? S({
          state: t.job.status === `ready` ? `ready` : t.job.status === `failed` ? `failed` : `making`,
          job: t.job,
          space: t.space || t.job.host?.id || null,
          played: !!t.played,
        })
      : t?.refused &&
        (t.refused === `visitor` || Date.now() - (t.at || 0) < (h[t.refused] || 0)) &&
        S({ state: `busy`, job: null, why: t.refused, space: t.space || null }),
    b
  );
}
export { d as a, a as c, f as i, p as l, T as n, o, w as r, u as s, v as t };
