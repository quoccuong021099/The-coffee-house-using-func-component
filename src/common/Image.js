import React from "react";

class Image extends React.Component {
  render() {
    return (
      <img className={this.props.className} src={this.props.src} width={this.props.width} height={this.props.height} alt={this.props.alt} />
    );
  }
}

export default Image;
