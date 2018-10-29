import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Kitchen from "@material-ui/icons/KitchenRounded";
import Fastfood from "@material-ui/icons/FastfoodRounded";
import LocalLibrary from "@material-ui/icons/LocalLibraryRounded";
import ShoppingCart from "@material-ui/icons/ShoppingCartRounded";
import PowerButton from "@material-ui/icons/PowerSettingsNewRounded";
// import { fade } from "@material-ui/core/styles/colorManipulator";
// import SearchIcon from "@material-ui/icons/Search";
// import InputBase from "@material-ui/core/InputBase";
import PropTypes from "prop-types";

import LogoSm from "../../assets/logo_sm.svg";

const styles = {
  container: { display: "flex" }
};

function NavbarV(props) {
  if (props.auth) {
    return (
      <AppBar position="fixed" color="secondary">
        <Toolbar className={styles.container}>
          <Link to="/home">
            <IconButton>
              <img
                src={LogoSm}
                alt="Whooops!"
                style={{ width: "200", height: "200", flex: 10 }}
              />
            </IconButton>
          </Link>

          <Typography variant="title" color="inherit">
            Open Menu
          </Typography>

          <Link
            to="/menus"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "10%"
            }}
          >
            <IconButton color="inherit">
              <LocalLibrary />
            </IconButton>
          </Link>

          <Link
            to="/recipes"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton color="inherit">
              <Fastfood />
            </IconButton>
          </Link>

          <Link to="/pantry" style={{ textDecoration: "none", color: "white" }}>
            <IconButton color="inherit">
              <Kitchen />
            </IconButton>
          </Link>

          <Link
            to="/shoppinglist"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
          </Link>

          <div
            styles={{
              marginLeft: "100%",
              justifyContent: "right",
              alignItems: "right"
            }}
          >
            <IconButton color="inherit" onClick={props.logout}>
              <PowerButton />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="fixed" color="secondary">
        <Redirect to="/welcome" />
        <Toolbar>
          <IconButton>
            <img
              src={LogoSm}
              alt="Whooops!"
              style={{ width: "15%", height: "15%", flex: 1 }}
            />
          </IconButton>

          <Typography variant="title" color="inherit">
            Open Menu
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

NavbarV.propTypes = {
  classes: PropTypes.object.isRequired
};

export default NavbarV;
