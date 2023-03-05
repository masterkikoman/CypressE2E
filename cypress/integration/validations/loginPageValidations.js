import LogInPageObjects from "../pageObjects/logInPageObjects.js";
class LogInPageValidations {
  signUpText = new LogInPageObjects();
  newUserSignUpTextValidation() {
    this.signUpText
      .getNewUserSignupText()
      .should("have.text", "New User Signup!");
  }
}
export default LogInPageValidations;
