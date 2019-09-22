import React from "react";
import { ProductConsumer } from "../../context";
import { NavLink } from "react-router-dom";
import Icon from "../UI/Icon/Icon";
import Spinner from "../Spinner/Spinner";
import Img from "react-image";

const Cart = () => {
  return (
    <section className="cart">
      <h2>Items in cart </h2>
      <ProductConsumer>
        {consumer => {
          if (consumer.products === null) {
            return (
              <div>
                <p className="cart-empty-text--main">
                  Your cart is currently empty
                </p>
                <p className="cart-empty-text--sub">
                  visit <NavLink to="/shop/men"> men shop </NavLink> or{" "}
                  <NavLink to="/shop/women"> women shop </NavLink>to add items
                  to cart
                </p>
              </div>
            );
          }
          if (consumer.products !== null) {
            let productsInCart = Object.keys(consumer.products).filter(
              productKey => {
                return consumer.products[productKey].inCart;
              }
            );
            if (productsInCart.length === 0) {
              return (
                <div>
                  <p className="cart-empty-text--main">
                    Your cart is currently empty
                  </p>
                  <p className="cart-empty-text--sub">
                    visit <NavLink to="/shop/men"> men shop </NavLink> or{" "}
                    <NavLink to="/shop/women"> women shop </NavLink>to add items
                    to cart
                  </p>
                </div>
              );
            } else {
              return (
                <div className="cart__list">
                  <ul className="cart__list-ul">
                    <ProductConsumer>
                      {consumer => {
                        let productsInCart = Object.keys(consumer.products)
                          .filter(productKey => {
                            return consumer.products[productKey].inCart;
                          })
                          .map(productKey => {
                            let details = consumer.products[productKey];
                            return (
                              <li
                                key={productKey}
                                className="cart__list-ul-item"
                              >
                                <Img
                                  src={details.imageUrl}
                                  alt={details.name}
                                  className="cart__list-ul-item-image"
                                  loader={<Spinner />}
                                />
                                {/* <img
                                  src={details.imageUrl}
                                  alt={details.name}
                                  className="cart__list-ul-item-image"
                                /> */}
                                <span>{details.name}</span>
                                <span className="cart__list-ul-item-amount">
                                  <button
                                    disabled={
                                      consumer.products[productKey].count === 1
                                    }
                                    onClick={() =>
                                      consumer.decreaseCartCountHandler(
                                        productKey
                                      )
                                    }
                                  >
                                    &#8722;
                                  </button>
                                  <button>{details.count}</button>
                                  <button
                                    onClick={() =>
                                      consumer.increaseCartCountHandler(
                                        productKey
                                      )
                                    }
                                  >
                                    &#43;
                                  </button>
                                </span>
                                <span
                                  className="cart__list-ul-item-delete"
                                  onClick={() =>
                                    consumer.deleteIndividualItemHandler(
                                      productKey
                                    )
                                  }
                                >
                                  <Icon type="trash-alt"></Icon>
                                </span>
                                <span>
                                  &#8358;{details.price * details.count}
                                </span>
                              </li>
                            );
                          });

                        return productsInCart;
                      }}
                    </ProductConsumer>
                  </ul>
                  <div>
                    <div className="cart__total-price-container">
                      <p className="cart__total-price">
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
                    </div>
                    <div className="cart__options">
                      <button onClick={consumer.clearItemsInCartHandler}>
                        Clear cart <Icon type="trash-alt" />
                      </button>

                      <NavLink to="/ordersummary">Proceed to checkout</NavLink>
                    </div>
                  </div>
                </div>
              );
            }
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
