import React, { useContext } from "react";
import Icon from "../../UI/Icon/Icon";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../../context/product-context";

const Header = () => {
  const productContext = useContext(ProductContext);
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="navList">
          <li className="navList-item">
            <NavLink className="navList-item-link" to="/">
              ACME
            </NavLink>
          </li>

          <li className="navList-item">
            <NavLink
              className="navList-item-link"
              activeClassName="navList-item-link--active"
              to="/shop/men"
            >
              Shop men
            </NavLink>
          </li>
          <li className="navList-item">
            <NavLink
              className="navList-item-link"
              activeClassName="navList-item-link--active"
              to="/shop/women"
            >
              Shop women
            </NavLink>
          </li>

          <li className="navList-item navList-item--relative">
            <NavLink
              className="navList-item-link"
              activeClassName="navList-item-link--active"
              to="/cart"
            >
              <span className="cart-icon">
                <Icon type="shopping-cart" />
              </span>
              <span className="cart-number-cont"></span>
              <span className="show">{productContext.cartNumber}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
