import React from "react";
import ProductItem from "./ProductItem";
class ProductContainer extends React.Component {
  render() {
    const { category, searchProduct,  addProduct } = this.props;
    const filteredProduct = category.ListProduct.filter((i) => {
      return i.product_name.toLowerCase().includes(searchProduct.toLowerCase());
    });
    if (filteredProduct.length === 0) return null;

    return (
      <>
        <ul className="product" id={`${category.id}`}>
          <span> {category.name} </span>
          {filteredProduct.map((filteredItem) => (
            <ProductItem
              filteredItem={filteredItem}
              key={filteredItem._id}
              addProduct={addProduct}
              
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ProductContainer;
