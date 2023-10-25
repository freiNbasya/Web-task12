import React from 'react';
import Day from './Day';
import './styles/styles.css';

const Week = ({ activeDay, onDayClick }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="week">
      <h1>Week</h1>
      {days.map((day, index) => (
        <Day key={index} day={day} isActive={activeDay === day} onClick={() => onDayClick(day)} />
      ))}
    </div>
  );
};

export default Week;
