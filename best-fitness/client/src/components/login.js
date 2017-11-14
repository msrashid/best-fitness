import React from 'react';
import ReactDom from 'react-dom';
import './style.css'


export default class Login extends React.Component{

	/*constructor(){
		this.state = {
			user: '',
			password: '',
		};

	} */
	/*login(e) {
		e.preventDefault();
		Auth.login(this.state.user, this.state.password)
			.catch(function(err) {
				console.log("Error", err);
			});
	}*/

	 render(){
		return(
			<div>
				<form name="login" action="/login" method="post">
        			<div className="row control-group">
          				<div className="form-group col-xs-12 floating-label-form-group controls">
            				<label>Email Address</label>
            				<input type="email" className="form-control" placeholder="Email Address" name="email" required data-validation-required-message="Please enter your email address."/>
            				<p className="help-block text-danger"></p>
          				</div>
        			</div>
        			<div class="row control-group">
          				<div class="form-group col-xs-12 floating-label-form-group controls">
            				<label>Password</label>
            				<input type="password" class="form-control" placeholder="Password" name="password" required data-validation-required-message="Please enter your password."/>
            				<p class="help-block text-danger"></p>
          				</div>
        			</div>
        			<br/>
        			<div class="row">
          				<div class="form-group col-xs-12 text-center">
              				<button type="submit" class="btn btn-default">Login</button>
              				<button type="button" class="btn btn-default"><a href="register">Register</a></button>
          				</div>
        			</div>
      			</form>
			</div>
		)
	}
}

