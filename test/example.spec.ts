import { testWithSynpress } from "@synthetixio/synpress";
import { metaMaskFixtures } from "@synthetixio/synpress/playwright";
import connectedSetup from "./wallet-setup/connected.setup";
import config from "./config";

const test = testWithSynpress(metaMaskFixtures(connectedSetup));

test("This test does not do much", async ({page}) => {
  await page.goto(config.baseUrl)
  await page.waitForTimeout(10000)
});