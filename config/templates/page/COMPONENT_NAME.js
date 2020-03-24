import React from 'react';
import { routePropTypes } from '@utils/proptypes';

import Styles from './COMPONENT_NAME.styles';

const COMPONENT_NAME = () => {
	const { classes } = Styles;

	return <div className={classes.container}>Page component</div>;
};

COMPONENT_NAME.propTypes = routePropTypes;

export default COMPONENT_NAME;
