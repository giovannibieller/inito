import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './PageContainer.styles';

const PageContainer = props => {
  const classes = useStyles();

  return <div className={classes.container}>{props.children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.any
};

export default PageContainer;
