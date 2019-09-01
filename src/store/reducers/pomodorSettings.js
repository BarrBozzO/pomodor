import { CHANGE_SETTINGS } from "../actions/types";
import { defaultSettings } from "../../constants";

const initialState = {
  ...defaultSettings
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
