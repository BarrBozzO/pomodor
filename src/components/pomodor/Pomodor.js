import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import Timer from "./PomodorTimer";
import Settings from "./PomodorSettings";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  @media (max-width: 550px) {
    width: 100%;
  }

  & > .pomodor__timer-display-enter {
    opacity: 0;
  }
  & > .pomodor__timer-display-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
  & > .pomodor__timer-display-exit {
    opacity: 1;
  }
  & > .pomodor__timer-display-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }

  & > .pomodor__timer-settings-enter {
    opacity: 0;
  }
  & > .pomodor__timer-settings-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
  & > .pomodor__timer-settings-exit {
    opacity: 1;
  }
  & > .pomodor__timer-settings-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
`;

const SwitchModeBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 20px;
`;

class Pomodor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSettings: false,
      showTimer: true
    };

    this.setShowSettings = this.setShowSettings.bind(this);
    this.setShowTimer = this.setShowTimer.bind(this);
  }

  setShowSettings = show => {
    this.setState({
      showSettings: show
    });
  };

  setShowTimer = show => {
    this.setState({
      showTimer: show
    });
  };

  render() {
    const timer = this.props.pomodorTimer,
      settings = this.props.pomodorSettings,
      { showSettings, showTimer } = this.state,
      handleSwitchModeClick = showTimer
        ? () => this.setShowTimer(false)
        : () => this.setShowSettings(false),
      switchModeLabel = showTimer ? "настройки" : "таймер";

    return (
      <Container>
        <CSSTransition
          in={showTimer}
          timeout={250}
          unmountOnExit
          classNames={"pomodor__timer-display"}
          onEnter={() => this.setShowSettings(false)}
          onExited={() => this.setShowSettings(true)}
        >
          <Timer
            timer={timer}
            settings={settings}
            handleStart={this.props.handleStartTimer}
            handlePause={this.props.handlePauseTimer}
            handleStop={this.props.handleStopTimer}
            handleSet={this.props.handleSetTimer}
          />
        </CSSTransition>
        <CSSTransition
          in={showSettings}
          timeout={250}
          unmountOnExit
          classNames={"pomodor__timer-settings"}
          onEnter={() => this.setShowTimer(false)}
          onExited={() => this.setShowTimer(true)}
        >
          <Settings
            settings={settings}
            handleChangeSettings={this.props.handleChangeSettings}
          />
        </CSSTransition>
        <SwitchModeBtn
          disabled={showSettings === showTimer}
          onClick={handleSwitchModeClick.bind(this)}
        >
          {switchModeLabel}
        </SwitchModeBtn>
      </Container>
    );
  }
}

Pomodor.propTypes = {
  pomodorTimer: PropTypes.object.isRequired,
  pomodorSettings: PropTypes.object.isRequired,
  handleStartTimer: PropTypes.func.isRequired,
  handlePauseTimer: PropTypes.func.isRequired,
  handleStopTimer: PropTypes.func.isRequired,
  handleSetTimer: PropTypes.func.isRequired,
  handleChangeSettings: PropTypes.func.isRequired
};

export default Pomodor;
