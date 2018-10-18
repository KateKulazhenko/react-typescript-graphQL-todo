import * as React from 'react';

import ToDoItem from '../ToDoItem';

interface Props {
  handleChange(e: any): void;
  toDoItems: any;
  handleRemove(e: any): void;
}

const ToDoList: React.StatelessComponent<Props> = ({
  handleChange,
  toDoItems,
  handleRemove,
}) => {
  return (
    <ul>
      {toDoItems.map((item: any) => {
        <ToDoItem
          key={item.id}
          id={item.id}
          isDone={item.isDone}
          handleChange={handleChange}
          handleRemove={handleRemove}
          text={item.text}
        />;
      })}
    </ul>
  );
};

export default ToDoList;
