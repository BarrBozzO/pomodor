import React from "react";
import PropTypes from "prop-types";

function Task(props) {
  return (
    <div>
      <div>{props.label}</div>
      <div>{props.description}</div>
      <div>
        <button onClick={props.handleStateChange}>toggle</button>
        <button onClick={props.handleRemove}>remove</button>
      </div>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleStateChange: PropTypes.func.isRequired
};

export default Task;
