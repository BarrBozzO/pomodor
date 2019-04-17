import React from 'react';

import TaskContainer from './task/TaskContainer';
import PomodorContainer from './pomodor/PomodorContainer';

function Main () {
  return (
    <div>
    <PomodorContainer />
    <TaskContainer />
    </div>
  );
}

export default Main;
