import React from "react";
import classes from "./TextHeader.module.css";

const TextHeader = props => {
  return <h2 className={classes.textHeader}>{props.children}</h2>;
};

export default TextHeader;
