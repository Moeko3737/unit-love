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

const room = (chapter, data) => scene(chapter, data);
const night = (chapter, data) => scene(chapter, data, backgrounds.night);

const q401 = (data) => room("Q4-01", data);
const q402 = (data) => room("Q4-02", data);
const q403 = (data) => room("Q4-03", data);
const q404 = (data) => room("Q4-04", data);
const q405 = (data) => night("Q4-05", data);

export const q4Scenario = [
  /* Q4-01：説明される側から、自分で確かめる側へ。 */
  passage("Q4-01", "q4-start", "4Q START", "4Q初日・自室／朝", "q4-01-001", {
    label: "FINAL QUARTER"
  }),
  q401({ id: "q4-01-001", speaker: "主人公", text: "今日から、1年生最後のQ。\nまずは4Qの履修科目と授業開始日を確認！" }),
  q401({ id: "q4-01-003", speaker: "主人公", text: "確認レポートの締切と、試験日程が出る時期もカレンダーへ。" }),
  q401({ id: "q4-01-005", speaker: "主人公", text: "バイトの予定を重ねて……ZENPortalとSlackの未読も確認。" }),
  q401({ id: "q4-01-011", speaker: "主人公", text: "よし。今のところ見落としなし！" }),
  q401({ id: "q4-01-013", speaker: "？？？", text: "…………。" }),
  q401({ id: "q4-01-015", speaker: "履修登録くん", text: "今日は『ちょっと待って』って言うことがないな。", character: characters.rishu.smile }),
  q401({ id: "q4-01-020", speaker: "主人公", text: "あ……私、自分で確認できてた？", character: characters.rishu.smile }),
  q401({ id: "q4-01-024", speaker: "Slackくん", text: "Slackもちゃんと見てる。情報通になってきたじゃん。", character: characters.slack.wink }),
  q401({ id: "q4-01-028", speaker: "主人公", text: "でしょ？　もう自称だけじゃないから！", character: characters.slack.wink }),
  q401({ id: "q4-01-030", speaker: "確認レポートくん", text: "締切は余裕を持つ。内容も見直す。", character: characters.report.serious }),
  q401({ id: "q4-01-033", speaker: "主人公", text: "未来の私に全部任せません！", character: characters.report.normal }),
  q401({ id: "q4-01-038", speaker: "単位認定試験くん", text: "日程と最新の受験方法は？", character: characters.exam.normal }),
  q401({ id: "q4-01-039", speaker: "主人公", text: "公開されたら確認。予定が合わなければ変更申請！", character: characters.exam.smile }),
  q401({ id: "q4-01-046", speaker: "卒業要件先輩", text: "卒業までの現在地も？", character: characters.graduation.normal }),
  q401({ id: "q4-01-049", speaker: "主人公", text: "たまに確認する。あと3年をどう進むか考えるために。", character: characters.graduation.smile }),
  q401({ id: "q4-01-054", speaker: "ガクチカくん", text: "授業以外の経験も、忘れず残してね。", character: characters.gakuchika.smile }),
  q401({ id: "q4-01-060", speaker: "主人公", text: "入学した頃は、何をするにも止められてたのに。" }),
  q401({ id: "q4-01-064", speaker: "主人公", text: "今は、何を確認して、どこで調べればいいか分かってきた。" }),
  q401({ id: "q4-01-068", speaker: "主人公", text: "最後のQ。今度は私が、自分でやってみる。", emphasis: true, next: "q4-01-guide" }),
  guide("Q4-01", "q4-01-guide", "4Qのスタート確認", [
    "履修・締切・試験を一つの予定表で見る",
    "ZENPortalとSlackの未読を確認する"
  ], "まず4Q全体の予定を一度だけ俯瞰しよう。", "q4-01-clear"),
  q401({ id: "q4-01-clear", speaker: "SYSTEM", text: "Q4-01 CLEAR！", clear: true, next: "q4-02-time-passage" }),

  /* Q4-02：一年で覚えたことを組み合わせる総合問題。 */
  passage("Q4-02", "q4-02-time-passage", "4Q終盤", "自室", "q4-02-001", {
    label: "LATE QUARTER"
  }),
  q402({ id: "q4-02-001", speaker: "主人公", text: "よし、今日も授業を――ん？", notification: notifications.finalReportDeadline, se: audio.notification }),
  q402({ id: "q4-02-004", speaker: "主人公", text: "最終締切まで、あと3日！？", notification: notifications.finalReportDeadline }),
  q402({ id: "q4-02-005", speaker: "主人公", text: "残ってる確認レポートは……結構ある。" }),
  q402({ id: "q4-02-010", speaker: "主人公", text: "いや、待って。このあとにも予定があったはず。" }),
  q402({ id: "q4-02-013", speaker: "主人公", text: "明日はバイト。締切の数日後には単位認定試験……大渋滞だ。", deadlineSchedule: schedules.q4Congestion }),
  q402({ id: "q4-02-018", speaker: "Slackくん", text: "お、目の前の締切だけで突っ走らなかったね。", character: characters.slack.smile }),
  q402({ id: "q4-02-022", speaker: "主人公", text: "まず必要な情報を全部集める。", character: characters.slack.smile }),
  q402({ id: "q4-02-024", speaker: "確認レポートくん", text: "残っている量と、使える時間は？", character: characters.report.serious }),
  q402({ id: "q4-02-025", speaker: "主人公", text: "確認済み。締切当日に作業も残さない。", character: characters.report.normal }),
  q402({ id: "q4-02-031", speaker: "単位認定試験くん", text: "僕の準備時間も必要。", character: characters.exam.normal }),
  q402({ id: "q4-02-035", speaker: "主人公", text: "レポートだけ終わっても、そこで予定は終わらない……。", character: characters.exam.normal }),
  q402({
    id: "q4-02-choice",
    speaker: "SYSTEM",
    text: "どう予定を立てる？",
    choices: [
      {
        label: "A",
        text: "レポート・締切・試験・バイトを全部並べ、今日から割り振る",
        next: "q4-02-a-001",
        effects: {
          selfManagement: 3,
          informationUse: 2,
          affection: { report: 1, exam: 1, slack: 1 }
        }
      },
      {
        label: "B",
        text: "最終締切を優先しつつ、試験準備の時間も先に確保する",
        next: "q4-02-b-001",
        effects: {
          selfManagement: 2,
          affection: { report: 1, exam: 1 }
        }
      },
      {
        label: "C",
        text: "まず今日できる量を確認し、難しければバイト先にも早めに相談する",
        next: "q4-02-c-001",
        effects: {
          selfManagement: 2,
          informationUse: 1,
          affection: { slack: 1 }
        }
      }
    ]
  }),
  q402({ id: "q4-02-a-001", speaker: "主人公", text: "今日できる分は今日。明日はバイト前に一つ。締切直前には残さない。" }),
  q402({ id: "q4-02-a-004", speaker: "主人公", text: "これなら、試験の最終確認をする時間も残る！" }),
  q402({ id: "q4-02-a-005", speaker: "確認レポートくん", text: "正解。ちゃんと先まで見えてる。", character: characters.report.normal, next: "q4-02-common-001" }),
  q402({ id: "q4-02-b-001", speaker: "確認レポートくん", text: "最終締切を優先するのは大事。", character: characters.report.serious }),
  q402({ id: "q4-02-b-003", speaker: "単位認定試験くん", text: "同時に、提出後の僕の時間も予約して。", character: characters.exam.normal }),
  q402({ id: "q4-02-b-005", speaker: "主人公", text: "一つ終えることと、次の準備は両立できるんだ。", next: "q4-02-common-001" }),
  q402({ id: "q4-02-c-001", speaker: "主人公", text: "予定を守るには、抱え込まず早めに相談するのも必要だよね。" }),
  q402({ id: "q4-02-c-003", speaker: "Slackくん", text: "そう。自分で動くって、一人で全部抱えることじゃない。", character: characters.slack.smile }),
  q402({ id: "q4-02-c-005", speaker: "主人公", text: "残りと期限を伝えて、今できる調整を考えよう。", next: "q4-02-common-001" }),
  q402({ id: "q4-02-common-001", speaker: "主人公", text: "全部並べると、優先順位が見えてきた。", deadlineSchedule: schedules.q4Plan }),
  q402({ id: "q4-02-common-004", speaker: "Slackくん", text: "情報を集める。", character: characters.slack.smile }),
  q402({ id: "q4-02-common-005", speaker: "確認レポートくん", text: "残っている量を見る。", character: characters.report.normal }),
  q402({ id: "q4-02-common-006", speaker: "単位認定試験くん", text: "その先まで見て、余白を残す。", character: characters.exam.smile }),
  q402({ id: "q4-02-common-008", speaker: "主人公", text: "よし。これで進めよう！", emphasis: true, next: "q4-02-before-deadline" }),
  passage("Q4-02", "q4-02-before-deadline", "数日後", "最終締切前", "q4-02-deadline-001"),
  q402({ id: "q4-02-deadline-001", speaker: "主人公", text: "確認レポート、全部提出完了！" }),
  q402({ id: "q4-02-deadline-003", speaker: "確認レポートくん", text: "最終締切より前。よくできました。", character: characters.report.normal }),
  q402({ id: "q4-02-deadline-006", speaker: "主人公", text: "素直に褒められると照れる……。", character: characters.report.normal, next: "q4-02-exam-day" }),
  passage("Q4-02", "q4-02-exam-day", "さらに数日後", "単位認定試験の日", "q4-02-exam-001"),
  q402({ id: "q4-02-exam-001", speaker: "主人公", text: "レポートのあとに慌てて始めたんじゃない。試験の準備もできてる。" }),
  q402({ id: "q4-02-exam-007", speaker: "単位認定試験くん", text: "目の前だけじゃなく、その先も見られたね。", character: characters.exam.smile }),
  q402({ id: "q4-02-final-001", speaker: "主人公", text: "一人で回すために必要なのは、全部を一人で抱えることじゃない。" }),
  q402({ id: "q4-02-final-003", speaker: "主人公", text: "情報と予定を並べて、必要なら相談して、自分で決めること。", emphasis: true, next: "q4-02-guide" }),
  guide("Q4-02", "q4-02-guide", "予定が重なったときの攻略法", [
    "締切・残量・その先の予定を同時に見る",
    "余白を残し、難しいときは早めに相談する"
  ], "目の前だけでなく、次の予定までカレンダーに置こう。", "q4-02-clear"),
  q402({ id: "q4-02-clear", speaker: "SYSTEM", text: "Q4-02 CLEAR！", clear: true, next: "q4-03-time-passage" }),

  /* Q4-03：数字の暗記ではなく、自分の現在地を確認する。 */
  passage("Q4-03", "q4-03-time-passage", "4Q後半", "自室・昼", "q4-03-001", {
    label: "LATE QUARTER"
  }),
  q403({ id: "q4-03-001", speaker: "主人公", text: "大学1年目も、もうすぐ終わり。\n今の私って、卒業までのどこにいるんだろう。" }),
  q403({ id: "q4-03-006", speaker: "卒業要件先輩", text: "自分から気になった？", character: characters.graduation.normal }),
  q403({ id: "q4-03-010", speaker: "主人公", text: "あと3年をどう進むか、今のうちに見ておきたくて。", character: characters.graduation.normal }),
  q403({ id: "q4-03-016", speaker: "卒業要件先輩", text: "なら、今年取れたものと、これから必要なものを並べよう。", character: characters.graduation.guidance }),
  q403({ id: "q4-03-017", speaker: "主人公", text: "取得単位、科目区分、卒業要件……単位の合計だけじゃないんだ。", deadlineSchedule: schedules.graduationProgress }),
  q403({ id: "q4-03-024", speaker: "卒業要件先輩", text: "必修や区分ごとの条件もある。分からないところは学生便覧や担当者に確認する。", character: characters.graduation.guidance }),
  q403({ id: "q4-03-030", speaker: "主人公", text: "4年間を全部決めなくてもいい？", character: characters.graduation.normal }),
  q403({ id: "q4-03-031", speaker: "卒業要件先輩", text: "もちろん。次へ進むために必要なところまで見ればいい。", character: characters.graduation.normal }),
  q403({
    id: "q4-03-choice",
    speaker: "SYSTEM",
    text: "2年生になる前に、何を確認する？",
    choices: [
      {
        label: "A",
        text: "取得状況・残りの要件・来年学びたい科目を一緒に見る",
        next: "q4-03-a-001",
        effects: { selfManagement: 2, informationUse: 1, affection: { graduation: 4 } }
      },
      {
        label: "B",
        text: "まず取得状況と科目区分を確認し、次の相談事項をメモする",
        next: "q4-03-b-001",
        effects: { selfManagement: 1, informationUse: 1, affection: { graduation: 1 } }
      },
      {
        label: "C",
        text: "来年やりたいことから逆算し、必要な科目を担当者に相談する",
        next: "q4-03-c-001",
        effects: { universityLife: 1, informationUse: 1, affection: { graduation: 1 } }
      }
    ]
  }),
  q403({ id: "q4-03-a-001", speaker: "主人公", text: "今までと、これからを一緒に見れば、次に進む方向が分かる。" }),
  q403({ id: "q4-03-a-004", speaker: "卒業要件先輩", text: "それでいい。完璧な四年計画より、更新できる計画を。", character: characters.graduation.smile, next: "q4-03-common-001" }),
  q403({ id: "q4-03-b-001", speaker: "主人公", text: "合計だけじゃなく、どの区分で取れたかまで確認しよう。" }),
  q403({ id: "q4-03-b-005", speaker: "卒業要件先輩", text: "分からない点が見つかるのも、確認した成果だよ。", character: characters.graduation.smile, next: "q4-03-common-001" }),
  q403({ id: "q4-03-c-001", speaker: "主人公", text: "来年やりたいことはある。でも要件との組み合わせが不安かも。" }),
  q403({ id: "q4-03-c-004", speaker: "卒業要件先輩", text: "なら、学生便覧を見た上でCCやAAへ相談しよう。", character: characters.graduation.normal }),
  q403({ id: "q4-03-c-007", speaker: "主人公", text: "自分で考えて、人にも頼る。これも進み方なんだね。", next: "q4-03-common-001" }),
  q403({ id: "q4-03-common-001", speaker: "主人公", text: "入学した頃は、卒業なんて遠すぎると思ってた。", deadlineSchedule: schedules.graduationProgress }),
  q403({ id: "q4-03-common-006", speaker: "主人公", text: "でも今は、一年分進んだ現在地が見える。", character: characters.graduation.normal }),
  q403({ id: "q4-03-common-008", speaker: "主人公", text: "卒業まで、あと3年。前より少し楽しみかも。", character: characters.graduation.normal }),
  q403({ id: "q4-03-common-015", speaker: "卒業要件先輩", text: "……それならいい。", character: characters.graduation.smile }),
  q403({ id: "q4-03-common-017", speaker: "主人公", text: "今、ちょっと嬉しそうだった。", character: characters.graduation.smile }),
  q403({ id: "q4-03-common-020", speaker: "卒業要件先輩", text: "来年も現在地の確認を忘れないで。", character: characters.graduation.normal }),
  q403({ id: "q4-03-final-001", speaker: "主人公", text: "今までを確認して、必要なものを知って、少し先を見て選ぶ。" }),
  q403({ id: "q4-03-final-009", speaker: "主人公", text: "よし。2年生も、自分の道を更新していこう。", emphasis: true, next: "q4-03-guide" }),
  guide("Q4-03", "q4-03-guide", "卒業までの現在地を確認", [
    "合計単位だけでなく、必修・科目区分も見る",
    "分からない点は学生便覧で確認し、CC・AAへ相談する"
  ], "年度末に一度、取得状況と次年度の履修を見直そう。", "q4-03-clear"),
  q403({ id: "q4-03-clear", speaker: "SYSTEM", text: "Q4-03 CLEAR！", clear: true, next: "q4-04-time-passage" }),

  /* Q4-04：一年の出来事を、次の行動につながる記録へ変える。 */
  passage("Q4-04", "q4-04-time-passage", "4Q末", "自室・夕方", "q4-04-001", {
    label: "END OF THE YEAR"
  }),
  q404({ id: "q4-04-001", speaker: "主人公", text: "もうすぐ1年生も終わり。\n一年間、私って何をしてきたんだろう。" }),
  q404({ id: "q4-04-004", speaker: "ガクチカくん", text: "じゃあ、並べてみよう。", character: characters.gakuchika.normal }),
  q404({ id: "q4-04-010", speaker: "主人公", text: "履修登録、展軸祭、バイト、締切、試験……。", deadlineSchedule: schedules.firstYearReview }),
  q404({ id: "q4-04-025", speaker: "ガクチカくん", text: "出来事だけじゃなく、前と後で変わったこともあるよね。", character: characters.gakuchika.smile }),
  q404({
    id: "q4-04-026",
    speaker: "主人公",
    text: "そういえば、地域の活動はどうしたっけ。",
    nextByDecision: {
      key: "q203Program",
      routes: {
        participated: "q4-04-participated-001",
        "not-participated": "q4-04-not-participated-001"
      },
      default: "q4-04-not-participated-001"
    }
  }),
  q404({ id: "q4-04-participated-001", speaker: "主人公", text: "現地で人の話を聞いて、自分になかった見方を知った。" }),
  q404({ id: "q4-04-participated-003", speaker: "ガクチカくん", text: "参加した事実より、その変化が君の経験だね。", character: characters.gakuchika.smile, next: "q4-04-before-choice-001" }),
  q404({ id: "q4-04-not-participated-001", speaker: "主人公", text: "今回は参加しなかった。でも内容を調べて、自分で見送ると決めた。" }),
  q404({ id: "q4-04-not-participated-003", speaker: "ガクチカくん", text: "知った上で選んだことも、次につながる経験だよ。", character: characters.gakuchika.smile, next: "q4-04-before-choice-001" }),
  q404({ id: "q4-04-before-choice-001", speaker: "主人公", text: "大きな受賞や成功はないけど、できるようになったことは多い。" }),
  q404({ id: "q4-04-before-choice-013", speaker: "ガクチカくん", text: "一番残したい変化を、具体的に書いてみたら？", character: characters.gakuchika.normal }),
  q404({
    id: "q4-04-choice",
    speaker: "SYSTEM",
    text: "どの経験を一年の記録に残す？",
    choices: [
      {
        label: "A",
        text: "締切とバイトをきっかけに、予定の立て方を変えたこと",
        next: "q4-04-a-001",
        effects: {
          selfManagement: 2,
          affection: { gakuchika: 2, report: 1 },
          decisions: { q404Reflection: "planning" }
        }
      },
      {
        label: "B",
        text: "大学祭やプログラムを知り、大学生活の見方が広がったこと",
        next: "q4-04-b-001",
        effects: {
          universityLife: 2,
          affection: { gakuchika: 2, slack: 1 },
          decisions: { q404Reflection: "experience" }
        }
      },
      {
        label: "C",
        text: "試験のトラブルを通して、公式情報と相談先を探せたこと",
        next: "q4-04-c-001",
        effects: {
          informationUse: 2,
          selfManagement: 1,
          affection: { gakuchika: 1, exam: 1 },
          decisions: { q404Reflection: "recovery" }
        }
      }
    ]
  }),
  q404({ id: "q4-04-a-001", speaker: "主人公", text: "『締切で焦った』だけじゃなく、残量と予定を並べるようになった。" }),
  q404({ id: "q4-04-a-006", speaker: "ガクチカくん", text: "失敗から変えた行動まで書けてる。いい記録だね。", character: characters.gakuchika.smile, next: "q4-04-common-001" }),
  q404({ id: "q4-04-b-001", speaker: "主人公", text: "オンラインでも、人や地域とつながる選択肢があると知った。" }),
  q404({ id: "q4-04-b-008", speaker: "ガクチカくん", text: "次に気になるものも書けば、二年目の行動につながるよ。", character: characters.gakuchika.smile, next: "q4-04-common-001" }),
  q404({ id: "q4-04-c-001", speaker: "主人公", text: "予定が崩れても、公式情報を探して必要な手続きを確認できた。" }),
  q404({ id: "q4-04-c-007", speaker: "ガクチカくん", text: "『困ったときにどう動けたか』も、立派な成長だよ。", character: characters.gakuchika.smile, next: "q4-04-common-001" }),
  q404({ id: "q4-04-common-001", speaker: "主人公", text: "マイステップに、一年目の記録として残そう。", myStep: myStepForms.firstYear }),
  q404({ id: "q4-04-common-008", speaker: "主人公", text: "何をしたか。何に困って、どう工夫したか。", myStep: myStepForms.firstYear }),
  q404({ id: "q4-04-common-011", speaker: "主人公", text: "そして、二年目に何を試したいか。", myStep: myStepForms.firstYear }),
  q404({ id: "q4-04-common-015", speaker: "主人公", text: "保存！　ただの出来事が、次へ進むための記録になった。", myStep: myStepForms.firstYear }),
  q404({ id: "q4-04-common-016", speaker: "ガクチカくん", text: "ちゃんと一年間で変わったね。", character: characters.gakuchika.smile }),
  q404({ id: "q4-04-common-021", speaker: "主人公", text: "入学式の日の私に、『思ったより忙しいけど、面白いぞ』って言いたい。", character: characters.gakuchika.smile }),
  q404({ id: "q4-04-common-024", speaker: "ガクチカくん", text: "そこは変わらないんだ。", character: characters.gakuchika.grin }),
  q404({ id: "q4-04-final-001", speaker: "主人公", text: "迷ったことも、失敗も、そこから変えたことも。" }),
  q404({ id: "q4-04-final-006", speaker: "主人公", text: "言葉にすると、ちゃんと私の大学生活になっていた。", emphasis: true, next: "q4-04-guide" }),
  guide("Q4-04", "q4-04-guide", "経験を次へつなげる", [
    "出来事だけでなく、課題・工夫・変化を書く",
    "最後に『次に試すこと』を一つ決める"
  ], "忘れないうちに、一つだけでもマイステップへ残そう。", "q4-04-clear"),
  q404({ id: "q4-04-clear", speaker: "SYSTEM", text: "Q4-04 CLEAR！", clear: true, next: "q4-05-time-passage" }),

  /* Q4-05：総復習ではなく、選んだ一年と関係性を回収する。 */
  passage("Q4-05", "q4-05-time-passage", "年度末", "自室・夜", "q4-05-001", {
    label: "END OF THE YEAR",
    background: backgrounds.night
  }),
  q405({ id: "q4-05-001", speaker: "主人公", text: "4Qの授業も、確認レポートも、試験も――全部終わった！" }),
  q405({ id: "q4-05-006", speaker: "主人公", text: "私の大学1年目も、これで終わりかぁ。" }),
  q405({ id: "q4-05-009", speaker: "主人公", text: "入学式の日は、オンライン大学って自由で楽そうだと思ってた。" }),
  q405({ id: "q4-05-016", speaker: "履修登録くん", text: "実際、自由だった？", character: characters.rishu.normal }),
  q405({ id: "q4-05-020", speaker: "主人公", text: "うん。自由だから、自分で決めることがたくさんあった。", character: characters.rishu.normal }),
  q405({ id: "q4-05-027", speaker: "履修登録くん", text: "もう『ちょっと待って』は、あまり必要なさそうだね。", character: characters.rishu.smile }),
  q405({ id: "q4-05-029", speaker: "Slackくん", text: "情報も待ってるだけじゃなく、自分から見つけられるようになった。", character: characters.slack.smile }),
  q405({ id: "q4-05-035", speaker: "主人公", text: "それに、分からないときは質問したり、誰かを頼ったりも。", character: characters.slack.smile }),
  q405({ id: "q4-05-039", speaker: "確認レポートくん", text: "締切にも内容にも、前より余裕を持てるようになった。", character: characters.report.normal }),
  q405({ id: "q4-05-047", speaker: "単位認定試験くん", text: "予定通りにいかなくても、確認して動けた。", character: characters.exam.smile }),
  q405({ id: "q4-05-058", speaker: "卒業要件先輩", text: "遠かった卒業までの道も、少し見えるようになったね。", character: characters.graduation.smile }),
  q405({ id: "q4-05-067", speaker: "ガクチカくん", text: "授業以外も含めて、全部が君の一年目。", character: characters.gakuchika.smile }),
  q405({ id: "q4-05-077", speaker: "主人公", text: "大変だった。でも、誰かに決められたんじゃなく、私が選んだ一年だった。", emphasis: true }),
  q405({
    id: "q4-05-route",
    speaker: "SYSTEM",
    text: "一年の終わりに、一番近くで見守っていたのは――",
    nextByAffection: {
      routes: {
        rishu: "q4-05-rishu-001",
        slack: "q4-05-slack-001",
        report: "q4-05-report-001",
        exam: "q4-05-exam-001",
        graduation: "q4-05-graduation-001",
        gakuchika: "q4-05-gakuchika-001"
      },
      default: "q4-05-rishu-001"
    }
  }),
  q405({ id: "q4-05-rishu-001", speaker: "履修登録くん", text: "君が選ぶたび、僕は少し安心してた。", character: characters.rishu.smile }),
  q405({ id: "q4-05-rishu-002", speaker: "主人公", text: "最初は、止められてばっかりだったのにね。", character: characters.rishu.smile }),
  q405({ id: "q4-05-rishu-003", speaker: "履修登録くん", text: "二年目は、君が選んだ時間割を最初に見せて。", character: characters.rishu.smile }),
  q405({ id: "q4-05-rishu-end", speaker: "主人公", text: "うん。今度は『ちょっと待って』って言わせないから。", character: characters.rishu.smile, ending: { id: "rishu", title: "君が選ぶ時間割" }, next: "q4-05-common-001" }),
  q405({ id: "q4-05-slack-001", speaker: "Slackくん", text: "最初は通知一つで固まってたのに、今じゃ頼れる情報通。", character: characters.slack.wink }),
  q405({ id: "q4-05-slack-002", speaker: "主人公", text: "“自称”はもう卒業しました！", character: characters.slack.wink }),
  q405({ id: "q4-05-slack-003", speaker: "Slackくん", text: "じゃあ二年目も、面白い話を一番に届ける。", character: characters.slack.smile }),
  q405({ id: "q4-05-slack-end", speaker: "主人公", text: "見逃さないように、ちゃんと会いに行くね。", character: characters.slack.smile, ending: { id: "slack", title: "君への特別な通知" }, next: "q4-05-common-001" }),
  q405({ id: "q4-05-report-001", speaker: "確認レポートくん", text: "未来の自分に任せすぎなくなった。", character: characters.report.normal }),
  q405({ id: "q4-05-report-002", speaker: "主人公", text: "厳しい担当が、毎回確認してくれたから。", character: characters.report.normal }),
  q405({ id: "q4-05-report-003", speaker: "確認レポートくん", text: "二年目も、提出したら僕に教えて。", character: characters.report.normal }),
  q405({ id: "q4-05-report-end", speaker: "主人公", text: "締切よりずっと前に、報告しに来るね。", character: characters.report.normal, ending: { id: "report", title: "未来の私との約束" }, next: "q4-05-common-001" }),
  q405({ id: "q4-05-exam-001", speaker: "単位認定試験くん", text: "準備も、トラブルのときの判断も。もう大丈夫そう。", character: characters.exam.smile }),
  q405({ id: "q4-05-exam-002", speaker: "主人公", text: "その言葉、前よりずっと嬉しいかも。", character: characters.exam.smile }),
  q405({ id: "q4-05-exam-003", speaker: "単位認定試験くん", text: "でも二年目も、無理はしないで。", character: characters.exam.worried }),
  q405({ id: "q4-05-exam-end", speaker: "主人公", text: "うん。次は万全な日に、ちゃんと会いに行く。", character: characters.exam.smile, ending: { id: "exam", title: "万全な日に会おう" }, next: "q4-05-common-001" }),
  q405({ id: "q4-05-graduation-001", speaker: "卒業要件先輩", text: "遠い未来を、君は自分の道に変えた。", character: characters.graduation.smile }),
  q405({ id: "q4-05-graduation-002", speaker: "主人公", text: "まだ三年もあるけど、もう迷子ではない気がする。", character: characters.graduation.smile }),
  q405({ id: "q4-05-graduation-003", speaker: "卒業要件先輩", text: "迷ったら、また一緒に現在地を見よう。", character: characters.graduation.smile }),
  q405({ id: "q4-05-graduation-end", speaker: "主人公", text: "卒業まで、これからも隣でお願いします。", character: characters.graduation.smile, ending: { id: "graduation", title: "卒業まで隣で" }, next: "q4-05-common-001" }),
  q405({ id: "q4-05-gakuchika-001", speaker: "ガクチカくん", text: "普通だと思ってた一年、ちゃんと君だけの物語になったね。", character: characters.gakuchika.smile }),
  q405({ id: "q4-05-gakuchika-002", speaker: "主人公", text: "書いてみたら、思ったより大事な一年だった。", character: characters.gakuchika.smile }),
  q405({ id: "q4-05-gakuchika-003", speaker: "ガクチカくん", text: "二年目のページも、最初に見せてよ。", character: characters.gakuchika.grin }),
  q405({ id: "q4-05-gakuchika-end", speaker: "主人公", text: "約束。次はどんな経験になるか、一緒に見届けて。", character: characters.gakuchika.smile, ending: { id: "gakuchika", title: "次のページも一緒に" }, next: "q4-05-common-001" }),
  q405({ id: "q4-05-common-001", speaker: "主人公", text: "大学生活を全部“攻略した”とは、まだ言えない。" }),
  q405({ id: "q4-05-common-003", speaker: "主人公", text: "知らないことも、迷うことも、これからきっとある。" }),
  q405({ id: "q4-05-common-005", speaker: "主人公", text: "でも、公式情報を確認して、考えて、必要なら誰かを頼る。" }),
  q405({ id: "q4-05-common-007", speaker: "主人公", text: "その上で自分で選び、動く方法なら、少し分かってきた。", emphasis: true, next: "q4-05-spring" }),
  passage("Q4-05", "q4-05-spring", "もうすぐ、2年生", "桜の季節", "q4-05-112", {
    label: "NEXT SPRING",
    background: backgrounds.field
  }),
  scene("Q4-05", { id: "q4-05-112", speaker: "主人公", text: "きっとまた、知らないことも予定通りにいかないこともある。" }, backgrounds.field),
  scene("Q4-05", { id: "q4-05-118", speaker: "主人公", text: "それでも、確認して、考えて、選んで、動く。" }, backgrounds.field),
  scene("Q4-05", { id: "q4-05-122", speaker: "主人公", text: "よし。大学2年目も――攻略していきますか！", emphasis: true, next: "q4-05-guide" }, backgrounds.field),
  guide("Q4-05", "q4-05-guide", "大学生活を攻略する方法", [
    "公式情報を確認し、自分で選ぶ",
    "困ったときは一人で抱えず相談する",
    "経験を振り返り、次の行動へつなげる"
  ], "あなたは、どんな大学生活を選びますか？", "q4-05-clear", { background: backgrounds.field }),
  scene("Q4-05", { id: "q4-05-clear", speaker: "SYSTEM", text: "Q4-05 CLEAR！", clear: true, next: "q4-05-theme" }, backgrounds.field),
  scene("Q4-05", {
    id: "q4-05-theme",
    speaker: "SYSTEM",
    text: "大学生活は、自由。\n\n公式情報を確かめ、必要なら誰かを頼り、\n最後は自分で選んで動く。\n\nあなたは、どんな大学生活を選びますか？",
    emphasis: true,
    resultPreview: { target: "q4-result-end" }
  }, backgrounds.field),
  scene("Q4 RESULT", {
    id: "q4-result-end",
    speaker: "SYSTEM",
    text: "大学生活、攻略できる？",
    clear: true,
    emphasis: true,
    complete: true,
    end: true
  }, backgrounds.field)
];
