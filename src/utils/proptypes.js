import PropTypes from 'prop-types';

const childrenPropTypes = {
  children: PropTypes.object
};

const routePropTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  location: PropTypes.object,
  route: PropTypes.string
};

const routeObjectPropTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  render: PropTypes.func,
  location: PropTypes.object,
  computedMatch: PropTypes.object
};

export { childrenPropTypes, routePropTypes, routeObjectPropTypes };
