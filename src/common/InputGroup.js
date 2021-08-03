import React from "react";
import Input from "./Input";
class InputGroup extends React.Component {
  render() {
    return (
      <>
        <div className="input-group">
          <Input
            defaultChecked={this.props.defaultChecked}
            type={this.props.type}
            name={this.props.name}
            id={this.props.id}
            onClick={this.props.onClick}
          />
          <label htmlFor={this.props.id}>{this.props.value}</label>
        </div>
      </>
    );
  }
}

export default InputGroup;
