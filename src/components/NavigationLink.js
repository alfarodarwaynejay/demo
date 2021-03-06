import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import { FontIcon, ListItem, Tooltipped } from 'react-md';

const NavItemLink = ({ label, to, icon, exact, root }) => (
  <Route path={to} exact={exact}>
    {({ match, location }) => {
      let leftIcon
      const isCustomer = to === root
      const isRoot = location.pathname === '/' && isCustomer
      if (icon) {
        leftIcon = <FontIcon>{icon}</FontIcon>
      }

      return (
        <Tooltipped
          label={label}
          position="right"
          setPosition
        >
          <ListItem
            to={to}
            component={Link}
            primaryText={label}
            leftIcon={leftIcon}
            active={!!match || isRoot}
          />
        </Tooltipped>
      )
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