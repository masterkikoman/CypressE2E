import LogInPageObjects from "../pageObjects/logInPageObjects";
class LogInPageUserActions {
  logInPageLocator = new LogInPageObjects();
  fillTextField(textfield, value) {
    String.prototype.equalsIgnoreCase = function (compareString) {
      return this.toUpperCase() === compareString.toUpperCase();
    };
    if (textfield.equalsIgnoreCase("SignUp")) {
      this.logInPageLocator.getSignUpEmailTextField().type(value);
    } else if (textfield.equalsIgnoreCase("Username")) {
      this.logInPageLocator.getSignUpNameTextField().type(value);
    } else if (textfield.contains("Log in")) {
      this.logInPageLocator.getLogInEmailAddressTextField().type(value);
    } else {
      this.logInPageLocator.getPasswordTextField().type(value);
    }
  }

  clickButton(button) {
    if (button == "SignUp") {
      this.logInPageLocator.getSignUpButton().click();
    } else {
      this.logInPageLocator.getLogInButton().click();
    }
  }
}
export default LogInPageUserActions;
