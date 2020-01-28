import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../UI/Icon/Icon";
import { ProductContext } from "../../context/product-context";

const Cart = props => {
  const productContext = useContext(ProductContext);
  let itemsInCart;
  if (productContext.products === null) {
    itemsInCart = (
      <div>
        <p className="cart-empty-text--main">Your cart is currently empty</p>
        <p className="cart-empty-text--sub">
          visit <NavLink to="/shop/men"> men shop </NavLink> or
          <NavLink to="/shop/women"> women shop </NavLink>to add items to cart
        </p>
      </div>
    );
  }
  if (productContext.products) {
    let productsInCart = Object.keys(productContext.products).filter(
      productKey => {
        return productContext.products[productKey].inCart;
      }
    );
    if (productsInCart.length === 0) {
      itemsInCart = (
        <div>
          <p className="cart-empty-text--main">Your cart is currently empty</p>
          <p className="cart-empty-text--sub">
            visit <NavLink to="/shop/men"> men shop </NavLink> or{" "}
            <NavLink to="/shop/women"> women shop </NavLink>to add items to cart
          </p>
        </div>
      );
    } else {
      itemsInCart = (
        <div className="cart__list">
          <ul className="cart__list-ul">
            {Object.keys(productContext.products)
              .filter(productKey => productContext.products[productKey].inCart)
              .map(productKey => (
                <li key={productKey} className="cart__list-ul-item">
                  <img
                    src={productContext.products[productKey].imageUrl}
                    alt={productContext.products[productKey].name}
                    className="cart__list-ul-item-image"
                  />
                  <span>{productContext.products[productKey].name}</span>
                  <span className="cart__list-ul-item-amount">
                    <button
                      disabled={productContext.products[productKey].count === 1}
                      onClick={() =>
                        productContext.decreaseCartCountHandler(productKey)
                      }
                    >
                      &#8722;
                    </button>
                    <button>{productContext.products[productKey].count}</button>
                    <button
                      onClick={() =>
                        productContext.increaseCartCountHandler(productKey)
                      }
                    >
                      &#43;
                    </button>
                  </span>
                  <span
                    className="cart__list-ul-item-delete"
                    onClick={() =>
                      productContext.deleteIndividualItemHandler(productKey)
                    }
                  >
                    <Icon type="trash-alt"></Icon>
                  </span>
                  <span>
                    &#8358;
                    {productContext.products[productKey].price *
                      productContext.products[productKey].count}
                  </span>
                </li>
              ))}
          </ul>
          <div>
            <div className="cart__total-price-container">
              <p className="cart__total-price">
                Total amount : &#8358;
                {productContext.totalSumOfProductsInCart()}
              </p>
            </div>
            <div className="cart__options">
              <button onClick={productContext.clearItemsInCartHandler}>
                Clear cart <Icon type="trash-alt" />
              </button>

              <button
                disabled={productContext.totalSumOfProductsInCart === 0}
                onClick={() => props.history.push("/checkout")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <section className="cart">
      <h2>Items in cart </h2>
      {itemsInCart}
    </section>
  );
};
export default Cart;
