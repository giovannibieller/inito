import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes.config';

const Loader = <div>Loading...</div>;

const childRoutes = () => {
  return routes.map(r => {
    const { name, path, Layout, Component, AuthComponent } = r;
    console.log('name', name);
    return (
      <Route
        key={`${name}`}
        path={path || null}
        exact={typeof path !== 'undefined'}
        element={
          <AuthComponent>
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
  console.log('iin routes');
  return (
    <Router>
      {/* <Switch>{childRoutes()}</Switch> */}
      <Routes>{childRoutes()}</Routes>
    </Router>
  );
};

export default AppRoutes;
