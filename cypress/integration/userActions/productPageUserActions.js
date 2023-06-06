import ProductsPageObjects from "../pageObjects/productPageObjects";
class ProductPageUserActions {
    productsPage = new ProductsPageObjects()
    clickViewCart(){
        this.productsPage.getViewCart().click();
    }

}
export default ProductPageUserActions