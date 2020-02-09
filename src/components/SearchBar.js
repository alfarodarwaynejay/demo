import React from 'react'
import {
  TextField
} from 'react-md'

const SearchBar = ({ className, onChange, value }) => (
  <div className={className} >
    <TextField
      id='search'
      value={value}
      onChange={onChange}
      placeholder='Seach Customer...'
      className="md-cell--12 md-cell--bottom"
    />
  </div>
)

export default SearchBar
