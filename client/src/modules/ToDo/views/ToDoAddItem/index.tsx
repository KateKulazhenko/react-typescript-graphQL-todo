import * as React from 'react';

interface Props {
  handleSubmit(e: any): void;
}

const ToDoAddItem = ({ handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newItem"
        placeholder="Add new ToDo item"
        required={true}
        ref="text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoAddItem;
