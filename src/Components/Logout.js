import React, { Component, Fragment } from "react";
import { logout } from "../store/actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return <div onClick={this.props.logout}>Logout</div>;
  }
}

export default connect(null, { logout })(Logout);
