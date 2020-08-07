import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {Intro} from "./Components/Intro";
import {Main} from "./Components/Main";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/intro" component={Intro} />
        <Route path="/main" component={Main} />
      </Switch>
    );
  }
}

export default Routes;
