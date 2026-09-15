import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productList = new ProductList("tents", dataSource, listElement);

productList.init().catch(() => {
  listElement.innerHTML =
    "<li>Unable to load products. Please try again later.</li>";
});
