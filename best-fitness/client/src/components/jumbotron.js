import React from 'react';
import ReactDom from 'react-dom';
import './style.css'

class Jumbotron extends React.Component{
	render(){
		return(
			<div>
				<div className="jumbotron">
					<div className="banner">
						<div className="col-md-12">
							<div className="box">
								<p className="text-center"> text inside here </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Jumbotron;