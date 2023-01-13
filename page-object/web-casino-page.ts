import { Expect, Locator, Page } from "@playwright/test";

export default class Webcasino {
  casinobtn: Locator;
  filter: Locator;
  all: Locator;
  Centre: Locator;
  RTP: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.casinobtn = this.page.locator(`//p[@class='chakra-text css-1ak1g2m']`);
    this.filter = this.page.locator(`//p[text()='Filters:']`);
    this.all = this.page.locator(
      `(//select[@class='chakra-select css-1grzhrz'])[2]`
    );
    this.Centre = this.page.locator(`//a[contains(text(),'Help Centre')]`);
    this.RTP = this.page.locator(`//a[contains(text(),'RTP')]`);
  }
  async goto() {
    await this.page.goto("http://web-staging.aonewallet.com");
    await this.page.goto("http://web-staging.aonewallet.com/casino");
  }
  async casino() {
    await this.casinobtn.isVisible();
    await this.casinobtn.click();
  }
}
