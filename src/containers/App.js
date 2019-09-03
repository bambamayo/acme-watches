import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
