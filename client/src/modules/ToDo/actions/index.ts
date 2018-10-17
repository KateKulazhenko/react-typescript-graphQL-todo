import { createActions } from 'redux-actions';

export const { addItem, removeItem, changeStatusItem } = createActions({
  ADD_ITEM: (text: string) => ({ text }),
  REMOVE_ITEM: (id: number) => ({ id }),
  CHANGE_STATUS_ITEM: (id: number) => ({ id }),
});
