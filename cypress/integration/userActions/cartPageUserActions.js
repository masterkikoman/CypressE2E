import CartPageObjects from "../pageObjects/cartPageObjects";

class CartPageUserActions {
    cartPage = new CartPageObjects();
    clickProceedToCheckOutButton() {
        this.cartPage.getProceedToCheckOutButton().click();
    }
}
export default CartPageUserActions