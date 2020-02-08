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
    orderControls,
    statusControls,
    columnControls,
    onChange,
    onExpandChange,
    onSelectionChange
  } = props

  return (
    <div className='md-grid'>

      <SearchBar
        value={search}
        onChange={onChange}
        className='md-grid searchBar md-cell--12 about_sub__header'
      />
      <StatusFilter
        status={status}
        controls={statusControls}
        onExpandChange={onExpandChange}
        onSelectionChange={onSelectionChange}
        className='md-cell--4 about_sub__header'
      />
      <ColumnFilter
        column={column}
        controls={columnControls}
        onExpandChange={onExpandChange}
        onSelectionChange={onSelectionChange}
        className='md-cell--4 about_sub__header'
      />
      <SortDirection
        column={order}
        controls={orderControls}
        onExpandChange={onExpandChange}
        onSelectionChange={onSelectionChange}
        className='md-cell--4 about_sub__header'
      />
    </div>
  )
}

export default CustomerHeader
