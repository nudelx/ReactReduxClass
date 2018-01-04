import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User'
const userProps = {
  title: 'Master Jedi',
  name: 'Yoda'
}

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

        <User title='Master Jedi' name='Yoda'/>
        <User title='Master Jedi1' name='Yoda1'/>
        <User title='Master Jedi2' name='Yoda2'/>
        <User title='Master Jedi3' name='Yoda3'/>

      </div>

    );
  }
}

export default App;
