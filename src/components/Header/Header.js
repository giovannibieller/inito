import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import routes from '@routes/routes.config.js';
import Languages from '@lang/languages.js';
import useStyles from './Header.styles.js';

const Header = props => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const { noLang } = props;

  const renderLinks = () => {
    return routes
      .filter(el => el.isInMenu)
      .map(route => {
        return (
          <Link
            key={route.name}
            to={route.path}
            exact={true}
            activeStyle={{
              textDecoration: 'underline'
            }}
            className={classes.link}
          >
            {t(route.name)}
          </Link>
        );
      });
  };

  const changeLang = lang => {
    i18n.changeLanguage(lang);
    localStorage.chosenLanguage = lang;
  };

  const renderLangSwitcher = () => {
    return Languages.map(el => {
      const langClasses =
        i18n.language === el ? `${classes.link} ${classes.linkActive}` : classes.link;
      return (
        <a
          key={el}
          href="#"
          className={langClasses}
          onClick={e => {
            e.preventDefault();
            changeLang(el);
          }}
        >
          {t(`lang.${el}`)}
        </a>
      );
    });
  };

  return (
    <header className={classes.container}>
      <div>{renderLinks()}</div>
      {!noLang && <div>{renderLangSwitcher()}</div>}
    </header>
  );
};

Header.propTypes = {
  noLang: PropTypes.bool
};

export default Header;
