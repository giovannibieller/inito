import React from 'react';
import PropTypes from 'prop-types';

import * as classes from './Button.module.css';

const Button = ({ label }) => {
  return <button className={classes.container}>{label || 'BUTTON'}</button>;
};

Button.propTypes = {
  label: PropTypes.string
};

export default Button;
