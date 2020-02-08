import React from 'react'
import { SelectionControlGroup } from 'react-md'

const StatusFilter = ({ status, onExpandChange, onSelectionChange, controls, className }) => (
  <div className={`md-grid ${className}`}>
    <span className='md-cell--3 searchLabel'>Filter by Status:</span>
    <SelectionControlGroup
      type='radio'
      value={status}
      id='status-filter'
      name="status-filter"
      controls={controls}
      onChange={(value, e) => onSelectionChange(value, e, 'status')}
    />
  </div>
)

export default StatusFilter
