export const updateTitle = newTitle => {
  if (newTitle && document && document.title) document.title = newTitle;
};

export const resetTitle = () => {
  if (document && document.title) document.title = "Pomodor";
};
