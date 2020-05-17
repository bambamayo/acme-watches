import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../../axios-products";
import Alert from "../../UI/Alert/Alert";
import Icon from "../../UI/Icon/Icon";

const CheckoutForm = props => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    telephone: ""
  });

  const inputChangedHandler = e => {
    const newFields = { ...fields };
    newFields[e.target.name] = e.target.value;
    setFields(newFields);
  };

  const productsInCartHandler = () => {
    let productsInCart = Object.keys(props.products)
      .filter(productId => {
        return props.products[productId].inCart === true;
      })
      .map(productId => {
        return {
          productName: props.products[productId].name,
          amount: props.products[productId].count
        };
      });

    return productsInCart;
  };

  const onFormSubmitHandler = async e => {
    e.preventDefault();
    const order = {
      customerOrder: productsInCartHandler(),
      customerDetails: {
        name: fields.name,
        email: fields.email,
        address: fields.address,
        address2: fields.address2,
        city: fields.city,
        state: fields.state,
        telephone: fields.telephone
      }
    };
    console.log(order);

    setLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      let postedOrder = await axios.post("/orders.json", order);
      setLoading(false);
      setShowAlert(true);
      setFields({
        name: "",
        email: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        telephone: ""
      });
    } catch (err) {
      setError(error.response.data.error);
      setLoading(false);
      setShowAlert(false);
    }

    setTimeout(() => {
      props.history.push("/");
    }, 10000);
    props.clearItemsInCartHandler();
    
  };
  return (
    <>
      {showAlert && (
        <Alert classname="checkoutform-alert">
          <Icon type="check-circle" classname="checkoutform-alert--icon" />
          <p>
            You order has been submitted, you will get a call from one of our
            representative soon, redirecting you to home page
          </p>
        </Alert>
      )}

      <form className="form" onSubmit={onFormSubmitHandler}>
        <div className="form__container">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            placeholder="your name"
            onChange={inputChangedHandler}
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={fields.email}
            placeholder="your email"
            onChange={inputChangedHandler}
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="email">Phone number</label>
          <input
            type="text"
            name="telephone"
            value={fields.telephone}
            placeholder="your phone number"
            onChange={inputChangedHandler}
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={fields.address}
            placeholder="your address"
            onChange={inputChangedHandler}
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="address-two">Address 2 (Optional)</label>
          <input
            type="text"
            name="address2"
            value={fields.address2}
          
            onChange={inputChangedHandler}
          />
        </div>
        <div className="form__container">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={fields.city}
            placeholder="your city"
            onChange={inputChangedHandler}
            required
          />
        </div>
        <div className="form__container">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={fields.state}
            placeholder="your state"
            onChange={inputChangedHandler}
            required
          />
        </div>
        <div className="form-button-container">
          <button
            className="form-button"
            onClick={error && props.clearItemsInCartHandler}
            style={{ backgroundColor: "green" }}
          >
            Finish order &rarr;
          </button>

          <button
            className="form-button"
            onClick={() => props.history.goBack()}
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
            <Icon type="info-circle" /> You will be required to pay on delivery
          </strong>
        </p>
      </form>
    </>
  );
};

export default withRouter(CheckoutForm);
