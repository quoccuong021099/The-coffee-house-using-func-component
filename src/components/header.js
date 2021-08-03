import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import DropdownItem from "./Delivery/DropdownItem";
import logo from "../image/logo.png";
import Image from "../common/Image";
import locationImg from "../image/location.png";
import CartIcon from "../common/CartIcon";
import DropdownDelivery from "./Delivery/DropdownDelivery";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return <img src={logo} alt="logo" />;
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      location: "",
      getAddress: [],
      dropdown: false,
      delivery: false,
      valueTime: "TRONG 15-30 PHÚT",
      valueDate: null,
      valueTimerOnButton: "",
      timerFlag: false,
      optionValueTime: [],
      optionValueTimeNotNow: [],
      notNow: false,
      today: null,
      tommorow: null,
      nextTwoDays: null,
      hours: null,
      minutes: null,
    };
  }

  getDayFunc = () => {
    let today = new Date();
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    let twoMoreDate = new Date(today);
    twoMoreDate.setDate(today.getDate() + 2);
    let arrDate = [];
    arrDate.push(today);
    arrDate.push(nextDay);
    arrDate.push(twoMoreDate);
    return arrDate;
  };

  handleDelivery = () => {
    this.setState({
      delivery: !this.state.delivery,
    });
  };
  handleShipNow = () => {
    this.setState({
      delivery: !this.state.delivery,
      valueTimerOnButton: "",
      timerFlag: false,
    });
  };

  getValueTimer = () => {
    if (
      this.state.valueDate !== this.state.today &&
      this.state.valueTime !== "TRONG 15-30 PHÚT"
    ) {
      this.setState({
        valueTimerOnButton: this.state.valueDate.concat(
          ` ${this.state.valueTime}`
        ),
        timerFlag: true,
      });
    } else if (
      this.state.valueDate === this.state.today &&
      this.state.valueTime !== "TRONG 15-30 PHÚT"
    ) {
      this.setState({
        valueTimerOnButton: this.state.valueDate.concat(
          ` ${this.state.valueTime}`
        ),
        timerFlag: true,
      });
    } else {
      this.setState({
        timerFlag: !this.state.timerFlag,
        valueTimerOnButton: "",
      });
    }
  };

  handleTimeOrder = () => {
    this.setState({
      timerFlag: true,
      // delivery: true,
    });
  };
  getValueTime = (e) => {
    this.setState({
      valueTime: e.target.value,
    });
  };
  getValueDate = (e) => {
    this.setState({
      valueDate: e.target.value,
      valueTime: this.state.optionValueTimeNotNow[0],
    });
    if (e.target.value === this.state.today)
      this.setState({
        valueTime: this.state.optionValueTime[0],
      });
  };
  getValueInputAddress = (e) => {
    this.setState({
      location: e.target.value,
    });
    fetch(
      `https://api.thecoffeehouse.com/api/v5/map/autocomplete?key=${e.target.value.toLowerCase()}&from=TCH-WEB`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "tch-app-version": "",
          "tch-device-id": "",
          "x-csrf-token": "XJVEF4AnLtZqcFJ87XeJaV1nJxGC5HrAkMy9QCHA",
          "x-requested-with": "XMLHttpRequest",
        },
        referrer: "https://order.thecoffeehouse.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }
    )
      .then((res) => res.json())
      .then((loca) => {
        this.setState({
          getAddress: loca.addresses,
        });
      });
  };

  fullAddress = (full_address) => {
    this.setState({
      location: full_address,
      dropdown: false,
    });
  };
  onFocusAddress = () => {
    this.setState({
      dropdown: true,
    });
  };
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        dropdown: false,
        delivery: false,
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);

    let arrDate = this.getDayFunc();

    this.setState({
      today: arrDate[0].toLocaleDateString("en-GB"),
      tommorow: arrDate[1].toLocaleDateString("en-GB"),
      nextTwoDays: arrDate[2].toLocaleDateString("en-GB"),
      valueDate: arrDate[0].toLocaleDateString("en-GB"),
    });

    let now = new Date();
    now.setMinutes(now.getMinutes());
    now.setHours(now.getHours());
    now.toLocaleString();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let arrValueTime = [];
    for (let i = hours; i < 21; i++) {
      if (i < hours + 3) {
        for (let j = 0; j <= 45; j += 15) {
          if (j === 0) {
            arrValueTime.push(`${i}:00`);
          } else {
            arrValueTime.push(`${i}:${j}`);
          }
        }
      } else {
        for (let j = 0; j <= 30; j += 30) {
          if (j === 0) {
            arrValueTime.push(`${i}:00`);
          } else {
            arrValueTime.push(`${i}:${j}`);
          }
        }
      }
    }

    let arrValueTimeNotNow = [];
    for (let i = 7; i < 21; i++) {
      for (let j = 0; j <= 30; j += 30) {
        if (j === 0) {
          arrValueTimeNotNow.push(`${i}:00`);
        } else {
          arrValueTimeNotNow.push(`${i}:${j}`);
        }
      }
    }

    if (minutes < 15) {
      arrValueTime.splice(0, 4);
    } else if (minutes < 30) {
      arrValueTime.splice(0, 2);
    } else if (minutes <= 45) {
      arrValueTime.splice(0, 4);
    } else if (minutes > 45 && minutes < 60) arrValueTime.splice(0, 7);
    arrValueTime.pop();

    this.setState({
      optionValueTime: ["TRONG 15-30 PHÚT", ...arrValueTime],
      optionValueTimeNotNow: arrValueTimeNotNow,
      minutes: minutes,
      hours: hours,
    });
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    const {
      getAddress,
      location,
      dropdown,
      delivery,
      timerFlag,
      valueTimerOnButton,
      valueTime,
      valueDate,
      optionValueTime,
      optionValueTimeNotNow,
      today,
      tommorow,
      nextTwoDays,
      minutes,
      hours,
    } = this.state;
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        {
          <div className="form-delivery" ref={this.container}>
            <Button
              className="btn__delivery"
              type="button"
              value={
                valueTimerOnButton === ""
                  ? `GIAO NGAY`
                  : `${valueTimerOnButton}`
              }
              onClick={this.handleDelivery}
            ></Button>
            <div className="form-control">
              <span className="input-icon">
                <Image src={locationImg} alt="Location Image" />
              </span>
              <div className="dropdown">
                <Input
                  type="text"
                  className="input-address"
                  placeholder="Nhập địa chỉ giao hàng"
                  value={location}
                  onChange={this.getValueInputAddress}
                  onFocus={this.onFocusAddress}
                />
                <ul className="dropdown-menu">
                  {dropdown && location.length !== 0
                    ? getAddress.length > 0
                      ? getAddress.map((i) => (
                          <DropdownItem
                            address={i}
                            key={i.place_id}
                            fullAddress={() => this.fullAddress(i.full_address)}
                          />
                        ))
                      : dropdown && (
                          <li>
                            <span className="input-icon-dropdown">
                              <img src={locationImg} alt="" />
                            </span>
                            <a href="#a">
                              <h3 className="dropdown-menu-title">
                                Không tìm thấy địa chỉ
                              </h3>
                              <h3 className="dropdown-menu-title">
                                "{location}"
                              </h3>
                            </a>
                          </li>
                        )
                    : null}
                </ul>
              </div>
            </div>
            {delivery ? (
              <DropdownDelivery
                handleShipNow={this.handleShipNow}
                getValueTime={this.getValueTime}
                getValueDate={this.getValueDate}
                getValueTimer={this.getValueTimer}
                handleTimeOrder={this.handleTimeOrder}
                timerFlag={timerFlag}
                valueDate={valueDate}
                valueTime={valueTime}
                optionValueTime={optionValueTime}
                optionValueTimeNotNow={optionValueTimeNotNow}
                today={today}
                tommorow={tommorow}
                nextTwoDays={nextTwoDays}
                minutes={minutes}
                hours={hours}
                changeDeliveryChargeFlag={this.props.changeDeliveryChargeFlag}
              />
            ) : null}
          </div>
        }
        <div className="form-login">
          <Link to="/LoginAndRegister">
            <Button className="btn--login" type="button" value="ĐĂNG NHẬP" />
          </Link>

          {this.props.cartNumber > 0 ? (
            <div className="cart-icon">
              <span>{this.props.cartNumber}</span> <CartIcon />
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}
export default Header;
