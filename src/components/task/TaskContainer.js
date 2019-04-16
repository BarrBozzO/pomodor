import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class TaskContainer extends Component {
  render() {
    const tasks = [
      {
        id: 1,
        label: "test",
        description: "awdawdwad"
      },
      {
        id: 2,
        label: "awdtest",
        description: "aawdwdawdwad"
      }
    ];
    return (
      <div>
        <TaskForm />
        <TaskList
          tasks={tasks}
          handleRemove={() => console.log("1")}
          handleStateChange={() => console.log("1")}
        />
      </div>
    );
  }
}

export default TaskContainer;
