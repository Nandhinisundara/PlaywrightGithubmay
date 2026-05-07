import {test} from '@playwright/test'
test('open amazon', async({page})=>{
    await page.goto('https://www.amazon.com/')
    await page.waitForLoadState('domcontentloaded')
    const title = await page.title()
    console.log(title)
})