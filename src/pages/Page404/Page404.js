import React from 'react';
import { routePropTypes } from '@utils/proptypes';
import { INITO_DESCRIPTION } from '@utils/helpers';

import Head from '@components/Head/Head';

const Page404 = () => {
  return (
    <div>
      <Head title="404 | PAGE NOT FOUND" description={INITO_DESCRIPTION} />
      404
    </div>
  );
};

Page404.propTypes = routePropTypes;

export default Page404;
