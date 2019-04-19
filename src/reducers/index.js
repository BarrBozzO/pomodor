import { combineReducers } from "redux";

import pomodorTimer from "./pomodorTimer";
import pomodorSettings from "./pomodorSettings";
import tasks from "./tasks";

export default combineReducers({
  pomodorTimer,
  pomodorSettings,
  tasks
});
