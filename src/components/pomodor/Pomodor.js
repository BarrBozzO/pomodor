import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Timer from "./PomodorTimer";

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
  margin-bottom: 15px;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

function Pomodor(props) {
  const timer = props.pomodorTimer,
    settings = props.pomodorSettings;
  return (
    <Container>
      <Timer
        timer={timer}
        settings={settings}
        handleStart={props.handleStartTimer}
        handlePause={props.handlePauseTimer}
        handleStop={props.handleStopTimer}
        handleSet={props.handleSetTimer}
      />
    </Container>
  );
}

Pomodor.propTypes = {
  pomodorTimer: PropTypes.object.isRequired,
  pomodorSettings: PropTypes.object.isRequired,
  handleStartTimer: PropTypes.func.isRequired,
  handlePauseTimer: PropTypes.func.isRequired,
  handleStopTimer: PropTypes.func.isRequired,
  handleSetTimer: PropTypes.func.isRequired
};

export default Pomodor;
