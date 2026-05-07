import {test} from '@playwright/test';
test('learn playwright locators', async({ page })=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('input[type="submit"]').click()
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.locator('//a[text()="Leads"]').click()
})