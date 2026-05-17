/**
 * Optional: fetch dynamic routes from API and extend public/sitemap.xml before deploy.
 * Usage: REACT_APP_API_URL=... REACT_APP_SITE_URL=... node scripts/generate-sitemap.js
 */
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const SITE_URL = (process.env.REACT_APP_SITE_URL || "https://www.sutradental.com").replace(
  /\/+$/,
  ""
);
const API = (process.env.REACT_APP_API_URL || "").replace(/\/+$/, "");

const slugify = (text) =>
  String(text || "")
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const staticPaths = ["/", "/about-me", "/all-treatments", "/blogs"];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

async function main() {
  const urls = new Set(staticPaths.map((p) => `${SITE_URL}${p === "/" ? "" : p}`));

  if (API) {
    try {
      const [treatments, blogs] = await Promise.all([
        fetchJson(`${API}/list`),
        fetchJson(`${API}/blog-list`),
      ]);
      treatments?.forEach((t) => {
        if (t._id) urls.add(`${SITE_URL}/treatments/${t._id}`);
      });
      blogs?.forEach((b) => {
        const slug = slugify(b.title);
        if (slug) urls.add(`${SITE_URL}/blogs/${slug}`);
      });
    } catch (err) {
      console.warn("API fetch failed — static URLs only:", err.message);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls]
  .map(
    (loc) => `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  const out = path.join(__dirname, "..", "public", "sitemap.xml");
  fs.writeFileSync(out, xml, "utf8");
  console.log(`Wrote ${urls.size} URLs to ${out}`);
}

main();
