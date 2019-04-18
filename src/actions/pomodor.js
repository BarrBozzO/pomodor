import {
  START_TIMER,
  PAUSE_TIMER,
  SET_TIMER,
  TICK_TIMER,
  STOP_TIMER
} from "./types";

export const startTimer = () => {
  return {
    type: START_TIMER,
    payload: {
      started: new Date().getTime()
    }
  };
};

export const pauseTimer = () => {
  return {
    type: PAUSE_TIMER,
    payload: {
      paused: new Date().getTime()
    }
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
    payload: {
      stopped: new Date().getTime()
    }
  };
};
