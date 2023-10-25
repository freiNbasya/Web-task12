import React from 'react';
import Button from './Button';


const Task = ({ task, onRemove }) => {
  const { title, description, startTime, endTime } = task;
  return (
    <div className="task">
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Start Time: {startTime}</p>
      <p>Aprox duration: {endTime} hours</p>
      <Button label="Remove" onClick={onRemove} />
    </div>
  );
};

export default Task;
