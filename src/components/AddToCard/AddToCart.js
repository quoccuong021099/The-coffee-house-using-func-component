import React from "react";
import Button from "../../common/Button";
import SubtractButton from "../../common/SubtractButton";
import AddButton from "../../common/AddButton";
import AddToCartChooseSize from "./AddToCartChooseSize";
import AddToCartTopping from "./AddToCartTopping";
import AddToCartNote from "./AddToCartNote";
import Image from "../../common/Image";
import CloseButton from "../../common/CloseButton";
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.productInfo.variants[0].val,
      price: this.props.productInfo.variants[0].price,
      amount: 1,
      toppingPrice: 0,
      toppingName: "",
      toppingCode: [],
    };
  }

  onSubtractButton = () => {
    if (this.state.amount > 0)
      this.setState({
        amount: this.state.amount - 1,
      });
  };
  onAddButton = () => {
    this.setState({
      amount: this.state.amount + 1,
    });
  };

  handlePrices = (data, index) => {
    let price = document.getElementById(data.code);

    if (price.checked) {
      let indexTopping = this.state.toppingCode.splice(index, 0, data.code);
      this.setState({
        toppingPrice: this.state.toppingPrice + data.price,
        toppingName: this.state.toppingName.concat(` ${data.product_name} +`),
        toppingCode: [...this.state.toppingCode, indexTopping],
        // [...this.state.toppingCode, data.code],
      });
    } else {
      this.setState({
        toppingPrice: this.state.toppingPrice - data.price,
        toppingName: this.state.toppingName.replace(
          ` ${data.product_name} +`,
          ""
        ),
        toppingCode: this.state.toppingCode.splice(index, 1, data.code),
      });
    }
  };
  handleSize = (item) => {
    this.setState({
      size: item.val,
      price: item.price,
    });
  };
  componentDidMount() {
    const { productInfo } = this.props;
    if (
      productInfo.size !== undefined &&
      productInfo.amount !== undefined &&
      productInfo.toppingName !== undefined &&
      productInfo.toppingPrice !== undefined &&
      productInfo.toppingPrice !== undefined &&
      productInfo.toppingCode !== undefined
    ) {
      this.setState({
        amount: productInfo.amount,
        size: productInfo.size,
        toppingName: productInfo.toppingName,
        toppingPrice: productInfo.toppingPrice,
        price: productInfo.price,
        toppingCode: productInfo.toppingCode,
      });
    }
  }
  render() {
    const { productInfo, closeModal } = this.props;
    const { toppingName, toppingCode, toppingPrice, price, size, amount } =
      this.state;
    let productInCart = {
      product_name: productInfo.product_name,
      toppingName: toppingName,
      toppingCode: toppingCode,
      toppingPrice: toppingPrice,
      topping_list: productInfo.topping_list,
      size: size,
      image: productInfo.image,
      variants: productInfo.variants,
      amount: amount,
      totalPrice: amount * (price + toppingPrice),
      price: this.state.price,
    };
    return (
      <>
        <div className={`overlay`} onClick={this.props.closeModal}></div>
        <div className={`add-to-cart ${this.props.className}`}>
          {/* ////////////////////////////////////////////////////////// */}
          {/* HEADER MODAL*/}
          <div className="add-to-cart__header">
            <div className="add-to-cart__header-left">
              <Image
                src={productInfo.image}
                width="80"
                height="80"
                alt="Product image"
              />
              <div className="add-to-cart__header-info">
                <h3>{productInfo.product_name}</h3>
                <p>{size}</p>
                <p>{toppingName.slice(0, -2)}</p>
              </div>
            </div>
            <div className="add-to-cart__header-right">
              <CloseButton closeModal={this.props.closeModal} />
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////// */}
          {/* BODY MODAL*/}
          <div className="add-to-cart__body">
            <AddToCartChooseSize
              productInfo={productInfo}
              handleSize={this.handleSize}
              size={size}
            />
            {productInfo.topping_list !== undefined &&
            productInfo.topping_list.length > 0 ? (
              <AddToCartTopping
                productInfo={productInfo}
                handlePrices={this.handlePrices}
                toppingName={toppingName}
              />
            ) : null}
            <AddToCartNote />
          </div>

          {/* ////////////////////////////////////////////////////////// */}
          {/* FOOTER MODAL*/}
          <div className="add-to-cart__footer">
            <div className="add-to-cart__amount">
              <SubtractButton
                width="36"
                height="36"
                onSubtractButton={this.onSubtractButton}
              />
              <span>{amount}</span>
              <AddButton
                width="36"
                height="36"
                onAddButton={this.onAddButton}
              />
            </div>
            <div>
              <div onClick={this.props.changeDeliveryChargeFlag}>
                <div className="add-to-cart__submit" onClick={closeModal}>
                  <Button
                    className="add-to-cart__btn-submit"
                    type="submit"
                    value={`THÊM VÀO GIỎ ${amount * (price + toppingPrice)} ₫`}
                    onClick={() => this.props.addToCart(productInCart)}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddToCart;
