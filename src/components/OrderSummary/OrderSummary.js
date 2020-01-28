import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";

const OrderSummary = props => {
  const productContext = useContext(ProductContext);
  let productsInCart = Object.keys(props.products)
    .filter(productId => {
      return props.products[productId].inCart === true;
    })
    .map(productId => {
      const { name, price, count } = props.products[productId];
      return (
        <li key={productId} className="order__list-item">
          <span>{name}</span>
          <span>&times;{count}</span>
          <span> &#8358;{price * count}</span>
        </li>
      );
    });
  return (
    <div className="order">
      <h2>Your bag contains</h2>
      <div className="order__container">
        <ul className="order__list">{productsInCart}</ul>
      </div>
      <p className="order__total">
        <span>Total</span>
        <span>&#8358;{productContext.totalSumOfProductsInCart()}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
