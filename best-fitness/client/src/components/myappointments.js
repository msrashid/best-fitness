import React from 'react';
import ReactDom from 'react-dom';
import './style.css'
const moment = require('moment');

class MyAppointments extends React.Component {
	state = {
		appointments: [],
	}

	constructor(){
		super();
		this.getAppointments = this.getAppointments.bind(this);
	}

	getAppointments(){
		//console.log(this.props.client.Client.id);
		fetch('/api/myAppointments/' + this.props.client.Client.id)
			.then(res => {
				if(res.status < 400){
					return res.json();
				}
				else{
					console.log("error");
				}
			})
			.then(body => {
				this.setState({appointments: body.allAppointments})
			})
  }
  render(){
  	this.getAppointments();
  	let appointment = this.state.appointments.map((item) => {
  		return <p>{item.date} {item.time}</p>
  	})
  	return(
  		<div>
  		{appointment}
  		</div>
  )}
}
export default MyAppointments;