var e = `lifeplaza.lang`,
  t = (e) => {
    let t = String(e || ``)
      .trim()
      .toLowerCase();
    return t.startsWith(`zh`) ? `zh` : t.startsWith(`en`) ? `en` : ``;
  };
function n() {
  let n = t(new URLSearchParams(location.search).get(`lang`));
  if (n) {
    try {
      localStorage.setItem(e, n);
    } catch {}
    return n;
  }
  let r = ``;
  try {
    r = t(localStorage.getItem(e));
  } catch {}
  if (r) return r;
  let i = (navigator.languages?.length ? navigator.languages : [navigator.language]).find(
    (e) => typeof e == `string` && e.trim(),
  );
  return i ? (t(i) === `zh` ? `zh` : `en`) : `zh`;
}
var r = n(),
  i = () => r === `en`,
  a = (e, t) => (r === `en` ? t : e),
  o = new Set(),
  s = (e) => (o.add(e), () => o.delete(e));
function c(t) {
  for (let e of o)
    try {
      e(t);
    } catch {}
  try {
    localStorage.setItem(e, t);
  } catch {}
  location.reload();
}
document.documentElement.lang = r === `en` ? `en` : `zh-CN`;
export { c as a, s as i, r as n, i as r, a as t };
