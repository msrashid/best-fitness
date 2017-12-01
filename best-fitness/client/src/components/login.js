import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router';
import './style.css'


export default class Login extends React.Component{

	constructor(){
		super();
    this.state = {
			email: '',
			password: '',
      errorMessage: '',
      isLoggedIn: false,
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

      if(res.status === 400) {
        // show an error in this component
        this.setState({errorMessage: 'Invalid Email or Password'});
      } else {
        this.setState({isLoggedIn: true});
        return res.json();
      }
    })
    .then(body => {
      console.log(body);
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

	 render(){
    if(this.state.isLoggedIn) {
      return <Redirect to="/appointment" />;
    }

		return(
			<div>
				<form onSubmit={this.handleSubmit}>
        			<div className="row control-group">
                <br/>
                <p className="text-center red-text">{this.state.errorMessage}</p>
          				<div className="form-group col-xs-12 floating-label-form-group controls">
            				<label>Email Address</label>
            				<input type="email" onChange={this.handleChange} value={this.state.email} className="form-control" placeholder="Email Address" name="email" required data-validation-required-message="Please enter your email address."/>
            				<p className="help-block text-danger"></p>
          				</div>
        			</div>
        			<div class="row control-group">
          				<div className="form-group col-xs-12 floating-label-form-group controls">
            				<label>Password</label>
            				<input type="password" onChange={this.handleChange} value={this.state.password} className="form-control" placeholder="Password" name="password" required data-validation-required-message="Please enter your password."/>
            				<p className="help-block text-danger"></p>
          				</div>
        			</div>
        			<br/>
        			<div className="row">
          				<div className="form-group col-xs-12 text-center">
              				<button type="submit" className="btn btn-default">Login</button>
              				<button type="button" className="btn btn-default"><a href="register">Register</a></button>
          				</div>
        			</div>
      			</form>
			</div>
		)
	}
}

