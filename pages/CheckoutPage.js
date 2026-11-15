
import { expect } from '@playwright/test';

class CheckoutPage {
    constructor(page) {
        this.page = page;

        //Shopping cart
        this.termsCheckbox = page.locator('#termsofservice');
        this.checkoutButton = page.locator('#checkout');
        this.checkoutAsGuestButton = page.locator(
             '.checkout-as-guest-button'
        );

        //Billing address
        this.firstName = page.locator('#BillingNewAddress_FirstName');
        this.lastName = page.locator('#BillingNewAddress_LastName');
        this.email = page.locator('#BillingNewAddress_Email');
        this.country = page.locator('#BillingNewAddress_CountryId');
        this.city = page.locator('#BillingNewAddress_City');
        this.address = page.locator('#BillingNewAddress_Address1');
        this.zipCode = page.locator('#BillingNewAddress_ZipPostalCode');
        this.phone = page.locator('#BillingNewAddress_PhoneNumber');
        this.billingContinue = page.locator(
            '#billing-buttons-container input.new-address-next-step-button'
        );

        // Shipping Address
        this.shippingAddressContinue = page.locator(
             '#shipping-buttons-container input.new-address-next-step-button'
        );

        // Shipping Method
        this.shippingContinue = page.locator(
             '#shipping-method-buttons-container input.shipping-method-next-step-button'
        );

        //Payment
        this.paymentContinue = page.locator(
            '#payment-method-buttons-container input.payment-method-next-step-button'
        );

        //Payment information
        this.paymentInfoContinue = page.locator(
            '#payment-info-buttons-container input.payment-info-next-step-button'
        );

        //Confirm order
        this.confirmOrderButton = page.locator(
            'input.button-1.confirm-order-next-step-button'
        );

        //Order confirmation
        this.orderSuccess = page.locator(
            '.section.order-completed'
        );
        this.orderNumber = page.locator(
            '.order-completed .details'
        );
        this.orderDetailsLink = page.getByRole('link', {
            name: 'Click here for order details.'
        });
    }

    //Agree to terms and checkout
    async agreeTermsAndCheckout() {
        await this.termsCheckbox.check();
        await this.checkoutButton.click();
    }

    //Checkout as guest
    async clickGuestCheckout() {
    await this.checkoutAsGuestButton.click();
    }

    //Fill billing address
    async fillBillingAddress() {
        await this.firstName.fill('Mahfuz');
        await this.lastName.fill('Tinab');
        await this.email.fill('mahfuz.checkout@gmail.com');

        await this.country.selectOption({
            label: 'Bangladesh'
        });

        await this.city.fill('Dhaka');
        await this.address.fill('NatunBazar');
        await this.zipCode.fill('1212');
        await this.phone.fill('01402806910');
    }

    //Continue billing
    async continueBilling() {
        await this.billingContinue.click();
    }

    //Continue shipping address
    async continueShippingAddress() {
        await this.shippingAddressContinue.click();
    }

    //Continue shipping
    async continueShipping() {
        await this.shippingContinue.click();
    }

    //Continue payment method
    async continuePayment() {
        await this.paymentContinue.click();
    }

    //Continue payment information
    async continuePaymentInfo() {
        await this.paymentInfoContinue.click();
    }

    //Confirm order
    async confirmOrder() {
        await this.confirmOrderButton.click();
    }

    //Verify order success
    async verifyOrderSuccess() {
        await expect(this.orderSuccess).toBeVisible();

        await expect(this.orderSuccess).toContainText(
            'Your order has been successfully processed!'
    );

        await expect(this.orderNumber).toBeVisible();
    }

    //Open order details
    async openOrderDetails() {
        await this.orderDetailsLink.click();
    }
}

export default CheckoutPage;

