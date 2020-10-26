import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/errorBoundry";
import NetworkService from "./services/networkService";
import { NetworkServiceProvider } from "./components/networkServiceContext";

import store from "./store";

const networkService = new NetworkService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <NetworkServiceProvider value={networkService}>
        <Router>
          <App />
        </Router>
      </NetworkServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
