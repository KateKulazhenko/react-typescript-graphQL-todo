import * as React from 'react';
import { toDoItemTypes } from '../../../reducers/toDoItemsTypes';

import ToDoItem from '../views/ToDoItem';

interface Props {
  toToItem: toDoItemTypes;
  onChangedStatus(id: number): void;
  onRemoveItem(id: number): void;
}

class ToDoItemContainer extends React.Component<Props> {
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

  render(): any {
    const props = {
      handleChange: this.handleChange,
      handleRemoveItem: this.handleRemoveItem,
    };
    return null;
  }
}

export default ToDoItemContainer;
