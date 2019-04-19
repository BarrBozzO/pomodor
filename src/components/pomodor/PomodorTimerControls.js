import React from "react";
import PropTypes from "prop-types";

import Button from '../common/Button';

function PomodorTimerControls(props) {
  const handleSet = (type) => {
    let newRemain = props.settings[type];
    return () => props.handleSet(newRemain);
  };

  return (
    <div>
      <div>
        <Button
          handleClick={props.timerState === "started" ? props.handlePause : props.handleStart}
          value={props.timerState === "stopped" ? "START" : props.timerState === "paused" ? "RESUME" : "PAUSE"}
          />
        <Button
          handleClick={props.handleStop}
          disabled={props.timerState === "stopped"}
          value="STOP"
          />
      </div>
      <div>
        <Button handleClick={handleSet('pomodoro')} value="Pomodoro" />
        <Button handleClick={handleSet('long')} value="Long Break" />
        <Button handleClick={handleSet('short')} value="Short Break" />
      </div>
    </div>
  );
}

PomodorTimerControls.propTypes = {
  settings: PropTypes.object.isRequired,
  timerState: PropTypes.string.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleSet: PropTypes.func.isRequired
};

export default PomodorTimerControls;
