import React, { Component } from "react";
import { connect } from "react-redux";

import Pomodor from "./Pomodor";
import { startTimer, pauseTimer, stopTimer } from "../../actions/pomodor";

class PomodorContainer extends Component {
  render() {
    return (
      <div>
        <Pomodor
          pomodor={this.props.pomodor}
          handleStartTimer={this.props.startTimer}
          handlePauseTimer={this.props.pauseTimer}
          handleStopTimer={this.props.stopTimer}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pomodor: state.pomodor
  };
};

export default connect(
  mapStateToProps,
  { startTimer, pauseTimer, stopTimer }
)(PomodorContainer);
