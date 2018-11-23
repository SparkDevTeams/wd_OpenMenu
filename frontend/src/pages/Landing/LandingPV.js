import React from "react";
import { Redirect } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import Logo from "../../assets/logo.svg";

const LandingPV = props => {
  if (props.auth) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div className="container-landing">
        <Card id="welcome-card">
          <img
            src={Logo}
            alt="Whooops!"
            style={{
              width: "50%",
              height: "50%",
              flex: 1,
              minHeight: 80,
              minWIdth: 80,
              maxHeight: 200
            }}
          />
          <h2 style={{ marginTop: 10, marginBottom: 3 }}>Open Menu</h2>

          <div
            style={{
              display: !props.showLogin ? "initial" : "none",
              paddingBottom: "20px"
            }}
          >
            <div id="checkmark-container">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" />
                </svg>
                Create and share Menu's & Recipes
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" />
                </svg>
                Manage your shopping list
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" />
                </svg>
                Find the best deals near you
              </p>
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={props.toggleLogin}
              style={{ paddingTop: 5 }}
            >
              Get Started
            </Button>
          </div>
          <div
            style={{
              display: props.showLogin ? "initial" : "none",
              paddingBottom: "20px"
            }}
          >
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
              <div className="buttons login-btn">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.login}
                >
                  Login
                </Button>
              </div>
              <div className="buttons login-btn">
                <Button variant="contained" onClick={props.signup}>
                  Signup
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default LandingPV;
