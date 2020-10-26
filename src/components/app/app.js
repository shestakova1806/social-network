import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import AppHeader from "../appHeader";
import { HomePage, ProfilePage } from "../pages";

import "./app.css";

const App = () => {
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

export default App;
