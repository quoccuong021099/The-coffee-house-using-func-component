import React from "react";
import Button from "../../common/Button";

export default function DropdownDelivery(props) {
  return (
    <div className="dropdown-delivery">
      <div className="ship-now" onClick={props.handleShipNow}>
        <div className="ship-now__left">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              fill="none"
              stroke="#b2b2b2"
              strokeWidth="1.1"
              cx="10"
              cy="10"
              r="9"
            ></circle>{" "}
            <rect x="9" y="4" width="1" height="7"></rect>{" "}
            <path
              fill="none"
              stroke="#b2b2b2"
              strokeWidth="1.1"
              d="M13.018,14.197 L9.445,10.625"
            ></path>
          </svg>
          <h3>GIAO NGAY</h3>
        </div>

        <div className="ship-now__right">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <polyline
              fill="none"
              stroke="#21bb05"
              strokeWidth="1.1"
              points="4,10 8,15 17,4"
            ></polyline>
          </svg>
        </div>
      </div>
      <div className="time-order" onClick={props.handleTimeOrder}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path>{" "}
          <rect width="1" height="3" x="6" y="2"></rect>{" "}
          <rect width="1" height="3" x="13" y="2"></rect>
        </svg>
        <h3>Thời gian đặt hàng</h3>
      </div>
      {props.timerFlag ? (
        <div className="time-order__description">
          <div className="select-group">
            <span>Ngày đặt</span> <br />
            <select
              id="select"
              type="select"
              value={props.valueDate}
              onChange={props.getValueDate}
            >
              <option value={props.today}>Hôm Nay</option>
              <option value={props.tommorow}>NGÀY {props.tommorow}</option>
              <option value={props.nextTwoDays}>
                NGÀY {props.nextTwoDays}
              </option>
            </select>
          </div>
          <div className="select-group">
            <span>Thời gian đặt</span> <br />
            <select
              type="select"
              value={props.valueTime}
              onChange={props.getValueTime}
            >
              {props.valueDate === props.today
                ? props.optionValueTime.map((item, index) => (
                    <option value={item} key={`time${index}`}>
                      {item}
                    </option>
                  ))
                : props.optionValueTimeNotNow.map((item, index) => (
                    <option value={item} key={`time${index}`}>
                      {item}
                    </option>
                  ))}
            </select>
          </div>
          <div onClick={props.changeDeliveryChargeFlag}>
            <Button
              className="timer"
              type="submit"
              value="HẸN GIỜ"
              onClick={props.getValueTimer}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
