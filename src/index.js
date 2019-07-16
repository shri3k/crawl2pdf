const path = require("path");
const pup = require("puppeteer");

async function gotoPage({ pdf, raw, page }) {}

async function crawljs(args) {
  console.log("Initiating...");
  const browser = await pup.launch({
    headless: true
  });
  const pg = await browser.newPage();
  try {
    const { pdf, raw, page } = args;
    const url = new URL(page);
    const filename = page.replace(/(\.|\/|-|:)/g, "_");
    console.log("Creating with filename: ", filename);
    await pg.goto(page, { waitUntil: "networkidle2" });
    await pg.pdf({ path: filename, format: "A4" });
  } catch (e) {
    console.error("oh no", e);
    process.exit(1);
  } finally {
    console.log("Done");
    pg.close();
    process.exit(0);
  }
}

module.exports = crawljs;
