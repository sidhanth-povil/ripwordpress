// Pings IndexNow (Bing + Yandex etc.) after every successful Netlify deploy so
// crawlers re-fetch the changed pages. The key is a public ownership token,
// verified via https://ripwordpress.com/<KEY>.txt — not a secret.
const KEY = "8b420c9d547c44ccfaf35faa9f97f04a";
const HOST = "ripwordpress.com";
const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/data`,
  `https://${HOST}/sitemap.xml`,
];

module.exports = {
  onSuccess: async ({ utils }) => {
    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: URLS,
    };
    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      // IndexNow returns 200 or 202 on success.
      console.log(`IndexNow ping: HTTP ${res.status} for ${URLS.length} URLs`);
    } catch (err) {
      // Never fail the deploy over a best-effort ping.
      console.warn(`IndexNow ping failed (non-fatal): ${err.message}`);
    }
  },
};
