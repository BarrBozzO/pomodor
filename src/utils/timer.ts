export const convertToDisplay = (ms: number = 0): string => {
  const showWith0 = (value: number): string | number =>
    value < 10 ? `0${value}` : value;
  const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = showWith0(Math.floor((ms / 1000) % 60));
  return `${minutes}:${seconds}`;
};

export const calculateInitialRemain = ({
  remains,
  started,
  state,
  expire,
}: {
  remains: number;
  started: number;
  state: string;
  expire: number;
}): number => {
  const now = new Date().getTime();
  return state === "started"
    ? now > expire
      ? 0
      : remains - (now - started)
    : remains;
};

export const convertToMinutes = (ms: number = 0): number => {
  return ms / (1000 * 60);
};

export const convertToMs = (minutes: number = 0): number => {
  return minutes * (1000 * 60);
};
