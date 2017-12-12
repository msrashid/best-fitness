import React from 'react';
import ReactDom from 'react-dom';
import './style.css'
const moment = require('moment');

class MyAppointments extends React.Component {
	constructor(){
		super();
		this.getAppointments
	}
	getAppointments(){
		console.log(this.props.id);
		fetch('/api/MyAppointments' + this.props.id)
			.then(res => {
				if(res.status < 400){
					return res
				}
				else{
					console.log("error")
				}
			})
			.then(body => {
				console.log(body);
			})
  }
  render(){
  	return(
  		<div></div>
  )}
}
export default MyAppointments;