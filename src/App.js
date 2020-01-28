import React, { Component } from 'react';

import './App.css';
import Landing from './Landing'
import Cities from './Cities'
import HamburgerMenu from './HamburgerMenu'
import Home from './Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import TestComponent from './TestComponent'


class App extends Component {

render(){
  return (
    
    <BrowserRouter>
    <div className="App">
      <HamburgerMenu></HamburgerMenu>
    <a href="/Cities">Cities</a>
    <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/Cities' component={Cities} />
          </Switch>
          {/* <a href="./home/daan/Desktop/Ubiqum/MERN/Sprint1/client/src/cities">Click to go to cities</a> */}
    </div>
    </BrowserRouter>
  );
}
}

export default App;


/* <TestComponent greet="hello" weather= "it rains" /> */