import React, { PureComponent } from 'react'
import {
  Paper
} from 'react-md'
import CustomerHeader from '../components/CustomerHeader'
import CustomerList from '../components/CustomerList';

const checkboxControls = [
  {
    label: 'Active',
    value: 'ACTIVE'
  },
  {
    label: 'Regisering',
    value: 'REGISTERING',
  }
]

class Customers extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      status: '',
      order: 'asc'
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
    this.setState({ search })
  }

  handleExpansionExpand = (expanded) => {
    if (!expanded) {
      this.setState({ status: '' })
    }
  }

  handleSelectionControl = (status, e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ status })
  }

  handleRowClick = (id)  => {
    console.log('id: ', id)
  }

  render() {
    const { search, status } = this.state

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
            status={status}
            search={search}
            controls={checkboxControls}
            onChange={this.handleInputChange}
            onExpandChange={this.handleExpansionExpand}
            onSelectionChange={this.handleSelectionControl}
          />
          <CustomerList
            onRowClick={this.handleRowClick}
          />
        </Paper>
      </div>
    </div>
    )
  }
}

export default Customers