// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import LogInPageObjects from "../integration/pageObjects/logInPageObjects.js";
import ProductsPageObjects from "../integration/pageObjects/productPageObjects.js";
// //
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("selectProduct", (productName, amount)=> {
    const productPage = new ProductsPageObjects();
    productPage.getProductList().each(($value, index , $list) => {
        if($value.text().includes(productName)) {
            for( var x = 0; x < amount; x++) {
                productPage.getAddToCartButton().eq(index).click({force: true});
                if(amount > 1 ) {
                     productPage.getContinueShoppingButton().click()
                }
            }            
        }
      });
});

Cypress.Commands.add("logInUser", (email, password)=> {
    const logInPage = new LogInPageObjects();
    logInPage.getLogInEmailAddressTextField().type(email);
    logInPage.getPasswordTextField().type(password);
    logInPage.getLogInButton().click();
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })