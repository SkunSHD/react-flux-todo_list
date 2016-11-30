import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Featured from "./components/pages/Featured";
import About from "./components/pages/About";
import Archives from "./components/pages/Archives";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured} />
      <Route activeClassName="" path="about" component={About} />
      <Route path="archives(/:article)" name="article" component={Archives} />
    </Route>
  </Router>,
app);