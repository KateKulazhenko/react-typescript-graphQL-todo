import * as React from 'react';

interface Props {
  handleChange(e: any): void;
  handleRemove(e: any): void;
  toDoItem: any;
}

const ToDoItems = ({ handleChange, handleRemove, toDoItem }: Props) => {
  return (
    <li>
      <input
        type="checkbox"
        id={toDoItem.id}
        checked={toDoItem.isDone}
        onChange={handleChange}
      />
      <label htmlFor={toDoItem.id} />
      <p>{toDoItem.text}</p>
      <button onClick={handleRemove}>x</button>
    </li>
  );
};

export default ToDoItems;
