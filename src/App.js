import React from 'react';
import Routes from '@routes/Routes';

import injectSheet from 'react-jss';

import GlobalStyles from '@styles/globals';

import './lang/i18n';

const App = () => <Routes />;

export default injectSheet(GlobalStyles)(App);
