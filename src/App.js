import React, { Component } from 'react';

import './App.css';
import Landing from './Landing'
import Cities from './Cities'
import CreateAccount from './CreateAccount'
import Login from './Login'
import HamburgerMenu from './HamburgerMenu'
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HamburgerMenuList from './HamburgerMenuList'
import Backdrop from './Backdrop'



// import TestComponent from './TestComponent'


class App extends Component {

  state = {
    hamburgerMenuList: false
  }

   drawerToggleClickHandler = (e) => { 
    console.log(e.target)
     this.setState((prevState) => {
     return {hamburgerMenuList: !prevState.hamburgerMenuList};
     
   }
   );

   };

      backdropClickHandler = () => {
     this.setState({hamburgerMenuList:false})
   }


   routesGenerator() {

   
     return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Cities' component={Cities} />
        <Route exact path='/Create-account' component={CreateAccount} />
        <Route exact path='/Login' component={Login} />

        
    </Switch>
     )
   }

render(){
const hamburgerMenuList = this.state.hamburgerMenuList

let styles1 = {display:'none'}


  return (
    

   
      <div className="App">

    {/* <Landing show = "false" clickFunction ={this.drawerToggleClickHandler}></Landing> */}
    <HamburgerMenu drawerToggleClickHandler={this.drawerToggleClickHandler}></HamburgerMenu>

      <BrowserRouter>
     {this.state.hamburgerMenuList ?  <HamburgerMenuList /> : this.routesGenerator()}
  <div className= "test" style={styles1} >
  <Cities className = "not-show"  stateOfTheClick={this.state.hamburgerMenuList}></Cities>
      </div>
      </BrowserRouter>
    
      </div>
   
  );
}
}

export default App;

