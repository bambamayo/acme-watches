import React from "react";

const Button = props => (
  <button onClick={props.onClick} className={props.classname}>
    {props.children}
  </button>
);

export default Button;
