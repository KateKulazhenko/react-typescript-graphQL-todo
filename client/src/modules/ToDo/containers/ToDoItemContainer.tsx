import * as React from 'react';
import { toDoItemsTypes } from '../../../reducers/toDoItemsTypes';

import ToDoItems from '../views/ToDoItems';
import { any } from 'prop-types';

interface Props {
  toDoItem: toDoItemsTypes;
  changeStatusItem(id: number): void;
  onRemoveItem(id: number): void;
}

class ToDoItemsContainer extends React.Component<Props> {
  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleChange() {
    const { changeStatusItem, toDoItem } = this.props;

    changeStatusItem(toDoItem.id);
  }

  handleRemoveItem() {
    const { onRemoveItem, toDoItem } = this.props;

    onRemoveItem(toDoItem.id);
  }

  render(): React.ReactNode {
    const props = {
      toDoItem: this.props.toDoItem,
      handleChange: this.handleChange,
      handleRemove: this.handleRemoveItem,
    };
    return <ToDoItems {...props} />;
  }
}

export default ToDoItemsContainer;
