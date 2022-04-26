import { routeObjectPropTypes } from '@utils/proptypes';

const PublicRoute = ({ children }) => {
  console.log('children', children);
  return children;
};

PublicRoute.propTypes = routeObjectPropTypes;

export default PublicRoute;
