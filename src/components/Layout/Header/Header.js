import React from "react";
import UnorderedList from "../../UnorderedList/UnorderedList";
import Icon from "../../UI/Icon/Icon";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../context";

const Header = props => {
  return (
    <header className={classes.header}>
      <nav>
        <UnorderedList classname={classes.headerNavList}>
          <li className={classes.headerNavListItem}>
            <Link className={classes.headerNavListLink} to="/">
              ACME
            </Link>
          </li>
          <li className={classes.headerNavListItem}>
            <Link className={classes.headerNavListLink} to="/shop">
              Shop
            </Link>
          </li>
          <ProductConsumer>
            {consumer => {
              return (
                <li className={classes.headerNavListItem}>
                  <Link className={classes.headerNavListLink} to="/cart">
                    <Icon type="shopping-cart" />
                    <span>{consumer.cartNumber}</span>
                    <span>Cart</span>
                  </Link>
                </li>
              );
            }}
          </ProductConsumer>
        </UnorderedList>
      </nav>
    </header>
  );
};

export default Header;
