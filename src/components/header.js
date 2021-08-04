import React, { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import DropdownItem from "./Delivery/DropdownItem";
import logo from "../image/logo.png";
import Image from "../common/Image";
import locationImg from "../image/location.png";
import CartIcon from "../common/CartIcon";
import DropdownDelivery from "./Delivery/DropdownDelivery";
import { Link } from "react-router-dom";

// export function Logo  ({ logo }) return <img src={logo} alt="logo" />;

export default function Header(props) {
  const container = useRef();
  const [location, setLocation] = useState("");
  const [getAddress, setGetAddress] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [valueTime, setValueTime] = useState("TRONG 15-30 PHÚT");
  const [valueDate, setValueDate] = useState(null);
  const [valueTimerOnButton, setValueTimerOnButton] = useState("");
  const [timerFlag, setTimerFlag] = useState(false);
  const [optionValueTime, setOptionValueTime] = useState([]);
  const [optionValueTimeNotNow, setOptionValueTimeNotNow] = useState([]);
  // const [notNow, setNotNow] = useState(false);
  const [today, setToday] = useState(null);
  const [tommorow, setTommorow] = useState(null);
  const [nextTwoDays, setNextTwoDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  const getDayFunc = () => {
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

  const handleDelivery = () => {
    setDelivery(!delivery);
  };

  const handleShipNow = () => {
    setDelivery(!delivery);
    setValueTimerOnButton("");
    setTimerFlag(false);
  };

  const getValueTimer = () => {
    if (valueDate !== today && valueTime !== "TRONG 15-30 PHÚT") {
      setValueTimerOnButton(valueDate.concat(` ${valueTime}`));
      setTimerFlag(true);
    } else if (valueDate === today && valueTime !== "TRONG 15-30 PHÚT") {
      setValueTimerOnButton(valueDate.concat(` ${valueTime}`));
      setTimerFlag(true);
    } else {
      setTimerFlag(!timerFlag);
      setValueTimerOnButton("");
    }
  };

  const handleTimeOrder = () => {
    setTimerFlag(true);
  };

  const getValueTime = (e) => {
    setValueTime(e.target.value);
  };

  const getValueDate = (e) => {
    setValueDate(e.target.value);
    setValueTime(optionValueTimeNotNow[0]);
    if (e.target.value === today) setValueTime(optionValueTime[0]);
  };

  const getValueInputAddress = (e) => {
    setLocation(e.target.value);

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
        setGetAddress(loca.addresses);
      });
  };

  const fullAddress = (full_address) => {
    setLocation(full_address);
    setDropdown(false);
  };

  const onFocusAddress = () => {
    setDropdown(true);
  };

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setDropdown(false);
      setDelivery(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    let arrDate = getDayFunc();
    setToday(arrDate[0].toLocaleDateString("en-GB"));
    setTommorow(arrDate[1].toLocaleDateString("en-GB"));
    setNextTwoDays(arrDate[2].toLocaleDateString("en-GB"));
    setValueDate(arrDate[0].toLocaleDateString("en-GB"));

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

    setOptionValueTime(["TRONG 15-30 PHÚT", ...arrValueTime]);
    setOptionValueTimeNotNow(arrValueTimeNotNow);
    setMinutes(minutes);
    setHours(hours);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" />
      </Link>
      {
        <div className="form-delivery" ref={container}>
          <Button
            className="btn__delivery"
            type="button"
            value={
              valueTimerOnButton === "" ? `GIAO NGAY` : `${valueTimerOnButton}`
            }
            onClick={handleDelivery}
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
                onChange={getValueInputAddress}
                onFocus={onFocusAddress}
              />
              <ul className="dropdown-menu">
                {dropdown && location.length !== 0
                  ? getAddress.length > 0
                    ? getAddress.map((i) => (
                        <DropdownItem
                          address={i}
                          key={i.place_id}
                          fullAddress={() => fullAddress(i.full_address)}
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
              handleShipNow={handleShipNow}
              getValueTime={getValueTime}
              getValueDate={getValueDate}
              getValueTimer={getValueTimer}
              handleTimeOrder={handleTimeOrder}
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
              changeDeliveryChargeFlag={props.changeDeliveryChargeFlag}
            />
          ) : null}
        </div>
      }
      <div className="form-login">
        <Link to="/LoginAndRegister">
          <Button className="btn--login" type="button" value="ĐĂNG NHẬP" />
        </Link>

        {props.cartNumber > 0 ? (
          <div className="cart-icon">
            <span>{props.cartNumber}</span> <CartIcon />
          </div>
        ) : null}
      </div>
    </header>
  );
}
