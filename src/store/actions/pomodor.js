import {
  INIT_TIMER,
  START_TIMER,
  PAUSE_TIMER,
  SET_TIMER,
  STOP_TIMER,
  TICK_TIMER,
  CHANGE_SETTINGS
} from "./types";

export const startTimer = () => ({
    type: START_TIMER,
    payload: {
      started: new Date().getTime()
    }
});

export const pauseTimer = () => ({
    type: PAUSE_TIMER,
    payload: {
      paused: new Date().getTime()
    }
});

export const stopTimer = () => ({
    type: STOP_TIMER,
    payload: {
      stopped: new Date().getTime()
    }
});

export const setTimer = (remains) => ({
    type: SET_TIMER,
    payload: {
      remains
    }
});

export const tickTimer = () => ({
    type: TICK_TIMER
});

export const changeSettings = (newSettings) => ({
  type: CHANGE_SETTINGS,
  payload: {
    ...newSettings
  }
});

export const initTimer = () => ({
    type: INIT_TIMER
});
