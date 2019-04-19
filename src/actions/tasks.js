import {ADD_TASK, REMOVE_TASK, TOGGLE_TASK_COMPLETE_STATE} from './types';

export const addTask = (newTask) => ({
    type: ADD_TASK,
    payload: {
      task: newTask
    }
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: {
      id
    }
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK_COMPLETE_STATE,
    payload: {
      id
    }
});
