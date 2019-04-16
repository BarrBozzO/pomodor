import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

function TaskList(props) {
  return (
    <div>
      {props.tasks.map(task => {
        const { id, label, description } = task;
        return (
          <Task
            key={id}
            id={id}
            label={label}
            description={description}
            handleRemove={props.handleRemove.bind(id)}
            handleStateChange={props.handleStateChange.bind(id)}
          />
        );
      })}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleStateChange: PropTypes.func.isRequired
};

export default TaskList;
