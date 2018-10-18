import * as React from 'react';

interface Props {
  handleChange(e: any): void;
  handleRemove(e: any): void;
  toDoItems: any;
}

const ToDoItems = ({ handleChange, handleRemove, toDoItems }: Props) => {
  return (
    <li>
      <input
        type="checkbox"
        id={toDoItems.id}
        checked={toDoItems.isDone}
        onChange={handleChange}
      />
      <label htmlFor={toDoItems.id} />
      <p>{toDoItems.text}</p>
      <button onClick={handleRemove}>x</button>
    </li>
  );
};

export default ToDoItems;
