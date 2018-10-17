import { handleActions } from 'redux-actions';

import { addItem, removeItem, changeStatusItem } from '../actions';
import { State, ToDoActions } from '../../../reducers/reduxTypes';
import { toDoItemTypes } from '../../../reducers/toDoItemsTypes';

const defaultState: State = {
  toDoList: [],
  index: 0,
};

export default handleActions({
  [addItem.toString()]: (state: State, action: ToDoActions) => {
    const newItem: toDoItemTypes = {
      id: state.index + 1,
      text: action.payload.text,
      isDone: false,
    };

    return {
      ...state,
      toDoList: [...state.toDoList, newItem],
      index: state.index + 1,
    };
  },
  [removeItem.toString()]: (state: State, action: ToDoActions) => {
    return {
      ...state,
      toDoList: state.toDoList.filter(
        (toDoItem: toDoItemTypes) => toDoItem.id != action.payload.id,
      ),
    };
  },
  defaultState,
});
