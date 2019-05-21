import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CheckBox from "../common/CheckBox";
import Button from "../common/Button";

const TaskCard = styled.div`
  width: 100%;
  display: flex;
  justify-content; center;
  align-items: center;
  padding: 15px 0;
  margin: 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    position: relative;
  }
`;

const TaskCardField = styled.div`
  flex: ${({ flex }) => (flex ? flex : "1 0 0")};
  align-self: center;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ taskName, taskDesc, taskCompleted }) => {
    if (taskName) {
      return `
        font-weight: 600;
        padding-bottom: 8px;
      `;
    } else if (taskDesc) {
      return `
        padding-bottom: 8px;
      `;
    } else if (taskCompleted) {
      return `
        & {
          span {
            display: none;
            vertical-align: middle;
            margin-right: 8px;
            color: #999;
          }

          @media (max-width: 992px) {
            span {
              display: inline-block;
            }
          }
        }
      `;
    }
  }}

  @media (max-width: 992px) {
    flex: 0 0 100%;
    text-align: left;
    padding-right: 40px;
  }
`;

const RemoveTaskButton = styled(Button)`
  @media (max-width: 992px) {
    position: absolute;
    top: 16px;
    right: 0;
    border: none;
    padding: 2px 8px;
  }
`;

const RemoveTaskButtonValue = styled.span`
  display: inline-block;

  & {
    i {
      display: none;
      font-style: normal;
      font-size: 26px;
      line-height: 1;
    }
  }

  @media (max-width: 992px) {
    & {
      i {
        display: inline-block;
      }
      span {
        display: none;
      }
    }
  }
`;

function Task(props) {
  return (
    <TaskCard>
      <TaskCardField taskName={true} flex={"0 0 30%"}>
        {props.label}
      </TaskCardField>
      <TaskCardField taskDesc={true} flex={"0 0 40%"}>
        {props.description}
      </TaskCardField>
      <TaskCardField taskCompleted={true}>
        <span>Готово?:</span>
        <CheckBox
          name="completed"
          id={props.id}
          checked={props.completed}
          handleChange={props.handleToggle}
        />
      </TaskCardField>
      <TaskCardField>
        <RemoveTaskButton
          value={
            <RemoveTaskButtonValue>
              <i>&times;</i>
              <span>удалить</span>
            </RemoveTaskButtonValue>
          }
          primary={false}
          small={true}
          handleClick={props.handleRemove}
        />
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
