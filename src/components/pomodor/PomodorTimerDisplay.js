import React from "react";
import PropTypes from "prop-types";

import { convertToDisplay } from "../../utils/timer";

function PomodorTimerDisplay(props) {
  return <div>{convertToDisplay(props.time)}</div>;
}

PomodorTimerDisplay.propTypes = {
  time: PropTypes.number.isRequired
};

export default PomodorTimerDisplay;
