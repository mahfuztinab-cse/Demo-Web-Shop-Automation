
import { expect } from '@playwright/test';

class RegisterPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.registerLink = page.locator('a[href="/register"]');
        this.gender = page.locator('#gender-male');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');

        // Registration result
        this.successMessage = page.locator('.result');
    }
    
    //open the registration page
    async openRegisterPage() {
        await this.page.goto('/register');
    }

    //select gender
    async selectGender() {
        await this.gender.check();
    }
    
    //enter first name
    async enterFirstName(firstName) {
        await this.firstName.fill(firstName);
    }
    
    //enter last name
    async enterLastName(lastName) {
        await this.lastName.fill(lastName);
    }
    
    //enter email
    async enterEmail(email) {
        await this.email.fill(email);
    }
    
    //enter password
    async enterPassword(password) {
        await this.password.fill(password);
    }
    
    //enter confirm password
    async enterConfirmPassword(password) {
        await this.confirmPassword.fill(password);
    }
    
    //click register button
    async clickRegister() {
        await this.registerButton.click();
    }
    
    //verify registration success
    async verifyRegistrationSuccess() {
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toContainText(
            'Your registration completed'
        );
    }
}

export default RegisterPage; 

