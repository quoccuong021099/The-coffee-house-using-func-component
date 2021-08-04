import React from "react";

export default function Image(props) {
  return (
    <img
      className={props.className}
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
}
