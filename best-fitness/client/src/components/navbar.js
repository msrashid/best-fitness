import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom'; 


class Navbar extends React.Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">Best Fitness</a>
						<div className="collapse navbar-collapse">
							<ul class="nav navbar-nav navbar-right">
								<li class="nav-item">
									<a class="nav-link glyphicon glyphicon-log-in" href="login"> LOGIN</a>
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