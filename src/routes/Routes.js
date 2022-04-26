import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Head from '@components/Head/Head';

import routes from './routes.config';

const Loader = <div>Loading...</div>;

const childRoutes = () => {
  return routes.map(r => {
    const { name, description, path, Layout, Component, AuthComponent } = r;
    return (
      <Route
        key={`${name}`}
        path={path || null}
        exact={typeof path !== 'undefined'}
        element={
          <AuthComponent>
            <Head title={name.toUpperCase()} description={description || ''} />
            <Layout>
              <Suspense fallback={Loader}>
                <Component route={name} />
              </Suspense>
            </Layout>
          </AuthComponent>
        }
      ></Route>
    );
  });
};

const AppRoutes = () => {
  return (
    <Router>
      {/* <Switch>{childRoutes()}</Switch> */}
      <Routes>{childRoutes()}</Routes>
    </Router>
  );
};

export default AppRoutes;
