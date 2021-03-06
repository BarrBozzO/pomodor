import React, { Component } from "react";
import { connect } from "react-redux";

import Pomodor from "./Pomodor";
import {
  startTimer,
  pauseTimer,
  stopTimer,
  setTimer,
  changeSettings
} from "../../store/actions/pomodor";

class PomodorContainer extends Component {
  render() {
    return (
      <div>
        <Pomodor
          pomodorTimer={this.props.pomodorTimer}
          pomodorSettings={this.props.pomodorSettings}
          handleStartTimer={this.props.startTimer}
          handlePauseTimer={this.props.pauseTimer}
          handleStopTimer={this.props.stopTimer}
          handleSetTimer={this.props.setTimer}
          handleChangeSettings={this.props.changeSettings}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pomodorTimer: state.pomodorTimer,
    pomodorSettings: state.pomodorSettings
  };
};

export default connect(
  mapStateToProps,
  { startTimer, pauseTimer, stopTimer, setTimer, changeSettings }
)(PomodorContainer);
