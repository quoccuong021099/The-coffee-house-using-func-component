import React, { useState } from "react";
import "../assets/login.css";
import Button from "../common/Button";
import FormPhone from "../common/FormPhone";
import InputOTP from "../common/InputOTP";

export default function LoginAndRegister() {
  const [register, setRegister] = useState(false);
  const [phoneNumberValue, setPhoneNumberValue] = useState(null);
  const [submitPhoneFlag, setSubmitPhoneFlag] = useState(false);
  const [flagOTP, setFlagOTP] = useState(false);

  const handleChangePhoneNumber = (e) => {
    setPhoneNumberValue(e.target.value);
    setSubmitPhoneFlag(false);
  };

  const handleSubmitPhone = (e) => {
    e.preventDefault();
    if (!this.state.phoneNumberValue) submitPhoneFlag(true);
  };

  const handleClickLogin = () => {
    setRegister(!register);
    setPhoneNumberValue(null);
    setFlagOTP(true);
  };

  const handleRegister = () => {
    setRegister(!register);
  };
  const handleReturn = () => {
    setRegister(!register);
    setPhoneNumberValue(null);
    setFlagOTP(false);
  };
  return (
    <>
      <div className="wrapper-login">
        {flagOTP && (
          <div>
            <InputOTP
              phoneNumberValue={phoneNumberValue}
              handleChangePhoneNumber={handleChangePhoneNumber}
              handleClickLogin={handleClickLogin}
              value="Verify"
            />
            <span className="link-register return" onClick={handleReturn}>
              Quay về
            </span>
          </div>
        )}
        {!register && !flagOTP ? (
          <div className="login">
            <h2>Đăng Nhập</h2>
            <FormPhone
              phoneNumberValue={phoneNumberValue}
              submitPhoneFlag={submitPhoneFlag}
              handleSubmitPhone={handleSubmitPhone}
              handleChangePhoneNumber={handleChangePhoneNumber}
              handleClickLogin={handleClickLogin}
              value="Đăng Nhập"
            />
            <p className="link-register" onClick={handleRegister}>
              <label htmlFor="" className="abc"></label>
              Đăng kí thành viên mới ?
            </p>
            <div id="recaptcha"></div>
            <p>hoặc đăng nhập bằng</p>
            <div className="social-login">
              <Button
                className="btn-facebook-login"
                type="button"
                value="FACEBOOK"
              />
              <Button className="btn-email-login" type="button" value="EMAIL" />
            </div>
          </div>
        ) : (
          !flagOTP && (
            <div className="register">
              <h2>Chào Bạn,</h2>
              <p>Nhập số điện thoại để tiếp tục</p>
              <FormPhone
                phoneNumberValue={phoneNumberValue}
                submitPhoneFlag={submitPhoneFlag}
                handleSubmitPhone={handleSubmitPhone}
                handleChangePhoneNumber={handleChangePhoneNumber}
                handleClickLogin={handleClickLogin}
                value="Tiếp tục"
              />

              <p className="link-register return" onClick={handleReturn}>
                Quay về
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}
