# CLAUDE.md
- Static satirical site (ripwordpress.com) on Netlify, auto-deploys from main.
- NEVER change the visual design, GSAP animations, or satirical copy tone.
- All key answer content must be in the initial HTML (no JS-injected text).
- Market share: ~41.5% of all websites as of July 2026 (W3Techs), down from a
  ~43.5% peak in Aug 2024. Describe as "declining from dominance" — NEVER "dead",
  NEVER "growing", NEVER "held steady".
- Every market-share figure must carry a date stamp and a source link. No undated stats.
- Derived claims (ratios, multiples, percentages-of-percentages) must be recomputed from
  the source figures on the page whenever either figure changes. Never copy a derived
  claim from a third-party article.
- Every statistic must link to its source.
- Semantic HTML, WCAG AA, responsive.
- CSS is PRECOMPILED Tailwind (css/tailwind.css) — never re-add the runtime
  cdn.tailwindcss.com script (it was killing Lighthouse perf). After changing any
  Tailwind classes in home.html/data.html/js, rebuild and commit css/tailwind.css:
    npm i -D tailwindcss@3 @tailwindcss/forms @tailwindcss/container-queries
    npx tailwindcss -i input.css -o css/tailwind.css --minify
  Netlify does not run this build; the committed CSS is what ships.
