import React from "react";
import Hero from "../Hero";
import Text from "../../UI/Text/Text";
import classes from "./HeaderHero.module.css";
import {Link } from "react-router-dom"

const HeaderHero = () => {
  return (
    <Hero classname={classes.heroContainer}>
      <div className={classes.heroTextContainer}>
        <Text classname={classes.heroText}>
          <span className={classes.heroTextSub}>Premium wristwatches</span>
          <span className={classes.heroTextSub}>for the gentlemen</span>
          <span className={classes.heroTextSub}>and classy ladies</span>
        </Text>
        <Link className={classes.callToAction} to="/shop">
          Shop now
        </Link>
      </div>
      <div className={classes.scrollDown}>
        <Text classname={classes.arrowDown}>&darr;</Text>
      </div>
    </Hero>
  );
};

export default HeaderHero;
