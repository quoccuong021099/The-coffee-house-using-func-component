import React from "react";
class PlaceholderItem extends React.Component {
  render() {
    return(
      <div>
        <li className="product__placeholder-item">
          <ul className="product__placeholder-list">
            <li className="product__placeholder-list-item">
              <a href="#a" className="product__list-link">
                <div className="image" ></div>
                <div className="product__placeholder-info">
                  
                </div>
              </a>
            </li>
          </ul>
        </li>
      </div>
    );
  }
}
class PlaceholderProduct extends React.Component {
  render() {
    return (
      <ul className="product">
          <span></span>
        <PlaceholderItem  />
        <PlaceholderItem  />
        <PlaceholderItem  />
        <PlaceholderItem  />
        <PlaceholderItem  />
        <PlaceholderItem  />
        <PlaceholderItem  />
        <PlaceholderItem  />
      </ul>
    );
  }
}

export default PlaceholderProduct;
