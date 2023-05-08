/// <reference types = "Cypress" />
import HomePageUserActions from "../userActions/homePageUserActions";
import LogInPageUserActions from "../userActions/loginPageUserActions";
import HomePageValidations from "../validations/homePageValidations";
import LogInPageValidations from "../validations/loginPageValidations";

describe("Unsuccessful Login", function () {
  before(function () {
    cy.visit(Cypress.env("url"));
  });

  it("Verify if an existing user should not be log in if incorrect data is inputed", function () {
    const loginPageActions = new LogInPageUserActions();
    const homePageActions = new HomePageUserActions();
    const homePageValidations = new HomePageValidations();
    const logInValidations = new LogInPageValidations();
    homePageValidations.getHomePageValidation();
    homePageActions.clickSignupLoginButton();
    logInValidations.logInTextValidation();
    loginPageActions.fillTextField("Log in", "testordermyass33@sample.com");
    loginPageActions.fillTextField("password", "test111");
    loginPageActions.clickButton("log in");
    logInValidations.errorMessageTextValidation();
  });
});
