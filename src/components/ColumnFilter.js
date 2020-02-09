import React from 'react'
import { SelectField } from 'react-md'

const ColumnFilter = ({ className, column, onSelectionChange, controls }) => (
  <div className={`md-grid ${className}`}>
    <SelectField
      value={column}
      id='column-filter'
      name="status-filter"
      menuItems={controls}
      label="Order by Columns:"
      className="md-cell md-cell--12"
      position={SelectField.Positions.BELOW}
      onChange={(value) => onSelectionChange(value, 'column')}
    />
  </div>
)

export default ColumnFilter
