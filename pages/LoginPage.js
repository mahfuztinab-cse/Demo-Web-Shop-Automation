
import { expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.locator('input.button-1.login-button');
        this.errorMessage = page.locator('.validation-summary-errors');
    }

    async openLoginPage() {
        await this.page.goto('/login');
    }

    async enterEmail(email) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

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

