import React from 'react'
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const LandingPV = (props) => {
    if(props.auth)
    { 
      return <Redirect to='/home' /> 
    }
    else
    {
      return(
          <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <form>
                  <TextField id='email' label='Email' 
                              margin='normal' 
                              onChange={props.onUserChange}
                              fullWidth />
                  <TextField id='password' 
                              label='Password' 
                              type='password' 
                              onChange={props.onPWChange}
                              autoComplete='current-password' 
                              margin='normal' fullWidth />
                </form>
              </CardContent>

            </CardActionArea>
              <div>
                <Button variant='contained' 
                  onClick={props.login}> Login </Button>
                <Button variant='contained' 
                  onClick={props.signup}> Signup </Button>
              </div>
          </Card>
        </div>
      );
    }
}

export default LandingPV;