import fs from "node:fs/promises";
import { chromium } from "playwright";

const demos = [
  ["prode-mundial-2026", "https://demo-prodemundial2026.vercel.app/"],
  ["invitaciones-web-ar", "https://demo-invitacionesweb.vercel.app/"],
  ["ibimce", "https://ibimce.com.ar"],
  ["registro-medico", "http://demo-registromedico.vercel.app/"],
];

await fs.mkdir("public/images/demos", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 960 },
  deviceScaleFactor: 1,
});

for (const [slug, url] of demos) {
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
    await page.screenshot({
      path: `public/images/demos/${slug}.png`,
      fullPage: false,
    });
    console.log(`Captured ${slug}`);
  } catch (error) {
    console.error(`Failed ${slug}: ${error.message}`);
  }
}

await browser.close();
