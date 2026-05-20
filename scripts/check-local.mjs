import fs from "node:fs/promises";
import { chromium } from "playwright";

await fs.mkdir("tmp", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
});

await page.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" });
await page.screenshot({ path: "tmp/portfolio-home.png", fullPage: false });

const projectImages = await page.locator(".project-card__media img").evaluateAll((images) =>
  images.map((image) => ({
    src: image.getAttribute("src"),
    width: image.naturalWidth,
    height: image.naturalHeight,
  })),
);

console.log(JSON.stringify(projectImages, null, 2));
await browser.close();
