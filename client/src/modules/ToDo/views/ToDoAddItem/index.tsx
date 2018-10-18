import * as React from 'react';

interface Props {
  handleSubmit(e: any): void;
}

const ToDoAddItem: React.StatelessComponent<Props> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newItem"
        placeholder="Add new ToDo item"
        required={true}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoAddItem;
