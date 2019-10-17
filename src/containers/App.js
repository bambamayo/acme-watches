import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import ShopWomen from "../components/Shop/ShopWomen/ShopWomen";
import ShopMen from "../components/Shop/ShopMen/ShopMen";
import Cart from "../components/Cart/Cart";
import NotFound from "../components/NotFound/NotFound";
// import SignIn from "../components/Auth/SignIn/SignIn";
// import Register from "../components/Auth/Register/Register";
import Auth from "../components/Auth/Auth";

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
            {/* <Route path="/signin" component={SignIn} />
            <Route path="/Register" component={Register} /> */}
            <Route path="/account" component={Auth} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
