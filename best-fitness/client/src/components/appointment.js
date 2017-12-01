import React from 'react';
import ReactDom from 'react-dom';
import './style.css'


class Appointment extends React.Component{
	constructor() {
    super();
    this.state = {
      clientId: '',
      date: '',
      time: ''
    };
  };

   render(){
    return(
      <div>
        <form>
        <div className="row control-group">
          <div className="form-group col-xs-12 floating-label-form-group controls">
            <label>Time (have to add calandar)</label>
            <input type="text" className="form-control" placeholder="" name="time" required data-validation-required-message="valid date"/>
            <p className="help-block text-danger"></p>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="form-group col-xs-12 text-center">
              <button type="submit" className="btn btn-default">submit</button>
          </div>
        </div>
      </form>
      </div>
    )
	}
}

export default Appointment;