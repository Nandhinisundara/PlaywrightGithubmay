import {test} from '@playwright/test'
test('login to leaftaps', async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(5000)
})