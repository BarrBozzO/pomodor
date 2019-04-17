import React from "react";
import PropTypes from "prop-types";

import Timer from "./PomodorTimer";

function Pomodor(props) {
  const { timer } = props.pomodor;
  return (
    <div>
      <Timer
        time={timer.time}
        handleStart={props.handleStartTimer}
        handlePause={props.handlePauseTimer}
      />
    </div>
  );
}

Pomodor.propTypes = {
  pomodor: PropTypes.object.isRequired,
  handleStartTimer: PropTypes.func.isRequired,
  handlePauseTimer: PropTypes.func.isRequired
};

export default Pomodor;
