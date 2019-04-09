import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import Navbar from './components/navbar'
import Home from './components/home'
import Verify from './components/verify'
class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/verify' component={Verify} exact/>
          <Route path='/register' component={Register} exact/>
      </div>
    );
  }
}

export default App;
