import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavItemLink = ({ label, to, icon, exact }) => (
  <Route path={to} exact={exact}>
    {({ match, location }) => {
      let leftIcon
      const isAbout = to === '/about'
      const isRoot = location.pathname === '/' && isAbout
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>
      }

      return (
        <ListItem
          to={to}
          component={Link}
          primaryText={label}
          leftIcon={leftIcon}
          active={!!match || isRoot}
        />
      );
    }}
  </Route>
);

NavItemLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  exact: PropTypes.bool,
  icon: PropTypes.node,
};
export default NavItemLink