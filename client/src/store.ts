import { Store, createStore } from 'redux';
import rootReducers from './reducers';

import { State } from './reducers/reduxTypes';

export default createStore(rootReducers);
