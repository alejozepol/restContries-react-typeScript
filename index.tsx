/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './src/styles/styles.scss';
import { reducer } from './src/reducer';
import Main from './src/main';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
