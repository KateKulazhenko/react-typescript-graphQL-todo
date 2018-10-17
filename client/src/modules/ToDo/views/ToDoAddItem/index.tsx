import * as React from 'react';

const ToDoAddItem = ({ handleSubmit }) => {
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
