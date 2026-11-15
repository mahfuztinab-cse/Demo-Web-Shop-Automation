
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Q1 - Verify login with invalid credentials', async ({ page }, testInfo) => {

    const loginPage = new LoginPage(page);

    await test.step('Open Login Page', async () => {
        await loginPage.openLoginPage();
    });

    await test.step('Enter invalid credentials', async () => {
        await loginPage.enterEmail('invaliduser123@gmail.com');
        await loginPage.enterPassword('WrongPassword123');
    });

    await test.step('Click Login Button', async () => {
        await loginPage.clickLogin();
    });

    await test.step('Verify error message and login status', async () => {
        await loginPage.verifyLoginError();

        await expect(page).toHaveURL(/login/);
        await expect(page.locator('a.ico-logout')).toHaveCount(0);
    });

    const screenshot = await page.screenshot();

    await testInfo.attach('Q1 Invalid Login Screenshot', {
        body: screenshot,
        contentType: 'image/png'
    });
});
