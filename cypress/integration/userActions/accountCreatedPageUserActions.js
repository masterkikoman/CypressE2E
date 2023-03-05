import AccountCreatedPageObjects from "../pageObjects/accountCreatedPageObjects";

class AccountCreatedPageUserActions {
  clickContinueButton() {
    const accountCreatedActions = new AccountCreatedPageObjects();
    accountCreatedActions.getContinueButton().click();
  }
}
export default AccountCreatedPageUserActions;
