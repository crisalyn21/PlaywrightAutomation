import { expect, Expect, Locator, Page } from "@playwright/test";

export default class Weblogin {
  webloginbutton: Locator;
  webloginmodal: Locator;
  webloginusername: Locator;
  webloginpassword: Locator;
  webloginbutton2: Locator;
  webloginpopup: Locator;
  webname: Locator;
  weblogout: Locator;
  weblogoutpopup: Locator;

  constructor(public page: Page) {
    this.page = page;
    this.webloginbutton = this.page.locator(`//button[text()='Login']`);
    this.webloginmodal = this.page.locator(`#chakra-modal--header-4`);
    this.webloginusername = this.page.locator(
      `//input[@placeholder='Username']`
    );
    this.webloginpassword = this.page.locator(`//input[@type='password']`);
    this.webloginbutton2 = this.page.locator(`//button[@type='submit']`);
    this.webloginpopup = this.page.locator(
      `(//div[text()='Successfully Authenticated'])[1]`
    );
    this.webname = this.page.locator(`//span[text()='e2e']`);
    this.weblogout = this.page.locator(`//div[text()='Logout']`);
    this.weblogoutpopup = this.page.locator(
      `(//div[text()='Successfully Logged out'])[1]`
    );
  }
  async goto() {
    await this.page.goto("http://web-staging.aonewallet.com");
  }
  // async checkloginbutton() {

  //   await this.webloginusername.fill("e2etestcrisa ");
  //   await this.webloginpassword.fill("password");
  //   await this.webloginbutton2.click();
  // }
  async login() {
    await this.webloginbutton.isVisible();
    await this.webloginbutton.click();
    await this.webloginmodal.isVisible();
  }
  async validlogin() {
    await this.webloginusername.fill("e2etestcrisa ");
    await this.webloginpassword.fill("password");
    await this.webloginbutton2.click();
    await this.webloginpopup.isVisible();
  }
  async logout() {
    await this.webname.click();
    await this.webname.isVisible();
    await this.weblogout.isVisible;
    await this.weblogout.click();
    await this.weblogoutpopup.isVisible();
  }
}
