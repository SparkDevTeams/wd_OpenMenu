<<<<<<< HEAD
import React, { Component } from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'


/* Add your Components underneath */
import CristianC from './components/CristianC'
=======

import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import AndreaC from './components/AndreaC.js'  
>>>>>>> d32f466d7b95f2eaa47de339d546ef8a6a12a4f3



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
        <AndreaC/>
        {/* Add your Component underneath */}
        <CristianC />
        <AlexC />
        <AndresC />
        <TommyC />
        <ElliotNicholsonC /> 
        <OctavioC />
      </div>
    );
  }
}

export default App;