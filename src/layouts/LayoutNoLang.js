import React from 'react';

import { routePropTypes, childrenPropTypes } from '@utils/proptypes';
import Header from '@components/Header/Header';

const LayoutNoLang = props => {
	return (
		<div>
			<Header noLang />
			{props.children}
		</div>
	);
};

LayoutNoLang.propTypes = { ...routePropTypes, ...childrenPropTypes };

export default LayoutNoLang;
