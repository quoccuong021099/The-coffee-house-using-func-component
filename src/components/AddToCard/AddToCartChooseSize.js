import React from "react";
import InputGroup from "../../common/InputGroup";
class ChooseSize extends React.Component {
  render() {
    const { productInfo, handleSize, size } = this.props;
    return (
      <>
        <div className="add-to-cart__size">
          <p>Loại</p>
          <p>Size -</p>
          <div className="choose-size">
            {productInfo.variants &&
              productInfo.variants.map((item) => (
                <InputGroup
                  defaultChecked={item.val === size ? "checked" : null}
                  type="radio"
                  id={item.code}
                  key={item.code}
                  name="radio"
                  onClick={() => handleSize(item)}
                  value={`${item.val} (+${
                    item.price - productInfo.variants[0].price
                  } ₫)`}
                /> 
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default ChooseSize;
