import React from 'react';
import '../CSS/HamburgerMenuList.css';
import {withRouter} from 'react-router-dom'

const HamburgerMenuList =  props => { 
   
    console.log(props)
   
   
    return (
        
       
    <nav className="hamburger-menu-list-open">
        
        <div className="hamburger-menu-list-container">
                <ul>
                    <div><li><a href ="/">Home</a></li></div>
                    <div><li> <a href="/Cities">Cities</a></li></div>
                    <div className="create-account"><li><a href="/Create-account">Create account</a></li></div>
                    <div><li><a href="/Login">Login</a></li></div>
                </ul>
            </div>


               
                
    </nav>
   
)}

export default withRouter (HamburgerMenuList);




