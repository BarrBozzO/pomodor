import React from "react";
import PropTypes from "prop-types";

import Timer from "./PomodorTimer";

function Pomodor(props) {
  const timer = props.pomodorTimer,
        settings = props.pomodorSettings;
  return (
    <div>
      <Timer
        timer={timer}
        settings={settings}
        handleStart={props.handleStartTimer}
        handlePause={props.handlePauseTimer}
        handleStop={props.handleStopTimer}
        handleSet={props.handleSetTimer}
      />
    </div>
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
