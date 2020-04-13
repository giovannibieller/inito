import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './COMPONENT_NAME.styles';

const COMPONENT_NAME = props => {
  const classes = useStyles();

  return <div className={classes.container}>new component</div>;
};

COMPONENT_NAME.propTypes = {};

export default COMPONENT_NAME;
