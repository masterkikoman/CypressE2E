class SignUpPageObjects {
  getAccountInfoText() {
    return cy.get(".login-form > h2 > b");
  }

  getTitle() {
    return cy.get('[name="title"]');
  }

  getPassword() {
    return cy.get('[name="password"]');
  }

  getDateOfBirthDays() {
    return cy.get("#days");
  }

  getDateOfBirthMonth() {
    return cy.get("#months");
  }

  getDateOfBirthYear() {
    return cy.get("#years");
  }

  getCheckBoxOffer() {
    return cy.get('[type="checkbox"]');
  }

  getFirstNameTextField() {
    return cy.get("#first_name");
  }

  getLastNameTexField() {
    return cy.get("#last_name");
  }

  getCompanyTextField() {
    return cy.get("#company");
  }

  getAddressOneTextField() {
    return cy.get("#address1");
  }

  getAddressTwoTextField() {
    return cy.get("#address2");
  }

  getCountryDropDown() {
    return cy.get("#country");
  }

  getStateTextField() {
    return cy.get("#state");
  }

  getCityTextField() {
    return cy.get("#city");
  }

  getZipcodeTextField() {
    return cy.get("#zipcode");
  }

  getMobileNumberTextField() {
    return cy.get("#mobile_number");
  }

  getCreateAccountButton() {
    return cy.get('[data-qa="create-account"]');
  }
}
export default SignUpPageObjects;
