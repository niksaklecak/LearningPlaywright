const {test, expect} = require('@playwright/test');


test("Contact form test", async ({page}) => {
// Open http://automationpractice.multiformis.com/
    page.goto("http://automationpractice.multiformis.com/");
    page.waitForLoadState("load");

    // Click on the 'Contact us' tab menu
    await page.locator("[title='Contact us']").first().click();

    // Fill in the contact form with the following:
    const select = await page.locator("#id_contact");
    
    // Subject heading: "Webmaster"
    await select.selectOption("Webmaster");
    // Email address: "test@toptal.com"
    await page.locator("#email").fill("test@toptal.com");

    // Order reference: "R108"
    await page.locator("#id_order").fill("R108");

    // Attach file: any file image file (*.png)
    const filePath = __dirname + '/../resources/image1.png'
    await page.locator("#fileUpload").setInputFiles(filePath)

    // Message: "Complaint about order R108
    await page.locator("#message").fill("Complaint about order R108");

    // Submit by clicking the "Send" button
    await page.locator("#submitMessage").click();
    await page.waitForLoadState("load");


    await expect(await page.locator("#center_column p")).toContain("Your message has been successfully sent to our team.");

});


