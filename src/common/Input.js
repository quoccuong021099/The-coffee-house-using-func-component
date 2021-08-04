import React from "react";

export default function Input(props) {
  return (
    <input
      defaultChecked={props.defaultChecked}
      className={`input ${props.className}`}
      id={props.id}
      type={`${props.type}`}
      placeholder={`${props.placeholder}`}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown}
      hidden={props.hidden}
      min={props.min}
    />
  );
}
