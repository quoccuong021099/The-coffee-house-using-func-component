import React from "react";
import AddButton from "../../common/AddButton";
import Image from "../../common/Image";
import Currency from "../../common/Currency";

export default function ProductItem(props) {
  return (
    <li
      className="product__item "
      onClick={() => props.addProduct(props.filteredItem)}
    >
      <ul className="product__list">
        <li className="product__list-item">
          <a href="#a" className="product__list-link">
            <Image src={props.filteredItem.image} width="80" height="80" />
            <div className="product__info">
              <h2>{props.filteredItem.product_name}</h2>
              <p>{props.filteredItem.description}</p>
              <div className="product__price">
                <Currency value={props.filteredItem.price} />
                <AddButton width="30" height="30" />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </li>
  );
}
