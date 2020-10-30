import React from "react";
import { Route, Switch } from "react-router-dom";

import { AppHeader } from "../AppHeader";
import { HomePage, ProfilePage } from "../pages";

import "./App.css";

export const App = () => {
  return (
    <main role="main">
      <AppHeader />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </main>
  );
};
