/**
 * The lives a flash piece can be made in, as the maker needs them: the place and what is in it, the life in a few
 * true facts, the one experience at its heart (what a visitor should get to do with their own hands), how it looks
 * and sounds, and the one-line intent the life gives the maker. A space module may export `flashField(lang)` to
 * replace its entry here.
 */
export const FIELDS = Object.freeze({
  melies: {
    name: { zh: "乔治·梅里爱", en: "Georges Méliès" },
    place: { zh: "梅里爱的玻璃摄影棚", en: "Méliès' glass studio" },
    key: 0,
    zh: `乔治·梅里爱（1861–1938），魔术师，电影特效之父。
地方：1897 年他在巴黎东郊蒙特勒伊盖的玻璃摄影棚——玻璃屋顶借太阳拍戏，手绘的纸板布景、活板门、烟雾、一台他自己改装的手摇摄影机；墙边是戏服、魔术斗篷、石膏月亮。
一生：1888 年买下罗贝尔-乌丹剧院当魔术师；1895 年看了卢米埃尔的放映；据他自己说，有一回拍街景时机器卡住，再摇起来，公共马车变成了灵车——这是他的第一个戏法，"停机再拍"；拍了五百多部片子，很多是女工一格一格手工上色的；1902 年《月球旅行记》，炮弹打进月亮的眼睛；后来破产，胶片被熔掉提炼银子、做成鞋跟；他和珍妮在蒙帕纳斯车站守了好多年玩具糖果摊，没人认得他；后来有一天，有人在车站认出了他，1929 年为他办了回顾放映。
这一生最核心的体验：停下摄影机，换掉一样东西，再摇起来——在看的人眼里，一样平常的东西变成了奇迹。戏法不是骗人，是让人重新看见。还有：一格一格地上色；被忘记，又被记起。
画面和声音：黑白胶片上半透明的手工上色（玫瑰、柠檬黄、天蓝、薄荷），纸板布景、长着人脸的月亮和星星、烟雾、胶片颗粒与划痕、光圈开合、新艺术风格的字幕卡；手摇摄影机的咔嗒声、默片钢琴、变戏法的"噗"。
他说话：温暖、幽默、一点舞台腔，偶尔一句法语（Voilà、Moteur !、Coupez !）。
形式：一部默片。字幕卡（新艺术风格的边框，一张卡一两句）、光圈开合、手工上色；他说的话也做成字幕卡。
可以原样引用的原文（只用这些，一字不改，一次一句；都是转引）：
- 他讲自己的第一个戏法：「我把胶片在断开的地方重新接好，放出来一看：一辆玛德莱娜—巴士底线的公共马车，忽然变成了灵车，男人变成了女人。」（可以说"我的第一个戏法"，不能说"电影的第一个特效"）
- 车站那些年写给朋友的信：「一天干十四个钟头，没有星期天，没有假日，冬天在冰窖里，夏天在火炉里，是真难。」
- 他管自己那台吵闹的摄影机叫「咖啡磨」「机关枪」。`,
    en: `Georges Méliès (1861–1938), magician, father of film special effects.
Place: the glass studio he built in 1897 at Montreuil — a glass roof to film by sunlight, painted flats, trapdoors, smoke, a hand-cranked camera he converted himself; costumes, a magician's cape, a plaster moon.
Life: bought the Théâtre Robert-Houdin in 1888; saw the Lumières' screening in 1895; in 1896 his camera jammed on the Place de l'Opéra and when he cranked again an omnibus had become a hearse — the stop trick; over five hundred films, many hand-coloured frame by frame; A Trip to the Moon (1902); bankruptcy, prints melted for silver and boot heels; years selling toys and sweets at the Gare Montparnasse, unrecognised, until he was found again in 1929.
The experience at its heart: stop the camera, change one thing, crank again — and to whoever watches, something ordinary becomes a marvel. A trick is not a lie; it makes people see again. Also: colouring frame by frame; being forgotten, and remembered.
Look and sound: black-and-white film with translucent hand-tinting (rose, lemon, sky blue, mint), painted flats, a moon and stars with faces, smoke, grain and scratches, iris in and out, Art Nouveau title cards; the crank's clicks, a silent-film piano, a magician's poof.
His voice: warm, funny, a little theatrical, the odd French word.
Form: a silent film — Art Nouveau intertitles (one or two lines a card), iris in and out, hand-tinting; what he says can be a title card too.
His own words (all reported; our own translations from his French — quote only these, as given, and credit them as "our translation"): his first trick, "suddenly I saw a Madeleine–Bastille omnibus changed into a hearse, and men changed into women" (say "my first trick", never "the first special effect in film"); he called his noisy camera "the coffee grinder" and "the machine gun". The station years survive only in a modern English translation, so tell them in your own words and unquoted: fourteen hours a day, no Sundays or holidays, an icebox in winter and a furnace in summer.`,
    intent: { zh: "用你的停机再拍，给他变一个只属于他的戏法。", en: "With your stop trick, conjure a trick that is only his." },
  },
  vangogh: {
    name: { zh: "文森特·梵高", en: "Vincent van Gogh" },
    place: { zh: "梵高在阿尔勒的卧室", en: "Van Gogh's bedroom in Arles" },
    key: 2,
    zh: `文森特·梵高（1853–1890），画家。此刻是 1888 年秋天，阿尔勒。
地方：拉马丁广场 2 号黄房子里他的卧室——木床、两把椅子、洗脸架、墙上朋友们的画像；窗外是南方的光。高更就要来了，隔壁那间屋子是给他的。
一生（到此刻为止）：当过画商学徒、教师、给矿工传道，都失败了；27 岁才决定画画，几乎全靠自学；1888 年来阿尔勒找"日本那样的光"，画了向日葵、夜间咖啡馆、罗讷河上的星夜、这间卧室；弟弟提奥每月寄钱和颜料，他隔几天就写一封长信，信里常夹着小速写；邮差鲁兰一家是他最好的朋友，鲁兰太太今年夏天刚生了小女儿马塞勒；他的画几乎一张也没卖出去。
形式：信。他写给提奥的信，说他今天画了什么，再一样一样报出颜色（705 号信：「墙是淡紫的。地面是红色的方砖。床架和椅子，是新鲜黄油的黄。」），信里夹一张小速写，结尾是「用力握你的手。永远是你的，文森特」。
可以原样引用的原文（只用这些，一字不改，一次一句；中文据 vangoghletters.org 的英译和法文原文）：
- 「这一回画的就是我的卧室……总之，看这幅画，应该让头脑，或者说想象力，得到休息。」（705 号信，致提奥，1888 年 10 月 16 日）
- 「我常常觉得，夜晚的颜色比白天还丰富，是最浓的紫、蓝和绿。」（678 号信，致妹妹威尔明娜，1888 年 9 月）
- 「我画画的那股劲儿，就像马赛人喝鱼汤——画的是大向日葵，你就不会奇怪了。」（666 号信，1888 年 8 月）
- 「等一等……这里的诗意，要日子久了才渗进来。」（706 号信，致高更，1888 年 10 月 17 日）
- 「有人心里有一团很旺的火，却从来没有人来烤一烤；过路的人只看见烟囱顶上冒出一点烟，就走自己的路去了。」（155 号信，1880 年；是"有人"，不是"每个人"，后面也没有"总会有人来"的许诺）
这一生最核心的体验：盯着一样普通的东西看，直到看见它的颜色；再用短而厚的笔触，一笔一笔把它画出来——颜色就是心情。还有：把今天看见的，写信告诉一个人。
画面和声音：厚涂的短笔触、旋转的天空、铬黄配钴蓝、朱红配翠绿、粗轮廓和日本版画的平涂；南方的风、蝉、画笔刮过画布的沙沙声。
他说话：急切、真诚，谈到颜色会兴奋，谈到钱和孤独会害羞。`,
    en: `Vincent van Gogh (1853–1890), painter. It is autumn 1888, in Arles.
Place: his bedroom in the Yellow House, 2 Place Lamartine — a wooden bed, two chairs, a washstand, friends' portraits on the wall; the light of the South at the window. Gauguin is about to come; the room next door is for him.
Life so far: failed as an art dealer's clerk, a teacher, a preacher to miners; began painting at 27, almost self-taught; came to Arles in 1888 for "the light of Japan" and painted sunflowers, the Night Café, Starry Night over the Rhône, this bedroom; his brother Theo sends money and paint; he writes him long letters with little sketches every few days; the postman Roulin's family are his best friends — Madame Roulin had a baby girl, Marcelle, this summer; he has sold almost nothing.
Form: a letter — what he painted today, then its colours named one by one (letter 705: "The walls are pale violet. The floor is red tiles. The wood of the bed and the chairs is the yellow of fresh butter."), a little sketch slipped in, and the close "I shake your hand firmly. Ever yours, Vincent" (his "Je te serre bien la main. t. à t. Vincent").
His own words (our own translations from his French — quote only these, as given, and credit them as "our translation"; never use a published modern translation): "the sight of the picture ought to rest the head, or rather the imagination" (705, to Theo, 16 October 1888); "it often seems to me that the night is richer in colour than the day, coloured with the most intense violets, blues and greens" (678, to Willemien, September 1888); "I am painting with the relish of a Marseillais eating his bouillabaisse" (666, August 1888); "it is in the long run that the poetry of this place sinks in" (706, to Gauguin, October 1888); "someone has a great fire in his soul, and no one ever comes to warm himself at it; passers-by see only a little smoke at the top of the chimney, and go on their way" (155, 1880 — "someone", not "everyone", and no promise follows).
The experience at its heart: look at an ordinary thing until you see its colour, then lay it down stroke by short thick stroke — colour is feeling. And: write to someone what you saw today.
Look and sound: short impasto strokes, swirling skies, chrome yellow and cobalt, vermilion and emerald, bold outlines and the flat colour of Japanese prints; the southern wind, cicadas, a brush scraping canvas.
His voice: eager, sincere, excited about colour, shy about money and loneliness.`,
    intent: { zh: "教他用你的眼睛看一次他自己的日子，再亲手画下来。", en: "Teach him to see his own days with your eyes once, and paint them with his own hand." },
  },
  lishizhen: {
    name: { zh: "李时珍", en: "Li Shizhen" },
    place: { zh: "李时珍在蕲州的药铺", en: "Li Shizhen's apothecary in Qizhou" },
    key: -3,
    zh: `李时珍（1518–1593），医生，《本草纲目》的作者。此刻约是 1590 年，他七十多岁，在湖北蕲州的药铺里。
地方：一面墙的百子柜（几百个小抽屉，每个装一味药），药碾、铜戥子（称药的小秤）、药篓、脉枕，案上是改了三遍的书稿。
一生：14 岁中秀才，三次乡试不中，闭门读书十年；跟父亲学医；发现古书里药写错了会害人性命，决心重修本草；在楚王府、太医院待过一阵就回了乡，向药农、樵夫、猎人、渔夫请教；剖过穿山甲的胃（「约蚁升许」），试过曼陀罗花酒"令人笑"的传说（「予尝试之」）；还写了《濒湖脉学》，号脉是他的老本行；他自己说「岁历三十稔」、三易其稿，写成《本草纲目》五十二卷、1892 种药；书成之后好些年没人肯刻印，此刻还在南京刻着，他不知道能不能等到印出来。
这一生最核心的体验：辨认——亲眼看、亲手摸、亲口尝，一味一味地看清它是什么、性味如何、治什么，写下来，改正前人的错。还有号脉：三根手指，听一个人身体里说的话。本草里写的不只是草药，也有韭、葱、姜、枣这些人天天吃的东西。
画面和声音：宣纸、本草书里的木刻线描插图、朱砂印、墨、草绿和赭石；木抽屉拉开的声音、药碾滚过、铜秤砣轻碰、窗外的雨。
他说话：沉稳、温和，像老大夫，偶尔引一句书里的话，不卖弄。
形式：本草的一个条目，或一张脉案、一张方子。条目先标正名，再依次是【释名】【集解】【气味】【主治】【附方】，他自己的心得写作"时珍曰"（【发明】）；方子最底下一行写「此方写给心，不入药；身上若有不适，请去看医生。」
可以原样引用的原文（只用这些，一字不改，一次一句）：
- 他说自己：「时珍，荆楚鄙人也。幼多羸疾，质成钝椎，长耽典籍，若啖蔗饴。」（王世贞《本草纲目序》转述）
- 去求序那天：「解其装，无长物，有《本草纲目》数十卷。」（王世贞序）
- 橘皮：「须陈久者为良。」（弘景语，果部·橘）远志：「处则为远志，出则为小草。」（草部·远志）忍冬：「藤生，凌冬不凋，故名忍冬。」（弘景语，草部·忍冬）
- 韭：「一种而久生，故谓之韭。」（颂曰）「剪而复生，久而不乏。」「韭之为菜，可生可熟，可菹可久，乃菜中最有益者也。」（时珍曰，菜部·韭）
- 《濒湖脉学》：缓脉「欲从脉里求神气，只在从容和缓中」；细脉「细来累累细如丝」；长脉「不大不小，迢迢自若」。（浮而有力是病脉，别用来夸人）`,
    en: `Li Shizhen (1518–1593), physician, author of the Compendium of Materia Medica. It is about 1590; he is in his seventies, in his apothecary in Qizhou.
Place: a wall of hundred-drawer cabinets (a herb in each), a grinding boat, a little brass steelyard for weighing herbs, herb baskets, a pulse pillow, the manuscript rewritten three times.
Life: passed the county exam at 14, failed the provincial exam three times, learned medicine from his father at 23; found the old herbals full of errors that could kill and resolved at 35 to rewrite them; left the Imperial Academy within a year to walk the mountains in straw sandals, asking herb farmers, woodcutters, hunters and fishermen; opened a pangolin's stomach, tasted datura himself; wrote a book of pulses — reading pulses is his old craft; 27 years and three drafts for 52 volumes and 1,892 entries; no one would print it for years, and the blocks are still being cut.
The experience at its heart: identifying — look, touch, taste, until you see each thing for what it is, its nature and what it heals, and write it down, correcting those before you. And the pulse: three fingers listening to what a body says. His herbal holds not only medicines but chives, scallions, ginger and jujubes — what people eat every day.
Look and sound: rice paper, the herbal's woodblock line drawings, a cinnabar seal, ink, herb green and ochre; drawers sliding, the grinding wheel, brass weights touching, rain at the window.
His voice: steady and gentle, an old doctor's, now and then a line from the books, never showing off.
Form: an entry of his herbal — the right name, then Explaining the Names, Collected Notes, Nature and Taste, Indications, Appended Prescriptions, his own remarks as "Shizhen says" — or a pulse record, or a prescription whose last line is "This is written for the heart, not for the pharmacy; if your body is unwell, see a doctor."
Lines from the books (our own renderings of the classical Chinese, in close literary English — quote only these, as given, and credit them as "our translation"): of himself, "Shizhen, a rustic of Jingchu: sickly as a child, slow as a mallet; grown, he devoured books as if they were sugar cane"; tangerine peel "is best when long kept" (Tao Hongjing); chives, "planted once, it lives long, and so it is called jiu", "cut, it grows again; long kept, it never fails" (Shizhen); the moderate pulse, "seek the spirit in a pulse: it is only in ease and calm". (A floating, forceful pulse is a sign of illness; never praise anyone with it.)`,
    intent: { zh: "像你辨认一味药那样，陪他把自己的日子辨认一遍。", en: "As you would identify a herb, help him identify his own days." },
  },
  xiyou: {
    name: { zh: "《西游记》", en: "Journey to the West" },
    place: { zh: "西天取经路", en: "the road to the West" },
    key: 5,
    zh: `《西游记》（明代，吴承恩），一部人人都知道的书：唐僧带着孙悟空、猪八戒、沙僧和白龙马，去西天取经。
地方：取经路——十万八千里，过流沙河、火焰山、通天河、女儿国，一程一程走到灵山。
书里的事：孙悟空一个筋斗云十万八千里，可他没法驮着师父飞过去——经，只能一步一步走着去取；路上九九八十一难，一难也少不得，少了一难，观音还要补上一难；到了灵山，阿傩、伽叶先给的是没有字的白纸经；回程在通天河经书落水，晒经时粘破了几页，从此"天地不全"。沙僧一路挑着担子，猪八戒常嚷着要散伙回高老庄，悟空头上戴着紧箍（它本名叫「定心真言」）。
这一部书最核心的体验：路要自己走，难要自己过；走到了，才知道那一路就是经。
画面和声音：明代木刻插图和青绿山水、祥云、金色的佛光、赭红的袈裟与锡杖；驼铃、风沙、锡杖上的铜环、木鱼。
形式：一回书。开头一联回目（上下两句对仗），「话说」或「却说」起，要紧处「正是：」或「有诗为证」插一首诗（诗是说书人自己的，不要冒充原书），结尾「毕竟不知……，且听下回分解」。叙述的口吻是说书人，或书里的人物。
可以原样引用的原文（只用这些，一字不改，一次一句）：
- 「师父的凡胎肉骨，重似泰山。」（八戒）「遣泰山轻如芥子，携凡夫难脱红尘。」「若将容易得，便作等闲看。」（悟空，第二十二回）
- 「我在此度日如年，更无一个相知的来看我一看。」（五行山下，第八回）
- 「圣僧受过八十难，还少一难，不得完成此数。」（第九十九回）
- 「经不可轻传，亦不可以空取。」「白本者，乃无字真经，倒也是好的。」（佛祖笑道，第九十八回）
- 「途中未曾记数，只知经过了一十四遍寒暑。」（第一百回）
- 「山中无甲子，寒尽不知年。」（第一回）`,
    en: `Journey to the West (Ming dynasty, Wu Cheng'en): the monk Tripitaka with Sun Wukong, Zhu Bajie, Sha Wujing and the White Dragon Horse, walking west for the scriptures.
Place: the road west — 108,000 li, over the River of Flowing Sands, the Flaming Mountains, the River That Reaches Heaven, the Land of Women, stage by stage to Vulture Peak.
In the book: Wukong's somersault cloud covers 108,000 li at a leap, but he cannot carry his master across — the scriptures can only be fetched on foot; eighty-one ordeals on the way, not one may be missing (when one is, Guanyin adds it); at Vulture Peak they are first given blank scrolls ("the scriptures may not be given lightly, nor received for nothing"; and the blank ones "are true scriptures without words, and good too"); on the way back the scrolls fall into a river and a few pages tear while drying — "heaven and earth are incomplete". Sha Wujing carries the load all the way; Bajie keeps threatening to go home; Wukong wears the golden band.
The experience at its heart: the road has to be walked and each ordeal passed yourself; only at the end do you see that the road was the scripture.
Look and sound: Ming woodblock prints and blue-green landscapes, auspicious clouds, golden light, a russet robe and a ringed staff; camel bells, wind and sand, the staff's rings, a wooden fish.
Form: a chapter of the book — a couplet for its title, "Now we tell how…", a poem at the turn ("There is a poem to prove it:", the storyteller's own, never passed off as the book's), and the close "If you would know what came after, listen to the next chapter." Voice: a storyteller's, or the characters'.
Lines from the book (our own renderings of the classical Chinese, in close literary English — quote only these, as given, and credit them as "our translation"; never borrow from a published translation): "Make Mount Tai as light as a mustard seed, but you cannot carry a mortal out of the red dust", "what is got easily is held cheap" (ch. 22); "here every day is a year, and no friend has come to see me" (ch. 8); "the holy monk has passed eighty ordeals; one is still missing, and the number is not complete" (ch. 99); "the scriptures may not be given lightly, nor received for nothing", "the blank ones are true scriptures without words, and good too" (ch. 98); "on the way I kept no count, only that fourteen winters and summers went by" (ch. 100).`,
    intent: { zh: "让他走一段只属于他的取经路。", en: "Let him walk a road west that is only his." },
  },
});

/** Which LP.page each life's reveal is typeset as (sdk.mjs): its own form. */
const PAGES = Object.freeze({ melies: "card", vangogh: "letter", lishizhen: "entry", xiyou: "chapter" });

/** The field for a space: its own `flashField(lang)` if it has one, else the entry here, else a plain stranger's. */
export function fieldOf(space, lang = "zh", mod = null) {
  const f = FIELDS[space];
  const custom = mod?.flashField?.(lang);
  if (custom) return { id: space, name: custom.name || f?.name?.[lang] || space, place: custom.place || f?.place?.[lang] || "", key: custom.key ?? f?.key ?? 0, text: custom.text || "", intent: custom.intent || f?.intent?.[lang] || "", page: custom.page || PAGES[space] || "" };
  if (f) return { id: space, name: f.name[lang] || f.name.zh, place: f.place[lang] || f.place.zh, key: f.key, text: f[lang] || f.zh, intent: f.intent[lang] || f.intent.zh, page: PAGES[space] || "" };
  return { id: space || "plaza", name: lang === "en" ? "the Life Plaza" : "人生广场", place: "", key: 0, text: "", intent: "", page: "" };
}
