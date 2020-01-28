import React, { useContext } from "react";
import OrderSummary from "../OrderSummary/OrderSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { ProductContext } from "../../context/product-context";

const Checkout = () => {
  const productContext = useContext(ProductContext);
  return (
    <section className="checkout">
      <div className="checkout__container">
        <div className="checkout__form">
          <h2>Please fill in your delivery details</h2>
          <CheckoutForm
            products={productContext.products}
            cartNumber={productContext.cartNumber}
            clearItemsInCartHandler={productContext.clearItemsInCartHandler}
          />
        </div>
        <OrderSummary products={productContext.products} />
      </div>
    </section>
  );
};

export default Checkout;
