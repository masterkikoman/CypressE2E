class ProductsPageObjects {
  getProductList() {
    return cy.get('.product-overlay > div > p');
  }

  getAddToCartButton() {
    return cy.get('.product-overlay > div > a');
  }

  getContinueShoppingButton() {
    return cy.get('.btn.btn-success.close-modal.btn-block');
  }

  getViewCart() {
    return cy.get('.modal-body > p:nth-child(2) > a')
  }
}
export default ProductsPageObjects;