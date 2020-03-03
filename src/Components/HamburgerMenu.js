// import React from "react";
import "../CSS/App.css";
import "../CSS/HamburgerMenu.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { connect } from "react-redux";
import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import CreateAccount from "./CreateAccount";
import jwt_decode from "jwt-decode";
import { fetchCurrentUser } from "../store/actions/authActions";
import { sendUserToken } from "../store/actions/authActions";

// const express = require("express");
// const router = express.Router();

class HamburgerMenu extends Component {
  state = {
    loginOpen: false
  };

  componentDidMount() {
    this.props.fetchCurrentUser();
    // this.props.sendUserToken();
  }
  // componentDidUpdate() {
  //   this.getUser();
  // }

  fetchUser(user) {
    console.log(user);
    // //check for existing user//
    // userModel.findById({ user }).then(user => {
    //   console.log(user + "useer");
    // });
  }

  toggleLogin = () => {
    console.log(this.state);
    // if (this.state.registerOpen !== true) {
    this.setState({
      loginOpen: !this.state.loginOpen,
      registerOpen: false
    });
    // }
  };

  toggleRegisterOpen = () => {
    // if (this.state.loginOpen !== true) {
    this.setState({
      registerOpen: !this.state.registerOpen,
      loginOpen: false
    });
    // }
  };

  render() {
    // let token = localStorage.getItem("token");
    // console.log(token);
    // if (token) {
    //   let decoded = jwt_decode(token);
    //   console.log(decoded.id);
    //   this.fetchUser(decoded.id);
    // }

    return (
      <header className="hamburger-menu-header">
        <nav className="hamburger-menu-navigation">
          {localStorage.getItem("token") ? (
            <div className="hamburger-grid-loggedin">
              <div className="register-login-container-loggedin">
                <div className="hamburger-logout">
                  <Logout></Logout>
                </div>
              </div>
              <div className="hamburger-welcome-user">Welcome, </div>
              <div className="hamburger-icon">
                <div className="hamburger-icon-flexer">
                  <DrawerToggleButton
                    click={this.props.drawerToggleClickHandler}
                  ></DrawerToggleButton>
                </div>
              </div>
            </div>
          ) : (
            <div className="hamburger-grid">
              <div className="register-login-container">
                <div
                  onClick={this.toggleRegisterOpen}
                  className="hamburger-register"
                >
                  register
                </div>
                <div onClick={this.toggleLogin} className="hamburger-login">
                  login
                </div>
              </div>
              <div className="hamburger-icon">
                <div className="hamburger-icon-flexer">
                  <DrawerToggleButton
                    click={this.props.drawerToggleClickHandler}
                  ></DrawerToggleButton>
                </div>
              </div>
            </div>
          )}

          <div className="hamburger-menu-container">
            <div className="hamburger-menu-user-logo"></div>
            {/* login */}
            {!localStorage.getItem("token") ? (
              <div>{this.state.loginOpen ? <Login></Login> : null}</div>
            ) : null}
            {/* register */}
            {!localStorage.getItem("token") ? (
              <div>
                {this.state.registerOpen ? (
                  <CreateAccount></CreateAccount>
                ) : null}
              </div>
            ) : null}
          </div>
        </nav>
      </header>
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

export default connect(mapStateToProps, { fetchCurrentUser, sendUserToken })(
  HamburgerMenu
);
