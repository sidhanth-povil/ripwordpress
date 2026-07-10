<div align="center">

# ⚰️ RIP WordPress

### _The Bio-Organic Autopsy & Future of WP_

**A satirical, single-page autopsy of the CMS that refuses to die.**

[![Live Site](https://img.shields.io/badge/live-ripwordpress.com-00ff41?style=for-the-badge&logo=netlify&logoColor=black)](https://ripwordpress.com)
[![Deploys](https://img.shields.io/badge/deploy-Netlify-0e1511?style=for-the-badge&logo=netlify&logoColor=00ff41)](https://ripwordpress.com)
[![Made with GSAP](https://img.shields.io/badge/animation-GSAP-88ce02?style=for-the-badge&logo=greensock&logoColor=black)](https://gsap.com)

`is wordpress dead?` → **No.** It still powers **43.5%** of the web, held steady since 2022 ([W3Techs](https://w3techs.com/technologies/history_overview/content_management/all/y)). This site pokes the corpse anyway.

</div>

---

## 🩻 Why this exists

Every year someone declares WordPress dead. Every year it powers more of the web than every rival **combined**. `RIP WordPress` is the joke made visual — a mock funeral for a platform that keeps outliving its own obituaries.

It's built to do three things well:

- **Answer the question** — "is WordPress dead?" gets a straight, sourced answer, in the HTML, above the fold.
- **Land the joke** — brutalist toxic-green autopsy aesthetic, grief stages, a graveyard of "dead" frameworks, a light-a-candle counter.
- **Get found** — every claim links its source; built for humans, search crawlers, and AI answer engines alike.

## 🧪 The autopsy, section by section

| Section | What it does |
|--------|--------------|
| `LAST_WORDS` | Famous "WordPress is dead" quotes, still wrong |
| `GRAVEYARD` | Frameworks that were supposed to bury it |
| `ROTTING_CORE` | The PHP core that refuses to decompose |
| `AUTOPSY` | WordPress vs Next.js / React, cause-of-death report |
| `GRIEF_STAGES` | Denial → acceptance, for the framework tourists |
| 🕯️ **Candle counter** | Live, serverless — visitors light a candle for the "deceased" |

## 🛠️ Stack

- **Static HTML** — all key answer content ships in the initial markup (no JS-injected text)
- **Tailwind (CDN)** + custom brutalist design tokens
- **GSAP** — scroll-driven animation
- **Netlify Functions** + `@netlify/blobs` — the persistent candle counter (`/api/candles`)
- **Netlify** — auto-deploys from `main`

## 📁 Structure

```
.
├── home.html                     # the whole page — served at /
├── css/style.css                 # brutalist theme
├── js/main.js                    # GSAP + candle interactions
├── netlify/functions/
│   └── candle-count.mjs          # serverless candle counter → /api/candles
├── robots.txt                    # all crawlers + AI bots welcome
├── sitemap.xml
└── netlify.toml
```

## 💻 Run locally

Static preview — quickest:

```bash
python3 -m http.server 8000
# → http://localhost:8000/home.html
```

Full parity (candle function + edge):

```bash
npx netlify dev
```

## 🚀 Deploy

Push to `main`. Netlify builds and ships automatically.

## 🔍 SEO / AI-crawlability

- Question-format `<title>` and answer-first meta description
- Canonical, Open Graph, and Twitter card tags
- `robots.txt` explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot & all crawlers
- Every on-page statistic links to its source

---

<div align="center">

**[⚰️ Visit the wake → ripwordpress.com](https://ripwordpress.com)**

_WordPress is dead. Long live WordPress._

</div>
