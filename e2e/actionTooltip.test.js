import puppeteer from "puppeteer";

describe("add tooltip", () => {
  let browser;
  let page;

  jest.setTimeout(30000);

  beforeAll(async () => {
    //open browser
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });

    //open new page
    page = await browser.newPage();
  });

  //tests
  test("tooltip should be showed", async () => {
    await page.goto("http://localhost:9001");

    await page.waitForSelector(".btn");
  });

  test("card should be valid", async () => {
    await page.goto("http://localhost:9001");

    await page.waitForSelector(".btn");

    const button = await page.$(".btn");

    await button.click();

    await page.waitForSelector(".tooltip-wrapper");
  }, 30000);

  //close browser
  afterAll(async () => {
    await browser.close();
  });
});