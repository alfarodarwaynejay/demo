import React from 'react'
import { SelectField } from 'react-md'

const StatusFilter = ({ status, onSelectionChange, controls, className }) => (
  <div className={`md-grid ${className}`}>
    <SelectField
      value={status}
      id='status-filter'
      name="status-filter"
      placeholder="Status"
      menuItems={controls}
      label="Filter by Status:"
      className="md-cell md-cell--12"
      position={SelectField.Positions.BELOW}
      onChange={(value) => onSelectionChange(value, 'status')}
    />
  </div>
)


export default StatusFilter
