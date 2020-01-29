import React from 'react';
import './SideDrawer.css';


const sideDrawer =  props => { 
    console.log(props.show)
    let drawerClasses;
   
   
    return (
       
    <nav className="side-drawer-open">
        
        <div>
                <ul>
                    <li><a href ="/">Home</a></li>
                    <li> <a href="/Cities">Cities</a></li>
                </ul>
            </div>


        <ul>
            <li>
                <a href="/">test</a> 
                <a href="/">test</a>
                </li></ul>
    </nav>
   
)}

export default sideDrawer;




