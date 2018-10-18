import { combineReducers } from 'redux';

import toDoReducer from '../modules/ToDo/reducers';

const rootReducers = combineReducers({ todo: toDoReducer } as any);

export default rootReducers;
