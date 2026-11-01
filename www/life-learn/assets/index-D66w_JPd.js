const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/plaza-DtW-9Ogo.js",
      "assets/three.core-DtjtRha-.js",
      "assets/gsap-CvDoa17S.js",
      "assets/lifecard-Bz8CsM4Y.js",
      "assets/i18n-BvGoRVq5.js",
      "assets/assets-p2qy6QaX.js",
      "assets/lifecard-4j-R9WIN.css",
      "assets/me-CiQWAPxS.js",
      "assets/fonts-BF0KELzc.js",
      "assets/preload-helper-B4-B-RAC.js",
      "assets/stamp-C8irYyoR.js",
      "assets/three.module-DCgPjWyi.js",
      "assets/stamp-B9sAYg4l.css",
      "assets/visits-C_j5CG_Y.js",
      "assets/mic-DTF0YIPs.js",
      "assets/sfx-DTi9SDQe.js",
      "assets/mine-CDwrJdN1.js",
      "assets/sfx-CUgiK3oU.css",
      "assets/journey-BS70xIEy.js",
      "assets/journey-CKWT4nIk.css",
      "assets/merge-DZHEIcuB.js",
      "assets/sky-CUyBFZaE.js",
      "assets/sky-6JFrQaA8.js",
      "assets/plaza-DxwmZEOu.css",
      "assets/melies-CVeXgO_j.js",
      "assets/direct-B4OdUEHl.js",
      "assets/melies-BszE5YdP.css",
      "assets/vangogh-vtK6V0FT.js",
      "assets/room-zvqq_5d-.js",
      "assets/vangogh-scMeZbkk.css",
      "assets/lishizhen-DHEXqMi7.js",
      "assets/lishizhen-D5BnXFcA.css",
      "assets/xiyou-qiVItcEw.js",
      "assets/xiyou-ACXbKTp8.css",
      "assets/lookPreview-D5XL_Al7.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, i as t, t as n } from "./three.module-DCgPjWyi.js";
import {
  $r as r,
  Fa as i,
  Fi as a,
  G as o,
  H as s,
  Ja as c,
  Nr as l,
  O as u,
  Qi as d,
  U as f,
  Wi as p,
  Xa as m,
  Yt as h,
  _r as g,
  ar as _,
  bt as v,
  do as y,
  dr as b,
  ea as x,
  ft as S,
  ir as C,
  kr as w,
  lr as T,
  mr as E,
  no as D,
  or as O,
  qa as k,
  ro as A,
  sn as j,
  ta as M,
  wr as N,
  yt as P,
} from "./three.core-DtjtRha-.js";
import { t as F } from "./gsap-CvDoa17S.js";
import { n as I, t as L } from "./Pass-CVVF-B1T.js";
import { a as ee, i as R, t as z } from "./lifecard-Bz8CsM4Y.js";
import { n as B } from "./me-CiQWAPxS.js";
import { n as V, t as H } from "./i18n-BvGoRVq5.js";
import "./fonts-BF0KELzc.js";
import { t as U } from "./preload-helper-B4-B-RAC.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var W = {
    name: `CopyShader`,
    uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`,
  },
  te = class extends I {
    constructor(e, t = `tDiffuse`) {
      (super(),
        (this.textureID = t),
        (this.uniforms = null),
        (this.material = null),
        e instanceof M
          ? ((this.uniforms = e.uniforms), (this.material = e))
          : e &&
            ((this.uniforms = k.clone(e.uniforms)),
            (this.material = new M({
              name: e.name === void 0 ? `unspecified` : e.name,
              defines: Object.assign({}, e.defines),
              uniforms: this.uniforms,
              vertexShader: e.vertexShader,
              fragmentShader: e.fragmentShader,
            }))),
        (this._fsQuad = new L(this.material)));
    }
    render(e, t, n) {
      (this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture),
        (this._fsQuad.material = this.material),
        this.renderToScreen
          ? (e.setRenderTarget(null), this._fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this._fsQuad.render(e)));
    }
    dispose() {
      (this.material.dispose(), this._fsQuad.dispose());
    }
  },
  ne = class extends I {
    constructor(e, t) {
      (super(), (this.scene = e), (this.camera = t), (this.clear = !0), (this.needsSwap = !1), (this.inverse = !1));
    }
    render(e, t, n) {
      let r = e.getContext(),
        i = e.state;
      (i.buffers.color.setMask(!1),
        i.buffers.depth.setMask(!1),
        i.buffers.color.setLocked(!0),
        i.buffers.depth.setLocked(!0));
      let a, o;
      (this.inverse ? ((a = 0), (o = 1)) : ((a = 1), (o = 0)),
        i.buffers.stencil.setTest(!0),
        i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE),
        i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295),
        i.buffers.stencil.setClear(o),
        i.buffers.stencil.setLocked(!0),
        e.setRenderTarget(n),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        e.setRenderTarget(t),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        i.buffers.color.setLocked(!1),
        i.buffers.depth.setLocked(!1),
        i.buffers.color.setMask(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.stencil.setLocked(!1),
        i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295),
        i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP),
        i.buffers.stencil.setLocked(!0));
    }
  },
  re = class extends I {
    constructor() {
      (super(), (this.needsSwap = !1));
    }
    render(e) {
      (e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1));
    }
  },
  ie = class {
    constructor(e, t) {
      if (((this.renderer = e), (this._pixelRatio = e.getPixelRatio()), t === void 0)) {
        let n = e.getSize(new D());
        ((this._width = n.width),
          (this._height = n.height),
          (t = new y(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: h })),
          (t.texture.name = `EffectComposer.rt1`));
      } else ((this._width = t.width), (this._height = t.height));
      ((this.renderTarget1 = t),
        (this.renderTarget2 = t.clone()),
        (this.renderTarget2.texture.name = `EffectComposer.rt2`),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2),
        (this.renderToScreen = !0),
        (this.passes = []),
        (this.copyPass = new te(W)),
        (this.copyPass.material.blending = 0),
        (this.timer = new i()));
    }
    swapBuffers() {
      let e = this.readBuffer;
      ((this.readBuffer = this.writeBuffer), (this.writeBuffer = e));
    }
    addPass(e) {
      (this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio));
    }
    insertPass(e, t) {
      (this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio));
    }
    removePass(e) {
      let t = this.passes.indexOf(e);
      t !== -1 && this.passes.splice(t, 1);
    }
    isLastEnabledPass(e) {
      for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return !1;
      return !0;
    }
    render(e) {
      (this.timer.update(), e === void 0 && (e = this.timer.getDelta()));
      let t = this.renderer.getRenderTarget(),
        n = !1;
      for (let t = 0, r = this.passes.length; t < r; t++) {
        let r = this.passes[t];
        if (r.enabled !== !1) {
          if (
            ((r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t)),
            r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
            r.needsSwap)
          ) {
            if (n) {
              let t = this.renderer.getContext(),
                n = this.renderer.state.buffers.stencil;
              (n.setFunc(t.NOTEQUAL, 1, 4294967295),
                this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                n.setFunc(t.EQUAL, 1, 4294967295));
            }
            this.swapBuffers();
          }
          ne !== void 0 && (r instanceof ne ? (n = !0) : r instanceof re && (n = !1));
        }
      }
      this.renderer.setRenderTarget(t);
    }
    reset(e) {
      if (e === void 0) {
        let t = this.renderer.getSize(new D());
        ((this._pixelRatio = this.renderer.getPixelRatio()),
          (this._width = t.width),
          (this._height = t.height),
          (e = this.renderTarget1.clone()),
          e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio));
      }
      (this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        (this.renderTarget1 = e),
        (this.renderTarget2 = e.clone()),
        (this.writeBuffer = this.renderTarget1),
        (this.readBuffer = this.renderTarget2));
    }
    setSize(e, t) {
      ((this._width = e), (this._height = t));
      let n = this._width * this._pixelRatio,
        r = this._height * this._pixelRatio;
      (this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r));
      for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
    }
    setPixelRatio(e) {
      ((this._pixelRatio = e), this.setSize(this._width, this._height));
    }
    dispose() {
      (this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose());
    }
  },
  ae = class extends I {
    constructor(e, t, n = null, r = null, i = null) {
      (super(),
        (this.scene = e),
        (this.camera = t),
        (this.overrideMaterial = n),
        (this.clearColor = r),
        (this.clearAlpha = i),
        (this.clear = !0),
        (this.clearDepth = !1),
        (this.needsSwap = !1),
        (this.isRenderPass = !0),
        (this._oldClearColor = new f()));
    }
    render(e, t, n) {
      let r = e.autoClear;
      e.autoClear = !1;
      let i, a;
      (this.overrideMaterial !== null &&
        ((a = this.scene.overrideMaterial), (this.scene.overrideMaterial = this.overrideMaterial)),
        this.clearColor !== null &&
          (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())),
        this.clearAlpha !== null && ((i = e.getClearAlpha()), e.setClearAlpha(this.clearAlpha)),
        this.clearDepth == 1 && e.clearDepth(),
        e.setRenderTarget(this.renderToScreen ? null : n),
        this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        e.render(this.scene, this.camera),
        this.clearColor !== null && e.setClearColor(this._oldClearColor),
        this.clearAlpha !== null && e.setClearAlpha(i),
        this.overrideMaterial !== null && (this.scene.overrideMaterial = a),
        (e.autoClear = r));
    }
  },
  G = {
    name: `GTAOShader`,
    defines: {
      PERSPECTIVE_CAMERA: 1,
      SAMPLES: 16,
      NORMAL_VECTOR_TYPE: 1,
      DEPTH_SWIZZLING: `x`,
      SCREEN_SPACE_RADIUS: 0,
      SCREEN_SPACE_RADIUS_SCALE: 100,
      SCENE_CLIP_BOX: 0,
    },
    uniforms: {
      tNormal: { value: null },
      tDepth: { value: null },
      tNoise: { value: null },
      resolution: { value: new D() },
      cameraNear: { value: null },
      cameraFar: { value: null },
      cameraProjectionMatrix: { value: new C() },
      cameraProjectionMatrixInverse: { value: new C() },
      cameraWorldMatrix: { value: new C() },
      radius: { value: 0.25 },
      distanceExponent: { value: 1 },
      thickness: { value: 1 },
      distanceFallOff: { value: 1 },
      scale: { value: 1 },
      sceneBoxMin: { value: new A(-1, -1, -1) },
      sceneBoxMax: { value: new A(1, 1, 1) },
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
    fragmentShader: `
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`,
  },
  oe = {
    name: `GTAODepthShader`,
    defines: { PERSPECTIVE_CAMERA: 1 },
    uniforms: { tDepth: { value: null }, cameraNear: { value: null }, cameraFar: { value: null } },
    vertexShader: `
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
    fragmentShader: `
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`,
  },
  se = {
    name: `GTAOBlendShader`,
    uniforms: { tDiffuse: { value: null }, intensity: { value: 1 } },
    vertexShader: `
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
    fragmentShader: `
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`,
  };
function ce(e = 5) {
  let t = Math.floor(e) % 2 == 0 ? Math.floor(e) + 1 : Math.floor(e),
    n = le(t),
    r = n.length,
    i = new Uint8Array(r * 4);
  for (let e = 0; e < r; ++e) {
    let t = n[e],
      a = (2 * Math.PI * t) / r,
      o = new A(Math.cos(a), Math.sin(a), 0).normalize();
    ((i[e * 4] = (o.x * 0.5 + 0.5) * 255),
      (i[e * 4 + 1] = (o.y * 0.5 + 0.5) * 255),
      (i[e * 4 + 2] = 127),
      (i[e * 4 + 3] = 255));
  }
  let a = new S(i, t, t);
  return ((a.wrapS = p), (a.wrapT = p), (a.needsUpdate = !0), a);
}
function le(e) {
  let t = Math.floor(e) % 2 == 0 ? Math.floor(e) + 1 : Math.floor(e),
    n = t * t,
    r = Array(n).fill(0),
    i = Math.floor(t / 2),
    a = t - 1;
  for (let e = 1; e <= n;) {
    if (
      (i === -1 && a === t ? ((a = t - 2), (i = 0)) : (a === t && (a = 0), i < 0 && (i = t - 1)), r[i * t + a] !== 0)
    ) {
      ((a -= 2), i++);
      continue;
    }
    ((r[i * t + a] = e++), a++, i--);
  }
  return r;
}
var K = {
  name: `PoissonDenoiseShader`,
  defines: { SAMPLES: 16, SAMPLE_VECTORS: ue(16, 2, 1), NORMAL_VECTOR_TYPE: 1, DEPTH_VALUE_SOURCE: 0 },
  uniforms: {
    tDiffuse: { value: null },
    tNormal: { value: null },
    tDepth: { value: null },
    tNoise: { value: null },
    resolution: { value: new D() },
    cameraProjectionMatrixInverse: { value: new C() },
    lumaPhi: { value: 5 },
    depthPhi: { value: 5 },
    normalPhi: { value: 5 },
    radius: { value: 4 },
    index: { value: 0 },
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
  fragmentShader: `

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`,
};
function ue(e, t, n) {
  let r = de(e, t, n),
    i = `vec3[SAMPLES](`;
  for (let t = 0; t < e; t++) {
    let n = r[t];
    i += `vec3(${n.x}, ${n.y}, ${n.z})${t < e - 1 ? `,` : `)`}`;
  }
  return i;
}
function de(e, t, n) {
  let r = [];
  for (let i = 0; i < e; i++) {
    let a = (2 * Math.PI * t * i) / e,
      o = (i / (e - 1)) ** n;
    r.push(new A(Math.cos(a), Math.sin(a), o));
  }
  return r;
}
var fe = class {
    constructor(e = Math) {
      ((this.grad3 = [
        [1, 1, 0],
        [-1, 1, 0],
        [1, -1, 0],
        [-1, -1, 0],
        [1, 0, 1],
        [-1, 0, 1],
        [1, 0, -1],
        [-1, 0, -1],
        [0, 1, 1],
        [0, -1, 1],
        [0, 1, -1],
        [0, -1, -1],
      ]),
        (this.grad4 = [
          [0, 1, 1, 1],
          [0, 1, 1, -1],
          [0, 1, -1, 1],
          [0, 1, -1, -1],
          [0, -1, 1, 1],
          [0, -1, 1, -1],
          [0, -1, -1, 1],
          [0, -1, -1, -1],
          [1, 0, 1, 1],
          [1, 0, 1, -1],
          [1, 0, -1, 1],
          [1, 0, -1, -1],
          [-1, 0, 1, 1],
          [-1, 0, 1, -1],
          [-1, 0, -1, 1],
          [-1, 0, -1, -1],
          [1, 1, 0, 1],
          [1, 1, 0, -1],
          [1, -1, 0, 1],
          [1, -1, 0, -1],
          [-1, 1, 0, 1],
          [-1, 1, 0, -1],
          [-1, -1, 0, 1],
          [-1, -1, 0, -1],
          [1, 1, 1, 0],
          [1, 1, -1, 0],
          [1, -1, 1, 0],
          [1, -1, -1, 0],
          [-1, 1, 1, 0],
          [-1, 1, -1, 0],
          [-1, -1, 1, 0],
          [-1, -1, -1, 0],
        ]),
        (this.p = []));
      for (let t = 0; t < 256; t++) this.p[t] = Math.floor(e.random() * 256);
      this.perm = [];
      for (let e = 0; e < 512; e++) this.perm[e] = this.p[e & 255];
      this.simplex = [
        [0, 1, 2, 3],
        [0, 1, 3, 2],
        [0, 0, 0, 0],
        [0, 2, 3, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 2, 3, 0],
        [0, 2, 1, 3],
        [0, 0, 0, 0],
        [0, 3, 1, 2],
        [0, 3, 2, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 3, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 2, 0, 3],
        [0, 0, 0, 0],
        [1, 3, 0, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 3, 0, 1],
        [2, 3, 1, 0],
        [1, 0, 2, 3],
        [1, 0, 3, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 3, 1],
        [0, 0, 0, 0],
        [2, 1, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 1, 3],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [3, 0, 1, 2],
        [3, 0, 2, 1],
        [0, 0, 0, 0],
        [3, 1, 2, 0],
        [2, 1, 0, 3],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [3, 1, 0, 2],
        [0, 0, 0, 0],
        [3, 2, 0, 1],
        [3, 2, 1, 0],
      ];
    }
    noise(e, t) {
      let n,
        r,
        i,
        a = 0.5 * (Math.sqrt(3) - 1),
        o = (e + t) * a,
        s = Math.floor(e + o),
        c = Math.floor(t + o),
        l = (3 - Math.sqrt(3)) / 6,
        u = (s + c) * l,
        d = s - u,
        f = c - u,
        p = e - d,
        m = t - f,
        h,
        g;
      p > m ? ((h = 1), (g = 0)) : ((h = 0), (g = 1));
      let _ = p - h + l,
        v = m - g + l,
        y = p - 1 + 2 * l,
        b = m - 1 + 2 * l,
        x = s & 255,
        S = c & 255,
        C = this.perm[x + this.perm[S]] % 12,
        w = this.perm[x + h + this.perm[S + g]] % 12,
        T = this.perm[x + 1 + this.perm[S + 1]] % 12,
        E = 0.5 - p * p - m * m;
      E < 0 ? (n = 0) : ((E *= E), (n = E * E * this._dot(this.grad3[C], p, m)));
      let D = 0.5 - _ * _ - v * v;
      D < 0 ? (r = 0) : ((D *= D), (r = D * D * this._dot(this.grad3[w], _, v)));
      let O = 0.5 - y * y - b * b;
      return (O < 0 ? (i = 0) : ((O *= O), (i = O * O * this._dot(this.grad3[T], y, b))), 70 * (n + r + i));
    }
    noise3d(e, t, n) {
      let r,
        i,
        a,
        o,
        s = (e + t + n) * (1 / 3),
        c = Math.floor(e + s),
        l = Math.floor(t + s),
        u = Math.floor(n + s),
        d = 1 / 6,
        f = (c + l + u) * d,
        p = c - f,
        m = l - f,
        h = u - f,
        g = e - p,
        _ = t - m,
        v = n - h,
        y,
        b,
        x,
        S,
        C,
        w;
      g >= _
        ? _ >= v
          ? ((y = 1), (b = 0), (x = 0), (S = 1), (C = 1), (w = 0))
          : g >= v
            ? ((y = 1), (b = 0), (x = 0), (S = 1), (C = 0), (w = 1))
            : ((y = 0), (b = 0), (x = 1), (S = 1), (C = 0), (w = 1))
        : _ < v
          ? ((y = 0), (b = 0), (x = 1), (S = 0), (C = 1), (w = 1))
          : g < v
            ? ((y = 0), (b = 1), (x = 0), (S = 0), (C = 1), (w = 1))
            : ((y = 0), (b = 1), (x = 0), (S = 1), (C = 1), (w = 0));
      let T = g - y + d,
        E = _ - b + d,
        D = v - x + d,
        O = g - S + 2 * d,
        k = _ - C + 2 * d,
        A = v - w + 2 * d,
        j = g - 1 + 3 * d,
        M = _ - 1 + 3 * d,
        N = v - 1 + 3 * d,
        P = c & 255,
        F = l & 255,
        I = u & 255,
        L = this.perm[P + this.perm[F + this.perm[I]]] % 12,
        ee = this.perm[P + y + this.perm[F + b + this.perm[I + x]]] % 12,
        R = this.perm[P + S + this.perm[F + C + this.perm[I + w]]] % 12,
        z = this.perm[P + 1 + this.perm[F + 1 + this.perm[I + 1]]] % 12,
        B = 0.6 - g * g - _ * _ - v * v;
      B < 0 ? (r = 0) : ((B *= B), (r = B * B * this._dot3(this.grad3[L], g, _, v)));
      let V = 0.6 - T * T - E * E - D * D;
      V < 0 ? (i = 0) : ((V *= V), (i = V * V * this._dot3(this.grad3[ee], T, E, D)));
      let H = 0.6 - O * O - k * k - A * A;
      H < 0 ? (a = 0) : ((H *= H), (a = H * H * this._dot3(this.grad3[R], O, k, A)));
      let U = 0.6 - j * j - M * M - N * N;
      return (U < 0 ? (o = 0) : ((U *= U), (o = U * U * this._dot3(this.grad3[z], j, M, N))), 32 * (r + i + a + o));
    }
    noise4d(e, t, n, r) {
      let i = this.grad4,
        a = this.simplex,
        o = this.perm,
        s = (Math.sqrt(5) - 1) / 4,
        c = (5 - Math.sqrt(5)) / 20,
        l,
        u,
        d,
        f,
        p,
        m = (e + t + n + r) * s,
        h = Math.floor(e + m),
        g = Math.floor(t + m),
        _ = Math.floor(n + m),
        v = Math.floor(r + m),
        y = (h + g + _ + v) * c,
        b = h - y,
        x = g - y,
        S = _ - y,
        C = v - y,
        w = e - b,
        T = t - x,
        E = n - S,
        D = r - C,
        O = w > T ? 32 : 0,
        k = w > E ? 16 : 0,
        A = T > E ? 8 : 0,
        j = w > D ? 4 : 0,
        M = T > D ? 2 : 0,
        N = +(E > D),
        P = O + k + A + j + M + N,
        F = +(a[P][0] >= 3),
        I = +(a[P][1] >= 3),
        L = +(a[P][2] >= 3),
        ee = +(a[P][3] >= 3),
        R = +(a[P][0] >= 2),
        z = +(a[P][1] >= 2),
        B = +(a[P][2] >= 2),
        V = +(a[P][3] >= 2),
        H = +(a[P][0] >= 1),
        U = +(a[P][1] >= 1),
        W = +(a[P][2] >= 1),
        te = +(a[P][3] >= 1),
        ne = w - F + c,
        re = T - I + c,
        ie = E - L + c,
        ae = D - ee + c,
        G = w - R + 2 * c,
        oe = T - z + 2 * c,
        se = E - B + 2 * c,
        ce = D - V + 2 * c,
        le = w - H + 3 * c,
        K = T - U + 3 * c,
        ue = E - W + 3 * c,
        de = D - te + 3 * c,
        fe = w - 1 + 4 * c,
        pe = T - 1 + 4 * c,
        me = E - 1 + 4 * c,
        he = D - 1 + 4 * c,
        q = h & 255,
        ge = g & 255,
        _e = _ & 255,
        J = v & 255,
        ve = o[q + o[ge + o[_e + o[J]]]] % 32,
        ye = o[q + F + o[ge + I + o[_e + L + o[J + ee]]]] % 32,
        be = o[q + R + o[ge + z + o[_e + B + o[J + V]]]] % 32,
        xe = o[q + H + o[ge + U + o[_e + W + o[J + te]]]] % 32,
        Se = o[q + 1 + o[ge + 1 + o[_e + 1 + o[J + 1]]]] % 32,
        Ce = 0.6 - w * w - T * T - E * E - D * D;
      Ce < 0 ? (l = 0) : ((Ce *= Ce), (l = Ce * Ce * this._dot4(i[ve], w, T, E, D)));
      let Y = 0.6 - ne * ne - re * re - ie * ie - ae * ae;
      Y < 0 ? (u = 0) : ((Y *= Y), (u = Y * Y * this._dot4(i[ye], ne, re, ie, ae)));
      let X = 0.6 - G * G - oe * oe - se * se - ce * ce;
      X < 0 ? (d = 0) : ((X *= X), (d = X * X * this._dot4(i[be], G, oe, se, ce)));
      let Z = 0.6 - le * le - K * K - ue * ue - de * de;
      Z < 0 ? (f = 0) : ((Z *= Z), (f = Z * Z * this._dot4(i[xe], le, K, ue, de)));
      let Q = 0.6 - fe * fe - pe * pe - me * me - he * he;
      return (Q < 0 ? (p = 0) : ((Q *= Q), (p = Q * Q * this._dot4(i[Se], fe, pe, me, he))), 27 * (l + u + d + f + p));
    }
    _dot(e, t, n) {
      return e[0] * t + e[1] * n;
    }
    _dot3(e, t, n, r) {
      return e[0] * t + e[1] * n + e[2] * r;
    }
    _dot4(e, t, n, r, i) {
      return e[0] * t + e[1] * n + e[2] * r + e[3] * i;
    }
  },
  pe = class e extends I {
    constructor(e, t, n = 512, r = 512, i, a, o) {
      (super(),
        (this.width = n),
        (this.height = r),
        (this.clear = !0),
        (this.camera = t),
        (this.scene = e),
        (this.output = 0),
        (this._renderGBuffer = !0),
        (this._visibilityCache = []),
        (this.blendIntensity = 1),
        (this.pdRings = 2),
        (this.pdRadiusExponent = 2),
        (this.pdSamples = 16),
        (this.gtaoNoiseTexture = ce()),
        (this.pdNoiseTexture = this._generateNoise()),
        (this.gtaoRenderTarget = new y(this.width, this.height, { type: h, depthBuffer: !1 })),
        (this.pdRenderTarget = this.gtaoRenderTarget.clone()),
        (this.gtaoMaterial = new M({
          defines: Object.assign({}, G.defines),
          uniforms: k.clone(G.uniforms),
          vertexShader: G.vertexShader,
          fragmentShader: G.fragmentShader,
          blending: 0,
          depthTest: !1,
          depthWrite: !1,
        })),
        (this.gtaoMaterial.defines.PERSPECTIVE_CAMERA = +!!this.camera.isPerspectiveCamera),
        (this.gtaoMaterial.uniforms.tNoise.value = this.gtaoNoiseTexture),
        this.gtaoMaterial.uniforms.resolution.value.set(this.width, this.height),
        (this.gtaoMaterial.uniforms.cameraNear.value = this.camera.near),
        (this.gtaoMaterial.uniforms.cameraFar.value = this.camera.far),
        (this.normalMaterial = new b()),
        (this.normalMaterial.blending = 0),
        (this.pdMaterial = new M({
          defines: Object.assign({}, K.defines),
          uniforms: k.clone(K.uniforms),
          vertexShader: K.vertexShader,
          fragmentShader: K.fragmentShader,
          depthTest: !1,
          depthWrite: !1,
        })),
        (this.pdMaterial.uniforms.tDiffuse.value = this.gtaoRenderTarget.texture),
        (this.pdMaterial.uniforms.tNoise.value = this.pdNoiseTexture),
        this.pdMaterial.uniforms.resolution.value.set(this.width, this.height),
        (this.pdMaterial.uniforms.lumaPhi.value = 10),
        (this.pdMaterial.uniforms.depthPhi.value = 2),
        (this.pdMaterial.uniforms.normalPhi.value = 3),
        (this.pdMaterial.uniforms.radius.value = 8),
        (this.depthRenderMaterial = new M({
          defines: Object.assign({}, oe.defines),
          uniforms: k.clone(oe.uniforms),
          vertexShader: oe.vertexShader,
          fragmentShader: oe.fragmentShader,
          blending: 0,
        })),
        (this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near),
        (this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far),
        (this.copyMaterial = new M({
          uniforms: k.clone(W.uniforms),
          vertexShader: W.vertexShader,
          fragmentShader: W.fragmentShader,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1,
          blendSrc: 208,
          blendDst: 200,
          blendEquation: 100,
          blendSrcAlpha: 206,
          blendDstAlpha: 200,
          blendEquationAlpha: 100,
        })),
        (this.blendMaterial = new M({
          uniforms: k.clone(se.uniforms),
          vertexShader: se.vertexShader,
          fragmentShader: se.fragmentShader,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1,
          blending: 5,
          blendSrc: 208,
          blendDst: 200,
          blendEquation: 100,
          blendSrcAlpha: 206,
          blendDstAlpha: 200,
          blendEquationAlpha: 100,
        })),
        (this._fsQuad = new L(null)),
        (this._originalClearColor = new f()),
        this.setGBuffer(i ? i.depthTexture : void 0, i ? i.normalTexture : void 0),
        a !== void 0 && this.updateGtaoMaterial(a),
        o !== void 0 && this.updatePdMaterial(o));
    }
    setSize(e, t) {
      ((this.width = e),
        (this.height = t),
        this.gtaoRenderTarget.setSize(e, t),
        this.normalRenderTarget.setSize(e, t),
        this.pdRenderTarget.setSize(e, t),
        this.gtaoMaterial.uniforms.resolution.value.set(e, t),
        this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),
        this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),
        this.pdMaterial.uniforms.resolution.value.set(e, t),
        this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse));
    }
    dispose() {
      (this.gtaoNoiseTexture.dispose(),
        this.pdNoiseTexture.dispose(),
        this.normalRenderTarget.dispose(),
        this.gtaoRenderTarget.dispose(),
        this.pdRenderTarget.dispose(),
        this.normalMaterial.dispose(),
        this.pdMaterial.dispose(),
        this.copyMaterial.dispose(),
        this.depthRenderMaterial.dispose(),
        this._fsQuad.dispose());
    }
    get gtaoMap() {
      return this.pdRenderTarget.texture;
    }
    setGBuffer(e, t) {
      e === void 0
        ? ((this.depthTexture = new v()),
          (this.depthTexture.format = P),
          (this.depthTexture.type = m),
          (this.normalRenderTarget = new y(this.width, this.height, {
            minFilter: g,
            magFilter: g,
            type: h,
            depthTexture: this.depthTexture,
          })),
          (this.normalTexture = this.normalRenderTarget.texture),
          (this._renderGBuffer = !0))
        : ((this.depthTexture = e), (this.normalTexture = t), (this._renderGBuffer = !1));
      let n = +!!this.normalTexture,
        r = this.depthTexture === this.normalTexture ? `w` : `x`;
      ((this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE = n),
        (this.gtaoMaterial.defines.DEPTH_SWIZZLING = r),
        (this.gtaoMaterial.uniforms.tNormal.value = this.normalTexture),
        (this.gtaoMaterial.uniforms.tDepth.value = this.depthTexture),
        (this.pdMaterial.defines.NORMAL_VECTOR_TYPE = n),
        (this.pdMaterial.defines.DEPTH_SWIZZLING = r),
        (this.pdMaterial.uniforms.tNormal.value = this.normalTexture),
        (this.pdMaterial.uniforms.tDepth.value = this.depthTexture),
        (this.depthRenderMaterial.uniforms.tDepth.value = this.normalRenderTarget.depthTexture));
    }
    setSceneClipBox(e) {
      e
        ? ((this.gtaoMaterial.needsUpdate = this.gtaoMaterial.defines.SCENE_CLIP_BOX !== 1),
          (this.gtaoMaterial.defines.SCENE_CLIP_BOX = 1),
          this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),
          this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max))
        : ((this.gtaoMaterial.needsUpdate = this.gtaoMaterial.defines.SCENE_CLIP_BOX === 0),
          (this.gtaoMaterial.defines.SCENE_CLIP_BOX = 0));
    }
    updateGtaoMaterial(e) {
      (e.radius !== void 0 && (this.gtaoMaterial.uniforms.radius.value = e.radius),
        e.distanceExponent !== void 0 && (this.gtaoMaterial.uniforms.distanceExponent.value = e.distanceExponent),
        e.thickness !== void 0 && (this.gtaoMaterial.uniforms.thickness.value = e.thickness),
        e.distanceFallOff !== void 0 &&
          ((this.gtaoMaterial.uniforms.distanceFallOff.value = e.distanceFallOff),
          (this.gtaoMaterial.needsUpdate = !0)),
        e.scale !== void 0 && (this.gtaoMaterial.uniforms.scale.value = e.scale),
        e.samples !== void 0 &&
          e.samples !== this.gtaoMaterial.defines.SAMPLES &&
          ((this.gtaoMaterial.defines.SAMPLES = e.samples), (this.gtaoMaterial.needsUpdate = !0)),
        e.screenSpaceRadius !== void 0 &&
          +!!e.screenSpaceRadius !== this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS &&
          ((this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS = +!!e.screenSpaceRadius),
          (this.gtaoMaterial.needsUpdate = !0)));
    }
    updatePdMaterial(e) {
      let t = !1;
      (e.lumaPhi !== void 0 && (this.pdMaterial.uniforms.lumaPhi.value = e.lumaPhi),
        e.depthPhi !== void 0 && (this.pdMaterial.uniforms.depthPhi.value = e.depthPhi),
        e.normalPhi !== void 0 && (this.pdMaterial.uniforms.normalPhi.value = e.normalPhi),
        e.radius !== void 0 && e.radius !== this.radius && (this.pdMaterial.uniforms.radius.value = e.radius),
        e.radiusExponent !== void 0 &&
          e.radiusExponent !== this.pdRadiusExponent &&
          ((this.pdRadiusExponent = e.radiusExponent), (t = !0)),
        e.rings !== void 0 && e.rings !== this.pdRings && ((this.pdRings = e.rings), (t = !0)),
        e.samples !== void 0 && e.samples !== this.pdSamples && ((this.pdSamples = e.samples), (t = !0)),
        t &&
          ((this.pdMaterial.defines.SAMPLES = this.pdSamples),
          (this.pdMaterial.defines.SAMPLE_VECTORS = ue(this.pdSamples, this.pdRings, this.pdRadiusExponent)),
          (this.pdMaterial.needsUpdate = !0)));
    }
    render(t, n, r) {
      switch (
        (this._renderGBuffer &&
          (this._overrideVisibility(),
          this._renderOverride(t, this.normalMaterial, this.normalRenderTarget, 7829503, 1),
          this._restoreVisibility()),
        (this.gtaoMaterial.uniforms.cameraNear.value = this.camera.near),
        (this.gtaoMaterial.uniforms.cameraFar.value = this.camera.far),
        this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),
        this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),
        this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),
        this._renderPass(t, this.gtaoMaterial, this.gtaoRenderTarget, 16777215, 1),
        this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),
        this._renderPass(t, this.pdMaterial, this.pdRenderTarget, 16777215, 1),
        this.output)
      ) {
        case e.OUTPUT.Off:
          break;
        case e.OUTPUT.Diffuse:
          ((this.copyMaterial.uniforms.tDiffuse.value = r.texture),
            (this.copyMaterial.blending = 0),
            this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : n));
          break;
        case e.OUTPUT.AO:
          ((this.copyMaterial.uniforms.tDiffuse.value = this.gtaoRenderTarget.texture),
            (this.copyMaterial.blending = 0),
            this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : n));
          break;
        case e.OUTPUT.Denoise:
          ((this.copyMaterial.uniforms.tDiffuse.value = this.pdRenderTarget.texture),
            (this.copyMaterial.blending = 0),
            this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : n));
          break;
        case e.OUTPUT.Depth:
          ((this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near),
            (this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far),
            this._renderPass(t, this.depthRenderMaterial, this.renderToScreen ? null : n));
          break;
        case e.OUTPUT.Normal:
          ((this.copyMaterial.uniforms.tDiffuse.value = this.normalRenderTarget.texture),
            (this.copyMaterial.blending = 0),
            this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : n));
          break;
        case e.OUTPUT.Default:
          ((this.copyMaterial.uniforms.tDiffuse.value = r.texture),
            (this.copyMaterial.blending = 0),
            this._renderPass(t, this.copyMaterial, this.renderToScreen ? null : n),
            (this.blendMaterial.uniforms.intensity.value = this.blendIntensity),
            (this.blendMaterial.uniforms.tDiffuse.value = this.pdRenderTarget.texture),
            this._renderPass(t, this.blendMaterial, this.renderToScreen ? null : n));
          break;
        default:
          console.warn(`THREE.GTAOPass: Unknown output type.`);
      }
    }
    _renderPass(e, t, n, r, i) {
      e.getClearColor(this._originalClearColor);
      let a = e.getClearAlpha(),
        o = e.autoClear;
      (e.setRenderTarget(n),
        (e.autoClear = !1),
        r != null && (e.setClearColor(r), e.setClearAlpha(i || 0), e.clear()),
        (this._fsQuad.material = t),
        this._fsQuad.render(e),
        (e.autoClear = o),
        e.setClearColor(this._originalClearColor),
        e.setClearAlpha(a));
    }
    _renderOverride(e, t, n, r, i) {
      e.getClearColor(this._originalClearColor);
      let a = e.getClearAlpha(),
        o = e.autoClear;
      (e.setRenderTarget(n),
        (e.autoClear = !1),
        (r = t.clearColor || r),
        (i = t.clearAlpha || i),
        r != null && (e.setClearColor(r), e.setClearAlpha(i || 0), e.clear()),
        (this.scene.overrideMaterial = t),
        e.render(this.scene, this.camera),
        (this.scene.overrideMaterial = null),
        (e.autoClear = o),
        e.setClearColor(this._originalClearColor),
        e.setClearAlpha(a));
    }
    _overrideVisibility() {
      let e = this.scene,
        t = this._visibilityCache;
      e.traverse(function (e) {
        (e.isPoints || e.isLine || e.isLine2) && e.visible && ((e.visible = !1), t.push(e));
      });
    }
    _restoreVisibility() {
      let e = this._visibilityCache;
      for (let t = 0; t < e.length; t++) e[t].visible = !0;
      e.length = 0;
    }
    _generateNoise(e = 64) {
      let t = new fe(),
        n = e * e * 4,
        i = new Uint8Array(n);
      for (let n = 0; n < e; n++)
        for (let r = 0; r < e; r++) {
          let a = n,
            o = r;
          ((i[(n * e + r) * 4] = (t.noise(a, o) * 0.5 + 0.5) * 255),
            (i[(n * e + r) * 4 + 1] = (t.noise(a + e, o) * 0.5 + 0.5) * 255),
            (i[(n * e + r) * 4 + 2] = (t.noise(a, o + e) * 0.5 + 0.5) * 255),
            (i[(n * e + r) * 4 + 3] = (t.noise(a + e, o + e) * 0.5 + 0.5) * 255));
        }
      let a = new S(i, e, e, r, c);
      return ((a.wrapS = p), (a.wrapT = p), (a.needsUpdate = !0), a);
    }
  };
pe.OUTPUT = { Off: -1, Default: 0, Diffuse: 1, Depth: 2, Normal: 3, AO: 4, Denoise: 5 };
var me = {
    name: `LuminosityHighPassShader`,
    uniforms: {
      tDiffuse: { value: null },
      luminosityThreshold: { value: 1 },
      smoothWidth: { value: 1 },
      defaultColor: { value: new f(0) },
      defaultOpacity: { value: 0 },
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
  },
  he = class e extends I {
    constructor(e, t = 1, n, r) {
      (super(),
        (this.strength = t),
        (this.radius = n),
        (this.threshold = r),
        (this.resolution = e === void 0 ? new D(256, 256) : new D(e.x, e.y)),
        (this.clearColor = new f(0, 0, 0)),
        (this.needsSwap = !1),
        (this.renderTargetsHorizontal = []),
        (this.renderTargetsVertical = []),
        (this.nMips = 5));
      let i = Math.round(this.resolution.x / 2),
        a = Math.round(this.resolution.y / 2);
      ((this.renderTargetBright = new y(i, a, { type: h, depthBuffer: !1 })),
        (this.renderTargetBright.texture.name = `UnrealBloomPass.bright`),
        (this.renderTargetBright.texture.generateMipmaps = !1));
      for (let e = 0; e < this.nMips; e++) {
        let t = new y(i, a, { type: h, depthBuffer: !1 });
        ((t.texture.name = `UnrealBloomPass.h` + e),
          (t.texture.generateMipmaps = !1),
          this.renderTargetsHorizontal.push(t));
        let n = new y(i, a, { type: h, depthBuffer: !1 });
        ((n.texture.name = `UnrealBloomPass.v` + e),
          (n.texture.generateMipmaps = !1),
          this.renderTargetsVertical.push(n),
          (i = Math.round(i / 2)),
          (a = Math.round(a / 2)));
      }
      let o = me;
      ((this.highPassUniforms = k.clone(o.uniforms)),
        (this.highPassUniforms.luminosityThreshold.value = r),
        (this.highPassUniforms.smoothWidth.value = 0.01),
        (this.materialHighPassFilter = new M({
          uniforms: this.highPassUniforms,
          vertexShader: o.vertexShader,
          fragmentShader: o.fragmentShader,
        })),
        (this.separableBlurMaterials = []));
      let s = [6, 10, 14, 18, 22];
      ((i = Math.round(this.resolution.x / 2)), (a = Math.round(this.resolution.y / 2)));
      for (let e = 0; e < this.nMips; e++)
        (this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),
          (this.separableBlurMaterials[e].uniforms.invSize.value = new D(1 / i, 1 / a)),
          (i = Math.round(i / 2)),
          (a = Math.round(a / 2)));
      ((this.compositeMaterial = this._getCompositeMaterial(this.nMips)),
        (this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture),
        (this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture),
        (this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture),
        (this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture),
        (this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture),
        (this.compositeMaterial.uniforms.bloomStrength.value = t),
        (this.compositeMaterial.uniforms.bloomRadius.value = 0.1));
      let c = [1, 0.8, 0.6, 0.4, 0.2];
      ((this.compositeMaterial.uniforms.bloomFactors.value = c),
        (this.bloomTintColors = [new A(1, 1, 1), new A(1, 1, 1), new A(1, 1, 1), new A(1, 1, 1), new A(1, 1, 1)]),
        (this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors),
        (this.copyUniforms = k.clone(W.uniforms)),
        (this.blendMaterial = new M({
          uniforms: this.copyUniforms,
          vertexShader: W.vertexShader,
          fragmentShader: W.fragmentShader,
          premultipliedAlpha: !0,
          blending: 2,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
        })),
        (this._oldClearColor = new f()),
        (this._oldClearAlpha = 1),
        (this._basic = new O()),
        (this._fsQuad = new L(null)));
    }
    dispose() {
      for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
      for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
      this.renderTargetBright.dispose();
      for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
      (this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this._basic.dispose(), this._fsQuad.dispose());
    }
    setSize(e, t) {
      let n = Math.round(e / 2),
        r = Math.round(t / 2);
      this.renderTargetBright.setSize(n, r);
      for (let e = 0; e < this.nMips; e++)
        (this.renderTargetsHorizontal[e].setSize(n, r),
          this.renderTargetsVertical[e].setSize(n, r),
          (this.separableBlurMaterials[e].uniforms.invSize.value = new D(1 / n, 1 / r)),
          (n = Math.round(n / 2)),
          (r = Math.round(r / 2)));
    }
    render(t, n, r, i, a) {
      (t.getClearColor(this._oldClearColor), (this._oldClearAlpha = t.getClearAlpha()));
      let o = t.autoClear;
      ((t.autoClear = !1),
        t.setClearColor(this.clearColor, 0),
        a && t.state.buffers.stencil.setTest(!1),
        this.renderToScreen &&
          ((this._fsQuad.material = this._basic),
          (this._basic.map = r.texture),
          t.setRenderTarget(null),
          t.clear(),
          this._fsQuad.render(t)),
        (this.highPassUniforms.tDiffuse.value = r.texture),
        (this.highPassUniforms.luminosityThreshold.value = this.threshold),
        (this._fsQuad.material = this.materialHighPassFilter),
        t.setRenderTarget(this.renderTargetBright),
        t.clear(),
        this._fsQuad.render(t));
      let s = this.renderTargetBright;
      for (let n = 0; n < this.nMips; n++)
        ((this._fsQuad.material = this.separableBlurMaterials[n]),
          (this.separableBlurMaterials[n].uniforms.colorTexture.value = s.texture),
          (this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionX),
          t.setRenderTarget(this.renderTargetsHorizontal[n]),
          t.clear(),
          this._fsQuad.render(t),
          (this.separableBlurMaterials[n].uniforms.colorTexture.value = this.renderTargetsHorizontal[n].texture),
          (this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionY),
          t.setRenderTarget(this.renderTargetsVertical[n]),
          t.clear(),
          this._fsQuad.render(t),
          (s = this.renderTargetsVertical[n]));
      ((this._fsQuad.material = this.compositeMaterial),
        (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
        (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
        (this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors),
        t.setRenderTarget(this.renderTargetsHorizontal[0]),
        t.clear(),
        this._fsQuad.render(t),
        (this._fsQuad.material = this.blendMaterial),
        (this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture),
        a && t.state.buffers.stencil.setTest(!0),
        this.renderToScreen
          ? (t.setRenderTarget(null), this._fsQuad.render(t))
          : (t.setRenderTarget(r), this._fsQuad.render(t)),
        t.setClearColor(this._oldClearColor, this._oldClearAlpha),
        (t.autoClear = o));
    }
    _getSeparableBlurMaterial(e) {
      let t = [],
        n = e / 3;
      for (let r = 0; r < e; r++) t.push((0.39894 * Math.exp((-0.5 * r * r) / (n * n))) / n);
      let r = [],
        i = [];
      for (let n = 1; n < e; n += 2) {
        let a = t[n],
          o = n + 1 < e ? t[n + 1] : 0,
          s = a + o;
        (r.push((n * a + (n + 1) * o) / s), i.push(s));
      }
      return new M({
        defines: { KERNEL_PAIRS: r.length },
        uniforms: {
          colorTexture: { value: null },
          invSize: { value: new D(0.5, 0.5) },
          direction: { value: new D(0.5, 0.5) },
          centerWeight: { value: t[0] },
          gaussianOffsets: { value: r },
          gaussianWeights: { value: i },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`,
      });
    }
    _getCompositeMaterial(e) {
      return new M({
        defines: { NUM_MIPS: e },
        uniforms: {
          blurTexture1: { value: null },
          blurTexture2: { value: null },
          blurTexture3: { value: null },
          blurTexture4: { value: null },
          blurTexture5: { value: null },
          bloomStrength: { value: 1 },
          bloomFactors: { value: null },
          bloomTintColors: { value: null },
          bloomRadius: { value: 0 },
        },
        vertexShader: `

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,
        fragmentShader: `

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`,
      });
    }
  };
((he.BlurDirectionX = new D(1, 0)), (he.BlurDirectionY = new D(0, 1)));
var q = {
    name: `OutputShader`,
    uniforms: { tDiffuse: { value: null }, toneMappingExposure: { value: 1 } },
    vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`,
  },
  ge = class extends I {
    constructor() {
      (super(),
        (this.isOutputPass = !0),
        (this.uniforms = k.clone(q.uniforms)),
        (this.material = new a({
          name: q.name,
          uniforms: this.uniforms,
          vertexShader: q.vertexShader,
          fragmentShader: q.fragmentShader,
        })),
        (this._fsQuad = new L(this.material)),
        (this._outputColorSpace = null),
        (this._toneMapping = null));
    }
    render(e, t, n) {
      ((this.uniforms.tDiffuse.value = n.texture),
        (this.uniforms.toneMappingExposure.value = e.toneMappingExposure),
        (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) &&
          ((this._outputColorSpace = e.outputColorSpace),
          (this._toneMapping = e.toneMapping),
          (this.material.defines = {}),
          o.getTransfer(this._outputColorSpace) === `srgb` && (this.material.defines.SRGB_TRANSFER = ``),
          this._toneMapping === 1
            ? (this.material.defines.LINEAR_TONE_MAPPING = ``)
            : this._toneMapping === 2
              ? (this.material.defines.REINHARD_TONE_MAPPING = ``)
              : this._toneMapping === 3
                ? (this.material.defines.CINEON_TONE_MAPPING = ``)
                : this._toneMapping === 4
                  ? (this.material.defines.ACES_FILMIC_TONE_MAPPING = ``)
                  : this._toneMapping === 6
                    ? (this.material.defines.AGX_TONE_MAPPING = ``)
                    : this._toneMapping === 7
                      ? (this.material.defines.NEUTRAL_TONE_MAPPING = ``)
                      : this._toneMapping === 5 && (this.material.defines.CUSTOM_TONE_MAPPING = ``),
          (this.material.needsUpdate = !0)),
        this.renderToScreen === !0
          ? (e.setRenderTarget(null), this._fsQuad.render(e))
          : (e.setRenderTarget(t),
            this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            this._fsQuad.render(e)));
    }
    dispose() {
      (this.material.dispose(), this._fsQuad.dispose());
    }
  },
  _e = class extends x {
    constructor() {
      (super(), (this.name = `RoomEnvironment`), (this.position.y = -3.5));
      let e = new u();
      e.deleteAttribute(`uv`);
      let t = new E({ side: 1 }),
        n = new E(),
        r = new l(16777215, 900, 28, 2);
      (r.position.set(0.418, 16.199, 0.3), this.add(r));
      let i = new _(e, t);
      (i.position.set(-0.757, 13.219, 0.717), i.scale.set(31.713, 28.305, 28.591), this.add(i));
      let a = new j(e, n, 6),
        o = new N();
      (o.position.set(-10.906, 2.009, 1.846),
        o.rotation.set(0, -0.195, 0),
        o.scale.set(2.328, 7.905, 4.651),
        o.updateMatrix(),
        a.setMatrixAt(0, o.matrix),
        o.position.set(-5.607, -0.754, -0.758),
        o.rotation.set(0, 0.994, 0),
        o.scale.set(1.97, 1.534, 3.955),
        o.updateMatrix(),
        a.setMatrixAt(1, o.matrix),
        o.position.set(6.167, 0.857, 7.803),
        o.rotation.set(0, 0.561, 0),
        o.scale.set(3.927, 6.285, 3.687),
        o.updateMatrix(),
        a.setMatrixAt(2, o.matrix),
        o.position.set(-2.017, 0.018, 6.124),
        o.rotation.set(0, 0.333, 0),
        o.scale.set(2.002, 4.566, 2.064),
        o.updateMatrix(),
        a.setMatrixAt(3, o.matrix),
        o.position.set(2.291, -0.756, -2.621),
        o.rotation.set(0, -0.286, 0),
        o.scale.set(1.546, 1.552, 1.496),
        o.updateMatrix(),
        a.setMatrixAt(4, o.matrix),
        o.position.set(-2.193, -0.369, -5.547),
        o.rotation.set(0, 0.516, 0),
        o.scale.set(3.875, 3.487, 2.986),
        o.updateMatrix(),
        a.setMatrixAt(5, o.matrix),
        this.add(a));
      let s = new _(e, J(50));
      (s.position.set(-16.116, 14.37, 8.208), s.scale.set(0.1, 2.428, 2.739), this.add(s));
      let c = new _(e, J(50));
      (c.position.set(-16.109, 18.021, -8.207), c.scale.set(0.1, 2.425, 2.751), this.add(c));
      let d = new _(e, J(17));
      (d.position.set(14.904, 12.198, -1.832), d.scale.set(0.15, 4.265, 6.331), this.add(d));
      let f = new _(e, J(43));
      (f.position.set(-0.462, 8.89, 14.52), f.scale.set(4.38, 5.441, 0.088), this.add(f));
      let p = new _(e, J(20));
      (p.position.set(3.235, 11.486, -12.541), p.scale.set(2.5, 2, 0.1), this.add(p));
      let m = new _(e, J(100));
      (m.position.set(0, 20, 0), m.scale.set(1, 0.1, 1), this.add(m));
    }
    dispose() {
      let e = new Set();
      this.traverse((t) => {
        t.isMesh && (e.add(t.geometry), e.add(t.material));
      });
      for (let t of e) t.dispose();
    }
  };
function J(e) {
  return new T({ color: 0, emissive: 16777215, emissiveIntensity: e });
}
function ve() {
  try {
    let e = document.createElement(`canvas`).getContext(`webgl`);
    if (!e) return ``;
    let t = e.getExtension(`WEBGL_debug_renderer_info`),
      n = String(e.getParameter(t ? t.UNMASKED_RENDERER_WEBGL : e.RENDERER) || ``);
    return (e.getExtension(`WEBGL_lose_context`)?.loseContext(), n);
  } catch {
    return ``;
  }
}
function ye() {
  let e =
      Math.min(window.innerWidth, window.innerHeight) < 820 ||
      Math.min(screen.width || 9999, screen.height || 9999) < 820,
    t = ve(),
    n = (R() && e) || /adreno|mali|immortalis|xclipse|powervr|maleoon/i.test(t),
    r = Math.max(1, window.innerWidth * window.innerHeight),
    i = window.devicePixelRatio || 1,
    a = Math.max(0.6, Math.min(n ? i : Math.max(i, 1.5), n ? 1.5 : 2, Math.sqrt((n ? 14e5 : 83e5) / r))),
    o = !n || /mali-g1|immortalis|mali-g7[1-9]\d|adreno[^0-9]*(7[3-9]\d|8\d\d)|xclipse 9|apple gpu/i.test(t);
  return Object.freeze({
    low: n,
    strong: o,
    gpu: t.slice(0, 60),
    pixelRatio: +a.toFixed(2),
    shadowSize: n ? 2048 : 4096,
    ao: !n,
    bloom: !0,
  });
}
function be(e, t, n = 1 / 0) {
  return t >= 1.2 ? e : Math.min(n, Math.max(e, 78), e + (1.2 - t) * 42);
}
var xe = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 0.32 },
    uGrain: { value: 0.025 },
    uWarm: { value: 0.03 },
    uSilent: { value: 0 },
    uAspect: { value: 16 / 9 },
    uFade: { value: 0 },
    uTilt: { value: 0 },
    uFocus: { value: 0.5 },
    uBand: { value: 0.14 },
    uSat: { value: 1 },
    uContrast: { value: 1 },
    uVibrance: { value: 0 },
    uFxaa: { value: 0 },
    uTexel: { value: new D(1 / 1920, 1 / 1080) },
    uLift: { value: 0 },
    uLiftTint: { value: new f(`#3e3546`) },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain, uWarm, uSilent, uAspect, uFade, uTilt, uFocus, uBand, uSat, uContrast, uVibrance, uFxaa, uLift; uniform vec2 uTexel; uniform vec3 uLiftTint; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime * 7.13) * 43758.5453); }
    float hash1(float x){ return fract(sin(x * 91.3458) * 47453.5453); }
    vec3 fxaa(vec2 uv){
      const vec3 W = vec3(0.299, 0.587, 0.114);
      vec3 nw = texture2D(tDiffuse, uv + vec2(-1.0, -1.0) * uTexel).rgb, ne = texture2D(tDiffuse, uv + vec2(1.0, -1.0) * uTexel).rgb;
      vec3 sw = texture2D(tDiffuse, uv + vec2(-1.0, 1.0) * uTexel).rgb, se = texture2D(tDiffuse, uv + vec2(1.0, 1.0) * uTexel).rgb;
      vec3 m = texture2D(tDiffuse, uv).rgb;
      float lnw = dot(nw, W), lne = dot(ne, W), lsw = dot(sw, W), lse = dot(se, W), lm = dot(m, W);
      float lo = min(lm, min(min(lnw, lne), min(lsw, lse))), hi = max(lm, max(max(lnw, lne), max(lsw, lse)));
      vec2 dir = vec2(-((lnw + lne) - (lsw + lse)), (lnw + lsw) - (lne + lse));
      float reduce = max((lnw + lne + lsw + lse) * (0.25 / 8.0), 1.0 / 128.0);
      dir = clamp(dir / (min(abs(dir.x), abs(dir.y)) + reduce), vec2(-8.0), vec2(8.0)) * uTexel;
      vec3 a = 0.5 * (texture2D(tDiffuse, uv + dir * (1.0 / 3.0 - 0.5)).rgb + texture2D(tDiffuse, uv + dir * (2.0 / 3.0 - 0.5)).rgb);
      vec3 b = a * 0.5 + 0.25 * (texture2D(tDiffuse, uv - dir * 0.5).rgb + texture2D(tDiffuse, uv + dir * 0.5).rgb);
      float lb = dot(b, W);
      return (lb < lo || lb > hi) ? a : b;
    }
    void main(){
      vec2 uv = vUv;
      // 1902 mode: gate weave, sepia monochrome, flicker, scratches and dust, a 4:3 gate inside the screen.
      float frame = floor(uTime * 16.0);
      uv += uSilent * vec2(hash1(frame) - 0.5, hash1(frame + 7.0) - 0.5) * 0.0025;
      vec4 c = vec4(uFxaa > 0.5 ? fxaa(uv) : texture2D(tDiffuse, uv).rgb, 1.0);
      // Tilt-shift (a miniature seen from above): blur away from a horizontal band of focus.
      if (uTilt > 0.001) {
        float b = uTilt * smoothstep(uBand, uBand + 0.34, abs(vUv.y - uFocus));
        if (b > 0.001) {
          vec3 acc = c.rgb;
          for (int i = 0; i < 16; i++) {
            float fi = float(i), r = sqrt((fi + 0.5) / 16.0) * b * 0.013, a = fi * 2.39996;
            acc += texture2D(tDiffuse, uv + vec2(cos(a) * r / uAspect * 1.6, sin(a) * r)).rgb;
          }
          c.rgb = acc / 17.0;
        }
      }
      float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = max(mix(vec3(luma), c.rgb, uSat), 0.0);
      // Vibrance lifts the quiet colours more than the loud ones; contrast pivots on the mid-tones.
      float chroma = max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
      c.rgb = max(mix(vec3(luma), c.rgb, 1.0 + uVibrance * (1.0 - chroma)), 0.0);
      c.rgb = clamp((c.rgb - 0.5) * uContrast + 0.5, 0.0, 1.0);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      vec3 sepia = vec3(l * 1.08, l * 0.98, l * 0.82);
      float flick = 1.0 + (hash1(frame * 1.7) - 0.5) * 0.16;
      vec3 silent = sepia * flick;
      float sx = hash1(frame + 3.0); float scratch = step(0.86, hash1(frame + 11.0)) * smoothstep(0.0025, 0.0, abs(uv.x - sx)) * 0.45;
      silent += scratch;
      float dust = step(0.9985, hash(floor(uv * vec2(uAspect * 220.0, 220.0)) + frame)) * 0.8;
      silent -= dust;
      c.rgb = mix(c.rgb, silent, uSilent);
      vec2 d = uv - 0.5; d.x *= 1.15;
      float v = smoothstep(0.85, 0.2, length(d));
      c.rgb *= mix(1.0 - mix(uVignette, 0.75, uSilent), 1.0, v);
      // After the vignette, so its corners go plum, not black; before the gate and the fade, which are meant black.
      c.rgb += uLift * uLiftTint * (1.0 - c.rgb) * (1.0 - c.rgb);
      c.rgb += vec3(uWarm, uWarm * 0.55, 0.0) * (1.0 - c.rgb);
      c.rgb += (hash(vUv * 1000.0) - 0.5) * mix(uGrain, 0.12, uSilent);
      float gate = (4.0 / 3.0) / uAspect;
      float inGate = step(abs(vUv.x - 0.5), gate * 0.5);
      c.rgb *= mix(1.0, inGate, uSilent);
      c.rgb *= 1.0 - uFade;
      gl_FragColor = c;
    }`,
};
function Se(r, i = ye()) {
  let a = new t({ canvas: r, antialias: !1, powerPreference: `high-performance` });
  (a.setPixelRatio(i.pixelRatio),
    a.setSize(window.innerWidth, window.innerHeight, !1),
    (a.outputColorSpace = d),
    (a.toneMapping = 4),
    (a.toneMappingExposure = 0.92),
    (a.shadowMap.enabled = !0),
    (a.shadowMap.type = 2));
  let o = new x();
  ((o.environment = new n(a).fromScene(new _e(), 0.04).texture), (o.environmentIntensity = 0.32));
  let c = new w(48, window.innerWidth / window.innerHeight, 0.1, 400),
    l = 48,
    u = 1 / 0,
    f = () => {
      ((c.fov = be(l, c.aspect, u)), c.updateProjectionMatrix());
    };
  f();
  let p = a.getDrawingBufferSize(new D()),
    m = new ie(a, new y(p.x, p.y, { type: h, samples: i.low ? 0 : 4 }));
  (m.setPixelRatio(i.pixelRatio), m.setSize(window.innerWidth, window.innerHeight));
  let g = new ae(o, c);
  m.addPass(g);
  let _ = null;
  if (i.ao) {
    ((_ = new pe(o, c, window.innerWidth, window.innerHeight)),
      (_.output = pe.OUTPUT.Default),
      (_.blendIntensity = 0.85),
      _.updateGtaoMaterial({ radius: 0.35, distanceExponent: 1.4, thickness: 1.2, scale: 1, samples: 12 }),
      _.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 }));
    let e = _._overrideVisibility.bind(_);
    ((_._overrideVisibility = function () {
      e();
      let t = this._visibilityCache;
      this.scene.traverse((e) => {
        if (!e.visible) return;
        let n = e.material,
          r = n && (Array.isArray(n) ? n.some((e) => e.transparent) : n.transparent);
        (e.isSprite || e.userData.noAO || r) && ((e.visible = !1), t.push(e));
      });
    }),
      m.addPass(_));
  }
  i.low ||
    m.addPass(
      new te({
        uniforms: { tDiffuse: { value: null } },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0); gl_FragColor = c; }`,
      }),
    );
  let v = new he(new D(window.innerWidth, window.innerHeight), 0.28, 0.6, 0.92);
  m.addPass(v);
  let b = ({ strength: e = 0.28, radius: t = 0.6, threshold: n = 0.92 } = {}) => {
    ((v.strength = i.low ? e * 0.45 : e), (v.radius = i.low ? t * 0.35 : t), (v.threshold = n));
  };
  (b(), m.addPass(new ge()));
  let S = new te(xe);
  ((S.uniforms.uAspect.value = window.innerWidth / window.innerHeight), (S.uniforms.uFxaa.value = +!!i.low));
  let C = a.getDrawingBufferSize(new D());
  (S.uniforms.uTexel.value.set(1 / C.x, 1 / C.y), m.addPass(S));
  let T = new Set(),
    E = new s(),
    O = !0;
  function k() {
    let e = window.innerWidth,
      t = window.innerHeight;
    ((c.aspect = e / t),
      f(),
      a.setSize(e, t, !1),
      m.setSize(e, t),
      _ && _.setSize(e, t),
      (S.uniforms.uAspect.value = e / t),
      a.getDrawingBufferSize(C),
      S.uniforms.uTexel.value.set(1 / C.x, 1 / C.y));
  }
  window.addEventListener(`resize`, k);
  let A = 0,
    j = i.pixelRatio,
    M = 0,
    N = 0,
    P = 0,
    F = null,
    I = !1,
    L = Math.min(i.pixelRatio, i.low && window.innerWidth * window.innerHeight > 12e5 ? 0.6 : 1),
    ee = i.low
      ? Math.max(
          i.pixelRatio,
          Math.min(
            window.devicePixelRatio || 1,
            2,
            Math.sqrt(26e5 / Math.max(1, window.innerWidth * window.innerHeight)),
          ),
        )
      : i.pixelRatio,
    R = [],
    z = [],
    B = (e) => {
      ((j = +e.toFixed(2)), a.setPixelRatio(j), m.setPixelRatio(j), k());
    },
    V = (e) => {
      let t = [...e].sort((e, t) => e - t);
      return t[t.length >> 1];
    };
  function H(e, t) {
    if (e > 0.5 || document.hidden) {
      R.length = 0;
      return;
    }
    if (
      (z.push(e),
      z.length > 600 && z.shift(),
      (P ||= t),
      t - P < 4e3 || (R.length || (N = t), R.push(e), t - N < 1500 || R.length < 20))
    )
      return;
    let n = V(R);
    if (((R.length = 0), F)) {
      if (t - M < 1500) return;
      (n > F.m * 0.85 && (B(F.ratio), (I = !0)), (F = null), (M = t));
      return;
    }
    if (!(t - M < 2e3)) {
      if (n > 1 / 42) {
        if (I) return;
        if (j > L + 0.01) ((F = { ratio: j, m: n }), B(Math.max(L, j * Math.sqrt(1 / 55 / n))));
        else if (_?.enabled) _.enabled = !1;
        else if (v.enabled) v.enabled = !1;
        else return;
        M = t;
      } else
        j < ee - 0.01 &&
          t - M > 6e3 &&
          n < (j < i.pixelRatio ? 1 / 57 : 1 / 100) &&
          (B(Math.min(ee, j + (j < i.pixelRatio ? 0.1 : 0.15))), (M = t));
    }
  }
  function U(e) {
    if (!O) return;
    (requestAnimationFrame(U), A && H((e - A) / 1e3, e), (A = e));
    let t = Math.min(E.getDelta(), 1 / 20),
      n = E.elapsedTime;
    for (let e of T) e(t, n);
    ((S.uniforms.uTime.value = n), m.render(t));
  }
  return (
    requestAnimationFrame(U),
    {
      THREE: e,
      renderer: a,
      scene: o,
      camera: c,
      composer: m,
      quality: i,
      bloom: v,
      finish: S,
      ao: _,
      setBloom: b,
      onUpdate(e) {
        return (T.add(e), () => T.delete(e));
      },
      stats() {
        if (z.length < 30) return null;
        let e = [...z].sort((e, t) => e - t),
          t = e.reduce((e, t) => e + t, 0) / e.length,
          n = e.filter((e) => e > 0.05).length / e.length;
        return (
          (z.length = 0),
          {
            fps: +(1 / t).toFixed(1),
            p90: +(e[Math.floor(e.length * 0.9)] * 1e3).toFixed(1),
            worst: +(e[e.length - 1] * 1e3).toFixed(0),
            slow: +(n * 100).toFixed(0),
            ratio: j,
            capped: I,
            low: i.low,
            ao: !!_?.enabled,
            bloom: v.enabled,
            gpu: i.gpu,
          }
        );
      },
      async warm() {
        try {
          await a.compileAsync(o, c);
        } catch {}
        let e = new Set();
        o.traverse((t) => {
          for (let n of Array.isArray(t.material) ? t.material : t.material ? [t.material] : [])
            for (let t of Object.values(n))
              if (t?.isTexture && !e.has(t)) {
                e.add(t);
                try {
                  a.initTexture(t);
                } catch {}
              }
        });
      },
      debugFrame(e = 1 / 60) {
        let t = performance.now();
        for (let t of T) t(e, E.elapsedTime);
        let n = performance.now();
        return (
          m.render(e),
          a.getContext().finish(),
          { update: +(n - t).toFixed(2), render: +(performance.now() - n).toFixed(2) }
        );
      },
      setFov(e) {
        ((l = e), f());
      },
      get baseFov() {
        return l;
      },
      setFovMax(e = 1 / 0) {
        ((u = e), f());
      },
      get fovMax() {
        return u;
      },
      setScene(e) {
        ((g.scene = e), _ && (_.scene = e));
      },
      pause() {
        O = !1;
      },
      resume() {
        O || ((O = !0), E.getDelta(), requestAnimationFrame(U));
      },
    }
  );
}
F.ticker.lagSmoothing(0);
var Ce = document.getElementById(`world`),
  Y = document.getElementById(`boot`),
  X = (() => {
    let e = 0.06,
      t = 0.06,
      n = 0,
      r = () => {
        ((t = e - t < 0.002 ? e : t + (e - t) * 0.12),
          Y.style.setProperty(`--p`, t.toFixed(4)),
          (n = t < e ? requestAnimationFrame(r) : 0));
      };
    return (t) => {
      ((e = Math.max(e, Math.min(1, t))), (n ||= requestAnimationFrame(r)));
    };
  })(),
  Z = new URLSearchParams(location.search),
  Q = Z.get(`go`) || `plaza`,
  we = (() => {
    try {
      let e = sessionStorage.getItem(`lp.iris`) === `1`;
      return (sessionStorage.removeItem(`lp.iris`), e);
    } catch {
      return !1;
    }
  })();
we && Y.classList.add(`dark`);
var $ = Se(Ce),
  Te = B(),
  Ee = V === `en` ? `en` : `zh`;
X(0.15);
var De = {
    plaza: () =>
      U(
        () => import(`./plaza-DtW-9Ogo.js`),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]),
      ),
    melies: () =>
      U(
        () => import(`./melies-CVeXgO_j.js`),
        __vite__mapDeps([24, 1, 2, 3, 4, 5, 6, 10, 11, 12, 22, 13, 7, 14, 18, 9, 19, 25, 20, 26]),
      ),
    vangogh: () =>
      U(
        () => import(`./vangogh-vtK6V0FT.js`),
        __vite__mapDeps([27, 1, 2, 5, 9, 10, 11, 4, 12, 13, 7, 18, 3, 6, 14, 19, 28, 25, 29]),
      ),
    lishizhen: () =>
      U(
        () => import(`./lishizhen-DHEXqMi7.js`),
        __vite__mapDeps([30, 1, 2, 4, 5, 10, 11, 12, 13, 7, 28, 3, 6, 9, 18, 14, 19, 25, 31]),
      ),
    xiyou: () =>
      U(
        () => import(`./xiyou-qiVItcEw.js`),
        __vite__mapDeps([32, 1, 2, 3, 4, 5, 6, 10, 11, 12, 22, 13, 7, 18, 9, 14, 19, 25, 21, 33]),
      ),
  },
  Oe,
  ke = Z.has(`look`)
    ? (
        await U(
          async () => {
            let { startPreview: e } = await import(`./lookPreview-D5XL_Al7.js`);
            return { startPreview: e };
          },
          __vite__mapDeps([34, 1, 10, 11, 2, 4, 5, 12, 22]),
        )
      ).startPreview($, { go: Q, look: Z.get(`look`) })
    : null;
try {
  ((Oe = await (
    await (De[Q] || De.plaza)()
  ).enter({ stage: $, me: Te, lang: Ee, fromIris: we, onProgress: (e) => X(0.15 + e * 0.63) })),
    ke?.entered(Oe));
} catch (e) {
  throw (
    console.error(e),
    Y.classList.remove(`dark`),
    (document.getElementById(`boot-hint`).textContent = H(
      `场景没能搭起来，刷新试试`,
      `The set could not be built — try reloading`,
    )),
    (window.__lpError = `${e?.message}\n${e?.stack || ``}`),
    e
  );
}
var Ae = 0.78,
  je = setInterval(() => X((Ae += (0.96 - Ae) * 0.08)), 450);
(X(Ae),
  await Promise.race([Oe.ready || Promise.resolve(), new Promise((e) => setTimeout(e, 7e3))]),
  await Promise.race([$.warm(), new Promise((e) => setTimeout(e, 4e3))]),
  clearInterval(je),
  setTimeout(() => $.warm(), 3e3),
  X(1));
var Me = () => {
    (Oe.revealed?.(), Oe.start?.(), ke?.started());
  },
  Ne = we ? z(document.body) : null;
(Ne
  ? (Ne.black(), Y.classList.add(`gone`, `instant`), requestAnimationFrame(() => Ne.open(1300)), Me())
  : (Y.classList.add(`open`),
    setTimeout(() => {
      (Y.classList.add(`gone`), Me());
    }, 1050)),
  setInterval(() => {
    if (document.hidden) return;
    let e = $.stats();
    if (!e) return;
    let t = window.visualViewport,
      n = {
        sy: Math.round(window.scrollY || document.scrollingElement?.scrollTop || 0),
        vt: Math.round(t?.offsetTop || 0),
        vh: Math.round(t?.height || innerHeight),
        sw: screen.width,
        sh: screen.height,
      },
      r = JSON.stringify({
        space: Q,
        ...e,
        ...n,
        touch: ee(),
        w: innerWidth,
        h: innerHeight,
        dpr: devicePixelRatio,
        ua: navigator.userAgent.slice(0, 180),
      }),
      i = `/life-learn/api/perf`;
    navigator.sendBeacon?.(i, new Blob([r], { type: `application/json` })) ||
      fetch(i, { method: `POST`, body: r, headers: { "Content-Type": `application/json` }, keepalive: !0 }).catch(
        () => {},
      );
  }, 8e3),
  (window.__lp = {
    stage: $,
    room: Oe,
    shot: (e, t) => Oe.shot?.(e, t),
    THREE: e,
    me: Te,
    look: ke?.set,
    grab(e = 1440) {
      $.composer.render(1 / 60);
      let t = $.renderer.domElement,
        n = document.createElement(`canvas`);
      return (
        (n.width = e),
        (n.height = Math.round((e * t.height) / t.width)),
        n.getContext(`2d`).drawImage(t, 0, 0, n.width, n.height),
        n.toDataURL(`image/jpeg`, 0.88)
      );
    },
  }));
