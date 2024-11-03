# CorporateSite-React-Next

## 開発手順（Next.js 14）

```bash
npx create-next-app@14.1.0
```

セットアップ時の質問項目：
- What is your project named? › プロジェクト名を入力
- Would you like to use TypeScript? › No / Yes（推奨: Yes）
- Would you like to use ESLint? › No / Yes（推奨: Yes）
- Would you like to use Tailwind CSS? › No / Yes（推奨: Yes）
- Would you like to use `src/` directory? › No / Yes（推奨: Yes）
- Would you like to use App Router? (recommended) › No / Yes（推奨: Yes）
- Would you like to customize the default import alias (@/*)? › No / Yes（推奨: Yes）
- What import alias would you like configured? › @/* （デフォルトのまま推奨）

プロジェクト作成後：
```bash
cd corporate-site
npm audit fix --force
```

開発サーバーの起動：
```bash
# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 にアクセスして確認できます。

```bash
# 開発サーバーの停止
ctrl + C
```

```bash
# 1. cursorのチャットを開く
# 2. 「@corporate-site README.mdに現状のcorporate-siteフォルダの構造を詳細に追記して」と指示 
# 3. とりま下記に貼り付け
ctrl + L
```

## プロジェクト構造(claude-3.5-sonnet-20241022)

```plaintext
corporate-site/
├── .next/                  # ビルドされたファイル
├── node_modules/          # 依存パッケージ
├── public/               # 静的ファイル
├── src/                  # ソースコード
│   └── app/             # Appルーター
│       ├── globals.css   # グローバルスタイル
│       ├── layout.tsx    # ルートレイアウト
│       └── page.tsx      # メインページ
├── .eslintrc.json       # ESLint設定
├── .gitignore           # Git除外設定
├── next.config.mjs      # Next.js設定
├── package.json         # プロジェクト設定
├── postcss.config.js    # PostCSS設定
├── README.md            # プロジェクト説明
├── tailwind.config.ts   # Tailwind CSS設定
└── tsconfig.json        # TypeScript設定
```
