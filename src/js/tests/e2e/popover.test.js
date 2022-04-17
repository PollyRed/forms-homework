import puppeteer from 'puppeteer';

jest.setTimeout(80000);
describe('Popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
	  args: [
		'--no-sandbox',
		'--disable-dev-shm-usage',
		],
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  describe('Popover test', () => {
    test('Should show popover tooltip', async () => {
      await page.goto(baseUrl);
      const submit = await page.$('[data-id=popover-button]');
      submit.click();
      await page.waitForSelector('[data-id=popover-tooltip]');
    });
  });
});
