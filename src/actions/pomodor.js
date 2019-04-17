const { START_TIMER, PAUSE_TIMER, RESET_TIMER, TICK_TIMER } from './types';

let timerInterval = null;

const startTimer = () => {
  return {
    type: START_TIMER,
    payload: {
      paused: false
    }
  }
};

const pauseTimer = () => {
  return {
    type: PAUSE_TIMER,
    payload: {
      paused: true
    }
  }
};

const tickTimer = () => {
  return {
    type: TICK_TIMER
  }
};

export const handleStartTimer = () => (dispatch) => {
  timerInterval = setInterval( () => {
     console.log('increment timer');
     dispatch(tickTimer());
  }, 1000 )
};

export const handlePauseTimer = () => {
  clearInterval(timerInterval);
  return pauseTimer();
};
