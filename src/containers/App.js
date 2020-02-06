import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { NavigationDrawer } from 'react-md'

import NavigationLink from '../components/NavigationLink'
import About from '../components/About'
import Customers from './Customers'
import CustomerDetails from './CustomerDetails'
import capitalize from 'lodash/capitalize'

const navItems = [
  {
    label: 'About',
    to: '/about',
    exact: true,
    icon: 'info_outline',
  },
  {
    label: 'Customers',
    to: '/customers/:id?',
    exact: false,
    icon: 'face',
  }
]

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
        defaultVisible
      >
        <Switch key={location.pathname}>
          <Route path={navItems[0].to} component={About} />
          <Route path={navItems[1].to} component={Customers} />
          <Route path={`/customers/:id?`} component={CustomerDetails} />

          {/* default route */}
          <Route path={'/'} exact component={About} />
        </Switch>
      </NavigationDrawer>
    )
  }
}
export default withRouter(App)
