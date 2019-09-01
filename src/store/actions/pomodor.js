import {
  INIT_POMODOR,
  START_TIMER,
  PAUSE_TIMER,
  SET_TIMER,
  STOP_TIMER,
  TICK_TIMER,
  CHANGE_SETTINGS
} from "./types";

import {
  getCurrentNotifyPermission,
  requestNotifyPermission
} from "../../utils/notifications";

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

export const setTimer = (remains, type) => ({
  type: SET_TIMER,
  payload: {
    remains,
    type
  }
});

export const tickTimer = () => ({
  type: TICK_TIMER
});

export const changeSettings = newSettings => ({
  type: CHANGE_SETTINGS,
  payload: {
    ...newSettings
  }
});

export const initPomodor = () => dispatch => {
  dispatch({
    type: INIT_POMODOR
  });
  const permission = getCurrentNotifyPermission();

  if (permission !== "default") {
    dispatch(changeSettings({ notifyAllowed: permission === "granted" }));
  } else {
    return requestNotifyPermission()
      .then(newPermission => {
        return dispatch(
          changeSettings({
            notifyAllowed: newPermission === "granted"
          })
        );
      })
      .catch(err => {
        console.warn("NotificationsAPI");
        return dispatch(
          changeSettings({
            notifyAllowed: false
          })
        );
      });
  }
};
