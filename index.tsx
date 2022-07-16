/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './src/styles/styles.scss';
import { reducer } from './src/reducer';
import Main from './src/main';

const store = createStore(reducer, composeWithDevTools());

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element | DocumentFragment);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
);
