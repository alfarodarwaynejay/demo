import React, { PureComponent } from 'react'
import { Paper } from 'react-md'
import { connect } from 'react-redux'
import CustomerHeader from '../components/CustomerHeader'
import CustomerList from '../components/CustomerList'

import {
  GetGridList,
  GetItemDetails
} from '../redux/actions'

import {
  orderControls,
  statusControls,
  columnControls
} from '../defaults/selectionDefaults'

class Customers extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      filter: {
        status: '',
        column: '',
        order: 'asc'
      }
    }
  }

  componentDidUpdate() {
    const { match, history } = this.props
    if (match.params.id === ':id') {
      history.push('/customers')
    }
  }

  handleInputChange = (search, e) => {
    e.preventDefault()
    e.stopPropagation()
    const { dispatch } = this.props
    const state = { ...this.state, search}

    this.setState(state, () => dispatch(GetGridList(state)))
  }

  handleExpansionExpand = (expanded, id) => {
    const { dispatch } = this.props
    const { filter, ...restState } = this.state

    if (!expanded) {
      const state = {
        ...restState,
        filter: {
          ...filter,
          [id]: ''
        }
      }
      this.setState(state, () => dispatch(GetGridList(state)))
    }
  }

  handleSelectionChange = (value, e, id) => {
    e.preventDefault()
    e.stopPropagation()

    const { dispatch } = this.props
    const { filter, ...restState } = this.state
    const state = {
      ...restState,
      filter: {
        ...filter,
        [id]: value
      }
    }
    this.setState(state, () => dispatch(GetGridList(state)))
  }

  handleRowClick = (id)  => {
    const { history, location } = this.props
    console.log('id: ', id)
    history.push(`${location.pathname}/${id}`)
  }

  render() {
    const { store } = this.props
    const {
      search,
      filter: {
        status,
        order,
        column
      }
    } = this.state
    // this.props
    console.log('this.props: ', this.props);

    return (
      <div className='md-grid' style={{ justifyContent: 'center'}}>
      <div className='md-cell--10'>
        <Paper
          key='paper'
          zDepth={3}
          className='papers__example md-grid'
        >
          <h1 className='demo__header'>Customers List</h1>
          <CustomerHeader
            order={order}
            status={status}
            search={search}
            column={column}
            orderControls={orderControls}
            columnControls={columnControls}
            statusControls={statusControls}
            onChange={this.handleInputChange}
            onExpandChange={this.handleExpansionExpand}
            onSelectionChange={this.handleSelectionChange}
          />
          <CustomerList
            store={store}
            onRowClick={this.handleRowClick}
          />
        </Paper>
      </div>
    </div>
    )
  }
}

export default connect(
  ({ setInitialReducers }) => ({ store: { ...setInitialReducers } }),
  null
)(Customers)