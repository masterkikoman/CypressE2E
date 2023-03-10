class LogInPageObjects {
  getSignUpNameTextField() {
    return cy.get('form[action="/signup"] > input[data-qa="signup-name"]');
  }

  getSignUpEmailTextField() {
    return cy.get('form[action="/signup"] > input[data-qa="signup-email"');
  }

  getLogInEmailAddressTextField() {
    return cy.get('[data-qa="login-email"]');
  }

  getPasswordTextField() {
    return cy.get('[data-qa="login-password"]');
  }

  getSignUpButton() {
    return cy.get('[data-qa="signup-button"]');
  }

  getLogInButton() {
    return cy.get('[data-qa="login-button"]');
  }

  getNewUserSignupText() {
    return cy.get(".signup-form > h2");
  }
}
export default LogInPageObjects;
