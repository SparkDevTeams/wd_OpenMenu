import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Kitchen from "@material-ui/icons/KitchenRounded";
import Fastfood from "@material-ui/icons/FastfoodRounded";
import LocalLibrary from "@material-ui/icons/LocalLibraryRounded";
import ShoppingCart from "@material-ui/icons/ShoppingCartRounded";
import PowerButton from "@material-ui/icons/PowerSettingsNewRounded";
import PropTypes from "prop-types";

import LogoSm from "../../assets/logo_sm.svg";

const styles = {
  "@media (min-width: 1024px)": {
    container: { display: "flex" },
    userName: {
      paddingLeft: "60%",
      textDecoration: "none",
      color: "white"
    },
    menuButtons: {
      textDecoration: "none",
      color: "white"
    },
    powerButton: {
      textDecoration: "none",
      color: "white",
      paddingLeft: "10%"
    },
    img: { width: "200", height: "200", flex: 1 }
  },
  "@media (min-width: 350px)": {
    container: { display: "flex" },
    userName: {
      paddingLeft: "1%",
      textDecoration: "none",
      color: "white"
    },
    menuButtons: {
      textDecoration: "none",
      color: "white"
    },
    powerButton: {
      textDecoration: "none",
      color: "white",
      paddingLeft: "1%"
    },
    img: { width: "120", height: "120", flex: 1 }
  }
};

function NavbarV(props) {
  const { classes } = props;
  if (props.auth) {
    return (
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.container}>
          <Link to="/home">
            <IconButton>
              <img src={LogoSm} alt="Whooops!" className={classes.img} />
            </IconButton>
          </Link>

          <Typography variant="title" color="inherit">
            Open Menu
          </Typography>

          <Link to="/menus">
            <IconButton color="inherit">
              <LocalLibrary className={classes.menuButtons} />
            </IconButton>
          </Link>

          <Link to="/recipes" className={classes.menuButtons}>
            <IconButton color="inherit">
              <Fastfood />
            </IconButton>
          </Link>

          <Link to="/pantry" className={classes.menuButtons}>
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

          <Typography
            variant="title"
            color="inherit"
            className={classes.userName}
          >
            {localStorage.getItem("user")
              ? localStorage.getItem("user").split("@")[0]
              : ""}
          </Typography>

          <div>
            <IconButton color="inherit" onClick={props.logout}>
              <PowerButton className={classes.powerButton} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="fixed" color="default">
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

export default withStyles(styles)(NavbarV);
