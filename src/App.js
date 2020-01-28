import React, { Component } from 'react';

import './App.css';
// import TestComponent from './TestComponent'
import MYtineraryLogo from './Pictures/MYtineraryLogo.png';
import startBrowsing from './Pictures/startBrowsing.png';
import homeIcon from './Pictures/homeIcon.png';

class App extends Component {

render(){
  return (
   
    <div className="App">
      
      <img className = "MYtineraryLogo" src = {MYtineraryLogo} alt="MYtineraryLogo"/>
      <p>
        Find your perfect trip, designed by insiders who know and love their cities. 
      </p>

      <h1 className="start-browsing-header">Start browsing</h1>
      <div className = "start-browsing-flexer">
    <img className = "startBrowsing" src = {startBrowsing} alt ="startBrowsing"/>
    </div>
    <p>
        Want to build your own MYtinerary?
      </p>
     
     {/* those will be UI/functional components */}
     <div className = "UI-flexer">
     <div className = "login-box">
    <a href = "">Log in</a>
     </div>
     <div className = "login-box">
     <a href = "">Create Account</a>
     </div>
     </div>
     <div className = "home-flexer">
     <img className = "homeIcon" src = {homeIcon} alt ="homeIcon"/>
      </div>
    </div>
  );
}
}

export default App;


/* <TestComponent greet="hello" weather= "it rains" /> */