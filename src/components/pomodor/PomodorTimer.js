import React, { Component } from "react";
import PropTypes from "prop-types";
import Display from "./PomodorTimerDisplay";
import Controls from "./PomodorTimerControls";

import {calculateInitialRemain} from '../../utils/timer';

class PomodorTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: calculateInitialRemain(props.timer),
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
        clearInterval(this.interval);
        return this.props.handleStop(); // stop timer
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
          settings={this.props.settings}
          timerState={this.props.timer.state}
          handleStart={this.props.handleStart}
          handlePause={this.props.handlePause}
          handleStop={this.props.handleStop}
          handleSet={this.props.handleSet}
        />
      </div>
    );
  }
}

PomodorTimer.propTypes = {
  timer: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handleStart: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleSet: PropTypes.func.isRequired
};

export default PomodorTimer;
