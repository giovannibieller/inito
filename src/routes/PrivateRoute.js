import React from 'react';
import { Navigate } from 'react-router-dom';
import { routeObjectPropTypes } from '@utils/proptypes';

import urls from './routes.urls';

const PrivateRoute = ({ children }) => {
  const { accessToken } = localStorage;
  return accessToken ? children : <Navigate to={urls.login} />;
};

PrivateRoute.propTypes = routeObjectPropTypes;

export default PrivateRoute;
