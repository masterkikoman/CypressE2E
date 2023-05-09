import LogInPageObjects from "../pageObjects/logInPageObjects.js";
class LogInPageValidations {
  validationText = new LogInPageObjects();
  newUserSignUpTextValidation() {
    this.validationText
      .getNewUserSignupText()
      .should("have.text", "New User Signup!");
  }

  logInTextValidation() {
    this.validationText
      .getLogInText()
      .should("have.text", "Login to your account");
  }

  errorMessageTextValidation() {
    this.validationText
      .getErrorMessageText()
      .should("have.text", "Your email or password is incorrect!");
  }

  signUpMessageTextValidation() {
    this.validationText
      .getSignUpErrorMessage()
      .should("have.text", "Email Address already exist!");
  }
}
export default LogInPageValidations;
