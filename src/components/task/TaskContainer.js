import React, { Component } from "react";
import { connect } from "react-redux";

import { addTask, removeTask, toggleTask } from "../../actions/tasks";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class TaskContainer extends Component {
  render() {
    return (
      <div>
        <TaskForm handleAdd={this.props.addTask} />
        <TaskList
          tasks={this.props.tasks}
          handleRemove={this.props.removeTask}
          handleToggle={this.props.toggleTask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(
  mapStateToProps,
  {
    addTask,
    removeTask,
    toggleTask
  }
)(TaskContainer);
