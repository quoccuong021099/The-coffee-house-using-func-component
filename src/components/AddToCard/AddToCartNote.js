import React from "react";
import Input from "../../common/Input";
import NoteIcon from "../../common/NoteIcon";
class AddToCartBody extends React.Component {
  render() {
    return (
      <>
        <div className="add-to-cart__note">
          <span className="add-to-cart__note-icon">
            <NoteIcon />
          </span>
          <Input type="text" placeholder="Thêm ghi chú món này" onChange={this.props.getValueNoteProduct}/>
        </div>
      </>
    );
  }
}

export default AddToCartBody;
