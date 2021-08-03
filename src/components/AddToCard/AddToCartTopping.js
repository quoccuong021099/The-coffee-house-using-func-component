import React from "react";
import InputGroup from "../../common/InputGroup";
class AddToCartBody extends React.Component {
  render() {
    const { productInfo, handlePrices, toppingName } = this.props;
    return (
      <>
        <div className="add-to-cart__topping">
          <p>Topping -</p>
          {productInfo.topping_list.map((item, index) => (
            <InputGroup
              key={item.code}
              type="checkbox"
              name={item.id}
              defaultChecked={
                toppingName.includes(item.product_name) ? "checked" : null
              }
              id={item.code}
              value={`${item.product_name} (+${item.price}₫)`}
              onClick={() => handlePrices(item, index)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default AddToCartBody;
