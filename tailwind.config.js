/**
 * Build the site CSS (replaces the old runtime cdn.tailwindcss.com script):
 *   npm i -D tailwindcss@3 @tailwindcss/forms @tailwindcss/container-queries
 *   npx tailwindcss -i input.css -o css/tailwind.css --minify
 * Commit the regenerated css/tailwind.css. Netlify does NOT run this build.
 */
module.exports = {
  darkMode: "class",
  content: ["./home.html", "./data.html", "./js/main.js"],
  theme: {
    extend: {
      colors: {
        "toxic-green": "#00ff41",
        "fatal-yellow": "#ccff00",
        "success-green": "#39ff14",
        "error": "#ffb4ab",
        "pure-white": "#e8f5ec",
        "midnight-ink": "#0f1c14",
        "deep-space-swamp": "#070e0a",
        "outline": "#84967e",
        "on-surface": "#dce5dd",
        "surface": "#0e1511",
        "surface-container": "#1a211d",
        "surface-bright": "#333b36",
        "primary-container": "#00ff41",
        "on-primary": "#003907",
      },
      spacing: {
        "sm": "8px", "md": "16px", "lg": "24px", "xl": "40px",
        "container-max": "1280px", "gutter": "20px",
      },
      fontFamily: {
        "headline-lg": ["Inter", "sans-serif"],
        "headline-xl": ["Inter", "sans-serif"],
        "label-caps": ["JetBrains Mono", "monospace"],
        "code-md": ["JetBrains Mono", "monospace"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "terminal": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "700" }],
        "code-md": ["14px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "terminal-huge": ["80px", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "800" }],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
