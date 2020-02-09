import React from 'react'
import SearchBar from './SearchBar'
import StatusFilter from './StatusFilter'
import ColumnFilter from './ColumnFilter'
import SortDirection from './SortDirection'

const CustomerHeader = (props) => {
  const {
    order,
    status,
    column,
    search,
    onChange,
    orderControls,
    statusControls,
    columnControls,
    onSelectionChange
  } = props

  return (
    <div className='md-grid md-cell--12 filters'>

      <SearchBar
        value={search}
        onChange={onChange}
        className='md-grid searchBar md-cell--4'
      />
      <StatusFilter
        status={status}
        controls={statusControls}
        onSelectionChange={onSelectionChange}
        className='md-cell--2 filter_status'
      />
      <ColumnFilter
        column={column}
        controls={columnControls}
        onSelectionChange={onSelectionChange}
        className='md-cell--2 filter_column'
      />
      <SortDirection
        order={order}
        controls={orderControls}
        onSelectionChange={onSelectionChange}
        className='md-cell--2 filter_order'
      />
    </div>
  )
}

export default CustomerHeader
