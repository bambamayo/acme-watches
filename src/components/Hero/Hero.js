import React from "react";

const Hero = props => {
  return <section className={props.classname}>{props.children}</section>;
};

export default Hero;
