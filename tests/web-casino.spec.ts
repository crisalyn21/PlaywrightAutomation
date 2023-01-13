import { expect } from "@playwright/test";
import { test } from "../fixture/object_fixture";
import { beforeEach } from "node:test";
import Webcasino from "../page-object/web-casino-page";

test("Admin can redirect to casino page", async ({ page, webcasino }) => {
  await webcasino.goto();
  await expect(page).toHaveURL("http://web-staging.aonewallet.com/casino");
});

test("Admin redirect to RTP", async ({ page, webcasino }) => {
  await webcasino.goto();
  await page.getByRole("link", { name: "RTP" }).isVisible();
  await page.getByRole("link", { name: "RTP" }).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/rtp`);
});

test("Admin redirect to Help centre", async ({ page, webcasino }) => {
  await webcasino.goto();
  await page.getByRole("link", { name: "Help Centre" }).isVisible();
  await page.getByRole("link", { name: "Help Centre" }).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/help-centre`);
});

test(`Cta About Us`, async ({ page, webcasino }) => {
  await webcasino.goto();
  await page
    .locator(`(//h3[@class='chakra-heading css-1yc483h'])[1]`)
    .isVisible();
  await page.locator(`//p[text()='About Us']`).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/aboutus`);
});

test(`Cta Contact Us`, async ({ page, webcasino }) => {
  await webcasino.goto();
  await page
    .locator(`(//h3[@class='chakra-heading css-1yc483h'])[1]`)
    .isVisible();
  await page.locator(`//p[text()='Contact Us']`).click();
  await expect(page).toHaveURL(`http://web-staging.aonewallet.com/contact-us`);
});

test(`Privacy Policy`, async ({ page, webcasino }) => {
  await webcasino.goto();
  await page
    .locator(`(//h3[@class='chakra-heading css-1yc483h'])[1]`)
    .isVisible();
  await page.locator(`//p[text()='Privacy Policy']`).click();
  await expect(page).toHaveURL(
    `http://web-staging.aonewallet.com/privacy-policy`
  );
});
