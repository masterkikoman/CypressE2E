/// <reference types = "Cypress" />
import HomePageUserActions from "../userActions/homePageUserActions";
import LogInPageUserActions from "../userActions/loginPageUserActions";
import HomePageValidations from "../validations/homePageValidations";
import LogInPageValidations from "../validations/loginPageValidations";

describe("Register Using Existing Email", function () {
  before(function () {
    cy.visit(Cypress.env("url"));
  });

  it("User should not be allowed to register using existing email", function () {
    const loginPageActions = new LogInPageUserActions();
    const homePageActions = new HomePageUserActions();
    const homePageValidations = new HomePageValidations();
    const logInValidations = new LogInPageValidations();
    homePageValidations.getHomePageValidation();
    homePageActions.clickSignupLoginButton();
    logInValidations.newUserSignUpTextValidation();
    loginPageActions.fillTextField("username", "testordermyass");
    loginPageActions.fillTextField("SignUp", "testordermyass23@sample.com");
    loginPageActions.clickButton("SignUp");
    logInValidations.signUpMessageTextValidation();
  });
});
