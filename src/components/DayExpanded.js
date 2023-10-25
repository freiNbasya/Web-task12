import React from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';
import './styles/styles.css';

const DayExpanded = ({ activeDay, tasks, onTaskAdd, onTaskRemove }) => {

  const RemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    onTaskRemove(updatedTasks);
  };
  return (
    <div className="day-expanded">
      <h2>{activeDay} Expanded</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <Task key={index} task={task}  onRemove={() => RemoveTask(index)}/>
          ))}
        </ul>
      ) : (
        <p>No tasks planned for {activeDay}.</p>
      )}
      <NewTaskForm onTaskAdd={onTaskAdd} />
    </div>
  );
};

export default DayExpanded;
