import HomePageObjects from "../pageObjects/homePageObjects.js";
class HomePageValidations {
  homePageValidations = new HomePageObjects();
  getHomePageValidation() {
    cy.url().should("eq", "https://automationexercise.com/");
  }

  getUserName(value) {
    this.homePageValidations.getUserName().should("have.text", value);
  }

  getLoginUrl() {
    cy.url().should("eq", "https://automationexercise.com/login");
  }
}
export default HomePageValidations;
