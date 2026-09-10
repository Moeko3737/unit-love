# 音源素材一覧

ゲーム内で使用するBGM・SEの準備状況をまとめています。

## 追加済みのBGM

| ファイル名 | 使用場面 | 備考 |
| --- | --- | --- |
| `assets/audio/bgm/daily.mp3` | プロローグ・Q1〜Q4の日常シーン | 「スローライフは続いてゆく」。本編の共通ループBGM。スマホでもSEを聞き取りやすい共通音量 |
| `assets/audio/bgm/opening.mp3` | プロローグ後のOP演出 | 「少年は自転車に乗って！」。OP終了時に日常BGMへ戻る。日常BGMと同じ音量 |
| `assets/audio/bgm/result.wav` | 成績確認画面 | 開発用の仮音源。後から同名で差し替え可能 |
| `assets/audio/bgm/ending.mp3` | 4Q RESULT後のエンディングイラスト | 「ゲームクリアー！」。ほかのBGMと同じ音量でループ再生 |

## 任意で追加できるBGM

現在は日常用BGMを全編で共用しています。学園祭や夜の場面などで変化を付けたい場合は、各章の開始シーンへ個別の `bgm` を指定できます。タイトル画面はサウンド設定のみ表示し、BGMは流しません。

## 追加済みのSE

| ファイル名 | 使用場面 | 音量 |
| --- | --- | --- |
| `assets/audio/se/click.wav` | ボタン・吹き出し操作 | 通常SEより大きめ。ほかのSEと重ならない専用プレイヤーで再生 |
| `assets/audio/se/choice.mp3` | 選択肢を選んだとき | 音量30％。「決定ボタンを押す28」（[効果音ラボ](https://soundeffect-lab.info/)） |
| `assets/audio/se/notification.wav` | Portalからの通知、Q1-03・Q1-04のSlack通知 | 通常 |
| `assets/audio/se/clear.mp3` | 各チャプター・各Qの「CLEAR」表示 | 通常SEの50％ |
| `assets/audio/se/thermometer.mp3` | Q3-05で体温計に38.7℃が表示される場面 | 通常SEの50％ |
| `assets/audio/se/time-passage.mp3` | 「数日後」「翌朝」などの時間経過画面 | 通常SEの50％ |

## 配布元・利用条件

以下の音源は、商用利用可能・クレジット表記不要の素材として、各配布元の利用規約を確認のうえ使用しています。

| 使用場面 | 素材名 | 配布元 |
| --- | --- | --- |
| 章クリア | 発見！成功！な嬉しい音 | [DOVA-SYNDROME](https://dova-s.jp/se/detail/1463) |
| 日常BGM | スローライフは続いてゆく | [DOVA-SYNDROME](https://dova-s.jp/bgm/detail/23563) |
| オープニング | 少年は自転車に乗って！ | [DOVA-SYNDROME](https://dova-s.jp/bgm/detail/10075) |
| 時間スキップ | 鳩時計2 | [効果音ラボ「生活・日常」](https://soundeffect-lab.info/sound/various/various3.html) |
| 体温計 | 目覚まし時計のアラーム | [効果音ラボ](https://soundeffect-lab.info/) |
| エンディング | ゲームクリアー！ | [DOVA-SYNDROME](https://dova-s.jp/bgm/detail/17997) |

## 音源を用意するときの目安

- 個別のシーンに `bgm` が設定されていない場合は、日常用BGMが自動的に使われる。
- OP演出では専用BGMへ切り替え、OPを終えると日常用BGMを先頭から再生する。
- `timePassage` が設定された画面では、時間経過SEが自動的に再生される。
- BGM・SEはMP3またはWAVを使用できる。
- 通常シーンのBGMは、会話を邪魔しない音量・構成にする。
- 長いシーン用BGMは、ループしたときにつながりが不自然にならないものにする。
- 権利関係を確認し、配布元・作者・ライセンスがある場合は記録する。
- `SOUND OFF` のときは、追加した音源も再生しない。
- 音源が読み込めない場合でも、ゲーム進行を止めない。
