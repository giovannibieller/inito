import React from 'react';
import { routePropTypes } from '@utils/proptypes';
import { useTranslation } from 'react-i18next';

const About = props => {
	const { t } = useTranslation();
	const { route } = props;
	return <div>{t(route)}</div>;
};

About.propTypes = routePropTypes;

export default About;
