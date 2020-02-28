// import React from "react";
import "../CSS/App.css";
import "../CSS/HamburgerMenu.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { connect } from "react-redux";
import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";

class HamburgerMenu extends Component {
  state = {
    createaccountDivOpen: false
  };

  toggle = () => {
    console.log(this.state);
    this.setState({
      createaccountDivOpen: !this.state.createaccountDivOpen
    });
  };

  render() {
    return (
      <header className="hamburger-menu-header">
        <nav className="hamburger-menu-navigation">
          <div className="hamburger-grid">
            <div onClick={this.toggle} className="hamburger-login">
              login
            </div>
            <div onClick={this.toggle} className="hamburger-logout">
              logout
            </div>
            <div className="hamburger-logout"></div>
            {/* <div className="hamburger-register">register</div> */}

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

            {this.state.isAuthenticated ? (
              <Logout>lougut</Logout>
            ) : (
              <div>{this.state.createaccountDivOpen ? <Login /> : null}</div>
            )}
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
