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
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent<any>) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render(): any {
    const props = {
      handleSubmit: this.handleSubmit,
    };
    return null;
  }
}

export default ToDoAddItemContainer;
