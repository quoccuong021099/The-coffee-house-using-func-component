/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import Sidebar from "./Sidebar";
import Main from "../Product/Main";
import CartContainer from "./CartContainer";
import PlaceholderSidebar from "../../placeholder/PlaceholderSidebar";
import PlaceholderProduct from "../../placeholder/PlaceholderProduct";
import Image from "../../common/Image";
import failData from "../../image/search.png";
import SearchProduct from "../Product/SearchProduct";
import AddToCart from "../AddToCard/AddToCart";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      categories: [],
      searchProduct: "",
      active: null,
      addProductFlag: false,
      productInfo: null,
      productInfoForCart: [],
      indexProductOrder: -1,
    };
  }

  addToCart = (data) => {
    let { productInfoForCart } = this.state;

    let copyProductInfoForCart = [...productInfoForCart];

    if (this.state.indexProductOrder !== -1) {
      copyProductInfoForCart = copyProductInfoForCart.filter(
        (item, index) => index !== this.state.indexProductOrder
      );
      this.setState({
        productInfoForCart: copyProductInfoForCart,
      });
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
      // setItem LocalStorage
      localStorage.setItem(
        "productInfoForCart",
        JSON.stringify(
          [...copyProductInfoForCart, data].filter((item) => item.amount > 0)
        )
      );

      this.setState({
        productInfoForCart: [...copyProductInfoForCart, data].filter(
          (item) => item.amount > 0
        ),
      });

      this.props.getAmount([...copyProductInfoForCart, data]);
    } else {
      // setItem LocalStorage
      localStorage.setItem(
        "productInfoForCart",
        JSON.stringify(copyProductInfoForCart)
      );
    }

    this.setState({
      optionBoxClose: false,
      indexProductOrder: -1,
      productInfo: null,
    });
  };

  /////////////////////
  addProduct = (data) => {
    let products = {
      product_name: data.product_name,
      image: data.image,
      topping_list: data.topping_list,
      variants: data.variants,
      price: data.price,
    };
    this.setState({
      addProductFlag: true,
      productInfo: products,
      indexProductOrder: -1,
    });
  };
  /////////////////////

  editProduct = (data, index) => {
    this.setState({
      addProductFlag: true,
      productInfo: data,
      indexProductOrder: index,
    });
  };
  /////////////////////

  closeModal = () => {
    this.setState({
      addProductFlag: false,
    });
    setTimeout(() => {
      this.setState({
        productInfo: null,
      });
    }, 300);
  };
  /////////////////////

  onchange = (e) => this.setState({ searchProduct: e.target.value });
  /////////////////////

  merge = (categoryList, products) => {
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

  activeCategory = (id) => {
    this.setState({
      active: id,
    });
  };

  /////////////////////
  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((products) => {
        if (products.status_code !== 500) {
          fetch("https://api.thecoffeehouse.com/api/v2/category/web")
            .then((res) => res.json())
            .then((categoryList) => {
              if (products.status_code !== 500) {
                let newData = this.merge(categoryList, products.data);
                this.setState({
                  categories: newData,
                  isLoaded: false,
                  active: newData[0].id,
                });
              }
            })
            .catch((error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            });
        }
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });

    if (
      JSON.parse(localStorage.getItem("productInfoForCart")) &&
      JSON.parse(localStorage.getItem("productInfoForCart")).length > 0
    ) {
      this.setState({
        productInfoForCart: JSON.parse(
          localStorage.getItem("productInfoForCart")
        ),
      });
      this.props.getAmount(
        JSON.parse(localStorage.getItem("productInfoForCart"))
      );
    }
  }
  /////////////////////

  render() {
    const {
      isLoaded,
      categories,
      error,
      searchProduct,
      active,
      productInfo,
      productInfoForCart,
    } = this.state;
    const { onUpdateCartNumber, deliveryCharge, changeDeliveryCharge } =
      this.props;
    if (error) {
      return (
        <div className="failData">
          <Image src={failData} width="300" height="300" alt="no data" />
          <br /> Đường truyền dữ liệu có vấn đề. <br /> Vui lòng thử lại sau!
        </div>
      );
    } else {
      return (
        <section className="main">
          {isLoaded ? (
            <PlaceholderSidebar />
          ) : (
            <Sidebar
              categories={categories}
              active={active}
              activeCategory={this.activeCategory}
            />
          )}
          <div className="products">
            {isLoaded ? (
              <PlaceholderProduct />
            ) : (
              <div>
                <SearchProduct onChange={this.onchange} />
                <div className="all__product">
                  <Main
                    products={categories}
                    searchProduct={searchProduct}
                    active={active}
                    activeCategory={this.activeCategory}
                    onUpdateCartNumber={onUpdateCartNumber}
                    changeDeliveryCharge={changeDeliveryCharge}
                    addProduct={this.addProduct}
                  />
                </div>
              </div>
            )}
          </div>
          <CartContainer
            deliveryCharge={deliveryCharge}
            productInfoForCart={productInfoForCart}
            editProduct={this.editProduct}
            deliveryChargeFlag={this.props.deliveryChargeFlag}
          />
          {productInfo !== null && (
            <AddToCart
              closeModal={this.closeModal}
              productInfo={productInfo}
              addToCart={this.addToCart}
              changeDeliveryChargeFlag={this.props.changeDeliveryChargeFlag}
            />
          )}
        </section>
      );
    }
  }
}

export default Body;
