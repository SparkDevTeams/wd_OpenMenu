import React, { Component } from 'react';
import './App.css';
// import HelloWorld from './temp/ac.js'

import HelloC from './Component/HelloC'
import Hello from './components/hello';
import HelloWorld from './HelloWorld-temp';
import HelloT from './components/helloT';
import AndreaComponent from './AndreaComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to SparkDev!</h1>
          <Hello />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloC/>
        <HelloWorld />
        <HelloT/>
        <AndreaComponent/>
      </div>
    );
  }
}

export default App;