import React from "react";
import Input from "../../common/Input";
import NoteIcon from "../../common/NoteIcon";

export default function AddToCartNote({ getValueNoteProduct   }) {
  return (
    <div className="add-to-cart__note">
      <span className="add-to-cart__note-icon">
        <NoteIcon />
      </span>
      <Input
        type="text"
        placeholder="Thêm ghi chú món này"
        onChange={getValueNoteProduct}
      />
    </div>
  );
}
