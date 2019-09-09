import React, { Component } from "react";
import Text from "../UI/Text/Text";
import classes from "./ProductContainer.module.css";

class ProductContainer extends Component {
  render() {
    return (
      <div className={this.props.containerClass} onClick={this.props.clicked}>
        {this.props.children}
        <div className={classes.productTextContainer}>
          <Text classname={classes.productText}>{this.props.productName}</Text>
          <Text classname={classes.productText}>
            <strong>&#8358;{this.props.price}</strong>
          </Text>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
