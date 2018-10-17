import * as React from 'react';
import { toDoItemTypes } from '../../../reducers/toDoItemsTypes';

import ToDoList from '../views/ToDoList';

interface Props {
  toToItem: toDoItemTypes;
  onChangedStatus(id: number): void;
  onRemoveItem(id: number): void;
}

class ToDoListContainer extends React.Component<Props> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleChange() {
    const { onChangedStatus, toToItem } = this.props;

    onChangedStatus(toToItem.id);
  }

  handleRemoveItem() {
    const { onRemoveItem, toToItem } = this.props;
  }

  render() {
    const props = {
      handleChange: this.handleChange,
      handleRemoveItem: this.handleRemoveItem,
    };
    return <ToDoList {...props} />;
  }
}

export default ToDoListContainer;
