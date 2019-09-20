import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../../context";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <ProductConsumer>
      {consumer => {
        return (
          <Backdrop clicked={consumer.closeModalHandler}>
            <ModalDiv
              style={{
                zIndex: "9",
                transform: consumer.show
                  ? "translateY(0)"
                  : "translateY(-100vh)",
                opacity: consumer.show ? "1" : "0"
              }}
            >
              {props.children}
            </ModalDiv>
          </Backdrop>
        );
      }}
    </ProductConsumer>
  );
};

const ModalDiv = styled.div`
  position: fixed;
  top: 15%;
  left: 20%;
  width: 60%;
  cursor: auto;
  background-color: #fff;
  z-index: 10;
  transition: 0.4s ease-in all;
  box-shadow: 1px 1px 1px #00000;
  // color: #ffffff;
  margin: 0 auto;
`;

export default Modal;
