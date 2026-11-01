import { Lt as e, ar as t, ir as n } from "./three.core-DtjtRha-.js";
import { l as r } from "./assets-p2qy6QaX.js";
function i(i, { keep: a = [] } = {}) {
  i.updateMatrixWorld(!0);
  let o = new n().copy(i.matrixWorld).invert(),
    s = new Set();
  for (let e of a) e?.traverse?.((e) => s.add(e));
  let c = new Map();
  i.traverse((e) => {
    if (!e.isMesh || e.isInstancedMesh || e.isSkinnedMesh || s.has(e) || !e.visible) return;
    let t = e.material;
    if (!t || Array.isArray(t) || t.transparent || !e.geometry?.attributes?.position) return;
    let n = `${t.uuid}|${e.castShadow}|${e.receiveShadow}`;
    (c.has(n) || c.set(n, { material: t, cast: e.castShadow, receive: e.receiveShadow, items: [] }),
      c.get(n).items.push(e));
  });
  let l = 0;
  for (let a of c.values()) {
    if (a.items.length < 2) continue;
    let s = !!(a.material.map || a.material.normalMap || a.material.roughnessMap || a.material.aoMap),
      c = !!a.material.vertexColors,
      u = [];
    for (let t of a.items) {
      let r = t.geometry.index ? t.geometry.toNonIndexed() : t.geometry.clone();
      for (let e of Object.keys(r.attributes))
        [`position`, `normal`, `uv`, `color`].includes(e) || r.deleteAttribute(e);
      (r.attributes.normal || r.computeVertexNormals(),
        s && !r.attributes.uv && r.setAttribute(`uv`, new e(new Float32Array(r.attributes.position.count * 2), 2)),
        !s && r.attributes.uv && r.deleteAttribute(`uv`),
        c &&
          !r.attributes.color &&
          r.setAttribute(`color`, new e(new Float32Array(r.attributes.position.count * 3).fill(1), 3)),
        !c && r.attributes.color && r.deleteAttribute(`color`),
        r.applyMatrix4(new n().multiplyMatrices(o, t.matrixWorld)),
        u.push(r));
    }
    let d = r(u, !1);
    if ((u.forEach((e) => e.dispose()), !d)) continue;
    let f = new t(d, a.material);
    ((f.castShadow = a.cast), (f.receiveShadow = a.receive), (f.name = `merged`), i.add(f));
    for (let e of a.items) {
      for (let t of [...e.children]) e.parent?.attach(t);
      (e.parent?.remove(e), (l += 1));
    }
  }
  return l;
}
export { i as t };
