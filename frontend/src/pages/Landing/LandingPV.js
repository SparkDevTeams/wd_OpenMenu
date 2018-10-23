import React from "react";
import { Redirect } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";

const LandingPV = props => {
  if (props.auth) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div className="containerL">
        <Card>
          <CardActionArea>
            <CardContent>
              <form>
                <TextField
                  id="email"
                  label="Email"
                  margin="normal"
                  onChange={props.onUserChange}
                  fullWidth
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  onChange={props.onPWChange}
                  autoComplete="current-password"
                  margin="normal"
                  fullWidth
                />
              </form>
            </CardContent>
          </CardActionArea>
          <div>
            <div className="buttons">
              <Button variant="contained" color="primary" onClick={props.login}>
                {" "}
                Login{" "}
              </Button>
            </div>
            <div className="buttons">
              <Button variant="contained" onClick={props.signup}>
                {" "}
                Signup{" "}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default LandingPV;
