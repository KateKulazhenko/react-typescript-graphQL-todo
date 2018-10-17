import * as React from 'react';

import ToDoItem from '../ToDoItem';

const ToDoList = ({ toDoItem, handleChange, toToItems, handleRemove }) => {
  return (
    <ul>
      {toToItems.map((item) => {
        <ToDoItem
          toDoItem={toDoItem}
          key={item.id}
          handleChange={handleChange}
          handleRemove={handleRemove}
        />;
      })}
    </ul>
  );
};

export default ToDoList;
