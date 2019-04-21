import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckBox from "../common/CheckBox";

const TaskCard = styled.div`
  width: 100%;
  display: flex;
  justify-content; center;
  align-items: center;
  padding: 15px 0;
  margin: 0;
`;

const TaskCardField = styled.div`
  flex: 1 0 0;
  align-self: center;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;

function Task(props) {
  return (
    <TaskCard>
      <TaskCardField>{props.label}</TaskCardField>
      <TaskCardField>{props.description}</TaskCardField>
      <TaskCardField>
        <CheckBox
          name="completed"
          id={props.id}
          checked={props.completed}
          handleChange={props.handleToggle}
        />
      </TaskCardField>
      <TaskCardField>
        <button onClick={props.handleRemove}>remove</button>
      </TaskCardField>
    </TaskCard>
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
