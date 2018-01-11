import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'
// import Timer, {startTimer} from './components/timer'
const userProps = {
  title: 'Master Jedi',
  name: 'Yoda'
}

const style = {
  backgroundColor: '#000'
}

const style2 = {
  border: '1px solid red'
}

const a = { title: "Master Jedi", name:"Yoda"}
const b = [1,2,3,4,5]


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {b.map((item) => <User key={item} title={`${a.title}${item}`} name={`${a.name}${item}`} />)}

        {/* <Timer time={this.props.state.time}/>
        {startTimer(state)} */}
      </div>

    );
  }
}

export default App;
