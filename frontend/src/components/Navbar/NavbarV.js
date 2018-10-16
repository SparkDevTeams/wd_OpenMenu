import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/core/SvgIcon';


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const NavbarV = props => {
  if (props.auth) {
    return (
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {" "}
            Open Menu{" "}
          </Typography>
          <Link to="/home">
            <IconButton>
              <i class="material-icons">
                home
              </i>
            </IconButton>
          </Link>

          <Link to="/menus">
            <IconButton>
            <i class="material-icons">
              restaurant_menu
            </i>
            </IconButton>
          </Link>
          <Link to="/recipes">
            <IconButton style={{textDecoration: 'none'}}>
            <i class="material-icons">
              restaurant
            </i>
            </IconButton>
          </Link>
          <Link to="/pantry">
            <IconButton>
            <i class="material-icons">
              collections_bookmark
            </i>
            </IconButton>
          </Link>
          <Link to="/shoppinglist">
            <IconButton>
              <i class="material-icons">
                shopping_cart
              </i>
            </IconButton>
          </Link>
          <Link to="/">
            
            <IconButton onClick={props.logout}>
            <i class="material-icons">
              power_settings_new
            </i>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {" "}
            Open Menu{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
};

export default NavbarV;
