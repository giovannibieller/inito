import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routeObjectPropTypes } from '@utils/proptypes';

import urls from './routes.urls';

const PrivateRoute = props => {
  const { accessToken } = localStorage;
  if (!accessToken) return <Redirect to={urls.Login} />;

  return <Route {...props} />;
};

PrivateRoute.propTypes = routeObjectPropTypes;

export default PrivateRoute;
