import React from 'react';
import ReactDom from 'react-dom';
import './style.css'

class Jumbotron extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="row jumbotron">
					<div className="col-lg-12 banner">
					</div>
				</div>
			</div>
		)
	}
}

export default Jumbotron;