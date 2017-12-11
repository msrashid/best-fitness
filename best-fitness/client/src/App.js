import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import navbar from './components/navbar.js';
import login from './components/login.js';
import register from './components/register.js';
import appointment from './components/appointment.js';
import LoggedInNavbar from './components/loggedInNavbar.js';

class App extends Component {
  state = {clients: []}

  componentDidMount() {
    fetch('/clients')
      .then(res => res.json())
      .then(clients => this.setState({ clients: clients.allClients }));
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path ="/" component={navbar}/>
            <Route path ="/login" component={login}/>
            <Route path ="/register" component={register}/>
            <Route path ="/appointment" component={appointment}/>
            <Route path ="/appointment" component={LoggedInNavbar}/>
          </div>
        </Router>
        <br/>
        <div className="jumbotron img-responsive">
          <div className="container-fluid">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
