import React, { Component } from "react";
import LandingPV from "./LandingPV";
import AuthA from "../../store/actions/AuthA";

import { connect } from "react-redux";

/**
 * Description:
 * This is the default route. Prompts user to login or signup.
 * Showcases the app.
 *
 * Input: None
 *
 * Output:
 *  - Writes to local storage:
 *  -- user
 *  -- userId
 *  -- token
 *
 * Components used:
 *  - None
 *
 * Local State:
 *  - user: Holds input filed value
 *  - password: Holds input field value
 *
 * Central store:
 *  - auth: Set to true if login successful
 *
 * Todo:
 *  - Improve styling
 *  - Showcase the app
 *  - Display error message on failed login / signup
 */
class LandingPC extends Component {
  state = {
    user: "",
    password: ""
  };

  onUserChange = event => {
    this.setState({ user: event.target.value });
  };

  onPWChange = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    let data = {
      email: this.state.user,
      password: this.state.password
    };
    this.props.authFn.login(data);
  };

  signup = () => {
    let data = {
      email: this.state.user,
      username: this.state.user,
      password: this.state.password
    };
    this.props.authFn.signup(data);
  };

  render() {
    return (
      <LandingPV
        onUserChange={this.onUserChange}
        onPWChange={this.onPWChange}
        login={this.login}
        signup={this.signup}
        auth={this.props.auth}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.AuthR.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authFn: AuthA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPC);
