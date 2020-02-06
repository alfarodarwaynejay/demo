import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { FontIcon, ListItem } from 'react-md';

const NavItemLink = ({ label, to, icon, exact }) => (
  <Route path={to} exact={exact}>
    {({ match, location }) => {
      let leftIcon
      const isRoot = location.pathname === '/' && to === '/about'
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>
      }

      return (
        <ListItem
          component={Link}
          active={!!match || isRoot}
          to={to}
          primaryText={label}
          leftIcon={leftIcon}
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