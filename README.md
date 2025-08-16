# portfolio-app

## 概要

このアプリは、FrontがNext.js（TypeScript）,BackがNest.jsで構築予定のポートフォリオです。  
フロントエンドはVercelでホスティングし、バックエンドは任意のクラウドで運用予定。  
アクセス解析（Google Analytics）や、今後はCI/CDやエラーログ監視（Sentry）の導入も予定しています。

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
└────────────────────────────┘
      │           │
      │           └─────────────→ Google Analytics
      │
      │  REST API (fetch/axios)
      ▼
┌────────────────────────────┐
│      任意クラウド           │
│   ──────────────────────   │
│   バックエンド              │
│   [NestJS] [TypeScript]     │
└────────────────────────────┘
      │
      ▼
   任意DB

┌───────────────────────────────┐
│   今後の実装予定                │     
│     ・CI/CD                    │
│     ・エラーログ監視            │
│       （Sentry）               │
└───────────────────────────────┘
```


<img src="/architect-infomation/architect.png" alt="構成図" width="600" />