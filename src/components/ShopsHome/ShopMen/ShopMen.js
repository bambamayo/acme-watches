import React from "react";
import classes from "../../ShopsHome/ShopsHome.module.css";
import ProductContainer from "../../ProductContainer/ProductContainer";
import Image from "../../ProductContainer/Image/Image";
import productUse from "../../../assets/images/hero_use.jpg";
import { ProductConsumer } from "../../../context";

const ShopMen = props => {
  return (
    <>
      <div className={classes.productList}>
        <ProductConsumer>
          {consumer => {
            const modifiedWatches = consumer.products
              .filter(product => {
                return product.category === "male" && product.id < 8;
              })
              .map(product => {
                return (
                  <ProductContainer
                    // addToCart={() => props.addToCart(watch.id)}
                    clicked={() => consumer.showModalHandler(product.id)}
                    containerClass={classes.containerClass}
                    productName={product.name}
                    price={product.price}
                    description="description"
                    key={product.id}
                  >
                    <Image
                      Src={productUse}
                      Alt="image use"
                      classname={classes.productImage}
                    />
                  </ProductContainer>
                );
              });
            return modifiedWatches;
          }}
        </ProductConsumer>
      </div>
      <div className={classes.productsListCallToAction}>
        <a className={classes.productsListCallToActionBtn} href="/">
          visit men's shop <span>&rarr;</span>
        </a>
      </div>
    </>
  );
};

export default ShopMen;
