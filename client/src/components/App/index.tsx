import * as React from 'react';
import { Provider } from 'react-redux';

import ToDoPage from '../../pages/ToDoPage';

import store from '../../store';

const App = () => {
  return (
    <Provider store={store}>
      <ToDoPage />
    </Provider>
  );
};

export default App;
