import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../assets/add-to-cart.css";
import "../assets/Body.css";
import "../assets/CartContainer.css";
import "../assets/Footer.css";
import "../assets/Header.css";
import "../assets/PlaceholderProduct.css";
import "../assets/PlaceholderSidebar.css";
import "../assets/ProductContainer.css";
import Body from "../components/Body/Body";
import Footer from "../components/Footer";
import Header from "../components/header";
import LoginAndRegister from "./LoginAndRegister";

export default function OrderPage() {
  const [deliveryChargeFlag, setDeliveryChargeFlag] = useState(false);
  const [cartNumber, setCartNumber] = useState(0);

  const changeDeliveryChargeFlag = () => {
    setDeliveryChargeFlag(true);
  };
  const getAmount = (number) => {
    let amount = 0;
    if (number.length > 0) {
      number.map((item) => (amount += item.amount));
    }
    setCartNumber(amount);
  };

  return (
    <div className="OrderPage">
      <Header
        changeDeliveryChargeFlag={changeDeliveryChargeFlag}
        cartNumber={cartNumber}
      />
      <Switch>
        <Route path="/LoginAndRegister" component={LoginAndRegister} />
        <Route
          exact
          path="/"
          render={(props) => (
            <Body
              {...props}
              getAmount={getAmount}
              changeDeliveryChargeFlag={changeDeliveryChargeFlag}
              deliveryChargeFlag={deliveryChargeFlag}
            />
          )}
        />
      </Switch>

      <Footer />
    </div>
  );
}
