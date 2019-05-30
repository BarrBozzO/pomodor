export const convertToDisplay = (ms = 0) => {
  const showWith0 = value => (value < 10 ? `0${value}` : value);
  const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = showWith0(Math.floor((ms / 1000) % 60));
  return `${minutes}:${seconds}`;
};

export const calculateInitialRemain = ({ remains, started, state, expire }) => {
  const now = new Date().getTime();
  return state === "started"
    ? now > expire
      ? 0
      : remains - (now - started)
    : remains;
};

export const convertToMinutes = (ms = 0) => {
  return ms / (1000 * 60);
};

export const convertToMs = (minutes = 0) => {
  return minutes * (1000 * 60);
};
