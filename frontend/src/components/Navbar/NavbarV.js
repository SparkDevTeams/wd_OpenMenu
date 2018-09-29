import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const NavbarV = (props) => {
  if (props.auth) {
    return (
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <Typography variant='title' color='inherit' > Open Menu </Typography>
          <Link to='/'>
            <Button onClick={props.logout} color='inherit'>Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
  } else {
    return (
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <Typography variant='title' color='inherit' > Open Menu </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavbarV
