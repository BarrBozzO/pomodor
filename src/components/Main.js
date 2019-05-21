import React from "react";
import styled from "styled-components";

import Header from "./Header";
import TaskContainer from "./task/TaskContainer";
import PomodorContainer from "./pomodor/PomodorContainer";

const StyledMain = styled.div`
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
`;

function Main() {
  return (
    <StyledMain>
      <Header />
      <PomodorContainer />
      <TaskContainer />
    </StyledMain>
  );
}

export default Main;
