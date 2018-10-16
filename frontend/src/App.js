import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavbarC from "./components/Navbar/NavbarC";
import LandingPC from "./pages/Landing/LandingPC";
import HomePC from "./pages/Home/HomePC";
import ShoppinglistPC from "./pages/Shoppinglist/ShoppinglistPC";
import RecipeBrowserPC from "./pages/RecipeBrowser/RecipeBrowserPC";
import RecipeC from "./components/Recipe/RecipeC";
import PantryBrowserPC from "./pages/Pantry/PantryBrowserPC";
import MenuBrowserPC from "./pages/MenuBrowser/MenuBrowserPC";
import MenuC from "./components/Menu/MenuC";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { Toolbar } from "@material-ui/core";

class App extends Component {
  render() {
    let margin = {
      marginTop: "5%"
    };

    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <NavbarC />
            <div style={margin}>
              <Switch>
                <Route exact path="/" component={LandingPC} />
                <Route exact path="/recipes/recipe" component={RecipeC} />
                <Route exact path="/menus/menu" component={MenuC} />
                <Route path="/menus" component={MenuBrowserPC} />
                <Route path="/welcome" component={LandingPC} />
                <Route path="/home" component={HomePC} />
                <Route path="/shoppinglist" component={ShoppinglistPC} />
                <Route path="/recipes" component={RecipeBrowserPC} />
                <Route path="/pantry" component={PantryBrowserPC} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
