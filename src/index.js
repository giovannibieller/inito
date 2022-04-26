import React from 'react';
import { createRoot } from 'react-dom/client';

import { create } from 'jss';
import { JssProvider } from 'react-jss';
import globalPlugin from 'jss-global';
import camelCase from 'jss-plugin-camel-case';
import nested from 'jss-plugin-nested';

const jss = create();
jss.use(globalPlugin(), camelCase(), nested());

import App from '@app/App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <JssProvider jss={jss}>
    <App />
  </JssProvider>
);
