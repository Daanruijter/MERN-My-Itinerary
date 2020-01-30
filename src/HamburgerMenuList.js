import React from 'react';
import './HamburgerMenuList.css';


const HamburgerMenuList =  props => { 
    console.log(props.show)
    let drawerClasses;
   
   
    return (
       
    <nav className="hamburger-menu-list-open">
        
        <div className="hamburger-menu-list-container">
                <ul>
                    <div><li><a href ="/">Home</a></li></div>
                    <div><li> <a href="/Cities">Cities</a></li></div>
                    <div class="create-account"><li><a href="/Create-account">Create account</a></li></div>
                    <div><li><a href="/Login">Login</a></li></div>
                </ul>
            </div>


               
                
    </nav>
   
)}

export default HamburgerMenuList;




