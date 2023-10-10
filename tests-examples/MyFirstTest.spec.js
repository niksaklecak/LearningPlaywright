const { test, expect } = require("@playwright/test");



test("Using default values ", async ({ page }) => {

    await page.goto('/loginpagePractise/')
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("[type *= 'password']").fill("learning");
    await page.locator("#signInBtn").click();

    const title = await page.locator(".card-body a").nth(0).textContent()
    console.log(title)

});