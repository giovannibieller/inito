import React from 'react';
import { routePropTypes } from '@utils/proptypes';

import useStyles from './COMPONENT_NAME.styles';

const COMPONENT_NAME = () => {
	const classes = useStyles();

	return <div className={classes.container}>Page component</div>;
};

COMPONENT_NAME.propTypes = routePropTypes;

export default COMPONENT_NAME;
