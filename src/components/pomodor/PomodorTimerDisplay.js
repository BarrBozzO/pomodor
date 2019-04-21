import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { convertToDisplay } from "../../utils/timer";

const Container = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 64px;
  font-weight: 600;
`;

function PomodorTimerDisplay(props) {
  return <Container>{convertToDisplay(props.time)}</Container>;
}

PomodorTimerDisplay.propTypes = {
  time: PropTypes.number.isRequired
};

export default PomodorTimerDisplay;
