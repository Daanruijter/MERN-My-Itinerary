import React from 'react'
import './App.css';




const HamburgerMenu = props => {
    
    return (
   
    <header>
        <nav>
        
    
        <div className = "hamburger-menu-container" >
        <div className = "hamburger-menu-logo" >
            <div className="hamburger-menu"></div>
            <div className="hamburger-menu"></div>
            <div className="hamburger-menu"></div>
            <div>
                <ul>
                    <li><a href ="/">A link</a></li>
                    <li><a href ="/">A link</a></li>
                </ul>
            </div>
            </div>  
            </div>
        </nav>
    </header>
    
)
}

export default HamburgerMenu



