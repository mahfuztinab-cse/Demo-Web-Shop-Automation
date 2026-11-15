
import { test } from '@playwright/test';

import SearchPage from '../pages/SearchPage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

test('Q3 - Product Search, Add to Cart and Checkout', async ({ page }) => {

    // Create Page Objects
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Open website
    await page.goto('/');

    // Step 2: Search for product
    await searchPage.searchProduct('Computing and Internet');

    // Step 3: Verify search result
    await searchPage.verifySearchResult('Computing and Internet');

    // Step 4: Open product details
    await searchPage.openProduct();

    // Step 5: Increase product quantity
    await productPage.enterQuantity(2);

    // Step 6: Add product to cart
    await productPage.addProductToCart();

    // Step 7: Verify cart notification
    await productPage.verifyCartNotification();

    // Step 8: Open shopping cart
    await cartPage.openShoppingCart();

    // Step 9: Verify product and quantity
    await cartPage.verifyProductInCart('Computing and Internet');
    await cartPage.verifyQuantity(2);

    // Step 10: Agree to terms and checkout
    await checkoutPage.agreeTermsAndCheckout();

    // Step 11: Continue as guest if required
    if (await checkoutPage.checkoutAsGuestButton.isVisible()) {
        await checkoutPage.clickGuestCheckout();
    }

    // Step 12: Fill billing address
    await checkoutPage.fillBillingAddress();

    // Step 13: Continue billing
    await checkoutPage.continueBilling();

    // Step 14: Continue shipping address
    await checkoutPage.continueShippingAddress();

    // Step 15: Continue shipping method
    await checkoutPage.continueShipping();

    // Step 16: Continue payment method
    await checkoutPage.continuePayment();

    // Step 17: Continue payment information
    await checkoutPage.continuePaymentInfo();

    // Step 18: Confirm order
    await checkoutPage.confirmOrder();

    // Step 19: Verify order confirmation
    await checkoutPage.verifyOrderSuccess();

    // Step 20: Open order details
    await checkoutPage.openOrderDetails();

});

