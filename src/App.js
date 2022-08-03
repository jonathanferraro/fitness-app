import logo from './logo.svg';
import './App.css';
import { CardioRoot } from './Components/CardioRoot/CardioRoot'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.distanceSet = this.distanceSet.bind(this);
    this.timeSet = this.timeSet.bind(this);
    this.state = { distance: 0, time:0}
  }

  distanceSet(num) {
    this.setState({distance: num})
  }

  timeSet(num) {
    this.setState({time: num})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <CardioRoot distanceSet={this.distanceSet} distance={this.state.distance} timeSet={this.timeSet} time={this.state.time}/>
          </header>
      </div>
    );
  }
}

export default App;

