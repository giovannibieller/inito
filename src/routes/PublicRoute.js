import React from 'react';
import { Route } from 'react-router-dom';
import { routeObjectPropTypes } from '@utils/proptypes';

const PublicRoute = props => {
	return <Route {...props} />;
};

PublicRoute.propTypes = routeObjectPropTypes;

export default PublicRoute;
