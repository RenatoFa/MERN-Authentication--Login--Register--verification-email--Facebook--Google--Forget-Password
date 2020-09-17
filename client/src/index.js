import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Register from "./Screens/Register";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route path="/register" exact render={(props) => <Register {...props} />} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
