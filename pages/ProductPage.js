
import { expect } from '@playwright/test';

class ProductPage {
    constructor(page) {
        this.page = page;

        // Product category
        this.booksCategory = page.getByRole('link', {
    name: 'Books',
    exact: true
}).first();

        // Product
        this.productName = page.getByRole('link', {
    name: 'Computing and Internet',
    exact: true
});

        // Product details
        this.addToCartButton = page.locator(
            'input.button-1.add-to-cart-button'
        );

        this.quantityInput = page.locator(
            'input[id^="addtocart_"][id$="_EnteredQuantity"]'
        );

        this.cartNotification = page.locator(
            '.bar-notification.success'
        );
    }

    //open the books category
    async openBooksCategory() {
        await this.booksCategory.click();
    }

    //select the product
    async selectProduct() {
        await this.productName.click();
    }

    //enter quantity
    async enterQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
    }

    //add product to cart
    async addProductToCart() {
        await this.addToCartButton.click();
    }

    //verify cart notification
    async verifyCartNotification() {
        await expect(this.cartNotification).toBeVisible();
        await expect(this.cartNotification).toContainText(
            'The product has been added to your'
        );
    }
}

export default ProductPage;

