import HomePageObjects from "../pageObjects/homePageObjects";
class HomePageUserActions {
  homepageActions = new HomePageObjects();
  clickSignupLoginButton() {
    this.homepageActions.getSignUpLogInButton().click();
  }

  clickDeleteAccount() {
    this.homepageActions.getDeleteAccount().click();
  }

  clickContactUs() {
    this.homepageActions.getContactUsButton().click();
  }

  clickProducts() {
    this.homepageActions.getProductsButton().click();
  }
}
export default HomePageUserActions;
