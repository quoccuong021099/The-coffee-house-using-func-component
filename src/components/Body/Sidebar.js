import React from "react";
class Sidebar extends React.Component {
  render() {
    return (
      <div className="category">
        <ul className="category-fixed">
          {this.props.categories.map((category) =>
            category.ListProduct.length !== 0 ? (
              <li
                id={`add${category.id}`}
                className={
                  category.id === this.props.active
                    ? "category__item active-category"
                    : "category__item "
                }
                key={category._id}
              >
                <a className="category__item-link" href={`#${category.id}`}>
                  {category.name}
                </a>
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  }
}
export default Sidebar;
