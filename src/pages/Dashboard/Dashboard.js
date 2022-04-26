import React from 'react';

import { routePropTypes } from '@utils/proptypes';

import PageContainer from '@components/PageContainer/PageContainer';

const Dashboard = props => {
  return <PageContainer {...props}>Dashboard</PageContainer>;
};

Dashboard.propTypes = routePropTypes;

export default Dashboard;
