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
      <form className="form-control-login" onSubmit={handleSubmitPhone}>
        <div className="number">
          <Image src={Vn} width="36" height="24" />
          <span>+84</span>
        </div>
        <Input
          className="input-phone-login"
          placeholder="Nhập số điện thoại của bạn"
          type="number"
          onChange={handleChangePhoneNumber}
          onKeyDown={this.blockInvalidChar}
          min="0"
          value={phoneNumberValue !== null && phoneNumberValue}
        />
        {phoneNumberValue &&
          (phoneNumberValue.length < 9 || phoneNumberValue.length > 11) && (
            <span className="error">Giá trị nằm trong khoảng 9-11 số!</span>
          )}
        {(submitPhoneFlag || phoneNumberValue === "") && (
          <span className="error">Không được để trống trường này</span>
        )}
        <Button
          className="btn-login"
          type="button"
          value={this.props.value}
          disabled={
            !phoneNumberValue ||
            phoneNumberValue?.length < 9 ||
            phoneNumberValue?.length > 11
              ? true
              : false
          }
          onSubmit={this.handleSubmitPhone}
          onClick={handleClickLogin}
        />
      </form>
    );
  }
}

export default FormPhone;
