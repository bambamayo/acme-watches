import React from "react";
import UnorderedList from "../../UnorderedList/UnorderedList";
import List from "../../UnorderedList/List/List";
import SearchInput from "../../UI/SearchInput/SearchInput";
import Icon from "../../UI/Icon/Icon";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <nav>
        <UnorderedList classname={classes.headerNavList}>
          <List classname={classes.headerNavListItem}>
            <Link className={classes.headerNavListLink} to="/">
              ACME
            </Link>
          </List>
          <List classname={classes.headerNavListItem}>
            <Link className={classes.headerNavListLink} to="/shop">
              Shop
            </Link>
          </List>
          <List classname={classes.headerNavListItem}>
            <SearchInput
              classname={classes.headerSearchInput}
              buttonText="search shop"
              type="search"
            />
            <Icon classname={classes.headerSearchIcon} type="search" />
          </List>
          {/* <List classname={classes.headerNavListItem}>
            <a href="/" className={classes.headerNavListLink}>
              <Icon type="user" />
              <span>Login</span>
            </a>
          </List>
          <List classname={classes.headerNavListItem}>
            <a href="/" className={classes.headerNavListLink}>
              <Icon type="user-plus" />
              <span>Register</span>
            </a>
          </List> */}
          <List classname={classes.headerNavListItem}>
            <Link className={classes.headerNavListLink} to="/cart">
              <Icon type="shopping-cart" />
              <span>{props.cartNumber}</span>
              <span>Cart</span>
            </Link>
          </List>
        </UnorderedList>
      </nav>
    </header>
  );
};

export default Header;
