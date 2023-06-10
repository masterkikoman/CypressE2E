import CheckoutPageObjects from "../pageObjects/checkoutPageObjects"

class CheckoutPageUserActions {
    constructor() {
        this.checkoutPage = new CheckoutPageObjects();
      }
      sumOfAllItems() {
        var sum = 0;
        return this.checkoutPage.getTotalPricePerItem().each(($amount, index, $list) => {
          const value = $amount.text();
          var tempAmount = value.split(" ")[1].trim();
          sum += Number(tempAmount);
        }).then(() => {
          return cy.wrap(sum);
        });
      }
 
    totalAmount() {
        var totalAmountProd = 0;
        return this.checkoutPage.getTotalAmount().then((totalText) => {
          const tempTot = totalText.text();
          totalAmountProd = tempTot.split(" ")[1].trim();
          return Number(totalAmountProd);
        });
      }
    
}
export default CheckoutPageUserActions