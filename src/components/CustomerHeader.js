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
    <>
      <StatusFilter
        status={status}
        controls={statusControls}
        onExpandChange={onExpandChange}
        onSelectionChange={onSelectionChange}
      />
      <SearchBar
        value={search}
        onChange={onChange}
        className='md-cell--8 about_sub__header'
      />
      <ColumnFilter
        column={column}
        controls={columnControls}
        onExpandChange={onExpandChange}
        onSelectionChange={onSelectionChange}
      />
      <SortDirection
        column={order}
        controls={orderControls}
        onExpandChange={onExpandChange}
        onSelectionChange={onSelectionChange}
      />
    </>
  )
}

export default CustomerHeader
