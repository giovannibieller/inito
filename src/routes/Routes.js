import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@layouts/Layout';

import Login from '@pages/Login/Login';
import Page404 from '@pages/Page404/Page404';

import urls from './routes.urls';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return (
    <Router>
      {/* <Switch>{childRoutes()}</Switch> */}
      <Routes>
        <Route path={urls.login} element={<Login />}></Route>
        <Route path={urls.authRoutes} element={<AuthRoutes />}></Route>
        <Route
          path="*"
          element={
            <Layout>
              <Page404 />
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
