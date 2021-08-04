import React from "react";

export default function Currency(props) {
  return (
    <span className={`currency ${props.className}`}>{`${props.value} ₫`}</span>
  );
}
