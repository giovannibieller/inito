import React from 'react';
import { createRoot } from 'react-dom/client';

import { create } from 'jss';
import { JssProvider } from 'react-jss';
import globalPlugin from 'jss-global';
import camelCase from 'jss-plugin-camel-case';

const jss = create();
jss.use(globalPlugin(), camelCase());

import App from '@app/App';

const container = document.getElementById('app');
const root = createRoot(container);

console.log('RouteComponent', 'in');

root.render(
  <JssProvider jss={jss}>
    <App />
  </JssProvider>
);
