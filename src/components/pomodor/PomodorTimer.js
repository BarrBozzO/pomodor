import React from "react";
import PropTypes from "prop-types";
import Display from "./PomodorTimerDisplay";
import Controls from "./PomodorTimerControls";

function PomodorTimer(props) {
  return (
    <div>
      <Display time={props.timer.remains} />
      <Controls
        settings={props.settings}
        timerState={props.timer.state}
        timerRemains={props.timer.remains}
        handleStart={props.handleStart}
        handlePause={props.handlePause}
        handleStop={props.handleStop}
        handleSet={props.handleSet}
      />
    </div>
  );
}

PomodorTimer.propTypes = {
  timer: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleSet: PropTypes.func.isRequired
};

export default PomodorTimer;
