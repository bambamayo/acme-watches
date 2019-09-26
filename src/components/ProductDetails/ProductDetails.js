import React from "react";
import { ProductConsumer } from "../../context";

const ProductDetails = () => {
  return (
    <ProductConsumer>
      {consumer => {
        if (consumer.productInModal) {
          let productInModal = consumer.productInModal;
          const { name, price, info, inCart, imageUrl } = consumer.products[
            productInModal
          ];
          return (
            <div className="product">
              <div className="product__image-container">
                <img className="product__image" src={imageUrl} alt={name} />
              </div>
              <div className="product__details">
                <h2 className="product__details--name">{name}</h2>
                <h3 className="product__details--price"> &#8358;{price}</h3>
                <p className="product__details--info">{info}</p>
                <button
                  className="product__details-calltoaction"
                  onClick={() => consumer.addToCartHandler(productInModal)}
                  disabled={consumer.products[productInModal].inCart === true}
                >
                  {inCart ? "In Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default ProductDetails;
