import React from "react";
//import Button from "../UI/Button/Button";
import styled from "styled-components";

const AddToCart = props => {
  const AddToCart = styled.button`
    padding: 1rem 2rem;
    font-size: 1.7rem;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.5);
    width: 100%;
  `;
  return <AddToCart>{props.buttonText}</AddToCart>;
};

export default AddToCart;
