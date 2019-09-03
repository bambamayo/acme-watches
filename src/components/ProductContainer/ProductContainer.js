import React, { Component } from "react";
import Text from "../UI/Text/Text";
import classes from "./ProductContainer.module.css";
import Button from "../UI/Button/Button";

class ProductContainer extends Component {
  render() {
    return (
      <div className={this.props.containerClass}>
        {this.props.children}
        <div className={classes.productTextContainer}>
          <Text classname={classes.productText}>{this.props.productName}</Text>
          <Text classname={classes.productText}>
            <strong>&#8358;{this.props.price}</strong>
          </Text>
          <Button onClick={this.props.addToCart} classname={classes.addtocart}>
            {this.props.buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
