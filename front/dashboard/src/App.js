import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Callback from './components/Callback';

import Auth0 from './components/Auth0';

const auth = new Auth0();

class App extends Component {

  constructor () {
    super();
    this.state = {
      user: null,
      auth
    };
  }

  setUser (user) {
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" render={()=><Home user={this.state.user} auth={this.state.auth}/>}/>
      <Route path="/home2" render={()=><Home user={this.state.user} auth={this.state.auth}/>} />
      <Route path="/callback" render={()=><Callback login = {(user) => this.setUser(user)}/>}/>
      <Route component={ErrorPage}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
