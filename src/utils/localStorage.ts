export const loadState = (): string | void => {
  try {
    const localStoragedState = localStorage.getItem("state"); // redux state from local storage
    if (localStoragedState !== null) {
      return JSON.parse(localStoragedState);
    }
  } catch (err) {
    console.warn(err);
  }
};

export const saveState = (state: object): void => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (err) {
    console.warn(err);
  }
};
