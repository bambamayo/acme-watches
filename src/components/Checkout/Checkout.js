import React, { Component } from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { ProductConsumer } from "../../context";

class Checkout extends Component {
  render() {
    return (
      <section className="checkout">
        <div className="checkout__container">
          <div className="checkout__form">
            <h2>Please fill in your delivery details</h2>
            <ProductConsumer>
              {consumer => {
                return <CheckoutForm products={consumer.products} />;
              }}
            </ProductConsumer>
          </div>
          <ProductConsumer>
            {consumer => {
              return <OrderSummary products={consumer.products} />;
            }}
          </ProductConsumer>
        </div>
      </section>
    );
  }
}

export default Checkout;
