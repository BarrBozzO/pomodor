export const updateTitle = (newTitle: string): void => {
  if (newTitle && document && document.title) document.title = newTitle;
};

export const resetTitle = (): void => {
  if (document && document.title) document.title = "Pomodor";
};
