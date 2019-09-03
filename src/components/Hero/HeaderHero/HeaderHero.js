import React from "react";
import Hero from "../Hero";
import Text from "../../UI/Text/Text";
import classes from "./HeaderHero.module.css";

const HeaderHero = () => {
  return (
    <Hero classname={classes.heroContainer}>
      <div className={classes.heroTextContainer}>
        <Text classname={classes.heroText}>
          <span className={classes.heroTextSub}>Premium wristwatches</span>
          <span className={classes.heroTextSub}>for the gentlemen</span>
          <span className={classes.heroTextSub}>and classy ladies</span>
        </Text>
        <a className={classes.callToAction} href="/">
          Shop now
        </a>
      </div>
      <div className={classes.scrollDown}>
        <Text classname={classes.arrowDown}>&darr;</Text>
      </div>
    </Hero>
  );
};

export default HeaderHero;
