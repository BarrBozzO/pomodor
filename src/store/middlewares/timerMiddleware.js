import {
  INIT_POMODOR,
  START_TIMER,
  PAUSE_TIMER,
  STOP_TIMER,
  SET_TIMER
} from "../actions/types";
import { startTimer, tickTimer, stopTimer, setTimer } from "../actions/pomodor";

import { calculateInitialRemain, convertToDisplay } from "../../utils/timer";
import { createNotify } from "../../utils/notifications";
import { updateTitle, resetTitle } from "../../utils/title";
import { periodTypes as PERIOD_TYPES } from "../../constants";

const timerMiddleware = ({ dispatch, getState }) => {
  let intervalId = null,
    intervalPeriod = 1000;

  const updateDocumentTitle = (remains, type) => {
    return remains > 0
      ? updateTitle(`${convertToDisplay(remains)} ${PERIOD_TYPES[type]}`)
      : resetTitle();
  };

  const handleTicking = () => {
    let timerState = null;

    if (intervalId === null) return;

    timerState = getState().pomodorTimer;
    const beforeTickRemains = timerState.remains;

    dispatch(beforeTickRemains > 0 ? tickTimer() : stopTimer());

    timerState = getState().pomodorTimer;
    const periodName = PERIOD_TYPES[timerState.type];

    updateDocumentTitle(timerState.remains, timerState.type);
    if (timerState.remains <= 0) {
      createNotify(periodName, `${periodName} окончен!`);
    }
  };

  return next => action => {
    switch (action.type) {
      case INIT_POMODOR:
        const timer = getState().pomodorTimer;

        if (intervalId === null && timer.state === "started") {
          const now = new Date().getTime();
          if (now > timer.expire) dispatch(stopTimer());
          else {
            dispatch(setTimer(calculateInitialRemain(timer), timer.type));
            dispatch(startTimer());
          }
        }
        break;
      case START_TIMER:
        intervalId = setInterval(handleTicking, intervalPeriod);
        break;
      case STOP_TIMER:
        updateDocumentTitle(0);
        clearInterval(intervalId);
        intervalId = null;
        break;
      case PAUSE_TIMER:
        clearInterval(intervalId);
        intervalId = null;
        break;
      case SET_TIMER: {
        const { remains, type } = action.payload;
        updateDocumentTitle(remains, type);
        clearInterval(intervalId);
        intervalId = null;
        break;
      }
      default:
        break;
    }
    return next(action);
  };
};

export default timerMiddleware;
