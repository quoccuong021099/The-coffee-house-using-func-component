import React from "react";

class DropdownItem extends React.Component {
  render() {
    const { address } = this.props;
    return (
      <li>
        <span className="input-icon-dropdown">
          <img
            src="https://order.thecoffeehouse.com/img/icon/location.png"
            alt=""
          />
        </span>
        <a href="#a" onClick={this.props.fullAddress}>
          <h3 className="dropdown-menu-title">{address.title_address}</h3>
          <p>{address.full_address}</p>
        </a>
      </li>
    );
  }
}
export default DropdownItem;
