import React from 'react';

import { routePropTypes } from '@utils/proptypes';

import PageContainer from '@components/PageContainer/PageContainer';

const About = props => {
  return <PageContainer {...props}>About</PageContainer>;
};

About.propTypes = routePropTypes;

export default About;
