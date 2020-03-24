import React from 'react';
import Routes from '@routes/Routes';

import { initJSS, createJSS } from '@utils';
import Styles from '@styles/globals';

import './lang/i18n';

initJSS();
createJSS(Styles);

const App = () => <Routes />;

export default App;
