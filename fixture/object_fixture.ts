// import { test, expect } from '@playwright/test';
import { test as objectFixture } from "@playwright/test";
import Weblogin from "../page-object/web-login-page";
import Weblogout from "../page-object/web-logout-page";
import Webcasino from "../page-object/web-casino-page";

type Pages = {
  weblogin: Weblogin;
  weblogout: Weblogout;
  webcasino: Webcasino;
};
const testObjects = objectFixture.extend<Pages>({
  weblogin: async ({ page }, use) => {
    await use(new Weblogin(page));
  },

  weblogout: async ({ page }, use) => {
    await use(new Weblogout(page));
  },

  webcasino: async ({ page }, use) => {
    await use(new Webcasino(page));
  },
});

export const test = testObjects;
