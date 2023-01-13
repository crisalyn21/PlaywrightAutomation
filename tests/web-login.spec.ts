import { expect } from "@playwright/test";
import { test } from "../fixture/object_fixture";

test.describe(`Site visit`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`http://web-staging.aonewallet.com/`);
    await page.getByRole("button", { name: "Login" }).click();
  });

  test(`Successful login`, async ({ weblogin, page }) => {
    await weblogin.login();
    await weblogin.validlogin();
  });

  test("Unsuccessful login to Betvision site", async ({ page }) => {
    await page.goto("https://qa-staging.aonewallet.com/");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByPlaceholder("Username").click();
    await page.getByPlaceholder("Username").fill("e2etestcrisa ");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("passwqrd");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("Empty field to Betvision site", async ({ page }) => {
    await page.goto("http://web-staging.aonewallet.com/");
    await page.goto("http://web-staging.aonewallet.com/");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByPlaceholder("Username").click();
    await page.getByPlaceholder("Password").click();
    await page.getByRole("button", { name: "Login" }).click();
  });
});
