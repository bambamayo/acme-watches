import React from "react";
import { ProductConsumer } from "../../../context";
import classes from "./Backdrop.module.css";

const Backdrop = props => (
  <ProductConsumer>
    {consumer => {
      return consumer.show ? (
        <div onClick={props.clicked} className={classes.Backdrop}>
          {props.children}
        </div>
      ) : null;
    }}
  </ProductConsumer>
);

export default Backdrop;
