import React from "react";
import classes from "../../ShopsHome/ShopsHome.module.css";

import ProductContainer from "../../ProductContainer/ProductContainer";
import Image from "../../ProductContainer/Image/Image";
import productUse from "../../../assets/images/hero_use.jpg";

const HomeDeals = props => {
  const modifiedWatches = props.watches
    .filter(watch => {
      return watch.onSale;
    })
    .map(watch => {
      return (
        <ProductContainer
          addToCart={() => props.addToCart(watch.id)}
          containerClass={classes.containerClass}
          productName={watch.name}
          price={watch.price}
          key={watch.id}
          watches={props.watches}
          buttonText={watch.inCart ? "In cart" : "Add to cart"}
          inCart={watch.inCart}
        >
          <Image
            Src={productUse}
            alt="image use"
            classname={classes.productImage}
          />
        </ProductContainer>
      );
    });

  return (
    <>
      <div className={classes.productList}>{modifiedWatches}</div>
    </>
  );
};

export default HomeDeals;
