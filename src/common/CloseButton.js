import React from "react";
class CloseButton extends React.Component {
  render() {
    return (
      <>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
          onClick={this.props.closeModal}
          style={{cursor:"pointer"}}
        >
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.1"
            x1="1"
            y1="1"
            x2="13"
            y2="13"
          ></line>
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.1"
            x1="13"
            y1="1"
            x2="1"
            y2="13"
          ></line>
        </svg>
      </>
    );
  }
}

export default CloseButton;
