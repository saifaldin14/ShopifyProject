import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageComponent from "./components/ImageComponent";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/shopifyproject:title">
            <ImageComponent />
          </Route>
          <Route path="/shopifyproject">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
