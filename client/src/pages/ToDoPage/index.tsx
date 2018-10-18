import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toDoItemsTypes } from '../../reducers/toDoItemsTypes';
import { State } from '../../reducers/reduxTypes';
import * as actionCreators from '../../modules/ToDo/actions';

import ToDoAddItem from '../../modules/ToDo/containers/ToDoAddItemContainer';
import ToDoListContainer from '../../modules/ToDo/containers/ToDoListContainer';

interface StateProps {
  toDoItems: toDoItemsTypes[];
}

interface DispatchProps {
  actions: any;
}

type Props = StateProps & DispatchProps;

class ToDoPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleAddNewItem = this.handleAddNewItem.bind(this);
  }

  handleAddNewItem(text: string) {
    this.props.actions.addItem(text);
  }

  render() {
    return (
      <main>
        <ToDoAddItem onSubmit={this.handleAddNewItem} />
        <ToDoListContainer
          toDoItems={this.props.toDoItems}
          handleChange={this.props.actions.changeStatusItem}
          handleRemove={this.props.actions.removeItem}
        />
      </main>
    );
  }
}

const mapStateToProps = (state: any): StateProps => {
  return { toDoItems: state.todo.toDoItems };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoPage);
