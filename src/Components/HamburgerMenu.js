// import React from "react";
import "../CSS/App.css";
import "../CSS/HamburgerMenu.css";
import DrawerToggleButton from "./DrawerToggleButton";

import React, { Component } from "react";
import Login from "./Login";

export default class HamburgerMenu extends Component {
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
            <div className="hamburger-logout">logout</div>
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
            <Login />
          </div>
        </nav>
      </header>
    );
  }
}
