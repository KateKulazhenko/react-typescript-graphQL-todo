import { Action } from 'redux';
import { toDoItemTypes } from './toDoItemsTypes';

export type State = {
  toDoList: toDoItemTypes[];
  index: number;
};

export interface AddItemAction extends Action {
  type: 'ADD_ITEM';
  payload: {
    text: string;
  };
}

export interface RemoveItemAction extends Action {
  type: 'REMOVE_ITEM';
  payload: {
    id: number;
  };
}

export interface ChangeStatusItemAction extends Action {
  type: 'CHANGE_STATUS_ITEM';
  payload: {
    id: number;
  };
}

export type ToDoActions = AddItemAction &
  RemoveItemAction &
  ChangeStatusItemAction;
