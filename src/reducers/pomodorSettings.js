import {
  CHANGE_SETTINGS
} from '../actions/types';

const initialState = {
    long: 900000, // 15 * 60 * 1000
    short: 300000, // 5 * 60 * 1000
    pomodoro: 1500000 // 15 * 60 * 1000
};

const pomodorSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return {
          ...state,
          ...action.payload
      };
    default:
      return state;
  }
};

export default pomodorSettingsReducer;
