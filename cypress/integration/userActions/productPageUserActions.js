import ProductsPageObjects from "../pageObjects/productPageObjects";
class ProductPageUserActions {

    clickViewCart(){
        this.productsPage.getViewCart().click();
    }

}
export default ProductPageUserActions