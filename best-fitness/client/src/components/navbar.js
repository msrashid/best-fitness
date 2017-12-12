import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom'; 


class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false,
		};
	};
	render() {
		if(this.state.isLoggedIn){
			return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">Best Fitness</Link>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li className="nav-item">
									<Link className="nav-link glyphicon glyphicon-log-out" to="logout"> LOGOUT</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<br/>
				<br/>
			</div> 
		)}
		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">Best Fitness</Link>
						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav navbar-right">
								<li className="nav-item">
									<Link className="nav-link glyphicon glyphicon-log-in" to="login"> LOGIN</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<br/>
				<br/>
			</div> 
	)};
}	

export default Navbar;