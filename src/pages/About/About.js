import React from 'react';
import { routePropTypes } from '@utils/proptypes';
import { INITO_DESCRIPTION } from '@utils/helpers';

import Head from '@components/Head/Head';

const About = () => {
  return (
    <div>
      <Head title="ABOUT" description={INITO_DESCRIPTION} />
      About
    </div>
  );
};

About.propTypes = routePropTypes;

export default About;
