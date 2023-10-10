const {test, expect} = require ('@playwright/test');

test("SortableTable test", async ({page}) => {
    
    // We need to automate the testing of the a sortable table:

    // Go to website http://website.multiformis.com/
    page.goto("http://website.multiformis.com/");

    //handle popup
    const popup = page.locator("[type='button']");
    
    await popup.click();

    // From main menu click on "Sort and Tables"
    await page.locator("#menu-item-40 a").click();

    // Check if table contains more than 25 records
    const select = await page.locator("[name='tablepress-2_length']");
    await select.selectOption("50");
    // let arrayOfElements = [];
    // for (let i = 0; i < 49; i++) {
    // arrayOfElements.push(await page.locator(`.row-${i}`));
    // }
    const testValues = await page.locator(".column-8").allTextContents();
    expect(testValues.length >= 25).toBeTruthy();
    

    // Sort the data by Age descending
    await page.locator("th.column-8.sorting").click();
    await page.waitForLoadState("networkidle");
    await page.locator("th.column-8.sorting").click();
    await page.waitForLoadState("networkidle");

    // Check if the 1st person in the table is older than 65
    const age = await page.locator(".column-8").nth(1).textContent();
    expect(age >= 65).toBeTruthy();

    // NOTE: In step 2. handle any popup that might appear
});