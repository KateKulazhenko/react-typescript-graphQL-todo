import * as React from 'react';

const ToDoItem = ({ id, isDone, handleChange, text, handleClick }) => {
  return (
    <li>
      <input type="checkbox" id={id} checked={isDone} onChange={handleChange} />
      <label htmlFor={id} />
      <p>{text}</p>
      <button onClick={handleClick}>x</button>
    </li>
  );
};

export default ToDoItem;
