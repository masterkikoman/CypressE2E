import ContactUsPageObjects from "../pageObjects/contactUsPageObjects";
class ContactUsPageActions {
    contactUsActions = new ContactUsPageObjects();
    
    inputName(name) {
        this.contactUsActions.getNameTextField().type(name);
    }

    inputEmail(email) {
        this.contactUsActions.getEmailTextField().type(email);
    }

    inputSubject(subject) {
        this.contactUsActions.getSubjectTextField().type(subject);
    }

    inputMessage(message) {
        this.contactUsActions.getCommentMessageTextField().type(message);
    }

    uploadFile(file) {
        this.contactUsActions.getChooseFileButton().attachFile(file)
    }

    contactUsSubmitButton() {
        this.contactUsActions.getSubmitButton().click()
    }

    clickContactUsHomeButton() {
        this.contactUsActions.getHomeButton().click()
    }
}
export default ContactUsPageActions;