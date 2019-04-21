import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Main from "./Main";
import NotFound from "./NotFound";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3f3f3;
    padding: 15px;
    margin: 0;
    color: #333;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
`;

class App extends Component {
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

export default App;
