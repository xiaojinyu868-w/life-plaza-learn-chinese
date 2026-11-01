/**
 * The little SDK every flash piece runs on, and the sandbox it runs in.
 *
 * A piece is one HTML file a model wrote. Before it is played (in an iframe with sandbox="allow-scripts", srcdoc) it is
 * composed: a Content-Security-Policy that shuts the network (connect/img/media/font only from data: and blob:), the
 * touch hygiene a phone needs (no scrolling, zooming, text selection or long-press menus), and `window.LP` — who the
 * piece is for, the life that made it, sizes, synthesized sounds, captions, a hint ring and `LP.done(result)`. The SDK
 * also counts what the trial run checks (errors, frames, sounds, touches) and tells the parent page what happens
 * (postMessage { lpFlash: 1, type: "ready" | "error" | "done" | "haptic" }).
 *
 * LP_SDK is shipped as source text (Function#toString), so it must stay self-contained: no imports, no closures over
 * this module.
 */

/* eslint-disable no-restricted-globals */
function LP_SDK(cfg) {
  "use strict";
  if (window.LP) return;
  const post = (type, data) => { try { parent.postMessage({ lpFlash: 1, type, ...(data || {}) }, "*"); } catch (_) { /* detached */ } };
  const stats = { errors: [], warnings: [], sounds: 0, frames: 0, touches: 0, touchSounds: 0, done: null, ready: false, lastTouch: 0 };
  Object.defineProperty(window, "__lpStats", { value: stats });
  const fail = (message) => {
    const m = String(message || "error").slice(0, 400);
    if (stats.errors.length < 20) stats.errors.push(m);
    post("error", { message: m });
  };
  addEventListener("error", (e) => {
    if (e.target && e.target !== window && e.target.tagName) fail(`could not load <${e.target.tagName.toLowerCase()}> ${(e.target.src || e.target.href || "").slice(0, 80)}`);
    else fail(`${e.message || e.error || "error"}${e.lineno ? ` (line ${e.lineno}:${e.colno})` : ""}`);
  }, true);
  addEventListener("unhandledrejection", (e) => fail(`unhandled rejection: ${(e.reason && (e.reason.stack || e.reason.message)) || e.reason}`));
  document.addEventListener("securitypolicyviolation", (e) => fail(`blocked by the sandbox: ${e.violatedDirective} ${String(e.blockedURI || "").slice(0, 80)}`));
  const cerr = console.error.bind(console);
  console.error = (...a) => { fail(`console.error: ${a.map((x) => (x && x.message) || String(x)).join(" ")}`); cerr(...a); };

  // An opaque-origin sandbox throws on storage; give the piece a memory instead. Modal dialogs are blocked there too.
  const memory = () => { const m = new Map(); return { getItem: (k) => (m.has(String(k)) ? m.get(String(k)) : null), setItem: (k, v) => { m.set(String(k), String(v)); }, removeItem: (k) => { m.delete(String(k)); }, clear: () => m.clear(), key: (i) => [...m.keys()][i] ?? null, get length() { return m.size; } }; };
  for (const k of ["localStorage", "sessionStorage"]) { try { void window[k].length; } catch (_) { try { Object.defineProperty(window, k, { value: memory(), configurable: true }); } catch (__) { /* keep */ } } }
  for (const k of ["alert", "confirm", "prompt", "print"]) { try { window[k] = () => { stats.warnings.push(`${k}() is not available`); return k === "confirm" ? false : null; }; } catch (_) { /* keep */ } }
  try { window.open = () => null; } catch (_) { /* keep */ }
  // WebViews before iOS 16 have no roundRect, and pieces use it freely.
  try {
    const rrect = function (x, y, w, h, r) {
      const q = Math.max(0, Math.min(Math.abs(Number(Array.isArray(r) ? r[0] : r) || 0), Math.abs(w) / 2, Math.abs(h) / 2));
      this.moveTo(x + q, y); this.arcTo(x + w, y, x + w, y + h, q); this.arcTo(x + w, y + h, x, y + h, q); this.arcTo(x, y + h, x, y, q); this.arcTo(x, y, x + w, y, q); this.closePath();
    };
    for (const C of [window.CanvasRenderingContext2D, window.Path2D, window.OffscreenCanvasRenderingContext2D]) if (C && C.prototype && !C.prototype.roundRect) C.prototype.roundRect = rrect;
  } catch (_) { /* keep */ }
  // Before the frame is laid out a piece may see a 0×0 or 300×150 window: what a canvas would throw on there (drawing
  // an empty canvas, a negative radius) draws nothing instead, as it would in a window with no room.
  try {
    const empty = (s) => !!s && typeof s.width === "number" && (s.width === 0 || s.height === 0) && (s instanceof HTMLCanvasElement || (typeof OffscreenCanvas !== "undefined" && s instanceof OffscreenCanvas) || (typeof ImageBitmap !== "undefined" && s instanceof ImageBitmap));
    const nonNeg = (v) => (Number.isFinite(v) && v < 0 ? 0 : v);
    for (const C of [window.CanvasRenderingContext2D, window.OffscreenCanvasRenderingContext2D]) {
      const P = C && C.prototype;
      if (!P) continue;
      const di = P.drawImage, cp = P.createPattern, rg = P.createRadialGradient, gi = P.getImageData;
      P.drawImage = function (s, ...a) { if (empty(s)) return undefined; return di.call(this, s, ...a); };
      P.createPattern = function (s, r) { if (empty(s)) return null; return cp.call(this, s, r); };
      P.createRadialGradient = function (x0, y0, r0, x1, y1, r1) { return rg.call(this, x0, y0, nonNeg(r0), x1, y1, nonNeg(r1)); };
      P.getImageData = function (x, y, w, h, ...a) { return gi.call(this, x, y, Math.max(1, Math.abs(Math.round(w)) || 1) * (w < 0 ? -1 : 1), Math.max(1, Math.abs(Math.round(h)) || 1) * (h < 0 ? -1 : 1), ...a); };
    }
    for (const C of [window.CanvasRenderingContext2D, window.OffscreenCanvasRenderingContext2D, window.Path2D]) {
      const P = C && C.prototype;
      if (!P) continue;
      const arc = P.arc, el = P.ellipse;
      if (arc) P.arc = function (x, y, r, ...a) { return arc.call(this, x, y, nonNeg(r), ...a); };
      if (el) P.ellipse = function (x, y, rx, ry, ...a) { return el.call(this, x, y, nonNeg(rx), nonNeg(ry), ...a); };
    }
  } catch (_) { /* keep */ }

  // What the trial run counts: frames drawn, sounds started (also by the piece's own Web Audio), touches.
  const raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = (fn) => raf((t) => { stats.frames += 1; fn(t); });
  const countSound = () => { stats.sounds += 1; if (performance.now() - stats.lastTouch < 700) stats.touchSounds += 1; };
  try {
    const AS = window.AudioScheduledSourceNode && AudioScheduledSourceNode.prototype;
    if (AS && AS.start) { const s = AS.start; AS.start = function (...a) { countSound(); return s.apply(this, a); }; }
    const MP = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function (...a) { countSound(); return MP.apply(this, a); };
  } catch (_) { /* keep */ }

  // ---- sound: a small synth with a room, so a piece can answer every touch without a single file ----------------
  const SCALE = [0, 2, 4, 7, 9];
  const base = 261.63 * Math.pow(2, (Number(cfg.key) || 0) / 12);
  let ctx = null, out = null, wet = null, muted = false, volume = 0.9;
  const ac = () => {
    if (ctx) return ctx;
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return null;
    try { ctx = new C(); } catch (_) { return null; }
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 12; comp.ratio.value = 3.5; comp.attack.value = 0.004; comp.release.value = 0.22;
    out = ctx.createGain(); out.gain.value = muted ? 0 : volume;
    out.connect(comp).connect(ctx.destination);
    const len = Math.floor(ctx.sampleRate * 2.2), ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch += 1) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i += 1) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    const verb = ctx.createConvolver(); verb.buffer = ir;
    wet = ctx.createGain(); wet.gain.value = 0.32;
    wet.connect(verb).connect(out);
    return ctx;
  };
  const unlock = () => { const c = ac(); if (c && c.state === "suspended") c.resume().catch(() => {}); };
  ["pointerdown", "touchend", "click", "keydown"].forEach((ev) => addEventListener(ev, unlock, { capture: true, passive: true }));
  document.addEventListener("visibilitychange", () => { if (!ctx) return; if (document.hidden) ctx.suspend().catch(() => {}); else ctx.resume().catch(() => {}); });
  const live = () => { const c = ac(); return c && out ? c : null; };
  const noise = (c, seconds, brown) => {
    const b = c.createBuffer(1, Math.max(1, Math.floor(c.sampleRate * seconds)), c.sampleRate), d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < d.length; i += 1) { const w = Math.random() * 2 - 1; if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w; }
    return b;
  };
  const freqOf = (n) => { const i = Math.round(Number(n) || 0), oct = Math.floor(i / 5), deg = ((i % 5) + 5) % 5; return base * 2 * Math.pow(2, oct + SCALE[deg] / 12); };
  function voice(freq, o) {
    const c = live(); if (!c) return null;
    const t = c.currentTime + (o.when || 0), vel = Math.min(1, Math.max(0, o.vel == null ? 0.5 : o.vel));
    const g = c.createGain(), dur = o.dur || 0.8, att = o.attack || 0.004;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vel * 0.5), t + att);
    g.gain.exponentialRampToValueAtTime(0.0001, t + att + dur);
    const osc = c.createOscillator(); osc.type = o.type || "sine"; osc.frequency.setValueAtTime(freq, t);
    if (o.glide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq * o.glide), t + att + dur * 0.9);
    let node = osc;
    if (o.lp) { const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = o.lp; node.connect(f); node = f; }
    node.connect(g); g.connect(out);
    const send = c.createGain(); send.gain.value = o.wet == null ? 0.35 : o.wet; g.connect(send).connect(wet);
    osc.start(t); osc.stop(t + att + dur + 0.05);
    return osc;
  }
  function burst(o) {
    const c = live(); if (!c) return;
    const t = c.currentTime + (o.when || 0), src = c.createBufferSource(); src.buffer = noise(c, o.dur + 0.05, o.brown);
    const f = c.createBiquadFilter(); f.type = o.filter || "bandpass"; f.frequency.setValueAtTime(o.from || 1800, t); f.Q.value = o.q || 1.2;
    if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t + o.dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(o.vel || 0.3, t + (o.attack || 0.004)); g.gain.exponentialRampToValueAtTime(0.0001, t + o.dur);
    src.connect(f).connect(g).connect(out);
    const send = c.createGain(); send.gain.value = o.wet == null ? 0.2 : o.wet; g.connect(send).connect(wet);
    src.start(t); src.stop(t + o.dur + 0.06);
  }
  const AMBIENT = {
    rain(c, g) { const s = c.createBufferSource(); s.buffer = noise(c, 3); s.loop = true; const hp = c.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 500; const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 5200; s.connect(hp).connect(lp).connect(g); s.start(); let on = true; const drip = () => { if (!on) return; voice(1800 + Math.random() * 2600, { dur: 0.05, vel: 0.03 + Math.random() * 0.04, glide: 0.6, wet: 0.5 }); setTimeout(drip, 90 + Math.random() * 260); }; drip(); return () => { on = false; s.stop(); }; },
    wind(c, g) { const s = c.createBufferSource(); s.buffer = noise(c, 4); s.loop = true; const bp = c.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 520; bp.Q.value = 0.9; const lfo = c.createOscillator(); lfo.frequency.value = 0.13; const lg = c.createGain(); lg.gain.value = 320; lfo.connect(lg).connect(bp.frequency); s.connect(bp).connect(g); s.start(); lfo.start(); return () => { s.stop(); lfo.stop(); }; },
    sea(c, g) { const s = c.createBufferSource(); s.buffer = noise(c, 4, true); s.loop = true; const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 900; const wave = c.createGain(); wave.gain.value = 0.6; const lfo = c.createOscillator(); lfo.frequency.value = 0.09; const lg = c.createGain(); lg.gain.value = 0.4; lfo.connect(lg).connect(wave.gain); s.connect(lp).connect(wave).connect(g); s.start(); lfo.start(); return () => { s.stop(); lfo.stop(); }; },
    room(c, g) { const s = c.createBufferSource(); s.buffer = noise(c, 4, true); s.loop = true; const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 260; s.connect(lp).connect(g); s.start(); return () => s.stop(); },
    night(c, g) { const s = c.createBufferSource(); s.buffer = noise(c, 4, true); s.loop = true; const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 300; s.connect(lp).connect(g); s.start(); let on = true; const chirp = () => { if (!on) return; const n = 2 + Math.floor(Math.random() * 3); for (let i = 0; i < n; i += 1) voice(4300 + Math.random() * 300, { when: i * 0.07, dur: 0.035, vel: 0.05, wet: 0.6 }); setTimeout(chirp, 700 + Math.random() * 1600); }; chirp(); return () => { on = false; s.stop(); }; },
    city(c, g) { const s = c.createBufferSource(); s.buffer = noise(c, 4, true); s.loop = true; const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 420; s.connect(lp).connect(g); s.start(); let on = true; const far = () => { if (!on) return; burst({ dur: 1.4, from: 300, to: 700, q: 0.7, vel: 0.05, wet: 0.7, attack: 0.5 }); setTimeout(far, 3000 + Math.random() * 5000); }; setTimeout(far, 1500); return () => { on = false; s.stop(); }; },
    fire(c, g) { const s = c.createBufferSource(); s.buffer = noise(c, 4, true); s.loop = true; const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 500; s.connect(lp).connect(g); s.start(); let on = true; const crack = () => { if (!on) return; burst({ dur: 0.03 + Math.random() * 0.05, from: 1500 + Math.random() * 3000, q: 2, vel: 0.08 + Math.random() * 0.1, wet: 0.1 }); setTimeout(crack, 40 + Math.random() * 380); }; crack(); return () => { on = false; s.stop(); }; },
  };
  const sound = {
    /** A soft wooden tap. */
    tap(vel = 0.6) { burst({ dur: 0.05, from: 2200, q: 1.6, vel: 0.22 * vel, wet: 0.15 }); voice(880, { dur: 0.09, vel: 0.35 * vel, glide: 0.55, wet: 0.2 }); },
    tick(vel = 0.5) { burst({ dur: 0.018, from: 5200, q: 3, vel: 0.2 * vel, wet: 0.05 }); },
    /** Degree n of the piece's pentatonic scale (0 = middle, negatives go down): a kalimba-like note. Returns Hz. */
    note(n = 0, o = {}) {
      const f = freqOf(n), vel = o.vel == null ? 0.55 : o.vel, dur = o.dur || 1.3;
      voice(f, { dur, vel, wet: o.wet == null ? 0.38 : o.wet, when: o.when });
      voice(f * 2.756, { dur: dur * 0.28, vel: vel * 0.22, wet: 0.3, when: o.when });
      voice(f * 5.404, { dur: dur * 0.1, vel: vel * 0.1, wet: 0.2, when: o.when });
      return f;
    },
    /** A small bell on degree n. */
    bell(n = 5, o = {}) {
      const c = live(); if (!c) return;
      const f = freqOf(n), t = c.currentTime + (o.when || 0), vel = o.vel == null ? 0.45 : o.vel, dur = o.dur || 2.4;
      const car = c.createOscillator(), mod = c.createOscillator(), mg = c.createGain(), g = c.createGain();
      car.frequency.value = f; mod.frequency.value = f * 3.5;
      mg.gain.setValueAtTime(f * 2.2, t); mg.gain.exponentialRampToValueAtTime(f * 0.05, t + dur);
      mod.connect(mg).connect(car.frequency);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vel * 0.35, t + 0.003); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      car.connect(g).connect(out); const send = c.createGain(); send.gain.value = 0.45; g.connect(send).connect(wet);
      car.start(t); mod.start(t); car.stop(t + dur + 0.05); mod.stop(t + dur + 0.05);
    },
    /** Several degrees at once, softly. */
    chord(ns = [0, 2, 4], o = {}) { ns.forEach((n, i) => sound.note(n, { ...o, vel: (o.vel == null ? 0.4 : o.vel) * 0.8, when: (o.when || 0) + i * (o.spread == null ? 0.03 : o.spread) })); },
    /** Three rising bells: something was found, finished, given. */
    chime() { [5, 7, 9].forEach((n, i) => sound.bell(n, { when: i * 0.13, vel: 0.32 })); },
    pop(vel = 0.6) { voice(520, { dur: 0.12, vel: 0.45 * vel, glide: 2.6, wet: 0.25 }); },
    thud(vel = 0.7) { voice(130, { dur: 0.28, vel: 0.8 * vel, glide: 0.4, wet: 0.15 }); burst({ dur: 0.08, from: 300, filter: "lowpass", vel: 0.2 * vel, wet: 0.1 }); },
    whoosh(dur = 0.7, vel = 0.5) { burst({ dur, from: 380, to: 2600, q: 0.8, vel: 0.22 * vel, attack: dur * 0.4, wet: 0.35 }); },
    /** A slow warm swell (a reveal). */
    swell(ns = [0, 2, 4], o = {}) {
      const c = live(); if (!c) return;
      const t = c.currentTime + (o.when || 0), dur = o.dur || 4.5;
      ns.forEach((n) => [-6, 6].forEach((det) => {
        const osc = c.createOscillator(); osc.type = "sawtooth"; osc.frequency.value = freqOf(n) / 2; osc.detune.value = det;
        const f = c.createBiquadFilter(); f.type = "lowpass"; f.frequency.setValueAtTime(400, t); f.frequency.linearRampToValueAtTime(1800, t + dur * 0.5); f.frequency.linearRampToValueAtTime(600, t + dur);
        const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime((o.vel == null ? 0.05 : o.vel * 0.1) / ns.length, t + dur * 0.4); g.gain.linearRampToValueAtTime(0.0001, t + dur);
        osc.connect(f).connect(g).connect(out); const send = c.createGain(); send.gain.value = 0.6; g.connect(send).connect(wet);
        osc.start(t); osc.stop(t + dur + 0.1);
      }));
    },
    /** A raw tone: tone(440, { dur, type, vel, glide, attack, lp, wet, when }). */
    tone(freq = 440, o = {}) { voice(freq, o); },
    /** A filtered noise hit: noise({ dur, from, to, q, vel, filter }). */
    noise(o = {}) { burst({ dur: 0.3, ...o }); },
    /** A bed of sound under the piece: "rain" | "wind" | "sea" | "room" | "night" | "city" | "fire". */
    ambient(kind = "room", level = 0.5) {
      const c = live(); if (!c || !AMBIENT[kind]) return { level() {}, stop() {} };
      const g = c.createGain(); g.gain.value = 0.0001; g.connect(out);
      g.gain.linearRampToValueAtTime(0.16 * level, c.currentTime + 1.6);
      const stop = AMBIENT[kind](c, g);
      return { level(v) { g.gain.setTargetAtTime(0.16 * Math.max(0, v), c.currentTime, 0.4); }, stop(fade = 1.2) { g.gain.setTargetAtTime(0.0001, c.currentTime, fade / 3); setTimeout(stop, fade * 1000 + 200); } };
    },
    freq: freqOf,
    get context() { return ac(); },
  };

  // ---- the stage: sizes, fonts, captions, a hint ring -------------------------------------------------------------
  const size = { w: innerWidth, h: innerHeight, dpr: Math.min(2, devicePixelRatio || 1), portrait: innerHeight >= innerWidth };
  const resizers = new Set();
  addEventListener("resize", () => { Object.assign(size, { w: innerWidth, h: innerHeight, dpr: Math.min(2, devicePixelRatio || 1), portrait: innerHeight >= innerWidth }); resizers.forEach((fn) => { try { fn(size); } catch (e) { fail(e && e.message); } }); });
  // CJK fonts carry Latin glyphs of their own (Kaiti's are poor), so English pieces put a Latin face first.
  const en = cfg.lang === "en", spacing = en ? "0.01em" : "0.08em";
  const font = Object.freeze(en ? {
    serif: "Georgia, 'Iowan Old Style', 'Palatino Linotype', Palatino, 'Noto Serif', 'Songti SC', serif",
    kai: "Georgia, 'Iowan Old Style', 'Palatino Linotype', Palatino, 'Noto Serif', 'Kaiti SC', serif",
    sans: "-apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'PingFang SC', sans-serif",
  } : {
    serif: "'Songti SC', 'STSong', 'Noto Serif SC', 'Noto Serif CJK SC', 'Source Han Serif SC', Georgia, serif",
    kai: "'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', Georgia, serif",
    sans: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Noto Sans SC', system-ui, sans-serif",
  });
  let layer = null;
  const ui = () => {
    if (layer && layer.isConnected) return layer;
    layer = document.createElement("div");
    layer.setAttribute("data-lp", "");
    layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483000;";
    (document.body || document.documentElement).appendChild(layer);
    return layer;
  };
  let captionEl = null, captionTimer = 0;
  // A piece may hand the words in with the options ({ text, x, y }): taken as meant, never shown as "[object Object]".
  const spread = (text, o) => (text && typeof text === "object" ? [text.text ?? text.label ?? text.words ?? "", { ...text, ...(o || {}) }] : [text, o || {}]);
  function caption(text0, o0 = {}) {
    const [text, o] = spread(text0, o0);
    return new Promise((resolve) => {
      if (captionEl) { const old = captionEl; old.style.opacity = "0"; setTimeout(() => old.remove(), 500); }
      clearTimeout(captionTimer);
      if (!text) { captionEl = null; resolve(); return; }
      const el = document.createElement("div");
      const dark = o.dark != null ? o.dark : !!cfg.dark;
      el.textContent = String(text);
      el.style.cssText = `position:absolute;left:8%;right:8%;top:${Math.round((o.y == null ? 0.14 : o.y) * 100)}%;text-align:center;font-family:${o.kai ? font.kai : font.serif};font-size:${o.size || 20}px;line-height:${en ? 1.45 : 1.7};letter-spacing:${spacing};color:${o.color || (dark ? "rgba(255,248,236,0.94)" : "#2b2420")};text-shadow:${dark ? "0 2px 14px rgba(0,0,0,0.45)" : "0 1px 10px rgba(255,250,240,0.8)"};opacity:0;transform:translateY(6px);transition:opacity .7s ease,transform .9s cubic-bezier(.2,.8,.2,1);white-space:pre-line;`;
      ui().appendChild(el); captionEl = el;
      requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = "1"; el.style.transform = "none"; }));
      const ms = o.ms == null ? 2800 : o.ms;
      if (ms > 0) captionTimer = setTimeout(() => { el.style.opacity = "0"; setTimeout(() => { el.remove(); if (captionEl === el) captionEl = null; resolve(); }, 700); }, ms);
      else resolve();
    });
  }
  let hintEl = null;
  function hint(text0, o0 = {}) {
    if (hintEl) { const old = hintEl; old.style.opacity = "0"; setTimeout(() => old.remove(), 400); hintEl = null; }
    if (text0 == null || text0 === false) return;
    const [text, o] = spread(text0, o0);
    const dark = o.dark != null ? o.dark : !!cfg.dark;
    const fin = (v, d) => (Number.isFinite(Number(v)) && v !== "" && v != null ? Number(v) : d);
    const x = fin(o.x, size.w / 2), y = fin(o.y, size.h * 0.78);
    const el = document.createElement("div");
    const ink = dark ? "255,248,236" : "43,36,32";
    el.innerHTML = `<i></i><b></b>`;
    el.style.cssText = `position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%);opacity:0;transition:opacity .6s ease;`;
    const ring = el.firstChild, label = el.lastChild;
    ring.style.cssText = `display:block;width:46px;height:46px;border-radius:50%;border:1.5px solid rgba(${ink},0.75);box-shadow:0 0 18px rgba(${ink},0.25);animation:lp-ring 1.8s ease-out infinite;`;
    label.textContent = String(text || "");
    label.style.cssText = `position:absolute;left:50%;top:58px;transform:translateX(-50%);white-space:nowrap;font:500 14px/1 ${font.sans};letter-spacing:${en ? "0.04em" : "0.16em"};color:rgba(${ink},0.85);`;
    ui().appendChild(el); hintEl = el;
    requestAnimationFrame(() => { el.style.opacity = "1"; });
  }

  // ---- paper, grain and the classic's own page ---------------------------------------------------------------------
  // A piece made in one pass draws its own pictures; the textures and the typesetting of the reveal are done here once,
  // by hand, so every piece ends on a finished page in the form of the life that made it.
  const lum = (hex) => { const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || "")); if (!m) return 0.8; const n = parseInt(m[1], 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };
  const papers = new Map();
  function paper(g, w, h, o = {}) {
    const tone = o.tone || (cfg.dark ? "#1d1a17" : "#f4ecdc");
    const key = `${Math.round(w)}x${Math.round(h)}:${tone}:${o.lines || ""}`;
    let c = papers.get(key);
    if (!c) {
      const s = Math.min(2, devicePixelRatio || 1), r = rand(`paper${key}`), dark = lum(tone) < 0.42;
      c = document.createElement("canvas"); c.width = Math.max(1, Math.round(w * s)); c.height = Math.max(1, Math.round(h * s));
      const p = c.getContext("2d"); p.scale(s, s);
      p.fillStyle = tone; p.fillRect(0, 0, w, h);
      p.lineCap = "round";
      for (let i = 0, n = Math.min(4000, (w * h) / 240); i < n; i += 1) {
        const x = r() * w, y = r() * h, a = r() * Math.PI, l = 3 + r() * 10;
        p.strokeStyle = dark ? `rgba(255,238,214,${0.018 + r() * 0.03})` : `rgba(96,64,32,${0.022 + r() * 0.035})`;
        p.lineWidth = 0.35 + r() * 0.6;
        p.beginPath(); p.moveTo(x, y); p.quadraticCurveTo(x + Math.cos(a) * l * 0.5 + (r() - 0.5) * 2.4, y + Math.sin(a) * l * 0.5 + (r() - 0.5) * 2.4, x + Math.cos(a) * l, y + Math.sin(a) * l); p.stroke();
      }
      for (let i = 0, n = Math.min(1600, (w * h) / 700); i < n; i += 1) { p.fillStyle = dark ? `rgba(255,244,228,${r() * 0.06})` : `rgba(84,52,22,${r() * 0.08})`; p.fillRect(r() * w, r() * h, 0.7 + r() * 1.1, 0.7 + r() * 1.1); }
      if (o.lines) { const step = o.lines === true ? 30 : Number(o.lines) || 30; p.strokeStyle = "rgba(64,88,140,0.13)"; p.lineWidth = 1; for (let y = step * 2; y < h - step; y += step) { p.beginPath(); p.moveTo(w * 0.06, y + 0.5); p.lineTo(w * 0.94, y + 0.5); p.stroke(); } }
      const v = p.createRadialGradient(w * 0.42, h * 0.34, Math.min(w, h) * 0.18, w * 0.5, h * 0.5, Math.hypot(w, h) * 0.62);
      v.addColorStop(0, dark ? "rgba(255,240,214,0.05)" : "rgba(255,252,244,0.34)");
      v.addColorStop(1, dark ? "rgba(0,0,0,0.46)" : "rgba(122,82,40,0.17)");
      p.fillStyle = v; p.fillRect(0, 0, w, h);
      if (papers.size > 6) papers.clear();
      papers.set(key, c);
    }
    g.drawImage(c, 0, 0, w, h);
  }
  let grainPat = null, grainFor = null;
  function grain(g, w, h, amount = 0.1) {
    if (!grainPat || grainFor !== g) {
      const t = document.createElement("canvas"); t.width = t.height = 128;
      const p = t.getContext("2d"), d = p.createImageData(128, 128), r = rand("grain");
      for (let i = 0; i < d.data.length; i += 4) { const v = r() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
      p.putImageData(d, 0, 0); grainPat = g.createPattern(t, "repeat"); grainFor = g;
    }
    const ox = Math.random() * 128, oy = Math.random() * 128;
    g.save();
    g.globalAlpha = Math.max(0, Math.min(0.4, amount)); g.globalCompositeOperation = "overlay";
    g.translate(-ox, -oy); g.fillStyle = grainPat; g.fillRect(ox, oy, w, h);
    g.restore();
    g.save();
    if (Math.random() < 0.07) { g.globalAlpha = 0.18 + Math.random() * 0.2; g.fillStyle = "#f4ead2"; g.fillRect(Math.random() * w, 0, 1, h); }
    g.globalAlpha = Math.random() * amount * 0.35; g.fillStyle = Math.random() < 0.5 ? "#000" : "#fff8e8"; g.fillRect(0, 0, w, h);
    g.restore();
  }
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[ch]));
  const brs = (s) => esc(s).replace(/\n/g, "<br>");
  const arr = (v, n) => (Array.isArray(v) ? v : v == null || v === "" ? [] : [v]).slice(0, n);
  const host = cfg.host && cfg.host.id;
  const svgNs = "http:" + "//www.w3.org/2000/svg";
  const orn = (tf) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='${svgNs}' width='48' height='48' viewBox='0 0 48 48'><g transform='${tf}' fill='none' stroke='rgb(241,228,196)' stroke-linecap='round'><path d='M4 44 C4 20 20 4 44 4' stroke-width='1.6'/><path d='M11 40 C11 24 24 11 40 11' stroke-width='0.9' opacity='.7'/><path d='M17 17 c-6 0 -6 -8 0 -8 c4 0 5 5 1 6' stroke-width='1.2'/><circle cx='24' cy='24' r='1.6' fill='rgb(241,228,196)' stroke='none'/></g></svg>`)}")`;
  // A short line stays whole and the page shrinks its type until it fits; a long one may wrap.
  // Chinese breaks after its punctuation, never inside a word; straight quotes become 「」.
  const quoted = (s) => (en ? String(s) : String(s).replace(/["'“‘]([^"'”’]{1,40})["'”’]/g, "「$1」"));
  const len = (s) => [...s].length;
  const phrases = (s, max) => {
    if (en || len(s) <= max) return [s];
    const parts = s.replace(/([，。；：！？、」])/g, "$1\u0001").replace(/([^\u0001])「/g, "$1\u0001「").split("\u0001").filter(Boolean), out = [];
    for (const p of parts) { if (out.length && len(out[out.length - 1] + p) <= max) out[out.length - 1] += p; else out.push(p); }
    return out;
  };
  const line = (x, max) => `<span class="${len(x) <= max ? "lpp-nw" : "lpp-w"}">${esc(x)}</span>`;
  const lines = (v, n, max) => arr(v, n).flatMap((x) => quoted(x).split("\n")).flatMap((x) => phrases(x, max)).slice(0, n + 3).map((x) => line(x, max)).join("");
  const PAGE = {
    card: (d) => `<div class="lpp-frame">${d.title ? `<small>${esc(d.title)}</small>` : ""}<p>${lines(d.lines || d.text, 4, en ? 28 : 14)}</p>${d.small ? `<em>${esc(d.small)}</em>` : ""}</div>`,
    letter: (d) => {
      const sketch = typeof d.sketch === "string" && /^data:image\/(png|jpe?g|webp);/.test(d.sketch) ? `<figure><img alt="" src="${d.sketch}"></figure>` : "";
      const close = d.close || (host === "vangogh" ? (en ? "I shake your hand firmly." : "用力握你的手。") : "");
      const sign = d.sign || (host === "vangogh" ? (en ? "Ever yours, Vincent" : "永远是你的，文森特") : "");
      return `${sketch}${d.place ? `<p class="lpp-place">${esc(d.place)}</p>` : ""}${d.to ? `<p class="lpp-to">${esc(d.to)}</p>` : ""}${arr(d.paragraphs || d.lines, 6).map((x) => `<p class="lpp-par">${brs(x)}</p>`).join("")}${close ? `<p class="lpp-close">${esc(close)}</p>` : ""}${sign ? `<p class="lpp-sign">${esc(sign)}</p>` : ""}`;
    },
    entry: (d) => {
      const rows = arr(d.rows, 8).map((x) => (Array.isArray(x) ? `<p><b>${esc(x[0])}</b>${brs(x[1])}</p>` : x && typeof x === "object" ? `<p><b>${esc(x.label)}</b>${brs(x.text)}</p>` : `<p>${brs(x)}</p>`)).join("");
      const gloss = /^(.{1,8}?)\s*[（(]([^（()）]{1,24})[）)]\s*$/.exec(String(d.name || ""));
      if (gloss) d = { ...d, name: gloss[1], part: [d.part, gloss[2]].filter(Boolean).join(en ? " · " : "　") };
      const seal = d.seal === false ? "" : d.seal || (host === "lishizhen" ? "濒湖" : "");
      const foot = d.foot || (en ? "Written for the heart, not for the pharmacy. If your body is unwell, see a doctor." : "此方写给心，不入药；身上若有不适，请去看医生。");
      return `<div class="lpp-cols"><h3>${esc(d.name)}${d.part ? `<small>${esc(d.part)}</small>` : ""}</h3>${rows}</div><p class="lpp-foot">${esc(foot)}</p>${seal ? `<i class="lpp-seal">${esc(String(seal).slice(0, 4))}</i>` : ""}`;
    },
    chapter: (d) => {
      const poem = arr(d.poem, 8);
      const head = poem.length ? `<p class="lpp-poem-head">${esc(d.poemHead || (en ? "There is a poem to prove it:" : "有诗为证："))}</p><p class="lpp-poem">${lines(poem, 8, en ? 60 : 12)}</p>` : "";
      const close = d.close || (en ? "If you would know what came after, listen to the next chapter." : "毕竟不知后事如何，且听下回分解。");
      return `${d.title ? `<small>${esc(d.title)}</small>` : ""}<h3>${lines(d.couplet, 2, en ? 0 : 12)}</h3>${arr(d.lines, 3).map((x) => `<p class="lpp-par">${brs(x)}</p>`).join("")}${head}<p class="lpp-close">${esc(close)}</p>`;
    },
  };
  const TONE = { card: "#17130f", letter: "#f6eedd", entry: "#f3e9d4", chapter: "#f2e6cc" };
  const pageCss = () => {
    const SERIF = font.serif, KAI = font.kai;
    return `.lpp{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:max(58px,env(safe-area-inset-top)) 14px calc(max(12px,env(safe-area-inset-bottom)) + 96px);background:rgba(26,20,14,.5);opacity:0;transition:opacity .9s ease;pointer-events:auto}
.lpp.on{opacity:1}
.lpp-sheet{position:relative;box-sizing:border-box;width:min(92vw,388px);max-height:100%;padding:28px 24px 26px;color:#2b2420;background:#f3e9d4 center/cover no-repeat;border-radius:2px;box-shadow:0 24px 64px rgba(0,0,0,.4),0 2px 8px rgba(0,0,0,.24);transform:translateY(18px) rotate(-.8deg) scale(.96);transition:transform 1.2s cubic-bezier(.2,.8,.2,1);overflow:hidden;font-size:var(--fs,17px);font-family:${SERIF}}
.lpp.on .lpp-sheet{transform:rotate(-.35deg)}
.lpp-nw,.lpp-w{display:block}
.lpp-nw{white-space:nowrap}
.lpp-cols{writing-mode:vertical-rl;width:100%;height:100%;font-family:${KAI};line-height:1.95;letter-spacing:.08em;overflow:hidden}
.lpp-cols h3{display:block;inline-size:-webkit-fit-content;inline-size:fit-content;margin:0;margin-block:3px .6em;padding:.5em .2em;font-size:2.15em;font-weight:400;line-height:1.15;letter-spacing:.24em;border:1.5px solid #3a2a20;outline:1px solid #3a2a20;outline-offset:3px}
.lpp-cols h3 small{display:block;margin-block-start:.45em;font-size:.36em;letter-spacing:.3em;color:#8a5634}
.lpp-cols p{margin:0;padding-block:0 .28em;margin-block-end:.28em;border-block-end:1px solid rgba(112,64,30,.2)}
.lpp-cols b{display:inline-block;margin-inline-end:.5em;padding:.38em .14em;background:#2b2420;color:#f3e9d4;font:600 .72em/1.25 ${SERIF};letter-spacing:.32em}
.lpp-entry .lpp-sheet{height:min(610px,100%);padding:30px 22px 70px}
.lpp-foot{position:absolute;left:22px;right:22px;bottom:16px;margin:0;padding-top:8px;border-top:1px solid rgba(112,64,30,.25);font:12.5px/1.5 ${SERIF};letter-spacing:.04em;color:#7a6250;text-align:center}
.lpp-seal{position:absolute;left:26px;bottom:62px;display:flex;align-items:center;justify-content:center;width:42px;height:42px;writing-mode:vertical-rl;font:700 14px/1.05 ${KAI};font-style:normal;color:#f8eadf;background:#b4412c;border-radius:5px;box-shadow:inset 0 0 0 2px rgba(255,236,222,.55);transform:rotate(-5deg);opacity:.93}
.lpp-en .lpp-cols{writing-mode:horizontal-tb;width:auto;height:auto;font-family:${SERIF};line-height:1.45;letter-spacing:0}
.lpp-en .lpp-cols h3{display:block;margin:0 0 14px;padding:0;border:0;outline:0;font-size:1.85em;font-weight:700;letter-spacing:.01em;line-height:1.15;text-align:center}
.lpp-en .lpp-cols h3 small{display:block;margin:5px 0 0;font-size:.42em;font-style:italic;font-weight:400;letter-spacing:.02em}
.lpp-en .lpp-cols p{margin:0 0 9px;padding:0;border:0}
.lpp-en .lpp-cols b{margin:0 8px 0 0;padding:2px 6px 1px;font-size:.6em;letter-spacing:.12em;text-transform:uppercase;vertical-align:.18em}
.lpp-en.lpp-entry .lpp-sheet{height:auto;padding:28px 24px 96px}
.lpp-en .lpp-seal{left:auto;right:20px;top:20px;bottom:auto;width:38px;height:38px;font-size:13px;transform:rotate(4deg)}
.lpp-card .lpp-sheet{width:min(94vw,410px);aspect-ratio:4/3.4;padding:14px;color:#f1e4c4;background-color:#17130f;box-shadow:0 0 0 1px rgba(0,0,0,.6),0 26px 72px rgba(0,0,0,.6)}
.lpp-card .lpp-sheet::after{content:"";position:absolute;inset:0;background:var(--tint,transparent);mix-blend-mode:color;opacity:.34;pointer-events:none}
.lpp-card.on .lpp-sheet{animation:lpp-iris 1.4s cubic-bezier(.3,.7,.2,1) both,lpp-flicker 3.2s steps(2) 1.4s infinite}
.lpp-frame{position:relative;box-sizing:border-box;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:26px 30px;text-align:center;border:2px solid rgba(241,228,196,.82);outline:1px solid rgba(241,228,196,.42);outline-offset:-10px;background:${orn("")} no-repeat 4px 4px,${orn("translate(48 0) scale(-1 1)")} no-repeat calc(100% - 4px) 4px,${orn("translate(0 48) scale(1 -1)")} no-repeat 4px calc(100% - 4px),${orn("translate(48 48) scale(-1 -1)")} no-repeat calc(100% - 4px) calc(100% - 4px)}
.lpp-frame small{margin-bottom:14px;font:600 .66em/1 ${SERIF};letter-spacing:.42em;text-transform:uppercase;opacity:.82}
.lpp-frame p{align-self:stretch;margin:0;font-size:${en ? "1.12em" : "1.04em"};line-height:1.6;letter-spacing:${en ? ".03em" : ".1em"};text-wrap:balance;text-shadow:0 0 10px rgba(241,228,196,.28)}
.lpp-frame em{margin-top:16px;font-size:.66em;line-height:1.3;letter-spacing:.06em;opacity:.7}
.lpp-letter .lpp-sheet{padding:26px 24px 24px;font-family:${en ? SERIF : KAI};line-height:1.72}
.lpp-letter p{margin:0 0 .5em}
.lpp-en.lpp-letter p{font-style:italic}
.lpp-place{text-align:right;font-size:.8em;color:#6a5444;margin-bottom:.9em!important}
.lpp-par{text-indent:${en ? "1.2em" : "2em"}}
.lpp-close{margin-top:.7em!important}
.lpp-sign{text-align:right;font-size:1.06em}
.lpp-letter figure{position:relative;float:right;width:36%;margin:2px 0 8px 12px;padding:5px;background:#fffdf6;box-shadow:0 3px 10px rgba(0,0,0,.2);transform:rotate(2.4deg)}
.lpp-letter figure::before{content:"";position:absolute;left:30%;top:-8px;width:40%;height:15px;background:rgba(236,222,178,.8);transform:rotate(-4deg)}
.lpp-letter img{display:block;width:100%;height:auto}
.lpp-chapter .lpp-sheet{padding:32px 28px 26px;text-align:center;font-family:${en ? SERIF : KAI}}
.lpp-chapter .lpp-sheet::before{content:"";position:absolute;inset:9px;border:3px double rgba(128,42,24,.5);pointer-events:none}
.lpp-chapter small{display:block;margin-bottom:14px;font:600 .76em/1 ${SERIF};letter-spacing:${en ? ".24em" : ".5em"};color:#a33a22;text-transform:uppercase}
.lpp-chapter h3{margin:0 0 16px;font-size:${en ? "1.1em" : "1.3em"};font-weight:400;line-height:${en ? 1.45 : 1.6};letter-spacing:${en ? ".01em" : ".14em"};text-wrap:balance}
.lpp-chapter h3 span+span{margin-top:${en ? ".35em" : "0"}}
.lpp-en.lpp-chapter h3{font-style:italic}
.lpp-chapter h3::after{content:"";display:block;width:44%;margin:14px auto 0;border-top:1px solid rgba(128,42,24,.45)}
.lpp-chapter p{margin:0 0 .55em;line-height:1.7;text-align:left}
.lpp-poem-head{color:#a33a22}
.lpp-chapter .lpp-poem{text-align:center;font-size:${en ? ".9em" : "1em"};letter-spacing:${en ? "0" : ".12em"};line-height:1.85;overflow:hidden}.lpp-chapter .lpp-close{margin-top:.9em;font-size:.86em;color:#6a5444;text-align:center}
@keyframes lpp-iris{from{clip-path:circle(0% at 50% 50%)}to{clip-path:circle(75% at 50% 50%)}}
@keyframes lpp-flicker{0%{filter:brightness(1)}50%{filter:brightness(.93)}}`;
  };
  let pageEl = null, pageStyled = false;
  function page(kind, words = {}, o = {}) {
    const k = PAGE[kind] ? kind : "entry", d = words && typeof words === "object" ? words : { lines: [words] };
    if (!pageStyled) { const st = document.createElement("style"); st.setAttribute("data-lp", ""); st.textContent = pageCss(); (document.head || document.documentElement).appendChild(st); pageStyled = true; }
    if (pageEl) pageEl.remove();
    const el = document.createElement("div"), sheet = document.createElement("div");
    el.className = `lpp lpp-${k}${en ? " lpp-en" : ""}`;
    sheet.className = "lpp-sheet";
    sheet.innerHTML = PAGE[k](d);
    try { const t = document.createElement("canvas"); t.width = 388; t.height = 620; paper(t.getContext("2d"), 388, 620, { tone: TONE[k] }); sheet.style.backgroundImage = `url(${t.toDataURL("image/jpeg", 0.86)})`; } catch (_) { /* plain tone */ }
    if (k === "card" && d.tint) sheet.style.setProperty("--tint", String(d.tint));
    el.appendChild(sheet); ui().appendChild(el); pageEl = el;
    const cols = sheet.querySelector(".lpp-cols");
    const whole = [...sheet.querySelectorAll(".lpp-nw")];
    const over = () => (cols && !en ? cols.scrollWidth > cols.clientWidth + 1 : sheet.scrollHeight > sheet.clientHeight + 1) || whole.some((el) => el.scrollWidth > el.clientWidth + 1);
    let fs = k === "card" ? 19 : 17;
    sheet.style.setProperty("--fs", `${fs}px`);
    while (over() && fs > 12) { fs -= 1; sheet.style.setProperty("--fs", `${fs}px`); }
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("on")));
    sound.whoosh(0.9, 0.35);
    return new Promise((resolve) => {
      let open = false, closed = false;
      const finish = () => { if (closed) return; closed = true; hint(null); sound.chime(); haptic(16); resolve(); };
      const keep = typeof o.keep === "string" && o.keep.trim() ? o.keep.trim().slice(0, 8) : en ? "Keep it" : "收下";
      setTimeout(() => { if (closed) return; open = true; hint(keep, { x: size.w / 2, y: size.h - 54, dark: true }); }, Number(o.wait) || 1800);
      el.addEventListener("pointerdown", () => { if (open) finish(); else sound.tap(0.35); });
      setTimeout(finish, Number(o.ms) || 18000);
    });
  }

  // ---- a seeded random (the same piece plays the same for the same person) ----------------------------------------
  const seedOf = (s) => { let h = 2166136261; for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rand = (seed) => { let a = seedOf(seed == null ? JSON.stringify(cfg.me || {}) : seed); return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };

  // ---- touches, the ending, the parent -----------------------------------------------------------------------------
  const held = { since: 0, longest: 0 };
  const onTouch = () => { stats.touches += 1; stats.lastTouch = held.since = performance.now(); };
  const onLift = () => { if (held.since) held.longest = Math.max(held.longest, performance.now() - held.since); held.since = 0; };
  addEventListener("pointerdown", onTouch, { capture: true, passive: true });
  addEventListener("pointerup", onLift, { capture: true, passive: true });
  addEventListener("pointercancel", onLift, { capture: true, passive: true });
  const trace = () => ({ touches: stats.touches, longestHoldMs: Math.round(Math.max(held.longest, held.since ? performance.now() - held.since : 0)), seconds: Math.round(performance.now() / 1000) });
  ["gesturestart", "gesturechange", "dblclick", "contextmenu", "selectstart", "dragstart"].forEach((ev) => document.addEventListener(ev, (e) => e.preventDefault(), { passive: false }));
  document.addEventListener("touchmove", (e) => { if (e.touches && e.touches.length > 1) e.preventDefault(); }, { passive: false });
  function done(result) {
    if (stats.done) return;
    const r = result && typeof result === "object" ? result : { line: result };
    const clip = (v, n) => {
      const s = v == null ? "" : String(v);
      if (s.length <= n || !en) return s.slice(0, n);
      const i = s.lastIndexOf(" ", n);
      return `${(i > n * 0.6 ? s.slice(0, i) : s.slice(0, n)).replace(/[\s,;:.—–-]+$/, "")}…`;
    };
    const image = typeof r.image === "string" && r.image.startsWith("data:image/") && r.image.length < 2_500_000 ? r.image : "";
    stats.done = { line: clip(r.line, en ? 200 : 120), title: clip(r.title, en ? 64 : 40), back: clip(r.back, en ? 180 : 90), at: Math.round(performance.now()) };
    post("done", { result: { ...stats.done, image } });
  }
  addEventListener("message", (e) => {
    const m = e.data;
    if (!m || m.lpFlash !== 1) return;
    if (m.type === "mute") { muted = !!m.on; if (out && ctx) out.gain.setTargetAtTime(muted ? 0 : volume, ctx.currentTime, 0.05); }
    if (m.type === "pause" && ctx) ctx.suspend().catch(() => {});
    if (m.type === "resume" && ctx) ctx.resume().catch(() => {});
  });
  const haptic = (ms = 12) => { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (_) { /* blocked */ } post("haptic", { ms }); };
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  window.LP = Object.freeze({
    me: Object.freeze({ ...(cfg.me || {}) }),
    host: Object.freeze({ ...(cfg.host || {}) }),
    lang: cfg.lang === "en" ? "en" : "zh",
    theme: Object.freeze({ ...(cfg.theme || {}) }),
    font, size, sound, caption, hint, rand, haptic, wait, done, trace, paper, grain, page,
    onResize(fn) { resizers.add(fn); return () => resizers.delete(fn); },
    get finished() { return !!stats.done; },
  });

  const ready = () => {
    if (stats.ready) return;
    stats.ready = true;
    const b = document.body;
    const boxes = b ? [...b.querySelectorAll("*")].filter((el) => !el.closest("[data-lp]")).map((el) => el.getBoundingClientRect()).filter((r) => r.width > 4 && r.height > 4).length : 0;
    post("ready", { boxes, frames: stats.frames, errors: stats.errors.length });
  };
  addEventListener("load", () => raf(() => raf(() => setTimeout(ready, 120))));
}

/** The sandbox's touch hygiene and the hint ring's pulse, before anything the piece brings. */
const BASE_CSS = "html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;overscroll-behavior:none;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;}canvas{touch-action:none;}@keyframes lp-ring{0%{transform:scale(.7);opacity:0}25%{opacity:1}100%{transform:scale(1.5);opacity:0}}";

/** No network from inside a piece: everything it shows and plays is drawn, written or synthesized in the file. */
export const CSP = "default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; style-src 'unsafe-inline'; img-src data: blob:; media-src data: blob:; font-src data:; connect-src 'none'; worker-src blob:; frame-src 'none'; form-action 'none'; base-uri 'none'";

const safeJson = (v) => JSON.stringify(v).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");

/** The SDK as an inline <script> body, configured for one piece. */
export const sdkScript = (cfg) => `(${LP_SDK.toString()})(${safeJson(cfg || {})});`;

/** The header the model writes before the HTML: <!--flash {json} --> (title, line, palette …). */
const HEADER = /^\s*(?:```[a-z]*\s*)?<!--\s*flash\s*([\s\S]*?)-->\s*/i;

/** Split a model's answer into its header (parsed, or null) and the HTML document. */
export function splitPiece(text) {
  let s = String(text || "").trim();
  let meta = null;
  const m = HEADER.exec(s);
  if (m) { try { meta = JSON.parse(m[1].trim()); } catch { meta = null; } s = s.slice(m[0].length); }
  s = s.replace(/^```(?:html)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
  const start = s.search(/<!doctype html|<html[\s>]/i);
  if (start > 0) s = s.slice(start);
  const end = s.search(/<\/html>/i);
  if (end >= 0) s = s.slice(0, end + "</html>".length);
  return { meta, html: s };
}

/**
 * The piece as it is played: CSP, viewport and the configured SDK first in <head>, the piece's own document after.
 * `cfg` = { lang, me, host, theme, key, dark }.
 */
export function compose(html, cfg) {
  let doc = String(html || "");
  doc = doc.replace(/<meta[^>]+http-equiv=["']?content-security-policy[^>]*>/gi, "");
  const head = `<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${CSP}">` +
    (/<meta[^>]+name=["']?viewport/i.test(doc) ? "" : `<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,user-scalable=no">`) +
    `<style data-lp>${BASE_CSS}</style><script data-lp>${sdkScript(cfg)}</script>`;
  if (/<head[^>]*>/i.test(doc)) doc = doc.replace(/<head[^>]*>/i, (h) => `${h}${head}`);
  else if (/<html[^>]*>/i.test(doc)) doc = doc.replace(/<html[^>]*>/i, (h) => `${h}<head>${head}</head>`);
  else doc = `<html><head>${head}</head><body>${doc}</body></html>`;
  if (!/^\s*<!doctype html>/i.test(doc)) doc = `<!doctype html>\n${doc}`;
  return doc;
}
