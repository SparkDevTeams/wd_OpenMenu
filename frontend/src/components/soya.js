import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class SoyasComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Soyas Component!</h1>
        </header>
      </div>
    );
  }
}

export default SoyasComponent;