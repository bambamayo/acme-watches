import React, { Component } from "react";
import Icon from "../../UI/Icon/Icon";
import { NavLink } from "react-router-dom";
import { ProductConsumer } from "../../../context";

class Header extends Component {
  state = {
    show: true,
    scrollPos: 0
  };

  componenentDidMount() {
    window.addEventListener("scroll", this.headerScrolledHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerScrolledHandler);
  }
  headerScrolledHandler = () => {
    let { scrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const show = scrollPos > currentScrollPos;
    this.setState({
      scrollPos: currentScrollPos,
      show
    });
  };

  render() {
    return (
      <header
        style={{ top: this.state.show ? "0" : "-90px" }}
        className="header"
      >
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
