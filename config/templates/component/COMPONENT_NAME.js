import React from 'react';
import PropTypes from 'prop-types';

import Styles from './COMPONENT_NAME.styles';

const COMPONENT_NAME = props => {
	const { classes } = Styles;

	return <div className={classes.container}>new component</div>;
};

COMPONENT_NAME.propTypes = {};

export default COMPONENT_NAME;
