import { START_TIMER, PAUSE_TIMER, RESET_TIMER, TICK_TIMER } from '../actions/types';

const pomdorReducer = (state, action) => {
    switch(action.type){
      case START_TIMER:
      case PAUSE_TIMER:
        const {paused} = action.payload;
        return {
          ...state,
          timer: {
            ...state.timer,
            paused
          }
        }
      case TICK_TIMER:
          return {
            ...state,
            timer: {
              ...state.timer,
              time: state.timer.time - 1000
            }
          }
      case RESET_TIMER:
      default:
        return state;
    }
};

export default ;
