import * as React from 'react';
import { toDoItemsTypes } from '../../../reducers/toDoItemsTypes';

import ToDoItemContainer from './ToDoItemContainer';

interface Props {
  toDoItems: toDoItemsTypes[];
  handleChange(id: number): void;
  handleRemove(id: number): void;
}
class ToDoListContainer extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <ul>
        {this.props.toDoItems.map((item: any) => {
          return (
            <ToDoItemContainer
              toDoItem={item}
              key={item.id}
              changeStatusItem={this.props.handleChange}
              onRemoveItem={this.props.handleRemove}
            />
          );
        })}
      </ul>
    );
  }
}

export default ToDoListContainer;
