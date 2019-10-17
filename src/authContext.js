import React, { Component } from "react";
import axios from "axios";
const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
    userId: null,
    token: null,
    loading: false,
    error: null,
    isSignedIn: false
  };

  userSignInHandler = (e, email, password) => {
    e.preventDefault();
    let authDetails = {
      email: email,
      password: password
    };

    this.setState({
      loading: true
    });

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC--vQpMrQekIydk2faCgvh-PIvMWSu9AM",
        authDetails
      )
      .then(response => {
        this.setState({
          loading: false,
          token: response.data.idToken,
          userId: response.data.localId,
          isSignedIn: true
        });
        //   setTimeout(() => {
        //     this.setState({
        //       token: null,
        //       userId: null,
        //       isSignedIn: false
        //     });
        //   }, response.data.expiresIn * 1000);
      })
      .catch(error => {
        this.setState({
          loading: false,
          isSignedIn: false,
          error: error.response.data.error.message
        });
      });
  };

  userSignUpHandler = (e, name, email, password) => {
    e.preventDefault();

    let authDetails = {
      name: name,
      email: email,
      password: password,
      returnSecureToken: true
    };
    this.setState({
      loading: true
    });

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyC--vQpMrQekIydk2faCgvh-PIvMWSu9AM",
        authDetails
      )
      .then(response => {
        this.setState({
          loading: false,
          token: response.data.idToken,
          userId: response.data.localId,
          isSignedIn: true
        });
        setTimeout(() => {
          this.setState({
            token: null,
            userId: null,
            isSignedIn: false
          });
        }, response.data.expiresIn * 1000);
      })
      .catch(error => {
        this.setState({
          loading: false,
          isSignedIn: false,
          error: error.response.data.error.message
        });
      });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          userSignInHandler: this.userSignInHandler,
          userSignUpHandler: this.userSignUpHandler
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
