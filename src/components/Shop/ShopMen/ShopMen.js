import React from "react";
import { withRouter } from "react-router-dom";
import ProductContainer from "../../ProductContainer/ProductContainer";
import { ProductConsumer } from "../../../context";
import Img from "react-image";
import spinner from "../../../assets/images/5.gif";
import Spinner3 from "../../Spinner/Spinner3";

const ShopMen = props => {
  return (
    <>
      <section className="shop">
        <h2>Shop Men</h2>

        <div className="shop-items__container">
          <ProductConsumer>
            {consumer => {
              if (consumer.error) {
                return (
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "1.9rem",
                      width: "100%"
                    }}
                  >
                    Cannot load products at this time{" "}
                    <span role="img" aria-label="disappointed-face">
                      &#128542;
                    </span>
                  </h2>
                );
              } else if (consumer.products === null) {
                return (
                  <div className="loading">
                    <img src={spinner} alt="spinner" />
                    <p className="loading-text">loading products</p>
                  </div>
                );
              }

              const modifiedProducts = Object.keys(consumer.products)
                .filter(
                  productKey =>
                    consumer.products[productKey].category === "male"
                )
                .map(productKey => {
                  let details = consumer.products[productKey];
                  return (
                    <ProductContainer
                      productName={details.name}
                      price={details.price}
                      key={productKey}
                    >
                      <Img
                        src={details.imageUrl}
                        alt={details.name}
                        className="shop-items-image"
                        onClick={() =>
                          props.history.push(
                            `/shop/product/${consumer.onProductClickedHandler(
                              productKey
                            )}`
                          )
                        }
                        loader={<Spinner3 />}
                      />

                      <button
                        className="shop-items-addtocart"
                        onClick={() => consumer.addToCartHandler(productKey)}
                        disabled={consumer.products[productKey].inCart === true}
                      >
                        {details.inCart ? "In Cart" : "Add To Cart"}
                      </button>
                    </ProductContainer>
                  );
                });
              return modifiedProducts;
            }}
          </ProductConsumer>
        </div>
      </section>
    </>
  );
};

export default withRouter(ShopMen);
