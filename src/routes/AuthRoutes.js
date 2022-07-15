import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@layouts/Layout';
import PrivateRoute from '@routes/PrivateRoute';

import Dashboard from '@pages/Dashboard/Dashboard';
import About from '@pages/About/About';
import Page404 from '@pages/Page404/Page404';

import PageContainer from '@components/PageContainer/PageContainer';

import urls from './routes.urls';

const AuthRoutes = () => {
  return (
    <Layout>
      <PrivateRoute>
        <PageContainer>
          <Routes>
            <Route path={urls.dashboard} element={<Dashboard />}></Route>
            <Route path={urls.about} element={<About />}></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </PageContainer>
      </PrivateRoute>
    </Layout>
  );
};

export default AuthRoutes;
