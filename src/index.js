import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./components/App";
import { ErrorBoundry } from "./components/ErrorBoundry";
import { NetworkService } from "./services/NetworkService";
import { NetworkServiceProvider } from "./components/NetworkServiceContext";

import { store } from "./store";

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
