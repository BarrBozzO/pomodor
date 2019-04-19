import { combineReducers } from "redux";

import pomodorTimer from "./pomodorTimer";
import pomodorSettings from "./pomodorSettings";

export default combineReducers({
  pomodorTimer,
  pomodorSettings
});
