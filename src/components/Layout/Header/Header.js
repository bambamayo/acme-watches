import React, { Component } from "react";
import Icon from "../../UI/Icon/Icon";
import { Link } from "react-router-dom";
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
              <Link className="navList-item-link" to="/">
                ACME
              </Link>
            </li>

            <li className="navList-item">
              <Link className="navList-item-link" to="/shop/men">
                Shop men
              </Link>
            </li>
            <li className="navList-item">
              <Link className="navList-item-link" to="/shop/women">
                Shop women
              </Link>
            </li>
            <ProductConsumer>
              {consumer => {
                return (
                  <li className="navList-item">
                    <Link className="navList-item-link" to="/cart">
                      <Icon type="shopping-cart" />
                      <span>{consumer.cartNumber}</span>
                      <span>Cart</span>
                    </Link>
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
