import React from "react";

export default function AddButton(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onAddButton}
      style={{ cursor: "pointer" }}
    >
      <circle
        fill="none"
        stroke="#ea8025"
        strokeWidth="1.1"
        cx="9.5"
        cy="9.5"
        r="9"
      ></circle>
      <line
        fill="none"
        stroke="#ea8025"
        x1="9.5"
        y1="5"
        x2="9.5"
        y2="14"
      ></line>
      <line
        fill="none"
        stroke="#ea8025"
        x1="5"
        y1="9.5"
        x2="14"
        y2="9.5"
      ></line>
    </svg>
  );
}
