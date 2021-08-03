import React from "react";
import "../assets/Header.css";
import "../assets/Body.css";
import "../assets/PlaceholderSidebar.css";
import "../assets/PlaceholderProduct.css";
import "../assets/ProductContainer.css";
import "../assets/add-to-cart.css";
import "../assets/CartContainer.css";
import "../assets/Footer.css";
import Header from "../components/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer";
import LoginAndRegister from "./LoginAndRegister";
import { Switch, Route } from "react-router-dom";

class OrderPage extends React.Component {
  constructor() {
    super();
    this.state = {
      deliveryChargeFlag: false,
      cartNumber: 0,
    };
  }
  changeDeliveryChargeFlag = () => {
    this.setState({
      deliveryChargeFlag: true,
    });
  };
  getAmount = (number) => {
    let amount = 0;
    if (number.length > 0) {
      number.map((item) => (amount += item.amount));
    }
    this.setState({
      cartNumber: amount,
    });
  };

  render() {
    return (
      <div className="OrderPage">
        <Header
          changeDeliveryChargeFlag={this.changeDeliveryChargeFlag}
          cartNumber={this.state.cartNumber}
          handleLogin={this.handleLogin}
          flagLogin={this.state.flagLogin}
        />
        <Switch>
          <Route path="/LoginAndRegister" component={LoginAndRegister} />
          <Route
            exact
            path="/"
            render={(props) => (
              <Body
                {...props}
                getAmount={this.getAmount}
                changeDeliveryChargeFlag={this.changeDeliveryChargeFlag}
                deliveryChargeFlag={this.state.deliveryChargeFlag}
              />
            )}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default OrderPage;

// import React from 'react'

// export default function OrderPage() {
//   return (
//     <div className="OrderPage">
//         <Header
//           changeDeliveryChargeFlag={this.changeDeliveryChargeFlag}
//           cartNumber={this.state.cartNumber}
//           handleLogin={this.handleLogin}
//           flagLogin={this.state.flagLogin}
//         />
//         <Switch>
//           <Route path="/LoginAndRegister" component={LoginAndRegister} />
//           <Route
//             exact
//             path="/"
//             render={(props) => (
//               <Body
//                 {...props}
//                 getAmount={this.getAmount}
//                 changeDeliveryChargeFlag={this.changeDeliveryChargeFlag}
//                 deliveryChargeFlag={this.state.deliveryChargeFlag}
//               />
//             )}
//           />
//         </Switch>

//         <Footer />
//       </div>
//   )
// }
