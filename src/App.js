import React, { useState } from 'react';
import './App.css';
import Week from './components/Week';
import DayExpanded from './components/DayExpanded';


function App() {
  const [activeDay, setActiveDay] = useState('Monday');
  const [tasks, setTasks] = useState({});

  const DayClick = (day) => {
    setActiveDay(day);
  };

  const TaskRemove = (updatedTasks) => {
    setTasks({ ...tasks, [activeDay]: updatedTasks });
  };

  const TaskAdd = (newTask) => {
    const updatedTasks = { ...tasks };
    updatedTasks[activeDay] = [...(updatedTasks[activeDay] || []), newTask];
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="planner">
        <Week activeDay={activeDay} onDayClick={DayClick} />
        <DayExpanded
          activeDay={activeDay}
          tasks={tasks[activeDay] || []}
          onTaskAdd={TaskAdd}
          onTaskRemove={TaskRemove}
        />

      </div>
    </div>
  );
}

export default App;
