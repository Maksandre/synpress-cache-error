import { defineWalletSetup } from '@synthetixio/synpress'
import { MetaMask, getExtensionId } from '@synthetixio/synpress/playwright'
import config from '../config'

const SEED_PHRASE=config.seedPhrase;
const PASSWORD=config.metamaskPassword;

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const extensionId = await getExtensionId(context, 'MetaMask')

  const metamask = new MetaMask(context, walletPage, PASSWORD, extensionId)

  await metamask.importWallet(SEED_PHRASE)

  const page = await context.newPage()

  await page.goto(config.baseUrl)
  await page.getByRole("button", {name: "Sign in"}).click()
  await page.getByRole("button", {name: "MetaMask"}).click()

  await metamask.connectToDapp()

  // NOTE: wait a bit before the signature request appears
  // otherwise the script fails
  // !!! if remove steps bellow everything will be fine
  await page.waitForTimeout(2000)

  await metamask.confirmSignature()

  // a little timeout to see the result
  await page.waitForTimeout(5000)
})
