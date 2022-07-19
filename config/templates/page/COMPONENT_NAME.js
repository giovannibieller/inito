import React from 'react';
import { routePropTypes } from '@utils/proptypes';

import * as classes from './COMPONENT_NAME.module.css';

const COMPONENT_NAME = props => {
  return <div className={classes.container}>Page component</div>;
};

COMPONENT_NAME.propTypes = routePropTypes;

export default COMPONENT_NAME;
