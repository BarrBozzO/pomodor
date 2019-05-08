import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actionCreators from "../../../store/actions/pomodor";
import {
  INIT_POMODOR,
  START_TIMER,
  PAUSE_TIMER,
  SET_TIMER,
  STOP_TIMER,
  TICK_TIMER,
  CHANGE_SETTINGS
} from "../../../store/actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Tasks Action Creators", () => {
  let store;

  beforeEach(() => {
    store = mockStore({ pomodorSettings: {} });
  });

  it("should create an action to start timer", () => {
    const startTimerRes = actionCreators.startTimer();
    expect(startTimerRes).toMatchObject({
      type: START_TIMER
    });
    expect(startTimerRes["payload"]).toHaveProperty("started");
    expect(startTimerRes["payload"]["started"]).toBeGreaterThan(0);
  });

  it("should create an action to pause timer", () => {
    const pauseTimerRes = actionCreators.pauseTimer();
    expect(pauseTimerRes).toMatchObject({
      type: PAUSE_TIMER
    });
    expect(pauseTimerRes["payload"]).toHaveProperty("paused");
    expect(pauseTimerRes["payload"]["paused"]).toBeGreaterThan(0);
  });

  it("should create an action to stop timer", () => {
    const stopTimerRes = actionCreators.stopTimer();
    expect(stopTimerRes).toMatchObject({
      type: STOP_TIMER
    });
    expect(stopTimerRes["payload"]).toHaveProperty("stopped");
    expect(stopTimerRes["payload"]["stopped"]).toBeGreaterThan(0);
  });

  it("should create an action to set timer", () => {
    const expextedAction = {
      type: SET_TIMER,
      payload: {
        remains: 39502342
      }
    };

    const setTimerRes = actionCreators.setTimer(39502342);

    expect(setTimerRes).toEqual(expextedAction);
  });

  it("should create an action to tick timer", () => {
    const tickTimerRes = actionCreators.tickTimer();
    expect(tickTimerRes).toEqual({
      type: TICK_TIMER
    });
  });

  it("should create an action to change settings", () => {
    const newSettings = {
        notifyAllowed: true,
        long: 31,
        short: 12,
        pomodoro: 1253
      },
      expextedAction = {
        type: CHANGE_SETTINGS,
        payload: newSettings
      };

    const changeSettingsRes = actionCreators.changeSettings(newSettings);

    expect(changeSettingsRes).toEqual(expextedAction);
  });

  it("should create an action to change settings with pre-defined Notifications permission", () => {
    // mock Notification API
    global.Notification = {
      permission: "granted",
      requestPermission: () => {
        return Promise.resolve("granted");
      }
    };
    const expectedActions = [
      { type: INIT_POMODOR },
      { type: CHANGE_SETTINGS, payload: { notifyAllowed: true } }
    ];

    store.dispatch(actionCreators.initPomodor());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should create an action to change settings without pre-efined Notifications permission", () => {
    // mock Notification API
    global.Notification = {
      permission: "default",
      requestPermission: () => {
        return Promise.resolve("denied");
      }
    };
    const expectedActions = [
      { type: INIT_POMODOR },
      { type: CHANGE_SETTINGS, payload: { notifyAllowed: false } }
    ];

    return store.dispatch(actionCreators.initPomodor()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
