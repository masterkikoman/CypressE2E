import SignUpPageObjects from "../pageObjects/signUpPageObjects.js";
class SignUpPageValidations {
  signUpPageValidation = new SignUpPageObjects();
  enterAccountTextValidation() {
    this.signUpPageValidation
      .getAccountInfoText()
      .should("have.text", "Enter Account Information");
  }
}
export default SignUpPageValidations;
