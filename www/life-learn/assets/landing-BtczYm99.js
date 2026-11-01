import { t as e } from "./me-CiQWAPxS.js";
import { a as t, i as n, n as r, t as i } from "./i18n-BvGoRVq5.js";
import { n as a } from "./assets-p2qy6QaX.js";
import { i as o, s } from "./visits-C_j5CG_Y.js";
import { n as c, t as l } from "./mic-DTF0YIPs.js";
import { a as u, i as d, o as ee, r as f, t as p } from "./sfx-DTi9SDQe.js";
var m = (e, t) => ({ zh: e, en: t }),
  h = Object.freeze([
    {
      id: `study`,
      label: m(`学生`, `Student`),
      hint: m(`上学、备考`, `school, exams`),
      to: m(`一位在读书的朋友`, `a friend who's studying`),
      ack: m(
        `以前半夜打进来的，学生最多。压着嗓子说话，怕吵醒上铺。`,
        `Students rang in most, after midnight — whispering, so as not to wake the bunk above.`,
      ),
      life: `lishizhen`,
      why: m(`李时珍考了三次乡试，一次也没中。`, `Li Shizhen sat the provincial exam three times and never passed.`),
    },
    {
      id: `office`,
      wide: !0,
      label: m(`上班族`, `Office job`),
      hint: m(`公司、单位`, `a company, an office`),
      to: m(`一位上班的朋友`, `a friend at work all day`),
      ack: m(`上班的人，多半是在下班路上打进来的。`, `People with jobs mostly rang on their way home.`),
      life: `vangogh`,
      why: m(`梵高在画廊当了七年店员。`, `Van Gogh spent seven years as a clerk at an art dealer's.`),
    },
    {
      id: `health`,
      label: m(`医护`, `Healthcare`),
      hint: m(`医生、护士`, `doctors, nurses`),
      to: m(`一位在医院忙的朋友`, `a friend at the hospital`),
      ack: m(
        `医院里的人打进来，常常说到一半，就被叫走了。`,
        `People from hospitals were often called away mid-sentence.`,
      ),
      life: `lishizhen`,
      why: m(
        `李时珍也是医生。一个抽屉一味药，他认了一辈子。`,
        `Li Shizhen was a doctor too: one drawer to each medicine, and he knew every one.`,
      ),
    },
    {
      id: `teach`,
      label: m(`老师`, `Teacher`),
      hint: m(`教书、带学生`, `school, tutoring`),
      to: m(`一位当老师的朋友`, `a friend who teaches`),
      ack: m(`老师打进来，多半是作业改完了，快到半夜。`, `Teachers rang once the marking was done, near midnight.`),
      life: `vangogh`,
      why: m(`梵高在英国教过书，一分钱工资也没有。`, `Van Gogh once taught at a school in England, for no pay.`),
    },
    {
      id: `create`,
      label: m(`做创作`, `Creative work`),
      hint: m(`设计、写作、拍视频`, `design, writing, video`),
      to: m(`一位做创作的朋友`, `a friend who makes things`),
      ack: m(
        `画画、写东西的人打进来，常说一句「就差一点了」。`,
        `People who draw or write rang in saying the same thing: nearly there.`,
      ),
      life: `vangogh`,
      why: m(`梵高画了一辈子，画几乎一张也没卖出去。`, `Van Gogh painted all his life and sold almost nothing.`),
    },
    {
      id: `road`,
      label: m(`在路上跑`, `On the road`),
      hint: m(`骑手、司机`, `riders, drivers`),
      to: m(`一位在路上跑的师傅`, `someone out on the road`),
      ack: m(
        `跑夜路的师傅，常把电台开着。我知道你们在听。`,
        `Drivers on the night roads kept the radio on. I knew you were listening.`,
      ),
      life: `lishizhen`,
      why: m(`李时珍背着药篓，走过很多座山。`, `Li Shizhen walked a great many mountains with a basket on his back.`),
    },
    {
      id: `own`,
      label: m(`自己干`, `On my own`),
      hint: m(`开店、接活`, `a shop, freelance`),
      to: m(`一位自己干的朋友`, `a friend who works for themselves`),
      ack: m(
        `自己干的人打进来，常常是刚收工，账还没算完。`,
        `People who work for themselves rang when they'd just shut up shop, the sums not yet done.`,
      ),
      life: `melies`,
      why: m(
        `梅里爱开过剧院，办过片厂，晚年在火车站卖玩具。`,
        `Méliès ran a theatre and a film studio, and in old age sold toys at a railway station.`,
      ),
    },
    { id: `self`, label: m(`都不是`, `None of these`), hint: m(`我说给你听`, `let me tell you`) },
  ]),
  g = Object.freeze([
    {
      id: `factory`,
      label: m(`在工厂`, `In a factory`),
      to: m(`一位在厂里干活的朋友`, `a friend at the factory`),
      ack: m(
        `上夜班的工人打进来，那边总有机器在响。`,
        `Night-shift workers rang in with the machines still going behind them.`,
      ),
      life: `melies`,
      why: m(`梅里爱年轻时，在家里的鞋厂干过活。`, `As a young man, Méliès worked in his family's boot factory.`),
    },
    {
      id: `service`,
      label: m(`做服务`, `In service`),
      to: m(`一位在店里忙的朋友`, `a friend behind the counter`),
      ack: m(`饭馆里的人打进来，总在打烊以后。`, `Restaurant people rang after closing time.`),
      life: `melies`,
      why: m(
        `梅里爱晚年在火车站的小铺子里，卖玩具和糖。`,
        `In old age Méliès sold toys and sweets from a stall at a railway station.`,
      ),
    },
    {
      id: `kids`,
      label: m(`带孩子`, `Raising a child`),
      to: m(`一位带孩子的朋友`, `a friend raising a child`),
      ack: m(`带孩子的人，总要等孩子睡着了，才打得进来。`, `Parents could only ring once the child was asleep.`),
      life: `vangogh`,
      why: m(
        `梵高在阿尔勒给邮差一家画过像，连刚出生的婴儿也画了。`,
        `In Arles, Van Gogh painted the postman's family, the newborn baby too.`,
      ),
    },
    {
      id: `carer`,
      label: m(`照顾人`, `Caring`),
      to: m(`一位照顾着别人的朋友`, `someone looking after another`),
      ack: m(
        `照顾人的人打进来，总是先说对方，最后才说自己。`,
        `People who look after someone always talked about the other person first, themselves last.`,
      ),
      life: `lishizhen`,
      why: m(`李时珍一辈子，都在给人看病。`, `Li Shizhen spent his life looking after the sick.`),
    },
    {
      id: `find`,
      label: m(`在找方向`, `Finding my way`),
      to: m(`一位还在找方向的朋友`, `a friend still finding their way`),
      ack: m(
        `找方向的人，电话通了，常常先不说话。不急，我等。`,
        `People finding their way often said nothing at first, once the line was open. No hurry. I'll wait.`,
      ),
      life: `vangogh`,
      why: m(`梵高二十七岁，才开始学画。`, `Van Gogh only began to learn to paint at twenty-seven.`),
    },
  ]),
  _ = (e) => [...h, ...g].find((t) => t.id === e && t.id !== `self`) || null,
  te = Object.freeze({
    melies: m(
      `梅里爱开过剧院，办过片厂，晚年在火车站卖玩具。`,
      `Méliès ran a theatre and a film studio, and in old age sold toys at a railway station.`,
    ),
    vangogh: m(`梵高画了一辈子，画几乎一张也没卖出去。`, `Van Gogh painted all his life and sold almost nothing.`),
    lishizhen: m(
      `李时珍考了三次乡试，一次也没中。`,
      `Li Shizhen sat the provincial exam three times and never passed.`,
    ),
    xiyou: m(
      `悟空在五行山下压了五百年，没有一个相知的来看他一眼。`,
      `Wukong lay five hundred years under a mountain, and no friend came to see him.`,
    ),
  }),
  ne = (e, t) =>
    e?.life
      ? e.id === `create` && /视频|短片|拍片|剪辑|导演|镜头|电影|摄影|video|film|camera|youtube/i.test(String(t || ``))
        ? {
            life: `melies`,
            why: m(
              `梅里爱拍了五百多部片子，后来大半找不到了。`,
              `Méliès made more than five hundred films; most were later lost.`,
            ),
          }
        : { life: e.life, why: e.why }
      : null,
  v = Object.freeze([
    { label: m(`写代码的`, `I write code`) },
    { label: m(`管账的`, `I do the accounts`) },
    { label: m(`跑业务的`, `Sales`) },
    { label: m(`在工厂`, `In a factory`), kind: `factory` },
  ]),
  re = m(
    [
      `昨晚又熬到很晚`,
      `一件做了很久、没人知道的事`,
      `差一点就放弃的那天`,
      `最近一件小小的高兴事`,
      `一句到现在也没说出口的话`,
      `一个常常想起的人`,
      `一个还没拿定的主意`,
      `一段很累的日子`,
      `一个一直想去的地方`,
      `一件偷偷骄傲的事`,
      `一次被人误会`,
      `最近睡不着，是因为……`,
    ],
    [
      `Another late night`,
      `Something I've kept at for ages, unnoticed`,
      `The day I nearly gave up`,
      `A small good thing lately`,
      `Something I still haven't said`,
      `Someone I keep thinking of`,
      `A decision I haven't made`,
      `A tiring stretch`,
      `A place I've always wanted to go`,
      `Something I'm quietly proud of`,
      `A time I was misunderstood`,
      `Why I can't sleep lately…`,
    ],
  ),
  y = m([`嗯。`, `嗯，我在听。`, `嗯……`], [`Mm.`, `Mm, I'm listening.`, `Mm…`]),
  ie = m(
    `护照收好。拿你的一段日子，去换他们的一段。`,
    `Keep this safe. Take a stretch of your days, and trade it for a stretch of theirs.`,
  ),
  b = `lifeplaza.gate`,
  x = i(`你是做什么的？`, `What do you do?`),
  ae = i(`以前电话打进来，我总先问这一句。`, `When a call came in, I always asked that first.`),
  S = i(`做哪一行的？`, `What line of work?`),
  C = i(
    `说说最近的一个晚上吧——你在哪儿，在干嘛。`,
    `Tell me about one evening lately — where you were, what you were doing.`,
  ),
  oe = {
    idle: i(`点一下，说给她听`, `Tap, and tell her`),
    starting: i(`在听。说完，点一下。`, `Listening. Tap when you're done.`),
    listening: i(`在听。说完，点一下。`, `Listening. Tap when you're done.`),
    pause: i(`说完了？点一下。`, `Done? Tap.`),
    thinking: i(`让我听清楚……`, `Making out what you said…`),
    short: i(`再说长一点？点一下，重新说。`, `A little longer? Tap and say it again.`),
    silent: i(`好像没听见声音。再试一次？`, `I didn't hear anything. Try again?`),
    failed: i(`没听清。写下来也行。`, `I couldn't make that out. Writing it works too.`),
    denied: i(`没有麦克风也没关系，写给我也一样。`, `No microphone? That's fine — write it to me instead.`),
  },
  se = [
    /不想活(?![成得在出])|活不下去|活着(真|也|都)?没(有)?(意思|意义|盼头)|想死(?![你您他她它我])|寻死|自杀(?!式)|轻生|自尽|自残|(想|要|会|忍不住)(去)?伤害自己|了结(自己的?)?生命|了结自己(?!的)|结束(自己的?)?生命|死了算了|不如死了|割腕|跳楼(?!价|大?甩卖|大?促销)|上吊|再也不想醒|不想再醒/,
    /\bkill myself\b|\bsuicid(e|al)\b|\bend(ing)? my (own )?life\b|\b(to|gonna|wanna) end it all\b|\b(want|wanna|wanted) to die\b|\b(don'?t|do not|no longer) want to (live|be alive)\b|\bno reason to (live|go on)\b|\bbetter off (dead|without me)\b|\bself[- ]?harm|\b(want|wanted|going|gonna|trying|tried) to (hurt|harm) myself\b|\bharming myself\b/i,
  ],
  w = (e) => se.some((t) => t.test(String(e || ``))),
  T = Object.freeze({
    line: m(
      `这件事我想认真对你说：请现在就去找一个你信得过的人。也可以打 12356 心理援助热线，会有人接。`,
      `I want to say this plainly: please reach out to someone you trust, now. In the US you can call or text 988; in the UK and Ireland, Samaritans are on 116 123.`,
    ),
    calls: m(
      [[`12356`, `12356`, `心理援助热线`]],
      [
        [`988`, `988`, `call or text · US`],
        [`116123`, `116 123`, `Samaritans · UK & Ireland`],
      ],
    ),
    listening: m(`嗯，我在听。`, `Mm. I'm listening.`),
    more: m(`想说什么，都可以……`, `Say anything at all…`),
    on: m(`先进去走走`, `Let me in for now`),
    thanks: m(`护照我先给你写上。空着的地方，以后再填。`, `I'll write your passport now. The empty parts can wait.`),
    page: m(`这一页先空着，等你回来填。`, `This page can wait for you.`),
    bye: m(
      `护照收好。那个号码是 12356，打过去，会有人接。`,
      `Keep this safe. That number again: 988 in the US, 116 123 in the UK and Ireland.`,
    ),
  }),
  E = (e) => new Promise((t) => setTimeout(t, e)),
  ce = (e) =>
    e
      .map((e) => [Math.random(), e])
      .sort((e, t) => e[0] - t[0])
      .map(([, e]) => e),
  le = () => {
    let e = new Date();
    return `${String(e.getHours()).padStart(2, `0`)}:${String(e.getMinutes()).padStart(2, `0`)}`;
  },
  ue = () => {
    let e = new Date().getHours();
    return e >= 23 || e < 5;
  },
  de = (e, t) => {
    let n = String(e || ``).trim(),
      r = [...n];
    if (r.length <= t) return n;
    let i = r.slice(0, t).join(``),
      a = Math.max(i.lastIndexOf(`，`), i.lastIndexOf(`,`), i.lastIndexOf(` `));
    return (a > t / 2 ? i.slice(0, a) : i).trim();
  },
  fe = (e) => /[\u4e00-\u9fff]/.test(e),
  pe = (e) => {
    let t = (
      String(e || ``)
        .trim()
        .match(/^[^。！？!?.\n]+[。！？!?.]?/)?.[0] || ``
    ).trim();
    return [...t].length >= 2 ? de(t, fe(t) ? 40 : 120) : ``;
  },
  me = (e) => (String(e || ``).match(/[\p{L}\p{N}]/gu) || []).length >= 4,
  he = (e) => {
    let t = String(e || ``)
      .replace(/[\s\p{P}\p{S}]+/gu, ``)
      .toLowerCase();
    return (
      !t ||
      /^(没什么|没啥|没有|不知道|不清楚|说不好|说不清|还好|一般|随便|就那样|嗯+|哦+|啊+|nothing(much)?|notmuch|nah|idk|dunno|idontknow|dontknow|m+|um+|hm+)$/.test(
        t,
      )
    );
  },
  D = `　-〿一-鿿＀-￯`,
  ge = (e) => String(e || ``).replace(/([，、；：])(?=[^\n])/g, `$1​`),
  _e = (e) =>
    ge(
      String(e || ``)
        .trim()
        .replace(RegExp(`([${D}])\\s+(?=[${D}])`, `g`), `$1`)
        .replace(
          /([。！？])(?=[^\s」』”）\n])/g,
          `$1
`,
        )
        .replace(
          /([.!?])\s+(?=[A-Z“"])/g,
          `$1
`,
        )
        .replace(
          /([^\n\s])——(?=[^\n]{4})/g,
          `$1⁠——
`,
        )
        .replace(
          / — (?=[^\n]{12})/g,
          ` —
`,
        ),
    );
function ve(e, t) {
  let n = String(t || ``).toLowerCase();
  if (!n) return;
  let r = (e) => {
      let [t, r] = e.length <= n.length ? [e, n] : [n, e];
      return r.includes(t) && t.length >= r.length * 0.6;
    },
    i = e.findIndex((e) => r(e.toLowerCase()));
  i >= 0 ? t.length < e[i].length && (e[i] = t) : e.length < 8 && e.push(t);
}
async function ye(e, t, n) {
  let r = new AbortController(),
    i = setTimeout(() => r.abort(), n);
  try {
    let n = await fetch(`${o.base}${e}`, {
      method: `POST`,
      headers: { "Content-Type": `application/json` },
      body: JSON.stringify(t),
      signal: r.signal,
    });
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(i);
  }
}
function be(
  m,
  { voice: g, me: se = {}, onStep: D = () => {}, onAvatar: be = () => {}, onStudio: xe = () => {}, lives: O = {} } = {},
) {
  let k = r === `en` ? `en` : `zh`,
    A = null;
  try {
    ((A = JSON.parse(sessionStorage.getItem(b) || `null`)), sessionStorage.removeItem(b));
  } catch {
    A = null;
  }
  let j = {
      kind: null,
      picked: null,
      trade: !1,
      turns: [],
      avatar: ``,
      spoke: !1,
      care: !1,
      helped: !1,
      notes: { who: ``, kind: ``, specific: !1, field: ``, details: [], wish: ``, mood: ``, quote: `` },
    },
    M = `title`,
    Se = n(() => {
      try {
        sessionStorage.setItem(b, JSON.stringify({ step: M }));
      } catch {}
    });
  document.body.classList.add(`gating`);
  let N = document.createElement(`div`);
  ((N.className = `gate`), m.appendChild(N));
  let Ce = a(`portraits/guide.jpg`),
    we = i(`引路人`, `The guide`),
    P = (e) => g?.say(we, Array.isArray(e) ? e : [e], { role: `guide` }),
    F = null,
    Te = (e) => {
      e.detail?.on && g?.stop?.();
    };
  window.addEventListener(`lp-mic`, Te);
  let I = window.visualViewport,
    L = () =>
      N.style.setProperty(`--kb`, `${Math.round(I ? Math.max(0, window.innerHeight - I.height - I.offsetTop) : 0)}px`);
  (I?.addEventListener(`resize`, L), I?.addEventListener(`scroll`, L));
  let Ee = setInterval(() => {
      let e = R(`.gx-clock`);
      e && (e.textContent = le());
    }, 15e3),
    De = () => {
      let e = R(`.gx-log`);
      e && N.style.setProperty(`--dusk`, `${Math.round(e.getBoundingClientRect().top)}px`);
    },
    Oe = `ResizeObserver` in window ? new ResizeObserver(De) : null,
    ke = (e, t) =>
      new Promise((n) => {
        (N.classList.remove(`in`),
          setTimeout(
            () => {
              ((N.className = `gate ${e}`), (N.innerHTML = t), L(), Oe?.disconnect());
              let r = R(`.gx`);
              (r && Oe?.observe(r),
                De(),
                requestAnimationFrame(() => requestAnimationFrame(() => N.classList.add(`in`))),
                n(N));
            },
            N.innerHTML ? 300 : 0,
          ));
      }),
    R = (e) => N.querySelector(e),
    z = 0,
    B = (e) => R(`.${e}`),
    V = (e, t, n = k === `en` ? 16 : 38) =>
      new Promise((r) => {
        let i = B(e);
        if (!i) {
          r();
          return;
        }
        clearInterval(z);
        let a = _e(t);
        (i.classList.remove(`thinking`, `gone`),
          i.classList.toggle(`long`, e === `gx-line` && [...a].length > (k === `en` ? 90 : 36)),
          (i.innerHTML = `<span class="on"></span><span class="off" aria-hidden="true">${f(a)}</span><i class="gx-dots" aria-hidden="true"><b></b><b></b><b></b></i>`));
        let o = i.querySelector(`.on`),
          s = i.querySelector(`.off`),
          c = [...a],
          l = 0;
        z = setInterval(() => {
          ((l = Math.min(c.length, l + 1)),
            (o.textContent = c.slice(0, l).join(``)),
            (s.textContent = c.slice(l).join(``)),
            l >= c.length && (clearInterval(z), r()));
        }, n);
      }),
    Ae = (e, t) => {
      let n = B(e);
      n &&
        (clearInterval(z),
        n.classList.remove(`long`),
        (n.innerHTML = `<span class="on">${f(_e(t))}</span><span class="off" aria-hidden="true"></span><i class="gx-dots" aria-hidden="true"><b></b><b></b><b></b></i>`),
        n.classList.add(`thinking`));
    },
    je = (e) => {
      let t = ``,
        n = 0,
        r = !1,
        i = Promise.resolve(),
        a = (e) => {
          let r = t.slice(n),
            a = e ? r.length : Math.max(...[`。`, `！`, `？`, `…`, `.`, `!`, `?`].map((e) => r.lastIndexOf(e))) + 1;
          if (a > 0) {
            let e = r.slice(0, a).trim();
            ((n += a), e && (i = g?.queue?.(we, e, { role: `guide` }) || i));
          }
        },
        o = () => {
          let n = B(e);
          n &&
            (n.classList.remove(`thinking`),
            n.classList.toggle(`long`, [...t.trim()].length > (k === `en` ? 90 : 36)),
            (n.innerHTML = `<span class="on">${f(_e(t))}</span>`));
        };
      return {
        push(e) {
          (r || ((r = !0), clearInterval(z)), (t += e), o(), a(!1));
        },
        end(e) {
          return (e && e !== t && ((t = e), o()), a(!0), t);
        },
        get started() {
          return r;
        },
        said: () => Promise.race([i, E(Math.max(2500, [...t].length * (k === `en` ? 70 : 180)))]),
      };
    },
    H = 0,
    U = ``,
    Me = (e = ``) => `
    <div class="gx-who"><img src="${Ce}" alt="" /><span class="gx-name">${we}</span><span class="gx-q" aria-hidden="true">${[0, 1, 2].map((e) => `<i class="${e < H ? `on` : ``}"></i>`).join(``)}</span><span class="gx-air${e}" aria-hidden="true"><i></i>ON AIR</span><span class="gx-clock">${le()}</span></div>
    <div class="gx-caller"${U ? `` : ` hidden`}>${f(W())}</div>`,
    W = () => (k === `en` ? `On the line · ${U}` : `来电 · ${U}`),
    Ne = (e) => {
      ((H = Math.max(H, Math.min(3, e))),
        R(`.gx-q`)
          ?.querySelectorAll(`i`)
          .forEach((e, t) => e.classList.toggle(`on`, t < H)),
        xe({ lamps: H }));
    },
    Pe = (e) => {
      let t = de(String(e || ``).trim(), k === `en` ? 40 : 12);
      if (!t || t === U) return;
      U = t;
      let n = R(`.gx-caller`);
      n && ((n.textContent = W()), (n.hidden = !1), n.classList.remove(`new`), n.offsetWidth, n.classList.add(`new`));
    },
    Fe = (e = ``) =>
      ke(
        `exchange ${e}`,
        `
    <div class="gx">
      <div class="gx-log">
        ${Me()}
        <p class="gx-intro"></p>
        <p class="gx-line"></p>
        <p class="gx-sub"></p>
        <div class="gx-help" hidden></div>
        <div class="gx-you" hidden><p class="gx-said"></p></div>
      </div>
      <div class="gx-ask"></div>
    </div>`,
      ),
    Ie = () => T.calls[k].map(([e, t, n]) => `<a href="tel:${e}"><b>${f(t)}</b><span>${f(n)}</span></a>`).join(``),
    Le = () => {
      j.helped = !0;
      let e = R(`.gx-help`);
      e && e.hidden && ((e.innerHTML = Ie()), (e.hidden = !1));
    },
    G = (e, { live: t = !1, marks: n = [] } = {}) => {
      let r = R(`.gx-you`),
        i = R(`.gx-said`);
      r && i && ((r.hidden = !e && !t), r.classList.toggle(`live`, t), (i.innerHTML = Re(e || ``, n)));
    };
  function Re(e, t) {
    let n = [];
    for (let r of [...t].sort((e, t) => t.length - e.length)) {
      let t = e.indexOf(r);
      r && t >= 0 && !n.some(([e, n]) => t < n && t + r.length > e) && n.push([t, t + r.length]);
    }
    n.sort((e, t) => e[0] - t[0]);
    let r = ``,
      i = 0;
    return (
      n.forEach(([t, n], a) => {
        ((r += `${f(e.slice(i, t))}<mark style="--k:${a}">${f(e.slice(t, n))}</mark>`), (i = n));
      }),
      r + f(e.slice(i))
    );
  }
  let K = async (e, t = ``) => {
      (F?.cancel(), (F = null));
      let n = R(`.gx-ask`);
      return (n.classList.add(`out`), await E(220), (n.className = `gx-ask ${t}`), (n.innerHTML = e), n);
    },
    q = (e) => R(`.gx-air`)?.classList.toggle(`live`, e),
    J = ({ picks: e = [], skip: t, placeholder: n, sparks: r = !1 }) => `
    ${e.length ? `<div class="gx-picks${r ? ` later` : ``}">${e.map((e, t) => `<button type="button" class="gx-pick" style="--k:${t}">${f(e)}</button>`).join(``)}</div>` : ``}
    <form class="gx-field" autocomplete="off" hidden><textarea rows="1" maxlength="300" placeholder="${f(n)}" enterkeyhint="send"></textarea><button type="submit" class="gx-send" aria-label="${i(`说给她听`, `Tell her`)}" disabled><i></i></button></form>
    <div class="gx-voice">
      <button type="button" class="gx-alt gx-type"><i class="gx-kb" aria-hidden="true"></i><span>${i(`写下来`, `Write it`)}</span></button>
      <button type="button" class="gx-mic" aria-label="${i(`说给她听`, `Tell her`)}"><b class="gx-ring" aria-hidden="true"></b><i class="gx-glyph" aria-hidden="true"></i></button>
      <button type="button" class="gx-alt gx-skip">${f(ge(t))}</button>
    </div>
    <div class="gx-micsay" aria-live="polite">${oe.idle}</div>`,
    Y = (e, { answer: t, skip: n, listen: r = !1, context: i = `` }) => {
      let a = !1,
        o = (n, r) => {
          let i = String(n || ``).trim();
          i &&
            !a &&
            ((a = !0),
            F?.cancel(),
            e.classList.add(`sent`),
            q(!1),
            document.removeEventListener(`keydown`, m),
            r === `voice` && (j.spoke = !0),
            t(i, r));
        };
      e.querySelectorAll(`.gx-pick`).forEach((e) =>
        e.addEventListener(`click`, () => {
          (e.classList.add(`chosen`), s.chime(), navigator.vibrate?.(10), o(e.textContent, `pick`));
        }),
      );
      let c = e.querySelector(`.gx-field`),
        u = c.querySelector(`textarea`),
        d = c.querySelector(`.gx-send`),
        ee = () => {
          ((u.style.height = `auto`),
            (u.style.height = `${Math.min(u.scrollHeight, 132)}px`),
            (d.disabled = !u.value.trim()));
        },
        f = (t = !0) => {
          (F?.cancel(), (c.hidden = !1), e.classList.add(`writing`), t && u.focus());
        };
      (u.addEventListener(`input`, ee),
        c.addEventListener(`submit`, (e) => {
          (e.preventDefault(), u.blur(), o(u.value, `typed`));
        }),
        u.addEventListener(`keydown`, (e) => {
          e.key === `Enter` && !e.shiftKey && !e.isComposing && (e.preventDefault(), u.blur(), o(u.value, `typed`));
        }),
        e.querySelector(`.gx-type`).addEventListener(`click`, () => f()),
        e.querySelector(`.gx-skip`).addEventListener(
          `click`,
          () => {
            a || ((a = !0), F?.cancel(), q(!1), document.removeEventListener(`keydown`, m), n());
          },
          { once: !0 },
        ));
      function m(t) {
        if (!e.isConnected) {
          document.removeEventListener(`keydown`, m);
          return;
        }
        a ||
          t.ctrlKey ||
          t.metaKey ||
          t.altKey ||
          t.key.length !== 1 ||
          /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName || ``) ||
          ((c.hidden || document.activeElement !== u) && f());
      }
      document.addEventListener(`keydown`, m);
      let h = e.querySelector(`.gx-micsay`),
        g = e.querySelector(`.gx-mic`),
        _ = ``;
      return (
        (F = l(g, {
          lang: k,
          context: () => ({ her: i, you: j.turns.at(-1)?.a || `` }),
          onPartial: (e) => {
            ((_ = e), a || G(e, { live: !0 }));
          },
          onText: (e) => {
            ((_ = e), G(e), (h.textContent = ``), o(e, `voice`));
          },
          onState: (t) => {
            a ||
              (e.classList.toggle(`listening`, t === `listening` || t === `pause` || t === `starting`),
              e.classList.toggle(`paused`, t === `pause`),
              t === `starting` && (p.click(!0), q(!0), G(_, { live: !0 })),
              (t === `idle` || t === `short` || t === `silent` || t === `failed` || t === `denied`) &&
                (q(!1), _ || G(``)),
              (h.textContent = oe[t] ?? ``),
              (t === `failed` || t === `denied`) && f(!1),
              t === `denied` && (g.hidden = !0));
          },
        })),
        F.supported ? r && F.start() : ((g.hidden = !0), (h.textContent = ``), f(!1)),
        {
          listen: () => {
            !a && e.isConnected && !e.classList.contains(`writing`) && F?.start();
          },
        }
      );
    };
  return new Promise((n) => {
    let r = Promise.resolve();
    A?.step && A.step !== `title` ? (D(`premise`, { quick: !0 }), b(!0)) : l();
    async function l() {
      ((M = `title`), D(`title`));
      let e = i(`人生广场`, `Life Plaza`);
      (g?.prefetch?.([...m(!1), x], `guide`),
        await ke(
          `title`,
          `
        <div class="gt">
          <div class="gt-top">
            <div class="gt-kicker">${i(`LIFE PLAZA`, `人 生 广 场`)}</div>
            <h1 class="gt-name">${[...e].map((e, t) => `<span style="--i:${t}">${e === ` ` ? `&nbsp;` : e}</span>`).join(``)}</h1>
            <p class="gt-tag">${i(`云上有一座广场。<br/>住在这里的人，都曾很久没被人看见。<br/>他们想听听你的日子。`, `There is a plaza above the clouds.<br/>Everyone who lives here went a long time unseen.<br/>They would like to hear about your days.`)}</p>
          </div>
          <div class="gt-bottom">
            <button class="gt-start" type="button">${i(`推门进去`, `Go in`)}</button>
            <div class="gt-lang" role="group" aria-label="${i(`语言`, `Language`)}"><button type="button" data-l="zh" class="${k === `zh` ? `on` : ``}">中文</button><button type="button" data-l="en" class="${k === `en` ? `on` : ``}">English</button></div>
            <div class="gt-fine">${i(`这几位主人由 AI 扮演，说的事依据他们的生平、书信与著作；若有出入，以史料为准。`, `The hosts here are played by AI, from their own lives, letters and books. Where they differ from the record, the record is right.`)}</div>
          </div>
        </div>`,
        ),
        N.querySelectorAll(`.gt-lang button`).forEach((e) =>
          e.addEventListener(`click`, () => {
            e.dataset.l !== k && t(e.dataset.l);
          }),
        ),
        R(`.gt-start`).addEventListener(
          `click`,
          () => {
            (s.chime(), c(), b(!1));
          },
          { once: !0 },
        ));
    }
    function m(e) {
      if (e) return [i(`我们接着说。`, `Let's go on.`)];
      let t = se?.life && typeof se.life == `object` ? se.life : null,
        n =
          t && !t.care
            ? (Array.isArray(t.details) && t.details.find((e) => e && !w(e))) ||
              (w(t.story) ? `` : pe(t.story).replace(/[。！？!?.]$/, ``))
            : ``,
        r = de(n, fe(n) ? 18 : 48);
      if (r || t?.care)
        return [
          r
            ? i(`你回来了。上回你说起「${r}」。`, `You're back. Last time you told me about "${r}".`)
            : i(`你回来了。`, `You're back.`),
          i(
            `以前我在电台做了二十年夜间节目，现在还是接电话，只是换了个地方。`,
            `I did late-night radio for twenty years; I still take calls — just from here now.`,
          ),
          i(`这回，我们从头说起。`, `Let's start again from the top.`),
        ];
      let a = ue();
      return [
        i(
          `${a ? `这么晚，你来了。` : `你来了。`}以前我在电台做了二十年夜间节目，桌上的保温杯换了七个。`,
          `${a ? `There you are — this late.` : `There you are.`} I did late-night radio for twenty years — went through seven thermos flasks at that desk.`,
        ),
        i(`现在还是接电话，只是换了个地方。`, `I still take calls — just from here now.`),
        i(
          `这儿的规矩只有一条：拿你的一段日子，换他们的一段。`,
          `There's one rule here: a stretch of your days, for a stretch of theirs.`,
        ),
      ];
    }
    async function b(e) {
      ((M = `who`),
        D(`premise`),
        await Fe(`opening`),
        p.tuneIn(),
        setTimeout(() => {
          (q(!1), R(`.gx-air`)?.classList.add(`on`), xe({ air: !0 }));
        }, 900));
      let t = m(e);
      (P([...t, x]), Ne(1));
      let n = await K(
          `
        <div class="gx-kinds">${h.map((e, t) => `<button type="button" class="gx-kind${e.id === `self` ? ` self` : ``}" data-id="${e.id}" style="--k:${t}"><b>${f(e.label[k])}</b>${e.hint?.[k] ? `<small>${f(ge(e.hint[k]))}</small>` : ``}<kbd aria-hidden="true">${t + 1}</kbd></button>`).join(``)}</div>
        <div class="gx-row"><button type="button" class="gx-skip">${i(`先不说了，直接进去`, `Not now — let me in`)}</button></div>`,
          `kinds`,
        ),
        r = !1,
        a = [...n.querySelectorAll(`.gx-kind`)],
        o = (e) => {
          if (r || !n.isConnected) {
            document.removeEventListener(`keydown`, o);
            return;
          }
          let t = Number(e.key);
          e.ctrlKey || e.metaKey || e.altKey || !(t >= 1 && t <= a.length) || (e.preventDefault(), a[t - 1].click());
        };
      if (
        (document.addEventListener(`keydown`, o),
        a.forEach((e) =>
          e.addEventListener(`click`, () => {
            if (r) return;
            ((r = !0), document.removeEventListener(`keydown`, o));
            let t = h.find((t) => t.id === e.dataset.id);
            if (
              (e.classList.add(`chosen`),
              n.classList.add(`sent`),
              s.chime(),
              navigator.vibrate?.(10),
              c(),
              t.id === `self`)
            ) {
              we();
              return;
            }
            ((j.kind = j.picked = t),
              j.turns.push({ q: x, a: t.label[k], k: `who` }),
              Pe(t.label[k]),
              setTimeout(() => (t.wide ? De() : B(t.ack[k])), 380));
          }),
        ),
        n.querySelector(`.gx-skip`).addEventListener(
          `click`,
          () => {
            r || ((r = !0), document.removeEventListener(`keydown`, o), X());
          },
          { once: !0 },
        ),
        await V(`gx-intro`, t.join(k === `en` ? ` ` : ``), k === `en` ? 14 : 30),
        M !== `who`)
      )
        return;
      await V(`gx-line`, x);
      let l = R(`.gx-sub`);
      M === `who` && l && ((l.textContent = ae), l.classList.add(`shown`));
    }
    let oe = (e, t) => {
      let n = String(e || ``)
          .trim()
          .replace(/[。.!！?？]$/, ``),
        r = t?.ack?.[k] || ``;
      return n
        ? k === `en`
          ? `${n[0].toUpperCase()}${n.slice(1)}. ${r || `Noted.`}`
          : `${n}。${r || `记下了。`}`
        : r || i(`嗯，记下了。`, `Mm. Noted.`);
    };
    async function le(e) {
      let t = y[k][(Math.random() * y[k].length) | 0];
      return (
        Ae(`gx-line`, t),
        P(t),
        await K(`<div class="gx-hush" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>`, `hush`),
        await Promise.race([e, E(3500)]),
        { who: j.notes.who, job: _(j.notes.kind), specific: !!j.notes.who && j.notes.specific }
      );
    }
    async function we() {
      ((M = `who-own`),
        R(`.gx-intro`)?.classList.add(`gone`),
        R(`.gx-sub`)?.classList.remove(`shown`),
        V(`gx-line`, x));
      let e = await K(
        J({
          skip: i(`先不说了`, `Not now`),
          placeholder: i(`比如：夜班护士，干了六年`, `e.g. a night-shift nurse, six years now`),
        }),
        `voice`,
      );
      Y(e, {
        listen: !0,
        context: x,
        answer: async (e) => {
          if ((j.turns.push({ q: x, a: e, k: `who` }), G(e), w(e))) {
            W();
            return;
          }
          let t = await le(Z());
          if (j.care) {
            W();
            return;
          }
          if (t.job?.wide && !t.specific) {
            De();
            return;
          }
          B(oe(t.who, t.job));
        },
        skip: () => B(``),
      });
    }
    async function De() {
      ((M = `trade`), (j.trade = !0), Ne(2), g?.stop?.(), R(`.gx-sub`)?.classList.remove(`shown`));
      let e = _(`office`),
        t = P([e.ack[k], S]),
        n = R(`.gx-intro`);
      n && (n.classList.remove(`gone`), (n.textContent = ``));
      let r = await K(
          J({
            picks: v.map((e) => e.label[k]),
            skip: i(`先不说了`, `Not now`),
            placeholder: i(`比如：银行柜员`, `e.g. a bank clerk`),
          }),
          `voice`,
        ),
        a = Y(r, {
          context: S,
          answer: async (e, t) => {
            if ((j.turns.push({ q: S, a: e, k: `job` }), G(e), w(e))) {
              W();
              return;
            }
            let n = Z(),
              r = t === `pick` ? v.find((t) => t.label[k] === e) : null,
              i = r ? { who: e, job: _(r.kind) } : await le(n);
            if (j.care) {
              W();
              return;
            }
            (i.job && !i.job.wide && (j.kind = i.job), r && Pe(e));
            let a = i.who || ([...e].length <= 10 ? e : ``);
            B(oe(a, i.job && !i.job.wide ? i.job : null));
          },
          skip: () => B(``),
        });
      (j.spoke &&
        Promise.resolve(t).then(() => {
          M === `trade` && a.listen();
        }),
        await V(`gx-intro`, e.ack[k], k === `en` ? 14 : 30),
        M === `trade` && (await V(`gx-line`, S)));
    }
    async function B(e) {
      ((M = `open`), Ne(j.trade ? 3 : 2), g?.stop?.(), R(`.gx-sub`)?.classList.remove(`shown`));
      let t = i(
          `一件小事也行。它会跟着你，走进每一段人生。`,
          `A small thing will do. It goes with you into every life.`,
        ),
        n = P([e, C].filter(Boolean));
      g?.prefetch?.(y[k], `guide`);
      let r = R(`.gx-intro`);
      (r && (r.classList.remove(`gone`), (r.textContent = ``)), G(``));
      let a = await K(
          J({
            picks: ce(re[k]).slice(0, 4),
            sparks: !0,
            skip: i(`先不说了，直接进去`, `Not now — let me in`),
            placeholder: i(`说给我听……`, `Tell me…`),
          }),
          `voice`,
        ),
        o = Y(a, {
          context: C,
          answer: (e) => {
            if ((j.turns.push({ q: C, a: e, k: `open` }), w(e))) {
              W();
              return;
            }
            (Z(), H());
          },
          skip: () => X(),
        });
      if (
        (j.spoke &&
          Promise.resolve(n).then(() => {
            M === `open` && o.listen();
          }),
        setTimeout(() => a.querySelector(`.gx-picks`)?.classList.add(`shown`), 2600),
        e ? await V(`gx-intro`, e, k === `en` ? 14 : 30) : r?.classList.add(`gone`),
        M !== `open` || (await V(`gx-line`, C), M !== `open`))
      )
        return;
      let s = R(`.gx-sub`);
      s && ((s.textContent = t), s.classList.add(`shown`));
    }
    async function H() {
      ((M = `listening`),
        D(`listening`),
        g?.stop?.(),
        G(j.turns.at(-1).a, { marks: j.notes.details }),
        R(`.gx-intro`)?.classList.add(`gone`),
        R(`.gx-sub`)?.classList.remove(`shown`));
      let e = y[k][(Math.random() * y[k].length) | 0];
      (Ae(`gx-line`, e),
        P(e),
        await K(`<div class="gx-hush" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>`, `hush`));
      let t = je(`gx-line`),
        n = setTimeout(() => {
          t.started || Ae(`gx-line`, i(`这句话，我得想一想。`, `Let me think about that properly.`));
        }, 2600),
        a = j.trade,
        o = he(j.turns.at(-1).a)
          ? await E(700).then(() => ({
              reply: a
                ? i(`嗯，我记下了。`, `Mm. I'll remember that.`)
                : i(`那就说说，你现在手边有什么？`, `Then tell me what's within reach of you right now.`),
              chips: [],
            }))
          : await U($(), t, a);
      (clearTimeout(n), o?.care && (j.care = !0));
      let s =
        o?.reply ||
        (a
          ? i(`嗯，我记下了。`, `Mm. I'll remember that.`)
          : i(`嗯，我记下了。那会儿，你手边有什么？`, `I'll remember that. What was within reach, just then?`));
      if ((t.end(s), o || P(s), o?.care)) {
        (Le(), Re(s));
        return;
      }
      if ((await Promise.race([r, E(1500)]), j.care)) {
        W();
        return;
      }
      if (a) {
        (await Promise.all([t.said(), E(1800)]), M === `listening` && X());
        return;
      }
      ((M = `answer`), Ne(3));
      let c = o?.chips?.length
          ? o.chips
          : i(`手机|一杯水|什么也没有`, `My phone|A glass of water|Nothing much`).split(`|`),
        l = await K(
          J({
            picks: c,
            skip: i(`就到这儿吧`, `That's enough for now`),
            placeholder: i(`或者，用你自己的话……`, `Or in your own words…`),
          }),
          `voice`,
        ),
        u = () => (j.care && !j.helped ? W() : X()),
        d = Y(l, {
          context: s,
          answer: (e) => {
            if ((j.turns.push({ q: s, a: e, k: `more` }), w(e))) {
              W();
              return;
            }
            (Z(), u());
          },
          skip: u,
        });
      j.spoke &&
        t.said().then(() => {
          M === `answer` && d.listen();
        });
    }
    function U(e, t, n = !1) {
      let r = !1,
        i = o
          .guideTalk({ lang: k, life: e, ...(n ? { close: !0 } : {}) }, (e) => {
            r || t.push(e);
          })
          .catch(() => null);
      return new Promise((e) => {
        (i.then((t) => {
          r || e(t);
        }),
          setTimeout(() => {
            t.started || ((r = !0), e(null));
          }, 8e3),
          setTimeout(() => {
            ((r = !0), e(null));
          }, 25e3));
      });
    }
    async function W() {
      ((M = `care`),
        (j.care = !0),
        D(`listening`),
        g?.stop?.(),
        R(`.gx-air`)?.classList.remove(`on`, `live`),
        xe({ air: !1 }),
        R(`.gx-intro`)?.classList.add(`gone`),
        R(`.gx-sub`)?.classList.remove(`shown`),
        G(j.turns.at(-1)?.a || ``),
        Le(),
        P(T.line[k]));
      let e = V(`gx-line`, T.line[k], k === `en` ? 24 : 60);
      (await Re(T.line[k]), await e);
    }
    async function Re(e) {
      M = `care`;
      let t = await K(J({ skip: T.on[k], placeholder: T.more[k] }), `voice`);
      Y(t, {
        context: e,
        answer: (t) => {
          (j.turns.push({ q: e, a: t, k: `care` }), ze());
        },
        skip: () => X(),
      });
    }
    async function ze() {
      ((M = `care-listening`), g?.stop?.(), G(j.turns.at(-1).a));
      let e = y[k][(Math.random() * y[k].length) | 0];
      (Ae(`gx-line`, e),
        P(e),
        await K(`<div class="gx-hush" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>`, `hush`));
      let t = je(`gx-line`),
        n = await U({ ...$(), turns: j.turns.slice(-5) }, t),
        r = n?.reply || T.listening[k];
      (t.end(r), n || P(r), Re(r));
    }
    async function X() {
      ((M = `thinking`), D(`thinking`), g?.stop?.());
      let t = j.turns.some((e) => e.k === `open`),
        n = j.care
          ? T.thanks[k]
          : t
            ? i(`我把你说的，写进你的护照里。`, `I'm writing what you told me into your passport.`)
            : i(
                `不说也没关系。护照我先给你写上，空着的地方，以后再填。`,
                `That's all right. I'll write your passport now; the empty parts can wait.`,
              ),
        c = j.care
          ? E(1600).then(() => null)
          : Promise.race([
              o
                .guide({ lang: k, identity: j.notes.who || j.kind?.label[k] || ``, note: Q().slice(0, 200), life: $() })
                .catch(() => null),
              E(9e3).then(() => null),
            ]);
      (await ke(
        `exchange faces`,
        `
        <div class="gx">
          <div class="gx-log">
            ${Me(j.care ? `` : ` on`)}
            <p class="gx-intro shown">${f(_e(n))}</p>
            <div class="gx-song" hidden></div>
            <p class="gx-line">${i(`挑一张最像你的脸。`, `Choose the face most like yours.`)}</p>
            <p class="gx-sub shown">${i(`广场上的人，会这样看见你。`, `This is how the plaza will see you.`)}</p>
          </div>
          <div class="gx-cards">${e.map((e, t) => `<button type="button" class="gx-card" data-id="${e}" style="--k:${t}"><img src="${a(`portraits/${e}.jpg`)}" alt="" /></button>`).join(``)}</div>
          <div class="gx-writing" aria-live="polite"><i aria-hidden="true"></i><span>${i(`她在写你的护照……`, `She is writing your passport…`)}</span></div>
          <div class="gx-notes" hidden><div class="gx-notes-k">${i(`她记下的`, `What she wrote down`)}</div><div class="gx-notes-l"></div></div>
        </div>`,
      ),
        Be());
      let l = Date.now(),
        u = null,
        d = ``,
        ee = P(n),
        m = p.pen();
      t &&
        !j.care &&
        Promise.race([r, E(2600)]).then(async () => {
          let e = R(`.gx-song`);
          if (j.care || !e || M === `passport`) return;
          let t = j.notes.quote || pe(Q());
          d = me(t) ? t : ``;
          let n = j.notes.who,
            r = n
              ? k === `en`
                ? n
                : `一位${n.replace(/^一位/, ``)}`
              : j.kind?.to?.[k] || i(`刚才打进来的你`, `you, who just rang in`),
            a = k === `en` ? `This next one goes out to ${r}.` : `下面这首，送给${r}。`;
          ((e.innerHTML = `<div class="gx-disc" aria-hidden="true"><i></i></div><div class="gx-song-t"><div class="gx-song-to">${f(a)}</div>${d ? `<blockquote class="gx-quote">${k === `en` ? `“${f(d)}”` : `「${f(d)}」`}</blockquote>` : ``}</div><div class="gx-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`),
            (e.hidden = !1),
            Be(),
            await Promise.race([ee, E(2600)]),
            M !== `passport` &&
              (P([a, d && (k === `en` ? `You said: "${d}"` : `你说：「${d}」`)].filter(Boolean)),
              g?.muted || (u = p.song())));
        });
      let h = null;
      (c.then((e) => {
        ((h = { g: e }), m.stop());
        let t = R(`.gx-writing span`);
        (t && (t.textContent = i(`写好了。`, `It's written.`)), R(`.gx-writing`)?.classList.add(`done`));
      }),
        N.querySelectorAll(`.gx-card`).forEach((e) =>
          e.addEventListener(`click`, async () => {
            if (M !== `thinking`) return;
            ((M = `picked`),
              N.querySelectorAll(`.gx-card`).forEach((t) => t.classList.toggle(`chosen`, t === e)),
              (j.avatar = e.dataset.id),
              navigator.vibrate?.(12),
              s.chime(),
              be(j.avatar));
            let n = Date.now(),
              r = h ? h.g : await c;
            (await E(Math.max(0, 700 - (Date.now() - n), t && !j.care ? 6400 - (Date.now() - l) : 0)),
              m.stop(),
              Ve(r, u));
          }),
        ));
    }
    function Z() {
      return (
        (r = ye(`/guide/extract`, { lang: k, life: $() }, 1e4).then((e) => {
          if (!e) return;
          e.care && (j.care = !0);
          let t = j.notes;
          for (let n of e.details || []) ve(t.details, n);
          for (let n of [`who`, `kind`, `field`, `wish`, `mood`, `quote`]) e[n] && (t[n] = e[n]);
          e.who && (t.specific = !!e.specific);
          let n = _(e.kind);
          (n && (!j.kind || (j.kind.wide && !n.wide)) && (j.kind = n), Pe(t.who || j.kind?.label?.[k]));
          let r = j.turns.at(-1)?.a || ``,
            i = R(`.gx-you`);
          (!j.care &&
            i &&
            !i.hidden &&
            !i.classList.contains(`live`) &&
            R(`.gx-said`)?.textContent === r &&
            G(r, { marks: t.details }),
            Be());
        })),
        r
      );
    }
    function Be() {
      let e = R(`.gx-notes`),
        t = R(`.gx-notes-l`);
      if (!e || !t) return;
      let n = j.care ? [] : u(j.notes.details, 5);
      [...t.children].forEach((e) => {
        n.includes(e.textContent) || e.remove();
      });
      let r = new Set([...t.children].map((e) => e.textContent));
      (n
        .filter((e) => !r.has(e))
        .forEach((e, n) => {
          let r = document.createElement(`span`);
          (r.style.setProperty(`--k`, String(n)), (r.textContent = e), t.appendChild(r));
        }),
        (e.hidden = !t.children.length));
    }
    let Q = () => j.turns.find((e) => e.k === `open`)?.a || ``;
    function $(e = null) {
      let t = j.notes,
        n = j.turns.find((e) => e.k === `more`),
        r = t.who || e?.who || ``;
      return {
        domain: j.picked ? j.picked.label[k] : ``,
        role: r,
        who: r,
        field: t.field,
        story: Q(),
        ask: n?.q || ``,
        answer: n?.a || ``,
        turns: j.turns.map((e) => ({ ...e })),
        details: [...t.details],
        wish: t.wish,
        mood: t.mood,
        ...(e ? { title: e.title || ``, line: e.line || ``, unseen: e.unseen || ``, keywords: e.keywords || [] } : {}),
        ...(j.care ? { care: !0 } : {}),
      };
    }
    async function Ve(e, t) {
      M = `passport`;
      let n = j.care,
        r = Object.values(O).filter((e) => e.open),
        a = n ? null : ne(j.kind, j.notes.who),
        o = a && O[a.life]?.open ? a.life : ``,
        c = !n && O[e?.suggest]?.open ? e.suggest : ``,
        l = c || o || r[0]?.id || `melies`,
        u = n ? `` : l === c ? e?.why || (l === o ? a.why[k] : te[l]?.[k] || ``) : l === o ? a.why[k] : ``,
        p = !!Q(),
        m = j.notes.quote || pe(Q()),
        h = me(m) ? m : ``,
        g = n
          ? {
              title: i(`远道而来的人`, `A traveller from afar`),
              line: T.page[k],
              keywords: [],
              unseen: ``,
              suggest: l,
              why: ``,
              at: Date.now(),
            }
          : {
              title: e?.title || e?.who || j.notes.who || i(`远道而来的人`, `A traveller from afar`),
              line:
                e?.line ||
                (p && h
                  ? k === `en`
                    ? `“${h}”`
                    : `「${h}」`
                  : i(
                      `你没多说，我也就不多写。这一页先空着，等你回来填。`,
                      `You didn't say much, so I haven't written much. This page can wait for you.`,
                    )),
              keywords: e?.keywords?.length ? e.keywords : [],
              unseen: e?.unseen || ``,
              suggest: l,
              why: u,
              at: Date.now(),
            },
        _ = n ? (j.helped ? T.bye[k] : T.line[k]) : ie[k];
      D(`passport`, n ? { suggest: l } : { ...e, suggest: l });
      let v = O[l],
        re = $(n ? null : e),
        y = j.notes.who || (n ? `` : e?.who) || j.kind?.label[k] || ``;
      (await ke(
        `passport`,
        `
        <div class="gp">
          <div class="gp-say"><img src="${Ce}" alt="" /><span>${f(ge(_))}</span></div>
          ${n ? `<div class="gp-help">${Ie()}</div>` : ``}
          ${d({ passport: g, me: { avatar: j.avatar || `v2`, identity: y, life: re }, lives: O, seen: {}, actions: `<div class="pp-actions"><button type="button" class="pp-go">${i(`走进广场`, `Into the plaza`)}</button>${v ? `<button type="button" class="pp-direct">${i(`直接去${ee(v)}`, `Straight to ${ee(v).replace(/^Your/, `your`)}`)}</button>` : ``}</div>` })}
        </div>`,
      ),
        n && (j.helped = !0),
        setTimeout(() => {
          (n || (s.poof(), s.sparkle(), navigator.vibrate?.([12, 40, 18])), R(`.pp`)?.classList.add(`stamped`));
        }, 900),
        setTimeout(() => t?.fade(2.4), 2600),
        P([_, u].filter(Boolean)));
      let b = { suggest: l, why: g.why, passport: g, life: re, who: y };
      (R(`.pp-go`).addEventListener(
        `click`,
        () => {
          (t?.fade(0.6), He(b, !1));
        },
        { once: !0 },
      ),
        R(`.pp-direct`)?.addEventListener(
          `click`,
          () => {
            (t?.fade(0.6), He(b, !0));
          },
          { once: !0 },
        ));
    }
    function He(e, t) {
      (clearInterval(z),
        clearInterval(Ee),
        Oe?.disconnect(),
        xe({ air: !1 }),
        F?.cancel(),
        g?.stop(),
        Se(),
        window.removeEventListener(`lp-mic`, Te),
        I?.removeEventListener(`resize`, L),
        I?.removeEventListener(`scroll`, L),
        document.body.classList.remove(`gating`),
        N.classList.remove(`in`),
        setTimeout(() => N.remove(), 450));
      let r = e?.life || $();
      n({
        avatar: j.avatar || `v2`,
        identity: e?.who || r.who || r.domain || ``,
        note: (r.story || ``).slice(0, 200),
        life: r,
        suggest: e?.suggest || `melies`,
        why: e?.why || ``,
        passport: e?.passport || null,
        go: !!t,
        gate: 3,
      });
    }
  });
}
export { be as runLanding };
