import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Main from "../Product/Main";
import CartContainer from "./CartContainer";
import PlaceholderSidebar from "../../placeholder/PlaceholderSidebar";
import PlaceholderProduct from "../../placeholder/PlaceholderProduct";
import Image from "../../common/Image";
import failData from "../../image/search.png";
import SearchProduct from "../Product/SearchProduct";
import AddToCart from "../AddToCard/AddToCart";

export default function Body(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [active, setActive] = useState(null);
  const [addProductFlag, setAddProductFlag] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [productInfoForCart, setProductInfoForCart] = useState([]);
  const [indexProductOrder, setIndexProductOrder] = useState([-1]);

  /////////////////////
  const addToCart = (data) => {
    let copyProductInfoForCart = [...productInfoForCart];

    if (indexProductOrder !== -1) {
      copyProductInfoForCart = copyProductInfoForCart.filter(
        (item, index) => index !== indexProductOrder
      );
      setProductInfoForCart(copyProductInfoForCart);
    }
    let flag = 1;
    copyProductInfoForCart.map((item) =>
      item.product_name === data.product_name &&
      item.size === data.size &&
      JSON.stringify(item.toppingCode) === JSON.stringify(data.toppingCode)
        ? ((item.amount += data.amount),
          (item.totalPrice += data.totalPrice),
          (flag *= -1))
        : (flag *= 1)
    );

    if (flag === 1) {
      props.getAmount([...copyProductInfoForCart, data]);

      setProductInfoForCart(
        [...copyProductInfoForCart, data].filter((item) => item.amount > 0)
      );

      // setItem LocalStorage
      localStorage.setItem(
        "productInfoForCart",
        JSON.stringify(
          [...copyProductInfoForCart, data].filter((item) => item.amount > 0)
        )
      );
    } else {
      // setItem LocalStorage
      localStorage.setItem(
        "productInfoForCart",
        JSON.stringify(copyProductInfoForCart)
      );
      props.getAmount([...copyProductInfoForCart]);
    }
    setIndexProductOrder(-1);
    setProductInfo(null);
  };
  /////////////////////

  const addProduct = (data) => {
    let products = {
      product_name: data.product_name,
      image: data.image,
      topping_list: data.topping_list,
      variants: data.variants,
      price: data.price,
    };
    setAddProductFlag(true);
    setProductInfo(products);
    setIndexProductOrder(-1);
  };
  /////////////////////

  const editProduct = (data, index) => {
    setAddProductFlag(true);
    setProductInfo(data);
    setIndexProductOrder(index);
  };
  /////////////////////

  const closeModal = () => {
    setAddProductFlag(false);
    setTimeout(() => {
      setProductInfo(null);
    }, 300);
  };
  /////////////////////

  const onchange = (e) => setSearchProduct(e.target.value);

  /////////////////////
  const merge = (categoryList, products) => {
    categoryList.map((category) => {
      let newData = [];
      products.map((product) => {
        if (product.categ_id.includes(category.id)) {
          newData.push(product);
        }
        return newData;
      });
      category.ListProduct = newData;
      return newData;
    });
    return categoryList;
  };

  /////////////////////

  const activeCategory = (id) => {
    setActive(id);
  };

  /////////////////////

  useEffect(() => {
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((products) => {
        if (products.status_code !== 500) {
          fetch("https://api.thecoffeehouse.com/api/v2/category/web")
            .then((res) => res.json())
            .then((categoryList) => {
              if (products.status_code !== 500) {
                let newData = merge(categoryList, products.data);
                setCategories(newData);
                setIsLoaded(false);
                setActive(newData[0].id);
              }
            })
            .catch((error) => {
              setIsLoaded(true);
              setError(error);
            });
        }
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });

    if (
      JSON.parse(localStorage.getItem("productInfoForCart")) &&
      JSON.parse(localStorage.getItem("productInfoForCart")).length > 0
    ) {
      setProductInfoForCart(
        JSON.parse(localStorage.getItem("productInfoForCart"))
      );
      props.getAmount(JSON.parse(localStorage.getItem("productInfoForCart")));
    }
  }, []);
  if (error) {
    return (
      <div className="failData">
        <Image src={failData} width="300" height="300" alt="no data" />
        <br /> Đường truyền dữ liệu có vấn đề. <br /> Vui lòng thử lại sau!
      </div>
    );
  } else
    return (
      <section className="main">
        {isLoaded ? (
          <PlaceholderSidebar />
        ) : (
          <Sidebar
            categories={categories}
            active={active}
            activeCategory={activeCategory}
          />
        )}
        <div className="products">
          {isLoaded ? (
            <PlaceholderProduct />
          ) : (
            <div>
              <SearchProduct onChange={onchange} />
              <div className="all__product">
                <Main
                  products={categories}
                  searchProduct={searchProduct}
                  active={active}
                  activeCategory={activeCategory}
                  onUpdateCartNumber={props.onUpdateCartNumber}
                  changeDeliveryCharge={props.changeDeliveryCharge}
                  addProduct={addProduct}
                />
              </div>
            </div>
          )}
        </div>
        <CartContainer
          deliveryCharge={props.deliveryCharge}
          productInfoForCart={productInfoForCart}
          editProduct={editProduct}
          deliveryChargeFlag={props.deliveryChargeFlag}
        />
        {productInfo !== null && (
          <AddToCart
            closeModal={closeModal}
            productInfo={productInfo}
            addToCart={addToCart}
            changeDeliveryChargeFlag={props.changeDeliveryChargeFlag}
          />
        )}
      </section>
    );
}
