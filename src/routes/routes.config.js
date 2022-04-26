import React from 'react';

import Layout from '@layouts/Layout';
import LayoutNoLang from '@layouts/LayoutNoLang';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Login = React.lazy(() => import('../pages/Login/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));
const About = React.lazy(() => import('../pages/About/About'));
const Page404 = React.lazy(() => import('../pages/Page404/Page404'));

import urls from './routes.urls';

const routes = [
  {
    name: 'dashboard',
    Component: Dashboard,
    Layout: Layout,
    path: urls.Dashboard,
    AuthComponent: PrivateRoute,
    isInMenu: true
  },
  {
    name: 'login',
    Component: Login,
    Layout: LayoutNoLang,
    path: urls.Login,
    AuthComponent: PublicRoute,
    isInMenu: false
  },
  {
    name: 'about',
    Component: About,
    Layout: Layout,
    path: urls.About,
    AuthComponent: PrivateRoute,
    isInMenu: true
  },
  {
    name: '404',
    Component: Page404,
    Layout: Layout,
    AuthComponent: PublicRoute,
    isInMenu: false
  }
];

export default routes;
