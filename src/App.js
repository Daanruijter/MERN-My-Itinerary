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
   }
   );

   };

      backdropClickHandler = () => {
     this.setState({sideDrawerOpen:false})
   }

render(){

  let backdrop; 
  let landing;

  // if(this.state.sideDrawerOpen){
  
  //   backdrop = <Backdrop click  = {this.backdropClickHandler}></Backdrop>
   
  // }

  return (
    
    <BrowserRouter>
      <div className="App">
      <HamburgerMenu drawerToggleClickHandler={this.drawerToggleClickHandler}></HamburgerMenu>
      <Switch>
        {this.state.sideDrawerOpen ?  <Route exact path='/' component={SideDrawer} /> : <Route exact path='/' component={Landing} /> }
        <Route exact path='/Cities' component={Cities} />
      </Switch>
          
      </div>
    </BrowserRouter>
  );
}
}

export default App;

      
      {/* <SideDrawer className = "dont-show-side-drawer" show={this.state.sideDrawerOpen}></SideDrawer> */}
      // {console.log(this.state.sideDrawerOpen)}
  
    {/* {backdrop} */}
      
      {/* <main className="main">
   
        </main> */}
   


/* <TestComponent greet="hello" weather= "it rains" /> */