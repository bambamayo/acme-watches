import React from "react";
import spinner from "../../assets/images/100.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt={spinner} />
    </div>
  );
};

export default Spinner;
