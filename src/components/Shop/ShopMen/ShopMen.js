import React from "react";
import ProductContainer from "../../ProductContainer/ProductContainer";
import { ProductConsumer } from "../../../context";
import ProductDetails from "../../ProductDetails/ProductDetails";
import Modal from "../../UI/Modal/Modal";
import Img from "react-image";
import spinner from "../../../assets/images/5.gif";
import Spinner from "../../Spinner/Spinner";

const ShopMen = props => {
  return (
    <>
      <Modal>
        <ProductDetails />
      </Modal>
      <section className="shop">
        <h2>Shop Men</h2>

        <div className="shop-items__container">
          <ProductConsumer>
            {consumer => {
              if (consumer.products === null) {
                return (
                  <div
                    style={{
                      width: "100%",
                      margin: "2rem auto",
                      textAlign: "center"
                    }}
                  >
                    <img src={spinner} alt="spinner" />
                    <p
                      style={{
                        fontSize: "2rem",
                        letterSpacing: "0.2rem"
                      }}
                    >
                      loading products
                    </p>
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
                        onClick={() => consumer.showModalHandler(productKey)}
                        loader={<Spinner />}
                      />
                      {/* <img
                        src={details.imageUrl}
                        alt={details.name}
                        className="shop-items-image"
                        onClick={() => consumer.showModalHandler(productKey)}
                      /> */}
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

export default ShopMen;

/* <ProductConsumer>
          {consumer => {
            return (
              <div className={classes.SearchInputContainer}>
                <input
                  defaultValue={consumer.searchInputVal}
                  onChange={consumer.searchInputChangeHandler}
                  className={classes.ShopSearchInput}
                  placeholder="search shop"
                  type="search"
                />
              </div>
            );
          }}
        </ProductConsumer> */
