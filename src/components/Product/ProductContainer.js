import React from "react";
import ProductItem from "./ProductItem";

export default function ProductContainer(props) {
  const filteredProduct = props.category.ListProduct.filter((i) => {
    return i.product_name
      .toLowerCase()
      .includes(props.searchProduct.toLowerCase());
  });
  if (filteredProduct.length === 0) return null;

  return (
    <ul className="product" id={`${props.category.id}`}>
      <span> {props.category.name} </span>
      {filteredProduct.map((filteredItem) => (
        <ProductItem
          filteredItem={filteredItem}
          key={filteredItem._id}
          addProduct={props.addProduct}
        />
      ))}
    </ul>
  );
}
