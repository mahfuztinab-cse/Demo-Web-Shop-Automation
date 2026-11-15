
import { expect } from '@playwright/test';

class CartPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.shoppingCartLink = page.getByRole('link', {
    name: 'Shopping cart',
    exact: true
}).last();

        this.cartProduct = page.locator(
            '.cart-item-row'
        );

        this.productName = page.locator(
            '.product-name'
        );

        this.quantity = page.locator(
            '.qty-input'
        );
    }

    //open the shopping cart
    async openShoppingCart() {
        await this.shoppingCartLink.click();
    }
    
    //verify product in cart
    async verifyProductInCart(expectedProduct) {
        await expect(this.cartProduct).toBeVisible();

        await expect(this.productName).toContainText(
            expectedProduct
        );
    }

    //verify quantity in cart
    async verifyQuantity(expectedQuantity) {
        await expect(this.quantity).toHaveValue(
            String(expectedQuantity)
        );
    }
}

export default CartPage;

