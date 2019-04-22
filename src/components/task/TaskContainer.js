import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addTask, removeTask, toggleTask } from "../../store/actions/tasks";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  transition: width 400ms linear;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

class TaskContainer extends Component {
  render() {
    return (
      <Container>
        <TaskForm handleAdd={this.props.addTask} />
        <TaskList
          tasks={this.props.tasks}
          handleRemove={this.props.removeTask}
          handleToggle={this.props.toggleTask}
        />
      </Container>
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
