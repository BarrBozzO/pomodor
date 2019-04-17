import React from "react";
import PropTypes from "prop-types";
import Display from "./PomodorTimerDisplay";
import Controls from "./PomodorTimerControls";

function PomodorTimer(props) {
  return (
    <div>
      <Display time={props.time} />
      <Controls
        handleStart={props.handleStart}
        handlePause={props.handlePause}
      />
    </div>
  );
}

PomodorTimer.propTypes = {
  time: PropTypes.number.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired
};

export default PomodorTimer;
