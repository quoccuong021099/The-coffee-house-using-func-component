import React, { useEffect, useState } from "react";
import AddButton from "../../common/AddButton";
import Button from "../../common/Button";
import CloseButton from "../../common/CloseButton";
import Image from "../../common/Image";
import SubtractButton from "../../common/SubtractButton";
import AddToCartChooseSize from "./AddToCartChooseSize";
import AddToCartNote from "./AddToCartNote";
import AddToCartTopping from "./AddToCartTopping";

export default function AddToCart(props) {
  const [size, setSize] = useState(props.productInfo.variants[0].val);
  const [price, setPrice] = useState(props.productInfo.variants[0].price);
  const [amount, setAmount] = useState(1);
  const [toppingPrice, settoppingPrice] = useState(0);
  const [toppingName, setToppingName] = useState("");
  const [toppingCode, setToppingCode] = useState([]);

  const onSubtractButton = () => {
    if (amount > 0) setAmount(amount - 1);
  };
  const onAddButton = () => {
    setAmount(amount + 1);
  };

  const handleSize = (item) => {
    setSize(item.val);
    setPrice(item.price);
  };

  const handlePrices = (data, index) => {
    let price = document.getElementById(data.code);

    if (price.checked) {
      let indexTopping = toppingCode.splice(index, 0, data.code);
      settoppingPrice(toppingPrice + data.price);
      setToppingName(toppingName.concat(` ${data.product_name} +`));
      setToppingCode([...toppingCode, indexTopping]);
    } else {
      settoppingPrice(toppingPrice - data.price);
      setToppingName(toppingName.replace(` ${data.product_name} +`, ""));
      setToppingCode(toppingCode.splice(index, 1, data.code));
    }
  };

  useEffect(() => {
    if (
      props.productInfo.size !== undefined &&
      props.productInfo.amount !== undefined &&
      props.productInfo.toppingName !== undefined &&
      props.productInfo.toppingPrice !== undefined &&
      props.productInfo.toppingPrice !== undefined &&
      props.productInfo.toppingCode !== undefined
    ) {
      setAmount(props.productInfo.amount);
      setSize(props.productInfo.size);
      setToppingName(props.productInfo.toppingName);
      settoppingPrice(props.productInfo.toppingPrice);
      setPrice(props.productInfo.price);
      setToppingCode(props.productInfo.toppingCode);
    }
  }, []);

  let productInCart = {
    product_name: props.productInfo.product_name,
    toppingName: toppingName,
    toppingCode: toppingCode,
    toppingPrice: toppingPrice,
    topping_list: props.productInfo.topping_list,
    size: size,
    image: props.productInfo.image,
    variants: props.productInfo.variants,
    amount: amount,
    totalPrice: amount * (price + toppingPrice),
    price: price,
  };
  return (
    <>
      <div className={`overlay`} onClick={props.closeModal}></div>
      <div className={`add-to-cart ${props.className}`}>
        {/* ////////////////////////////////////////////////////////// */}
        {/* HEADER MODAL*/}
        <div className="add-to-cart__header">
          <div className="add-to-cart__header-left">
            <Image
              src={props.productInfo.image}
              width="80"
              height="80"
              alt="Product image"
            />
            <div className="add-to-cart__header-info">
              <h3>{props.productInfo.product_name}</h3>
              <p>{size}</p>
              <p>{toppingName.slice(0, -2)}</p>
            </div>
          </div>
          <div className="add-to-cart__header-right">
            <CloseButton closeModal={props.closeModal} />
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////// */}
        {/* BODY MODAL*/}
        <div className="add-to-cart__body">
          <AddToCartChooseSize
            productInfo={props.productInfo}
            handleSize={handleSize}
            size={size}
          />
          {props.productInfo.topping_list !== undefined &&
          props.productInfo.topping_list.length > 0 ? (
            <AddToCartTopping
              productInfo={props.productInfo}
              handlePrices={handlePrices}
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
              onSubtractButton={onSubtractButton}
            />
            <span>{amount}</span>
            <AddButton width="36" height="36" onAddButton={onAddButton} />
          </div>
          <div>
            <div onClick={props.changeDeliveryChargeFlag}>
              <div className="add-to-cart__submit" onClick={props.closeModal}>
                <Button
                  className="add-to-cart__btn-submit"
                  type="submit"
                  value={`THÊM VÀO GIỎ ${amount * (price + toppingPrice)} ₫`}
                  onClick={() => props.addToCart(productInCart)}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
