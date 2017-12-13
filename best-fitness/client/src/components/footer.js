import React from 'react';
import ReactDom from 'react-dom';
import './style.css'
class Footer extends React.Component{
	render(){
		return(
			<div>
				<footer className="container-fluid text-center" id="contact-us">
  					<h2>Contact Us</h2>
  					<div>
  						100 Main Street<br/>
  						New York, NY 10000<br/>
  						(212) 555 1234
  					</div>
				</footer>
			</div>
		)
	}
}

export default Footer;