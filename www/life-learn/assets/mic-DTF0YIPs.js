import { n as e } from "./i18n-BvGoRVq5.js";
import { i as t } from "./visits-C_j5CG_Y.js";
var n = 16e3,
  r = 800,
  i = 6e4,
  a = 550,
  o = 1100,
  s = 2500,
  c = `class LpPcm16 extends AudioWorkletProcessor {
  constructor() { super(); this.step = sampleRate / ${n}; this.t = 0; this.acc = 0; this.n = 0; this.out = new Int16Array(${r}); this.k = 0; this.sq = 0; }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (!ch) return true;
    for (let i = 0; i < ch.length; i += 1) {
      this.acc += ch[i]; this.n += 1; this.t += 1;
      if (this.t < this.step) continue;
      this.t -= this.step;
      const v = Math.max(-1, Math.min(1, this.acc / this.n));
      this.acc = 0; this.n = 0; this.sq += v * v;
      this.out[this.k++] = v < 0 ? v * 32768 : v * 32767;
      if (this.k === ${r}) { this.port.postMessage({ pcm: this.out.buffer, rms: Math.sqrt(this.sq / ${r}) }, [this.out.buffer]); this.out = new Int16Array(${r}); this.k = 0; this.sq = 0; }
    }
    return true;
  }
}
registerProcessor("lp-pcm16", LpPcm16);`,
  l = null,
  u = null,
  d = () => {
    let e = window.AudioContext || window.webkitAudioContext;
    return e
      ? ((!l || l.state === `closed`) && ((l = new e()), (u = null)),
        l.state === `suspended` && l.resume().catch(() => {}),
        l)
      : null;
  },
  f = (e) => {
    if (!e.audioWorklet || !window.AudioWorkletNode) return Promise.reject(Error(`no worklet`));
    if (!u) {
      let t = URL.createObjectURL(new Blob([c], { type: `application/javascript` }));
      u = e.audioWorklet.addModule(t).finally(() => URL.revokeObjectURL(t));
    }
    return u;
  },
  p = () => {
    d();
  };
function m(e) {
  let t = Math.min(
      e.reduce((e, t) => e + t.length, 0),
      n * 28,
    ),
    r = new DataView(new ArrayBuffer(44 + t * 2)),
    i = (e, t) => {
      for (let n = 0; n < t.length; n += 1) r.setUint8(e + n, t.charCodeAt(n));
    };
  (i(0, `RIFF`),
    r.setUint32(4, 36 + t * 2, !0),
    i(8, `WAVE`),
    i(12, `fmt `),
    r.setUint32(16, 16, !0),
    r.setUint16(20, 1, !0),
    r.setUint16(22, 1, !0),
    r.setUint32(24, n, !0),
    r.setUint32(28, n * 2, !0),
    r.setUint16(32, 2, !0),
    r.setUint16(34, 16, !0),
    i(36, `data`),
    r.setUint32(40, t * 2, !0));
  let a = 44,
    o = t;
  for (let t of e) {
    for (let e = 0; e < t.length && o > 0; e += 1, --o, a += 2) r.setInt16(a, t[e], !0);
    if (!o) break;
  }
  return new Blob([r], { type: `audio/wav` });
}
function h(
  c,
  {
    lang: l = e === `en` ? `en` : `zh`,
    onText: u = () => {},
    onState: p = () => {},
    onPartial: h = () => {},
    context: g = null,
  } = {},
) {
  let _ = !!(
    navigator.mediaDevices?.getUserMedia &&
    window.isSecureContext !== !1 &&
    (window.AudioContext || window.webkitAudioContext || window.MediaRecorder)
  );
  if (!_) return ((c.hidden = !0), { supported: _, start() {}, stop() {}, cancel() {}, release() {} });
  let v = null,
    y = 0,
    b = !1,
    x = (e, t = {}) => {
      (c.classList.toggle(`rec`, e === `listening` || e === `pause`),
        c.classList.toggle(`pause`, e === `pause`),
        c.classList.toggle(`busy`, e === `starting` || e === `thinking`),
        p(e, { live: !!v?.ready, ...(e === `listening` ? { alias: `recording` } : {}), ...t }));
    },
    S = (e) => c.style.setProperty(`--level`, e.toFixed(3)),
    C = () => {
      document.hidden && M();
    },
    w = (e) => {
      (document[e ? `addEventListener` : `removeEventListener`](`visibilitychange`, C),
        window.dispatchEvent(new CustomEvent(`lp-mic`, { detail: { on: e } })));
    };
  function T(e) {
    if (!(`WebSocket` in window)) return null;
    let n;
    try {
      n = new WebSocket(`${location.protocol === `https:` ? `wss:` : `ws:`}//${location.host}${t.base}/asr/stream`);
    } catch {
      return null;
    }
    n.binaryType = `arraybuffer`;
    let r = [],
      i = {
        ws: n,
        open: !1,
        dead: !1,
        final: null,
        waiters: [],
        send(e) {
          i.dead || (i.open ? n.send(e) : r.length < 80 && r.push(e));
        },
        finish() {
          return new Promise((e) => {
            if (i.final != null || i.dead) {
              e(i.final);
              return;
            }
            i.waiters.push(e);
            try {
              i.open ? n.send(JSON.stringify({ type: `stop` })) : (i.stopOnOpen = !0);
            } catch {}
          });
        },
        close() {
          try {
            n.readyState <= 1 && (i.open && n.send(JSON.stringify({ type: `cancel` })), n.close());
          } catch {}
        },
      },
      a = (e) => {
        i.waiters.splice(0).forEach((t) => t(e));
      };
    return (
      (n.onopen = () => {
        i.open = !0;
        let e = null;
        try {
          e = typeof g == `function` ? g() : g;
        } catch {
          e = null;
        }
        (n.send(JSON.stringify({ type: `start`, lang: l, context: e && typeof e == `object` ? e : null })),
          r.splice(0).forEach((e) => n.send(e)),
          i.stopOnOpen && n.send(JSON.stringify({ type: `stop` })));
      }),
      (n.onmessage = (t) => {
        let n;
        try {
          n = JSON.parse(t.data);
        } catch {
          return;
        }
        n.type === `ready`
          ? ((e.ready = !0), e === v && e.state === `listening` && x(`listening`))
          : n.type === `text`
            ? ((e.words = n.text || ``), (e.wordsAt = performance.now()), e === v && h(e.words))
            : n.type === `limit`
              ? e === v && A()
              : n.type === `done`
                ? ((i.final = n.text || ``), a(i.final))
                : n.type === `error` && ((i.dead = !0), a(null));
      }),
      (n.onerror = () => {
        ((i.dead = i.final == null), a(i.final));
      }),
      (n.onclose = () => {
        (i.final ?? (i.dead = !0), a(i.final));
      }),
      i
    );
  }
  async function E() {
    if (v) return;
    let e = (v = {
      state: `starting`,
      chunks: [],
      words: ``,
      wordsAt: 0,
      ready: !1,
      spoke: !1,
      voiced: 0,
      quiet: 0,
      floor: 0.004,
      t0: performance.now(),
      level: 0,
    });
    (x(`starting`), w(!0));
    let t = d(),
      a;
    try {
      a = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0, channelCount: 1 },
      });
    } catch (t) {
      e === v &&
        ((v = null), w(!1), x(t?.name === `NotAllowedError` || t?.name === `SecurityError` ? `denied` : `failed`));
      return;
    }
    if (e !== v) {
      a.getTracks().forEach((e) => e.stop());
      return;
    }
    ((e.stream = a), (e.io = T(e)));
    let o =
      [`audio/webm;codecs=opus`, `audio/webm`, `audio/mp4`, `audio/ogg;codecs=opus`].find((e) =>
        window.MediaRecorder?.isTypeSupported?.(e),
      ) || ``;
    if (window.MediaRecorder)
      try {
        ((e.clip = []),
          (e.rec = new MediaRecorder(a, o ? { mimeType: o } : void 0)),
          (e.rec.ondataavailable = (t) => {
            t.data?.size && e.clip.push(t.data);
          }),
          e.rec.start(250));
      } catch {
        e.rec = null;
      }
    let s = (t, n) => {
      e === v && e.state !== `thinking` && (e.chunks.push(t), e.io?.send(t.buffer), D(e, n));
    };
    try {
      if (!t) throw Error(`no audio context`);
      e.src = t.createMediaStreamSource(a);
      try {
        (await f(t),
          (e.node = new AudioWorkletNode(t, `lp-pcm16`)),
          (e.node.port.onmessage = (e) => s(new Int16Array(e.data.pcm), e.data.rms)),
          e.src.connect(e.node));
      } catch {
        let i = t.sampleRate / n,
          a = 0,
          o = 0,
          c = 0,
          l = new Int16Array(r),
          u = 0,
          d = 0;
        ((e.node = t.createScriptProcessor(4096, 1, 1)),
          (e.node.onaudioprocess = (e) => {
            let t = e.inputBuffer.getChannelData(0);
            for (let e = 0; e < t.length; e += 1) {
              if (((o += t[e]), (c += 1), (a += 1), a < i)) continue;
              a -= i;
              let n = Math.max(-1, Math.min(1, o / c));
              ((o = 0),
                (c = 0),
                (d += n * n),
                (l[u++] = n < 0 ? n * 32768 : n * 32767),
                u === r && (s(l, Math.sqrt(d / r)), (l = new Int16Array(r)), (u = 0), (d = 0)));
            }
          }),
          e.src.connect(e.node),
          e.node.connect(t.destination));
      }
    } catch {
      if (((e.node = null), !e.rec)) {
        (O(e), (v = null), w(!1), x(`failed`));
        return;
      }
    }
    e === v &&
      ((e.state = `listening`),
      navigator.vibrate?.(12),
      x(`listening`),
      (e.limit = setTimeout(() => {
        e === v && A();
      }, i)),
      e.node || (e.idle = setInterval(() => S(0.25 + 0.15 * Math.sin(performance.now() / 300)), 80)));
  }
  function D(e, t) {
    e.floor = t < e.floor ? t : e.floor + (t - e.floor) * 0.01;
    let n = t > Math.max(0.01, e.floor * 3);
    (n
      ? ((e.voiced += 50), (e.quiet = 0), e.voiced >= 150 && (e.spoke = !0))
      : ((e.quiet += 50), e.quiet > 300 && (e.voiced = 0)),
      (e.level += (Math.max(0, Math.min(1, (20 * Math.log10(t + 1e-6) + 58) / 40)) - e.level) * 0.5),
      S(e.level));
    let r = e.words && performance.now() - e.wordsAt > 1800,
      i = e.spoke && (e.quiet >= o || (r && e.quiet >= 400));
    i && e.state === `listening`
      ? ((e.state = `pause`), x(`pause`))
      : !i && e.state === `pause` && n && e.voiced >= 150 && ((e.state = `listening`), x(`listening`));
  }
  function O(e) {
    (clearTimeout(e.limit), clearInterval(e.idle));
    try {
      (e.src?.disconnect(), e.node?.disconnect());
    } catch {}
    (e.node?.port && (e.node.port.onmessage = null), e.stream?.getTracks().forEach((e) => e.stop()), S(0));
  }
  let k = (e) =>
    new Promise((t) => {
      if (!e.rec || e.rec.state === `inactive`) {
        t(e.clip?.length ? new Blob(e.clip, { type: e.rec?.mimeType || `audio/webm` }) : null);
        return;
      }
      e.rec.onstop = () => t(e.clip.length ? new Blob(e.clip, { type: e.rec.mimeType || `audio/webm` }) : null);
      try {
        e.rec.stop();
      } catch {
        t(null);
      }
    });
  async function A() {
    let e = v;
    if (!e || e.state === `thinking`) return;
    if (e.state === `starting`) {
      M();
      return;
    }
    let n = performance.now() - e.t0;
    e.state = `thinking`;
    let r = k(e);
    O(e);
    let i = setTimeout(() => {
        e === v && x(`thinking`);
      }, 280),
      a = null;
    if (
      (e.io &&
        !e.io.dead &&
        ((a = await Promise.race([e.io.finish(), new Promise((e) => setTimeout(() => e(null), s))])),
        a == null && e.ready && (a = e.words || ``)),
      e.io?.close(),
      a == null && (e.spoke || n > 1200))
    ) {
      let n = (await r) || (e.chunks.length ? m(e.chunks) : null);
      if ((e === v && x(`thinking`), (a = n && n.size > 600 ? await t.asr(n, l) : null), a == null && e.spoke)) {
        (clearTimeout(i), j(e), x(`failed`));
        return;
      }
    }
    (clearTimeout(i), j(e));
    let o = String(a || ``).trim();
    if (!o) {
      x(n < 600 && !e.spoke ? `short` : `silent`);
      return;
    }
    (x(`idle`), u(o));
  }
  let j = (e) => {
    e === v && ((v = null), w(!1));
  };
  function M() {
    let e = v;
    if (e) {
      ((v = null), O(e));
      try {
        e.rec && e.rec.state !== `inactive` && e.rec.stop();
      } catch {}
      (e.io?.close(), w(!1), x(`idle`));
    }
  }
  let N = () => {
      ((y = performance.now()), (b = !!v && v.state !== `starting`), v ? d() : E());
    },
    P = () => {
      if ((d(), !v)) return;
      let e = performance.now() - y;
      (b || (e > a && v.spoke) || e > 1600) && A();
    };
  return (
    c.addEventListener(
      `touchstart`,
      (e) => {
        (e.preventDefault(), N());
      },
      { passive: !1 },
    ),
    c.addEventListener(
      `touchend`,
      (e) => {
        (e.preventDefault(), P());
      },
      { passive: !1 },
    ),
    c.addEventListener(`touchcancel`, () => {
      v && performance.now() - y > a && M();
    }),
    c.addEventListener(`pointerdown`, (e) => {
      e.pointerType !== `touch` && N();
    }),
    c.addEventListener(`pointerup`, (e) => {
      e.pointerType !== `touch` && P();
    }),
    c.addEventListener(`click`, (e) => {
      e.detail === 0 && (v ? A() : E());
    }),
    c.addEventListener(`contextmenu`, (e) => e.preventDefault()),
    {
      supported: _,
      start: E,
      stop: A,
      cancel: M,
      release: M,
      get listening() {
        return !!v;
      },
    }
  );
}
export { p as n, h as t };
