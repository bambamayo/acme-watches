import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import ProductContainer from "../../ProductContainer/ProductContainer";
import Img from "react-image";
import spinner from "../../../assets/images/5.gif";
import Spinner3 from "../../Spinner/Spinner3";
import { ProductContext } from "../../../context/product-context";

const ShopWomen = props => {
  const productContext = useContext(ProductContext);
  let displayProducts;
  if (productContext.error) {
    displayProducts = (
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
  } else if (productContext.products === null) {
    displayProducts = (
      <div className="loading">
        <img src={spinner} alt="spinner" />
        <p className="loading-text">loading products</p>
      </div>
    );
  } else if (productContext.products) {
    const modifiedProducts = Object.keys(productContext.products)
      .filter(
        productKey => productContext.products[productKey].category === "female"
      )
      .map(productKey => {
        let details = productContext.products[productKey];
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
                  `/shop/product/${productContext.onProductClickedHandler(
                    productKey
                  )}`
                )
              }
              loader={<Spinner3 />}
            />
            <button
              className="shop-items-addtocart"
              onClick={() => productContext.addToCartHandler(productKey)}
              disabled={productContext.products[productKey].inCart === true}
            >
              {details.inCart ? "In Cart" : "Add To Cart"}
            </button>
          </ProductContainer>
        );
      });
    displayProducts = modifiedProducts;
  }

  return (
    <>
      <section className="shop">
        <h2>Shop Women</h2>
        <div className="shop-items__container">{displayProducts}</div>
      </section>
    </>
  );
};

export default withRouter(ShopWomen);
