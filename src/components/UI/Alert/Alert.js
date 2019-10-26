import React from "react";

const Alert = props => {
  return <div className={props.classname}>{props.children}</div>;
};

export default Alert;
