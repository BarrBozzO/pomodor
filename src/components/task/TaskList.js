import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

function TaskList(props) {
  return (
    <div>
      {Object.keys(props.tasks).map(id => {
        const { label, description, completed } = props.tasks[id];
        return (
          <Task
            key={id}
            id={id}
            label={label}
            description={description}
            completed={completed}
            handleRemove={props.handleRemove.bind(null, id)}
            handleToggle={props.handleToggle.bind(null, id)}
          />
        );
      })}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default TaskList;
