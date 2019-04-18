import React, { Component } from "react";
import { connect } from "react-redux";

import Pomodor from "./Pomodor";
import { handleStartTimer, handlePauseTimer } from "../../actions/pomodor";

class PomodorContainer extends Component {
  render() {
    return (
      <div>
        <Pomodor pomodor={this.props.pomodor} handleStartTimer={this.props.handleStartTimer} handlePauseTimer={this.props.handlePauseTimer} />
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
  { handleStartTimer, handlePauseTimer }
)(PomodorContainer);
