import React from 'react';

import Layout from '@layouts/Layout';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Login = React.lazy(() => import('../pages/Login/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'));
const About = React.lazy(() => import('../pages/About/About'));
const Page404 = React.lazy(() => import('../pages/Page404/Page404'));

import urls from './routes.urls';

const routes = [
	{
		name: 'Dashboard',
		Component: Dashboard,
		Layout: Layout,
		path: urls.Dashboard,
		RouteComponent: PrivateRoute,
		isInMenu: true
	},
	{
		name: 'Login',
		Component: Login,
		Layout: Layout,
		path: urls.Login,
		RouteComponent: PublicRoute,
		isInMenu: false
	},
	{
		name: 'About',
		Component: About,
		Layout: Layout,
		path: urls.About,
		RouteComponent: PrivateRoute,
		isInMenu: true
	},
	{
		name: '404',
		Component: Page404,
		Layout: Layout,
		RouteComponent: PublicRoute,
		isInMenu: false
	}
];

export default routes;
