import React, { Component } from "react";
import spinner from "../../../assets/images/5.gif";

import { AuthConsumer } from "../../../authContext";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <AuthConsumer>
        {consumer => {
          if (consumer.loading) {
            return (
              <div className="auth">
                <div className="postreq-loading">
                  <img src={spinner} alt="spinner" />
                </div>
              </div>
            );
          } else {
            return (
              <div className="auth">
                <form
                  className="auth__form"
                  onSubmit={e =>
                    consumer.userSignUpHandler(
                      e,
                      this.state.name,
                      this.state.email,
                      this.state.password
                    )
                  }
                >
                  <h2 className="auth__form--header">Register</h2>
                  <div className="form__container">
                    <label htmlFor="name">Full name</label>
                    <input
                      value={this.state.name}
                      onChange={this.onInputChange}
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form__container">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={this.onInputChange}
                      value={this.state.email}
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form__container">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={this.onInputChange}
                      value={this.state.password}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      autoComplete="current-password"
                      minLength="6"
                      maxLength="8"
                    />
                    <span>
                      please enter a password thats contains 6 - 8 characters
                    </span>
                  </div>
                  <button className="auth-button">Register</button>
                  <p className="auth__form--redirect">
                    Already own an account?{" "}
                    <button onClick={this.props.clicked}>sign in</button>
                  </p>
                  {consumer.error ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "2.2rem",
                        letterSpacing: "0.2rem"
                      }}
                    >
                      Error : could not create acount because {consumer.error}
                    </p>
                  ) : null}
                </form>
              </div>
            );
          }
        }}
      </AuthConsumer>
    );
  }
}

export default Register;
