import React from 'react';
import { routePropTypes } from '@utils/proptypes';
import { useTranslation } from 'react-i18next';

const Dashboard = props => {
	const { t } = useTranslation();
	const { route } = props;
	return <div>{t(route)}</div>;
};

Dashboard.propTypes = routePropTypes;

export default Dashboard;
