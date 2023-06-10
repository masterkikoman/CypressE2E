/// <reference types = "Cypress" />
import CartPageUserActions from "../userActions/cartPageUserActions";
import CheckoutPageUserActions from "../userActions/checkoutPageUserActions";
import HomePageUserActions from "../userActions/homePageUserActions";
import ProductPageUserActions from "../userActions/productPageUserActions";
import CheckoutPageValidations from "../validations/checkoutPageValidations";
describe("Calculating Total Price of Orders", function(){
    before(function () {
        cy.visit(Cypress.env("url"));
        cy.fixture("productPageData").then(function (data) {
          this.data = data;
        });
      });

      it("Total Sum of the products added in cart", function (){
        const homePageAction = new HomePageUserActions();
        const productPageAction = new ProductPageUserActions();
        const cartPageAction = new CartPageUserActions();
        const checkoutPageAction = new CheckoutPageUserActions();
        homePageAction.clickSignupLoginButton();
        cy.logInUser("testordermyass23@sample.com", "password123");
        homePageAction.clickProducts();
        cy.selectProduct("Madame Top For Women", 2);
        cy.selectProduct("Fancy Green Top", 1);
        productPageAction.clickViewCart();
        cartPageAction.clickProceedToCheckOutButton();
        checkoutPageAction.sumOfAllItems().then((sum) => {
          checkoutPageAction.totalAmount().then((totalAmountProd) => {
            expect(totalAmountProd).to.equal(sum);
            cy.log("Actual Total Amount:", totalAmountProd);
            cy.log("Actual Sum:", sum);
            CheckoutPageValidations.calculateValues(sum, totalAmountProd);
          });
        });
      });
})