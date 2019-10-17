import React, { Component } from "react";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";

class Auth extends Component {
  state = {
    signUp: true
  };

  handleFormSwitchHandler = () => {
    this.setState({
      signUp: !this.state.signUp
    });
  };

  render() {
    return (
      <>
        {this.state.signUp ? (
          <Register clicked={this.handleFormSwitchHandler} />
        ) : (
          <SignIn clicked={this.handleFormSwitchHandler} />
        )}
      </>
    );
  }
}

export default Auth;
