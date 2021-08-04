import React from "react";
import InputGroup from "../../common/InputGroup";

export default function AddToCartTopping(props) {
  return (
    <div className="add-to-cart__topping">
      <p>Topping -</p>
      {props.productInfo.topping_list.map((item, index) => (
        <InputGroup
          key={item.code}
          type="checkbox"
          name={item.id}
          defaultChecked={
            props.toppingName.includes(item.product_name) ? "checked" : null
          }
          id={item.code}
          value={`${item.product_name} (+${item.price}₫)`}
          onClick={() => props.handlePrices(item, index)}
        />
      ))}
    </div>
  );
}
