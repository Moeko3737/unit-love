const Q1_ROOM_BACKGROUND = "./assets/images/backgrounds/morning-room.png";

const rishu = {
  normal: "./assets/images/characters/rishu/normal.png",
  serious: "./assets/images/characters/rishu/serious.png",
  smile: "./assets/images/characters/rishu/smile.png",
  surprised: "./assets/images/characters/rishu/surprised.png",
  troubled: "./assets/images/characters/rishu/troubled.png"
};

const graduation = {
  normal: "./assets/images/characters/graduation/normal.png",
  smile: "./assets/images/characters/graduation/smile.png",
  guidance: "./assets/images/characters/graduation/guidance.png"
};

const slack = {
  normal: "./assets/images/characters/slack/normal.png",
  smile: "./assets/images/characters/slack/smile.png",
  surprised: "./assets/images/characters/slack/surprised.png",
  worried: "./assets/images/characters/slack/worried.png",
  wink: "./assets/images/characters/slack/wink.png"
};
const tsuno = {
  front: "./assets/images/characters/tsuno/front.png",
  back: "./assets/images/characters/tsuno/back.png"
};
const FESTIVAL_BACKGROUND = "./assets/images/backgrounds/campus-festival.png";
const SLACK_PHONE_FOREGROUND = "./assets/images/foregrounds/smartphone-slack.png";
const slackNotification = {
  title: "Slack · ZEN大学",
  text: "新しい通知が届いています。"
};

// 1Q序盤の会話は、プロローグと同じ主人公の自室で行う。
function q1Scene(scene, chapter = "Q1-01") {
  return {
    chapter,
    background: Q1_ROOM_BACKGROUND,
    ...scene
  };
}

function q102Scene(scene) {
  return q1Scene(scene, "Q1-02");
}

function q103Scene(scene) {
  return q1Scene(scene, "Q1-03");
}

function q104Scene(scene) {
  return q1Scene(scene, "Q1-04");
}

function q104FestivalScene(scene) {
  return q104Scene({ background: FESTIVAL_BACKGROUND, ...scene });
}

export const scenario = [
  /* ==================
   プロローグ
  =====================*/
  {
    id: "prologue-001",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "…………ん？",
    bgm: "./assets/audio/bgm/prologue.wav",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-002",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "うわっ、寝坊した！！\n今日、入学式じゃん！",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-003",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "着替えて、髪やって、急いで家を――",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-004",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "…………あ。",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-005",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "入学式、オンラインじゃん。",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-006",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "家、出なくていいじゃん……。\n朝から何やってんだ私。",
    background: "./assets/images/backgrounds/morning-room.png"
  },

  {
    id: "prologue-007",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "――そんなこんなで。\n今日から、私もZEN大学の学生！",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-008",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "オンラインなら、好きな時間に授業も受けられるし……\n大学生活、けっこう自由なのかも！",
    background: "./assets/images/backgrounds/morning-room.png"
  },

  {
    id: "prologue-009",
    chapter: "PROLOGUE",
    speaker: "SYSTEM",
    text: "♪ ピロン\n\n《履修登録について》",
    background: "./assets/images/backgrounds/morning-room.png",
    foreground: "./assets/images/foregrounds/smartphone-hand01.png",
    se: "./assets/audio/se/notification.wav"
  },
  {
    id: "prologue-010",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "履修登録……？",
    background: "./assets/images/backgrounds/morning-room.png",
    foreground: "./assets/images/foregrounds/smartphone-hand01.png"
  },
  {
    id: "prologue-011",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "授業、いろいろあるんだなあ。\nどれを選ぼう？",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-012",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "せっかくの大学生活だし、\n好きなことを勉強したいよね！",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-013",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "心理学も気になるし、プログラミングもやってみたいし……\n漫画の授業もある！",
    background: "./assets/images/backgrounds/morning-room.png"
  },
  {
    id: "prologue-014",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "よーし！\n面白そうなの、全部入れちゃお！",
    background: "./assets/images/backgrounds/morning-room.png"
  },

  {
    id: "prologue-015",
    chapter: "PROLOGUE",
    speaker: "？？？",
    text: "――ちょっと待った。",
    background: "./assets/images/backgrounds/morning-room.png",
    character: "./assets/images/characters/rishu/silhouette.png"
  },
  {
    id: "prologue-016",
    chapter: "PROLOGUE",
    speaker: "主人公",
    text: "……え？ 誰！？",
    background: "./assets/images/backgrounds/morning-room.png",
    character: "./assets/images/characters/rishu/silhouette.png",
    transition: {
      type: "opening",
      target: "q1-01-001"
    }
  },

  /* ==================
   1Q / 履修登録編
  =====================*/
  // 表情差分の位置ずれが目立たないよう、会話のまとまりごとに同じ画像を保つ。
  q1Scene({
    id: "q1-01-001",
    speaker: "履修登録くん",
    text: "大学生活初日から、その選び方？",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-002",
    speaker: "主人公",
    text: "……さっきの人！",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-003",
    speaker: "主人公",
    text: "ていうか、誰！？",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-004",
    speaker: "履修登録くん",
    text: "僕？　履修登録。",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-005",
    speaker: "主人公",
    text: "履修登録？",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-006",
    speaker: "履修登録くん",
    text: "そう。君が今、適当に済ませようとしてたやつ。",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-007",
    speaker: "主人公",
    text: "適当じゃないよ！",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-008",
    speaker: "主人公",
    text: "ちゃんと面白そうな授業を選んでた！",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-009",
    speaker: "履修登録くん",
    text: "心理学、プログラミング、漫画……",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-010",
    speaker: "履修登録くん",
    text: "興味がある科目を選ぶのはいいこと。",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-011",
    speaker: "主人公",
    text: "でしょ？",
    character: rishu.normal
  }),
  // 時間割・履修計画の説明に入る節目で、一度だけ真剣な表情へ。
  q1Scene({
    id: "q1-01-012",
    speaker: "履修登録くん",
    text: "でも――",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-013",
    speaker: "履修登録くん",
    text: "高校みたいに、誰かが君の時間割を作ってくれるわけじゃないよ。",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-014",
    speaker: "主人公",
    text: "…………",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-015",
    speaker: "主人公",
    text: "え。",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-016",
    speaker: "主人公",
    text: "大学って……時間割、自分で作るの？",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-017",
    speaker: "履修登録くん",
    text: "そこから？",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-018",
    speaker: "主人公",
    text: "だって高校までは！",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-019",
    speaker: "主人公",
    text: "月曜1限は国語、2限は数学って、最初から決まってたじゃん！",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-020",
    speaker: "履修登録くん",
    text: "大学は違う。",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-021",
    speaker: "履修登録くん",
    text: "何を学ぶか。いつ学ぶか。",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-022",
    speaker: "履修登録くん",
    text: "自分で考えて、履修計画を立てる。",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-023",
    speaker: "主人公",
    text: "自由って……",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-024",
    speaker: "主人公",
    text: "思ったよりやること多くない？",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-025",
    speaker: "履修登録くん",
    text: "気づくの早くてえらい。",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-026",
    speaker: "主人公",
    text: "褒められてる気がしない！",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-027",
    speaker: "卒業要件先輩",
    text: "それに、好きな科目だけ選べばいいってわけでもないよ。",
    character: graduation.normal
  }),
  q1Scene({
    id: "q1-01-028",
    speaker: "主人公",
    text: "また誰か来た！！",
    character: graduation.normal
  }),
  q1Scene({
    id: "q1-01-029",
    speaker: "卒業要件先輩",
    text: "必修。選択必修。卒業に必要な単位。",
    character: graduation.normal
  }),
  q1Scene({
    id: "q1-01-030",
    speaker: "主人公",
    text: "そ、卒業！？",
    character: graduation.normal
  }),
  q1Scene({
    id: "q1-01-031",
    speaker: "主人公",
    text: "いやいや、今日入学したばっかりなんですけど！",
    character: graduation.normal
  }),
  // 卒業要件先輩の表情変更は、強調したいこの一言だけに絞る。
  q1Scene({
    id: "q1-01-032",
    speaker: "卒業要件先輩",
    text: "だから今から見るんだよ。",
    emphasis: true,
    character: graduation.guidance
  }),
  q1Scene({
    id: "q1-01-033",
    speaker: "履修登録くん",
    text: "4年間の予定を、今日全部決める必要はないよ。",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-034",
    speaker: "履修登録くん",
    text: "でも、今の自分に必要なものは確認しておこう。",
    character: rishu.normal
  }),
  q1Scene({
    id: "q1-01-choice",
    speaker: "SYSTEM",
    text: "どうやって授業を選ぶ？",
    character: rishu.normal,
    choices: [
      {
        label: "A",
        text: "必修や卒業要件を確認してから、興味のある科目を選ぶ",
        effects: {
          selfManagement: 2,
          informationUse: 1,
          affection: { rishu: 2 }
        },
        next: "q1-01-choice-a-001"
      },
      {
        label: "B",
        text: "せっかく自由なんだし、面白そうな授業を全部入れる！",
        effects: {
          selfManagement: -1,
          universityLife: 1
        },
        next: "q1-01-choice-b-001"
      },
      {
        label: "C",
        text: "難しそうだし、あとで考えようかな……",
        effects: {
          selfManagement: -2,
          informationUse: -1
        },
        next: "q1-01-choice-c-001"
      }
    ]
  }),
  q1Scene({
    id: "q1-01-choice-a-001",
    speaker: "履修登録くん",
    text: "うん。それなら安心。",
    character: rishu.smile,
    next: "q1-01-final-001"
  }),
  q1Scene({
    id: "q1-01-choice-b-001",
    speaker: "履修登録くん",
    text: "……その勢いは嫌いじゃないけど。",
    character: rishu.troubled
  }),
  q1Scene({
    id: "q1-01-choice-b-002",
    speaker: "履修登録くん",
    text: "まず一回、落ち着こ？",
    character: rishu.troubled,
    next: "q1-01-final-001"
  }),
  q1Scene({
    id: "q1-01-choice-c-001",
    speaker: "履修登録くん",
    text: "履修登録にも期間があるからね？",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-choice-c-002",
    speaker: "主人公",
    text: "…………。",
    character: rishu.serious
  }),
  q1Scene({
    id: "q1-01-choice-c-003",
    speaker: "履修登録くん",
    text: "その顔、今初めて知った顔だ。",
    character: rishu.serious,
    next: "q1-01-final-001"
  }),
  // 選択への反応を終えたら笑顔に戻し、締めの会話では切り替えない。
  q1Scene({
    id: "q1-01-final-001",
    speaker: "履修登録くん",
    text: "大学生活は自由。",
    character: rishu.smile
  }),
  q1Scene({
    id: "q1-01-final-002",
    speaker: "履修登録くん",
    text: "でも、その自由をどう使うかは――",
    character: rishu.smile
  }),
  q1Scene({
    id: "q1-01-final-003",
    speaker: "履修登録くん",
    text: "君次第だから。",
    character: rishu.smile
  }),
  q1Scene({
    id: "q1-01-final-004",
    speaker: "主人公",
    text: "（自由って、思ってたより大変なのかも……？）",
    character: rishu.smile
  }),
  q1Scene({
    id: "q1-01-final-005",
    speaker: "主人公",
    text: "（私の大学生活、大丈夫かな……。）",
    character: rishu.smile
  }),
  q1Scene({
    id: "q1-01-clear",
    speaker: "SYSTEM",
    text: "Q1-01 CLEAR",
    clear: true,
    next: "q1-02-001"
  }),

  /* ==================
   Q1-02 / 卒業までの道、見えてる？
  =====================*/
  q102Scene({
    id: "q1-02-001",
    speaker: "履修登録くん",
    text: "じゃあ、僕からは一旦ここまで。",
    character: rishu.normal
  }),
  q102Scene({
    id: "q1-02-002",
    speaker: "履修登録くん",
    text: "履修登録の期間だけは忘れないでね。",
    character: rishu.normal
  }),
  q102Scene({
    id: "q1-02-003",
    speaker: "主人公",
    text: "はーい！",
    character: rishu.normal
  }),
  q102Scene({
    id: "q1-02-004",
    speaker: "履修登録くん",
    text: "……その返事、不安だな。",
    character: rishu.normal
  }),
  // 履修登録くんが退場。次の2つの独白では立ち絵を表示しない。
  q102Scene({
    id: "q1-02-005",
    speaker: "主人公",
    text: "ふぅ〜……。"
  }),
  q102Scene({
    id: "q1-02-006",
    speaker: "主人公",
    text: "履修登録だけでも、思ったより考えること多いんだなぁ。"
  }),
  q102Scene({
    id: "q1-02-007",
    speaker: "卒業要件先輩",
    text: "…………。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-008",
    speaker: "主人公",
    text: "…………あれ？",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-009",
    speaker: "主人公",
    text: "先輩、まだいたんですか？",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-010",
    speaker: "卒業要件先輩",
    text: "僕の話、まだ終わってない。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-011",
    speaker: "主人公",
    text: "あ。卒業要件。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-012",
    speaker: "卒業要件先輩",
    text: "そう。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-013",
    speaker: "卒業要件先輩",
    text: "履修を考えるなら、その先も見ておいた方がいい。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-014",
    speaker: "主人公",
    text: "でも卒業って、まだ4年後ですよ？",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-015",
    speaker: "卒業要件先輩",
    text: "だから今から見るんだ。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-016",
    speaker: "主人公",
    text: "またそれ言った！",
    character: graduation.normal
  }),
  // 数字を説明するまとまりだけ指導顔にする。124・14・74は提供された卒業要件表に基づく。
  q102Scene({
    id: "q1-02-017",
    speaker: "卒業要件先輩",
    text: "卒業には124単位以上。導入科目から14単位、基礎科目は各科目群から――",
    character: graduation.guidance
  }),
  q102Scene({
    id: "q1-02-018",
    speaker: "卒業要件先輩",
    text: "展開科目は74単位以上。その中でも基盤リテラシー、多言語情報理解――",
    character: graduation.guidance
  }),
  q102Scene({
    id: "q1-02-019",
    speaker: "主人公",
    text: "待って待って待って！！",
    character: graduation.guidance
  }),
  q102Scene({
    id: "q1-02-020",
    speaker: "卒業要件先輩",
    text: "……何？",
    character: graduation.guidance
  }),
  q102Scene({
    id: "q1-02-021",
    speaker: "主人公",
    text: "そんな一気に言われても無理だって！！",
    character: graduation.guidance
  }),
  q102Scene({
    id: "q1-02-022",
    speaker: "主人公",
    text: "124、14、74……もう分かんない！",
    character: graduation.guidance
  }),
  q102Scene({
    id: "q1-02-023",
    speaker: "卒業要件先輩",
    text: "……情報量が多かったか。",
    character: graduation.guidance
  }),
  q102Scene({
    id: "q1-02-024",
    speaker: "主人公",
    text: "多すぎです！",
    character: graduation.guidance
  }),
  // 要点を伝える会話ではノーマルを保ち、最後の笑顔を引き立てる。
  q102Scene({
    id: "q1-02-025",
    speaker: "卒業要件先輩",
    text: "全部覚えなくていい。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-026",
    speaker: "主人公",
    text: "え？",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-027",
    speaker: "卒業要件先輩",
    text: "詳細は、必要なときに学生便覧などで確認すればいい。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-028",
    speaker: "卒業要件先輩",
    text: "今覚えておくのは二つ。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-029",
    speaker: "卒業要件先輩",
    text: "卒業要件があること。",
    emphasis: true,
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-030",
    speaker: "卒業要件先輩",
    text: "そして、4年生へ進むための進級要件があること。",
    emphasis: true,
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-031",
    speaker: "主人公",
    text: "進級にも！？",
    character: graduation.normal
  }),
  // 90単位はユーザー確認の「4年生への進級条件」。卒業要件の124単位とは区別する。
  q102Scene({
    id: "q1-02-032",
    speaker: "卒業要件先輩",
    text: "3年生までに90単位。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-033",
    speaker: "主人公",
    text: "また数字増えた！",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-034",
    speaker: "卒業要件先輩",
    text: "だから、暗記しなくていい。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-035",
    speaker: "卒業要件先輩",
    text: "条件があると知っていて、必要なときに確認できれば十分。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-036",
    speaker: "主人公",
    text: "なるほど……。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-037",
    speaker: "主人公",
    text: "卒業直前に初めて見るものじゃないんだ。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-038",
    speaker: "卒業要件先輩",
    text: "そう。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-039",
    speaker: "卒業要件先輩",
    text: "たまに現在地を確認する。それだけ覚えておけばいい。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-040",
    speaker: "主人公",
    text: "……分かりました。",
    character: graduation.normal
  }),
  q102Scene({
    id: "q1-02-041",
    speaker: "卒業要件先輩",
    text: "……それでいい。",
    character: graduation.smile
  }),
  q102Scene({
    id: "q1-02-042",
    speaker: "主人公",
    text: "（怖そうなのに、ちゃんと最後まで面倒見てくれそうな先輩だな……。）",
    character: graduation.smile
  }),
  q102Scene({
    id: "q1-02-clear",
    speaker: "SYSTEM",
    text: "Q1-02 CLEAR",
    clear: true,
    next: "q1-03-001"
  }),

  /* ==================
   Q1-03 / Slackデビュー！
  =====================*/
  q103Scene({
    id: "q1-03-001",
    speaker: "卒業要件先輩",
    text: "細かいことは、その都度確認すればいい。",
    character: graduation.normal
  }),
  q103Scene({
    id: "q1-03-002",
    speaker: "卒業要件先輩",
    text: "知らないまま進まない。それだけ覚えておいて。",
    character: graduation.normal
  }),
  q103Scene({
    id: "q1-03-003",
    speaker: "主人公",
    text: "はーい……。",
    character: graduation.normal
  }),
  // 先輩が退場した後は立ち絵を消し、主人公が一人で通知を見る。
  q103Scene({
    id: "q1-03-004",
    speaker: "主人公",
    text: "確認、確認かぁ……。"
  }),
  q103Scene({
    id: "q1-03-005",
    speaker: "主人公",
    text: "大学って思ったより、自分で調べること多いなぁ。"
  }),
  q103Scene({
    id: "q1-03-006",
    speaker: "主人公",
    text: "ん？",
    notification: slackNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q103Scene({
    id: "q1-03-007",
    speaker: "主人公",
    text: "Slack……？",
    notification: slackNotification
  }),
  q103Scene({
    id: "q1-03-008",
    speaker: "主人公",
    text: "そういえば、大学用のSlackがあるんだった。",
    notification: slackNotification
  }),
  q103Scene({
    id: "q1-03-009",
    speaker: "主人公",
    text: "とりあえず開いてみよ。",
    notification: slackNotification
  }),
  // 自室背景を残したまま、提供されたスマホ画像でチャンネル一覧を見せる。
  q103Scene({
    id: "q1-03-010",
    speaker: "主人公",
    text: "…………。",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q103Scene({
    id: "q1-03-011",
    speaker: "主人公",
    text: "多っ！！",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q103Scene({
    id: "q1-03-012",
    speaker: "主人公",
    text: "お知らせっぽいのもあるし……",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q103Scene({
    id: "q1-03-013",
    speaker: "主人公",
    text: "授業の話もあるし……",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q103Scene({
    id: "q1-03-014",
    speaker: "主人公",
    text: "サークルもある！",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q103Scene({
    id: "q1-03-015",
    speaker: "主人公",
    text: "え、雑談してるところまであるんだけど！？",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q103Scene({
    id: "q1-03-016",
    speaker: "？？？",
    text: "そりゃあるでしょ。",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q103Scene({
    id: "q1-03-017",
    speaker: "主人公",
    text: "！？",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  // 登場以降はスマホを隠し、自己紹介のまとまりではノーマルを保つ。
  q103Scene({
    id: "q1-03-018",
    speaker: "Slackくん",
    text: "Slackって、連絡を見るだけの場所じゃないから。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-019",
    speaker: "主人公",
    text: "また出た！？",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-020",
    speaker: "Slackくん",
    text: "“また”？",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-021",
    speaker: "主人公",
    text: "今日こういう人に会うの、もう3人目！",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-022",
    speaker: "Slackくん",
    text: "へえ。大学生活、順調そうじゃん。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-023",
    speaker: "主人公",
    text: "どこが！？",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-024",
    speaker: "Slackくん",
    text: "俺はSlack。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-025",
    speaker: "主人公",
    text: "そのまんまなんだ……。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-026",
    speaker: "Slackくん",
    text: "大学からのお知らせを確認したり、分からないことを聞いたり。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-027",
    speaker: "Slackくん",
    text: "それだけじゃなくて、サークルに参加したり、同じ趣味の人と話したり。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-028",
    speaker: "Slackくん",
    text: "自分のtimesを作ってる人もいるよ。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-029",
    speaker: "主人公",
    text: "times？",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-030",
    speaker: "Slackくん",
    text: "自分用のチャンネルみたいなもの。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-031",
    speaker: "Slackくん",
    text: "勉強のこと書いたり、今日やったこと書いたり、雑談したり。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-032",
    speaker: "主人公",
    text: "へえ〜！",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-033",
    speaker: "主人公",
    text: "オンライン大学でも、ちゃんと人と交流できるんだ。",
    character: slack.normal
  }),
  q103Scene({
    id: "q1-03-034",
    speaker: "Slackくん",
    text: "むしろオンラインだからこそ、こういう場所は大事じゃない？",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-035",
    speaker: "主人公",
    text: "なるほど……。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-036",
    speaker: "主人公",
    text: "じゃあ、とりあえず色んなところに書き込んでみよ！",
    character: slack.smile
  }),
  // surprised→worriedの連続切替は省き、注意する会話全体を心配顔にする。
  q103Scene({
    id: "q1-03-037",
    speaker: "Slackくん",
    text: "待った待った。",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-038",
    speaker: "主人公",
    text: "え？",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-039",
    speaker: "Slackくん",
    text: "楽しい場所ではあるけど――",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-040",
    speaker: "Slackくん",
    text: "何でも好き勝手していい場所ってわけじゃないから。",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-choice",
    speaker: "SYSTEM",
    text: "Slackで最初に気をつけることは？",
    character: slack.worried,
    choices: [
      {
        label: "A",
        text: "チャンネルのルールや雰囲気を確認してから投稿する",
        effects: {
          informationUse: 2,
          selfManagement: 1,
          affection: { slack: 2 }
        },
        next: "q1-03-choice-a-001"
      },
      {
        label: "B",
        text: "分からないことがあったら、とりあえず全員にメンションする",
        effects: {
          informationUse: -1,
          affection: { slack: -1 }
        },
        next: "q1-03-choice-b-001"
      },
      {
        label: "C",
        text: "せっかくだし、思ったことは何でも自由に投稿する！",
        effects: {
          universityLife: 1,
          informationUse: -1,
          affection: { slack: -1 }
        },
        next: "q1-03-choice-c-001"
      }
    ]
  }),
  q103Scene({
    id: "q1-03-choice-a-001",
    speaker: "Slackくん",
    text: "正解。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-choice-a-002",
    speaker: "Slackくん",
    text: "チャンネルごとに目的もルールも違うからね。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-choice-a-003",
    speaker: "Slackくん",
    text: "最初にちょっと見るだけで、だいぶ安心。",
    character: slack.smile,
    next: "q1-03-final-001"
  }),
  // 原稿のポリシー注記は制作メモとして扱い、キャラクターの台詞には含めない。
  q103Scene({
    id: "q1-03-choice-b-001",
    speaker: "Slackくん",
    text: "うーん、それはちょっと待とうか。",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-choice-b-002",
    speaker: "主人公",
    text: "ダメなの？",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-choice-b-003",
    speaker: "Slackくん",
    text: "@channelとか@hereは、必要なときに使うもの。",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-choice-b-004",
    speaker: "Slackくん",
    text: "関係ない通知が大量に来たら、大事な情報まで埋もれるでしょ？",
    character: slack.worried,
    next: "q1-03-final-001"
  }),
  // serious素材は未用意のため、Cの注意も心配顔で統一する。
  q103Scene({
    id: "q1-03-choice-c-001",
    speaker: "Slackくん",
    text: "交流するのはいいけど、“何でも”は違うかな。",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-choice-c-002",
    speaker: "Slackくん",
    text: "画面の向こうにも人がいる。",
    character: slack.worried
  }),
  q103Scene({
    id: "q1-03-choice-c-003",
    speaker: "Slackくん",
    text: "自分の投稿には、自分で責任を持つ。それは忘れないで。",
    character: slack.worried,
    next: "q1-03-final-001"
  }),
  q103Scene({
    id: "q1-03-final-001",
    speaker: "主人公",
    text: "なるほど……。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-final-002",
    speaker: "主人公",
    text: "情報を見る場所でもあって、人とつながる場所でもある。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-final-003",
    speaker: "Slackくん",
    text: "そうそう。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-final-004",
    speaker: "Slackくん",
    text: "授業だけ受けてたら知れなかったことも、結構流れてくるよ。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-final-005",
    speaker: "主人公",
    text: "サークルとか？",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-final-006",
    speaker: "Slackくん",
    text: "サークルも。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-final-007",
    speaker: "Slackくん",
    text: "イベントも。",
    character: slack.smile
  }),
  q103Scene({
    id: "q1-03-final-008",
    speaker: "Slackくん",
    text: "あと――",
    character: slack.smile
  }),
  // grinは既存のウインクで表現し、情報通のやり取りから締めまで保つ。
  q103Scene({
    id: "q1-03-final-009",
    speaker: "Slackくん",
    text: "大学生活、ちょっと楽しくなる話とか。",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-010",
    speaker: "主人公",
    text: "なにそれ、気になる！",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-011",
    speaker: "Slackくん",
    text: "じゃ、まずはちゃんとSlack見る習慣つけな。",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-012",
    speaker: "主人公",
    text: "はーい！",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-013",
    speaker: "Slackくん",
    text: "……その返事。",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-014",
    speaker: "主人公",
    text: "え？",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-015",
    speaker: "Slackくん",
    text: "さっき履修登録にも同じ返事してなかった？",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-016",
    speaker: "主人公",
    text: "なんで知ってんの！？",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-017",
    speaker: "Slackくん",
    text: "情報通なんで。",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-018",
    speaker: "主人公",
    text: "Slack怖っ！",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-019",
    speaker: "Slackくん",
    text: "褒め言葉として受け取っとく。",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-020",
    speaker: "主人公",
    text: "（オンライン大学って、一人で授業を見るだけだと思ってたけど……）",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-final-021",
    speaker: "主人公",
    text: "（思ってたより、ずっと人がいるのかも。）",
    character: slack.wink
  }),
  q103Scene({
    id: "q1-03-clear",
    speaker: "SYSTEM",
    text: "Q1-03 CLEAR！",
    clear: true,
    next: "q1-04-001"
  }),

  /* ==================
   Q1-04 学園祭のお知らせ！
   選択肢・加点なし。時間と場所の変化は補助表示で伝える。
  =====================*/
  q104Scene({
    id: "q1-04-001",
    speaker: "主人公",
    text: "ZEN大学にも、だいぶ慣れてきたかも。",
    caption: "数週間後／自室・昼"
  }),
  q104Scene({
    id: "q1-04-002",
    speaker: "主人公",
    text: "授業見て、Slack見て……なんとなく流れも分かってきたし。",
    caption: "数週間後／自室・昼"
  }),
  q104Scene({
    id: "q1-04-003",
    speaker: "主人公",
    text: "ん？",
    notification: slackNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q104Scene({
    id: "q1-04-004",
    speaker: "主人公",
    text: "……“展軸祭”？",
    foreground: SLACK_PHONE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q104Scene({
    id: "q1-04-005",
    speaker: "Slackくん",
    text: "お、見つけた？",
    character: slack.normal
  }),
  q104Scene({
    id: "q1-04-006",
    speaker: "主人公",
    text: "これ何？",
    character: slack.normal
  }),
  q104Scene({
    id: "q1-04-007",
    speaker: "Slackくん",
    text: "大学祭。",
    character: slack.normal
  }),
  q104Scene({
    id: "q1-04-008",
    speaker: "主人公",
    text: "えっ。",
    character: slack.normal
  }),
  q104Scene({
    id: "q1-04-009",
    speaker: "主人公",
    text: "ZEN大学って学園祭あるの！？",
    character: slack.normal
  }),
  // grinはウインクで代用し、会話のまとまりが終わるまで固定する。
  q104Scene({
    id: "q1-04-010",
    speaker: "Slackくん",
    text: "あるよ。",
    character: slack.wink
  }),
  q104Scene({
    id: "q1-04-011",
    speaker: "Slackくん",
    text: "オンラインで楽しめる企画もあるし、リアル会場もある。",
    character: slack.wink
  }),
  q104Scene({
    id: "q1-04-012",
    speaker: "主人公",
    text: "現地も！？",
    character: slack.wink
  }),
  q104Scene({
    id: "q1-04-013",
    speaker: "主人公",
    text: "オンライン大学だから、そういうのないと思ってた……。",
    character: slack.wink
  }),
  q104Scene({
    id: "q1-04-014",
    speaker: "Slackくん",
    text: "大学生活を何だと思ってるの。",
    character: slack.wink
  }),
  q104Scene({
    id: "q1-04-015",
    speaker: "主人公",
    text: "授業見て、レポート出すもの……？",
    character: slack.wink
  }),
  q104Scene({
    id: "q1-04-016",
    speaker: "Slackくん",
    text: "だいぶ偏ってるね。",
    character: slack.worried
  }),
  q104Scene({
    id: "q1-04-017",
    speaker: "主人公",
    text: "……せっかくだし。",
    character: slack.worried
  }),
  q104Scene({
    id: "q1-04-018",
    speaker: "主人公",
    text: "現地、行ってみようかな。",
    character: slack.worried
  }),
  q104Scene({
    id: "q1-04-019",
    speaker: "Slackくん",
    text: "いいじゃん。行ってみよ。",
    character: slack.smile
  }),

  // 会場到着時は立ち絵を外し、背景と日時を先に見せる。
  q104FestivalScene({
    id: "q1-04-020",
    speaker: "主人公",
    text: "…………。",
    caption: "展軸祭当日／リアル会場"
  }),
  q104FestivalScene({
    id: "q1-04-021",
    speaker: "主人公",
    text: "人いる……。",
    caption: "展軸祭当日／リアル会場"
  }),
  q104FestivalScene({
    id: "q1-04-022",
    speaker: "Slackくん",
    text: "いるよ。",
    character: slack.normal
  }),
  q104FestivalScene({
    id: "q1-04-023",
    speaker: "主人公",
    text: "いや、分かってるけど！",
    character: slack.normal
  }),
  q104FestivalScene({
    id: "q1-04-024",
    speaker: "主人公",
    text: "オンラインでしか会ったことない人たちが、普通に歩いてる……！",
    character: slack.normal
  }),
  q104FestivalScene({
    id: "q1-04-025",
    speaker: "Slackくん",
    text: "そりゃ歩くでしょ。",
    character: slack.normal
  }),
  q104FestivalScene({
    id: "q1-04-026",
    speaker: "主人公",
    text: "もっとこう……",
    character: slack.normal
  }),
  q104FestivalScene({
    id: "q1-04-027",
    speaker: "主人公",
    text: "みんな概念みたいな……。",
    character: slack.normal
  }),
  q104FestivalScene({
    id: "q1-04-028",
    speaker: "Slackくん",
    text: "失礼すぎる。",
    character: slack.worried
  }),
  q104FestivalScene({
    id: "q1-04-029",
    speaker: "主人公",
    text: "ステージもあるし、ブースもいっぱいある……。",
    character: slack.worried
  }),
  q104FestivalScene({
    id: "q1-04-030",
    speaker: "主人公",
    text: "普通に大学祭だ！",
    character: slack.worried
  }),
  // 短いsmileへの切替は省き、会場でのやり取りはウインクのまま保つ。
  q104FestivalScene({
    id: "q1-04-031",
    speaker: "Slackくん",
    text: "だから最初からそう言ってるって。",
    character: slack.wink
  }),
  q104FestivalScene({
    id: "q1-04-032",
    speaker: "主人公",
    text: "オンラインで参加できるのもいいけど――",
    character: slack.wink
  }),
  q104FestivalScene({
    id: "q1-04-033",
    speaker: "主人公",
    text: "こうやって実際に来てみるのも楽しいね。",
    character: slack.wink
  }),
  q104FestivalScene({
    id: "q1-04-034",
    speaker: "Slackくん",
    text: "でしょ？",
    character: slack.wink
  }),

  // 全身素材は離れた位置に表示。振り返っても同じ大きさ・位置を維持する。
  q104FestivalScene({
    id: "q1-04-035",
    speaker: "主人公",
    text: "…………あれ？",
    character: tsuno.back,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-036",
    speaker: "主人公",
    text: "あのオレンジのパーカー……。",
    character: tsuno.back,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-037",
    speaker: "主人公",
    text: "なんか見覚えあるような……。",
    character: tsuno.back,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-038",
    speaker: "主人公",
    text: "あっ！！",
    character: tsuno.front,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-039",
    speaker: "主人公",
    text: "授業で見た先生！！",
    character: tsuno.front,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-040",
    speaker: "津野先生",
    text: "こんにちは。",
    character: tsuno.front,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-041",
    speaker: "主人公",
    text: "本人いた！！！",
    character: tsuno.front,
    characterLayout: "full-body"
  }),
  // 先生に注目する場面なので、Slackくんのツッコミ中も先生を表示する。
  q104FestivalScene({
    id: "q1-04-042",
    speaker: "Slackくん",
    text: "画面の中に住んでるわけじゃないからね。",
    character: tsuno.front,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-043",
    speaker: "主人公",
    text: "分かってるって！！",
    character: tsuno.front,
    characterLayout: "full-body"
  }),
  q104FestivalScene({
    id: "q1-04-044",
    speaker: "主人公",
    text: "オンライン大学って、もっと一人で完結するものだと思ってた。"
  }),
  q104FestivalScene({
    id: "q1-04-045",
    speaker: "主人公",
    text: "でもイベントもあるし、こうやって実際に人と会うこともできるんだね。"
  }),
  q104FestivalScene({
    id: "q1-04-046",
    speaker: "Slackくん",
    text: "大学生活って、授業だけじゃないから。",
    character: slack.smile
  }),
  q104FestivalScene({
    id: "q1-04-047",
    speaker: "主人公",
    text: "……大学生活、ちょっと楽しくなってきたかも。",
    character: slack.smile
  }),
  q104FestivalScene({
    id: "q1-04-048",
    speaker: "Slackくん",
    text: "やっと気づいた？",
    character: slack.wink
  }),
  q104FestivalScene({
    id: "q1-04-049",
    speaker: "主人公",
    text: "その言い方〜！",
    character: slack.wink
  }),
  q104FestivalScene({
    id: "q1-04-clear",
    speaker: "SYSTEM",
    text: "Q1-04 CLEAR！",
    clear: true,
    end: true
  })
];
