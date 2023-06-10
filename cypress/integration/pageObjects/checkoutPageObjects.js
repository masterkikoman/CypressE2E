class CheckoutPageObjects {
    getTotalPricePerItem() {
        return cy.get('tbody > tr > td.cart_total > p')
    }

    getTotalAmount() {
        return cy.get('tbody > tr:nth-child(3) > td > p')
    }
}
export default CheckoutPageObjects