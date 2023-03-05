class AccountCreatedPageObjects {
  getSuccessMessage() {
    return cy.get('[data-qa="account-created"] > b');
  }

  getContinueButton() {
    return cy.get('[data-qa="continue-button"]');
  }
}
export default AccountCreatedPageObjects;
