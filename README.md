# GDGoC KIT 公式ブログ

GDGoC KIT（Google Developer Groups on Campus KIT / GDG on Campus Kanazawa Institute of Technology）のイベントレポートなどを公開するサイトです。

- 公開URL: [https://KIT-GDGoC.github.io/](https://KIT-GDGoC.github.io/)
- 公式X: [https://x.com/kit_gdsc](https://x.com/kit_gdsc)
- 公式サイト（GDGコミュニティページ）: [https://gdg.community.dev/gdg-on-campus-kanazawa-institute-of-technology-ishikawa-japan/](https://gdg.community.dev/gdg-on-campus-kanazawa-institute-of-technology-ishikawa-japan/)

## ディレクトリ構成

```plaintext
├── index.html              # トップページ
├── report/                 # イベントレポート
│   ├── index.html          # レポート一覧
│   ├── _template.html      # レポート作成用テンプレート
│   ├── 20260421.html       # 個別レポート（ファイル名 = イベント実施日）
│   └── 20260509.html
├── event/                  # 開催予定イベントの告知ページ（今後追加予定）
│   ├── index.html          # 告知ページ一覧
│   └── _template.html      # 告知ページ作成用テンプレート
├── assets/
│   ├── css/
│   │   ├── base.css        # 全ページ共通スタイル（変数・チャプターバーなど）
│   │   ├── report.css      # 個別レポートページ専用スタイル
│   │   └── report-list.css # レポート一覧ページ専用スタイル
│   └── images/
│       ├── branding/
│       │   └── logo.png    # チャプターロゴ（<> GDGoC KIT）
│       ├── 20260421/       # レポートに対応した画像フォルダ
│       └── 20260509/
└── README.md
```

## レポートの追加方法

1. `report/` に `YYYYMMDD.html` を新規作成（YYYYMMDDはイベントの実施日）
   - 同日に複数イベントがある場合は `YYYYMMDD-2.html` のように連番を付ける
2. `report/_template.html` をコピーして中身を書き換える
3. 記事冒頭に実施日と公開日を記載する

    ```html
    <p>実施日: 2026年4月21日 / 公開日: 2026年4月27日</p>
    ```

4. 写真は `assets/images/YYYYMMDD/` に入れて、記事から相対パスで参照する
5. `report/index.html` にレポートへのリンクを追記する
6. 変更をコミット・プッシュ（GitHub Pagesが自動で反映）

### レポートの構成（テンプレートの型）

過去のnoteでの投稿を踏まえた、基本の章立てです。

- **はじめに**: イベント概要、開催日、対象者、参加人数、connpassなどのイベント詳細リンク
- **セッション**: 登壇者名・所属を明記しつつ、①②③...と連番で紹介
- **おまけ**: 名言などで締めくくる（任意）
- **関連リンク**: 参加者・登壇者が書いたnote/ブログ/SNS投稿など
- **本イベントについて**: 主催団体情報、公式X（[@kit_gdsc](https://x.com/kit_gdsc)）、公式サイト、会場情報、登壇資料、ハッシュタグ

個別レポートページには目次（TOC）機能があり、スクロールに応じて現在地がハイライトされます。セクション（`h2`）を増減した場合は、ヒーロー直下の`<nav class="toc">`のリンクも合わせて増減してください。

## 写真掲載について

- 参加者・登壇者が写っている写真を載せる場合は、事前に本人の確認を取る
- 個人情報（氏名、連絡先など）を記事や画像ファイルに含めない
- 写真には `© GDGoC KIT` のクレジットを添える

## ブランチ運用ルール

今はイベントレポートのみですが、今後イベント告知ページなど扱うコンテンツが増えることを見越して、ブランチ名にプレフィックスを付けて運用します。

| プレフィックス | 用途 | 命名例 |
|---|---|---|
| `main` | 本番反映用（GitHub Pagesはここから配信） | `main` |
| `report/` | 個別イベントレポート | `report/20260421` |
| `event/` | 開催予定イベントの告知・案内ページ | `event/20260815` |
| `page/` | メンバー紹介など、日付を持たない固定ページ | `page/members` |
| `feature/` | サイトの機能追加・デザイン変更 | `feature/toc-nav` |
| `fix/` | 不具合修正 | `fix/toc-highlight` |
| `chore/` | 軽微な修正・設定変更・README更新など | `chore/readme-update` |

**判断基準**：「これは将来、`report/`のように専用ディレクトリを持つコンテンツになるか？」→ Yesならコンテンツ系の新しいプレフィックスを作る。Noなら`feature`/`fix`/`chore`のいずれかを使う。

- 小文字・ハイフン区切り
- 日付を含む場合は`YYYYMMDD`
- 1ブランチ＝1つの作業。`main`にマージしたらブランチは削除してよい

## 管理者

- GitHubアカウント権限保持者: GDGoC KIT Organizer
- 困ったときの連絡先: Slack
