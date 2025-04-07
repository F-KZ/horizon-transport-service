import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const BASE_URL = "https://www.horizontransports.fr";

const pages = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/conditions", changefreq: "yearly", priority: 0.8 },
  { url: "/mentions", changefreq: "yearly", priority: 0.8 },
  { url: "/politique-de-confidentialite", changefreq: "yearly", priority: 0.8 },
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });

  pages.forEach((page) => {
    sitemapStream.write({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmodISO: new Date().toISOString(),
    });
  });

  sitemapStream.end();

  const sitemapData = await streamToPromise(sitemapStream);
  writeFileSync("./public/sitemap.xml", sitemapData.toString());

  console.log("✅ Sitemap généré avec succès !");
})();
