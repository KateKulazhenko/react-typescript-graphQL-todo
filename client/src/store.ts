import { Store, createStore } from 'redux';
import rootReducers from './reducers';

import { State } from './reducers/reduxTypes';

export default createStore(
  rootReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
