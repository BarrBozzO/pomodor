import React from "react";
import PropTypes from "prop-types";

function PomodorTimerControls(props) {
  return (
    <div>
      <button
        onClick={
          props.timerState === "started" ? props.handlePause : props.handleStart
        }
      >
        {props.timerState === "stopped"
          ? "START"
          : props.timerState === "paused"
          ? "RESUME"
          : "PAUSE"}
      </button>
      <button
        onClick={props.handleStop}
        disabled={props.timerState === "stopped"}
      >
        STOP
      </button>
    </div>
  );
}

PomodorTimerControls.propTypes = {
  timerState: PropTypes.string.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired
};

export default PomodorTimerControls;
