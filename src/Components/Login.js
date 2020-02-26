import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
class Login extends Component {
  //   state = { lastName: "", firstName: "", email: "", password: "", msg: null };

  //   static propTypes = {
  //     isAuthenticated: PropTypes.bool,
  //     error: PropTypes.object.isRequired
  //   };

  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  };
};
export default connect(mapStateToProps)(Login);
