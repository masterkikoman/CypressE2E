/// <reference types = "Cypress" />
import ContactUsPageActions from "../userActions/contactUsPageActions";
import HomePageUserActions from "../userActions/homePageUserActions";
import ContactUsPageValidations from "../validations/contactUsPageValidations";
import HomePageValidations from "../validations/homePageValidations";

describe("Contact Us Form", function () {
    before(function () {
        cy.visit(Cypress.env("url"));
      });

    it("User must be able to fill in contact us and upload file", function(){
        const contactUsActions = new ContactUsPageActions();
        const contactUsValidations = new ContactUsPageValidations();
        const homePageValidations = new HomePageValidations();
        const homePageActions = new HomePageUserActions();
        const file = 'ID.png'
        homePageValidations.getHomePageValidation();
        homePageActions.clickContactUs();
        contactUsValidations.VerifyGetInTouchTextIsVisible();
        contactUsActions.inputName("Test");
        contactUsActions.inputEmail("testmail@sample.com");
        contactUsActions.inputSubject("This is a subject");
        contactUsActions.inputMessage("This is a test message");
        contactUsActions.uploadFile(file);
        contactUsActions.contactUsSubmitButton();
        contactUsValidations.VerifySuccessMessageIsVisible();
        contactUsActions.clickContactUsHomeButton();
        homePageValidations.getHomePageValidation();   
    });

});