import {
  START_TIMER,
  PAUSE_TIMER,
  RESET_TIMER,
  TICK_TIMER
} from "../actions/types";

const initialState = {
  timer: {
    time: 25000,
    paused: true
  }
};

const pomodorReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
    case PAUSE_TIMER:
      const { paused } = action.payload;
      return {
        ...state,
        timer: {
          ...state.timer,
          paused
        }
      };
    case TICK_TIMER:
      if (state.timer.paused) return state;
      else return {
        ...state,
        timer: {
          ...state.timer,
          time: state.timer.time - 1000,
          paused: (state.timer.time - 1000) <= 0
        }
      };
    case RESET_TIMER:
    default:
      return state;
  }
};

export default pomodorReducer;
