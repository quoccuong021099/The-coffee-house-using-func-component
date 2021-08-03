import React from "react";
import AddButton from "../../common/AddButton";
import Image from "../../common/Image";
import Currency from "../../common/Currency";
class ProductItem extends React.Component {
  render() {
    const { filteredItem, addProduct } = this.props;
    return (
      <li className="product__item " onClick={() => addProduct(filteredItem)}>
        <ul className="product__list">
          <li className="product__list-item">
            <a href="#a" className="product__list-link">
              <Image src={filteredItem.image} width="80" height="80" />
              <div className="product__info">
                <h2>{filteredItem.product_name}</h2>
                <p>{filteredItem.description}</p>
                <div className="product__price">
                  <Currency value={filteredItem.price} />
                  <AddButton width="30" height="30" />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

export default ProductItem;
