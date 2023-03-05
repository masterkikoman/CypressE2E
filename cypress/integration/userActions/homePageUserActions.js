import HomePageObjects from "../pageObjects/homePageObjects";
class HomePageUserActions {
  homepageActions = new HomePageObjects();
  clickSignupLoginButton() {
    this.homepageActions.getSignUpLogInButton().click();
  }

  clickDeleteAccount() {
    this.homepageActions.getDeleteAccount().click();
  }
}
export default HomePageUserActions;
