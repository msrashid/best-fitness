import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router';
import './style.css'

export default class Logout extends React.Component{
	render() {
		fetch('/api/logout')
			.then(this.props.setCurrUser(null));
		return <Redirect to="/" />;
	}
}
