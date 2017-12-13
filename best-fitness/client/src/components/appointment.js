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
    fetch('/api/appointment/' + this.props.id, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.props.date,
        time: '03:00',
        trainerId: '1',
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
      <div className="display">
        <button className="bigButton" type="button" onClick={this.handleSubmit}>{this.props.date}</button>
      </div>
    )
  };
};

class Appointment extends React.Component{
	constructor() {
    super();
    this.state = {
      clientId: '',
      today: '',
      date: '',
      time: '',
    };
  };


  render(){
    console.log(this.props.client);
    let clientId = this.props.client ? this.props.client.Client.id : '';
    console.log(clientId);
    let todaysDate = moment();
    let list = [];
    for (let i = 0; i < 7; i++) {
      list.push(todaysDate.add(1, 'days').format("YYYY-MM-DD"));
    }

    let dayElems = list.map((item) => {
      return(
        <div>
          <Day date={item} onClick={this.handleSubmit} id={clientId}/>
          <br/>
        </div>)
    })

    return(
      <div>
        <br/>
        <br/>
        <div className="displayout">
          {dayElems}
        </div>
        <div className="row">
        </div>
      </div>
    )
	}
}

export default Appointment;