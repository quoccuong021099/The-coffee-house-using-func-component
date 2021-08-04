import React from "react";
import Input from "./Input";

export default function InputGroup(props) {
  return (
    <>
      <div className="input-group">
        <Input
          defaultChecked={props.defaultChecked}
          type={props.type}
          name={props.name}
          id={props.id}
          onClick={props.onClick}
        />
        <label htmlFor={props.id}>{props.value}</label>
      </div>
    </>
  );
}
