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

class App extends Component {
  render() {
    let margin = {
      marginTop: "10%"
    };

    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <NavbarC />
            <div style={margin}>
              <Switch>
                <Route exact path="/" component={LandingPC} />
                <Route path="/welcome" component={LandingPC} />
                <Route path="/home" component={HomePC} />
                <Route path="/shoppinglist" component={ShoppinglistPC} />
                <Route path="/pantry" component={PantryBrowserPC} />

                <Route exact path="/menus" component={MenuBrowserPC} />
                <Route exact path="/recipes" component={RecipeBrowserPC} />

                <Route exact path="/recipes/:id" component={RecipeC} />
                <Route exact path="/menus/:id" component={MenuC} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
