import React from "react";
import classes from "./Shop.module.css";
import { ProductConsumer } from "../../context";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Image from "../../components/ProductContainer/Image/Image";
import productUse from "../../assets/images/hero_use.jpg";
import Modal from "../../components/UI/Modal/Modal";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
const Shop = () => {
  return (
    <>
      <Modal>
        <ProductDetails />
      </Modal>
      <section className={classes.Shop}>
        <h2>Shop acme</h2>
        {/* <ProductConsumer>
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
        </ProductConsumer> */}

        <div className={classes.ShopItemsContainer}>
          <ProductConsumer>
            {consumer => {
              return consumer.products.map(product => (
                <ProductContainer
                  // addToCart={() => props.addToCart(watch.id)}
                  containerClass={classes.containerClass}
                  productName={product.name}
                  price={product.price}
                  key={product.id}
                >
                  <Image
                    Src={productUse}
                    Alt="image use"
                    classname={classes.productImage}
                    clicked={() => consumer.showModalHandler(product.id)}
                  />
                  <button
                    className={classes.addToCart}
                    onClick={() => consumer.addToCartHandler(product.id)}
                    disabled={product.inCart ? true : false}
                  >
                    {product.inCart ? "In Cart" : "Add To Cart"}
                  </button>
                </ProductContainer>
              ));
            }}
          </ProductConsumer>
        </div>
      </section>
    </>
  );
};

export default Shop;
