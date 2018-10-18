import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toDoItemTypes } from '../../reducers/toDoItemsTypes';
import { State } from '../../reducers/reduxTypes';
import * as actionCreators from '../../modules/ToDo/actions';

import ToDoAddItem from '../../modules/ToDo/containers/ToDoAddItemContainer';
import ToDoList from '../../modules/ToDo/containers/ToDoListContainer';

interface StateProps {
  toDoItems: toDoItemTypes[];
}

interface DispatchProps {
  addItem(text: string): void;
  removeItem(id: number): void;
  changeStatusItem(id: number): void;
}

type Props = StateProps & DispatchProps;

class ToDoPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleAddNewItem = this.handleAddNewItem.bind(this);
    this.handleItemStatusChanged = this.handleItemStatusChanged.bind(this);
  }

  handleAddNewItem(text: string) {
    this.props.addItem(text);
  }

  handleremoveItem(id: number) {
    const { removeItem } = this.props;
    removeItem(id);
  }

  handleItemStatusChanged(id: number) {
    const { changeStatusItem } = this.props;
    changeStatusItem(id);
  }

  render() {
    console.log(this.props);
    return (
      <main>
        <ToDoAddItem onSubmit={this.handleAddNewItem} />
        {/* <ToDoList toToItem={this.props.toDoItems} /> */}
      </main>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  toDoItems: state.toDoList,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoPage);
