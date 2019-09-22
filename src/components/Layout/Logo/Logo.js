import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className="logo">
      Acme
    </NavLink>
  );
};

export default Logo;
