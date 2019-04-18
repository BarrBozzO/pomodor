import React from "react";
import PropTypes from "prop-types";

function PomodorTimerControls(props) {
  return (
    <div>
      <button onClick={props.handleStart}>start</button>
      <button onClick={props.handlePause}>pause</button>
    </div>
  );
}

PomodorTimerControls.propTypes = {
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired
};

export default PomodorTimerControls;
