import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router';
import './style.css'


class Register extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isRegistered: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  };
  registerUser(event){
    console.log(this.state.email);
    fetch('/api/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }),
    })
    .then(res => {
      if(res.status < 400){
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
        this.setState({isRegistered: true});
      }
      return res.json();
    })
    event.preventDefault();
  }
  handleChange(event) {
    const fieldName = event.target.name;
    this.setState({ [fieldName]: event.target.value });
  }

	 render(){
    if(this.state.isRegistered) {
      return <Redirect to="/appointment" />;
    }
    return(
      <div>
        <br/>
        <form onSubmit={this.registerUser}>
        <div className="row control-group text-center">
          <div className="form-group margin-fix floating-label-form-group controls">
            <label>First Name</label>
            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.firstName} placeholder="First Name" name="firstName" required data-validation-required-message="Please enter your first name."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="row control-group text-center">
          <div className="form-group margin-fix floating-label-form-group controls">
            <label>Last Name</label>
            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.lastName} placeholder="Last Name" name="lastName" required data-validation-required-message="Please enter your first name."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="row control-group text-center">
          <div className="form-group margin-fix floating-label-form-group controls">
            <label>Email Address</label>
            <input type="email" className="form-control" onChange={this.handleChange} value={this.state.email} placeholder="Email Address" name="email" required data-validation-required-message="Please enter your email address."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <div className="row control-group text-center">
          <div className="form-group margin-fix floating-label-form-group controls">
            <label>Password</label>
            <input type="password" className="form-control"onChange={this.handleChange} value={this.state.password} placeholder="Password" name="password" required data-validation-required-message="Please enter your password."/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="form-group text-center">
              <button type="submit" className="btn btn-default">Register</button>
          </div>
        </div>
      </form>
      </div>
    )
	}
}

export default Register;