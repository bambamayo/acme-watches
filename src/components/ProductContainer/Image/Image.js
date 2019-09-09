import React from "react";

const Image = props => (
  <img
    alt={props.Alt}
    onClick={props.clicked}
    src={props.Src}
    className={props.classname}
  />
);

export default Image;
