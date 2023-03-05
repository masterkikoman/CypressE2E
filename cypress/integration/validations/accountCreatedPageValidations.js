import AccountCreatedPageObjects from "../pageObjects/accountCreatedPageObjects";

class AccountCreatedPageValidations {
  accountCreatedValidation = new AccountCreatedPageObjects();
  verifyAccountCreatedMessage() {
    this.accountCreatedValidation
      .getSuccessMessage()
      .should("have.text", "Account Created!");
  }
}
export default AccountCreatedPageValidations;
