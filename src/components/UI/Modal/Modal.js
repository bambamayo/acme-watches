import React from "react";
import { ProductConsumer } from "../../../context";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <ProductConsumer>
      {consumer => {
        return (
          <Backdrop clicked={consumer.closeModalHandler}>
            <div
              className="modal"
              style={{
                zIndex: "9",
                transform: consumer.show
                  ? "translateY(0)"
                  : "translateY(-100vh)",
                opacity: consumer.show ? "1" : "0"
              }}
            >
              {props.children}
            </div>
          </Backdrop>
        );
      }}
    </ProductConsumer>
  );
};

export default Modal;
