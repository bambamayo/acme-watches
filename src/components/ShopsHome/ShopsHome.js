import React from "react";
import classes from "./ShopsHome.module.css";
import TextHeader from "../UI/Text/TextHeader/TextHeader";

const ShopsHome = props => {
  return (
    <section className={classes.shopListContainer}>
      <TextHeader>{props.shopHeader}</TextHeader>
      {props.children}
    </section>
  );
};

export default ShopsHome;
