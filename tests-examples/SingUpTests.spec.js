const { test, expect } = require('@playwright/test');
const SSORoutingPage = require("../pages/SSORoutingPage");
const LoginPage = require("../pages/LoginPage");
const SSOPage = require("../pages/SSOPage");
const config = require('../config');
const SSOLoginPage = require('../pages/SSOLoginPage');

test("Sing up positive", async ({page})=> {

    
    await page.goto("/");

    const loginPage = new LoginPage(page);
    await loginPage.verifyPageLoaded();
    await loginPage.clickOnRegisterButton();
    
    
    
    const ssoRoutingPage = new SSORoutingPage(page);
    // await ssoRoutingPage.verifyPageLoaded();
    await ssoRoutingPage.reRouteToEmailSingUp();
    
    // expect(await ssoRoutingPage.getEmailInputFild()).toContainText("Sign up with email");
    
    
    const ssoPage = new SSOPage(page);
    await page.waitForLoadState('networkidle', 10000)

    await ssoPage.fillInSingUpDetails(config.userNameFixed, config.emailFixed, config.passwordFixed);

    const ssoLoginPage = new SSOLoginPage(page);
    await page.waitForLoadState('networkidle', 10000)

    await ssoLoginPage.loginSuccessfuly(config.emailFixed, config.passwordFixed);

    //check the url of the page is https://sso.teachable.com/secure/9521/identity/login/password
    //fill in username and password 
    //verify user is logedIn
});