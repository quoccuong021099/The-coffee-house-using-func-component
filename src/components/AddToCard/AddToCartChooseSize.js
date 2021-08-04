import React from "react";
import InputGroup from "../../common/InputGroup";

export default function AddToCartChooseSize(props) {
  return (
    <>
      <div className="add-to-cart__size">
        <p>Loại</p>
        <p>Size -</p>
        <div className="choose-size">
          {props.productInfo.variants &&
            props.productInfo.variants.map((item) => (
              <InputGroup
                defaultChecked={item.val === props.size ? "checked" : null}
                type="radio"
                id={item.code}
                key={item.code}
                name="radio"
                onClick={() => props.handleSize(item)}
                value={`${item.val} (+${
                  item.price - props.productInfo.variants[0].price
                } ₫)`}
              />
            ))}
        </div>
      </div>
    </>
  );
}
