import React from "react";
import ProductContainer from "./ProductContainer";
import Image from "../../common/Image";
import searchNotFound from "../../image/search.png";
class Main extends React.Component {
  onScrollCategory = () => {
    let windowScrollY = window.scrollY;
    let $ = document.getElementById.bind(document);
    let selector = document.querySelectorAll(".product");
    selector.forEach((i) =>
      $(i.id).offsetTop <= windowScrollY &&
      windowScrollY <= $(i.id).offsetTop + $(i.id).offsetHeight
        ? this.changeActive(i.id)
        : null
    );
  };

  changeActive = (data) => {
    let selectorActiveCategory = document.querySelectorAll(".active-category");
    if (selectorActiveCategory.length > 0) {
      document
        .querySelector(".active-category")
        .classList.remove("active-category");
    }
    document.getElementById(`add${data}`).classList.add("active-category");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScrollCategory);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollCategory);
  }

  render() {
    const { searchProduct, products, addProduct } = this.props;

    let dataProduct = [];

    products.map(
      (item) =>
        item.ListProduct.length > 0 && dataProduct.push(item.ListProduct)
    );

    let dataProductFilter = dataProduct.map((item) =>
      item.filter((i) =>
        i.product_name.toLowerCase().includes(searchProduct.toLowerCase())
      )
    );
    let result = dataProductFilter.some((item) => item.length > 0);
    if (!result) {
      return (
        <div className="none_product">
          <Image src={searchNotFound} width="300" height="300" alt="no data" />
          <p>
            Rất tiếc chúng tôi không tìm <br /> thấy sản phẩm!
          </p>
        </div>
      );
    } else
      return (
        <>
          {products.map(
            (category) =>
              category.ListProduct.length !== 0 && (
                <ProductContainer
                  id={category.id}
                  category={category}
                  key={category._id}
                  searchProduct={searchProduct}
                  addProduct={addProduct}
                />
              )
          )}
        </>
      );
  }
}

export default Main;
