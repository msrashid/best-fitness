import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router';
import Appointment from './appointment.js';
import './style.css'


export default class Login extends React.Component{

	constructor(){
		super();
    this.state = {
			email: '',
			password: '',
      errorMessage: '',
      isLoggedIn: false,
      redirect: false,
      clientId: '',
		};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Redirect = this.Redirect.bind(this);
	}

  handleSubmit(event) {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
    .then(res => {
      console.log(res);
      if(res.status >= 400) {
        // show an error in this component
        this.setState({errorMessage: 'Invalid Email or Password'});
      } else {
        return res.json();
      }
    })
    .then(body => {
      console.log(body);
      console.log("I got the response here!")
      this.props.setCurrUser(body.user)
    });

    event.preventDefault();
  }

  handleChange(event) {
    const fieldName = event.target.name;
    this.setState({ [fieldName]: event.target.value });
  }

	/*login(e) {
		e.preventDefault();
		Auth.login(this.state.user, this.state.password)
			.catch(function(err) {
				console.log("Error", err);
			});
	}*/
  Redirect(){
    this.setState({redirect: true});
  }
	render(){
    console.log(this.props.isLoggedIn)
    if(this.props.isLoggedIn) {
      return <Redirect to="/appointment" />;
    }
    else if(this.state.redirect) {
      return <Redirect to="/register" />;
    }

		return(
			<div>
				<form className="text-center newfont" onSubmit={this.handleSubmit}>
        			<div className="row control-group text-center">
                <br/>
                <p className="text-center red-text">{this.state.errorMessage}</p>
          				<div className=" position-center form-group margin-fix floating-label-form-group controls">
            				<label>Email Address</label>
            				<input type="email" onChange={this.handleChange} value={this.state.email} className="form-control" placeholder="Email Address" name="email" required data-validation-required-message="Please enter your email address."/>
            				<p className="help-block text-danger"></p>
          				</div>
        			</div>
        			<div className="row control-group text-center">
          				<div className="form-group margin-fix floating-label-form-group controls">
            				<label>Password</label>
            				<input type="password" onChange={this.handleChange} value={this.state.password} className="form-control" placeholder="Password" name="password" required data-validation-required-message="Please enter your password."/>
            				<p className="help-block text-danger"></p>
          				</div>
        			</div>
        			<br/>
              <br/>
        			<div className="row">
          				<div className="form-group text-center">
              				<button type="submit" className="btn btn-default">Login</button>
              				<button type="button" className="btn btn-default" onClick={this.Redirect}>Register</button>
          				</div>
        			</div>
      			</form>
			</div>
		)
	}
}

