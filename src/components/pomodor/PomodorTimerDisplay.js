import React from "react";
import PropTypes from "prop-types";

function PomodorTimerDisplay(props) {
  return (
    <div>
      {props.time}
    </div>
  );
}

PomodorTimerDisplay.propTypes = {
  time: PropTypes.number.isRequired
};

export default PomodorTimerDisplay;
