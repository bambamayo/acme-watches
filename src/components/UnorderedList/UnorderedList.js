import React from "react";

const UnorderedList = props => (
  <ul className={props.classname}>{props.children}</ul>
);

export default UnorderedList;
