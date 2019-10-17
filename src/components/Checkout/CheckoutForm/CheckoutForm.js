import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../../axios-products";
import { ProductConsumer } from "../../../context";

class CheckoutForm extends Component {
  state = {
    loading: false,
    error: null
  };

  nameRef = React.createRef();
  emailRef = React.createRef();
  addressRef = React.createRef();
  addressTwoRef = React.createRef();
  cityRef = React.createRef();
  stateRef = React.createRef();

  productsInCartHandler = () => {
    let productsInCart = Object.keys(this.props.products)
      .filter(productId => {
        return this.props.products[productId].inCart === true;
      })
      .map(productId => {
        return {
          productName: this.props.products[productId].name,
          amount: this.props.products[productId].count
        };
      });

    return productsInCart;
  };

  onFormSubmitHandler = e => {
    e.preventDefault();
    const order = {
      customerOrder: this.productsInCartHandler(),
      customerDetails: {
        name: this.nameRef.current.value,
        email: this.emailRef.current.value,
        address: this.addressRef.current.value,
        address2: this.addressTwoRef.current.value,
        city: this.cityRef.current.value,
        state: this.stateRef.current.value
      }
    };

    this.setState({
      loading: true
    });

    axios
      .post("/orders.json?auth=" + this.props.userToken, order)
      .then(resp => {
        console.log(resp.data);
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.log(error.response.data.error);
        this.setState({
          error: error.response.data.error,
          loading: false
        });
      });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmitHandler}>
        <div className="form__container">
          <label htmlFor="name">Full name</label>
          <input
            ref={this.nameRef}
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="email">Email</label>
          <input
            ref={this.emailRef}
            type="email"
            name="email"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="address">Address</label>
          <input
            ref={this.addressRef}
            type="text"
            name="address"
            placeholder="20 shotinoye street"
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="address-two">Address 2 (Optional)</label>
          <input
            ref={this.addressTwoRef}
            type="text"
            name="address-two"
            placeholder="20 harvey road"
          />
        </div>
        <div className="form__container">
          <label htmlFor="city">City</label>
          <input
            ref={this.cityRef}
            type="text"
            name="city"
            placeholder="Mushin"
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="state">State</label>
          <input
            ref={this.stateRef}
            type="text"
            name="state"
            placeholder="Lagos"
            required
          />
        </div>
        <ProductConsumer>
          {consumer => {
            return (
              <button
                className="form-button"
                onClick={consumer.clearItemsInCartHandler}
                style={{ backgroundColor: "green" }}
              >
                Proceed to pay &rarr;
              </button>
            );
          }}
        </ProductConsumer>

        <button
          className="form-button"
          onClick={() => this.props.history.goBack()}
          style={{ backgroundColor: "black" }}
        >
          return to cart &larr;
        </button>
        <p className="form-redirect-msg">
          <strong>
            You'll be redirected to paystack secured payment site, to complete
            order
          </strong>
        </p>
      </form>
    );
  }
}

export default withRouter(CheckoutForm);
