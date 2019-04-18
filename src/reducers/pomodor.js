import {
  START_TIMER,
  PAUSE_TIMER,
  SET_TIMER,
  TICK_TIMER,
  STOP_TIMER
} from "../actions/types";

const initialState = {
  timer: {
    expire: 0,
    remains: 1500000,
    started: 0,
    stopped: 0, // ?
    paused: 0,
    state: "stopped" // started, paused, stopped
  }
};

const pomodorReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      const { started } = action.payload;
      return {
        ...state,
        timer: {
          ...state.timer,
          started,
          expire: started + state.timer.remains,
          state: "started"
        }
      };
    case PAUSE_TIMER:
      const { paused } = action.payload;
      return {
        ...state,
        timer: {
          ...state.timer,
          remains: state.timer.remains - (paused - state.timer.started),
          paused,
          state: "paused"
        }
      };
    case STOP_TIMER:
      const { stopped } = action.payload;
      return {
        ...state,
        timer: {
          ...state.timer,
          remains: 0,
          stopped,
          state: "stopped"
        }
      };
    case TICK_TIMER:
    case SET_TIMER:
    default:
      return state;
  }
};

export default pomodorReducer;
