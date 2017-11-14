import React from 'react';
import ReactDom from 'react-dom';
import './style.css'


class Register extends React.Component{

	 render(){
    return(
      <div>
        <form name="register" action="/reigster" method="post">
        <div className="row control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="First Name" name="firstName" required data-validation-required-message="Please enter your first name."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="row control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name" name="lastName" required data-validation-required-message="Please enter your first name."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="row control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" name="username" required data-validation-required-message="Please enter your username."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="row control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Email Address" name="email" required data-validation-required-message="Please enter your email address."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="row control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" required data-validation-required-message="Please enter your password."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="form-group col-xs-12 text-center">
              <button type="submit" className="btn btn-default">Register</button>
          </div>
        </div>
      </form>
      </div>
    )
	}
}

export default Register;