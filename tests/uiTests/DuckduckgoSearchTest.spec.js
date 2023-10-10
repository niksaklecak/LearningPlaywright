const {test,expect} = require('@playwright/test');

test.only("DuckduckgoSearch test", async ({page}) => {
    // Open https://duckduckgo.com
    page.goto("https://duckduckgo.com");
    // Enter the term "toptal" in the search box
    await page.locator("#searchbox_input").fill("toptal");
    // Do the search
    await page.keyboard.press("Enter");
    // Click on the first search result link
    await page.getByText("Join as a Freelancer | Toptal | Toptal®").click();
    // Check if the URL is "https://www.toptal.com"
    const toptalUrl = await page.url();
    expect(toptalUrl === "https://www.toptal.com/talent/apply").toBeTruthy();

});