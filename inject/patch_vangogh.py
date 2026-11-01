#!/usr/bin/env python3
"""Van Gogh's room for learners: his fixed lines for the English page (HSK 1–3) become simple Chinese, object labels
become bilingual, and the window becomes an instruction ("请你把窗户打开。") the learner carries out.

Every pair must match exactly once (or already be applied); run it again and it changes nothing. Kept as the list of
what changed, to carry over to the original source once it is back.
"""
import pathlib
import sys

ASSETS = pathlib.Path(__file__).resolve().parent.parent / "www/life-learn/assets"
target = next(ASSETS.glob("vangogh-*.js"))

PAIRS = [
    # The letter he reads while the visitor colours the room.
    ("en: `The walls are pale violet.`", "en: `墙是紫色的。`"),
    ("en: `The floor is of red tiles.`", "en: `地上是红色的。`"),
    ("en: `The wood of the bed and the chairs is the yellow of fresh butter.`", "en: `床和椅子是黄色的。`"),
    ("en: `The blanket scarlet.`", "en: `被子是红色的。`"),
    ("en: `The window green.`", "en: `窗户是绿色的。`"),
    # The five things in the room.
    ("label: { zh: `桌上的向日葵`, en: `Sunflowers on the table` }", "label: { zh: `桌上的向日葵`, en: `向日葵 · Sunflowers` }"),
    ("en: [`In August I painted sunflowers. They wilt fast, so I start at first light and paint them in one go.`]",
     "en: [`这是向日葵。八月，我画了很多向日葵。`]"),
    ("en: [`I paint them with the gusto of a Marseillais eating bouillabaisse.`]", "en: [`黄色，像太阳。我很喜欢黄色。`]"),
    ("label: { zh: `南方的窗`, en: `The southern window` }", "label: { zh: `南方的窗`, en: `窗户 · Window` }"),
    ("zh: [`我二月从巴黎来到阿尔勒，是来找日本那样的光的。`]", "zh: [`请你把窗户打开。`, `我二月从巴黎来到阿尔勒，是来找日本那样的光的。`]"),
    ("en: [`I came down from Paris in February, looking for a light like Japan's.`]", "en: [`请你把窗户打开。`]"),
    ("text: q(r, `按住，推开窗`, `Hold to open`)", "text: q(r, `按住，把窗户打开`, `把窗户打开 · Hold to open`)"),
    ("""        en: [
          `The sun here is sulphur, and the shadows are blue and violet.`,
          `I only began to paint at twenty-seven. So far I have sold almost nothing.`,
        ],""",
     """        en: [`你看，太阳进来了。`, `我二十七岁才开始画画。我的画，没有人买。`],"""),
    ("label: { zh: `黄色的床`, en: `The yellow bed` }", "label: { zh: `黄色的床`, en: `床 · Bed` }"),
    ("en: [`This is the bed I painted. Plain pine, good and solid, the colour of fresh butter.`]",
     "en: [`这是我的床。床是黄色的。我想在这里好好休息。`]"),
    ("label: { zh: `墙上的镜子`, en: `The mirror` }", "label: { zh: `墙上的镜子`, en: `镜子 · Mirror` }"),
    ("""        en: [
          `I can't pay models, so I often paint myself in this mirror.`,
          `In September I painted myself as a Japanese monk, head shaved, and sent it to Gauguin.`,
        ],""",
     """        en: [`我没有钱请人来，就看着镜子画我自己。`, `九月，我画了我自己，送给朋友高更。`],"""),
    ("label: { zh: `墙上的朋友`, en: `Friends on the wall` }", "label: { zh: `墙上的朋友`, en: `朋友 · Friends` }"),
    ("""        en: [
          `My friends are on the wall: Eugène Boch the poet, and Lieutenant Milliet of the Zouaves.`,
          `Behind Boch's head I didn't paint the ordinary wall. I painted infinity: the deepest blue, with stars in it.`,
        ],""",
     """        en: [`墙上是我的朋友。`, `我在朋友后面画了蓝色的天，天上有很多星星。`],"""),
    # Coming in.
    ("""    en: [
      `Ah — come in, come in. Mind the floor, it slopes a little.`,
      `Have a look round. Anything that lights up, you can touch.`,
    ],""",
     """    en: [`你好，请进，请进！`, `你看看吧。亮的东西，你都可以点。`],"""),
    # What he says over the palette.
    ("""    en: [
      (e) => `${e.name} first, while it is still bright.`,
      (e) => `Then ${J[e.id].against.en} against it. Yellow with violet, blue with orange, red with green.`,
      () => `Theo says I paint too fast. But the light doesn't wait.`,
    ],""",
     """    en: [
      () => `先用这个颜色。`,
      () => `再用另一个颜色。黄和紫，蓝和橙，红和绿，放在一起很好看。`,
      () => `提奥说我画得太快。可是太阳不等人。`,
    ],"""),
    # What the visitor may ask him, and when he loses the thread.
    ("en: [`What is Theo like?`, `Why did you come to Arles?`, `Do you have enough paint?`]",
     "en: [`你喜欢什么颜色？`, `提奥是谁？`, `你为什么来这里？`]"),
    ("en: `Ah — my head is all colour, I lost the words. Ask me again?`", "en: `对不起，我没听清楚。请你再说一次？`"),
    # The letter, the chair, goodbye.
    ("en: `Come to the door, where I stood to paint this room. I'll read you my letter; you give it its colours.`",
     "en: `请到门口来。我读信，你来画颜色。`"),
    ("""          en: [
            `The paint is laid on thick; it dries slowly. Go and look at the colours you gave the room — I'll call you.`,
          ],""",
     """          en: [`颜色还没有干。你去看看，好了我叫你。`],"""),
    ("en: [`I lay the paint on thick, so it dries slowly. A little longer.`]", "en: [`还没有干。请你再等一下。`]"),
    ("en: `It's finished. Come and see — this is your chair.`", "en: `画好了！来看，这是你的椅子。`"),
    ("en: `Oh no — this canvas is no good, the paint has run… Shall we try again?`", "en: `不好，画坏了……我们再画一次，好吗？`"),
    ("en: `Go on. I'll keep your chair for you.`", "en: `再见！你的椅子，我给你留着。`"),
    ("en: `Leaving already? … Well. Come back whenever you want some colour.`", "en: `你要走了吗？好。想看颜色的时候，再来。`"),
]

text = target.read_text(encoding="utf-8")
changed = skipped = 0
for old, new in PAIRS:
    if text.count(new) and not text.count(old):
        skipped += 1
        continue
    n = text.count(old)
    if n != 1:
        sys.exit(f"expected exactly one match, found {n}: {old[:80]!r}")
    text = text.replace(old, new)
    changed += 1
target.write_text(text, encoding="utf-8")
print(f"{target.name}: {changed} changed, {skipped} already applied")
