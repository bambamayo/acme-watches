import React, { Component } from "react";
import { ProductConsumer } from "../../../context";
import { withRouter } from "react-router-dom";

class ProductDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {consumer => {
          if (consumer.products === null) {
            return (
              <section className="product-details">
                <p>Loading</p>
              </section>
            );
          } else {
            const productName = this.props.match.params.productname;
            let product = Object.keys(consumer.products).filter(
              product => consumer.products[product].name === productName
            );

            return (
              <section className="product-details">
                <div className="product-details__container">
                  <div className="product-details__container--flex-item">
                    <div className="product-details__image">
                      <img
                        src={consumer.products[product].imageUrl}
                        alt={consumer.products[product].name}
                      />
                    </div>
                  </div>
                  <div className="product-details__container--flex-item">
                    <div className="product-details__detail">
                      <ul className="product-details__detail-list">
                        <li className="product-details__detail-listitem">
                          <strong>Name : </strong>
                          {consumer.products[product].name}
                        </li>
                        <li className="product-details__detail-listitem">
                          <strong>Price : </strong>&#8358;
                          {consumer.products[product].price}
                        </li>
                        <li className="product-details__detail-listitem">
                          <strong>Quantity : </strong>
                          <span>
                            <button
                              disabled={
                                consumer.products[product[0]].count === 1 ||
                                consumer.products[product[0]].count === 0
                              }
                              onClick={() =>
                                consumer.decreaseCartCountHandler(product[0])
                              }
                            >
                              &#8722;
                            </button>
                            <button>
                              {consumer.products[product[0]].count}
                            </button>
                            <button
                              onClick={() =>
                                consumer.increaseCartCountHandler(product[0])
                              }
                            >
                              &#43;
                            </button>
                          </span>
                        </li>
                        <li className="product-details__detail-listitem">
                          <button
                            className="shop-items-addtocart"
                            onClick={() =>
                              consumer.addToCartHandler(product[0])
                            }
                            disabled={
                              consumer.products[product].inCart === true
                            }
                          >
                            {consumer.products[product].inCart
                              ? "In Cart"
                              : "Add To Cart"}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product-details__description">
                  <h3 className="product-details__description--header">
                    Product description
                  </h3>
                  <p className="product-details__description--info">
                    {consumer.products[product].info}
                  </p>
                </div>
              </section>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default withRouter(ProductDetails);
