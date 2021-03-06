import React from "react";
import spinner from "../../assets/images/100.gif";

const Spinner = props => {
  return (
    <div className="spinner">
      <img className="spinner__image" src={spinner} alt={spinner} />
    </div>
  );
};

export default Spinner;
