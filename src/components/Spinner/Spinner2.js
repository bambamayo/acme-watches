import React from "react";
import spinner from "../../assets/images/100.gif";

const Spinner = props => {
  return (
    <div className="spinner2">
      <img className="spinner2__image" src={spinner} alt={spinner} />
    </div>
  );
};

export default Spinner;
