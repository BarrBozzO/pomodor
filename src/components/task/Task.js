import React from "react";
import PropTypes from "prop-types";

function Task(props) {
  return (
    <div>
      <div>{props.label}</div>
      <div>{props.description}</div>
      <div>
        <button onClick={props.handleToggle}>toggle</button>
        <button onClick={props.handleRemove}>remove</button>
      </div>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default Task;
