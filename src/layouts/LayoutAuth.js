import React from 'react';

import { routePropTypes, childrenPropTypes } from '@utils/proptypes';

const LayoutAuth = props => {
  return <div>{props.children}</div>;
};

LayoutAuth.propTypes = { ...routePropTypes, ...childrenPropTypes };

export default LayoutAuth;
