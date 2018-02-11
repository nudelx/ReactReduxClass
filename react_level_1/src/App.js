import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import User from './components/User'
import Timer from './components/Timer'
import ReactClass3 from './components/ReactClass3'
import ReactClass4 from './components/ReactClass4'
// import Timer, {startTimer} from './components/timer'
import SnakeGame from './components/snakeGame'

class App extends Component {

  state = { view: true }

  toggle = ( ) => this.setState({ view: !this.state.view })

  render() {
    const { view }  = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <ReactClass3/> */}
        {/* { view && <ReactClass4/> } */}
        {/* <button onClick={this.toggle}> {'rerender'} </button> */}
        {/* <Timer /> */}
        <SnakeGame />
      </div>

    );
  }
}

export default App;
