import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';
import './style.css'



class loggedInNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  };
  render() {
    if(this.state.isLoggedIn){
      return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand newfont" to="/">Best Fitness</Link>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link className="nav-item" to="/appointment">Create Appointment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item" to="/myappointments">My Appointments</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <Link className="nav-link glyphicon glyphicon-log-out" to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br/>
        <br/>
      </div> 
    )}
  }
} 
export default loggedInNavbar;