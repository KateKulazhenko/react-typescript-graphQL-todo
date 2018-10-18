import { handleActions } from 'redux-actions';

import { addItem, removeItem, changeStatusItem } from '../actions';
import { State, ToDoActions } from '../../../reducers/reduxTypes';

const defaultState: any = {
  toDoItems: [],
  index: 0,
};

const toDoReducer = handleActions(
  {
    [addItem.toString()]: (state: any, action: ToDoActions) => {
      const newItem: any = {
        id: state.index + 1,
        text: action.payload.text,
        isDone: false,
      };

      return {
        ...state,
        toDoItems: [...state.toDoItems, newItem],
        index: state.index + 1,
      };
    },
    [changeStatusItem.toString()]: (state: any, action: ToDoActions) => {
      const newToDoItems = state.toDoItems.map((item: any) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
        return item;
      });

      return {
        ...state,
        toDoItems: newToDoItems,
      };
    },
    [removeItem.toString()]: (state: any, action: ToDoActions) => {
      return {
        ...state,
        toDoItems: state.toDoItems.filter(
          (item: any) => item.id !== action.payload.id,
        ),
      };
    },
  },
  defaultState,
);

export default toDoReducer;
