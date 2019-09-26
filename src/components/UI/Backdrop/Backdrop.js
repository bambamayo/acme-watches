import React from "react";
import { ProductConsumer } from "../../../context";

const Backdrop = props => (
  <ProductConsumer>
    {consumer => {
      return consumer.show ? (
        <div onClick={props.clicked} className="backdrop">
          {props.children}
        </div>
      ) : null;
    }}
  </ProductConsumer>
);

export default Backdrop;
