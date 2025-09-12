# ポートフォリオ スターター

最小構成の静的サイトです。`index.html` と `styles.css` だけで動きます。ビルド不要。

## 使い方（超速）
1. このフォルダを GitHub に新規リポジトリとしてアップロード（リポ名：`username.github.io` が簡単）。
2. GitHub → リポジトリ → **Settings → Pages** でデプロイ方式が「Deploy from a branch」になっていることを確認し、`main` / `/ (root)` を選択。
3. 数分後、`https://username.github.io/` で公開されます。

## Vercel / Netlify で公開
- Vercel / Netlify にサインイン → **New Project** → GitHubリポジトリを選択 → デフォルト設定でデプロイ。
- どちらも無料プランでOK。自動でCDN配信 & HTTPS。

## カスタムドメインを設定
- ドメインを購入（例：`example.com`）。
- GitHub Pages：`example.com` を **Settings → Pages → Custom domain** に登録。レジストラ側DNSで `A` or `CNAME` を公式手順に合わせて設定。
- Vercel/Netlify：プロジェクトの **Domains** に `example.com` を追加し、指示に従いDNSを設定。

## 編集ポイント
- `index.html`：名前、肩書き、SNSリンク、AboutやContactを修正。
- `projects.json`：制作物カードを編集（`title`, `summary`, `tags`, `url`, `cover`）。
- `styles.css`：色や余白を好みに調整。
- `assets/`：プロフィール画像やPDF、OG画像を追加。

## 画像の最適化
- 画像は WebP/AVIF を優先。幅1200px前後にリサイズ、`loading="lazy"` を活用。

## SEO/OG
- `<title>` と `<meta name="description">` を案件ごとに調整。
- `og:image` は 1200×630px 推奨（`assets/og-image.png` を差し替え）。
- `robots.txt` と `sitemap.xml` の `example.com` を自分のドメインに変更。

## 開発の拡張
- コンポーネント化やブログ運用が必要なら Next.js / Astro / Hugo などへ拡張。
- アナリティクスは Plausible / GA4 を `<head>` にスニペット追加。

---
最終更新日: 2025-09-12
