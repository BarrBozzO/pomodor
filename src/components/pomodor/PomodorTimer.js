import React, { Component } from "react";
import PropTypes from "prop-types";
import Display from "./PomodorTimerDisplay";
import Controls from "./PomodorTimerControls";

class PomodorTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.timer.remains,
      remains: props.timer.remains
    };
    this.interval = null;
    this.period = 1000;
    this.handleTicking = this.handleTicking.bind(this);
  }

  componentDidMount() {
    const timerState = this.props.timer.state;
    if (timerState === "started") {
      this.interval = setInterval(this.handleTicking, this.period);
    }
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    const currentTimerState = this.props.timer.state,
      prevTimerState = prevProps.timer.state;
    if (currentTimerState !== prevTimerState) {
      if (currentTimerState === "started")
        this.interval = setInterval(this.handleTicking, this.period);
      else if (this.interval) clearInterval(this.interval);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.timer.remains !== state.remains) {
      return {
        time: props.timer.remains,
        remains: props.timer.remains
      };
    }
    return null;
  }

  handleTicking() {
    this.setState(prevState => {
      let nextTime = prevState.time - this.period;
      if (nextTime <= 0) {
        this.props.handleStop();
        return prevState;
      } else {
        return {
          ...prevState,
          time: nextTime
        };
      }
    });
  }

  render() {
    return (
      <div>
        <Display time={this.state.time} />
        <Controls
          timerState={this.props.timer.state}
          handleStart={this.props.handleStart}
          handlePause={this.props.handlePause}
          handleStop={this.props.handleStop}
        />
      </div>
    );
  }
}

PomodorTimer.propTypes = {
  timer: PropTypes.object.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired
};

export default PomodorTimer;
