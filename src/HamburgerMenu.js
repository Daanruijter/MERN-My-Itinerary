import React from 'react';
import './App.css';
import './HamburgerMenu.css'
import DrawerToggleButton from './DrawerToggleButton'



const HamburgerMenu = props => {
    
    return (
  
    <header className="hamburger-menu-header">
        <nav className="hamburger-menu-navigation">
        <div>
        <DrawerToggleButton click = {props.drawerToggleClickHandler}></DrawerToggleButton>
        </div>
        <div className = "hamburger-menu-container" >
        <div className = "hamburger-menu-user-logo" >
          
            <div>
                <ul>
                    <li><a href ="/">A link</a></li>
                    <li> <a href="/Cities">Cities</a></li>
                </ul>
            </div>
            </div>  
            </div>
        </nav>
    </header>
    
)
}

export default HamburgerMenu



