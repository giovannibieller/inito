import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = props => {
  const { title, description } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name={description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Head;
