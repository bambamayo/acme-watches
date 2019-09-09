import React from "react";

const Button = props => (
  <button
    disabled={props.Disabled}
    onClick={props.clicked}
    className={props.classname}
  >
    {props.children}
  </button>
);

export default Button;
