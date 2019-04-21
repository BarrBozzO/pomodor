import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Task from "./Task";

const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  border-top: 1px solid #ddd;
  margin-top: 15px;
`;

const NoTasksText = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 20px;
  color: #777;
  padding: 15px;
  margin: 0;
`;

function TaskList(props) {
  const tasksKeys = Object.keys(props.tasks);
  return (
    <Container>
      {tasksKeys.length > 0 ? (
        tasksKeys.map(id => {
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
        })
      ) : (
        <NoTasksText>{"No tasks yet"}</NoTasksText>
      )}
    </Container>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default TaskList;
