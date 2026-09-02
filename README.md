# unit-love

『単位に恋して。』

ZEN大学の新入生が、4Qからなる1年間を疑似体験しながら、
大学生活に必要な知識や行動を選択肢形式で学ぶ
乙女ゲーム風大学生活シミュレーションです。

## Repository name

`unit-love`

## Development policy

- Mobile first
- Smartphone: game screen fills the viewport
- Desktop: the same vertical game screen is centered, with decorative side areas
- Vanilla HTML / CSS / JavaScript
- Game logic is separated from DOM code so that it can be tested
- Features are added step by step with Git commits

## Current features

- Title screen
- Dialogue progression
- Background / foreground / character layers
- Dialogue-box click to advance
- BGM playback
- Sound effect playback
- SOUND ON / OFF setting saved in `localStorage`
- Quarter result screen
- Three result axes: 自己管理 / 情報活用 / 大学生活
- Provisional S / A / B / C quarter grade logic
- Node.js tests

## Audio

Current WAV files are temporary original placeholder audio generated for development.
They can be replaced later without changing the JavaScript structure.

```text
assets/audio/
├─ bgm/
│  ├─ prologue.wav
│  └─ result.wav
└─ se/
   ├─ click.wav
   └─ notification.wav
```

Scenario audio can be assigned like this:

```js
{
  id: "example",
  chapter: "1Q",
  speaker: "主人公",
  text: "通知が来た！",
  bgm: "./assets/audio/bgm/prologue.wav",
  se: "./assets/audio/se/notification.wav"
}
```

## Quarter result

The header `成績` button currently opens the result screen for preview.
At the end of each quarter, the same result function can later be called automatically.

The current grade thresholds are provisional and are defined in `js/gameLogic.js`.

## Folder structure

```text
unit-love/
├─ index.html
├─ README.md
├─ package.json
├─ css/
│  └─ style.css
├─ js/
│  ├─ main.js
│  ├─ gameLogic.js
│  └─ scenario.js
├─ tests/
│  ├─ gameLogic.test.js
│  └─ scenario.test.js
└─ assets/
   ├─ audio/
   │  ├─ bgm/
   │  └─ se/
   └─ images/
      ├─ backgrounds/
      ├─ characters/
      ├─ foregrounds/
      └─ ui/
```

## Run tests

```bash
npm test
```

No external testing library is used.
The tests use Node.js built-in `node:test` and `assert`.


## Added interaction features

- BGM / sound effects with sound ON/OFF
- Quarter result screen
- 会話ボックス左下から、ひとつ前の会話へ戻る機能（スコア・好感度もその時点へ復元）
