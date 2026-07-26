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

[docs/about_pages.md](docs/about_pages.md) を参照してください。

### レポートの構成（テンプレートの型）

[docs/about_pages.md](docs/about_pages.md) の `_template.html` を参照してください。

## 写真掲載について

[docs/about_pages.md](docs/about_pages.md) の「写真掲載について」を参照してください。

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
