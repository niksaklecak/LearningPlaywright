const { BasePage } = require('./BasePage');

class SSORoutingPage extends BasePage {

     /**
     * @param {import('@playwright/test').Page} page
     */
    constructor (page) {
        super(page);
        this.page = page;
        const registerWithEmailButton = this.page.locator("[value='email']");
    }

    async getEmailInputFild() {
        return this.registerWithEmailButton;
    }

    

    async reRouteToEmailSingUp() {
        await page.waitForTimeout(10000); // Wait for 10 seconds
        await this.registerWithEmailButton.click();

    }

}

module.exports = SSORoutingPage