import {
  START_TIMER,
  PAUSE_TIMER,
  SET_TIMER,
  TICK_TIMER,
  STOP_TIMER
} from "../actions/types";

const initialState = {
  expire: 0,
  remains: 1500000,
  type: null,
  started: 0,
  stopped: 0, // ?
  paused: 0,
  state: "stopped" // started, paused, stopped
};
const intervalPeriod = 1000;

const pomodorTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      const { started } = action.payload;
      return {
        ...state,
        started,
        expire: started + state.remains,
        state: "started"
      };
    case PAUSE_TIMER:
      const { paused } = action.payload;
      return {
        ...state,
        // remains: state.remains - (paused - state.started),
        paused,
        state: "paused"
      };
    case STOP_TIMER: {
      const { stopped, type } = action.payload;
      return {
        ...state,
        remains: 0,
        stopped,
        type,
        state: "stopped"
      };
    }
    case SET_TIMER:
      const { remains, type } = action.payload;
      return {
        ...state,
        remains,
        type,
        expire: 0,
        started: 0,
        stopped: 0,
        paused: 0,
        state: "stopped"
      };
    case TICK_TIMER:
      return {
        ...state,
        remains: state.remains - intervalPeriod
      };
    default:
      return state;
  }
};

export default pomodorTimerReducer;
