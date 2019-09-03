import React from "react";
import classes from "../../ShopsHome/ShopsHome.module.css";
import ProductContainer from "../../ProductContainer/ProductContainer";
import Image from "../../ProductContainer/Image/Image";
import productUse from "../../../assets/images/hero_use.jpg";

const ShopMen = props => {
  const modifiedWatches = props.watches
    .filter(watch => {
      return watch.category === "male" && watch.id < 8;
    })
    .map(watch => {
      return (
        <ProductContainer
          addToCart={() => props.addToCart(watch.id)}
          containerClass={classes.containerClass}
          productName={watch.name}
          price={watch.price}
          description="description"
          key={watch.id}
          buttonText={watch.inCart ? "In cart" : "Add to cart"}
        >
          <Image
            Src={productUse}
            Alt="image use"
            classname={classes.productImage}
          />
        </ProductContainer>
      );
    });

  return (
    <>
      <div className={classes.productList}>{modifiedWatches}</div>
      <div className={classes.productsListCallToAction}>
        <a className={classes.productsListCallToActionBtn} href="/">
          visit men's shop <span>&rarr;</span>
        </a>
      </div>
    </>
  );
};

export default ShopMen;
