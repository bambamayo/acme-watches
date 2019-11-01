import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../../axios-products";
import { ProductConsumer } from "../../../context";
import Alert from "../../UI/Alert/Alert";
import Icon from "../../UI/Icon/Icon";

class CheckoutForm extends Component {
  state = {
    loading: false,
    error: null,
    showAlert: false
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
      .post("/orders.json", order)
      .then(resp => {
        console.log(resp);
        this.setState({
          loading: false,
          showAlert: true
        });
      })
      .catch(error => {
        this.setState({
          error: error.response.data.error,
          loading: false,
          showAlert: false
        });
      });

    setTimeout(() => {
      this.props.history.push("/");
    }, 10000);

    this.props.clearItemsInCartHandler();
  };

  render() {
    const { error, showAlert } = this.state;
    return (
      <Fragment>
        {showAlert && (
          <Alert classname="checkoutform-alert">
            <Icon type="check-circle" classname="checkoutform-alert--icon" />
            <p>
              You order has been submitted, you will get a call from one of our
              representative soon, redirecting you to home page
            </p>
          </Alert>
        )}

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
          <div className="form-button-container">
            <ProductConsumer>
              {consumer => {
                return (
                  <button
                    className="form-button"
                    onClick={error && consumer.clearItemsInCartHandler}
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
          </div>
          {error && (
            <p className="form-error-msg">
              <Icon type="times-circle" /> Cannot complete order because {error}
            </p>
          )}
          <p className="form-redirect-msg">
            <strong>
              <Icon type="info-circle" /> You will be required to pay on
              delivery
            </strong>
          </p>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(CheckoutForm);
