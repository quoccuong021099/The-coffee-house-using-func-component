import React from "react";
import "../assets/login.css";
import Button from "../common/Button";
import Input from "../common/Input";

export default function InputOTP(props) {
  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  return (
    <div className="wrapper-verify">
      <form className="form-control-verify" onSubmit={props.handleSubmitPhone}>
        <p>
          Nhập mã xác thực gồm 6 số đã được gửi đến số điện thoại
          (+84)3213213213 để tiếp tục
        </p>
        <Input
          className="input-otp"
          placeholder="Nhập mã xác thực"
          type="number"
          onChange={props.handleChangePhoneNumber}
          onKeyDown={blockInvalidChar}
          min="0"
          value={props.phoneNumberValue !== null && props.phoneNumberValue}
        />
        {props.phoneNumberValue && props.phoneNumberValue.length > 6 && (
          <span className="error">Mã Otp không được vượt quá 6 số</span>
        )}
        {(props.submitPhoneFlag || props.phoneNumberValue === "") && (
          <span className="error">Không được để trống trường này</span>
        )}
        <Button className="btn-otp" type="button" value={this.props.value} />
      </form>
    </div>
  );
}
