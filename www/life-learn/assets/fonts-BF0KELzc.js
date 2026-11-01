import { n as e } from "./assets-p2qy6QaX.js";
var t =
  typeof FontFace > `u` || !document.fonts
    ? Promise.resolve(!1)
    : new FontFace(`PlazaSerif`, `url(${e(`fonts/plaza-serif.woff2`)}) format("woff2")`, {
        weight: `200 900`,
        display: `swap`,
      })
        .load()
        .then((e) => (document.fonts.add(e), !0))
        .catch(() => !1);
export { t };
