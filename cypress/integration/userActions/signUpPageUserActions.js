import SignUpPageObjects from "../pageObjects/signUpPageObjects";

class SignUpPageActions {
  signUpPageActions = new SignUpPageObjects();

  chooseTitle(title) {
    this.signUpPageActions.getTitle().each(($btn, index, $buttons) => {
      this.signUpPageActions
        .getTitle()
        .eq(index)
        .invoke("attr", "value")
        .then(function (val) {
          if (val == title) {
            cy.wrap($btn).click();
          }
        });
    });
  }

  inputPassword(password) {
    this.signUpPageActions.getPassword().type(password);
  }

  selectDayOfBirth(day) {
    this.signUpPageActions.getDateOfBirthDays().select(day);
  }

  selectMonthOfBirth(month) {
    this.signUpPageActions.getDateOfBirthMonth().select(month);
  }

  selectYearOfBirth(year) {
    this.signUpPageActions.getDateOfBirthYear().select(year);
  }

  selectCheckBox() {
    this.signUpPageActions.getCheckBoxOffer().check();
  }

  fillAddressInformation(field, value) {
    switch (field) {
      case "FirstName":
        this.signUpPageActions.getFirstNameTextField().type(value);
        break;
      case "LastName":
        this.signUpPageActions.getLastNameTexField().type(value);
        break;
      case "Company":
        this.signUpPageActions.getCompanyTextField().type(value);
        break;
      case "Address1":
        this.signUpPageActions.getAddressOneTextField().type(value);
        break;
      case "Address2":
        this.signUpPageActions.getAddressTwoTextField().type(value);
        break;
      case "State":
        this.signUpPageActions.getStateTextField().type(value);
        break;
      case "City":
        this.signUpPageActions.getCityTextField().type(value);
        break;
      case "Zipcode":
        this.signUpPageActions.getZipcodeTextField().type(value);
        break;
      default:
        this.signUpPageActions.getMobileNumberTextField().type(value);
        break;
    }
  }

  selectCountry(country) {
    this.signUpPageActions.getCountryDropDown().select(country);
  }

  createAccount() {
    this.signUpPageActions.getCreateAccountButton().click();
  }
}
export default SignUpPageActions;
