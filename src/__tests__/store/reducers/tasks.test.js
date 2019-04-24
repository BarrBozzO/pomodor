import reducer from "../../../store/reducers/tasks";
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_COMPLETE_STATE
} from "../../../store/actions/types";

describe("Tasks reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it("should handle ADD_TASK", () => {
    const addTaskAction = {
      type: ADD_TASK,
      payload: {
        id: "3r4",
        label: "label",
        description: "description",
        completed: false
      }
    };
    const addTaskReducerResult = reducer({}, addTaskAction);
    expect(typeof addTaskReducerResult).toBe("object");
    expect(addTaskReducerResult["3r4"]).toMatchObject({
      id: "3r4",
      label: "label",
      description: "description",
      completed: false
    });
  });
  it("should handle REMOVE_TASK", () => {
    const removeTaskInitState = {
        kz4: {
          id: "kz4",
          label: "label",
          description: "description",
          completed: false
        }
      },
      removeTaskAction = {
        type: REMOVE_TASK,
        payload: {
          id: "kz4"
        }
      };
    expect(reducer(removeTaskInitState, removeTaskAction)).toEqual({});
  });
  it("should handle TOGGLE_TASK_COMPLETE_STATE", () => {
    const toggleTaskInitState = {
        kz4: {
          id: "kz4",
          label: "label",
          description: "description",
          completed: false
        }
      },
      toggleTaskAction = {
        type: TOGGLE_TASK_COMPLETE_STATE,
        payload: {
          id: "kz4"
        }
      };
    expect(reducer(toggleTaskInitState, toggleTaskAction)).toEqual({
      kz4: {
        id: "kz4",
        label: "label",
        description: "description",
        completed: true
      }
    });
  });
});
