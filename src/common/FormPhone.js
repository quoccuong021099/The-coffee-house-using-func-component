import React from "react";
import "../assets/login.css";
import Button from "../common/Button";
import Image from "../common/Image";
import Input from "../common/Input";
import Vn from "../image/vn.png";

export default function FormPhone(props) {
  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  return (
    <form className="form-control-login" onSubmit={props.handleSubmitPhone}>
      <div className="number">
        <Image src={Vn} width="36" height="24" />
        <span>+84</span>
      </div>
      <Input
        className="input-phone-login"
        placeholder="Nhập số điện thoại của bạn"
        type="number"
        onChange={props.handleChangePhoneNumber}
        onKeyDown={blockInvalidChar}
        min="0"
        value={props.phoneNumberValue !== null && props.phoneNumberValue}
      />
      {props.phoneNumberValue &&
        (props.phoneNumberValue.length < 9 ||
          props.phoneNumberValue.length > 11) && (
          <span className="error">Giá trị nằm trong khoảng 9-11 số!</span>
        )}
      {(props.submitPhoneFlag || props.phoneNumberValue === "") && (
        <span className="error">Không được để trống trường này</span>
      )}
      <Button
        className="btn-login"
        type="button"
        value={props.value}
        disabled={
          !props.phoneNumberValue ||
          props.phoneNumberValue?.length < 9 ||
          props.phoneNumberValue?.length > 11
            ? true
            : false
        }
        onSubmit={props.handleSubmitPhone}
        onClick={props.handleClickLogin}
      />
    </form>
  );
}
