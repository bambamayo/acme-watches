import React from "react";
import { ProductConsumer } from "../../context";
import classes from "./Cart.module.css";
import productUse from "../../assets/images/hero_use.jpg";
import { Link } from "react-router-dom";
import Icon from "../../components/UI/Icon/Icon";

const Cart = () => {
  return (
    <section className={classes.Cart}>
      <h2>Items in cart </h2>
      <ProductConsumer>
        {consumer => {
          let productsInCart = consumer.products.filter(product => {
            return product.inCart;
          });
          if (productsInCart.length === 0) {
            return (
              <div>
                <p className={classes.emptyCartTextMain}>
                  Your cart is currently empty
                </p>
                <p className={classes.emptyCartTextSub}>
                  visit <Link to="/shop">shop </Link> to add items to cart
                </p>
              </div>
            );
          } else {
            return (
              <div className={classes.CartList}>
                <ul className={classes.CartListUL}>
                  <ProductConsumer>
                    {consumer => {
                      let productsInCart = consumer.products
                        .filter(product => {
                          return product.inCart;
                        })
                        .map(product => {
                          return (
                            <li
                              key={product.id}
                              className={classes.CartListItem}
                            >
                              <img
                                src={productUse}
                                alt="product use"
                                className={classes.CartImage}
                              />
                              <span>{product.name}</span>
                              <span className={classes.CartAmount}>
                                <span
                                  onClick={() =>
                                    consumer.decreaseCartCountHandler(
                                      product.id
                                    )
                                  }
                                >
                                  &#8722;
                                </span>
                                <span>{product.count}</span>
                                <span
                                  onClick={() =>
                                    consumer.increaseCartCountHandler(
                                      product.id
                                    )
                                  }
                                >
                                  &#43;
                                </span>
                              </span>
                              <span
                                onClick={() =>
                                  consumer.deleteIndividualItemHandler(
                                    product.id
                                  )
                                }
                              >
                                <Icon
                                  type="trash-alt"
                                  classname={classes.DeleteItem}
                                />
                              </span>
                              <span>
                                &#8358;{product.price * product.count}
                              </span>
                            </li>
                          );
                        });

                      return productsInCart;
                    }}
                  </ProductConsumer>
                </ul>
                <div>
                  <div className={classes.TotalPriceContainer}>
                    <p className={classes.TotalPrice}>
                      Total price : &#8358;
                      <ProductConsumer>
                        {consumer => {
                          let totalSum = consumer.products
                            .filter(product => {
                              return product.count > 0;
                            })
                            .map(product => product.count * product.price)
                            .reduce((prev, current) => {
                              return prev + current;
                            }, 0);
                          return totalSum;
                        }}
                      </ProductConsumer>
                    </p>
                  </div>
                  <div className={classes.CartOptions}>
                    <button onClick={consumer.clearItemsInCartHandler}>
                      Clear cart <Icon type="trash-alt" />
                    </button>

                    <Link to="/checkout">Proceed to checkout page</Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
