import React from 'react';
import ReactDOM from 'react-dom';

import { create } from 'jss';
import { JssProvider } from 'react-jss';
import globalPlugin from 'jss-global';
import camelCase from 'jss-plugin-camel-case';

const jss = create();
jss.use(globalPlugin(), camelCase());

import App from '@app/App';

ReactDOM.render(
  <JssProvider jss={jss}>
    <App />
  </JssProvider>,
  document.getElementById('app')
);
