import {
  audio,
  backgrounds,
  characters,
  foregrounds,
  scene
} from "./shared.js?v=20260907-2";

const chapter = "PROLOGUE";

export const prologueScenario = [
  scene(chapter, {
    id: "prologue-001",
    speaker: "主人公",
    text: "…………ん？\nうわっ、寝坊した！ 今日、入学式じゃん！",
    bgm: audio.prologue
  }),
  scene(chapter, {
    id: "prologue-003",
    speaker: "主人公",
    text: "着替えて、髪やって、急いで家を――\n…………あ。"
  }),
  scene(chapter, {
    id: "prologue-005",
    speaker: "主人公",
    text: "入学式、オンラインじゃん。\n家、出なくていいじゃん……朝から何やってんだ私。"
  }),
  scene(chapter, {
    id: "prologue-007",
    speaker: "主人公",
    text: "――そんなこんなで、今日から私もZEN大学の学生！\n好きな時間に学べるし、大学生活はけっこう自由なのかも。"
  }),
  scene(chapter, {
    id: "prologue-009",
    speaker: "SYSTEM",
    text: "♪ ピロン\n\n《履修登録について》",
    foreground: foregrounds.handPhone,
    se: audio.notification
  }),
  scene(chapter, {
    id: "prologue-010",
    speaker: "主人公",
    text: "履修登録……？\n授業、いろいろあるんだなあ。どれを選ぼう？",
    foreground: foregrounds.handPhone
  }),
  scene(chapter, {
    id: "prologue-012",
    speaker: "主人公",
    text: "心理学も、プログラミングも、漫画の授業もある！\nせっかくだし、好きなものを全部入れちゃお！"
  }),
  scene(chapter, {
    id: "prologue-015",
    speaker: "？？？",
    text: "――ちょっと待った。",
    character: characters.rishu.silhouette
  }),
  scene(chapter, {
    id: "prologue-016",
    speaker: "主人公",
    text: "……え？ 誰！？",
    character: characters.rishu.silhouette,
    transition: {
      type: "opening",
      target: "q1-01-001"
    }
  }, backgrounds.morning)
];
