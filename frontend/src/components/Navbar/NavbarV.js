import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

function NavbarV(props) {
  const { classes } = props;
  if (props.auth) {
    return (
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {" "}
            Open Menu{" "}
          </Typography>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <IconButton color="inherit">
              <i class="material-icons">home</i>
            </IconButton>
          </Link>

          <Link to="/menus" style={{ textDecoration: "none", color: "white" }}>
            <IconButton color="inherit">
              <i class="material-icons">restaurant_menu</i>
            </IconButton>
          </Link>
          <Link
            to="/recipes"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton color="inherit">
              <i class="material-icons">restaurant</i>
            </IconButton>
          </Link>
          <Link to="/pantry" style={{ textDecoration: "none", color: "white" }}>
            <IconButton color="inherit">
              <i class="material-icons">collections_bookmark</i>
            </IconButton>
          </Link>
          <Link
            to="/shoppinglist"
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton color="inherit">
              <i class="material-icons">shopping_cart</i>
            </IconButton>
          </Link>

          <div className={classes.grow}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton onClick={props.logout} color="inherit">
              <i class="material-icons">power_settings_new</i>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="fixed" color="secondary">
        <Redirect to="/welcome" />;
        <Toolbar>
          <Typography variant="title" color="inherit">
            {" "}
            Open Menu{" "}
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
