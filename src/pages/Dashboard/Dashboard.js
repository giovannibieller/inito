import React from 'react';

import { routePropTypes } from '@utils/proptypes';

import PageContainer from '@components/PageContainer/PageContainer';
import TestApiCall from '@components/TestApiCall/TestApiCall';

const Dashboard = props => {
  return (
    <PageContainer {...props}>
      Dashboard
      <TestApiCall />
    </PageContainer>
  );
};

Dashboard.propTypes = routePropTypes;

export default Dashboard;
