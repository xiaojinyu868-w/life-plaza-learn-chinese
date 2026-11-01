#!/usr/bin/env python3
"""The learning branch's film (2–3 min, Chinese narration, Chinese + English subtitles).

Footage: the Life Plaza promo film recorded on a real device (media/life-plaza-film-zh.mp4); over it, stills of the
learner's layer (video/shots.mjs, real lines the hosts said in testing). Narration: the guide's voice through the
learning branch's own /tts. Each scene lasts as long as its line. Everything runs at the lowest priority.

Usage: python3 video/make.py            → video/out/life-plaza-learn-film.mp4 (+ .srt) and docs/video-storyboard.md
"""
import json
import pathlib
import subprocess
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILD = ROOT / "video" / "build"
UI = BUILD / "ui"
OUT = ROOT / "video" / "out"
FILM = ROOT / "www/life-learn/media/life-plaza-film-zh.mp4"
TTS = "http://127.0.0.1:8794/life/api/tts"
W, H, FPS = 1920, 1080, 30
NICE = ["nice", "-n", "19"]
FF = NICE + ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-threads", "2"]

# Each scene: narration (zh, en; `say` when the voice should read it differently), a background (a clip of the film,
# a still of it slowly pushed in, or an image), the layer's stills over it (from/to: fractions of the scene).
SCENES = [
    dict(zh="人生广场，学中文。", en="Life Plaza — learn Chinese.", bg=("clip", 26.0, 5.0), title=True),
    dict(zh="学中文最难的，不是记住一个词，而是找到一个想开口的理由。", en="The hardest part of learning Chinese isn't remembering words — it's finding a reason to speak.", bg=("clip", 20.0, 8.0)),
    dict(zh="在人生广场，学习者走进别人的人生，用中文和那里的人聊天。", en="In Life Plaza, learners walk into other people's lives and chat in Chinese with the people there.", bg=("clip", 97.0, 6.0)),
    dict(zh="进门先选水平。难度由 HSK 3.0 大纲控制，每个人物都照你的等级说话。", say="进门先选水平。难度由 HSK 三点零 大纲控制，每个人物都照你的等级说话。",
         en="First, choose your level. Difficulty follows the HSK 3.0 syllabus — every character speaks at your level.", bg=("image", "ui/gate.png")),
    dict(zh="门口的引路人，当过二十年深夜电台主持人。她会问你：为什么学中文？喜欢什么？", en="At the gate, a former late-night radio host asks: why are you learning Chinese? What do you love?",
         bg=("clip", 4.0, 12.0), overlays=[dict(img="cap-guide.png", y=50, scale=0.95, frm=0.25)]),
    dict(zh="你说喜欢画画，她就送你去梵高的屋子。", en="Say you love painting, and she sends you to Van Gogh's room.", bg=("clip", 44.0, 4.5)),
    dict(zh="梵高说：请你把窗户打开。你推开窗，他会说：你把窗户打开了。听懂了，就去做。", en="Van Gogh says: please open the window. You open it, and he says: you opened the window. Understand it — then do it.",
         bg=("clip", 48.0, 8.0), speed=0.75, overlays=[dict(img="cap-vg-tpr.png", y=50, scale=0.95, frm=0.05, to=0.5), dict(img="cap-vg-window.png", y=50, scale=0.95, frm=0.5)]),
    dict(zh="他说的每一句话，都配着拼音和英文；超出你水平的新词，会用橙色标出来。", en="Every line comes with pinyin and English; words above your level are marked in orange.",
         bg=("still", 50.0), overlays=[dict(img="cap-vg-window.png", y=180, scale=1.1, frm=0.08)]),
    dict(zh="点一下生词，就能看到它的等级、例句和发音，还有一条词汇链，告诉你下一步可以学什么。", en="Tap a new word to see its level, an example and how it sounds — plus a word chain of what to learn next.",
         bg=("still", 52.5), overlays=[dict(img="cap-vg-tci.png", x="left", y=50, scale=0.74, frm=0.0), dict(img="card-huangse.png", x="right", y=110, height=760, frm=0.15)]),
    dict(zh="他会循环提问：你喜欢黄色还是红色？一次只教一个新词，用的都是屋子里看得见的东西。", en="He asks circling questions — do you like yellow or red? One new word at a time, using things you can see in the room.",
         bg=("still", 49.0), overlays=[dict(img="cap-vg-tci.png", y=180, scale=1.1, frm=0.08)]),
    dict(zh="问他：把门打开和门打开了，有什么不一样？他不讲语法术语，只用一个例子回答你。", en="Ask him how 把门打开 differs from 门打开了 — no grammar terms, just one example.",
         bg=("still", 54.0), overlays=[dict(img="cap-vg-grammar.png", y=180, scale=1.1, frm=0.08)]),
    dict(zh="你写错了，系统只给一到两条建议，带着拼音，让你自己再写一遍。", en="Make a mistake, and you get one or two suggestions with pinyin — then you write it again yourself.",
         bg=("still", 51.0), overlays=[dict(img="fix.png", x="center", y=150, scale=1.1, frm=0.06, to=0.68), dict(img="fix-done.png", x="center", y=300, scale=1.4, frm=0.68)]),
    dict(zh="喜欢电影和拍照的人，可以去梅里爱的片场。", en="If you love film and photography, visit Méliès's studio.",
         bg=("clip", 32.0, 8.0), overlays=[dict(img="cap-melies.png", y=50, scale=0.95, frm=0.2)]),
    dict(zh="对中医感兴趣，就去找李时珍：用手机闪光灯测心跳，他给你号脉、开方子。", en="Curious about Chinese medicine? Li Shizhen reads your pulse — measured with your phone's flash — and writes you a prescription.",
         bg=("clip", 58.0, 12.0), overlays=[dict(img="cap-lishizhen.png", y=50, scale=0.95, frm=0.25)]),
    dict(zh="小朋友可以去五行山，把孙悟空救出来。", en="Children can climb the Five Elements Mountain and set the Monkey King free.",
         bg=("clip", 74.0, 8.0), overlays=[dict(img="cap-xiyou.png", y=50, scale=0.95, frm=0.25)]),
    dict(zh="每个来过的人，都会留下一段自己的日子，变成下一个人可以玩的小游戏。", en="Everyone who visits leaves a piece of their own life behind — a small game for the next person.", bg=("clip", 85.0, 10.0)),
    dict(zh="别的产品，剧本写在你来之前；人生广场的剧本，写在你开口之后。", en="Other products write the script before you arrive. Life Plaza writes it after you speak.", bg=("clip", 108.0, 8.0)),
    dict(zh="人生广场，学中文。", en="Life Plaza · Learn Chinese", bg=("color", "1d1924"), end=True),
]


def run(cmd):
    subprocess.run(cmd, check=True)


def duration(path):
    out = subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(path)])
    return float(out.decode().strip())


def fontfile(pattern):
    return subprocess.check_output(["fc-match", "-f", "%{file}", pattern]).decode().strip()


def tts(text, path):
    if path.exists() and path.stat().st_size > 1000:
        return
    req = urllib.request.Request(TTS, data=json.dumps({"text": text, "role": "guide", "lang": "zh"}).encode(), headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as r:
        path.write_bytes(r.read())


def still(t):
    path = BUILD / f"frame-{t:06.2f}.png"
    if not path.exists():
        run(FF + ["-ss", f"{t:.2f}", "-i", str(FILM), "-frames:v", "1", str(path)])
    return path


def textfile(name, text):
    path = BUILD / f"{name}.txt"
    path.write_text(text, encoding="utf-8")
    return path


def scene(i, s, D, voice):
    out = BUILD / f"scene-{i:02d}.mp4"
    if out.exists():
        try:
            if abs(duration(out) - D) < 0.08:
                return out
        except subprocess.CalledProcessError:
            pass
    args, filters = [], []
    kind = s["bg"][0]
    if kind == "clip":
        _, start, length = s["bg"]
        speed = s.get("speed", 1.0)
        args += ["-ss", f"{start:.2f}", "-t", f"{length:.2f}", "-i", str(FILM)]
        filters.append(f"[0:v]scale={W}:{H},setsar=1,setpts={1 / speed:.4f}*PTS,fps={FPS},tpad=stop_mode=clone:stop_duration={D:.2f},trim=duration={D:.2f},setpts=PTS-STARTPTS[b0]")
    elif kind == "color":
        args += ["-f", "lavfi", "-t", f"{D:.2f}", "-i", f"color=c=0x{s['bg'][1]}:s={W}x{H}:r={FPS}"]
        filters.append("[0:v]setsar=1,format=yuv420p[b0]")
    else:
        img = still(s["bg"][1]) if kind == "still" else UI / pathlib.Path(s["bg"][1]).name
        args += ["-loop", "1", "-framerate", str(FPS), "-t", f"{D:.2f}", "-i", str(img)]
        filters.append(f"[0:v]scale={W}:{H},setsar=1,zoompan=z='min(zoom+0.0006,1.12)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s={W}x{H}:fps={FPS},trim=duration={D:.2f}[b0]")
    base = "b0"
    for k, o in enumerate(s.get("overlays", []), start=1):
        args += ["-loop", "1", "-framerate", str(FPS), "-t", f"{D:.2f}", "-i", str(UI / o["img"])]
        a, b = o.get("frm", 0.0) * D, o.get("to", 1.0) * D
        size = f"scale=-1:{o['height']}" if "height" in o else f"scale=iw*{o.get('scale', 1.0):.3f}:-1"
        fade_out = f",fade=out:st={b - 0.3:.2f}:d=0.3:alpha=1" if o.get("to", 1.0) < 1.0 else ""
        filters.append(f"[{k}:v]format=rgba,{size},fade=in:st={a:.2f}:d=0.4:alpha=1{fade_out}[o{k}]")
        x = {"center": "(W-w)/2", "right": "W-w-90", "left": "90"}.get(o.get("x", "center"), "(W-w)/2")
        filters.append(f"[{base}][o{k}]overlay=x={x}:y={o.get('y', 50)}:enable='between(t,{a:.2f},{b:.2f})'[b{k}]")
        base = f"b{k}"
    if s.get("title") or s.get("end"):
        serif, sans = fontfile("Noto Serif SC:weight=200"), fontfile("Noto Sans SC")
        big = textfile(f"t{i}a", "人生广场 · 学中文")
        small = textfile(f"t{i}b", "Life Plaza · Learn Chinese" if s.get("title") else "capture.meetmind.online/life-learn")
        y = "h*0.36"
        shade = "drawbox=x=0:y=0:w=iw:h=ih:color=black@0.3:t=fill," if s.get("title") else ""
        draw = f"{shade}drawtext=fontfile={serif}:textfile={big}:fontsize=104:fontcolor=white:x=(w-text_w)/2:y={y}:shadowcolor=black@0.55:shadowx=3:shadowy=3,drawtext=fontfile={sans}:textfile={small}:fontsize=40:fontcolor=white@0.92:x=(w-text_w)/2:y={y}+140:shadowcolor=black@0.55:shadowx=2:shadowy=2"
        if s.get("end"):
            credit = textfile(f"t{i}c", "Level control: HSK 3.0 syllabus data by Gushi (gushichinese.com), CC BY-SA 4.0")
            draw += f",drawtext=fontfile={sans}:textfile={credit}:fontsize=24:fontcolor=white@0.7:x=(w-text_w)/2:y=h-240"
        filters.append(f"[{base}]{draw}[bt]")
        base = "bt"
    n = len(s.get("overlays", [])) + 1
    args += ["-i", str(voice)]
    filters.append(f"[{n}:a]aformat=sample_rates=48000:channel_layouts=stereo,adelay=300|300,apad,atrim=duration={D:.2f}[a]")
    run(FF + args + ["-filter_complex", ";".join(filters), "-map", f"[{base}]", "-map", "[a]", "-t", f"{D:.2f}", "-r", str(FPS),
                     "-c:v", "libx264", "-preset", "veryfast", "-crf", "21", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", str(out)])
    return out


def stamp(t, comma=False):
    h, m, sec = int(t // 3600), int(t % 3600 // 60), t % 60
    return f"{h:02d}:{m:02d}:{sec:06.3f}".replace(".", ",") if comma else f"{h}:{m:02d}:{sec:05.2f}"


def main():
    BUILD.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    parts, cues, t = [], [], 0.0
    for i, s in enumerate(SCENES, start=1):
        voice = BUILD / f"voice-{i:02d}.mp3"
        tts(s.get("say", s["zh"]), voice)
        D = round(max(duration(voice) + 0.9, 3.5), 2)
        print(f"scene {i:02d} {D:5.2f}s  {s['zh']}", flush=True)
        parts.append(scene(i, s, D, voice))
        cues.append((t + 0.3, t + D - 0.15, s["zh"], s["en"], s))
        t += D
    listing = BUILD / "parts.txt"
    listing.write_text("".join(f"file '{p}'\n" for p in parts))
    joined = BUILD / "joined.mp4"
    run(FF + ["-f", "concat", "-safe", "0", "-i", str(listing), "-c", "copy", str(joined)])

    ass = BUILD / "film.ass"
    head = """[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Sub,Noto Sans SC,50,&H00FFFFFF,&H000000FF,&H00201810,&H78000000,0,0,0,0,100,100,1,0,1,3,1,2,150,150,46,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    events = "".join(f"Dialogue: 0,{stamp(a)},{stamp(b)},Sub,,0,0,0,,{zh}\\N{{\\fs31\\b0\\c&HE6E6E6&}}{en}\n" for a, b, zh, en, _ in cues)
    ass.write_text(head + events, encoding="utf-8")
    srt = OUT / "life-plaza-learn-film.srt"
    srt.write_text("".join(f"{k}\n{stamp(a, True)} --> {stamp(b, True)}\n{zh}\n{en}\n\n" for k, (a, b, zh, en, _) in enumerate(cues, start=1)), encoding="utf-8")

    # A dark band under the subtitles: the promo film has its own narration burned in at the bottom, which says
    # something else; the band covers it. Not over the title and the last card (their text sits low).
    band = BUILD / "band.png"
    if not band.exists():
        run(FF + ["-f", "lavfi", "-i", "color=c=black:s=1920x320,format=rgba,geq=r=0:g=0:b=0:a='min(255,255*1.15*pow(Y/320,1.1))'", "-frames:v", "1", str(band)])
    t2 = t - (cues[-1][1] - cues[-1][0] + 0.45)
    final = OUT / "life-plaza-learn-film.mp4"
    on = f"enable='lte(t,{t2:.2f})'"
    run(FF + ["-i", str(joined), "-loop", "1", "-i", str(band), "-filter_complex",
              f"[0:v]split=2[base][low];[low]crop=iw:250:0:ih-250,boxblur=26:2[soft];[base][soft]overlay=0:{H - 250}:{on}[b1];"
              f"[b1][1:v]overlay=0:{H - 320}:shortest=1:{on},subtitles={ass}[v]",
              "-map", "[v]", "-map", "0:a", "-c:v", "libx264", "-preset", "veryfast", "-crf", "21", "-pix_fmt", "yuv420p", "-c:a", "copy", "-movflags", "+faststart", str(final)])

    board = ROOT / "docs" / "video-storyboard.md"
    board.parent.mkdir(exist_ok=True)
    rows = []
    for k, (a, b, zh, en, s) in enumerate(cues, start=1):
        bg = s["bg"]
        what = f"原片 {bg[1]:.0f}s 起 {bg[2]:.0f}s" if bg[0] == "clip" else (f"原片 {bg[1]:.1f}s 定格推近" if bg[0] == "still" else "选级页截图")
        over = "、".join(o["img"] for o in s.get("overlays", [])) or "—"
        rows.append(f"| {k} | {stamp(a)}–{stamp(b)} | {zh} | {en} | {what} | {over} |")
    board.write_text("# 宣传片分镜（人生广场 · 学中文）\n\n由 `video/make.py` 生成。成片：`video/out/life-plaza-learn-film.mp4`，字幕：`video/out/life-plaza-learn-film.srt`。\n"
                     "背景画面来自原版宣传片（真机录制）；叠加的是教学版界面截图（`video/shots.mjs`，台词是测试时人物真实说出的话）。"
                     "用有显卡的设备重录时，照这张表的顺序和旁白录即可。\n\n"
                     "| # | 时间 | 旁白（中文） | 字幕（英文） | 画面 | 叠加的界面 |\n|---|---|---|---|---|---|\n" + "\n".join(rows) + "\n", encoding="utf-8")
    print(f"film {final} {duration(final):.1f}s")


if __name__ == "__main__":
    main()
