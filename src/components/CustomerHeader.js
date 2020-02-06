import React from 'react'
import SearchBar from './SearchBar'
import StatusFilter from './StatusFilter'

const CustomerHeader = (props) => {
  const {
    status,
    search,
    controls,
    onChange,
    onExpandChange,
    onSelectionChange
  } = props

  return (
    <>
      <StatusFilter
        status={status}
        controls={controls}
        onExpandChange={onExpandChange}
        onSelectionChange={onSelectionChange}
      />
      <SearchBar
        value={search}
        onChange={onChange}
        className='md-cell--8 about_sub__header'
      />
    </>
  )
}

export default CustomerHeader
