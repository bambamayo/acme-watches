import React from "react";
import { ProductConsumer } from "../../../context";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <ProductConsumer>
      {consumer => {
        return (
          <>
            {consumer.show ? (
              <Backdrop clicked={consumer.closeModalHandler} />
            ) : null}
            <div
              className="modal"
              style={{
                zIndex: "9",
                transform: consumer.show
                  ? "translateY(0)"
                  : "translateY(-100vh)",
                opacity: consumer.show ? "1" : "0",
                borderColor: "transparent"
              }}
            >
              {props.children}
            </div>
          </>
        );
      }}
    </ProductConsumer>
  );
};

export default Modal;
