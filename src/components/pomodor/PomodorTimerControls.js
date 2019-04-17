import React from "react";
import PropTypes from "prop-types";

function PomodorTimerControls(props) {
  return (
    <div>
      <button>start</button>
      <button>pause</button>
    </div>
  );
}

PomodorTimerControls.propTypes = {
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired
};

export default PomodorTimerControls;
