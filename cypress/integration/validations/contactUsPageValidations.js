import ContactUsPageObjects from "../pageObjects/contactUsPageObjects";
class ContactUsPageValidations {
    contactUsValidation = new ContactUsPageObjects();
    
    VerifyGetInTouchTextIsVisible() {
        this.contactUsValidation
        .getGetInTouchText()
        .should("have.text", "Get In Touch")
    }

    VerifySuccessMessageIsVisible() {
        this.contactUsValidation
        .getSuccessMessage()
        .should("have.text","Success! Your details have been submitted successfully.")
    }

}
export default ContactUsPageValidations;