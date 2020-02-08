import React from 'react'
import { SelectionControlGroup } from 'react-md'

const ColumnFilter = ({ className, column, onExpandChange, onSelectionChange, controls }) => (
  <div className={`md-grid ${className}`}>
    <span className='md-cell--3 searchLabel'>Order by Column:</span>
    <SelectionControlGroup
      // inline
      type='radio'
      value={column}
      id='column-filter'
      name="column-filter"
      controls={controls}
      onChange={(value, e) => onSelectionChange(value, e, 'column')}
    />
  </div>
)

export default ColumnFilter