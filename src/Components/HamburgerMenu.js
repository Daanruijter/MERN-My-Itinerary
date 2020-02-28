import React from "react";
import "../CSS/App.css";
import "../CSS/HamburgerMenu.css";
import DrawerToggleButton from "./DrawerToggleButton";

const HamburgerMenu = props => {
  return (
    <header className="hamburger-menu-header">
      <nav className="hamburger-menu-navigation">
        <div className="hamburger-grid">
          <div className="hamburger-login">login</div>
          <div className="hamburger-logout">logout</div>
          {/* <div className="hamburger-register">register</div> */}

          <div className="hamburger-icon">
            <div className="hamburger-icon-flexer">
              <DrawerToggleButton
                click={props.drawerToggleClickHandler}
              ></DrawerToggleButton>
            </div>
          </div>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-menu-user-logo"></div>
        </div>
      </nav>
    </header>
  );
};

export default HamburgerMenu;
