import { INIT_TIMER, START_TIMER, PAUSE_TIMER, STOP_TIMER, SET_TIMER } from '../actions/types';
import { startTimer, tickTimer, stopTimer, setTimer } from '../actions/pomodor';

import {calculateInitialRemain} from '../../utils/timer';

const timerMiddleware = ({dispatch, getState}) => {
  let intervalId = null,
      intervalPeriod = 1000;

  const handleTicking = () => {
    if (intervalId === null) return;

    const { remains } = getState().pomodorTimer;
    if (remains > 0) dispatch(tickTimer());
    else dispatch(stopTimer());
  };

  return next => action => {
    switch (action.type) {
      case INIT_TIMER:
        const timer = getState().pomodorTimer;

        if (intervalId === null && timer.state === 'started') {
          const now = new Date().getTime();
          if (now > timer.expire) dispatch(stopTimer());
          else {
            dispatch(setTimer(calculateInitialRemain(timer)));
            dispatch(startTimer());
          }
        }
        break;
      case START_TIMER:
        intervalId = setInterval(handleTicking, intervalPeriod);
        break;
      case PAUSE_TIMER:
      case STOP_TIMER:
      case SET_TIMER:
        clearInterval(intervalId);
        intervalId = null;
        break;
      default:
        break;
    }
    return next(action);
  };
};

export default timerMiddleware;
