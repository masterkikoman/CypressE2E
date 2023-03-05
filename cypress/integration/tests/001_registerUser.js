/// <reference types = "Cypress" />
import AccountCreatedPageUserActions from "../userActions/accountCreatedPageUserActions";
import DeleteAccountUserActions from "../userActions/deleteAccountUserActions";
import HomePageUserActions from "../userActions/homePageUserActions";
import LogInPageUserActions from "../userActions/loginPageUserActions";
import SignUpPageActions from "../userActions/signUpPageUserActions";
import AccountCreatedPageValidations from "../validations/accountCreatedPageValidations";
import DeleteAccountPageValidations from "../validations/deleteAccountPageValidations";
import HomePageValidations from "../validations/homePageValidations";
import LogInPageValidations from "../validations/loginPageValidations";
describe("Register User", function () {
  before(function () {
    cy.visit(Cypress.env("url"));
    cy.fixture("signupPageData").then(function (data) {
      this.data = data;
    });
  });

  it("Register New User Scenario", function () {
    const accountCreatedActions = new AccountCreatedPageUserActions();
    const accountCreatedValidations = new AccountCreatedPageValidations();
    const deleteAccountActions = new DeleteAccountUserActions();
    const deleteAccountValidations = new DeleteAccountPageValidations();
    const homePageActions = new HomePageUserActions();
    const homePageValidations = new HomePageValidations();
    const loginPageActions = new LogInPageUserActions();
    const logInValidations = new LogInPageValidations();
    const signUpPageActions = new SignUpPageActions();

    homePageValidations.getHomePageValidation();
    homePageActions.clickSignupLoginButton();
    logInValidations.newUserSignUpTextValidation();
    loginPageActions.fillTextField("username", "testordermyass");
    loginPageActions.fillTextField("SignUp", "testordermyass03@sample.com");
    loginPageActions.clickButton("SignUp");
    signUpPageActions.chooseTitle("Mr");
    signUpPageActions.inputPassword("password123");
    signUpPageActions.selectDayOfBirth("29");
    signUpPageActions.selectMonthOfBirth("12");
    signUpPageActions.selectYearOfBirth("1900");
    signUpPageActions.selectCheckBox();
    for (var index in this.data.values) {
      signUpPageActions.fillAddressInformation(
        this.data.values[index].field,
        this.data.values[index].value
      );
    }
    signUpPageActions.selectCountry("Singapore");
    signUpPageActions.createAccount();
    accountCreatedValidations.verifyAccountCreatedMessage();
    accountCreatedActions.clickContinueButton();
    homePageValidations.getUserName("testordermyass");
    homePageActions.clickDeleteAccount();
    deleteAccountValidations.VerifyAccountDeleted();
    deleteAccountActions.clickContinueButton();
  });
});
