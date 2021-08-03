import React from "react";
class CategoryPlaceholderItem extends React.Component {
  render() {
    return (
      <li className="category__placeholder-item">{`${this.props.value}`}</li>
    );
  }
}
class PlaceholderSidebar extends React.Component {
  render() {
    return (
      <div className="category__placeholder">
        <ul className="category__placeholder-fixed">
          <CategoryPlaceholderItem value=" " />
          <CategoryPlaceholderItem value=" " />
          <CategoryPlaceholderItem value=" " />
          <CategoryPlaceholderItem value=" " />
          <CategoryPlaceholderItem value=" " />
          <CategoryPlaceholderItem value=" " />
        </ul>
      </div>
    );
  }
}
export default PlaceholderSidebar;
