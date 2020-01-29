import React, { Component } from 'react';

import './App.css';
import Landing from './Landing'
import Cities from './Cities'
import HamburgerMenu from './HamburgerMenu'
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'


// import TestComponent from './TestComponent'


class App extends Component {

  state = {
      sideDrawerOpen: false
  }

   drawerToggleClickHandler = () => { 
     this.setState((prevState) => {
     return {sideDrawerOpen: !prevState.sideDrawerOpen};
   });

   };
render(){
  let sideDrawer;
  let backdrop; 

  if(this.state.sideDrawerOpen){
    sideDrawer =    <SideDrawer></SideDrawer>
    backdrop = <Backdrop></Backdrop>
  }

  return (
    
    <BrowserRouter>
    <div className="App">
      <HamburgerMenu drawerToggleClickHandler={this.drawerToggleClickHandler}></HamburgerMenu>
    {sideDrawer}
    {backdrop}
      
      <main className="main">
        <p>
    This is the page content
        </p>
        </main>
   
    <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/Cities' component={Cities} />
          </Switch>
          
    </div>
    </BrowserRouter>
  );
}
}

export default App;


/* <TestComponent greet="hello" weather= "it rains" /> */