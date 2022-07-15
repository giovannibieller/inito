import React from 'react';
import { routePropTypes } from '@utils/proptypes';
import { INITO_DESCRIPTION } from '@utils/helpers';

import LayoutAuth from '@layouts/LayoutAuth';

import Head from '@components/Head/Head';
import PageContainer from '@components/PageContainer/PageContainer';

const Login = () => {
  return (
    <LayoutAuth>
      <Head title="LOGIN" description={INITO_DESCRIPTION} />
      <PageContainer>LOGIN</PageContainer>
    </LayoutAuth>
  );
};

Login.propTypes = routePropTypes;

export default Login;
