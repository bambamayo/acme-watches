import React, { Component } from "react";
import spinner from "../../../assets/images/5.gif";
import { AuthConsumer } from "../../../authContext";

class SignIn extends Component {
  state = {
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
                    consumer.userSignInHandler(
                      e,
                      this.state.email,
                      this.state.password
                    )
                  }
                >
                  <h2 className="auth__form--header">Sign in</h2>
                  <div className="form__container">
                    <label htmlFor="email">Email</label>
                    <input
                      value={this.state.email}
                      onChange={this.onInputChange}
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form__container">
                    <label htmlFor="password">Password</label>
                    <input
                      value={this.state.password}
                      onChange={this.onInputChange}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      autoComplete="current-password"
                      minLength="6"
                      maxLength="8"
                    />
                  </div>
                  <button className="auth-button">Sign in</button>
                  <p className="auth__form--redirect">
                    or create your free account{" "}
                    <button onClick={this.props.clicked}>register</button>
                  </p>
                  {consumer.error ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "2.2rem",
                        letterSpacing: "0.2rem"
                      }}
                    >
                      Error : could not sign in because {consumer.error}
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

export default SignIn;
