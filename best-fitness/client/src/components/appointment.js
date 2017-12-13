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
    return (
      <div>
        <button type="button" onClick={() => this.props.setDate(this.props.date)}>{this.props.date}</button>
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
      <div>
        <button type="button" onClick={this.handleSubmit}>{this.props.time.format("hA")}</button>
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
    let clientId = this.props.client ? this.props.client.Client.id : '';
    let Elems = [];
    console.log(this.props.client);
    console.log(clientId);
    if(!Boolean(this.state.date)) {
      let todaysDate = moment();
      let list = [];
      for (let i = 0; i < 7; i++) {
        list.push(todaysDate.add(1, 'days').format("YYYY-MM-DD"));
      }

      Elems = list.map((item) => {
        return <Day date={item} setDate={this.setDate} id={clientId} />
      });

    } else if (!Boolean(this.state.time)) {
      let list = [];

      for (let i = 8; i < 20; i++) {
        console.log(moment().hours(i).minutes(0).seconds(0).format("hA"));
        list.push(moment().hours(i).minutes(0).seconds(0));
      }

      Elems = list.map((item) => {
        return <Time time={item} setTime={this.setTime} setRedirect={this.setRedirect} id={clientId} date={this.state.date}/>
      });

    }
    
    return(
      <div>
        <br/>
        {Elems}
        <div className="row">
          <div className="col-xs-12 text-center">
          </div>
        </div>
      </div>
    )
	}
}

export default Appointment;