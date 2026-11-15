
import { test } from '@playwright/test';

import RegisterPage from '../pages/RegisterPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';

test('Q2 - Register, Login and Add Product to Cart', async ({ page }) => {

    // Create Page Objects
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Generate unique customer credentials
    const uniqueEmail = `mahfuz${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // Step 1: Register a new customer
    await registerPage.openRegisterPage();
    await registerPage.selectGender();
    await registerPage.enterFirstName('Mahfuz');
    await registerPage.enterLastName('Tinab');
    await registerPage.enterEmail(uniqueEmail);
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(password);
    await registerPage.clickRegister();

    // Step 2: Verify registration
    await registerPage.verifyRegistrationSuccess();

    // Step 3: Logout if registration automatically logged in
    if (await loginPage.logoutLink.isVisible()) {
        await loginPage.logout();
    }

    // Step 4: Login with newly registered account
    await loginPage.loginWithCredentials(uniqueEmail, password);
    await loginPage.verifyLoginSuccess(uniqueEmail);

    // Step 5: Navigate to Books category
    await productPage.openBooksCategory();

    // Step 6: Select product
    await productPage.selectProduct();

    // Step 7: Enter quantity
    await productPage.enterQuantity(1);

    // Step 8: Add product to cart
    await productPage.addProductToCart();
    await productPage.verifyCartNotification();

    // Step 9: Open shopping cart
    await cartPage.openShoppingCart();

    // Step 10: Verify product and quantity
    await cartPage.verifyProductInCart('Computing and Internet');
    await cartPage.verifyQuantity(1);

});

