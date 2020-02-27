import React, { Component } from "react";
import "../CSS/CreateAccount.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../store/actions/authActions";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      picture: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    let user = this.state;

    //attempt to register//
    this.props.register(user);
    this.setState({
      [e.target.name]: e.target.value,

      firstName: "",
      lastName: "",
      password: "",
      email: "",
      picture: ""
    });
  };

  render() {
    return (
      <div className="user-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input
              name="firstName"
              placeholder="first name"
              type="text"
              value={this.state.firstName}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            <br />
            Last name:
            <input
              name="lastName"
              placeholder="last name"
              type="text"
              value={this.state.lastName}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            <br />
            password:
            <input
              name="password"
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            <br />
            e-mail:
            <input
              name="email"
              placeholder="e-mail"
              type="text"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            <br />
            picture:
            <input
              name="picture"
              placeholder="picture"
              type="text"
              value={this.state.picture}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <br />
          <input
            onClick={e => this.handleSubmit(e)}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  };
};

export default connect(mapStateToProps, { register })(CreateAccount);
