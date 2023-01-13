import { expect } from "@playwright/test";
import { test } from "../fixture/object_fixture";
import { beforeEach } from "node:test";
import Weblogin from "../page-object/web-login-page";
import Weblogout from "../page-object/web-logout-page";

test(`Successful logout`, async ({ page, weblogin, weblogout }) => {
  await weblogin.goto();
  await weblogin.login();
  await weblogin.validlogin();
  await weblogout.logout();
});
