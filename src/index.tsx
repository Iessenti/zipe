import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';

import store from './store';

import 'rsuite/dist/styles/rsuite-default.css';

import 'fonts.css';
import 'assets/sass/index.sass';
import 'assets/sass/profilePopup.sass';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
