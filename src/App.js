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
const sideDrawerOpenLanding = this.state.sideDrawerOpen

let styles1 = {display:'none'}


  return (
    


   
      <div className="App">
      <HamburgerMenu drawerToggleClickHandler={this.drawerToggleClickHandler}></HamburgerMenu>
      <BrowserRouter>
      <Switch>
        {this.state.sideDrawerOpen ?  <Route exact path='/' component={SideDrawer} /> : <Route exact path='/' component={Landing} /> }
        <Route exact path='/Cities' component={Cities} />
      </Switch>
  <div className= "test" style={styles1} >
  <Cities className = "not-show"  stateOfTheClick={this.state.sideDrawerOpen}></Cities>
      </div>
      </BrowserRouter>
    
      </div>
   
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