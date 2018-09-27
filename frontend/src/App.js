import React, { Component } from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'


/* Add your Components underneath */
import CristianC from './components/CristianC'

import AlexC from './components/AlexC';
import AndresC from './components/AndresC'
import JabinC from './components/JabinC'
import TommyC from './components/TommyC';
import ElliotNicholsonC from './components/ElliotNicholsonC'
import OctavioC from './components/OctavioC'
import AndreaC from '/components/AndreaC'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SparkDev!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
<<<<<<< HEAD
        <AndreaC/>
=======
        {/* Add your Component underneath */}
        <CristianC />
        <AlexC />
        <AndresC />
        <TommyC />
        <ElliotNicholsonC /> 
        <OctavioC />
>>>>>>> dev
      </div>
    );
  }
}

export default App;