import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import ShopWomen from "../components/Shop/ShopWomen/ShopWomen";
import ShopMen from "../components/Shop/ShopMen/ShopMen";
import Cart from "../components/Cart/Cart";
import OrderSummary from "../components/OrderSummary/OrderSummary";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop/men" component={ShopMen} />
            <Route path="/shop/women" component={ShopWomen} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/ordersummary" component={OrderSummary} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
