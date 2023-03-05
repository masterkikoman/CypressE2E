import DeleteAccountPageObjects from "../pageObjects/deleteAccountPageObjects";
class DeleteAccountUserActions {
  deleteAccountActions = new DeleteAccountPageObjects();
  clickContinueButton() {
    this.deleteAccountActions.getContinueButton().click();
  }
}
export default DeleteAccountUserActions;
