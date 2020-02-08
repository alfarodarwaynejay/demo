import React, { PureComponent } from 'react'
import { Paper } from 'react-md'
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import CustomerList from '../components/CustomerList'
import CustomerHeader from '../components/CustomerHeader'

import {
  HideModal,
  GetGridList,
  GetItemDetails
} from '../redux/actions'

import {
  gridDefaults,
  selectionDefault
} from '../defaults'

const {
  orderControls,
  statusControls,
  columnControls
} = selectionDefault

class Customers extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { ...gridDefaults }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(GetGridList(this.state))
  }

  // componentWillMount() {
  //   const { dispatch } = this.props
  //   dispatch(GetGridList(this.state))
  // }

  // componentDidUpdate() {
  //   const { dispatch, store, history, match: { params } } = this.props
  //   console.log('@@@DidUpdate: ', this.props)

  //   if (params.id === ':id') {
  //     history.push('/customers')
  //   }

  //   if (params.id && !store.details && store.grid.list.length) {
  //     const data = store.grid.list.find(cust => cust.id === params.id)
  //     dispatch(GetItemDetails({
  //       data,
  //       callBack: () => history.push(`/customers/${params.id}`)
  //     }))
  //   }
  // }

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

  handleRowClick = (data) => {
    const { history, dispatch } = this.props
    const { id } = data
    dispatch(GetItemDetails({
      data,
      callBack: () => history.push(`/customers/${id}`)
    }))
  }

  handleOnHide = (modal) => {
    const { dispatch, history } = this.props
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
              grid={store.grid}
              onRowClick={this.handleRowClick}
            />
            <Modal
              errors={store.errors}
              onHide={() => this.handleOnHide('modal')}
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