import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom'; 


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
            <a className="navbar-brand" href="/">Best Fitness</a>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <a className="nav-link glyphicon glyphicon-log-out" href="logout"> LOGOUT</a>
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