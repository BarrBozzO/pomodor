import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Task from "./Task";

const transitionDuration = 250;

const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  border-top: 1px solid #ddd;
  margin-top: 15px;

  & .tasks-empty-enter,
  & .tasks-empty-appear,
  & .tasks-enter,
  & .tasks-appear {
    opacity: 0;
  }
  & .tasks-empty-enter-active,
  & .tasks-empty-appear-active,
  & .tasks-enter-active,
  & .tasks-appear-active {
    opacity: 1;
    transition: opacity ${transitionDuration}ms;
  }
  & .tasks-exit {
    opacity: 1;
  }
  & .tasks-exit-active {
    opacity: 0;
    transition: opacity ${transitionDuration}ms;
  }

  & .tasks__list-item-enter {
    opacity: 0.01;
  }

  & .tasks__list-item-enter-active {
    opacity: 1;
    transition: opacity ${transitionDuration}ms ease-in;
  }

  & .tasks__list-item-exit {
    opacity: 1;
  }

  & .tasks__list-item-exit-active {
    opacity: 0.01;
    transition: opacity ${transitionDuration}ms ease-in;
  }
`;

const NoTasksText = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 18px;
  color: #777;
  padding: 15px;
  margin: 0;
`;

const TasksHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content; center;
  align-items: center;
  padding: 15px 0;
  margin: 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 992px) {
    display: none;
  }

  & > div {
    flex: 1 0 0;
    align-self: center;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    text-transform: uppercase;
    color: #aaa;
  }
`;

function TaskList(props) {
  const tasksKeys = Object.keys(props.tasks);
  let tasksListContent = null,
    emptyTasksList = !tasksKeys.length;

  tasksListContent = (
    <CSSTransition
      in={!emptyTasksList}
      timeout={transitionDuration}
      unmountOnExit
      classNames="tasks"
    >
      <div>
        <TasksHeader>
          <div style={{ flex: "30% 0 0" }}>Название</div>
          <div style={{ flex: "40% 0 0" }}>Описание</div>
          <div>Статус</div>
          <div />
        </TasksHeader>
        <TransitionGroup className={"tasks__list"}>
          {tasksKeys.map(id => {
            const { label, description, completed } = props.tasks[id];
            return (
              <CSSTransition
                key={id}
                timeout={transitionDuration}
                classNames={"tasks__list-item"}
              >
                <Task
                  id={id}
                  label={label}
                  description={description}
                  completed={completed}
                  handleRemove={props.handleRemove.bind(null, id)}
                  handleToggle={props.handleToggle.bind(null, id)}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </CSSTransition>
  );

  return (
    <Container>
      {tasksListContent}
      {emptyTasksList && <NoTasksText>{"Пока задач нет"}</NoTasksText>}
    </Container>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default TaskList;
