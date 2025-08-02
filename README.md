# portfolio-app

## 概要

このアプリは、React（TypeScript）とSpring Bootで構築したポートフォリオです。  
フロントエンドはNetlifyでホスティングし、バックエンドAPIは任意のクラウドで運用予定。  
アクセス解析（Google Analytics）や、今後はCI/CDやエラーログ監視（Sentry）の導入も予定しています。

---

## システム構成図

```plaintext
クライアント
(Webブラウザ/スマホ等)
      │
      │ HTTPS(リクエスト)
      ▼
Netlify（静的ファイル配信）
└─ React(TypeScript)SPA
      │
      │ APIリクエスト (fetch/axios)
      ▼
任意クラウド
└─ Java SpringBoot API
      └─ Controller(REST API)
      └─ Service(ロジック)
      │
      ▼
   任意DB

React(TypeScript)SPA ─────────→ Google Analytics

[次期実装]
・CI/CD
・エラーログ・モニタリング（Sentry）

```


![構成図](/architect/architect.png)