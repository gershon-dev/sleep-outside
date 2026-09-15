import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init().catch(() => {
  document.querySelector(".product-detail").innerHTML =
    '<p>Unable to load this product. Please try again later.</p><a href="/">Browse our products</a>';
});
