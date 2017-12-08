import React from 'react';
import ReactDom from 'react-dom';
import './style.css'
const moment = require('moment');


class Day extends React.Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    fetch('/api/appointment', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.props.date,
        time: '03:00',
        ClientId: 1,
        TrainerId: 1,
      }),
    })
    .then(res => {

      if(res.status === 400) {
        // show an error in this component
        this.setState({errorMessage: 'Unsuccessful'});
      } else {
        return res.json();
      }
    })
    .then(body => {
      console.log(body);
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleSubmit}>{this.props.date}</button>
      </div>
    )
  };
};

let todaysDate = moment();



class Appointment extends React.Component{
	constructor() {
    super();
    this.state = {
      clientId: '',
      today: todaysDate,
      date: '',
      time: '',
    };
  };



   render(){
    return(
      <div>
        <br/>
        <div className="row">
          <div className="col-xs-12 text-center">
              <Day date={todaysDate.format("YYYY-MM-DD")} onClick={this.handleSubmit}/>
          </div>
        </div>
      </div>
    )
	}
}

export default Appointment;