module.exports = class SSOLoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor (page)  {
        this.page = page;
        const emailInputFild = this.page.locator("#email");
        const passwordInputFild = this.page.locator("#password");
    }

    async loginSuccessfuly (email, password) {
        await this.emailInputFild.fill(email);
        await this.passwordInputFild(password);

    }
}