import React from 'react';
import { routePropTypes } from '@utils/proptypes';
import { INITO_DESCRIPTION } from '@utils/helpers';

import Head from '@components/Head/Head';
import TestApiCall from '@components/TestApiCall/TestApiCall';

const Dashboard = () => {
  return (
    <div>
      <Head title="DASHBOARD" description={INITO_DESCRIPTION} />
      Dashboard
      <TestApiCall />
    </div>
  );
};

Dashboard.propTypes = routePropTypes;

export default Dashboard;
