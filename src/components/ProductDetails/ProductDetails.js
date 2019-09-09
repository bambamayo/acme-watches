import React from "react";
import productUse from "../../assets/images/hero_use.jpg";
import Image from "../ProductContainer/Image/Image";
import classes from "./ProductDetails.module.css";
import { ProductConsumer } from "../../context";

const ProductDetails = () => {
  return (
    <ProductConsumer>
      {consumer => {
        const { name, price, info, inCart, id } = consumer.productInModal;
        return (
          <div className={classes.ProductDetails}>
            <div className={classes.ProductImageContainer}>
              <Image Src={productUse} Alt="watch image" />
            </div>
            <div className={classes.ProductDetailsContainer}>
              <h2>{name}</h2>
              <h3> &#8358;{price}</h3>
              <p>{info}</p>
              <button
                onClick={() => consumer.addToCartHandler(id)}
                disabled={inCart ? true : false}
              >
                {inCart ? "In Cart" : "Add To Cart"}
              </button>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductDetails;
