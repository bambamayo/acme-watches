import React from "react";
import classes from "../../ShopsHome/ShopsHome.module.css";
import ProductContainer from "../../ProductContainer/ProductContainer";
import Image from "../../ProductContainer/Image/Image";
import productUse from "../../../assets/images/hero_use.jpg";
import { ProductConsumer } from "../../../context";

const HomeDeals = props => {
  return (
    <>
      <div className={classes.productList}>
        <ProductConsumer>
          {consumer => {
            const modifiedProducts = consumer.products
              .filter(product => {
                return product.onSale;
              })
              .map(product => {
                return (
                  <ProductContainer
                    // addToCart={() => props.addToCart(watch.id)}
                    containerClass={classes.containerClass}
                    clicked={() => consumer.showModalHandler(product.id)}
                    productName={product.name}
                    price={product.price}
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
            return modifiedProducts;
          }}
        </ProductConsumer>
      </div>
    </>
  );
};

export default HomeDeals;
