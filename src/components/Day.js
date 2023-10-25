import React from 'react';
import './styles/styles.css';

const Day = ({ day, isActive, onClick }) => {
  return (
    <div className={`day ${isActive ? 'active' : ''}`} onClick={onClick}>
      <h3>{day}</h3>
    </div>
  );
};

export default Day;
