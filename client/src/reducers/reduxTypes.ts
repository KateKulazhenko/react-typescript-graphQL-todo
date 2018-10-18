import { Action } from 'redux';
import { toDoItemsTypes } from './toDoItemsTypes';

export type State = {
  todo: {
    toDoItems: toDoItemsTypes[];
    index: number;
  };
};

export interface AddItemAction extends Action {
  type: string;
  payload: {
    text: string;
  };
}

export interface RemoveItemAction extends Action {
  type: string;
  payload: {
    id: number;
  };
}

export interface ChangeStatusItemAction extends Action {
  type: string;
  payload: {
    id: number;
  };
}

export type ToDoActions = AddItemAction &
  RemoveItemAction &
  ChangeStatusItemAction;
