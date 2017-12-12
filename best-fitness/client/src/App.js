import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Login from './components/login.js';
import Logout from './components/logout.js';
import Register from './components/register.js';
import Appointment from './components/appointment.js';
import LoggedInNavbar from './components/loggedInNavbar.js';
import Jumbotron from './components/jumbotron.js'

class App extends Component {
  state = {
    clients: [],
    currUser: null,
  }

  constructor(props) {
    super(props);

    this.setCurrUser = this.setCurrUser.bind(this);
  }

  setCurrUser(currUser) {
    console.log("Setting current user.")
    console.log(currUser);
    this.setState({ currUser });
    console.log(Boolean(currUser));
  }

  componentDidMount() {
    fetch('/api/clients')
      .then(res => res.json())
      .then(clients => this.setState({ clients: clients.allClients }));
  }

  render() {
    console.log(this.state.currUser);
    return (
      <div>
        <Router>
          <div>
            <Route path ="/" component={Navbar}/>
            <Route path ="/login" render={() => <Login setCurrUser={this.setCurrUser} isLoggedIn={Boolean(this.state.currUser)}/>} />
            <Route path ="/logout" render={() => <Logout setCurrUser={this.setCurrUser}/>} />
            <Route path ="/register" component={Register}/>
            <Route path ="/appointment" render={() => <Appointment client={this.state.currUser}/>} />
            <Route exact path ="/" component={Jumbotron}/>
            <Route path ="/appointment" render={() => <LoggedInNavbar setCurrUser={this.setCurrUser} />}/>
            <Route path ="/myappointments" render={() => <LoggedInNavbar setCurrUser={this.setCurrUser} />}/>
          </div>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
