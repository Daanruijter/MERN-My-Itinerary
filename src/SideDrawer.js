import React from 'react';
import './SideDrawer.css';


const sideDrawer =  props => { 
    console.log(props.show)
    let drawerClasses;
    // if (!props.show){
       
    //     drawerClasses = 'dont-show-side-drawer'
    // } 
    
    // if (props.show){
       
    //     drawerClasses = 'side-drawer open'
    // } 
   
    return (
        // <div className = "side-drawer-flexer">
    <nav className="side-drawer-open">
        
        <div>
                <ul>
                    <li><a href ="/">A link</a></li>
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




