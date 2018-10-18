import * as React from 'react';

interface Props {
  id: number;
  isDone: boolean;
  handleChange(e: any): void;
  text: string;
  handleRemove(e: any): void;
}

const ToDoItem = ({ id, isDone, handleChange, text, handleRemove }: Props) => {
  return (
    <li>
      <input
        type="checkbox"
        id={id.toString()}
        checked={isDone}
        onChange={handleChange}
      />
      <label htmlFor={id.toString()} />
      <p>{text}</p>
      <button onClick={handleRemove}>x</button>
    </li>
  );
};

export default ToDoItem;
