import React from "react";
import UnorderedList from "../../../UnorderedList/UnorderedList";
import List from "../../../UnorderedList/List/List";
import FooterLinks from "../FooterLinks/FooterLinks";
import classes from "./FooterTop.module.css";

const FooterTop = () => {
  return (
    <>
      <div className={classes.footerList}>
        <h3 className={classes.footerListHeader}>About Acme</h3>
        <UnorderedList classname={classes.footerListItems}>
          <List>About us</List>
          <List>Why choose acme</List>
          <List>Our manifesto</List>
          <List>Our manifesto</List>
          <List>FAQ</List>
          <List>Contact us</List>
        </UnorderedList>
      </div>
      <div className={classes.footerList}>
        <h3 className={classes.footerListHeader}>Buying acme</h3>
        <UnorderedList classname={classes.footerListItems}>
          <List>Buyer safety</List>
          <List>Delivery</List>
          <List>Acme return policy</List>
        </UnorderedList>
      </div>
      <div className={classes.footerList}>
        <h3 className={classes.footerListHeader}>Payment</h3>
        <UnorderedList classname={classes.footerListItems}>
          <List>Verve</List>
          <List>Visa</List>
          <List>Mastercard</List>
        </UnorderedList>
      </div>
      <FooterLinks />
    </>
  );
};

export default FooterTop;
