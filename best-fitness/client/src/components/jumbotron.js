import React from 'react';
import ReactDom from 'react-dom';
import './style.css'

class Jumbotron extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="row jumbotron newfont">
					<div className="col-lg-12 banner jumbotron-text">
						<h1>Lift with the Force!</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default Jumbotron;