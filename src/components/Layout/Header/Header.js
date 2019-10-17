import React, { Component } from "react";
import Icon from "../../UI/Icon/Icon";
import { NavLink } from "react-router-dom";
import { ProductConsumer } from "../../../context";
import { AuthConsumer } from "../../../authContext";

class Header extends Component {
  render() {
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
            <AuthConsumer>
              {consumer => {
                if (consumer.isSignedIn) {
                  return (
                    <li className="navList-item">
                      <NavLink
                        className="navList-item-link"
                        activeClassName="navList-item-link--active"
                        to="/account"
                      >
                        logout
                      </NavLink>
                    </li>
                  );
                } else {
                  return (
                    <li className="navList-item">
                      <NavLink
                        className="navList-item-link"
                        activeClassName="navList-item-link--active"
                        to="/account"
                      >
                        sign in
                      </NavLink>
                    </li>
                  );
                }
              }}
            </AuthConsumer>

            <ProductConsumer>
              {consumer => {
                return (
                  <li className="navList-item">
                    <NavLink
                      className="navList-item-link"
                      activeClassName="navList-item-link--active"
                      to="/cart"
                    >
                      <Icon type="shopping-cart" />
                      <span
                        className={consumer.cartNumber === 0 ? "hide" : "show"}
                      >
                        {consumer.cartNumber}
                      </span>
                      <span>Cart</span>
                    </NavLink>
                  </li>
                );
              }}
            </ProductConsumer>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
