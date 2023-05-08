/// <reference types = "Cypress" />
import HomePageUserActions from "../userActions/homePageUserActions";
import LogInPageUserActions from "../userActions/loginPageUserActions";
import HomePageValidations from "../validations/homePageValidations";
import LogInPageValidations from "../validations/loginPageValidations";

describe("Successful Login", function () {
  before(function () {
    cy.visit(Cypress.env("url"));
  });

  it("Verify if an existing user should be logged in", function () {
    const loginPageActions = new LogInPageUserActions();
    const homePageActions = new HomePageUserActions();
    const homePageValidations = new HomePageValidations();
    const logInValidations = new LogInPageValidations();
    homePageValidations.getHomePageValidation();
    homePageActions.clickSignupLoginButton();
    logInValidations.logInTextValidation();
    loginPageActions.fillTextField("Log in", "testordermyass23@sample.com");
    loginPageActions.fillTextField("password", "password123");
    loginPageActions.clickButton("log in");
    homePageValidations.getUserName("testordermyass");
  });
});
