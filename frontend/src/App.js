import React, { Component } from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'

/* Add your Components underneath */
import CristianC from './components/CristianC'
import AndresC from './components/AndresC'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to SparkDev!</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Add your Component underneath */}
        <CristianC />
        <AndresC />
      </div>
    )
  }
}

export default App
