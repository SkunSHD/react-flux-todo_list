import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {
  render() {
    return(
      <div>
        <nav class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">React-Flux</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Featured <span class="sr-only">(current)</span></a></li>
                <li><a href="#/archives">Archives</a></li>
                <li><a href="#/about">About</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
