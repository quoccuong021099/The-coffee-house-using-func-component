import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import "../assets/login.css";
import Vn from "../image/vn.png";
import Image from "../common/Image";

class FormPhone extends React.Component {
  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  render() {
    const {
      phoneNumberValue,
      submitPhoneFlag,
      handleSubmitPhone,
      handleChangePhoneNumber,
      handleClickLogin,
    } = this.props;
    return (
      <div className="wrapper-verify">
        <form className="form-control-verify" onSubmit={handleSubmitPhone}>
          <p>
            Nhập mã xác thực gồm 6 số đã được gửi đến số điện thoại
            (+84)3213213213 để tiếp tục
          </p>
          <Input
            className="input-otp"
            placeholder="Nhập mã xác thực"
            type="number"
            onChange={handleChangePhoneNumber}
            onKeyDown={this.blockInvalidChar}
            min="0"
            value={phoneNumberValue !== null && phoneNumberValue}
          />
          {phoneNumberValue && phoneNumberValue.length > 6 && (
            <span className="error">Mã Otp không được vượt quá 6 số</span>
          )}
          {(submitPhoneFlag || phoneNumberValue === "") && (
            <span className="error">Không được để trống trường này</span>
          )}
          <Button className="btn-otp" type="button" value={this.props.value} />
        </form>
      </div>
    );
  }
}

export default FormPhone;
