import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { periodTypes as PERIOD_TYPES } from "../../constants";
import Button from "../common/Button";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin 15px 0;
`;

function PomodorTimerControls(props) {
  const handleSet = type => {
    let newRemain = props.settings[type];
    return () => props.handleSet(newRemain, type);
  };

  return (
    <div>
      <ButtonsContainer>
        <Button
          handleClick={
            props.timerState === "started"
              ? props.handlePause
              : props.handleStart
          }
          value={
            props.timerState === "stopped"
              ? "СТАРТ"
              : props.timerState === "paused"
              ? "ПРОДОЛЖИТЬ"
              : "ПАУЗА"
          }
          primary={true}
          disabled={props.timerState === "stopped" && props.timerRemains <= 0}
        />
        <Button
          handleClick={props.handleStop}
          disabled={props.timerState === "stopped"}
          value="СТОП"
          primary={true}
        />
      </ButtonsContainer>
      <ButtonsContainer>
        <Button
          handleClick={handleSet("pomodoro")}
          value={PERIOD_TYPES["pomodoro"]}
        />
        <Button handleClick={handleSet("long")} value={PERIOD_TYPES["long"]} />
        <Button
          handleClick={handleSet("short")}
          value={PERIOD_TYPES["short"]}
        />
      </ButtonsContainer>
    </div>
  );
}

PomodorTimerControls.propTypes = {
  settings: PropTypes.object.isRequired,
  timerState: PropTypes.string.isRequired,
  timerRemains: PropTypes.number.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleSet: PropTypes.func.isRequired
};

export default PomodorTimerControls;
