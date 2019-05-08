import reducer from "../../../store/reducers/pomodorTimer";
import {
  START_TIMER,
  PAUSE_TIMER,
  SET_TIMER,
  TICK_TIMER,
  STOP_TIMER
} from "../../../store/actions/types";

describe("PomodorTimer reducer", () => {
  it('should return the initial state', () => {
    const expectedInitialState = {
      expire: 0,
      remains: 1500000,
      started: 0,
      stopped: 0,
      paused: 0,
      state: "stopped"
    };

    const reducedInitialState = reducer(undefined, {});

    expect(reducedInitialState).toEqual(expectedInitialState);
  });

  it('should handle START_TIMER', () => {
    const startTimerAction = {
      type: START_TIMER,
      payload: {
        started: 1558815615,
        }
      },
      initialState = {
        expire: 0,
        remains: 1380000,
        started: 1557315615,
        stopped: 0,
        paused: 1557435615,
        state: "paused"
      },
      expectedState = {
        started: 1558815615,
        expire: 1560195615,
        state: "started"
      };

    const reducedState = reducer(initialState, startTimerAction);

    expect(reducedState).toMatchObject(expectedState);
  });

  it('should handle STOP_TIMER', () => {
    const stopTimerAction = {
      type: STOP_TIMER,
      payload: {
        stopped: 1557315615,
        }
      },
      expectedState = {
        stopped: 1557315615,
        remains: 0,
        state: "stopped"
      };

    const reducedState = reducer(undefined, stopTimerAction);

    expect(reducedState).toMatchObject(expectedState);
  });

  it('should handle PAUSE_TIMER', () => {
    const pauseTimerAction = {
      type: PAUSE_TIMER,
      payload: {
        paused: 1557435615,
        }
      },
      initialState = {
        expire: 1558815615,
        remains: 1500000,
        started: 1557315615,
        stopped: 0,
        paused: 0,
        state: "started"
      },
      expectedState = {
        paused: 1557435615,
        remains: 1380000,
        state: "paused"
      };

    const reducedState = reducer(initialState, pauseTimerAction);

    expect(reducedState).toMatchObject(expectedState);
  });

  it('should handle SET_TIMER', () => {
    const setTimerAction = {
      type: SET_TIMER,
      payload: {
        remains: 900000,
        }
      },
      expectedState = {
        remains: 900000,
        expire: 0,
        started: 0,
        stopped: 0,
        paused: 0,
        state: "stopped"
      };

    const reducedState = reducer(undefined, setTimerAction);

    expect(reducedState).toEqual(expectedState);
  });

  it('should handle TICK_TIMER', () => {
    const tickTimerAction = {
        type: TICK_TIMER,
      },
      initialState = {
        remains: 2000,
        expire: 3500,
        started: 1500,
        stopped: 0,
        paused: 0,
        state: "started"
      },
      expectedState = {
        remains: 1000
      };

    const reducedState = reducer(initialState, tickTimerAction);

    expect(reducedState).toMatchObject(expectedState);
  });
});
