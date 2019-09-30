import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux';
import Grid from './Grid';

import '../styles/app.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Grid />
      </div>
    </Provider>
  );
}

export default App;
