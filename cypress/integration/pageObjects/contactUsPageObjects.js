class ContactUsPageObjects {
    getGetInTouchText() {
        return cy.get('.contact-form > h2');
        }
    
    getNameTextField() {
        return cy.get('[data-qa="name"]');
        }
    
    getEmailTextField() {
        return cy.get('[data-qa="email"]');
        }
    
    getSubjectTextField() {
        return cy.get('[data-qa="subject"]');
        }
    
    getCommentMessageTextField() {
        return cy.get('[data-qa="message"]');
        }

    getChooseFileButton() {
        return cy.get('[name="upload_file"]');
        }
    
    getSubmitButton() {
        return cy.get('[data-qa="submit-button"]');
        }
    
    getSuccessMessage() {
        return cy.get('.status.alert.alert-success')
    }
    
    getHomeButton() {
        return cy.get('.btn.btn-success')
    }
    
  }
  export default ContactUsPageObjects;
  