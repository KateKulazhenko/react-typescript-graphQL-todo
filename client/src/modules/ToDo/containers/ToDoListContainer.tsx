import * as React from 'react';
import { toDoItemTypes } from '../../../reducers/toDoItemsTypes';

interface Props {
  toToItem: toDoItemTypes[];
  onChangedStatus?(id: number): void;
  onRemoveItem?(id: number): void;
}

class ToDoListContainer extends React.Component<Props> {
  render(): any {
    return null;
  }
}

export default ToDoListContainer;
