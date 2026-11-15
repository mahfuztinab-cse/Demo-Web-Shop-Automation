
import { expect } from '@playwright/test';

class SearchPage {
    constructor(page) {
        this.page = page;

        //Search locators
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator(
            'input.button-1.search-box-button'
        );

        //Search result
        this.searchResult = page.locator(
            '.search-results'
        );

        //Product
        this.productName = page.getByRole('link', {
            name: 'Computing and Internet',
            exact: true
        });
    }

    //Search for a product
    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    //Verify search result
    async verifySearchResult(productName) {
        await expect(this.searchResult).toBeVisible();
        await expect(this.searchResult).toContainText(
            productName
        );
    }

    //Open selected product
    async openProduct() {
        await this.productName.click();
    }
}

export default SearchPage;

