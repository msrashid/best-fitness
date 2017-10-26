import React from 'react';
import ReactDom from 'react-dom';



const fixNavbar =  React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Best Fitness</a>
					<div className="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li class="nav-item">
								<a class="nav-link" href="#">LOGIN</a>
							</li>
						</ul>
					</div>
				</div>
			</nav> 
		);
	}
});
ReactDOM.render(<fixNavbar/>, document.getElementById('fixed-navbar'));