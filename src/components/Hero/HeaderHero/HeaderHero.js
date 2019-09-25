import React from "react";
import Hero from "../Hero";
import { Link } from "react-router-dom";

const HeaderHero = () => {
  return (
    <Hero classname="hero">
      <div className="hero__text-container">
        <p className="hero__text">
          <span className="hero__text--sub">Premium wristwatches</span>
          <span className="hero__text--sub">for the gentlemen</span>
          <span className="hero__text--sub">and classy ladies</span>
        </p>
        <div>
          <Link className="hero__call-to-action" to="/shop/men">
            Shop men
          </Link>
          <Link className="hero__call-to-action" to="/shop/women">
            Shop women
          </Link>
        </div>
      </div>
      <div className="scroll">
        <p className="scroll--icon">&darr;</p>
      </div>
    </Hero>
  );
};

export default HeaderHero;
