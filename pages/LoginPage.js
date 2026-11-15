
import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.locator('input.button-1.login-button');
        this.errorMessage = page.locator('.validation-summary-errors');

        // Login status locators
        this.logoutLink = page.locator('a.ico-logout');
        this.accountLink = page.locator('a.account');
    }

    // Open login page
    async openLoginPage() {
        await this.page.goto('/login');
    }

    // Enter email
    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    // Enter password
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    // Click login button
    async clickLogin() {
        await this.loginButton.click();
    }

    // Login with credentials
    async loginWithCredentials(email, password) {
        await this.openLoginPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    // Verify successful login
    async verifyLoginSuccess(email) {
    await expect(this.logoutLink).toBeVisible();

    await expect(
        this.page.getByRole('link', {
            name: email,
            exact: true
        })
    ).toBeVisible();
}

    // Logout
    async logout() {
        await this.logoutLink.click();
    }

    // Verify login error message
    async verifyLoginError() {
        await expect(this.errorMessage).toBeVisible();

        await expect(this.errorMessage).toContainText(
            'Login was unsuccessful. Please correct the errors and try again.'
        );

        await expect(this.errorMessage).toContainText(
            'No customer account found'
        );
    }
}

