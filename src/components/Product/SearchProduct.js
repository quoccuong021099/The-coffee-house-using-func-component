import React from "react";
import Input from "../../common/Input";

export default function SearchProduct(props) {
  return (
    <div className="form-group" id="SearchProduct">
      <svg
        className="search__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          fill="none"
          stroke="#c5c5c5"
          strokeWidth="1.1"
          cx="9"
          cy="9"
          r="7"
        ></circle>
        <path
          fill="none"
          stroke="#c5c5c5"
          strokeWidth="1.1"
          d="M14,14 L18,18 L14,14 Z"
        ></path>
      </svg>
      <Input
        type="text"
        className="input-search"
        placeholder="Tìm kiếm sản phẩm"
        onChange={props.onChange}
      />
    </div>
  );
}
