import React from "react";
import Hero from "../Hero";
import classes from "./PageHero.module.css";

const PageHero = props => {
  return (
    <Hero>
      <div className={classes.heroTextContainer}>
        <h2 className={classes.heroText}>{props.heroText}</h2>
      </div>
    </Hero>
  );
};

export default PageHero;
