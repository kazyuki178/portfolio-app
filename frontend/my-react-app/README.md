# ポートフォリオサイト開発環境ドキュメント（Next.js）

## 使用技術・ツール

- **Next.js 15.4.6 (App Router)**  
  Reactベースのフルスタックフレームワーク。ルーティングはフォルダ構造で自動生成され、SSR/SSG/ISRが簡単に利用可能。

- **React 19.1.1 / ReactDOM 19.1.1**  
  UI構築のためのライブラリ。Next.js 内部で使用。

- **Node.js v22.3.0**  
  Next.js 開発・ビルドに対応する最新安定版。

- **Tailwind CSS**  
  ユーティリティファーストなCSSフレームワーク。グローバルCSS (`globals.css`) で全ページに適用。

- **Font Awesome**  
  アイコン表示（`@fortawesome/react-fontawesome`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-solid-svg-icons`）。

- **Vercel / Netlify**  
  サイトのデプロイ・ホスティングサービス（Next.js は Vercel 推奨）。

- **TypeScript**  
  型安全な JavaScript 開発に使用。

---

## 追加情報

- **App Router 構成例**
