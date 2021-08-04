import React from "react";

export default function DropdownItem(props) {
  return (
    <li>
      <span className="input-icon-dropdown">
        <img
          src="https://order.thecoffeehouse.com/img/icon/location.png"
          alt=""
        />
      </span>
      <a href="#a" onClick={props.fullAddress}>
        <h3 className="dropdown-menu-title">{props.address.title_address}</h3>
        <p>{props.address.full_address}</p>
      </a>
    </li>
  );
}
