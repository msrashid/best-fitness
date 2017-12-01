import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import navbar from './components/navbar.js';
import login from './components/login.js';
import register from './components/register.js'
import appointment from './components/appointment.js'

class App extends Component {
  state = {clients: []}

  componentDidMount() {
    fetch('/clients')
      .then(res => res.json())
      .then(clients => this.setState({ clients: clients.allClients }));
  }

  render() {
    return (
      <Router>
        <div>
          <Route path ="/" component={navbar}/>
          <br/>
          <Route path ="/login" component={login}/>
          <br/>
          <Route path ="/register" component={register}/>
          <br/>
          <Route path ="/appointment" component={appointment}/>
        </div>
      </Router>
    );
  }
}

export default App;
