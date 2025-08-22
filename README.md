# portfolio-app

## 概要

このアプリは、FrontがNext.js（TypeScript）で構築予定のポートフォリオです。  
フロントエンドはVercelでホスティング。


---

## システム構成図

```plaintext

クライアント
(Webブラウザ/スマホ等)
      │
      │  HTTPSリクエスト
      ▼
┌────────────────────────────┐
│           Vercel           │
│   ──────────────────────   │
│   フロントエンド            │
│   [Next.js] [TypeScript]    │
│   ・Qiita API 直接fetch      │
└────────────────────────────┘
      │
      │           └─────────────→ Google Analytics
      │
      │  HTTPSリクエスト
      ▼
┌────────────────────────────┐
│          Qiita API          │
└────────────────────────────┘



```


<!-- <img src="/architect-infomation/architect.png" alt="構成図" width="600" /> -->