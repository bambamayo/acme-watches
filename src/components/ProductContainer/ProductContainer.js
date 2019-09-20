import React, { Component } from "react";

class ProductContainer extends Component {
  render() {
    return (
      <div className="product__container" onClick={this.props.clicked}>
        {this.props.children}
        <div className="product__container-text">
          <p className="product__text">{this.props.productName}</p>
          <p className="product__text">
            <strong>&#8358;{this.props.price}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
