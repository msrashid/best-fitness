import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router';
import './style.css'
const moment = require('moment');


class Day extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
    console.log("In render")
    return (
      <div className="display">
        <button
          className="bigButton"
          type="button"
          onClick={() => this.props.setDate(this.props.date.database)}>
          {this.props.date.display}
        </button>
      </div>
    )
  };
};

class Time extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("Date")
    console.log(this.props.date)
    console.log("Time")
    console.log(this.props.time)

    fetch('/api/appointment/' + this.props.id, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: this.props.date,
        time: this.props.time.format("HH:mm:ss"),
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
      this.props.setRedirect();
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="display">
        <button className="bigButton" type="button" onClick={this.handleSubmit}>{this.props.time.format("hA")}</button>
      </div>
    )
  };
}

class Appointment extends React.Component{
	state = {
      date: null,
      time: null,
      redirect: false,
  };

  constructor(props) {
    super(props);

    this.setDate = this.setDate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setRedirect = this.setRedirect.bind(this);

  };

  setDate(date) {
    console.log("Setting date");
    console.log(date);
    this.setState({ date });
  };

  setTime(time) {
    console.log("Setting time")
    this.setState({ time });
  }

  setRedirect() {
    this.setState({ redirect: true });
  }


  render(){
    if(this.state.redirect) {
      return <Redirect to="/myappointments" />
    }
    if(this.props.client == null) {
      console.log("You're too slow");
      return <Redirect to="/" />
    }
    let clientId = this.props.client ? this.props.client.Client.id : '';
    let Elems = [];
    let heading = 'blah blah blah';
    console.log(this.props.client);
    console.log(clientId);
    if(!Boolean(this.state.date)) {
      let todaysDate = moment();
      let list = [];
      for (let i = 0; i < 7; i++) {
        let oneDay = todaysDate.add(1, 'days');
        list.push({
          database: oneDay.format("YYYY-MM-DD"),
          display: oneDay.format("ddd MM Do")
        });
      }
      console.log(list)

      Elems = list.map((item) => {
        return (
          <div>
            <Day date={item} setDate={this.setDate} id={clientId} />
            <br/>
          </div>
        )
      });

      heading = "Select the day you would like to meet with one of our talented trainers!";

    } else if (!Boolean(this.state.time)) {
      let list = [];
      for (let i = 8; i < 20; i++) {
        console.log(moment().hours(i).minutes(0).seconds(0).format("hA"));
        list.push(moment().hours(i).minutes(0).seconds(0));
      }

      Elems = list.map((item) => {
        return (
          <div>
            <Time time={item} setTime={this.setTime} setRedirect={this.setRedirect} id={clientId} date={this.state.date}/>
            <br/>
          </div>
        )
      });

      heading = "What time works for you?";

    }
    
    return(
      <div className = "container">
        <br/>
        <br/>
        <div className="row text-center">
          <h2>{heading}</h2>
        </div>
        <div className="displayout">
          {Elems}
        </div>
      </div>
    )
	}
}

export default Appointment;