import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routeObjectPropTypes } from '@utils/proptypes';

import { saveToken } from '@utils';
import urls from './routes.urls';

const PrivateRoute = props => {
	if (!localStorage.accessToken) return <Redirect to={urls.Login} />;

	const { accessToken } = localStorage;
	saveToken(accessToken);

	return <Route {...props} />;
};

PrivateRoute.propTypes = routeObjectPropTypes;

export default PrivateRoute;
