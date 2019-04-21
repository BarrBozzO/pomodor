import React from "react";

import Header from "./Header";
import TaskContainer from "./task/TaskContainer";
import PomodorContainer from "./pomodor/PomodorContainer";

function Main() {
  return (
    <div>
      <Header />
      <PomodorContainer />
      <TaskContainer />
    </div>
  );
}

export default Main;
