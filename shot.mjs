import puppeteer from "puppeteer";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
await page.goto("file://" + join(here, "page.html"), { waitUntil: "load" });
await page.waitForFunction("window.__shotReady === true", { timeout: 10000 });
await page.screenshot({ path: join(here, "entry.png") });
await browser.close();
console.log("entry.png written");
