import { r as e } from "./me-CiQWAPxS.js";
var t = null,
  n = () => {
    if (!t) {
      let e = window.AudioContext || window.webkitAudioContext;
      if (!e) return null;
      t = new e();
    }
    return (t.state === `suspended` && t.resume().catch(() => {}), t);
  },
  r = [`touchend`, `pointerup`, `click`, `keydown`];
function i(e) {
  let t = () => {
    (r.forEach((e) => window.removeEventListener(e, t, !0)), e());
  };
  r.forEach((e) => window.addEventListener(e, t, !0));
}
i(() => n());
var a = () => n();
function o(e, t = 1) {
  let n = e.createBuffer(1, Math.floor(e.sampleRate * t), e.sampleRate),
    r = n.getChannelData(0);
  for (let e = 0; e < r.length; e += 1) r[e] = Math.random() * 2 - 1;
  return n;
}
var s = {
    crank() {
      let e = n();
      if (!e) return { stop() {} };
      let t = e.createGain();
      ((t.gain.value = 0), t.connect(e.destination), t.gain.linearRampToValueAtTime(0.32, e.currentTime + 0.15));
      let r = e.createBufferSource();
      ((r.buffer = o(e, 2)), (r.loop = !0));
      let i = e.createBiquadFilter();
      ((i.type = `bandpass`), (i.frequency.value = 2400), (i.Q.value = 3));
      let a = e.createGain();
      ((a.gain.value = 0), r.connect(i).connect(a).connect(t));
      let s = e.createOscillator();
      ((s.type = `square`), (s.frequency.value = 16));
      let c = e.createGain();
      ((c.gain.value = 0.5), s.connect(c).connect(a.gain));
      let l = e.createOscillator();
      ((l.type = `sawtooth`), (l.frequency.value = 48));
      let u = e.createBiquadFilter();
      ((u.type = `lowpass`), (u.frequency.value = 220));
      let d = e.createGain();
      return (
        (d.gain.value = 0.08),
        l.connect(u).connect(d).connect(t),
        r.start(),
        s.start(),
        l.start(),
        {
          stop() {
            let n = e.currentTime;
            (t.gain.cancelScheduledValues(n),
              t.gain.setValueAtTime(t.gain.value, n),
              t.gain.linearRampToValueAtTime(0, n + 0.2),
              setTimeout(() => {
                (r.stop(), s.stop(), l.stop());
              }, 300));
          },
        }
      );
    },
    poof() {
      let e = n();
      if (!e) return;
      let t = e.createBufferSource();
      t.buffer = o(e, 1.2);
      let r = e.createBiquadFilter();
      ((r.type = `lowpass`),
        r.frequency.setValueAtTime(3200, e.currentTime),
        r.frequency.exponentialRampToValueAtTime(200, e.currentTime + 1));
      let i = e.createGain();
      (i.gain.setValueAtTime(1e-4, e.currentTime),
        i.gain.exponentialRampToValueAtTime(0.6, e.currentTime + 0.03),
        i.gain.exponentialRampToValueAtTime(1e-4, e.currentTime + 1.1),
        t.connect(r).connect(i).connect(e.destination),
        t.start(),
        t.stop(e.currentTime + 1.2));
    },
    sparkle() {
      let e = n();
      e &&
        [1318.5, 1568, 1975.5, 2637].forEach((t, n) => {
          let r = e.createOscillator();
          ((r.type = `triangle`), (r.frequency.value = t));
          let i = e.createGain(),
            a = e.currentTime + n * 0.07;
          (i.gain.setValueAtTime(1e-4, a),
            i.gain.exponentialRampToValueAtTime(0.14, a + 0.01),
            i.gain.exponentialRampToValueAtTime(1e-4, a + 0.6),
            r.connect(i).connect(e.destination),
            r.start(a),
            r.stop(a + 0.65));
        });
    },
    chime() {
      let e = n();
      e &&
        [523.25, 659.25, 783.99].forEach((t, n) => {
          let r = e.createOscillator();
          ((r.type = `sine`), (r.frequency.value = t));
          let i = e.createGain(),
            a = e.currentTime + n * 0.12;
          (i.gain.setValueAtTime(1e-4, a),
            i.gain.exponentialRampToValueAtTime(0.12, a + 0.02),
            i.gain.exponentialRampToValueAtTime(1e-4, a + 1.4),
            r.connect(i).connect(e.destination),
            r.start(a),
            r.stop(a + 1.5));
        });
    },
    heartbeat(e = 68, t = () => {}) {
      let r = n(),
        i = 0,
        a = !0,
        o = (e, t, n) => {
          let i = r.createOscillator();
          ((i.type = `sine`),
            i.frequency.setValueAtTime(t, e),
            i.frequency.exponentialRampToValueAtTime(t * 0.55, e + 0.16));
          let a = r.createGain();
          (a.gain.setValueAtTime(1e-4, e),
            a.gain.exponentialRampToValueAtTime(n, e + 0.012),
            a.gain.exponentialRampToValueAtTime(1e-4, e + 0.22),
            i.connect(a).connect(r.destination),
            i.start(e),
            i.stop(e + 0.25));
        },
        s = () => {
          if (a) {
            if (r) {
              let e = r.currentTime + 0.02;
              (o(e, 62, 0.5), o(e + 0.16, 54, 0.32));
            }
            (t(), (i = setTimeout(s, 6e4 / e)));
          }
        };
      return (
        s(),
        {
          stop() {
            ((a = !1), clearTimeout(i));
          },
        }
      );
    },
    projector() {
      let e = n();
      if (!e) return { setNear() {}, stop() {} };
      let t = e.createGain();
      ((t.gain.value = 0), t.connect(e.destination));
      let r = e.createBufferSource();
      ((r.buffer = o(e, 2)), (r.loop = !0));
      let i = e.createBiquadFilter();
      ((i.type = `bandpass`), (i.frequency.value = 900), (i.Q.value = 0.8));
      let a = e.createGain();
      a.gain.value = 0.4;
      let s = e.createOscillator();
      s.frequency.value = 18;
      let c = e.createGain();
      return (
        (c.gain.value = 0.25),
        s.connect(c).connect(a.gain),
        r.connect(i).connect(a).connect(t),
        r.start(),
        s.start(),
        {
          setNear(n) {
            t.gain.setTargetAtTime(0.05 * n, e.currentTime, 0.3);
          },
          stop() {
            (r.stop(), s.stop());
          },
        }
      );
    },
  },
  c = `/life-learn/api`,
  l = (e) => {
    if (AbortSignal.timeout) return AbortSignal.timeout(e);
    let t = new AbortController();
    return (setTimeout(() => t.abort(), e), t.signal);
  };
async function u(e, { method: t = `GET`, body: n, timeoutMs: r = 6e4, raw: i = !1, keepError: a = !1 } = {}) {
  try {
    let o = await fetch(`${c}${e}`, {
      method: t,
      headers: n ? { "Content-Type": `application/json` } : void 0,
      body: n ? JSON.stringify(n) : void 0,
      signal: l(r),
    });
    return o.ok ? (i ? o : await o.json()) : a ? await o.json().catch(() => null) : null;
  } catch {
    return null;
  }
}
var d = {
    base: c,
    visit: (e) => u(`/visit`, { method: `POST`, body: e, timeoutMs: 7e4 }),
    visitStatus: (e) => u(`/visit/${e}`),
    chat: (e) => u(`/chat`, { method: `POST`, body: e, timeoutMs: 4e4 }),
    guide: (e) => u(`/guide`, { method: `POST`, body: e, timeoutMs: 3e4 }),
    guideChat: (e) => u(`/guide/chat`, { method: `POST`, body: e, timeoutMs: 3e4 }),
    bridge: (e) => u(`/bridge`, { method: `POST`, body: e, timeoutMs: 12e3 }),
    ending: (e) => u(`/ending`, { method: `POST`, body: e, timeoutMs: 14e3 }),
    back: (e) => u(`/back`, { method: `POST`, body: e, timeoutMs: 2e4 }),
    async guideTalk(e, t = () => {}) {
      try {
        let n = await fetch(`${c}/guide/talk`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(e),
          signal: l(4e4),
        });
        if (!n.ok || !n.body) return null;
        let r = n.body.getReader(),
          i = new TextDecoder(),
          a = ``,
          o = null;
        for (;;) {
          let { value: e, done: n } = await r.read();
          if (n) break;
          a += i.decode(e, { stream: !0 });
          let s;
          for (
            ;
            (s = a.indexOf(`

`)) >= 0;
          ) {
            let e = a.slice(0, s);
            a = a.slice(s + 2);
            let n = /^event: (.+)$/m.exec(e)?.[1],
              r = /^data: (.+)$/m.exec(e)?.[1];
            if (!r) continue;
            let i = null;
            try {
              i = JSON.parse(r);
            } catch {
              continue;
            }
            n === `delta` && i.t ? t(i.t) : n === `done` && (o = i);
          }
        }
        return o;
      } catch {
        return null;
      }
    },
    async chatStream(e, { onFirst: t = () => {}, onLine: n = () => {}, signal: r = null } = {}) {
      let i = new AbortController(),
        a = () => i.abort(),
        o = setTimeout(a, 4e4);
      r?.addEventListener(`abort`, a, { once: !0 });
      let s = !1;
      try {
        let r = await fetch(`${c}/chat/stream`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(e),
          signal: i.signal,
        });
        if (!r.ok || !r.body || !String(r.headers.get(`content-type`)).includes(`event-stream`)) return null;
        let a = r.body.getReader(),
          o = new TextDecoder(),
          l = ``;
        for (;;) {
          let { value: e, done: r } = await a.read();
          if (r) break;
          l += o.decode(e, { stream: !0 });
          let i;
          for (
            ;
            (i = l.indexOf(`

`)) >= 0;
          ) {
            let e = l.slice(0, i);
            l = l.slice(i + 2);
            let r = /^event: (.+)$/m.exec(e)?.[1],
              o = /^data: (.+)$/m.exec(e)?.[1];
            if (!o) continue;
            let c = null;
            try {
              c = JSON.parse(o);
            } catch {
              continue;
            }
            if ((!s && (r === `delta` || r === `line`) && ((s = !0), t()), r === `line` && c.t)) n(c.t);
            else if (r === `done`)
              return (
                a.cancel().catch(() => {}),
                { reply: c.reply || ``, chips: Array.isArray(c.chips) ? c.chips : [], error: !!c.error }
              );
          }
        }
        return s ? { reply: ``, chips: [], error: !0 } : null;
      } catch {
        return r?.aborted
          ? { reply: ``, chips: [], error: !0, aborted: !0 }
          : s
            ? { reply: ``, chips: [], error: !0 }
            : null;
      } finally {
        (clearTimeout(o), r?.removeEventListener(`abort`, a));
      }
    },
    async guideCall(e, t = () => {}, n = null) {
      let r = new AbortController(),
        i = () => r.abort(),
        a = setTimeout(i, 3e4);
      n?.addEventListener(`abort`, i, { once: !0 });
      try {
        let n = await fetch(`${c}/guide/call`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(e),
          signal: r.signal,
        });
        if (!n.ok || !n.body) return null;
        let i = n.body.getReader(),
          a = new TextDecoder(),
          o = ``;
        for (;;) {
          let { value: e, done: n } = await i.read();
          if (n) break;
          o += a.decode(e, { stream: !0 });
          let r;
          for (
            ;
            (r = o.indexOf(`

`)) >= 0;
          ) {
            let e = o.slice(0, r);
            o = o.slice(r + 2);
            let n = /^event: (.+)$/m.exec(e)?.[1],
              a = /^data: (.+)$/m.exec(e)?.[1],
              s = null;
            try {
              s = a ? JSON.parse(a) : null;
            } catch {
              s = null;
            }
            if (s) {
              if (n === `delta` && s.t) t(s.t);
              else if (n === `done`) return (i.cancel().catch(() => {}), s);
            }
          }
        }
        return null;
      } catch {
        return null;
      } finally {
        (clearTimeout(a), n?.removeEventListener(`abort`, i));
      }
    },
    guidePortrait: (e) => u(`/guide/portrait`, { method: `POST`, body: e, timeoutMs: 3e4 }),
    guideReading: (e) => u(`/guide/reading`, { method: `POST`, body: e, timeoutMs: 15e4 }),
    notes: () => u(`/notes`),
    note: (e) => u(`/notes`, { method: `POST`, body: e, timeoutMs: 25e3, keepError: !0 }),
    meliesDirect: (e) => u(`/melies/direct`, { method: `POST`, body: e, timeoutMs: 12e3 }),
    meliesSay: (e) => u(`/melies/say`, { method: `POST`, body: e, timeoutMs: 12e3 }),
    shot: (e, t) => u(`/shot`, { method: `POST`, body: t ? { visit: e, choices: t } : { visit: e } }),
    shotStatus: (e) => u(`/shot/${e}`),
    wall: (e) => u(`/wall?space=${encodeURIComponent(e)}`),
    media: (e) => `${c}/${e}`,
    async tts(e, { role: t = `melies`, lang: n = `zh` } = {}) {
      let r = await u(`/tts`, { method: `POST`, body: { text: e, role: t, lang: n }, timeoutMs: 2e4, raw: !0 });
      if (!r) return null;
      let i = await r.blob().catch(() => null);
      return i && i.size > 512 ? URL.createObjectURL(i) : null;
    },
    async asr(e, t = `zh`) {
      try {
        let n = await fetch(`${c}/asr?lang=${t}`, {
          method: `POST`,
          headers: { "Content-Type": (e.type || `audio/webm`).split(`;`)[0] },
          body: e,
          signal: l(25e3),
        });
        if (!n.ok) return null;
        let r = await n.json();
        return typeof r?.text == `string` ? r.text : null;
      } catch {
        return null;
      }
    },
  },
  f = (t, n, r) => `lp.visit.${e(t, n, r)}`;
function p(e, t, n) {
  try {
    return JSON.parse(sessionStorage.getItem(f(e, t, n)) || `null`);
  } catch {
    return null;
  }
}
function m(e, t, n) {
  let r = p(e, t, n);
  return r
    ? Promise.resolve(r)
    : d
        .visit({ space: t, lang: n, avatar: e.avatar, identity: e.identity, note: e.note, life: e.life || null })
        .then((r) => {
          if (r?.id)
            try {
              sessionStorage.setItem(f(e, t, n), JSON.stringify(r));
            } catch {}
          return r;
        });
}
function h(e, t, n) {
  for (let r of n) m(e, r, t).catch(() => {});
}
export { a, d as i, h as n, i as o, m as r, s, p as t };
