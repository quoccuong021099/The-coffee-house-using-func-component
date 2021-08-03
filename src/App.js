import React from "react";
import "./assets/App.css";

import OrderPage from "./Pages/OrderPage";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <OrderPage />
      </div>
    );
  }
}

export default App;
