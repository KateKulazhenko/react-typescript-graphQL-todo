import * as React from 'react';

import ToDoAddItem from '../views/ToDoAddItem';

interface Props {
  onSubmit(text: string): void;
}

interface State {
  value: string;
}

class ToDoAddItemContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
  }

  private inputRef: React.RefObject<HTMLInputElement>;

  handleSubmit(e: React.FormEvent<any>) {
    e.preventDefault();
    this.props.onSubmit(this.inputRef.current.value);
    this.inputRef.current.value = '';
  }

  render(): any {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newItem"
          placeholder="Add new ToDo item"
          required={true}
          ref={this.inputRef}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ToDoAddItemContainer;
