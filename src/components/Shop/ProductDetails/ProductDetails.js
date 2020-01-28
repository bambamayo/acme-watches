import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { ProductContext } from "../../../context/product-context";

const ProductDetails = props => {
  const productContext = useContext(ProductContext);
  let productInView;
  if (productContext.products === null) {
    productInView = (
      <section className="product-details">
        <p>Loading</p>
      </section>
    );
  } else {
    const productName = props.match.params.productname;
    let product = Object.keys(productContext.products).filter(
      product => productContext.products[product].name === productName
    );
    productInView = (
      <section className="product-details">
        <div className="product-details__container">
          <div className="product-details__container--flex-item">
            <div className="product-details__image">
              <img
                src={productContext.products[product].imageUrl}
                alt={productContext.products[product].name}
              />
            </div>
          </div>
          <div className="product-details__container--flex-item">
            <div className="product-details__detail">
              <ul className="product-details__detail-list">
                <li className="product-details__detail-listitem">
                  <strong>Name : </strong>
                  {productContext.products[product].name}
                </li>
                <li className="product-details__detail-listitem">
                  <strong>Price : </strong>&#8358;
                  {productContext.products[product].price}
                </li>
                <li className="product-details__detail-listitem">
                  <strong>Quantity : </strong>
                  <span>
                    <button
                      disabled={
                        productContext.products[product[0]].count === 1 ||
                        productContext.products[product[0]].count === 0
                      }
                      onClick={() =>
                        productContext.decreaseCartCountHandler(product[0])
                      }
                    >
                      &#8722;
                    </button>
                    <button>{productContext.products[product[0]].count}</button>
                    <button
                      onClick={() =>
                        productContext.increaseCartCountHandler(product[0])
                      }
                    >
                      &#43;
                    </button>
                  </span>
                </li>
                <li className="product-details__detail-listitem">
                  <button
                    className="shop-items-addtocart"
                    onClick={() => productContext.addToCartHandler(product[0])}
                    disabled={productContext.products[product].inCart === true}
                  >
                    {productContext.products[product].inCart
                      ? "In Cart"
                      : "Add To Cart"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-details__description">
          <h3 className="product-details__description--header">
            Product description
          </h3>
          <p className="product-details__description--info">
            {productContext.products[product].info}
          </p>
        </div>
      </section>
    );
  }

  return <>{productInView}</>;
};

export default withRouter(ProductDetails);
