import React from "react";

export class CardioRoot extends React.Component {
  constructor(props) {
    super(props);
    this.distanceEvent = this.distanceEvent.bind(this);
    this.timeEvent = this.timeEvent.bind(this);
    this.speedCalc = this.speedCalc.bind(this);
  }

  distanceEvent(e) {
    this.props.distanceSet(e.target.value);
  }

  timeEvent(e) {
    this.props.timeSet(e.target.value);
  }

  speedCalc() {
    let time = this.props.time;
    let distance = this.props.distance;
    if(time && distance > 0) {
        return distance / time;
    } else {
        return '0'
    }
    
  }

  render() {
    return (
      <div>
        <h1>Cardio Calculator</h1>
        <h2>Input your distance and time</h2>
        <label>Distance in miles </label>
        <input onChange={this.distanceEvent} />
        <br />
        <label>Time in hours </label>
        <input onChange={this.timeEvent} />
        <br></br>
        <p>Your speed = {this.speedCalc()} mph</p>
      </div>
    );
  }
}
