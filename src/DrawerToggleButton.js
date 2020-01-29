import React from 'react'
import './DrawerToggleButton.css'


const DrawerToggleButton = props => {return (
<button className="toggle-button" onClick = {props.click}>  <div className="button-hamburger-menu-icon"></div>
            <div className="button-hamburger-menu-icon"></div>
            <div className="button-hamburger-menu-icon"></div></button>
)
}

export default DrawerToggleButton
