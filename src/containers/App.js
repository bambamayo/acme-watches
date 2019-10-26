import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import ShopWomen from "../components/Shop/ShopWomen/ShopWomen";
import ShopMen from "../components/Shop/ShopMen/ShopMen";
import Cart from "../components/Cart/Cart";
import NotFound from "../components/NotFound/NotFound";
import ProductDetails from "../components/Shop/ProductDetails/ProductDetails";
import { ProductConsumer } from "../context";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/shop/men" component={ShopMen} />
            <Route exact path="/shop/women" component={ShopWomen} />
            <ProductConsumer>
              {consumer => {
                return (
                  <Route
                    path="/shop/product/:productname"
                    render={props => (
                      <ProductDetails product={consumer.product} />
                    )}
                  />
                );
              }}
            </ProductConsumer>

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
