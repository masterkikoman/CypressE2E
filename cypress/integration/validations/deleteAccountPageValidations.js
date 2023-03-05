import DeleteAccountPageObjects from "../pageObjects/deleteAccountPageObjects";

class DeleteAccountPageValidations {
  deleteAccountValidations = new DeleteAccountPageObjects();
  VerifyAccountDeleted() {
    this.deleteAccountValidations
      .getDeleteAccountText()
      .should("have.text", "Account Deleted!");
  }
}
export default DeleteAccountPageValidations;
