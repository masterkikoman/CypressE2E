class HomePageObjects {
  getSignUpLogInButton() {
    return cy.get('[href="/login"]');
  }

  getUserName() {
    return cy.get(".nav.navbar-nav > li > a > b");
  }

  getDeleteAccount() {
    return cy.get('[href="/delete_account"]');
  }

  getContactUsButton(){
    return cy.get('[href="/contact_us"]')
  }
}
export default HomePageObjects;
