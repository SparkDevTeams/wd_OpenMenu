import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavbarC from "./components/Navbar/NavbarC";
import LandingPC from "./pages/Landing/LandingPC";
import HomePC from "./pages/Home/HomePC";
<<<<<<< HEAD
=======
import ShoppinglistPC from "./pages/Shoppinglist/ShoppinglistPC";
import RecipeBrowserPC from "./pages/RecipeBrowser/RecipeBrowserPC";
import RecipeC from "./components/Recipe/RecipeC";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { Toolbar } from "@material-ui/core";
>>>>>>> dev

class App extends Component {
  render() {
    let margin = {
      marginTop: "5%"
    };

    return (
<<<<<<< HEAD
      <BrowserRouter>
        <div className="App">
          <NavbarC />
          <div style={margin}>
            <Switch>
              <Route exact path="/" component={LandingPC} />
              <Route path="/welcome" component={LandingPC} />
              <Route path="/home" component={HomePC} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
=======
      <div>
        <BrowserRouter>
          <div className="App">
            <NavbarC />
            <div style={margin}>
              <Switch>
                <Route exact path="/" component={LandingPC} />
                <Route exact path="/recipes/recipe" component={RecipeC} />
                <Route path="/welcome" component={LandingPC} />
                <Route path="/home" component={HomePC} />
                <Route path="/shoppinglist" component={ShoppinglistPC} />
                <Route path="/recipes" component={RecipeBrowserPC} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
>>>>>>> dev
    );
  }
}

export default App;
