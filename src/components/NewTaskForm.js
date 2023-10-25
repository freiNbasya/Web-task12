import React, { useState } from 'react';
import Button from './Button';

const NewTaskForm = ({ onTaskAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const TaskAdd = () => {
    const newTask = { title, description, startTime, endTime };
    onTaskAdd(newTask);
    setTitle('');
    setDescription('');
    setStartTime('');
    setEndTime('');
  };

  const Submit = (element) => {
    element.preventDefault(); 
    TaskAdd(); 
  };

  return (
    <div className="new-task-form">
      <h4>Create New Task</h4>
      <form onSubmit={Submit}>
        <div>
          <input type="text" className="form-control" placeholder="Title" value={title} onChange={(element) => setTitle(element.target.value)} />
        </div>
        <div>
          <input type="text" className="form-control" placeholder="Description" value={description} onChange={(element) => setDescription(element.target.value)} />
        </div>
        <div>
          <input type="time" className="form-control" placeholder="Start Time" value={startTime} onChange={(element) => setStartTime(element.target.value)} />
        </div>
        <div>
          <input type="number" className="form-control" placeholder="Aprox duration" value={endTime} onChange={(element) => setEndTime(element.target.value)} />
        </div>
        <Button label="Create Task" />
      </form>
    </div>
  );
};

export default NewTaskForm;
