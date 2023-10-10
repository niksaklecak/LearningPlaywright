
class SSOPage {

     /**
     * @param {import('@playwright/test').Page} page
     */
    constructor (page) {
        this.page = page;
        const userNameInputFild = this.page.locator("#user_name");
        const emailInputFild = this.page.locator("#user_email");
        const passwordInputFild = this.page.locator("#password");

        
    }

    

    async fillInSingUpDetails(username, email, password) {

        await this.page.waitForTimeout(30000);
        

        await userNameInputFild.fill(username);
        await emailInputFild.fill(email);
        await passwordInputFild.fill(password);


    }

}

module.exports = SSOPage