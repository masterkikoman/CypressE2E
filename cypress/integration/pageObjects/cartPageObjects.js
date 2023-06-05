class CartPageObjects {
    getProceedToCheckOutButton(){
        return cy.get('.btn.btn-default.check_out');
    }
}
export default CartPageObjects