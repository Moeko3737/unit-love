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
const gakuchika = {
  normal: "./assets/images/characters/gakuchika/normal.png",
  smile: "./assets/images/characters/gakuchika/smile.png",
  grin: "./assets/images/characters/gakuchika/grin.png"
};
const report = {
  normal: "./assets/images/characters/report/normal.png",
  serious: "./assets/images/characters/report/serious.png"
};
const exam = {
  normal: "./assets/images/characters/exam/normal.png",
  worried: "./assets/images/characters/exam/worried.png",
  smile: "./assets/images/characters/exam/smile.png"
};
const FESTIVAL_BACKGROUND = "./assets/images/backgrounds/campus-festival.png";
const SLACK_PHONE_FOREGROUND = "./assets/images/foregrounds/smartphone-slack.png";
const REPORT_DEADLINE_FOREGROUND = "./assets/images/foregrounds/smartphone-report-deadline.png";
const slackNotification = {
  icon: "#",
  title: "Slack · ZEN大学",
  text: "新しい通知が届いています。"
};
const examNotification = {
  icon: "Z",
  title: "ZEN Portal",
  text: "単位認定試験の日程が公開されました"
};
const reportDeadlineSchedule = {
  period: "2026年度 1Q",
  title: "確認レポート 締切スケジュール",
  items: [
    { label: "第1回締切", date: "5月6日", detail: "第5回分まで" },
    { label: "第2回締切", date: "5月21日", detail: "第10回分まで" },
    { label: "最終締切", date: "6月7日", detail: "第15回分まで" }
  ]
};
const examAssignedSchedule = {
  period: "ZEN PORTAL / 試験日程",
  title: "○○科目",
  items: [
    { label: "あなたの受験日時", date: "○月○日", detail: "○:○○" }
  ]
};
const examPreparationChecklist = {
  period: "EXAM PREPARATION",
  title: "受験前チェック",
  items: [
    { label: "CHECK 01", date: "環境チェック", detail: "PC・通信環境" },
    { label: "CHECK 02", date: "カメラ・マイク", detail: "動作確認" },
    { label: "CHECK 03", date: "スマートフォン", detail: "カメラを準備" }
  ]
};
const partTimeShiftSchedule = {
  period: "PART-TIME JOB / SHIFT",
  title: "アルバイト シフト希望",
  items: [
    { label: "希望日", date: "火曜日", detail: "夕方から" },
    { label: "希望日", date: "木曜日", detail: "夕方から" },
    { label: "希望日", date: "土曜日", detail: "昼から" }
  ]
};
const q2ReportDeadlineNotification = {
  icon: "Z",
  title: "ZEN Portal",
  text: "確認レポート 第1回提出締切が近づいています"
};
const q2RemainingReports = {
  period: "ZEN STUDY / 履修科目一覧",
  title: "確認レポート 残り状況",
  items: [
    { label: "科目A", date: "あと2回", detail: "未提出" },
    { label: "科目B", date: "あと3回", detail: "未提出" },
    { label: "科目C", date: "あと1回", detail: "未提出" }
  ]
};
const q2ReportPlanningSchedule = {
  period: "第1回締切：3日後",
  title: "残り作業と予定を整理",
  items: [
    { label: "確認レポート", date: "合計6回", detail: "A：2回／B：3回／C：1回" },
    { label: "今日", date: "夕方", detail: "アルバイト" },
    { label: "明日", date: "夕方", detail: "アルバイト" },
    { label: "明後日", date: "予定なし", detail: "提出に使える日" }
  ]
};
const zenStudyCongestion = {
  period: "ZEN STUDY / 提出画面",
  title: "確認レポートを提出",
  items: [
    { label: "STATUS", date: "読み込み中…", detail: "アクセスが集中しています" }
  ]
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

function q105Scene(scene) {
  return q1Scene(scene, "Q1-05");
}

function q106Scene(scene) {
  return q1Scene(scene, "Q1-06");
}

function q107Scene(scene) {
  return q1Scene(scene, "Q1-07");
}

function q108Scene(scene) {
  return q1Scene(scene, "Q1-08");
}

function q201Scene(scene) {
  return q1Scene(scene, "Q2-01");
}

function q201Dialogue(number, speaker, text, scene = {}) {
  return q201Scene({
    id: `q2-01-${String(number).padStart(3, "0")}`,
    speaker,
    text,
    ...scene
  });
}

function q202Scene(scene) {
  return q1Scene(scene, "Q2-02");
}

function q202Dialogue(number, speaker, text, scene = {}) {
  return q202Scene({
    id: "q2-02-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
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
    next: "q1-04-time-passage"
  }),

  /* ==================
   Q1-04 学園祭のお知らせ！
   選択肢・加点なし。章の間の時間経過は専用画面で伝える。
  =====================*/
  q104Scene({
    id: "q1-04-time-passage",
    speaker: "SYSTEM",
    text: "数週間後／自室・昼",
    timePassage: {
      label: "TIME PASSES",
      title: "数週間後",
      detail: "自室・昼"
    },
    next: "q1-04-001"
  }),
  q104Scene({
    id: "q1-04-001",
    speaker: "主人公",
    text: "ZEN大学にも、だいぶ慣れてきたかも。"
  }),
  q104Scene({
    id: "q1-04-002",
    speaker: "主人公",
    text: "授業見て、Slack見て……なんとなく流れも分かってきたし。"
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
    next: "q1-05-time-passage"
  }),

  /* ==================
   Q1-05 授業だけが大学生活じゃない？
   選択肢・加点なし。表情は会話のまとまりごとにだけ変更する。
  =====================*/
  q105Scene({
    id: "q1-05-time-passage",
    speaker: "SYSTEM",
    text: "展軸祭の数日後／自室・昼",
    timePassage: {
      label: "A FEW DAYS LATER",
      title: "展軸祭の数日後",
      detail: "自室・昼"
    },
    next: "q1-05-001"
  }),
  q105Scene({
    id: "q1-05-001",
    speaker: "主人公",
    text: "展軸祭、楽しかったなぁ。"
  }),
  q105Scene({
    id: "q1-05-002",
    speaker: "主人公",
    text: "授業以外にも、いろんなことしてる人いたし。"
  }),
  q105Scene({
    id: "q1-05-003",
    speaker: "主人公",
    text: "サークルとか、イベントとか……。"
  }),
  q105Scene({
    id: "q1-05-004",
    speaker: "主人公",
    text: "私も何かやってみようかな。"
  }),
  q105Scene({
    id: "q1-05-005",
    speaker: "？？？",
    text: "いいじゃん。"
  }),
  q105Scene({
    id: "q1-05-006",
    speaker: "主人公",
    text: "また知らない人！",
    character: gakuchika.normal
  }),
  q105Scene({
    id: "q1-05-007",
    speaker: "ガクチカくん",
    text: "そんな警戒しなくても。",
    character: gakuchika.normal
  }),
  q105Scene({
    id: "q1-05-008",
    speaker: "ガクチカくん",
    text: "俺、ガクチカ。",
    character: gakuchika.normal
  }),
  q105Scene({
    id: "q1-05-009",
    speaker: "主人公",
    text: "ガクチカ……。",
    character: gakuchika.normal
  }),
  q105Scene({
    id: "q1-05-010",
    speaker: "主人公",
    text: "“学生時代に力を入れたこと”の？",
    character: gakuchika.normal
  }),
  q105Scene({
    id: "q1-05-011",
    speaker: "ガクチカくん",
    text: "そうそう。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-012",
    speaker: "主人公",
    text: "でも私、そんなすごいことできる気しないよ？",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-013",
    speaker: "ガクチカくん",
    text: "別に、すごいことじゃなくていいじゃん。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-014",
    speaker: "主人公",
    text: "え？",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-015",
    speaker: "ガクチカくん",
    text: "気になることがあったら、ちょっとやってみる。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-016",
    speaker: "ガクチカくん",
    text: "イベントに参加するとか。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-017",
    speaker: "ガクチカくん",
    text: "誰かと何か作ってみるとか。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-018",
    speaker: "ガクチカくん",
    text: "今まで知らなかったことを覗いてみるとか。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-019",
    speaker: "主人公",
    text: "そのくらいでもいいの？",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-020",
    speaker: "ガクチカくん",
    text: "いいよ。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-021",
    speaker: "ガクチカくん",
    text: "大学って、授業だけじゃないし。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-022",
    speaker: "ガクチカくん",
    text: "自由な時間を何に使うかも、君が決められる。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-023",
    speaker: "主人公",
    text: "……そっか。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-024",
    speaker: "主人公",
    text: "最初から“何かすごいことしなきゃ”って考えなくていいんだ。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-025",
    speaker: "ガクチカくん",
    text: "うん。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-026",
    speaker: "ガクチカくん",
    text: "まずは、“ちょっと気になる”くらいで十分。",
    character: gakuchika.smile
  }),
  q105Scene({
    id: "q1-05-027",
    speaker: "ガクチカくん",
    text: "で、何か気になることある？",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-028",
    speaker: "主人公",
    text: "うーん……。",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-029",
    speaker: "主人公",
    text: "まだ分かんない！",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-030",
    speaker: "ガクチカくん",
    text: "それもアリ。",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-031",
    speaker: "主人公",
    text: "いいんだ！",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-032",
    speaker: "ガクチカくん",
    text: "そのうち見つかるって。",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-033",
    speaker: "主人公",
    text: "（授業を受けて、単位を取るだけじゃなくて――）",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-034",
    speaker: "主人公",
    text: "（何を経験するかも、自分で選べるんだ。）",
    character: gakuchika.grin
  }),
  q105Scene({
    id: "q1-05-clear",
    speaker: "SYSTEM",
    text: "Q1-05 CLEAR！",
    clear: true,
    next: "q1-06-time-passage"
  }),

  /* ==================
   Q1-06 はじめまして、確認レポートくん
   2表情を会話のまとまりごとに使い、締切は専用カードでも示す。
  =====================*/
  q106Scene({
    id: "q1-06-time-passage",
    speaker: "SYSTEM",
    text: "1Q中盤／自室・昼",
    timePassage: {
      label: "MID QUARTER",
      title: "1Q中盤",
      detail: "自室・昼"
    },
    next: "q1-06-001"
  }),
  q106Scene({
    id: "q1-06-001",
    speaker: "主人公",
    text: "よし、今日の授業も終わり！"
  }),
  q106Scene({
    id: "q1-06-002",
    speaker: "主人公",
    text: "次は――"
  }),
  q106Scene({
    id: "q1-06-003",
    speaker: "主人公",
    text: "……《確認レポート》？",
    foreground: REPORT_DEADLINE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q106Scene({
    id: "q1-06-004",
    speaker: "主人公",
    text: "これも提出するんだ。",
    foreground: REPORT_DEADLINE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q106Scene({
    id: "q1-06-005",
    speaker: "主人公",
    text: "締切は……第1回が5月6日。",
    foreground: REPORT_DEADLINE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q106Scene({
    id: "q1-06-006",
    speaker: "主人公",
    text: "でも最終締切は6月7日か。",
    foreground: REPORT_DEADLINE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q106Scene({
    id: "q1-06-007",
    speaker: "主人公",
    text: "じゃあ、まだ全然余裕じゃん！",
    foreground: REPORT_DEADLINE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q106Scene({
    id: "q1-06-008",
    speaker: "？？？",
    text: "その考え方、やめた方がいい。",
    foreground: REPORT_DEADLINE_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q106Scene({
    id: "q1-06-009",
    speaker: "主人公",
    text: "！？",
    foreground: REPORT_DEADLINE_FOREGROUND,
    foregroundLayout: "phone"
  }),

  q106Scene({
    id: "q1-06-010",
    speaker: "主人公",
    text: "また知らない人！",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-011",
    speaker: "確認レポートくん",
    text: "確認レポート。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-012",
    speaker: "主人公",
    text: "……そのまんまなんだ。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-013",
    speaker: "確認レポートくん",
    text: "分かりやすいだろ。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-014",
    speaker: "主人公",
    text: "名前からして締切に厳しそう……。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-015",
    speaker: "確認レポートくん",
    text: "実際、厳しいから。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-016",
    speaker: "主人公",
    text: "認めるんだ。",
    character: report.normal
  }),

  q106Scene({
    id: "q1-06-017",
    speaker: "確認レポートくん",
    text: "オンデマンド科目では、基本的に各授業回ごとに確認レポートを提出する。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-018",
    speaker: "主人公",
    text: "毎回！？",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-019",
    speaker: "確認レポートくん",
    text: "2026年度の1Qなら――",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-020",
    speaker: "主人公",
    text: "あ、5回ずつ区切られてる。",
    deadlineSchedule: reportDeadlineSchedule
  }),
  q106Scene({
    id: "q1-06-021",
    speaker: "確認レポートくん",
    text: "そう。",
    deadlineSchedule: reportDeadlineSchedule
  }),
  q106Scene({
    id: "q1-06-022",
    speaker: "主人公",
    text: "じゃあさ。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-023",
    speaker: "主人公",
    text: "途中の締切に遅れても、6月7日までに全部出せばいいんでしょ？",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-024",
    speaker: "確認レポートくん",
    text: "“いい”とは言ってない。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-025",
    speaker: "主人公",
    text: "えっ。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-026",
    speaker: "確認レポートくん",
    text: "途中締切を過ぎた分も、最終締切までは提出できる。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-027",
    speaker: "確認レポートくん",
    text: "ただし――",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-028",
    speaker: "確認レポートくん",
    text: "間に合わなかった分は、3分の1減点。",
    character: report.serious,
    emphasis: true
  }),
  q106Scene({
    id: "q1-06-029",
    speaker: "主人公",
    text: "3分の1！？",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-030",
    speaker: "確認レポートくん",
    text: "だから、途中の締切もちゃんと守る。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-031",
    speaker: "主人公",
    text: "最終締切だけ見てちゃダメなんだ……。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-032",
    speaker: "確認レポートくん",
    text: "そういうこと。",
    character: report.serious
  }),

  q106Scene({
    id: "q1-06-033",
    speaker: "主人公",
    text: "でも最悪、6月7日までに全部出しきれば――",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-034",
    speaker: "確認レポートくん",
    text: "その“最悪”は、本当に避けた方がいい。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-035",
    speaker: "主人公",
    text: "……そんなに？",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-036",
    speaker: "確認レポートくん",
    text: "最終締切までに、必要な確認レポートや課題を全部提出できなかったら――",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-037",
    speaker: "確認レポートくん",
    text: "単位認定試験は受けられない。",
    character: report.serious,
    emphasis: true
  }),
  q106Scene({
    id: "q1-06-038",
    speaker: "主人公",
    text: "…………。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-039",
    speaker: "主人公",
    text: "え？",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-040",
    speaker: "確認レポートくん",
    text: "試験を受けられない。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-041",
    speaker: "主人公",
    text: "ってことは……。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-042",
    speaker: "確認レポートくん",
    text: "その科目の単位は取れない。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-043",
    speaker: "主人公",
    text: "重っ！！！",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-044",
    speaker: "主人公",
    text: "試験で頑張る以前の問題じゃん！",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-045",
    speaker: "確認レポートくん",
    text: "だから確認レポートは、“ただの宿題”じゃない。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-046",
    speaker: "確認レポートくん",
    text: "単位を取るまでの道の途中にあるもの。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-047",
    speaker: "主人公",
    text: "なるほど……。",
    character: report.serious
  }),

  q106Scene({
    id: "q1-06-048",
    speaker: "主人公",
    text: "じゃあ、最終日にまとめて全部提出するのは……。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-049",
    speaker: "確認レポートくん",
    text: "おすすめしない。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-050",
    speaker: "主人公",
    text: "ですよねぇ。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-051",
    speaker: "確認レポートくん",
    text: "提出できる回は、前倒しで提出できる。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-052",
    speaker: "確認レポートくん",
    text: "それに、締切前後はアクセスが集中して、ZEN Studyにつながりにくくなることもある。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-053",
    speaker: "主人公",
    text: "うわぁ……。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-054",
    speaker: "確認レポートくん",
    text: "だから――",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-055",
    speaker: "確認レポートくん",
    text: "未来の自分に任せすぎないこと。",
    character: report.serious
  }),

  q106Scene({
    id: "q1-06-choice",
    speaker: "SYSTEM",
    text: "確認レポート、どう進める？",
    character: report.serious,
    choices: [
      {
        label: "A",
        text: "締切を確認して、提出できる分から進める",
        effects: {
          selfManagement: 2,
          affection: { report: 2 }
        },
        next: "q1-06-choice-a-001"
      },
      {
        label: "B",
        text: "最終締切までにまとめて全部出す！",
        effects: {
          selfManagement: -1,
          affection: { report: -1 }
        },
        next: "q1-06-choice-b-001"
      },
      {
        label: "C",
        text: "まだ先だし、とりあえず閉じる",
        effects: {
          selfManagement: -2,
          affection: { report: -1 }
        },
        next: "q1-06-choice-c-001"
      }
    ]
  }),

  q106Scene({
    id: "q1-06-choice-a-001",
    speaker: "確認レポートくん",
    text: "正解。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-choice-a-002",
    speaker: "確認レポートくん",
    text: "全部一気に終わらせる必要はない。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-choice-a-003",
    speaker: "確認レポートくん",
    text: "今日できる分を、今日やればいい。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-choice-a-004",
    speaker: "主人公",
    text: "未来の私を助けておく！",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-choice-a-005",
    speaker: "確認レポートくん",
    text: "そういうこと。",
    character: report.normal,
    next: "q1-06-final-001"
  }),

  q106Scene({
    id: "q1-06-choice-b-001",
    speaker: "確認レポートくん",
    text: "……途中締切を過ぎた分、3分の1減点されるけど。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-choice-b-002",
    speaker: "主人公",
    text: "うっ。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-choice-b-003",
    speaker: "確認レポートくん",
    text: "しかも最終締切に間に合わなかったら？",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-choice-b-004",
    speaker: "主人公",
    text: "試験を受けられない……。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-choice-b-005",
    speaker: "確認レポートくん",
    text: "それでも？",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-choice-b-006",
    speaker: "主人公",
    text: "……Aに変えていい？",
    character: report.serious,
    next: "q1-06-final-001"
  }),

  q106Scene({
    id: "q1-06-choice-c-001",
    speaker: "確認レポートくん",
    text: "閉じても締切は消えない。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-choice-c-002",
    speaker: "主人公",
    text: "名言みたいに言わないで。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-choice-c-003",
    speaker: "確認レポートくん",
    text: "事実。",
    character: report.serious,
    next: "q1-06-final-001"
  }),

  q106Scene({
    id: "q1-06-final-001",
    speaker: "確認レポートくん",
    text: "覚えることは三つ。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-final-002",
    speaker: "確認レポートくん",
    text: "締切は一回とは限らない。",
    character: report.serious,
    emphasis: true
  }),
  q106Scene({
    id: "q1-06-final-003",
    speaker: "確認レポートくん",
    text: "途中締切に遅れた分は、3分の1減点。",
    character: report.serious,
    emphasis: true
  }),
  q106Scene({
    id: "q1-06-final-004",
    speaker: "確認レポートくん",
    text: "そして――",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-final-005",
    speaker: "確認レポートくん",
    text: "最終締切は、本当に最後。",
    character: report.serious,
    emphasis: true
  }),
  q106Scene({
    id: "q1-06-final-006",
    speaker: "主人公",
    text: "……はい。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-final-007",
    speaker: "確認レポートくん",
    text: "必要な提出を全部終えて、初めて単位認定試験に進める。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-final-008",
    speaker: "主人公",
    text: "じゃあ……。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-final-009",
    speaker: "主人公",
    text: "授業を見るところから、もう単位取得って始まってるんだ。",
    character: report.serious
  }),
  q106Scene({
    id: "q1-06-final-010",
    speaker: "確認レポートくん",
    text: "……分かってるじゃん。",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-final-011",
    speaker: "主人公",
    text: "今めちゃくちゃ説明されたからね！",
    character: report.normal
  }),
  q106Scene({
    id: "q1-06-clear",
    speaker: "SYSTEM",
    text: "Q1-06 CLEAR！",
    clear: true,
    next: "q1-07-time-passage"
  }),

  /* ==================
   Q1-07 試験日程が公開されました
   ZEN Portalの通知と割り当て日時を見せ、確認・変更の流れを伝える。
  =====================*/
  q107Scene({
    id: "q1-07-time-passage",
    speaker: "SYSTEM",
    text: "1Q後半／自室・昼",
    timePassage: {
      label: "LATE QUARTER",
      title: "1Q後半",
      detail: "自室・昼"
    },
    next: "q1-07-001"
  }),
  q107Scene({
    id: "q1-07-001",
    speaker: "主人公",
    text: "ん？",
    notification: examNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q107Scene({
    id: "q1-07-002",
    speaker: "主人公",
    text: "単位認定試験……。",
    notification: examNotification
  }),
  q107Scene({
    id: "q1-07-003",
    speaker: "主人公",
    text: "え、もう試験の日程出たの！？",
    notification: examNotification
  }),
  q107Scene({
    id: "q1-07-004",
    speaker: "主人公",
    text: "どれどれ……。",
    notification: examNotification
  }),
  q107Scene({
    id: "q1-07-005",
    speaker: "主人公",
    text: "あれ？",
    deadlineSchedule: examAssignedSchedule
  }),
  q107Scene({
    id: "q1-07-006",
    speaker: "主人公",
    text: "もう日にち決まってるんだ。",
    deadlineSchedule: examAssignedSchedule
  }),
  q107Scene({
    id: "q1-07-007",
    speaker: "主人公",
    text: "じゃあ、その日に受ければいいのね。",
    deadlineSchedule: examAssignedSchedule
  }),
  q107Scene({
    id: "q1-07-008",
    speaker: "？？？",
    text: "予定は？"
  }),
  q107Scene({
    id: "q1-07-009",
    speaker: "主人公",
    text: "……え？"
  }),

  q107Scene({
    id: "q1-07-010",
    speaker: "主人公",
    text: "また知らない人来た！",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-011",
    speaker: "単位認定試験くん",
    text: "単位認定試験。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-012",
    speaker: "主人公",
    text: "うん、今回は分かりやすい。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-013",
    speaker: "単位認定試験くん",
    text: "予定。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-014",
    speaker: "主人公",
    text: "え？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-015",
    speaker: "単位認定試験くん",
    text: "その日。空いてる？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-016",
    speaker: "主人公",
    text: "……まだ見てない。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-017",
    speaker: "単位認定試験くん",
    text: "確認して。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-018",
    speaker: "主人公",
    text: "今！？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-019",
    speaker: "単位認定試験くん",
    text: "今。",
    character: exam.normal
  }),

  q107Scene({
    id: "q1-07-020",
    speaker: "主人公",
    text: "でも、もう試験日時が指定されてるんでしょ？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-021",
    speaker: "主人公",
    text: "予定があっても、その日に受けるしかなくない？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-022",
    speaker: "単位認定試験くん",
    text: "違う。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-023",
    speaker: "主人公",
    text: "違うの？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-024",
    speaker: "単位認定試験くん",
    text: "各科目、候補日時は三つ。",
    character: exam.normal,
    emphasis: true
  }),
  q107Scene({
    id: "q1-07-025",
    speaker: "主人公",
    text: "三つ？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-026",
    speaker: "単位認定試験くん",
    text: "その中から一つが、最初に割り当てられる。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-027",
    speaker: "主人公",
    text: "ランダムで？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-028",
    speaker: "単位認定試験くん",
    text: "そう。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-029",
    speaker: "主人公",
    text: "じゃあ、この日が絶対ってわけじゃないんだ。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-030",
    speaker: "単位認定試験くん",
    text: "予定が合えば、そのまま。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-031",
    speaker: "主人公",
    text: "合わなかったら？",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-032",
    speaker: "単位認定試験くん",
    text: "残りの二つから選ぶ。",
    character: exam.normal,
    emphasis: true
  }),
  q107Scene({
    id: "q1-07-033",
    speaker: "主人公",
    text: "選べるんだ！",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-034",
    speaker: "単位認定試験くん",
    text: "ZEN Portalから日程変更を申請できる。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-035",
    speaker: "主人公",
    text: "おお……！",
    character: exam.normal
  }),

  q107Scene({
    id: "q1-07-036",
    speaker: "主人公",
    text: "だったら、試験が近くなってから確認しても――",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-037",
    speaker: "単位認定試験くん",
    text: "今見て。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-038",
    speaker: "主人公",
    text: "食い気味！",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-039",
    speaker: "単位認定試験くん",
    text: "バイト。予定。他の試験。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-040",
    speaker: "単位認定試験くん",
    text: "重なってから気づいても困る。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-041",
    speaker: "主人公",
    text: "あ。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-042",
    speaker: "主人公",
    text: "確かに……。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-043",
    speaker: "単位認定試験くん",
    text: "公開されたら、一度確認する。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-044",
    speaker: "単位認定試験くん",
    text: "必要なら、自分で調整する。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-045",
    speaker: "主人公",
    text: "ここでも自己管理かぁ……。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-046",
    speaker: "単位認定試験くん",
    text: "大学だから。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-047",
    speaker: "主人公",
    text: "その一言で全部片付けないで！",
    character: exam.normal
  }),

  q107Scene({
    id: "q1-07-choice",
    speaker: "SYSTEM",
    text: "試験日程が届いた！どうする？",
    character: exam.normal,
    choices: [
      {
        label: "A",
        text: "今すぐ確認して、自分の予定と照らし合わせる",
        effects: {
          selfManagement: 2,
          informationUse: 1,
          affection: { exam: 2 }
        },
        next: "q1-07-choice-a-001"
      },
      {
        label: "B",
        text: "試験直前になったら確認する",
        effects: {
          selfManagement: -1,
          affection: { exam: -1 }
        },
        next: "q1-07-choice-b-001"
      },
      {
        label: "C",
        text: "指定された日しか受けられないと思って、そのままにする",
        effects: {
          selfManagement: -2,
          informationUse: -1,
          affection: { exam: -1 }
        },
        next: "q1-07-choice-c-001"
      }
    ]
  }),

  q107Scene({
    id: "q1-07-choice-a-001",
    speaker: "主人公",
    text: "この日は……うん、空いてる！",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-choice-a-002",
    speaker: "単位認定試験くん",
    text: "なら、そのままでいい。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-choice-a-003",
    speaker: "主人公",
    text: "変更しなくても、確認すること自体が大事なんだね。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-choice-a-004",
    speaker: "単位認定試験くん",
    text: "そう。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-choice-a-005",
    speaker: "主人公",
    text: "早めに分かってれば安心だし。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-choice-a-006",
    speaker: "単位認定試験くん",
    text: "……分かってる。",
    character: exam.smile,
    next: "q1-07-final-001"
  }),

  q107Scene({
    id: "q1-07-choice-b-001",
    speaker: "単位認定試験くん",
    text: "……忘れない？",
    character: exam.worried
  }),
  q107Scene({
    id: "q1-07-choice-b-002",
    speaker: "主人公",
    text: "たぶん。",
    character: exam.worried
  }),
  q107Scene({
    id: "q1-07-choice-b-003",
    speaker: "単位認定試験くん",
    text: "予定、重ならない？",
    character: exam.worried
  }),
  q107Scene({
    id: "q1-07-choice-b-004",
    speaker: "主人公",
    text: "たぶん……。",
    character: exam.worried
  }),
  q107Scene({
    id: "q1-07-choice-b-005",
    speaker: "単位認定試験くん",
    text: "その“たぶん”を確認するために、今見る。",
    character: exam.worried
  }),
  q107Scene({
    id: "q1-07-choice-b-006",
    speaker: "主人公",
    text: "正論です……。",
    character: exam.worried,
    next: "q1-07-final-001"
  }),

  q107Scene({
    id: "q1-07-choice-c-001",
    speaker: "主人公",
    text: "その日ちょっと予定あるけど……。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-002",
    speaker: "主人公",
    text: "指定されてるなら仕方ないよね。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-003",
    speaker: "単位認定試験くん",
    text: "仕方なくない。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-004",
    speaker: "主人公",
    text: "え。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-005",
    speaker: "単位認定試験くん",
    text: "残り二つ。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-006",
    speaker: "主人公",
    text: "あ。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-007",
    speaker: "単位認定試験くん",
    text: "ZEN Portal。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-008",
    speaker: "主人公",
    text: "あっ。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-009",
    speaker: "単位認定試験くん",
    text: "変更申請。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-010",
    speaker: "主人公",
    text: "……今めちゃくちゃ教えてもらったところだった。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-choice-c-011",
    speaker: "単位認定試験くん",
    text: "そう。",
    character: exam.normal,
    next: "q1-07-final-001"
  }),

  q107Scene({
    id: "q1-07-final-001",
    speaker: "単位認定試験くん",
    text: "覚えておけばいい。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-final-002",
    speaker: "単位認定試験くん",
    text: "候補日時は三つ。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-final-003",
    speaker: "単位認定試験くん",
    text: "最初に、その中の一つが割り当てられる。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-final-004",
    speaker: "単位認定試験くん",
    text: "予定が合わなければ――",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-final-005",
    speaker: "単位認定試験くん",
    text: "残り二つから選んで、ZEN Portalで変更申請。",
    character: exam.normal,
    emphasis: true
  }),
  q107Scene({
    id: "q1-07-final-006",
    speaker: "主人公",
    text: "まず日程を確認して。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-final-007",
    speaker: "主人公",
    text: "自分の予定と照らし合わせて。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-final-008",
    speaker: "主人公",
    text: "必要なら、自分で変更する。",
    character: exam.normal
  }),
  q107Scene({
    id: "q1-07-final-009",
    speaker: "単位認定試験くん",
    text: "それでいい。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-final-010",
    speaker: "主人公",
    text: "授業も確認レポートも試験も……。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-final-011",
    speaker: "主人公",
    text: "大学って、“自分で確認する”こと多いね。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-final-012",
    speaker: "単位認定試験くん",
    text: "自由だから。",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-final-013",
    speaker: "主人公",
    text: "またそれ！",
    character: exam.smile
  }),
  q107Scene({
    id: "q1-07-clear",
    speaker: "SYSTEM",
    text: "Q1-07 CLEAR！",
    clear: true,
    next: "q1-08-time-passage"
  }),

  /* ==================
   Q1-08 初めての単位認定試験
   前日・当日・終了後を区切り、受験環境と最新ルールの確認を伝える。
  =====================*/
  q108Scene({
    id: "q1-08-time-passage",
    speaker: "SYSTEM",
    text: "1Q末／単位認定試験・前日",
    timePassage: {
      label: "END OF QUARTER",
      title: "1Q末",
      detail: "単位認定試験・前日"
    },
    next: "q1-08-001"
  }),
  q108Scene({
    id: "q1-08-001",
    speaker: "主人公",
    text: "明日……。"
  }),
  q108Scene({
    id: "q1-08-002",
    speaker: "主人公",
    text: "初めての単位認定試験……。"
  }),
  q108Scene({
    id: "q1-08-003",
    speaker: "主人公",
    text: "日程は確認した。"
  }),
  q108Scene({
    id: "q1-08-004",
    speaker: "主人公",
    text: "勉強も、一応した。"
  }),
  q108Scene({
    id: "q1-08-005",
    speaker: "主人公",
    text: "…………。"
  }),
  q108Scene({
    id: "q1-08-006",
    speaker: "主人公",
    text: "でも心配〜〜〜！！"
  }),
  q108Scene({
    id: "q1-08-007",
    speaker: "？？？",
    text: "何が？"
  }),
  q108Scene({
    id: "q1-08-008",
    speaker: "主人公",
    text: "うわっ！"
  }),

  q108Scene({
    id: "q1-08-009",
    speaker: "主人公",
    text: "単位認定試験くん！",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-010",
    speaker: "単位認定試験くん",
    text: "明日の準備は？",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-011",
    speaker: "主人公",
    text: "勉強？",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-012",
    speaker: "単位認定試験くん",
    text: "それだけ？",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-013",
    speaker: "主人公",
    text: "……え。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-014",
    speaker: "単位認定試験くん",
    text: "受験環境。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-015",
    speaker: "主人公",
    text: "受験環境？",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-016",
    speaker: "単位認定試験くん",
    text: "確認して。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-017",
    speaker: "主人公",
    text: "また確認！",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-018",
    speaker: "単位認定試験くん",
    text: "大事だから。",
    character: exam.normal
  }),

  q108Scene({
    id: "q1-08-019",
    speaker: "主人公",
    text: "えーっと……。",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-020",
    speaker: "主人公",
    text: "まず、事前の環境チェックと動作確認。",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-021",
    speaker: "単位認定試験くん",
    text: "実際に受験するPCと通信環境で。",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-022",
    speaker: "主人公",
    text: "PCのカメラとマイクも確認して……。",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-023",
    speaker: "主人公",
    text: "スマホも？",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-024",
    speaker: "単位認定試験くん",
    text: "使う。",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-025",
    speaker: "主人公",
    text: "PCカメラだけじゃないんだ。",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-026",
    speaker: "単位認定試験くん",
    text: "スマートフォンのカメラも準備する。",
    deadlineSchedule: examPreparationChecklist
  }),
  q108Scene({
    id: "q1-08-027",
    speaker: "主人公",
    text: "思ってたより本格的……！",
    deadlineSchedule: examPreparationChecklist
  }),

  q108Scene({
    id: "q1-08-028",
    speaker: "主人公",
    text: "じゃあ机の上も片付けて――",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-029",
    speaker: "主人公",
    text: "あ。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-030",
    speaker: "主人公",
    text: "計算とかメモしたくなったらどうするの？",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-031",
    speaker: "単位認定試験くん",
    text: "白紙と筆記用具。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-032",
    speaker: "主人公",
    text: "使っていいの？",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-033",
    speaker: "単位認定試験くん",
    text: "2026年度は、全授業科目共通で――",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-034",
    speaker: "単位認定試験くん",
    text: "白紙は30枚まで。筆記用具は持ち込み可。",
    character: exam.normal,
    emphasis: true
  }),
  q108Scene({
    id: "q1-08-035",
    speaker: "主人公",
    text: "30枚！",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-036",
    speaker: "主人公",
    text: "思ったより多い。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-037",
    speaker: "単位認定試験くん",
    text: "必要な分だけ用意して。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-038",
    speaker: "主人公",
    text: "はい。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-039",
    speaker: "単位認定試験くん",
    text: "他の持ち込みや受験ルールも、案内を確認する。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-040",
    speaker: "主人公",
    text: "了解！",
    character: exam.normal
  }),

  q108Scene({
    id: "q1-08-041",
    speaker: "主人公",
    text: "よし。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-042",
    speaker: "主人公",
    text: "日時確認。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-043",
    speaker: "主人公",
    text: "環境チェック。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-044",
    speaker: "主人公",
    text: "カメラとマイク。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-045",
    speaker: "主人公",
    text: "スマホ。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-046",
    speaker: "主人公",
    text: "白紙と筆記用具。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-047",
    speaker: "主人公",
    text: "……これで大丈夫かな。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-048",
    speaker: "単位認定試験くん",
    text: "かなり。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-049",
    speaker: "主人公",
    text: "“かなり”！？",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-050",
    speaker: "単位認定試験くん",
    text: "あとは勉強。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-051",
    speaker: "主人公",
    text: "そこが一番不安なんだってば〜！",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-052",
    speaker: "？？？",
    text: "だったらSlack見た？"
  }),
  q108Scene({
    id: "q1-08-053",
    speaker: "主人公",
    text: "？"
  }),

  q108Scene({
    id: "q1-08-054",
    speaker: "主人公",
    text: "Slackくん！",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-055",
    speaker: "Slackくん",
    text: "初試験でしょ？",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-056",
    speaker: "Slackくん",
    text: "一人で煮詰まってない？",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-057",
    speaker: "主人公",
    text: "ちょっと煮詰まってます……。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-058",
    speaker: "Slackくん",
    text: "学生同士で授業の内容について話したり、学びを深めたりするチャンネルもあるよ。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-059",
    speaker: "主人公",
    text: "試験勉強にも使えるんだ。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-060",
    speaker: "Slackくん",
    text: "使い方次第！",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-061",
    speaker: "Slackくん",
    text: "学生同士で問題を作って、模擬試験みたいに共有してる人たちもいるし。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-062",
    speaker: "主人公",
    text: "え、そんなことしてるの！？",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-063",
    speaker: "Slackくん",
    text: "問題出し合ったり、解いてみたり。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-064",
    speaker: "Slackくん",
    text: "オンラインでも、一緒に勉強はできるってこと。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-065",
    speaker: "主人公",
    text: "なるほど……。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-066",
    speaker: "主人公",
    text: "一人で授業見て、一人で試験受けるだけじゃないんだね。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-067",
    speaker: "Slackくん",
    text: "そうそう！",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-068",
    speaker: "単位認定試験くん",
    text: "本番は自分で受けるけど。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-069",
    speaker: "主人公",
    text: "今ちょっと安心したところだったのに！",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-070",
    speaker: "Slackくん",
    text: "現実に戻すの早いって！",
    character: slack.smile,
    next: "q1-08-exam-day"
  }),

  q108Scene({
    id: "q1-08-exam-day",
    speaker: "SYSTEM",
    text: "受験当日／開始前",
    timePassage: {
      label: "EXAM DAY",
      title: "受験当日",
      detail: "単位認定試験・開始前"
    },
    next: "q1-08-071"
  }),
  q108Scene({
    id: "q1-08-071",
    speaker: "主人公",
    text: "よし……。"
  }),
  q108Scene({
    id: "q1-08-072",
    speaker: "主人公",
    text: "受験日時、確認。"
  }),
  q108Scene({
    id: "q1-08-073",
    speaker: "主人公",
    text: "環境チェック、済み。"
  }),
  q108Scene({
    id: "q1-08-074",
    speaker: "主人公",
    text: "PC、スマホ、準備OK。"
  }),
  q108Scene({
    id: "q1-08-075",
    speaker: "主人公",
    text: "机の上も大丈夫。"
  }),
  q108Scene({
    id: "q1-08-076",
    speaker: "主人公",
    text: "白紙と筆記用具も準備した。"
  }),
  q108Scene({
    id: "q1-08-077",
    speaker: "主人公",
    text: "……いける。"
  }),
  q108Scene({
    id: "q1-08-078",
    speaker: "単位認定試験くん",
    text: "準備したから。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-079",
    speaker: "主人公",
    text: "うん。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-080",
    speaker: "単位認定試験くん",
    text: "あとは受けるだけ。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-081",
    speaker: "主人公",
    text: "……行ってきます！",
    character: exam.smile,
    next: "q1-08-after-exam"
  }),

  q108Scene({
    id: "q1-08-after-exam",
    speaker: "SYSTEM",
    text: "試験終了後／少しして",
    timePassage: {
      label: "AFTER THE EXAM",
      title: "試験終了後",
      detail: "少しして"
    },
    next: "q1-08-082"
  }),
  q108Scene({
    id: "q1-08-082",
    speaker: "主人公",
    text: "――終わったああああ！！"
  }),
  q108Scene({
    id: "q1-08-083",
    speaker: "主人公",
    text: "初めての単位認定試験、終了！"
  }),
  q108Scene({
    id: "q1-08-084",
    speaker: "主人公",
    text: "めちゃくちゃ緊張した……。"
  }),
  q108Scene({
    id: "q1-08-085",
    speaker: "Slackくん",
    text: "おつかれ！",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-086",
    speaker: "主人公",
    text: "でも、前もって確認しておいてよかった。",
    character: slack.smile
  }),
  q108Scene({
    id: "q1-08-087",
    speaker: "単位認定試験くん",
    text: "それと。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-088",
    speaker: "主人公",
    text: "まだあるの？",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-089",
    speaker: "単位認定試験くん",
    text: "今日覚えたルール。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-090",
    speaker: "単位認定試験くん",
    text: "ずっと同じとは限らない。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-091",
    speaker: "主人公",
    text: "あ。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-092",
    speaker: "単位認定試験くん",
    text: "受験するときは――",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-093",
    speaker: "単位認定試験くん",
    text: "学生便覧やZEN Portalで、最新の情報を自分で確認して。",
    character: exam.normal,
    emphasis: true
  }),
  q108Scene({
    id: "q1-08-094",
    speaker: "主人公",
    text: "……最後はやっぱり、“自分で確認”なんだね。",
    character: exam.normal
  }),
  q108Scene({
    id: "q1-08-095",
    speaker: "単位認定試験くん",
    text: "そう。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-096",
    speaker: "主人公",
    text: "でも。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-097",
    speaker: "主人公",
    text: "入学した頃より、その言葉に慣れてきたかも。",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-098",
    speaker: "主人公",
    text: "（履修登録も。）",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-099",
    speaker: "主人公",
    text: "（Slackも。）",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-100",
    speaker: "主人公",
    text: "（確認レポートも。）",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-101",
    speaker: "主人公",
    text: "（単位認定試験も。）",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-102",
    speaker: "主人公",
    text: "（大学では、自分で確認して、自分で動く。）",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-103",
    speaker: "主人公",
    text: "（少しずつ分かってきた気がする。）",
    character: exam.smile
  }),
  q108Scene({
    id: "q1-08-clear",
    speaker: "SYSTEM",
    text: "Q1-08 CLEAR！",
    clear: true,
    quarterEnd: {
      nextQuarter: 2,
      target: "q2-start"
    }
  }),

  /* ==================
   Q2-01 2Q、スタート！
   2Qの履修確認と、大学以外の予定を含めた自己管理を伝える。
  =====================*/
  q201Scene({
    id: "q2-start",
    speaker: "SYSTEM",
    text: "2Q初日／自室・朝",
    timePassage: {
      label: "NEXT QUARTER",
      title: "2Q START",
      detail: "2Q初日・自室／朝"
    },
    next: "q2-01-001"
  }),

  q201Dialogue(1, "主人公", "今日から2Q！"),
  q201Dialogue(2, "主人公", "1Qもなんとか乗り越えたし――"),
  q201Dialogue(3, "主人公", "私、大学生活かなり慣れてきたかも！"),
  q201Dialogue(4, "主人公", "通学もないし。"),
  q201Dialogue(5, "主人公", "授業も自分のペースで進められるし。"),
  q201Dialogue(6, "主人公", "……思ったより時間あるじゃん！"),

  q201Dialogue(7, "主人公", "というわけで。", {
    deadlineSchedule: partTimeShiftSchedule
  }),
  q201Dialogue(8, "主人公", "アルバイト、始めます！", {
    deadlineSchedule: partTimeShiftSchedule
  }),
  q201Dialogue(9, "主人公", "この日と、この日……。", {
    deadlineSchedule: partTimeShiftSchedule
  }),
  q201Dialogue(10, "主人公", "ここもシフト入れちゃお。", {
    deadlineSchedule: partTimeShiftSchedule
  }),
  q201Dialogue(11, "？？？", "ちょっと待って。", {
    deadlineSchedule: partTimeShiftSchedule
  }),
  q201Dialogue(12, "主人公", "あ。", {
    deadlineSchedule: partTimeShiftSchedule
  }),

  q201Dialogue(13, "主人公", "履修登録くん！", { character: rishu.normal }),
  q201Dialogue(14, "履修登録くん", "2Q始まったね。", { character: rishu.normal }),
  q201Dialogue(15, "主人公", "うん！", { character: rishu.normal }),
  q201Dialogue(16, "履修登録くん", "で。", { character: rishu.normal }),
  q201Dialogue(17, "履修登録くん", "2Qの履修、確認した？", { character: rishu.normal }),
  q201Dialogue(18, "主人公", "え？", { character: rishu.normal }),
  q201Dialogue(19, "主人公", "履修登録なら1Qでやったよ？", { character: rishu.normal }),
  q201Dialogue(20, "履修登録くん", "そう。", { character: rishu.normal }),
  q201Dialogue(21, "履修登録くん", "1Qのときに、2Qの科目も登録してる。", { character: rishu.normal }),
  q201Dialogue(22, "主人公", "じゃあ大丈夫じゃん。", { character: rishu.normal }),
  q201Dialogue(23, "履修登録くん", "“登録したから終わり”にはしない。", {
    character: rishu.troubled
  }),
  q201Dialogue(24, "主人公", "うっ。", { character: rishu.troubled }),

  q201Dialogue(25, "履修登録くん", "Qが変わったら、一度確認。", { character: rishu.troubled }),
  q201Dialogue(26, "履修登録くん", "2Qで受ける科目。", { character: rishu.troubled }),
  q201Dialogue(27, "履修登録くん", "授業の予定。", { character: rishu.troubled }),
  q201Dialogue(28, "履修登録くん", "確認レポートや試験が入ってくる時期。", { character: rishu.troubled }),
  q201Dialogue(29, "主人公", "あ……。", { character: rishu.troubled }),
  q201Dialogue(30, "主人公", "バイトのシフトしか見てなかった。", { character: rishu.troubled }),
  q201Dialogue(31, "履修登録くん", "だと思った。", { character: rishu.troubled }),
  q201Dialogue(32, "主人公", "顔に出てた？", { character: rishu.troubled }),
  q201Dialogue(33, "履修登録くん", "かなり。", { character: rishu.troubled }),

  q201Dialogue(34, "主人公", "でも、もう登録してあるなら。", { character: rishu.troubled }),
  q201Dialogue(35, "主人公", "もし予定的に厳しそうでも、そのまま受けるしかない？", { character: rishu.troubled }),
  q201Dialogue(36, "履修登録くん", "2Qの最初なら、履修を修正できる期間がある。", {
    character: rishu.troubled,
    emphasis: true
  }),
  q201Dialogue(37, "主人公", "まだ直せるんだ！", { character: rishu.troubled }),
  q201Dialogue(38, "履修登録くん", "必要ならね。", { character: rishu.troubled }),
  q201Dialogue(39, "履修登録くん", "実際に2Qが始まってから、一度見直す。", { character: rishu.troubled }),
  q201Dialogue(40, "履修登録くん", "そのうえで、大学とバイトの予定を組む。", { character: rishu.troubled }),
  q201Dialogue(41, "主人公", "なるほど……。", { character: rishu.troubled }),

  q201Dialogue(42, "主人公", "じゃあ。", { character: rishu.troubled }),
  q201Dialogue(43, "主人公", "まず2Qの履修と予定を確認して。", { character: rishu.troubled }),
  q201Dialogue(44, "主人公", "それからバイトのシフト！", { character: rishu.troubled }),
  q201Dialogue(45, "履修登録くん", "うん。それなら安心。", { character: rishu.smile }),
  q201Dialogue(46, "主人公", "でも、3Qになったらどうするの？", { character: rishu.smile }),
  q201Dialogue(47, "履修登録くん", "また履修登録。", { character: rishu.smile }),
  q201Dialogue(48, "主人公", "また！？", { character: rishu.smile }),
  q201Dialogue(49, "履修登録くん", "3Qで、3Qと4Qの履修を決める。", {
    character: rishu.smile,
    emphasis: true
  }),
  q201Dialogue(50, "主人公", "なるほど。", { character: rishu.smile }),
  q201Dialogue(51, "主人公", "じゃあ半年ごとに、また考える感じなんだ。", { character: rishu.smile }),
  q201Dialogue(52, "履修登録くん", "そう。", { character: rishu.smile }),
  q201Dialogue(53, "履修登録くん", "生活も予定も変わるからね。", { character: rishu.smile }),
  q201Dialogue(54, "主人公", "バイト始める今とか、まさにそうか。", { character: rishu.smile }),

  q201Dialogue(55, "主人公", "よし！", { character: rishu.smile }),
  q201Dialogue(56, "主人公", "大学もバイトも、両方ちゃんとやる！", { character: rishu.smile }),
  q201Dialogue(57, "主人公", "オンライン大学だし、きっと余裕でしょ！", { character: rishu.smile }),
  q201Dialogue(58, "履修登録くん", "…………。", { character: rishu.troubled }),
  q201Dialogue(59, "主人公", "その沈黙なに。", { character: rishu.troubled }),
  q201Dialogue(60, "履修登録くん", "いや。", { character: rishu.troubled }),
  q201Dialogue(61, "履修登録くん", "そのセリフ、覚えておこうかなって。", { character: rishu.troubled }),
  q201Dialogue(62, "主人公", "不穏！！", { character: rishu.troubled }),

  q201Dialogue(63, "主人公", "（授業も。）"),
  q201Dialogue(64, "主人公", "（確認レポートも。）"),
  q201Dialogue(65, "主人公", "（バイトも。）"),
  q201Dialogue(66, "主人公", "（全部、自分で予定を組める。）"),
  q201Dialogue(67, "主人公", "（自由って便利だけど――）"),
  q201Dialogue(68, "主人公", "（使い方を間違えると、大変なのかも。）"),
  q201Dialogue(69, "主人公", "……まあ、なんとかなるでしょ！"),
  q201Dialogue(70, "履修登録くん", "また言った。", { character: rishu.normal }),
  q201Dialogue(71, "主人公", "大丈夫だって〜！", { character: rishu.normal }),
  q201Scene({
    id: "q2-01-clear",
    speaker: "SYSTEM",
    text: "Q2-01 CLEAR！",
    clear: true,
    next: "q2-02-time-passage"
  }),

  /* ==================
   Q2-02 第一回締切、間に合う！？
   複数科目と私生活の予定を並べ、締切から逆算する大切さを伝える。
  =====================*/
  q202Scene({
    id: "q2-02-time-passage",
    speaker: "SYSTEM",
    text: "2Q前半／自室・夕方",
    timePassage: {
      label: "A FEW WEEKS LATER",
      title: "2Q前半",
      detail: "自室・夕方"
    },
    next: "q2-02-001"
  }),

  q202Dialogue(1, "主人公", "2Qもだいぶ慣れてきた〜！"),
  q202Dialogue(2, "主人公", "バイトも楽しいし。"),
  q202Dialogue(3, "主人公", "大学とバイト、普通に両立できてるじゃん！"),
  q202Dialogue(4, "主人公", "ん？", {
    notification: q2ReportDeadlineNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q202Dialogue(5, "主人公", "あ、もう第1回締切か。", {
    notification: q2ReportDeadlineNotification
  }),
  q202Dialogue(6, "主人公", "でも確認レポートなら、ちゃんとちょこちょこやってるし――", {
    notification: q2ReportDeadlineNotification
  }),

  q202Dialogue(7, "主人公", "えーっと。", { deadlineSchedule: q2RemainingReports }),
  q202Dialogue(8, "主人公", "この科目は……あと2回分。", { deadlineSchedule: q2RemainingReports }),
  q202Dialogue(9, "主人公", "こっちは3回分。", { deadlineSchedule: q2RemainingReports }),
  q202Dialogue(10, "主人公", "これは……あと1回。", { deadlineSchedule: q2RemainingReports }),
  q202Dialogue(11, "主人公", "…………。", { deadlineSchedule: q2RemainingReports }),
  q202Dialogue(12, "主人公", "思ったより残ってる。", { deadlineSchedule: q2RemainingReports }),
  q202Dialogue(13, "？？？", "ようやく気づいた。", { deadlineSchedule: q2RemainingReports }),
  q202Dialogue(14, "主人公", "うわっ！", { deadlineSchedule: q2RemainingReports }),

  q202Dialogue(15, "主人公", "確認レポートくん！", { character: report.normal }),
  q202Dialogue(16, "確認レポートくん", "やってはいたんだね。", { character: report.normal }),
  q202Dialogue(17, "主人公", "でしょ！？", { character: report.normal }),
  q202Dialogue(18, "主人公", "今回はちゃんと成長してるから！", { character: report.normal }),
  q202Dialogue(19, "確認レポートくん", "でも、残りはいくつ？", { character: report.normal }),
  q202Dialogue(20, "主人公", "…………6個。", { character: report.normal }),
  q202Dialogue(21, "確認レポートくん", "締切まで何日？", { character: report.normal }),
  q202Dialogue(22, "主人公", "……3日。", { character: report.normal }),
  q202Dialogue(23, "確認レポートくん", "バイトは？", { character: report.normal }),
  q202Dialogue(24, "主人公", "今日と明日。", { character: report.normal }),
  q202Dialogue(25, "主人公", "その顔やめて。", { character: report.serious }),
  q202Dialogue(26, "確認レポートくん", "何も言ってない。", { character: report.serious }),
  q202Dialogue(27, "主人公", "顔がめちゃくちゃ言ってる！", { character: report.serious }),

  q202Dialogue(28, "確認レポートくん", "“空いてる時間にやろう”って思ってた？", {
    character: report.serious
  }),
  q202Dialogue(29, "主人公", "……はい。", { character: report.serious }),
  q202Dialogue(30, "確認レポートくん", "空いてる時間、どこ？", { character: report.serious }),
  q202Dialogue(31, "主人公", "…………。", { character: report.serious }),
  q202Dialogue(32, "確認レポートくん", "ないね。", { character: report.serious }),
  q202Dialogue(33, "主人公", "言わないで！！", { character: report.serious }),

  q202Dialogue(34, "確認レポートくん", "まず、全部並べる。", {
    deadlineSchedule: q2ReportPlanningSchedule
  }),
  q202Dialogue(35, "主人公", "こうやって見ると……。", {
    deadlineSchedule: q2ReportPlanningSchedule
  }),
  q202Dialogue(36, "主人公", "思ってたより余裕ないね。", {
    deadlineSchedule: q2ReportPlanningSchedule
  }),
  q202Dialogue(37, "確認レポートくん", "予定は、頭の中だけで管理しない。", {
    deadlineSchedule: q2ReportPlanningSchedule
  }),
  q202Dialogue(38, "主人公", "はい……。", {
    deadlineSchedule: q2ReportPlanningSchedule
  }),
  q202Dialogue(39, "確認レポートくん", "締切と、残ってる作業と、自分の予定。", {
    deadlineSchedule: q2ReportPlanningSchedule
  }),
  q202Dialogue(40, "確認レポートくん", "全部見てから決める。", {
    deadlineSchedule: q2ReportPlanningSchedule
  }),

  q202Scene({
    id: "q2-02-choice",
    speaker: "SYSTEM",
    text: "残り6回分。どう進める？",
    character: report.serious,
    choices: [
      {
        label: "A",
        text: "残りの作業と予定を確認して、今日から少しずつ割り振る",
        effects: {
          selfManagement: 3,
          informationUse: 1,
          affection: { report: 2 }
        },
        next: "q2-02-choice-a-001"
      },
      {
        label: "B",
        text: "バイトのない日に、まとめて全部やる！",
        effects: {
          selfManagement: -1,
          affection: { report: -1 }
        },
        next: "q2-02-choice-b-001"
      },
      {
        label: "C",
        text: "まだ3日あるし、今日はバイト優先！",
        effects: {
          selfManagement: -2,
          affection: { report: -1 }
        },
        next: "q2-02-choice-c-001"
      }
    ]
  }),

  q202Scene({
    id: "q2-02-choice-a-001",
    speaker: "主人公",
    text: "今日はバイト前に1個。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-002",
    speaker: "主人公",
    text: "明日は午前中に2個。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-003",
    speaker: "主人公",
    text: "明後日に残り3個……じゃなくて。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-004",
    speaker: "主人公",
    text: "明後日の午前と午後にも分けよう。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-005",
    speaker: "確認レポートくん",
    text: "うん。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-006",
    speaker: "主人公",
    text: "締切当日は？",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-007",
    speaker: "確認レポートくん",
    text: "確認するだけ。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-008",
    speaker: "主人公",
    text: "提出作業を残さない！",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-009",
    speaker: "確認レポートくん",
    text: "分かってきたね。",
    character: report.normal,
    next: "q2-02-choice-a-before-deadline"
  }),
  q202Scene({
    id: "q2-02-choice-a-before-deadline",
    speaker: "SYSTEM",
    text: "締切前日",
    timePassage: {
      label: "THE DAY BEFORE",
      title: "締切前日",
      detail: "自室"
    },
    next: "q2-02-choice-a-010"
  }),
  q202Scene({
    id: "q2-02-choice-a-010",
    speaker: "主人公",
    text: "……全部提出完了！",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-011",
    speaker: "主人公",
    text: "やった〜〜！",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-012",
    speaker: "確認レポートくん",
    text: "お疲れ。",
    character: report.normal,
    next: "q2-02-choice-a-deadline-night"
  }),
  q202Scene({
    id: "q2-02-choice-a-deadline-night",
    speaker: "SYSTEM",
    text: "翌日・締切日の夜",
    timePassage: {
      label: "DEADLINE DAY",
      title: "締切日の夜",
      detail: "翌日・自室"
    },
    next: "q2-02-choice-a-013"
  }),
  q202Scene({
    id: "q2-02-choice-a-013",
    speaker: "主人公",
    text: "あ、今日が第1回締切だ。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-choice-a-014",
    speaker: "主人公",
    text: "……ZEN Study、ちょっと読み込み遅い？",
    deadlineSchedule: zenStudyCongestion
  }),
  q202Scene({
    id: "q2-02-choice-a-015",
    speaker: "確認レポートくん",
    text: "締切前後はアクセスが集中して、つながりにくくなることもある。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-a-016",
    speaker: "主人公",
    text: "…………。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-a-017",
    speaker: "主人公",
    text: "先に出しておいてよかった。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-a-018",
    speaker: "確認レポートくん",
    text: "でしょ。",
    character: report.normal,
    next: "q2-02-common-next-day"
  }),

  q202Scene({
    id: "q2-02-choice-b-001",
    speaker: "確認レポートくん",
    text: "6個全部？",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-002",
    speaker: "主人公",
    text: "一日空いてるし、いけるでしょ！",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-003",
    speaker: "確認レポートくん",
    text: "……予定通り進めばね。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-004",
    speaker: "主人公",
    text: "不吉なこと言わないで！",
    character: report.serious,
    next: "q2-02-choice-b-deadline-night"
  }),
  q202Scene({
    id: "q2-02-choice-b-deadline-night",
    speaker: "SYSTEM",
    text: "締切当日／夜",
    timePassage: {
      label: "DEADLINE DAY",
      title: "締切当日",
      detail: "自室・夜"
    },
    next: "q2-02-choice-b-005"
  }),
  q202Scene({
    id: "q2-02-choice-b-005",
    speaker: "主人公",
    text: "あと……1個！"
  }),
  q202Scene({
    id: "q2-02-choice-b-006",
    speaker: "主人公",
    text: "思ったより時間かかった〜〜！"
  }),
  q202Scene({
    id: "q2-02-choice-b-007",
    speaker: "主人公",
    text: "でもまだ間に合う！"
  }),
  q202Scene({
    id: "q2-02-choice-b-008",
    speaker: "主人公",
    text: "……ん？",
    deadlineSchedule: zenStudyCongestion
  }),
  q202Scene({
    id: "q2-02-choice-b-009",
    speaker: "主人公",
    text: "読み込み遅くない？",
    deadlineSchedule: zenStudyCongestion
  }),
  q202Scene({
    id: "q2-02-choice-b-010",
    speaker: "主人公",
    text: "待って待って待って。",
    deadlineSchedule: zenStudyCongestion
  }),
  q202Scene({
    id: "q2-02-choice-b-011",
    speaker: "主人公",
    text: "今重くならないでよ〜〜！！",
    deadlineSchedule: zenStudyCongestion
  }),
  q202Scene({
    id: "q2-02-choice-b-012",
    speaker: "確認レポートくん",
    text: "締切前後は、アクセスが集中することもある。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-013",
    speaker: "主人公",
    text: "知ってる！",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-014",
    speaker: "確認レポートくん",
    text: "知ってたのに？",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-015",
    speaker: "主人公",
    text: "今それ言わないで！！",
    character: report.serious,
    next: "q2-02-choice-b-a-little-later"
  }),
  q202Scene({
    id: "q2-02-choice-b-a-little-later",
    speaker: "SYSTEM",
    text: "少し後",
    timePassage: {
      label: "A LITTLE LATER",
      title: "少し後",
      detail: "締切日の夜"
    },
    next: "q2-02-choice-b-016"
  }),
  q202Scene({
    id: "q2-02-choice-b-016",
    speaker: "主人公",
    text: "…………。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-017",
    speaker: "主人公",
    text: "提出できたぁぁぁ……。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-018",
    speaker: "確認レポートくん",
    text: "今回はね。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-b-019",
    speaker: "主人公",
    text: "寿命縮んだ……。",
    character: report.serious,
    next: "q2-02-common-next-day"
  }),

  q202Scene({
    id: "q2-02-choice-c-001",
    speaker: "確認レポートくん",
    text: "残り6個。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-002",
    speaker: "主人公",
    text: "覚えてるよ！",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-003",
    speaker: "確認レポートくん",
    text: "バイト2日。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-004",
    speaker: "主人公",
    text: "それも覚えてる！",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-005",
    speaker: "確認レポートくん",
    text: "じゃあ、その3日って本当に“3日”？",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-006",
    speaker: "主人公",
    text: "…………。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-007",
    speaker: "主人公",
    text: "未来の私ならなんとか――",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-008",
    speaker: "確認レポートくん",
    text: "また任せるんだ。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-009",
    speaker: "主人公",
    text: "うっ。",
    character: report.serious,
    next: "q2-02-choice-c-deadline-night"
  }),
  q202Scene({
    id: "q2-02-choice-c-deadline-night",
    speaker: "SYSTEM",
    text: "締切当日／夜",
    timePassage: {
      label: "DEADLINE DAY",
      title: "締切当日",
      detail: "自室・夜"
    },
    next: "q2-02-choice-c-010"
  }),
  q202Scene({
    id: "q2-02-choice-c-010",
    speaker: "主人公",
    text: "あと3個！！"
  }),
  q202Scene({
    id: "q2-02-choice-c-011",
    speaker: "主人公",
    text: "なんで過去の私、もっとやってないの！？"
  }),
  q202Scene({
    id: "q2-02-choice-c-012",
    speaker: "確認レポートくん",
    text: "未来の自分ならなんとかするって。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-013",
    speaker: "主人公",
    text: "過去の私を殴りたい！！",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-014",
    speaker: "主人公",
    text: "待って、読み込みが……。",
    deadlineSchedule: zenStudyCongestion
  }),
  q202Scene({
    id: "q2-02-choice-c-015",
    speaker: "主人公",
    text: "お願いお願いお願い……！",
    deadlineSchedule: zenStudyCongestion,
    next: "q2-02-choice-c-deadline-time"
  }),
  q202Scene({
    id: "q2-02-choice-c-deadline-time",
    speaker: "SYSTEM",
    text: "締切時刻",
    timePassage: {
      label: "TIME LIMIT",
      title: "締切時刻",
      detail: "提出受付終了"
    },
    next: "q2-02-choice-c-016"
  }),
  q202Scene({
    id: "q2-02-choice-c-016",
    speaker: "主人公",
    text: "…………。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-017",
    speaker: "主人公",
    text: "1個、間に合わなかった……。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-018",
    speaker: "確認レポートくん",
    text: "最終締切までは提出できる。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-019",
    speaker: "主人公",
    text: "よ、よかった……！",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-020",
    speaker: "確認レポートくん",
    text: "ただし。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-021",
    speaker: "主人公",
    text: "……。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-022",
    speaker: "確認レポートくん",
    text: "第1回締切に間に合わなかった分は、3分の1減点。",
    character: report.serious,
    emphasis: true
  }),
  q202Scene({
    id: "q2-02-choice-c-023",
    speaker: "主人公",
    text: "ですよねぇぇぇ……。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-024",
    speaker: "確認レポートくん",
    text: "次は、同じことしないで。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-choice-c-025",
    speaker: "主人公",
    text: "はい……。",
    character: report.serious,
    next: "q2-02-common-next-day"
  }),

  q202Scene({
    id: "q2-02-common-next-day",
    speaker: "SYSTEM",
    text: "自室／翌日",
    timePassage: {
      label: "THE NEXT DAY",
      title: "翌日",
      detail: "自室"
    },
    next: "q2-02-final-001"
  }),
  q202Scene({
    id: "q2-02-final-001",
    speaker: "主人公",
    text: "確認レポートって。"
  }),
  q202Scene({
    id: "q2-02-final-002",
    speaker: "主人公",
    text: "一個一個なら、そんなに怖くないんだけどなぁ。"
  }),
  q202Scene({
    id: "q2-02-final-003",
    speaker: "主人公",
    text: "科目が増えて。"
  }),
  q202Scene({
    id: "q2-02-final-004",
    speaker: "主人公",
    text: "バイトもあって。"
  }),
  q202Scene({
    id: "q2-02-final-005",
    speaker: "主人公",
    text: "予定が重なると、一気に大変になるんだね。"
  }),
  q202Scene({
    id: "q2-02-final-006",
    speaker: "確認レポートくん",
    text: "だから、締切だけ見るんじゃない。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-007",
    speaker: "確認レポートくん",
    text: "残ってる作業。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-008",
    speaker: "確認レポートくん",
    text: "使える時間。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-009",
    speaker: "確認レポートくん",
    text: "大学以外の予定。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-010",
    speaker: "確認レポートくん",
    text: "全部合わせて考える。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-011",
    speaker: "主人公",
    text: "“時間が空いたらやる”じゃダメなんだ。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-012",
    speaker: "確認レポートくん",
    text: "そう。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-013",
    speaker: "主人公",
    text: "じゃあ次からは、締切から逆算して――",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-014",
    speaker: "確認レポートくん",
    text: "もう一つ。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-015",
    speaker: "主人公",
    text: "？",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-016",
    speaker: "確認レポートくん",
    text: "締切は、提出を始める時間じゃない。",
    character: report.serious,
    emphasis: true
  }),
  q202Scene({
    id: "q2-02-final-017",
    speaker: "主人公",
    text: "…………。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-final-018",
    speaker: "主人公",
    text: "はい。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-final-019",
    speaker: "確認レポートくん",
    text: "通信もシステムも、自分の予定も。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-final-020",
    speaker: "確認レポートくん",
    text: "全部、思った通りになるとは限らないから。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-final-021",
    speaker: "主人公",
    text: "余裕を残しておく。",
    character: report.serious
  }),
  q202Scene({
    id: "q2-02-final-022",
    speaker: "確認レポートくん",
    text: "正解。",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-023",
    speaker: "主人公",
    text: "（授業の時間が決まってないからこそ。）",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-024",
    speaker: "主人公",
    text: "（“いつやるか”まで自分で決めないといけないんだ。）",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-025",
    speaker: "主人公",
    text: "（バイトも大学も続けたいなら――）",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-final-026",
    speaker: "主人公",
    text: "（ちゃんと、自分の時間を管理しよう。）",
    character: report.normal
  }),
  q202Scene({
    id: "q2-02-clear",
    speaker: "SYSTEM",
    text: "Q2-02 CLEAR！",
    clear: true,
    end: true
  })
];
