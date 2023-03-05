class DeleteAccountPageObjects {
  getDeleteAccountText() {
    return cy.get('[data-qa="account-deleted"] > b');
  }

  getContinueButton() {
    return cy.get('[data-qa="continue-button"]');
  }
}
export default DeleteAccountPageObjects;
