import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';

import HelloWorld from './HelloWorld-temp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SparkDev!</h1>
          <Hello />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
