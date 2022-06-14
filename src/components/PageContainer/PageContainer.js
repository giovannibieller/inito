import React from 'react';
import PropTypes from 'prop-types';

import * as classes from './PageContainer.module.css';

const PageContainer = props => {
  return <div className={classes.container}>{props.children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.any
};

export default PageContainer;
