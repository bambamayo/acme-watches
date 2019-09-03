import React from "react";

const SearchInput = props => (
  <input
    placeholder={props.buttonText}
    type={props.search}
    className={props.classname}
  />
);

export default SearchInput;
