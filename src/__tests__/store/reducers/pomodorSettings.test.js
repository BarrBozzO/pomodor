import reducer from "../../../store/reducers/pomodorSettings";
import { CHANGE_SETTINGS } from "../../../store/actions/types";

describe("PomodorSettings reducer", () => {
  it("should return the initial state", () => {
    const expectedInitialState = {
      long: 900000,
      short: 300000,
      pomodoro: 1500000,
      notifyAllowed: false
    };

    const reducedInitialState = reducer(undefined, {});

    expect(reducedInitialState).toEqual(expectedInitialState);
  });

  it("should handle CHANGE_SETTINGS", () => {
    const changeSettingsAction = {
        type: CHANGE_SETTINGS,
        payload: {
          long: 111,
          short: 33,
          pomodoro: 432,
          notifyAllowed: true
        }
      },
      expectedState = {
        long: 111,
        short: 33,
        pomodoro: 432,
        notifyAllowed: true
      };

    const reducedState = reducer(undefined, changeSettingsAction);

    expect(reducedState).toEqual(expectedState);
  });
});
