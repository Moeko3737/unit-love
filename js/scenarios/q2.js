import {
  audio,
  backgrounds,
  characters,
  guide,
  myStepForms,
  notifications,
  passage,
  scene,
  schedules
} from "./shared.js";

const { rishu, report, gakuchika } = characters;

const q201 = (data) => scene("Q2-01", data);
const q202 = (data) => scene("Q2-02", data);
const q203 = (data) => scene("Q2-03", data);
const q203Field = (data) => scene("Q2-03", data, backgrounds.field);
const q204 = (data) => scene("Q2-04", data);
const q2Result = (data) => scene("Q2 RESULT", data);

const numbered = (chapter, prefix, number, speaker, text, data = {}) =>
  scene(chapter, {
    id: `${prefix}-${String(number).padStart(3, "0")}`,
    speaker,
    text,
    ...data
  });

const q201Line = (number, speaker, text, data) =>
  numbered("Q2-01", "q2-01", number, speaker, text, data);
const q202Line = (number, speaker, text, data) =>
  numbered("Q2-02", "q2-02", number, speaker, text, data);
const q203Line = (number, speaker, text, data) =>
  numbered("Q2-03", "q2-03", number, speaker, text, data);

export const q2Scenario = [
  /* ==================
   Q2-01 2Q、スタート！
   Qの切り替わりに履修と生活の予定を一緒に見直す。
  =====================*/
  passage(
    "Q2-01",
    "q2-start",
    "2Q START",
    "2Q初日・自室／朝",
    "q2-01-007",
    {
      label: "NEXT QUARTER",
      text: "2Q初日／自室・朝"
    }
  ),

  q201Line(7, "主人公", "今日から2Q！ 1Qも乗り越えたし、大学生活にも慣れてきたかも。", {
    deadlineSchedule: schedules.partTimeShift
  }),
  q201Line(8, "主人公", "通学はないし、授業も自分のペース。思ったより時間、あるじゃん！", {
    deadlineSchedule: schedules.partTimeShift
  }),
  q201Line(9, "主人公", "というわけで、アルバイト始めます！", {
    deadlineSchedule: schedules.partTimeShift
  }),
  q201Line(10, "主人公", "火曜と木曜の夕方、それから土曜も入れちゃお。", {
    deadlineSchedule: schedules.partTimeShift
  }),
  q201Line(11, "？？？", "ちょっと待って。", {
    deadlineSchedule: schedules.partTimeShift
  }),
  q201Line(12, "主人公", "あ。この声は……。", {
    deadlineSchedule: schedules.partTimeShift
  }),
  q201Line(13, "主人公", "履修登録くん！", { character: rishu.normal }),
  q201Line(14, "履修登録くん", "2Q、始まったね。", { character: rishu.normal }),
  q201Line(17, "履修登録くん", "ところで、2Qの履修は確認した？", {
    character: rishu.normal
  }),
  q201Line(19, "主人公", "履修登録なら、1Qの最初にやったよ？", {
    character: rishu.normal
  }),
  q201Line(21, "履修登録くん", "1Qのときに、2Qの科目も登録してる。", {
    character: rishu.normal
  }),
  q201Line(23, "履修登録くん", "でも、“登録したから終わり”にはしない。", {
    character: rishu.troubled
  }),
  q201Line(25, "履修登録くん", "Qが変わったら、実際に受ける科目と予定を一度見直す。", {
    character: rishu.troubled
  }),
  q201Line(28, "履修登録くん", "授業の進み方、確認レポート、試験の時期。まとめてね。", {
    character: rishu.troubled
  }),
  q201Line(30, "主人公", "私、バイトのシフトしか見てなかった……。", {
    character: rishu.troubled
  }),
  q201Line(33, "履修登録くん", "顔に“大学の予定は別枠”って書いてあった。", {
    character: rishu.troubled
  }),
  q201Line(35, "主人公", "もし両立が厳しそうなら、もうそのまま受けるしかない？", {
    character: rishu.troubled
  }),
  q201Line(36, "履修登録くん", "2Qの最初なら、履修を修正できる期間がある。", {
    character: rishu.troubled,
    emphasis: true
  }),
  q201Line(37, "履修登録くん", "必要なら、期限と手続きを公式案内で確認して修正できるよ。", {
    character: rishu.troubled
  }),
  q201Line(39, "主人公", "始まった今だからこそ、現実の予定と照らして見直すんだ。", {
    character: rishu.normal
  }),
  q201Line(40, "履修登録くん", "そのうえで、大学とバイトの予定を組む。", {
    character: rishu.normal,
    emphasis: true
  }),
  q201Line(45, "主人公", "じゃあ、授業も締切もシフトも同じカレンダーに入れてみる。", {
    character: rishu.smile
  }),
  q201Line(46, "主人公", "そういえば、3Qになったらどうするの？", {
    character: rishu.smile
  }),
  q201Line(49, "履修登録くん", "3Qで、3Qと4Qの履修を決める。", {
    character: rishu.smile,
    emphasis: true
  }),
  q201Line(51, "主人公", "半年ごとに、そのときの生活も含めて考え直せるんだね。", {
    character: rishu.smile
  }),
  q201Line(53, "履修登録くん", "生活も、興味も、予定も変わるからね。", {
    character: rishu.smile
  }),
  q201Line(54, "主人公", "バイトを始める今なんて、まさにそうか。", {
    character: rishu.smile
  }),
  q201Line(56, "主人公", "よし。大学もバイトも、両方ちゃんとやる！", {
    character: rishu.smile
  }),
  q201Line(57, "主人公", "オンライン大学だし、きっと余裕でしょ！", {
    character: rishu.smile
  }),
  q201Line(58, "履修登録くん", "…………。", { character: rishu.troubled }),
  q201Line(61, "履修登録くん", "そのセリフ、覚えておこうかなって。", {
    character: rishu.troubled
  }),
  q201Line(62, "主人公", "不穏！！", { character: rishu.troubled }),
  q201Line(68, "主人公", "（自由な時間は、“何もない時間”じゃなくて、自分で使い道を決める時間なんだ。）"),
  q201Line(69, "主人公", "……まあ、なんとかなるでしょ！"),
  q201Line(70, "履修登録くん", "また言った。", { character: rishu.normal }),
  q201Line(71, "主人公", "予定を見てから言ってるから、今度は大丈夫！", {
    character: rishu.normal
  }),
  guide(
    "Q2-01",
    "q2-01-guide",
    "大学と私生活を一つの予定表に",
    [
      "Qが変わったら、履修科目と学修予定を見直す",
      "大学と私生活の予定を同じカレンダーで確認する",
      "履修修正期間の期限と手続きは公式案内で確認する"
    ],
    "今週の授業・締切・シフトを、一つの予定表に入れよう。",
    "q2-01-clear"
  ),
  q201({
    id: "q2-01-clear",
    speaker: "SYSTEM",
    text: "Q2-01 CLEAR！",
    clear: true,
    next: "q2-02-time-passage"
  }),

  /* ==================
   Q2-02 第一回締切、間に合う！？
   複数科目と私生活の予定を並べ、締切から逆算する。
  =====================*/
  passage(
    "Q2-02",
    "q2-02-time-passage",
    "2Q前半",
    "自室・夕方",
    "q2-02-001",
    {
      label: "A FEW WEEKS LATER",
      text: "2Q前半／自室・夕方"
    }
  ),
  q202Line(1, "主人公", "2Qにも慣れてきたし、バイトとの両立も順調！"),
  q202Line(2, "主人公", "……たぶん。"),
  q202Line(3, "主人公", "ん？ ZEN Portalから通知？"),
  q202Line(4, "主人公", "もう確認レポートの第1回締切か。", {
    notification: notifications.reportDeadline,
    se: audio.notification
  }),
  q202Line(5, "主人公", "でも、ちょこちょこ進めてたから大丈夫。", {
    notification: notifications.reportDeadline
  }),
  q202Line(6, "主人公", "念のため、全科目の残りを見てみよう。", {
    notification: notifications.reportDeadline
  }),
  q202Line(7, "主人公", "科目Aが2回、Bが3回、Cが1回……。", {
    deadlineSchedule: schedules.remainingReports
  }),
  q202Line(8, "主人公", "合計、6回！？", {
    deadlineSchedule: schedules.remainingReports
  }),
  q202Line(12, "主人公", "思ったより残ってる……。", {
    deadlineSchedule: schedules.remainingReports
  }),
  q202Line(13, "？？？", "ようやく全体を見たね。", {
    deadlineSchedule: schedules.remainingReports
  }),
  q202Line(15, "主人公", "確認レポートくん！", { character: report.normal }),
  q202Line(16, "確認レポートくん", "進めてはいた。でも、残りと期限を一緒に見てなかった。", {
    character: report.normal
  }),
  q202Line(19, "確認レポートくん", "残りはいくつ？", { character: report.normal }),
  q202Line(20, "主人公", "6回。", { character: report.normal }),
  q202Line(21, "確認レポートくん", "締切まで？", { character: report.normal }),
  q202Line(23, "主人公", "3日。しかも今日と明日はバイト。", {
    character: report.normal
  }),
  q202Line(24, "確認レポートくん", "それで、“空いた時間にやる”つもりだった？", {
    character: report.serious
  }),
  q202Line(25, "主人公", "その顔、答えを知ってる顔だ……。", {
    character: report.serious
  }),
  q202Line(28, "主人公", "……空いた時間にやるつもりでした。", {
    character: report.serious
  }),
  q202Line(30, "確認レポートくん", "じゃあ、その“空いた時間”はいつ？", {
    character: report.serious
  }),
  q202Line(32, "主人公", "…………ない。", { character: report.serious }),
  q202Line(33, "主人公", "静かにうなずかないで！！", {
    character: report.serious
  }),
  q202Line(34, "確認レポートくん", "まず、締切・残り作業・使える時間を全部並べる。", {
    deadlineSchedule: schedules.reportPlan
  }),
  q202Line(36, "主人公", "こうして見ると、丸一日空いているのは明後日だけ。", {
    deadlineSchedule: schedules.reportPlan
  }),
  q202Line(37, "確認レポートくん", "予定は頭の中だけで管理しない。", {
    character: report.serious
  }),
  q202Line(40, "確認レポートくん", "大学以外の予定も合わせて、いつ何をするか決める。", {
    character: report.serious,
    emphasis: true
  }),
  q202({
    id: "q2-02-choice",
    speaker: "SYSTEM",
    text: "残り6回分。どう進める？",
    character: report.serious,
    choices: [
      {
        label: "A",
        text: "予定を確認し、今日から少しずつ割り振る",
        effects: {
          selfManagement: 3,
          informationUse: 1,
          affection: { report: 2 }
        },
        next: "q2-02-choice-a-001"
      },
      {
        label: "B",
        text: "バイトのない日を作業日にして、まとめて進める",
        effects: {
          selfManagement: 1,
          affection: { report: 0 }
        },
        next: "q2-02-choice-b-001"
      },
      {
        label: "C",
        text: "外せないバイトを優先し、今夜に作業量を見積もり直す",
        effects: {
          selfManagement: 0,
          affection: { report: 0 }
        },
        next: "q2-02-choice-c-001"
      }
    ]
  }),

  q202({
    id: "q2-02-choice-a-001",
    speaker: "主人公",
    text: "今日はバイト前に1回、明日は午前中に2回進める。",
    character: report.normal
  }),
  q202({
    id: "q2-02-choice-a-004",
    speaker: "主人公",
    text: "明後日の3回分も午前と午後に分けて、疲れたときの予備時間を残そう。",
    character: report.normal
  }),
  q202({
    id: "q2-02-choice-a-007",
    speaker: "確認レポートくん",
    text: "締切当日は、提出済みか確認するだけにできるね。",
    character: report.normal
  }),
  q202({
    id: "q2-02-choice-a-009",
    speaker: "主人公",
    text: "よし、この予定で始める！",
    character: report.normal,
    next: "q2-02-choice-a-before-deadline"
  }),
  passage(
    "Q2-02",
    "q2-02-choice-a-before-deadline",
    "締切前日",
    "自室",
    "q2-02-choice-a-010",
    {
      label: "THE DAY BEFORE",
      text: "締切前日"
    }
  ),
  q202({
    id: "q2-02-choice-a-010",
    speaker: "主人公",
    text: "全部、提出完了！",
    character: report.normal
  }),
  q202({
    id: "q2-02-choice-a-012",
    speaker: "確認レポートくん",
    text: "お疲れ。予定を分けたから、見直す余裕も作れたね。",
    character: report.normal,
    next: "q2-02-choice-a-deadline-night"
  }),
  passage(
    "Q2-02",
    "q2-02-choice-a-deadline-night",
    "締切日の夜",
    "翌日・自室",
    "q2-02-choice-a-013",
    {
      label: "DEADLINE DAY",
      text: "翌日・締切日の夜"
    }
  ),
  q202({
    id: "q2-02-choice-a-013",
    speaker: "主人公",
    text: "今日が締切日。念のため提出状況を確認して……。"
  }),
  q202({
    id: "q2-02-choice-a-014",
    speaker: "主人公",
    text: "ZEN Study、少し読み込みが遅い？",
    deadlineSchedule: schedules.congestion
  }),
  q202({
    id: "q2-02-choice-a-015",
    speaker: "確認レポートくん",
    text: "締切前後はアクセスが集中することもある。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-a-017",
    speaker: "主人公",
    text: "提出作業を残してなくてよかった……。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-a-018",
    speaker: "確認レポートくん",
    text: "余裕は、こういう想定外のためにあるんだ。",
    character: report.normal,
    next: "q2-02-common-next-day"
  }),

  q202({
    id: "q2-02-choice-b-001",
    speaker: "確認レポートくん",
    text: "一日を集中日にする作戦だね。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-b-002",
    speaker: "主人公",
    text: "うん。バイトのない日を、最初から作業用に空けておく。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-b-003",
    speaker: "確認レポートくん",
    text: "なら、開始時刻と休憩、それに提出用の予備時間まで決めておこう。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-b-004",
    speaker: "主人公",
    text: "朝から始めて、夕方までに終える。夜は予備にする！",
    character: report.serious,
    next: "q2-02-choice-b-deadline-night"
  }),
  passage(
    "Q2-02",
    "q2-02-choice-b-deadline-night",
    "締切当日",
    "自室・夜",
    "q2-02-choice-b-005",
    {
      label: "DEADLINE DAY",
      text: "締切当日／自室・夜"
    }
  ),
  q202({
    id: "q2-02-choice-b-005",
    speaker: "主人公",
    text: "思ったより時間がかかったけど、あと1回！"
  }),
  q202({
    id: "q2-02-choice-b-007",
    speaker: "主人公",
    text: "まだ間に合う。提出ボタンを押して……。"
  }),
  q202({
    id: "q2-02-choice-b-008",
    speaker: "主人公",
    text: "……読み込み中？",
    deadlineSchedule: schedules.congestion
  }),
  q202({
    id: "q2-02-choice-b-011",
    speaker: "主人公",
    text: "今、重くならないでよ〜〜！",
    deadlineSchedule: schedules.congestion
  }),
  q202({
    id: "q2-02-choice-b-012",
    speaker: "確認レポートくん",
    text: "締切前後はアクセスが集中することもある。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-b-015",
    speaker: "主人公",
    text: "知ってたのに、まとめて残した私には何も言えない……。",
    character: report.serious,
    next: "q2-02-choice-b-a-little-later"
  }),
  passage(
    "Q2-02",
    "q2-02-choice-b-a-little-later",
    "少し後",
    "締切日の夜",
    "q2-02-choice-b-016",
    {
      label: "A LITTLE LATER",
      text: "少し後"
    }
  ),
  q202({
    id: "q2-02-choice-b-016",
    speaker: "主人公",
    text: "……動いた！"
  }),
  q202({
    id: "q2-02-choice-b-017",
    speaker: "主人公",
    text: "提出できたぁぁぁ……。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-b-018",
    speaker: "確認レポートくん",
    text: "今回は間に合った。まとめる方法でも、提出はもっと早い時間を目標にしよう。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-b-019",
    speaker: "主人公",
    text: "うん。“一日空けた”だけで安心せず、終える時刻まで決める……。",
    character: report.serious,
    next: "q2-02-common-next-day"
  }),

  q202({
    id: "q2-02-choice-c-001",
    speaker: "主人公",
    text: "今日のバイトは外せない。まずは予定どおり行ってくる。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-005",
    speaker: "確認レポートくん",
    text: "分かった。じゃあ出る前に、“3日”のうち実際に使える時間だけ確認しよう。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-007",
    speaker: "主人公",
    text: "今夜の帰宅後と、明後日。そこへ6回分を入れてみる。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-008",
    speaker: "確認レポートくん",
    text: "バイト後の疲れと、一回にかかる時間も見積もってね。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-009",
    speaker: "主人公",
    text: "帰ったら実際に一回やって、見積もりを更新する。行ってきます！",
    character: report.serious,
    next: "q2-02-choice-c-deadline-night"
  }),
  passage(
    "Q2-02",
    "q2-02-choice-c-deadline-night",
    "締切当日",
    "自室・夜",
    "q2-02-choice-c-010",
    {
      label: "DEADLINE DAY",
      text: "締切当日／自室・夜"
    }
  ),
  q202({
    id: "q2-02-choice-c-010",
    speaker: "主人公",
    text: "あと3回！ 一回ごとの時間、最初の見積もりより長かった……！"
  }),
  q202({
    id: "q2-02-choice-c-011",
    speaker: "主人公",
    text: "バイト後は集中力も落ちる。使える時間を多く数えすぎたんだ。"
  }),
  q202({
    id: "q2-02-choice-c-012",
    speaker: "確認レポートくん",
    text: "日数だけじゃなく、使える時間と作業速度の両方を見る必要があったね。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-014",
    speaker: "主人公",
    text: "待って。提出画面まで読み込みが……。",
    deadlineSchedule: schedules.congestion
  }),
  q202({
    id: "q2-02-choice-c-015",
    speaker: "主人公",
    text: "お願い、間に合って……！",
    deadlineSchedule: schedules.congestion,
    next: "q2-02-choice-c-deadline-time"
  }),
  passage(
    "Q2-02",
    "q2-02-choice-c-deadline-time",
    "締切時刻",
    "提出受付終了",
    "q2-02-choice-c-017",
    {
      label: "TIME LIMIT",
      text: "締切時刻"
    }
  ),
  q202({
    id: "q2-02-choice-c-017",
    speaker: "主人公",
    text: "……1回分、間に合わなかった。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-018",
    speaker: "確認レポートくん",
    text: "最終締切までは提出できる。まず、次の期限を確認しよう。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-022",
    speaker: "確認レポートくん",
    text: "第1回締切に間に合わなかった分は、3分の1減点。",
    character: report.serious,
    emphasis: true
  }),
  q202({
    id: "q2-02-choice-c-023",
    speaker: "主人公",
    text: "悔しい。でも、今は自分を責めるより、残りと次の期限を確認する。",
    character: report.serious
  }),
  q202({
    id: "q2-02-choice-c-024",
    speaker: "確認レポートくん",
    text: "うん。今回の実績時間を使えば、次はもっと現実的に組み直せる。",
    character: report.normal
  }),
  q202({
    id: "q2-02-choice-c-025",
    speaker: "主人公",
    text: "失敗した分、今ここから立て直す。",
    character: report.normal,
    next: "q2-02-common-next-day"
  }),

  passage(
    "Q2-02",
    "q2-02-common-next-day",
    "翌日",
    "自室",
    "q2-02-final-001",
    {
      label: "THE NEXT DAY",
      text: "自室／翌日"
    }
  ),
  q202({
    id: "q2-02-final-001",
    speaker: "主人公",
    text: "確認レポートは一つずつなら怖くない。でも、科目と予定が重なると一気に大変になる。"
  }),
  q202({
    id: "q2-02-final-005",
    speaker: "確認レポートくん",
    text: "だから、締切の日付だけじゃなく、残り作業と使える時間も見る。",
    character: report.normal
  }),
  q202({
    id: "q2-02-final-010",
    speaker: "主人公",
    text: "大学以外の予定まで、一緒に考えるんだね。",
    character: report.normal
  }),
  q202({
    id: "q2-02-final-011",
    speaker: "主人公",
    text: "“時間が空いたらやる”じゃなくて、“いつやるか”を先に決める。",
    character: report.normal
  }),
  q202({
    id: "q2-02-final-016",
    speaker: "確認レポートくん",
    text: "締切は、提出を始める時間じゃない。",
    character: report.serious,
    emphasis: true
  }),
  q202({
    id: "q2-02-final-020",
    speaker: "確認レポートくん",
    text: "通信もシステムも、自分の体調や予定も、思った通りとは限らないから。",
    character: report.serious
  }),
  q202({
    id: "q2-02-final-021",
    speaker: "主人公",
    text: "締切の前に終えて、想定外に使える余裕を残す。",
    character: report.normal
  }),
  q202({
    id: "q2-02-final-024",
    speaker: "主人公",
    text: "（自由に学べるからこそ、自分の時間は自分で組み立てよう。）",
    character: report.normal
  }),
  guide(
    "Q2-02",
    "q2-02-guide",
    "締切は残量と時間から逆算する",
    [
      "締切・残り作業・使える時間を並べて逆算する",
      "締切当日には提出作業を残さない",
      "遅れたときは条件を確認し、次の期限へ向けて立て直す"
    ],
    "次の締切について、着手日と完了目標日をカレンダーに入れよう。",
    "q2-02-clear"
  ),
  q202({
    id: "q2-02-clear",
    speaker: "SYSTEM",
    text: "Q2-02 CLEAR！",
    clear: true,
    next: "q2-03-time-passage"
  }),

  /* ==================
   Q2-03 大学の外へ飛び出そう？
   条件を確認し、参加する・しないを自分で選ぶ。
  =====================*/
  passage(
    "Q2-03",
    "q2-03-time-passage",
    "2Q",
    "自室・昼",
    "q2-03-001",
    {
      label: "LATER IN 2Q",
      text: "2Q／自室・昼"
    }
  ),
  q203Line(1, "主人公", "授業、バイト、確認レポート。最近ずっと同じ景色を見てる気がする。"),
  q203Line(3, "主人公", "ん？ 地域・企業連携プログラム？", {
    notification: notifications.regionalProgram,
    se: audio.notification
  }),
  q203Line(4, "主人公", "現地で地域や企業の人と活動するんだ。", {
    notification: notifications.regionalProgram
  }),
  q203Line(6, "主人公", "面白そう。でも、知らない場所と人はちょっと緊張する……。", {
    notification: notifications.regionalProgram
  }),
  q203Line(9, "？？？", "気になる顔してる。", {
    notification: notifications.regionalProgram
  }),
  q203Line(11, "主人公", "ガクチカくん！", { character: gakuchika.normal }),
  q203Line(12, "ガクチカくん", "オンライン中心だからこそ、現地の経験が新鮮なんじゃない？", {
    character: gakuchika.smile
  }),
  q203Line(14, "主人公", "画面越しで知ってる学生に初めて会うのも、ちょっと不思議。", {
    character: gakuchika.smile
  }),
  q203Line(17, "ガクチカくん", "地域や企業の人から、画面だけでは分からない話も聞ける。", {
    character: gakuchika.smile
  }),
  q203Line(20, "主人公", "行くかどうか、勢いだけで決めていいのかな。", {
    character: gakuchika.normal
  }),
  q203Line(22, "ガクチカくん", "日時・費用・場所・内容・必要な支援を確認して、今の自分に合うか考えよう。", {
    character: gakuchika.normal,
    emphasis: true
  }),
  q203({
    id: "q2-03-choice",
    speaker: "SYSTEM",
    text: "案内を確認した。今回はどうする？",
    character: gakuchika.smile,
    choices: [
      {
        label: "A",
        text: "条件は大丈夫。少し怖いけど参加してみる",
        effects: {
          universityLife: 2,
          affection: { gakuchika: 2 },
          decisions: { q203Program: "participated" }
        },
        next: "q2-03-choice-a-001"
      },
      {
        label: "B",
        text: "詳しい内容や支援を確認し、相談してから参加する",
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
        text: "条件を確認した上で、今回は見送る",
        effects: {
          informationUse: 1,
          decisions: { q203Program: "not-participated" }
        },
        next: "q2-03-choice-c-review-001"
      }
    ]
  }),
  q203({
    id: "q2-03-choice-a-001",
    speaker: "主人公",
    text: "日程も移動も大丈夫。申し込んでみる！",
    character: gakuchika.grin
  }),
  q203({
    id: "q2-03-choice-a-002",
    speaker: "ガクチカくん",
    text: "いいじゃん。緊張しても、準備して行けば大丈夫。",
    character: gakuchika.grin
  }),
  q203({
    id: "q2-03-choice-a-003",
    speaker: "主人公",
    text: "必要なものを確認して、行ってきます！",
    character: gakuchika.grin,
    next: "q2-03-field-passage"
  }),
  q203({
    id: "q2-03-choice-b-001",
    speaker: "主人公",
    text: "分からない点を案内窓口に聞いたら、参加後の流れまで分かった。",
    character: gakuchika.smile
  }),
  q203({
    id: "q2-03-choice-b-002",
    speaker: "ガクチカくん",
    text: "知ってから選べば、不安も準備することに変えられる。",
    character: gakuchika.smile
  }),
  q203({
    id: "q2-03-choice-b-003",
    speaker: "主人公",
    text: "これなら参加できそう。申し込もう！",
    character: gakuchika.smile,
    next: "q2-03-field-passage"
  }),
  q203({
    id: "q2-03-choice-c-review-001",
    speaker: "主人公",
    text: "日時と場所、移動時間をもう一度確認しよう。",
    character: gakuchika.normal
  }),
  q203({
    id: "q2-03-choice-c-review-002",
    speaker: "主人公",
    text: "今月は授業とバイトが重なっていて、準備時間まで取るのは難しそう。",
    character: gakuchika.normal
  }),
  q203({
    id: "q2-03-choice-c-review-003",
    speaker: "主人公",
    text: "支援や次回募集も確認できた。だから今回は見送ろう。",
    character: gakuchika.normal
  }),
  q203({
    id: "q2-03-choice-c-review-004",
    speaker: "ガクチカくん",
    text: "“なんとなく閉じる”のと、条件を見て決めるのは違うよ。",
    character: gakuchika.smile
  }),
  q203({
    id: "q2-03-choice-c-review-005",
    speaker: "主人公",
    text: "興味がなくなったわけじゃない。次の機会に備えて保存しておく。",
    character: gakuchika.smile
  }),
  q203({
    id: "q2-03-choice-c-001",
    speaker: "ガクチカくん",
    text: "参加しないことも、自分で考えて選んだ答えだね。",
    character: gakuchika.normal
  }),
  q203({
    id: "q2-03-choice-c-002",
    speaker: "主人公",
    text: "うん。今できることを優先する。",
    character: gakuchika.normal
  }),
  q203({
    id: "q2-03-choice-c-003",
    speaker: "ガクチカくん",
    text: "案内は残しておこう。生活が変われば、選べる機会も変わるから。",
    character: gakuchika.smile
  }),
  q203({
    id: "q2-03-choice-c-004",
    speaker: "主人公",
    text: "次に気になる案内が来たときも、ちゃんと中身を見て決める。",
    character: gakuchika.smile,
    next: "q2-03-final-001"
  }),
  passage(
    "Q2-03",
    "q2-03-field-passage",
    "現地へ",
    "地域・企業連携プログラム",
    "q2-03-field-001",
    {
      label: "FIELD PROGRAM",
      text: "現地／活動場所",
      background: backgrounds.field
    }
  ),
  q203Field({
    id: "q2-03-field-001",
    speaker: "主人公",
    text: "（うわ……本当に人がいる。あの人、Slackで見たことあるかも。）",
    caption: "現地／活動場所"
  }),
  q203Field({
    id: "q2-03-field-003",
    speaker: "学生",
    text: "もしかして、Slackで話したことあるよね？",
    caption: "現地／活動場所"
  }),
  q203Field({
    id: "q2-03-field-006",
    speaker: "主人公",
    text: "会うのは初めて！ 画面の中にいた人が立体になった感じ。",
    caption: "現地／活動場所"
  }),
  q203Field({
    id: "q2-03-field-008",
    speaker: "ガクチカくん",
    text: "その言い方はともかく、オンライン中心だからこその面白さだね。",
    character: gakuchika.grin,
    caption: "現地／活動場所"
  }),
  q203Field({
    id: "q2-03-field-009",
    speaker: "主人公",
    text: "地域の人の話も、直接聞くと見え方が全然違う。",
    character: gakuchika.grin,
    caption: "現地／活動場所"
  }),
  q203Field({
    id: "q2-03-field-010",
    speaker: "ガクチカくん",
    text: "その気づき、帰ったら忘れないうちに残しておこう。",
    character: gakuchika.smile,
    caption: "現地／活動場所",
    next: "q2-03-after-field"
  }),
  passage(
    "Q2-03",
    "q2-03-after-field",
    "活動を終えて",
    "自室・昼",
    "q2-03-final-001",
    {
      label: "AFTER THE PROGRAM",
      text: "活動を終えて／自室"
    }
  ),
  q203({
    id: "q2-03-final-001",
    speaker: "主人公",
    text: "（大学には授業以外にも、地域や人と関わる選択肢がある。）"
  }),
  q203({
    id: "q2-03-final-004",
    speaker: "ガクチカくん",
    text: "全部に参加する必要はないし、見送ることが失敗でもない。",
    character: gakuchika.normal
  }),
  q203({
    id: "q2-03-final-006",
    speaker: "ガクチカくん",
    text: "大事なのは、情報を見ないまま可能性を閉じず、自分に合う答えを選ぶこと。",
    character: gakuchika.smile,
    emphasis: true
  }),
  q203({
    id: "q2-03-final-007",
    speaker: "主人公",
    text: "気になるものは、まず条件を確認する。そこから決めればいいんだね。",
    character: gakuchika.smile
  }),
  guide(
    "Q2-03",
    "q2-03-guide",
    "参加する前に選択肢を知る",
    [
      "気になる案内は、まず内容を開いて選択肢を知る",
      "日時・費用・場所・必要な支援を確認する",
      "参加も見送りも、今の自分に合わせて決めてよい"
    ],
    "気になる募集を一つ保存し、参加条件と相談先を確認しよう。",
    "q2-03-clear"
  ),
  q203({
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
   参加・不参加のどちらも経験として尊重し、マイステップへ残す。
  =====================*/
  passage(
    "Q2-04",
    "q2-04-participated-passage",
    "数日後",
    "自室・昼",
    "q2-04-participated-001",
    {
      label: "A FEW DAYS LATER",
      text: "数日後／自室・昼"
    }
  ),
  q204({
    id: "q2-04-participated-001",
    speaker: "主人公",
    text: "この前のプログラム、楽しかったな。現地で話を聞いて、みんなで考えて。"
  }),
  q204({
    id: "q2-04-participated-002",
    speaker: "主人公",
    text: "行ってみてよかった！"
  }),
  q204({
    id: "q2-04-participated-003",
    speaker: "ガクチカくん",
    text: "で、その経験は残した？",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-participated-004",
    speaker: "主人公",
    text: "写真ならいっぱいあるよ。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-participated-006",
    speaker: "ガクチカくん",
    text: "写真に写らない気づきは？",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-participated-008",
    speaker: "主人公",
    text: "気づき……。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-participated-011",
    speaker: "ガクチカくん",
    text: "半年後も、“楽しかった”の中身まで覚えていられる？",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-participated-012",
    speaker: "主人公",
    text: "たぶん、“楽しかった！”しか残ってない……。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-participated-016",
    speaker: "ガクチカくん",
    text: "行く前と後で変わったことや、現地だから分かったことを書いてみよう。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-participated-020",
    speaker: "主人公",
    text: "地域の人から直接聞いたら、同じ話でも見え方が変わった。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-participated-023",
    speaker: "主人公",
    text: "他の学生の意見から、自分になかった視点も知れた。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-participated-025",
    speaker: "主人公",
    text: "自分の見方が増えたことも、残せる変化なんだ。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-participated-028",
    speaker: "ガクチカくん",
    text: "それが、“楽しかった”の中身。",
    character: gakuchika.smile,
    next: "q2-04-common-001"
  }),

  passage(
    "Q2-04",
    "q2-04-not-participated-passage",
    "数日後",
    "自室・昼",
    "q2-04-not-participated-001",
    {
      label: "A FEW DAYS LATER",
      text: "数日後／自室・昼"
    }
  ),
  q204({
    id: "q2-04-not-participated-001",
    speaker: "主人公",
    text: "地域連携プログラム、今回は参加しなかったな。"
  }),
  q204({
    id: "q2-04-not-participated-004",
    speaker: "主人公",
    text: "じゃあ私、残すような経験はないかも。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-not-participated-005",
    speaker: "ガクチカくん",
    text: "どうして？ バイトを始めた。大学祭にも行った。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-not-participated-008",
    speaker: "主人公",
    text: "Slackで情報を探して、初めての試験も受けた。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-not-participated-010",
    speaker: "主人公",
    text: "……意外といろいろやってる。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-not-participated-012",
    speaker: "ガクチカくん",
    text: "参加しないと決めるために、予定と条件も比べた。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-not-participated-013",
    speaker: "主人公",
    text: "それも経験に入るの？",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-not-participated-015",
    speaker: "ガクチカくん",
    text: "もちろん。“すごいこと”だけが経験じゃない。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-not-participated-016",
    speaker: "ガクチカくん",
    text: "何を考えて、どう選んで、そのあと何をしたかも残せる。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-not-participated-018",
    speaker: "主人公",
    text: "じゃあ、バイトと大学の予定調整に苦戦したこととか。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-not-participated-023",
    speaker: "主人公",
    text: "締切に焦って、次は先に予定を組もうと決めたことも？",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-not-participated-025",
    speaker: "ガクチカくん",
    text: "それは、ちゃんと変化が見える経験だね。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-not-participated-027",
    speaker: "主人公",
    text: "特別じゃなくても、振り返ると学びがあるんだ。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-not-participated-028",
    speaker: "ガクチカくん",
    text: "そういう経験こそ、忘れないうちに残そう。",
    character: gakuchika.smile,
    next: "q2-04-common-001"
  }),

  q204({
    id: "q2-04-common-001",
    speaker: "主人公",
    text: "こういう経験って、どこに残せるの？",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-common-002",
    speaker: "ガクチカくん",
    text: "ZEN Portalの《マイステップ》。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-common-003",
    speaker: "ガクチカくん",
    text: "大学生活で経験したことを、あとで見返せる形で記録できる。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-common-004",
    speaker: "主人公",
    text: "忘れないうちに書いてみよう。",
    character: gakuchika.normal
  }),
  q204({
    id: "q2-04-common-005",
    speaker: "ガクチカくん",
    text: "何をしたか、どう考え工夫したか、何が変わって次に何をするか。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-common-006",
    speaker: "主人公",
    text: "出来事の名前だけじゃなく、自分の変化まで書くんだね。",
    myStep: myStepForms.experience
  }),
  q204({
    id: "q2-04-common-010",
    speaker: "ガクチカくん",
    text: "それなら、あとで見返したときに経験の意味が分かる。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-common-012",
    speaker: "主人公",
    text: "今の気持ちと、次にやることまで残してみる。",
    character: gakuchika.smile
  }),
  q204({
    id: "q2-04-common-014",
    speaker: "ガクチカくん",
    text: "経験は、振り返ることで次の一歩につながるから。",
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
  q204({
    id: "q2-04-record-participated-001",
    speaker: "主人公",
    text: "現地で直接話を聞き、見え方が変わったこと。"
  }),
  q204({
    id: "q2-04-record-participated-002",
    speaker: "主人公",
    text: "他の人の考えから新しい視点を知り、次は別の活動も調べたいと思ったこと。"
  }),
  q204({
    id: "q2-04-record-participated-003",
    speaker: "主人公",
    text: "よし。この内容で記録しよう。",
    myStep: myStepForms.experience,
    next: "q2-04-final-001"
  }),
  q204({
    id: "q2-04-record-not-participated-001",
    speaker: "主人公",
    text: "バイトと大学の予定を比べ、今できることを優先したこと。"
  }),
  q204({
    id: "q2-04-record-not-participated-002",
    speaker: "主人公",
    text: "締切の失敗から、先に予定を組む大切さに気づいたこと。"
  }),
  q204({
    id: "q2-04-record-not-participated-003",
    speaker: "主人公",
    text: "参加しなかった判断も、その後の行動と一緒なら記録になるんだ。",
    myStep: myStepForms.experience
  }),
  q204({
    id: "q2-04-record-not-participated-004",
    speaker: "ガクチカくん",
    text: "うん。次に選ぶときの材料にもなるよ。",
    character: gakuchika.smile,
    next: "q2-04-final-001"
  }),
  q204({
    id: "q2-04-final-001",
    speaker: "主人公",
    text: "保存！"
  }),
  q204({
    id: "q2-04-final-003",
    speaker: "主人公",
    text: "ただ過ぎていった出来事が、ちゃんと自分の経験になった感じがする。"
  }),
  q204({
    id: "q2-04-final-004",
    speaker: "ガクチカくん",
    text: "でしょ？",
    character: gakuchika.grin
  }),
  q204({
    id: "q2-04-final-005",
    speaker: "主人公",
    text: "次からも、何かあったら短くても残してみる。",
    character: gakuchika.grin
  }),
  q204({
    id: "q2-04-final-007",
    speaker: "ガクチカくん",
    text: "大きな挑戦じゃなくていい。君が考えて動いたことなら、全部材料になる。",
    character: gakuchika.grin
  }),
  q204({
    id: "q2-04-final-009",
    speaker: "主人公",
    text: "（残しておけば、自分が歩いてきた道と、次の一歩が見えるのかも。）",
    character: gakuchika.grin
  }),
  guide(
    "Q2-04",
    "q2-04-guide",
    "選んだ経験を次へつなげる",
    [
      "参加したことだけでなく、考えて選んだことも経験になる",
      "出来事・工夫や気づき・変化を自分の言葉で残す",
      "最後に、次に試したい行動を一つ決める"
    ],
    "今週の出来事を一つ、マイステップへ短く記録しよう。",
    "q2-04-clear"
  ),
  q204({
    id: "q2-04-clear",
    speaker: "SYSTEM",
    text: "Q2-04 CLEAR！",
    clear: true,
    next: "q2-result-001"
  }),

  /* ==================
   Q2 RESULT
   自由時間を自分で組み立てる、という一つの気づきにまとめる。
  =====================*/
  q2Result({
    id: "q2-result-001",
    speaker: "主人公",
    text: "2Q、終了〜！"
  }),
  q2Result({
    id: "q2-result-004",
    speaker: "主人公",
    text: "授業の時間が決まっていないからって、自由時間が全部“空き時間”になるわけじゃない。"
  }),
  q2Result({
    id: "q2-result-005",
    speaker: "主人公",
    text: "自分で“いつやるか”を決めないと、ほんとに全部あとに回る……。",
    resultPreview: {
      target: "q2-result-006"
    }
  }),
  q2Result({
    id: "q2-result-006",
    speaker: "主人公",
    text: "でも、締切も予定も前よりちゃんと見るようになった。"
  }),
  q2Result({
    id: "q2-result-008",
    speaker: "主人公",
    text: "授業もバイトも、参加することも見送ることも、自分で確かめて組み立てていく。"
  }),
  q2Result({
    id: "q2-result-010",
    speaker: "主人公",
    text: "よし。3Qもいってみよ！"
  }),
  q2Result({
    id: "q2-result-clear",
    speaker: "SYSTEM",
    text: "2Q CLEAR！",
    clear: true,
    quarterAdvance: {
      nextQuarter: 3,
      target: "q3-start"
    }
  })
];
