import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '@routes/routes.config.js';
import Styles from './Header.styles.js';

const Header = () => {
	const { classes } = Styles;

	const renderLinks = () => {
		return routes
			.filter(el => el.isInMenu)
			.map(route => {
				return (
					<NavLink
						key={route.name}
						to={route.path}
						exact={true}
						activeStyle={{
							textDecoration: 'none',
							fontWeight: 'bold'
						}}
						className={classes.link}
					>
						{route.name}
					</NavLink>
				);
			});
	};

	return <header className={classes.container}>{renderLinks()}</header>;
};

export default Header;
