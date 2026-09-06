const Q1_ROOM_BACKGROUND = "./assets/images/backgrounds/morning-room.png";
const NIGHT_ROOM_BACKGROUND = "./assets/images/backgrounds/night-room.png";

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
const yoshimura = {
  normal: "./assets/images/characters/yoshimura/normal.png"
};
const FESTIVAL_BACKGROUND = "./assets/images/backgrounds/campus-festival.png";
const FIELD_ACTIVITY_BACKGROUND = "./assets/images/backgrounds/op-campus.png";
const SLACK_PHONE_FOREGROUND = "./assets/images/foregrounds/smartphone-slack.png";
const REPORT_DEADLINE_FOREGROUND = "./assets/images/foregrounds/smartphone-report-deadline.png";
const YOSHIMURA_SLACK_FOREGROUND = "./assets/images/foregrounds/smartphone-yoshimura-slack.png";
const THERMOMETER_FOREGROUND = "./assets/images/foregrounds/thermometer.png";
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
const examDateNotification = {
  icon: "Z",
  title: "ZEN Portal",
  text: "単位認定試験の受験日時が公開されました"
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
const examChangeSchedule = {
  period: "ZEN PORTAL / 日程変更",
  title: "単位認定試験 受験日時",
  items: [
    { label: "割り当て日時", date: "候補日時 1", detail: "バイトと重複" },
    { label: "変更候補", date: "候補日時 2", detail: "選択可能" },
    { label: "変更候補", date: "候補日時 3", detail: "選択可能" }
  ]
};
const examChangedSchedule = {
  period: "ZEN PORTAL / 変更完了",
  title: "単位認定試験 受験日時",
  items: [
    { label: "変更後", date: "候補日時 2", detail: "申請済み" },
    { label: "カレンダー", date: "登録済み", detail: "予定を確認" }
  ]
};
const examAbsenceGuide = {
  period: "ZEN大学 / FAQ",
  title: "単位認定試験を欠席した場合",
  items: [
    { label: "対象", date: "病気など", detail: "大学が認める理由" },
    { label: "手続き", date: "期間内に申請", detail: "期限を確認" },
    { label: "対応", date: "追試験", detail: "申請可能" }
  ]
};
const makeupExamApplication = {
  period: "ZEN PORTAL / 追試験",
  title: "追試験の申請案内",
  items: [
    { label: "申請期間", date: "確認済み", detail: "期限内に手続き" },
    { label: "必要なもの", date: "確認済み", detail: "案内に従って準備" },
    { label: "申請状況", date: "受付確認", detail: "追試験を確認" }
  ]
};
const finalReportDeadlineNotification = {
  icon: "Z",
  title: "ZEN Portal",
  text: "確認レポート　最終締切まであと3日"
};
const q4CongestionCalendar = {
  period: "CALENDAR / 4Q終盤",
  title: "これからの予定",
  items: [
    { label: "確認レポート", date: "最終締切まで3日", detail: "複数件が未提出" },
    { label: "アルバイト", date: "明日", detail: "シフトあり" },
    { label: "単位認定試験", date: "締切の数日後", detail: "準備も必要" }
  ]
};
const q4CongestionPlan = {
  period: "SCHEDULE / 予定整理",
  title: "締切・試験・予定",
  items: [
    { label: "確認レポート", date: "残り○件", detail: "今日から割り振る" },
    { label: "最終締切", date: "3日後", detail: "直前には残さない" },
    { label: "アルバイト", date: "明日", detail: "前後の時間を確認" },
    { label: "単位認定試験", date: "締切の数日後", detail: "準備時間を確保" },
    { label: "必要なお知らせ", date: "確認済み", detail: "見落としなし" }
  ]
};
const graduationProgressSchedule = {
  period: "GRADUATION / CURRENT POSITION",
  title: "1年終了時点の履修状況",
  items: [
    { label: "今年取得したもの", date: "確認", detail: "単位と科目" },
    { label: "卒業に必要なもの", date: "照合", detail: "区分・条件も確認" },
    { label: "これから必要なもの", date: "整理", detail: "来年の履修へ" }
  ]
};
const firstYearReviewSchedule = {
  period: "YEAR 1 / MEMORIES",
  title: "一年間の出来事",
  items: [
    { label: "1Q", date: "履修登録・学園祭", detail: "初めての大学生活" },
    { label: "2Q", date: "アルバイト・締切", detail: "予定の立て方を見直した" },
    { label: "3Q", date: "新しい選択肢", detail: "留学・国際交流を知った" },
    { label: "4Q", date: "一年を振り返る", detail: "できるようになったこと" }
  ]
};
const firstYearMyStepForm = {
  category: "学生時代の活動記録",
  subject: "対象授業なし",
  fields: [
    { label: "1.タイトル", value: "大学1年目の振り返り", required: true },
    { label: "4.活動の内容", value: "何をやったか" },
    { label: "5.課題・6.工夫", value: "何を感じたか" },
    { label: "7.結果と次のアクション", value: "自分がどう変わったか" }
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
const regionalProgramNotification = {
  icon: "Z",
  title: "ZEN Portal",
  text: "地域・企業連携プログラムのお知らせ"
};
const internationalProgramNotification = {
  icon: "Z",
  title: "ZEN Portal",
  text: "留学・国際交流プログラムのお知らせ"
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
const myStepRegistrationForm = {
  category: "学生時代の活動記録",
  subject: "対象授業なし",
  fields: [
    { label: "1.タイトル", value: "大学生活の経験", required: true },
    { label: "4.活動の内容", value: "何をしたか" },
    { label: "5.課題・6.工夫", value: "何を感じたか" },
    { label: "7.結果と次のアクション", value: "何が変わったか" }
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

function q203Scene(scene) {
  return q1Scene(scene, "Q2-03");
}

function q203Dialogue(number, speaker, text, scene = {}) {
  return q203Scene({
    id: "q2-03-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q203FieldScene(scene) {
  return q203Scene({
    background: FIELD_ACTIVITY_BACKGROUND,
    ...scene
  });
}

function q204Scene(scene) {
  return q1Scene(scene, "Q2-04");
}

function q2ResultScene(scene) {
  return q1Scene(scene, "Q2 RESULT");
}

function q3ResultScene(scene) {
  return q1Scene({ background: NIGHT_ROOM_BACKGROUND, ...scene }, "Q3 RESULT");
}

function q301Scene(scene) {
  return q1Scene(scene, "Q3-01");
}

function q301Dialogue(number, speaker, text, scene = {}) {
  return q301Scene({
    id: "q3-01-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q302Scene(scene) {
  return q1Scene(scene, "Q3-02");
}

function q302Dialogue(number, speaker, text, scene = {}) {
  return q302Scene({
    id: "q3-02-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q303Scene(scene) {
  return q1Scene({ background: NIGHT_ROOM_BACKGROUND, ...scene }, "Q3-03");
}

function q303Dialogue(number, speaker, text, scene = {}) {
  return q303Scene({
    id: "q3-03-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q304Scene(scene) {
  return q1Scene(scene, "Q3-04");
}

function q304Dialogue(number, speaker, text, scene = {}) {
  return q304Scene({
    id: "q3-04-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q305Scene(scene) {
  return q1Scene(scene, "Q3-05");
}

function q305Dialogue(number, speaker, text, scene = {}) {
  return q305Scene({
    id: "q3-05-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q401Scene(scene) {
  return q1Scene(scene, "Q4-01");
}

function q401Dialogue(number, speaker, text, scene = {}) {
  return q401Scene({
    id: "q4-01-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q402Scene(scene) {
  return q1Scene(scene, "Q4-02");
}

function q402Dialogue(number, speaker, text, scene = {}) {
  return q402Scene({
    id: "q4-02-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q403Scene(scene) {
  return q1Scene(scene, "Q4-03");
}

function q403Dialogue(number, speaker, text, scene = {}) {
  return q403Scene({
    id: "q4-03-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q404Scene(scene) {
  return q1Scene(scene, "Q4-04");
}

function q404Dialogue(number, speaker, text, scene = {}) {
  return q404Scene({
    id: "q4-04-" + String(number).padStart(3, "0"),
    speaker,
    text,
    ...scene
  });
}

function q405Scene(scene) {
  return q1Scene({ background: NIGHT_ROOM_BACKGROUND, ...scene }, "Q4-05");
}

function q405Dialogue(number, speaker, text, scene = {}) {
  return q405Scene({
    id: "q4-05-" + String(number).padStart(3, "0"),
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
    next: "q2-03-time-passage"
  }),

  /* ==================
   Q2-03 大学の外へ飛び出そう？
   オンライン中心でも、現地で人や地域と関わる選択肢があることを伝える。
  =====================*/
  q203Scene({
    id: "q2-03-time-passage",
    speaker: "SYSTEM",
    text: "2Q／自室・昼",
    timePassage: {
      label: "LATER IN 2Q",
      title: "2Q",
      detail: "自室・昼"
    },
    next: "q2-03-001"
  }),

  q203Dialogue(1, "主人公", "授業、バイト、確認レポート……。"),
  q203Dialogue(2, "主人公", "最近ずっと同じ景色見てる気がする。"),
  q203Dialogue(3, "主人公", "ん？", {
    notification: regionalProgramNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q203Dialogue(4, "主人公", "地域・企業連携……？", {
    notification: regionalProgramNotification
  }),
  q203Dialogue(5, "主人公", "現地で活動するやつなんだ。", {
    notification: regionalProgramNotification
  }),
  q203Dialogue(6, "主人公", "ちょっと面白そう。", {
    notification: regionalProgramNotification
  }),
  q203Dialogue(7, "主人公", "でも……。", {
    notification: regionalProgramNotification
  }),
  q203Dialogue(8, "主人公", "知らない場所に行って、知らない人たちと活動するのかぁ……。", {
    notification: regionalProgramNotification
  }),
  q203Dialogue(9, "？？？", "気になる？", {
    notification: regionalProgramNotification
  }),
  q203Dialogue(10, "主人公", "わっ！", {
    notification: regionalProgramNotification
  }),

  q203Dialogue(11, "主人公", "ガクチカくん！", { character: gakuchika.normal }),
  q203Dialogue(12, "ガクチカくん", "それ、ちょっと興味ある顔してる。", {
    character: gakuchika.normal
  }),
  q203Dialogue(13, "主人公", "あるけど……。", { character: gakuchika.normal }),
  q203Dialogue(14, "主人公", "オンライン大学なのに、急に現地って緊張しない？", {
    character: gakuchika.normal
  }),
  q203Dialogue(15, "ガクチカくん", "すると思う。", { character: gakuchika.smile }),
  q203Dialogue(16, "主人公", "否定してくれないんだ。", { character: gakuchika.smile }),
  q203Dialogue(17, "ガクチカくん", "でも、だから面白いんじゃない？", {
    character: gakuchika.smile
  }),
  q203Dialogue(18, "主人公", "？", { character: gakuchika.smile }),
  q203Dialogue(19, "ガクチカくん", "普段は画面越しで見てる学生と、実際に会えたり。", {
    character: gakuchika.smile
  }),
  q203Dialogue(20, "ガクチカくん", "地域や企業の人と一緒に何かやってみたり。", {
    character: gakuchika.smile
  }),
  q203Dialogue(21, "主人公", "画面越しでは知ってるのに、会うのは初めて……。", {
    character: gakuchika.smile
  }),
  q203Dialogue(22, "主人公", "それ、ちょっと変な感じ。", {
    character: gakuchika.smile
  }),
  q203Dialogue(23, "ガクチカくん", "絶対あると思う。", {
    character: gakuchika.smile
  }),

  q203Scene({
    id: "q2-03-choice",
    speaker: "SYSTEM",
    text: "気になるプログラム。どうする？",
    character: gakuchika.smile,
    choices: [
      {
        label: "A",
        text: "ちょっと怖いけど、参加してみる！",
        effects: {
          universityLife: 2,
          affection: { gakuchika: 2 },
          decisions: { q203Program: "participated" }
        },
        next: "q2-03-choice-a-001"
      },
      {
        label: "B",
        text: "まず内容を詳しく調べてから考える",
        effects: {
          informationUse: 1,
          universityLife: 1,
          affection: { gakuchika: 1 },
          decisions: { q203Program: "participated" }
        },
        next: "q2-03-choice-b-001"
      },
      {
        label: "C",
        text: "オンライン大学だし、授業だけでいいかな",
        effects: {
          universityLife: -1,
          affection: { gakuchika: -1 },
          decisions: { q203Program: "not-participated" }
        },
        next: "q2-03-choice-c-001"
      }
    ]
  }),

  q203Scene({
    id: "q2-03-choice-a-001",
    speaker: "ガクチカくん",
    text: "いいじゃん！",
    character: gakuchika.grin
  }),
  q203Scene({
    id: "q2-03-choice-a-002",
    speaker: "主人公",
    text: "勢いで押した！",
    character: gakuchika.grin
  }),
  q203Scene({
    id: "q2-03-choice-a-003",
    speaker: "ガクチカくん",
    text: "最初なんてそれくらいでいいって。",
    character: gakuchika.grin,
    next: "q2-03-field-passage"
  }),

  q203Scene({
    id: "q2-03-choice-b-001",
    speaker: "ガクチカくん",
    text: "それもアリ。",
    character: gakuchika.smile
  }),
  q203Scene({
    id: "q2-03-choice-b-002",
    speaker: "ガクチカくん",
    text: "気になるなら、まず知るところから。",
    character: gakuchika.smile
  }),
  q203Scene({
    id: "q2-03-choice-b-003",
    speaker: "主人公",
    text: "参加するかどうかは、そのあと決めればいいもんね。",
    character: gakuchika.smile,
    next: "q2-03-field-passage"
  }),

  q203Scene({
    id: "q2-03-choice-c-001",
    speaker: "ガクチカくん",
    text: "それも君が選ぶことだけど。",
    character: gakuchika.normal
  }),
  q203Scene({
    id: "q2-03-choice-c-002",
    speaker: "主人公",
    text: "……。",
    character: gakuchika.normal
  }),
  q203Scene({
    id: "q2-03-choice-c-003",
    speaker: "ガクチカくん",
    text: "“オンラインだからできない”って決めるのは、ちょっともったいないかも。",
    character: gakuchika.normal
  }),
  q203Scene({
    id: "q2-03-choice-c-004",
    speaker: "主人公",
    text: "うっ。",
    character: gakuchika.normal,
    next: "q2-03-final-001"
  }),

  q203FieldScene({
    id: "q2-03-field-passage",
    speaker: "SYSTEM",
    text: "現地／活動場所",
    timePassage: {
      label: "FIELD PROGRAM",
      title: "現地へ",
      detail: "地域・企業連携プログラム"
    },
    next: "q2-03-field-001"
  }),
  q203FieldScene({
    id: "q2-03-field-001",
    speaker: "主人公",
    text: "（うわ……本当に人いる。）",
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-002",
    speaker: "主人公",
    text: "（あの人、Slackで見たことあるような……。）",
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-003",
    speaker: "学生",
    text: "あれ？ もしかして――",
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-004",
    speaker: "主人公",
    text: "あ！",
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-005",
    speaker: "主人公",
    text: "名前は知ってる！",
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-006",
    speaker: "学生",
    text: "でも会うの初めてだよね！",
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-007",
    speaker: "主人公",
    text: "なんか不思議〜！",
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-008",
    speaker: "ガクチカくん",
    text: "こういうの、オンライン中心だからこそ面白いよね。",
    character: gakuchika.grin,
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-009",
    speaker: "主人公",
    text: "画面の中にいた人が立体になった感じする。",
    character: gakuchika.grin,
    caption: "現地／活動場所"
  }),
  q203FieldScene({
    id: "q2-03-field-010",
    speaker: "ガクチカくん",
    text: "その言い方どうなの。",
    character: gakuchika.grin,
    caption: "現地／活動場所",
    next: "q2-03-after-field"
  }),

  q203Scene({
    id: "q2-03-after-field",
    speaker: "SYSTEM",
    text: "活動を終えて／自室",
    timePassage: {
      label: "AFTER THE PROGRAM",
      title: "活動を終えて",
      detail: "自室・昼"
    },
    next: "q2-03-final-001"
  }),

  q203Scene({
    id: "q2-03-final-001",
    speaker: "主人公",
    text: "（大学って、授業を受けるだけじゃない。）"
  }),
  q203Scene({
    id: "q2-03-final-002",
    speaker: "主人公",
    text: "（外に出て、誰かと会って。）"
  }),
  q203Scene({
    id: "q2-03-final-003",
    speaker: "主人公",
    text: "（知らないことをやってみる選択肢もあるんだ。）"
  }),
  q203Scene({
    id: "q2-03-final-004",
    speaker: "ガクチカくん",
    text: "別に、全部参加しなくてもいい。",
    character: gakuchika.normal
  }),
  q203Scene({
    id: "q2-03-final-005",
    speaker: "ガクチカくん",
    text: "でも、気になるものがあったら――",
    character: gakuchika.normal
  }),
  q203Scene({
    id: "q2-03-final-006",
    speaker: "ガクチカくん",
    text: "一回くらい、飛び込んでみてもいいんじゃない？",
    character: gakuchika.smile
  }),
  q203Scene({
    id: "q2-03-final-007",
    speaker: "主人公",
    text: "……うん。",
    character: gakuchika.smile
  }),
  q203Scene({
    id: "q2-03-clear",
    speaker: "SYSTEM",
    text: "Q2-03 CLEAR！",
    clear: true,
    nextByDecision: {
      key: "q203Program",
      routes: {
        participated: "q2-04-participated-passage",
        "not-participated": "q2-04-not-participated-passage"
      },
      default: "q2-04-participated-passage"
    }
  }),

  /* ==================
   Q2-04 その経験、残してる？
   Q2-03の参加結果から分岐し、マイステップでの振り返りへ合流する。
  =====================*/
  q204Scene({
    id: "q2-04-participated-passage",
    speaker: "SYSTEM",
    text: "数日後／自室・昼",
    timePassage: {
      label: "A FEW DAYS LATER",
      title: "数日後",
      detail: "自室・昼"
    },
    next: "q2-04-participated-001"
  }),
  q204Scene({
    id: "q2-04-participated-001",
    speaker: "主人公",
    text: "この前のプログラム、楽しかったな〜。"
  }),
  q204Scene({
    id: "q2-04-participated-002",
    speaker: "主人公",
    text: "現地で話を聞いたり、みんなで考えたり。"
  }),
  q204Scene({
    id: "q2-04-participated-003",
    speaker: "主人公",
    text: "行ってみてよかった！"
  }),
  q204Scene({
    id: "q2-04-participated-004",
    speaker: "ガクチカくん",
    text: "で？",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-participated-005",
    speaker: "主人公",
    text: "で？",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-participated-006",
    speaker: "ガクチカくん",
    text: "その経験、残した？",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-participated-007",
    speaker: "主人公",
    text: "写真ならいっぱいあるよ。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-participated-008",
    speaker: "ガクチカくん",
    text: "写真だけ？",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-participated-009",
    speaker: "主人公",
    text: "……ダメ？",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-participated-010",
    speaker: "ガクチカくん",
    text: "ダメじゃないけど。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-011",
    speaker: "ガクチカくん",
    text: "今感じてること、半年後も同じように覚えてる？",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-012",
    speaker: "主人公",
    text: "……たぶん、“楽しかった！”しか残ってない。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-013",
    speaker: "ガクチカくん",
    text: "でしょ。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-014",
    speaker: "主人公",
    text: "じゃあ、何を残せばいいんだろ。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-015",
    speaker: "ガクチカくん",
    text: "例えば。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-016",
    speaker: "ガクチカくん",
    text: "行く前と、行った後で変わったこと。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-017",
    speaker: "ガクチカくん",
    text: "現地だから分かったこと。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-018",
    speaker: "ガクチカくん",
    text: "自分になかった視点。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-019",
    speaker: "主人公",
    text: "……あ。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-020",
    speaker: "主人公",
    text: "実際に現地で話を聞いたら。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-021",
    speaker: "主人公",
    text: "ネットで見てただけじゃ分からなかったこと、いっぱいあった。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-022",
    speaker: "主人公",
    text: "同じことでも、地域の人から直接聞くと見え方が違ったし。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-023",
    speaker: "主人公",
    text: "みんなで考えてたら、自分一人じゃ思いつかなかった意見もいっぱい出てきた。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-024",
    speaker: "ガクチカくん",
    text: "うん。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-025",
    speaker: "主人公",
    text: "“そういう見方もあるんだ”って思った。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-026",
    speaker: "ガクチカくん",
    text: "それ。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-027",
    speaker: "主人公",
    text: "それ？",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-participated-028",
    speaker: "ガクチカくん",
    text: "“楽しかった”の中身。",
    character: gakuchika.smile,
    next: "q2-04-common-001"
  }),

  q204Scene({
    id: "q2-04-not-participated-passage",
    speaker: "SYSTEM",
    text: "数日後／自室・昼",
    timePassage: {
      label: "A FEW DAYS LATER",
      title: "数日後",
      detail: "自室・昼"
    },
    next: "q2-04-not-participated-001"
  }),
  q204Scene({
    id: "q2-04-not-participated-001",
    speaker: "主人公",
    text: "あの地域連携プログラム。"
  }),
  q204Scene({
    id: "q2-04-not-participated-002",
    speaker: "主人公",
    text: "結局、今回は参加しなかったなぁ。"
  }),
  q204Scene({
    id: "q2-04-not-participated-003",
    speaker: "ガクチカくん",
    text: "うん。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-004",
    speaker: "主人公",
    text: "じゃあ私、残すような経験ないかも。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-005",
    speaker: "ガクチカくん",
    text: "なんで？",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-006",
    speaker: "主人公",
    text: "だって。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-007",
    speaker: "主人公",
    text: "特別なこと、何もしてないし。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-008",
    speaker: "ガクチカくん",
    text: "バイト始めた。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-009",
    speaker: "主人公",
    text: "あ。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-010",
    speaker: "ガクチカくん",
    text: "大学祭にも行った。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-011",
    speaker: "主人公",
    text: "あ。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-012",
    speaker: "ガクチカくん",
    text: "Slackで知らなかったことを知ったり。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-013",
    speaker: "ガクチカくん",
    text: "初めての試験も受けた。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-014",
    speaker: "主人公",
    text: "…………。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-015",
    speaker: "主人公",
    text: "意外といろいろやってる。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-not-participated-016",
    speaker: "ガクチカくん",
    text: "“すごいこと”だけが経験じゃないよ。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-017",
    speaker: "主人公",
    text: "そっか。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-018",
    speaker: "ガクチカくん",
    text: "やってみてどうだったか。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-019",
    speaker: "ガクチカくん",
    text: "何に気づいたか。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-020",
    speaker: "ガクチカくん",
    text: "前の自分と何か変わったか。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-021",
    speaker: "ガクチカくん",
    text: "そういうのも残せる。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-022",
    speaker: "主人公",
    text: "じゃあ……。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-023",
    speaker: "主人公",
    text: "バイト始めて、思ったより大学との予定調整が大変だったこととか？",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-024",
    speaker: "ガクチカくん",
    text: "それも立派な経験。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-025",
    speaker: "主人公",
    text: "確認レポートの締切で死にかけたことも？",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-026",
    speaker: "ガクチカくん",
    text: "それは……。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-027",
    speaker: "ガクチカくん",
    text: "かなり学びあったでしょ。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-not-participated-028",
    speaker: "主人公",
    text: "ありました……。",
    character: gakuchika.smile,
    next: "q2-04-common-001"
  }),

  q204Scene({
    id: "q2-04-common-001",
    speaker: "主人公",
    text: "でも、こういうのってどこに残すの？",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-common-002",
    speaker: "ガクチカくん",
    text: "ZEN Portalの《マイステップ》。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-common-003",
    speaker: "主人公",
    text: "あ！",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-common-004",
    speaker: "ガクチカくん",
    text: "大学生活で経験したことを記録しておける。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-common-005",
    speaker: "主人公",
    text: "じゃあ、忘れないうちに書こ。",
    character: gakuchika.normal
  }),
  q204Scene({
    id: "q2-04-common-006",
    speaker: "主人公",
    text: "まず、“何をしたか”。",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-common-007",
    speaker: "主人公",
    text: "次に、“何を感じたか”。",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-common-008",
    speaker: "主人公",
    text: "それから――",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-common-009",
    speaker: "主人公",
    text: "“何が変わったか”。",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-common-010",
    speaker: "ガクチカくん",
    text: "いいね。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-common-011",
    speaker: "主人公",
    text: "参加したイベントの名前だけ残すより。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-common-012",
    speaker: "主人公",
    text: "こっちの方が、あとで見返したとき分かりそう。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-common-013",
    speaker: "ガクチカくん",
    text: "そう。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-common-014",
    speaker: "ガクチカくん",
    text: "経験って、振り返って初めて気づくこともあるから。",
    character: gakuchika.smile,
    nextByDecision: {
      key: "q203Program",
      routes: {
        participated: "q2-04-record-participated-001",
        "not-participated": "q2-04-record-not-participated-001"
      },
      default: "q2-04-record-participated-001"
    }
  }),

  q204Scene({
    id: "q2-04-record-participated-001",
    speaker: "主人公",
    text: "“現地に行ったからこそ、見え方が変わったこと”。",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-record-participated-002",
    speaker: "主人公",
    text: "“他の人の考えを聞いて、自分になかった視点を知ったこと”。",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-record-participated-003",
    speaker: "主人公",
    text: "“次は別のことにも挑戦してみたいと思ったこと”。",
    myStep: myStepRegistrationForm,
    next: "q2-04-final-001"
  }),

  q204Scene({
    id: "q2-04-record-not-participated-001",
    speaker: "主人公",
    text: "“バイトを始めて、大学との予定調整の大切さに気づいたこと”。",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-record-not-participated-002",
    speaker: "主人公",
    text: "“最初は何も分からなかったけど、自分で確認して動けるようになってきたこと”。",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-record-not-participated-003",
    speaker: "主人公",
    text: "……こういうのでもいいんだ。",
    character: gakuchika.smile
  }),
  q204Scene({
    id: "q2-04-record-not-participated-004",
    speaker: "ガクチカくん",
    text: "むしろ、そういうの残しとくと面白いよ。",
    character: gakuchika.smile,
    next: "q2-04-final-001"
  }),

  q204Scene({
    id: "q2-04-final-001",
    speaker: "主人公",
    text: "保存！",
    myStep: myStepRegistrationForm
  }),
  q204Scene({
    id: "q2-04-final-002",
    speaker: "主人公",
    text: "なんか。"
  }),
  q204Scene({
    id: "q2-04-final-003",
    speaker: "主人公",
    text: "ただ過ぎていった出来事が、ちゃんと自分の経験になった感じする。"
  }),
  q204Scene({
    id: "q2-04-final-004",
    speaker: "ガクチカくん",
    text: "でしょ？",
    character: gakuchika.grin
  }),
  q204Scene({
    id: "q2-04-final-005",
    speaker: "主人公",
    text: "次から、何かあったら残してみよ。",
    character: gakuchika.grin
  }),
  q204Scene({
    id: "q2-04-final-006",
    speaker: "ガクチカくん",
    text: "その調子。",
    character: gakuchika.grin
  }),
  q204Scene({
    id: "q2-04-final-007",
    speaker: "主人公",
    text: "（大きな挑戦じゃなくても。）",
    character: gakuchika.grin
  }),
  q204Scene({
    id: "q2-04-final-008",
    speaker: "主人公",
    text: "（自分が何をして、何を感じて、どう変わったか。）",
    character: gakuchika.grin
  }),
  q204Scene({
    id: "q2-04-final-009",
    speaker: "主人公",
    text: "（残しておけば、あとから自分の歩いてきた道が見えるのかも。）",
    character: gakuchika.grin
  }),
  q204Scene({
    id: "q2-04-clear",
    speaker: "SYSTEM",
    text: "Q2-04 CLEAR！",
    clear: true,
    next: "q2-result-001"
  }),

  /* ==================
   Q2 RESULT
   2Qの経験を振り返り、成績表を確認してから3Qへの意欲につなげる。
  =====================*/
  q2ResultScene({
    id: "q2-result-001",
    speaker: "主人公",
    text: "2Q、終了〜！"
  }),
  q2ResultScene({
    id: "q2-result-002",
    speaker: "主人公",
    text: "1Qより慣れてきたと思ってたけど……。"
  }),
  q2ResultScene({
    id: "q2-result-003",
    speaker: "主人公",
    text: "バイト始めたら、普通に忙しかった。"
  }),
  q2ResultScene({
    id: "q2-result-004",
    speaker: "主人公",
    text: "授業の時間が決まってない＝暇、じゃないんだね。"
  }),
  q2ResultScene({
    id: "q2-result-005",
    speaker: "主人公",
    text: "自分で“いつやるか”を決めないと、ほんとに全部あとに回る……。",
    resultPreview: {
      target: "q2-result-006"
    }
  }),
  q2ResultScene({
    id: "q2-result-006",
    speaker: "主人公",
    text: "でも、締切も予定も前よりちゃんと見るようになった。"
  }),
  q2ResultScene({
    id: "q2-result-007",
    speaker: "主人公",
    text: "バイトも、授業も、大学の外での経験も。"
  }),
  q2ResultScene({
    id: "q2-result-008",
    speaker: "主人公",
    text: "全部、自分で組み立てていくんだなぁ。"
  }),
  q2ResultScene({
    id: "q2-result-009",
    speaker: "主人公",
    text: "よし。"
  }),
  q2ResultScene({
    id: "q2-result-010",
    speaker: "主人公",
    text: "3Qもいってみよ！"
  }),
  q2ResultScene({
    id: "q2-result-clear",
    speaker: "SYSTEM",
    text: "2Q CLEAR！",
    clear: true,
    quarterAdvance: {
      nextQuarter: 3,
      target: "q3-start"
    }
  }),

  /* ==================
   Q3-01 3Q、何から取る？
   必修・選択必修と前提科目を踏まえ、少し先を見た履修を考える。
  =====================*/
  q301Scene({
    id: "q3-start",
    speaker: "SYSTEM",
    text: "3Q序盤／自室・昼",
    timePassage: {
      label: "NEXT QUARTER",
      title: "3Q START",
      detail: "3Q序盤・自室／昼"
    },
    next: "q3-01-001"
  }),

  q301Dialogue(1, "主人公", "今日から3Q！"),
  q301Dialogue(2, "主人公", "そして……。"),
  q301Dialogue(3, "主人公", "3Qと4Qの履修登録！"),
  q301Dialogue(4, "主人公", "今回はもう2回目だし。"),
  q301Dialogue(5, "主人公", "さすがに私も慣れましたよ。"),
  q301Dialogue(6, "主人公", "気になる科目からどんどん入れて――"),
  q301Dialogue(7, "？？？", "ちょっと待って。"),
  q301Dialogue(8, "主人公", "出た！！"),

  q301Dialogue(9, "主人公", "半年ぶりの“ちょっと待って”！", { character: rishu.normal }),
  q301Dialogue(10, "履修登録くん", "覚えてたんだ。", { character: rishu.normal }),
  q301Dialogue(11, "主人公", "履修登録くんの代名詞みたいになってるからね。", { character: rishu.normal }),
  q301Dialogue(12, "履修登録くん", "それより。", { character: rishu.normal }),
  q301Dialogue(13, "履修登録くん", "今回も、面白そうな科目だけ選ぶつもり？", { character: rishu.normal }),
  q301Dialogue(14, "主人公", "……ダメ？", { character: rishu.normal }),
  q301Dialogue(15, "履修登録くん", "前よりは成長したと思ったんだけどな。", { character: rishu.troubled }),
  q301Dialogue(16, "主人公", "その顔やめて！", { character: rishu.troubled }),

  q301Dialogue(17, "履修登録くん", "まず確認するのは？", { character: rishu.normal }),
  q301Dialogue(18, "主人公", "必修科目！", { character: rishu.normal }),
  q301Dialogue(19, "履修登録くん", "正解。", { character: rishu.smile }),
  q301Dialogue(20, "主人公", "今回は分かるもんね！", { character: rishu.smile }),
  q301Dialogue(21, "履修登録くん", "必修科目と選択必修科目は、1年生のうちに進めておくと後が楽になる。", {
    character: rishu.smile
  }),
  q301Dialogue(22, "主人公", "じゃあ、まずそこから取ればいいんだ。", {
    character: rishu.smile
  }),
  q301Dialogue(23, "履修登録くん", "うん。", {
    character: rishu.smile
  }),
  q301Dialogue(24, "履修登録くん", "特に必修科目は、この先いろんな分野を学んでいくための基礎になる。", {
    character: rishu.smile
  }),
  q301Dialogue(25, "主人公", "最初に土台を作っとく感じ？", { character: rishu.smile }),
  q301Dialogue(26, "履修登録くん", "そう。", { character: rishu.smile }),

  q301Dialogue(27, "主人公", "じゃあ必修と選択必修を入れて。", { character: rishu.normal }),
  q301Dialogue(28, "主人公", "残りは好きな科目で埋めれば完璧！", { character: rishu.normal }),
  q301Dialogue(29, "履修登録くん", "もう一個。", { character: rishu.normal }),
  q301Dialogue(30, "主人公", "まだあるの！？", { character: rishu.normal }),
  q301Dialogue(31, "履修登録くん", "来年以降、何を学びたい？", { character: rishu.normal }),
  q301Dialogue(32, "主人公", "来年？", { character: rishu.normal }),
  q301Dialogue(33, "履修登録くん", "科目によっては、先に履修しておく前提科目がある。", {
    character: rishu.normal
  }),
  q301Dialogue(34, "主人公", "前提科目？", {
    character: rishu.normal
  }),
  q301Dialogue(35, "履修登録くん", "その科目を学ぶ前に、取っておいた方がいい科目。", {
    character: rishu.normal
  }),
  q301Dialogue(36, "主人公", "ってことは……。", { character: rishu.normal }),
  q301Dialogue(37, "主人公", "2年生で取りたい授業が見つかっても。", { character: rishu.normal }),
  q301Dialogue(38, "主人公", "その前提科目を取ってなかったら困ることもある？", { character: rishu.normal }),
  q301Dialogue(39, "履修登録くん", "そういう場合もある。", { character: rishu.normal }),
  q301Dialogue(40, "主人公", "うわ。", { character: rishu.normal }),
  q301Dialogue(41, "主人公", "今だけ見て決めちゃダメなんだ。", { character: rishu.normal }),
  q301Dialogue(42, "履修登録くん", "全部を4年分決める必要はないよ。", { character: rishu.normal }),
  q301Dialogue(43, "履修登録くん", "でも。", { character: rishu.normal }),
  q301Dialogue(44, "履修登録くん", "“この先、何を学びたいか”を少し見る。", { character: rishu.normal }),
  q301Dialogue(45, "履修登録くん", "それだけでも、今選ぶ科目は変わるから。", { character: rishu.normal }),
  q301Dialogue(46, "主人公", "履修登録、半年で難易度上がってない？", { character: rishu.normal }),
  q301Dialogue(47, "履修登録くん", "君が半年成長したからね。", { character: rishu.smile }),
  q301Dialogue(48, "主人公", "……それ褒めてる？", { character: rishu.smile }),
  q301Dialogue(49, "履修登録くん", "もちろん。", { character: rishu.smile }),

  q301Scene({
    id: "q3-01-choice",
    speaker: "SYSTEM",
    text: "3Q・4Qの履修、どう決める？",
    character: rishu.normal,
    choices: [
      {
        label: "A",
        text: "必修・選択必修と、今後取りたい科目の前提科目を確認する",
        next: "q3-01-a-001",
        effects: {
          selfManagement: 2,
          informationUse: 1,
          affection: { rishu: 2 }
        }
      },
      {
        label: "B",
        text: "必修・選択必修を優先して、残りは興味のある科目にする",
        next: "q3-01-b-001",
        effects: {
          selfManagement: 1,
          universityLife: 1,
          affection: { rishu: 1 }
        }
      },
      {
        label: "C",
        text: "今回も興味のある科目だけで埋める！",
        next: "q3-01-c-001",
        effects: {
          selfManagement: -1,
          affection: { rishu: -1 }
        }
      }
    ]
  }),

  q301Scene({ id: "q3-01-a-001", speaker: "履修登録くん", text: "うん。それが一番安心。", character: rishu.smile }),
  q301Scene({ id: "q3-01-a-002", speaker: "主人公", text: "必修を確認して。", character: rishu.smile }),
  q301Scene({ id: "q3-01-a-003", speaker: "主人公", text: "そのあと、来年以降に気になる科目も見て……。", character: rishu.smile }),
  q301Scene({ id: "q3-01-a-004", speaker: "主人公", text: "必要な前提科目があれば、今のうちに考える！", character: rishu.smile }),
  q301Scene({ id: "q3-01-a-005", speaker: "履修登録くん", text: "完璧。", character: rishu.smile }),
  q301Scene({ id: "q3-01-a-006", speaker: "主人公", text: "成長した〜！", character: rishu.smile, next: "q3-01-common-001" }),

  q301Scene({ id: "q3-01-b-001", speaker: "履修登録くん", text: "悪くないよ。", character: rishu.normal }),
  q301Scene({ id: "q3-01-b-002", speaker: "主人公", text: "やった。", character: rishu.normal }),
  q301Scene({ id: "q3-01-b-003", speaker: "履修登録くん", text: "ただ、時間があるなら来年以降の科目も少し見ておいて。", character: rishu.normal }),
  q301Scene({ id: "q3-01-b-004", speaker: "主人公", text: "前提科目チェックね。", character: rishu.normal }),
  q301Scene({ id: "q3-01-b-005", speaker: "履修登録くん", text: "そう。", character: rishu.normal, next: "q3-01-common-001" }),

  q301Scene({ id: "q3-01-c-001", speaker: "主人公", text: "やっぱり好きなものを学ぶのが一番でしょ！", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-002", speaker: "履修登録くん", text: "興味は大事。", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-003", speaker: "主人公", text: "でしょ？", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-004", speaker: "履修登録くん", text: "でも、必修は？", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-005", speaker: "主人公", text: "……。", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-006", speaker: "履修登録くん", text: "選択必修は？", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-007", speaker: "主人公", text: "……。", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-008", speaker: "履修登録くん", text: "前提科目は？", character: rishu.troubled }),
  q301Scene({ id: "q3-01-c-009", speaker: "主人公", text: "ごめんなさい、確認します。", character: rishu.troubled, next: "q3-01-common-001" }),

  q301Scene({ id: "q3-01-common-001", speaker: "主人公", text: "1Qのときは。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-002", speaker: "主人公", text: "“何を取ればいいか分かんない！”って感じだったけど。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-003", speaker: "主人公", text: "今は、“この先何を学びたいか”まで考えるんだね。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-004", speaker: "履修登録くん", text: "うん。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-005", speaker: "履修登録くん", text: "今の自分だけじゃなくて。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-006", speaker: "履修登録くん", text: "少し先の自分も見ながら決める。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-007", speaker: "主人公", text: "全部決めなくてもいいけど。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-008", speaker: "主人公", text: "ちょっと先を見る。", character: rishu.normal }),
  q301Scene({ id: "q3-01-common-009", speaker: "履修登録くん", text: "それで十分。", character: rishu.smile }),
  q301Scene({ id: "q3-01-common-010", speaker: "主人公", text: "よし。", character: rishu.smile }),
  q301Scene({ id: "q3-01-common-011", speaker: "主人公", text: "3Q・4Qの履修、ちゃんと組んでみる！", character: rishu.smile }),
  q301Scene({ id: "q3-01-common-012", speaker: "主人公", text: "（最初は、好きな科目を選べばいいと思ってた。）", character: rishu.smile }),
  q301Scene({ id: "q3-01-common-013", speaker: "主人公", text: "（でも履修登録って。）", character: rishu.smile }),
  q301Scene({ id: "q3-01-common-014", speaker: "主人公", text: "（今の時間割を作るだけじゃなくて。）", character: rishu.smile }),
  q301Scene({ id: "q3-01-common-015", speaker: "主人公", text: "（これから何を学んでいくかを考えることでもあるんだ。）", character: rishu.smile }),
  q301Scene({
    id: "q3-01-clear",
    speaker: "SYSTEM",
    text: "Q3-01 CLEAR！",
    clear: true,
    next: "q3-02-001"
  }),

  /* ==================
   Q3-02 もっと遠くへ行けるかも
   留学・国際交流も、まず知るところから自分で選べると伝える。
  =====================*/
  q302Dialogue(1, "主人公", "3Qと4Qの履修も決まったし……。"),
  q302Dialogue(2, "主人公", "来年取りたい科目もちょっと見たし。"),
  q302Dialogue(3, "主人公", "なんか急に、大学の先のこと考えるようになったなぁ。"),
  q302Dialogue(4, "主人公", "ん？", {
    notification: internationalProgramNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q302Dialogue(5, "主人公", "……留学？", {
    notification: internationalProgramNotification
  }),
  q302Dialogue(6, "主人公", "え、ZEN大学ってこういうのもあるんだ。", {
    notification: internationalProgramNotification
  }),
  q302Dialogue(7, "主人公", "…………。", {
    notification: internationalProgramNotification
  }),
  q302Dialogue(8, "主人公", "まあ、私には関係ないか。", {
    notification: internationalProgramNotification
  }),
  q302Dialogue(9, "？？？", "なんで？", {
    notification: internationalProgramNotification
  }),
  q302Dialogue(10, "主人公", "わっ！", {
    notification: internationalProgramNotification
  }),

  q302Dialogue(11, "主人公", "ガクチカくん！", { character: gakuchika.normal }),
  q302Dialogue(12, "ガクチカくん", "今、見た瞬間に閉じようとしたでしょ。", { character: gakuchika.normal }),
  q302Dialogue(13, "主人公", "だって留学だよ？", { character: gakuchika.normal }),
  q302Dialogue(14, "主人公", "海外だよ？", { character: gakuchika.normal }),
  q302Dialogue(15, "主人公", "急にハードル高くない？", { character: gakuchika.normal }),
  q302Dialogue(16, "ガクチカくん", "参加するって決めなくていいじゃん。", { character: gakuchika.smile }),
  q302Dialogue(17, "主人公", "？", { character: gakuchika.smile }),
  q302Dialogue(18, "ガクチカくん", "まず、“どんな選択肢があるんだろ”って見るだけでもいい。", { character: gakuchika.smile }),
  q302Dialogue(19, "主人公", "見るだけ？", { character: gakuchika.smile }),
  q302Dialogue(20, "ガクチカくん", "うん。", { character: gakuchika.smile }),
  q302Dialogue(21, "ガクチカくん", "興味が出たら、詳しく調べればいいし。", { character: gakuchika.smile }),
  q302Dialogue(22, "ガクチカくん", "今は違うなって思ったら、それも一つの答え。", { character: gakuchika.smile }),

  q302Dialogue(23, "主人公", "でもさ。", { character: gakuchika.normal }),
  q302Dialogue(24, "主人公", "私、海外で何したいとか全然考えたことないよ。", { character: gakuchika.normal }),
  q302Dialogue(25, "ガクチカくん", "だから見てみるんじゃない？", { character: gakuchika.normal }),
  q302Dialogue(26, "主人公", "逆なの？", { character: gakuchika.normal }),
  q302Dialogue(27, "ガクチカくん", "知らないものって、やりたいかどうかも決められないでしょ。", { character: gakuchika.normal }),
  q302Dialogue(28, "主人公", "あー……。", { character: gakuchika.normal }),
  q302Dialogue(29, "主人公", "確かに。", { character: gakuchika.normal }),

  q302Dialogue(30, "主人公", "海外で学んだり。", { character: gakuchika.normal }),
  q302Dialogue(31, "主人公", "違う文化の人と交流したり……。", { character: gakuchika.normal }),
  q302Dialogue(32, "主人公", "大学入ったとき、こんなことまで選択肢に入ると思ってなかった。", { character: gakuchika.normal }),
  q302Dialogue(33, "ガクチカくん", "大学って、授業を取るだけじゃないからね。", { character: gakuchika.smile }),
  q302Dialogue(34, "主人公", "それ、前にも言われた気がする。", { character: gakuchika.smile }),
  q302Dialogue(35, "ガクチカくん", "やっと染み込んできた？", { character: gakuchika.smile }),
  q302Dialogue(36, "主人公", "ちょっとずつね。", { character: gakuchika.smile }),

  q302Scene({
    id: "q3-02-choice",
    speaker: "SYSTEM",
    text: "留学・国際交流のお知らせ。どうする？",
    character: gakuchika.smile,
    choices: [
      {
        label: "A",
        text: "ちょっと気になる！詳しく調べてみる",
        next: "q3-02-a-001",
        effects: {
          universityLife: 2,
          informationUse: 1,
          affection: { gakuchika: 2 }
        }
      },
      {
        label: "B",
        text: "今すぐは無理そう。でも情報だけ覚えておく",
        next: "q3-02-b-001",
        effects: {
          informationUse: 1,
          universityLife: 1,
          affection: { gakuchika: 1 }
        }
      },
      {
        label: "C",
        text: "海外は自分には無理！見なかったことにする",
        next: "q3-02-c-001",
        effects: {
          universityLife: -1,
          affection: { gakuchika: -1 }
        }
      }
    ]
  }),

  q302Scene({ id: "q3-02-a-001", speaker: "ガクチカくん", text: "いいじゃん！", character: gakuchika.grin }),
  q302Scene({ id: "q3-02-a-002", speaker: "主人公", text: "参加するかはまだ分かんないけどね。", character: gakuchika.grin }),
  q302Scene({ id: "q3-02-a-003", speaker: "ガクチカくん", text: "それでいいって。", character: gakuchika.grin }),
  q302Scene({ id: "q3-02-a-004", speaker: "ガクチカくん", text: "まず知るところから。", character: gakuchika.grin, next: "q3-02-common-001" }),

  q302Scene({ id: "q3-02-b-001", speaker: "ガクチカくん", text: "それもアリ。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-b-002", speaker: "主人公", text: "今じゃなくても、来年とか。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-b-003", speaker: "主人公", text: "あとから興味出るかもしれないし。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-b-004", speaker: "ガクチカくん", text: "そういうこと。", character: gakuchika.smile, next: "q3-02-common-001" }),

  q302Scene({ id: "q3-02-c-001", speaker: "ガクチカくん", text: "“行かない”と“知らないまま閉じる”は別だよ。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-c-002", speaker: "主人公", text: "……。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-c-003", speaker: "ガクチカくん", text: "選ばないなら、それでもいい。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-c-004", speaker: "ガクチカくん", text: "でも、選択肢があることくらいは知っててもいいんじゃない？", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-c-005", speaker: "主人公", text: "……確かに。", character: gakuchika.normal, next: "q3-02-common-001" }),

  q302Scene({ id: "q3-02-common-001", speaker: "主人公", text: "なんかさ。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-002", speaker: "主人公", text: "大学入った頃は。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-003", speaker: "主人公", text: "授業見て、単位取って、卒業する。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-004", speaker: "主人公", text: "それだけだと思ってた。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-005", speaker: "ガクチカくん", text: "今は？", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-006", speaker: "主人公", text: "地域に行ったり。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-007", speaker: "主人公", text: "人と会ったり。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-008", speaker: "主人公", text: "海外に行く選択肢まであったり。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-009", speaker: "主人公", text: "思ってたより、ずっと広い。", character: gakuchika.normal }),
  q302Scene({ id: "q3-02-common-010", speaker: "ガクチカくん", text: "全部やらなくていいよ。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-common-011", speaker: "主人公", text: "うん。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-common-012", speaker: "ガクチカくん", text: "でも。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-common-013", speaker: "ガクチカくん", text: "“自分には関係ない”って、最初から閉じなくてもいい。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-common-014", speaker: "主人公", text: "まず知って。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-common-015", speaker: "主人公", text: "そこから、自分で選ぶ。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-common-016", speaker: "ガクチカくん", text: "そう。", character: gakuchika.smile }),
  q302Scene({ id: "q3-02-common-017", speaker: "主人公", text: "……ちょっと海外、気になってきたかも。", character: gakuchika.smile }),
  q302Scene({
    id: "q3-02-clear",
    speaker: "SYSTEM",
    text: "Q3-02 CLEAR！",
    clear: true,
    next: "q3-03-time-passage"
  }),

  /* ==================
   Q3-03 出せばいい、じゃない
  =====================*/
  q303Scene({
    id: "q3-03-time-passage",
    speaker: "SYSTEM",
    text: "3Q中盤／自室・夜",
    timePassage: {
      label: "LATER IN 3Q",
      title: "3Q中盤",
      detail: "自室・夜"
    },
    next: "q3-03-001"
  }),
  q303Dialogue(1, "主人公", "ふぅ……。"),
  q303Dialogue(2, "主人公", "あと確認レポート1個。"),
  q303Dialogue(3, "主人公", "今日はもう頭動かない〜〜。"),
  q303Dialogue(4, "主人公", "……最悪。"),
  q303Dialogue(5, "主人公", "“あああああああ”とか。"),
  q303Dialogue(6, "主人公", "句読点で埋めて出せば――"),
  q303Dialogue(7, "？？？", "やめて。"),
  q303Dialogue(8, "主人公", "うわっ！"),

  q303Dialogue(9, "主人公", "確認レポートくん！", { character: report.serious }),
  q303Dialogue(10, "確認レポートくん", "今、何を出そうとした？", { character: report.serious }),
  q303Dialogue(11, "主人公", "いや、その……。", { character: report.serious }),
  q303Dialogue(12, "主人公", "ちょっと魔が差しただけです。", { character: report.serious }),
  q303Dialogue(13, "確認レポートくん", "提出できれば何でもいいと思ってる？", { character: report.serious }),
  q303Dialogue(14, "主人公", "思ってません……。", { character: report.serious }),
  q303Dialogue(15, "確認レポートくん", "なら、ちゃんと書いて。", { character: report.serious }),
  q303Dialogue(16, "主人公", "はい……。", { character: report.serious }),

  q303Dialogue(17, "主人公", "ん？", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone",
    se: "./assets/audio/se/notification.wav"
  }),
  q303Dialogue(18, "主人公", "あ、吉村先生の投稿だ。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(19, "吉村先生", "レポート読んでいってるけど……。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(20, "吉村先生", "なぜ0点になっちゃうの知ってるのに、句読点とか意味のない文字列で投稿してくるんだろう……。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(21, "主人公", "…………。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(22, "吉村先生", "確認レポートの評価50%だから。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(23, "吉村先生", "そこが0点になるってことは、試験で満点でも絶対単位とれないんだけども……。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(24, "吉村先生", "何がしたいのだろう……。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(25, "吉村先生", "つらい。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(26, "主人公", "…………。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(27, "確認レポートくん", "刺さってるね。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),
  q303Dialogue(28, "主人公", "めちゃくちゃ刺さってる。", {
    foreground: YOSHIMURA_SLACK_FOREGROUND,
    foregroundLayout: "phone"
  }),

  q303Dialogue(29, "主人公", "せ、先生……。", { character: yoshimura.normal }),
  q303Dialogue(30, "吉村先生", "確認レポート、ちゃんと読んでますからね。", { character: yoshimura.normal }),
  q303Dialogue(31, "主人公", "はい……。", { character: yoshimura.normal }),
  q303Dialogue(32, "吉村先生", "句読点だけとか。", { character: yoshimura.normal }),
  q303Dialogue(33, "吉村先生", "意味のない文字列とか。", { character: yoshimura.normal }),
  q303Dialogue(34, "吉村先生", "そういうものを入れても、評価はできません。", { character: yoshimura.normal }),
  q303Dialogue(35, "主人公", "ですよねぇ……。", { character: yoshimura.normal }),
  q303Dialogue(36, "確認レポートくん", "“出した”だけじゃダメ。", { character: report.serious }),
  q303Dialogue(37, "主人公", "はい。", { character: report.serious }),

  q303Dialogue(38, "吉村先生", "この科目では、確認レポートが評価の50%です。", { character: yoshimura.normal }),
  q303Dialogue(39, "主人公", "50%……。", { character: yoshimura.normal }),
  q303Dialogue(40, "吉村先生", "そこが0点なら。", { character: yoshimura.normal }),
  q303Dialogue(41, "吉村先生", "試験で満点でも、単位は取れません。", { character: yoshimura.normal }),
  q303Dialogue(42, "主人公", "試験で挽回するルートもない……！", { character: yoshimura.normal }),
  q303Dialogue(43, "吉村先生", "そういうことです。", { character: yoshimura.normal }),
  q303Dialogue(44, "主人公", "重い……。", { character: yoshimura.normal }),
  q303Dialogue(45, "確認レポートくん", "だから最初からちゃんと書く。", { character: report.serious }),
  q303Dialogue(46, "主人公", "二人とも正論が痛い！", { character: report.serious }),

  q303Dialogue(47, "主人公", "確認レポートって。", { character: yoshimura.normal }),
  q303Dialogue(48, "主人公", "期限内に出せばOK、じゃないんだね。", { character: yoshimura.normal }),
  q303Dialogue(49, "吉村先生", "もちろんです。", { character: yoshimura.normal }),
  q303Dialogue(50, "吉村先生", "授業をどう理解したか。", { character: yoshimura.normal }),
  q303Dialogue(51, "吉村先生", "何を考えたか。", { character: yoshimura.normal }),
  q303Dialogue(52, "吉村先生", "そこまで含めて、ちゃんと読みます。", { character: yoshimura.normal }),
  q303Dialogue(53, "主人公", "……。", { character: yoshimura.normal }),
  q303Dialogue(54, "主人公", "じゃあもう一回、授業見直そ。", { character: yoshimura.normal }),

  q303Dialogue(55, "主人公", "えーっと。"),
  q303Dialogue(56, "主人公", "この授業で印象に残ったのは……。"),
  q303Dialogue(57, "主人公", "自分がどう理解したかを整理して……。"),
  q303Dialogue(58, "主人公", "よし。"),
  q303Dialogue(59, "主人公", "今度こそ提出！"),
  q303Dialogue(60, "確認レポートくん", "内容、確認した？", { character: report.serious }),
  q303Dialogue(61, "主人公", "した！", { character: report.serious }),
  q303Dialogue(62, "確認レポートくん", "誤字は？", { character: report.serious }),
  q303Dialogue(63, "主人公", "見直した！", { character: report.serious }),
  q303Dialogue(64, "確認レポートくん", "提出先は？", { character: report.serious }),
  q303Dialogue(65, "主人公", "合ってる！", { character: report.serious }),
  q303Dialogue(66, "確認レポートくん", "ならいい。", { character: report.normal }),

  q303Dialogue(67, "主人公", "（確認レポートは。）", { character: report.normal }),
  q303Dialogue(68, "主人公", "（提出済みにするための作業じゃない。）", { character: report.normal }),
  q303Dialogue(69, "主人公", "（授業をどう理解したのか。）", { character: report.normal }),
  q303Dialogue(70, "主人公", "（自分の言葉でまとめるところまでが大事なんだ。）", { character: report.normal }),
  q303Dialogue(71, "吉村先生", "……ちゃんと読んでますからね。", { character: yoshimura.normal }),
  q303Dialogue(72, "主人公", "その一言、もう忘れません……！", { character: yoshimura.normal }),
  q303Scene({
    id: "q3-03-clear",
    speaker: "SYSTEM",
    text: "Q3-03 CLEAR！",
    clear: true,
    next: "q3-04-time-passage"
  }),

  /* ==================
   Q3-04 今回の試験日は？
  =====================*/
  q304Scene({
    id: "q3-04-time-passage",
    speaker: "SYSTEM",
    text: "3Q後半／自室・昼",
    timePassage: {
      label: "LATE QUARTER",
      title: "3Q後半",
      detail: "自室・昼"
    },
    next: "q3-04-001"
  }),
  q304Dialogue(1, "主人公", "ん？", {
    notification: examDateNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q304Dialogue(2, "主人公", "あ、試験日程！", { notification: examDateNotification }),
  q304Dialogue(3, "主人公", "今回はちゃんとすぐ確認するよ〜。", { notification: examDateNotification }),
  q304Dialogue(4, "？？？", "へえ。"),
  q304Dialogue(5, "主人公", "その声！"),

  q304Dialogue(6, "主人公", "単位認定試験くん！", { character: exam.normal }),
  q304Dialogue(7, "単位認定試験くん", "もう説明はいらない？", { character: exam.normal }),
  q304Dialogue(8, "主人公", "もちろん！", { character: exam.normal }),
  q304Dialogue(9, "主人公", "各科目、受験できる日時が3つあって。", { character: exam.normal }),
  q304Dialogue(10, "主人公", "そのうち1つが最初に割り当てられる。", { character: exam.normal }),
  q304Dialogue(11, "主人公", "まずは、自分に割り当てられた日時を確認！", { character: exam.normal }),
  q304Dialogue(12, "単位認定試験くん", "うん。", { character: exam.normal }),
  q304Dialogue(13, "主人公", "で、自分の予定と照らし合わせて――", { character: exam.normal }),
  q304Dialogue(14, "主人公", "あ。", { character: exam.normal }),
  q304Dialogue(15, "単位認定試験くん", "何？", { character: exam.normal }),
  q304Dialogue(16, "主人公", "この日、バイトだ。", { character: exam.normal }),
  q304Dialogue(17, "単位認定試験くん", "なら？", { character: exam.normal }),
  q304Dialogue(18, "主人公", "残り2つの日程を確認して。", { character: exam.normal }),
  q304Dialogue(19, "主人公", "都合のいい日を選んで、ZEN Portalから変更申請！", { character: exam.normal }),
  q304Dialogue(20, "単位認定試験くん", "覚えてたね。", { character: exam.smile }),
  q304Dialogue(21, "主人公", "成長したでしょ？", { character: exam.smile }),
  q304Dialogue(22, "単位認定試験くん", "少しは。", { character: exam.smile }),
  q304Dialogue(23, "主人公", "少し！？", { character: exam.smile }),

  q304Dialogue(24, "主人公", "こっちの日なら空いてる。", { deadlineSchedule: examChangeSchedule }),
  q304Dialogue(25, "主人公", "変更申請して……。", { deadlineSchedule: examChangeSchedule }),
  q304Dialogue(26, "主人公", "よし！", {
    deadlineSchedule: examChangedSchedule
  }),
  q304Dialogue(27, "主人公", "変更後の日程も確認して。", { deadlineSchedule: examChangedSchedule }),
  q304Dialogue(28, "主人公", "カレンダーにも登録！", { deadlineSchedule: examChangedSchedule }),
  q304Dialogue(29, "単位認定試験くん", "今回は完璧。", { character: exam.smile }),
  q304Dialogue(30, "主人公", "やった！", { character: exam.smile }),

  q304Dialogue(31, "主人公", "（1Qの頃は、試験の日程まで自分で確認するなんて知らなかった。）", { character: exam.normal }),
  q304Dialogue(32, "主人公", "（でも今は。）", { character: exam.normal }),
  q304Dialogue(33, "主人公", "（公開されたら確認して。）", { character: exam.normal }),
  q304Dialogue(34, "主人公", "（予定が合わなければ、自分で変更する。）", { character: exam.normal }),
  q304Dialogue(35, "主人公", "（少しずつ、大学生活の回し方が分かってきたかも。）", { character: exam.normal }),
  q304Dialogue(36, "単位認定試験くん", "ただ。", { character: exam.normal }),
  q304Dialogue(37, "主人公", "？", { character: exam.normal }),
  q304Dialogue(38, "単位認定試験くん", "予定を立てても。", { character: exam.normal }),
  q304Dialogue(39, "単位認定試験くん", "その通り受験できるとは限らない。", { character: exam.normal }),
  q304Dialogue(40, "主人公", "……何その不穏な言い方。", { character: exam.normal }),
  q304Dialogue(41, "単位認定試験くん", "別に。", { character: exam.normal }),
  q304Dialogue(42, "主人公", "絶対なんかあるじゃん！！", { character: exam.normal }),
  q304Scene({
    id: "q3-04-clear",
    speaker: "SYSTEM",
    text: "Q3-04 CLEAR！",
    clear: true,
    next: "q3-05-time-passage"
  }),

  /* ==================
   Q3-05 まさかのインフルエンザ！？
  =====================*/
  q305Scene({
    id: "q3-05-time-passage",
    speaker: "SYSTEM",
    text: "試験当日の朝／自室",
    timePassage: {
      label: "EXAM DAY",
      title: "試験当日の朝",
      detail: "自室"
    },
    next: "q3-05-001"
  }),
  q305Dialogue(1, "主人公", "…………。", { se: "./assets/audio/se/notification.wav" }),
  q305Dialogue(2, "主人公", "頭、痛い……。"),
  q305Dialogue(3, "主人公", "なんか体も重いし……。"),
  q305Dialogue(4, "主人公", "…………38.7℃。", { foreground: THERMOMETER_FOREGROUND }),
  q305Dialogue(5, "主人公", "え。", { foreground: THERMOMETER_FOREGROUND }),
  q305Dialogue(6, "主人公", "待って。", { foreground: THERMOMETER_FOREGROUND }),
  q305Dialogue(7, "主人公", "今日――", { foreground: THERMOMETER_FOREGROUND }),
  q305Dialogue(8, "主人公", "単位認定試験じゃん！！！", { foreground: THERMOMETER_FOREGROUND }),

  q305Dialogue(9, "主人公", "どうしようどうしよう。"),
  q305Dialogue(10, "主人公", "日程変更はちゃんとした。"),
  q305Dialogue(11, "主人公", "接続確認もした。"),
  q305Dialogue(12, "主人公", "今日受ける準備、全部してたのに……！"),
  q305Dialogue(13, "？？？", "だからって。"),
  q305Dialogue(14, "主人公", "……？"),

  q305Dialogue(15, "単位認定試験くん", "その状態で受けるつもり？", { character: exam.worried }),
  q305Dialogue(16, "主人公", "単位認定試験くん……。", { character: exam.worried }),
  q305Dialogue(17, "主人公", "だって今日受けなかったら。", { character: exam.worried }),
  q305Dialogue(18, "主人公", "試験、受けられなくなるんじゃ……。", { character: exam.worried }),
  q305Dialogue(19, "単位認定試験くん", "決めつけないで。", { character: exam.worried }),
  q305Dialogue(20, "主人公", "え？", { character: exam.worried }),
  q305Dialogue(21, "単位認定試験くん", "こういう時こそ。", { character: exam.worried }),
  q305Dialogue(22, "単位認定試験くん", "まず、確認。", { character: exam.worried }),
  q305Dialogue(23, "主人公", "……確認。", { character: exam.worried }),

  q305Scene({
    id: "q3-05-choice",
    speaker: "SYSTEM",
    text: "試験当日に高熱。どうする？",
    character: exam.worried,
    choices: [
      {
        label: "A",
        text: "ZEN Portalや公式案内で、欠席時の手続きを確認する",
        next: "q3-05-a-001",
        effects: {
          informationUse: 2,
          selfManagement: 2,
          affection: { exam: 2 }
        }
      },
      {
        label: "B",
        text: "とりあえずSlackで友達にどうしたか聞く",
        next: "q3-05-b-001",
        effects: {
          informationUse: 0,
          affection: { exam: -1 }
        }
      },
      {
        label: "C",
        text: "解熱剤飲んで、無理やり受ける！",
        next: "q3-05-c-001",
        effects: {
          selfManagement: -2,
          affection: { exam: -1 }
        }
      }
    ]
  }),

  q305Scene({ id: "q3-05-a-001", speaker: "単位認定試験くん", text: "正解。", character: exam.smile }),
  q305Scene({
    id: "q3-05-a-002",
    speaker: "主人公",
    text: "こういう時こそ、自分で公式情報を見る……！",
    character: exam.smile,
    next: "q3-05-common-001"
  }),

  q305Scene({ id: "q3-05-b-001", speaker: "主人公", text: "去年こうだったよ〜とか、誰か知ってるかも！", character: exam.worried }),
  q305Scene({ id: "q3-05-b-002", speaker: "単位認定試験くん", text: "参考にはなる。", character: exam.worried }),
  q305Scene({ id: "q3-05-b-003", speaker: "主人公", text: "だよね！", character: exam.worried }),
  q305Scene({ id: "q3-05-b-004", speaker: "単位認定試験くん", text: "でも、手続きは公式情報で確認して。", character: exam.worried }),
  q305Scene({ id: "q3-05-b-005", speaker: "主人公", text: "……ですよね。", character: exam.worried }),
  q305Scene({
    id: "q3-05-b-006",
    speaker: "単位認定試験くん",
    text: "制度は変わることもあるから。",
    character: exam.worried,
    next: "q3-05-common-001"
  }),

  q305Scene({ id: "q3-05-c-001", speaker: "主人公", text: "この一時間だけ耐えれば……！", character: exam.worried }),
  q305Scene({ id: "q3-05-c-002", speaker: "単位認定試験くん", text: "やめて。", character: exam.worried }),
  q305Scene({ id: "q3-05-c-003", speaker: "主人公", text: "即答。", character: exam.worried }),
  q305Scene({ id: "q3-05-c-004", speaker: "単位認定試験くん", text: "受験できない事情があるなら、まず手続きを確認する。", character: exam.worried }),
  q305Scene({ id: "q3-05-c-005", speaker: "主人公", text: "でも欠席したら怖いし……。", character: exam.worried }),
  q305Scene({ id: "q3-05-c-006", speaker: "単位認定試験くん", text: "怖いからって、知らないまま無理をする方が危ない。", character: exam.worried }),
  q305Scene({
    id: "q3-05-c-007",
    speaker: "主人公",
    text: "……はい。",
    character: exam.worried,
    next: "q3-05-common-001"
  }),

  q305Scene({ id: "q3-05-common-001", speaker: "主人公", text: "えーっと……。", deadlineSchedule: examAbsenceGuide }),
  q305Scene({ id: "q3-05-common-002", speaker: "主人公", text: "“単位認定試験を欠席した場合”……。", deadlineSchedule: examAbsenceGuide }),
  q305Scene({ id: "q3-05-common-003", speaker: "主人公", text: "……あ！", deadlineSchedule: examAbsenceGuide }),
  q305Scene({ id: "q3-05-common-004", speaker: "主人公", text: "病気とか、大学が認める理由で欠席した場合は。", deadlineSchedule: examAbsenceGuide }),
  q305Scene({ id: "q3-05-common-005", speaker: "主人公", text: "指定された期間内に申請すれば――", deadlineSchedule: examAbsenceGuide }),
  q305Scene({ id: "q3-05-common-006", speaker: "主人公", text: "追試験を申請できるんだ！", deadlineSchedule: examAbsenceGuide }),
  q305Scene({ id: "q3-05-common-007", speaker: "単位認定試験くん", text: "そう。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-008", speaker: "主人公", text: "よかったぁぁぁ……。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-009", speaker: "単位認定試験くん", text: "まだ安心するのは早い。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-010", speaker: "主人公", text: "えっ。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-011", speaker: "単位認定試験くん", text: "“自動で追試になる”わけじゃない。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-012", speaker: "主人公", text: "……申請。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-013", speaker: "単位認定試験くん", text: "うん。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-014", speaker: "単位認定試験くん", text: "期限や必要な手続きも、自分で確認する。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-015", speaker: "主人公", text: "体調悪いときでも、そこは忘れちゃダメなんだね。", character: exam.normal }),
  q305Scene({ id: "q3-05-common-016", speaker: "単位認定試験くん", text: "あとで元気になってから気づいても、遅いことがある。", character: exam.normal }),

  q305Scene({ id: "q3-05-common-017", speaker: "主人公", text: "追試験の案内……あった。", deadlineSchedule: makeupExamApplication }),
  q305Scene({ id: "q3-05-common-018", speaker: "主人公", text: "申請期間を確認して。", deadlineSchedule: makeupExamApplication }),
  q305Scene({ id: "q3-05-common-019", speaker: "主人公", text: "必要なものも確認して……。", deadlineSchedule: makeupExamApplication }),
  q305Scene({ id: "q3-05-common-020", speaker: "主人公", text: "よし。", deadlineSchedule: makeupExamApplication }),
  q305Scene({ id: "q3-05-common-021", speaker: "主人公", text: "今できることだけやったら、今日はちゃんと休む。", deadlineSchedule: makeupExamApplication }),
  q305Scene({ id: "q3-05-common-022", speaker: "単位認定試験くん", text: "それでいい。", character: exam.smile, next: "q3-05-days-later" }),

  q305Scene({
    id: "q3-05-days-later",
    speaker: "SYSTEM",
    text: "数日後／自室・昼",
    timePassage: {
      label: "A FEW DAYS LATER",
      title: "数日後",
      detail: "自室・昼"
    },
    next: "q3-05-after-001"
  }),
  q305Scene({ id: "q3-05-after-001", speaker: "主人公", text: "熱下がった〜〜！" }),
  q305Scene({ id: "q3-05-after-002", speaker: "主人公", text: "健康って最高……。" }),
  q305Scene({ id: "q3-05-after-003", speaker: "主人公", text: "それで、追試験の申請は……。" }),
  q305Scene({ id: "q3-05-after-004", speaker: "主人公", text: "よし。ちゃんと確認できてる。", deadlineSchedule: makeupExamApplication }),
  q305Scene({ id: "q3-05-after-005", speaker: "単位認定試験くん", text: "今度は受けられそう？", character: exam.normal }),
  q305Scene({ id: "q3-05-after-006", speaker: "主人公", text: "うん！", character: exam.normal }),
  q305Scene({ id: "q3-05-after-007", speaker: "主人公", text: "今度こそ万全！", character: exam.normal }),

  q305Scene({ id: "q3-05-final-001", speaker: "主人公", text: "予定をちゃんと立てても。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-002", speaker: "主人公", text: "体調とか、急なトラブルまでは予定通りにならないんだね。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-003", speaker: "単位認定試験くん", text: "だから。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-004", speaker: "単位認定試験くん", text: "困った時にどう動くかも、自己管理。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-005", speaker: "主人公", text: "まず慌てない。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-006", speaker: "主人公", text: "公式情報を確認する。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-007", speaker: "主人公", text: "必要なら、期限内に手続きする。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-008", speaker: "単位認定試験くん", text: "うん。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-009", speaker: "主人公", text: "……大学生活、トラブル対応まで自分で攻略するのかぁ。", character: exam.normal }),
  q305Scene({ id: "q3-05-final-010", speaker: "単位認定試験くん", text: "少しは慣れたでしょ。", character: exam.smile }),
  q305Scene({ id: "q3-05-final-011", speaker: "主人公", text: "こういう慣れ方はしたくなかった！", character: exam.smile }),
  q305Scene({
    id: "q3-05-clear",
    speaker: "SYSTEM",
    text: "Q3-05 CLEAR！",
    clear: true,
    next: "q3-result-time-passage"
  }),

  /* ==================
   Q3 RESULT
   3Qを振り返り、成績表を確認して4Qへ進む。
  =====================*/
  q3ResultScene({
    id: "q3-result-time-passage",
    speaker: "SYSTEM",
    text: "3Q末／自室・夜",
    timePassage: {
      label: "END OF QUARTER",
      title: "3Q末",
      detail: "自室・夜"
    },
    next: "q3-result-001"
  }),
  q3ResultScene({ id: "q3-result-001", speaker: "主人公", text: "は〜〜〜……。" }),
  q3ResultScene({ id: "q3-result-002", speaker: "主人公", text: "3Q、終わったぁ……！" }),
  q3ResultScene({ id: "q3-result-003", speaker: "主人公", text: "今Qも濃かったなぁ。" }),
  q3ResultScene({ id: "q3-result-004", speaker: "主人公", text: "まず、3Qと4Qの履修登録。" }),
  q3ResultScene({ id: "q3-result-005", speaker: "主人公", text: "1Qの頃は“好きな科目取ればいいんでしょ？”って感じだったけど。" }),
  q3ResultScene({ id: "q3-result-006", speaker: "主人公", text: "今は、必修とか選択必修とか。" }),
  q3ResultScene({ id: "q3-result-007", speaker: "主人公", text: "来年以降に取りたい科目のことまで、ちょっと考えるようになった。" }),
  q3ResultScene({ id: "q3-result-008", speaker: "主人公", text: "……成長してるじゃん、私。" }),

  q3ResultScene({ id: "q3-result-009", speaker: "主人公", text: "留学とか国際交流も。" }),
  q3ResultScene({ id: "q3-result-010", speaker: "主人公", text: "最初は“私には関係ない”って思いかけたけど。" }),
  q3ResultScene({ id: "q3-result-011", speaker: "主人公", text: "知らないまま閉じちゃったら、選ぶこともできないもんね。" }),
  q3ResultScene({ id: "q3-result-012", speaker: "主人公", text: "行くかどうかは別として。" }),
  q3ResultScene({ id: "q3-result-013", speaker: "主人公", text: "まず知って、自分で決める。" }),

  q3ResultScene({ id: "q3-result-014", speaker: "主人公", text: "確認レポートは……。" }),
  q3ResultScene({ id: "q3-result-015", speaker: "主人公", text: "…………。" }),
  q3ResultScene({ id: "q3-result-016", speaker: "主人公", text: "“あああああ”で埋めるのは絶対ダメ。" }),
  q3ResultScene({ id: "q3-result-017", speaker: "主人公", text: "これはもう忘れない。" }),
  q3ResultScene({ id: "q3-result-018", speaker: "主人公", text: "先生、ちゃんと読んでるもんな……。" }),
  q3ResultScene({ id: "q3-result-019", speaker: "主人公", text: "提出しただけじゃなくて。" }),
  q3ResultScene({ id: "q3-result-020", speaker: "主人公", text: "ちゃんと授業を理解して、自分の言葉で書くところまで。" }),
  q3ResultScene({ id: "q3-result-021", speaker: "主人公", text: "それが確認レポート。" }),

  q3ResultScene({ id: "q3-result-022", speaker: "主人公", text: "それから、単位認定試験。" }),
  q3ResultScene({ id: "q3-result-023", speaker: "主人公", text: "今回は日程もちゃんと確認した。" }),
  q3ResultScene({ id: "q3-result-024", speaker: "主人公", text: "予定が合わないところは自分で変更した。" }),
  q3ResultScene({ id: "q3-result-025", speaker: "主人公", text: "そこまでは完璧だったのに……。" }),
  q3ResultScene({ id: "q3-result-026", speaker: "主人公", text: "まさか試験当日に熱出すとは。" }),
  q3ResultScene({ id: "q3-result-027", speaker: "主人公", text: "38.7℃は聞いてない。" }),

  q3ResultScene({ id: "q3-result-028", speaker: "主人公", text: "でも。" }),
  q3ResultScene({ id: "q3-result-029", speaker: "主人公", text: "前の私だったら、“どうしよう！”って慌てて終わってたかも。" }),
  q3ResultScene({ id: "q3-result-030", speaker: "主人公", text: "今回はちゃんと。" }),
  q3ResultScene({ id: "q3-result-031", speaker: "主人公", text: "最新の公式情報を確認して。" }),
  q3ResultScene({ id: "q3-result-032", speaker: "主人公", text: "必要な手続きがあることも自分で調べられた。" }),
  q3ResultScene({ id: "q3-result-033", speaker: "主人公", text: "予定を立てるだけじゃなくて。" }),
  q3ResultScene({ id: "q3-result-034", speaker: "主人公", text: "予定通りにいかなかったとき、どう動くか。" }),
  q3ResultScene({ id: "q3-result-035", speaker: "主人公", text: "それも自己管理なんだね。" }),
  q3ResultScene({
    id: "q3-result",
    speaker: "SYSTEM",
    text: "3Q RESULT",
    clear: true,
    quarterEnd: {
      nextQuarter: 4,
      target: "q4-start"
    }
  }),

  q401Scene({
    id: "q4-start",
    speaker: "SYSTEM",
    text: "4Q初日／自室・朝",
    timePassage: {
      label: "NEXT QUARTER",
      title: "4Q START",
      detail: "4Q初日・自室／朝"
    },
    next: "q4-01-001"
  }),
  q401Dialogue(1, "主人公", "……よし。"),
  q401Dialogue(2, "主人公", "今日から4Q！"),
  q401Dialogue(3, "主人公", "1年生、最後のQだ。"),

  q401Dialogue(4, "主人公", "まずは――。"),
  q401Dialogue(5, "主人公", "4Qの履修科目を確認。"),
  q401Dialogue(6, "主人公", "授業開始日と、確認レポートの締切も見て……。"),
  q401Dialogue(7, "主人公", "単位認定試験の日程が公開される時期もチェック。"),
  q401Dialogue(8, "主人公", "バイトのシフトと重なりそうなところは……今のうちにカレンダーに入れとこ。"),
  q401Dialogue(9, "主人公", "それからZEN Portalのお知らせ。"),
  q401Dialogue(10, "主人公", "Slackも未読チェック。"),
  q401Dialogue(11, "主人公", "……よし。"),
  q401Dialogue(12, "主人公", "今のところ見落としなし！"),

  q401Dialogue(13, "？？？", "…………。"),
  q401Dialogue(14, "主人公", "ん？"),

  q401Dialogue(15, "履修登録くん", "……何も言うことないな。", { character: rishu.normal }),
  q401Dialogue(16, "主人公", "え？", { character: rishu.normal }),
  q401Dialogue(17, "履修登録くん", "いつもの。", { character: rishu.normal }),
  q401Dialogue(18, "主人公", "いつもの？", { character: rishu.normal }),
  q401Dialogue(19, "履修登録くん", "『ちょっと待って』。", { character: rishu.normal }),
  q401Dialogue(20, "主人公", "あ。", { character: rishu.normal }),
  q401Dialogue(21, "主人公", "そういえば今日、言われてない！", { character: rishu.normal }),
  q401Dialogue(22, "履修登録くん", "自分で確認してたからね。", { character: rishu.smile }),
  q401Dialogue(23, "主人公", "…………！", { character: rishu.smile }),

  q401Dialogue(24, "Slackくん", "しかもちゃんとSlackまで見てるじゃん。", { character: slack.smile }),
  q401Dialogue(25, "主人公", "見る習慣つけろって言ったの、Slackくんでしょ？", { character: slack.smile }),
  q401Dialogue(26, "Slackくん", "お。", { character: slack.smile }),
  q401Dialogue(27, "Slackくん", "覚えてんじゃん。", { character: slack.smile }),
  q401Dialogue(28, "主人公", "情報通になってきましたから。", { character: slack.smile }),
  q401Dialogue(29, "Slackくん", "そこまで言う？", { character: slack.smile }),

  q401Dialogue(30, "確認レポートくん", "締切は？", { character: report.serious }),
  q401Dialogue(31, "主人公", "確認済み。", { character: report.serious }),
  q401Dialogue(32, "確認レポートくん", "提出直前にやる？", { character: report.serious }),
  q401Dialogue(33, "主人公", "やりません。", { character: report.serious }),
  q401Dialogue(34, "確認レポートくん", "内容を“ああああ”で――", { character: report.serious }),
  q401Dialogue(35, "主人公", "埋めません！！", { character: report.serious }),
  q401Dialogue(36, "確認レポートくん", "……よし。", { character: report.normal }),
  q401Dialogue(37, "主人公", "その確認もう一生されるの！？", { character: report.normal }),

  q401Dialogue(38, "単位認定試験くん", "試験は？", { character: exam.normal }),
  q401Dialogue(39, "主人公", "日程が公開されたら、自分に割り当てられた日時を確認。", { character: exam.normal }),
  q401Dialogue(40, "主人公", "予定が合わなかったら、変更申請。", { character: exam.normal }),
  q401Dialogue(41, "主人公", "それから最新の受験方法もちゃんと確認する。", { character: exam.normal }),
  q401Dialogue(42, "単位認定試験くん", "うん。", { character: exam.normal }),
  q401Dialogue(43, "主人公", "もう“少しは成長した”じゃないでしょ？", { character: exam.normal }),
  q401Dialogue(44, "単位認定試験くん", "……成長したね。", { character: exam.smile }),
  q401Dialogue(45, "主人公", "やった！", { character: exam.smile }),

  q401Dialogue(46, "卒業要件先輩", "卒業要件は？", { character: graduation.normal }),
  q401Dialogue(47, "主人公", "もちろん忘れてません。", { character: graduation.normal }),
  q401Dialogue(48, "主人公", "まだ1年生だけど。", { character: graduation.normal }),
  q401Dialogue(49, "主人公", "今どこまで取れてるか、たまに現在地を確認する。", { character: graduation.normal }),
  q401Dialogue(50, "卒業要件先輩", "そう。", { character: graduation.normal }),
  q401Dialogue(51, "主人公", "あと3年ある、じゃなくて。", { character: graduation.normal }),
  q401Dialogue(52, "主人公", "あと3年をどう進むか、だよね。", { character: graduation.normal }),
  q401Dialogue(53, "卒業要件先輩", "……それでいい。", { character: graduation.smile }),

  q401Dialogue(54, "ガクチカくん", "じゃあ、授業以外は？", { character: gakuchika.normal }),
  q401Dialogue(55, "主人公", "それも忘れてないよ。", { character: gakuchika.normal }),
  q401Dialogue(56, "主人公", "気になるものがあったら、まず知ってみる。", { character: gakuchika.normal }),
  q401Dialogue(57, "主人公", "やってみたことは、ちゃんと振り返って残す。", { character: gakuchika.normal }),
  q401Dialogue(58, "ガクチカくん", "完璧じゃん。", { character: gakuchika.grin }),
  q401Dialogue(59, "主人公", "ふふん。", { character: gakuchika.grin }),

  q401Dialogue(60, "主人公", "なんか……。", { character: gakuchika.grin }),
  q401Dialogue(61, "主人公", "入学した頃は、何するにも誰かに止められてたのに。", { character: rishu.normal }),
  q401Dialogue(62, "履修登録くん", "特に君はね。", { character: rishu.normal }),
  q401Dialogue(63, "主人公", "そこ強調しなくていい！", { character: rishu.normal }),
  q401Dialogue(64, "主人公", "でも今は。", { character: rishu.smile }),
  q401Dialogue(65, "主人公", "何を確認すればいいか。", { character: slack.smile }),
  q401Dialogue(66, "主人公", "何かあったらどこを調べればいいか。", { character: exam.normal }),
  q401Dialogue(67, "主人公", "少しずつ、自分で分かるようになってきた。", { character: graduation.smile, next: "q4-01-pause" }),

  q401Scene({
    id: "q4-01-pause",
    speaker: "SYSTEM",
    text: "少し間",
    timePassage: {
      label: "A MOMENT LATER",
      title: "少し間",
      detail: "4Q初日の朝"
    },
    next: "q4-01-068"
  }),
  q401Dialogue(68, "主人公", "……よし。"),
  q401Dialogue(69, "主人公", "最後のQ。"),
  q401Dialogue(70, "主人公", "今度は、私が自分でやってみる。"),
  q401Scene({
    id: "q4-01-clear",
    speaker: "SYSTEM",
    text: "Q4-01 CLEAR！",
    clear: true,
    next: "q4-02-time-passage"
  }),

  /* ==================
   Q4-02 締切・試験・予定、大渋滞！
  =====================*/
  q402Scene({
    id: "q4-02-time-passage",
    speaker: "SYSTEM",
    text: "4Q終盤／自室",
    timePassage: {
      label: "LATE QUARTER",
      title: "4Q終盤",
      detail: "自室"
    },
    next: "q4-02-001"
  }),
  q402Dialogue(1, "主人公", "よし、今日も授業やるか〜。"),
  q402Dialogue(2, "主人公", "ん？", {
    notification: finalReportDeadlineNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q402Dialogue(3, "主人公", "…………。", { notification: finalReportDeadlineNotification }),
  q402Dialogue(4, "主人公", "あと3日！？", { notification: finalReportDeadlineNotification }),
  q402Dialogue(5, "主人公", "残ってる確認レポートは……。"),
  q402Dialogue(6, "主人公", "1、2、3……。"),
  q402Dialogue(7, "主人公", "結構ある！！"),

  q402Dialogue(8, "主人公", "でもまあ。"),
  q402Dialogue(9, "主人公", "3日あれば――"),
  q402Dialogue(10, "主人公", "……いや。"),
  q402Dialogue(11, "主人公", "待て待て。"),
  q402Dialogue(12, "主人公", "このあと何かあった気がする。"),
  q402Dialogue(13, "主人公", "最終締切の数日後……。", { deadlineSchedule: q4CongestionCalendar }),
  q402Dialogue(14, "主人公", "単位認定試験！！", { deadlineSchedule: q4CongestionCalendar }),
  q402Dialogue(15, "主人公", "しかも明日はバイト！", { deadlineSchedule: q4CongestionCalendar }),
  q402Dialogue(16, "主人公", "…………。", { deadlineSchedule: q4CongestionCalendar }),
  q402Dialogue(17, "主人公", "大渋滞してる。", { deadlineSchedule: q4CongestionCalendar }),

  q402Dialogue(18, "Slackくん", "お、ちゃんと気づいた？", {
    character: slack.smile,
    notification: slackNotification,
    se: "./assets/audio/se/notification.wav"
  }),
  q402Dialogue(19, "主人公", "Slackくん！", { character: slack.smile }),
  q402Dialogue(20, "Slackくん", "こういう時、未読のまま突っ走ると大事なお知らせ見落とすぞ〜。", { character: slack.smile }),
  q402Dialogue(21, "主人公", "わかってます！", { character: slack.smile }),
  q402Dialogue(22, "主人公", "まず必要な情報を全部確認する！", { character: slack.smile }),
  q402Dialogue(23, "Slackくん", "おお。", { character: slack.smile }),

  q402Dialogue(24, "確認レポートくん", "残りは？", { character: report.serious }),
  q402Dialogue(25, "主人公", "確認レポートが何個残ってるか確認済み。", { character: report.serious }),
  q402Dialogue(26, "確認レポートくん", "最終締切は？", { character: report.serious }),
  q402Dialogue(27, "主人公", "3日後。", { character: report.serious }),
  q402Dialogue(28, "確認レポートくん", "“締切の日にやればいい”？", { character: report.serious }),
  q402Dialogue(29, "主人公", "やりません！", { character: report.serious }),
  q402Dialogue(30, "確認レポートくん", "……成長した。", { character: report.normal }),

  q402Dialogue(31, "単位認定試験くん", "僕は？", { character: exam.normal }),
  q402Dialogue(32, "主人公", "忘れてません！", { character: exam.normal }),
  q402Dialogue(33, "主人公", "レポート最終締切が終わった数日後に、単位認定試験。", { character: exam.normal }),
  q402Dialogue(34, "単位認定試験くん", "じゃあ、レポートだけ考えて予定を組む？", { character: exam.normal }),
  q402Dialogue(35, "主人公", "それだと試験勉強する時間がなくなる……。", { character: exam.normal }),
  q402Dialogue(36, "主人公", "つまり――。", { character: exam.normal }),

  q402Scene({
    id: "q4-02-choice",
    speaker: "SYSTEM",
    text: "どう予定を立てる？",
    character: exam.normal,
    choices: [
      {
        label: "A",
        text: "残っているレポート・最終締切・試験日・バイトを全部並べて、今日から割り振る",
        next: "q4-02-a-001",
        effects: {
          selfManagement: 3,
          informationUse: 2,
          affection: { report: 1, exam: 1, slack: 1 }
        }
      },
      {
        label: "B",
        text: "まずは確認レポート！試験のことは全部提出してから考える",
        next: "q4-02-b-001",
        effects: { selfManagement: -1 }
      },
      {
        label: "C",
        text: "まだ3日あるし、今日はバイト優先！",
        next: "q4-02-c-001",
        effects: {
          selfManagement: -2,
          informationUse: -1
        }
      }
    ]
  }),

  q402Scene({ id: "q4-02-a-001", speaker: "主人公", text: "今日できるレポートは今日。", character: report.normal }),
  q402Scene({ id: "q4-02-a-002", speaker: "主人公", text: "明日はバイト前に一つ進めて。", character: report.normal }),
  q402Scene({ id: "q4-02-a-003", speaker: "主人公", text: "最終締切ギリギリには残さない。", character: report.normal }),
  q402Scene({ id: "q4-02-a-004", speaker: "主人公", text: "それなら、締切後に慌てず試験の最終確認もできる！", character: exam.smile }),
  q402Scene({ id: "q4-02-a-005", speaker: "確認レポートくん", text: "正解。", character: report.normal }),
  q402Scene({ id: "q4-02-a-006", speaker: "単位認定試験くん", text: "僕の準備時間も残ってる。", character: exam.smile }),
  q402Scene({ id: "q4-02-a-007", speaker: "Slackくん", text: "ちゃんと先まで見えてんじゃん！", character: slack.smile, next: "q4-02-common-001" }),

  q402Scene({ id: "q4-02-b-001", speaker: "確認レポートくん", text: "最終締切を優先するのは間違ってない。", character: report.normal }),
  q402Scene({ id: "q4-02-b-002", speaker: "主人公", text: "じゃあ正解？", character: report.normal }),
  q402Scene({ id: "q4-02-b-003", speaker: "単位認定試験くん", text: "でも。", character: exam.normal }),
  q402Scene({ id: "q4-02-b-004", speaker: "単位認定試験くん", text: "提出した瞬間に、試験の準備が終わるわけじゃない。", character: exam.normal }),
  q402Scene({ id: "q4-02-b-005", speaker: "主人公", text: "……そうだった。", character: exam.normal }),
  q402Scene({ id: "q4-02-b-006", speaker: "Slackくん", text: "“次に何があるか”まで見て予定組まないとな。", character: slack.smile, next: "q4-02-common-001" }),

  q402Scene({ id: "q4-02-c-001", speaker: "確認レポートくん", text: "……2Qから何を学んだ？", character: report.serious }),
  q402Scene({ id: "q4-02-c-002", speaker: "主人公", text: "その言い方怖い！", character: report.serious }),
  q402Scene({ id: "q4-02-c-003", speaker: "確認レポートくん", text: "3日“も”あるんじゃない。", character: report.serious }),
  q402Scene({ id: "q4-02-c-004", speaker: "確認レポートくん", text: "残っている作業と、その先の予定を見る。", character: report.serious }),
  q402Scene({ id: "q4-02-c-005", speaker: "主人公", text: "はい……。", character: report.serious }),
  q402Scene({ id: "q4-02-c-006", speaker: "単位認定試験くん", text: "数日後には僕もいるから。", character: exam.worried }),
  q402Scene({ id: "q4-02-c-007", speaker: "主人公", text: "圧がすごい。", character: exam.worried, next: "q4-02-common-001" }),

  q402Scene({ id: "q4-02-common-001", speaker: "主人公", text: "まず全部並べる。", deadlineSchedule: q4CongestionPlan }),
  q402Scene({ id: "q4-02-common-002", speaker: "主人公", text: "こうやって見ると……。", deadlineSchedule: q4CongestionPlan }),
  q402Scene({ id: "q4-02-common-003", speaker: "主人公", text: "“締切まであと3日”だけ見てた時より、全然違う。", deadlineSchedule: q4CongestionPlan }),
  q402Scene({ id: "q4-02-common-004", speaker: "Slackくん", text: "情報を集める。", character: slack.smile }),
  q402Scene({ id: "q4-02-common-005", speaker: "確認レポートくん", text: "残ってる量を見る。", character: report.normal }),
  q402Scene({ id: "q4-02-common-006", speaker: "単位認定試験くん", text: "その先の予定も見る。", character: exam.normal }),
  q402Scene({ id: "q4-02-common-007", speaker: "主人公", text: "それから、優先順位を決める。", character: exam.normal }),
  q402Scene({ id: "q4-02-common-008", speaker: "主人公", text: "……よし！", character: exam.smile, next: "q4-02-before-deadline" }),

  q402Scene({
    id: "q4-02-before-deadline",
    speaker: "SYSTEM",
    text: "数日後／最終締切前",
    timePassage: {
      label: "BEFORE THE DEADLINE",
      title: "数日後",
      detail: "最終締切前"
    },
    next: "q4-02-deadline-001"
  }),
  q402Scene({ id: "q4-02-deadline-001", speaker: "主人公", text: "確認レポート――。" }),
  q402Scene({ id: "q4-02-deadline-002", speaker: "主人公", text: "全部提出完了！！" }),
  q402Scene({ id: "q4-02-deadline-003", speaker: "確認レポートくん", text: "最終締切より前。", character: report.normal }),
  q402Scene({ id: "q4-02-deadline-004", speaker: "主人公", text: "当然！", character: report.normal }),
  q402Scene({ id: "q4-02-deadline-005", speaker: "確認レポートくん", text: "昔ならギリギリだったのに。", character: report.normal }),
  q402Scene({ id: "q4-02-deadline-006", speaker: "主人公", text: "昔の私を擦るな！", character: report.normal, next: "q4-02-exam-day" }),

  q402Scene({
    id: "q4-02-exam-day",
    speaker: "SYSTEM",
    text: "さらに数日後",
    timePassage: {
      label: "A FEW DAYS LATER",
      title: "さらに数日後",
      detail: "単位認定試験の日"
    },
    next: "q4-02-exam-001"
  }),
  q402Scene({ id: "q4-02-exam-001", speaker: "主人公", text: "そして今日は……。" }),
  q402Scene({ id: "q4-02-exam-002", speaker: "単位認定試験くん", text: "僕。", character: exam.normal }),
  q402Scene({ id: "q4-02-exam-003", speaker: "主人公", text: "単位認定試験！", character: exam.normal }),
  q402Scene({ id: "q4-02-exam-004", speaker: "主人公", text: "でも今回は。", character: exam.normal }),
  q402Scene({ id: "q4-02-exam-005", speaker: "主人公", text: "レポートを出し切ってから慌てて準備したんじゃなくて。", character: exam.normal }),
  q402Scene({ id: "q4-02-exam-006", speaker: "主人公", text: "試験が来ることも分かった上で、予定を組んでた。", character: exam.normal }),
  q402Scene({ id: "q4-02-exam-007", speaker: "単位認定試験くん", text: "うん。", character: exam.smile }),
  q402Scene({ id: "q4-02-exam-008", speaker: "主人公", text: "準備もできてる！", character: exam.smile }),

  q402Scene({ id: "q4-02-final-001", speaker: "主人公", text: "（大学生活って。）", character: exam.smile }),
  q402Scene({ id: "q4-02-final-002", speaker: "主人公", text: "（目の前の締切だけ見てればいいわけじゃない。）", character: exam.smile }),
  q402Scene({ id: "q4-02-final-003", speaker: "主人公", text: "（その次には何があるのか。）", character: exam.smile }),
  q402Scene({ id: "q4-02-final-004", speaker: "主人公", text: "（今どれくらい作業が残っているのか。）", character: exam.smile }),
  q402Scene({ id: "q4-02-final-005", speaker: "主人公", text: "（自分の予定と合わせて、全部見ながら決めていく。）", character: exam.smile }),
  q402Scene({ id: "q4-02-final-006", speaker: "主人公", text: "……これなら。", character: exam.smile }),
  q402Scene({ id: "q4-02-final-007", speaker: "主人公", text: "一人でもちゃんと回せそう。", character: exam.smile }),
  q402Scene({
    id: "q4-02-clear",
    speaker: "SYSTEM",
    text: "Q4-02 CLEAR！",
    clear: true,
    next: "q4-03-time-passage"
  }),

  /* ==================
   Q4-03 卒業まで、あと3年
  =====================*/
  q403Scene({
    id: "q4-03-time-passage",
    speaker: "SYSTEM",
    text: "4Q後半／自室・昼",
    timePassage: {
      label: "LATE QUARTER",
      title: "4Q後半",
      detail: "自室・昼"
    },
    next: "q4-03-001"
  }),
  q403Dialogue(1, "主人公", "4Qも、だいぶ終わりが見えてきたなぁ。"),
  q403Dialogue(2, "主人公", "ということは……。"),
  q403Dialogue(3, "主人公", "大学1年目も、もうすぐ終わり。"),
  q403Dialogue(4, "主人公", "……。"),
  q403Dialogue(5, "主人公", "今の私って、卒業までどの辺にいるんだろ。"),
  q403Dialogue(6, "卒業要件先輩", "気になった？", { character: graduation.normal }),
  q403Dialogue(7, "主人公", "わっ！", { character: graduation.normal }),
  q403Dialogue(8, "主人公", "卒業要件先輩！", { character: graduation.normal }),
  q403Dialogue(9, "卒業要件先輩", "自分から確認しようと思ったんだ。", { character: graduation.normal }),
  q403Dialogue(10, "主人公", "だって、あと3年でしょ？", { character: graduation.normal }),
  q403Dialogue(11, "卒業要件先輩", "……そう。", { character: graduation.normal }),
  q403Dialogue(12, "主人公", "1Qの私だったら、絶対こんなこと言ってなかったな。", { character: graduation.normal }),
  q403Dialogue(13, "卒業要件先輩", "『今日入学したばかりなのに、もう卒業の話？』", { character: graduation.normal }),
  q403Dialogue(14, "主人公", "言った言った。", { character: graduation.normal }),
  q403Dialogue(15, "主人公", "あのときは卒業なんて、めちゃくちゃ先の話だと思ってたもん。", { character: graduation.normal }),

  q403Dialogue(16, "卒業要件先輩", "じゃあ、今の状況を見よう。", { character: graduation.normal }),
  q403Dialogue(17, "主人公", "今年取れた単位と……。", { deadlineSchedule: graduationProgressSchedule }),
  q403Dialogue(18, "主人公", "卒業までに必要なものと……。", { deadlineSchedule: graduationProgressSchedule }),
  q403Dialogue(19, "主人公", "まだ取れてないところ。", { deadlineSchedule: graduationProgressSchedule }),
  q403Dialogue(20, "主人公", "こうして見ると、1Qのときより意味が分かる。", { deadlineSchedule: graduationProgressSchedule }),
  q403Dialogue(21, "卒業要件先輩", "一年、自分で履修してきたからね。", { character: graduation.normal }),
  q403Dialogue(22, "主人公", "単位数だけ見ればいいわけじゃないんだよね。", { character: graduation.normal }),
  q403Dialogue(23, "卒業要件先輩", "そう。", { character: graduation.normal }),
  q403Dialogue(24, "卒業要件先輩", "必要な区分や条件もある。", { character: graduation.normal }),
  q403Dialogue(25, "卒業要件先輩", "だから、定期的に現在地を見る。", { character: graduation.normal }),
  q403Dialogue(26, "主人公", "卒業直前に見て。", { character: graduation.normal }),
  q403Dialogue(27, "主人公", "『あれ足りない！』ってなるのは怖い……。", { character: graduation.normal }),
  q403Dialogue(28, "卒業要件先輩", "その通り。", { character: graduation.normal }),

  q403Dialogue(29, "主人公", "でもさ。", { character: graduation.normal }),
  q403Dialogue(30, "主人公", "あと3年もあるなら、まだそんなに細かく決めなくてもいい？", { character: graduation.normal }),
  q403Dialogue(31, "卒業要件先輩", "全部決める必要はない。", { character: graduation.normal }),
  q403Dialogue(32, "主人公", "お。", { character: graduation.normal }),
  q403Dialogue(33, "卒業要件先輩", "四年間の予定を、今ここで完成させる必要はない。", { character: graduation.normal }),
  q403Dialogue(34, "卒業要件先輩", "ただ。", { character: graduation.normal }),
  q403Dialogue(35, "卒業要件先輩", "今まで何を取ったか。", { character: graduation.normal }),
  q403Dialogue(36, "卒業要件先輩", "これから何が必要か。", { character: graduation.normal }),
  q403Dialogue(37, "卒業要件先輩", "次に学びたいことにつながる科目はあるか。", { character: graduation.normal }),
  q403Dialogue(38, "卒業要件先輩", "それくらいは見ておいた方がいい。", { character: graduation.normal }),
  q403Dialogue(39, "主人公", "完璧な計画じゃなくて。", { character: graduation.normal }),
  q403Dialogue(40, "主人公", "次に進むための確認、って感じ？", { character: graduation.normal }),
  q403Dialogue(41, "卒業要件先輩", "そう。", { character: graduation.normal }),
  q403Dialogue(42, "主人公", "なるほど。", { character: graduation.normal }),

  q403Scene({
    id: "q4-03-choice",
    speaker: "SYSTEM",
    text: "2年生になる前に、どうする？",
    character: graduation.normal,
    choices: [
      {
        label: "A",
        text: "取得状況と残りの要件を確認して、来年の履修も少し考える",
        next: "q4-03-a-001",
        effects: {
          selfManagement: 2,
          informationUse: 1,
          affection: { graduation: 2 }
        }
      },
      {
        label: "B",
        text: "とりあえず、今年取れた単位数だけ確認する",
        next: "q4-03-b-001",
        effects: { selfManagement: 0 }
      },
      {
        label: "C",
        text: "まだあと3年あるし、来年考える！",
        next: "q4-03-c-001",
        effects: {
          selfManagement: -1,
          affection: { graduation: -1 }
        }
      }
    ]
  }),

  q403Scene({ id: "q4-03-a-001", speaker: "主人公", text: "今年取れたものを確認して。", character: graduation.normal }),
  q403Scene({ id: "q4-03-a-002", speaker: "主人公", text: "まだ必要なものも見て。", character: graduation.normal }),
  q403Scene({ id: "q4-03-a-003", speaker: "主人公", text: "来年取りたい科目も、ちょっとだけ先まで見ておく。", character: graduation.normal }),
  q403Scene({ id: "q4-03-a-004", speaker: "卒業要件先輩", text: "それでいい。", character: graduation.normal }),
  q403Scene({ id: "q4-03-a-005", speaker: "主人公", text: "全部決めなくても、次に進む方向は見ておく。", character: graduation.normal }),
  q403Scene({ id: "q4-03-a-006", speaker: "卒業要件先輩", text: "うん。", character: graduation.normal, next: "q4-03-common-001" }),

  q403Scene({ id: "q4-03-b-001", speaker: "主人公", text: "まずは合計単位数を……。", character: graduation.normal }),
  q403Scene({ id: "q4-03-b-002", speaker: "主人公", text: "よし、取れてる！", character: graduation.normal }),
  q403Scene({ id: "q4-03-b-003", speaker: "卒業要件先輩", text: "それだけ？", character: graduation.normal }),
  q403Scene({ id: "q4-03-b-004", speaker: "主人公", text: "……あ。", character: graduation.normal }),
  q403Scene({ id: "q4-03-b-005", speaker: "卒業要件先輩", text: "卒業に必要なのは、合計だけじゃない。", character: graduation.normal }),
  q403Scene({ id: "q4-03-b-006", speaker: "主人公", text: "どこで何を取れてるかも見るんだった。", character: graduation.normal }),
  q403Scene({ id: "q4-03-b-007", speaker: "卒業要件先輩", text: "そう。", character: graduation.normal }),
  q403Scene({ id: "q4-03-b-008", speaker: "主人公", text: "危ない危ない。", character: graduation.normal, next: "q4-03-common-001" }),

  q403Scene({ id: "q4-03-c-001", speaker: "主人公", text: "まだ1年生だし！", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-002", speaker: "卒業要件先輩", text: "去年も似たことを言ってた。", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-003", speaker: "主人公", text: "うっ。", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-004", speaker: "卒業要件先輩", text: "あと三年ある。", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-005", speaker: "卒業要件先輩", text: "だから確認しなくていい、ではない。", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-006", speaker: "主人公", text: "……だから今から見る？", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-007", speaker: "卒業要件先輩", text: "だから今から見るんだ。", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-008", speaker: "主人公", text: "出た。", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-009", speaker: "卒業要件先輩", text: "何？", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-010", speaker: "主人公", text: "先輩の決め台詞。", character: graduation.normal }),
  q403Scene({ id: "q4-03-c-011", speaker: "卒業要件先輩", text: "……違う。", character: graduation.normal, next: "q4-03-common-001" }),

  q403Scene({ id: "q4-03-common-001", speaker: "主人公", text: "……なんか不思議。", deadlineSchedule: graduationProgressSchedule }),
  q403Scene({ id: "q4-03-common-002", speaker: "卒業要件先輩", text: "何が？", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-003", speaker: "主人公", text: "入学したときは。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-004", speaker: "主人公", text: "卒業なんて、全然自分に関係ないくらい遠く感じてた。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-005", speaker: "主人公", text: "でも今は。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-006", speaker: "主人公", text: "ここまで進んできたんだなって分かる。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-007", speaker: "卒業要件先輩", text: "一年進んだからね。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-008", speaker: "主人公", text: "卒業まで、あと3年。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-009", speaker: "卒業要件先輩", text: "長い？", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-010", speaker: "主人公", text: "うーん。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-011", speaker: "主人公", text: "前よりは、そんなに遠く感じないかも。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-012", speaker: "卒業要件先輩", text: "そう。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-013", speaker: "主人公", text: "それに。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-014", speaker: "主人公", text: "あと3年で何を勉強するか、ちょっと楽しみ。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-015", speaker: "卒業要件先輩", text: "……それならいい。", character: graduation.smile }),
  q403Scene({ id: "q4-03-common-016", speaker: "主人公", text: "お。", character: graduation.smile }),
  q403Scene({ id: "q4-03-common-017", speaker: "主人公", text: "今ちょっと嬉しそうだった。", character: graduation.smile }),
  q403Scene({ id: "q4-03-common-018", speaker: "卒業要件先輩", text: "別に。", character: graduation.smile }),
  q403Scene({ id: "q4-03-common-019", speaker: "主人公", text: "絶対そうじゃん。", character: graduation.smile }),
  q403Scene({ id: "q4-03-common-020", speaker: "卒業要件先輩", text: "次年度も、現在地の確認を忘れないで。", character: graduation.normal }),
  q403Scene({ id: "q4-03-common-021", speaker: "主人公", text: "誤魔化した！", character: graduation.normal }),

  q403Scene({ id: "q4-03-final-001", speaker: "主人公", text: "（卒業まで、あと3年。）", character: graduation.normal }),
  q403Scene({ id: "q4-03-final-002", speaker: "主人公", text: "（まだ先はある。）", character: graduation.normal }),
  q403Scene({ id: "q4-03-final-003", speaker: "主人公", text: "（だからこそ。）", character: graduation.normal }),
  q403Scene({ id: "q4-03-final-004", speaker: "主人公", text: "（今まで何を取ったかを確認して。）", character: graduation.normal }),
  q403Scene({ id: "q4-03-final-005", speaker: "主人公", text: "（これから必要なものを知って。）", character: graduation.normal }),
  q403Scene({ id: "q4-03-final-006", speaker: "主人公", text: "（少し先を見ながら、また次を選ぶ。）", character: graduation.normal }),
  q403Scene({ id: "q4-03-final-007", speaker: "主人公", text: "（そうやって進んでいけばいいんだ。）", character: graduation.normal }),
  q403Scene({ id: "q4-03-final-008", speaker: "主人公", text: "よし。", character: graduation.smile }),
  q403Scene({ id: "q4-03-final-009", speaker: "主人公", text: "2年生も、自分でちゃんと進んでいこう。", character: graduation.smile }),
  q403Scene({
    id: "q4-03-clear",
    speaker: "SYSTEM",
    text: "Q4-03 CLEAR！",
    clear: true,
    next: "q4-04-time-passage"
  }),

  /* ==================
   Q4-04 一年間、何してきた？
  =====================*/
  q404Scene({
    id: "q4-04-time-passage",
    speaker: "SYSTEM",
    text: "4Q末／自室・夕方",
    timePassage: {
      label: "END OF THE YEAR",
      title: "4Q末",
      detail: "自室・夕方"
    },
    next: "q4-04-001"
  }),
  q404Dialogue(1, "主人公", "もうすぐ1年生も終わりかぁ。"),
  q404Dialogue(2, "主人公", "……。"),
  q404Dialogue(3, "主人公", "一年って早すぎない？"),
  q404Dialogue(4, "ガクチカくん", "じゃあさ。", { character: gakuchika.normal }),
  q404Dialogue(5, "主人公", "わっ！", { character: gakuchika.normal }),
  q404Dialogue(6, "主人公", "ガクチカくん！", { character: gakuchika.normal }),
  q404Dialogue(7, "ガクチカくん", "一年間、何してきた？", { character: gakuchika.normal }),
  q404Dialogue(8, "主人公", "え。", { character: gakuchika.normal }),
  q404Dialogue(9, "主人公", "何って……。", { character: gakuchika.normal }),

  q404Dialogue(10, "主人公", "授業受けて。", { character: gakuchika.normal }),
  q404Dialogue(11, "主人公", "確認レポート出して。", { character: gakuchika.normal }),
  q404Dialogue(12, "主人公", "試験受けて。", { character: gakuchika.normal }),
  q404Dialogue(13, "主人公", "バイトして……。", { character: gakuchika.normal }),
  q404Dialogue(14, "主人公", "…………。", { character: gakuchika.normal }),
  q404Dialogue(15, "主人公", "意外と普通？", { character: gakuchika.normal }),
  q404Dialogue(16, "ガクチカくん", "ほんとに？", { character: gakuchika.smile }),
  q404Dialogue(17, "主人公", "え？", { character: gakuchika.smile }),

  q404Dialogue(18, "ガクチカくん", "入学したばっかりの頃は、履修登録でびっくりしてた。", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(19, "主人公", "あったなぁ……。", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(20, "ガクチカくん", "学園祭にも行った。", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(21, "主人公", "画面の中で見てた人が立体だった。", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(22, "ガクチカくん", "言い方。", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(23, "主人公", "バイトも始めた。", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(24, "主人公", "締切とシフトがぶつかって死にかけた。", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(25, "ガクチカくん", "でも、そのあと予定の立て方変えたでしょ？", { deadlineSchedule: firstYearReviewSchedule }),
  q404Dialogue(26, "主人公", "……確かに。", {
    deadlineSchedule: firstYearReviewSchedule,
    nextByDecision: {
      key: "q203Program",
      routes: {
        participated: "q4-04-participated-001",
        "not-participated": "q4-04-not-participated-001"
      },
      default: "q4-04-participated-001"
    }
  }),

  q404Scene({ id: "q4-04-participated-001", speaker: "ガクチカくん", text: "地域の活動にも参加した。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-participated-002", speaker: "主人公", text: "ネットで調べるだけじゃ分からないこと、いっぱいあったなぁ。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-participated-003", speaker: "主人公", text: "人によって見方も全然違ったし。", character: gakuchika.smile, next: "q4-04-before-choice-001" }),

  q404Scene({ id: "q4-04-not-participated-001", speaker: "ガクチカくん", text: "気になる活動について調べたりもした。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-not-participated-002", speaker: "主人公", text: "結局参加しなかったものもあるけど。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-not-participated-003", speaker: "ガクチカくん", text: "それも、自分で知って選んだ結果じゃん。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-not-participated-004", speaker: "主人公", text: "そっか。", character: gakuchika.smile, next: "q4-04-before-choice-001" }),

  q404Scene({ id: "q4-04-before-choice-001", speaker: "ガクチカくん", text: "留学とか国際交流のことも知ったし。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-002", speaker: "主人公", text: "最初から“自分には関係ない”って閉じるの、やめた。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-003", speaker: "ガクチカくん", text: "うん。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-004", speaker: "主人公", text: "こうやって並べると……。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-005", speaker: "主人公", text: "結構いろいろやってる？", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-006", speaker: "ガクチカくん", text: "でしょ？", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-before-choice-007", speaker: "主人公", text: "でもさ。", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-before-choice-008", speaker: "主人公", text: "“大会で優勝しました！”とか。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-before-choice-009", speaker: "主人公", text: "“すごいプロジェクトを成功させました！”とか。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-before-choice-010", speaker: "主人公", text: "そういう分かりやすい成果はないよ？", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-before-choice-011", speaker: "ガクチカくん", text: "別に、それだけが経験じゃないよ。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-012", speaker: "主人公", text: "……。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-013", speaker: "ガクチカくん", text: "大事なのは。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-014", speaker: "ガクチカくん", text: "何をやったかだけじゃなくて。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-015", speaker: "ガクチカくん", text: "そのとき何を感じて。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-016", speaker: "ガクチカくん", text: "そこから自分がどう変わったか。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-before-choice-017", speaker: "主人公", text: "どう変わったか……。", character: gakuchika.smile }),

  q404Scene({
    id: "q4-04-choice",
    speaker: "SYSTEM",
    text: "この一年を振り返るなら？",
    character: gakuchika.smile,
    choices: [
      {
        label: "A",
        text: "出来事だけじゃなく、感じたことや変わったことも書いてみる",
        next: "q4-04-a-001",
        effects: {
          universityLife: 2,
          selfManagement: 1,
          affection: { gakuchika: 2 }
        }
      },
      {
        label: "B",
        text: "とりあえず、やったことを全部リストにする！",
        next: "q4-04-b-001",
        effects: {
          universityLife: 1,
          affection: { gakuchika: 1 }
        }
      },
      {
        label: "C",
        text: "やっぱり“大したことしてない”気がする……",
        next: "q4-04-c-001",
        effects: {
          universityLife: -1,
          affection: { gakuchika: -1 }
        }
      }
    ]
  }),

  q404Scene({ id: "q4-04-a-001", speaker: "主人公", text: "じゃあ……。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-a-002", speaker: "主人公", text: "学園祭に行った。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-a-003", speaker: "主人公", text: "だけじゃなくて。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-a-004", speaker: "主人公", text: "オンライン大学でも、人と出会ったり。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-a-005", speaker: "主人公", text: "自分から外に出てみたりできるって分かった。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-a-006", speaker: "ガクチカくん", text: "うんうん！", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-a-007", speaker: "主人公", text: "バイトを始めた。", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-a-008", speaker: "主人公", text: "だけじゃなくて。", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-a-009", speaker: "主人公", text: "授業も私生活も、自分で時間を決めないと回らないって気づいた。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-a-010", speaker: "ガクチカくん", text: "それ。", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-a-011", speaker: "主人公", text: "なんか……。", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-a-012", speaker: "主人公", text: "ただの出来事が、“私の一年”になってきた。", character: gakuchika.smile, next: "q4-04-common-001" }),

  q404Scene({ id: "q4-04-b-001", speaker: "主人公", text: "学園祭！", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-b-002", speaker: "主人公", text: "バイト！", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-b-003", speaker: "主人公", text: "授業！", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-b-004", speaker: "主人公", text: "試験！", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-b-005", speaker: "主人公", text: "あと――", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-b-006", speaker: "ガクチカくん", text: "いっぱいあるね。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-b-007", speaker: "主人公", text: "でしょ！", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-b-008", speaker: "ガクチカくん", text: "じゃあ次。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-b-009", speaker: "主人公", text: "次？", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-b-010", speaker: "ガクチカくん", text: "その中で、何が一番印象に残ってる？", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-b-011", speaker: "主人公", text: "あ。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-b-012", speaker: "ガクチカくん", text: "リストにしたら、今度は中身も思い出してみよ。", character: gakuchika.smile, next: "q4-04-common-001" }),

  q404Scene({ id: "q4-04-c-001", speaker: "主人公", text: "並べても、普通の大学生活って感じだし……。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-c-002", speaker: "ガクチカくん", text: "普通だったら、残す価値ない？", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-c-003", speaker: "主人公", text: "え。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-c-004", speaker: "ガクチカくん", text: "締切で失敗しかけたことも。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-c-005", speaker: "ガクチカくん", text: "知らない場所に行ってみたことも。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-c-006", speaker: "ガクチカくん", text: "最初はできなかったことが、できるようになったことも。", character: gakuchika.normal }),
  q404Scene({ id: "q4-04-c-007", speaker: "ガクチカくん", text: "全部、君の経験じゃん。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-c-008", speaker: "主人公", text: "……そっか。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-c-009", speaker: "ガクチカくん", text: "“すごいかどうか”で決めなくていいよ。", character: gakuchika.smile, next: "q4-04-common-001" }),

  q404Scene({ id: "q4-04-common-001", speaker: "主人公", text: "そういえば。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-002", speaker: "主人公", text: "マイステップにも残せるんだった。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-003", speaker: "ガクチカくん", text: "そうそう。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-004", speaker: "主人公", text: "何をやったか。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-005", speaker: "主人公", text: "そのとき何を感じたか。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-006", speaker: "主人公", text: "それで、自分がどう変わったか……。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-007", speaker: "主人公", text: "一年分、ちょっと振り返ってみようかな。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-008", speaker: "主人公", text: "入学した頃は。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-009", speaker: "主人公", text: "オンライン大学って、自由だし楽そうって思ってた。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-010", speaker: "主人公", text: "でも実際は。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-011", speaker: "主人公", text: "自由だから、自分で決めることがいっぱいあった。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-012", speaker: "主人公", text: "失敗もしたし。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-013", speaker: "主人公", text: "予定通りいかないこともあったし。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-014", speaker: "主人公", text: "でも……。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-015", speaker: "主人公", text: "前より、自分で動けるようになった。", myStep: firstYearMyStepForm }),
  q404Scene({ id: "q4-04-common-016", speaker: "ガクチカくん", text: "それ、いいじゃん。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-017", speaker: "主人公", text: "え？", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-018", speaker: "ガクチカくん", text: "ちゃんと一年間で変わってる。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-019", speaker: "主人公", text: "……。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-020", speaker: "主人公", text: "確かに。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-021", speaker: "主人公", text: "入学式の日の私に見せたいかも。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-022", speaker: "ガクチカくん", text: "なんて言う？", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-023", speaker: "主人公", text: "“大学生活、思ったより忙しいぞ”って。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-024", speaker: "ガクチカくん", text: "そこ！？", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-common-025", speaker: "主人公", text: "でも。", character: gakuchika.grin }),
  q404Scene({ id: "q4-04-common-026", speaker: "主人公", text: "思ってたより、面白い。", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-027", speaker: "ガクチカくん", text: "それなら、いい一年だったんじゃない？", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-common-028", speaker: "主人公", text: "……うん！", character: gakuchika.smile }),

  q404Scene({ id: "q4-04-final-001", speaker: "主人公", text: "（大きな成果だけが、経験じゃない。）", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-final-002", speaker: "主人公", text: "（迷ったことも。）", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-final-003", speaker: "主人公", text: "（失敗したことも。）", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-final-004", speaker: "主人公", text: "（そこから変わったことも。）", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-final-005", speaker: "主人公", text: "（振り返って言葉にしてみると。）", character: gakuchika.smile }),
  q404Scene({ id: "q4-04-final-006", speaker: "主人公", text: "（ちゃんと、私の大学生活になっていた。）", character: gakuchika.smile }),
  q404Scene({
    id: "q4-04-clear",
    speaker: "SYSTEM",
    text: "Q4-04 CLEAR！",
    clear: true,
    next: "q4-05-time-passage"
  }),

  /* ==================
   Q4-05 私の大学1年目
   本編最終話。自由の意味を一年間の経験から捉え直す。
  =====================*/
  q405Scene({
    id: "q4-05-time-passage",
    speaker: "SYSTEM",
    text: "年度末／自室・夜",
    timePassage: {
      label: "END OF THE YEAR",
      title: "年度末",
      detail: "自室・夜"
    },
    next: "q4-05-001"
  }),
  q405Dialogue(1, "主人公", "……終わった。"),
  q405Dialogue(2, "主人公", "4Qの授業も。"),
  q405Dialogue(3, "主人公", "確認レポートも。"),
  q405Dialogue(4, "主人公", "単位認定試験も。"),
  q405Dialogue(5, "主人公", "全部、終わったーーー！"),
  q405Dialogue(6, "主人公", "ってことは……。"),
  q405Dialogue(7, "主人公", "私の大学1年目も。"),
  q405Dialogue(8, "主人公", "これで終わりかぁ。", { next: "q4-05-pause-001" }),

  q405Scene({
    id: "q4-05-pause-001",
    speaker: "SYSTEM",
    text: "少し間",
    timePassage: {
      label: "A MOMENT LATER",
      title: "少し間",
      detail: "年度末の夜"
    },
    next: "q4-05-009"
  }),
  q405Dialogue(9, "主人公", "入学式の日。"),
  q405Dialogue(10, "主人公", "何考えてたっけ。"),
  q405Dialogue(11, "主人公", "……あ。"),
  q405Dialogue(12, "主人公", "オンライン大学って。"),
  q405Dialogue(13, "主人公", "時間も場所も自由だし。"),
  q405Dialogue(14, "主人公", "なんか、楽そう。"),
  q405Dialogue(15, "主人公", "……って思ってたんだった。"),
  q405Dialogue(16, "？？？", "実際どうだった？"),

  q405Dialogue(17, "主人公", "履修登録くん。", { character: rishu.normal }),
  q405Dialogue(18, "履修登録くん", "自由だった？", { character: rishu.normal }),
  q405Dialogue(19, "主人公", "うん。", { character: rishu.normal }),
  q405Dialogue(20, "主人公", "めちゃくちゃ自由だった。", { character: rishu.normal }),
  q405Dialogue(21, "主人公", "時間割も自分で決められるし。", { character: rishu.normal }),
  q405Dialogue(22, "主人公", "いつ授業を見るかも、自分で決められる。", { character: rishu.normal }),
  q405Dialogue(23, "主人公", "でも……。", { character: rishu.normal }),
  q405Dialogue(24, "主人公", "決めてくれる人がいないってことでもあった。", { character: rishu.normal }),
  q405Dialogue(25, "履修登録くん", "そうだね。", { character: rishu.smile }),
  q405Dialogue(26, "主人公", "最初はそれが分かってなかったなぁ。", { character: rishu.smile }),
  q405Dialogue(27, "履修登録くん", "何回『ちょっと待って』って言ったか。", { character: rishu.smile }),
  q405Dialogue(28, "主人公", "もう数えなくていいです！", { character: rishu.smile }),

  q405Dialogue(29, "Slackくん", "情報も勝手に全部集まってくるわけじゃなかったし？", { character: slack.smile }),
  q405Dialogue(30, "主人公", "そう！", { character: slack.smile }),
  q405Dialogue(31, "主人公", "お知らせ見たり。", { character: slack.smile }),
  q405Dialogue(32, "主人公", "Slack確認したり。", { character: slack.smile }),
  q405Dialogue(33, "主人公", "分からないことは自分から探したり。", { character: slack.smile }),
  q405Dialogue(34, "主人公", "“知らなかった”で終わらせない。", { character: slack.smile }),
  q405Dialogue(35, "Slackくん", "だいぶ情報強者になったじゃん。", { character: slack.smile }),
  q405Dialogue(36, "主人公", "でしょ？", { character: slack.smile }),
  q405Dialogue(37, "Slackくん", "……自称だけど。", { character: slack.wink }),
  q405Dialogue(38, "主人公", "一言多い！", { character: slack.wink }),

  q405Dialogue(39, "確認レポートくん", "締切は？", { character: report.serious }),
  q405Dialogue(40, "主人公", "余裕を持つ！", { character: report.serious }),
  q405Dialogue(41, "確認レポートくん", "内容は？", { character: report.serious }),
  q405Dialogue(42, "主人公", "ちゃんと書く！", { character: report.serious }),
  q405Dialogue(43, "確認レポートくん", "未来の自分に全部任せる？", { character: report.serious }),
  q405Dialogue(44, "主人公", "任せません！！", { character: report.serious }),
  q405Dialogue(45, "確認レポートくん", "……よし。", { character: report.normal }),
  q405Dialogue(46, "主人公", "最終回まで確認されるとは思わなかった。", { character: report.normal }),

  q405Dialogue(47, "単位認定試験くん", "予定通りいかないこともあったね。", { character: exam.normal }),
  q405Dialogue(48, "主人公", "38.7℃……。", { character: exam.normal }),
  q405Dialogue(49, "主人公", "忘れたい。", { character: exam.normal }),
  q405Dialogue(50, "単位認定試験くん", "でも、動けた。", { character: exam.normal }),
  q405Dialogue(51, "主人公", "うん。", { character: exam.normal }),
  q405Dialogue(52, "主人公", "困ったらまず確認して。", { character: exam.normal }),
  q405Dialogue(53, "主人公", "必要な手続きを探して。", { character: exam.normal }),
  q405Dialogue(54, "主人公", "どうすればいいか、自分で考える。", { character: exam.normal }),
  q405Dialogue(55, "単位認定試験くん", "もう大丈夫そうだね。", { character: exam.smile }),
  q405Dialogue(56, "主人公", "……。", { character: exam.smile }),
  q405Dialogue(57, "主人公", "それ、結構嬉しいかも。", { character: exam.smile }),

  q405Dialogue(58, "卒業要件先輩", "まだ一年目だけどね。", { character: graduation.normal }),
  q405Dialogue(59, "主人公", "分かってます！", { character: graduation.normal }),
  q405Dialogue(60, "主人公", "卒業まで、あと3年。", { character: graduation.normal }),
  q405Dialogue(61, "卒業要件先輩", "そう。", { character: graduation.normal }),
  q405Dialogue(62, "主人公", "でも。", { character: graduation.normal }),
  q405Dialogue(63, "主人公", "もう“まだ先だから知らなくていい”とは思わない。", { character: graduation.normal }),
  q405Dialogue(64, "主人公", "今どこにいるかを確認して。", { character: graduation.normal }),
  q405Dialogue(65, "主人公", "少し先を見ながら、また選んでいく。", { character: graduation.normal }),
  q405Dialogue(66, "卒業要件先輩", "……それでいい。", { character: graduation.smile }),

  q405Dialogue(67, "ガクチカくん", "授業以外も忘れないでね。", { character: gakuchika.normal }),
  q405Dialogue(68, "主人公", "もちろん。", { character: gakuchika.normal }),
  q405Dialogue(69, "主人公", "学園祭も。", { character: gakuchika.normal }),
  q405Dialogue(70, "主人公", "バイトも。", { character: gakuchika.normal }),
  q405Dialogue(71, "主人公", "大学の外で知ったことも。", { character: gakuchika.normal }),
  q405Dialogue(72, "主人公", "興味を持ったけど、やらなかったことだって。", { character: gakuchika.normal }),
  q405Dialogue(73, "主人公", "全部、私の大学1年目。", { character: gakuchika.smile }),
  q405Dialogue(74, "ガクチカくん", "うん。", { character: gakuchika.smile }),
  q405Dialogue(75, "主人公", "大きなことじゃなくても。", { character: gakuchika.smile }),
  q405Dialogue(76, "主人公", "振り返れば、ちゃんと残ってるんだね。", { character: gakuchika.smile }),

  q405Dialogue(77, "主人公", "……なんかさ。", { character: gakuchika.smile }),
  q405Dialogue(78, "主人公", "最初は。"),
  q405Dialogue(79, "主人公", "“自由”って。"),
  q405Dialogue(80, "主人公", "好きな時間に好きなことができる。"),
  q405Dialogue(81, "主人公", "楽って意味だと思ってた。"),
  q405Dialogue(82, "主人公", "でも今は――。", { next: "q4-05-pause-002" }),

  q405Scene({
    id: "q4-05-pause-002",
    speaker: "SYSTEM",
    text: "少し間",
    timePassage: {
      label: "A MOMENT LATER",
      title: "少し間",
      detail: "一年を振り返って"
    },
    next: "q4-05-083"
  }),
  q405Dialogue(83, "主人公", "自由だから。"),
  q405Dialogue(84, "主人公", "自分で選べる。"),
  q405Dialogue(85, "主人公", "何を勉強するか。"),
  q405Dialogue(86, "主人公", "いつやるか。"),
  q405Dialogue(87, "主人公", "どこから情報を集めるか。"),
  q405Dialogue(88, "主人公", "大学で何を経験するか。"),
  q405Dialogue(89, "主人公", "全部、自分で選べる。"),
  q405Dialogue(90, "主人公", "その分。"),
  q405Dialogue(91, "主人公", "自分で確認して。"),
  q405Dialogue(92, "主人公", "自分で決めて。"),
  q405Dialogue(93, "主人公", "自分で動かなきゃいけない。"),

  q405Dialogue(94, "履修登録くん", "大変？", { character: rishu.normal }),
  q405Dialogue(95, "主人公", "……うん。", { character: rishu.normal }),
  q405Dialogue(96, "主人公", "思ってたより、全然大変。", { character: rishu.normal }),
  q405Dialogue(97, "Slackくん", "じゃあ嫌？", { character: slack.normal }),
  q405Dialogue(98, "主人公", "ううん。", { character: slack.normal }),
  q405Dialogue(99, "主人公", "むしろ。", { character: slack.smile }),
  q405Dialogue(100, "主人公", "思ってたより、面白かった。", { character: slack.smile }),

  q405Dialogue(101, "主人公", "だって。", { emphasis: true }),
  q405Dialogue(102, "主人公", "誰かに決められた大学生活じゃなくて。", { emphasis: true }),
  q405Dialogue(103, "主人公", "私が選んだ一年だったから。", { emphasis: true, next: "q4-05-quiet" }),

  q405Scene({
    id: "q4-05-quiet",
    speaker: "SYSTEM",
    text: "少し静かになる",
    timePassage: {
      label: "A QUIET MOMENT",
      title: "少し静かになる",
      detail: "年度末の夜"
    },
    next: "q4-05-104"
  }),
  q405Dialogue(104, "主人公", "失敗もしたし。"),
  q405Dialogue(105, "主人公", "ギリギリにもなったし。"),
  q405Dialogue(106, "主人公", "知らないことも、まだいっぱいある。"),
  q405Dialogue(107, "主人公", "だから。"),
  q405Dialogue(108, "主人公", "大学生活を全部“攻略した”とは、まだ言えないけど。"),
  q405Dialogue(109, "主人公", "……。"),
  q405Dialogue(110, "主人公", "自分の大学生活を、自分で攻略する方法なら。"),
  q405Dialogue(111, "主人公", "ちょっと分かってきたかも。", { next: "q4-05-spring" }),

  q405Scene({
    id: "q4-05-spring",
    speaker: "SYSTEM",
    text: "桜／春",
    background: FIELD_ACTIVITY_BACKGROUND,
    timePassage: {
      label: "NEXT SPRING",
      title: "もうすぐ、2年生",
      detail: "桜の季節"
    },
    next: "q4-05-112"
  }),
  q405Dialogue(112, "主人公", "（もうすぐ、2年生。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(113, "主人公", "（きっとまた。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(114, "主人公", "（知らないことも。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(115, "主人公", "（迷うことも。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(116, "主人公", "（予定通りにいかないこともある。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(117, "主人公", "（それでも。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(118, "主人公", "（確認して。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(119, "主人公", "（考えて。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(120, "主人公", "（自分で選ぶ。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(121, "主人公", "（そして、動く。）", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(122, "主人公", "よし。", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(123, "主人公", "大学2年目も――。", { background: FIELD_ACTIVITY_BACKGROUND }),
  q405Dialogue(124, "主人公", "攻略していきますか！", { background: FIELD_ACTIVITY_BACKGROUND, emphasis: true }),
  q405Scene({
    id: "q4-05-clear",
    speaker: "SYSTEM",
    text: "Q4-05 CLEAR！",
    background: FIELD_ACTIVITY_BACKGROUND,
    clear: true,
    next: "q4-05-theme"
  }),
  q405Scene({
    id: "q4-05-theme",
    speaker: "SYSTEM",
    text: "大学生活は、自由。\n\n自由だからこそ、自分で選べる。\nそして、自分で動く。\n\nあなたは、どんな大学生活を選びますか？",
    background: FIELD_ACTIVITY_BACKGROUND,
    emphasis: true,
    resultPreview: {
      target: "q4-result-end"
    }
  }),
  q1Scene({
    id: "q4-result-end",
    speaker: "SYSTEM",
    text: "大学生活、攻略できる？",
    background: FIELD_ACTIVITY_BACKGROUND,
    clear: true,
    emphasis: true,
    complete: true,
    end: true
  }, "Q4 RESULT")
];
