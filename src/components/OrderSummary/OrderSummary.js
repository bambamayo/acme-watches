import React from "react";
import { ProductConsumer } from "../../context";
import { NavLink } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="order">
      <h2>Your order summary</h2>
      <div className="order__container">
        <ul className="order__list">
          <ProductConsumer>
            {consumer => {
              let productsToCheckout = Object.keys(consumer.products)
                .filter(productId => {
                  return consumer.products[productId].inCart === true;
                })
                .map(productId => {
                  const { name, price, count } = consumer.products[productId];
                  return (
                    <li key={productId} className="order__list-item">
                      <span>{name}</span>
                      <span>&times;{count}</span>
                      <span> &#8358;{price * count}</span>
                    </li>
                  );
                });
              return productsToCheckout;
            }}
          </ProductConsumer>
        </ul>
      </div>
      <p className="order__total">
        Total amount : &#8358;
        <ProductConsumer>
          {consumer => {
            let totalSum = Object.keys(consumer.products)
              .filter(productKey => {
                return consumer.products[productKey].count > 0;
              })
              .map(productKey => {
                let details = consumer.products[productKey];
                return details.count * details.price;
              })
              .reduce((prev, current) => {
                return prev + current;
              }, 0);
            return totalSum;
          }}
        </ProductConsumer>
      </p>
      <div className="order__options">
        <NavLink to="/cart">&larr; return to cart</NavLink>
        <NavLink to="/checkout">continue to checkout &rarr;</NavLink>
      </div>
    </div>
  );
};

export default OrderSummary;
