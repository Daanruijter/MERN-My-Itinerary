import React, { Component } from 'react';

import '../CSS/App.css';
import Landing from './Landing'
import Cities from './Cities'
import CreateAccount from './CreateAccount'
import Login from './Login'
import HamburgerMenu from './HamburgerMenu'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HamburgerMenuList from './HamburgerMenuList'







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




  return (
    

   
      <div className="App">

   
    <HamburgerMenu drawerToggleClickHandler={this.drawerToggleClickHandler}></HamburgerMenu>

      <BrowserRouter>
     {this.state.hamburgerMenuList ?  <HamburgerMenuList /> : this.routesGenerator()}
 

      
      </BrowserRouter>
    
      </div>
   
  );
}
}

export default App;

