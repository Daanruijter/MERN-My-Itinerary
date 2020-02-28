// import React from "react";
import "../CSS/App.css";
import "../CSS/HamburgerMenu.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { connect } from "react-redux";
import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import CreateAccount from "./CreateAccount";

class HamburgerMenu extends Component {
  state = {
    loginOpen: false
  };

  toggleLogin = () => {
    console.log(this.state);
    if (this.state.registerOpen !== true) {
      this.setState({
        loginOpen: !this.state.loginOpen
      });
    }
  };

  toggleRegisterOpen = () => {
    if (this.state.loginOpen !== true) {
      this.setState({
        registerOpen: !this.state.registerOpen
      });
    }
  };

  render() {
    return (
      <header className="hamburger-menu-header">
        <nav className="hamburger-menu-navigation">
          <div className="hamburger-grid">
            {this.props.isAuthenticated ? (
              <div className="register-login-container">
                <div className="hamburger-logout">
                  <Logout className="hamburger-logout"></Logout>
                </div>
              </div>
            ) : (
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
            )}

            <div className="hamburger-icon">
              <div className="hamburger-icon-flexer">
                <DrawerToggleButton
                  click={this.props.drawerToggleClickHandler}
                ></DrawerToggleButton>
              </div>
            </div>
          </div>
          <div className="hamburger-menu-container">
            <div className="hamburger-menu-user-logo"></div>
            {/* login */}
            {!this.props.isAuthenticated ? (
              <div>{this.state.loginOpen ? <Login></Login> : null}</div>
            ) : null}
            {/* register */}
            {!this.props.isAuthenticated ? (
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

export default connect(mapStateToProps, null)(HamburgerMenu);
