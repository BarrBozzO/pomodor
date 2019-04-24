import * as actionCreators from "../../../store/actions/tasks";
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_COMPLETE_STATE
} from "../../../store/actions/types";

describe("Tasks Action Creators", () => {
  it("should create an action to add a task", () => {
    const label = "lable test",
      description = "description test",
      completed = false;
    const addTaskRes = actionCreators.addTask({ label, description });
    expect(addTaskRes).toMatchObject({
      type: ADD_TASK,
      payload: {
        label,
        description,
        completed
      }
    });
    expect(addTaskRes["payload"]).toHaveProperty("id");
    expect(typeof addTaskRes["payload"]["id"]).toBe("string");
  });
  it("should create an action to remove a task", () => {
    const id = "30fja-f3awf-awfa3-fa";
    const removeTaskRes = actionCreators.removeTask(id);
    expect(removeTaskRes).toEqual({
      type: REMOVE_TASK,
      payload: {
        id
      }
    });
  });
  it("should create an action to toggle task complete state", () => {
    const id = "30fja-f3awf-awfa3-fa";
    const toggleTaskRes = actionCreators.toggleTask(id);
    expect(toggleTaskRes).toEqual({
      type: TOGGLE_TASK_COMPLETE_STATE,
      payload: {
        id
      }
    });
  });
});
