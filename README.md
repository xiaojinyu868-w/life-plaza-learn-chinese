# 人生广场 · 学中文 ／ Life Plaza · Learn Chinese

走进别人的一段人生，用中文和那里的人聊天。

广场门口的引路人问你为什么学中文、喜欢什么，然后把你领进一段历史人物的人生：梵高在阿尔勒的黄房子、梅里爱的电影摄影棚、李时珍在蕲州的药铺、五行山下的孙悟空。每位人物都按你的 **HSK 3.0 等级** 用中文和你实时语音对话，画面上配拼音字幕、词卡、词汇链和纠错。

> Walk into someone else's life and talk with them in Chinese. Van Gogh, Méliès, Li Shizhen and the Monkey King each speak at your HSK 3.0 level, with pinyin captions, word cards, a vocabulary chain and gentle corrections.

- 线上体验：https://capture.meetmind.online/life-learn/ （直接进梵高的屋子：[`?go=vangogh&level=3`](https://capture.meetmind.online/life-learn/?go=vangogh&level=3)）
- 宣传片：[`www/life-learn/media/life-plaza-learn-film.mp4`](www/life-learn/media/life-plaza-learn-film.mp4)（2 分 13 秒，中文旁白，中英字幕）
- 功能详解、学习接口、数据来源与已知限制：[`docs/LEARNING.md`](docs/LEARNING.md)

## 学习功能一览

| 功能 | 说明 |
|---|---|
| 分级入口 | 先选 HSK 1–9 级；老师可以发带 `?level=2` 的链接，学生打开就是那一级 |
| 难度控制 | 每次人物说话都带上该等级的词汇、语法点和句长规则（HSK 3.0：11,000 词、3,088 字、428 个语法点）；实测超纲词比例从 50% 降到 16% |
| 学习字幕 | 每个词标拼音，超纲新词橙色虚线，人名地名青色，下面是英文翻译；可重听、开关拼音和英文 |
| 词卡与词汇链 | 点任意词：拼音、等级、英文、例句、发音，以及下一步可以学的词（「黄色」→ 白色、红色、颜色…） |
| 按兴趣推荐 | 喜欢画画去梵高，电影拍照去梅里爱，中医喝茶去李时珍，小朋友和爱冒险的去孙悟空 |
| 循环提问（TCI） | 一次只教一个新词，先问「是不是」，再问「哪一个」，最后开放提问 |
| 重述而不纠错、超语 | 说错了人物不指出，只把对的说法自然说一遍；夹着英文说也听得懂 |
| 语法一句话解释 | 「把门打开」和「门打开了」有什么不一样？不讲术语，只给一个例子 |
| 纠错重写 | 打字有错时给最多两条建议（带拼音和解释），自己再写一遍才算完 |
| 全身反应（TPR） | 梵高说「请你把窗户打开。」，学习者推开窗，他说「你把窗户打开了。」 |

界面语言：HSK 1–3 级用英文界面，4 级以上全中文。

## 快速开始

需要 Node.js 20.6 及以上，以及至少一个对话模型的密钥。

```bash
git clone https://github.com/xiaojinyu868-w/life-plaza-learn-chinese.git
cd life-plaza-learn-chinese
npm install
cp .env.example .env      # 填入 DASHSCOPE_API_KEY 和/或 LUMINA_API_KEY
npm start                 # 启动后端 API（8794）和本地前端（8080）
```

打开 http://127.0.0.1:8080/life-learn/?level=3 。3D 场景需要支持 WebGL 的设备（带显卡的电脑或较新的手机）；语音对话需要浏览器的麦克风权限（`127.0.0.1` 下可直接使用，部署到公网需要 HTTPS）。

| 密钥 | 用途 |
|---|---|
| `DASHSCOPE_API_KEY`（阿里云百炼） | 通义千问对话、人物的声音（语音合成）、对着麦克风说中文（语音识别） |
| `LUMINA_API_KEY`（Lumina AI 网关） | Claude / DeepSeek 对话，GPT Image 生成礼物（剧照、画） |

模型、音色、限额等其余配置都有默认值，可用环境变量覆盖：`LIFE_LLM_CHAIN`、`LIFE_LLM_QUICK`、`LIFE_TTS_MODEL`、`LIFE_VOICE_*`、`LIFE_ASR_MODEL`、`LIFE_OPEN`（开放哪几段人生）、`LEARN_KG`（`off` 关掉词卡里模型现写的四栏）等，默认值见各文件开头。

## 目录

```
server/            Node.js 后端（原生 http + ws，无框架），挂在 /life/api 下
  learn/           学中文新增：hsk.mjs 查表/分词/拼音/词汇链，rules.mjs 各等级规则，
                   context.mjs 请求等级，api.mjs /learn/ 接口
  spaces/          每段人生一个文件：人物设定、拜访计划、礼物提示词；guide/call 是门口的引路人
  lib/             llm.mjs 带回退链的模型调用，tts/asr 语音合成与识别，gateway.mjs 生图
  flash/           「闪念」小作品：根据访客经历现写可交互网页小品，检查、试运行后在沙箱播放
www/life-learn/    前端（three.js 构建产物，已用 prettier 排版成可读代码）
  learn/           学习层：learn.js、learn.css（选级、字幕、词卡、纠错）
  worlds/ models/  各段人生的 3D 场景（splat）与人物模型
  media/           宣传片与分享页
hsk/               HSK 3.0 大纲数据（Gushi，CC BY-SA 4.0）
inject/            梵高房间台词改成简单中文的补丁清单（30 处）
scripts/dev.mjs    本地一键启动：前端静态服务 + API 反向代理（等价于 deploy/ 里的 nginx 配置）
test/              api.mjs 四段人生的计划/对话/超纲统计；layer.mjs、room.mjs 学习层与房间（Playwright）
video/             宣传片截图与合成脚本，分镜见 docs/video-storyboard.md
deploy/            nginx 配置片段（含实时语音的 WebSocket 转发）与 systemd 服务
```

## 测试

```bash
npm run api &                                     # 或 npm start
node test/api.mjs 3                               # HSK 3 级：引路人推荐、四段人生的计划和对话、超纲词比例
npx playwright install chromium && npm start &
node test/layer.mjs                               # 学习层：选级页 → 拼音字幕 → 词卡
```

## 部署

`deploy/life-learn.service`（systemd，后端端口 8794，密钥放在 `EnvironmentFile`）和 `deploy/nginx-life-learn.conf`（把 `www/` 挂到 `/life-learn/`，`/life-learn/api/` 反向代理到 `127.0.0.1:8794/life/api/`，并转发实时语音识别的 WebSocket）。

## 许可

- 代码：[MIT](LICENSE)
- HSK 3.0 大纲数据 `hsk/hsk-3.0-complete.json`：[HSK 3.0 syllabus data by Gushi](https://gushichinese.com/hsk-3.0/downloads)，[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- 3D 场景、人物模型、插图与宣传片随本仓库一同提供。
