import React from 'react';

import { routePropTypes, childrenPropTypes } from '@utils/proptypes';
import Header from '@components/Header/Header';

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

Layout.propTypes = { ...routePropTypes, ...childrenPropTypes };

export default Layout;
