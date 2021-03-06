import React, { PureComponent } from 'react'
import { Paper } from 'react-md'
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import CustomerList from '../components/CustomerList'
import CustomerHeader from '../components/CustomerHeader'

import {
  HideModal,
  GetGridList,
  ClearDetails,
  GetItemDetails
} from '../redux/actions'

import {
  gridDefaults,
  selectionDefault
} from '../defaults'

const {
  orderControls = [],
  statusControls = [],
  columnControls = []
} = selectionDefault

class Customers extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { ...gridDefaults }
  }

  componentDidMount() {
    const { dispatch, store, match: { params } } = this.props
    dispatch(GetGridList(this.state))

    if (store.details && !params.id) {
      dispatch(ClearDetails())
    }
  }

  handleInputChange = (search, e) => {
    e.preventDefault()
    e.stopPropagation()
    const { dispatch } = this.props
    const state = { ...this.state, search }

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

  handleSelectionChange = (value, id, checked) => {
    const { dispatch } = this.props
    const { filter, ...restState } = this.state
    if (id === 'status') {
      if (checked) {
        value = [...filter.status, value]
      } else {
        value = filter.status.filter(item => item !== value)
      }
    }

    const state = {
      ...restState,
      filter: {
        ...filter,
        [id]: value
      }
    }
    this.setState(state, () => dispatch(GetGridList(state)))
  }

  handleRowClick = (data) => {
    const { history, dispatch } = this.props
    const { id } = data
    dispatch(GetItemDetails({
      data,
      callBack: () => history.push(`/customers/${id}`)
    }))
  }

  handleOnHide = (modal) => {
    const { dispatch } = this.props
    if (modal) {
      dispatch(HideModal())
      return
    }
  }

  render() {
    const { store = {} } = this.props
    const {
      search,
      filter: {
        status,
        order,
        column
      }
    } = this.state

    return (
      <div className='md-grid' style={{ justifyContent: 'center' }}>
        <div className='md-cell--10'>
          <Paper
            key='paper'
            zDepth={3}
            className='papers__example md-grid customer_list'
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
              grid={store.grid}
              onRowClick={this.handleRowClick}
            />
            <Modal
              onHide={() => this.handleOnHide('modal')}
              message={store.errors && store.errors.message}
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