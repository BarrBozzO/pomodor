export const convertToDisplay = (ms = 0) => {
  const showWith0 = value => (value < 10 ? `0${value}` : value);
  const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = showWith0(Math.floor((ms / 1000) % 60));
  return `${minutes}:${seconds}`;
};