import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./homepage";
import Animelist from "./animelist";
import Details from "./details";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/anime-list" component={Animelist} />
        <Route exact path="/anime-details/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default Routes;
