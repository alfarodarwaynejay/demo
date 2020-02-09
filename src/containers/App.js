import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { NavigationDrawer } from 'react-md'
import { Route, Switch } from 'react-router-dom'

import Customers from './Customers'
import { navItems } from '../defaults'
import About from '../components/About'
import capitalize from 'lodash/capitalize'
import CustomeDetails from './CustomerDetails'
import NavigationLink from '../components/NavigationLink'

import {
  ClearDetails
} from '../redux/actions'

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
    const {
      store = {},
      location: { pathname }
    } = this.props

    const { personalDetails: { legalName } = {} } = store.details || {}
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1)
    return !store.details ? capitalize(lastSection || 'customers') : legalName
  }

  onHide = () => {
    const { history, dispatch } = this.props
    history.push('/customers')
    dispatch(ClearDetails())
  }

  render() {
    const { toolbarTitle } = this.state
    const { location, store } = this.props

    return (
      <NavigationDrawer
        contentClassName="md-grid"
        toolbarTitle={toolbarTitle}
        contentId="main-demo-content"
        contentStyle={{ minHeight: 'auto' }}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        navItems={navItems.map(props => (
          <NavigationLink {...props} key={props.to} root='/customers' />
        )
        )}
      >
        <Switch key={location.pathname}>
          <Route path={navItems[0].to} exact component={Customers} />
          <Route path={navItems[1].to} component={About} />
          <Route path={`${navItems[0].to}/:id?`} component={CustomeDetails} />

          {/* default route */}
          <Route path={'/'} component={Customers} />
        </Switch>
      </NavigationDrawer>
    )
  }
}

const withRoute = withRouter(App)
export default connect(
  ({ setInitialReducers }) => ({ store: { ...setInitialReducers } }),
  null
)(withRoute)
