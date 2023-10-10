class BasePage {

    constructor (page) {

        this.page = page;
    }

    async verifyPageLoaded() {
        
        await this.page.waitForLoadState('networkidle', 10000)
    }

} 

module.exports = {BasePage}