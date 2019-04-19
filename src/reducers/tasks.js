import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_COMPLETE_STATE
} from '../actions/types';

const initialState = {};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { task } = action.payload;
      return {
          ...state,
          [task.id]: {task}
      };
    case REMOVE_TASK:
      const { id } = action.payload,
            newTasks = {...state};
      delete newTasks[id];
      return newTasks;
    case TOGGLE_TASK_COMPLETE_STATE:
      const { toggleTaskId } = action.payload;
      return {
          ...state,
          [toggleTaskId]: {
            ...state[toggleTaskId],
            completed: !state[toggleTaskId].completed
          }
      };
    default:
      return state;
  }
};

export default tasksReducer;
