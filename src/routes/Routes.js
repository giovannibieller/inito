import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from './routes.config';

const Loader = <div>Loading...</div>;

const childRoutes = () => {
	return routes.map((r, i) => {
		const { name, path, Layout, Component, RouteComponent } = r;
		return (
			<RouteComponent
				key={`${name}_${i}`}
				path={path || null}
				exact={typeof path !== 'undefined'}
				render={props => {
					return (
						<Layout {...props}>
							<Suspense fallback={Loader}>
								<Component route={name} {...props} />
							</Suspense>
						</Layout>
					);
				}}
			/>
		);
	});
};

const Routes = () => (
	<Router>
		<Switch>{childRoutes()}</Switch>
	</Router>
);

export default Routes;
