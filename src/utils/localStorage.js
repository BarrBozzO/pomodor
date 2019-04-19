export const loadState = () => {
  try {
    const localStoragedState = localStorage.getItem('state'); // redux state from local storage
    if (localStoragedState == null) return undefined;
    return JSON.parse(localStoragedState);
  } catch {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (err) {
    console.warn(err);
  }
};
