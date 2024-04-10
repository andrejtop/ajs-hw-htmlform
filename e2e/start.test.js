import puppeteer from "puppeteer";

describe("page start", () => {
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
  test("page rendering", async () => {
    await page.goto("http://localhost:9001");

    await page.waitForSelector("body");
  });

  //close browser
  afterAll(async () => {
    await browser.close();
  });
});