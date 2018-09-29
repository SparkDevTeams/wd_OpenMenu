import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavbarC from './components/Navbar/NavbarC'
import LandingPC from './pages/Landing/LandingPC'
import HomePC from './pages/Home/HomePC'

class Start extends Component {
  render () {
    let margin = {
      marginTop: '5%'
    }

    return (
      <BrowserRouter>
        <div className='App'>
          <NavbarC />
          <div style={margin}>
            <Switch>
              <Route exact path='/' component={LandingPC} />
              <Route path='/welcome' component={LandingPC} />
              <Route path='/home' component={HomePC} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Start
