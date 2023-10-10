const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {

     /**
     * @param {import('@playwright/test').Page} page
     */
    constructor (page) {
        super(page);
        this.page = page;

    }

    async clickOnRegisterButton() {
        const loginButton = this.page.locator('a.theme-btn').first();
        await loginButton.click();

    }


}

module.exports = LoginPage