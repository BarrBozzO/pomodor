import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK_COMPLETE_STATE } from "./types";
import uuidv4 from "uuid/v4";

export const addTask = ({ label, description }) => {
  return {
    type: ADD_TASK,
    payload: {
      id: uuidv4(),
      label,
      description,
      completed: false
    }
  };
};

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: {
    id
  }
});

export const toggleTask = id => ({
  type: TOGGLE_TASK_COMPLETE_STATE,
  payload: {
    id
  }
});
