# GDGoC KIT 公式ブログ

GDGoC KIT（Google Developer Groups on Campus KIT / GDG on Campus Kanazawa Institute of Technology）のイベントレポートなどを公開するサイトです。

- 公開URL: [https://KIT-GDGoC.github.io/](https://KIT-GDGoC.github.io/)
- 公式X: [https://x.com/kit_gdsc](https://x.com/kit_gdsc)
- 公式サイト（GDGコミュニティページ）: [https://gdg.community.dev/gdg-on-campus-kanazawa-institute-of-technology-ishikawa-japan/](https://gdg.community.dev/gdg-on-campus-kanazawa-institute-of-technology-ishikawa-japan/)

## ディレクトリ構成

```plaintext
├── index.html            # トップページ
├── report/                # イベントレポート
│   ├── index.html         # レポート一覧
│   ├── _template.html     # レポート作成用テンプレート
│   ├── 20260421.html      # 個別レポート（ファイル名 = イベント実施日）
│   └── 20260509.html
├── assets/
│   └── images/
│       ├── 20260421/      # レポートに対応した画像フォルダ
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
- **本イベントについて**: 主催団体情報、公式X（[@kit_gdsc](https://x.com/kit_gdsc)）、公式サイト、会場情報、登壇資料、ハッシュタグ

## 写真掲載について

- 参加者・登壇者が写っている写真を載せる場合は、事前に本人の確認を取る
- 個人情報（氏名、連絡先など）を記事や画像ファイルに含めない
- 写真には `© GDGoC KIT` のクレジットを添える

## 管理者

- GitHubアカウント権限保持者: （名前）
- 困ったときの連絡先: （連絡先 or Discord/Slackなど）
