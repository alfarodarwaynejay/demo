import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavigationDrawer } from 'react-md'
import { Route, Switch } from 'react-router-dom'

import Customers from './Customers'
import { navItems } from '../defaults'
import About from '../components/About'
import capitalize from 'lodash/capitalize'
import NavigationLink from '../components/NavigationLink'

class App extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)

    this.state = {
      toolbarTitle: this.getCurrentTitle()
    }
  }

  componentDidUpdate() {
    this.setState({
      toolbarTitle: this.getCurrentTitle()
    })
  }

  getCurrentTitle = () => {
    const { location: { pathname } } = this.props
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1)
    return capitalize(lastSection || 'about')
  }

  render() {
    const { toolbarTitle } = this.state
    const { location } = this.props
    return (
      <NavigationDrawer
        toolbarTitle={toolbarTitle}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        navItems={navItems.map(props => <NavigationLink {...props} key={props.to} />)}
        contentId="main-demo-content"
        contentStyle={{ minHeight: 'auto' }}
        contentClassName="md-grid"
      >
        <Switch key={location.pathname}>
          <Route path={navItems[0].to} component={About} />
          <Route path={navItems[1].to} component={Customers} />

          {/* default route */}
          <Route path={'/'} exact component={About} />
        </Switch>
      </NavigationDrawer>
    )
  }
}
export default withRouter(App)
