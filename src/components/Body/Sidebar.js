import React from "react";

export default function Sidebar(props) {
  return (
    <div className="category">
      <ul className="category-fixed">
        {props.categories.map((category) =>
          category.ListProduct.length !== 0 ? (
            <li
              id={`add${category.id}`}
              className={
                category.id === props.active
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
