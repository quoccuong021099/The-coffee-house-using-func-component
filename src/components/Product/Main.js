import React, { useEffect } from "react";
import ProductContainer from "./ProductContainer";
import Image from "../../common/Image";
import searchNotFound from "../../image/search.png";

export default function Main(props) {
  useEffect(() => {
    window.addEventListener("scroll", onScrollCategory);
    return () => {
      window.removeEventListener("scroll", onScrollCategory);
    };
  }, []);

  const onScrollCategory = () => {
    let windowScrollY = window.scrollY;
    let $ = document.getElementById.bind(document);
    let selector = document.querySelectorAll(".product");
    selector.forEach((i) =>
      $(i.id).offsetTop <= windowScrollY &&
      windowScrollY <= $(i.id).offsetTop + $(i.id).offsetHeight
        ? changeActive(i.id)
        : null
    );
  };

  const changeActive = (data) => {
    let selectorActiveCategory = document.querySelectorAll(".active-category");
    if (selectorActiveCategory.length > 0) {
      document
        .querySelector(".active-category")
        .classList.remove("active-category");
    }
    document.getElementById(`add${data}`).classList.add("active-category");
  };

  let dataProduct = [];

  props.products.map(
    (item) => item.ListProduct.length > 0 && dataProduct.push(item.ListProduct)
  );

  let dataProductFilter = dataProduct.map((item) =>
    item.filter((i) =>
      i.product_name.toLowerCase().includes(props.searchProduct.toLowerCase())
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
        {props.products.map(
          (category) =>
            category.ListProduct.length !== 0 && (
              <ProductContainer
                id={category.id}
                category={category}
                key={category._id}
                searchProduct={props.searchProduct}
                addProduct={props.addProduct}
              />
            )
        )}
      </>
    );
}
