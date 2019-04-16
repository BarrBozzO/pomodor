import React, { Component } from "react";
import "../assets/css/App.css";
import TaskContainer from "./task/TaskContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskContainer />
      </div>
    );
  }
}

export default App;
