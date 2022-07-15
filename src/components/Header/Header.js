import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Languages from '@lang/languages.js';

import * as classes from './Header.module.css';

const routes = [
  { name: 'dashboard', path: '/' },
  { name: 'about', path: '/about' }
];

const Header = props => {
  const { t, i18n } = useTranslation();
  const { noLang } = props;

  const renderLinks = () => {
    return routes.map(route => {
      return (
        <NavLink key={route.name} to={route.path} className={classes.link}>
          {t(route.name)}
        </NavLink>
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
