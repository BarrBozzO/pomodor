import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createGlobalStyle } from "styled-components";

import { initPomodor } from "../store/actions/pomodor";

import Main from "./Main";
import NotFound from "./NotFound";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3f3f3;
    padding: 15px;
    margin: 0;
    color: #333;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.initPomodor();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, {initPomodor})(App);
