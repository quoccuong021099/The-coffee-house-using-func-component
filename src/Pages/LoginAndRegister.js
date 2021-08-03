import React from "react";
import Button from "../common/Button";
import "../assets/login.css";
import FormPhone from "../common/FormPhone";
import InputOTP from "../common/InputOTP";
import firebase from "../firebase/Firebase";
class LoginAndRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      register: false,
      phoneNumberValue: null,
      submitPhoneFlag: false,
      flagOTP: false,
    };
  }

  handleChangePhoneNumber = (e) => {
    this.setState({
      phoneNumberValue: e.target.value,
      submitPhoneFlag: false,
    });
  };

  handleSubmitPhone = (e) => {
    e.preventDefault();
    if (!this.state.phoneNumberValue)
      this.setState({
        submitPhoneFlag: true,
      });
  };

  handleClickLogin = () => {
    this.setState({
      register: !this.state.register,
      phoneNumberValue: null,
      flagOTP: true,
    });
    // let number = "+84869504210";
    // let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(number, recaptcha)
    //   .then((e) => {
    //     let code = prompt("enter the otp", "");
    //     if (code === null) return;
    //     e.confirm(code)
    //       .then((result) => {
    //         console.log(result.user, "user");
    //         document.querySelector(".abc").textContent =
    //           result.user.phoneNumber + "Number verified";
    //       })
    //       .catch((err) => console.log(err));
    //   });
  };

  handleRegister = () => {
    this.setState({
      register: !this.state.register,
    });
  };
  handleReturn = () => {
    this.setState({
      register: !this.state.register,
      phoneNumberValue: null,
      flagOTP: false,
    });
  };

  render() {
    const { register, phoneNumberValue, submitPhoneFlag, flagOTP } = this.state;
    return (
      <>
        <div className="wrapper-login">
          {flagOTP && (
            <div>
              <InputOTP
                phoneNumberValue={phoneNumberValue}
                // submitPhoneFlag={submitPhoneFlag}
                // handleSubmitPhone={this.handleSubmitPhone}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                handleClickLogin={this.handleClickLogin}
                value="Verify"
              />
              <span
                className="link-register return"
                onClick={this.handleReturn}
              >
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
                handleSubmitPhone={this.handleSubmitPhone}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                handleClickLogin={this.handleClickLogin}
                value="Đăng Nhập"
              />
              <p className="link-register" onClick={this.handleRegister}>
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
                <Button
                  className="btn-email-login"
                  type="button"
                  value="EMAIL"
                />
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
                  handleSubmitPhone={this.handleSubmitPhone}
                  handleChangePhoneNumber={this.handleChangePhoneNumber}
                  handleClickLogin={this.handleClickLogin}
                  value="Tiếp tục"
                />

                <p className="link-register return" onClick={this.handleReturn}>
                  Quay về
                </p>
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

export default LoginAndRegister;
