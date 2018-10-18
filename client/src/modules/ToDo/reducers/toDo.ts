import { handleActions } from 'redux-actions';

import { addItem, removeItem, changeStatusItem } from '../actions';
import { State, ToDoActions } from '../../../reducers/reduxTypes';
import { toDoItemTypes } from '../../../reducers/toDoItemsTypes';

const defaultState: State = {
  toDoList: [],
  index: 0,
};

const toDoReducer = handleActions(
  {
    [addItem.toString()]: (state: State, action: ToDoActions) => {
      const newItem: any = {
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
    [changeStatusItem.toString()]: (state: State, action: ToDoActions) => {
      const newToDo = state.toDoList.map((toDoItem: any) => {
        if (toDoItem.id === action.payload.id) {
          return {
            ...toDoItem,
            isDone: !toDoItem.isDone,
          };
        }
        return toDoItem;
      });

      return {
        ...state,
        toDoList: newToDo,
      };
    },
    [removeItem.toString()]: (state: State, action: ToDoActions) => {
      return {
        ...state,
        toDoList: state.toDoList.filter(
          (toDoItem: any) => toDoItem.id !== action.payload.id,
        ),
      };
    },
  },
  defaultState,
);

export default toDoReducer;
